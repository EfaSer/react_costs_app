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
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь",
    };

    const doughnutDataSet = { Продукты: 0, Счета: 0, Другое: 0 };
    for (const cost of props.costs) {
        const costCategory = cost.category;
        console.log(costCategory);
        doughnutDataSet[costCategory] += cost.amount;
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: "white", // измените цвет меток здесь
                    font: {
                        size: 16,
                    },
                },
            },
        },
    };

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
                <h3>Диаграмма расходов за {MONTHES[props.month]}</h3>
                <p className="cost-month">
                    {doughnutDataSet["Продукты"] > 0 ||
                    doughnutDataSet["Счета"] > 0 ||
                    doughnutDataSet["Другое"] > 0
                        ? MONTHES[props.month]
                        : ""}
                </p>
                {doughnutDataSet["Продукты"] > 0 ||
                doughnutDataSet["Счета"] > 0 ||
                doughnutDataSet["Другое"] > 0 ? (
                    <Doughnut
                        data={data}
                        options={options}
                        className="doughnut"
                    />
                ) : (
                    <h2>В данном месяце нет расходов</h2>
                )}
            </div>
        </div>
    );
};
