import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { ingredientType } from './ingredientType'
import { dishType } from './dishType'
import { localeString } from './localeStringType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, ingredientType, dishType, localeString],
}
