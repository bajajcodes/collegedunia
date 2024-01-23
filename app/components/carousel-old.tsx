import React from 'react';
import { Button } from './ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface CarouselProps {
  children: Array<React.ReactNode>;
}

export function Carousel({ children }: CarouselProps) {
  const [index, setActiveIndex] = React.useState(0);
  const slidesCount = children.length;
  const emptyArray = Array.from({ length: slidesCount });
  const nextSlide = () =>
    setActiveIndex((prevIndex) => (prevIndex + 1) % slidesCount);
  const prevSlide = () =>
    setActiveIndex((prevIndex) => (prevIndex - 1 + slidesCount) % slidesCount);
  const setIndex = (index: number) => setActiveIndex(index);
  return (
    <article className="relative p-8 flex flex-col items-center">
      <div className="max-w-xs p-4 md:max-w-sm md:p-6">
        <div className="inset-0 opacity-100 transition-opacity ease-in-out duration-200 delay-200">
          {children[index]}
        </div>
      </div>
      <div className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-2/3 justify-between w-full">
        <Button size="icon" onClick={prevSlide}>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={nextSlide}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-4">
        {emptyArray.map((_, buttonIndex) => (
          <Button
            key={buttonIndex}
            className={cn('p-0 rounded-full w-2 h-2', {
              'bg-gray-500': index !== buttonIndex,
              'bg-black': index === buttonIndex,
            })}
            onClick={() => setIndex(buttonIndex)}
          />
        ))}
      </div>
    </article>
  );
}
