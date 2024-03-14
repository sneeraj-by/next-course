import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  await resend.emails.send({
    from: "www.yourdomain.com",
    to: "sneeraj.by@gmail.com",
    subject: "Your order received",
    react: <WelcomeTemplate name="Neeraj" />,
  });
  return NextResponse.json({});
}
