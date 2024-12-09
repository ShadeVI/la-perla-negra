import { LuImageOff } from "react-icons/lu";
import { defineField, defineType } from "sanity";

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
      type: "string",
      description: "Nombre del plato",
      validation: rule => rule.required(),
      group: "basics"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador unico para las rutas",
      options: {
        source: "title"
      },
      group: "basics"
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "string",
      description: "Descripcion larga del plato",
      group: "basics"
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      description: "Imagen del plato",
      options: {
        accept: ".jpeg, .jpg, .png"
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
    })
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "image"
    },
    prepare({ title, description, media }) {
      return {
        title: title,
        subtitle: (description as string)?.slice(0, 15),
        media: media || LuImageOff
      }
    },
  }
})