import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ErrorPage from 'next/error';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import { getPostBySlug, getAllPosts } from '../../api/BlogAPI';
import markdownToHtml from '../../lib/markdownToHtml';
import SubscribeForm from '../../components/SubscribeForm';

const Post = ({ post, morePosts, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <DefaultLayout title={post.title} description={post.description} mainStyle="bg-gray-100">

      <div className="container">
        <div className="mx-auto md:w-9/12 lg:w-8/12 xl:px-10 xl:w-7/12">
          <article id="post-content" className="flex flex-col px-5 py-5 mx-auto my-4 lg:mb-8 lg:mt-6 lg:pb-16 ">
            <span className="xl:pt-10 text-themeGray-700">
              <span className="sr-only">Posted Date :</span>
              <time dateTime={post.date}>{post.formattedDate}</time>
            </span>
            <hr className="my-4 border-themeGray-300" />
            <div className="flex-1">
              <h1>{post.title}</h1>
              {post.cover_image && <img src={post.cover_image} aria-hidden="true" alt="" />}
              <div className="flex-1 markdown-section" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <footer className="flex flex-col">
              <span>Written by : Georgi Kurian</span>
              {post.tags
              && (
              <div className="flex flex-col mt-8">
                <span className="sr-only">Tags:</span>
                <div className="capitalize">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              )}
            </footer>
          </article>
          {morePosts && <div>red</div>}          
        </div>
        <SubscribeForm />
      </div>
    </DefaultLayout>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    formattedDate: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.string,
    content: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
  }).isRequired,
};

DefaultLayout.defaultProps = {
  tags: null,
  author: null,
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
    'description',
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
