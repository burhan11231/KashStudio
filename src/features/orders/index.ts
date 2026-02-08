export type OrderStatus = "created" | "paid" | "failed";

export type Order = {
  id: string;
  projectId: string;
  status: OrderStatus;
  amount: number;
};

export const orderStatusLabels: Record<OrderStatus, string> = {
  created: "Created",
  paid: "Paid",
  failed: "Failed"
};
