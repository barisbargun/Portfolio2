import { type ClassValue, clsx } from "clsx"
import { StatusCodes } from "http-status-codes"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendResponse = (status:StatusCodes, message?:string) => {
    return new Response(message || "",{status});
}