"use client";
import {
	AcademicCapIcon,
	UserGroupIcon,
	WrenchScrewdriverIcon,
	GlobeAltIcon,
	HeartIcon,
	LightBulbIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import SubHeading from "../layout/SubHeading";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const goals = [
	{
		icon: AcademicCapIcon,
		title: "Quality Education",
		description:
			"I-Gene promotes quality education by organizing interactive science fairs that engage students with hands-on activities, deepening their understanding of life sciences and enhancing learning experiences.",
		details:
			"By fostering collaborations between schools, universities, and industry experts, I-Gene creates opportunities for students to learn about cutting-edge scientific advancements.",
		color: "bg-blue-50 border-blue-200",
		iconColor: "text-blue-600",
	},
	{
		icon: WrenchScrewdriverIcon,
		title: "Innovation & Infrastructure",
		description:
			"I-Gene connects students to cutting-edge scientific developments, encouraging innovation and interest in life science careers.",
		details:
			"We provide access to modern laboratory equipment and technology, bridging the gap between theoretical knowledge and practical application.",
		color: "bg-green-50 border-green-200",
		iconColor: "text-green-600",
	},
	{
		icon: UserGroupIcon,
		title: "Reduced Inequalities",
		description:
			"I-Gene's informative webinars make expert knowledge accessible to students from diverse backgrounds, helping to level the playing field in educational and career opportunities.",
		details:
			"Our scholarship programs and mentorship initiatives ensure that talented students from all socioeconomic backgrounds have equal opportunities to succeed.",
		color: "bg-purple-50 border-purple-200",
		iconColor: "text-purple-600",
	},
	{
		icon: GlobeAltIcon,
		title: "Partnerships for Goals",
		description:
			"We collaborate with educational institutions, research organizations, and industry partners to create sustainable impact in the life sciences community.",
		details:
			"Through strategic partnerships, we amplify our reach and create lasting positive change in education and scientific advancement.",
		color: "bg-orange-50 border-orange-200",
		iconColor: "text-orange-600",
	},
];

export default function Goals() {
	return (
		<section className="py-24 bg-gradient-to-br from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div variants={itemVariants}>
						<span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
							Our Goals
						</span>
					</motion.div>
					<motion.div variants={itemVariants}>
						<SubHeading title="We are focused on sustainable development goals" />
					</motion.div>
					<motion.p
						variants={itemVariants}
						className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
					>
						Our mission is aligned with the United Nations Sustainable
						Development Goals, creating lasting positive impact in education,
						innovation, and equality.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{goals.map((goal, index) => (
						<motion.div
							key={index}
							className={`flex flex-col gap-6 p-8 rounded-2xl border-2 ${goal.color} hover:shadow-lg transition-all duration-300`}
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							<motion.div
								variants={itemVariants}
								className="flex items-center gap-4"
							>
								<div
									className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm`}
								>
									<goal.icon className={`w-6 h-6 ${goal.iconColor}`} />
								</div>
								<h3 className="text-xl font-bold text-gray-900">
									{goal.title}
								</h3>
							</motion.div>

							<motion.p
								variants={itemVariants}
								className="text-gray-700 leading-relaxed"
							>
								{goal.description}
							</motion.p>

							<motion.p
								variants={itemVariants}
								className="text-gray-600 text-sm leading-relaxed"
							>
								{goal.details}
							</motion.p>

							<motion.div
								variants={itemVariants}
								className="flex items-center gap-2 text-sm text-gray-500"
							>
								<HeartIcon className="w-4 h-4" />
								<span>Making a difference in life sciences education</span>
							</motion.div>
						</motion.div>
					))}
				</div>

							<motion.div
					variants={itemVariants}
								initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium">
						<LightBulbIcon className="w-5 h-5" />
						<span>Join us in achieving these goals</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
