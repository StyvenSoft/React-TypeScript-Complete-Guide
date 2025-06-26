import type { StateCreator } from "zustand"

export type RecipeAISlice = {
    recipe: string
}

export const createAISlice : StateCreator<RecipeAISlice, [], [], RecipeAISlice> = () => ({
    recipe: ''
})