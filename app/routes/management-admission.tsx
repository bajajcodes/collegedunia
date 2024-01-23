import type { MetaFunction } from '@remix-run/react';
import { type ActionFunctionArgs } from '@remix-run/node';
import { Carousel } from '~/components/carousel-old';
import { Page } from '~/components/page';
import { PageHeader, PageHeaderDescription } from '~/components/page-header';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { managementAdmission } from '~/data/pages.data';
import { contactUsAction } from '~/lib/common.action';
import { WalletIcon } from 'lucide-react';
import { cn } from '~/lib/utils';
import { managementPageAlbums } from '~/data/album.data';
import { AlbumArtWork } from '~/components/album-card';
import { StyledPageHeaderHeading } from '~/components/typography';

export const meta: MetaFunction = () => {
  return [
    { title: 'Management Admissions' },
    {
      name: 'description',
      content: 'Get Admission in Management',
    },
  ];
};

export const action = async (args: ActionFunctionArgs) => contactUsAction(args);

export default function ManagementAdmissions() {
  const {
    managementColleges,
    managementSpecialization,
    managementEntranceExams,
    ...props
  } = managementAdmission;
  return (
    <Page {...props}>
      <section className="flex flex-col items-center text-center">
        <PageHeader className="pb-8 items-center">
          <StyledPageHeaderHeading className="capitalize  md:text-left  text-center font-bold text-orange-500">
            What Sets Us Apart?
          </StyledPageHeaderHeading>
          <div className="max-w-2xl">
            <AlbumArtWork
              albums={managementPageAlbums.whatSetUsApart}
              className="w-full"
            />
          </div>
        </PageHeader>
      </section>

      <section className="flex flex-col items-center pb-8 text-center">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            TOP COLLEGES
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Top Management Colleges
          </StyledPageHeaderHeading>
          <PageHeaderDescription className="flex flex-col gap-2">
            <span>
              Choosing an MBA offers a dynamic skill set, fostering leadership
              and effective communication. The program provides extensive
              networking opportunities, connecting individuals with industry
              leaders globally. In terms of career scope, an MBA opens doors to
              diverse opportunities, from corporate leadership to
              entrepreneurship, with widespread recognition and value among
              employers. Ultimately, opting for an MBA is a strategic investment
              in professional growth, offering transformative experiences that
              propel individuals toward leadership roles and fulfilling careers.
            </span>
            <span>
              Our expert consultants are dedicated to guiding you every step of
              the way. We assist in selecting the finest institutes and provide
              support to secure admission to your dream college.
            </span>
            <span>
              We have an expert team specialized in management consultation,
              <strong>engineering consultation</strong>, and{' '}
              <strong>medical & pharma consultation</strong> in India.
            </span>
          </PageHeaderDescription>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <div className="grid gap-8 grid-cols-1 p-4 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:max-w-2xl lg:max-w-5xl m-auto">
          {managementAdmission.managementColleges.map((college, index) => (
            <Card className="border-2 border-[#0C71C3]" key={index}>
              <CardHeader className="relative h-44 p-0">
                <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-educom/5">
                  <img
                    src={college.imageSource}
                    alt="PageHeader Background"
                    className={cn(
                      'w-full h-full object-cover object-center absolute top-0 left-0'
                    )}
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

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Entrance Exams
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Management Entrance Exams
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
      </section>

      <section className="bg-educom/90 p-8">
        <div className="flex flex-wrap max-w-4xl gap-4 m-auto">
          {managementAdmission.managementEntranceExams.map((exam, index) => (
            <div
              className="w-24 h-24 bg-white m-auto shadow-sm text-center text-orange-500 font-semibold text-xl flex items-center justify-center"
              key={index}
            >
              <p>{exam}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            SCOPE
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Scope of Management
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <PageHeaderDescription className="flex flex-col gap-4 text-center">
            <span>
              When it comes to career options after pursuing these courses,
              there’s really no limit! An MBA can open up many doors for
              students in fields like Finance, Operations, Human Resources, and
              Marketing. With an MBA degree, there are many different roles that
              one could take on such as Business Development Manager, Financial
              Manager or Event Manager. The average salary for such roles lies
              between INR 7-9 lakhs per annum in India. It goes without saying
              that with an esteemed degree from a top management college in
              India – your career prospects are truly limitless!
            </span>
            <span>
              Here are some of the top profiles that MBA graduates often pursue:
            </span>
          </PageHeaderDescription>
        </PageHeader>
      </section>

      <section className="bg-educom/50 p-8">
        <div className="flex flex-wrap max-w-4xl gap-4 m-auto">
          {managementAdmission.scope.map((item, index) => (
            <div className="flip-card m-auto" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col justify-center items-center gap-4">
                  <div className="relative w-28 h-28 bg-blend-screen bg-opacity-50 bg-educom/5">
                    <img
                      src={item.imageSource}
                      alt={item.designation}
                      className={cn(
                        'w-full h-full object-cover object-center absolute top-0 left-0'
                      )}
                    />
                  </div>
                  <hr className="mx-1 h-1 w-12 rounded border-0 bg-black md:mx-4" />
                  <p className="text-orange-500 font-semibold">
                    {item.designation}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center flip-card-back">
                  <WalletIcon className="w-16 h-16" />
                  <span className="uppercase text-center font-normal text-sm">
                    {item.averagePackage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center pb-8">
        <PageHeader className="pb-8 items-center">
          <p className="uppercase text-center font-bold text-orange-500">
            Branches
          </p>
          <StyledPageHeaderHeading className="capitalize text-center md:text-left">
            Streams Of Specialization in Management
          </StyledPageHeaderHeading>
          <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
        </PageHeader>
        <Carousel>
          {managementAdmission.managementSpecialization.map(
            (specialization, index) => (
              <Card className="border-2 border-[#0C71C3] w-full" key={index}>
                <CardHeader className="relative h-44 p-0">
                  <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-educom/5">
                    <img
                      src={specialization.imageSource}
                      alt="PageHeader Background"
                      className={
                        'w-full h-full object-cover object-center absolute top-0 left-0'
                      }
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="uppercase text-center font-bold text-orange-500">
                    {specialization.title}
                  </p>
                  <hr className="mx-auto my-1 h-1 w-36 rounded border-0 bg-black md:my-4" />
                  <p className="leading-8">{specialization.subtitle}</p>
                </CardContent>
              </Card>
            )
          )}
        </Carousel>
      </section>
    </Page>
  );
}
