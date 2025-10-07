// lib/getHero.ts
import { groq } from "next-sanity";
import { client } from "../lib/client";

// Reusable query to fetch Hero data for any page
const heroQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    slug,
    "hero": pageBuilder[][_type == "heroType"][0] {
      heading,
      subheading,
      "heroImage": image.asset->url,
      "altText": image.alt
    }
  }
`;

export async function getHero(pageSlug: string) {
	return await client.fetch(heroQuery, { slug: pageSlug });
}
