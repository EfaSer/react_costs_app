//import { Card } from "../UI/Card";
import "./CostFilter.css";

export const CostFilter = (props) => {
    const MONTHES = [
        { value: "01", month: "Январь" },
        { value: "02", month: "Февраль" },
        { value: "03", month: "Март" },
        { value: "04", month: "Апрель" },
        { value: "05", month: "Май" },
        { value: "06", month: "Июнь" },
        { value: "07", month: "Июль" },
        { value: "08", month: "Август" },
        { value: "09", month: "Сентябрь" },
        { value: "10", month: "Октября" },
        { value: "11", month: "Ноябрь" },
        { value: "12", month: "Декабрь" },
    ];
    const yearSelectHandler = (event) => {
        //setYear(event.target.value);
        //console.log(year);
        props.onGetYear(event.target.value);
    };

    const monthSelectHandler = (event) => {
        props.onGetMonth(event.target.value);
    };

    return (
        <div className="cost-filter">
            <div className="cost-filter__month">
                <label className="cost-filter__title">Выбор По Месяцу</label>
                <select
                    className="cost-filter__select"
                    onChange={monthSelectHandler}
                >
                    <option value="">----</option>
                    {MONTHES.map((month) => (
                        <option value={month.value}>{month.month}</option>
                    ))}
                </select>
            </div>
            <div className="cost-filter__year">
                <label className="cost-filter__title">Выбор По Году</label>
                <select
                    className="cost-filter__select"
                    value={props.year}
                    onChange={yearSelectHandler}
                >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
};
