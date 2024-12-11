import { defineMigration, at, setIfMissing, unset } from 'sanity/migrate'

const from = 'nombre'
const to = 'name'

export default defineMigration({
  title: '"Changed ingrediente name field from nombre to name"',
  documentTypes: ["ingredient"],

  migrate: {
    document(doc) {
      return [
        at(to, setIfMissing(doc[from])),
        at(from, unset())
      ]
    }
  }
})
