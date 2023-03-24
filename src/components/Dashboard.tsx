import Navbar from "./Navbar";
import Header from "./Header";
import User from "./User";
import Posts from "./Posts";

const Dashboard = () => {
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
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
