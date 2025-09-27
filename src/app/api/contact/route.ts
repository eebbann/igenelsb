import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, message } = body;

		// Validate required fields
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		// Create email transporter
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST || "smtp.gmail.com",
			port: parseInt(process.env.SMTP_PORT || "587"),
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		// Email to admin
		const adminMailOptions = {
			from: process.env.SMTP_USER,
			to: process.env.ADMIN_EMAIL,
			subject: `New Contact Form Submission from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, "<br>")}</p>
				<p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
			`,
		};

		// Auto-reply to user
		const userMailOptions = {
			from: process.env.SMTP_USER,
			to: email,
			subject: "Thank you for contacting I-Gene",
			html: `
				<h2>Thank you for your message!</h2>
				<p>Dear ${name},</p>
				<p>We have received your message and will get back to you soon.</p>
				<p><strong>Your message:</strong></p>
				<p>${message.replace(/\n/g, "<br>")}</p>
				<br>
				<p>Best regards,<br>The I-Gene Team</p>
			`,
		};

		// Send emails
		await Promise.all([
			transporter.sendMail(adminMailOptions),
			transporter.sendMail(userMailOptions),
		]);

		console.log("Contact form submission processed and emails sent:", {
			name,
			email,
			timestamp: new Date(),
		});

		return NextResponse.json(
			{ message: "Contact form submitted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
