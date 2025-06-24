import type { StateCreator } from "zustand"
import type { Recipe } from "../types"

export type FavoriesSliceType = {
    favorites: Recipe[]
}

export const createFavoriteSlice : StateCreator<FavoriesSliceType> = () => ({
    favorites: []
})