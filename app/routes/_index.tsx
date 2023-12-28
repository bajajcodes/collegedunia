import { Link } from '@remix-run/react';
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
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { GetInTouchFormSchema } from '~/data/schema';
import type { GetInTouchFormInput } from '~/pages/index/components/get-in-touch-form';
import homePageHeader from 'app/images/educom-home-page-pageheader.jpeg';
import { homePageTestimonials } from '~/data/testimonials.data';
import thumbnail from '~/images/about-us.jpeg';
import { navConfig } from '~/config/nav';

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
        <PageHeader className="pb-8 absolute top-16 right-1 z-40 w-full max-w-lg ">
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
        <div className="relative w-full h-full">
          <img
            src={homePageHeader}
            alt="Page Header Background"
            className="w-full h-full object-cover object-center abs"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-30 bg-slate-500"></div>
        </div>
      </section>
      <section className="flex flex-col items-center lg:flex-row gap-8">
        <div className="bg-educom p-8 m-8  grid grid-rows-2 grid-cols-2 gap-4">
          <div className="w-full h-full relative">
            <img
              src={thumbnail}
              alt="Why Choose Us Article Thumbnail"
              className="aspect-auto w-full h-full object-cover object-center"
            />
            <div
              className={
                'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-educom/5'
              }
            ></div>
          </div>
          <div className="w-full h-full relative">
            <img
              src={thumbnail}
              alt="Why Choose Us Article Thumbnail"
              className="aspect-auto w-full h-full object-cover object-center"
            />
            <div
              className={
                'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-educom/5'
              }
            ></div>
          </div>
          <div className="w-full h-full relative">
            <img
              src={thumbnail}
              alt="Why Choose Us Article Thumbnail"
              className="aspect-auto w-full h-full object-cover object-center"
            />
            <div
              className={
                'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-educom/5'
              }
            ></div>
          </div>
          <div className="w-full h-full relative">
            <img
              src={thumbnail}
              alt="Why Choose Us Article Thumbnail"
              className="aspect-auto w-full h-full object-cover object-center"
            />
            <div
              className={
                'w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-50 bg-educom/5'
              }
            ></div>
          </div>
        </div>
        <PageHeader className="pb-8 items-center">
          <PageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            About Us
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-2 leadin-8 text-center">
            <span>
              Educom Guidance is a leading education consultancy, dedicated to
              personalized guidance with a rich 14-year legacy. Specializing in
              &nbsp;
              <Link
                to={allAdmissionPageHref[0].to}
                className="hover:text-educom underline"
              >
                <>MBA admission</>
              </Link>
              ,&nbsp;
              <Link
                to={allAdmissionPageHref[1].to}
                className="hover:text-educom underline"
              >
                Engineering admission
              </Link>
              , and&nbsp;
              <Link
                to={allAdmissionPageHref[2].to}
                className="hover:text-educom underline"
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
      </section>
      <WhatWeOffer />
      <Testimonials testimonials={homePageTestimonials} />
      <WhyChooseUs />
      <Stats />
      <GetInTouch showContactInfo></GetInTouch>
    </div>
  );
}
