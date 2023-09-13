import "./CostForm.css";
import { useState } from "react";

export const CostForm = (props) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    //! использование одного состояния вместо трех(! не очень хорошая практика)
    // const [userInput, setUserInput] = useState({
    //   name: "",
    //   amount: "",
    //   date: "",
    // });

    const nameChangeHandler = (event) => {
        // 1ый способ
        setName(event.target.value);

        // 2ой способ
        // setUserInput({
        //   ...userInput,
        //   name: event.target.value,
        // });

        //! 3ий способ(более безопасный способ, тк учитывает самое последнее обновление предыдущего состояния)
        // setUserInput((previousState) => {
        //   return {
        //     ...previousState,
        //     name: event.target.value,
        //   };
        // });
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   amount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   date: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        //! preventDefault не позволяет странице обновляться, и сохраняет текущее состояние(в данном случае, в полях вводу)
        event.preventDefault();

        const costData = {
            description: name,
            amount: amount,
            date: new Date(date),
        };
        props.onSaveCostData(costData);
        setAmount("");
        setDate("");
        setName("");
        props.canselForm(false);
    };

    return (
        // параметр value в input осуществляет двустороннее связывание, позволяющее обновлять поля после отправки
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__control">
                        <label>Название</label>
                        <input
                            type="text"
                            value={name}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="new-cost__control">
                        <label>Сумма</label>
                        <input
                            type="number"
                            value={amount}
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-cost__control">
                        <label>Дата</label>
                        <input
                            type="date"
                            value={date}
                            min="2019-01-01"
                            max="2030-01-01"
                            onChange={dateChangeHandler}
                        />
                    </div>
                    <div className="new-cost__actions">
                        <button type="submit">Добавить Расход</button>
                        <button type="button" onClick={props.canselForm}>
                            Отмена
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
