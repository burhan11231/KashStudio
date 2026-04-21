"use client";

import { DocbitApp } from "./components/docbit-app";
import { DocbitStoreProvider } from "./hooks/use-docbit-store";

export function DocbitRoot() {
  return (
    <DocbitStoreProvider>
      <DocbitApp />
    </DocbitStoreProvider>
  );
}
