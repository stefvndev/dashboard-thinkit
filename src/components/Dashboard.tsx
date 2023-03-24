import Navbar from "./Navbar";
import Header from "./Header";
import User from "./User";
import Posts from "./Posts";
import { FC, useEffect, useState } from "react";

type Task = {
  title: string;
  id: number;
};

const Dashboard: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const url: string = "https://jsonplaceholder.typicode.com/todos/?_limit=5";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setTasks(json);
    };
    fetchData();
  }, [url]);

  console.log(tasks);

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
              <User />
              {/* posts */}
              <Posts tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
