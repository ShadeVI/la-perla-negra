import { defineMigration } from 'sanity/migrate'

export default defineMigration({
  title: '"changed field type"',
  documentTypes: ["ingredient"],

  migrate: {
    document(doc, context) {
      // this will be called for every document of the matching type
      // any patch returned will be applied to the document
      // you can also return mutations that touches other documents
      console.log(doc, context)
    }
  },
})
