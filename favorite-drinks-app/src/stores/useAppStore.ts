import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import { createFavoriteSlice, type FavoriesSliceType } from './favoritesSlice'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice'


export const useAppStore = create<RecipesSliceType & FavoriesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))