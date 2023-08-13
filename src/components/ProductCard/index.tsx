import Image from 'next/image';
import Link from 'next/link';

export type CommonCard = {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  genre: string;
  description: string;
  stack: Record<string, string>[];
  repository?: string;
};

export const ProductCard: React.FC<CommonCard> = ({
  image,
  title,
  genre,
  description,
  stack,
  repository,
}) => {
  return (
    <div className="w-500">
      <div className="w-500 h-500">
        <Image
          className="object-contain"
          src={image.url ? image.url : 'https://placehold.jp/500x500.png'}
          alt={image.alt}
          width={500}
          height={500}
          priority={false}
        />
      </div>
      <p className="text-32 mt-4 font-sans">{title}</p>
      <p className="text-14 mt-4 font-sans">{genre}</p>
      <div className="border-t-1 border-b-1 border-primary mt-4">
        <p className="py-8 text-14 font-sans">{description}</p>
      </div>
      <ul className="mt-4">
        {stack.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            key &&
            value && (
              <li key={index} className="text-14 tracking-wider font-sans">
                {key}: {value}
              </li>
            )
          );
        })}
      </ul>
      {repository && <Link href={repository}>GitHub</Link>}
    </div>
  );
};
