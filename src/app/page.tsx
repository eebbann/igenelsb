// pages/index.tsx

import Goals from "@/components/home/Goals";
import { Hero } from "@/components/banner/Hero";
import { LogoTicker } from "@/components/home/LogoTicker";
import MarqueeSlide from "@/components/home/MarqueeSlide";
import { OurWork } from "@/components/home/OurWork";
import { Services } from "@/components/home/Services";
import { Values } from "@/components/Values";
import { NewsLetter } from "@/components/home/NewsLetter";
import { AchievementStats } from "@/components/home/AchievementStats";
import { getHomePage } from "@/sanity/queries/homepage";

export type val = {
	message: string;
	display: boolean;
};

export default async function Home() {
	const data = await getHomePage(); // ✅ Fetch data directly

	// Default values to prevent crashes
	const heroData = data?.hero || {
		heading: "Empowering Future Scientists",
		subheading:
			"Transforming education through innovative science programs, interactive workshops, and mentorship initiatives. We're building bridges between students and cutting-edge life sciences, creating opportunities for the next generation of researchers and innovators.",
		heroImage: "",
		altText: "I-Gene Hero",
	};

	const logoTickerData = data?.logoTicker || {
		logos: [
			{ src: "/assets/logo-apex.png", alt: "Apex Laboratory" },
			{ src: "/assets/logo-biochemical.png", alt: "Biochemical Sciences" },
			{ src: "/assets/logo-biologix.png", alt: "Biologix Research" },
			{ src: "/assets/logo-inqababiotech.png", alt: "Inqaba Biotech" },
			{ src: "/assets/logo-pulse.png", alt: "Pulse Medical" },
			{ src: "/assets/logo-sfn.png", alt: "Science Foundation Network" },
			{ src: "/assets/logo-wema.png", alt: "WEMA Bank" },
		],
	};
	const servicesData = data?.services || [
		{
			title: "DNA Extraction Workshops",
			description:
				"Hands-on laboratory sessions where students learn to extract DNA from fruits and other biological samples, making genetics tangible and exciting.",
			icon: "BeakerIcon",
			order: 1,
			link: {
				text: "Learn More",
				url: "/programs/dna-workshops",
			},
		},
		{
			title: "Science Fair Programs",
			description:
				"Competitive events that showcase student research projects in genetics, biotechnology, and life sciences, fostering innovation and discovery.",
			icon: "AcademicCapIcon",
			order: 2,
			link: {
				text: "View Events",
				url: "/events/science-fairs",
			},
		},
		{
			title: "Mentorship Network",
			description:
				"Connect with leading scientists, researchers, and industry professionals who guide students through their academic and career journeys.",
			icon: "UserGroupIcon",
			order: 3,
			link: {
				text: "Find Mentors",
				url: "/mentorship",
			},
		},
		{
			title: "Research Opportunities",
			description:
				"Real research experiences in computational genetics, embryology, and biomedical sciences that prepare students for advanced studies.",
			icon: "ComputerDesktopIcon",
			order: 4,
			link: {
				text: "Apply Now",
				url: "/research/opportunities",
			},
		},
		{
			title: "Educational Outreach",
			description:
				"Community programs that bring science education to underserved areas, promoting quality education and reducing inequalities.",
			icon: "GlobeAltIcon",
			order: 5,
			link: {
				text: "Get Involved",
				url: "/outreach",
			},
		},
		{
			title: "Innovation Labs",
			description:
				"State-of-the-art facilities where students explore biotechnology applications, from medical breakthroughs to sustainable solutions.",
			icon: "LightBulbIcon",
			order: 6,
			link: {
				text: "Visit Labs",
				url: "/facilities/labs",
			},
		},
	];
	const newsletterData = data?.newsletter || {
		title: "Get I-Gene Updates",
		description:
			"Get up-to-date notifications about I-Gene events, including science fairs, interactive workshops, webinars, and educational programs. Stay informed about our initiatives in promoting quality education and reducing inequalities in the life sciences field.",
		buttonText: "Subscribe",
		placeholder: "Enter your email address",
	};

	return (
		<div>
			<Hero
				isHomePage={true}
				heading={heroData.heading}
				subheading={heroData.subheading}
				heroImage={heroData.heroImage}
				altText={heroData.altText}
			/>

			<LogoTicker logos={logoTickerData.logos} />
			<Services services={servicesData} />
			<OurWork />
			<Values
				display={true}
				message="Join our team of dedicated volunteers and make a difference in the lives of others."
			/>
			<AchievementStats />
			<MarqueeSlide />
			<Goals />
			<NewsLetter
				title={newsletterData.title}
				description={newsletterData.description}
				buttonText={newsletterData.buttonText}
				placeholder={newsletterData.placeholder}
			/>
		</div>
	);
}
