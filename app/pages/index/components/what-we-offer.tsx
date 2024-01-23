import { PageHeader } from '~/components/page-header';
import { StyledPageHeaderHeading } from '~/components/typography';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import admissionSupport from '~/images/what-we-offer-admission-support.jpeg';
import carrerCounseling from '~/images/what-we-offer-carrer-counseling.jpeg';
import continuousSupport from '~/images/what-we-offer-continuous-support.jpeg';
import personalizedCounseling from '~/images/what-we-offer-personalized-counseling.jpeg';
import admissionAssitance from '~/images/what-we-offer-post-admission-assitance.jpeg';

export function WhatWeOffer() {
  return (
    <section className="flex flex-col items-center pb-8 bg-educom">
      <PageHeader className="pb-8 items-center">
        <p className="uppercase text-center text-orange-300 font-medium">
          Offer
        </p>
        <StyledPageHeaderHeading className="capitalize text-white">
          What We Offer
        </StyledPageHeaderHeading>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
      </PageHeader>
      <article className="grid lg:grid-cols-2 max-w-lg gap-4 p-4 lg:max-w-5xl">
        <Card className="p-4 flex flex-col text-center shadow-md lg:p-6">
          <CardHeader className="items-center gap-4">
            <div className="rounded-full w-20 h-20 pb-4 flex items-center bg-blend-screen bg-opacity-50 bg-educom/5">
              <div className="overflow-hidden rounded-md">
                <img
                  src={carrerCounseling}
                  alt={'Career Counseling'}
                  width={150}
                  height={150}
                  className={
                    'h-auto w-auto object-cover transition-all hover:scale-105 m-auto aspect-square'
                  }
                />
              </div>
            </div>
            <CardTitle className="uppercase">​Career Counseling</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8">
            Explore meaningful career paths with our career counseling services.
            Our consultants provide assessments, guidance on career
            trajectories, and support in developing the skills necessary for
            success in today's competitive job market.
          </CardDescription>
        </Card>
        <Card className="p-4 flex flex-col text-center shadow-xl lg:p-6">
          <CardHeader className="items-center gap-4">
            <div className="rounded-full w-20 h-20 pb-4 flex items-center bg-blend-screen bg-opacity-50 bg-educom/5">
              <div className="overflow-hidden rounded-md">
                <img
                  src={personalizedCounseling}
                  alt={'Personalized Consultation'}
                  width={150}
                  height={150}
                  className={
                    'h-auto w-auto object-cover transition-all hover:scale-105 m-auto aspect-square'
                  }
                />
              </div>
            </div>
            <CardTitle className="uppercase">
              Personalized Consultation
            </CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8">
            Recognizing that each educational journey is unique, we take a
            personalized approach to our consultation services. Whether you're
            aiming for an MBA, engineering degree, or medical school, our
            consultants tailor their guidance to meet your specific needs and
            aspirations.
          </CardDescription>
        </Card>
        <Card className="p-4 flex flex-col text-center shadow-md lg:p-6">
          <CardHeader className="items-center gap-4">
            <div className="rounded-full w-20 h-20 pb-4 flex items-center bg-blend-screen bg-opacity-50 bg-educom/5">
              <div className="overflow-hidden rounded-md">
                <img
                  src={admissionSupport}
                  alt={'ADMISSION Support'}
                  width={150}
                  height={150}
                  className={
                    'h-auto w-auto object-cover transition-all hover:scale-105 m-auto aspect-square'
                  }
                />
              </div>
            </div>
            <CardTitle className="uppercase">ADMISSION Support</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8">
            Gain a competitive edge with our dedicated admission support
            services. Whether you're pursuing an MBA, engineering degree, or
            medical education, our consultants assist with application
            preparation, personal statement refinement, and interview coaching.
          </CardDescription>
        </Card>
        <Card className="p-4 flex flex-col text-center shadow-md lg:p-6">
          <CardHeader className="items-center gap-4">
            <div className="rounded-full w-20 h-20 pb-4 flex items-center bg-blend-screen bg-opacity-50 bg-educom/5">
              <div className="overflow-hidden rounded-md">
                <img
                  src={admissionAssitance}
                  alt={' Post-Admission Assistance'}
                  width={150}
                  height={150}
                  className={
                    'h-auto w-auto object-cover transition-all hover:scale-105 m-auto aspect-square'
                  }
                />
              </div>
            </div>
            <CardTitle className="uppercase">
              Post-Admission Assistance
            </CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8">
            Receive guidance on settling into your chosen program and navigating
            the initial stages of your academic journey.
          </CardDescription>
        </Card>
        <Card className="p-4 flex flex-col text-center shadow-md lg:p-6 lg:col-span-2">
          <CardHeader className="items-center gap-4">
            <div className="rounded-full w-20 h-20 pb-4 flex items-center bg-blend-screen bg-opacity-50 bg-educom/5">
              <div className="overflow-hidden rounded-md">
                <img
                  src={continuousSupport}
                  alt={'Continuous Support'}
                  width={150}
                  height={150}
                  className={
                    'h-auto w-auto object-cover transition-all hover:scale-105 m-auto aspect-square'
                  }
                />
              </div>
            </div>
            <CardTitle className="uppercase">Continuous Support</CardTitle>
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8">
            Our commitment doesn't end with admission – we provide ongoing
            support throughout your academic and professional journey.
          </CardDescription>
        </Card>
      </article>
    </section>
  );
}
