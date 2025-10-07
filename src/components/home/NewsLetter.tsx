"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface NewsletterProps {
	title?: string;
	description?: string;
	buttonText?: string;
	placeholder?: string;
}

export function NewsLetter({
	title = "Get I-Gene Updates",
	description = "Get up-to-date notifications about I-Gene events, including science fairs, interactive workshops, webinars, and educational programs. Stay informed about our initiatives in promoting quality education and reducing inequalities in the life sciences field.",
	buttonText = "Subscribe",
	placeholder = "Enter your email address",
}: NewsletterProps) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Mailchimp API integration
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				setSubmitStatus("success");
				setEmail("");
			} else {
				const error = await response.json();
				throw new Error(error.message || "Subscription failed");
			}
		} catch (error) {
			console.error("Newsletter subscription error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="h-[40rem] w-full rounded-md bg-primary-50 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent text-center font-sans font-bold">
					{title}
				</h1>
				<p className="relative z-10 text-center mt-4 text-neutral-900 max-w-lg mx-auto text-sm md:text-xl leading-relaxed">
					{description}
				</p>

				<form
					onSubmit={handleSubmit}
					className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
				>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={placeholder}
						required
						className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isSubmitting ? (
							<>
								<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
								Subscribing...
							</>
						) : (
							<>
								<PaperAirplaneIcon className="w-4 h-4 mr-2" />
								{buttonText}
							</>
						)}
					</button>
				</form>

				{submitStatus === "success" && (
					<div className="relative z-10 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
						<p className="text-green-800">
							Thank you for subscribing! You&apos;ll receive updates soon.
						</p>
					</div>
				)}

				{submitStatus === "error" && (
					<div className="relative z-10 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
						<p className="text-red-800">
							Sorry, there was an error. Please try again.
						</p>
				</div>
				)}
			</div>
			<BackgroundBeams className="opacity-20" />
		</div>
	);
}
