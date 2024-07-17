import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        shortDescription: z.string(),
        startDate: z.date(),
        releaseDate: z.date().optional(),
        projectLink: z.string().url().optional(),
        githubLink: z.string().url().optional(),
        rank: z.number(),
        thumbnailImg: image(),
        // TODO: Add verification
        tags: z.array(z.string()),
    })
})

export const collections = {
    'projects': projectsCollection
}