import Image from "next/image";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

interface TeamMember {
	name: string;
	position: string;
	image: string;
	bio?: string;
	email?: string;
	socialMedia?: {
		linkedin?: string;
		twitter?: string;
		website?: string;
	};
	skills?: string[];
}

interface TeamGridProps {
	teamMembers: TeamMember[];
}

export const TeamGrid = ({ teamMembers }: TeamGridProps) => {
	if (!teamMembers || teamMembers.length === 0) {
		return (
			<div className="text-center py-12">
				<p className="text-gray-600 text-lg">No team members found.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{teamMembers.map((member, index) => (
				<div
					key={index}
					className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
				>
					<div className="relative h-64 bg-gray-200">
						{member.image ? (
							<Image
								src={member.image}
								alt={member.name}
								fill
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center bg-gray-300">
								<span className="text-gray-500 text-4xl font-bold">
									{member.name.charAt(0)}
								</span>
							</div>
						)}
					</div>

					<div className="p-6">
						<h3 className="text-xl font-bold text-gray-900 mb-1">
							{member.name}
						</h3>
						<p className="text-primary-600 font-medium mb-3">
							{member.position}
						</p>

						{member.bio && (
							<p className="text-gray-600 text-sm mb-4 line-clamp-3">
								{member.bio}
							</p>
						)}

						{member.skills && member.skills.length > 0 && (
							<div className="mb-4">
								<div className="flex flex-wrap gap-2">
									{member.skills.slice(0, 3).map((skill, skillIndex) => (
										<span
											key={skillIndex}
											className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
										>
											{skill}
										</span>
									))}
									{member.skills.length > 3 && (
										<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
											+{member.skills.length - 3} more
										</span>
									)}
								</div>
							</div>
						)}

						<div className="flex items-center justify-between">
							<div className="flex space-x-2">
								{member.socialMedia?.linkedin && (
									<a
										href={member.socialMedia.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
										aria-label="LinkedIn"
									>
										<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
								)}
								{member.socialMedia?.twitter && (
									<a
										href={member.socialMedia.twitter}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
										aria-label="Twitter"
									>
										<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
										</svg>
									</a>
								)}
								{member.socialMedia?.website && (
									<a
										href={member.socialMedia.website}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
										aria-label="Website"
									>
										<GlobeAltIcon className="w-4 h-4" />
									</a>
								)}
							</div>

							{member.email && (
								<a
									href={`mailto:${member.email}`}
									className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
									aria-label="Email"
								>
									<EnvelopeIcon className="w-4 h-4" />
								</a>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
