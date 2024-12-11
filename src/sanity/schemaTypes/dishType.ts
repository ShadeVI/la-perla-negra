import { LuImageOff } from "react-icons/lu";
import { defineField, defineType } from "sanity";
import { baseLanguage } from "./localeStringType";

export const dishType = defineType({
  name: "dish",
  title: "Platos",
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
      name: "dishNumber",
      title: "Numero del plato",
      type: "string",
      description: "Numero identificador del plato",
      validation: rule => rule.required(),
      group: "basics"
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "localeString",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador unico del titulo",
      options: {
        source: `title.${[baseLanguage?.id]}`
      },
      group: "basics"
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "localeString",
      description: "Descripcion larga del plato",
      group: "basics"
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      description: "Imagen del plato",
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
    })
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "image"
    },
    prepare({ title, description, media }) {
      const id = baseLanguage.id
      return {
        title: title?.[id] || "No definido",
        subtitle: description?.[id] || "No definido",
        media: media || LuImageOff
      }
    },
  }
})