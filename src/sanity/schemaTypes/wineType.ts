import { defineField, defineType } from "sanity"
import { baseLanguage } from "./localeStringType"
import { LuImageOff } from "react-icons/lu"

export const wineType = defineType({
  name: "wine",
  title: "Vinos",
  type: "document",
  groups: [
    {
      name: "basics",
      title: "Basicos"
    },
    {
      name: "image",
      title: "Imagen"
    },
    {
      name: "references",
      title: "Referencias"
    },
    {
      name: "extras",
      title: "Extras"
    }
  ],
  fields: [

    defineField({
      name: "wineNumber",
      title: "Numero de la vino",
      type: "string",
      description: "Numero identificador del vino",
      validation: rule => rule.required(),
      group: "basics"
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "localeString",

      validation: rule => rule.required()
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "localBlockText",
      description: "Descripcion larga del vino",
      group: "basics"
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      description: "Imagen del vino",
      options: {
        accept: ".jpeg, .jpg, .png",
        hotspot: true
      },
      group: "image"
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
      validation: rule => rule.positive().min(0).precision(2).required(),
      group: "basics"
    }),
    defineField({
      name: "category",
      title: "Categoria",
      description: "A que categoria pertenece",
      type: "reference",
      to: [{ type: "category" }],
      group: "references",
      validation: rule => rule.required()
    }),
    defineField({
      name: "ingredients",
      title: "Ingredientes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "ingredient" }]
        }
      ],
      validation: rule => rule.unique(),
      options: {
        insertMenu: {
          filter: true,
        }
      },
      group: "references"
    }),
    defineField({
      name: "isHighlighted",
      title: "Es recomendado?",
      type: "boolean",
      description: "Funcionalidad para indicar si el registro debe ser recomendado",
      group: "extras",
      initialValue: false
    }),
    defineField({
      name: "isVisible",
      title: "Mostrar",
      type: "boolean",
      description: "Funcionalidad para mostrar o no el contenido en la aplicación",
      group: "extras",
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    },
    prepare({ title, media }) {
      const id = baseLanguage.id
      return {
        title: title?.[id] || "No definido",
        media: media || LuImageOff
      }
    },
  }
})