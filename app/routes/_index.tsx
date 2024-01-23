import { Link } from '@remix-run/react';
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { Stats } from '~/pages/index/components/stats';
import { Testimonials } from '~/pages/index/components/testimonials';
import { buttonVariants } from '~/components/ui/button';
import { WhatWeOffer } from '~/pages/index/components/what-we-offer';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';
import { cn, validationAction } from '~/lib/utils';
import { GetInTouchFormSchema } from '~/data/schema';
import type { GetInTouchFormInput } from '~/pages/index/components/get-in-touch-form';
import { homePageTestimonials } from '~/data/testimonials.data';
import homePageHeader from '~/images/HomePage.jpg';
import homePageHeaderWebP from '~/images/HomePage.webp';
import aboutUsFirst from '~/images/about-us-1.jpg';
import aboutUsSecond from '~/images/about-us-2.jpg';
import aboutUsThird from '~/images/about-us-3.jpg';
import aboutUsFourth from '~/images/about-us-4.jpg';

import { navConfig } from '~/config/nav';
import { StyledPageHeaderHeading } from '~/components/typography';

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
  const allAdmissionPageHref = navConfig.mobileNav.at(0)!.items;

  return (
    <div className="container relative mb-8">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-1 z-40 w-full max-w-lg ">
          <p className="capitalize">TAKE YOUR FUTURE TO NEW HEIGHTS</p>
          <PageHeaderHeading className="capitalize">
            Explore expert education consultants for personalized guidance
          </PageHeaderHeading>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to="/contact-us"
              className={cn(buttonVariants({ className: 'text-center' }))}
            >
              Schedule your Free Consultation Now
            </Link>
          </div>
        </PageHeader>
        <div className="relative w-full h-full bg-blend-screen bg-opacity-30 bg-slate-500">
          <picture>
            <source srcSet={homePageHeaderWebP} type="image/webp" />
            <img
              src={homePageHeader}
              alt="Page Header Background"
              className="w-full h-full object-cover object-center absolute"
            />
          </picture>
        </div>
      </section>
      <Stats />
      <section className="flex flex-col items-center md:flex-row pt-4 pb-8 m-auto">
        <PageHeader className="items-center">
          <StyledPageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            About Us
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-2 leading-8 text-center">
            <span>
              Educom Guidance is a leading education consultancy, dedicated to
              personalized guidance with a rich 14-year legacy. Specializing in
              &nbsp;
              <Link
                to={allAdmissionPageHref[0].to}
                className="hover:text-educom"
              >
                <>MBA admission</>
              </Link>
              ,&nbsp;
              <Link
                to={allAdmissionPageHref[1].to}
                className="hover:text-educom"
              >
                Engineering admission
              </Link>
              , and&nbsp;
              <Link
                to={allAdmissionPageHref[2].to}
                className="hover:text-educom"
              >
                Medical admissions
              </Link>
              , we acknowledge the complexities of navigating the educational
              landscape. Our seasoned education consultants, with their wealth
              of experience, excel in simplifying intricate processes and
              guiding individuals toward success.
            </span>
            <span>
              We take pride in our extensive network, connected with 200+ top
              colleges and universities in India. With over 5000 success
              stories, Educom Guidance is a trusted partner illuminating the
              path to educational achievement in business, engineering, and
              medicine.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <div className="w-full h-full max-w-md relative bg-educom p-1 mt-2 md:mt-0">
          <div className="flex mb-1 gap-1">
            <div className="w-full h-full relative flex-1 bg-blend-screen bg-opacity-50 bg-educom/5">
              <img
                src={aboutUsFirst}
                alt="Why Choose Us Article Thumbnail"
                className="aspect-auto w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full h-full relative flex-1 bg-blend-screen bg-opacity-50 bg-educom/5">
              <img
                src={aboutUsSecond}
                alt="Why Choose Us Article Thumbnail"
                className="aspect-auto w-full h-full object-cover object-center"
              />
            </div>{' '}
          </div>
          <div className="flex gap-1">
            <div className="w-full h-full relative flex-1 bg-blend-screen bg-opacity-50 bg-educom/5">
              <img
                src={aboutUsThird}
                alt="Why Choose Us Article Thumbnail"
                className="aspect-auto w-full h-full object-cover object-center"
              />
            </div>{' '}
            <div className="w-full h-full relative flex-1 bg-blend-screen bg-opacity-50 bg-educom/5">
              <img
                src={aboutUsFourth}
                alt="Why Choose Us Article Thumbnail"
                className="aspect-auto w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <WhatWeOffer />
      <Testimonials testimonials={homePageTestimonials} />
      <WhyChooseUs />
      <GetInTouch showContactInfo></GetInTouch>
    </div>
  );
}
