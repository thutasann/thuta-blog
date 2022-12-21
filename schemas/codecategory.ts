import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'codecategory',
    title: 'Code Category',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        }),
        defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        }),
    ],
})
