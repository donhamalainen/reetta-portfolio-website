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
      validation: (Rule) => Rule.required(),
      description: "Työnäytteen otsikko, josta olet kirjoittamassa.",
    }),
    defineField({
      name: "seloste",
      title: "Seloste",
      type: "string",
      description:
        "Uutisen sisältö lyhyesti, sekä mitä olet tehnyt uutisprojektissa.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "otsikko",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description:
        "HUOM! Muista generoida tämä osa! Jos et generoi tätä, niin uutisesi ei ole nähtävillä sivustollasi.",
    }),

    defineField({
      name: "kuva",
      title: "Kuva",
      type: "image",
      description:
        "On ehdottoman suositeltavaa lisätä tähän laadukas ja hyvä kuva uutisesta, jotta työnantaja näkee työsijäljen.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Vaihtoehtoinen teksti (ALT)",
          description:
            "Kuvateksti parantaa näyvyyttä ja tulee olla lyhyt (n. 50 merkkiä).",
        },
      ],
    }),
    defineField({
      name: "julkaistu",
      title: "Julkaistu",
      type: "date",
      description: "Aseta aika jolloin työnäytteesi on julkaistu.",
    }),
  ],

  preview: {
    select: {
      title: "otsikko",
      media: "kuva",
      createdAt: "_createdAt",
    },
    prepare(selection) {
      const { title, createdAt } = selection;

      const formattedDate = new Date(createdAt).toLocaleDateString("fi-FI", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });

      return {
        ...selection,
        subtitle: `${title} - ${formattedDate}`,
      };
    },
  },
});
