import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function ScholarshipsPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Scholarships"
				subheading="Financial support for outstanding students pursuing life sciences education and research"
				heroImage=""
				altText="Scholarships"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							I-Gene Scholarship Program
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="text-gray-700 mb-6">
								The I-Gene Scholarship Program provides financial assistance to
								exceptional students who demonstrate academic excellence and
								passion for life sciences, genetics, and biotechnology. Our goal
								is to remove financial barriers and enable talented students to
								pursue their educational dreams.
							</p>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Scholarship Categories
							</h3>
							<div className="space-y-6 mb-8">
								<div className="border border-gray-200 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-3">
										Merit-Based Scholarships
									</h4>
									<ul className="space-y-2">
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Academic excellence awards for top-performing students
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Research project awards for innovative science fair
												projects
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Leadership awards for community service in STEM
												education
											</span>
										</li>
									</ul>
								</div>

								<div className="border border-gray-200 rounded-lg p-6">
									<h4 className="font-semibold text-gray-900 mb-3">
										Need-Based Scholarships
									</h4>
									<ul className="space-y-2">
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Financial assistance for students from underserved
												communities
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Support for students pursuing university education in
												life sciences
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Research funding for undergraduate and graduate students
											</span>
										</li>
									</ul>
								</div>
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Eligibility Criteria
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Academic Requirements
									</h4>
									<p className="text-gray-700 text-sm">
										Strong academic performance in science subjects,
										particularly biology and chemistry
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Field of Study
									</h4>
									<p className="text-gray-700 text-sm">
										Life sciences, genetics, biotechnology, medicine, or related
										fields
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">Location</h4>
									<p className="text-gray-700 text-sm">
										Preference for students from Nigeria and other African
										countries
									</p>
								</div>
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-semibold text-gray-900 mb-2">
										Commitment
									</h4>
									<p className="text-gray-700 text-sm">
										Willingness to contribute to STEM education and community
										outreach
									</p>
								</div>
							</div>

							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Application Process
							</h3>
							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										1
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Submit Application
										</h4>
										<p className="text-gray-700">
											Complete the scholarship application form with academic
											transcripts and essays
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										2
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Review Process
										</h4>
										<p className="text-gray-700">
											Applications are reviewed by our scholarship committee of
											educators and scientists
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
										3
									</div>
									<div>
										<h4 className="font-semibold text-gray-900">
											Selection & Award
										</h4>
										<p className="text-gray-700">
											Selected recipients are notified and awards are disbursed
											directly to institutions
										</p>
									</div>
								</div>
							</div>

							<div className="bg-primary-50 p-6 rounded-lg mb-8">
								<h4 className="font-semibold text-gray-900 mb-2">
									Scholarship Application Deadlines
								</h4>
								<p className="text-gray-700 mb-4">
									Applications are accepted twice yearly: Spring deadline (March
									31) and Fall deadline (September 30).
								</p>
								<p className="text-sm text-gray-600">
									Award amounts range from ₦100,000 to ₦500,000 depending on the
									scholarship category and need.
								</p>
							</div>

							<div className="text-center">
								<Link
									href="/contact"
									className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors mr-4"
								>
									Apply for Scholarship
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
