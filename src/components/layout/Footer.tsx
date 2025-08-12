import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
	GlobeAltIcon,
} from "@heroicons/react/24/outline";
import {
	IconBrandFacebook,
	IconBrandTwitter,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandYoutube,
} from "@tabler/icons-react";
import logo from "@/assets/igene.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
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

	const socialLinks = [
		{ icon: IconBrandFacebook, href: "#", label: "Facebook" },
		{ icon: IconBrandTwitter, href: "#", label: "Twitter" },
		{ icon: IconBrandInstagram, href: "#", label: "Instagram" },
		{
			icon: IconBrandLinkedin,
			href: "https://linkedin.com/in/i-gene-life-science-foundation",
			label: "LinkedIn",
		},
		{
			icon: IconBrandYoutube,
			href: "https://youtube.com/@i-genelsf?si=vg8YVGLkaREwzAcF",
			label: "YouTube",
		},
	];

	return (
		<footer className="bg-primary-950 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="lg:col-span-1">
						<div className="flex items-center mb-4">
							<Image
								src={logo}
								alt="I-Gene Logo"
								width={120}
								height={120}
								className="h-12 w-auto"
							/>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed mb-4">
							Empowering the next generation of life scientists through
							innovative education, mentorship, and hands-on learning
							experiences.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									className="p-2 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors"
									aria-label={label}
								>
									<Icon className="w-4 h-4" />
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Programs */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Our Programs</h3>
						<ul className="space-y-2">
							{programs.map((program) => (
								<li key={program.name}>
									<Link
										href={program.href}
										className="text-gray-300 hover:text-white transition-colors text-sm"
									>
										{program.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<div className="space-y-3">
							<div className="flex items-start space-x-3">
								<MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-gray-300 text-sm">
										123 Science Avenue
										<br />
										Research District
										<br />
										City, State 12345
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<PhoneIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
								<a
									href="tel:+1234567890"
									className="text-gray-300 hover:text-white text-sm transition-colors"
								>
									+1 (234) 567-8900
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<EnvelopeIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
								<a
									href="mailto:info@igene.org"
									className="text-gray-300 hover:text-white text-sm transition-colors"
								>
									info@igene.org
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<GlobeAltIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
								<a
									href="https://igene.org"
									className="text-gray-300 hover:text-white text-sm transition-colors"
								>
									www.igene.org
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-primary-800 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm">
							© {currentYear} I-Gene. All rights reserved.
						</div>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								href="/privacy"
								className="text-gray-400 hover:text-white text-sm transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-gray-400 hover:text-white text-sm transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								href="/sitemap"
								className="text-gray-400 hover:text-white text-sm transition-colors"
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
