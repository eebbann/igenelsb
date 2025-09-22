import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function ScienceFairsPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Science Fairs"
				subheading="Competitive events showcasing student research in genetics, biotechnology, and life sciences"
				heroImage=""
				altText="Science Fairs"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Science Fair Program
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 mb-6">
								Our Science Fair Program provides students with the opportunity
								to showcase their research projects in genetics, biotechnology,
								and life sciences through competitive events that foster
								innovation and scientific discovery.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Program Features
							</h3>
							<ul className="space-y-3 mb-8">
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Research project development and mentorship
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Competitive presentation format
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Awards and recognition for outstanding projects
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Networking opportunities with scientists and researchers
									</span>
								</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								How to Participate
							</h3>
							<p className="text-gray-700 mb-6">
								Students can participate individually or in teams. Projects
								should focus on life sciences, genetics, biotechnology, or
								related fields. Registration opens 3 months before each event.
							</p>

							<div className="bg-primary-50 p-6 rounded-lg mb-8">
								<h4 className="font-semibold text-gray-900 mb-2">
									Next Science Fair
								</h4>
								<p className="text-gray-700 mb-4">
									Spring 2024 Regional Science Fair
								</p>
								<p className="text-sm text-gray-600">
									Registration opens soon. Stay tuned for updates!
								</p>
							</div>

							<div className="text-center">
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mr-4"
								>
									Register Interest
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
