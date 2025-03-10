// components/Hero.tsx
import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface HeroProps {
    isHomePage?: boolean;
    heading?: string;
    subheading?: string;
    heroImage?: string;
    altText?: string;
}

export const Hero = ({ isHomePage = false, heading, subheading, heroImage, altText }: HeroProps) => {
    return (
			<section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
				<div className="container relative">
					<div className="md:flex items-center">
						<div className="md:w-[55.5%]">
							<div className="tag">
								<span className="font-medium">Igene:&nbsp;</span> life science
								foundation
							</div>

							{isHomePage ? (
								<TextGenerateEffect
									className="text-5xl md:text-[4.4rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent"
									words={heading || ""}
								/>
							) : (
								<h1 className="text-5xl md:text-[4rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
									{heading}
								</h1>
							)}

							<p className="text-xl text-[#010d3d] tracking-tight mt-6">
								{subheading}
							</p>
							{isHomePage && (
								<div>
									<button className="btn btn-primary">
										Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
									</button>
								</div>
							)}
						</div>

						{/* Hero Image Section */}
						<div className="md:mt-0 mt-20 md:h-[508px] md:flex-1 relative z-0">
							{heroImage && (
								<Image
									src={heroImage}
									alt={altText || "Hero Image"}
									className="w-full h-auto object-contain md:absolute md:w-[607px] md:max-w-none md:-left-6"
									width={617}
									height={610}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		);
};

								
