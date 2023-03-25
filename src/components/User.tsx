import { FC, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import Posts from "./Posts";

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type UserProps = {
  fetchUserTodos: (userId: number) => Promise<any>;
};

type Todo = {
  id: number;
  title: string;
};

const User: FC<UserProps> = ({ fetchUserTodos }) => {
  const [users, setUsers] = useState<Props[]>([]);
  const [currentPosts, setCurrentPosts] = useState<Todo[]>([]);
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const url: string = "https://jsonplaceholder.typicode.com/users/?_limit=5";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, [url]);

  const handleUserClick = async (user: Props) => {
    const todos = await fetchUserTodos(user.id);
    setCurrentPosts(todos);
    setActiveUserId(user.id);
  };

  return (
    <>
      <div className="dash__user-posts__user">
        <div className="dash__user-posts__user__title">
          <BiUser />
          <p>Users</p>
        </div>
        {/* user boxes */}
        <div className="boxes">
          {users.map((user) => (
            <div key={user.id}>
              {/* single box */}
              <div
                className={`boxes__box${
                  user.id === activeUserId ? " active" : ""
                }`}
                onClick={() => handleUserClick(user)}
              >
                <div className="boxes__box__top">
                  <BiUser className="boxes__box__top__icon" />
                  <p>{user.name}</p>
                </div>
                {/* user info */}
                <div className="boxes__box__infos">
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* posts */}
      <Posts currentPosts={currentPosts} />
    </>
  );
};

export default User;
