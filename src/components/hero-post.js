import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a className="font-normal leading-snug text-black hover:text-black hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter date={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed md:mt-0">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
