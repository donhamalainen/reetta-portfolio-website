import { defineField, defineType } from "sanity";

export default defineType({
  name: "juttunaytteet",
  title: "Juttunäytteet",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Otsikko", type: "string" }),
    defineField({
      name: "description",
      title: "Kuvaus",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Kuva",
      type: "image",
      options: {
        hotspot: true, // mahdollistaa kuvan kohdistuspisteen määrittelyn
      },
    }),
    // Voit lisätä lisää kenttiä tarpeen mukaan
  ],
});
