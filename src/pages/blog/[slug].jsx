import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getPostBySlug, getAllPosts } from '../../api/BlogAPI';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <DefaultLayout title={post.title}>
      <div className="inner-wrap">

        <article className="mx-auto markdown-section md:w-9/12 lg:w-8/12 xl:w-6/12">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
