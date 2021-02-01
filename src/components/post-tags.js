import Avatar from './avatar';
import PostTag from './post-tag';

export default function PostTags({ tags }) {
  const tagElements = tags.map((tag) => <PostTag tag={tag} key={tag.name} />);
  return (
    <>
      <div className="flex flex-wrap space-x-4 space-y-2">
        {tagElements}
      </div>
    </>
  );
}
