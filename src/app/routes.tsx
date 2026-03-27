import { createHashRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Inventory } from "./pages/Inventory";
import { ProcurementEngine } from "./pages/ProcurementEngine";
import { Analytics } from "./pages/Analytics";
import { Warehouses } from "./pages/Warehouses";
import { ClientAnalysis } from "./pages/ClientAnalysis";
import { Forecasting } from "./pages/Forecasting";
import { Alerts } from "./pages/Alerts";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";

export const router = createHashRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "inventory", Component: Inventory },
      { path: "procurement", Component: ProcurementEngine },
      { path: "analytics", Component: Analytics },
      { path: "warehouses", Component: Warehouses },
      { path: "clients", Component: ClientAnalysis },
      { path: "forecasting", Component: Forecasting },
      { path: "alerts", Component: Alerts },
      { path: "reports", Component: Reports },
      { path: "settings", Component: Settings },
    ],
  },
]);
