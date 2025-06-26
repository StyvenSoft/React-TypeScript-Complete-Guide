import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, type FavoriesSliceType } from './favoritesSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'
import { createAISlice, type RecipeAISlice } from './RecipeAISlice'


export const useAppStore = create<RecipesSliceType & FavoriesSliceType & NotificationSliceType & RecipeAISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))