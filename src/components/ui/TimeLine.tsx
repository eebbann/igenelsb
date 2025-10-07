"use client";

import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className=" w-full bg-white font-sans md:px-10" ref={containerRef}>
			{/* HEADER SECTION */}
			<div className="container mx-auto py-20  ">
				<h2 className="text-4xl font-medium tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent max-w-xl">
					About / History: I-Gene Life Science Foundation
				</h2>
				<p className="text-primary-980 max-w-3xl leading-relaxed pb-6">
					I-Gene Life Science Foundation is a non-profit organization founded in
					August 2023, with a mission dedicated to nurturing curiosity and a
					passion for life sciences among students, encouraging them to explore
					these fields further. We believe that every student has the potential
					to be a scientist, and we are committed to providing them with the
					resources and opportunities they need to reach their full potential.
					We help students develop the skills and requisite knowledge they need
					to succeed in various life science careers. We also inspire them to
					see the world in new ways and to use their talents to make a
					difference in the world. We believe that the future of science is
					bright, and we are committed to helping students play a role in
					shaping that future.
				</p>
			</div>

			{/* TIMELINE SECTION */}
			<div ref={ref} className="relative container mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:pt-40 md:gap-10"
					>
						{/* Timeline Date on the left (sticky) */}
						<div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 w-10 rounded-full bg-white flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
							</div>
							<h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-primary-980">
								{item.title}
							</h3>
						</div>

						{/* Event Content */}
						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-primary-980">
								{item.title}
							</h3>
							{item.content}
						</div>
					</div>
				))}

				{/* Vertical Scrolling Line */}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] from-transparent via-neutral-200 to-transparent to-[99%]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
