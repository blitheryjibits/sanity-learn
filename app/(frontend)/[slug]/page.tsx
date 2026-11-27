import { PageBuilder } from "@/components/page-builder";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY, PAGES_SLUGS_QUERY } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  const { data: pages } = await sanityFetch({
    query: PAGES_SLUGS_QUERY,
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

  return page?.content ? (
    <PageBuilder
      content={page.content}
      documentId={page._id}
      documentType={page._type}
    />
  ) : null;
}
