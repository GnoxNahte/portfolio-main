import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        shortDescription: z.string(),
        startDate: z.date(), // format is YYYY-MM-DD
        releaseDate: z.date().optional(), // format is YYYY-MM-DD
        projectLink: z.string().url().optional(),
        githubLink: z.string().url().optional(),
        rank: z.number(),
        thumbnailImg: image(),
        bannerImg: image().optional(),
        // TODO: Add verification
        tags: z.array(z.string()),
        isUnlisted: z.boolean().optional(), // Page is available but won't show up in "/projects/" page;
    })
})

export const collections = {
    'projects': projectsCollection
}