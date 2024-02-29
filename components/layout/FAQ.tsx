import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
	question: string;
	answer: string;
	value: string;
}

const FAQList: FAQProps[] = [
	{
		question: "Do you do free projects or PoC's?",
		answer:
			"Yes, under the specific circumstances. Book a consultation and we can go over it. We want to help as much as we can.",
		value: "item-1",
	},
	{
		question:
			"Do you provide details around your AI Governance and Security protocols?",
		answer:
			"We get this question more than any other, and yes we do. We have multiple sets of documentation around how to keep our AI solutions safe and governed properly to each project.",
		value: "item-2",
	},
	{
		question:
			"Is there a way that we can work along side you with development projects or do you only do it all in house?",
		answer:
			"We would love to work with other teams! We want to, in fact. Collaboration is key in all regards of business and we want to help you just as much as we want help from you.",
		value: "item-3",
	},
	{
		question:
			"Do you list or allow changes of specific tools that you use for your development process?",
		answer:
			"Of course, our developers have a wide range of skillsets that allow us to leverage the latest greatest technologies. While we do focus on keeping up-to-date on that side of things, we understand that companies are still behind and cannot get there yet and we will adhere to those needs when presented.",
		value: "item-4",
	},
	{
		question:
			"Do you only do solutions or do you do consulting or placement of developers?",
		answer:
			"Right now we don't place developers, but we will help find and do interviews to help align with your needs. Our focus is to help you along your journey as much as we can. If that's buidling the solution ourselves or helping guide your team to greatness.",
		value: "item-5",
	},
];

export const FAQ = () => {
	return (
		<section id="faq" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">
				Frequently Asked{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Questions
				</span>
			</h2>

			<Accordion type="single" collapsible className="w-full AccordionRoot">
				{FAQList.map(({ question, answer, value }: FAQProps) => (
					<AccordionItem key={value} value={value}>
						<AccordionTrigger className="text-left">
							{question}
						</AccordionTrigger>

						<AccordionContent className="text-primary">
							{answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className="font-medium mt-4">
				Still have questions?{" "}
				<a
					href="https://calendar.app.google/5xzCjGpL2iJEqep58"
					className="text-primary transition-all border-primary hover:border-b-2"
				>
					Contact us
				</a>
			</h3>
		</section>
	);
};
