import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [
        { id: 1, name: "Purple", color: "#800080" },
        { id: 2, name: "Blue", color: "#0000FF" },
        { id: 3, name: "Green", color: "#008000" },
    ],
    tagSize: 3,
    tagMenu: false,

}

const tagSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag: (state, action) => {
            state.tags.push(action.payload)
            state.tagSize += 1
        },
        removeTag: (state, action) => {
            state.tags = state.tags.filter((state) => state.id !== action.payload)
            state.tagSize -= 1
        },
        removeAllTags: (state) => {
            state.tags = []
            state.tagSize = 0
        },
        toggleTagOption: (state) => {
            state.tagMenu = !state.tagMenu
        }
    }
})

export const { addTag, removeTag, removeAllTags, toggleTagOption } = tagSlice.actions

export default tagSlice.reducer