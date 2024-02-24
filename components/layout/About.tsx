import { Statistics } from "./Statistics";
import Image from "next/image";

export const About = () => {
	return (
		<section id="about" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<Image
						src={"/graphic1.svg"}
						width={300}
						height={300}
						alt=""
						className="w-[300px] object-contain rounded-lg"
					/>
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									About{" "}
								</span>
								Company
							</h2>
							<p>
								<strong>Tanner Technology</strong> bridges the gap between
								cutting-edge AI and impactful web development. We are a team of
								passionate experts dedicated to crafting{" "}
								<strong>intelligent solutions</strong> that empower businesses
								to
								<strong> thrive in the digital age.</strong>
							</p>
							<br></br>
							<h3>
								<strong>We Combine:</strong>
							</h3>
							<br></br>
							<ul>
								<li>
									<strong>The power of AI:</strong>
									<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
										<li>
											Machine learning for personalized experiences and{" "}
											<strong>automated workflows</strong>
										</li>
										<li>
											Data-driven insights to{" "}
											<strong>optimize performance</strong> and{" "}
											<strong>drive results.</strong>
										</li>
									</ul>
								</li>
								<br></br>
								<li>
									<strong>Exceptional modern web development:</strong>
									<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
										<li>
											<strong>Intuitive and responsive</strong> user interfaces.
										</li>
										<li>
											<strong>Scalable and secure</strong> solutions tailored to
											your specific needs.
										</li>
									</ul>
								</li>
							</ul>
							<br></br>
							<h3>
								<strong>Our Focus:</strong>
							</h3>
							<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
								<li>
									<strong>Innovation:</strong> We stay at the forefront of AI
									and web development trends, continuously exploring new
									possibilities to deliver{" "}
									<strong>cutting-edge solutions</strong>.
								</li>
								<li>
									<strong>Collaboration:</strong> We partner closely with our
									clients to understand their unique challenges and
									<strong> co-create</strong> solutions that drive success.
								</li>
								<li>
									<strong>Results:</strong> We are driven by{" "}
									<strong>measurable outcomes</strong> and strive to deliver{" "}
									<strong>real-world impact</strong> for our clients.
								</li>
							</ul>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
