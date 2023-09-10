import "./CostDate.css";

export const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const year = props.date.toLocaleString("ru-RU", { year: "numeric" });
  const day = props.date.toLocaleString("ru-RU", { day: "numeric" });
  return (
    <div className="cost-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};
