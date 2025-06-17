import styles from "./users.module.css";
import { UserCardHeader } from "./UserCardHeader";

interface UserCardProps {
  username: string;
  email: string;
}

export const UserCard = ({ email, username }: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserCardHeader username={username} />
      <div className={styles.userCardBody}>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};
