import { Hero } from "@/components/banner/Hero";
import Link from "next/link";

export default function SitemapPage() {
	const pages = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Team", href: "/team" },
		{ name: "Blog", href: "/blog" },
		{ name: "Contact", href: "/contact" },
	];

	const programs = [
		{ name: "Science Fairs", href: "/programs/science-fairs" },
		{ name: "Workshops", href: "/programs/workshops" },
		{ name: "Webinars", href: "/programs/webinars" },
		{ name: "Mentorship", href: "/programs/mentorship" },
		{ name: "Scholarships", href: "/programs/scholarships" },
	];

	const legal = [
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Terms of Service", href: "/terms" },
		{ name: "Sitemap", href: "/sitemap" },
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				heading="Sitemap"
				subheading="Navigate through all pages on our website"
				heroImage=""
				altText="Sitemap"
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-8">
							Website Sitemap
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* Main Pages */}
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Main Pages
								</h3>
								<ul className="space-y-2">
									{pages.map((page) => (
										<li key={page.name}>
											<Link
												href={page.href}
												className="text-primary-600 hover:text-primary-700 transition-colors"
											>
												{page.name}
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Programs */}
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Programs
								</h3>
								<ul className="space-y-2">
									{programs.map((program) => (
										<li key={program.name}>
											<Link
												href={program.href}
												className="text-primary-600 hover:text-primary-700 transition-colors"
											>
												{program.name}
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Legal */}
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Legal
								</h3>
								<ul className="space-y-2">
									{legal.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-primary-600 hover:text-primary-700 transition-colors"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-8 pt-8 border-t border-gray-200">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								External Links
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								<a
									href="https://facebook.com/igene.africa"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary-600 hover:text-primary-700"
								>
									Facebook
								</a>
								<a
									href="https://twitter.com/igene_africa"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary-600 hover:text-primary-700"
								>
									Twitter
								</a>
								<a
									href="https://instagram.com/igene_africa"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary-600 hover:text-primary-700"
								>
									Instagram
								</a>
								<a
									href="https://linkedin.com/in/i-gene-life-science-foundation"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary-600 hover:text-primary-700"
								>
									LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
