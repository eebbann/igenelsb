// components/home/LogoTicker.tsx
"use client"; // Ensure this is a client component

import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

// Import logo images from src/assets
import logoApex from "@/assets/logo-apex.png";
import logoBiochemical from "@/assets/logo-biochemical.png";
import logoBiologix from "@/assets/logo-biologix.png";
import logoInqabaBiotech from "@/assets/logo-inqababiotech.png";
import logoPulse from "@/assets/logo-pulse.png";
import logoSfn from "@/assets/logo-sfn.png";
import logoWema from "@/assets/logo-wema.png";

interface LogoTickerProps {
	logos?: { src: string | StaticImageData; alt: string }[];
}

// Default logos mapping
const defaultLogos = [
	{ src: logoApex, alt: "Apex Laboratory" },
	{ src: logoBiochemical, alt: "Biochemical Sciences" },
	{ src: logoBiologix, alt: "Biologix Research" },
	{ src: logoInqabaBiotech, alt: "Inqaba Biotech" },
	{ src: logoPulse, alt: "Pulse Medical" },
	{ src: logoSfn, alt: "Science Foundation Network" },
	{ src: logoWema, alt: "WEMA Bank" },
];

export const LogoTicker = ({ logos = defaultLogos }: LogoTickerProps) => {
	const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
	const [isPaused, setIsPaused] = useState(false);

	// Double the logos array for seamless infinite scroll
	const doubledLogos = [...logos, ...logos];

	return (
		<div className="py-8 md:py-12 bg-white">
			<div className="container">
				<div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,white,transparent)]">
					<div
						className={`flex gap-14 flex-none animate-infinite-scroll ${
							isPaused ? "animation-paused" : ""
						}`}
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
					>
						{doubledLogos.map((logo, index) => (
							<Image
								key={`${logo.alt}-${index}`}
								src={logo.src}
								alt={logo.alt}
								width={100}
								height={50}
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
