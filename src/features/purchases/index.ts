export type Purchase = {
  id: string;
  projectId: string;
  userId: string;
  accessExpiresAt?: string;
};

export const purchasePolicy = {
  requiresEmailVerification: true,
  downloadViaCloudFunctionOnly: true
};
