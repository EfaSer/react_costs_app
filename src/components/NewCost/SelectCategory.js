import { useState } from "react";

export const SelectCategory = (props) => {
    const [inputData, setInputData] = useState("");

    const categoryChangeHandler = (event) => {
        const newData = event.target.value;
        setInputData(newData);
        props.onSelectCategory(newData);
    };

    return (
        <div className="new-cost__control">
            <label>Категория</label>
            <select name="select" onChange={categoryChangeHandler}>
                <option value="produkty" disabled selected>
                    Выберите категорию
                </option>
                <option value="produkty">Продукты</option>
                <option value="scheta">Счета</option>
                <option value="drugoe">Другое</option>
            </select>
        </div>
    );
};
