// pages/index.tsx

import Goals from "@/components/home/Goals";
import { Hero } from "@/components/banner/Hero";
import { LogoTicker } from "@/components/home/LogoTicker";
import MarqueeSlide from "@/components/home/MarqueeSlide";
import { NewsGrid } from "@/components/home/News";
import { OurWork } from "@/components/home/OurWork";
import { Values } from "@/components/Values";
import { NewsLetter } from "@/components/home/NewsLetter";
import { getHomePage } from "@/sanity/queries/homepage";

export default function Home({ data }: { data: any }) {
	return (
		<div>
			<Hero
				isHomePage={true}
				heading={data.hero.heading}
				subheading={data.hero.subheading}
				heroImage={data.hero.heroImage}
				altText={data.hero.altText}
			/>

			<LogoTicker />
			<OurWork />
			<Values
				display={true}
				message="Join our team of dedicated volunteers and make a difference in the lives of others."
			/>
			<MarqueeSlide />
			<Goals />
			<NewsLetter />
		</div>
	);
}

// Fetch data at build time and revalidate every 60 seconds
export const getStaticProps = async () => {
	const data = await getHomePage();

	return {
		props: {
			data,
		},
		revalidate: 60, // Incremental Static Regeneration (ISR) updates every 60s
	};
};
