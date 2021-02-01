import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ title, src, slug }) {
  if (!src) {
    return (
      <>
        <div className="py-4" />
      </>
    );
  }
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small bg-gray-200 object-cover', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      width="1600"
      height="500"
    />
  );
  return (
    <>
      <div>
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title} className="inline-block">{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
    </>
  );
}
