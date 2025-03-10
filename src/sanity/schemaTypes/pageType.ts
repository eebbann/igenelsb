import { defineArrayMember, defineField, defineType } from "sanity";
import { heroType } from "./heroType";

const pageType = defineType({
	name: "page",
	title: "Page",
	type: "document", // This schema is a document (one per page)
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "string",
			title:"slug"
		}),
		defineField({
			name: "pageBuilder",
			type: "array",
			title: "Page Builder",
			of: [
				defineArrayMember({
					name: "hero", // Here we use the correct reference to heroType
					type: "heroType", // Reference the heroType instead of "hero"
				}),
			],
		}),
	],
});

export default pageType;
