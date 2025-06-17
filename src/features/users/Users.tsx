import type { JSX } from "react";
import { useEffect, useState } from "react";
import styles from "./users.module.css";
import { useGetUsersQuery } from "./usersApiSlice";
import { UserCard } from "./UserCard";
import { useFilteredUsers } from "../../customHooks/useFilteredUsers";

export const Users = (): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetUsersQuery(5);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      void refetch();
    }, 30000);
    return () => clearInterval(interval);
  }, [refetch]);
  const filteredData = useFilteredUsers(data, filter, 5);
  if (isError) {
    return <p>An error occurred</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
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
        <div className={styles.usersContainer}>
          {filteredData.map(({ username, email }) => (
            <UserCard key={username} email={email} username={username} />
          ))}
        </div>
      </>
    );
  }

  return null;
};
