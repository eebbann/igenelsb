"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import card from "@/assets/ren.jpg";
import { Hero } from "@/components/banner/Hero";
import { getHero } from "@/sanity/queries/getHero";

const Blog = () => {
  const [heroData, setHeroData] = useState<any>(null);

  const fetchHero = async () => {
    try {
      const hero = await getHero("blog");
      setHeroData(hero);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  useState(() => {
    fetchHero();
  });

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
    </section>
  );
};

export default Blog;
