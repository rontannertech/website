import Image from "next/image";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
				<div className="col-span-full xl:col-span-2">
					<a href="/" className="font-bold text-xl flex items-center -mt-3">
						<Image src={"LogoOnlyTransSVG.svg"} width={50} height={50} alt="" />
						Tanner Technology
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Follow Us</h3>
					<div>
						<a
							href="https://www.github.com/rontannertech"
							className="opacity-60 hover:opacity-100"
						>
							Github
						</a>
					</div>

					<div>
						<a
							href="https://www.x.com/rontannertech"
							className="opacity-60 hover:opacity-100"
						>
							Twitter
						</a>
					</div>

					<div>
						<a
							href="https://www.linkedin.com/company/tanner-technology"
							className="opacity-60 hover:opacity-100"
						>
							LinkedIn
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Products</h3>
					<div>
						<a href="#" className="opacity-60 hover:opacity-100">
							Web Development
						</a>
					</div>

					<div>
						<a href="#" className="opacity-60 hover:opacity-100">
							BIMetics
						</a>
					</div>

					<div>
						<a href="#" className="opacity-60 hover:opacity-100">
							Tanner Transcriptor
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">About</h3>
					<div>
						<a href="#features" className="opacity-60 hover:opacity-100">
							Features
						</a>
					</div>

					<div>
						<a href="#services" className="opacity-60 hover:opacity-100">
							Services
						</a>
					</div>

					<div>
						<a href="#faq" className="opacity-60 hover:opacity-100">
							FAQ
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Community</h3>
					<div>
						<a
							href="https://www.youtube.com"
							className="opacity-60 hover:opacity-100"
						>
							Youtube
						</a>
					</div>

					<div>
						<a
							href="https://www.discord.com"
							className="opacity-60 hover:opacity-100"
						>
							Discord
						</a>
					</div>

					<div>
						<a
							href="https://www.twitch.com"
							className="opacity-60 hover:opacity-100"
						>
							Twitch
						</a>
					</div>
				</div>
			</section>

			<section className="container pb-14 text-center">
				<h3>
					&copy; Page developed and made by{" "}
					<a
						target="_blank"
						href="https://github.com/rontannertech"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						Eddie Tanner II
					</a>
				</h3>
			</section>
		</footer>
	);
};
