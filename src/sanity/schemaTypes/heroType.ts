import { defineType, defineField } from "sanity";

const heroType = defineType({
	name: "heroType",
	title: "Hero Section",
	type: "object", // ✅ This must be "object"
	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading",
		}),
		defineField({
			name: "subheading",
			type: "string",
			title: "Subheading",
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Hero Image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternative Text",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "heading",
			image: "image",
		},
		prepare({ title, image }) {
			return {
				title: title || "Untitled",
				subtitle: "Hero Section",
				media: image,
			};
		},
	},
});

export default heroType;  