import Image from "next/image";
import {
	LinkedinIcon,
	TwitterIcon,
	GlobeIcon,
	MailIcon,
} from "@tabler/icons-react";

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
										className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
										aria-label="LinkedIn"
									>
										<LinkedinIcon className="w-4 h-4" />
									</a>
								)}
								{member.socialMedia?.twitter && (
									<a
										href={member.socialMedia.twitter}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
										aria-label="Twitter"
									>
										<TwitterIcon className="w-4 h-4" />
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
										<GlobeIcon className="w-4 h-4" />
									</a>
								)}
							</div>

							{member.email && (
								<a
									href={`mailto:${member.email}`}
									className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
									aria-label="Email"
								>
									<MailIcon className="w-4 h-4" />
								</a>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
