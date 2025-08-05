"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import hero from "@/assets/cog.png";

interface HeroProps {
	isHomePage?: boolean;
	heading?: string;
	subheading?: string;
	heroImage?: string;
	altText?: string;
}

export const Hero = ({
	isHomePage = false,
	heading,
	subheading,
	heroImage,
	altText,
}: HeroProps) => {
	return (
		<section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
			<div className="container relative">
				<div className="md:flex items-center">
					<div className="md:w-[55.5%]">
						<div className="tag">
							<span className="font-medium">
								I-Gene: Igniting Curiosity, Inspiring Discovery
							</span>
						</div>
						{isHomePage ? (
							<TextGenerateEffect
								className="text-5xl md:text-[4.4rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent"
								words={
									heading ||
									"Empowering Africa's Next Generation of Life Scientists"
								}
							/>
						) : (
							<h1 className="text-5xl md:text-[4rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
								{heading}
							</h1>
						)}
						<p className="text-xl text-[#010d3d] tracking-tight mt-6 leading-relaxed">
							{subheading ||
								"We connect students to world-class science, mentorship, and opportunity. Through hands-on programs, workshops, and real research, I-Gene is building a vibrant community of future innovators and leaders in the life sciences across Africa."}
						</p>
						{isHomePage && (
							<div className="mt-8">
								<button className="btn btn-primary">
									Explore Our Programs{" "}
									<ArrowRightIcon className="w-4 h-4 ml-2" />
								</button>
							</div>
						)}
					</div>
					{/* Hero Image Section */}
					<div className="md:mt-0 mt-20 md:h-[508px] md:flex-1 relative z-0">
						<ImageWithFallback
							src={heroImage || hero}
							alt={altText || "I-Gene Hero - Empowering Future Scientists"}
							className="w-full h-auto object-contain md:absolute md:w-[607px] md:max-w-none md:-left-6"
							width={617}
							height={610}
							fallbackSrc="/assets/dna.png"
							fallbackText="I-Gene - Inspiring Genetics Education"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
