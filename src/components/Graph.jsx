import React from "react";
import styles from "../styles/Graph.module.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Graph(props) {
  const { currentUser, lessons } = props;
  
  const data = {
    labels: lessons.map((lesson) => lesson.title),
    datasets: [
      {
        label: "My Dataset",
        data: currentUser[0].currentLessons.map((mylesson) => mylesson.progress),
        backgroundColor: ["#7463DA", "#B3A7FA", "#4439C8"],
        hoverOffset: 4,
      }
    ],
  };

  return (
    <div className={styles.graphContainer}>
      <Doughnut data={data} />
    </div>
  );
}

export default Graph;
