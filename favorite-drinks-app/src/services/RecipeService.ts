import axios from "axios";
import { categoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipes-schema";
import type { SearchFilter } from "../types";

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
