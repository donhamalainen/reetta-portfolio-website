/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { RiContactsLine } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";

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
  document: {
    actions: (prev, context) => {
      if (context.schemaType === "projektit") {
        return prev.filter((obj) => obj.action !== "duplicate");
      } else if (context.schemaType === "juttunaytteet") {
        return prev.filter((obj) => obj.action !== "duplicate");
      } else if (context.schemaType === "kuvagalleria") {
        return prev.filter((obj) => obj.action !== "duplicate");
      }
      return prev;
    },
  },
  plugins: [
    structureTool({
      title: "Työpöytä",
      structure: (S) =>
        S.list()
          .title("Työpöytä")
          .items([
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
            S.divider(),
            // Työnäytteet
            S.listItem()
              .title("Projektit")
              .id("projektit")
              .icon(MdPostAdd)
              .child(S.documentTypeList("projektit").title("Projektilista")),

            // Juttunäytteet
            S.listItem()
              .title("Juttunäytteet")
              .id("juttunaytteet")
              .icon(FaRegNewspaper)
              .child(
                S.documentTypeList("juttunaytteet").title("Juttunaytelista")
              ),

            // Kuvagalleria

            S.listItem()
              .title("Kuvagalleria")
              .id("kuvagalleria")
              .icon(FaImage)
              .child(
                S.documentTypeList("kuvagalleria").title("Kuvagallerialista")
              ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
