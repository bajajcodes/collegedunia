import type { MetaFunction } from "@remix-run/react";
import { Link } from "@remix-run/react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Engineering Admissions" },
    {
      name: "description",
      content: "Get Admission in Engineering",
    },
  ];
};

export default function EngineeringAdmissions() {
  return (
    <div className="relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">
            PROFESSIONAL EDUCATION CONSULTING
          </p>
          <PageHeaderHeading className="capitalize">
            ENGINEERING ADMISSIONS
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            Engineering is one of the most preferred courses. Around 35-45 lakh
            people enroll in one or the other B Tech course every year.Know how
            to apply for engineering admissions.
          </PageHeaderDescription>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="services"
              className={cn(
                buttonVariants({ variant: "outline", className: "text-center" })
              )}
            >
              Apply Now
            </Link>
          </div>
        </PageHeader>
        {/* TODO: replace image url with own asset url */}
        <div className="w-full h-full bg-[#0C71C3] bg-[url('https://catalysteducations.com/wp-content/uploads/2022/12/edit-3-1-scaled.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-screen"></div>
      </section>
      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TYPES OF ENGINEERING COURSES
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Branches
          </PageHeaderHeading>
          <PageHeaderDescription>
            Section Under Development
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        {/* TODO: use carousel */}
      </section>
    </div>
  );
}
