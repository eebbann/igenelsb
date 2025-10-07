import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function WorkshopsPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="DNA Workshops"
				subheading="Hands-on laboratory sessions where students learn to extract DNA from fruits and biological samples"
				heroImage=""
				altText="DNA Workshops"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							DNA Extraction Workshops
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 mb-6">
								Our DNA extraction workshops provide students with hands-on
								experience in basic laboratory techniques, making genetics
								tangible and exciting through practical learning.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								What You&apos;ll Learn
							</h3>
							<ul className="space-y-3 mb-8">
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										DNA extraction from fruits (bananas, strawberries)
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Basic laboratory safety and techniques
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Understanding DNA structure and function
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Scientific method and observation skills
									</span>
								</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Workshop Format
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
									<p className="text-gray-700">2-3 hours per session</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Group Size
									</h4>
									<p className="text-gray-700">15-20 students maximum</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Age Range
									</h4>
									<p className="text-gray-700">
										13-18 years (secondary school)
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Equipment
									</h4>
									<p className="text-gray-700">
										All laboratory materials provided
									</p>
								</div>
							</div>

							<div className="bg-primary-50 p-6 rounded-lg mb-8">
								<h4 className="font-semibold text-gray-900 mb-2">
									Book a Workshop
								</h4>
								<p className="text-gray-700 mb-4">
									Available for schools, science clubs, and educational
									institutions across Nigeria.
								</p>
								<p className="text-sm text-gray-600">
									Contact us to schedule a workshop for your students.
								</p>
							</div>

							<div className="text-center">
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mr-4"
								>
									Schedule Workshop
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
