import { defineArrayMember, defineField, defineType } from "sanity";

const pageType = defineType({
	name: "page",
	title: "Page",
	type: "document", // This schema is a document (one per page)
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: { source: "title", maxLength: 96 },
		}),
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Page Builder",
			of: [
				defineArrayMember({
					type: "heroType",
				}),
				defineArrayMember({ type: "logoTicker" }),
			],
		}),
	],
});

export default pageType;
