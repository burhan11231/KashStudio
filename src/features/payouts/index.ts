export type PayoutStatus = "scheduled" | "processing" | "completed";

export type Payout = {
  id: string;
  developerId: string;
  amount: number;
  status: PayoutStatus;
};
