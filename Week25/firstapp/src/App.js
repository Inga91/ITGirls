import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Dance", "Level of love"],
  ["Afro dance", 10],
  ["Brazil samba", 5],
  ["Bachata", 6],
  ["Salsa", 8],
  ["Kizomba", 9],
  ["Reggaeton", 10],
  ["High Heels", 4],
];

const options = {
  title: "What dances do I prefer?",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
