import { CostForm } from "./CostForm";
import { Card } from "../UI/Card";
import "./NewCost.css";

export const NewCost = () => {
  const onSaveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    console.log(costData);
  };

  return (
    <Card className="new-cost">
      <CostForm onSaveCostData={onSaveCostDataHandler} />
    </Card>
  );
};
