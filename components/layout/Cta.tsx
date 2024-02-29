import Link from "next/link";
import { Button } from "../ui/button";

export const Cta = () => {
	return (
		<section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
			<div className="container lg:grid lg:grid-cols-2 place-items-center">
				<div className="lg:col-start-1">
					<h2 className="text-3xl md:text-4xl font-bold ">
						Sign Up
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							{" "}
							For a Demo{" "}
						</span>
					</h2>
					<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
						Reach out to us and sign up for a consultation or a demo of our
						products in the works! We are hoping to ship out 2 of the 4 by the
						mid year, but we want to make sure our customers needs come first!
					</p>
				</div>

				<div className="space-y-4 lg:col-start-2">
					<Link
						href="https://calendar.app.google/5xzCjGpL2iJEqep58"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Button className="w-full">Request a Demo</Button>
					</Link>
					{/* <Button variant="outline" className="w-full md:w-auto">
            View all features
          </Button> */}
				</div>
			</div>
		</section>
	);
};
