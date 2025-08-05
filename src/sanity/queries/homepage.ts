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
      },
			"logoTicker": pageBuilder[][_type == "logoTicker"][0] {
        logos[] {
          "src": image.asset->url,
          alt
        }
      },
      "services": pageBuilder[][_type == "serviceType"] | order(order asc) {
        title,
        description,
        icon,
        "image": image.asset->url,
        link,
        order
      },
      "newsletter": pageBuilder[][_type == "newsletterType"][0] {
        title,
        description,
        buttonText,
        placeholder
      }
    }
  `;

	return await client.fetch(getPageQuery);
}
