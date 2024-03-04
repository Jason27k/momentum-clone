"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import ImageContainer from "./ImageContainer";
import FooterLinks from "./FooterLinks";

const emailSchema = z.object({
  email: z
    .string()
    .email()
    .min(2, {
      message: "Email is too short",
    })
    .max(50),
});

const onSubmit = (data: z.infer<typeof emailSchema>) => {
  console.log(data);
};

const Footer = () => {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <div className="bg-[#1B1B1B] py-28 w-screen flex flex-col items-center gap-20 justify-evenly">
      <div className="flex flex-col items-center gap-5 w-1/2 h-1/3">
        <h1 className="text-4xl font-bold w-full text-center">
          Get updates from Richard
        </h1>
        <p className="text-lg text-[#6b6b6b] w-full text-center">
          New course alerts, discounts and free lessons
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center mt-5 w-full max-w-[500px] max-h-[170px] sm:h-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full h-[70px] text-black">
                  <FormControl className="h-full">
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="rounded-b-none sm:rounded-r-none h-[70px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full sm:w-auto sm:min-w-[100px] bg-[#fc0a7e] h-[70px] rounded-t-none sm:rounded-l-none"
            >
              Subscribe
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-col items-center justify-between gap-16 h-1/3">
        <ImageContainer
          path="/footer/final.png"
          alt="Image of the logo"
          height={150}
          width={150}
        />
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
