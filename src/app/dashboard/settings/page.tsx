"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store";

const Subscription = () => {
  const setPage = useUserStore((state) => state.setPage);
  const user = useUserStore((state) => state.user);
  setPage("settings");
  return <div className=""></div>;
};

export default Subscription;
