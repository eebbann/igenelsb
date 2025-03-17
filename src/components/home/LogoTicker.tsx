// components/home/LogoTicker.tsx
"use client"; // Ensure this is a client component

import Image from "next/image";
import { useState } from "react";

interface LogoTickerProps {
	logos: { src: string; alt: string }[];
}

export const LogoTicker = ({ logos }: LogoTickerProps) => {
	const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

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
								width={100} // Adjust size as needed
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
