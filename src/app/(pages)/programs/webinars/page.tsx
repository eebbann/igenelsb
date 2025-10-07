import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function WebinarsPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Webinars"
				subheading="Online educational sessions with leading scientists and researchers in genetics and life sciences"
				heroImage=""
				altText="Webinars"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Educational Webinar Series
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 mb-6">
								Join our interactive online webinar series featuring leading
								scientists, researchers, and industry professionals who share
								cutting-edge insights in genetics, biotechnology, and life
								sciences. These sessions are designed to inspire and educate the
								next generation of scientists.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Webinar Topics
							</h3>
							<ul className="space-y-3 mb-8">
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Advances in genetic research and CRISPR technology
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Career pathways in biotechnology and life sciences
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Current research in genomics and personalized medicine
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										University admission and scholarship opportunities
									</span>
								</li>
								<li className="flex items-start">
									<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
									<span className="text-gray-700">
										Research methodology and scientific writing
									</span>
								</li>
							</ul>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								What to Expect
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
									<p className="text-gray-700">60-90 minutes per session</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Interactive Format
									</h4>
									<p className="text-gray-700">Live Q&A with expert speakers</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Schedule</h4>
									<p className="text-gray-700">
										Monthly sessions, evenings and weekends
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Recordings
									</h4>
									<p className="text-gray-700">
										Available for registered participants
									</p>
								</div>
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Our Expert Speakers
							</h3>
							<p className="text-gray-700 mb-6">
								Our webinar series features distinguished guests including
								university professors, research scientists, biotechnology
								entrepreneurs, and healthcare professionals from leading
								institutions across Africa and internationally.
							</p>

							<div className="bg-primary-50 p-6 rounded-lg mb-8">
								<h4 className="font-semibold text-gray-900 mb-2">
									Join Our Next Webinar
								</h4>
								<p className="text-gray-700 mb-4">
									Registration is free for all I-Gene webinars. Sessions are
									conducted via Zoom with interactive features enabled.
								</p>
								<p className="text-sm text-gray-600">
									Certificate of participation available upon request.
								</p>
							</div>

							<div className="text-center">
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mr-4"
								>
									Register for Webinars
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
