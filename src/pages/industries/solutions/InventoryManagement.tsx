import { Package, BarChart, RefreshCw, AlertTriangle, Layers, Warehouse, ScanBarcode, Truck } from 'lucide-react';
import { SubIndustryDetailPage } from '@/components/industries/SubIndustryDetailPage';

const InventoryManagement = () => {
  return (
    <SubIndustryDetailPage
      icon={Package}
      color="from-purple-500 to-violet-600"
      parentIndustry="Retail & E-commerce"
      parentHref="/industries/retail-ecommerce"
      name="Inventory Management Systems"
      tagline="Real-Time Stock Control & Optimization"
      description="Build intelligent inventory management solutions that provide real-time visibility, automate reordering, and optimize stock levels across multiple warehouses and sales channels."
      stats={[
        { value: "99.5%", label: "Inventory Accuracy" },
        { value: "40%", label: "Cost Reduction" },
        { value: "60%", label: "Fewer Stockouts" },
        { value: "Real-time", label: "Visibility" },
      ]}
      features={[
        {
          title: "Real-Time Stock Tracking",
          description: "Track inventory levels across all locations and channels with live updates and instant synchronization.",
          icon: ScanBarcode,
        },
        {
          title: "Multi-Warehouse Management",
          description: "Manage inventory across multiple warehouses, stores, and fulfillment centers from a single dashboard.",
          icon: Warehouse,
        },
        {
          title: "Automated Reordering",
          description: "Set reorder points and safety stock levels with automatic purchase order generation.",
          icon: RefreshCw,
        },
        {
          title: "Demand Forecasting",
          description: "AI-powered demand prediction to optimize stock levels and prevent overstocking or stockouts.",
          icon: BarChart,
        },
        {
          title: "Low Stock Alerts",
          description: "Receive instant notifications when inventory falls below threshold levels.",
          icon: AlertTriangle,
        },
        {
          title: "Batch & Serial Tracking",
          description: "Track products by batch numbers, serial numbers, or expiration dates for complete traceability.",
          icon: Layers,
        },
      ]}
      useCases={[
        {
          title: "Multi-Channel Retail",
          description: "Sync inventory across physical stores, e-commerce, and marketplaces in real-time.",
        },
        {
          title: "Warehouse Operations",
          description: "Optimize picking, packing, and shipping with barcode scanning and location tracking.",
        },
        {
          title: "Supply Chain Management",
          description: "Coordinate with suppliers for automated reordering and just-in-time delivery.",
        },
        {
          title: "Perishable Goods",
          description: "Track expiration dates and implement FIFO for food, pharma, and cosmetics.",
        },
      ]}
      technologies={[
        "Barcode & RFID Integration",
        "Cloud-Based Architecture",
        "AI/ML Forecasting",
        "Real-Time Sync APIs",
        "Mobile Inventory Apps",
        "ERP Integration",
        "Warehouse Management",
        "IoT Sensors",
      ]}
      benefits={[
        "Reduce carrying costs by up to 40%",
        "Prevent stockouts and overstock situations",
        "Improve inventory accuracy to 99%+",
        "Automate manual inventory tasks",
        "Multi-location visibility and control",
        "Better demand planning and forecasting",
        "Streamlined supplier management",
        "Enhanced order fulfillment speed",
      ]}
    />
  );
};

export default InventoryManagement;
