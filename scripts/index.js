import { salesData } from "./data/salesData.js";
import SaleList from "./components/SaleList.js";
import KpiCalculator from "./components/KpiCalculator.js";
import ChartManager from "./components/ChartManager.js";
import SaleTable from "./components/SaleTable.js";
import SaleModal from "./components/SaleModal.js";

// Normalizar datos iniciales
const normalizedSales = salesData.map((s, index) => ({
  id: index + 1,
  date: s.fecha,
  category: s.categoria,
  amount: Number(s.precio)
}));

// Crear lista de ventas con datos iniciales
const saleList = new SaleList(normalizedSales);

// KPIs
const kpi = new KpiCalculator(saleList.getAll());

// Renderizar KPIs
function renderKpis() {
  const totalSalesEl = document.querySelector("#kpi-total-sales .kpi-value");
  const ticketAverageEl = document.querySelector("#kpi-ticket-average .kpi-value");
  const totalOrdersEl = document.querySelector("#kpi-total-orders .kpi-value");
  const topCategoryEl = document.querySelector("#kpi-top-category .kpi-value");

  totalSalesEl.textContent = `$${kpi.getTotalSales().toLocaleString()}`;
  ticketAverageEl.textContent = `$${kpi.getAverageTicket().toFixed(2)}`;
  totalOrdersEl.textContent = kpi.getTotalOrders();
  topCategoryEl.textContent = kpi.getTopCategory();
}

renderKpis();

// Tabla
const saleTable = new SaleTable(saleList);
saleTable.render();

// Gráficas
const chartManager = new ChartManager(saleList, kpi);
chartManager.renderSalesByDay();
chartManager.renderSalesByCategory();

// Modal
const saleModal = new SaleModal(saleList, kpi, saleTable, chartManager);

// Botón limpiar ventas
document.getElementById("clear-sales-btn").addEventListener("click", () => {
  saleList.clearAll();
  saleTable.render();
  kpi.update(saleList.getAll());
  renderKpis();
  chartManager.renderSalesByDay();
  chartManager.renderSalesByCategory();
});