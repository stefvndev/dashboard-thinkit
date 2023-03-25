import { FC } from "react";
import { AiOutlineFile } from "react-icons/ai";

type Task = {
  title: string;
  id: number;
};

type PostsProps = {
  currentPosts: Task[];
};

const Posts: FC<PostsProps> = ({ currentPosts }) => {
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

          {currentPosts.map((task) => (
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
