import "./detail.css";

const Detail = () => {
  return (
    <div className="basis-1/4 detail">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem, ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1o8Wxv.img?w=500&h=354&m=6&x=144&y=74&s=51&d=51"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" className="icon" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1o8Wxv.img?w=500&h=354&m=6&x=144&y=74&s=51&d=51"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" className="icon" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1o8Wxv.img?w=500&h=354&m=6&x=144&y=74&s=51&d=51"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" className="icon" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
