import { useState } from "react";
import { NewCost } from "./components/NewCost/NewCost.js";
import { Costs } from "./components/Costs/Costs.js";

const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2021, 2, 12),
        description: "Холодильник",
        amount: 999.99,
    },
    {
        id: "c2",
        date: new Date(2021, 11, 23),
        description: "Телефон",
        amount: 50.99,
    },
    {
        id: "c3",
        date: new Date(2022, 6, 15),
        description: "Компьютер",
        amount: 1189.99,
    },
];

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS);
    const addCostHandler = (cost) => {
        setCosts((prevCost) => [cost, ...prevCost]);
    };

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
}

export default App;
