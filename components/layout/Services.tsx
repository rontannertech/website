import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../../assets/cube-leg.png";
import Image from "next/image";
import Particles from "../spline/particles";

interface ServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
	{
		title: "Consultative Discovery and Solution Design",
		description: `Deep-Dive Needs Analysis: Conduct comprehensive interviews and workshops with clients to understand their unique pain points, goals, and existing tech infrastructure.
      Custom AI Roadmap: Develop a tailored plan outlining AI implementation, potential ROI projections, and a phased approach to minimize disruption.
      Innovation Workshops: Facilitate ideation sessions with client teams to identify high-impact areas where AI and custom development can streamline processes or create new revenue streams.`,
		icon: <ChartIcon />,
	},
	{
		title: "Proof of Concepts (PoCs) and Prototyping",
		description: `Rapid Prototyping: Quickly build functional prototypes to demonstrate the feasibility and potential user experience of AI-powered features or new software modules.
      Targeted PoCs: Develop focused PoCs to prove the effectiveness of a specific AI algorithm or solution in the context of the client's real-world data.
      Iterative Feedback Loop: Incorporate client feedback throughout PoC development, ensuring solutions align perfectly with their needs.`,
		icon: <WalletIcon />,
	},
	{
		title: "AI-Driven Solutions",
		description: `Computer Vision Solutions: Develop solutions for image/video analysis, object recognition, and automation across various industries (e.g., manufacturing quality control, security, retail analytics).
      NLP-Based Solutions: Build intelligent chatbots, sentiment analysis tools, content recommendation systems, and other applications leveraging natural language processing.
      Predictive Analytics and Forecasting: Create models for demand prediction, sales forecasting, risk assessment, and other data-driven decision-making processes.
      Process Automation and Optimization: Engineer AI-powered solutions to automate repetitive tasks, optimize workflows, and improve overall operational efficiency.`,
		icon: <MagnifierIcon />,
	},
	{
		title: "Custom Software Development",
		description: `Cloud-Native Applications: Build scalable, cloud-based web and mobile applications employing modern architectures and best practices.
      Data Pipelines and Integrations: Design robust ETL processes to connect disparate data sources, and integrate applications seamlessly.
      Modern UI/UX Design: Prioritize intuitive and user-friendly experiences across web and mobile platforms.
      DevOps and CI/CD: Implement automation practices to accelerate development cycles and ensure the rapid delivery of high-quality software.`,
		icon: <MagnifierIcon />,
	},
];

export const Services = () => {
	return (
		<section className="container py-24 sm:py-32">
			<div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							Client-Centric{" "}
						</span>
						Services
					</h2>

					<p className="text-muted-foreground text-xl mt-4 mb-8 ">
						Collaborative Partnership: Treat clients as true partners, involving
						them throughout development and decision-making. Transparency and
						Communication: Maintain open lines of communication, regularly
						providing updates, and seeking client input. Flexibility and
						Agility: Adapt to changing client needs and priorities with an agile
						development mindset. Measurable Results: Focus on delivering
						tangible business outcomes and demonstrate the ROI of the
						implemented solutions.
					</p>

					<div className="flex flex-col gap-8">
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
									<div className="mt-1 bg-primary/20 p-1 rounded-2xl">
										{icon}
									</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className="text-md mt-2">
											{description}
										</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<div className="h-[300px] md:h-[500px] lg:h-[600px] w-[300px] md:w-[500px] lg:w-[600px] object-contain">
					<Particles />
				</div>
			</div>
		</section>
	);
};
