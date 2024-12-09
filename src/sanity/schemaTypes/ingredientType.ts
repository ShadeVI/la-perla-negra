import { defineField, defineType } from "sanity";

export const ingredientType = defineType({
  name: "ingredient",
  title: "Ingredientes",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      description: "Nombre del ingrediente",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador unico para las rutas",
      options: {
        source: "nombre"
      }
    })
  ]
})