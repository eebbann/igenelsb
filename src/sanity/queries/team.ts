import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getTeamPage() {
	const getPageQuery = groq`
    *[_type == "page" && slug.current == "team"][0] {
      slug,
      "hero": pageBuilder[][_type == "heroType"][0] {
        heading,
        subheading,
        slug,
        "heroImage": image.asset->url,
        "altText": image.alt
      },
      "teamMembers": pageBuilder[][_type == "teamMemberType"] | order(order asc) {
        name,
        position,
        "image": image.asset->url,
        bio,
        email,
        socialMedia,
        skills,
        order
      }
    }
  `;

	return await client.fetch(getPageQuery);
}
