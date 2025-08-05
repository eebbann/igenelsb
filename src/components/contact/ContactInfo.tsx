import {
	MapPinIcon,
	PhoneIcon,
	EnvelopeIcon,
	ClockIcon,
} from "@heroicons/react/24/outline";
import {
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@tabler/icons-react";

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
	};
}

export const ContactInfo = ({ contactInfo, socialMedia }: ContactInfoProps) => {
	const socialLinks = [
		{ icon: FacebookIcon, url: socialMedia.facebook, label: "Facebook" },
		{ icon: TwitterIcon, url: socialMedia.twitter, label: "Twitter" },
		{ icon: InstagramIcon, url: socialMedia.instagram, label: "Instagram" },
		{ icon: LinkedinIcon, url: socialMedia.linkedin, label: "LinkedIn" },
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
