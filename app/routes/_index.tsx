import { Link } from "@remix-run/react";
import { GetInTouch } from "~/pages/index/components/get-in-touch";
import { OurConsultingServices } from "~/pages/index/components/our-consulting-services";
import { PageHeader, PageHeaderHeading } from "~/components/page-header";
import { Stats } from "~/pages/index/components/stats";
import { Testimonials } from "~/pages/index/components/testimonials";
import { buttonVariants } from "~/components/ui/button";
import { WhatWeOffer } from "~/pages/index/components/what-we-offer";
import { WhyChooseUs } from "~/pages/index/components/why-choose-us";
import { cn } from "~/lib/utils";

export default function Index() {
  return (
    <div className="container relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 right-1 z-40 w-full max-w-lg ">
          <p className="capitalize">PROFESSIONAL EDUCATION CONSULTING</p>
          <PageHeaderHeading className="capitalize">
            TAKE YOUR FUTURE TO NEW HEIGHTS
          </PageHeaderHeading>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="#"
              className={cn(buttonVariants({ className: "text-center" }))}
            >
              Get Started
            </Link>
            <Link
              to="#"
              className={cn(
                buttonVariants({ variant: "outline", className: "text-center" })
              )}
            >
              Learn More
            </Link>
          </div>
        </PageHeader>
        <div className="absolute w-full h-full top-0 left-0 bg-slate-500 bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit2-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"></div>
      </section>
      <OurConsultingServices />
      <WhatWeOffer />
      {/* <Testimonials /> */}
      {/* <WhyChooseUs /> */}
      {/* <Stats /> */}
      {/* <GetInTouch /> */}
    </div>
  );
}
