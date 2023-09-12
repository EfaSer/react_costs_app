//import { Card } from "../UI/Card";
import "./CostFilter.css";

export const CostFilter = (props) => {
    const yearSelectHandler = (event) => {
        //setYear(event.target.value);
        //console.log(year);
        props.onGetYear(event.target.value);
    };

    return (
        <div className="cost-filter">
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
    );
};
