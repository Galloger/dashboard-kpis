export default class KpiCalculator {
  constructor(sales) {
    this.sales = sales;
  }

  //metodo 1
  getTotalSales() {
    return this.sales.reduce((sum, sale) => sum + sale.amount, 0);
  }

  //metodo 2
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


getAverageSalesPerDay() {
  const salesByDay = this.getSalesByDay();
  const days = Object.keys(salesByDay).length;
  const total = this.getTotalSales();
  return days > 0 ? total / days : 0;
}

getAverageSalesByCategory() {
  const salesByCategory = this.getSalesByCategory();
  const result = {};

  for (const category in salesByCategory) {
    const total = salesByCategory[category];
    const count = this.sales.filter(s => s.category === category).length;
    result[category] = total / count;
  }

  return result;
}

getTopDays(limit = 5) {
  const salesByDay = this.getSalesByDay();
  return Object.entries(salesByDay)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

getSalesBySeller() {
  const sellerTotals = {};

  this.sales.forEach(sale => {
    const seller = sale.vendedor; // tu campo real
    if (!sellerTotals[seller]) sellerTotals[seller] = 0;
    sellerTotals[seller] += sale.precio; // tu campo real
  });

  return sellerTotals;
}
}

