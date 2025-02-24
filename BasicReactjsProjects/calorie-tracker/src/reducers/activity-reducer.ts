import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity',
    payload: { newActiviy: Activity }
}

type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    state.activities
    if (action.type === 'save-activity') {
        console.log(action.payload.newActiviy);

        return {
            ...state,
            activities: [...state.activities, action.payload.newActiviy]
        }
    }

    return state
}