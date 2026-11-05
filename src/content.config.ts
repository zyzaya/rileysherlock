import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
    }),
});

const skills = defineCollection({
    loader: file("src/data/skills.json"),
    schema: ({ image }) => z.object({
        image: image(),
    })
})

export const collections = { projects, skills };