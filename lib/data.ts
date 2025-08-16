export interface Symptom {
  id: string;
  label: string;
}

export interface Product {
  name: string;
  packSize: string;
  dosePerAcre: string;
}

export interface Category {
  categoryName: string;
  symptoms: Symptom[];
  work: string;
  application: string;
  rateOfUse: string;
  products: Product[];
}

export interface DiagnosisData extends Category {}

export const categories: Category[] = [
  {
    categoryName: "SANITIZER / DISINFECTANT",
    symptoms: [
      { id: "redness", label: "Redness on body or fins" },
      { id: "ulcers", label: "Ulcers" },
      { id: "dropsy", label: "Dropsy (bloated body)" },
      { id: "fin_rot", label: "Fin rot and Tail rot" },
      { id: "pop_eye", label: "Pop-eye" },
      { id: "haemorrhage", label: "Haemorrhage (bleeding)" },
      { id: "cottonwool", label: "Cottonwool-like growth" },
      { id: "eus", label: "EUS (Epizootic Ulcerative Syndrome)" },
    ],
    work: "They treat various Bacterial and fungal infections. They are also used as precautionary dose to sanitize ponds from pathogens and increases survival rate of fishes.",
    application:
      "All these medicines are used in water treatment. Mix in 100 litre water and broadcast evenly over the pond.",
    rateOfUse:
      "Used only during bacterial infection. Give 3 doses,repeat dose after every 2 days.",
    products: [
      {
        name: "Benzatec 80",
        packSize: "1 litre",
        dosePerAcre: "1 litre / acre",
      },
      { name: "BKC Gold", packSize: "1 litre", dosePerAcre: "1 litre / acre" },
      { name: "Blesson", packSize: "1 litre", dosePerAcre: "1 litre / acre" },
      { name: "Mizuphor", packSize: "1 litre", dosePerAcre: "1 litre / acre" },
      {
        name: "Profect Plus",
        packSize: "500 gm",
        dosePerAcre: "500 gm / acre",
      },
      {
        name: "Uni Bactnil BKC80%",
        packSize: "1 litre",
        dosePerAcre: "1 litre / acre",
      },
      { name: "KIBA CURE", packSize: "1 litre", dosePerAcre: "500 ml / acre" },
      {
        name: "Funginil",
        packSize: "1 litre / 5 litre",
        dosePerAcre: "1 - 2 litre / acre",
      },
      { name: "KMnO4", packSize: "1 kg", dosePerAcre: "500 gm / acre" },
      {
        name: "CIFAX",
        packSize: "500 ml / 1 litre",
        dosePerAcre: "1 litre / acre",
      },
    ],
  },
  {
    categoryName: "AMMONIA PROBLEM",
    symptoms: [
      { id: "bad_odour", label: "Bad Odour from water" },
      { id: "black_water", label: "Black/dark water" },
      { id: "ammonia_issue", label: "High ammonia readings" },
    ],
    work: "Treatment of ammonia and other gases at the bottom and maintain better water quality.",
    application:
      "Zeolite is used in water treatment whereas Yucca can be used both in water treatment and in oral treatment. Zeolite and Yucca are applied together @20 kg: 1kg.",
    rateOfUse:
      "Used during ammonia problem and for regular use it should be used every month @5 kg per acre",
    products: [
      {
        name: "Aqua Zeolite (Zeolite)",
        packSize: "1 kg",
        dosePerAcre: "25 kg / acre",
      },
      {
        name: "Clinzex DS (Zeolite)",
        packSize: "10 kg",
        dosePerAcre: "20 kg / acre",
      },
      {
        name: "EcoTreat (Yucca)",
        packSize: "500 gm",
        dosePerAcre: "500 gm / acre",
      },
      {
        name: "Yucca Fresh (Yucca)",
        packSize: "1 kg",
        dosePerAcre: "1 kg per acre",
      },
    ],
  },
  {
    categoryName: "GUT PROBIOTIC",
    symptoms: [
      { id: "digestion_problem", label: "Indigestion" },
      { id: "slow_growth", label: "Slow Growth" },
    ],
    work: "It is a mix of various aerobic & anaerobic bacteria which helps in better digestability and clean gut health. Helps in reducing FCR and better growth.",
    application:
      "Gut probiotics are used in oral treatment. Mix in feed and give once a week.",
    rateOfUse:
      "Used during digestion problem and for better growth should be used regularly",
    products: [
      { name: "Aqualact", packSize: "1 kg", dosePerAcre: "10 gm / kg feed" },
      {
        name: "Gut Pro 20x",
        packSize: "100 gm",
        dosePerAcre: "2 gm / kg feed",
      },
    ],
  },
  {
    categoryName: "WATER AND SOIL PROBIOTIC",
    symptoms: [
      { id: "bottom_sludge", label: "Bottom Sludge problem" },
      { id: "weather_changes", label: "Weather changes" },
      { id: "poor_water_quality", label: "Poor water quality" },
      {
        id: "drastic_water_changes",
        label: "Drastic changes on water parameters",
      },
    ],
    work: "Helps in maintaining good water quality by degrading bottom sludge. Regular use of probiotics increases fish production and plankton production.",
    application:
      "The products are used to treat water and soil. Probiotics are generally mixed with molasses and kept over night and then broadcasted evenly over the pond except for Uni Ecosense as it is a unique combination of bacteria which is directly applied in the pond.",
    rateOfUse:
      "Used during poor water quality and for better pond environment and good growth should be used regularly in 15-20 days.",
    products: [
      {
        name: "KIBA Pond Shield",
        packSize: "40 gm",
        dosePerAcre: "5 gm / acre",
      },
      { name: "Uni Ecosense", packSize: "1 kg", dosePerAcre: "200 gm / acre" },
      { name: "Bacitox Plus", packSize: "1 kg", dosePerAcre: "250 gm / acre" },
    ],
  },
  {
    categoryName: "ANTIBIOTICS",
    symptoms: [
      { id: "disease_occurance", label: "Disease occurance" },
      { id: "fish_stocking_antibiotics", label: "Fish stocking" },
      { id: "symptoms_of_infection", label: "Symptoms of infection" },
    ],
    work: "Antibiotics are used to control bacterial, fungal, parasite infections, they are given as an oral treatment at time of disease. Should be used only at time of infection as it inhibits growth of fishes.",
    application:
      "These medicines are mixed in desired amount according to the symptoms of the disease along with a good binder so that the medicines get intact with the feed and doesnot dissolved in the water.",
    rateOfUse:
      "Use only during disease infection. Treatment should be given for 5-7 days.",
    products: [
      {
        name: "Mycosal",
        packSize: "500 ml",
        dosePerAcre: "200 ml / 1000 kg fish biomass",
      },
      {
        name: "Goldiprim",
        packSize: "500 gm",
        dosePerAcre: "200 gm / 1000 kg fish biomass",
      },
      {
        name: "Ectogold",
        packSize: "1 kg",
        dosePerAcre: "250 gm / 1000 kg fish biomass",
      },
      {
        name: "Oxytetracycline",
        packSize: "1 kg",
        dosePerAcre: "200 gm / 1000 kg fish biomass",
      },
    ],
  },
  {
    categoryName: "FEED SUPPLEMENT (IMMUNITY BOOSTERS AND GROWTH PROMOTERS)",
    symptoms: [
      { id: "digestion_problem", label: "Digestion problem" },
      { id: "fish_stocking_feed", label: "Fish stocking" },
      { id: "disease_occurance", label: "Disease occurance" },
      { id: "weather_change", label: "Weather change" },
      { id: "slow_growth", label: "Slow Growth" },
    ],
    work: "Feed supplements are used either as feed attractants, stress removers, growth promoters, immunity boosters or improves digestion. Regular use of  feed suplements help in faster growth and better survival rates.",
    application:
      "These medicines are used in desired amount and given orally. Should be used once a week.",
    rateOfUse:
      "Should be regularly used to improve feed digestability and faster growth.",
    products: [
      { name: "GoldYeast", packSize: "1 kg", dosePerAcre: "10 gm / kg feed" },
      { name: "Liv 52", packSize: "5 litres", dosePerAcre: "25 ml / kg feed" },
      {
        name: "Vitamin C",
        packSize: "1 kg",
        dosePerAcre: "5 - 10 gm / kg feed",
      },
      {
        name: "BioPlus Yeast",
        packSize: "1 kg",
        dosePerAcre: "10 gm / kg feed",
      },
      {
        name: "KIBA POWER",
        packSize: "1 litre",
        dosePerAcre: "2 ml / kg feed",
      },
    ],
  },
  {
    categoryName: "FERMENTATION",
    symptoms: [
      { id: "plankton_growth", label: "Plankton Growth" },
      { id: "poor_water_quality", label: "Poor water quality" },
    ],
    work: "KIBA BSF1 promotes growth of phytoplankton and zooplankton which are used as food by fishes. It also helps in maintaining the water quality parameters.",
    application:
      "Dose per acre - Mixed with 5 - 10 kg Rice Bran, 500 gm Agriculture Lime, 500 gm Rock Salt, 5 - 10 gm KIBA BSF1, 50 gm Baking Soda and 100 litres of water. Ferment for 24 - 36 hours and broadcast.",
    rateOfUse:
      "Should be used regularly (Twice a week) for better plankton growth. Precaution during rainy season and winters as low sunlight can cause oxygen depletion.",
    products: [
      { name: "KIBA BSF1", packSize: "1 kg", dosePerAcre: "5 - 10 gm / acre" },
    ],
  },
  {
    categoryName: "ALGAL BLOOM CONTROL",
    symptoms: [{ id: "algal_bloom", label: "Algal Bloom" }],
    work: "Diashield and Bloomcure act as chemical inhibitor of algal bloom ultimately helping pond from nutrient issue and oxygen problem.",
    application:
      "All these medicines are used in water treatment. Mix in 100 litres of water and spray all over the pond.",
    rateOfUse:
      "Should be used only at the time of algal bloom. At the time of algal bloom doses should be repeated after 1 week for better results.",
    products: [
      {
        name: "Bloomcure",
        packSize: "1 litre / 5 litre",
        dosePerAcre: "2 - 3 litres / acre",
      },
      { name: "Diashield", packSize: "1 kg", dosePerAcre: "1 kg / acre" },
    ],
  },
  {
    categoryName: "ANTIPARASITIC",
    symptoms: [
      { id: "argulus", label: "Argulus" },
      { id: "learnea", label: "Learnea" },
      { id: "dactylogyrus", label: "Dactylogyrus" },
      { id: "gyrodactylus", label: "Gyrodactylus" },
    ],
    work: "Antiparasitic medicines are used to kill aquatic insects in ponds therefore increasing the survival rates of the fishes.",
    application:
      "All these medicines are used in water treatment. Mix in 100 litre water and spray all over the pond.",
    rateOfUse:
      "Should be used only at the time of disease occurance. Precautionary dose should only be used @50 ml per acre.",
    products: [
      {
        name: "Ectocyp",
        packSize: "1 litre",
        dosePerAcre: "100 - 150 ml / acre",
      },
      {
        name: "Clinar",
        packSize: "1 litre",
        dosePerAcre: "100 - 150 ml / acre",
      },
    ],
  },
  {
    categoryName: "OXYGEN ENHANCERS",
    symptoms: [{ id: "oxygen_problem", label: "Oxygen problem" }],
    work: "It is used to enhance oxygen concentration in the pond water.",
    application:
      "Oxygen enhancers are used in pond treatment at the time of oxygen shortage. Tablets are broadcasted all over the pond.",
    rateOfUse:
      "Should only be used at the time of oxygen problems that is at hot and humid nights or during coudy weather.",
    products: [
      { name: "Oxygold", packSize: "1 kg", dosePerAcre: "500 gm / acre" },
    ],
  },
];
