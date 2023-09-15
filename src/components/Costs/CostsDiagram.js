import { Diagram } from "../Diagram/Diagram";

export const CostsDiagram = (props) => {
    const diagramDataSets = [
        { label: "Янв", value: 0 },
        { label: "Фев", value: 0 },
        { label: "Мар", value: 0 },
        { label: "Апр", value: 0 },
        { label: "Май", value: 0 },
        { label: "Июн", value: 0 },
        { label: "Июл", value: 0 },
        { label: "Авг", value: 0 },
        { label: "Сен", value: 0 },
        { label: "Окт", value: 0 },
        { label: "Нояб", value: 0 },
        { label: "Дек", value: 0 },
    ];

    for (const cost of props.costs) {
        const costMonth = cost.date.split("-")[1] - 1;
        diagramDataSets[costMonth].value += cost.amount;
    }
    return <Diagram dataSets={diagramDataSets} />;
};
