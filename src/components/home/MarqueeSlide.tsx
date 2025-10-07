"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const sliderImages = [
	"/slider/slide1.jpg",
	"/slider/slide2.jpg",
	"/slider/slide3.jpg",
	"/slider/slide4.jpg",
	"/slider/slide5.jpg",
	"/slider/slide6.jpg",
];

export default function MarqueeSlide() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<>
			<style jsx global>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes slideUpScale {
					from {
						opacity: 0;
						transform: translateY(40px) scale(0.9);
					}
					to {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
				}

				.animate-fade-in-up {
					animation: fadeInUp 1s ease-out forwards;
				}

				.animate-slide-up-scale {
					animation: slideUpScale 0.8s ease-out forwards;
				}
			`}</style>
			<section
				className={`h-fit pt-8 pb-20 flex flex-col gap-32 transition-opacity duration-300 ${
					isLoaded ? "opacity-100 animate-fade-in-up" : "opacity-0"
				}`}
			>
				<div className="containe">
					<div className="w-full col-span-2 h-1/2">
						<Marquee
							autoFill
							speed={50}
							gradient={true}
							gradientColor="#ffffff"
							gradientWidth={100}
						>
							<div className="flex justify-center gap-6 items-start mx-3">
								{sliderImages.map((src, idx) => (
									<div
										key={idx}
										className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 ${
											isLoaded ? "animate-slide-up-scale" : "opacity-0"
										}`}
										style={{
											animationDelay: isLoaded ? `${idx * 150}ms` : "0ms",
											animationFillMode: "both",
										}}
									>
										<Image
											src={src}
											alt={`slider image ${idx + 1}`}
											width={450}
											height={250}
											className="rounded-lg object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
										<div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out mix-blend-multiply" />
									</div>
								))}
							</div>
						</Marquee>
					</div>
				</div>
			</section>
		</>
	);
}
