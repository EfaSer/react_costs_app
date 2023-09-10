import "./Card.css";

export const Card = (props) => {
  const classes = "card " + props.className;
  console.log(props);
  return <div className={classes}>{props.children}</div>;
};
