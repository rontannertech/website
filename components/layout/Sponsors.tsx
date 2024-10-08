import { Radar } from "lucide-react";
import Image from "next/image";

interface SponsorProps {
	icon: JSX.Element;
	logo: JSX.Element;
	name: string;
}

const sponsors: SponsorProps[] = [
	{
		icon: <Radar size={48} />,
		logo: (
			<Image src="/RADcube_logo 1.png" alt="RADcube" height={48} width={180} />
		),
		name: "RADcube",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image src="/Ford_logo_flat.png" alt="Ford" height={48} width={180} />
		),
		name: "Ford Motor Company",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image
				src="/medtronic-logo-combined.png"
				alt="Medtronic"
				height={48}
				width={180}
			/>
		),
		name: "Medtronic",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image
				src="/versanteconnect.svg"
				alt="Versante"
				height={48}
				width={180}
			/>
		),
		name: "Versante",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image src="/motorvault.png" alt="Motorvault" height={48} width={180} />
		),
		name: "Motorvault",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image src="/iu health.png" alt="IU Health" height={48} width={180} />
		),
		name: "IU Health",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image
				src="/purdue.png"
				alt="Purdue University"
				height={48}
				width={180}
			/>
		),
		name: "Purdue University",
	},
	{
		icon: <Radar size={48} />,
		logo: <Image src="/milliman.png" alt="Milliman" height={48} width={180} />,
		name: "Milliman",
	},
	{
		icon: <Radar size={48} />,
		logo: (
			<Image
				src="/orc.png"
				alt="Off Road Campers LLC"
				height={48}
				width={180}
			/>
		),
		name: "Off Road Campers LLC",
	},
];

export const Sponsors = () => {
	return (
		<section
			id="sponsors"
			className="bg-gradient-to-b from-[#BF9251]  to-blue-600 py-24 sm:py-24"
		>
			<div className="container">
				<h2 className="text-center text-4xl lg:text-4xl font-bold mb-8">
					Investors
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						{" "}
						&{" "}
					</span>
					Partners
				</h2>

				<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
					{sponsors.map(({ icon, logo, name }: SponsorProps) => (
						<div key={name} className="flex items-center gap-1 h-12">
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
