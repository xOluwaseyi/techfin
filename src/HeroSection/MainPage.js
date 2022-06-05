import circle from "../images/bg-circle.png";
import main_phone from "../images/main-phone.png";
import "./MainPage.css";

const MainPage = () => {
  return (
    <section>
      <div className="main-page">
        <div className="mp-1">
          <div className="mp-1-1">
            <p>NEW UPDATE</p>
            <p>Introducing wallets but for ACH</p>
          </div>
          <div className="mp-1-2">
            <h1>ACH E-wallet in your pockets 🤑</h1>
          </div>
          <div className="mp-1-3">
            <p>
              Just set and forget it-no more worrying about getting payments
              late.
            </p>
            <p>We process transactions in 3x108 m/s.</p>
          </div>
          <div className="mp-1-4">
            <p>😊 Get our app</p>
            <a href="/">See how it works</a>
          </div>
        </div>
        <div className="mp-2">
          <img src={circle} alt="bg-circle" />
          <img src={main_phone} alt="main-phone" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
