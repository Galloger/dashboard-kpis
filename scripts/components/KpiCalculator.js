export default class KpiCalculator {
  constructor(sales) {
    this.sales = sales;
  }

  getTotalSales() {
    return this.sales.reduce((sum, sale) => sum + sale.amount, 0);
  }

  getAverageTicket() {
    if (this.sales.length === 0) return 0;
    return this.getTotalSales() / this.sales.length;
  }

  getTotalOrders() {
    return this.sales.length;
  }

  getTopCategory() {
    const categoryTotals = {};

    this.sales.forEach(sale => {
      if (!categoryTotals[sale.category]) {
        categoryTotals[sale.category] = 0;
      }
      categoryTotals[sale.category] += sale.amount;
    });

    return Object.entries(categoryTotals)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
  }

  getSalesByDay() {
    const dailyTotals = {};

    this.sales.forEach(sale => {
      if (!dailyTotals[sale.date]) {
        dailyTotals[sale.date] = 0;
      }
      dailyTotals[sale.date] += sale.amount;
    });

    return dailyTotals;
  }

  getSalesByCategory() {
    const categoryTotals = {};

    this.sales.forEach(sale => {
      if (!categoryTotals[sale.category]) {
        categoryTotals[sale.category] = 0;
      }
      categoryTotals[sale.category] += sale.amount;
    });

    return categoryTotals;
  }

  update(newSales) {
    this.sales = newSales;
  }
}