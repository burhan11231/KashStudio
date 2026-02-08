import { useMemo } from "react";

import type { AuthRole } from "@/features/auth";

export function useCurrentRole(role?: AuthRole) {
  return useMemo(() => role ?? "client", [role]);
}
