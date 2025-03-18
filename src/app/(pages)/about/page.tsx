import { Hero } from "@/components/banner/Hero";
import React from "react";
import blood from "@/assets/blood.png";
import { ImageGallery } from "@/components/ImageGallery";
import image1 from "@/assets/igene.png";
import image2 from "@/assets/igene.png";
import { Values } from "@/components/Values";
import { Timeline } from "@/components/ui/TimeLine";
import { data } from "@/data/DataTimeline";
import { getHero } from "@/sanity/queries/getHero";

export default async function About() {
  const heroData = await getHero("about"); // Fetching dynamically in a server component

  const staticImages = [
    { src: image1, alt: "Description of image 1" },
    { src: image2, alt: "Description of image 2" },
    { src: image2, alt: "Description of image 2" },
    { src: image2, alt: "Description of image 2" },
  ];

  return (
    <div>
      <Hero
        isHomePage={true}
        heading={heroData?.hero?.heading || "Default Heading"}
        subheading={heroData?.hero?.subheading || "Default Subheading"}
        heroImage={heroData?.hero?.heroImage || blood}
        altText={heroData?.hero?.altText || "Hero Image"}
      />
      <Values
        message="Driving groundbreaking discoveries and scientific advancements."
        display={false}
      />
      <ImageGallery images={staticImages} />
      <Timeline data={data} />
    </div>
  );
}
