const rings = [
  {
    SKU: 1,
    Title: "Tiffany & Co Somerset Mesh Band",
    EffectiveCost: "$166.50",
    RingSize: 6.75,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Tiffany & Co.",
    src: "./images/ring1.png",
    Price: "$216.45",
    SalePrice: 225,
  },
  {
    SKU: 2,
    Title: "Christian Dada Two-Tone Twisted Band Ring",
    EffectiveCost: "$127.50",
    RingSize: 5.5,
    Metal: "Gold-Plated, Sterling Silver",
    Stone: "-",
    Designer: "Christian Dada",
    src: "./images/ring2.png",
    Price: "$165.75",
    SalePrice: 165,
  },
  {
    SKU: 3,
    Title: "Ring 14K Pearl Cocktail Ring - Square Setting",
    EffectiveCost: "$146.50",
    RingSize: 5.75,
    Metal: "14K Yellow Gold",
    Stone: "Pearl",
    Designer: "Unknown",
    src: "./images/ring3.png",
    Price: "$190.45",
    SalePrice: 200,
  },
  {
    SKU: 4,
    Title: "Ring 14K Pearl Cocktail Ring",
    EffectiveCost: "$154.00",
    RingSize: 5.0,
    Metal: "14K Yellow Gold",
    Stone: "Pearl",
    Designer: "Unknown",
    src: "./images/ring4.png",
    Price: "$200.20",
    SalePrice: 200,
  },
  {
    SKU: 5,
    Title: "14K Band Ring",
    EffectiveCost: "$135.50",
    RingSize: 6.75,
    Metal: "14K White Gold",
    Stone: "-",
    Designer: "Unknown",
    src: "./images/ring5.png",
    Price: "$176.15",
    SalePrice: 175,
  },
  {
    SKU: 6,
    Title: "Tiffany & Co 1837 Band",
    EffectiveCost: "$96.50",
    RingSize: 5.5,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Tiffany & Co.",
    src: "./images/ring6.png",
    Price: "$125.45",
    SalePrice: 125,
  },
  {
    SKU: 7,
    Title: "14K Tourmaline Band",
    EffectiveCost: "$206.50",
    RingSize: 8.0,
    Metal: "14K Yellow Gold",
    Stone: "Tourmaline",
    Designer: "Unknown",
    src: "./images/ring7.png",
    Price: "$268.45",
    SalePrice: 275,
  },
  {
    SKU: 8,
    Title: "14k Onyx & Diamond Cocktail Ring",
    EffectiveCost: "$206.50",
    RingSize: 6.5,
    Metal: "14K Yellow Gold",
    Stone: "Onyx, Diamond",
    Designer: "Unknown",
    src: "./images/ring8.png",
    Price: "$268.45",
    SalePrice: 350,
  },
  {
    SKU: 9,
    Title: "14K Amethyst & Dyed Jadeite Hololith Band Ring",
    EffectiveCost: "$247.75",
    RingSize: 8.75,
    Metal: "14K Yellow Gold",
    Stone: "Amethyst, Jade",
    Designer: "Unknown",
    src: "./images/ring9.png",
    Price: "$322.00",
    SalePrice: 375,
  },
  {
    SKU: 10,
    Title: "Bvlgari 18k B.Zero Ring",
    EffectiveCost: "$367.58",
    RingSize: 5.75,
    Metal: "18K Yellow Gold",
    Stone: "-",
    Designer: "Bvlgari",
    src: "./images/ring10.png",
    Price: "$478.25",
    SalePrice: 500,
  },
  {
    SKU: 11,
    Title: "James Avery Sterling Silver Wide Crosslet Ring",
    EffectiveCost: "$64.50",
    RingSize: 6.5,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "James Avery",
    src: "./images/ring11.png",
    Price: "$83.85",
    SalePrice: 85,
  },
  {
    SKU: 12,
    Title: "Stephen Dweck Bronze & Amethyst Ring",
    EffectiveCost: "$106.50",
    RingSize: 6.5,
    Metal: "Bronze",
    Stone: "Amethyst",
    Designer: "Stephen Dweck",
    src: "./images/ring12.png",
    Price: "$138.45",
    SalePrice: 150,
  },
  {
    SKU: 13,
    Title: "John Hardy Sterling Silver Kali Band",
    EffectiveCost: "$83.50",
    RingSize: 9.0,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "John Hardy",
    src: "./images/ring13.png",
    Price: "$108.55",
    SalePrice: 125,
  },
  {
    SKU: 14,
    Title: "Retrouvai 14K Diamond Cocktail Ring",
    EffectiveCost: "$189.50",
    RingSize: 7.0,
    Metal: "14K Yellow Gold",
    Stone: "Diamond",
    Designer: "Retrouvai",
    src: "./images/ring14.png",
    Price: "$246.35",
    SalePrice: 275,
  },
  {
    SKU: 15,
    Title: "Cartier 18K Love Ring",
    EffectiveCost: "$747.50",
    RingSize: 5.5,
    Metal: "18K Yellow Gold",
    Stone: "-",
    Designer: "Cartier",
    src: "./images/ring15.png",
    Price: "$971.75",
    SalePrice: 1000,
  },
  {
    SKU: 16,
    Title: "Pianegonda Sterling Silver Ring",
    EffectiveCost: "$128.50",
    RingSize: 6.5,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Pianegonda",
    src: "./images/ring16.png",
    Price: "$167.05",
    SalePrice: 200,
  },
  {
    SKU: 17,
    Title: "Pianegonda Sterling Silver & Quartz Ring",
    EffectiveCost: "$133.50",
    RingSize: 5.5,
    Metal: "Sterling Silver",
    Stone: "Quartz",
    Designer: "Pianegonda",
    src: "./images/ring17.png",
    Price: "$173.70",
    SalePrice: 200,
  },
  {
    SKU: 18,
    Title: "Corneilia Webb Molded Finger Ring",
    EffectiveCost: "$67.12",
    RingSize: 6.5,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Corneilia Webb",
    src: "./images/ring18.png",
    Price: "$87.25",
    SalePrice: 125,
  },
  {
    SKU: 19,
    Title: "Jadeite Band",
    EffectiveCost: "$52.68",
    RingSize: 8.0,
    Metal: "-",
    Stone: "Jade",
    Designer: "Unknown",
    src: "./images/ring19.png",
    Price: "$68.48",
    SalePrice: 65,
  },
  {
    SKU: 20,
    Title: "Gurhan Citrine Skittle Ring",
    EffectiveCost: "$149.58",
    RingSize: 7.0,
    Metal: "Sterling Silver, 24K Yellow Gold",
    Stone: "Citrine",
    Designer: "Gurhan",
    src: "./images/ring20.png",
    Price: "$194.45",
    SalePrice: 225,
  },
  {
    SKU: 21,
    Title: "Gurhan Topaz Band",
    EffectiveCost: "$149.58",
    RingSize: 6.5,
    Metal: "Sterling Silver, 22K Yellow Gold",
    Stone: "Topaz",
    Designer: "Gurhan",
    src: "./images/ring21.png",
    Price: "$194.45",
    SalePrice: 225,
  },
  {
    SKU: 22,
    Title: "Gucci Wide Cutout Band",
    EffectiveCost: "$129.58",
    RingSize: 8.5,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Gucci",
    src: "./images/ring22.png",
    Price: "$168.45",
    SalePrice: 200,
  },
  {
    SKU: 23,
    Title: "Misa Jewelry 14k Diamond Beak Ring",
    EffectiveCost: "$193.58",
    RingSize: 7.0,
    Metal: "14K Yellow Gold",
    Stone: "Diamond",
    Designer: "Misa",
    src: "./images/ring23.png",
    Price: "$251.65",
    SalePrice: 250,
  },
  {
    SKU: 24,
    Title: "Yves Saint Laurent Spiral Ring",
    EffectiveCost: "$133.58",
    RingSize: 8.0,
    Metal: "Sterling Silver",
    Stone: "-",
    Designer: "Yves Saint Laurent",
    src: "./images/ring24.png",
    Price: "$173.65",
    SalePrice: 175,
  },
];

export default rings;
