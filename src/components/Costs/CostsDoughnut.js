export const CostsDoughnut = (props) => {
    const doughnutDataSet = { Продукты: 0, Счета: 0, Другое: 0 };
    console.log(props.costs);
    for (const cost of props.costs) {
        const costCategory = cost.category;
        console.log(costCategory);
        //console.log(doughnutDataSet[costCategory].value);
        doughnutDataSet[costCategory] += cost.amount;
    }
    console.log(doughnutDataSet);
    return (
        <div>
            <h1>HELLO!!!</h1>
        </div>
    );
};
