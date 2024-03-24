/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { Preview, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { RiContactsLine } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  title: "Reetta Salmela",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      title: "Työpöytä",
      structure: (S) =>
        S.list()
          .title("Työpöytä")
          .items([
            // Työnäytteet
            S.listItem()
              .title("Työnäytteet")
              .id("tyonaytteet")
              .icon(MdPostAdd)
              .child(
                S.document()
                  .documentId("tyonaytteet")
                  .schemaType("tyonaytteet")
                  .title("Työnäytteet")
              ),
            S.divider(),
            // Yhteitiedot
            S.listItem()
              .title("Yhteistiedot")
              .id("yhteistiedot")
              .icon(RiContactsLine)
              .child(
                S.document()
                  .documentId("yhteistiedot")
                  .schemaType("yhteistiedot")
                  .title("Yhteistiedot")
              ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
