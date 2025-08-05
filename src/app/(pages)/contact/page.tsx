import { getContactPage } from "@/sanity/queries/contact";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Hero } from "@/components/banner/Hero";

export default async function ContactPage() {
	const data = await getContactPage();

	// Default values to prevent crashes
	const heroData = data?.hero || {
		heading: "Contact I-Gene",
		subheading:
			"Connect with our team to learn more about our programs, partnerships, or how you can get involved in transforming life sciences education across Africa. We're here to help students, educators, and organizations join our mission.",
		heroImage: "",
		altText: "Contact I-Gene",
	};

	const contactInfo = data?.contactInfo || {
		email: "info@igene.org",
		phone: "+234 (0) 123 456 7890",
		address: {
			street: "Innovation Hub, Science District",
			city: "Lagos",
			state: "Lagos State",
			country: "Nigeria",
			postalCode: "100001",
		},
		officeHours: {
			weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
			weekends: "Saturday: 10:00 AM - 4:00 PM",
			timezone: "West Africa Time (WAT)",
		},
	};

	const socialMedia = data?.socialMedia || {
		twitter: "https://twitter.com/igene_africa",
		linkedin: "https://linkedin.com/company/igene-africa",
		facebook: "https://facebook.com/igene.africa",
		instagram: "https://instagram.com/igene_africa",
		youtube: "https://youtube.com/@igene-africa",
	};
	const formFields = data?.formFields || [
		{
			name: "name",
			type: "text",
			required: true,
			placeholder: "Your Name",
		},
		{
			name: "email",
			type: "email",
			required: true,
			placeholder: "Your Email",
		},
		{
			name: "message",
			type: "textarea",
			required: true,
			placeholder: "Your Message",
		},
	];

	return (
		<div>
			<Hero
				isHomePage={false}
				heading={heroData.heading}
				subheading={heroData.subheading}
				heroImage={heroData.heroImage}
				altText={heroData.altText}
			/>

			<div className="container mx-auto px-4 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ContactInfo contactInfo={contactInfo} socialMedia={socialMedia} />
					<ContactForm formFields={formFields} />
				</div>
			</div>
		</div>
	);
}
