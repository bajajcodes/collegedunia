import { GetInTouchForm } from './get-in-touch-form';
import React from 'react';
import { cn } from '~/lib/utils';
import { siteConfig } from '~/config/site';
import { StyledPageHeaderHeading } from '~/components/typography';

export function GetInTouch({
  showContactInfo = false,
  className,
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement> & { showContactInfo?: boolean }) {
  return (
    <section
      {...props}
      className={cn(
        'border shadow-lg px-8 py-8 mb-4 max-w-5xl m-auto',
        className
      )}
    >
      <StyledPageHeaderHeading className="uppercase mb-4">
        GET IN TOUCH
      </StyledPageHeaderHeading>
      <div className="flex flex-col md:flex-row gap-4">
        <GetInTouchForm className="flex-1" />
        {showContactInfo && (
          <div className="flex-1">
            <div className="p-4 lg:p-12 bg-educom border-t-8 border-orange-500 text-white flex flex-col gap-2 text-center font-semibold h-max">
              <span>{siteConfig.contact.address}</span>
              <span>CONTACT:</span>
              <span>{siteConfig.contact.primaryNumber}</span>
              <span>{siteConfig.contact.secondaryNumber}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
