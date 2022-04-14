import { useSelector, useDispatch } from "react-redux";
import { addPost, getAllPosts } from "./blogSlice";
import Post from "./templates/Post";
import PostForm from "./templates/PostForm";
import styles from "./Blog.module.css";

const Blog = () => {
  const posts = useSelector(getAllPosts);

  const renderedPosts = posts.map((post) => {
    return <Post key={post.id} {...post} />;
  });

  return (
    <div className={styles.blog}>
      <h1 className={styles.header}>Blog </h1>
      <PostForm />

      <div>
        <h2>Posts</h2>
        {renderedPosts}
      </div>
    </div>
  );
};

export default Blog;
