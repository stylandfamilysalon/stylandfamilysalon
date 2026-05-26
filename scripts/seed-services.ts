import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const formatPrice = (price: string | number) => {
  if (typeof price === "string" && price.includes("onwards")) {
    return price.replace(" onwards", ""); // We will store it as a number in DB or we need to handle it.
    // Wait, the schema price column is NUMERIC. So we need to store just the number.
  }
  return price;
};

const extractNumericPrice = (price: any): number => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const match = price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }
  return 0;
};

const mensMenuData = {
  "Hair Care": [
    { "service": "Royal Hair Spa", "price": "1000 onwards" },
    { "service": "Signature Men Spa", "price": "1200 onwards" },
    { "service": "Luxury Hair Therapy", "price": 2500 },
    { "service": "Premium Scalp Therapy", "price": 2300 },
    { "service": "Crown Care Spa", "price": 2000 },
    { "service": "Dandruff Treatment", "price": 1200 },
    { "service": "Dandruff Therapy", "price": 2500 },
    { "service": "Moisturize Spa", "price": 2200 },
    { "service": "Colour Protect Spa", "price": 2500 }
  ],
  "Hair Treatment": [
    { "service": "Straightening", "price": "2500 onwards" },
    { "service": "Smoothing", "price": 3000 },
    { "service": "Rebounding", "price": 3000 },
    { "service": "Perming", "price": 3500 },
    { "service": "Botox Fiber", "price": 4000 },
    { "service": "Keratin", "price": 3000 },
    { "service": "QOD Treatment", "price": 3500 }
  ],
  "Skin - D-Tan": [
    { "service": "Classic D-Tan", "price": 500 },
    { "service": "Ice Cool D-Tan", "price": 700 },
    { "service": "Sun Damage Repair", "price": 1200 },
    { "service": "Men Skin Revival", "price": 1500 },
    { "service": "Signature D-Tan Care", "price": 850 },
    { "service": "Royal D-Tan Therapy", "price": 800 },
    { "service": "Gold Glow D-Tan", "price": 1600 }
  ],
  "Skin Care": [
    { "service": "Bright & Clear Facial", "price": 1250 },
    { "service": "Fresh Face Treatment", "price": 1100 },
    { "service": "Fruit (Mixed) Facial", "price": 1000 },
    { "service": "Coffee Detox Facial", "price": 1500 },
    { "service": "Skin Recharge Therapy", "price": 2000 },
    { "service": "Diamond Bright Facial", "price": 3000 },
    { "service": "Instant Brightening Treatment", "price": 2500 },
    { "service": "Photo Facial", "price": 4000 },
    { "service": "Party Ready Facial", "price": 1800 }
  ],
  "Facial": [
    { "service": "O3+ Brightening", "price": 3800 },
    { "service": "O3+ Power Brighter", "price": 4000 },
    { "service": "O3+ Shine & Glow", "price": 2500 },
    { "service": "Peel Off Mask O3+", "price": 1500 },
    { "service": "Hydra Facial (Basic)", "price": 2500 },
    { "service": "Hydra Premium", "price": 4000 },
    { "service": "Galvanic (with) Natural Fruit", "price": 3000 },
    { "service": "Anti Aging Treatment", "price": 3500 },
    { "service": "Anti Tan Treatment", "price": 2500 },
    { "service": "Oxygeno Facial", "price": 4000 },
    { "service": "Skin Therapy", "price": "3000 onwards" },
    { "service": "Skin Boosting Therapy", "price": "3500 onwards" }
  ],
  "Skin Care - Wax Rica": [
    { "service": "Full Arms", "price": 650 },
    { "service": "Half Legs", "price": 700 },
    { "service": "Chest", "price": 650 },
    { "service": "Back", "price": "750 onwards" },
    { "service": "Face (Side Face & Neck)", "price": "500 onwards" },
    { "service": "Side Lock", "price": 250 },
    { "service": "Full Body", "price": "4000 onwards" }
  ],
  "Manicure & Pedicure": [
    { "service": "Classic Manicure", "price": 600 },
    { "service": "Signature Nail Care", "price": 500 },
    { "service": "Luxury Hand Spa", "price": 1200 },
    { "service": "Executive Care Treatment", "price": 1000 },
    { "service": "Hand Polish", "price": 1500 },
    { "service": "Candle Spa", "price": 1200 },
    { "service": "Aroma Therapy", "price": 1000 },
    { "service": "Classic Pedicure", "price": "500 onwards" },
    { "service": "Spa Pedicure", "price": 800 },
    { "service": "Bomb Pedicure", "price": 1500 },
    { "service": "Detox Foot Spa", "price": 2000 },
    { "service": "Ice Cool Pedicure", "price": 1800 },
    { "service": "Deep Clean Pedicure", "price": 2000 },
    { "service": "Stress Relief Foot Spa", "price": 1700 },
    { "service": "Candle Foot Spa", "price": 1800 },
    { "service": "Charcoal Foot Detox", "price": 1800 },
    { "service": "Aroma Pedicure", "price": 1200 }
  ],
  "Body Spa": [
    { "service": "Head Massage (30 min)", "price": 400 },
    { "service": "Head Massage + Hair Wash", "price": 500 },
    { "service": "Head Massage + Steam + Hair Wash", "price": 600 },
    { "service": "Head & Foot Massage (40 min)", "price": 1500 },
    { "service": "Back, Neck and Shoulder Massage (60 min)", "price": 1300 },
    { "service": "Candle Spa (60 min)", "price": 2500 },
    { "service": "Body Scrub (60 min)", "price": 1600 },
    { "service": "Body Polishing", "price": 6000 }
  ],
  "Hair Styling": [
    { "service": "Regular Basic Haircut", "price": 300 },
    { "service": "Classic Gentleman Cut", "price": 500 },
    { "service": "Smart Cut", "price": 400 },
    { "service": "Simple Trim", "price": 350 },
    { "service": "Clean Cut", "price": 400 },
    { "service": "Beard Trim", "price": 150 },
    { "service": "Gentleman Grooming", "price": 250 },
    { "service": "Fashion Haircut", "price": 600 },
    { "service": "Stylish Beard", "price": 200 },
    { "service": "Clean Shave", "price": 120 },
    { "service": "Deep Conditioning", "price": 400 }
  ],
  "Hair Colours": [
    { "service": "Global (with Ammonia)", "price": "1000 onwards" },
    { "service": "Global (Ammonia Free)", "price": "1200 onwards" },
    { "service": "Moustache Colour", "price": 200 },
    { "service": "Beard Colour", "price": 400 },
    { "service": "Global Highlights", "price": "1500 onwards" },
    { "service": "One Streak", "price": 250 },
    { "service": "Fashion Colours", "price": 1800 }
  ]
};

const womensMenuData = {
  "Threading": [
    { "service": "Eyebrow", "price": 70 },
    { "service": "Upperlip", "price": 50 },
    { "service": "Forehead", "price": 50 },
    { "service": "Chin", "price": 50 },
    { "service": "Full Face", "price": 300 }
  ],
  "Haircut's": [
    { "service": "Basic Haircut & Hairwash", "price": 500 },
    { "service": "Advance Haircut & Hairwash", "price": 850 },
    { "service": "Hairwash & Blowdry", "price": "600 onwards" },
    { "service": "Hairwash & Ironing", "price": 1200 },
    { "service": "Formal Hairstyling", "price": 1000 },
    { "service": "Fashion Advance Haircut", "price": "1000 onwards" },
    { "service": "Ironing & Hairwash", "price": "1200 onwards" },
    { "service": "Tonging & Hairwash", "price": "1000 onwards" },
    { "service": "Wash, Condition & Quick Dry", "price": 400 }
  ],
  "Hair Treatments": [
    { "service": "Straightening", "price": "4000 onwards" },
    { "service": "Smoothening", "price": "5500 onwards" },
    { "service": "Rebounding", "price": 4500 },
    { "service": "Keratin", "price": "4000 onwards" },
    { "service": "Qod", "price": "6000 onwards" },
    { "service": "Botox", "price": "7000 onwards" },
    { "service": "Nanoplastic", "price": "6000 onwards" }
  ],
  "Hair Coloring": [
    { "service": "Root Touchup (Majirel)", "price": 1200 },
    { "service": "Root Touchup (Inoa)", "price": 1500 },
    { "service": "Global Base Colour", "price": "3000 onwards" },
    { "service": "Global Fashion Colour", "price": "4000 onwards" },
    { "service": "3D Fantasy Colour", "price": 3000 },
    { "service": "Per Steak", "price": 500 },
    { "service": "One Section", "price": 800 }
  ],
  "Hair Care": [
    { "service": "Basic Hair Spa", "price": 1500 },
    { "service": "Silk Therapy", "price": 2500 },
    { "service": "Elite Hair Repair", "price": 1800 },
    { "service": "Dandruff Treatment (Basic)", "price": 1500 },
    { "service": "Crown Restore Spa", "price": 2600 },
    { "service": "Keratin Bliss", "price": 3000 },
    { "service": "Deep Nourish Spa", "price": 1800 },
    { "service": "Pure Roots Spa", "price": 2000 },
    { "service": "Diamond Shine Spa", "price": "3000 onwards" }
  ],
  "Cleanup": [
    { "service": "Fruit Cleanup", "price": 800 },
    { "service": "Gold Cleanup", "price": 1200 },
    { "service": "Silver Cleanup", "price": 1000 },
    { "service": "Insta Cleanup", "price": 850 },
    { "service": "Deep Cleansing", "price": 1110 },
    { "service": "Korean Cleanup", "price": 1500 }
  ],
  "D-Tan & Skin Treatment": [
    { "service": "Glow Treatment", "price": 500 },
    { "service": "Tan Erase Luxe", "price": 700 },
    { "service": "Golden Glow D-Tan", "price": 1000 },
    { "service": "Sunkiss Repair", "price": 1200 },
    { "service": "Aura Bright", "price": 1000 },
    { "service": "Skin Polish Ritual", "price": 1500 },
    { "service": "Crystal Bright D-Tan", "price": 999 },
    { "service": "Full Body Skin Polish", "price": 3000 }
  ],
  "Pedicure & Manicure": [
    { "service": "Classic", "pedicure_price": 600, "manicure_price": 550 },
    { "service": "Premium", "pedicure_price": 1000, "manicure_price": 850 },
    { "service": "Spa", "pedicure_price": 850, "manicure_price": 750 },
    { "service": "Deep Clean", "pedicure_price": 1500, "manicure_price": 1000 },
    { "service": "Hydra Foot Spa", "pedicure_price": 1800, "manicure_price": 1200 },
    { "service": "Signature Manicure", "price": 1100 },
    { "service": "Hand Polish Manicure", "price": 1500 },
    { "service": "Candle", "pedicure_price": 1800, "manicure_price": 1200 },
    { "service": "Ice Cream", "pedicure_price": 2000, "manicure_price": 1300 },
    { "service": "Bubble", "pedicure_price": 1200, "manicure_price": 900 },
    { "service": "Pedi & Medi Combo (Basic)", "price": 1000 },
    { "service": "Premium Pedi & Mani Combo", "price": 1600 }
  ],
  "Facial": [
    { "service": "Fruit (Mixed)", "price": 1200 },
    { "service": "Wine Facial", "price": 1800 },
    { "service": "Shahnaz (Herbal)", "price": 3500 },
    { "service": "Gold Facial (Premium)", "price": 3500 },
    { "service": "Gold Facial (Basic)", "price": 2000 },
    { "service": "O3+ Bridal (DtanFree)", "price": 3800 },
    { "service": "Antiaging Facial", "price": 2500 },
    { "service": "O3+ Shine & Glow", "price": 2500 },
    { "service": "Anti Tan Facial", "price": 2000 },
    { "service": "Banana Facial", "price": 2000 },
    { "service": "Whitening Facial", "price": 1800 },
    { "service": "Silver Tone", "price": 2000 },
    { "service": "Charcoal", "price": 1800 },
    { "service": "Insta Glow", "price": 2000 },
    { "service": "Acne Healing Facial (Ozone)", "price": 2300 },
    { "service": "Galvanic Facial (Fruit)", "price": 2500 },
    { "service": "Natural Fruit Facial", "price": 2000 },
    { "service": "Hydra Facial (Basic)", "price": 2500 },
    { "service": "Korean Facial", "price": 3600 },
    { "service": "Korean & Hydra Facial", "price": 4000 },
    { "service": "Complexion Brightener", "price": 2200 },
    { "service": "Xpress Facial", "price": 1700 }
  ],
  "Medi Facial's & Treatment": [
    { "service": "Oxgeneo Treatment", "price": 4000 },
    { "service": "Korean Whitening", "price": 4500 },
    { "service": "Lacto Peel Treatment", "price": 2000 },
    { "service": "Yellow Peel", "price": 6000 },
    { "service": "Pimple Treatment", "price": 2000 },
    { "service": "Acne Treatment", "price": 4000 },
    { "service": "Bridalglow Therapy", "price": 5600 },
    { "service": "Carbon with Toning (Package)", "price": "25000 onwards" }
  ],
  "Waxing": [
    { "service": "Full Arms", "price": 550 },
    { "service": "Full Legs", "price": "750 onwards" },
    { "service": "Half Legs", "price": 500 },
    { "service": "Under Arms", "price": 200 },
    { "service": "Upper Lip (Peel)", "price": 100 },
    { "service": "Full Face (Peel)", "price": 550 },
    { "service": "Haldi Wax Full Body", "price": 3500 },
    { "service": "White Chocolate (Rica)", "price": 3000 }
  ],
  "Massage Therapy": [
    { "service": "Amora Spa (60 min)", "price": 1600 },
    { "service": "Swedish Spa (60 min)", "price": 2000 },
    { "service": "Head Massage", "price": 500 },
    { "service": "Head Massage with Hair Wash + Blast Dry", "price": 800 },
    { "service": "Herbal Natural Head Massage", "price": 700 },
    { "service": "Head & Shoulder (60 min)", "price": 1500 },
    { "service": "Body Scrub", "price": 1500 },
    { "service": "Body Polishing", "price": 7000 },
    { "service": "Foot Massage (30 min)", "price": 650 },
    { "service": "Foot and Head Massage", "price": 1100 },
    { "service": "Body Steam (20 min)", "price": 1000 }
  ],
  "Bridal & Makeup": [
    { "service": "Saree Dropping", "price": "600 onwards" },
    { "service": "Party Makeup", "price": 3000 },
    { "service": "Bridal Makeup", "price": 20000 },
    { "service": "HD Makeup", "price": 25000 },
    { "service": "Air Brush", "price": 30000 }
  ]
};

async function seedData() {
  console.log("Seeding Men's Services...");
  let inserts = [];
  
  for (const [category, services] of Object.entries(mensMenuData)) {
    for (const service of services) {
      const priceVal = extractNumericPrice(service.price);
      inserts.push({
        name: service.service,
        category: category,
        gender_category: 'Men',
        price: priceVal,
        description: `Price: ${service.price}` // Storing exact string in description for reference if it has "onwards"
      });
    }
  }

  for (const [category, services] of Object.entries(womensMenuData)) {
    for (const service of services as any[]) {
      if (service.pedicure_price !== undefined) {
        inserts.push({
          name: `${service.service} Pedicure`,
          category: category,
          gender_category: 'Women',
          price: service.pedicure_price,
          description: `Price: ${service.pedicure_price}`
        });
        inserts.push({
          name: `${service.service} Manicure`,
          category: category,
          gender_category: 'Women',
          price: service.manicure_price,
          description: `Price: ${service.manicure_price}`
        });
      } else {
        const priceVal = extractNumericPrice(service.price);
        inserts.push({
          name: service.service,
          category: category,
          gender_category: 'Women',
          price: priceVal,
          description: `Price: ${service.price}`
        });
      }
    }
  }

  // Insert in batches to avoid large payloads if necessary, but 200 rows is small enough
  const { data, error } = await supabase
    .from('services')
    .insert(inserts);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log(`Successfully inserted ${inserts.length} services.`);
  }
}

seedData();
