import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, Lightbulb } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] h-[220px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="kenPowell.png" />
            <AvatarFallback>KP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ken Powell</CardTitle>
            <CardDescription>K1X, Inc.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Their AI tools allowed us to reduce our workflow by over 4 hours each
          day. Good group of guys who know their stuff and are easy to work
          with.
        </CardContent>
      </Card>

      {/* President */}
      <Card className="absolute right-[35px] w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src="LogoOnlyTransSVG.svg"
            width={24}
            height={24}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Ronald Tanner II</CardTitle>
          <CardDescription className="font-normal text-primary">
            President
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I want to make a difference for smaller companies that do not get
            the chance to have enterprise solutions. Every company large or
            small deserve the same treatment.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://github.com/rontannertech"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/rontannertech"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/ronald-tanner"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[230px] w-[340px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free Consultantion
            <Badge
              variant="secondary"
              className="text-sm text-center text-primary w-[125px]"
            >
              Most Popular
            </Badge>
          </CardTitle>

          <CardDescription>
            Meeting exploring your software needs. Our way to connect with you
            understand your problem and how we can help solve it along side you.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Link
            href="https://calendar.app.google/5xzCjGpL2iJEqep58"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="w-full">Create Consultation Meeting</Button>
          </Link>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Free", "30 min meeting", "Leads to project initialization"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[320px] right-[35px] -bottom-[118px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-3xl">
            <Lightbulb className="h-8 w-8 stroke-[#fbff00]" />
          </div>
          <div>
            <CardTitle>Custom Solutions</CardTitle>
            <CardDescription className="text-md mt-2">
              We cater to your company needs. Training new LLMs around your
              business, developing applications within and externally, cloud
              connection to all major services, and unique UI/UX feel on both 2D
              and 3D interactivity.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
