export default class ChartManager {
  constructor(saleList, kpi) {
    this.saleList = saleList;
    this.kpi = kpi;

    this.salesByDayChart = null;
    this.salesByCategoryChart = null;
  }

  renderSalesByDay() {
    const sales = this.saleList.getAll();

    const grouped = {};
    sales.forEach(sale => {
      if (!grouped[sale.date]) grouped[sale.date] = 0;
      grouped[sale.date] += sale.amount;
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => {
      return new Date(a) - new Date(b);
    });

    const sortedAmounts = sortedDates.map(date => grouped[date]);

    if (this.salesByDayChart) {
      this.salesByDayChart.destroy();
    }

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

  // 🔥 NUEVOS MÉTODOS (correctamente dentro de la clase)
  
  renderSalesBySeller() {
  const data = this.kpi.getSalesBySeller();
  const labels = Object.keys(data);
  const values = Object.values(data);

  const ctx = document.getElementById("chart-sales-by-seller").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Ventas por vendedor",
        data: values,
        backgroundColor: "#03A9F4"
      }]
    }
  });
}

  renderAverageSalesPerDay() {
    const avg = this.kpi.getAverageSalesPerDay();
    const ctx = document.getElementById("chart-average-sales-per-day").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Promedio diario"],
        datasets: [{
          label: "Promedio de ventas por día",
          data: [avg],
          backgroundColor: "#4CAF50"
        }]
      }
    });
  }

  renderAverageSalesByCategory() {
    const data = this.kpi.getAverageSalesByCategory();
    const labels = Object.keys(data);
    const values = Object.values(data);

    const ctx = document.getElementById("chart-average-sales-by-category").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Promedio por categoría",
          data: values,
          backgroundColor: "#2196F3"
        }]
      }
    });
  }

  renderTopDays() {
    const topDays = this.kpi.getTopDays();
    const labels = topDays.map(d => d[0]);
    const values = topDays.map(d => d[1]);

    const ctx = document.getElementById("chart-top-days").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Top 5 días con más ventas",
          data: values,
          backgroundColor: "#FF9800"
        }]
      }
    });
  }

  renderCategoryDistribution() {
    const data = this.kpi.getSalesByCategory();
    const labels = Object.keys(data);
    const values = Object.values(data);

    const ctx = document.getElementById("chart-category-distribution").getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#FF5722"]
        }]
      }
    });
  }
}