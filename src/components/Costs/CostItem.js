import "./CostItem.css";
import "./CostDate";
import { CostDate } from "./CostDate";
import { Card } from "../UI/Card.js";

export const CostItem = (props) => {
    return (
        <li>
            <Card className="cost-item">
                <CostDate date={props.date} />
                <div className="cost-item__description">
                    <h2>Наименование: {props.description}</h2>
                    <h5>Категория: {props.category}</h5>
                    <div className="cost-item__price">₽{props.amount}</div>
                </div>
            </Card>
        </li>
    );
};
