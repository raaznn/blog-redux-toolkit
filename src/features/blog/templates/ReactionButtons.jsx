import { useDispatch } from "react-redux";
import styles from "../Blog.module.css";
import { reactPost } from "../blogSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😱",
  heart: "😍",
  rocket: "😭",
  coffee: "🤮",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const handleReact = (postId, reaction) => {
    dispatch(reactPost({ postId, reaction }));
  };

  return (
    <div className={styles.reactioncontainer}>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            onClick={() => handleReact(post.id, name)}
            key={name}
            className={styles.reactionbutton}
          >
            {post.reactions[name]}
            <span style={{ marginLeft: "2px" }}>{emoji}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ReactionButtons;
