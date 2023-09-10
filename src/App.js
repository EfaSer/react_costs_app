import { Costs } from "./components/Costs/Costs.js";

function App() {
  const costs = [
    { date: new Date(2021, 2, 12), description: "Холодильник", amount: 999.99 },
    {
      date: new Date(2021, 11, 23),
      description: "Телефон",
      amount: 50.99,
    },
    { date: new Date(2022, 6, 15), description: "Компьютер", amount: 1189.99 },
  ];

  return (
    <div className="App">
      <h1>Start!!!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
