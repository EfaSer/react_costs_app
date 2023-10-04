import axios from "axios";
import { useState, useEffect } from "react";
import { NewCost } from "./components/NewCost/NewCost.js";
import { Costs } from "./components/Costs/Costs.js";

function App() {
    const [costs, setCosts] = useState([]);

    useEffect(() => {
        fetchObjects();
    }, []);

    const fetchObjects = () => {
        axios
            .get("http://127.0.0.1:8000/costs/")
            .then((response) => setCosts(response.data));
    };

    const addCostHandler = (cost) => {
        const newObject = cost;
        axios.post("http://127.0.0.1:8000/costs/", newObject).then((response) => {
            fetchObjects();
        });
    };

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
}

export default App;
