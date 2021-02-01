import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import moment from 'moment';
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), 'content/posts');

export function getAllPostFiles() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.match(/\.md$/g));
}

export function getAllPostSlugs() {
  return getAllPostFiles()
    .filter((filename) => filename.match(/\.md$/g))
    .map((filename) => filename.replace(/\.md$/g, ''));
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/g, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content, excerpt } = matter(fileContents, { excerpt: true });
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields
    .forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }

      if (field === 'date') {
        const date = moment(data[field]);
        items.date = {
          timestamp: data[field],
          formatted: date.format('LL'),
        };
        return;
      }

      if (field === 'excerpt') {
        items.excerpt = excerpt;
      }

      if (field === 'readTime') {
        items.readTime = readingTime(content);
      }

      if (data[field]) {
        items[field] = data[field];
      }
    });

  return items;
}

export function getSortedPosts(fields = []) {
  const slugs = getAllPostFiles();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}
