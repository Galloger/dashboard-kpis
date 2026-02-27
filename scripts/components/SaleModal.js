export default class SaleModal {
  constructor(saleList, kpi, saleTable, chartManager) {
    this.saleList = saleList;
    this.kpi = kpi;
    this.saleTable = saleTable;
    this.chartManager = chartManager;

    this.modal = document.getElementById("sale-modal");
    this.openBtn = document.getElementById("open-modal-btn");
    this.closeBtn = document.getElementById("close-modal-btn");
    this.closeX = document.getElementById("modal-close-x");
    this.saveBtn = document.getElementById("save-sale-btn");

    this.dateInput = document.getElementById("sale-date");
    this.categoryInput = document.getElementById("sale-category");
    this.amountInput = document.getElementById("sale-amount");

    this.addEvents();
  }

  addEvents() {
    this.openBtn.addEventListener("click", () => this.show());
    this.closeBtn.addEventListener("click", () => this.hide());
    this.closeX.addEventListener("click", () => this.hide());
    this.saveBtn.addEventListener("click", () => this.saveSale());
  }

  show() {
    this.modal.classList.remove("hidden");
  }

  hide() {
    this.modal.classList.add("hidden");
    this.clearForm();
  }

  clearForm() {
    this.dateInput.value = "";
    this.categoryInput.value = "";
    this.amountInput.value = "";
  }

  saveSale() {
    const date = this.dateInput.value;
    const category = this.categoryInput.value;
    const amount = Number(this.amountInput.value);

    if (!date || !category || !amount) {
      alert("Completa todos los campos");
      return;
    }

    this.saleList.addSale({ date, category, amount });

    // actualizar todo
    this.kpi.update(this.saleList.getAll());
    this.saleTable.render();
    this.chartManager.renderSalesByDay();
    this.chartManager.renderSalesByCategory();

    this.hide();
  }
}