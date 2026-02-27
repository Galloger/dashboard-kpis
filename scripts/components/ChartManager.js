export default class ChartManager {
  constructor(saleList, kpi) {
    this.saleList = saleList;
    this.kpi = kpi;

    this.salesByDayChart = null;
    this.salesByCategoryChart = null;
  }

  renderSalesByDay() {
  const sales = this.saleList.getAll();

  // Agrupar ventas por fecha
  const grouped = {};
  sales.forEach(sale => {
    if (!grouped[sale.date]) grouped[sale.date] = 0;
    grouped[sale.date] += sale.amount;
  });

  // Ordenar fechas de menor a mayor (cronológico)
  const sortedDates = Object.keys(grouped).sort((a, b) => {
    return new Date(a) - new Date(b);
  });

  const sortedAmounts = sortedDates.map(date => grouped[date]);

  // Destruir gráfica anterior si existe
  if (this.salesByDayChart) {
    this.salesByDayChart.destroy();
  }

  // Crear gráfica ordenada
  const ctx = document.getElementById("chart-sales-by-day").getContext("2d");
  this.salesByDayChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: sortedDates,
      datasets: [{
        label: "Ventas por día",
        data: sortedAmounts,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderWidth: 2
      }]
    }
  });
}

  renderSalesByCategory() {
    const ctx = document.getElementById("chart-sales-by-category");

    if (this.chartByCategory) {
      this.chartByCategory.destroy();
    }

    const data = this.kpi.getSalesByCategory();
    const labels = Object.keys(data);
    const values = Object.values(data);

    this.chartByCategory = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Ventas por categoría",
            data: values,
            backgroundColor: ["#2196F3", "#FFC107", "#9C27B0", "#FF5722"],
          },
        ],
      },
    });
  }
}   