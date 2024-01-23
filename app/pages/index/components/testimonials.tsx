import type { FeedbackCardProps } from '../../../components/feedback-card';
import { FeedbackCard } from '../../../components/feedback-card';
import { Carousel } from '../../../components/carousel-old';

type Testimonial = FeedbackCardProps & { key: string };

export interface TestimonialsProps {
  testimonials: Array<Testimonial>;
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length < 1) return null;
  return (
    <section
      id="clients"
      className={`sm:py-16 py-6 flex justify-center items-center flex-col relative mb-8`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2
          className={`font-semibold xs:text-[48px] text-[40px] xs:leading-[66.8px] leading-[56.8px] w-full`}
        >
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]`}
          >
            Your go-to destination for comprehensive information on colleges,
            universities, courses, and educational programs in India, helping
            students make well-informed decisions about their academic journey.
          </p>
        </div>
      </div>
      <div className="relative grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(256px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] lg:flex ">
        {testimonials.map((testimonial: Testimonial) => (
          <FeedbackCard
            {...testimonial}
            key={testimonial.key}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
}
