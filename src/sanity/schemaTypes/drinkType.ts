import { defineField, defineType } from "sanity"
import { baseLanguage } from "./localeStringType"
import { LuImageOff } from "react-icons/lu"

export const drinkType = defineType({
  name: "drink",
  title: "Refrescos",
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
      name: "identifierNumber",
      title: "Numero de la bebida",
      type: "string",
      description: "Numero identificador de la bebida",
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
      type: "localeString",
      description: "Descripcion larga de la bebida",
      group: "basics",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      description: "Imagen de la bebida",
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
      name: "isAlcholic",
      title: "Es alcoholica?",
      type: "boolean",
      description: "Funcionalidad para indicar si la bebida contiene alcohol",
      group: "extras",
      initialValue: false
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
      drinkNumber: "identifierNumber",
      title: "title",
      description: "description",
      media: "image"
    },
    prepare({ drinkNumber, title, description, media }) {
      const id = baseLanguage.id
      return {
        title: `${drinkNumber} - ${title?.[id]}` || "No definido",
        subtitle: description?.[id] || "",
        media: media || LuImageOff
      }
    },
  }
})