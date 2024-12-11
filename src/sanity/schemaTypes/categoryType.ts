import { defineField, defineType } from "sanity";
import { LuImageOff } from "react-icons/lu";

import { baseLanguage } from "@/sanity/schemaTypes/localeStringType"

export const categoryType = defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({
      name: "categoryNumber",
      type: "string",
      title: "Identificador",
      description: "Identificador de la categoria",
      validation: rule => rule.required()
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "localeString",
      validation: rule => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador unico de la categoria",
      options: {
        source: `title.${baseLanguage.id}`
      }
    })
  ],
  preview: {
    select: {
      title: "title",
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