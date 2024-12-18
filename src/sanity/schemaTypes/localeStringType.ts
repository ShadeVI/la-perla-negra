import { defineType } from 'sanity'
import { client } from '../lib/client'

// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const QUERY_SUPPORTED_LANGUAGES = `*[_type == "supportedLanguages"]{
  id,
  name,
  isDefault
}`

interface SupportedLanguagesSchema {
  id: string,
  title: string,
  isDefault?: boolean
}

async function fetchSupportedLanguages(): Promise<SupportedLanguagesSchema[]> {
  const languages = await client.fetch(QUERY_SUPPORTED_LANGUAGES);

  return languages.length > 0 ? languages : [
    { id: 'es', title: 'Español', isDefault: true },
    { id: 'en', title: 'English' },
    { id: 'de', title: 'Deutsche' },
  ];
}

const supportedLanguages: SupportedLanguagesSchema[] = await fetchSupportedLanguages()

export const baseLanguage = supportedLanguages.sort((a, b) => (a?.isDefault && !b?.isDefault) ? -1 : 1).find(l => l?.isDefault) || supportedLanguages[0]

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
    validation: rule => lang.isDefault ? rule.required() : undefined,
    initialValue: ""
  }))
})