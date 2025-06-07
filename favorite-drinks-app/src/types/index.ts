import type z from "zod";
import type { categoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>