import { defineType, defineField } from "sanity";

export const settingsType = defineType({
  name: "supportedLanguages",
  title: "Idiomas",
  description: "Idiomas para las traducciones",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Idioma",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "id",
      title: "Code ISO 639",
      description: "Este es el codigo ISO para definir el idioma usado (Ejemplo: Español sería 'es', Inglés sería 'en'...)",
      type: "string"
    }),
    defineField({
      name: "isDefault",
      title: "Por defecto",
      description: "Define si es el idioma por defecto",
      type: "boolean",
      initialValue: false,
    })
  ]
})