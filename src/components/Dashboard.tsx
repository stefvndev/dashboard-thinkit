import Navbar from "./Navbar";
import Header from "./Header";
import User from "./User";
import { FC } from "react";

const Dashboard: FC = () => {
  const fetchUserTodos = async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}&_limit=5`
    );
    const todos = await response.json();
    return todos;
  };

  return (
    <>
      <div className="dash-container">
        <div className="dashboard">
          {/* navbar */}
          <Navbar />
          {/* all other components */}
          <div className="dash">
            {/* header */}
            <Header />
            <div className="dash__user-posts">
              {/* users */}
              <User fetchUserTodos={fetchUserTodos} />
              {/* posts */}
              {/* <Posts  /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
