import { defineField, defineType } from "sanity";

export default defineType({
  name: "projektit",
  title: "Projektit",
  type: "document",
  fields: [
    defineField({
      name: "projectTitle",
      title: "Projektin otsikko",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectSlug",
      title: "Projektiosoite",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "projectTitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "projectDescription",
      title: "Projektin kuvaus",
      type: "text",
    }),
    defineField({
      name: "projectImage",
      title: "Projektikuva",
      type: "image",
      options: {
        hotspot: true, // mahdollistaa kuvan kohdistuspisteen määrittelyn
      },
    }),
    defineField({
      name: "projectDate",
      title: "Projektin päivämäärä",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
  ],
  preview: {
    select: {
      title: "projectTitle",
      date: "projectDate",
      media: "projectImage",
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title: title,
        media: media,
        subtitle: date
          ? new Date(date).toLocaleDateString("fi-FI", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : "Julkaisupäivämäärä ei ole määritetty",
      };
    },
  },
});
