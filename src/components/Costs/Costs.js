import "./Costs.css";
import { CostList } from "./CostList";
import { CostFilter } from "./CostFilter";
import { Card } from "../UI/Card.js";
import { useState } from "react";

export const Costs = (props) => {
    const [year, setYear] = useState("2021");
    const getYear = (selectYear) => {
        setYear(selectYear);
    };

    const filterCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className="costs">
                <CostFilter onGetYear={getYear} year={year} />
                <CostList costs={filterCosts} year={year} />

                {/* статический вариант */}
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
            </Card>
        </div>
    );
};
