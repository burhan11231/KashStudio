"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { docbitTools } from "../config";
import { useProcessingQueue } from "../hooks/use-processing-queue";
import { useDocbitStore } from "../hooks/use-docbit-store";

export function Workspace() {
  const { state, dispatch } = useDocbitStore();
  const { enqueueExport } = useProcessingQueue();
  const [sheetOpen, setSheetOpen] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activeTool = useMemo(
    () => docbitTools.find((tool) => tool.id === state.activeTool),
    [state.activeTool]
  );

  if (!activeTool || !state.activeTool) {
    return null;
  }

  const onFilesAdded = (files: FileList | null) => {
    if (!files?.length) {
      return;
    }

    dispatch({
      type: "add_files",
      files: Array.from(files).map((file) => ({
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        type: file.type.includes("pdf") ? "pdf" : "image",
        size: file.size
      }))
    });
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121821] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
        <div>
          <button
            className="text-xs text-slate-400 hover:text-white"
            onClick={() => dispatch({ type: "set_tool", tool: null })}
          >
            ← Back to tools
          </button>
          <h2 className="mt-1 text-lg font-semibold text-white">{activeTool.title}</h2>
        </div>
        <button
          className="rounded-xl border border-blue-400/40 bg-blue-500/20 px-3 py-2 text-xs text-blue-200"
          onClick={() => enqueueExport(state.activeTool!)}
        >
          Export
        </button>
      </div>

      <div className="grid min-h-[55vh] gap-0 lg:grid-cols-[1fr_320px]">
        <div className="relative p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-slate-400">Real-time preview</p>
            <button
              className="rounded-lg border border-white/15 px-2 py-1 text-xs text-slate-300"
              onClick={() => inputRef.current?.click()}
            >
              Add files
            </button>
          </div>

          {state.files.length === 0 ? (
            <div className="grid h-[45vh] place-items-center rounded-2xl border border-dashed border-white/20 bg-black/20 text-sm text-slate-400">
              Drop files here or tap "Add files".
            </div>
          ) : (
            <div className="grid max-h-[60vh] gap-3 overflow-auto pr-2 sm:grid-cols-2">
              {state.files.map((item, index) => (
                <motion.article
                  key={item.id}
                  layout
                  className="rounded-2xl border border-white/10 bg-black/20 p-3"
                >
                  <div className="flex items-center justify-between pb-2 text-[11px] text-slate-400">
                    <span>Page {index + 1}</span>
                    <button
                      className="text-rose-300"
                      onClick={() => dispatch({ type: "remove_file", id: item.id })}
                    >
                      remove
                    </button>
                  </div>
                  {item.type === "image" ? (
                    <img
                      src={item.previewUrl}
                      alt={item.file.name}
                      className="h-48 w-full rounded-xl object-cover"
                    />
                  ) : (
                    <iframe src={item.previewUrl} className="h-48 w-full rounded-xl bg-white" />
                  )}
                  <p className="mt-2 truncate text-xs text-slate-300">{item.file.name}</p>
                </motion.article>
              ))}
            </div>
          )}
        </div>

        <div className="border-l border-white/10 bg-[#0b0f14] p-4">
          <button
            className="mb-3 w-full rounded-xl border border-white/15 px-3 py-2 text-left text-sm text-white"
            onClick={() => setSheetOpen((value) => !value)}
          >
            Controls {sheetOpen ? "▾" : "▸"}
          </button>
          <AnimatePresence initial={false}>
            {sheetOpen && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <SettingSelect
                  label="Page size"
                  value={state.settings.pageSize}
                  options={["A4", "A3", "A5", "Letter", "Passport", "Custom"]}
                  onChange={(value) => dispatch({ type: "set_setting", key: "pageSize", value })}
                />
                <SettingSelect
                  label="Orientation"
                  value={state.settings.orientation}
                  options={["portrait", "landscape", "auto", "mixed"]}
                  onChange={(value) => dispatch({ type: "set_setting", key: "orientation", value })}
                />
                <SettingSelect
                  label="Compression"
                  value={state.settings.compression}
                  options={["high", "medium", "low"]}
                  onChange={(value) => dispatch({ type: "set_setting", key: "compression", value })}
                />
                <label className="block text-xs text-slate-300">
                  Margin: {state.settings.margin}px
                  <input
                    className="mt-2 w-full"
                    type="range"
                    min={0}
                    max={48}
                    value={state.settings.margin}
                    onChange={(event) =>
                      dispatch({ type: "set_setting", key: "margin", value: Number(event.target.value) })
                    }
                  />
                </label>
                <label className="block text-xs text-slate-300">
                  Background
                  <input
                    className="mt-2 block h-9 w-full rounded"
                    type="color"
                    value={state.settings.background}
                    onChange={(event) =>
                      dispatch({ type: "set_setting", key: "background", value: event.target.value })
                    }
                  />
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 space-y-2">
            {state.tasks.map((task) => (
              <div key={task.id} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <p className="text-xs text-white">{task.tool}</p>
                <p className="mt-1 text-[11px] text-slate-400">{task.message}</p>
                <div className="mt-2 h-1.5 rounded bg-white/10">
                  <div className="h-1.5 rounded bg-blue-400" style={{ width: `${task.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={activeTool.accepts}
        multiple
        className="hidden"
        onChange={(event) => onFilesAdded(event.target.files)}
      />
    </section>
  );
}

function SettingSelect({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: any) => void;
}) {
  return (
    <label className="block text-xs text-slate-300">
      {label}
      <select
        className="mt-2 w-full rounded-xl border border-white/10 bg-[#121821] p-2 text-white"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
