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
    defineField({
      name: "kuvaAlt",
      type: "string",
      title: "Kuvateksti (ALT)",
    }),
  ],
  preview: {
    select: {
      media: "kuva",
      createdAt: "createdAt", // Lisätään createdAt valintoihin
    },
    prepare(selection) {
      const { media, createdAt } = selection;
      // Oletetaan, että createdAt on merkkijonomuodossa. Jos se on Date-objekti, muotoilu tarvitaan.
      return {
        title: `Kuvagallerian kuva ${
          Object.keys(media).length
        } luotu ${createdAt}`,
        media: media,
      };
    },
  },
});
