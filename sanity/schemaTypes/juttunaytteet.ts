import { defineField, defineType } from "sanity";

export default defineType({
  name: "juttunaytteet",
  title: "Juttunäytteet",
  type: "document",
  fields: [
    defineField({
      name: "juttunayteOtsikko",
      title: "Jutun otikko",
      type: "string",
    }),
    defineField({
      name: "juttunayteKuvaus",
      title: "Jutun kuvaus",
      type: "text",
    }),
    defineField({
      name: "juttunayteKuva",
      title: "Jutun kuva",
      type: "image",
      options: {
        hotspot: true, // mahdollistaa kuvan kohdistuspisteen määrittelyn
      },
    }),
  ],
});
