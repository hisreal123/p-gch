import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {churchBlogPosts as initialState} from "../../components/PostData";
// import ChurchBlogPost from '../../typing'

const postsSlice = createSlice({
    name: 'post',
    initialState ,
    reducers: {

    },
});

export const selectAllPosts = (state: RootState) => state.post;
export default postsSlice.reducer;
