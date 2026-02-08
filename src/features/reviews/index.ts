export type Review = {
  id: string;
  projectId: string;
  rating: number;
  status: "pending" | "approved" | "rejected";
};

export const reviewPolicy = {
  licensedOnly: true,
  moderationRequired: true
};
