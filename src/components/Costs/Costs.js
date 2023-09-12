import "./Costs.css";
import { CostItem } from "./CostItem";
import { CostFilter } from "./CostFilter";
import { Card } from "../UI/Card.js";
import { useState } from "react";

export const Costs = (props) => {
    const [year, setYear] = useState("2021");
    const getYear = (selectYear) => {
        setYear(selectYear);
    };

    return (
        <div>
            <Card className="costs">
                <CostFilter onGetYear={getYear} year={year} />
                {/*<CostItem
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    amount={props.costs[0].amount}
                />
                <CostItem
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    amount={props.costs[1].amount}
                />
                <CostItem
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    amount={props.costs[2].amount}
                />*/}
                {/*<CostItem>

                </CostItem>*/}
            </Card>
        </div>
    );
};
