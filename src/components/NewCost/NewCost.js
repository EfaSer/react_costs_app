import { CostForm } from "./CostForm";
import { Card } from "../UI/Card";
import "./NewCost.css";

export const NewCost = (props) => {
  const onSaveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  return (
    <Card className="new-cost">
      <CostForm onSaveCostData={onSaveCostDataHandler} />
    </Card>
  );
};
