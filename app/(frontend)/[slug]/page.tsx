import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  const { data: pages } = await sanityFetch({
    query: PAGES_QUERY,
  });

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug },
  });

  return <div>{JSON.stringify(page)}</div>;
}
