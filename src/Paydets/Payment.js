import "./Payment.css";
import Paydet from "./Paydet";
import { pay_dets } from "./PaydetData";

const Payment = () => {
  return (
    <section>
      <div className="payment">
        <h1>
          Automate all your <br /> payments.
        </h1>
        <p>
          A standard ACH debit through Dwolla will be made available in the
          Dwolla Network three to four business days after the transfer is
          initiated but with TechFin, It arrives <span>instantly. </span>
        </p>
      </div>
      <div className="payment-col">
        {pay_dets.map((paydet) => {
          return (
            <div key={paydet.id}>
              <Paydet
                id={paydet.id}
                description={paydet.description}
                image={paydet.img}
                title={paydet.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Payment;
