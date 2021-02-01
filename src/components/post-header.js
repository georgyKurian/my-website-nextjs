import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

export default function PostHeader({
  title, subtitle, coverImage, date, author, readTime,
}) {
  return (
    <header className="mt-7">
      <div className="mb-4 border-blue-400 border-b-3 post-container">
        <PostTitle>{title}</PostTitle>
        {subtitle && <p className="text-2xl text-gray-500 leading-8">{subtitle}</p>}

        <div className="flex items-center pb-4 text-base space-x-8 text-themeGray-600">
          <Avatar name={author.name} picture={author.picture} />
          <div>{readTime.text}</div>
          <DateFormatter date={date} />
        </div>
      </div>
    </header>
  );
}
