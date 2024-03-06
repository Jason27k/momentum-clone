"use server";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Subscription() {
    return <div className="">Settings</div>;
  },
  { returnTo: "/dashboard/settings" }
);
