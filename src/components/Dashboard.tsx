import { BiUser } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <div className="dash-container">
        <div className="dashboard">
          {/* navbar */}
          <nav>
            <h1>ThinkIT Test</h1>
          </nav>
          {/* all other components */}
          <div className="dash">
            {/* header */}
            <header className="dash__top">
              <h2>Test</h2>
              <div className="dash__top__profile">
                <p>Stefan</p>
                <BiUser className="dash__top__profile__icon" />
              </div>
            </header>
            <div className="dash__user-posts">
              {/* users */}
              <div className="dash__user-posts__user">
                <div className="dash__user-posts__user__title">
                  <BiUser />
                  <p>Users</p>
                </div>
                {/* user boxes */}
                <div className="boxes">
                  {/* single box */}
                  <div className="boxes__box">
                    <div className="boxes__box__top">
                      <BiUser className="boxes__box__top__icon" />
                      <p>Stefan</p>
                    </div>
                    {/* user info */}
                    <div className="boxes__box__infos">
                      <p>Username: ...</p>
                      <p>Email: ...</p>
                      <p>Phone: ...</p>
                    </div>
                  </div>

                  <div className="boxes__box"></div>
                  <div className="boxes__box"></div>
                  <div className="boxes__box"></div>
                  <div className="boxes__box"></div>
                </div>
              </div>
              {/* posts */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
