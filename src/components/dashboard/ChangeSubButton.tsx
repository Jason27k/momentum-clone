"use client";

import { patchSub } from "@/actions/subscription";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface SubmitProps {
  text?: string;
}

function Submit({ text }: SubmitProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? "Loading" : text ? text : "Submit"}
    </Button>
  );
}

export function ChangeSubButton({ text }: SubmitProps) {
  const handleSub = async () => {
    await patchSub();
  };

  return (
    <form action={handleSub}>
      <Submit text={text ? text : undefined} />
    </form>
  );
}
