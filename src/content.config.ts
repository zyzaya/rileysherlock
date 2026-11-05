import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
    }),
});

export const collections = { projects };