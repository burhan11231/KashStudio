import type { DocbitToolId } from "./types";

export const docbitTools: {
  id: DocbitToolId;
  title: string;
  description: string;
  icon: string;
  accepts: string;
}[] = [
  {
    id: "scan",
    title: "Scan Document",
    description: "Capture pages with camera or upload from gallery.",
    icon: "📷",
    accepts: "image/*"
  },
  {
    id: "image-to-pdf",
    title: "Image → PDF",
    description: "Convert, arrange and export image stacks as PDFs.",
    icon: "🖼️",
    accepts: "image/*"
  },
  {
    id: "pdf-to-images",
    title: "PDF → Images",
    description: "Extract page previews and export as image set.",
    icon: "🧩",
    accepts: "application/pdf"
  },
  {
    id: "merge-pdf",
    title: "Merge PDF",
    description: "Combine multiple PDFs in custom order.",
    icon: "🔗",
    accepts: "application/pdf"
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    description: "Split all pages or custom ranges into separate files.",
    icon: "✂️",
    accepts: "application/pdf"
  },
  {
    id: "resize-compress",
    title: "Resize & Compress PDF",
    description: "Tune dimensions and quality with live processing status.",
    icon: "⚡",
    accepts: "application/pdf"
  }
];
