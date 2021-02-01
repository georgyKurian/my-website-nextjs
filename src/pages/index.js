import Link from 'next/link';

import { SEO } from '@components/common';
import { getSortedPosts } from '@utils/posts';

import DefaultLayout from '@components/Layout/DefaultLayout';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';

export default function Home({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <DefaultLayout>
      <SEO title="All posts" />
      <Container>
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          Blog
        </h2>
        <div className="pb-4" />
        {posts.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts([
    'title',
    'readTime',
    'excerpt',
    'date',
    'slug',
    'tags',
    'coverImage',
    'author',
  ]);

  return {
    props: {
      posts,
    },
  };
}
