import { Hero } from "@/components/banner/Hero";
import React from "react";
import teamwork from "@/assets/IMG_2856.png";
interface IconProps {
	className?: string;
}

const CustomIcon = ({ className = "" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	></svg>
);

const TeamGrid = () => {
	const teams = [
		{
			title: "Team Wet-lab",
			description:
				"Team Wet lab presides over the organization of programs, outreaches and public relations.",
			icon: (props: IconProps) => (
				<CustomIcon {...props}>
					<path d="M9 3v15m0 0a3 3 0 106 0M9 18h6m-6-3h6m-6-3h6M9 6h6" />
					<path d="M3 6h18M3 12h18M3 18h18" />
				</CustomIcon>
			),
		},
		{
			title: "Team Insilico",
			description:
				"Team Insilico engineers content strategy and brand Management.",
			icon: (props: IconProps) => (
				<CustomIcon {...props}>
					<rect x="2" y="3" width="20" height="14" rx="2" />
					<path d="M8 21h8m-4-4v4" />
					<path d="M2 7h20M6 11h12" />
				</CustomIcon>
			),
		},
		{
			title: "Team Design & Editors",
			description:
				"Team Design coordinates visual content including flyers, videos and event coverage.",
			icon: (props: IconProps) => (
				<CustomIcon {...props}>
					<path d="M4 3h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2z" />
					<path d="M14 15l-4 4m0-4l4 4M8 21h8" />
					<path d="M6 7h12M6 11h12" />
				</CustomIcon>
			),
		},
		{
			title: "Team Einstein",
			description:
				"Team Einstein includes a team of well versed and qualified tutors, who train and educate students during workshops.",
			icon: (props: IconProps) => (
				<CustomIcon {...props}>
					<path d="M12 4l2 4h-4l2-4z" />
					<path d="M4 14l2-2 2 2" />
					<path d="M20 14l-2-2-2 2" />
					<path d="M12 8v8" />
					<path d="M8 20h8" />
				</CustomIcon>
			),
		},
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				title="Our Dynamic Team"
				description="I-Gene Life Science Foundation is a non-profit organization founded in august 2023"
				image={teamwork} // Now TypeScript knows this is a valid image type
			/>
			 

			<div className="container text-center my-6 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
				{teams.map((team, index) => (
					<div
						key={index}
						className="bg-white transition-transform hover:scale-105"
					>
						<div className="flex flex-col items-center pt-6">
							<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
								<team.icon className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="font-semibold text-lg text-center">
								{team.title}
							</h3>
						</div>
						<div>
							<p className="text-gray-600 text-center text-sm">
								{team.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="text-center">
				<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-colors">
					Join Our Team
				</button>
			</div>
		</div>
	);
};

export default TeamGrid;
