import { Hero } from "@/components/banner/Hero";
import React from "react";
import blood from "@/assets/blood.png";
import { ImageGallery } from "@/components/ImageGallery";
import image1 from "@/assets/igene.png";
import image2 from "@/assets/product-image.png";
import { Values } from "@/components/Values";
import { Timeline } from "@/components/ui/TimeLine";
import { data } from "@/data/DataTimeline";

export default function About() {
	const staticImages = [
		{
			src: image1,
			alt: "Description of image 1",
		},
		{
			src: image2,
			alt: "Description of image 2",
		},
		{
			src: image2,
			alt: "Description of image 2",
		},
		{
			src: image2,
			alt: "Description of image 2",
		},
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				title="Empowering students and Unlocking scientific potential"
				description="I-Gene Life Science Foundation is a non-profit organization founded in august 2023"
				image={blood} // Now TypeScript knows this is a valid image type
			/>
			<Values
				message=" Driving groundbreaking discoveries and scientific advancements."
				display={false}
			/>
			<ImageGallery images={staticImages} />
			 
				<Timeline data={data} />
			 
		</div>
	);
}
