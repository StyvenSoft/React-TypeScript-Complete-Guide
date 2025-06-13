import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: (searchRecipies: SearchFilter) => Promise<void>
    selectRecipes: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipes: async (id) => {
        console.log("selectRecipes");
        await getRecipeById(id)
    }
})