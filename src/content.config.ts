// src/content.config.ts

import { defineCollection, z } from "astro:content";

// Define the schema for blog posts
const postsCollection = defineCollection({
  // Type "content" is for Markdown/MDX
  type: "content",
  // Schema validates frontmatter
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    author: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export all collections
export const collections = {
  posts: postsCollection,
};