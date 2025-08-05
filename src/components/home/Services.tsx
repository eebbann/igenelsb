import Link from "next/link";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import {
	AcademicCapIcon,
	UserGroupIcon,
	BeakerIcon,
	ComputerDesktopIcon,
	LightBulbIcon,
	HeartIcon,
	GlobeAltIcon,
	ChartBarIcon,
} from "@heroicons/react/24/outline";

interface Service {
	title: string;
	description: string;
	icon?: string;
	image?: string;
	link?: {
		text: string;
		url: string;
	};
	order: number;
}

interface ServicesProps {
	services: Service[];
}

const iconMap: Record<string, any> = {
	AcademicCapIcon,
	UserGroupIcon,
	BeakerIcon,
	ComputerDesktopIcon,
	LightBulbIcon,
	HeartIcon,
	GlobeAltIcon,
	ChartBarIcon,
};

export const Services = ({ services }: ServicesProps) => {
	if (!services || services.length === 0) {
		return (
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Our Services
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							We're working on exciting new programs and services. Check back
							soon for updates on our innovative life sciences education
							initiatives!
						</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						We offer comprehensive solutions to help you achieve your goals and
						make a positive impact in the community.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const IconComponent = service.icon ? iconMap[service.icon] : null;

						return (
							<div
								key={index}
								className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex items-center mb-4">
									{service.image ? (
										<div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
											<ImageWithFallback
												src={service.image}
												alt={service.title}
												width={48}
												height={48}
												className="object-cover rounded-lg"
												fallbackText={service.title}
											/>
										</div>
									) : IconComponent ? (
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<IconComponent className="w-6 h-6 text-blue-600" />
										</div>
									) : (
										<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
											<LightBulbIcon className="w-6 h-6 text-blue-600" />
										</div>
									)}

									<h3 className="text-xl font-bold text-gray-900">
										{service.title}
									</h3>
								</div>

								<p className="text-gray-600 mb-4">{service.description}</p>

								{service.link && (
									<Link
										href={service.link.url}
										className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
									>
										{service.link.text}
										<svg
											className="w-4 h-4 ml-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
