export type WorkerTaskPayload = {
  taskId: string;
  tool: string;
  files: { name: string; type: string; buffer: ArrayBuffer }[];
  compression: number;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

self.onmessage = async (event: MessageEvent<WorkerTaskPayload>) => {
  const payload = event.data;

  const postProgress = (progress: number, message: string) => {
    self.postMessage({ taskId: payload.taskId, kind: "progress", progress, message });
  };

  try {
    postProgress(10, "Queued in processing engine");
    await sleep(150);
    postProgress(45, "Analyzing pages");
    await sleep(250);
    postProgress(75, "Applying compression profile");

    const processedFiles = await Promise.all(
      payload.files.map(async (item) => {
        if (!item.type.startsWith("image/")) {
          return item;
        }

        const blob = new Blob([item.buffer], { type: item.type });
        const bitmap = await createImageBitmap(blob);
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          return item;
        }

        ctx.drawImage(bitmap, 0, 0);
        const quality = Math.min(0.95, Math.max(0.45, payload.compression));
        const compressedBlob = await canvas.convertToBlob({
          type: "image/jpeg",
          quality
        });

        return {
          name: item.name.replace(/\.[^.]+$/, ".jpg"),
          type: "image/jpeg",
          buffer: await compressedBlob.arrayBuffer()
        };
      })
    );

    await sleep(200);
    postProgress(100, "Done");
    self.postMessage({ taskId: payload.taskId, kind: "done", files: processedFiles });
  } catch (error) {
    self.postMessage({
      taskId: payload.taskId,
      kind: "error",
      message: error instanceof Error ? error.message : "Unknown worker error"
    });
  }
};
