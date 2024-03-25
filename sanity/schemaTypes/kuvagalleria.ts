import { defineField, defineType } from "sanity";

export default defineType({
  name: "kuvagalleria",
  title: "Kuvagalleria",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Kuva",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    // Voit lisätä lisää kenttiä tarpeen mukaan
  ],
});
