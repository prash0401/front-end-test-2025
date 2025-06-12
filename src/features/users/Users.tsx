import type { JSX } from "react";
import { useEffect, useState } from "react";
import styles from "./users.module.css";
import { useGetUsersQuery } from "./usersApiSlice";

export const Users = (): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetUsersQuery(5);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setInterval(() => {
      void refetch();
    }, 30000);
  }, [refetch]);

  if (isError) {
    return <p>An error occurred</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    const filteredData = data.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Filter users..."
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        {filteredData.map(({ name, email }) => (
          <div className={styles.userCard}>
            <div className={styles.userCardHeader}>{name}</div>
            <div className={styles.userCardBody}>
              Email: <a href="mailto:{email}">{email}</a>
            </div>
          </div>
        ))}
      </>
    );
  }

  return null;
};
