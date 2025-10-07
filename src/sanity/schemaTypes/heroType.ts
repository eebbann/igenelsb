import { defineField, defineType } from "sanity";

const heroType = defineType({
	name: "heroType",
	title: "Hero Section",
	type: "object",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Hero Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subtitle",
			type: "text",
			title: "Hero Subtitle",
		}),
		defineField({
			name: "backgroundImage",
			type: "image",
			title: "Background Image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "ctaText",
			type: "string",
			title: "Call to Action Text",
		}),
		defineField({
			name: "ctaLink",
			type: "url",
			title: "Call to Action Link",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "backgroundImage",
		},
	},
});

export default heroType;
