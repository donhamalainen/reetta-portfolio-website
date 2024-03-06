import { defineField, defineType } from "sanity";

export default defineType({
  name: "etusivu",
  title: "Etusivu",
  type: "document",
  fields: [
    defineField({
      name: "Otsikko",
      title: "otsikko",
      type: "string",
    }),
    defineField({
      name: "rich",
      title: "Header rich",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
