import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: `CUSTOMER MESSAGE<${process.env.EMAIL_FROM}>`,
            to: [process.env.EMAIL_TO],
            subject: `New Customer Inquiry: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 10px; color: #333;">
                    <h2 style="color: #2c3e50;">New Customer Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
                </div>
            `,
        });

        return NextResponse.json({ status: 'success', data });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
