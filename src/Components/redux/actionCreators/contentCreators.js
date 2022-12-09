import { ADD_CONTENT } from "../actionsTypes/actionsTypes"

export const addContent = (content) => {
    return {
        type:ADD_CONTENT,
        payload: content
    }
}