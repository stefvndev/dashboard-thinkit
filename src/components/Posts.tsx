import { FC, useState, useEffect } from "react";
import { AiOutlineFile } from "react-icons/ai";

type Props = {
  title: string;
  id: number;
};

const Posts: FC = () => {
  const [tasks, setTasks] = useState<Props[]>([]);

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
      <div className="posts">
        <div className="posts__title">
          <AiOutlineFile />
          <p>Posts</p>
        </div>
        <div className="posts__grid">
          <div className="posts__grid__top">
            <p>Title</p>
            <p>Actions</p>
          </div>

          {tasks.map((task) => (
            <div key={task.id} className="posts__grid__row">
              <p>{task.title}</p>
              <span>
                <button>View</button>
                <button>Delete</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
