import { FC } from "react";
import { AiOutlineFile } from "react-icons/ai";

const Posts: FC = () => {
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

          <div className="posts__grid__row">
            <p>Title</p>
            <span>
              <button>View</button>
              <button>Delete</button>
            </span>
          </div>
          <div className="posts__grid__row">
            <p>Title</p>
            <span>
              <button>View</button>
              <button>Delete</button>
            </span>
          </div>
          <div className="posts__grid__row">
            <p>Title</p>
            <span>
              <button>View</button>
              <button>Delete</button>
            </span>
          </div>
          <div className="posts__grid__row">
            <p>Title</p>
            <span>
              <button>View</button>
              <button>Delete</button>
            </span>
          </div>
          <div className="posts__grid__row">
            <p>Title</p>
            <span>
              <button>View</button>
              <button>Delete</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
