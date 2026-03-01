import { defineCollection, z } from "astro:content";

const seoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  })
  .optional();

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // "YYYY-MM-DD"
    client: z.string().optional(),
    location: z.string().optional(),
    year: z.number().int().optional(),
    status: z.enum(["Concept", "In Progress", "Completed"]).optional(),
    services: z.array(z.string()).optional(),
    floorAreaM2: z.number().optional(),
    budgetLabel: z.string().optional(),
    featuredImage: z.string().optional(),
    summary: z.string().optional(),
    draft: z.boolean().optional(),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          alt: z.string().optional(),
        })
      )
      .optional(),
    seo: seoSchema,
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    seo: seoSchema,
  }),
});

export const collections = { projects, pages };
