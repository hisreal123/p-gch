import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/Post'

const store = configureStore({
    reducer: {
        post: postReducer
    },
})


export type RootState = ReturnType<typeof store.getState>


export default store