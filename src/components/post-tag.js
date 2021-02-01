import Link from 'next/link';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

export default function PostTag({ tag }) {
  return (
    <Link href={`/tag/${tag.slug}`}>
      <a className="hover:underline focus:underline">
        <div className="px-4 py-2 text-sm font-light bg-themeGray-200 text-themeGray-600">{tag.name}</div>
      </a>
    </Link>
  );
}
