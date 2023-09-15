import "./CostDate.css";

export const CostDate = (props) => {
  //const month = props.date.toLocaleString("ru-RU", { month: "long" });
  //const year = props.date.toLocaleString("ru-RU", { year: "numeric" });
  //const day = props.date.toLocaleString("ru-RU", { day: "numeric" });

  const month = props.date.split('-')[0]
  const year = props.date.split('-')[1]
  const day = props.date.split('-')[2]

  return (
    <div className="cost-date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};
