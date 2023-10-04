export const CostsDoughnut = (props) => {
    const doughnutDataSet = [
        { label: "Продукты", value: 0 },
        { label: "Счета", value: 0 },
        { label: "Другое", value: 0 },
    ];
    console.log(props.costs);
    for (const cost of props.costs) {
        const costCategory = cost.category;
        console.log(costCategory);
        //console.log(doughnutDataSet[costCategory].value);
        doughnutDataSet[costCategory].value += 1;
    }
    console.log(doughnutDataSet);
    return (
        <div>
            <h1>HELLO!!!</h1>
        </div>
    );
};
