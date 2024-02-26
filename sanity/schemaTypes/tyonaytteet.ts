import { defineField, defineType } from "sanity";

export default defineType({
  name: "tyonaytteet",
  title: "Työnäytteet",
  type: "document",
  fields: [
    defineField({
      name: "otsikko",
      title: "Otikko",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "otsikko",
        maxLength: 96,
      },
    }),

    defineField({
      name: "kuva",
      title: "Kuva",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Vaihtoehtoinen teksti (ALT)",
        },
      ],
    }),
    defineField({
      name: "julkaistu",
      title: "Julkaistu",
      type: "date",
    }),
  ],

  preview: {
    select: {
      title: "otsikko",
      media: "kuva",
      date: "julkaistu",
    },
    prepare(selection) {
      const { title, date } = selection;

      const formattedDate = new Date(date).toLocaleDateString("fi-FI", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      return { ...selection, subtitle: `${title} - ${formattedDate}` };
    },
  },
});
