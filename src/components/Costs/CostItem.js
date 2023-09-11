import "./CostItem.css";
import "./CostDate";
import { CostDate } from "./CostDate";
import { Card } from "../UI/Card.js";
import React, { useState } from "react";

export const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription("New cost");
    console.log(description);
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
  );
};
