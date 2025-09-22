import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function MentorshipPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Mentorship Program"
				subheading="Connect with industry professionals for guidance and career development in life sciences"
				heroImage=""
				altText="Mentorship Program"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Mentorship Network
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 mb-6">
								Our mentorship program connects students with leading
								scientists, researchers, and industry professionals who provide
								guidance through academic and career journeys in the life
								sciences.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Program Benefits
							</h3>
							<ul className="space-y-3 mb-8">
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										One-on-one mentoring with industry experts
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Career guidance and academic planning
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Professional network building
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Research project guidance
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										University and scholarship application support
									</span>
								</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Our Mentors
							</h3>
							<p className="text-gray-700 mb-6">
								Our network includes professionals from universities, research
								institutions, biotechnology companies, and healthcare
								organizations across Africa and globally.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
								<div className="bg-gray-50 p-4 rounded-lg text-center">
									<h4 className="font-semibold text-gray-900 mb-2">
										Research Scientists
									</h4>
									<p className="text-gray-700 text-sm">
										Academic researchers and principal investigators
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg text-center">
									<h4 className="font-semibold text-gray-900 mb-2">
										Industry Professionals
									</h4>
									<p className="text-gray-700 text-sm">
										Biotech and pharmaceutical industry experts
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg text-center">
									<h4 className="font-semibold text-gray-900 mb-2">
										Healthcare Practitioners
									</h4>
									<p className="text-gray-700 text-sm">
										Medical doctors and healthcare professionals
									</p>
								</div>
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								How It Works
							</h3>
							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										1
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">Application</h4>
										<p className="text-gray-700">
											Submit your application with academic interests and career
											goals
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										2
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">Matching</h4>
										<p className="text-gray-700">
											We match you with a mentor based on your interests and
											goals
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										3
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">Mentorship</h4>
										<p className="text-gray-700">
											Regular meetings and ongoing support throughout the
											program
										</p>
									</div>
								</div>
							</div>

							<div className="bg-primary-50 p-6 rounded-lg mb-8">
								<h4 className="font-semibold text-gray-900 mb-2">
									Ready to Get Started?
								</h4>
								<p className="text-gray-700 mb-4">
									Applications for our mentorship program are accepted on a
									rolling basis.
								</p>
								<p className="text-sm text-gray-600">
									Program duration: 6-12 months
								</p>
							</div>

							<div className="text-center">
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mr-4"
								>
									Apply for Mentorship
								</Link>
								<Link
									href="/programs"
									className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-colors"
								>
									View All Programs
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
