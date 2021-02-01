import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="mx-auto mt-6 mb-6 grid grid-cols-1 gap-y-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
