import type { Metadata } from 'next';
import BlogListContent from '@/components/BlogListContent';

export const metadata: Metadata = { title: 'Blog — Walid Chennit' };

export default function BlogPage() {
  return <BlogListContent />;
}
