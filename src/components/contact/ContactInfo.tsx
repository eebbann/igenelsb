import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
	ClockIcon,
} from "@heroicons/react/24/outline";

interface ContactInfoProps {
	contactInfo: {
		address?: string;
		phone?: string;
		email?: string;
		workingHours?: string;
	};
	socialMedia: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
		linkedin?: string;
		youtube?: string;
	};
}

// Custom social media icon components
const FacebookIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
		<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
	</svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
	</svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
	<svg className={className} viewBox="0 0 24 24" fill="currentColor">
		<path d="M23.498 6.186a3.01 3.01 0 00-2.118-2.13C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.38.556A3.01 3.01 0 00.502 6.186 31.23 31.23 0 000 12a31.23 31.23 0 00.502 5.814 3.01 3.01 0 002.118 2.13C4.37 20.5 12 20.5 12 20.5s7.63 0 9.38-.556a3.01 3.01 0 002.118-2.13A31.23 31.23 0 0024 12a31.23 31.23 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
	</svg>
);

export const ContactInfo = ({ contactInfo, socialMedia }: ContactInfoProps) => {
	const socialLinks = [
		{ icon: FacebookIcon, url: socialMedia.facebook, label: "Facebook" },
		{ icon: TwitterIcon, url: socialMedia.twitter, label: "Twitter" },
		{ icon: InstagramIcon, url: socialMedia.instagram, label: "Instagram" },
		{ icon: LinkedinIcon, url: socialMedia.linkedin, label: "LinkedIn" },
		{ icon: YouTubeIcon, url: socialMedia.youtube, label: "YouTube" },
	].filter((link) => link.url);

	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
				<p className="text-gray-600 text-lg">
					We'd love to hear from you. Send us a message and we'll respond as
					soon as possible.
				</p>
			</div>

			<div className="space-y-6">
				{contactInfo.address && (
					<div className="flex items-start space-x-4">
						<MapPinIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
						<div>
							<h3 className="font-semibold text-gray-900">Address</h3>
							<p className="text-gray-600">{contactInfo.address}</p>
						</div>
					</div>
				)}

				{contactInfo.phone && (
					<div className="flex items-start space-x-4">
						<PhoneIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
						<div>
							<h3 className="font-semibold text-gray-900">Phone</h3>
							<a
								href={`tel:${contactInfo.phone}`}
								className="text-gray-600 hover:text-primary-600"
							>
								{contactInfo.phone}
							</a>
						</div>
					</div>
				)}

				{contactInfo.email && (
					<div className="flex items-start space-x-4">
						<EnvelopeIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
						<div>
							<h3 className="font-semibold text-gray-900">Email</h3>
							<a
								href={`mailto:${contactInfo.email}`}
								className="text-gray-600 hover:text-primary-600"
							>
								{contactInfo.email}
							</a>
						</div>
					</div>
				)}

				{contactInfo.workingHours && (
					<div className="flex items-start space-x-4">
						<ClockIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
						<div>
							<h3 className="font-semibold text-gray-900">Working Hours</h3>
							<p className="text-gray-600">{contactInfo.workingHours}</p>
						</div>
					</div>
				)}
			</div>

			{socialLinks.length > 0 && (
				<div>
					<h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
					<div className="flex space-x-4">
						{socialLinks.map(({ icon: Icon, url, label }) => (
							<a
								key={label}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-lg transition-colors"
								aria-label={label}
							>
								<Icon className="w-5 h-5" />
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
