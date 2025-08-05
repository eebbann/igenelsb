import { defineField, defineType } from "sanity";

export default defineType({
	name: "newsletterType",
	title: "Newsletter",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "buttonText",
			title: "Button Text",
			type: "string",
			initialValue: "Subscribe",
		}),
		defineField({
			name: "placeholder",
			title: "Email Input Placeholder",
			type: "string",
			initialValue: "Enter your email address",
		}),
	],
	preview: {
		select: {
			title: "title",
		},
	},
});
