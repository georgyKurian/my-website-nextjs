import Link from 'next/link';
import ErrorPage from 'next/error';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import PropTypes from 'prop-types';

import { Image, SEO } from '@components/common';
import { getAllPostSlugs, getPostBySlug } from '@utils/posts';
import DefaultLayout from '@components/Layout/DefaultLayout';
import Container from '@components/Layout/Container';
import { useRouter } from 'next/router';
import Header from '@components/header';
import Head from 'next/head';
import PostHeader from '@components/post-header';
import PostFooter from '@components/post-footer';
import SubscribeForm from '@components/SubscribeForm';
import NewCodeBlock from '@components/code-block';
import { MDXProvider } from '@mdx-js/react';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter style={style} language={language} showLineNumbers wrapLongLines>
    {value}
  </SyntaxHighlighter>
);

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`@content/assets/${src}`)}
    webpSrc={require(`@content/assets/${src}?webp`)}
    previewSrc={require(`@content/assets/${src}?lqip`)}
    className="w-full"
  />
);

const mdxComponents = {
  pre: (props) => <div {...props} />,
  code: NewCodeBlock,
};

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <DefaultLayout preview={false}>
      <SEO
        title={post.title}
        description={post.description || post.excerpt}
      />
      <Head>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Container>
        <div className="py-4" />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                subtitle={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                readTime={post.readTime}
              />

              <MDXProvider components={mdxComponents}>
                <ReactMarkdown
                  className="mx-auto mb-4 prose lg:prose-lg dark:prose-dark"
                  escapeHtml={false}
                  source={post.content}
                  renderers={{ code: CodeBlock, image: MarkdownImage }}
                />
              </MDXProvider>
              <PostFooter tags={[{
                name: 'Test',
                slug: 'slug',
              }]}
              />
            </article>
          </>
        )}
        <SubscribeForm />
      </Container>
    </DefaultLayout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug, [
    'title',
    'readTime',
    'excerpt',
    'date',
    'slug',
    'tags',
    'author',
    'content',
    'description',
    'ogImage',
    'coverImage',
  ]);

  return { props: { post: postData } };
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      formatted: PropTypes.string.isRequired,
    }).isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string,
    }),
    content: PropTypes.string.isRequired,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    ogImage: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
