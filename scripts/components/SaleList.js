import Sale from "./Sale.js";

export default class SaleList {
  constructor(initialSales = []) {
    // Cargar ventas desde localStorage si existen
    const savedSales = JSON.parse(localStorage.getItem("sales"));

    this.sales = savedSales
      ? savedSales.map(sale => new Sale(sale))
      : initialSales.map(sale => new Sale(sale));

    this.saveToLocalStorage();
  }

  // Guardar en localStorage
  saveToLocalStorage() {
    localStorage.setItem("sales", JSON.stringify(this.sales));
  }

  // Obtener todas las ventas
  getAll() {
    return this.sales;
  }

  // Agregar una venta nueva
  addSale(saleData) {
    const newSale = new Sale({
      id: Date.now(),
      ...saleData
    });

    this.sales.push(newSale);
    this.saveToLocalStorage();
    return newSale;
  }

  // 🔥 Limpiar TODAS las ventas
  clearAll() {
    this.sales = [];
    this.saveToLocalStorage();
  }

  // Editar una venta existente
  updateSale(id, updatedData) {
    const index = this.sales.findIndex(sale => sale.id === id);

    if (index !== -1) {
      this.sales[index] = new Sale({
        id,
        ...updatedData
      });

      this.saveToLocalStorage();
      return this.sales[index];
    }

    return null;
  }

  // 🔥 Eliminar una venta individual
  deleteSale(id) {
    this.sales = this.sales.filter(sale => sale.id !== id);
    this.saveToLocalStorage();
  }
}

