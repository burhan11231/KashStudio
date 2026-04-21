"use client";

import { createContext, useContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react";
import type { DocbitFile, DocbitToolId, ExportSettings, ProcessingTask } from "../types";

type DocbitState = {
  activeTool: DocbitToolId | null;
  files: DocbitFile[];
  tasks: ProcessingTask[];
  settings: ExportSettings;
};

type DocbitAction =
  | { type: "set_tool"; tool: DocbitToolId | null }
  | { type: "set_files"; files: DocbitFile[] }
  | { type: "add_files"; files: DocbitFile[] }
  | { type: "remove_file"; id: string }
  | { type: "reorder_files"; from: number; to: number }
  | { type: "set_setting"; key: keyof ExportSettings; value: ExportSettings[keyof ExportSettings] }
  | { type: "push_task"; task: ProcessingTask }
  | { type: "update_task"; id: string; patch: Partial<ProcessingTask> };

const initialState: DocbitState = {
  activeTool: null,
  files: [],
  tasks: [],
  settings: {
    pageSize: "A4",
    orientation: "auto",
    margin: 16,
    compression: "medium",
    background: "#ffffff"
  }
};

function reducer(state: DocbitState, action: DocbitAction): DocbitState {
  switch (action.type) {
    case "set_tool":
      return { ...state, activeTool: action.tool, files: [] };
    case "set_files":
      return { ...state, files: action.files };
    case "add_files":
      return { ...state, files: [...state.files, ...action.files] };
    case "remove_file":
      return { ...state, files: state.files.filter((file) => file.id !== action.id) };
    case "reorder_files": {
      const cloned = [...state.files];
      const [moved] = cloned.splice(action.from, 1);
      cloned.splice(action.to, 0, moved);
      return { ...state, files: cloned };
    }
    case "set_setting":
      return { ...state, settings: { ...state.settings, [action.key]: action.value } };
    case "push_task":
      return { ...state, tasks: [action.task, ...state.tasks].slice(0, 8) };
    case "update_task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, ...action.patch } : task
        )
      };
    default:
      return state;
  }
}

const DocbitStoreContext = createContext<{
  state: DocbitState;
  dispatch: Dispatch<DocbitAction>;
} | null>(null);

export function DocbitStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <DocbitStoreContext.Provider value={value}>{children}</DocbitStoreContext.Provider>;
}

export function useDocbitStore() {
  const context = useContext(DocbitStoreContext);
  if (!context) {
    throw new Error("useDocbitStore must be used inside DocbitStoreProvider");
  }
  return context;
}
