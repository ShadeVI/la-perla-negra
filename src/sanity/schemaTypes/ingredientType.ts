import { LuImageOff } from "react-icons/lu";
import { defineField, defineType } from "sanity";
import { baseLanguage } from "./localeStringType";

export const ingredientType = defineType({
  name: "ingredient",
  title: "Ingredientes",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "localeString",
      description: "Nombre del ingrediente",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador unico para el ingrediente",
      options: {
        source: "name"
      }
    })
  ], preview: {
    select: {
      title: "name",
    },
    prepare(selected) {
      const { title } = selected
      return {
        title: title?.[baseLanguage.id] || "No definido",
        media: LuImageOff,
      }
    }
  },
})