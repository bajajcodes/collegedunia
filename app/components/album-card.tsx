import { cn } from '~/lib/utils';
import { Card, CardContent, CardHeader } from './ui/card';

export interface Album {
  title: string;
  description?: string;
  cover: string;
}

interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function AlbumCard({
  album,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumCardProps) {
  return (
    <Card {...props} className={cn(className, "flex flex-col justify-center")}>
      <CardHeader
        className={cn('p-0', {
          'h-36 md:h-auto': width === 150,
          'h-60 md:h-auto': width === 250,
        })}
      >
        <div className="overflow-hidden rounded-md ">
          <img
            src={album.cover}
            alt={album.title}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105 m-auto',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
            )}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 text-center">
          <h3 className="font-medium leading-none">{album.title}</h3>
          {album.description && (
            <p className="hidden md:block text-sm text-muted-foreground ">
              {album.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function AlbumArtWork({
  albums,
  className,
  hasAutoLayout = false,
}: {
  albums: Album[];
  className?: string;
  hasAutoLayout?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          'hidden md:grid md:grid-cols-2 md:grid-flow-row gap-4 justify-items-center',
          {
            'md:grid-flow-col': hasAutoLayout,
          }
        )}
      >
        {albums.map((album) => (
          <AlbumCard
            key={album.title}
            album={album}
            aspectRatio="square"
            className={cn('max-w-[250px]', className)}
            width={250}
            height={250}
          />
        ))}
      </div>
      <div className={'flex flex-wrap justify-center gap-4 md:hidden'}>
        {albums.map((album) => (
          <AlbumCard
            key={album.title}
            album={album}
            className={cn('w-full max-w-[220px]', className)}
            aspectRatio="square"
            width={150}
            height={150}
          />
        ))}
      </div>
    </>
  );
}
