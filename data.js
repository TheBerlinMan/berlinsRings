const rings = [
  {
    sku: 1.0,
    title: "Tiffany & Co Somerset Mesh Band",
    effectiveCost: "$166.50",
    ring: 6.75,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Tiffany & Co.",
    src: "./images/ring1.png",
    price30percent: "$216.45",
    maybe: 225.0,
    price20percent: "$199.80",
    salePrice: 200,
  },
  {
    sku: 2.0,
    title: "Christian Dada Two-Tone Twisted Band Ring",
    effectiveCost: "$127.50",
    ring: 5.5,
    metal: "Gold-Plated, Sterling Silver",
    stone: "-",
    designer: "Christian Dada",
    src: "./images/ring2.png",
    price30percent: "$165.75",
    maybe: 165.0,
    price20percent: "$153.00",
    salePrice: 153,
  },
  {
    sku: 3.0,
    title: "Ring 14K Pearl Cocktail Ring - Square Setting",
    effectiveCost: "$146.50",
    ring: 5.75,
    metal: "14K Yellow Gold",
    stone: "Pearl",
    designer: "Unknown",
    src: "./images/ring3.png",
    price30percent: "$190.45",
    maybe: 200.0,
    price20percent: "$175.80",
    salePrice: 176,
  },
  {
    sku: 4.0,
    title: "Ring 14K Pearl Cocktail Ring",
    effectiveCost: "$154.00",
    ring: 5.0,
    metal: "14K Yellow Gold",
    stone: "Pearl",
    designer: "Unknown",
    src: "./images/ring4.png",
    price30percent: "$200.20",
    maybe: 200.0,
    price20percent: "$184.80",
    salePrice: 185,
  },
  {
    sku: 5.0,
    title: "14K Band Ring",
    effectiveCost: "$135.50",
    ring: 6.75,
    metal: "14K White Gold",
    stone: "-",
    designer: "Unknown",
    src: "./images/ring5.png",
    price30percent: "$176.15",
    maybe: 175.0,
    price20percent: "$162.60",
    salePrice: 163,
  },
  {
    sku: 6.0,
    title: "Tiffany & Co 1837 Band",
    effectiveCost: "$96.50",
    ring: 5.5,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Tiffany & Co.",
    src: "./images/ring6.png",
    price30percent: "$125.45",
    maybe: 125.0,
    price20percent: "$115.80",
    salePrice: 116,
  },
  {
    sku: 7.0,
    title: "14K Tourmaline Band",
    effectiveCost: "$206.50",
    ring: 8.0,
    metal: "14K Yellow Gold",
    stone: "Tourmaline",
    designer: "Unknown",
    src: "./images/ring7.png",
    price30percent: "$268.45",
    maybe: 275.0,
    price20percent: "$247.80",
    salePrice: 248,
  },
  {
    sku: 8.0,
    title: "14k Onyx & Diamond Cocktail Ring",
    effectiveCost: "$206.50",
    ring: 6.5,
    metal: "14K Yellow Gold",
    stone: "Onyx, Diamond",
    designer: "Unknown",
    src: "./images/ring8.png",
    price30percent: "$268.45",
    maybe: 350.0,
    price20percent: "$247.80",
    salePrice: 248,
  },
  {
    sku: 9.0,
    title: "14K Amethyst & Dyed Jadeite Hololith Band Ring",
    effectiveCost: "$247.75",
    ring: 8.75,
    metal: "14K Yellow Gold",
    stone: "Jade, Amethyst",
    designer: "Unknown",
    src: "./images/ring9.png",
    price30percent: "$322.08",
    maybe: 275.0,
    price20percent: "$297.30",
    salePrice: 298,
  },
  {
    sku: 10.0,
    title: "14K Loop Band",
    effectiveCost: "$133.75",
    ring: 7.0,
    metal: "14K White Gold",
    stone: "-",
    designer: "Unknown",
    src: "./images/ring10.png",
    price30percent: "$173.88",
    maybe: 175.0,
    price20percent: "$160.50",
    salePrice: 161,
  },
  {
    sku: 11.0,
    title: "Ring 14K Emerald Band",
    effectiveCost: "$353.50",
    ring: 7.0,
    metal: "14K Yellow Gold",
    stone: "Emerald",
    designer: "Unknown",
    src: "./images/ring11.png",
    price30percent: "$459.55",
    maybe: 500.0,
    price20percent: "$424.20",
    salePrice: 425,
  },
  {
    sku: 12.0,
    title: "18K Diamond Cocktail Ring",
    effectiveCost: "$236.00",
    ring: 7.0,
    metal: "18K Yellow Gold",
    stone: "Diamond",
    designer: "Unknown",
    src: "./images/ring12.png",
    price30percent: "$306.80",
    maybe: 300.0,
    price20percent: "$283.20",
    salePrice: 284,
  },
  {
    sku: 13.0,
    title: "Tagliamonte Mother of Pearl Venetion Ring",
    effectiveCost: "$116.00",
    ring: 9.75,
    metal: "Sterling Silver, 18K Yellow Gold ",
    stone: "Venetian Glass, Mother of Pearl",
    designer: "Tagliamonte",
    src: "./images/ring13.png",
    price30percent: "$150.80",
    maybe: 250.0,
    price20percent: "$139.20",
    salePrice: 140,
  },
  {
    sku: 14.0,
    title: "14K Tourmaline Band",
    effectiveCost: "$101.50",
    ring: 9.75,
    metal: "14K Yellow Gold",
    stone: "Tourmaline Beads",
    designer: "Unknown",
    src: "./images/ring14.png",
    price30percent: "$131.95",
    maybe: 150.0,
    price20percent: "$121.80",
    salePrice: 122,
  },
  {
    sku: 15.0,
    title: "14K Ruby & Diamond Cocktail Ring",
    effectiveCost: "$94.50",
    ring: 5.5,
    metal: "14K Yellow Gold",
    stone: "Ruby, Diamond",
    designer: "Unknown",
    src: "./images/ring15.png",
    price30percent: "$122.85",
    maybe: 200.0,
    price20percent: "$113.40",
    salePrice: 114,
  },
  {
    sku: 16.0,
    title: "I. Reiss 14K Prasiolite Cocktail Ring",
    effectiveCost: "$318.62",
    ring: 7.0,
    metal: "14K Yellow Gold",
    stone: "Prasiolite",
    designer: "I. Reiss",
    src: "./images/ring16.png",
    price30percent: "$414.20",
    maybe: 450.0,
    price20percent: "$382.34",
    salePrice: 383,
  },
  {
    sku: 17.0,
    title: "Pianegonda Smokey Quartz Ring",
    effectiveCost: "$133.62",
    ring: 7.0,
    metal: "Sterling Silver",
    stone: "Quartz",
    designer: "Pianegonda",
    src: "./images/ring17.png",
    price30percent: "$173.70",
    maybe: 200.0,
    price20percent: "$160.34",
    salePrice: 161,
  },
  {
    sku: 18.0,
    title: "Corneilia Webb Molded Finger Ring",
    effectiveCost: "$67.12",
    ring: 6.5,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Corneilia Webb",
    src: "./images/ring18.png",
    price30percent: "$87.25",
    maybe: 125.0,
    price20percent: "$80.54",
    salePrice: 81,
  },
  {
    sku: 19.0,
    title: "Jadeite Band",
    effectiveCost: "$52.68",
    ring: 8.0,
    metal: "-",
    stone: "Jade",
    designer: "Unknown",
    src: "./images/ring19.png",
    price30percent: "$68.48",
    maybe: 65.0,
    price20percent: "$63.21",
    salePrice: 64,
  },
  {
    sku: 20.0,
    title: "Gurhan Citrine Skittle Ring",
    effectiveCost: "$149.58",
    ring: 7.0,
    metal: "Sterling Silver, 24K Yellow Gold",
    stone: "Citrine",
    designer: "Gurhan",
    src: "./images/ring20.png",
    price30percent: "$194.45",
    maybe: 225.0,
    price20percent: "$179.49",
    salePrice: 180,
  },
  {
    sku: 21.0,
    title: "Gurhan Topaz Band",
    effectiveCost: "$149.58",
    ring: 6.5,
    metal: "Sterling Silver, 22K Yellow Gold",
    stone: "Topaz",
    designer: "Gurhan",
    src: "./images/ring21.png",
    price30percent: "$194.45",
    maybe: 225.0,
    price20percent: "$179.49",
    salePrice: 180,
  },
  {
    sku: 22.0,
    title: "Gucci Wide Cutout Band",
    effectiveCost: "$129.58",
    ring: 8.5,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Gucci",
    src: "./images/ring22.png",
    price30percent: "$168.45",
    maybe: 200.0,
    price20percent: "$155.49",
    salePrice: 156,
  },
  {
    sku: 23.0,
    title: "Misa Jewelry 14k Diamond Beak Ring",
    effectiveCost: "$193.58",
    ring: 7.0,
    metal: "14K Yellow Gold",
    stone: "Diamond",
    designer: "Misa",
    src: "./images/ring23.png",
    price30percent: "$251.65",
    maybe: 250.0,
    price20percent: "$232.29",
    salePrice: 233,
  },
  {
    sku: 24.0,
    title: "Yves Saint Laurent Spiral Ring",
    effectiveCost: "$133.58",
    ring: 8.0,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Yves Saint Laurent",
    src: "./images/ring24.png",
    price30percent: "$173.65",
    maybe: 175.0,
    price20percent: "$160.29",
    salePrice: 161,
  },
  {
    sku: 25.0,
    title: "Onyx Opal Diamond 10k Gold Ring ",
    effectiveCost: "$252.08",
    ring: 7.25,
    metal: "10K Yellow Gold",
    stone: "Opal, Diamond, Onyx",
    designer: "Unknown",
    src: "./images/ring25.png",
    price30percent: "$327.71",
    maybe: 300.0,
    price20percent: "$302.50",
    salePrice: 303,
  },
  {
    sku: 26.0,
    title: "Zuni Sterling Silver Turquoise Ring",
    effectiveCost: "$23.04",
    ring: 6.5,
    metal: "Sterling Silver",
    stone: "Turquoise",
    designer: "Unknown",
    src: "./images/ring26.png",
    price30percent: "$29.95",
    maybe: 30.0,
    price20percent: "$27.65",
    salePrice: 28,
  },
  {
    sku: 27.0,
    title: "Sterling Silver Band Ring",
    effectiveCost: "23.83",
    ring: 6.0,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Unknown",
    src: "./images/ring27.png",
    price30percent: "30.979",
    maybe: 30.0,
    price20percent: "28.596",
    salePrice: 29,
  },
  {
    sku: 28.0,
    title: "Baroque Pearl and Sapphire Ring",
    effectiveCost: "331.65",
    ring: 8.0,
    metal: "14K Yellow Gold",
    stone: "Natural Pearl, Sapphire",
    designer: "Unknown",
    src: "./images/ring28.png",
    price30percent: "431.145",
    maybe: 450.0,
    price20percent: "397.98",
    salePrice: 398,
  },
  {
    sku: 29.0,
    title: "Silver Fidget Ring",
    effectiveCost: "40",
    ring: 6.5,
    metal: "Sterling Silver",
    stone: "- ",
    designer: "Unknown",
    src: "./images/ring29.png",
    price30percent: "52",
    maybe: 60.0,
    price20percent: "48",
    salePrice: 48,
  },
  {
    sku: 30.0,
    title: "Mother of Pearl Ring",
    effectiveCost: "21",
    ring: 5.75,
    metal: "Sterling Silver",
    stone: "Mother of Pearl",
    designer: "Unknown",
    src: "./images/ring30.png",
    price30percent: "27.3",
    maybe: 30.0,
    price20percent: "25.2",
    salePrice: 26,
  },
  {
    sku: 31.0,
    title: "Georg Jensen",
    effectiveCost: "282.72",
    ring: 5.0,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Georg Jensen",
    src: "./images/ring31.png",
    price30percent: "367.536",
    maybe: 300.0,
    price20percent: "339.264",
    salePrice: 340,
  },
  {
    sku: 32.0,
    title: "Tangerine Stone",
    effectiveCost: "32.12",
    ring: 8.5,
    metal: "Sterling Silver",
    stone: "Citrine",
    designer: "Unknown",
    src: "./images/ring32.png",
    price30percent: "41.756",
    maybe: 50.0,
    price20percent: "38.544",
    salePrice: 39,
  },
  {
    sku: 33.0,
    title: "Zuni Sterling Silver Turquoise Ring",
    effectiveCost: "106.87",
    ring: 9.5,
    metal: "Sterling Silver",
    stone: "Turquoise",
    designer: "Unknown",
    src: "./images/ring33.png",
    price30percent: "138.931",
    maybe: 125.0,
    price20percent: "128.244",
    salePrice: 129,
  },
  {
    sku: 34.0,
    title: "Black and Blue Ring",
    effectiveCost: "60.87",
    ring: 6.75,
    metal: "Sterling Silver",
    stone: "Unknown",
    designer: "Unknown",
    src: "./images/ring34.png",
    price30percent: "79.131",
    maybe: 55.0,
    price20percent: "73.044",
    salePrice: 74,
  },
  {
    sku: 35.0,
    title: "Zuni Inlay Sterling Silver",
    effectiveCost: "103.92",
    ring: 7.5,
    metal: "Sterling Silver",
    stone: "Turquoise, Mother of Pearl, Coral, Onyx",
    designer: "Unknown",
    src: "./images/ring35.png",
    price30percent: "135.096",
    maybe: 125.0,
    price20percent: "124.704",
    salePrice: 125,
  },
  {
    sku: 36.0,
    title: "Onyx Ring",
    effectiveCost: "0",
    ring: 8.5,
    metal: "Sterling Silver",
    stone: "Onyx",
    designer: "Unknown",
    src: "./images/ring36.png",
    price30percent: "0",
    maybe: 30.0,
    price20percent: "30",
    salePrice: 30,
  },
  {
    sku: 37.0,
    title: "MOP Ring",
    effectiveCost: "0",
    ring: 9.0,
    metal: "Sterling Silver",
    stone: "Mother of Pearl",
    designer: "Unknown",
    src: "./images/ring37.png",
    price30percent: "0",
    maybe: 45.0,
    price20percent: "45",
    salePrice: 45,
  },
  {
    sku: 38.0,
    title: "Silver Band",
    effectiveCost: "30",
    ring: 5.5,
    metal: "Sterling Silver",
    stone: "-",
    designer: "Unknown",
    src: "./images/ring38.png",
    price30percent: "39",
    maybe: 40.0,
    price20percent: "35",
    salePrice: 35,
  },
  {
    sku: 39.0,
    title: "Milky Stone Ring",
    effectiveCost: "0",
    ring: 8.0,
    metal: "Sterling Silver",
    stone: "Unknown",
    designer: "Unknown",
    src: "./images/ring39.png",
    price30percent: "0",
    maybe: 45.0,
    price20percent: "45",
    salePrice: 45,
  },
  {
    sku: 40.0,
    title: "Silver Ring",
    effectiveCost: "25",
    ring: 5.5,
    metal: "Sterling Silver",
    stone: "Unknown",
    designer: "Unknown",
    src: "./images/ring40.png",
    price30percent: "32.5",
    maybe: 30.0,
    price20percent: "30",
    salePrice: 30,
  },
  {
    sku: 41.0,
    title: "Amber Stone Ring",
    effectiveCost: "0",
    ring: 8.75,
    metal: "Sterling Silver",
    stone: "Amber",
    designer: "Unknown",
    src: "./images/ring41.png",
    price30percent: "0",
    maybe: 75.0,
    price20percent: "80",
    salePrice: 80,
  },
  {
    sku: 42.0,
    title: "Coral Ring",
    effectiveCost: "0",
    ring: 8.0,
    metal: "Sterling Silver",
    stone: "Red Coral",
    designer: "Unknown",
    src: "./images/ring42.png",
    price30percent: "0",
    maybe: 60.0,
    price20percent: "60",
    salePrice: 60,
  },
  {
    sku: null,
    title: null,
    effectiveCost: "$5,183.48",
    ring: null,
    metal: null,
    stone: null,
    designer: null,
    src: null,
    price30percent: null,
    maybe: null,
    price20percent: "$6,479.18",
    salePrice: 6480,
  },
];

export default rings;
