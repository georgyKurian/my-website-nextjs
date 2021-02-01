import PostTags from './post-tags';

export default function PostFooter({ tags }) {
  return (
    <>
      <footer className="my-10 post-container">
        <div className="mb-2 border-blue-400 border-t-3" />
        <PostTags tags={tags} />
      </footer>
    </>
  );
}
