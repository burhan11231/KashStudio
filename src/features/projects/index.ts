export type OwnershipModel = "licensed" | "full-copyright";

export type Project = {
  id: string;
  title: string;
  ownership: OwnershipModel;
  price: number;
  hidden: boolean;
};

export const ownershipRules: Record<OwnershipModel, string> = {
  licensed: "Reviews enabled. Multiple buyers allowed.",
  "full-copyright": "Exclusive sale. Auto-hidden after purchase."
};
