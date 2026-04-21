"use client";

import { motion } from "framer-motion";
import { docbitTools } from "../config";
import { useDocbitStore } from "../hooks/use-docbit-store";
import { Workspace } from "./workspace";

export function DocbitApp() {
  const { state, dispatch } = useDocbitStore();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-10">
      <header className="rounded-3xl border border-white/10 bg-[#121821]/80 p-6 shadow-2xl backdrop-blur">
        <p className="text-xs uppercase tracking-[0.35em] text-blue-200/70">Docbit Platform</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">All your document tools in one smooth workspace</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-300">
          Mobile-first, real-time previews, and worker-backed processing queues for non-blocking operations.
        </p>
      </header>

      {!state.activeTool ? (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {docbitTools.map((tool) => (
            <motion.button
              key={tool.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-2xl border border-white/10 bg-[#121821]/90 p-4 text-left shadow-lg transition-all hover:border-[#4F9CF9]/60 hover:shadow-blue-500/20"
              onClick={() => dispatch({ type: "set_tool", tool: tool.id })}
            >
              <div className="text-2xl">{tool.icon}</div>
              <h3 className="mt-4 text-sm font-semibold text-white">{tool.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{tool.description}</p>
              <p className="mt-4 text-[11px] text-blue-300 opacity-0 transition-opacity group-hover:opacity-100">Open workspace →</p>
            </motion.button>
          ))}
        </section>
      ) : (
        <Workspace />
      )}
    </div>
  );
}
