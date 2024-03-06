import { defineField, defineType } from "sanity";

export default defineType({
  name: "customized",
  title: "Customized block type",
  type: "array",
  of: [
    {
      type: "block",
      // Only allow these block styles
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
      ],
      // Only allow numbered lists
      lists: [{ title: "Numbered", value: "number" }],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Support annotating text with a reference to an author
        annotations: [
          {
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
          },
        ],
      },
    },
  ],
});
