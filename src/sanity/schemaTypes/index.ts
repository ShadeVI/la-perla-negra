import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { ingredientType } from './ingredientType'
import { dishType } from './dishType'
import { localeString } from './localeStringType'
import { drinkType } from './drinkType'
import { localeBlockText } from './localBlockTextType'
import { wineType } from './wineType'
//import { settingsType } from './settingType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, ingredientType, dishType, drinkType, wineType, localeString, localeBlockText],
}
