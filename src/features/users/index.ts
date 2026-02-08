export type UserProfile = {
  id: string;
  name: string;
  email: string;
  status: "active" | "disabled";
};

export const sampleUsers: UserProfile[] = [
  {
    id: "user_1",
    name: "Asha Patel",
    email: "asha@kashstudio.com",
    status: "active"
  }
];
