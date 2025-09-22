import { Hero } from "@/components/banner/Hero";
import Link from "next/link";
import {
	BeakerIcon,
	AcademicCapIcon,
	UserGroupIcon,
	ComputerDesktopIcon,
	VideoCameraIcon,
	GiftIcon,
} from "@heroicons/react/24/outline";

export default function ProgramsPage() {
	const programs = [
		{
			title: "Science Fairs",
			description:
				"Competitive events showcasing student research in genetics, biotechnology, and life sciences.",
			icon: AcademicCapIcon,
			href: "/programs/science-fairs",
			features: [
				"Research Projects",
				"Competition Format",
				"Awards & Recognition",
			],
		},
		{
			title: "DNA Workshops",
			description:
				"Hands-on laboratory sessions where students extract DNA from fruits and biological samples.",
			icon: BeakerIcon,
			href: "/programs/workshops",
			features: [
				"Laboratory Techniques",
				"DNA Extraction",
				"Practical Learning",
			],
		},
		{
			title: "Webinars",
			description:
				"Online educational sessions with leading scientists and researchers.",
			icon: VideoCameraIcon,
			href: "/programs/webinars",
			features: ["Expert Speakers", "Q&A Sessions", "Live Interaction"],
		},
		{
			title: "Mentorship Program",
			description:
				"Connect with industry professionals for guidance and career development.",
			icon: UserGroupIcon,
			href: "/programs/mentorship",
			features: ["One-on-One Mentoring", "Career Guidance", "Network Building"],
		},
		{
			title: "Research Opportunities",
			description:
				"Real research experiences in computational genetics and biomedical sciences.",
			icon: ComputerDesktopIcon,
			href: "/research/opportunities",
			features: [
				"Hands-on Research",
				"Publication Opportunities",
				"Academic Credit",
			],
		},
		{
			title: "Scholarships",
			description:
				"Financial support for outstanding students pursuing life sciences education.",
			icon: GiftIcon,
			href: "/programs/scholarships",
			features: [
				"Merit-based Awards",
				"Need-based Support",
				"Educational Funding",
			],
		},
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Our Programs"
				subheading="Comprehensive educational initiatives designed to inspire and educate the next generation of life scientists"
				heroImage=""
				altText="I-Gene Programs"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Empowering Through Education
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Discover our range of programs designed to make life sciences
							education accessible, engaging, and impactful for students across
							Africa.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{programs.map((program) => {
							const IconComponent = program.icon;
							return (
								<div
									key={program.title}
									className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
								>
									<div className="flex items-center mb-4">
										<div className="p-3 bg-primary-100 rounded-lg mr-4">
											<IconComponent className="w-6 h-6 text-primary-600" />
										</div>
										<h3 className="text-xl font-bold text-gray-900">
											{program.title}
										</h3>
									</div>

									<p className="text-gray-600 mb-4">{program.description}</p>

									<ul className="space-y-2 mb-6">
										{program.features.map((feature, index) => (
											<li
												key={index}
												className="flex items-center text-sm text-gray-600"
											>
												<div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
												{feature}
											</li>
										))}
									</ul>

									<Link
										href={program.href}
										className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
									>
										Learn More
									</Link>
								</div>
							);
						})}
					</div>

					<div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ready to Get Started?
						</h3>
						<p className="text-gray-600 mb-6">
							Join thousands of students who have transformed their
							understanding of life sciences through our programs.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
						>
							Contact Us Today
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
