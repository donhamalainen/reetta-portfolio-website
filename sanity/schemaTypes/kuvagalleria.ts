import { defineField, defineType } from "sanity";

export default defineType({
  name: "kuvagalleria",
  title: "Kuvagalleria",
  type: "document",
  fields: [
    defineField({
      name: "kuvagalleriaKuva",
      title: "Kuva",
      description:
        "Anna kuva painamalla 'upload' tai valitse kuva jo valmiiksi tallennetuista painamalla 'select'",
      validation: (rule) => rule.required(),
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: "kuvagalleriaKuva",
    },
    prepare(selection) {
      const { media } = selection;
      return {
        media: media,
      };
    },
  },
});
