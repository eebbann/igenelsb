"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import leftImg from "@/assets/left-display.jpg";
import Background from "./BackDrop";
import SubHeading from "../layout/SubHeading";
import {
	HeartIcon,
	AcademicCapIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import Modal from "../ui/Modal";

export const OurWork = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const impactStats = [
		{
			icon: HeartIcon,
			number: "500+",
			label: "Students Helped",
			description: "Through our various programs and initiatives",
		},
		{
			icon: AcademicCapIcon,
			number: "50+",
			label: "Workshops Conducted",
			description: "Covering various aspects of life sciences",
		},
		{
			icon: UserGroupIcon,
			number: "100+",
			label: "Mentors",
			description: "Experienced professionals guiding students",
		},
	];

	return (
		<section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={leftImg}
								alt="Our work impact"
								width={600}
								height={600}
								className="object-cover w-full h-[500px]"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>

						{/* Floating stats cards */}
						<div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
							<div className="text-center">
								<div className="text-2xl font-bold text-primary-600">500+</div>
								<div className="text-sm text-gray-600">Students Impacted</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<div>
							<span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
								Creating An Impact
							</span>
							<SubHeading title="We are making a difference in the lives of others" />
							<p className="text-xl text-gray-700 leading-relaxed mt-6">
								We provide scholarships, workshops, and mentorship programs to
								nurture young talent in life sciences. Our comprehensive
								approach ensures that every student has the opportunity to excel
								and contribute to scientific advancement.
							</p>
						</div>

						{/* Impact Stats */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
							{impactStats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
										<stat.icon className="w-6 h-6 text-primary-600" />
									</div>
									<div className="text-2xl font-bold text-gray-900">
										{stat.number}
									</div>
									<div className="text-sm font-medium text-gray-700">
										{stat.label}
									</div>
									<div className="text-xs text-gray-500 mt-1">
										{stat.description}
									</div>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<button
								className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
								onClick={() => setModalOpen(true)}
							>
								<HeartIcon className="w-5 h-5 mr-2" />
								Donate Now
							</button>
							<Link
								href="/about"
								className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
							>
								Learn More
							</Link>
							<Modal
								open={modalOpen}
								onClose={() => setModalOpen(false)}
								title="Support I-Gene"
							>
								<div className="text-center">
									<p className="mb-2 font-semibold">Account Details</p>
									<p>Account Name: I-Gene Life Science Foundation</p>
									<p>Naira Account: 0126433674</p>
									<p>Bank: Wema Bank</p>
									<p className="mt-4 text-sm text-gray-600">
										Thank you for supporting our mission!
									</p>
								</div>
							</Modal>
						</div>
					</div>
				</div>
			</div>

			<Background />
		</section>
	);
};
