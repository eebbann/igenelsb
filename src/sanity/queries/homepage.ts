// lib/getHomePage.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomePage() {
	const getPageQuery = groq`
    *[_type == "page" && slug.current == "home"][0] {
      slug,
      "hero": pageBuilder[][_type == "heroType"][0] {
        heading,
        subheading,
        slug,
        "heroImage": image.asset->url,
        "altText": image.alt
      },"logoTicker": pageBuilder[][_type == "logoTicker"][0] {
      logos[] {
        "src": image.asset->url,
        alt
      }
    } 
    }
  `;

	return await client.fetch(getPageQuery, {
		revalidate: new Date().getSeconds(), // Revalidate the data every 60 seconds
	});
}
