import "./CostsDoughnut.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const CostsDoughnut = (props) => {
    const MONTHES = {
        "01": "Январь",
        "02": "Февраль",
        "03": "Март",
        "04": "Апрель",
        "05": "Май",
        "06": "Июнь",
        "07": "Июль",
        "08": "Август",
        "09": "Сентябрь",
        "10": "Октября",
        "11": "Ноябрь",
        "12": "Декабрь",
    };

    const doughnutDataSet = { Продукты: 0, Счета: 0, Другое: 0 };
    for (const cost of props.costs) {
        const costCategory = cost.category;
        console.log(costCategory);
        doughnutDataSet[costCategory] += cost.amount;
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ["Продукты", "Счета", "Другое"],
        datasets: [
            {
                label: "Расходы",
                data: [
                    doughnutDataSet["Продукты"],
                    doughnutDataSet["Счета"],
                    doughnutDataSet["Другое"],
                ],
                backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                ],
            },
        ],
    };

    return (
        <div className="costs-circul__diagramm">
            <div className="costs-doughnut">
                <h3>Диаграмма расходов за месяц</h3>
                <p className="cost-month">{MONTHES[props.month]}</p>
                <Doughnut data={data} />
            </div>
        </div>
    );
};
