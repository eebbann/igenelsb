import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getContactPage() {
	const getPageQuery = groq`
    *[_type == "page" && slug.current == "contact"][0] {
      slug,
      "hero": pageBuilder[][_type == "heroType"][0] {
        heading,
        subheading,
        slug,
        "heroImage": image.asset->url,
        "altText": image.alt
      },
      "contactInfo": pageBuilder[][_type == "contactType"][0].contactInfo,
      "socialMedia": pageBuilder[][_type == "contactType"][0].socialMedia,
      "formFields": pageBuilder[][_type == "contactType"][0].formFields
    }
  `;

	return await client.fetch(getPageQuery);
}
