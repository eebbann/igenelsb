import { defineType, defineField, defineArrayMember } from "sanity";

const logoTicker = defineType({
	name: "logoTicker",
	title: "Logo Ticker",
	type: "object",
	fields: [
		defineField({
			name: "logos",
			type: "array",
			title: "Logos",
			of: [
				defineArrayMember({
					type: "image",
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
		}),
	],
});

export default logoTicker;
