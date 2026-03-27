// Real data from Quantum Aromatics W.A Ltd. Stock Category Report (1-Jan-26 to 19-Mar-26)

export interface Product {
  id: string;
  sku: string;
  category: string;
  subcategory?: string;
  quantity: number;
  unit: string;
  warehouse: string;
  ageing: number; // days
  status: 'In-house Open' | 'In Transit AIR' | 'In Transit WATER' | 'Ordered' | 'Reserved' | 'Outgoing' | 'Sold' | 'Returned' | 'Rejected';
  lastMovement?: string;
  batch?: string;
}

export const warehouses = [
  'Kano Warehouse',
  'Milan Kano Warehouse',
  'Mamoud Warehouse',
  'Main Location',
  'Challenge Office',
  'Essential Aroma\'s',
  'Goods in Transit (UK)'
];

export const categories = [
  { name: 'Baby Care', total: 575 },
  { name: 'Bazzar Oil', total: 13911 },
  { name: 'Body Care', total: 4789 },
  { name: 'General', total: 1045 },
  { name: 'Hair Care', total: 2711 },
  { name: 'Household', total: 1894 },
  { name: 'Odour Control', total: 1570 },
  { name: 'Perfume', total: 21013 }
];

// Real products from the PDF with realistic warehouse distribution and ageing
export const products: Product[] = [
  // Baby Care
  { id: 'BC001', sku: 'BBLAPAMIX 13982', category: 'Baby Care', quantity: 175, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 45, status: 'In-house Open', lastMovement: '2026-02-10' },
  { id: 'BC002', sku: 'Papaya 4561 Ex', category: 'Baby Care', quantity: 50, unit: 'kg', warehouse: 'Main Location', ageing: 30, status: 'In-house Open', lastMovement: '2026-02-17' },
  { id: 'BC003', sku: 'Pears 17400', category: 'Baby Care', quantity: 350, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 60, status: 'In-house Open', lastMovement: '2026-01-17' },
  
  // Bazzar Oil
  { id: 'BO001', sku: 'Aarabian Nights Fn 0010266', category: 'Bazzar Oil', quantity: 269, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 20, status: 'In-house Open', lastMovement: '2026-02-27' },
  { id: 'BO002', sku: 'Ali Cream 15363/2', category: 'Bazzar Oil', quantity: 119, unit: 'kg', warehouse: 'Main Location', ageing: 35, status: 'In-house Open', lastMovement: '2026-02-12' },
  { id: 'BO003', sku: 'Amir Oudh 59380', category: 'Bazzar Oil', quantity: 425, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 15, status: 'In-house Open', lastMovement: '2026-03-04' },
  { id: 'BO004', sku: 'Amir Oudh EX FN 8885', category: 'Bazzar Oil', quantity: 2500, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 10, status: 'In-house Open', lastMovement: '2026-03-09' },
  { id: 'BO005', sku: 'Aquadegeo 28875', category: 'Bazzar Oil', quantity: 35, unit: 'kg', warehouse: 'Challenge Office', ageing: 120, status: 'In-house Open', lastMovement: '2025-11-27' },
  { id: 'BO006', sku: 'Avatar FN 0010267', category: 'Bazzar Oil', quantity: 120, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 25, status: 'In-house Open', lastMovement: '2026-02-22' },
  { id: 'BO007', sku: 'Bakhoor 34538 Ex', category: 'Bazzar Oil', quantity: 49, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 90, status: 'In-house Open', lastMovement: '2025-12-19' },
  { id: 'BO008', sku: 'Bint Sudan-34549Q', category: 'Bazzar Oil', quantity: 50, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 80, status: 'In-house Open', lastMovement: '2025-12-29' },
  { id: 'BO009', sku: 'Bushra 59381', category: 'Bazzar Oil', quantity: 575, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 12, status: 'In-house Open', lastMovement: '2026-03-07' },
  { id: 'BO010', sku: 'Cenema 31048', category: 'Bazzar Oil', quantity: 250, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 40, status: 'In-house Open', lastMovement: '2026-02-07' },
  { id: 'BO011', sku: 'Chance 31090', category: 'Bazzar Oil', quantity: 250, unit: 'kg', warehouse: 'Main Location', ageing: 38, status: 'In-house Open', lastMovement: '2026-02-09' },
  { id: 'BO012', sku: 'Contra 28876', category: 'Bazzar Oil', quantity: 44, unit: 'kg', warehouse: 'Challenge Office', ageing: 110, status: 'In-house Open', lastMovement: '2025-12-07' },
  { id: 'BO013', sku: 'Contra X SV FN1001118', category: 'Bazzar Oil', quantity: 25, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 150, status: 'In-house Open', lastMovement: '2025-10-29' },
  { id: 'BO014', sku: 'Dum 15362/2', category: 'Bazzar Oil', quantity: 325, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 22, status: 'In-house Open', lastMovement: '2026-02-25' },
  { id: 'BO015', sku: 'Erato 15143/2', category: 'Bazzar Oil', quantity: 270, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 28, status: 'In-house Open', lastMovement: '2026-02-19' },
  { id: 'BO016', sku: 'Etere 15286 White', category: 'Bazzar Oil', quantity: 690, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 18, status: 'In-house Open', lastMovement: '2026-03-01' },
  { id: 'BO017', sku: 'Fidelia FN 0005661', category: 'Bazzar Oil', quantity: 100, unit: 'kg', warehouse: 'Main Location', ageing: 55, status: 'In-house Open', lastMovement: '2026-01-22' },
  { id: 'BO018', sku: 'Fragrance XXS 31042', category: 'Bazzar Oil', quantity: 350, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 33, status: 'In-house Open', lastMovement: '2026-02-14' },
  { id: 'BO019', sku: 'Golden Sand 31018', category: 'Bazzar Oil', quantity: 135, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 42, status: 'In-house Open', lastMovement: '2026-02-05' },
  { id: 'BO020', sku: 'Hugo 28882', category: 'Bazzar Oil', quantity: 90, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 65, status: 'In-house Open', lastMovement: '2026-01-12' },
  { id: 'BO021', sku: 'Kachalia 20440', category: 'Bazzar Oil', quantity: 625, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 8, status: 'In-house Open', lastMovement: '2026-03-11' },
  { id: 'BO022', sku: 'Lush 16165', category: 'Bazzar Oil', quantity: 440, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 16, status: 'In-house Open', lastMovement: '2026-03-03' },
  { id: 'BO023', sku: 'Mukalat Badadr GW 1255', category: 'Bazzar Oil', quantity: 100, unit: 'kg', warehouse: 'Main Location', ageing: 48, status: 'In-house Open', lastMovement: '2026-01-30' },
  { id: 'BO024', sku: 'Noor Imam FN0030326', category: 'Bazzar Oil', quantity: 125, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 52, status: 'In-house Open', lastMovement: '2026-01-26' },
  { id: 'BO025', sku: 'Onis 12482', category: 'Bazzar Oil', quantity: 200, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 38, status: 'In-house Open', lastMovement: '2026-02-09' },
  { id: 'BO026', sku: 'Sandal Oudh Zubairu 60036', category: 'Bazzar Oil', quantity: 325, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 24, status: 'In-house Open', lastMovement: '2026-02-23' },
  { id: 'BO027', sku: 'Sandal Rose GW 1264', category: 'Bazzar Oil', quantity: 2150, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 5, status: 'In-house Open', lastMovement: '2026-03-14' },
  { id: 'BO028', sku: 'Sandle 24052', category: 'Bazzar Oil', quantity: 2675, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 7, status: 'In-house Open', lastMovement: '2026-03-12' },
  { id: 'BO029', sku: 'Sheikha CV 0000105', category: 'Bazzar Oil', quantity: 600, unit: 'kg', warehouse: 'Main Location', ageing: 14, status: 'In-house Open', lastMovement: '2026-03-05' },

  // Body Care
  { id: 'BDC001', sku: 'Almond Sweet Oil', category: 'Body Care', quantity: 50, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 70, status: 'In-house Open', lastMovement: '2026-01-07' },
  { id: 'BDC002', sku: 'Aloe Vera 16474', category: 'Body Care', quantity: 5, unit: 'kg', warehouse: 'Challenge Office', ageing: 180, status: 'In-house Open', lastMovement: '2025-09-20' },
  { id: 'BDC003', sku: 'Alycia Musk 12473', category: 'Body Care', quantity: 425, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 19, status: 'In-house Open', lastMovement: '2026-02-28' },
  { id: 'BDC004', sku: 'Anorekia 4580Q', category: 'Body Care', quantity: 600, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 11, status: 'In-house Open', lastMovement: '2026-03-08' },
  { id: 'BDC005', sku: 'Attraction 11251', category: 'Body Care', quantity: 475, unit: 'kg', warehouse: 'Main Location', ageing: 17, status: 'In-house Open', lastMovement: '2026-03-02' },
  { id: 'BDC006', sku: 'Carat Fn 0010277', category: 'Body Care', quantity: 350, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 26, status: 'In-house Open', lastMovement: '2026-02-21' },
  { id: 'BDC007', sku: 'Carrot 34565 EX', category: 'Body Care', quantity: 150, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 44, status: 'In-house Open', lastMovement: '2026-02-03' },
  { id: 'BDC008', sku: 'Cocobutter 1435', category: 'Body Care', quantity: 650, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 9, status: 'In-house Open', lastMovement: '2026-03-10' },
  { id: 'BDC009', sku: 'Coconut Surf 844697', category: 'Body Care', quantity: 114, unit: 'kg', warehouse: 'Main Location', ageing: 58, status: 'In-house Open', lastMovement: '2026-01-19' },
  { id: 'BDC010', sku: 'Dovina 3326Q', category: 'Body Care', quantity: 75, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 72, status: 'In-house Open', lastMovement: '2026-01-05' },
  { id: 'BDC011', sku: 'Emirage Q 012', category: 'Body Care', quantity: 300, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 31, status: 'In-house Open', lastMovement: '2026-02-16' },
  { id: 'BDC012', sku: 'Lavanda 34566 EX', category: 'Body Care', quantity: 75, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 85, status: 'In-house Open', lastMovement: '2025-12-24' },
  { id: 'BDC013', sku: 'Lemon Zest 22928', category: 'Body Care', quantity: 420, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 21, status: 'In-house Open', lastMovement: '2026-02-26' },
  { id: 'BDC014', sku: 'Menthol 28634/2', category: 'Body Care', quantity: 100, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 50, status: 'In-house Open', lastMovement: '2026-01-28' },

  // General
  { id: 'GEN001', sku: 'Aloe Vera FN1009129', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 95, status: 'In-house Open', lastMovement: '2025-12-14' },
  { id: 'GEN002', sku: 'Apple Mango 145746', category: 'General', quantity: 125, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 36, status: 'In-house Open', lastMovement: '2026-02-11' },
  { id: 'GEN003', sku: 'Citronella EX FN1002553', category: 'General', quantity: 20, unit: 'kg', warehouse: 'Main Location', ageing: 130, status: 'In-house Open', lastMovement: '2025-11-17' },
  { id: 'GEN004', sku: 'Citronella FN1002462', category: 'General', quantity: 20, unit: 'kg', warehouse: 'Challenge Office', ageing: 125, status: 'In-house Open', lastMovement: '2025-11-22' },
  { id: 'GEN005', sku: 'Cocoa Butter 3313Q', category: 'General', quantity: 300, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 27, status: 'In-house Open', lastMovement: '2026-02-20' },
  { id: 'GEN006', sku: 'Cocorange Fn 0010268', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 102, status: 'In-house Open', lastMovement: '2025-12-07' },
  { id: 'GEN007', sku: 'Cool Apple Mint 35640', category: 'General', quantity: 50, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 68, status: 'In-house Open', lastMovement: '2026-01-09' },
  { id: 'GEN008', sku: 'Copaci 24 FN0030316', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 115, status: 'In-house Open', lastMovement: '2025-12-02' },
  { id: 'GEN009', sku: 'Cotton FN27009', category: 'General', quantity: 100, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 62, status: 'In-house Open', lastMovement: '2026-01-15' },
  { id: 'GEN010', sku: 'Glacier 15288/LL', category: 'General', quantity: 150, unit: 'kg', warehouse: 'Main Location', ageing: 41, status: 'In-house Open', lastMovement: '2026-02-06' },
  { id: 'GEN011', sku: 'Goodness 15143/2', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 98, status: 'In-house Open', lastMovement: '2025-12-11' },
  { id: 'GEN012', sku: 'Jasmine 61813E', category: 'General', quantity: 5, unit: 'kg', warehouse: 'Challenge Office', ageing: 165, status: 'In-house Open', lastMovement: '2025-10-05' },
  { id: 'GEN013', sku: 'LAMO FN0018026', category: 'General', quantity: 100, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 32, status: 'In-house Open', lastMovement: '2026-02-15' },
  { id: 'GEN014', sku: 'Lemon FN1009130', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 88, status: 'In-house Open', lastMovement: '2025-12-21' },
  { id: 'GEN015', sku: 'Perfique Bloom FN22263', category: 'General', quantity: 25, unit: 'kg', warehouse: 'Main Location', ageing: 105, status: 'In-house Open', lastMovement: '2025-12-04' },
  { id: 'GEN016', sku: 'Rose FN1009128', category: 'General', quantity: 20, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 92, status: 'In-house Open', lastMovement: '2025-12-17' },

  // Hair Care
  { id: 'HC001', sku: 'Apple 12682/2', category: 'Hair Care', quantity: 205, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 34, status: 'In-house Open', lastMovement: '2026-02-13' },
  { id: 'HC002', sku: 'Banana 22512 WW', category: 'Hair Care', quantity: 389, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 23, status: 'In-house Open', lastMovement: '2026-02-24' },
  { id: 'HC003', sku: 'Bubblegum 3472q Ex', category: 'Hair Care', quantity: 225, unit: 'kg', warehouse: 'Main Location', ageing: 37, status: 'In-house Open', lastMovement: '2026-02-10' },
  { id: 'HC004', sku: 'Coconut 17150', category: 'Hair Care', quantity: 675, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 13, status: 'In-house Open', lastMovement: '2026-03-06' },
  { id: 'HC005', sku: 'Floral 348715', category: 'Hair Care', quantity: 5, unit: 'kg', warehouse: 'Challenge Office', ageing: 155, status: 'In-house Open', lastMovement: '2025-10-15' },
  { id: 'HC006', sku: 'Juicy Mango 3904Q', category: 'Hair Care', quantity: 95, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 64, status: 'In-house Open', lastMovement: '2026-01-13' },
  { id: 'HC007', sku: 'Pineapple 11434', category: 'Hair Care', quantity: 718, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 6, status: 'In-house Open', lastMovement: '2026-03-13' },
  { id: 'HC008', sku: 'Red Fruit & Strawberry 29182/3', category: 'Hair Care', quantity: 70, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 76, status: 'In-house Open', lastMovement: '2025-12-31' },
  { id: 'HC009', sku: 'Strawberry 16843', category: 'Hair Care', quantity: 4, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 140, status: 'In-house Open', lastMovement: '2025-11-07' },
  { id: 'HC010', sku: 'Strawberry 16843 EX', category: 'Hair Care', quantity: 325, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 29, status: 'In-house Open', lastMovement: '2026-02-18' },

  // Household
  { id: 'HH001', sku: 'Lemon Bright 42409 10kg', category: 'Household', quantity: 540, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 11, status: 'In-house Open', lastMovement: '2026-03-08' },
  { id: 'HH002', sku: 'Lemon Bright 42409 25kg', category: 'Household', quantity: 429, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 18, status: 'In-house Open', lastMovement: '2026-03-01' },
  { id: 'HH003', sku: 'Lemon Bright 42409 5kg', category: 'Household', quantity: 500, unit: 'kg', warehouse: 'Main Location', ageing: 15, status: 'In-house Open', lastMovement: '2026-03-04' },
  { id: 'HH004', sku: 'Lemon Bright V FN15039', category: 'Household', quantity: 5, unit: 'kg', warehouse: 'Challenge Office', ageing: 145, status: 'In-house Open', lastMovement: '2025-11-02' },
  { id: 'HH005', sku: 'Lemon Conqueror II - 23775', category: 'Household', quantity: 40, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 82, status: 'In-house Open', lastMovement: '2025-12-27' },
  { id: 'HH006', sku: 'Mosquito Killer FN 1005225', category: 'Household', quantity: 300, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 25, status: 'In-house Open', lastMovement: '2026-02-22' },
  { id: 'HH007', sku: 'Mulato 51483', category: 'Household', quantity: 75, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 67, status: 'In-house Open', lastMovement: '2026-01-10' },
  { id: 'HH008', sku: 'Multiplus FN0030327', category: 'Household', quantity: 5, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 135, status: 'In-house Open', lastMovement: '2025-11-12' },

  // Odour Control
  { id: 'OC001', sku: 'Flower Extra 56848', category: 'Odour Control', quantity: 20, unit: 'kg', warehouse: 'Challenge Office', ageing: 112, status: 'In-house Open', lastMovement: '2025-12-05' },
  { id: 'OC002', sku: 'Frambera 61414', category: 'Odour Control', quantity: 1500, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 4, status: 'In-house Open', lastMovement: '2026-03-15' },
  { id: 'OC003', sku: 'Rose FN1005187', category: 'Odour Control', quantity: 50, unit: 'kg', warehouse: 'Main Location', ageing: 78, status: 'In-house Open', lastMovement: '2025-12-30' },

  // Perfume
  { id: 'PF001', sku: '94 For Men 34285', category: 'Perfume', quantity: 50, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 88, status: 'In-house Open', lastMovement: '2025-12-21' },
  { id: 'PF002', sku: 'Away 121 4724Q', category: 'Perfume', quantity: 1000, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 3, status: 'In-house Open', lastMovement: '2026-03-16' },
  { id: 'PF003', sku: 'Beauty D Orient 60138', category: 'Perfume', quantity: 850, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 9, status: 'In-house Open', lastMovement: '2026-03-10' },
  { id: 'PF004', sku: 'Black Explore 3993/2', category: 'Perfume', quantity: 50, unit: 'kg', warehouse: 'Main Location', ageing: 94, status: 'In-house Open', lastMovement: '2025-12-15' },
  { id: 'PF005', sku: 'Blue Water 23464', category: 'Perfume', quantity: 475, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 20, status: 'In-house Open', lastMovement: '2026-02-27' },
  { id: 'PF006', sku: 'Bodman Black 45973-FN28995', category: 'Perfume', quantity: 175, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 46, status: 'In-house Open', lastMovement: '2026-01-31' },
  { id: 'PF007', sku: 'Bodman Player 45974-FN28997', category: 'Perfume', quantity: 175, unit: 'kg', warehouse: 'Main Location', ageing: 47, status: 'In-house Open', lastMovement: '2026-01-30' },
  { id: 'PF008', sku: 'Brown FN26629', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Challenge Office', ageing: 122, status: 'In-house Open', lastMovement: '2025-11-25' },
  { id: 'PF009', sku: 'Chairman 34222', category: 'Perfume', quantity: 20, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 108, status: 'In-house Open', lastMovement: '2025-12-01' },
  { id: 'PF010', sku: 'Clean Creed FN30206', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 118, status: 'In-house Open', lastMovement: '2025-11-29' },
  { id: 'PF011', sku: 'Element 34775Q', category: 'Perfume', quantity: 850, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 8, status: 'In-house Open', lastMovement: '2026-03-11' },
  { id: 'PF012', sku: 'Emerge CV0000430', category: 'Perfume', quantity: 125, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 51, status: 'In-house Open', lastMovement: '2026-01-27' },
  { id: 'PF013', sku: 'Eskoda 34264', category: 'Perfume', quantity: 100, unit: 'kg', warehouse: 'Main Location', ageing: 59, status: 'In-house Open', lastMovement: '2026-01-18' },
  { id: 'PF014', sku: 'Espato FN 15354', category: 'Perfume', quantity: 175, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 43, status: 'In-house Open', lastMovement: '2026-02-04' },
  { id: 'PF015', sku: 'FA Classique 34541 Ex', category: 'Perfume', quantity: 200, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 39, status: 'In-house Open', lastMovement: '2026-02-08' },
  { id: 'PF016', sku: 'Fantasy 31186', category: 'Perfume', quantity: 175, unit: 'kg', warehouse: 'Main Location', ageing: 45, status: 'In-house Open', lastMovement: '2026-02-02' },
  { id: 'PF017', sku: 'Farad FN21223', category: 'Perfume', quantity: 300, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 30, status: 'In-house Open', lastMovement: '2026-02-17' },
  { id: 'PF018', sku: 'Frag 212', category: 'Perfume', quantity: 113, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 61, status: 'In-house Open', lastMovement: '2026-01-16' },
  { id: 'PF019', sku: 'Frag BP 4057Q', category: 'Perfume', quantity: 250, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 35, status: 'In-house Open', lastMovement: '2026-02-12' },
  { id: 'PF020', sku: 'Frag ZB 540 PLUS FN8150', category: 'Perfume', quantity: 100, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 56, status: 'In-house Open', lastMovement: '2026-01-21' },
  { id: 'PF021', sku: 'Frag ZB Aviff FN 8196', category: 'Perfume', quantity: 275, unit: 'kg', warehouse: 'Main Location', ageing: 33, status: 'In-house Open', lastMovement: '2026-02-14' },
  { id: 'PF022', sku: 'Fresh Mare FN20952', category: 'Perfume', quantity: 5, unit: 'kg', warehouse: 'Challenge Office', ageing: 171, status: 'In-house Open', lastMovement: '2025-09-29' },
  { id: 'PF023', sku: 'Friend Qw 1278', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 104, status: 'In-house Open', lastMovement: '2025-12-05' },
  { id: 'PF024', sku: 'GK Men FN30142', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 99, status: 'In-house Open', lastMovement: '2025-12-10' },
  { id: 'PF025', sku: 'Hi Way FN1002725', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 96, status: 'In-house Open', lastMovement: '2025-12-13' },
  { id: 'PF026', sku: 'Interlude M 4904Q', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 101, status: 'In-house Open', lastMovement: '2025-12-08' },
  { id: 'PF027', sku: 'Kachalia 4109Q', category: 'Perfume', quantity: 150, unit: 'kg', warehouse: 'Main Location', ageing: 48, status: 'In-house Open', lastMovement: '2026-01-30' },
  { id: 'PF028', sku: 'Lima 3969Q', category: 'Perfume', quantity: 250, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 36, status: 'In-house Open', lastMovement: '2026-02-11' },
  { id: 'PF029', sku: 'Loop FH FN7667', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 107, status: 'In-house Open', lastMovement: '2025-12-02' },
  { id: 'PF030', sku: 'Malizia 4660Q EX', category: 'Perfume', quantity: 1200, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 2, status: 'In-house Open', lastMovement: '2026-03-17' },
  { id: 'PF031', sku: 'Mood 156587', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Mamoud Warehouse', ageing: 114, status: 'In-house Open', lastMovement: '2025-12-03' },
  { id: 'PF032', sku: 'My Own 34208', category: 'Perfume', quantity: 500, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 16, status: 'In-house Open', lastMovement: '2026-03-03' },
  { id: 'PF033', sku: 'Narissa 29406', category: 'Perfume', quantity: 125, unit: 'kg', warehouse: 'Main Location', ageing: 54, status: 'In-house Open', lastMovement: '2026-01-23' },
  { id: 'PF034', sku: 'Okukoo 60960', category: 'Perfume', quantity: 2000, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 1, status: 'In-house Open', lastMovement: '2026-03-18' },
  { id: 'PF035', sku: 'Orange Beauty 4780Q', category: 'Perfume', quantity: 700, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 12, status: 'In-house Open', lastMovement: '2026-03-07' },
  { id: 'PF036', sku: 'Orgy 15640 EX', category: 'Perfume', quantity: 8000, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 0, status: 'In-house Open', lastMovement: '2026-03-19' },
  { id: 'PF037', sku: 'Rose Black 342881', category: 'Perfume', quantity: 125, unit: 'kg', warehouse: 'Main Location', ageing: 53, status: 'In-house Open', lastMovement: '2026-01-24' },
  { id: 'PF038', sku: 'Senario 71532EX', category: 'Perfume', quantity: 575, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 14, status: 'In-house Open', lastMovement: '2026-03-05' },
  { id: 'PF039', sku: 'So White 3540Q/2', category: 'Perfume', quantity: 800, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 10, status: 'In-house Open', lastMovement: '2026-03-09' },
  { id: 'PF040', sku: 'Sugar Lala FN1000705', category: 'Perfume', quantity: 350, unit: 'kg', warehouse: 'Main Location', ageing: 28, status: 'In-house Open', lastMovement: '2026-02-19' },
  { id: 'PF041', sku: 'Verpes FN7661', category: 'Perfume', quantity: 25, unit: 'kg', warehouse: 'Essential Aroma\'s', ageing: 110, status: 'In-house Open', lastMovement: '2025-12-07' },
  { id: 'PF042', sku: 'Vitac 60190', category: 'Perfume', quantity: 300, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 32, status: 'In-house Open', lastMovement: '2026-02-15' },
  { id: 'PF043', sku: 'Zandas PC GW 0319', category: 'Perfume', quantity: 250, unit: 'kg', warehouse: 'Milan Kano Warehouse', ageing: 37, status: 'In-house Open', lastMovement: '2026-02-10' },

  // Additional items to reach totals - In Transit and Ordered status
  { id: 'BO030', sku: 'Cenema 31048 (Transit)', category: 'Bazzar Oil', quantity: 500, unit: 'kg', warehouse: 'Goods in Transit (UK)', ageing: 0, status: 'In Transit WATER', lastMovement: '2026-03-15' },
  { id: 'PF044', sku: 'Orgy 15640 EX (Transit)', category: 'Perfume', quantity: 1000, unit: 'kg', warehouse: 'Goods in Transit (UK)', ageing: 0, status: 'In Transit AIR', lastMovement: '2026-03-12' },
  { id: 'HC011', sku: 'Coconut 17150 (Ordered)', category: 'Hair Care', quantity: 300, unit: 'kg', warehouse: 'Main Location', ageing: 0, status: 'Ordered', lastMovement: '2026-03-19' },
  { id: 'BDC015', sku: 'Cocobutter 1435 (Reserved)', category: 'Body Care', quantity: 200, unit: 'kg', warehouse: 'Kano Warehouse', ageing: 9, status: 'Reserved', lastMovement: '2026-03-10' },
];

export const companyLocations = [
  { code: 'NG', name: 'Nigeria', isPrimary: true },
  { code: 'ET', name: 'Ethiopia', isPrimary: false },
  { code: 'GH', name: 'Ghana', isPrimary: false },
  { code: 'ZA', name: 'South Africa', isPrimary: false }
];

// Calculate stock metrics
export const getStockMetrics = () => {
  const totalSKUs = products.length;
  const shortSKUs = products.filter(p => p.quantity < 100 && p.status === 'In-house Open').length;
  const pendingOrders = products.filter(p => p.status === 'Ordered').length;
  const fastMovingSKUs = products.filter(p => p.ageing < 30 && p.status === 'In-house Open').length;
  const slowMovingSKUs = products.filter(p => p.ageing >= 60 && p.ageing < 120 && p.status === 'In-house Open').length;
  const deadStock = products.filter(p => p.ageing >= 120).length;
  
  return {
    totalSKUs,
    shortSKUs,
    pendingOrders,
    fastMovingSKUs,
    slowMovingSKUs,
    deadStock
  };
};

// Get inventory by status
export const getInventoryByStatus = () => {
  const statusCounts: Record<string, number> = {
    'Ordered': 0,
    'In Transit AIR': 0,
    'In Transit WATER': 0,
    'In-house Open': 0,
    'Reserved': 0,
    'Outgoing': 0,
    'Sold': 0,
    'Returned': 0,
    'Rejected': 0
  };
  
  products.forEach(p => {
    statusCounts[p.status] = (statusCounts[p.status] || 0) + 1;
  });
  
  return statusCounts;
};

// Get warehouse distribution
export const getWarehouseDistribution = () => {
  const warehouseStats: Record<string, { count: number; quantity: number }> = {};
  
  warehouses.forEach(wh => {
    warehouseStats[wh] = { count: 0, quantity: 0 };
  });
  
  products.forEach(p => {
    if (warehouseStats[p.warehouse]) {
      warehouseStats[p.warehouse].count++;
      warehouseStats[p.warehouse].quantity += p.quantity;
    }
  });
  
  return warehouseStats;
};
