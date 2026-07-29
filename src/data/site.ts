import {
  Wrench, Cpu, Radio, Cloud, ShieldCheck, Wifi, Database, Code2, Server,
  Home, Sprout, Factory, Zap, Droplet, Camera, Fingerprint, Sun, Plug,
  CircuitBoard, Smartphone, Laptop, Monitor, Bot, Network, HardDrive, Layers,
} from "lucide-react";

export const services = [
  { icon: Smartphone, title: "Phone Repair", desc: "Screen, battery, charging, board and software repair for mobile devices." },
  { icon: Laptop, title: "Laptop Repair", desc: "Hardware repair, upgrades, diagnostics and system recovery." },
  { icon: Monitor, title: "Computer Maintenance", desc: "Desktop servicing, operating system support and performance cleanup." },
  { icon: Wrench, title: "Electronic Device Repair", desc: "Consumer and industrial electronics troubleshooting and repair." },
  { icon: Home, title: "Smart Home Systems", desc: "Connected lighting, security, comfort and app-based home control." },
  { icon: Sprout, title: "Smart Agriculture", desc: "IoT systems for soil, irrigation, field monitoring and farm intelligence." },
  { icon: Factory, title: "Industrial Monitoring", desc: "Factory, machine and process telemetry for real-time operational visibility." },
  { icon: Radio, title: "Remote Sensor Systems", desc: "Wireless sensor networks using LoRa, GSM and cloud-connected gateways." },
  { icon: CircuitBoard, title: "PCB Design", desc: "Schematic design, layout and production-ready electronics boards." },
  { icon: Cpu, title: "Embedded Systems", desc: "Firmware and microcontroller systems for connected products and machines." },
  { icon: Layers, title: "Custom Electronics", desc: "Purpose-built electronic circuits, modules and control hardware." },
  { icon: Bot, title: "Prototype Development", desc: "Rapid proof-of-concept builds for hardware, IoT and automation ideas." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Android and cross-platform apps for connected products and business workflows." },
  { icon: Code2, title: "Web Applications", desc: "Business portals, dashboards, websites and web-based software systems." },
  { icon: Cloud, title: "Cloud Dashboards", desc: "Real-time device visualization, alerts, reports and analytics." },
  { icon: Bot, title: "AI Integration", desc: "Computer vision, predictive analytics and intelligent automation features." },
  { icon: Camera, title: "CCTV Installation", desc: "Security cameras, monitoring systems and site surveillance setup." },
  { icon: Network, title: "Network Setup & MikroTik Networks", desc: "LAN, routing, hotspot, MikroTik and structured network configuration." },
  { icon: Wifi, title: "Wi-Fi Solutions", desc: "Reliable indoor and outdoor wireless coverage for homes and organizations." },
  { icon: Server, title: "System Integration & Maintenance", desc: "Connecting hardware, software, networks and support into one working system." },
];
export type Project = {
  title: string;
  tag: string;
  desc: string;
  image: string;
  period?: string;
  client?: string;
  url?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Bird Classification for Weather Conservation",
    tag: "AI Conservation",
    period: "Feb 2025 - May 2025",
    client: "Don Bosco KIITEC",
    desc: "AI project trained to classify migratory and non-migratory bird species, supporting environmental monitoring and weather prediction systems.",
    image: "/assets/software/bird-species-identifier-tanzania.jpg",
    url: "https://huggingface.co/spaces/Jacksonnavigator7/Bird",
    highlights: [
      "Trained AI models for bird species classification.",
      "Separated migratory and non-migratory bird categories.",
      "Built for conservation, monitoring and weather intelligence use cases.",
    ],
  },
  {
    title: "Eagle Vision Safaris Website",
    tag: "Web Development",
    period: "Dec 2024 - Jan 2025",
    client: "Eagle Vision Safaris",
    desc: "Professional travel website designed and launched to improve customer engagement, responsive browsing and safari booking enquiries.",
    image: "/assets/client-strategy-meeting.jpg",
    url: "https://www.eaglevisionsafaris.co.tz/",
    highlights: [
      "Designed and launched a professional travel website.",
      "Used responsive design techniques for mobile and desktop visitors.",
      "Integrated booking-focused customer engagement features.",
    ],
  },
  {
    title: "URIPHYTOS Hospital Management System",
    tag: "HealthTech",
    period: "May 2025 - Sept 2025",
    client: "URIPHYTOS",
    desc: "Hospital management system built for multiple hospitals to digitize patient information storage, access and daily management workflows.",
    image: "/assets/software-dashboard-code.jpg",
    url: "http://iphytosmedsystem.com",
    highlights: [
      "Designed and launched a hospital management system for multiple hospitals.",
      "Digitized patient information storage and management.",
      "Improved healthcare administration through centralized records.",
    ],
  },
  {
    title: "Bongo SMS Scam Detector",
    tag: "Security Software",
    desc: "SMS analysis tool that flags suspicious Bongo scam messages and explains warning signs before users respond.",
    image: "/assets/software/bongo-sms-scam-detector.jpg",
  },
  {
    title: "Smart Irrigation System",
    tag: "AgriTech",
    desc: "Soil-moisture driven zone irrigation with mobile control.",
    image: "/assets/Soil Sensor system to record data and send tothe backend and i the cloud.jpg",
  },
  {
    title: "Energy Monitoring System",
    tag: "Utilities",
    desc: "Real-time power quality and consumption analytics.",
    image: "/assets/projects/Solar adaptive charging through AI.jpg",
  },
  {
    title: "Industrial IoT Dashboard",
    tag: "Industry 4.0",
    desc: "Unified telemetry for factory floor equipment.",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    title: "Water Tank Monitoring",
    tag: "Smart City",
    desc: "Ultrasonic level sensing with cloud alerts.",
    image: "/assets/Iot Kit.jpg",
  },
  { title: "Smart Home System", tag: "Automation", desc: "Voice + app controlled lighting, HVAC, security.", image: "/assets/security-monitoring.jpg" },
  { title: "Attendance Management", tag: "Enterprise", desc: "Biometric + RFID with HR-grade reporting.", image: "/assets/client-strategy-meeting.jpg" },
  { title: "Hospital Queue System", tag: "Healthcare", desc: "Digital queuing with SMS notifications.", image: "/assets/software-dashboard-code.jpg" },
];
export const products = [
  {
    title: "IoT Boards",
    desc: "ESP32/STM32 based connected boards.",
    price: "From $49",
    image: "/assets/Iot Kit.jpg",
  },
  {
    title: "Control Panels",
    desc: "Industrial-grade automation panels.",
    price: "Custom",
    image: "/assets/Industrial VFD machine.jpg",
  },
  { title: "Custom PCB", desc: "Design and manufacturing services.", price: "Quote", image: "/assets/engineering-lab-bench.jpg" },
  {
    title: "Automation Systems",
    desc: "Turnkey home & factory kits.",
    price: "From $299",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    title: "Smart Sensors",
    desc: "Environmental & industrial sensors.",
    price: "From $19",
    image: "/assets/Soil Sensor system to record data and send tothe backend and i the cloud.jpg",
  },
  {
    title: "Embedded Devices",
    desc: "Firmware-loaded ready modules.",
    price: "From $79",
    image: "/assets/Solar adaptive charging through AI.jpg",
  },
  { title: "Electronic Modules", desc: "Relays, drivers, converters.", price: "From $9", image: "/assets/engineering-lab-bench.jpg" },
];
export const values = [
  { title: "Innovation", desc: "Pioneering the technology of tomorrow." },
  { title: "Integrity", desc: "Transparency in every engagement." },
  { title: "Quality", desc: "Engineered to industrial standards." },
  { title: "Customer Satisfaction", desc: "Success measured by yours." },
  { title: "Professionalism", desc: "Delivered by certified experts." },
  { title: "Teamwork", desc: "Cross-disciplinary collaboration." },
];

export const timeline = [
  { year: "2019", title: "Founded", desc: "Started as an electronics repair shop in Arusha." },
  { year: "2021", title: "IoT Division", desc: "Launched dedicated IoT and embedded team." },
  { year: "2023", title: "50+ Projects", desc: "Delivered enterprise IoT deployments across EA." },
  { year: "2025", title: "Regional Expansion", desc: "Serving clients across East Africa." },
  { year: "2026", title: "Innovation Lab", desc: "New R&D center for AI + hardware." },
];

export const testimonials = [
  { name: "Amina J.", role: "Farm Owner", quote: "Their smart irrigation cut our water use by 40%." },
  { name: "David M.", role: "Factory Manager", quote: "Real-time telemetry transformed our operations." },
  { name: "Sarah K.", role: "Hospital Admin", quote: "Queue system dramatically reduced patient wait times." },
  { name: "Peter O.", role: "Retail Chain CEO", quote: "Inventory accuracy jumped to 99% overnight." },
];

export const jobs = [
  { role: "Embedded Systems Engineer", type: "Full-time", location: "Arusha" },
  { role: "Full-Stack Developer", type: "Full-time", location: "Remote" },
  { role: "PCB Designer", type: "Contract", location: "Arusha" },
  { role: "IoT Solutions Architect", type: "Full-time", location: "Hybrid" },
  { role: "Firmware Intern", type: "Internship", location: "Arusha" },
  { role: "Mobile App Developer", type: "Full-time", location: "Remote" },
];

export const posts = [
  {
    title: "The Rise of Edge AI in East Africa",
    cat: "AI",
    date: "Jul 2026",
    excerpt: "How on-device intelligence is transforming agriculture and utilities.",
    image: "/assets/ai-technology-interface.jpg",
  },
  {
    title: "Designing Reliable IoT Gateways",
    cat: "IoT",
    date: "Jun 2026",
    excerpt: "Hardware and firmware patterns for 24/7 uptime.",
    image: "/assets/Iot Kit.jpg",
  },
  {
    title: "MikroTik in Enterprise Networks",
    cat: "Networking",
    date: "May 2026",
    excerpt: "Deep dive into RouterOS best practices.",
    image: "/assets/server-room-cloud.jpg",
  },
  {
    title: "STM32 vs ESP32 in 2026",
    cat: "Electronics",
    date: "Apr 2026",
    excerpt: "Choosing the right MCU for your product.",
    image: "/assets/electronics-prototyping.jpg",
  },
  {
    title: "SCADA for Small Factories",
    cat: "Automation",
    date: "Mar 2026",
    excerpt: "Affordable telemetry for growing operations.",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    title: "Building Production Firmware",
    cat: "Programming",
    date: "Feb 2026",
    excerpt: "A checklist for shipping robust embedded code.",
    image: "/assets/engineer-laptop-workshop.jpg",
  },
];
export const faqs = [
  { q: "Do you serve clients outside Tanzania?", a: "Yes, we deliver across East Africa and offer remote engagements globally." },
  { q: "Can you design custom hardware?", a: "Absolutely. We handle everything from schematic to certified production." },
  { q: "What's the typical project timeline?", a: "Prototypes usually take 4-8 weeks; full deployments 3-6 months." },
  { q: "Do you provide ongoing support?", a: "Yes - SLAs, monitoring and firmware updates are standard." },
];

export const trustedPartners = [
  "Safaricom", "Vodacom", "CRDB Bank", "NMB Bank", "Tanzania Breweries",
  "Kilimanjaro Water", "Aga Khan Hospital", "Precision Air", "TANESCO", "TRA",
];

export const audienceCards = [
  {
    tag: "For Businesses",
    title: "Build. Scale. Innovate.",
    desc: "Access specialized engineering, IoT expertise, and end-to-end solutions that drive real business impact.",
    points: [
      "Custom hardware & firmware development",
      "Vetted engineering professionals",
      "Turnkey automation & IoT deployments",
      "Accelerated delivery with high quality",
    ],
    cta: "Start a Project",
    to: "/contact" as const,
  },
  {
    tag: "For Innovators",
    title: "Your Next Build Starts Here.",
    desc: "Partner with a forward-thinking engineering team to bring your smart product ideas to life.",
    points: [
      "Access to enterprise-grade technology",
      "Competitive project pricing",
      "Rapid prototyping & iteration",
      "Technical guidance and mentorship",
    ],
    cta: "Explore Services",
    to: "/services" as const,
  },
];

export const coreCapabilities = [
  {
    icon: Radio,
    title: "IoT & Automation",
    desc: "Smart home systems, smart agriculture, industrial monitoring and remote sensor networks for connected operations.",
    to: "/services" as const,
  },
  {
    icon: CircuitBoard,
    title: "Engineering & Development",
    desc: "PCB design, embedded systems, custom electronics and prototype development from idea to tested hardware.",
    to: "/services" as const,
  },
  {
    icon: Code2,
    title: "Software Solutions",
    desc: "Mobile applications, web applications, cloud dashboards and AI integration for modern digital products.",
    to: "/services" as const,
  },
  {
    icon: Smartphone,
    title: "Electronics Services",
    desc: "Phone repair, laptop repair, computer maintenance and electronic device repair with practical diagnostics.",
    to: "/services" as const,
  },
  {
    icon: Network,
    title: "Networks & Security",
    desc: "CCTV installation, MikroTik network setup, Wi-Fi solutions and reliable connected-site infrastructure.",
    to: "/services" as const,
  },
  {
    icon: Server,
    title: "System Integration & Maintenance",
    desc: "Hardware, software, networks and support joined into maintainable systems that keep working after launch.",
    to: "/services" as const,
  },
];
export const industries = [
  {
    icon: Sprout,
    title: "Agriculture & AgriTech",
    desc: "Smart irrigation, soil monitoring, and crop intelligence systems that revolutionize farming across East Africa.",
    image: "/assets/smart-agriculture-field.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare & Life Sciences",
    desc: "Digital health platforms, queue management, and monitoring systems for hospitals and clinics.",
    image: "/assets/software-dashboard-code.jpg",
  },
  {
    icon: Code2,
    title: "Technology & Software",
    desc: "Full-stack engineering, IoT platforms, cloud dashboards, and embedded firmware for tech companies.",
    image: "/assets/software-dashboard-code.jpg",
  },
  {
    icon: Monitor,
    title: "Retail & E-Commerce",
    desc: "Inventory tracking, POS integrations, and smart retail solutions with barcode and IoT systems.",
    image: "/assets/client-strategy-meeting.jpg",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    desc: "Factory floor telemetry, PLC automation, and SCADA systems for modern production lines.",
    image: "/assets/Industrial VFD machine.jpg",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    desc: "Power monitoring, solar systems, water level tracking, and smart grid solutions.",
    image: "/assets/solar-field.jpg",
  },
];
export const stats = [
  { n: 180, s: "+", l: "Enterprise Partners" },
  { n: 250, s: "+", l: "Successful Projects" },
  { n: 5, s: "+", l: "Countries Reached" },
  { n: 98, s: "%", l: "Client Satisfaction" },
];






