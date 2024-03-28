import { defineField, defineType } from "sanity";

export default defineType({
  name: "kuvagalleria",
  title: "Kuvagalleria",
  type: "document",
  fields: [
    defineField({
      name: "kuva",
      title: "Kuva",
      type: "image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: "kuva",
      createdAt: "_createdAt", // Lisätään createdAt valintoihin
    },
    prepare(selection) {
      const { media, createdAt } = selection;
      // Oletetaan, että createdAt on merkkijonomuodossa. Jos se on Date-objekti, muotoilu tarvitaan.
      return {
        title: `Kuva`,
        subtitle: createdAt
          ? new Date(createdAt).toLocaleDateString("fi-FI", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : "Ei vielä julkaistu",
        media: media,
      };
    },
  },
});
