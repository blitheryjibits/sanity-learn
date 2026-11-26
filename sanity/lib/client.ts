import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,

  stega: { studioUrl: "https://sanity-learn-eight.vercel.app/studio" },
});
