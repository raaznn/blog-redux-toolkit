import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../blogSlice";
import styles from "../Blog.module.css";

const PostForm = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost({ title, content }));
      settitle("");
      setcontent("");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form className={styles.postform} onSubmit={handleSubmit}>
        <label className={styles.formlabel}>Title for the post</label>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="My awesome post"
        />

        <label className={styles.formlabel}>Content for the post</label>
        <textarea
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          className={styles.formtextarea}
          rows="2"
          type="text"
          placeholder="Short description of the post"
        ></textarea>
        <button className={styles.formbutton}>POST</button>
      </form>
    </div>
  );
};

export default PostForm;
