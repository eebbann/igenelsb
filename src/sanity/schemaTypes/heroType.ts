import { title } from 'process';
import { defineField, defineType } from 'sanity'

export const heroType = defineType({
					name: "heroType",
					title: "Hero",
					type: "object", // This schema is a document (one per page)
					fields: [
						// Hero Section
						defineField({
							name: "heading",
							type: "string",
						}),
						defineField({
							name: "subheading",
							type: "string",
						}),
						defineField({
							name: "slug",
							type: "string",
						}),
						defineField({
							name: "image", 
							type: "image", // Image field for the hero image
							options: {
								hotspot: true, },
							fields:[
								defineField({
									name:"alt",
									type:"string",
									title:"Alternative text"
								}),
							], 
						}),
					],

					preview:{
						select:{
							title:"heading",
							image:"image"
						},
						prepare({title}){
							return{
								title: title || "untitle",
								subtitle: title || "hero",

							}
						}
					}
				});