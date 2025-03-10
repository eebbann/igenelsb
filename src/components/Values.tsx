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
			{display ?
			(<button className="relative inline-flex mt-4  overflow-hidden rounded-lg p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#001e80_10%,#393BB2_70%,#E2CBFF_100%)]" />
				<span className="inline-flex   w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-3 text-sm font-medium text-white backdrop-blur-3xl">
					Join Us
				</span>
			</button>) :
			 null }
		</section>
	);
};
