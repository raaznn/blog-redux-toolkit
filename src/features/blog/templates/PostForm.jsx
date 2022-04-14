import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../blogSlice";
import styles from "../Blog.module.css";
import { selectAllUsers } from "../../users/usersSlice";

const PostForm = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const userSelectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userId));
      settitle("");
      setcontent("");
      userSelectRef.current.value = "";
    }
  };

  const userOptions = users?.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const canSave = Boolean(title && content && userId);

  return (
    <div>
      <h2>Create Post</h2>
      <form className={styles.postform} onSubmit={handleSubmit}>
        <label className={styles.formlabel}>Title for the post</label>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className={styles.forminput}
          type="text"
          placeholder="My awesome post"
        />

        <label className={styles.formlabel}>Author of the blog</label>

        <select
          onChange={(e) => setUserId(e.target.value)}
          ref={userSelectRef}
          className={styles.forminput}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label className={styles.formlabel}>Content for the post</label>
        <textarea
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          // className={(styles.formtextarea, styles.forminput)}
          className={styles.formtextarea}
          rows="2"
          type="text"
          placeholder="Short description of the post"
        ></textarea>
        <button
          disabled={!canSave}
          className={canSave ? styles.formbutton : styles.formbuttondisabled}
        >
          POST
        </button>
      </form>
    </div>
  );
};

export default PostForm;
