import type { val } from "@/app/page";

export const Values = ({ message, display }: val) => {
	return (
		<section className="container text-center my-6 pt-6">
			<h1
				className="text-4xl leading-[3.5rem] md:mx-14 md:text-[3.4rem] font-bold tracking-tighter bg-gradient-to-b
			from-black to-[#001e80] bg-clip-text text-transparent"
			>
				{message}
			</h1>

		</section>
	);
};
