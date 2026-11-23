import { POST_QUERY } from "@/sanity/lib/queries";
import type { POST_QUERY_RESULT } from "@/sanity/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";

export const instant = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = (
    await sanityFetch({
      query: POST_QUERY,
      params: await params,
    })
  ).data as POST_QUERY_RESULT;

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
