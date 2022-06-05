import "./Goals.css";
import circle from "../images/goalscircle.png";

const Goals = () => {
  const GoalsData = [
    {
      id: 1,
      body: "🏦 Help businesses save time and cut costs. And, for nonprofits and religious organizations, Direct Payment helps manage and increase automatic donations. ",
    },
    {
      id: 2,
      body: "💶 Stock exchange. Lets investors recoup the initial investment plus capital gains from subsequent rises in stock price.",
    },
    {
      id: 3,
      body: "🔐 Next‑generation security. knows a face when it sees one, and intelligently relights it to capture more natural-looking contours.",
    },
  ];

  return (
    <section className="goals">
      {GoalsData.map((goals) => {
        return (
          <div key={goals.id}>
            <p> {goals.body}</p>
          </div>
        );
      })}
      <img src={circle} alt="" />
    </section>
  );
};

export default Goals;
