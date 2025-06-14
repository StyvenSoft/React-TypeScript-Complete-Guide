import axios from "axios";
import { categoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";

export async function getCategories() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(URL)
    const result = categoriesAPIResponseSchema.safeParse(data)

    if (result.success) {
        return result.data
    }

}

export async function getRecipes(filters: SearchFilter) {
    console.log(filters);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if (result.success) {
        return result.data
    }

}

export async function getRecipeById(id: Drink['idDrink']) {
    console.log(id);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    console.log(result);
    if (result.success) {
        return result.data
    }
}
