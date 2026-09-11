// Standalone decoupled entities store for leasinguebernahme.de

const INITIAL_VEHICLES = [
  {
    id: "veh-101",
    brand: "Audi",
    model: "A4 Avant 40 TDI quattro S line",
    year: 2023,
    mileage: 28500,
    monthly_rate: 349,
    remaining_months: 18,
    location: "Frankfurt am Main",
    fuel_type: "Diesel",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Sehr gepflegtes Langstreckenfahrzeug in Mythenschwarz Metalllic. S line Sportpaket, Panorama-Glasdach, Matrix-LED-Scheinwerfer und Bang & Olufsen Sound. Übernahme ab sofort möglich ohne Umschreibungsgebühr.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/101",
    images: ["https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-15T10:00:00Z"
  },
  {
    id: "veh-102",
    brand: "BMW",
    model: "320i Touring M Sport",
    year: 2024,
    mileage: 14200,
    monthly_rate: 389,
    remaining_months: 24,
    location: "München",
    fuel_type: "Benzin",
    transmission: "Automatik",
    is_private: false,
    takeover_fee: 250,
    offer_type: "leasing",
    status: "aktiv",
    description: "BMW 320i Touring in Portimao Blau. M Sportpaket, Curved Display, Live Cockpit Professional, Head-Up Display. Gewerblicher Leasingvertrag mit 15.000 km/Jahr.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/102",
    images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-18T14:30:00Z"
  },
  {
    id: "veh-103",
    brand: "Volkswagen",
    model: "Golf 8 R-Line 2.0 TDI",
    year: 2023,
    mileage: 32000,
    monthly_rate: 279,
    remaining_months: 14,
    location: "Hamburg",
    fuel_type: "Diesel",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Top ausgestatteter VW Golf 8 R-Line in Lapiz Blue. Innovision Cockpit, IQ.LIGHT LED-Matrix-Scheinwerfer, Standheizung und Rückfahrkamera.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/103",
    images: ["https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-20T09:15:00Z"
  },
  {
    id: "veh-104",
    brand: "Mercedes",
    model: "C 220 d AMG Line T-Modell",
    year: 2024,
    mileage: 18900,
    monthly_rate: 429,
    remaining_months: 28,
    location: "Stuttgart",
    fuel_type: "Diesel",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Mercedes C-Klasse T-Modell AMG Line in Spektralblau metallic. Burmester Surround-Soundsystem, MBUX Premium, Fahrassistenz-Paket Plus.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/104",
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-22T11:20:00Z"
  },
  {
    id: "veh-105",
    brand: "Tesla",
    model: "Model 3 Long Range AWD",
    year: 2023,
    mileage: 22000,
    monthly_rate: 399,
    remaining_months: 20,
    location: "Berlin",
    fuel_type: "Elektro",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Tesla Model 3 Long Range Dual Motor in Pearl White. Premium-Innenraum schwarz, Autopilot, 19-Zoll Sport-Felgen, Wärmepumpe.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/105",
    images: ["https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-25T16:45:00Z"
  },
  {
    id: "veh-106",
    brand: "Cupra",
    model: "Formentor VZ 2.0 TSI 4Drive",
    year: 2024,
    mileage: 11500,
    monthly_rate: 329,
    remaining_months: 22,
    location: "Köln",
    fuel_type: "Benzin",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 150,
    offer_type: "leasing",
    status: "aktiv",
    description: "Cupra Formentor VZ mit 310 PS in Petrol Blue Matt. Brembo-Bremse, Beats Audio, Sportsitze in Leder Petrol Blue, 19-Zoll Kupfer-Felgen.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/106",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-01-28T13:10:00Z"
  },
  {
    id: "veh-107",
    brand: "Skoda",
    model: "Octavia Combi RS 2.0 TDI DSG",
    year: 2023,
    mileage: 35000,
    monthly_rate: 299,
    remaining_months: 16,
    location: "Dresden",
    fuel_type: "Diesel",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Skoda Octavia Combi RS in Mamba-Grün. Matrix-LED, Canton Soundsystem, Head-up-Display, Anhängerkupplung schwenkbar.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/107",
    images: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-01T08:30:00Z"
  },
  {
    id: "veh-108",
    brand: "Hyundai",
    model: "Ioniq 5 AWD 77 kWh UNIQ",
    year: 2024,
    mileage: 9800,
    monthly_rate: 369,
    remaining_months: 26,
    location: "Hannover",
    fuel_type: "Elektro",
    transmission: "Automatik",
    is_private: false,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "800V Ultra-Schnellladen. Hyundai Ioniq 5 UNIQ-Paket mit Solar-Dach, Bose Sound, Relax-Sitzen und AR-Head-Up Display.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/108",
    images: ["https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-03T15:00:00Z"
  },
  {
    id: "veh-109",
    brand: "Porsche",
    model: "Taycan 4S Plus",
    year: 2023,
    mileage: 19500,
    monthly_rate: 890,
    remaining_months: 18,
    location: "Düsseldorf",
    fuel_type: "Elektro",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 500,
    offer_type: "leasing",
    status: "aktiv",
    description: "Porsche Taycan 4S in Vulkangrau Metallic. Performance-Batterie Plus, Sport Chrono Paket, Hinterachslenkung, Passenger Display.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/109",
    images: ["https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-05T12:00:00Z"
  },
  {
    id: "veh-110",
    brand: "Ford",
    model: "Kuga ST-Line X 2.5 Duratec FHEV",
    year: 2023,
    mileage: 26000,
    monthly_rate: 259,
    remaining_months: 15,
    location: "Leipzig",
    fuel_type: "Hybrid",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Ford Kuga Vollhybrid ST-Line X. B&O Sound System, Fahrassistenz-Paket, LED-Scheinwerfer, Winter-Paket.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/110",
    images: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-08T09:40:00Z"
  },
  {
    id: "veh-111",
    brand: "Opel",
    model: "Astra Sports Tourer GS Line",
    year: 2023,
    mileage: 21000,
    monthly_rate: 239,
    remaining_months: 20,
    location: "Kassel",
    fuel_type: "Benzin",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Opel Astra Kette Kombi in Kult-Gelb mit schwarzem Dach. Pure Panel Pro Cockpit, Intelli-Lux LED Pixel Licht, AGR-Ergonomiesitze.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/111",
    images: ["https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-10T14:15:00Z"
  },
  {
    id: "veh-112",
    brand: "Volvo",
    model: "XC60 Recharge T6 AWD Plus Dark",
    year: 2024,
    mileage: 16000,
    monthly_rate: 459,
    remaining_months: 22,
    location: "Nürnberg",
    fuel_type: "Plug-in Hybrid",
    transmission: "Automatik",
    is_private: true,
    takeover_fee: 0,
    offer_type: "leasing",
    status: "aktiv",
    description: "Volvo XC60 Plug-in Hybrid mit 350 PS Systemleistung in Onyx Black. Harman Kardon Sound, Google Infotainment, Panorama Schiebedach.",
    contact_email: "jens@kathe.org",
    contact_phone: "+49 178 6652623",
    external_url: "https://leasingübernahme.de/details/112",
    images: ["https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80"],
    created_at: "2025-02-12T16:00:00Z"
  }
];

function getStoredVehicles() {
  try {
    const data = localStorage.getItem("lu_vehicles");
    if (data) return JSON.parse(data);
  } catch (e) {}
  return INITIAL_VEHICLES;
}

function setStoredVehicles(vehicles) {
  try {
    localStorage.setItem("lu_vehicles", JSON.stringify(vehicles));
  } catch (e) {}
}

export const Vehicle = {
  async list() {
    return getStoredVehicles();
  },
  async filter(params = {}) {
    let list = getStoredVehicles();
    if (params.id) {
      return list.filter(v => String(v.id) === String(params.id));
    }
    if (params.brand) {
      list = list.filter(v => v.brand.toLowerCase() === params.brand.toLowerCase());
    }
    if (params.fuelType || params.fuel_type) {
      const fuel = params.fuelType || params.fuel_type;
      list = list.filter(v => v.fuel_type.toLowerCase() === fuel.toLowerCase());
    }
    if (params.maxRate) {
      list = list.filter(v => v.monthly_rate <= Number(params.maxRate));
    }
    if (params.location) {
      list = list.filter(v => v.location.toLowerCase().includes(params.location.toLowerCase()));
    }
    if (params.transmission) {
      list = list.filter(v => v.transmission.toLowerCase() === params.transmission.toLowerCase());
    }
    if (params.status) {
      list = list.filter(v => v.status === params.status);
    }
    return list;
  },
  async get(id) {
    const list = getStoredVehicles();
    return list.find(v => String(v.id) === String(id)) || null;
  },
  async create(data) {
    const list = getStoredVehicles();
    const newVeh = {
      id: "veh-" + Date.now(),
      created_at: new Date().toISOString(),
      status: "aktiv",
      takeover_fee: Number(data.takeover_fee) || 0,
      monthly_rate: Number(data.monthly_rate) || 0,
      year: Number(data.year) || new Date().getFullYear(),
      mileage: Number(data.mileage) || 0,
      remaining_months: Number(data.remaining_months) || 24,
      ...data
    };
    list.unshift(newVeh);
    setStoredVehicles(list);
    return newVeh;
  },
  async update(id, data) {
    const list = getStoredVehicles();
    const index = list.findIndex(v => String(v.id) === String(id));
    if (index !== -1) {
      list[index] = { ...list[index], ...data };
      setStoredVehicles(list);
      return list[index];
    }
    return null;
  },
  async delete(id) {
    const list = getStoredVehicles();
    const newList = list.filter(v => String(v.id) !== String(id));
    setStoredVehicles(newList);
    return true;
  }
};

const INITIAL_INQUIRIES = [
  {
    id: "inq-1",
    vehicle_id: "veh-101",
    name: "Max Mustermann",
    email: "max@example.de",
    phone: "+49 170 1234567",
    message: "Ich habe Interesse an der Übernahme des Audi A4 Avant.",
    created_at: "2025-02-14T10:00:00Z"
  }
];

export const Inquiry = {
  async list() {
    try {
      const data = localStorage.getItem("lu_inquiries");
      if (data) return JSON.parse(data);
    } catch (e) {}
    return INITIAL_INQUIRIES;
  },
  async create(data) {
    const list = await Inquiry.list();
    const newInquiry = {
      id: "inq-" + Date.now(),
      created_at: new Date().toISOString(),
      ...data
    };
    list.unshift(newInquiry);
    try {
      localStorage.setItem("lu_inquiries", JSON.stringify(list));
    } catch (e) {}
    return newInquiry;
  }
};

export const User = {
  async me() {
    return {
      id: "usr-admin",
      name: "Jens Kathe",
      email: "jens@kathe.org",
      role: "admin"
    };
  },
  async login() {
    return User.me();
  },
  async logout() {
    return true;
  }
};