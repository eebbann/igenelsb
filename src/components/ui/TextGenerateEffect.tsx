"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../lib/util";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.1,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 2,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration:0,
				delay: stagger(0.0),
			}
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="text-5xl md:text-[4.4rem] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className=" dark:text-yellow text-black text-2xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
