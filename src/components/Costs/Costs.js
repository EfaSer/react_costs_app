import "./Costs.css";
import { CostList } from "./CostList";
import { CostFilter } from "./CostFilter";
import { CostsDiagram } from "./CostsDiagram";
import { Card } from "../UI/Card.js";
import { useState } from "react";

export const Costs = (props) => {
    const [year, setYear] = useState("2021");
    const getYear = (selectYear) => {
        setYear(selectYear);
    };

    const filterCosts = props.costs.filter((cost) => {
        return cost.date.split('-')[0] === year;
    });

    return (
        <div>
            <Card className="costs">
                <CostFilter onGetYear={getYear} year={year} />
                <CostsDiagram costs={filterCosts} />
                <CostList costs={filterCosts} year={year} />
            </Card>
        </div>
    );
};
