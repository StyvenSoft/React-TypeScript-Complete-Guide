import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, type FavoriesSliceType } from './favoritesSlice'


export const useAppStore = create<RecipesSliceType & FavoriesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))