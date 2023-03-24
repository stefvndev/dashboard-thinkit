import { BiUser } from "react-icons/bi";

const User = () => {
  return (
    <>
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
    </>
  );
};

export default User;
