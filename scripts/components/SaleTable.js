export default class SaleTable {
  constructor(saleList) {
    this.saleList = saleList;
  }

  sortByDate() {
  this.saleList.sales.sort((a, b) => {
    return new Date(b.date) - new Date(a.date); // más recientes primero
  });
}

  render() {
    const tableBody = document.querySelector("#sales-table-body");

    if (!tableBody) {
      console.error("No se encontró el tbody con id 'sales-table-body'");
      return;
    }

    tableBody.innerHTML = "";

    const sales = this.saleList.getAll();

    sales.forEach((sale) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${sale.date}</td>
        <td>${sale.category}</td>
        <td>$${sale.amount.toLocaleString()}</td>
      `;

      tableBody.appendChild(row);
    });
  }
}

