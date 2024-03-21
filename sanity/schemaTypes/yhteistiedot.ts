import { defineField, defineType } from "sanity";

export default defineType({
  name: "yhteistiedot",
  title: "Yhteistiedot",
  type: "document",
  fields: [
    defineField({
      name: "mail",
      title: "Aseta sähköposti",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Lisää sähköpostisi",
    }),
    defineField({
      name: "phone",
      title: "Aseta puhelinnumerosi",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Puhelinnumerosi",
    }),
    defineField({
      name: "cv_file",
      title: "CV Tiedosto",
      description: "Liitä tähän ansioluettelosi PDF muodossa",
      type: "file",
    }),
  ],
});
