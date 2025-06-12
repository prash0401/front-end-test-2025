import styles from "./users.module.css";
import { UserCardHeader } from "./UserCardHeader";

export const UserCard = () => {
  <div className={styles.userCard}>
    <UserCardHeader />
    <div className={styles.userCardBody}>
      Email: <a href=""></a>
    </div>
  </div>;
};
