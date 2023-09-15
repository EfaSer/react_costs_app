import { useState } from "react";
import { CostForm } from "./CostForm";
import { Card } from "../UI/Card";
import "./NewCost.css";

export const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const onSaveCostDataHandler = (inputCostData) => {
        //const costData = {
        //    ...inputCostData,
        //    id: Math.random().toString(),
        //};
        props.onAddCost(inputCostData);
    };

    const inputCostDateHandler = () => {
        setIsFormVisible(true);
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };

    return (
        <Card className="new-cost">
            {!isFormVisible && (
                <button
                    className="new-cost__btn"
                    onClick={inputCostDateHandler}
                >
                    Добавить Новый Расход
                </button>
            )}
            {isFormVisible && (
                <CostForm
                    canselForm={cancelCostHandler}
                    onSaveCostData={onSaveCostDataHandler}
                />
            )}
        </Card>
    );
};
