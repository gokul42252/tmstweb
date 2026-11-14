import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const staffCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/staff' }),
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Thanthri (Kidangassery Illam)", "Melshanthi", "Samithi President"
    image: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    malayalamTitle: z.string().optional(),
    date: z.date(),
    endDate: z.date().optional(),
    time: z.string().optional(),
    location: z.string().default("Thirumarady Sri Mahadeva Temple"),
    image: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    malayalamTitle: z.string().optional(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default("Devaswom Committee"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["temple", "festivals"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/siteInfo' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};
