export type Dispute = {
  id: string;
  orderId: string;
  reason: string;
  status: "open" | "resolved";
};
