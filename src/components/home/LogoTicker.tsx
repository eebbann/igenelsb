"use client"
import inqaba from "@/assets/logo-inqababiotech.png";
import biologix from "@/assets/logo-biologix.png";
import biochemical from "@/assets/logo-biochemical.png";
import foundation from "@/assets/logo-sfn.png";
import Image from "next/image";
import { useState } from "react";

export const LogoTicker = () => {
	const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
	const logos = [
		{ src: inqaba, alt: "inqaba" },
		{ src: biologix, alt: "biologix" },
		{ src: biochemical, alt: "biochemical" },
		{ src: foundation, alt: "foundation" },
	];

	return (
		<div className="py-8 md:py-12 bg-white">
			<div className="container">
				<div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white,transparent)]">
					<div className="flex gap-14 flex-none">
						{logos.map((logo) => (
							<Image
								key={logo.alt}
								src={logo.src}
								alt={logo.alt}
							 
								className={`logo-ticker-image transition-filter duration-300 ${
									hoveredLogo === logo.alt ? "" : "grayscale"
								}`}
								onMouseEnter={() => setHoveredLogo(logo.alt)}
								onMouseLeave={() => setHoveredLogo(null)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
