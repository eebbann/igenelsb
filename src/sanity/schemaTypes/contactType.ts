import { defineField, defineType } from "sanity";

export default defineType({
	name: "contactType",
	title: "Contact",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "text",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "contactInfo",
			title: "Contact Information",
			type: "object",
			fields: [
				defineField({
					name: "address",
					title: "Address",
					type: "text",
				}),
				defineField({
					name: "phone",
					title: "Phone",
					type: "string",
				}),
				defineField({
					name: "email",
					title: "Email",
					type: "string",
				}),
				defineField({
					name: "workingHours",
					title: "Working Hours",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "socialMedia",
			title: "Social Media Links",
			type: "object",
			fields: [
				defineField({
					name: "facebook",
					title: "Facebook",
					type: "url",
				}),
				defineField({
					name: "twitter",
					title: "Twitter",
					type: "url",
				}),
				defineField({
					name: "instagram",
					title: "Instagram",
					type: "url",
				}),
				defineField({
					name: "linkedin",
					title: "LinkedIn",
					type: "url",
				}),
			],
		}),
		defineField({
			name: "formFields",
			title: "Contact Form Fields",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Field Name",
							type: "string",
						}),
						defineField({
							name: "type",
							title: "Field Type",
							type: "string",
							options: {
								list: [
									{ title: "Text", value: "text" },
									{ title: "Email", value: "email" },
									{ title: "Phone", value: "tel" },
									{ title: "Textarea", value: "textarea" },
									{ title: "Select", value: "select" },
								],
							},
						}),
						defineField({
							name: "required",
							title: "Required",
							type: "boolean",
							initialValue: false,
						}),
						defineField({
							name: "placeholder",
							title: "Placeholder",
							type: "string",
						}),
						defineField({
							name: "options",
							title: "Options (for select fields)",
							type: "array",
							of: [{ type: "string" }],
							hidden: ({ parent }) => parent?.type !== "select",
						}),
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
	},
});
