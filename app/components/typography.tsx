import { cn } from '~/lib/utils';

function StyledHeading2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] mb-2',
        className
      )}
      {...props}
    />
  );
}

function StyledPageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  );
}

export { StyledHeading2, StyledPageHeaderHeading };
