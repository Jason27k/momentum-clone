import { create } from "zustand";
import type { UserProfile } from "@auth0/nextjs-auth0/client";

export enum SubscriptionType {
  Free = "Free",
  Premium = "Premium",
}

export type UserState = {
  user: UserProfile | undefined;
  subscription: SubscriptionType;
  page: string;
};

export type UserActions = {
  setUser: (user: UserProfile | undefined) => void;
  setPage: (page: string) => void;
  setSubscription: (subscription: SubscriptionType) => void;
};

export type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()((set) => ({
  user: undefined,
  page: "",
  subscription: SubscriptionType.Free,
  setUser: (user: UserProfile | undefined) => set({ user }),
  setPage: (page: string) => set({ page }),
  setSubscription: (subscription: SubscriptionType) => set({ subscription }),
}));
