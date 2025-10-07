"use client";
import React from "react";
import {
	AcademicCapIcon,
	BeakerIcon,
	UserGroupIcon,
	TrophyIcon,
	SparklesIcon,
	ChartBarIcon,
} from "@heroicons/react/24/outline";

interface StatCard {
	title: string;
	value: string;
	description: string;
	icon: React.ComponentType<{ className?: string }>;
	color: string;
	bgColor: string;
}

const stats: StatCard[] = [
	{
		title: "Students Reached",
		value: "2,500+",
		description: "African students engaged in genetics education programs",
		icon: AcademicCapIcon,
		color: "text-blue-600",
		bgColor: "bg-blue-50",
	},
	{
		title: "DNA Workshops",
		value: "150+",
		description: "Hands-on laboratory sessions conducted across Africa",
		icon: BeakerIcon,
		color: "text-green-600",
		bgColor: "bg-green-50",
	},
	{
		title: "Science Fairs",
		value: "45+",
		description: "Competitive events showcasing biotechnology projects",
		icon: TrophyIcon,
		color: "text-yellow-600",
		bgColor: "bg-yellow-50",
	},
	{
		title: "Mentorship Connections",
		value: "800+",
		description: "Students connected with industry professionals",
		icon: UserGroupIcon,
		color: "text-purple-600",
		bgColor: "bg-purple-50",
	},
	{
		title: "Research Projects",
		value: "120+",
		description: "Student research initiatives in life sciences",
		icon: ChartBarIcon,
		color: "text-indigo-600",
		bgColor: "bg-indigo-50",
	},
	{
		title: "Innovation Awards",
		value: "25+",
		description: "Recognition for outstanding scientific achievements",
		icon: SparklesIcon,
		color: "text-pink-600",
		bgColor: "bg-pink-50",
	},
];

export const AchievementStats = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<div className="flex items-center justify-center gap-2 mb-4">
						<TrophyIcon className="w-6 h-6 text-yellow-500" />
						<span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
							Our Impact
						</span>
						<TrophyIcon className="w-6 h-6 text-yellow-500" />
					</div>

					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Achievements & Milestones
					</h2>

					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Since our founding, I-Gene has made significant strides in
						transforming genetics education across Africa. Here are some of our
						key achievements.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<div
							key={index}
							className={`${stat.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100`}
						>
							<div className="flex items-start gap-4">
								<div
									className={`w-12 h-12 ${stat.bgColor} border-2 border-white rounded-xl flex items-center justify-center shadow-sm`}
								>
									<stat.icon className={`w-6 h-6 ${stat.color}`} />
								</div>

								<div className="flex-1">
									<div className={`text-3xl font-bold ${stat.color} mb-1`}>
										{stat.value}
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										{stat.title}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{stat.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
						<SparklesIcon className="w-5 h-5" />
						<span>Join Our Mission</span>
					</div>
				</div>
			</div>
		</section>
	);
};
