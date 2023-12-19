import { Link } from '@remix-run/react';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';
import { PageHeader, PageHeaderHeading } from '~/components/page-header';
import { Stats } from '~/pages/index/components/stats';
import { Testimonials } from '~/pages/index/components/testimonials';
import { buttonVariants } from '~/components/ui/button';
import { WhatWeOffer } from '~/pages/index/components/what-we-offer';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';
import { cn, validationAction } from '~/lib/utils';
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { GetInTouchFormSchema } from '~/data/schema';
import type { GetInTouchFormInput } from '~/pages/index/components/get-in-touch-form';
import homePageHeader from 'app/images/educom-home-page-pageheader.jpeg';
import { homePageTestimonials } from '~/data/testimonials.data';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<GetInTouchFormInput>({
    request,
    schema: GetInTouchFormSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};

export default function Index() {
  return (
    <div className="container relative mb-8">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 right-1 z-40 w-full max-w-lg ">
          <p className="capitalize">
            Explore expert education consultants for personalized guidance
          </p>
          <PageHeaderHeading className="capitalize">
            TAKE YOUR FUTURE TO NEW HEIGHTS
          </PageHeaderHeading>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="/contact-us"
              className={cn(buttonVariants({ className: 'text-center' }))}
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className={cn(
                buttonVariants({ variant: 'outline', className: 'text-center' })
              )}
            >
              Learn More
            </Link>
          </div>
        </PageHeader>
        <div className="relative w-full h-full">
          <img
            src={homePageHeader}
            alt="Page Header Background"
            className="w-full h-full object-cover object-center absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-30 bg-slate-500"></div>
        </div>
      </section>
      <OurConsultingServices showDescription />
      <WhatWeOffer />
      <Testimonials testimonials={homePageTestimonials} />
      <WhyChooseUs />
      <Stats />
      <GetInTouch showContactInfo></GetInTouch>
    </div>
  );
}
