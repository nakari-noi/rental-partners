import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog: jeden markdown súbor = jeden článok, názov súboru = adresa (/blog/<názov>)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Meta description (do 160 znakov) */
    description: z.string(),
    /** Úvodný odsek pod nadpisom; keď chýba, použije sa description */
    perex: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Hlavná fráza, na ktorú sa článok píše (docs/vyskum-blog-temy.md) */
    keyword: z.string(),
    readingMinutes: z.number().int().positive().optional(),
    /** Rozpísané, ale ešte nezverejnené články sa do buildu nedostanú */
    draft: z.boolean().default(false),
    /** Otázky a odpovede na konci článku, idú aj do FAQPage štruktúrovaných dát */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
