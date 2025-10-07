import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json();

		if (!email) {
			return NextResponse.json(
				{ message: "Email is required" },
				{ status: 400 }
			);
		}

		// Mailchimp API configuration
		const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
		const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
		const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

		if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
			console.error("Missing Mailchimp environment variables");
			return NextResponse.json(
				{ message: "Newsletter service not configured" },
				{ status: 500 }
			);
		}

		// Prepare the data for Mailchimp
		const data = {
			email_address: email,
			status: "subscribed",
			merge_fields: {
				FNAME: "", // You can add first name if needed
				LNAME: "", // You can add last name if needed
			},
		};

		// Make request to Mailchimp API
		const response = await fetch(
			`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
			{
				method: "POST",
				headers: {
					Authorization: `apikey ${MAILCHIMP_API_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		const result = await response.json();

		if (!response.ok) {
			// Handle specific Mailchimp errors
			if (result.title === "Member Exists") {
				return NextResponse.json(
					{ message: "You are already subscribed to our newsletter!" },
					{ status: 200 }
				);
			}

			console.error("Mailchimp API error:", result);
			return NextResponse.json(
				{ message: "Failed to subscribe to newsletter" },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "Successfully subscribed to newsletter!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Newsletter subscription error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
