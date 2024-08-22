import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
	MedalIcon,
	MapIcon,
	PlaneIcon,
	GiftIcon,
	LightBulbIcon,
} from "../layout/Icons";
import {
	FlaskConicalIcon,
	GemIcon,
	LightbulbIcon,
	PaintbrushIcon,
} from "lucide-react";

interface FeatureProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

const features: FeatureProps[] = [
	{
		icon: <LightbulbIcon className="w-12 h-12 stroke-foreground" />,
		title: "Define",
		description:
			"This initial step involves understanding the problem and gathering input from stakeholders to define user stories and clear requirements for the software.",
		// "This initial step involves understanding the problem or need the software aims to address. We  work together to gather input from stakeholders, define user stories, and establish clear and measurable requirements. This ensures everyone involved has a shared understanding of the project's objectives and ensures the final product aligns with those goals.",
	},
	{
		icon: <PaintbrushIcon className="w-12 h-12 stroke-foreground" />,
		title: "Design",
		description:
			"The team collaboratively defines the software’s architecture, UI, and workflow, considering programming languages, frameworks, and tools, to ensure a well-designed and efficient solution that meets established requirements.",
		//"Once the requirements are established, the team collaboratively defines the software's architecture, user interface (UI), and overall workflow. This includes decisions about programming languages, frameworks, and development tools. Collaboration is crucial to ensure a well-designed and efficient solution that considers various perspectives and potential challenges.",
	},
	{
		icon: <FlaskConicalIcon className="w-12 h-12 stroke-foreground" />,
		title: "Develop",
		description:
			"This phase involves building the software according to a defined plan, using collaborative tools and practices to ensure code quality with efficient teamwork.",
		//"With a defined plan in place, the development phase involves building the software. This stage often utilizes collaborative tools and practices such as version control systems, code reviews, and pair programming to ensure code quality, consistency, and efficient collaboration between individual developers.",
	},
	{
		icon: <GemIcon className="w-12 h-12 stroke-foreground" />,
		title: "Deploy",
		description:
			"Once software is built, it undergoes thorough testing to identify and fix issues, ensuring it meets user needs through collaborative strategies and ongoing feedback.",
		//	"Once the software is built, it undergoes rigorous testing to identify and fix bugs or ensure it meets user expectations. Collaborative testing strategies, involving both developers and testers, help ensure comprehensive evaluation and a smooth deployment process. Continuous feedback and communication are essential throughout this stage.",
	},
];

export const HowItWorks = () => {
	return (
		<section id="step-by-step" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold md:w-3/4 mx-auto mt-4 mb-8 ">
				Define.{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Design.{" "}
				</span>
				Develop.{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Deploy.{" "}
				</span>
			</h2>
			{/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
				These four steps represent a general framework, and the specific
				collaboration processes might vary depending on the nature of the
				project, size, and methodology used. However, fostering collaboration
				throughout these stages is critical for our successful software
				development projects.
			</p> */}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map(({ icon, title, description }: FeatureProps) => (
					<Card key={title} className="bg-muted/50">
						<CardHeader>
							<CardTitle className="grid gap-4 place-items-center text-foreground">
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
