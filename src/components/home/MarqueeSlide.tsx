import Image from "next/image";
import ink from "@/assets/ren.jpg";
import Marquee from "react-fast-marquee";

export default function MarqueeSlide() {
	return (
		<section className=" h-fit pt-8 pb-20 flex flex-col gap-32">
			<div className="containe">
			<div className="w-full col-span-2 h-1/2">
				<Marquee autoFill>
					<div className="flex justify-center gap-6 items-start mx-3">
						<Image src={ink}
						 alt="hero"
						 width={450}
						 height={250}
						 />
					</div>
				</Marquee>
			</div>
		</div>
		</section>
	);
}
