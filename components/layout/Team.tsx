import { buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
	socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
	name: string;
	url: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "/Porsche.png",
		name: "Ronald Tanner II",
		position: "President",
		description:
			"My main goal is to help lead my team in the best way I possibly can while keeping up with modern technology standards. We focus on developing our in house strategies around our customers and making sure all our solutions are human centered. Within the AI world today, it can be challenging to not leverage it as much as possible. Yet that can lead away from that unique human touch which we don't want to surpass here.",
		socialNetworks: [
			{ name: "Linkedin", url: "https://linkedin.com/ronald-tanner" },
			{
				name: "X",
				url: "https://x.com/rontannertech",
			},
			{
				name: "GitHub",
				url: "https://github.com/rontannertech",
			},
		],
	},
	{
		imageUrl: "/LogoOnlyTransSVG.svg",
		name: "Jonathan McCoy",
		position: "Vice President",
		description:
			"I will always focus on adapting to the customers project goals and making sure our team can achieve them. From managing restaurants in the early days of my career to adapting to the crazy AI world we are about to live in, I have learned to cater to curveball thrown at us. We have adapted, grown, and leveraged each other to grow as a team and produce successful solutions leading to happy customers.",
		socialNetworks: [
			{ name: "Linkedin", url: "https://linkedin.com/jon-mccoy" },
			{
				name: "X",
				url: "https://x.com/rontannertech",
			},
			{
				name: "GitHub",
				url: "https://github.com/rontannertech",
			},
		],
	},
];

export const Team = () => {
	const socialIcon = (iconName: string) => {
		switch (iconName) {
			case "Linkedin":
				return <Linkedin size="20" />;

			case "GitHub":
				return <GitHubLogoIcon width="20" height="20" />;

			case "X":
				return (
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="fill-foreground w-5 h-5"
					>
						<title>X</title>
						<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
					</svg>
				);
		}
	};

	return (
		<section id="crew" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Our Dedicated{" "}
				</span>
				Crew
			</h2>

			<p className="mt-4 mb-10 text-xl text-muted-foreground">
				Our team of professionals are here to adhere and do our best to complete
				each project to the fullest. We each have over 10 years in software
				development or project management experience!
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-10">
				{teamList.map(
					({
						imageUrl,
						name,
						position,
						description,
						socialNetworks,
					}: TeamProps) => (
						<Card
							key={name}
							className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
						>
							<CardHeader className="mt-8 flex justify-center items-center pb-2">
								<Image
									src={imageUrl}
									width={96}
									height={96}
									alt={`${name} ${position}`}
									className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
								/>
								<CardTitle className="text-center">{name}</CardTitle>
								<CardDescription className="text-primary">
									{position}
								</CardDescription>
							</CardHeader>

							<CardContent className="text-center pb-2">
								<p>{description}</p>
							</CardContent>

							<CardFooter>
								{socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
									<div key={name}>
										<a
											href={url}
											target="_blank"
											className={buttonVariants({
												variant: "ghost",
												size: "sm",
											})}
										>
											<span className="sr-only">{name} icon</span>
											{socialIcon(name)}
										</a>
									</div>
								))}
							</CardFooter>
						</Card>
					)
				)}
			</div>
		</section>
	);
};
