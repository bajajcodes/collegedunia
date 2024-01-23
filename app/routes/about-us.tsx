import { type MetaFunction } from '@remix-run/react';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import aboutPageHeader from 'app/images/educom-about-us-page-pageheader.jpg';
import { siteConfig } from '~/config/site';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';
import { StyledHeading2 } from '~/components/typography';
import {
  aboutUsStudentsPlaced,
  aboutUsWhatSetusApart,
} from '~/data/album.data';
import { AlbumArtWork } from '~/components/album-card';

export const meta: MetaFunction = () => {
  return [{ title: 'About Us' }];
};

export default function AboutUs() {
  return (
    <div className="relative">
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <PageHeaderHeading className="capitalize">About us</PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            As Education Consultants, we are the guiding force that empowers
            students to shape their academic destinies. Committed to
            facilitating educational excellence, we provide comprehensive
            services that extend beyond traditional norms. Our team comprises
            seasoned professionals with a wealth of experience in navigating the
            complexities of the landscape.
          </PageHeaderDescription>
        </PageHeader>
        <div className="relative w-full h-full">
          <img
            src={aboutPageHeader}
            alt="Page Header Background"
            className="w-full h-full object-cover object-center absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-blend-screen bg-opacity-30 bg-[#0C71C3]"></div>
        </div>
      </section>

      <div className="bg-white m-4 flex flex-col md:flex-row gap-4 md:gap-0 md:m-8 border-2 shadow-xl md:absolute md:top-[24rem] md:left-4 md:z-40">
        <div className="p-4 md:p-8 border-r-2 border-r-gray-200">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">01.</span>
            &nbsp;
            <span>STRATEGIC</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            {`We at ${siteConfig.name} use strategic methods to train our
            students to get into their dream colleges.`}
          </p>
        </div>

        <div className="p-4 md:p-8 border-r-2 border-r-gray-200">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">02.</span>
            &nbsp;
            <span>PROFESSIONAL</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            Our team is highly professional in terms of trainings. We give
            unbiased guidance to the students and make sure that they get what
            they want from us.
          </p>
        </div>

        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
            <span className="text-orange-500">02.</span>
            &nbsp;
            <span>LOYAL</span>
          </h2>
          <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
            We are 100% loyal to our customers. If we are unable to get you your
            dream college, your money will be refunded.
          </p>
        </div>
      </div>

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-500">
            PROVEN SUCCESS
          </p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            What Sets Us Apart?
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <div className="max-w-2xl">
            <AlbumArtWork albums={aboutUsWhatSetusApart} className="w-full" />
          </div>
        </PageHeader>
      </section>

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Students Placed
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <div className="max-w-2xl">
            <AlbumArtWork
              albums={aboutUsStudentsPlaced}
              hasAutoLayout
              className="w-full"
            />
          </div>
        </PageHeader>
      </section>

      <section className="hidden md:flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center text-orange-500">JOURNEY</p>
          <PageHeaderHeading className="capitalize text-center md:text-left">
            Success Journey
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="w-full m-auto max-w-2xl md:h-72 bg-transparent bg-[url('app/images/educom-about-us-page-graph.jpeg')] bg-no-repeat bg-contain bg-center"></div>
      </section>

      <section className="bg-blue-500 flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">OUR</p>
          <PageHeaderHeading className="capitalize text-center md:text-left text-white">
            Vision & Mission
          </PageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>

        <div className="bg-white m-4 flex flex-col md:flex-row gap-12 md:gap-0 md:m-8">
          <div className="p-8 border-r-2 border-r-gray-200">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
              <span className="text-orange-500">01.</span>
              &nbsp;
              <span>VISION</span>
            </h2>
            <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
              Our vision is to be a beacon of transformative education,
              inspiring a global community of learners to reach new heights of
              knowledge and innovation. We envision a future where education
              transcends boundaries, empowers diverse perspectives, and becomes
              the catalyst for positive change, creating a world where every
              individual can contribute meaningfully to society.
            </p>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2">
              <span className="text-orange-500">02.</span>
              &nbsp;
              <span>MISSION</span>
            </h2>
            <p className="max-w-[750px] text-lg  sm:text-xl leading-8 text-muted-foreground">
              Our mission is to empower individuals, fostering academic
              excellence and a lifelong love for learning. We provide
              personalized guidance and holistic support, aiming to equip
              students with the tools they need to surpass their potential and
              succeed in their academic endeavors, preparing them for a future
              of continuous growth and achievement
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center pb-8 text-center container m-auto">
        <StyledHeading2 className="uppercase text-center">
          How We Can Help You
        </StyledHeading2>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        <PageHeaderDescription className="flex flex-col gap-4">
          <span>
            Whether you're navigating college admissions, seeking career
            guidance, or exploring opportunities for further education, we are
            here to simplify the process. Our commitment is to empower you to
            make informed decisions that align with your aspirations and lead to
            a successful and fulfilling academic journey.
          </span>
          <span>
            In essence, as Education Consultants, we are your partners in
            educational empowerment, dedicated to guiding you toward a future of
            academic excellence and personal growth.
          </span>
        </PageHeaderDescription>
      </section>

      <section className="mx-4 my-auto">
        <OurConsultingServices />
      </section>

      <GetInTouch showContactInfo />
    </div>
  );
}
