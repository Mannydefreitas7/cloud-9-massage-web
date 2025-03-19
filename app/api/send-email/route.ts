import { NextResponse } from "next/server"
import { Resend } from "resend"
import { AppointmentConfirmation } from "../../../emails/appointment-confirmation";

// Initialize Resend with your API key
// In production, you would use an environment variable
const resend = new Resend("re_yourResendApiKey")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, date, time } = body

    // Validate required fields
    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required booking information" }, { status: 400 })
    }

    // Send email using Resend and React Email
    const { data, error } = await resend.emails.send({
      from: "Serenity Spa <appointments@yourdomain.com>",
      to: email,
      subject: "Your Appointment Confirmation",
      react: AppointmentConfirmation({
        name,
        service,
        date,
        time,
        confirmationNumber: Math.random().toString(36).substring(2, 10).toUpperCase(),
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send confirmation email" + error }, { status: 500 })
  }
}

