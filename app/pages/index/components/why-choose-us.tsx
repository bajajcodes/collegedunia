import type { Album } from '~/components/album-card';
import { AlbumArtWork } from '~/components/album-card';
import { Card, CardHeader } from '../../../components/ui/card';
import { whyChooseUsAlbums } from '~/data/album.data';
import { StyledPageHeaderHeading } from '~/components/typography';

export function WhyChooseUs({ albums }: { albums?: Album[] }) {
  return (
    <section className="flex items-center bg-educom p-4 lg:p-8">
      <Card className="p-2 lg:p-8 items-center lg:max-w-3xl md:m-auto text-center m-auto">
        <CardHeader>
          <p className="uppercase text-orange-300 font-medium">WHY US</p>
          <StyledPageHeaderHeading className="capitalize">
            Why choose Educom Guidance?
          </StyledPageHeaderHeading>
          <hr className="h-1 w-36 rounded border-0 bg-orange-500 m-auto" />
        </CardHeader>
        <AlbumArtWork albums={albums ?? whyChooseUsAlbums} />
      </Card>
    </section>
  );
}
