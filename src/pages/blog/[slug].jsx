import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ErrorPage from 'next/error';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getPostBySlug, getAllPosts } from '../../api/BlogAPI';
import markdownToHtml from '../../lib/markdownToHtml';

const Post = ({ post, morePosts, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <DefaultLayout title={post.title}>
      <div className="inner-wrap">
        <article className="flex flex-col py-4 mx-auto lg:py-16 md:w-9/12 lg:w-8/12 xl:w-6/12">
          <div className="flex-1 mr-10">
            <h1>{post.title}</h1>
            {post.cover_image && <img src={post.cover_image} aria-hidden="true" alt="" />}
            <div className="flex-1 markdown-section" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <footer className="flex flex-col">
            <span>Written by : Georgi Kurian</span>
            <span className="text-themeGray-600">
              Posted Date :
              <time dateTime={post.date}>{post.formattedDate}</time>
            </span>
            {post.tags
            && (
            <div className="flex flex-col mt-8">
              <span className="sr-only">Tags:</span>
              <div className="capitalize">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            )}
          </footer>
        </article>
      </div>
    </DefaultLayout>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
  }).isRequired,
};

DefaultLayout.defaultProps = {
  tags: null,
  coverImage: null,
};
export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'content',
    'cover_image',
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
