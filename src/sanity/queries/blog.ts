import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getBlogPosts() {
  const getPageQuery = groq`
    {
      "hero": *[_type == "page" && slug.current == "blog"][0] {
        pageBuilder[][_type == "heroType"][0] {
          heading,
          subheading,
          "heroImage": image.asset->url,
          "altText": image.alt
        }
      },
      "posts": *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "author": author->name,
        "categories": categories[]->title
      }
    }
  `;

  return await client.fetch(getPageQuery);
} 