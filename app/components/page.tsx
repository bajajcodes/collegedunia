import { Link } from '@remix-run/react';
import React from 'react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '~/components/page-header';
import { buttonVariants } from '~/components/ui/button';
import { useIsVisible } from '~/hooks/useIsVisible';
import { cn } from '~/lib/utils';
import { GetInTouch } from '~/pages/index/components/get-in-touch';
import { OurConsultingServices } from '~/pages/index/components/our-consulting-services';
import { Stats } from '~/pages/index/components/stats';
import type { TestimonialsProps } from '~/pages/index/components/testimonials';
import { Testimonials } from '~/pages/index/components/testimonials';
import { WhyChooseUs } from '~/pages/index/components/why-choose-us';

export interface PageInfoProps extends TestimonialsProps {
  pageHeaderCaption: string;
  pageHeaderTitle: string;
  pageHeaderDescription: string;
  pageHeaderTo: string;
  pageHeaderBackgroundImageURL: string;
  pageHeaderBackgroundFallbackColor: string;
  showDescription?: boolean;
  isDarkBg?: boolean;
}

export function Page({
  pageHeaderCaption,
  pageHeaderTitle,
  pageHeaderDescription,
  pageHeaderTo,
  pageHeaderBackgroundImageURL,
  pageHeaderBackgroundFallbackColor,
  children,
  className,
  testimonials,
  isDarkBg = false,
  showDescription = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & PageInfoProps) {
  const getInTouchFormRef = React.useRef<HTMLElement | null>(null);
  const isGetInTouchFormVisible = useIsVisible(getInTouchFormRef);
  return (
    <div className={cn('relative', className)} {...props}>
      <section className="relative h-[580px]">
        <PageHeader className="pb-8 absolute top-16 left-4 md:left-28 z-40 w-full max-w-lg ">
          <p className="capitalize font-bold">{pageHeaderCaption}</p>
          <PageHeaderHeading
            className={cn('capitalize', {
              'text-white font-semibold': isDarkBg,
            })}
          >
            {pageHeaderTitle}
          </PageHeaderHeading>
          <PageHeaderDescription className="text-white">
            {pageHeaderDescription}
          </PageHeaderDescription>
          <div className="w-full flex items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link
              to={pageHeaderTo}
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'text-center scroll-smooth',
                })
              )}
            >
              Click to Claim Your Free Admission Consult Now!
            </Link>
          </div>
        </PageHeader>
        <div
          className={cn(
            'w-full h-full relative bg-blend-screen bg-opacity-50',
            `bg-[${pageHeaderBackgroundFallbackColor}]`
          )}
        >
          <img
            src={pageHeaderBackgroundImageURL}
            alt="PageHeader Background"
            className={cn(
              'w-full h-full object-cover object-right lg:object-center absolute top-0 left-0'
            )}
          />
        </div>
      </section>

      <section className="mx-4 my-auto">
        <Stats />
      </section>

      {children}

      <section className="mx-4 my-auto">
        <WhyChooseUs />
      </section>

      <section className="mx-4 my-auto">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="mx-4 my-auto">
        <OurConsultingServices showDescription={showDescription} />
      </section>

      <section
        ref={getInTouchFormRef}
        className={cn('mx-4 my-auto mb-4 transition ease-in duration-700', {
          'opacity-0': !isGetInTouchFormVisible,
          'opacity-100': isGetInTouchFormVisible,
        })}
        id="get-in-touch-form"
      >
        <GetInTouch showContactInfo></GetInTouch>
      </section>
    </div>
  );
}
