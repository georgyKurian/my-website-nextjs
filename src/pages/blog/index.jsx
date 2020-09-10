import Link from 'next/link';
import Head from 'next/head';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getAllPosts } from '../../api/BlogAPI';

export default function BlogIndexPage({ allPosts }) {
  return (
    <DefaultLayout title="Blog">
      <Head>
        <meta name="description" content="Blog of Georgi Varghese Kurian" />
      </Head>
      <div className="py-4 lg:py-16 inner-wrap">
        <div className="mx-auto lg:w-2/3">
          <h1 className="text-center lg:pb-8">Blog</h1>
          {allPosts.map((post) => (
            <div key={post.slug} className="mb-8 rounded">
              <div className="flex">
                <div className="relative w-2/12">
                  <div className="w-full bg-gray-500 rounded" style={{ paddingTop: '100%' }} />
                </div>
                <div className="flex-1 ml-4">
                  <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                    <a>
                      <h2 className="mb-2 font-medium text-gray-800 h4 focus:underline hover:underline">{post.title}</h2>
                    </a>
                  </Link>
                  <p className="mt-0 mb-2 text-sm text-gray-600">{post.description}</p>
                  <span className="text-themeGray-600"><time dateTime={post.date}>{post.formattedDate}</time></span>
                </div>

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
    'description',
  ]);

  return {
    props: { allPosts },
  };
}
