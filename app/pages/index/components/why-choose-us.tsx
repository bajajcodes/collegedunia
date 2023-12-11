import { PageHeaderHeading } from '../../../components/page-header';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../../../components/ui/card';
import { cn } from '~/lib/utils';
import { buttonVariants } from '../../../components/ui/button';
import { Link } from '@remix-run/react';
import thumbnail from '~/images/educom-home-page-article.jpeg';

export function WhyChooseUs() {
  return (
    <section className="flex items-center bg-educom p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 m-auto">
        <Card className="p-2 lg:p-8 items-center lg:max-w-md md:m-auto">
          <CardHeader>
            <p className="uppercase text-orange-300 font-medium">WHY US</p>
            <PageHeaderHeading className="capitalize">
              Why choose us?
            </PageHeaderHeading>
            <hr className="my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          </CardHeader>
          <CardDescription className="font-medium text-base leading-8 p-4 md:p-8">
            At Catalyst, we strive to make the admissions process as smooth and
            easy as possible. Our counsellors are available 24/7 to provide
            personalized guidance, while our handholding services cover
            everything from registration to visa applications, ticketing, and
            departure. We can also help with educational loan assistance if
            required. Also, when making payments, you will not need to go
            through any intermediaries.
          </CardDescription>
          <CardFooter className="pt-6">
            <Link
              to="/about-us"
              className={cn(
                buttonVariants({
                  variant: 'default',
                })
              )}
            >
              Full Article
            </Link>
          </CardFooter>
        </Card>
        <div className="lg:max-w-md">
          <img src={thumbnail} alt="Why Choose Us Article Thumbnail" />
        </div>
      </div>
    </section>
  );
}
