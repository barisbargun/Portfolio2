"use client"
 
import { z } from "zod"

const emailText = "Please enter a correct email address"
const minText = "Please enter at least 5 characters.";
const maxText = "Please enter maximum 120 characters.";
const maxTextMsg = "Please enter maximum 300 characters.";
 
export const formSchema = z.object({
  name: z.string().min(5,minText).max(120,maxText),
  email: z.string().min(5,minText).max(120,maxText).email(emailText),
  message: z.string().min(5,minText).max(300,maxTextMsg),
})