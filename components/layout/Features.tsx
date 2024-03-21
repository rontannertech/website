import { Badge } from "../ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import image from "@/public/human-centered.png";
import image2 from "@/public/security-compliance.png";
import image3 from "@/public/scalability-futureproofing.png";
import Image, { StaticImageData } from "next/image";

interface FeatureProps {
	title: string;
	description: string;
	image: StaticImageData;
}

const features: FeatureProps[] = [
	{
		title: "Human Centered Approach",
		description:
			"Our AI solutions are designed to augment human capabilities rather than replace them. We focus on how our services can empower people to work more efficiently and creatively.",
		image: image,
	},
	{
		title: "Secure and Compliant",
		description:
			"We emphasize our commitment to data security and compliance with relevant regulations. Building trust with potential clients by demonstrating our robust security practices.",
		image: image2,
	},
	{
		title: "Scalable and Future Proofed",
		description:
			"Demonstrating our ability to scale our solutions to meet the growing needs of clients. Showing our commitment to staying ahead of the curve by implementing future-proof technologies that can adapt to new challenges.",
		image: image3,
	},
];

const featureList: string[] = [
	"Dark/Light Themes",
	"3D Web Features",
	"Cutting-Edge Expertise",
	"Transparency",
	"Iterative Development",
	"Thought Leadership",
	"Responsive Design",
	"Data-Driven Approach",
	"Collaborative Partnerships",
];

export const Features = () => {
	return (
		<section id="features" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				Many{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Great Features
				</span>
			</h2>

			<div className="flex flex-wrap md:justify-center gap-4">
				{featureList.map((feature: string) => (
					<div key={feature}>
						<Badge variant="secondary" className="text-sm">
							{feature}
						</Badge>
					</div>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle className="text-foreground">{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter>
							<Image
								src={image}
								alt="About feature"
								className="w-[200px] lg:w-[300px] mx-auto"
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
