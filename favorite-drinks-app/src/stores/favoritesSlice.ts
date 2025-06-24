import type { StateCreator } from "zustand"
import type { Recipe } from "../types"

export type FavoriesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const createFavoriteSlice : StateCreator<FavoriesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        console.log(recipe);
        if (get().favoriteExists(recipe.idDrink)) {
            console.log('existe');
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            console.log('no existe');
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})