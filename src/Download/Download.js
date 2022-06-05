import download_img from "../images/download-img.png";
import info_img from "../images/info.png";

import "./Download.css";

const MainPage = () => {
  return (
    <section className="download">
      <div className="beta-top">
        <img src={info_img} alt="" />
        <p className="beta-text">
          We are currently in BETA, you may encounter some issues if you go
          ahead and launch now.
        </p>
      </div>
      <div className="download-page">
        <div className="dp-1">
          <div className="dp-1-2">
            <h1>ACH E-wallet in your pockets 🤑</h1>
          </div>
          <div className="dp-1-3">
            <p>
              When you wake up on a Friday and see that your salary was
              automatically deposited to your bank account, that’s ACH.
            </p>
          </div>
          <div className="dp-1-4">
            <p>🚀 Get our app</p>
          </div>
        </div>
        <div className="dp-2">
          <img src={download_img} alt="main-phone" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
