import styles from "../Blog.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>{props?.title}</h3>
      <p>{props?.content}</p>
    </div>
  );
};

export default Post;
