import { Link } from '@remix-run/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { StyledPageHeaderHeading } from '~/components/typography';
import { buttonVariants } from '~/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { cn } from '~/lib/utils';

export function OurConsultingServices({
  showDescription = false,
}: {
  showDescription?: boolean;
}) {
  return (
    <section className="flex flex-col items-center pb-8">
      <PageHeader className="pb-8 items-center">
        <p className="uppercase text-center text-orange-500">
          Don’t Settle For Less
        </p>
        <StyledPageHeaderHeading className="capitalize text-center md:text-left">
          Our Consulting Services
        </StyledPageHeaderHeading>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        {showDescription && (
          <PageHeaderDescription className="leading-8 text-center flex flex-col gap-4 ">
            <span>
              Step into Educom Guidance, your reliable ally in the realm of
              education consulting services! We recognize the intricacies of
              navigating the educational landscape and have seasoned education
              consultants ready to streamline the journey towards your success.
              Whether you're a ambitious student eyeing higher education, a
              parent in pursuit of optimal educational opportunities for your
              child, or an institution aiming to elevate academic excellence,
              our team of seasoned education consultants is committed to
              supporting you at every turn.
            </span>
            <span>
              <strong>With a substantial legacy of 14 years</strong>, we excel
              in education consulting services. Specializing in MBA
              consultation, engineering consultation, and medical admission
              consultation, we are devoted to ensuring that aspiring students
              reach their academic and professional aspirations. What sets us
              apart is our extensive network,{' '}
              <strong>
                connecting us with 100+ premier colleges across India
              </strong>
              .
            </span>
          </PageHeaderDescription>
        )}
      </PageHeader>
      <article className="flex flex-col lg:flex-row">
        <Card className="bg-orange-500 p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
          <CardHeader>
            <CardTitle className="text-white">Management Admission</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base text-white leading-8">
            The management field continues to be one of the most sought-after
            fields in India, if not the most sought-after. This makes the
            Medical Courses all the more important.
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="/management-admission"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Learn More
            </Link>{' '}
          </CardFooter>
        </Card>
        <Card className="p-10 grid place-items-center text-center shadow-xl  md:max-w-xs">
          <CardHeader>
            <CardTitle>Engineering Admission</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base text-black leading-8">
            Around 35-45 lakh people enrol in B Tech courses every year. This
            leads to increased competition for courses as well as confusion
            regarding the Engineering course in India.
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="/engineering-admission"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Learn More
            </Link>{' '}
          </CardFooter>
        </Card>
        <Card className="bg-educom p-10 grid place-items-center text-center shadow-md md:mt-10 md:mb-10 md:max-w-xs">
          <CardHeader>
            <CardTitle className="text-white">Medical Admission</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base text-white leading-8">
            Every year, thousands of students across the country vie for
            admissions into medical schools in India. Hence the Competition for
            getting into a medical program is high.
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="/medical-admission"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Learn More
            </Link>{' '}
          </CardFooter>
        </Card>
      </article>
    </section>
  );
}
