"use client";

import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface FormField {
	name: string;
	type: string;
	required: boolean;
	placeholder?: string;
	options?: string[];
}

interface ContactFormProps {
	formFields: FormField[];
}

export const ContactForm = ({ formFields }: ContactFormProps) => {
	const [formData, setFormData] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleInputChange = (fieldName: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to submit form");
			}

			setSubmitStatus("success");
			setFormData({});
		} catch (error) {
			console.error("Contact form error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const renderField = (field: FormField) => {
		const { name, type, required, placeholder, options } = field;

		switch (type) {
			case "textarea":
				return (
					<textarea
						name={name}
						required={required}
						placeholder={placeholder}
						value={formData[name] || ""}
						onChange={(e) => handleInputChange(name, e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
						rows={4}
					/>
				);

			case "select":
				return (
					<select
						name={name}
						required={required}
						value={formData[name] || ""}
						onChange={(e) => handleInputChange(name, e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					>
						<option value="">{placeholder || "Select an option"}</option>
						{options?.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				);

			default:
				return (
					<input
						type={type}
						name={name}
						required={required}
						placeholder={placeholder}
						value={formData[name] || ""}
						onChange={(e) => handleInputChange(name, e.target.value)}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
					/>
				);
		}
	};

	return (
		<div className="bg-white p-8 rounded-xl shadow-lg">
			<h2 className="text-2xl font-bold text-gray-900 mb-6">
				Send us a Message
			</h2>

			<form onSubmit={handleSubmit} className="space-y-6">
				{formFields.map((field) => (
					<div key={field.name}>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							{field.name.charAt(0).toUpperCase() + field.name.slice(1)}
							{field.required && <span className="text-red-500 ml-1">*</span>}
						</label>
						{renderField(field)}
					</div>
				))}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
				>
					{isSubmitting ? (
						<>
							<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
							<span>Sending...</span>
						</>
					) : (
						<>
							<PaperAirplaneIcon className="w-5 h-5" />
							<span>Send Message</span>
						</>
					)}
				</button>

				{submitStatus === "success" && (
					<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
						<p className="text-green-800">
							Thank you! Your message has been sent successfully.
						</p>
					</div>
				)}

				{submitStatus === "error" && (
					<div className="p-4 bg-red-50 border border-red-200 rounded-lg">
						<p className="text-red-800">
							Sorry, there was an error sending your message. Please try again.
						</p>
					</div>
				)}
			</form>
		</div>
	);
};
