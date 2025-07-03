import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { transformerNotationHighlight } from '@shikijs/transformers';
import remarkToc from 'remark-toc';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default createMDX({
  options: {
    rehypePlugins: [
      [rehypeShiki, {
        theme: 'vesper',
        trimEndingNewline: true,
        transformers: [
          transformerNotationHighlight(),
        ]
      }],
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'append'
      }],
    ],
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      [remarkToc, { heading: 'conteúdo', ordered: true }],
      [remarkMdxFrontmatter, { name: 'metadata' }],
    ],
  },
})(nextConfig);
