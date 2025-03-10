"use client";
import {
	AcademicCapIcon,
	UserGroupIcon,
	WrenchScrewdriverIcon,
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

export default function Goals() {
	return (
		<section className="pt-10 pb-24 bg-white">
			<div className="mt-8 container">
				<div className="flex justify-between">
					<div className="tag">Our Goals</div>
				</div>
				<div className="mt-5">
					 <SubHeading title="We are focused on sustainable development goals
					"/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
						{/* First Goal Section */}
						<motion.div
							className="flex flex-col gap-6 p-8 bg-primary-200 rounded-3xl"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							<motion.div variants={itemVariants}>
								<AcademicCapIcon
									width={40}
									height={40}
									className="text-blue-600"
								/>
							</motion.div>
							<motion.h3
								variants={itemVariants}
								className="text-xl font-bold leading-none"
							>
								Quality Education:
							</motion.h3>
							<motion.p variants={itemVariants}>
								I-Gene promotes quality education by organizing interactive
								science fairs that engage students with hands-on activities,
								deepening their understanding of life sciences and enhancing
								learning experiences.
							</motion.p>
							<motion.p variants={itemVariants}>
								By fostering collaborations between schools, universities, and
								industry experts, I-Gene creates opportunities for students to
								learn about cutting-edge scientific advancements. Furthermore,
								it supports underprivileged schools with learning materials and
								scholarships, ensuring equitable access to quality education for
								all students, regardless of their socioeconomic background.
							</motion.p>
						</motion.div>

						{/* Right Column */}
						<div className="flex flex-col justify-between gap-6">
							{/* Second Goal Section */}
							<motion.div
								className="flex flex-col gap-6 p-8 bg-primary-200 rounded-3xl"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								<motion.div variants={itemVariants}>
									<WrenchScrewdriverIcon
										width={40}
										height={40}
										className="text-blue-600"
									/>
								</motion.div>
								<motion.h3
									variants={itemVariants}
									className="text-xl font-bold leading-none"
								>
									Innovation and Infrastructure:
								</motion.h3>
								<motion.p variants={itemVariants}>
									I-Gene connects students to cutting-edge scientific
									developments, encouraging innovation and interest in life
									science careers.
								</motion.p>
							</motion.div>

							{/* Third Goal Section */}
							<motion.div
								className="flex flex-col gap-6 p-8 bg-primary-200 rounded-3xl"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								<motion.div variants={itemVariants}>
									<UserGroupIcon
										width={40}
										height={40}
										className="text-blue-600"
									/>
								</motion.div>
								<motion.h3
									variants={itemVariants}
									className="text-xl font-bold leading-none"
								>
									Reduced Inequalities:
								</motion.h3>
								<motion.p variants={itemVariants}>
									I-Gene's informative webinars make expert knowledge accessible
									to students from diverse backgrounds, helping to level the
									playing field in educational and career opportunities.
								</motion.p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
