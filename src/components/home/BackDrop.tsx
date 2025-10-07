"use client";
import Image from "next/image";
import { useState } from "react";

export default function Background() {
	const [imageError, setImageError] = useState(false);

	return (
		<div className="absolute z-0 inset-0 flex items-center justify-center pointer-events-none">
			{!imageError ? (
				<Image
					src="/assets/dna.png"
					alt="DNA Pattern Background"
					width={800}
					height={600}
					className="opacity-10 object-contain"
					onError={() => setImageError(true)}
				/>
			) : (
				// Fallback CSS pattern when image is missing
				<div
					className="w-full h-full opacity-5 bg-gradient-to-br from-blue-100 via-transparent to-green-100"
					style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
										   radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)`,
						backgroundSize: "50px 50px",
					}}
				></div>
			)}
		</div>
	);
}
