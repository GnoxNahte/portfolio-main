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
        reviewsLink: z.string().url().optional(),
        rank: z.number(),
        thumbnailImg: image(),
        bannerImg: image().optional(),
        // Match any css unit
        bannerMaxWidth: z.string().regex(/^(-?(\d*\.)?\d+)((px)|(em)|(%)|(ex)|(ch)|(rem)|(vw)|(vh)|(vmin)|(vmax)|(cm)|(mm)|(in)|(pt)|(pc))$/im).optional(),
        // Match any hex color codes. Support #AAA, #123BCD, #123BCDAA (For alpha)
        bannerBackgroundColor: z.string().regex(/^#(?:[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/).optional(),
        // TODO: Add verification
        tags: z.array(z.string()),
        isUnlisted: z.boolean().optional(), // Page is available but won't show up in "/projects/" page;
        isFeatured: z.boolean().optional(),
    })
})

export const collections = {
    'projects': projectsCollection
}