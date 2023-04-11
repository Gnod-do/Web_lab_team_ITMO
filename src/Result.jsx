import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Result(props) {
  const { setShow } = props;
  const test = Object.values(props);
  const anser1 = [1, 3, 5, 7, 15];
  const anser2 = [2, 4, 6, 8, 14];
  const anser3 = [9, 10, 11, 12, 13];

  let result1 = 0,
    result2 = 0,
    result3 = 0;
  anser1.forEach((item) => {
    if (test[item - 1]) {
      result1++;
    }
  });
  anser2.forEach((item) => {
    if (test[item - 1]) {
      result2++;
    }
  });
  anser3.forEach((item) => {
    if (test[item - 1]) {
      result3++;
    }
  });
  console.log((result1 * 100) / anser1.length + "%");
  const data = {
    labels: [
      "ИНДИ РАЗРАБОТЧИК",
      "MOBILE РАЗРАБОТЧИК",
      "DATA SCIENTIST",
      "Другой",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          (result1 * 100) / test.length,
          (result2 * 100) / test.length,
          (result3 * 100) / test.length,
          100 -
            (result1 * 100) / test.length -
            (result2 * 100) / test.length -
            (result3 * 100) / test.length,
        ],
        backgroundColor: [
          "#1C6281",
          "#2F9FAE",
          "#88AEC4",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={"result"}>
      <Doughnut data={data} />
      <div className="wrapper_profes">
        <div className="professional">
          Инди разработчик - {(result1 * 100) / test.length + "%"} <br />
          Mobile разработчик - {(result2 * 100) / test.length + "%"} <br />
          Data Scientist - {(result3 * 100) / test.length + "%"}
        </div>
        <div className="congrat">
          <p
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "30px",
              lineHeight: "50px",
              textAlign: "justify",
              display: "inline-block",
              width: "70%",
              marginTop: "5vh",
              marginBottom: "5vh",
            }}
          >
            Поздравляем с завершением теста. Рядом расположены индикаторы,
            соответствующие вашей профессии. Принимайте личные решения и
            выбирайте правильный путь для себя. Удачи!
          </p>
        </div>
        <button onClick={() => setShow()}>Back</button>
      </div>
    </div>
  );
}
