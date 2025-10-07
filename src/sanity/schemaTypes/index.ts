import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType' 
import pageType from './pageType'
import heroType from './heroType'
import logoTicker from './logoTicker'
import contactType from './contactType'
import teamMemberType from './teamMemberType'
import serviceType from './serviceType'
import newsletterType from './newsletterType'
 


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, heroType, logoTicker, pageType, contactType, teamMemberType, serviceType, newsletterType]
}
