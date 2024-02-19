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
import LogoSpin from "../spline/logoSpin";
import MobileSpin from "../spline/mobileSpin";

export const Hero = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div className="md:hidden">
          <MobileSpin />
        </div>
        <div className="hidden md:flex">
          <LogoSpin />
        </div>
        <div>
          <div className="flex flex-col gap-8 my-2">
            <Card>
              <CardHeader className="flex justify-center items-center pb-2">
                <Image
                  src="/Porsche.png"
                  width={75}
                  height={75}
                  alt="user avatar"
                  className="rounded-full aspect-square object-cover mb-2"
                />
                <CardTitle className="text-center">Ronald Tanner II</CardTitle>
                <CardDescription className="font-normal text-primary">
                  President
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  I want to make a difference for smaller companies that do not
                  get the chance to have enterprise solutions. Every company
                  large or small deserve the same treatment.
                </p>
              </CardContent>

              <CardFooter className="justify-center">
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
          </div>

          <div className="flex flex-col gap-8 my-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  Free Consultation
                  <Badge
                    variant="secondary"
                    className="text-xs justify-center text-nowrap text-primary"
                  >
                    Most Popular
                  </Badge>
                </CardTitle>

                <CardDescription>
                  Meeting exploring your software needs. Our way to connect with
                  you understand your problem and how we can help solve it along
                  side you.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Link
                  href="https://calendar.app.google/5xzCjGpL2iJEqep58"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="w-full">
                    Create Consultation Meeting
                  </Button>
                </Link>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {[
                    "Free",
                    "30 min meeting",
                    "Leads to project initialization",
                  ].map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" />{" "}
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
