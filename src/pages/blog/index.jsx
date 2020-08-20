import Link from 'next/link';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getAllPosts } from '../../api/BlogAPI';

export default function BlogIndexPage({ allPosts }) {
  return (
    <DefaultLayout title="Blog">
      <div className="py-4 lg:py-16 inner-wrap">
        <div className="mx-auto lg:w-2/3">
          <h1 className="text-center lg:pb-8">Blog</h1>
          {allPosts.map((post) => (
            <div key={post.slug} className="mb-8 rounded">
              <div>
                <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                  <a>
                    <div className="p-4 bg-gray-100 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="mb-2 font-semibold text-gray-800">{post.title}</h4>
                        <span className="text-gray-500">{post.formattedDate}</span>
                      </div>
                      <p className="mt-0 mb-2 text-sm text-gray-800">{post.excerpt}</p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
