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

	// Default hero content with meaningful information about I-Gene
	const defaultHeroData = {
		heading: "About I-Gene",
		subheading:
			"I-Gene (Inspiring Genetics Education Network for Everyone) is a pioneering organization dedicated to transforming life sciences education across Africa. Founded with the vision of making genetics and biotechnology accessible to all students, we bridge the gap between theoretical knowledge and practical application through innovative programs, hands-on workshops, and mentorship opportunities.",
		heroImage: blood,
		altText: "I-Gene About Us - Empowering African Scientists",
	};

	const staticImages = [
		{ src: image1, alt: "I-Gene DNA extraction workshop with students" },
		{ src: image2, alt: "Science fair showcasing biotechnology projects" },
		{ src: blood, alt: "Laboratory research and genetic analysis" },
		{ src: image1, alt: "Community outreach and educational programs" },
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				heading={heroData?.hero?.heading || defaultHeroData.heading}
				subheading={heroData?.hero?.subheading || defaultHeroData.subheading}
				heroImage={heroData?.hero?.heroImage || defaultHeroData.heroImage}
				altText={heroData?.hero?.altText || defaultHeroData.altText}
			/>

			{/* Mission and Vision Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Mission
							</h2>
							<p className="text-gray-600 text-lg leading-relaxed">
								To democratize access to quality life sciences education across
								Africa by providing innovative, hands-on learning experiences
								that inspire the next generation of scientists, researchers, and
								biotechnology innovators.
							</p>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Vision
							</h2>
							<p className="text-gray-600 text-lg leading-relaxed">
								A future where every African student has the opportunity to
								explore, understand, and contribute to the life sciences,
								driving innovation and solutions for global challenges while
								building a thriving scientific community across the continent.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Values
				message="Empowering Africa's next generation of life scientists through innovation, education, and opportunity."
				display={true}
			/>

			<Timeline data={data} />
		</div>
	);
}
