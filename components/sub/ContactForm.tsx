"use client";

import { CustomButton } from "../index";
import { Variants, motion } from "framer-motion";
import { contactPage } from "@/constants/index";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { sendEmail } from "@/lib/actions";
import { useToast } from "../ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const svgVariants: Variants = {
    show: {
      pathLength: 1,
      transition: {
        delay: 0.2,
        duration: 2,
      },
    },
    hidden: {
      pathLength: 0,
    },
  };

  const formVariants: Variants = {
    show: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await sendEmail(values);
    
    if (res?.status == 200)
      toast({
        title: "Message sent successfully",
        description: "I will promptly review it.",
      });
    else {
      toast({
        title: "An error happened",
        description: res?.message || "Please try again.",
        variant:"destructive"
      });
    }
  }

  return (
    <>
      {/** Animation SVG */}
      <motion.svg
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0, transition: { delay: 2.3, duration: 1 } }}
        viewport={{ once: true, amount: 0.2 }}
        className="pointer-events-none absolute h-[70%]"
        viewBox="0 0 32.666 32.666"
      >
        <motion.path
          stroke="rgb(79, 70, 229)"
          viewport={{ once: true, amount: 0.2 }}
          fill="none"
          variants={svgVariants}
          initial="hidden"
          whileInView="show"
          d={contactPage.svg}
          strokeWidth={0.2}
        ></motion.path>
      </motion.svg>

      <motion.div
        variants={formVariants}
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="show"
        className="w-full"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <input
                      autoComplete="name"
                      type="text"
                      placeholder="Enter your name.."
                      className="w-full rounded-md border-white p-2 text-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      autoComplete="email"
                      type="text"
                      placeholder="Enter your name.."
                      className="w-full rounded-md border-white p-2 text-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      rows={5}
                      placeholder="Enter your message.."
                      className="w-full rounded-md border-white p-2 text-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton className="button-white h-[50px] w-[130px]">
              Send
            </CustomButton>
          </form>
        </Form>
      </motion.div>
    </>
  );
};

export default ContactForm;
