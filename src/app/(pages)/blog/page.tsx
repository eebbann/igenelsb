import Image from "next/image";
import Link from "next/link";
import card from "@/assets/ren.jpg";
import { Hero } from "@/components/banner/Hero";
const Blog = () => {
	return (
		<section className="bg-secondary-950">
			<Hero
				title=" Igene Events & News"
				description="find out latest on 
					Life science and more"
				// Now TypeScript knows this is a valid image type
			/>
			<div className="container">
				<div className="text-white"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 pb-24 gap-8 md:mt-12 mt-24">
					<div className="flex group flex-col gap-8">
						<div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
							<Link href="/blog/a">
								<Image
									src={card}
									alt="Blog A"
									width={330}
									height={330}
									className="w-full h-full group-hover:scale-110 duration-300 object-cover"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-primary-950 text-sub-title mb-4">
									<Link href="/blog/synthetic-biology-future">
										Synthetic Biology: Engineering Life to Solve Global
										Challenges
									</Link>
								</h3>
								<p className="text-neutral-400">
									From producing sustainable materials to creating novel
									therapeutics, synthetic biology is reshaping our approach to
									global problems. Explore how scientists are redesigning living
									systems for a better future.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6 mt-6">
							<div className="flex items-center gap-3">
								<Image
									src={card}
									alt="Bruno"
									height={40}
									width={40}
									className="h-[40px] object-cover rounded-full"
								/>
								<span className="text-primary-950">Leslie Alexander</span>
							</div>
							<span className="text-primary-950">9 min read</span>
						</div>
					</div>
					<div className="flex group flex-col gap-8">
						<div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
							<Link href="/blog/a">
								<Image
									src={card}
									alt="Blog A"
									width={330}
									height={330}
									className="w-full h-full group-hover:scale-110 duration-300 object-cover"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-primary-950 text-sub-title mb-4">
									<Link href="/blog/gene-therapy-renaissance">
										The Gene Therapy Renaissance: New Hope for Rare Disease
										Treatment
									</Link>
								</h3>
								<p className="text-neutral-400">
									After decades of setbacks, gene therapy is making a dramatic
									comeback. Learn about the innovative delivery methods and
									successful treatments giving hope to patients with rare
									genetic disorders.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6 mt-6">
							<div className="flex items-center gap-3">
								<Image
									src={card}
									alt="Bruno"
									height={40}
									width={40}
									className="h-[40px] object-cover rounded-full"
								/>
								<span className="text-primary-950">Leslie Alexander</span>
							</div>
							<span className="text-primary-950">9 min read</span>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 pb-24 gap-8 md:mt-12 mt-24">
					<div className="flex group flex-col gap-8">
						<div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
							<Link href="/blog/a">
								<Image
									src={card}
									alt="Blog A"
									width={330}
									height={330}
									className="w-full h-full group-hover:scale-110 duration-300 object-cover"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-primary-950 text-sub-title mb-4">
									<Link href="/blog/a">
										Harnessing the Power of the Sun: Exploring the World of
										Solar Energy
									</Link>
								</h3>
								<p className="text-neutral-400">
									Solar energy is revolutionizing the way we power our world. In
									this blog post,sustainable energy source for a brighter
									future.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6 mt-6">
							<div className="flex items-center gap-3">
								<Image
									src={card}
									alt="Bruno"
									height={40}
									width={40}
									className="h-[40px] object-cover rounded-full"
								/>
								<span className="text-primary-950">Leslie Alexander</span>
							</div>
							<span className="text-primary-950">9 min read</span>
						</div>
					</div>
					<div className="flex group flex-col gap-8">
						<div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
							<Link href="/blog/a">
								<Image
									src={card}
									alt="Blog A"
									width={330}
									height={330}
									className="w-full h-full group-hover:scale-110 duration-300 object-cover"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-primary-950 text-sub-title mb-4">
									<Link href="/blog/latest-crispr-developments">
										Breaking Ground in Gene Editing: Latest CRISPR Applications
										in Medicine
									</Link>
								</h3>
								<p className="text-neutral-400">
									Recent breakthroughs in CRISPR technology are revolutionizing
									genetic medicine. Discover how these advances are transforming
									treatment possibilities for inherited diseases.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6 mt-6">
							<div className="flex items-center gap-3">
								<Image
									src={card}
									alt="Bruno"
									height={40}
									width={40}
									className="h-[40px] object-cover rounded-full"
								/>
								<span className="text-primary-950">Leslie Alexander</span>
							</div>
							<span className="text-primary-950">9 min read</span>
						</div>
					</div>
					<div className="flex group flex-col gap-8">
						<div className="aspect-video rounded-3xl overflow-hidden h-[360px]">
							<Link href="/blog/a">
								<Image
									src={card}
									alt="Blog A"
									width={330}
									height={330}
									className="w-full h-full group-hover:scale-110 duration-300 object-cover"
								/>
							</Link>
						</div>
						<div>
							<div>
								<h3 className="text-primary-950 text-sub-title mb-4">
									<Link href="/blog/a">
										Harnessing the Power of the Sun: Exploring the World of
										Solar Energy
									</Link>
								</h3>
								<p className="text-neutral-400">
									Solar energy is revolutionizing the way we power our world. In
									this blog post,sustainable energy source for a brighter
									future.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-6 mt-6">
							<div className="flex items-center gap-3">
								<Image
									src={card}
									alt="Bruno"
									height={40}
									width={40}
									className="h-[40px] object-cover rounded-full"
								/>
								<span className="text-primary-950">Leslie Alexander</span>
							</div>
							<span className="text-primary-950">9 min read</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
