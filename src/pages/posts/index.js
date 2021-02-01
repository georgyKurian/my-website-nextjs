import { SEO } from '@components/common';
import { getSortedPosts } from '@utils/posts';

import Container from '@components/container';
import MoreStories from '@components/more-stories';
import CategoryList from '@components/category-list';
import Pagination from '@components/pagination';
import DefaultLayout from '@components/Layout/DefaultLayout';

export default function Home({ posts }) {
  return (
    <DefaultLayout>
      <SEO title="All posts" />
      <div className="overflow-x-hidden bg-gray-100">
        <Container>
          <div className="flex justify-between mx-auto mt-10 mb-32">
            <div className="w-full lg:w-8/12">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                <div>
                  <select className="w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Latest</option>
                    <option>Last Week</option>
                  </select>
                </div>
              </div>
              <MoreStories posts={posts} />
              <Pagination />
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
              <CategoryList list={['Aws', 'Vue', 'React', 'Php', 'Laravel']} />
              <div className="px-8 mt-10">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
                    >
                      Laravel
                    </a>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-lg font-medium text-gray-700 hover:underline">
                      Build
                      Your New Idea with Laravel Freamwork.
                    </a>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        className="object-cover w-8 h-8 rounded-full"
                      />
                      <a
                        href="#"
                        className="mx-3 text-sm text-gray-700 hover:underline"
                      >
                        Alex John
                      </a>
                    </div>
                    <span
                      className="text-sm font-light text-gray-600"
                    >
                      Jun 1, 2020
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
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
