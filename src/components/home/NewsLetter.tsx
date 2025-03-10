"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
 
export function NewsLetter() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-primary-50 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent  text-center font-sans font-bold">
					Get Igene Updates
				</h1>
				<p className="relative z-10 text-center mt-4 text-neutral-900 max-w-lg mx-auto text-sm md:text-xl">
					Get up-to-date notifications about I-Gene events, including science
					fairs, interactive workshops, webinars, and educational programs. Stay
					informed about our initiatives in promoting quality education and
					reducing inequalities in the life sciences field.
				</p>

				<div className="relative z-10 mt-10 flex justify-center">
					<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Notify Me
					</button>
				</div>
			</div>
			<BackgroundBeams className="opacity-20" />
		</div>
	);
}
