import { z } from "zod";

export const postSlugSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const blogFilterSchema = z.enum(["latest", "building", "agents", "notes"]);
export const projectFilterSchema = z.enum(["all", "live", "learning", "dead"]);

export type BlogFilter = z.infer<typeof blogFilterSchema>;
export type ProjectFilter = z.infer<typeof projectFilterSchema>;
