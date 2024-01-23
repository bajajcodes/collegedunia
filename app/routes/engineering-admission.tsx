import { type ActionFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { AlbumArtWork } from '~/components/album-card';
import { Carousel } from '~/components/carousel-old';
import { Page } from '~/components/page';
import { PageHeader, PageHeaderDescription } from '~/components/page-header';
import {
  StyledHeading2,
  StyledPageHeaderHeading,
} from '~/components/typography';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { engineeringPageAlbums } from '~/data/album.data';
import { engineeringAdmission } from '~/data/pages.data';
import { contactUsAction } from '~/lib/common.action';

export const meta: MetaFunction = () => {
  return [
    { title: 'Engineering Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Engineering',
    },
  ];
};

export const action = async (args: ActionFunctionArgs) => contactUsAction(args);

export default function EngineeringAdmissions() {
  const {
    engineeringBranches,
    engineeringColleges,
    engineeringAllExam,
    ...props
  } = engineeringAdmission;
  return (
    <Page {...props}>
      <section className="flex flex-col items-center text-center">
        <PageHeader className="pb-6 items-center">
          <StyledPageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            What Sets Us Apart?
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <div className="max-w-2xl">
            <AlbumArtWork
              albums={engineeringPageAlbums.whatSetUsApart}
              className="w-full"
            />
          </div>
        </PageHeader>
      </section>

      <section className="md:mt-[8rem] lg:mt-[4rem] flex flex-col items-center pb-8 text-center container m-auto">
        <StyledHeading2 className="uppercase text-center">
          Few Words about us
        </StyledHeading2>
        <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        <PageHeaderDescription className="flex flex-col gap-4">
          <span>
            Welcome to Educom Guidance, we’re specialized Engineering Admission
            Consultation! Our skilled Engineering Consultants are here to
            expertly navigate you through the intricate process of securing
            admission to premier engineering colleges. Whether it's crafting a
            compelling application or mastering entrance exams, our personalized
            support maximizes your chances of success. Let our Engineering
            Consultants assist you in unlocking the doors to your promising
            future in engineering – reach out to us today!
          </span>
          <span>
            We have Dedicated expert team specialized in management
            consultation, engineering consultation, medical consultation, and
            other Courses in India.
          </span>
        </PageHeaderDescription>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TYPES OF ENGINEERING COURSES
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Branches
          </StyledPageHeaderHeading>
          <PageHeaderDescription className="text-center">
            Engineering encompasses various specialized branches, each offering
            distinct fields of study and career paths. Some common engineering
            branches include:
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel>
          {engineeringAdmission.engineeringBranches.map((branch, index) => (
            <Card className="border-2 border-[#0C71C3] w-full" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-educom/5">
                  <img
                    src={branch.imageSource}
                    alt="PageHeader Background"
                    className={
                      'w-full h-full object-cover object-center absolute top-0 left-0'
                    }
                  />
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  {branch.branch}
                </p>
                <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                <p className="leading-8 text-center">{branch.overview}</p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Entrance Exams
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Engineering Entrance Exams
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="container grid md:gap-4  max-w-2xl">
          <AlbumArtWork
            albums={engineeringPageAlbums.exams}
            className="m-auto text-center"
          />
        </div>
      </section>

      <section className="flex flex-col pb-8">
        <PageHeader className="pb-8 items-center m-auto">
          <p className="uppercase text-center font-bold text-orange-500">
            TOP ENGINEERING COLLEGES
          </p>
          <StyledPageHeaderHeading className="capitalize text-center">
            We are Connected with Top Engineering Colleges in India
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="grid gap-8 grid-cols-1 p-4 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:max-w-2xl lg:max-w-5xl m-auto">
          {engineeringAdmission.engineeringColleges.map((college, index) => (
            <Card className="border-2 border-[#0C71C3]" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-educom/5">
                  <img
                    src={college.imageSource}
                    alt="PageHeader Background"
                    className={
                      'w-full h-full object-cover object-center absolute top-0 left-0'
                    }
                  />
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="uppercase text-center font-bold text-orange-500">
                  {college.collegeName}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Page>
  );
}
