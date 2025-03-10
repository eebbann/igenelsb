
import { Bars3Icon, ArrowDownRightIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/igene.png"
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Team", href: "/team" }, 
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export const Navbar = () => {
	return (
		<header className="z-40 sticky top-0 backdrop-blur-lg ">
			<div className="flex justify-center items-center py-2 bg-primary-950 text-white text-sm gap-3">
				<p className="text-white/60 hidden md:block">
					Become a Partner/Sponsor  for the next Igene Workshop 
				</p>
				<div className="inline-flex gap-1 items-center">
					<p>Register Here</p>
					<ArrowDownRightIcon
						className="inline-flex justify-center items-center"
						width={25}
						height={25}
					/>
				</div>
			</div>

			<div className="py-2">
				<div className="container">
					<div className="flex items-center justify-between">
						<Image src={logo} alt="igene logo" height={140} width={140} />
						<Bars3Icon width={25} height={25} className="md:hidden" />
						<nav className="hidden md:flex gap-6 items-center">
							<ul className="flex space-x-4 items-center">
								{navLinks.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-600 hover:text-gray-900"
										>
											{link.name}
										</Link>
									</li>
								))} 
								<button className="relative inline-flex   overflow-hidden rounded-lg p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b34bb3_0%,#393BB2_70%,#E2CBFF_100%)]" />
									<span className="inline-flex   w-full cursor-pointer items-center justify-center rounded-lg bg-primary-950 px-3 py-2 text-sm font-medium text-white backdrop-blur-3xl">
										Support
									</span>
								</button>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
