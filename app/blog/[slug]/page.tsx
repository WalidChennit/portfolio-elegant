import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog-posts';
import BlogPostContent from '@/components/BlogPostContent';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  return { title: post ? `${post.title} — Walid Chennit` : 'Blog — Walid Chennit' };
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];

  return <BlogPostContent post={post} next={next} />;
}
