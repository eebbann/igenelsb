"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
	fallbackSrc?: string;
	fallbackText?: string;
}

export const ImageWithFallback = ({
	src,
	alt,
	width,
	height,
	className = "",
	fallbackSrc,
	fallbackText,
}: ImageWithFallbackProps) => {
	const [imageError, setImageError] = useState(false);
	const [fallbackError, setFallbackError] = useState(false);

	if (imageError && (!fallbackSrc || fallbackError)) {
		// Show placeholder div when both main and fallback images fail
		return (
			<div
				className={`flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 border-2 border-dashed border-gray-300 ${className}`}
				style={{ width, height }}
			>
				<div className="text-center p-4">
					<div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
						<svg
							className="w-6 h-6 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<p className="text-sm text-gray-500">{fallbackText || alt}</p>
				</div>
			</div>
		);
	}

	if (imageError && fallbackSrc && !fallbackError) {
		return (
			<Image
				src={fallbackSrc}
				alt={alt}
				width={width}
				height={height}
				className={className}
				onError={() => setFallbackError(true)}
			/>
		);
	}

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
			onError={() => setImageError(true)}
		/>
	);
};
