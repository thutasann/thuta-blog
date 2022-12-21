import { defineField, defineType } from "sanity";

export default defineType({
    name: 'snippet',
    title: 'Code Snippet',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: "Title",
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            description: "Enter a short description for the Code Snippet...",
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: {type: 'codecategory'}}],
        }),
        defineField({
            name: "code",
            title: "Enter Code Block",
            type: "code",
            options: {
                language: 'js',
            }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        }),
    ],
});