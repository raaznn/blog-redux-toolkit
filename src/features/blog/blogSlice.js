import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: nanoid(),
      title: "title1",
      content: "content1",
    },
    {
      id: nanoid(),
      title: "title2",
      content: "content2",
    },
  ],
  state: "idle",
  error: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, content } = action.payload;
      state.posts.push({ id: nanoid(), title, content });
    },
  },
});

export const getAllPosts = (state) => state.blog.posts;

export const { addPost } = blogSlice.actions;

export default blogSlice.reducer;
