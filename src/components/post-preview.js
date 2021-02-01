import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';

export default function PostPreview({
  title,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <article>
      <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <DateFormatter date={date} className="font-light text-gray-600" test="test" />
          <a href="#" className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-800 hover:text-green-100">Laravel</a>
        </div>
        <div className="mt-2">
          <h2 className="mb-0 text-2xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="font-bold text-gray-700 hover:no-underline hover:text-gray-700 focus:text-gray-700">{title}</a>
            </Link>
          </h2>
          <p className="mt-2 text-gray-600">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="text-blue-500 hover:underline">Read more</a>
          </Link>
          <div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </article>
  );
}
