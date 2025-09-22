import { Hero } from "@/components/banner/Hero";

export default function PrivacyPage() {
	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Privacy Policy"
				subheading="How we collect, use, and protect your information"
				heroImage=""
				altText="Privacy Policy"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto prose prose-lg">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Privacy Policy
						</h2>
						<p className="text-gray-600 mb-4">
							Last updated: {new Date().toLocaleDateString()}
						</p>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Information We Collect
							</h3>
							<p className="text-gray-700 mb-4">
								We collect information you provide directly to us, such as when
								you:
							</p>
							<ul className="list-disc pl-6 text-gray-700 space-y-2">
								<li>Fill out our contact form</li>
								<li>Subscribe to our newsletter</li>
								<li>Register for our programs or events</li>
								<li>Communicate with us via email or phone</li>
							</ul>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								How We Use Your Information
							</h3>
							<p className="text-gray-700 mb-4">
								We use the information we collect to:
							</p>
							<ul className="list-disc pl-6 text-gray-700 space-y-2">
								<li>Respond to your inquiries and provide customer support</li>
								<li>Send you newsletters and updates about our programs</li>
								<li>Process registrations for workshops and events</li>
								<li>Improve our services and website</li>
							</ul>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Information Sharing
							</h3>
							<p className="text-gray-700">
								We do not sell, trade, or otherwise transfer your personal
								information to third parties without your consent, except as
								described in this policy.
							</p>
						</section>

						<section className="mb-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Contact Us
							</h3>
							<p className="text-gray-700">
								If you have any questions about this Privacy Policy, please
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
