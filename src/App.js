import React from "react";
import css from "./App.module.css";
import LineChart from "./chart";

const data = [0, 3, 7, 4, 9, 2, 8, 3, 2, 9, 2, 8, 3, 2];
const labels = [
  "",
  "Jan'19",
  "Feb'19",
  "Mar'19",
  "Apr'19",
  "May'19",
  "Jun'19",
  "Jul'19",
  "Aug'19",
  "Sep'19",
  "Oct'19",
  "Nov'19",
  "Dec'19",
  "",
];
const data2 = [5, 3, 8, 2, 1, 9, 3, 5, 6, 9, 2, 8, 3, 0];

const randomizedData = () => {
  const data3 = [];
  labels.forEach(() => {
    data3.push(Math.random() * 100);
  });
  return data3;
};

function App() {
  const [randomData, setRandomData] = React.useState([]);
  const handleClick = () => {
    setRandomData(randomizedData);
  };

  return (
    <div className={css.app}>
      <button onClick={handleClick}>Random Data</button>
      {randomData.length > 0 && (
        <LineChart
          data={randomData}
          labels={labels}
          backgroundColor="aqua"
          label="Random Data Chart"
        />
      )}
      <LineChart
        data={data}
        labels={labels}
        backgroundColor="blueviolet"
        label="Individuals"
      />
      <LineChart
        labels={labels}
        data={data2}
        backgroundColor="purple"
        label="Companies"
      />
    </div>
  );
}

export default App;
