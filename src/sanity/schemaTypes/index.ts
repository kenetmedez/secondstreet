import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
// import {page} from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [blockContentType, ca÷tegoryType, postType, authorType, page],
// }
  types: [blockContentType, categoryType, postType, authorType],
}
