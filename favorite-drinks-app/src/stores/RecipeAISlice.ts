import type { StateCreator } from "zustand"
import AIServices from "../services/AIServices"

export type RecipeAISlice = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice: StateCreator<RecipeAISlice, [], [], RecipeAISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        await AIServices.generateRecipe(prompt)
    }
})