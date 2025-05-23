import type z from "zod";
import type { categoriesAPIResponseSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof categoriesAPIResponseSchema>