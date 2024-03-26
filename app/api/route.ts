import { StatusCodes } from "http-status-codes";
import { mailOptions, transporter } from "@/lib/nodemailer/index";
import { sendResponse } from "@/lib/utils";
import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  if (
    process.env.NODE_ENV != "development" &&
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    const ratelimit = new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(5, "15m"),
    });
    const ip = req.ip ?? "127.0.0.1"

    const { limit, reset, remaining } = await ratelimit.limit(ip);
    if (remaining == 0) {
      return new Response("You have reached your request limit for the day.", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      });
    }
  }

  try {
    const { email, name, message } = await req.json();
    if (!email || !name || !message) return sendResponse(StatusCodes.LOCKED, "All fields required.")
    await transporter.sendMail(mailOptions(email, name, message));
    return sendResponse(StatusCodes.OK)
  } catch (err: any) {
    console.log(err)
    return sendResponse(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}