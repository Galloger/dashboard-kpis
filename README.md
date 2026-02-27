# Dashboard de Ventas con KPIs y Gráficas Financieras
Dashboard interactivo desarrollado en JavaScript para analizar ventas mediante KPIs, tablas dinámicas y visualizaciones financieras. Incluye ordenamiento cronológico, métricas clave y gráficas generadas con Chart.js.
Este proyecto forma parte de mi proceso de aprendizaje en desarrollo web y análisis de datos.

# Características principales
## KPIs en tiempo real
- Total de ventas
- Ticket promedio
- Número total de órdenes
- Categoría con mayor volumen
- Promedio de ventas por día
- Promedio de ventas por categoría
## Gráficas interactivas
- Ventas por día (orden cronológico histórico)
- Ventas por categoría
- Top 5 días con mayores ventas
- Distribución porcentual por categoría (Pie chart)
- Promedio de ventas por día
- Promedio de ventas por categoría
## Tabla dinámica de ventas
- Ordenada de fecha más reciente hacia atrás
- Actualización automática al agregar o eliminar ventas

# Arquitectura modular
## El proyecto está organizado en componentes independientes:
- SaleList.js — Gestión de ventas
- KpiCalculator.js — Cálculo de métricas
- ChartManager.js — Renderizado de gráficas
- SaleTable.js — Tabla dinámica
- SaleModal.js — Modal para agregar ventas
- salesData.js — Datos iniciales

# Tecnologías utilizadas
- JavaScript (ES Modules)
- HTML5 + CSS3
- Chart.js para visualizaciones
- Git + GitHub para control de versiones
- WSL2 (Linux) como entorno de desarrollo
- VS Code como editor principal

# Estructura del Proyecto
dashboard-kpis/
│
├── components/
│   ├── SaleList.js
│   ├── KpiCalculator.js
│   ├── ChartManager.js
│   ├── SaleTable.js
│   └── SaleModal.js
│
├── data/
│   └── salesData.js
│
├── styles/
│   └── styles.css
│
├── index.html
├── index.js
└── README.md

# Funcionalidades destacadas
## Actualización automática
Cada vez que se agrega o elimina una venta:
- Se recalculan los KPIs
- Se actualizan todas las gráficas
- Se vuelve a renderizar la tabla
## Ordenamiento inteligente
- La gráfica por día se ordena de forma cronológica (histórico real).
- La tabla se ordena de forma descendente (última fecha primero).
## Análisis financiero básico
- Promedios por día y categoría
- Detección de días con mayor demanda
- Distribución porcentual por categoría

# Objetivo del proyecto
Este dashboard fue creado como parte de mi aprendizaje en:
- Programación modular en JavaScript
- Manipulación de datos
- Visualización con Chart.js
- Buenas prácticas de arquitectura
- Control de versiones con Git
- Documentación profesional con GitHub
Es un proyecto vivo que seguirá creciendo con nuevas métricas financieras y visualizaciones avanzadas.

# Roadmap (próximas mejoras)
- 📌 Filtros por rango de fechas
- 📌 Exportar ventas a CSV
- 📌 Margen por categoría (si se agregan costos)
- 📌 Rentabilidad por producto
- 📌 Comparativa semana vs semana
- 📌 Dashboard responsive para móviles

# Autor
German Gallo Poblano y Copilot
Desarrollador en formación, construyendo proyectos reales para fortalecer habilidades en JavaScript, análisis de datos y visualización.







