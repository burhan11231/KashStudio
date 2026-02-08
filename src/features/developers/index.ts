export type DeveloperStatus = "pending" | "approved" | "suspended";

export type DeveloperProfile = {
  id: string;
  studioName: string;
  status: DeveloperStatus;
  portfolioUrl?: string;
};

export const developerStatusLabels: Record<DeveloperStatus, string> = {
  pending: "Pending",
  approved: "Approved",
  suspended: "Suspended"
};
