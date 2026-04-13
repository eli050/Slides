
export const STAGES = {
  SIGN_IN_STAGE: "sign-in",
  SIGN_UP_STAGE: "sign-up",
} as const;

export type User = {
    name: string;
    email: string;
    password: string;
};