import remark from 'remark';
import html from 'remark-html';
import slug from 'remark-slug';
import toc from 'remark-toc';

export default async function markdownToHtml(markdown) {
  const result = await remark().use(slug).use(toc, { maxDepth: 3 }).use(html)
    .process(`## Table of Contents\n${markdown}`);
  return result.toString();
}
