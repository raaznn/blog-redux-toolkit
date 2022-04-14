import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: nanoid(),
      title: "On Death!",
      content: "Every man is born as many men and dies as a single one.",
      createdAt: Date.now() - 600000,
      reactions: {
        thumbsUp: 5,
        wow: 3,
        heart: 0,
        rocket: 1,
        coffee: 0,
      },
    },
    {
      id: nanoid(),
      title: "On History!",
      content: "We learn from history that we do not learn from history.",
      createdAt: Date.now() - 300000,
      reactions: {
        thumbsUp: 10,
        wow: 6,
        heart: 2,
        rocket: 0,
        coffee: 0,
      },
    },
  ],
  state: "idle",
  error: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            createdAt: Date.now(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactPost: (state, action) => {
      const { postId, reaction } = action.payload;
      const oldPost = state.posts.find((post) => post.id === postId);
      if (oldPost) oldPost.reactions[reaction]++;
    },
  },
});

export const getAllPosts = (state) => state.blog.posts;

export const { addPost, reactPost } = blogSlice.actions;

export default blogSlice.reducer;
