/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "your-project-id",
    dataset: "your-dataset",
  },
  typegen: {
    path: "./**/*.{ts,tsx,js,jsx}",
    schema: "./sanity/extract.json",
    generates: "./sanity/types.ts",
  },
});
