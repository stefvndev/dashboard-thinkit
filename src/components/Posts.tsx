import { FC, useState } from "react";
import { AiOutlineFile } from "react-icons/ai";

type Task = {
  title: string;
  id: number;
};

type PostsProps = {
  currentPosts: Task[];
};

const Posts: FC<PostsProps> = ({ currentPosts }) => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div
        className={`overlay ${openModal ? "show-modal" : ""}`}
        onClick={showModal}
      ></div>

      <div className={`modal ${openModal ? "show-modal" : ""}`}>
        <p>Text</p>
        <button onClick={showModal}>Exit</button>
      </div>

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
                <button onClick={showModal}>View</button>
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
