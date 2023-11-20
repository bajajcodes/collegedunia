import { Link } from "@remix-run/react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

export function OurConsultingServices() {
  return (
    <section className="flex flex-col items-center pb-8">
      <PageHeader className="pb-8 items-center">
        <p className="uppercase text-center text-orange-500">
          Don’t Settle For Less
        </p>
        <PageHeaderHeading className="capitalize text-center md:text-left">
          Our Consulting Services
        </PageHeaderHeading>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        <PageHeaderDescription className="leading-8 text-center">
          Catalyst Education Consultancy is one of the{" "}
          <strong>Leading Direct Admission Consultant</strong> in Pune, Mumbai
          and all over India. We provide direct admission in Colleges in Pune,
          Mumbai through institute level empty seats or the management quota
          seats. We also help in{" "}
          <strong>direct admissions for NRI Quota Admissions Seats.</strong>{" "}
          With our rich experience and dependable methodologies combined with
          cost-adequacy we have made incredible progress in putting the correct
          student to the correct institution. We provide admission assistance,
          guidance, and counseling for top colleges and universities in India
          and abroad.
        </PageHeaderDescription>
      </PageHeader>
      <article className="flex flex-col lg:flex-row">
        <Card className="bg-orange-500 p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
          <CardHeader>
            <CardTitle className="text-white">Management Admission</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base text-white leading-8">
              The management field continues to be one of the most sought-after
              fields in India, if not the most sought-after. This makes the
              Medical Courses all the more important.
            </p>
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="management-admission"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Learn More
            </Link>{" "}
          </CardFooter>
        </Card>
        <Card className="p-10 grid place-items-center text-center shadow-xl  md:max-w-xs">
          <CardHeader>
            <CardTitle>Engineering Admission</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base text-black leading-8">
              Around 35-45 lakh people enrol in B Tech courses every year. This
              leads to increased competition for courses as well as confusion
              regarding the Engineering course in India.
            </p>
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="engineering-admission"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Learn More
            </Link>{" "}
          </CardFooter>
        </Card>
        <Card className="bg-blue-500 p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
          <CardHeader>
            <CardTitle className="text-white">Medical Admission</CardTitle>
          </CardHeader>
          <CardDescription>
            <p className="font-medium text-base text-white leading-8">
              Every year, thousands of students across the country vie for
              admissions into medical schools in India. Hence the Competition
              for getting into a medical program is high.
            </p>
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="medical-admission"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Learn More
            </Link>{" "}
          </CardFooter>
        </Card>
      </article>
    </section>
  );
}
