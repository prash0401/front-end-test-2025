import styles from "./users.module.css";

export const UserCardHeader = ({ username }: { username: string }) => {
  return <div className={styles.userCardHeader}>{username}</div>;
};
