import moment from "moment";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../users/usersSlice";
import styles from "../Blog.module.css";
import ReactionButtons from "./ReactionButtons";

const Post = (props) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === props.userId);
  const timestamp = props.createdAt ? moment(props.createdAt).fromNow() : "";
  return (
    <div className={styles.post}>
      <h3 className={styles.posttitle}>{props?.title}</h3>
      <p className={styles.postcontent}>{props?.content.substring(0, 100)}</p>
      <p className={styles.postcredit}>
        By:&nbsp;{author ? author.name : "Unknown Author"}
        <em className={styles.timestamp}> &nbsp; {timestamp}</em>
      </p>
      <ReactionButtons post={{ ...props }} />
    </div>
  );
};

export default Post;
