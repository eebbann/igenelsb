import { defineField, defineType } from "sanity";

export default defineType({
	name: "serviceType",
	title: "Service/Feature",
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
			name: "icon",
			title: "Icon",
			type: "string",
			description: 'Icon name (e.g., "AcademicCapIcon", "UserGroupIcon")',
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "object",
			fields: [
				defineField({
					name: "text",
					title: "Link Text",
					type: "string",
				}),
				defineField({
					name: "url",
					title: "URL",
					type: "string",
				}),
			],
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "image",
		},
	},
});
