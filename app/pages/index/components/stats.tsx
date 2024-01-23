import { StyledPageHeaderHeading } from '~/components/typography';
import { PageHeaderHeading } from '../../../components/page-header';

const data = [
  { heading: 'SUCCESSFUL ADMISSIONS', value: '5000', symbol: '+' },
  { heading: 'YEARS OF EXPERIENCE', value: '14', symbol: '+' },
  { heading: 'TOP COLLEGE PARTNERS', value: '200', symbol: '+' },
  { heading: 'SUCCESS RATE', value: '99', symbol: '%' },
];

export function Stats() {
  return (
    <section className="flex flex-col flex-wrap gap-4 p-8 md:p-16 md:flex-row md:items-center md:justify-between">
      {data.map((item, index) => (
        <div key={`${item.heading}--${index}`}>
          <p className="uppercase font-medium">{item.heading}</p>
          <hr className="my-1 h-1 w-36 rounded border-0 bg-orange-500 md:my-4" />
          <StyledPageHeaderHeading className="capitalize text-educom">
            {item.value}
            {item.symbol}
          </StyledPageHeaderHeading>
        </div>
      ))}
    </section>
  );
}
