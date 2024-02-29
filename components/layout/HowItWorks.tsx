import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../layout/Icons";

interface FeatureProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

const features: FeatureProps[] = [
	{
		icon: <MedalIcon />,
		title: "Definition",
		description:
			"This initial step involves understanding the problem or need the software aims to address. We  work together to gather input from stakeholders, define user stories, and establish clear and measurable requirements. This ensures everyone involved has a shared understanding of the project's objectives and ensures the final product aligns with those goals.",
	},
	{
		icon: <MapIcon />,
		title: "Design",
		description:
			"Once the requirements are established, the team collaboratively defines the software's architecture, user interface (UI), and overall workflow. This includes decisions about programming languages, frameworks, and development tools. Collaboration is crucial to ensure a well-designed and efficient solution that considers various perspectives and potential challenges.",
	},
	{
		icon: <PlaneIcon />,
		title: "Development",
		description:
			"With a defined plan in place, the development phase involves building the software. This stage often utilizes collaborative tools and practices such as version control systems, code reviews, and pair programming to ensure code quality, consistency, and efficient collaboration between individual developers.",
	},
	{
		icon: <GiftIcon />,
		title: "Deployment",
		description:
			"Once the software is built, it undergoes rigorous testing to identify and fix bugs or ensure it meets user expectations. Collaborative testing strategies, involving both developers and testers, help ensure comprehensive evaluation and a smooth deployment process. Continuous feedback and communication are essential throughout this stage.",
	},
];

export const HowItWorks = () => {
	return (
		<section id="step-by-step" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold ">
				How We{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Work{" "}
				</span>
				Step-by-Step Guide
			</h2>
			<p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
				These four steps represent a general framework, and the specific
				collaboration processes might vary depending on the nature of the
				project, size, and methodology used. However, fostering collaboration
				throughout these stages is critical for our successful software
				development projects.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map(({ icon, title, description }: FeatureProps) => (
					<Card key={title} className="bg-muted/50">
						<CardHeader>
							<CardTitle className="grid gap-4 place-items-center">
								{icon}
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent>{description}</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
