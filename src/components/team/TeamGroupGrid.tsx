import Image from "next/image";

interface TeamGroupGridProps {
	images: { src: string; alt: string }[];
	caption?: string;
	youtubeUrl?: string;
	linkedinUrl?: string;
}

export const TeamGroupGrid = ({
	images,
	caption = "I-Gene Team",
	youtubeUrl,
	linkedinUrl,
}: TeamGroupGridProps) => {
	return (
		<div className="space-y-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{images.map((img, index) => (
					<div
						key={`${img.src}-${index}`}
						className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100"
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover"
							priority={index < 3}
						/>
					</div>
				))}
			</div>

			<div className="text-center">
				<h3 className="text-2xl font-semibold text-gray-900">{caption}</h3>
				{(youtubeUrl || linkedinUrl) && (
					<div className="mt-4 flex items-center justify-center gap-3">
						{youtubeUrl && (
							<a
								href={youtubeUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
								className="inline-flex p-2 rounded-md bg-gray-100 text-red-600 hover:bg-red-50 hover:text-red-600 transition-colors"
							>
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M23.498 6.186a3.01 3.01 0 00-2.118-2.13C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.38.556A3.01 3.01 0 00.502 6.186 31.23 31.23 0 000 12a31.23 31.23 0 00.502 5.814 3.01 3.01 0 002.118 2.13C4.37 20.5 12 20.5 12 20.5s7.63 0 9.38-.556a3.01 3.01 0 002.118-2.13A31.23 31.23 0 0024 12a31.23 31.23 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
								</svg>
							</a>
						)}
						{linkedinUrl && (
							<a
								href={linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="inline-flex p-2 rounded-md bg-gray-100 text-blue-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
							>
								<svg
									className="w-5 h-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default TeamGroupGrid;
