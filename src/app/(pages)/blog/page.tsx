import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import card from "@/assets/ren.jpg";
import { Hero } from "@/components/banner/Hero";
import { getHero } from "@/sanity/queries/getHero";

const blogPosts = [
  {
    id: "synthetic-biology-future",
    title: "Synthetic Biology: Engineering Life to Solve Global Challenges",
    description:
      "From producing sustainable materials to creating novel therapeutics, synthetic biology is reshaping our approach to global problems.",
    author: "Leslie Alexander",
    readTime: "9 min read",
  },
  {
    id: "gene-therapy-renaissance",
    title: "The Gene Therapy Renaissance: New Hope for Rare Disease Treatment",
    description:
      "After decades of setbacks, gene therapy is making a dramatic comeback, offering hope to patients with rare genetic disorders.",
    author: "Leslie Alexander",
    readTime: "9 min read",
  },
  {
    id: "solar-energy",
    title: "Harnessing the Power of the Sun: Exploring the World of Solar Energy",
    description:
      "Solar energy is revolutionizing the way we power our world. Discover its impact as a sustainable energy source for the future.",
    author: "Leslie Alexander",
    readTime: "9 min read",
  },
  {
    id: "latest-crispr-developments",
    title: "Breaking Ground in Gene Editing: Latest CRISPR Applications in Medicine",
    description:
      "Recent breakthroughs in CRISPR technology are transforming genetic medicine, offering new treatment possibilities for inherited diseases.",
    author: "Leslie Alexander",
    readTime: "9 min read",
  },
];

// ✅ Reusable Blog Card Component
const BlogCard = ({ id, title, description, author, readTime }: any) => (
  <div className="flex group flex-col gap-8">
    <div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
      <Link href={`/blog/${id}`}>
        <Image
          src={card}
          alt={title}
          width={330}
          height={330}
          className="w-full h-full group-hover:scale-110 duration-300 object-cover"
        />
      </Link>
    </div>
    <div>
      <h3 className="text-primary-950 text-sub-title mb-4">
        <Link href={`/blog/${id}`}>{title}</Link>
      </h3>
      <p className="text-neutral-400">{description}</p>
    </div>
    <div className="flex items-center gap-6 mt-6">
      <div className="flex items-center gap-3">
        <Image
          src={card}
          alt={author}
          height={40}
          width={40}
          className="h-[40px] object-cover rounded-full"
        />
        <span className="text-primary-950">{author}</span>
      </div>
      <span className="text-primary-950">{readTime}</span>
    </div>
  </div>
);

const Blog = () => {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const hero = await getHero("blog");
        setHeroData(hero);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHero();
  }, []);

  return (
    <section className="bg-secondary-950">
      {heroData && (
        <Hero
          isHomePage={false}
          heading={heroData.title || "Igene Events & News"}
          subheading={heroData.description || "Find out the latest on Life Science and more"}
          heroImage={heroData.image || card}
          altText={heroData.altText || "Igene Events & News"}
        />
      )}

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-24 gap-8 md:mt-12 mt-24">
          {blogPosts.slice(0, 2).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pb-24 gap-8 md:mt-12 mt-24">
          {blogPosts.slice(2).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
