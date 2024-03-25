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
      description: "Anna jutun nimi tai otsikko",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "juttunayteLinkki",
      title: "Jutun osoite",
      type: "url",
      description:
        "Anna jutun osoite muodossa http://esimerkki.fi tai https://esimerkki.fi. Pelkkä www.esimerkki.fi ei riitä!",
      validation: (rule) =>
        rule.error("Antamasi osoite ei ole oikein").uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "juttunayteKuvaus",
      title: "Jutun kuvaus",
      type: "text",
      description: "Kirjoita jutun kuvaus",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "juttunayteKuva",
      title: "Jutun kuva",
      type: "image",
      description: "Lisää jutun kuva",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true, // mahdollistaa kuvan kohdistuspisteen määrittelyn
      },
    }),
    defineField({
      name: "juttunayteDate",
      title: "Jutun päivämäärä",
      type: "date",
      description: "Anna jutun julkaisupäivämäärä",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
  ],
  preview: {
    select: {
      title: "juttunayteOtsikko",
      date: "juttunayteDate",
      media: "juttunayteKuva",
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
