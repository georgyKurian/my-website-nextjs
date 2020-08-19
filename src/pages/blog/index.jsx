import Link from 'next/link';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getAllPosts } from '../../api/BlogAPI';

export default function BlogIndexPage({ allPosts }) {
  return (
    <DefaultLayout title="Blog">
      <div className="inner-wrap">
        <h1>Blog</h1>
        {allPosts.map((post) => (
          <div key={post.slug} className="mb-8 bg-gray-200 rounded">
            <div>
              <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                <a>
                  {post.title}
                  <p>{post.excerpt}</p>
                  <span>{post.date}</span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
