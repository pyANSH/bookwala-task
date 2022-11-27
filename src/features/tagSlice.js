import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [

    ],
    tagMenuA: [
        { id: 1, name: "tag1", color: "#E2F9CF" },
        { id: 2, name: "tag2", color: "#F0F8FF" },
        { id: 3, name: "tag3", color: "#FFF68F" },
        { id: 4, name: "tag4", color: "#FFB6C1" },
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