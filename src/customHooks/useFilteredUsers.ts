import { useMemo } from "react";

type User = {
  username: string;
  email: string;
};

export const useFilteredUsers = (
  users: User[] = [],
  filter: string,
  limit = 5
) => {
  return useMemo(() => {
    return users
      .slice(0, limit)
      .filter(
        (user) =>
          user.username.toLowerCase().includes(filter.toLowerCase()) ||
          user.email.toLowerCase().includes(filter.toLowerCase())
      );
  }, [users, filter, limit]);
};
