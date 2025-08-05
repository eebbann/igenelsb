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
	return (
		<section className="h-fit pt-8 pb-20 flex flex-col gap-32">
			<div className="containe">
				<div className="w-full col-span-2 h-1/2">
					<Marquee autoFill>
						<div className="flex justify-center gap-6 items-start mx-3">
							{sliderImages.map((src, idx) => (
								<Image
									key={idx}
									src={src}
									alt={`slider image ${idx + 1}`}
									width={450}
									height={250}
									className="rounded-lg shadow-lg object-cover"
								/>
							))}
						</div>
					</Marquee>
				</div>
			</div>
		</section>
	);
}
