"use client";

import { useCallback, useEffect, useRef } from "react";
import { useDocbitStore } from "./use-docbit-store";
import type { DocbitToolId } from "../types";

export function useProcessingQueue() {
  const workerRef = useRef<Worker | null>(null);
  const { dispatch, state } = useDocbitStore();

  useEffect(() => {
    workerRef.current = new Worker(new URL("../workers/docbit.worker.ts", import.meta.url));

    workerRef.current.onmessage = (event) => {
      const data = event.data as
        | { taskId: string; kind: "progress"; progress: number; message: string }
        | { taskId: string; kind: "done"; files: { name: string; type: string; buffer: ArrayBuffer }[] }
        | { taskId: string; kind: "error"; message: string };

      if (data.kind === "progress") {
        dispatch({
          type: "update_task",
          id: data.taskId,
          patch: { status: "processing", progress: data.progress, message: data.message }
        });
      }

      if (data.kind === "done") {
        dispatch({
          type: "update_task",
          id: data.taskId,
          patch: { status: "done", progress: 100, message: "Export ready" }
        });

        data.files.forEach((item) => {
          const link = document.createElement("a");
          const blob = new Blob([item.buffer], { type: item.type });
          link.href = URL.createObjectURL(blob);
          link.download = item.name;
          link.click();
          URL.revokeObjectURL(link.href);
        });
      }

      if (data.kind === "error") {
        dispatch({
          type: "update_task",
          id: data.taskId,
          patch: { status: "failed", message: data.message }
        });
      }
    };

    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, [dispatch]);

  const enqueueExport = useCallback(
    async (tool: DocbitToolId) => {
      if (!workerRef.current || !state.files.length) {
        return;
      }

      const taskId = crypto.randomUUID();
      dispatch({
        type: "push_task",
        task: {
          id: taskId,
          tool,
          status: "processing",
          progress: 2,
          message: "Preparing payload"
        }
      });

      const files = await Promise.all(
        state.files.map(async ({ file }) => ({
          name: file.name,
          type: file.type,
          buffer: await file.arrayBuffer()
        }))
      );

      workerRef.current.postMessage({
        taskId,
        tool,
        files,
        compression: state.settings.compression === "high" ? 0.6 : state.settings.compression === "low" ? 0.9 : 0.75
      });
    },
    [dispatch, state.files, state.settings.compression]
  );

  return { enqueueExport };
}
