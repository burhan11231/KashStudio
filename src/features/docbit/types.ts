export type DocbitToolId =
  | "scan"
  | "image-to-pdf"
  | "pdf-to-images"
  | "merge-pdf"
  | "split-pdf"
  | "resize-compress";

export type ProcessingStatus = "idle" | "processing" | "done" | "failed";

export type DocbitFile = {
  id: string;
  file: File;
  previewUrl: string;
  type: "image" | "pdf";
  size: number;
};

export type ProcessingTask = {
  id: string;
  tool: DocbitToolId;
  status: ProcessingStatus;
  progress: number;
  message: string;
};

export type ExportSettings = {
  pageSize: "A4" | "A3" | "A5" | "Letter" | "Passport" | "Custom";
  orientation: "portrait" | "landscape" | "auto" | "mixed";
  margin: number;
  compression: "high" | "medium" | "low";
  background: string;
};
