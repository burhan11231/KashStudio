export type AuthRole = "client" | "developer" | "admin";

export type AuthProfile = {
  uid: string;
  email: string;
  role: AuthRole;
  emailVerified: boolean;
};

export const authDefaults: AuthProfile = {
  uid: "demo",
  email: "demo@kashstudio.com",
  role: "client",
  emailVerified: false
};
