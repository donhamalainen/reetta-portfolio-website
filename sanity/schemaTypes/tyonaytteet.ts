import { defineField, defineType } from "sanity";

export default defineType({
  name: "tyonaytteet",
  title: "Työnäytteet",
  type: "document",
  fields: [
    defineField({
      name: "projektit",
      title: "Projektit",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projektit" }] }],
    }),
    defineField({
      name: "juttunaytteet",
      title: "Juttunäytteet",
      type: "array",
      of: [{ type: "reference", to: [{ type: "juttunaytteet" }] }],
    }),
    defineField({
      name: "kuvagalleria",
      title: "Kuvagalleria",
      type: "array",
      of: [{ type: "reference", to: [{ type: "kuvagalleria" }] }],
    }),
    // Lisää viittauksia tarpeen mukaan
  ],
});
