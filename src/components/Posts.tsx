import { FC, useState } from "react";
import { AiOutlineFile } from "react-icons/ai";

type Task = {
  title: string;
  id: number;
};

type PostsProps = {
  currentPosts: Task[];
  setCurrentPosts: React.Dispatch<React.SetStateAction<Task[]>>;
};

const Posts: FC<PostsProps> = ({ currentPosts, setCurrentPosts }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedPostTitle, setSelectedPostTitle] = useState<string>("");
  const [delModal, setDelModal] = useState<boolean>(false);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);

  // open view modal
  const showModal = (title: string) => {
    setSelectedPostTitle(title);
    setOpenModal(true);
  };

  // close view modal
  const closeModal = () => {
    setOpenModal(false);
    setDelModal(false);
  };

  // delete task
  const deleteTask = (taskId: number) => {
    // deleting request to the api?
    fetch(`https://jsonplaceholder.typicode.com/posts/${taskId}`, {
      method: "DELETE",
    });

    // filter if task.id is not taskId
    const updatePosts = currentPosts.filter((task) => task.id !== taskId);
    setCurrentPosts(updatePosts);
    setDelModal(false);
  };

  // show deleting modal
  const showDelModal = (taskId: number) => {
    setDeleteTaskId(taskId);
    setDelModal(true);
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`overlay ${openModal || delModal ? "show-modal" : ""}`}
        onClick={closeModal}
      ></div>

      {/* view modal */}
      <div className={`modal ${openModal ? "show-modal" : ""}`}>
        <p>{selectedPostTitle}</p>
        <button onClick={closeModal}>Exit</button>
      </div>

      {/* deleting modal */}
      <div className={`deleting-modal ${delModal ? "show-modal" : ""}`}>
        <p>Are you sure you want to delete this post?</p>
        <button onClick={() => deleteTask(deleteTaskId!)}>Delete Post</button>
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
              <p onClick={() => showModal(task.title)}>{task.title}</p>
              <span>
                <button onClick={() => showModal(task.title)}>View</button>
                <button
                  onClick={() => {
                    // deleteTask(task.id);
                    showDelModal(task.id);
                  }}
                >
                  Delete
                </button>
                {/*  */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
