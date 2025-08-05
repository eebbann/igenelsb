import { defineField, defineType } from "sanity";

export default defineType({
	name: "teamMemberType",
	title: "Team Member",
	type: "object",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "position",
			title: "Position/Role",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Profile Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "text",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
		}),
		defineField({
			name: "socialMedia",
			title: "Social Media",
			type: "object",
			fields: [
				defineField({
					name: "linkedin",
					title: "LinkedIn",
					type: "url",
				}),
				defineField({
					name: "twitter",
					title: "Twitter",
					type: "url",
				}),
				defineField({
					name: "github",
					title: "GitHub",
					type: "url",
				}),
				defineField({
					name: "website",
					title: "Personal Website",
					type: "url",
				}),
			],
		}),
		defineField({
			name: "skills",
			title: "Skills/Expertise",
			type: "array",
			of: [{ type: "string" }],
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
			title: "name",
			subtitle: "position",
			media: "image",
		},
	},
});
