import { FC, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";

interface Props {
  id: number;
  username: string;
  email: string;
  phone: number;
}

const User: FC = () => {
  const [users, setUsers] = useState<Props[]>([]);

  const url: string = "https://jsonplaceholder.typicode.com/users/?_limit=5";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUsers(json);
    };
    fetchData();
  }, [url]);

  console.log(users);

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
              <div className="boxes__box">
                <div className="boxes__box__top">
                  <BiUser className="boxes__box__top__icon" />
                  <p>Stefan</p>
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
    </>
  );
};

export default User;
