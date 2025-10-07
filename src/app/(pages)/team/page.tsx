import { getTeamPage } from "@/sanity/queries/team";
import TeamGroupGrid from "@/components/team/TeamGroupGrid";
import { Hero } from "@/components/banner/Hero";

export default async function TeamPage() {
	const data = await getTeamPage();

	// Default values to prevent crashes and provide meaningful content
	const heroData = data?.hero || {
		heading: "Meet Our Team",
		subheading:
			"Passionate scientists, educators, and innovators working together to transform life sciences education across Africa. Our diverse team brings expertise from genetics, biotechnology, education, and community outreach.",
		heroImage: "",
		altText: "I-Gene Team",
	};

	const teamMembersData = data?.teamMembers || [
		{
			name: "Dr. Sarah Okonkwo",
			position: "Founder & Executive Director",
			image: "/assets/team/sarah-okonkwo.jpg",
			bio:
				"Geneticist and educator with 15+ years of experience in molecular biology and science education. Passionate about making genetics accessible to African students.",
			email: "sarah@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/sarah-okonkwo",
				twitter: "https://twitter.com/sarahokonkwo",
			},
			skills: [
				"Molecular Biology",
				"Science Education",
				"Leadership",
				"Research",
			],
			order: 1,
		},
		{
			name: "Prof. Michael Adebayo",
			position: "Scientific Advisor",
			image: "/assets/team/michael-adebayo.jpg",
			bio:
				"Professor of Biotechnology with expertise in computational genetics and bioinformatics. Leads our research partnerships with universities.",
			email: "michael@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/michael-adebayo",
			},
			skills: ["Biotechnology", "Bioinformatics", "Research", "Academia"],
			order: 2,
		},
		{
			name: "Dr. Amina Hassan",
			position: "Program Director",
			image: "/assets/team/amina-hassan.jpg",
			bio:
				"Educational specialist focused on STEM outreach and curriculum development. Designs our hands-on workshop programs and educational materials.",
			email: "amina@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/amina-hassan",
			},
			skills: [
				"Education",
				"Curriculum Design",
				"STEM Outreach",
				"Program Management",
			],
			order: 3,
		},
		{
			name: "Dr. James Mwangi",
			position: "Research Coordinator",
			image: "/assets/team/james-mwangi.jpg",
			bio:
				"Molecular biologist specializing in genetic research and laboratory techniques. Oversees our DNA extraction workshops and science fair programs.",
			email: "james@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/james-mwangi",
			},
			skills: [
				"Molecular Biology",
				"Laboratory Techniques",
				"Research",
				"Mentorship",
			],
			order: 4,
		},
		{
			name: "Ms. Grace Okello",
			position: "Community Outreach Manager",
			image: "/assets/team/grace-okello.jpg",
			bio:
				"Community development specialist with a passion for educational equity. Leads our initiatives in underserved communities across Africa.",
			email: "grace@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/grace-okello",
				twitter: "https://twitter.com/graceokello",
			},
			skills: [
				"Community Outreach",
				"Educational Equity",
				"Project Management",
				"Partnerships",
			],
			order: 5,
		},
		{
			name: "Dr. Abdul Rahman",
			position: "Technology Director",
			image: "/assets/team/abdul-rahman.jpg",
			bio:
				"Bioinformatics expert and software developer. Develops digital tools and platforms to enhance our educational programs and research capabilities.",
			email: "abdul@igene.org",
			socialMedia: {
				linkedin: "https://linkedin.com/in/abdul-rahman",
				github: "https://github.com/abdulrahman",
			},
			skills: [
				"Bioinformatics",
				"Software Development",
				"Data Analysis",
				"Digital Education",
			],
			order: 6,
		},
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				heading={heroData.heading}
				subheading={heroData.subheading}
				heroImage={heroData.heroImage}
				altText={heroData.altText}
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Meet Our Team
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Our dedicated team of scientists, educators, and innovators is
						committed to transforming life sciences education across Africa
						through cutting-edge programs, mentorship, and community outreach.
					</p>
				</div>

				<TeamGroupGrid
					images={[
						{ src: "/team/group-1.jpg", alt: "I-Gene Team" },
						{ src: "/team/group-2.jpg", alt: "I-Gene Team" },
						{ src: "/team/group-3.jpg", alt: "I-Gene Team" },
					]}
					caption="I-Gene Team"
					youtubeUrl="https://youtube.com/@i-genelsf?si=vg8YVGLkaREwzAcF"
					linkedinUrl="https://linkedin.com/in/i-gene-life-science-foundation"
				/>

				{/* Removed individual member grid as per request to focus on group images */}
			</div>
		</div>
	);
}
