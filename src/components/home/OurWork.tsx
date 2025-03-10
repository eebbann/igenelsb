import Image from "next/image";
import leftImg from "@/assets/left-display.jpg";
import Background from "./BackDrop";
import SubHeading from "../layout/SubHeading";

export const OurWork = () => {
	return (
		<section className="container relative flex-col md:flex-row flex justify-between gap-9 py-24 bg-gradient-to-b from-{#FFFFFF} to-indigo-[#D2DCFF]">
			<div className=" rounded-2xl z-10 bg-white p-6 w-[100%] ">
				<Image
					src={leftImg}
					alt="image our work"
					width={1050}
					height={1050}
					className="object-cover h-full"
				/>
			</div>

			<div className="ml-6 mt-4 z-10">
				<div className="flex justify-between">
					<div className="tag">Creating An Impact</div>
				</div>
				 <SubHeading title="We are making a difference in the lives of others
				"/>
				<p className="text-xl text-[#010d3d] tracking-tight mt-6">
					We provide scholarships, workshops, and mentorship programs to nurture
					young talent in life sciences.
				</p>
				<div className="flex items-center gap-4 mt-5">
					<button className="btn-primary "> Donate</button>
					<button className="btn-text "> Support</button>
				</div>
			</div>

			<Background />
		</section>
	);
};
