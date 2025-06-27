import type { StateCreator } from "zustand"
import AIServices from "../services/AIServices"

export type RecipeAISlice = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice: StateCreator<RecipeAISlice, [], [], RecipeAISlice> = (set) => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        const data = await AIServices.generateRecipe(prompt)

        for await (const textPart of data) {            
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
    }
})