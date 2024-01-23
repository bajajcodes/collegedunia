import { cn } from '~/lib/utils';
import { Card, CardContent, CardHeader } from './ui/card';
import { IconProps } from './icons';

export interface FeedbackCardProps {
  className?: string;
  name: string;
  title: string;
  content: string;
  img?: string;
  isPrimaryCard?: boolean;
}

const Quotes = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#c2c2c2"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
  </svg>
);

// INFO[source-for-css]: https://medium.com/@ryaddev/building-a-testimonials-carousel-with-react-nuka-carousel-and-tailwind-css-b34686d61880
export function FeedbackCard({
  name,
  title,
  content,
  img,
  className,
  isPrimaryCard,
}: FeedbackCardProps) {
  return (
    <Card
      className={cn('p-4 shadow-md hover:shadow-inner', className, {
        'bg-educom': isPrimaryCard,
        'lg:m-auto lg:-my-4': !isPrimaryCard,
      })}
    >
      <Quotes className="w-20 h-20 m-auto" />
      <CardHeader className="font-normal text-[18px] leading-[32.4px]my-10">
        <p>{content}</p>
      </CardHeader>
      <CardContent className="flex items-center flex-wrap sm:flex-nowrap">
        {img && (
          <img src={img} alt="User" className="w-10 h-10 rounded-full mr-4" />
        )}
        <span>
          <span className="font-semibold text-[20px] leading-[32px]">
            {name}
          </span>
          &nbsp;|&nbsp;
          <span className="font-normal text-[16px] leading-[24px] text-accent-foreground">
            {title}
          </span>
        </span>
      </CardContent>
    </Card>
  );
}
