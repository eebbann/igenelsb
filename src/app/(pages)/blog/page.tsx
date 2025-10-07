import { getBlogPosts } from "@/sanity/queries/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Hero } from "@/components/banner/Hero";

export default async function BlogPage() {
	const data = await getBlogPosts();

	// Default values to prevent crashes
	const heroData = data?.hero || {
		heading: "Blog & News",
		subheading: "Stay updated with the latest from I-Gene",
		heroImage: "",
		altText: "Blog & News",
	};

	const posts = data?.posts || [
		{
			_id: "1",
			title:
				"Revolutionary DNA Extraction Workshop Transforms Student Learning",
			slug: { current: "dna-extraction-workshop-transforms-learning" },
			excerpt:
				"Students at Lagos Science Academy experienced hands-on genetics through our innovative DNA extraction program, extracting DNA from bananas and learning fundamental laboratory techniques.",
			mainImage: "/assets/blog/dna-workshop.jpg",
			publishedAt: "2024-01-15",
			author: "Dr. Sarah Okonkwo",
			categories: ["Education", "Workshops", "DNA"],
		},
		{
			_id: "2",
			title:
				"Building Bridges: University Partnerships Expand Research Opportunities",
			slug: { current: "university-partnerships-research-opportunities" },
			excerpt:
				"I-Gene announces new partnerships with leading African universities, creating pathways for students to engage in cutting-edge computational genetics and bioinformatics research.",
			mainImage: "/assets/blog/university-partnership.jpg",
			publishedAt: "2024-01-08",
			author: "Prof. Michael Adebayo",
			categories: ["Research", "Partnerships", "Universities"],
		},
		{
			_id: "3",
			title:
				"Science Fair Success: Young Innovators Showcase Biotechnology Projects",
			slug: { current: "science-fair-biotechnology-projects" },
			excerpt:
				"The annual I-Gene Science Fair featured outstanding projects in biotechnology, from sickle cell research to sustainable agriculture solutions, highlighting the next generation of African scientists.",
			mainImage: "/assets/blog/science-fair.jpg",
			publishedAt: "2024-01-01",
			author: "Dr. Amina Hassan",
			categories: ["Science Fair", "Innovation", "Biotechnology"],
		},
		{
			_id: "4",
			title: "Mentorship Program Connects Students with Global Researchers",
			slug: { current: "mentorship-program-global-researchers" },
			excerpt:
				"Our expanded mentorship network now includes researchers from top institutions worldwide, providing African students with unprecedented access to scientific expertise and career guidance.",
			mainImage: "/assets/blog/mentorship.jpg",
			publishedAt: "2023-12-20",
			author: "Ms. Grace Okello",
			categories: ["Mentorship", "Global", "Career Development"],
		},
		{
			_id: "5",
			title: "Breaking Barriers: Bringing Science to Underserved Communities",
			slug: { current: "science-underserved-communities" },
			excerpt:
				"Through our mobile laboratory initiative, I-Gene is bringing hands-on science education to rural communities across Africa, ensuring equitable access to quality STEM education.",
			mainImage: "/assets/blog/mobile-lab.jpg",
			publishedAt: "2023-12-15",
			author: "Dr. James Mwangi",
			categories: ["Outreach", "Education Equity", "Mobile Labs"],
		},
		{
			_id: "6",
			title: "Digital Innovation: New Platform Enhances Virtual Learning",
			slug: { current: "digital-platform-virtual-learning" },
			excerpt:
				"I-Gene launches an interactive digital platform featuring virtual lab simulations, bioinformatics tools, and collaborative research spaces for students across Africa.",
			mainImage: "/assets/blog/digital-platform.jpg",
			publishedAt: "2023-12-10",
			author: "Dr. Abdul Rahman",
			categories: ["Technology", "Digital Learning", "Innovation"],
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
						Latest News & Insights
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Stay updated with the latest developments in life sciences,
						educational programs, and our community initiatives.
					</p>
				</div>

				<BlogGrid posts={posts} />
			</div>
		</div>
	);
}
