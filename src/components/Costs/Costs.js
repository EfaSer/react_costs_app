import "./Costs.css";
import { CostList } from "./CostList";
import { CostFilter } from "./CostFilter";
import { CostsDiagram } from "./CostsDiagram";
import { CostsDoughnut } from "./CostsDoughnut";
import { Card } from "../UI/Card.js";
import { useState } from "react";

export const Costs = (props) => {
    const [year, setYear] = useState("2023");
    const [month, setMonth] = useState("");
    const getYear = (selectYear) => {
        setYear(selectYear);
    };
    const getMonth = (newMonth) => {
        setMonth(newMonth);
    };

    const filterCosts = props.costs.filter((cost) => {
        if (month.length !== 0) {
            return (
                cost.date.split("-")[0] === year &&
                cost.date.split("-")[1] === month
            );
        } else {
            return cost.date.split("-")[0] === year;
        }
    });

    return (
        <div>
            <Card className="costs">
                <CostFilter
                    onGetYear={getYear}
                    onGetMonth={getMonth}
                    year={year}
                />
                {month && <CostsDoughnut costs={filterCosts} />}
                <CostsDiagram costs={filterCosts} />
                <CostList costs={filterCosts} year={year} />
            </Card>
        </div>
    );
};
