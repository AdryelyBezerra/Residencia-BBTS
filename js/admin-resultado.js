document.addEventListener("DOMContentLoaded", function () {
// Gráfico 1
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["BERT", "AWS", "Scrapy"],
    datasets: [
      {
        label: "",
        data: [15, 53, 22],
        backgroundColor: ["#007bff", "#00c0ef", "#36a2eb"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 2
new Chart(document.getElementById("chart2"), {
  type: "bar",
  data: {
    labels: ["Python", "Selenium", "Java", "SQL", "NoSQL", "Linux"],
    datasets: [
      {
        label: "",
        data: [84, 13, 81, 89, 83, 72],
        backgroundColor: [
          "#fce303",
          "#f7c106",
          "#f9a825",
          "#ff9800",
          "#ff5722",
          "#ff7043",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 3
new Chart(document.getElementById("chart3"), {
  type: "bar",
  data: {
    labels: ["Criatividade", "Analítico", "Comunicação"],
    datasets: [
      {
        label: "",
        data: [37, 74, 68],
        backgroundColor: ["#66bb6a", "#43a047", "#a5d6a7"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 4
new Chart(document.getElementById("chart4"), {
  type: "bar",
  data: {
    labels: ["Júnior", "Pleno", "Sênior"],
    datasets: [
      {
        label: "",
        data: [28, 30, 32],
        backgroundColor: ["#ba68c8", "#7e57c2", "#5e35b1"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});
});
