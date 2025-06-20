import type z from "zod";
import type { categoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof categoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>