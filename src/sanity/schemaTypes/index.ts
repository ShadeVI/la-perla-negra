import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { ingredientType } from './ingredientType'
import { dishType } from './dishType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, ingredientType, dishType],
}
