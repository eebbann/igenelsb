import { Hero } from "@/components/banner/Hero";

export default function TermsPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Terms of Service"
				subheading="Terms and conditions for using our website and services"
				heroImage=""
				altText="Terms of Service"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto prose prose-lg">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Terms of Service
						</h2>
						<p className="text-gray-600 mb-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Acceptance of Terms
							</h3>
							<p className="text-gray-700">
								By accessing and using this website, you accept and agree to be
								bound by the terms and provision of this agreement.
							</p>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Use License
							</h3>
							<p className="text-gray-700 mb-4">
								Permission is granted to temporarily download one copy of the
								materials on I-Gene's website for personal, non-commercial
								transitory viewing only.
							</p>
							<p className="text-gray-700">
								This is the grant of a license, not a transfer of title, and
								under this license you may not:
							</p>
							<ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
								<li>modify or copy the materials</li>
								<li>
									use the materials for any commercial purpose or for any public
									display
								</li>
								<li>
									attempt to reverse engineer any software contained on the
									website
								</li>
								<li>
									remove any copyright or other proprietary notations from the
									materials
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Educational Programs
							</h3>
							<p className="text-gray-700">
								Participation in I-Gene educational programs is subject to
								additional terms and conditions that will be provided upon
								registration.
							</p>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Disclaimer
							</h3>
							<p className="text-gray-700">
								The materials on I-Gene's website are provided on an 'as is'
								basis. I-Gene makes no warranties, expressed or implied, and
								hereby disclaims and negates all other warranties including
								without limitation, implied warranties or conditions of
								merchantability, fitness for a particular purpose, or
								non-infringement of intellectual property or other violation of
								rights.
							</p>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Contact Information
							</h3>
							<p className="text-gray-700">
								If you have any questions about these Terms of Service, please
								contact us at{" "}
								<a
									href="mailto:info@igene.org"
									className="text-primary-600 hover:text-primary-700"
								>
									info@igene.org
								</a>
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
