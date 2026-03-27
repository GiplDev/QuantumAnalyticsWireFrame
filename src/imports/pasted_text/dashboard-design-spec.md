⚠️ IMPORTANT DATA RULE:
Use ONLY the submitted client data for:
Warehouses
SKUs / Products
Categories
Do NOT generate generic/demo data
Treat SKU list as real fragrance/essence oil inventory
Maintain live-data realism (quantities, ageing, movement)
🎨 DESIGN SYSTEM
Style: Clean, modern, soft UI (based on attached reference)
Colors:
Primary Gradient: #7BC96F → #4CAF50
Deep Teal: #0F3D3E
Background: #F5F7FA
Font: Open Sans
Framework: React + Material UI compatible
Border Radius: 12–16px
Shadows: Soft elevation
Style: Clean, modern, SaaS dashboard, minimal with data-heavy UX
Layout: Responsive (desktop + tablet + mobile)
Grid: 12-column system
Components: MUI-based (Cards, Data Tables, Tabs, Drawers, Modals, Charts)
🧠 Smart Insights (IMPORTANT)
Add AI-like insights:
“Overstock detected in Kano Warehouse”
“Dead stock: Sandalwood Oil (120 days no movement)”
“Recommended WATER shipment for cost saving”
📱 Mobile Responsiveness
KPI cards stacked
Charts scrollable
Tables converted to cards
Sidebar → bottom navigation
🎯 UX Focus
Data-heavy but clean
Fast readability
Color-coded decisions
Real-time feel
🧭 LAYOUT STRUCTURE
🔹 COLLAPSIBLE SIDEBAR (MANDATORY)
Left vertical navigation:
Default: Expanded (icon + label)
Collapsed: Icons only
Smooth animation toggle
Menu:
Dashboard
Inventory
Procurement Engine
Analytics
Warehouses
Clients & SKU Analysis
Forecasting
Alerts & Intelligence
Reports
Settings
🔹 TOP BAR (MANDATORY)
Include:
1. Company Switcher (Dropdown)
Nigeria (Primary)
Ethiopia
Ghana
South Africa
2. Global Search
Search SKU / Warehouse / Client
3. Notifications Bell
Badge count
Dropdown:
Low stock alerts
Dead stock alerts
Procurement triggers
4. User Profile Menu
🏠 DASHBOARD
🔹 KPI CARDS
Total SKUs
Short SKUs
Pending Orders
Fast Moving SKUs
Slow Moving SKUs
Dead Stock
Each card:
Uses actual SKU counts from dataset
Includes mini trend graph
🔹 INVENTORY STATUS (STRICT LOGIC)
Display:
Ordered
In Transit:
AIR
WATER
In-house Open
Reserved
Outgoing
Sold
Returned
Rejected
🔹 PROCUREMENT ENGINE (SMART CORE)
Inputs:
Current stock (from dataset)
Pending orders
Consumption trend
Lead time
Outputs:
Recommended Quantity
Shipment Suggestion:
UI MUST SHOW:
Mode	Time	Cost
AIR	45 days	7x
WATER	90 days	economical
👉 Add dynamic recommendation:
If stock risk high → AIR
If stable → WATER
Include:
Toggle comparison
Visual graph (cost vs time)
Recommendation badge
📦 INVENTORY SCREEN (REAL DATA ONLY)
🔹 TABLE STRUCTURE
Columns:
SKU Name (from dataset only)
Category
Subcategory
Batch / Lot
Warehouse (from dataset)
Stock Status
Quantity
Ageing (days)
🏭 WAREHOUSE SCREEN (STRICT)
Use ONLY these:
Kano Warehouse
Milan Kano Warehouse
Mamoud Warehouse
Main Location
Challenge Office
Essential Aroma’s
Goods in Transit (UK)
UI:
Warehouse cards
Stock % distribution
Inter-warehouse imbalance indicator
📊 ANALYTICS
MUST INCLUDE:
SKU Movement (from sales data)
Stock Ageing
Warehouse distribution
Consumption trends
🔮 FORECASTING
Phase 1:
Moving average (3–6 months)
Phase 2:
Trend-based
Client-wise prediction
UI:
Demand graph
Stock depletion curve
👥 CLIENT & SKU ANALYSIS
Top buyers per SKU
Buying frequency
Order cycle trends
🚨 ALERTS PANEL
Low stock
Overstock
Dead stock
Procurement trigger
Priority:
High / Medium / Low
🔄 DATA INTEGRATION
Show:
Tally ERP (ODBC)
Sync status indicators:
Stock
Sales
Purchase
Orders
⚠️ ERROR STATES
Design UI for:
SKU mismatch
Missing batch data
Sync failure
Slow query warning
📱 MOBILE RESPONSIVE
Sidebar collapses into drawer
KPI cards stack
Charts scrollable
Sticky top bar
🧪 DATA MAPPING (CRITICAL)
PRODUCTS / SKUs
Use ONLY submitted SKU dataset (fragrance oils)
Structure:
Category
Subcategory
SKU name
Batch/Lot
INVENTORY VALUES
Generate realistic quantities based on:
Movement
Ageing
Warehouse distribution
🎯 FINAL OUTPUT
Generate:
Full dashboard UI
All modules
Component-based design
Auto-layout
Ready for React + Material UI implementation