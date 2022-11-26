import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "./tagSlice";

const Store = configureStore({
    reducer: {
        tags: tagSlice
    }
})
export default Store