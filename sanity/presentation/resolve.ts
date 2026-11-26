import {
  defineLocations,
  type PresentationPluginOptions,
} from "sanity/presentation";

console.log("RESOLVE FILE LOADED");
export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => {
        console.log("RESOLVER FIRED", doc);

        return {
          locations: [
            {
              title: doc?.title || "Untitled",
              href: `/posts/${doc?.slug}`,
            },
            {
              title: "Posts index",
              href: "/posts",
            },
          ],
        };
      },
    }),
    page: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
};
