// productCatalog.js
// Starter catalogue for Beauty Inspo.
// Important: links/images are filled only when a reliable official Sephora URL is available.
// Empty country fields mean: not verified yet. Do not replace them with fake links.

// =============================
// PRODUCT CATALOG
// =============================

const DEFAULT_PRODUCT_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23999'%3ENo image%3C/text%3E%3C/svg%3E";

function skuImage(sku) {
  return sku
    ? `https://www.sephora.com/productimages/sku/${sku}-main-zoom.jpg?imwidth=315`
    : "";
}

function countryLinks(links = {}) {
  return {
    US: "",
    CA: "",
    FR: "",
    UK: "",
    AU: "",
    BR: "",
    ...links
  };
}

function productData({
  category,
  brand,
  name,
  type = "",
  sizes = [],
  image = "",
  images = {},
  links = {},
  alternatives = {}
}) {
  const finalImage =
    image ||
    images.US ||
    images.CA ||
    images.FR ||
    images.UK ||
    images.AU ||
    images.BR ||
    DEFAULT_PRODUCT_IMAGE;

  return {
    category,
    brand,
    name,
    type,
    sizes,
    image: finalImage,
    images: {
      US: images.US || image || "",
      CA: images.CA || image || "",
      FR: images.FR || image || "",
      UK: images.UK || image || "",
      AU: images.AU || image || "",
      BR: images.BR || image || ""
    },
    links: {
      US: links.US || "",
      CA: links.CA || "",
      FR: links.FR || "",
      UK: links.UK || "",
      AU: links.AU || "",
      BR: links.BR || ""
    },
    alternatives
  };
}

const PRODUCT_CATALOG = {
  
  // -------------------------
  // PRIMERS / BASES
  // -------------------------
  const countryLinks = (links = {}) => ({
  US: "",
  CA: "",
  FR: "",
  UK: "",
  AU: "",
  BR: "",
  ...links
});

const facePrimers = {
  fentyGripTripHydratingPrimer: productData({
    category: "Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Grip Trip Hydrating Primer",
    type: "Hydrating / gripping primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2865285-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-grip-trip-hydrating-primer-P517850",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-grip-trip-hydrating-primer-P517850",
      FR: "https://www.sephora.fr/p/grip-trip---base-de-teint-hydratante-et-repulpante-P10062743.html",
      AU: "https://www.sephora.com.au/products/fenty-beauty-grip-trip-hydrating-primer",
      BR: "https://www.sephora.com.br/primer-fenty-beauty-grip-trip-hydrating-88994299-88994299.html"
    }),
    alternatives: {
      UK: "bobbiBrownVitaminEnrichedFaceBase"
    }
  }),

  hudaEasyBlurPrimer: productData({
    category: "Primer",
    brand: "HUDA BEAUTY",
    name: "Easy Blur Silicone-Free Smoothing & Pore-Minimizing Primer",
    type: "Blurring / pore-minimizing primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2888931-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/huda-beauty-easy-blur-silicone-free-smoothing-primer-P512639",
      CA: "https://www.sephora.com/ca/en/product/P512639",
      FR: "https://www.sephora.fr/p/easy-blur-base-de-teint-lissante-sans-silicone-P10060172.html",
      UK: "https://www.sephora.co.uk/p/huda-beauty-easy-blur-silicone-free-smoothing-primer",
      AU: "https://www.sephora.com.au/products/huda-beauty-easy-blur-silicon-free-smoothing-primer"
    }),
    alternatives: {
      BR: "rareBeautyPoreDiffusingPrimer"
    }
  }),

  rareBeautyPoreDiffusingPrimer: productData({
    category: "Primer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Always An Optimist Pore Diffusing Primer",
    type: "Pore-blurring / hydrating primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2448124-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-always-an-optimist-pore-diffusing-primer-P471075",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-mini-always-an-optimist-pore-diffusing-primer-P471075",
      FR: "https://www.sephora.fr/p/always-an-optimist-pore-diffusing---base-de-teint-P10018046.html",
      UK: "https://www.sephora.co.uk/p/rare-beauty-always-an-optimist-pore-diffusing-primer",
      AU: "https://www.sephora.com.au/products/rare-beauty-always-an-optimist-pore-diffusing-primer",
      BR: "https://www.sephora.com.br/Primer-Pore-Rare-Beauty-Always-an-Optimist-Pore-Diffusing-Primer-44990361-44990361.html"
    })
  }),

  makeUpForEverStep1HydraBoosterPrimer: productData({
    category: "Primer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Hydra Booster",
    type: "Hydrating / radiant primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2424695-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-hydra-booster-P468184",
      CA: "https://www.sephora.com/ca/en/product/make-up-for-ever-step-1-primer-hydra-booster-P468184"
    }),
    alternatives: {
      FR: "fentyGripTripHydratingPrimer",
      UK: "bobbiBrownVitaminEnrichedFaceBase",
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  }),

  tarteBallinBasePorelessPrimer: productData({
    category: "Primer",
    brand: "tarte",
    name: "Ballin' base™ poreless primer",
    type: "Hydrating / smoothing primer",
    sizes: ["mini", "standard"],
    image: "https://media.sephora.eu/content/dam/digital/pim/published/T/TARTE/803610/399888-media_swatch-0.jpg?",
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/tarte-base-tape-hydrating-primer-P471805",
      FR: "https://www.sephora.fr/p/ballin-base%E2%84%A2-poreless-primer---base-de-teint-floutante-P1000213424.html"
    }),
    alternatives: {
      US: "fentyGripTripHydratingPrimer",
      UK: "bobbiBrownVitaminEnrichedFaceBase",
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  }),

  beautyblenderBoostPrimer: productData({
    category: "Primer",
    brand: "Beautyblender",
    name: "BOOST™ 18-Hour Firming & Smoothing Peptide + Ceramide Primer",
    type: "Firming / smoothing / hydrating primer",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2665024-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/beautyblender-boost-hydrating-smoothing-primer-P505670"
    }),
    alternatives: {
      US: "lawlessForgetTheFillerPrimer",
      FR: "fentyGripTripHydratingPrimer",
      UK: "bobbiBrownVitaminEnrichedFaceBase",
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  }),

  lawlessForgetTheFillerPrimer: productData({
    category: "Primer",
    brand: "LAWLESS",
    name: "Forget The Filler Skin-Plumping Line-Smoothing Moisturizer + Makeup Primer",
    type: "Plumping / moisturizing primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2694677-main-zoom.jpg?imwidth=630",
    links: countryLinks({
      US: "https://www.sephora.com/product/forget-filler-skin-plumping-line-smoothing-moisturizer-makeup-primer-P507153",
      CA: "https://www.sephora.com/ca/en/product/forget-filler-skin-plumping-line-smoothing-moisturizer-makeup-primer-P507153"
    }),
    alternatives: {
      FR: "bobbiBrownVitaminEnrichedFaceBase",
      UK: "bobbiBrownVitaminEnrichedFaceBase",
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  }),

  smashboxPhotoFinishSmoothBlurPrimer: productData({
    category: "Primer",
    brand: "Smashbox",
    name: "Photo Finish Smooth & Blur Oil-Free Foundation Primer",
    type: "Smoothing / blurring primer",
    sizes: ["mini", "standard", "value"],
    image: "https://www.sephora.com/productimages/sku/s1349968-main-zoom.jpg?imwidth=630",
    links: countryLinks({
      US: "https://www.sephora.com/product/photo-finish-foundation-primer-P9889",
      CA: "https://www.sephora.com/ca/en/product/photo-finish-foundation-primer-P9889"
    }),
    alternatives: {
      FR: "sephoraCollectionSmoothBlurPrimer",
      UK: "milkPoreEclipsePrimer",
      AU: "milkPoreEclipsePrimer",
      BR: "rareBeautyPoreDiffusingPrimer"
    }
  }),

  milkPoreEclipsePrimer: productData({
    category: "Primer",
    brand: "MILK MAKEUP",
    name: "Pore Eclipse Mattifying + Blurring Makeup Primer with Niacinamide",
    type: "Mattifying / blurring primer",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2572857-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/milk-makeup-pore-eclipse-liquid-primer-P483674",
      CA: "https://www.sephora.com/ca/en/product/milk-makeup-pore-eclipse-liquid-primer-P483674",
      FR: "https://www.sephora.fr/p/pore-eclipse-mattifying-blurring-makeup-primer-P10033920.html",
      UK: "https://www.sephora.co.uk/p/milk-makeup-pore-eclipse-mattyfing-primer",
      AU: "https://www.sephora.com.au/products/milk-makeup-pore-eclipse-mattifying-primer"
    }),
    alternatives: {
      BR: "rareBeautyPoreDiffusingPrimer"
    }
  }),

  bobbiBrownVitaminEnrichedFaceBase: productData({
    category: "Primer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
    type: "Moisturizing / priming base",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s1292820-main-zoom.jpg?imwidth=630",
    links: countryLinks({
      US: "https://www.sephora.com/product/vitamin-enriched-face-base-P270594",
      CA: "https://www.sephora.com/ca/en/product/vitamin-enriched-face-base-P270594",
      FR: "https://www.sephora.fr/p/vitamin-enriched-face-base---base-de-maquillage-vitaminee-P47312.html",
      UK: "https://www.sephora.co.uk/brands/bobbi-brown/vitamin-enriched-face-base"
    }),
    alternatives: {
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  })
};

// -------------------------
  // FOUNDATIONS / FONDS DE TEINT 
  // -------------------------

  patrickTaMajorSkinCremeFoundationDuo: productData({
    category: "Foundation",
    brand: "PATRICK TA",
    name: "Major Skin Crème Foundation and Finishing Powder Duo",
    type: "Cream foundation and finishing powder duo",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2607398-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2607398-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2607398-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/major-skin-creme-powder-foundation-duo-P502039",
      CA: "https://www.sephora.com/ca/en/product/major-skin-creme-powder-foundation-duo-P502039"
    }),
    alternatives: {
      FR: "charlotteTilburyBeautifulSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  liseWatierTeintMultiFiniCompactFoundation: productData({
    category: "Foundation",
    brand: "Lise Watier",
    name: "Teint Multi-Fini Oil-Free Compact Foundation",
    type: "Oil-free compact powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2133213-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2133213-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/teint-multi-fini-oil-free-compact-foundation-P435761"
    }),
    alternatives: {
      US: "bareMineralsBareProPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  patrickTaHydraLuxeFoundation: productData({
    category: "Foundation",
    brand: "PATRICK TA",
    name: "Major Skin Hydra-Luxe Luminous Skin Perfecting Foundation For Natural Glow",
    type: "Luminous / skin-perfecting foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2793578-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2793578-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2793578-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/patrick-ta-major-skin-hydra-luxe-luminous-skin-perfecting-foundation-for-natural-glow-P513075",
      CA: "https://www.sephora.com/ca/en/product/patrick-ta-major-skin-hydra-luxe-luminous-skin-perfecting-foundation-for-natural-glow-P513075"
    }),
    alternatives: {
      FR: "charlotteTilburyBeautifulSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  basmaFoundationStick: productData({
    category: "Foundation",
    brand: "BASMA",
    name: "The Foundation Stick for Hydrating, Buildable Coverage and Natural Finish",
    type: "Hydrating foundation stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2681427-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2681427-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2681427-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/the-foundation-stick-P505428",
      CA: "https://www.sephora.com/ca/en/product/the-foundation-stick-P505428"
    }),
    alternatives: {
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  bareMineralsBareProPowderFoundation: productData({
    category: "Foundation",
    brand: "bareMinerals",
    name: "BAREPRO® 24HR Skin Perfecting Talc-Free Matte Powder Foundation",
    type: "Matte powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2850006-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2850006-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2850006-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/barepro-tm-24hr-skin-perfecting-talc-free-matte-powder-foundation-P514907",
      CA: "https://www.sephora.com/ca/en/product/barepro-tm-24hr-skin-perfecting-talc-free-matte-powder-foundation-P514907"
    }),
    alternatives: {
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  bareMineralsOriginalLoosePowderFoundation: productData({
    category: "Foundation",
    brand: "bareMinerals",
    name: "Original Loose Talc-Free Powder Mineral Foundation SPF 15",
    type: "Loose mineral powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1228998-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s1228998-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s1228998-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/bareminerals-original-foundation-broad-spectrum-spf-15-P61003",
      CA: "https://www.sephora.com/ca/en/product/bareminerals-original-foundation-P520059"
    }),
    alternatives: {
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  oneSizeTurnUpTheBasePowderFoundation: productData({
    category: "Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up The Base Versatile Powder Foundation",
    type: "Versatile powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2426930-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2426930-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2426930-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-versatile-powder-foundation-P469953",
      CA: "https://www.sephora.com/ca/en/product/one-size-by-patrick-starrr-turn-up-base-versatile-powder-foundation-P469953"
    }),
    alternatives: {
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tarteAmazonianClayFoundation: productData({
    category: "Foundation",
    brand: "tarte",
    name: "Amazonian Clay 16-Hour Full Coverage Soft Matte Foundation",
    type: "Full coverage / soft matte foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2476216-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2476216-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2476216-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/tarte-amazonian-clay-16-hour-full-coverage-foundation-P473821",
      CA: "https://www.sephora.com/ca/en/product/tarte-amazonian-clay-16-hour-full-coverage-foundation-P473821"
    }),
    alternatives: {
      FR: "tarteFaceTapeFoundation",
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tarteShapeTapeFoundationConcealerStick: productData({
    category: "Foundation",
    brand: "tarte",
    name: "shape tape™ Blurring Foundation and Concealer Stick",
    type: "Foundation and concealer stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2869865-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2869865-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2869865-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/shape-tape-tm-blur-concealer-stick-P515882",
      CA: "https://www.sephora.com/ca/en/product/shape-tape-tm-blur-concealer-stick-P515882"
    }),
    alternatives: {
      FR: "charlotteTilburyUnrealSkinStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverHdSkinMatteVelvetPowder: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Matte Velvet Blurring Powder Foundation",
    type: "Matte blurring powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2671410-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2671410-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/make-up-for-ever-hd-skin-matte-velvet-powder-foundation-P504432"
    }),
    alternatives: {
      CA: "bareMineralsBareProPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  anastasiaBeverlyHillsLuminousFoundation: productData({
    category: "Foundation",
    brand: "Anastasia Beverly Hills",
    name: "Medium Coverage Natural Finish Luminous Foundation",
    type: "Luminous / medium coverage foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2270759-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2270759-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/luminous-foundation-P449124"
    }),
    alternatives: {
      US: "anastasiaBeverlyHillsImpeccableFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  anastasiaBeverlyHillsImpeccableFoundation: productData({
    category: "Foundation",
    brand: "Anastasia Beverly Hills",
    name: "Impeccable Blurring Second-Skin Matte Foundation",
    type: "Blurring / second-skin matte foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2934693-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2934693-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2934693-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/anastasia-beverly-hills-impeccable-blurring-second-skin-matte-foundation-P515098",
      CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-impeccable-blurring-second-skin-matte-foundation-P515098"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  narsSoftMatteCompleteFoundation: productData({
    category: "Foundation",
    brand: "NARS",
    name: "Soft Matte Complete Foundation",
    type: "Soft matte / full coverage foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2374411-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2374411-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/nars-soft-matte-complete-foundation-P462720"
    }),
    alternatives: {
      US: "narsNaturalMatteLongwearFoundation",
      FR: "hudaEasyBlurFoundation",
      UK: "narsLightReflectingFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "narsLightReflectingFoundation"
    }
  }),

  liseWatierTeintLiftAntiRidesFoundation: productData({
    category: "Foundation",
    brand: "Lise Watier",
    name: "Teint Lift Anti-Rides Foundation",
    type: "Anti-aging / natural finish foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2502698-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2502698-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/lise-watier-teint-lift-anti-rides-foundation-P477482"
    }),
    alternatives: {
      US: "esteeLauderFuturistHydraRescueFoundation",
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  guerlainParureGoldFoundation: productData({
    category: "Foundation",
    brand: "GUERLAIN",
    name: "Parure Gold Radiant Matte Skin Perfecting Longwear Foundation",
    type: "Radiant matte / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2613016-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2613016-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/parure-gold-radiant-matte-skin-perfecting-longwear-foundation-P502171",
      FR: ""
    }),
    alternatives: {
      US: "charlotteTilburyBeautifulSkinFoundation",
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  milkBlurLiquidMatteFoundation: productData({
    category: "Foundation",
    brand: "MILK MAKEUP",
    name: "Blur Liquid Matte Foundation",
    type: "Matte / blurring liquid foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1965003-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s1965003-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/brand/milk-makeup/foundation-makeup"
    }),
    alternatives: {
      US: "hudaEasyBlurFoundation",
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tooFacedBornThisWaySoftMatteFoundation: productData({
    category: "Foundation",
    brand: "Too Faced",
    name: "Born This Way Soft Matte Foundation",
    type: "Soft matte / 24-hour foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2413136-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2413136-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/too-faced-born-this-way-matte-24-hour-foundation-P458586"
    }),
    alternatives: {
      CA: "tooFacedBornThisWayUndetectableFoundation",
      FR: "hudaEasyBlurFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  beautyblenderBounceLiquidWhipFoundation: productData({
    category: "Foundation",
    brand: "Beautyblender",
    name: "Bounce™ Liquid Whip Long Wear Foundation",
    type: "Full coverage / matte longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2074540-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2074540-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2074540-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/bounce-liquid-whip-longwear-foundation-P433987",
      CA: "https://www.sephora.com/ca/en/product/bounce-liquid-whip-longwear-foundation-P433987"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  oneSizeBeautyBlurBalmFoundation: productData({
    category: "Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up the Base Beauty Blur Balm Hybrid Foundation",
    type: "Hybrid balm foundation / blurring foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2551257-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2551257-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/turn-up-base-beauty-blur-balm-foundation-P478536"
    }),
    alternatives: {
      US: "oneSizeFullBeatLiquidFoundation",
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  cliniqueEvenBetterFoundationSpf15: productData({
    category: "Foundation",
    brand: "CLINIQUE",
    name: "Even Better™ Makeup Broad Spectrum SPF 15 Foundation",
    type: "Natural finish / SPF 15 foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2927085-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2927085-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/even-better-makeup-spf-15-P122764"
    }),
    alternatives: {
      CA: "cliniqueEvenBetterClinicalSerumFoundation",
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  hourglassVanishFoundationStick: productData({
    category: "Foundation",
    brand: "Hourglass",
    name: "Vanish™ Seamless Finish Foundation Stick",
    type: "Waterproof / full coverage foundation stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1827252-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s1827252-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s1827252-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/vanish-seamless-finish-foundation-stick-P410532",
      CA: "https://www.sephora.com/ca/en/product/vanish-seamless-finish-foundation-stick-P410532"
    }),
    alternatives: {
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeupByMarioSurrealSkinFoundation: productData({
    category: "Foundation",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin® Luminous Hydrating Foundation",
    type: "Luminous / hydrating foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2835213-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2835213-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2835213-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/makeup-by-mario-surreal-foundation-P503679",
      CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-surreal-foundation-P503679"
    }),
    alternatives: {
      FR: "hausLabsTricloneFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverMatteVelvetSkinFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Matte Velvet Skin Full Coverage Foundation",
    type: "Full coverage / matte waterproof foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2031011-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2031011-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/matte-velvet-skin-full-coverage-foundation-P434023"
    }),
    alternatives: {
      US: "makeUpForEverHdSkinFoundation",
      FR: "makeUpForEverHdSkinFoundation",
      UK: "makeUpForEverHdSkinFoundation",
      AU: "makeUpForEverHdSkinFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  guerlainTerracottaLeTeintFoundation: productData({
    category: "Foundation",
    brand: "GUERLAIN",
    name: "Terracotta Le Teint Perfecting Foundation Luminous Matte",
    type: "Luminous matte / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2655462-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2655462-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/guerlain-terracotta-le-teint-perfecting-foundation-luminous-matte-P505377",
      FR: ""
    }),
    alternatives: {
      US: "charlotteTilburyBeautifulSkinFoundation",
      FR: "charlotteTilburyBeautifulSkinFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lysBeautyTripleFixSerumFoundation: productData({
    category: "Foundation",
    brand: "LYS Beauty",
    name: "Triple Fix Serum Foundation",
    type: "Serum foundation / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2411783-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2411783-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/lys-beauty-triple-fix-serum-foundation-P468380"
    }),
    alternatives: {
      US: "fentySoftLitLuminousFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  charlotteTilburyBeautifulSkinFoundation: productData({
    category: "Foundation",
    brand: "Charlotte Tilbury",
    name: "Beautiful Skin Medium Coverage Liquid Foundation with Hyaluronic Acid",
    type: "Medium coverage / hydrating foundation",
    sizes: ["standard", "mini"],
    image: "https://www.sephora.com/productimages/sku/s2510642-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2510642-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2510642-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/charlotte-tilbury-beautiful-skin-medium-coverage-liquid-foundation-with-hyaluronic-acid-P480286",
      CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-beautiful-skin-medium-coverage-liquid-foundation-with-hyaluronic-acid-P480286"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  glossierStretchFluidFoundation: productData({
    category: "Foundation",
    brand: "Glossier",
    name: "Stretch Fluid Foundation for Buildable Coverage",
    type: "Buildable coverage / second-skin foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2702231-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2702231-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/stretch-fluid-skincare-foundation-P507806"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      FR: "hausLabsTricloneFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverUltraHdStickFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Ultra HD Invisible Cover Stick Foundation",
    type: "Cream foundation stick / buildable coverage",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1911445-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s1911445-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/ultra-hd-invisible-cover-stick-foundation-P398775"
    }),
    alternatives: {
      US: "westmanAtelierVitalSkinFoundationStick",
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  bobbiBrownSkinFoundationStick: productData({
    category: "Foundation",
    brand: "Bobbi Brown",
    name: "Skin Foundation Stick",
    type: "Foundation stick / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1286681-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s1286681-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/foundation-stick-P270549"
    }),
    alternatives: {
      US: "westmanAtelierVitalSkinFoundationStick",
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tarteShapeTapeCloudCoverageFoundation: productData({
    category: "Foundation",
    brand: "tarte",
    name: "Shape Tape™ Cloud Coverage CC Cream",
    type: "Lightweight CC cream / natural matte foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2668697-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2668697-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/tarte-shape-tape-tm-cloud-cream-P505474"
    }),
    alternatives: {
      US: "tarteFaceTapeFoundation",
      FR: "tarteFaceTapeFoundation",
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  benefitPorefessionalFoundation: productData({
    category: "Foundation",
    brand: "Benefit Cosmetics",
    name: "The POREfessional Smoothing & Blurring Foundation with Niacinamide",
    type: "Smoothing / blurring foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2896546-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2896546-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2896546-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/the-porefessional-smoothing-blurring-foundation-P517143",
      CA: "https://www.sephora.com/ca/en/product/the-porefessional-smoothing-blurring-foundation-P517143"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fentySoftLitLuminousFoundation: productData({
    category: "Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Soft’Lit Naturally Luminous Hydrating Longwear Foundation",
    type: "Luminous / hydrating longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-soft-lit-naturally-luminous-hydrating-longwear-foundation-P511130",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-soft-lit-naturally-luminous-hydrating-longwear-foundation-P511130",
      FR: "https://www.sephora.fr/p/soft--lit-naturally-luminous-foundation---fond-de-teint-P10057913.html",
      UK: "https://www.sephora.co.uk/p/fenty-beauty-soft-lit-naturally-luminous-longwear-foundation-32ml",
      AU: "https://www.sephora.com.au/products/fenty-beauty-softlit-luminous-foundation",
      BR: "https://www.sephora.com.br/base-fenty-soft-lit-luminous-88991910-88991910.html"
    }),
    alternatives: {}
  }),

  hudaEasyBlurFoundation: productData({
    category: "Foundation",
    brand: "HUDA BEAUTY",
    name: "Easy Blur Natural Airbrush Foundation with Niacinamide",
    type: "Blurring / natural airbrush foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/huda-beauty-easy-blur-smoothing-foundation-P512640",
      CA: "https://www.sephora.com/ca/en/product/huda-beauty-easy-blur-smoothing-foundation-P512640",
      FR: "https://www.sephora.fr/p/easy-blur-natural-airbrush-foundation---fond-de-teint-P10060171.html",
      UK: "https://www.sephora.co.uk/p/huda-beauty-easy-blur-natural-airbrush-foundation-30ml",
      AU: "https://www.sephora.com.au/products/huda-beauty-easy-blur-natural-airbrush-foundation"
    }),
    alternatives: {
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  hausLabsTricloneFoundation: productData({
    category: "Foundation",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica",
    type: "Medium coverage / natural finish foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185",
      CA: "https://www.sephora.com/ca/en/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185",
      FR: "https://www.sephora.fr/p/triclone-skin-tech-foundation---couvrance-moyenne-a-l-arnica-fermentee-P10050998.html",
      UK: "https://www.sephora.co.uk/p/haus-labs-by-lady-gaga-triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-30ml",
      AU: "https://www.sephora.com.au/products/haus-labs-by-lady-gaga-triclone-skin-tech-foundation"
    }),
    alternatives: {
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  armaniLuminousSilkFoundation: productData({
    category: "Foundation",
    brand: "Armani Beauty",
    name: "Luminous Silk Natural Glow Blurring Liquid Foundation with 24 Hour Wear",
    type: "Natural glow / liquid foundation",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2926731-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2926731-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2926731-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2926731-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2926731-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887",
      CA: "https://www.sephora.com/ca/en/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887",
      FR: "https://www.sephora.fr/p/luminous-silk-foundation---fond-de-teint-eclat-naturel-parfait-P1000211579.html",
      UK: "https://www.sephora.co.uk/p/armani-luminous-silk-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  diorBackstageFaceBodyFoundation: productData({
    category: "Foundation",
    brand: "DIOR",
    name: "Backstage Face & Body Foundation",
    type: "Face and body / buildable foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2669539-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2669539-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2669539-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2669539-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/backstage-face-body-foundation-P432500",
      CA: "https://www.sephora.com/ca/en/product/backstage-face-body-foundation-P432500",
      FR: "",
      UK: "https://www.sephora.co.uk/p/dior-face-body-foundation"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  saieGlowySuperSkinFoundation: productData({
    category: "Foundation",
    brand: "Saie",
    name: "Glowy Super Skin Tint Foundation with Hyaluronic Acid",
    type: "Glowy / serum foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2637387-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2637387-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2637387-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/saie-glowy-super-skin-lightweight-hydrobounce-serum-foundation-P504907",
      CA: "https://www.sephora.com/ca/en/product/saie-glowy-super-skin-lightweight-hydrobounce-serum-foundation-P504907"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  danessaMyricksYummySkinBlurringBalmPowder: productData({
    category: "Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder - Tinted Primer & Foundation",
    type: "Blurring balm / powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2836716-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2836716-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2836716-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2836716-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-P484039",
      CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-P484039",
      UK: "https://www.sephora.co.uk/p/danessa-myricks-yummy-skin-blurring-balm-powder-tinted-primer-foundation-18g"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  meritMinimalistComplexionStick: productData({
    category: "Foundation",
    brand: "MERIT",
    name: "The Minimalist Perfecting Complexion Foundation and Concealer Stick",
    type: "Foundation and concealer stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2791861-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2791861-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2791861-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2597276-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/merit-the-minimalist-perfecting-complexion-foundation-concealer-stick-P468694",
      CA: "https://www.sephora.com/ca/en/product/merit-the-minimalist-perfecting-complexion-foundation-concealer-stick-P468694"
    }),
    alternatives: {
      FR: "hausLabsTricloneFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "hausLabsTricloneFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  itCosmeticsCcCreamSpf50: productData({
    category: "Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
    type: "CC cream / full coverage foundation",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2888873-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/your-skin-but-better-cc-cream-spf-50-P411885",
      CA: "https://www.sephora.com/ca/en/product/your-skin-but-better-cc-cream-spf-50-P411885",
      UK: "https://www.sephora.co.uk/p/it-cosmetics-your-skin-but-better-cc-cream-with-spf-50",
      AU: "https://www.sephora.com.au/products/it-cosmetics-your-skin-but-better-cc-plus-cream-spf-50"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  yslAllHoursFoundation: productData({
    category: "Foundation",
    brand: "Yves Saint Laurent",
    name: "All Hours Luminous Natural Matte Foundation 24H Longwear SPF 30 with Hyaluronic Acid",
    type: "Luminous matte / 24h foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2598118-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2598118-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2598118-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2598118-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2598118-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/all-hours-full-coverage-matte-foundation-P421456",
      CA: "https://www.sephora.com/ca/en/product/yves-saint-laurent-all-hours-foundation-P503910",
      FR: "https://www.sephora.fr/p/yves-saint-laurent-all-hours-fond-de-teint-P10034263.html",
      UK: "https://www.sephora.co.uk/p/yves-saint-laurent-all-hours-foundation-24-hour-matte-foundation-with-high-coverage"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),
  natashaDenonaHyGlamFoundation: productData({
    category: "Foundation",
    brand: "NATASHA DENONA",
    name: "Hy-Glam Foundation Hydrating & Blurring Luminous Longwear Serum Foundation",
    type: "Hydrating / blurring luminous serum foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2890325-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2890325-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2890325-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/natasha-denona-hy-glam-foundation-hydrating-blurring-luminous-longwear-serum-foundation-P517849",
      CA: "https://www.sephora.com/ca/en/product/natasha-denona-hy-glam-foundation-hydrating-blurring-luminous-longwear-serum-foundation-P517849"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  hourglassVeilHydratingSkinTint: productData({
    category: "Foundation",
    brand: "Hourglass",
    name: "Veil™ Hydrating Skin Tint Foundation",
    type: "Hydrating skin tint / sheer foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2690857-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2690857-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2690915-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2690857-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/veil-hydrating-skin-tint-P506573",
      CA: "https://www.sephora.com/ca/en/product/veil-hydrating-skin-tint-P506573",
      FR: "https://www.sephora.fr/p/veil-hydrating-skin-tint---fond-de-teint-P10051185.html"
    }),
    alternatives: {
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  narsLightReflectingFoundation: productData({
    category: "Foundation",
    brand: "NARS",
    name: "Light Reflecting Skin Improving Medium Coverage Foundation with Cacao Peptides",
    type: "Medium coverage / natural luminous foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338",
      CA: "https://www.sephora.com/ca/en/product/nars-light-reflecting-advance-skincare-foundation-P479338",
      FR: "https://www.sephora.fr/p/light-reflecting-foundation-P10024551.html",
      UK: "https://www.sephora.co.uk/p/nars-light-reflecting-foundation",
      BR: "https://www.sephora.com.br/Base-Nars-Light-Reflecting-9090586473-9090586473.html"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverHdSkinFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Long-Lasting Waterproof Natural Matte Foundation",
    type: "Natural matte / waterproof foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2514214-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/make-up-for-ever-hd-skin-foundation-P479712",
      CA: "https://www.sephora.com/ca/en/product/make-up-for-ever-hd-skin-foundation-P479712",
      FR: "https://www.sephora.fr/p/hd-skin-foundation-22-30ml-P10023453.html",
      UK: "https://www.sephora.co.uk/p/make-up-for-ever-hd-skin-undetectable-stay-true-foundation",
      AU: "https://www.sephora.com.au/products/make-up-for-ever-hd-skin-foundation"
    }),
    alternatives: {
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fentyProFiltrSoftMatteFoundation: productData({
    category: "Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt’r Soft Matte Longwear Liquid Foundation",
    type: "Soft matte / longwear foundation",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s1925395-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s1925395-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s1925395-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s1925395-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s1925395-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/pro-filtr-soft-matte-longwear-foundation-P87985432",
      CA: "https://www.sephora.com/ca/en/product/pro-filtr-soft-matte-longwear-foundation-P87985432",
      FR: "https://www.sephora.fr/p/pro-filt-r-soft-matte-longwear-foundation---fond-de-teint-longue-tenue-P3079040.html",
      UK: "https://www.sephora.co.uk/p/fenty-beauty-pro-filt-r-soft-matte-longwear-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fentyProFiltrHydratingFoundation: productData({
    category: "Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt’r Hydrating Longwear Foundation",
    type: "Hydrating / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2157683-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2157683-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2157683-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/pro-filt-r-hydrating-longwear-foundation-P448702",
      FR: "https://www.sephora.fr/p/pro-filt-r-hydrating-longwear-foundation---fond-de-teint-hydratant-P3809035.html"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  oneSizeFullBeatLiquidFoundation: productData({
    category: "Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up the Base Full Beat Waterproof Liquid Foundation",
    type: "Waterproof / matte liquid foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2801199-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2801199-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2801199-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-full-beat-liquid-foundation-P513724",
      CA: "https://www.sephora.com/ca/en/product/one-size-by-patrick-starrr-turn-up-base-full-beat-liquid-foundation-P513724"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  rareBeautyTrueToMyselfFoundation: productData({
    category: "Foundation",
    brand: "Rare Beauty by Selena Gomez",
    name: "True to Myself Natural Matte Longwear Foundation",
    type: "Natural matte / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2959849-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2959849-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/true-to-myself-natural-matte-longwear-foundation-P521996"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  itCosmeticsCcNaturalMatteSpf40: productData({
    category: "Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Cream Natural Matte Foundation with SPF 40",
    type: "Natural matte CC cream / SPF 40",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2840676-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447",
      CA: "https://www.sephora.com/ca/en/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  charlotteTilburyUnrealSkinStick: productData({
    category: "Foundation",
    brand: "Charlotte Tilbury",
    name: "Unreal Skin Sheer Glow Tint Hydrating Foundation Stick",
    type: "Hydrating glow foundation stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2765824-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2765824-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2765824-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/charlotte-tilbury-unreal-skin-sheer-glow-tint-hydrating-foundation-stick-P511699",
      FR: "https://www.sephora.fr/p/unreal-skin-sheer-glow-tint---stick-fond-de-teint-hydratant-P10059185.html"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  narsNaturalMatteLongwearFoundation: productData({
    category: "Foundation",
    brand: "NARS",
    name: "Natural Matte Longwear Pore Blurring Medium-to-Full Coverage Foundation",
    type: "Matte / pore-blurring foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2893311-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2893311-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/natural-matte-longwear-foundation-P520608"
    }),
    alternatives: {
      CA: "narsLightReflectingFoundation",
      FR: "hudaEasyBlurFoundation",
      UK: "narsLightReflectingFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "narsLightReflectingFoundation"
    }
  }),

  narsNaturalRadiantLongwearFoundation: productData({
    category: "Foundation",
    brand: "NARS",
    name: "Natural Radiant Longwear Full Coverage Foundation",
    type: "Radiant / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2031086-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2031086-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2031086-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2031086-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/natural-radiant-longwear-foundation-P427301",
      CA: "https://www.sephora.com/ca/en/product/natural-radiant-longwear-foundation-P427301",
      UK: "https://www.sephora.co.uk/p/nars-natural-radiant-longwear-foundation"
    }),
    alternatives: {
      FR: "narsLightReflectingFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "narsLightReflectingFoundation"
    }
  }),

  iliaSuperSerumSkinTintSpf40: productData({
    category: "Foundation",
    brand: "ILIA",
    name: "Super Serum Skin Tint SPF 40 - Hydrating Foundation",
    type: "Skin tint / serum foundation / SPF",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2333607-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2333607-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2333607-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/ilia-super-serum-skin-tint-spf-40-P455418",
      FR: "https://www.sephora.fr/p/super-serum-skin-tint-spf-30---creme-serum-teintee-P4136096.html"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),
    
  tarteFaceTapeFoundation: productData({
    category: "Foundation",
    brand: "tarte",
    name: "Face Tape Foundation",
    type: "Full coverage / natural matte foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2924801-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2924801-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2924801-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2924801-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/face-tape-foundation-P522249",
      CA: "https://www.sephora.com/ca/en/product/face-tape-foundation-P522249",
      FR: "https://www.sephora.fr/p/face-tape---fond-de-teint-longue-duree-P3959118.html"
    }),
    alternatives: {
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  urbanDecayFaceBondFoundation: productData({
    category: "Foundation",
    brand: "Urban Decay",
    name: "Face Bond Self Setting Waterproof Foundation",
    type: "Waterproof / self-setting foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2741692-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2741692-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2741692-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/urban-decay-face-bond-self-setting-waterproof-foundation-P509419",
      CA: "https://www.sephora.com/ca/en/product/urban-decay-face-bond-self-setting-waterproof-foundation-P509419"
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tooFacedBornThisWayUndetectableFoundation: productData({
    category: "Foundation",
    brand: "Too Faced",
    name: "Born This Way Undetectable Medium-To-Full Coverage Foundation",
    type: "Medium-to-full coverage / natural finish foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2885648-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2885648-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2885648-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/too-faced-born-this-way-natural-finish-foundation-P517843",
      CA: "https://www.sephora.com/ca/en/product/too-faced-born-this-way-natural-finish-foundation-P517843"
    }),
    alternatives: {
      FR: "tarteFaceTapeFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  bobbiBrownWeightlessSkinFoundation: productData({
    category: "Foundation",
    brand: "Bobbi Brown",
    name: "Weightless Skin Oil-Controlling Foundation SPF 15 with Hyaluronic Acid",
    type: "Oil-controlling / natural matte foundation",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2798858-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2798858-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2798858-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2798858-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/weightless-skin-oil-controlling-foundation-spf-15-with-hyaluronic-acid-P512885",
      CA: "https://www.sephora.com/ca/en/product/weightless-skin-oil-controlling-foundation-spf-15-with-hyaluronic-acid-P512885",
      FR: "https://www.sephora.fr/p/weightless-skin-foundation---fond-de-teint-tenue-24-heures-sfp15-P1000203380.html"
    }),
    alternatives: {
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  charlotteTilburyAirbrushFlawlessFoundation: productData({
    category: "Foundation",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Blurring & Matte Full Coverage Foundation",
    type: "Full coverage / matte blurring foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2891240-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2891240-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2891240-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2891240-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2891240-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/airbrush-flawless-blurring-matte-full-coverage-foundation-P516897",
      CA: "https://www.sephora.com/ca/en/product/airbrush-flawless-blurring-matte-full-coverage-foundation-P516897",
      FR: "https://www.sephora.fr/p/airbrush-flawless-foundation---fond-de-teint-P1000209495.html",
      UK: "https://www.sephora.co.uk/p/charlotte-tilbury-airbrush-flawless-foundation-30ml"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  cliniqueSuperbalancedFoundation: productData({
    category: "Foundation",
    brand: "CLINIQUE",
    name: "Superbalanced Makeup Foundation",
    type: "Natural finish / balancing foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s126441-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s126441-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/superbalanced-makeup-P122740"
    }),
    alternatives: {
      US: "cliniqueBeyondPerfectingFoundationConcealer",
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  cliniqueBeyondPerfectingFoundationConcealer: productData({
    category: "Foundation",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Foundation + Concealer",
    type: "Foundation and concealer / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s1674679-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s1674679-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s1674679-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/beyond-perfecting-foundation-concealer-P393325",
      CA: "https://www.sephora.com/ca/en/product/beyond-perfecting-foundation-concealer-P393325"
    }),
    alternatives: {
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  esteeLauderDoubleWearLightweightMatteFoundation: productData({
    category: "Foundation",
    brand: "Estée Lauder",
    name: "Double Wear Stay-in-Place Lightweight Matte Foundation with 36H Wear",
    type: "Lightweight matte / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2937324-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2937324-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2937324-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/double-wear-stay-in-place-lightweight-matte-foundation-with-36-hour-wear-P520286",
      CA: "https://www.sephora.com/ca/en/product/double-wear-stay-in-place-lightweight-matte-foundation-with-36-hour-wear-P520286"
    }),
    alternatives: {
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fashionFairSkinFlexStickFoundation: productData({
    category: "Foundation",
    brand: "Fashion Fair",
    name: "SkinFlex Stick Foundation",
    type: "Stick foundation / natural semi-matte finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2509198-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2509198-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2509198-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/fashion-fair-skinflex-stick-foundation-P476556",
      CA: "https://www.sephora.com/ca/en/product/fashion-fair-skinflex-stick-foundation-P476556"
    }),
    alternatives: {
      FR: "charlotteTilburyAirbrushFlawlessFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  morpheLightformExtendedHydrationFoundation: productData({
    category: "Foundation",
    brand: "Morphe",
    name: "Lightform Extended Hydration Foundation",
    type: "Hydrating / medium coverage foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2755353-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2755353-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/morphe-lightform-extended-hydration-foundation-P510145"
    }),
    alternatives: {
      US: "fentySoftLitLuminousFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  liseWatierTeintVeloursFoundation: productData({
    category: "Foundation",
    brand: "Lise Watier",
    name: "Teint Velours Foundation",
    type: "Velvet matte / oil-free foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2133346-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2133346-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/velvet-matte-foundation-P435759"
    }),
    alternatives: {
      US: "esteeLauderDoubleWearLightweightMatteFoundation",
      FR: "bobbiBrownWeightlessSkinFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverHdSkinPerfectingFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Balancing & Perfecting Natural Finish Longwear Foundation",
    type: "Natural finish / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2963460-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2963460-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/hd-skin-perfecting-foundation-P522269"
    }),
    alternatives: {
      US: "makeUpForEverHdSkinFoundation",
      FR: "makeUpForEverHdSkinFoundation",
      UK: "makeUpForEverHdSkinFoundation",
      AU: "makeUpForEverHdSkinFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tarteAmazonianClayFoundationMini: productData({
    category: "Foundation",
    brand: "tarte",
    name: "Mini Amazonian Clay 16-Hour Full Coverage Soft Matte Foundation",
    type: "Mini / full coverage soft matte foundation",
    sizes: ["mini"],
    image: "https://www.sephora.com/productimages/sku/s2476174-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2476174-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/tarte-mini-amazonian-clay-16-hour-full-coverage-foundation-P473843"
    }),
    alternatives: {
      CA: "tarteFaceTapeFoundation",
      FR: "tarteFaceTapeFoundation",
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),
    
  macStudioFixFluidFoundation: productData({
    category: "Foundation",
    brand: "MAC Cosmetics",
    name: "Studio Fix Fluid SPF 15 24HR Buildable Soft-Matte Foundation",
    type: "Soft matte / buildable liquid foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2651255-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2651255-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2651255-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2651255-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2651255-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/mac-cosmetics-studio-fix-fluid-spf-15-P511153",
      CA: "https://www.sephora.com/ca/en/product/mac-cosmetics-studio-fix-fluid-spf-15-P511153",
      FR: "https://www.sephora.fr/p/studio-fix-fluid-spf15---fond-de-teint-P10058079.html",
      UK: "https://www.sephora.co.uk/p/m-a-c-studio-fix-fluid-spf-15-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  patMcGrathSublimePerfectionFoundation: productData({
    category: "Foundation",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Sublime Perfection Weightless Foundation",
    type: "Weightless / buildable foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2256899-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2256899-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2256899-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2256899-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2256899-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/skin-fetish-sublime-perfection-foundation-P447519",
      CA: "https://www.sephora.com/ca/en/product/skin-fetish-sublime-perfection-foundation-P447519",
      FR: "https://www.sephora.fr/p/skin-fetish-sublime-perfection---fond-de-teint-P3865106.html",
      UK: "https://www.sephora.co.uk/p/pat-mcgrath-labs-skin-fetish-sublime-perfection-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tomFordArchitectureSoftMatteFoundation: productData({
    category: "Foundation",
    brand: "TOM FORD",
    name: "Architecture Soft Matte Blurring Foundation",
    type: "Soft matte / blurring foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2972057-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2972057-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/tom-ford-architecture-soft-matte-blurring-foundation-P521686"
    }),
    alternatives: {
      US: "charlotteTilburyAirbrushFlawlessFoundation",
      FR: "charlotteTilburyAirbrushFlawlessFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fentyProFiltrSoftMattePowderFoundation: productData({
    category: "Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt’r Soft Matte Powder Foundation",
    type: "Powder foundation / soft matte finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-pro-filt-r-soft-matte-powder-foundation-P466829",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-pro-filt-r-soft-matte-powder-foundation-P466829",
      FR: "https://www.sephora.fr/p/pro-filt-r---fond-de-teint-poudre-mat-P10013140.html",
      UK: "https://www.sephora.co.uk/p/fenty-beauty-pro-filt-r-soft-matte-powder-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  itCosmeticsCcAirbrushPerfectingPowder: productData({
    category: "Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Airbrush Perfecting Powder Foundation",
    type: "Powder foundation / airbrush finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2413680-main-zoom.jpg?imwidth=315",
      AU: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315",
      BR: "https://www.sephora.com/productimages/sku/s2746543-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({}),
    alternatives: {
      US: "fentyProFiltrSoftMattePowderFoundation",
      CA: "fentyProFiltrSoftMattePowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  chantecailleFutureSkinFoundation: productData({
    category: "Foundation",
    brand: "CHANTECAILLE",
    name: "Future Skin Lightweight Natural Finish Foundation",
    type: "Lightweight gel foundation / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2964393-main-zoom.jpg?imwidth=315",
    images: {
      CA: "https://www.sephora.com/productimages/sku/s2964393-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/future-skin-lightweight-natural-finish-foundation-P521947"
    }),
    alternatives: {
      US: "hourglassVeilHydratingSkinTint",
      FR: "hourglassVeilHydratingSkinTint",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  iliaSkinRewindComplexionStick: productData({
    category: "Foundation",
    brand: "ILIA",
    name: "Skin Rewind Blurring Foundation and Concealer Complexion Stick",
    type: "Foundation and concealer stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2739803-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2739803-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/ilia-skin-rewind-complexion-stick-P509720"
    }),
    alternatives: {
      CA: "lysBeautyTripleFixFoundationStick",
      FR: "charlotteTilburyUnrealSkinStick",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  fashionFairCremeToPowderFoundation: productData({
    category: "Foundation",
    brand: "Fashion Fair",
    name: "Crème to Powder Skin Foundation",
    type: "Cream-to-powder foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2509230-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2509230-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2509230-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/fashion-fair-creme-to-powder-skin-foundation-P476444",
      CA: "https://www.sephora.com/ca/en/product/fashion-fair-creme-to-powder-skin-foundation-P476444"
    }),
    alternatives: {
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lysBeautyTripleFixFoundationStick: productData({
    category: "Foundation",
    brand: "LYS Beauty",
    name: "Triple Fix Blurring and Hydrating Skin Tint Foundation Stick",
    type: "Hydrating / blurring foundation stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2823011-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2823011-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2823011-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/lys-beauty-triple-fix-blurring-hydrating-skin-tint-foundation-stick-P513483",
      CA: "https://www.sephora.com/ca/en/product/lys-beauty-triple-fix-blurring-hydrating-skin-tint-foundation-stick-P513483"
    }),
    alternatives: {
      FR: "charlotteTilburyUnrealSkinStick",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  macStudioFixPowderFoundation: productData({
    category: "Foundation",
    brand: "MAC Cosmetics",
    name: "Studio Fix Powder Plus Foundation with 24HR Oil Control + Blur-Matte Finish",
    type: "Powder foundation / matte finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2892636-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2892636-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2892636-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/studio-fix-powder-plus-foundation-24hr-oil-control-blur-matte-finish-12hr-buildable-coverage-P516457",
      FR: "https://www.sephora.fr/p/studio-fix-powder-plus-foundation---fond-de-teint-poudre-P1000206951.html"
    }),
    alternatives: {
      CA: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  makeUpForEverHdSkinHydraGlowFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Hydra Glow Hydrating Foundation with Hyaluronic Acid",
    type: "Hydrating / luminous foundation",
    sizes: ["mini", "standard"],
    image: "https://www.sephora.com/productimages/sku/s2738474-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2738474-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/make-up-for-ever-hd-skin-hydra-glow-skincare-foundation-with-hyaluronic-acid-P510064"
    }),
    alternatives: {
      CA: "makeUpForEverHdSkinFoundation",
      FR: "makeUpForEverHdSkinFoundation",
      UK: "makeUpForEverHdSkinFoundation",
      AU: "makeUpForEverHdSkinFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  givenchyPrismeLibreGlowSerumFoundation: productData({
    category: "Foundation",
    brand: "Givenchy",
    name: "Prisme Libre Glow Serum Blurring Foundation with Natural Finish",
    type: "Glow serum foundation / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2849628-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2849628-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2849628-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/givenchy-prisme-libre-glow-serum-blurring-foundation-with-natural-finish-P514905",
      FR: "https://www.sephora.fr/p/prisme-libre-glow-serum---fond-de-teint-soin-perfecteur-P1000205463.html"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  gucciEterniteDeBeauteFoundation: productData({
    category: "Foundation",
    brand: "Gucci",
    name: "24 Hour Full Coverage Luminous Matte Finish Foundation",
    type: "Full coverage / luminous matte foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2405355-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2405355-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/gucci-fluide-de-beaute-fini-naturel-natural-finish-fluid-foundation-P467622"
    }),
    alternatives: {
      CA: "charlotteTilburyAirbrushFlawlessFoundation",
      FR: "charlotteTilburyAirbrushFlawlessFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  cliniqueEvenBetterClinicalSerumFoundation: productData({
    category: "Foundation",
    brand: "CLINIQUE",
    name: "Even Better Clinical Serum Foundation Broad Spectrum SPF 25",
    type: "Serum foundation / SPF 25",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2422822-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2422822-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2422822-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/clinique-even-better-clinical-serum-foundation-broad-spectrum-spf-25-P468639",
      CA: "https://www.sephora.com/ca/en/product/clinique-even-better-clinical-serum-foundation-broad-spectrum-spf-25-P468639"
    }),
    alternatives: {
      FR: "cliniqueEvenBetterFoundationSpf15",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lauraMercierRealFlawlessFoundation: productData({
    category: "Foundation",
    brand: "Laura Mercier",
    name: "Real Flawless Weightless Perfecting Waterproof Foundation",
    type: "Weightless / waterproof foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2642759-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2642759-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2642759-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2642759-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/laura-mercier-real-flawless-weightless-perfecting-foundation-P504012",
      FR: "https://www.sephora.fr/p/real-flawless-foundation---fond-de-teint-P10049151.html",
      UK: "https://www.sephora.co.uk/p/laura-mercier-real-flawless-foundation-30ml"
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  kosasRevealerFoundationSpf25: productData({
    category: "Foundation",
    brand: "Kosas",
    name: "Revealer Skin-Improving Foundation SPF 25 with Hyaluronic Acid and Niacinamide",
    type: "Skin-improving foundation / SPF 25",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2512291-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2512291-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2512291-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2512291-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/kosas-revealer-skin-improving-foundation-spf25-with-hyaluronic-acid-niacinamide-P481396",
      CA: "https://www.sephora.com/ca/en/product/revealer-skin-improving-foundation-spf25-with-hyaluronic-acid-niacinamide-P502143",
      UK: "https://www.sephora.co.uk/p/kosas-revealer-skin-improving-foundation-spf25-30ml"
    }),
    alternatives: {
      FR: "iliaSuperSerumSkinTintSpf40",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  westmanAtelierVitalSkinFoundationStick: productData({
    category: "Foundation",
    brand: "Westman Atelier",
    name: "Vital Skin Medium Coverage Multi-Use Foundation Stick",
    type: "Foundation and concealer stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2503092-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2503092-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2503092-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2503092-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/westman-atelier-vital-skin-foundation-stick-P468429",
      CA: "https://www.sephora.com/ca/en/product/westman-atelier-vital-skin-foundation-stick-P468429",
      FR: "https://www.sephora.fr/p/vital-skin---fond-de-teint-et-anticernes-en-stick-P10058428.html"
    }),
    alternatives: {
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lancomeTeintIdoleUltraWearFoundation: productData({
    category: "Foundation",
    brand: "Lancôme",
    name: "Teint Idole Ultra Wear 24H Long Wear Matte Foundation with Hyaluronic Acid & Vitamin E",
    type: "Matte / longwear foundation",
    sizes: ["standard"],
    image: "https://media.sephora.eu/content/dam/digital/pim/published/L/LANCO/660059/313102-media_swatch.jpg?scaleHeight=750&scaleMode=fit&scaleWidth=750",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2690378-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2690378-main-zoom.jpg?imwidth=315",
      FR: "https://media.sephora.eu/content/dam/digital/pim/published/L/LANCO/660059/313102-media_swatch.jpg?scaleHeight=750&scaleMode=fit&scaleWidth=750",
      UK: "https://media.sephora.eu/content/dam/digital/pim/published/L/LANCO/660059/313102-media_swatch.jpg?scaleHeight=750&scaleMode=fit&scaleWidth=750"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/teint-idole-ultra-24h-long-wear-foundation-P308201",
      CA: "https://www.sephora.com/ca/en/product/teint-idole-ultra-24h-long-wear-foundation-P308201",
      FR: "https://www.sephora.fr/p/lancome-teint-idole-ultra-wear-fond%C3%B6ten-P10048543.html",
      UK: "https://www.sephora.co.uk/p/lancome-teint-idole-ultra-wear-foundation-30ml"
    }),
    alternatives: {
      AU: "esteeLauderDoubleWearLightweightMatteFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lancomeTeintIdoleCareGlowFoundation: productData({
    category: "Foundation",
    brand: "Lancôme",
    name: "Teint Idole Ultra Wear Care & Glow Foundation with Hyaluronic Acid",
    type: "Glow / hydrating foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2589265-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2589265-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2589265-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2589265-main-zoom.jpg?imwidth=315",
      UK: "https://www.sephora.com/productimages/sku/s2589265-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/teint-idole-ultra-wear-care-glow-foundation-P500706",
      CA: "https://www.sephora.com/ca/en/product/teint-idole-ultra-wear-care-glow-foundation-P500706",
      FR: "https://www.sephora.fr/p/teint-idole-ultra-wear-care-et-glow---fond-de-teint-soin-24h-fini-lumineux-spf25-P10042898.html",
      UK: "https://www.sephora.co.uk/p/lancome-teint-idole-ultra-wear-care-glow-24h-healthy-foundation"
    }),
    alternatives: {
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  kvdGoodAppleSerumFoundation: productData({
    category: "Foundation",
    brand: "KVD Beauty",
    name: "Good Apple Non-Comedogenic Full-Coverage Serum Foundation",
    type: "Full coverage / serum foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2646180-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2646180-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2646180-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2646180-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/kvd-vegan-beauty-good-apple-full-coverage-transfer-proof-vegan-serum-foundation-P504366",
      CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-good-apple-full-coverage-transfer-proof-vegan-serum-foundation-P504366",
      FR: "https://www.sephora.fr/p/good-apple---fond-de-teint-serum-couvrance-totale-P10048319.html"
    }),
    alternatives: {
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  kvdGoodAppleCreamFoundationBalm: productData({
    category: "Foundation",
    brand: "KVD Beauty",
    name: "Good Apple Lightweight Full-Coverage Cream Foundation Balm",
    type: "Cream foundation balm / full coverage",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2420040-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2420040-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2420040-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2420040-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/kvd-vegan-beauty-good-apple-skin-perfecting-foundation-balm-P469488",
      CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-good-apple-skin-perfecting-foundation-balm-P469488",
      FR: "https://www.sephora.fr/p/good-apple-skin-perfecting---foundation-balm-P10015018.html"
    }),
    alternatives: {
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  diorForeverSkinPerfectStickFoundation: productData({
    category: "Foundation",
    brand: "DIOR",
    name: "Forever Skin Perfect 24H Multi-Use Foundation Stick",
    type: "Foundation stick / 24H wear",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2882546-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2882546-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2882546-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2882546-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/dior-forever-skin-perfect-24h-multi-use-foundation-P512480",
      CA: "https://www.sephora.com/ca/en/product/dior-forever-skin-perfect-24h-multi-use-foundation-P512480",
      FR: ""
    }),
    alternatives: {
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  diorForeverSkinGlowFoundation: productData({
    category: "Foundation",
    brand: "DIOR",
    name: "Forever Skin Glow Liquid Foundation 24HR Wear",
    type: "Glow / longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2934149-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2934149-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/forever-skin-glow-liquid-foundation-24-hour-wear-P520267",
      FR: ""
    }),
    alternatives: {
      CA: "fentySoftLitLuminousFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  diorForeverNaturalVelvetCompactFoundation: productData({
    category: "Foundation",
    brand: "DIOR",
    name: "Forever Natural Velvet Matte Compact Foundation",
    type: "Compact powder foundation / matte finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2572253-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2572253-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/diorskin-forever-perfect-matte-powder-foundation-P297404",
      FR: ""
    }),
    alternatives: {
      CA: "fentyProFiltrSoftMattePowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  // -------------------------
  // BRUSHES / TOOLS
  // -------------------------
  sephoraFoundationBrush47: productData({
    category: "Foundation Brush",
    brand: "SEPHORA COLLECTION",
    name: "PRO Foundation Brush #47",
    image: skuImage("s2596476"),
    links: {
      US: "https://www.sephora.com/product/pro-foundation-47-P404041",
      CA: "https://www.sephora.com/ca/en/product/pro-foundation-47-P404041"
    }
  }),

  sephoraConcealerBrush57: productData({
    category: "Concealer Brush",
    brand: "SEPHORA COLLECTION",
    name: "PRO Concealer Brush #57",
    links: {
      US: "https://www.sephora.com/product/pro-concealer-57-P313020",
      CA: "https://www.sephora.com/ca/en/product/pro-concealer-57-P313020"
    }
  }),

  beautyblenderOriginal: productData({
    category: "Makeup Sponge",
    brand: "beautyblender",
    name: "ORIGINAL BEAUTYBLENDER Makeup Sponge",
    links: {
      US: "https://www.sephora.com/product/beautyblender-P228913",
      CA: "https://www.sephora.com/ca/en/product/beautyblender-P228913"
    }
  }),

  rareBeautyConcealerBrush: productData({
    category: "Concealer Brush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Liquid Touch Concealer Brush",
    image: "https://www.sephora.com/productimages/sku/s2362424-main-zoom.jpg",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-liquid-touch-concealer-brush-P17484987",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-liquid-touch-concealer-brush-P17484987"
    }
  }),

  rareBeautyBlushBrush: productData({
    category: "Blush Brush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Blush Brush",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-blush-brush-P01523186",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-soft-pinch-blush-brush-P01523186",
      BR: "https://www.sephora.com.br/Pincel-de-Blush-Rare-Beauty-Soft-Pinch-Liquid-Blush-Brush-44991112-44991112.html"
    }
  }),

  // -------------------------
  // CONCEALERS / POWDERS
  // -------------------------
  kosasRevealerConcealer: productData({
    category: "Concealer",
    brand: "Kosas",
    name: "Revealer Super Creamy + Brightening Concealer with Caffeine and Hyaluronic Acid",
    links: {
      US: "https://www.sephora.com/product/kosas-revealer-concealer-P456151",
      CA: "https://www.sephora.com/ca/en/product/kosas-revealer-concealer-P456151"
    }
  }),

  narsRadiantCreamyConcealer: productData({
    category: "Concealer",
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    links: {
      US: "https://www.sephora.com/product/radiant-creamy-concealer-P377873",
      CA: "https://www.sephora.com/ca/en/product/radiant-creamy-concealer-P377873"
    }
  }),

  hudaFauxFilterConcealer: productData({
    category: "Concealer",
    brand: "HUDA BEAUTY",
    name: "#FauxFilter Matte Buildable Coverage Waterproof Concealer",
    image: skuImage("s2577781"),
    links: {
      US: "https://www.sephora.com/product/fauxfilter-luminous-matte-buildable-coverage-crease-proof-concealer-P500309",
      CA: "https://www.sephora.com/ca/en/product/fauxfilter-luminous-matte-buildable-coverage-crease-proof-concealer-P500309"
    }
  }),

  tooFacedSuperCoverageConcealer: productData({
    category: "Concealer",
    brand: "Too Faced",
    name: "Born This Way Super Coverage Multi-Use Concealer with Hyaluronic Acid",
    links: {
      US: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298",
      CA: "https://www.sephora.com/ca/en/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298"
    }
  }),

  kosasCloudSetPowder: productData({
    category: "Setting Powder",
    brand: "Kosas",
    name: "Cloud Set Baked Setting & Smoothing Talc-Free Vegan Powder",
    links: {
      US: "https://www.sephora.com/product/kosas-cloud-set-baked-setting-smoothing-talc-free-vegan-powder-P468685",
      CA: "https://www.sephora.com/ca/en/product/kosas-cloud-set-baked-setting-smoothing-talc-free-vegan-powder-P468685"
    }
  }),

  // -------------------------
  // BLUSH
  // -------------------------
  rareBeautySoftPinchBlush: productData({
    category: "Blush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Blush",
    image: skuImage("s2911741"),
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778",
      UK: "https://www.sephora.co.uk/p/rare-beauty-soft-pinch-liquid-blush-7-5ml",
      AU: "https://www.sephora.com.au/products/rare-beauty-soft-pinch-liquid-blush",
      BR: "https://www.sephora.com.br/blush-liquido-rare-beauty-soft-pinch-liquid-blush-18862-18862.html"
    }
  }),

  patrickTaBlushDuo: productData({
    category: "Blush",
    brand: "PATRICK TA",
    name: "Major Headlines Double-Take Crème & Powder Blush Duo",
    image: skuImage("s2849768"),
    links: {
      US: "https://www.sephora.com/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747",
      CA: "https://www.sephora.com/ca/en/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747"
    }
  }),

  saieDewBlush: productData({
    category: "Blush",
    brand: "Saie",
    name: "Dew Blush Liquid Cream Blush",
    links: {
      US: "https://www.sephora.com/product/saie-dew-blush-liquid-cheek-blush-P469825",
      CA: "https://www.sephora.com/ca/en/product/saie-dew-blush-liquid-cheek-blush-P469825"
    }
  }),

  tower28BeachPleaseBlush: productData({
    category: "Blush",
    brand: "Tower 28 Beauty",
    name: "BeachPlease Lip + Cheek Dewy Cream Blush",
    links: {
      US: "https://www.sephora.com/product/beachplease-tinted-balm-blush-P449342",
      CA: "https://www.sephora.com/ca/en/product/beachplease-tinted-balm-blush-P449342"
    }
  }),

  narsAfterglowLiquidBlush: productData({
    category: "Blush",
    brand: "NARS",
    name: "Afterglow Liquid Blush",
    links: {
      US: "https://www.sephora.com/product/afterglow-liquid-blush-P506024",
      CA: "https://www.sephora.com/ca/en/product/afterglow-liquid-blush-P506024"
    }
  }),

  tooFacedCloudCrushBlush: productData({
    category: "Blush",
    brand: "Too Faced",
    name: "Cloud Crush Blurring Blush",
    links: {
      US: "https://www.sephora.com/product/cloud-crush-blurring-blush-P505014",
      CA: "https://www.sephora.com/ca/en/product/cloud-crush-blurring-blush-P505014"
    }
  }),

  summerFridaysBlushButterBalm: productData({
    category: "Blush",
    brand: "Summer Fridays",
    name: "Blush Butter Balm Hydrating Cream Blush with Peptides",
    links: {
      US: "https://www.sephora.com/product/P518147",
      CA: "https://www.sephora.com/ca/en/product/P518147"
    }
  }),

  // -------------------------
  // HIGHLIGHTER / GLOW
  // -------------------------
  charlotteBeautyHighlighterWand: productData({
    category: "Highlighter",
    brand: "Charlotte Tilbury",
    name: "Beauty Highlighter Wand",
    image: skuImage("s2366524"),
    links: {
      US: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154",
      CA: "https://www.sephora.com/ca/en/product/glowgasm-beauty-highlighter-wand-P444154"
    }
  }),

  rareBeautyPositiveLightHighlighter: productData({
    category: "Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Silky Touch Highlighter",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711"
    }
  }),

  fentyKillawattHighlighter: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Freestyle Highlighter",
    image: skuImage("s1925916"),
    links: {
      US: "https://www.sephora.com/product/killawatt-freestyle-highlighter-P64879845",
      CA: "https://www.sephora.com/ca/en/product/killawatt-freestyle-highlighter-P64879845"
    }
  }),

  hausLabsBioRadiantHighlighterBalm: productData({
    category: "Highlighter",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Radiant Glassy Highlighter Balm",
    links: {
      US: "https://www.sephora.com/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434",
      CA: "https://www.sephora.com/ca/en/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434"
    }
  }),

  charlotteHollywoodFlawlessFilter: productData({
    category: "Complexion Glow",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    links: {
      US: "https://www.sephora.com/product/hollywood-flawless-filter-P434104",
      CA: "https://www.sephora.com/ca/en/product/hollywood-flawless-filter-P434104"
    }
  }),

  // -------------------------
  // BRONZER / CONTOUR
  // -------------------------
  makeupByMarioSoftSculptStick: productData({
    category: "Bronzer / Contour",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt Cream Contour & Bronzer Shaping Stick",
    image: skuImage("s2867505"),
    links: {
      US: "https://www.sephora.com/product/softsculpt-cream-contour-bronzer-stick-P516546",
      CA: "https://www.sephora.com/ca/en/product/softsculpt-cream-contour-bronzer-stick-P516546"
    }
  }),

  makeupByMarioSkinEnhancer: productData({
    category: "Bronzer / Contour",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt Transforming Skin Enhancer",
    links: {
      US: "https://www.sephora.com/product/softsculpt-transforming-skin-enhancer-P500452",
      CA: "https://www.sephora.com/ca/en/product/softsculpt-transforming-skin-enhancer-P500452"
    }
  }),

  narsLagunaBronzingCream: productData({
    category: "Bronzer / Contour",
    brand: "NARS",
    name: "Laguna Bronzing Cream",
    image: skuImage("s2568798"),
    links: {
      US: "https://www.sephora.com/product/nars-laguna-bronzing-cream-P471270",
      CA: "https://www.sephora.com/ca/en/product/nars-laguna-bronzing-cream-P471270"
    }
  }),

  fentySunStalkrBronzer: productData({
    category: "Bronzer",
    brand: "Fenty Beauty by Rihanna",
    name: "Sun Stalk'r Instant Warmth Bronzer",
    links: {
      US: "https://www.sephora.com/product/sun-stalk-r-instant-warmth-bronzer-P55978845",
      CA: "https://www.sephora.com/ca/en/product/sun-stalk-r-instant-warmth-bronzer-P55978845"
    }
  }),

  benefitHoolaBronzer: productData({
    category: "Bronzer",
    brand: "Benefit Cosmetics",
    name: "Hoola Matte Bronzer",
    links: {
      US: "https://www.sephora.com/product/hoola-matte-bronzer-P290636",
      CA: "https://www.sephora.com/ca/en/product/hoola-matte-bronzer-P290636"
    }
  }),

  rareBeautyWarmWishesBronzer: productData({
    category: "Bronzer / Contour",
    brand: "Rare Beauty by Selena Gomez",
    name: "Warm Wishes Effortless Bronzer Stick",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-warm-wishes-effortless-bronzer-stick-P501539",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-warm-wishes-effortless-bronzer-stick-P501539"
    }
  }),

  milkSculptCreamContourStick: productData({
    category: "Bronzer / Contour",
    brand: "MILK MAKEUP",
    name: "Sculpt Cream Contour Stick",
    links: {
      US: "https://www.sephora.com/product/milk-makeup-sculpt-cream-contour-stick-P503903",
      CA: "https://www.sephora.com/ca/en/product/milk-makeup-sculpt-cream-contour-stick-P503903"
    }
  }),

  // -------------------------
  // MASCARA
  // -------------------------
  lancomeCilsBooster: productData({
    category: "Mascara Primer",
    brand: "Lancôme",
    name: "Cils Booster XL Super-Enhancing Mascara Primer",
    image: skuImage("s2109965"),
    links: {
      US: "https://www.sephora.com/product/cils-booster-xl-super-enhancing-mascara-base-P128706",
      CA: "https://www.sephora.com/ca/en/product/cils-booster-xl-super-enhancing-mascara-base-P128706"
    }
  }),

  tooFacedBetterThanSexMascara: productData({
    category: "Mascara",
    brand: "Too Faced",
    name: "Better Than Sex Volumizing & Lengthening Mascara",
    image: skuImage("s1533439"),
    links: {
      US: "https://www.sephora.com/product/better-than-sex-mascara-P381000",
      CA: "https://www.sephora.com/ca/en/product/better-than-sex-mascara-P381000"
    }
  }),

  rareBeautyPerfectStrokesMascara: productData({
    category: "Mascara",
    brand: "Rare Beauty by Selena Gomez",
    name: "Perfect Strokes Universal Volumizing Mascara",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475610",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475610"
    }
  }),

  benefitBadgalBangMascara: productData({
    category: "Mascara",
    brand: "Benefit Cosmetics",
    name: "BADgal BANG! Volumizing Mascara",
    links: {
      US: "https://www.sephora.com/product/badgal-bang-volumizing-mascara-P427517",
      CA: "https://www.sephora.com/ca/en/product/badgal-bang-volumizing-mascara-P427517"
    }
  }),

  iliaLimitlessLashMascara: productData({
    category: "Mascara",
    brand: "ILIA",
    name: "Limitless Lash Lengthening Clean Mascara",
    links: {
      US: "https://www.sephora.com/product/limitless-lash-mascara-P431750",
      CA: "https://www.sephora.com/ca/en/product/limitless-lash-mascara-P431750"
    }
  }),

  milkKushMascara: productData({
    category: "Mascara",
    brand: "MILK MAKEUP",
    name: "KUSH High Volumizing Mascara",
    links: {
      US: "https://www.sephora.com/product/kush-mascara-P429903",
      CA: "https://www.sephora.com/ca/en/product/kush-mascara-P429903"
    }
  }),

  charlottePillowTalkMascara: productData({
    category: "Mascara",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Push Up Lashes Mascara",
    links: {
      US: "https://www.sephora.com/product/pillow-talk-push-up-lashes-volumizing-lengthening-mascara-P461894",
      CA: "https://www.sephora.com/ca/en/product/pillow-talk-push-up-lashes-volumizing-lengthening-mascara-P461894"
    }
  }),

  // -------------------------
  // BROWS
  // -------------------------
  abhBrowWiz: productData({
    category: "Eyebrow Pencil",
    brand: "Anastasia Beverly Hills",
    image: "https://www.sephora.com/productimages/sku/s1488337-main-zoom.jpg",
    name: "Brow Wiz Ultra-Slim Precision Eyebrow Defining Pencil",
    links: {
      US: "https://www.sephora.com/product/brow-wiz-P202633",
      CA: "https://www.sephora.com/ca/en/product/brow-wiz-P202633"
    }
  }),

  benefitPreciselyMyBrow: productData({
    category: "Eyebrow Pencil",
    brand: "Benefit Cosmetics",
    name: "Precisely, My Brow Pencil Waterproof Eyebrow Definer",
    links: {
      US: "https://www.sephora.com/product/precisely-my-brow-pencil-P408219",
      CA: "https://www.sephora.com/ca/en/product/precisely-my-brow-pencil-P408219"
    }
  }),

  benefitBrowSetter: productData({
    category: "Eyebrow Gel",
    brand: "Benefit Cosmetics",
    name: "24-HR Brow Setter Clear Brow Gel",
    image: "https://www.sephora.com/productimages/sku/s1935774-main-zoom.jpg",
    links: {
      US: "https://www.sephora.com/product/24-hr-brow-setter-P409242",
      CA: "https://www.sephora.com/ca/en/product/24-hr-brow-setter-P409242"
    }
  }),

  abhBrowFreezeGel: productData({
    category: "Eyebrow Gel",
    brand: "Anastasia Beverly Hills",
    name: "Brow Freeze Gel",
    links: {
      US: "https://www.sephora.com/product/brow-freeze-gel-P509319",
      CA: "https://www.sephora.com/ca/en/product/brow-freeze-gel-P509319"
    }
  }),

  rareBeautyBrowHarmonyPencil: productData({
    category: "Eyebrow Pencil",
    brand: "Rare Beauty by Selena Gomez",
    name: "Brow Harmony Precision Pencil",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-brow-harmony-precision-pencil-P506660",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-brow-harmony-precision-pencil-P506660",
      UK: "https://www.sephora.co.uk/brands/rare-beauty"
    }
  }),

  // -------------------------
  // EYESHADOW / EYELINER
  // -------------------------
  natashaINeedANudePalette: productData({
    category: "Eyeshadow",
    brand: "NATASHA DENONA",
    name: "I Need A Nude Eyeshadow Palette",
    links: {
      US: "https://www.sephora.com/product/i-need-a-nude-eyeshadow-palette-P507807",
      CA: "https://www.sephora.com/ca/en/product/i-need-a-nude-eyeshadow-palette-P507807"
    }
  }),

  hudaCreamyObsessionsPalette: productData({
    category: "Eyeshadow",
    brand: "HUDA BEAUTY",
    image: "https://www.sephora.com/productimages/sku/s2739423-main-zoom.jpg",
    name: "Creamy Obsessions Eyeshadow Palette",
    links: {
      US: "https://www.sephora.com/product/huda-beauty-creamy-obsessions-eye-palette-P509445",
      CA: "https://www.sephora.com/ca/en/product/huda-beauty-creamy-obsessions-eye-palette-P509445"
    }
  }),

  hudaNudeObsessionsPalette: productData({
    category: "Eyeshadow",
    brand: "HUDA BEAUTY",
    name: "Nude Obsessions Eyeshadow Palette",
    links: {
      US: "https://www.sephora.com/product/nude-obsessions-eyeshadow-palette-P450887",
      CA: "https://www.sephora.com/ca/en/product/nude-obsessions-eyeshadow-palette-P450887"
    }
  }),

  tooFacedNaturalNudesPalette: productData({
    category: "Eyeshadow",
    brand: "Too Faced",
    name: "Born This Way The Natural Nudes Eyeshadow Palette",
    links: {
      US: "https://www.sephora.com/product/born-this-way-the-natural-nudes-eyeshadow-palette-P455624",
      CA: "https://www.sephora.com/ca/en/product/born-this-way-the-natural-nudes-eyeshadow-palette-P455624"
    }
  }),

  makeupByMarioMasterMattesPalette: productData({
    category: "Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes Eyeshadow Palette: The Neutrals",
    links: {
      US: "https://www.sephora.com/product/master-mattes-palette-P98364786",
      CA: "https://www.sephora.com/ca/en/product/master-mattes-palette-P98364786"
    }
  }),

  natashaBronzePalette: productData({
    category: "Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Bronze Eyeshadow Palette",
    links: {
      US: "https://www.sephora.com/product/natasha-denona-bronze-eyeshadow-palette-P459630",
      CA: "https://www.sephora.com/ca/en/product/natasha-denona-bronze-eyeshadow-palette-P459630"
    }
  }),

  rareBeautyLiquidLiner: productData({
    category: "Eyeliner",
    brand: "Rare Beauty by Selena Gomez",
    name: "Perfect Strokes Matte Liquid Liner",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-matte-liquid-liner-P87946516",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-perfect-strokes-matte-liquid-liner-P87946516"
    }
  }),

  makeupByMarioEyePencil: productData({
    category: "Eye Pencil",
    image: "https://www.sephora.com/productimages/sku/s2867729-main-zoom.jpg",
    brand: "MAKEUP BY MARIO",
    name: "Master Pigment Pro Eyeliner Pencil",
    links: {
      US: "https://www.sephora.com/product/master-pigment-pro-tm-eyeliner-pencil-P39890573",
      CA: "https://www.sephora.com/ca/en/product/master-pigment-pro-tm-eyeliner-pencil-P39890573"
    }
  }),

  mufeArtistColorPencil: productData({
    category: "Multi-Use Pencil",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Pencil Longwear Lip Liner",
    links: {
      US: "https://www.sephora.com/product/artist-color-pencil-P430969",
      CA: "https://www.sephora.com/ca/en/product/artist-color-pencil-P430969"
    }
  }),

  onesizePointMadeLiquidLiner: productData({
    category: "Eyeliner",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Point Made Waterproof Liquid Eyeliner Pen",
    links: {
      US: "https://www.sephora.com/product/point-made-waterproof-liquid-eyeliner-pen-P461952",
      CA: "https://www.sephora.com/ca/en/product/point-made-waterproof-liquid-eyeliner-pen-P461952"
    }
  }),
    // -------------------------
  // LIPS
  // -------------------------
  charlotteLipCheat: productData({
    category: "Lip Liner",
    brand: "Charlotte Tilbury",
    name: "Lip Cheat Lip Liner",
    image: "https://www.sephora.com/productimages/sku/s2765618-main-zoom.jpg",
    links: {
      US: "https://www.sephora.com/product/lip-cheat-lip-liner-P433516",
      CA: "https://www.sephora.com/ca/en/product/lip-cheat-lip-liner-P433516"
    }
  }),

  makeupByMarioLipPencil: productData({
    category: "Lip Liner",
    brand: "MAKEUP BY MARIO",
    name: "Ultra Suede Sculpting Lip Pencil",
    links: {
      US: "https://www.sephora.com/product/makeup-by-mario-ultra-suede-sculpting-lip-pencil-P477838",
      CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-ultra-suede-sculpting-lip-pencil-P477838"
    }
  }),

  hudaLipContour2: productData({
    category: "Lip Liner",
    brand: "HUDA BEAUTY",
    name: "Lip Contour 2.0 Automatic Matte Lip Pencil",
    links: {
      US: "https://www.sephora.com/product/huda-beauty-lip-contour-2-0-automatic-matte-lip-pencil-P471243",
      CA: "https://www.sephora.com/ca/en/product/huda-beauty-lip-contour-2-0-automatic-matte-lip-pencil-P471243"
    }
  }),

  rareBeautyKindWordsLipLiner: productData({
    category: "Lip Liner",
    brand: "Rare Beauty by Selena Gomez",
    name: "Kind Words Matte Lip Liner",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-kind-words-matte-lip-liner-P500637",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-kind-words-matte-lip-liner-P500637"
    }
  }),

  fentyGlossBomb: productData({
    category: "Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Universal Lip Gloss Luminizer",
    image: "https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg",
    links: {
      US: "https://www.sephora.com/product/gloss-bomb-universal-lip-luminizer-P67988453",
      CA: "https://www.sephora.com/ca/en/product/gloss-bomb-universal-lip-luminizer-P67988453"
    }
  }),

  fentyGlossBombHeat: productData({
    category: "Gloss / Lip Plumper",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Heat Universal Lip Luminizer + Plumper",
    links: {
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-heat-universal-lip-luminizer-plumper-P473708",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-gloss-bomb-heat-universal-lip-luminizer-plumper-P473708"
    }
  }),

  tower28ShineOnLipJelly: productData({
    category: "Gloss",
    brand: "Tower 28 Beauty",
    name: "ShineOn Lip Jelly Non-Sticky Gloss",
    links: {
      US: "https://www.sephora.com/product/shineon-lip-jelly-P448854",
      CA: "https://www.sephora.com/ca/en/product/shineon-lip-jelly-P448854"
    }
  }),

  narsAfterglowLipShine: productData({
    category: "Gloss",
    brand: "NARS",
    name: "Afterglow Lip Shine Gloss",
    links: {
      US: "https://www.sephora.com/product/afterglow-lip-shine-gloss-P479337",
      CA: "https://www.sephora.com/ca/en/product/afterglow-lip-shine-gloss-P479337"
    }
  }),

  summerFridaysLipButterBalm: productData({
    category: "Lip Balm / Gloss",
    brand: "Summer Fridays",
    name: "Lip Butter Balm",
    links: {
      US: "https://www.sephora.com/product/summer-fridays-lip-butter-balm-P455936",
      CA: "https://www.sephora.com/ca/en/product/summer-fridays-lip-butter-balm-P455936"
    }
  }),

  laneigeLipGlowyBalm: productData({
    category: "Lip Balm / Gloss",
    brand: "LANEIGE",
    name: "Lip Glowy Balm",
    links: {
      US: "https://www.sephora.com/product/lip-glowy-balm-P443563",
      CA: "https://www.sephora.com/ca/en/product/lip-glowy-balm-P443563"
    }
  }),

  makeupByMarioMoistureGlowLipSerum: productData({
    category: "Lip Gloss / Balm",
    brand: "MAKEUP BY MARIO",
    name: "MoistureGlow Plumping Lip Serum",
    links: {
      US: "https://www.sephora.com/product/makeup-by-mario-moistureglow-plumping-lip-serum-P506794",
      CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-moistureglow-plumping-lip-serum-P506794"
    }
  }),

  // -------------------------
  // SETTING SPRAYS / MISTS
  // -------------------------
  charlotteSettingSpray: productData({
    category: "Setting Spray",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Hydrating & Waterproof Setting Spray",
    links: {
      US: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147",
      CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147"
    }
  }),

  oneSizeSettingSpray: productData({
    category: "Setting Spray",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "On 'Til Dawn Mattifying Waterproof Setting Spray",
    links: {
      US: "https://www.sephora.com/product/on-til-dawn-setting-spray-P476719",
      CA: "https://www.sephora.com/ca/en/product/on-til-dawn-setting-spray-P476719"
    }
  }),

  rareBeautySettingSpray: productData({
    category: "Setting Spray",
    brand: "Rare Beauty by Selena Gomez",
    name: "Always An Optimist 4-in-1 Prime & Set Mist",
    links: {
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-always-an-optimist-4-in-1-prime-set-mist-P471074",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-always-an-optimist-4-in-1-prime-set-mist-P471074"
    }
  }),

  // -------------------------
  // BODY GLOW / BODY CARE
  // -------------------------
  solDeJaneiroGlowMotionsBodyOil: productData({
    category: "Body Oil",
    brand: "Sol de Janeiro",
    name: "GlowMotions Glow Body Oil",
    links: {
      US: "https://www.sephora.com/product/glowmotions-glow-oil-P442743",
      CA: "https://www.sephora.com/ca/en/product/glowmotions-glow-oil-P442743"
    }
  }),

  solDeJaneiroCheirosa62Mist: productData({
    category: "Body Mist",
    brand: "Sol de Janeiro",
    name: "Cheirosa 62 Perfume Mist",
    links: {
      US: "https://www.sephora.com/product/brazilian-crush-cheirosa-62-bum-bum-hair-body-fragrance-mist-P403685",
      CA: "https://www.sephora.com/ca/en/product/brazilian-crush-cheirosa-62-bum-bum-hair-body-fragrance-mist-P403685"
    }
  }),

  solDeJaneiroCheirosa68Mist: productData({
    category: "Body Mist",
    brand: "Sol de Janeiro",
    name: "Cheirosa 68 Perfume Mist",
    links: {
      US: "https://www.sephora.com/product/sol-de-janeiro-brazilian-crush-cheirosa-68-beija-flor-hair-body-fragrance-mist-P482070",
      CA: "https://www.sephora.com/ca/en/product/sol-de-janeiro-brazilian-crush-cheirosa-68-beija-flor-hair-body-fragrance-mist-P482070"
    }
  }),

  ouaiStBartsMist: productData({
    category: "Body Mist",
    brand: "OUAI",
    name: "St. Barts Hair and Body Mist",
    links: {
      US: "https://www.sephora.com/product/ouai-st-barts-hair-body-mist-P506965",
      CA: "https://www.sephora.com/ca/en/product/ouai-st-barts-hair-body-mist-P506965"
    }
  }),

  // -------------------------
  // FRAGRANCE
  // -------------------------
  maisonMargielaBeachWalk: productData({
    category: "Fragrance",
    brand: "Maison Margiela",
    name: "REPLICA Beach Walk Eau de Toilette",
    image: "https://www.sephora.com/productimages/sku/s1593144-main-zoom.jpg",
    links: {
      US: "https://www.sephora.com/ca/fr/product/replica-beach-walk-P385358",
      CA: "https://www.sephora.com/ca/en/product/replica-beach-walk-P385358"
    }
  }),

  kayaliVanilla28: productData({
    category: "Fragrance",
    brand: "KAYALI",
    name: "Vanilla 28 Eau de Parfum",
    links: {
      US: "https://www.sephora.com/product/kayali-vanilla-28-P439406",
      CA: "https://www.sephora.com/ca/en/product/kayali-vanilla-28-P439406"
    }
  }),

  kayaliUtopiaVanillaCoco: productData({
    category: "Fragrance",
    brand: "KAYALI",
    name: "Utopia Vanilla Coco 21 Eau de Parfum",
    links: {
      US: "https://www.sephora.com/product/kayali-utopia-vanilla-coco-21-P475492",
      CA: "https://www.sephora.com/ca/en/product/kayali-utopia-vanilla-coco-21-P475492"
    }
  }),

  yslLibreEdp: productData({
    category: "Fragrance",
    brand: "Yves Saint Laurent",
    name: "Libre Eau de Parfum",
    links: {
      US: "https://www.sephora.com/product/libre-eau-de-parfum-P448102",
      CA: "https://www.sephora.com/ca/en/product/libre-eau-de-parfum-P448102"
    }
  }),

  ellisBrooklynSalt: productData({
    category: "Fragrance",
    brand: "Ellis Brooklyn",
    name: "Salt Eau de Parfum",
    links: {
      US: "https://www.sephora.com/product/salt-eau-de-parfum-P448185",
      CA: "https://www.sephora.com/ca/en/product/salt-eau-de-parfum-P448185"
    }
  }),

  phlurVanillaSkinMist: productData({
    category: "Body Mist",
    brand: "PHLUR",
    name: "Vanilla Skin Body Mist",
    links: {
      US: "https://www.sephora.com/product/phlur-vanilla-skin-body-mist-P510895",
      CA: "https://www.sephora.com/ca/en/product/phlur-vanilla-skin-body-mist-P510895"
    }
  }),

  // -------------------------
  // SKINCARE / SKIN PREP
  // -------------------------
  supergoopGlowscreen: productData({
    category: "Sunscreen / Primer",
    brand: "Supergoop!",
    name: "Glowscreen SPF 40",
    links: {
      US: "https://www.sephora.com/product/supergoop-glowscreen-sunscreen-spf-40-P456218",
      CA: "https://www.sephora.com/ca/en/product/supergoop-glowscreen-sunscreen-spf-40-P456218"
    }
  }),

  glowRecipeDewDrops: productData({
    category: "Skincare Glow Serum",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Dew Drops Serum",
    links: {
      US: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123",
      CA: "https://www.sephora.com/ca/en/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123"
    }
  }),

  laneigeCreamSkinToner: productData({
    category: "Hydrating Toner",
    brand: "LANEIGE",
    name: "Cream Skin Refillable Toner & Moisturizer with Ceramides and Peptides",
    links: {
      US: "https://www.sephora.com/product/laneige-cream-skin-toner-moisturizer-P446930",
      CA: "https://www.sephora.com/ca/en/product/laneige-cream-skin-toner-moisturizer-P446930"
    }
  }),

  tatchaDewySkinCream: productData({
    category: "Moisturizer",
    brand: "Tatcha",
    name: "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
    links: {
      US: "https://www.sephora.com/product/the-dewy-skin-cream-P441101",
      CA: "https://www.sephora.com/ca/en/product/the-dewy-skin-cream-P441101"
    }
  }),

  farmacyHoneyHalo: productData({
    category: "Moisturizer",
    brand: "Farmacy",
    name: "Honey Halo Ultra-Hydrating Ceramide Moisturizer",
    links: {
      US: "https://www.sephora.com/product/farmacy-honey-halo-ultra-hydrating-ceramide-moisturizer-P463036",
      CA: "https://www.sephora.com/ca/en/product/farmacy-honey-halo-ultra-hydrating-ceramide-moisturizer-P463036"
    }
  }),

  theOrdinaryHyaluronicAcid: productData({
    category: "Hydrating Serum",
    brand: "The Ordinary",
    name: "Hyaluronic Acid 2% + B5 Hydrating Serum",
    links: {
      US: "https://www.sephora.com/product/the-ordinary-deciem-hyaluronic-acid-2-b5-P427419",
      CA: "https://www.sephora.com/ca/en/product/the-ordinary-deciem-hyaluronic-acid-2-b5-P427419"
    }
  }),

  paulasChoiceBhaLiquid: productData({
    category: "Exfoliant",
    brand: "Paula's Choice",
    name: "Skin Perfecting 2% BHA Liquid Exfoliant",
    links: {
      US: "https://www.sephora.com/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502",
      CA: "https://www.sephora.com/ca/en/product/paula-s-choice-skin-perfecting-2-bha-liquid-exfoliant-P469502"
    }
  })
};
function getProductForCountry(productKey, country) {
  const originalProduct = PRODUCT_CATALOG[productKey];

  if (!originalProduct) return null;

  // 1. Si le produit existe dans le pays choisi
  if (originalProduct.links?.[country]) {
    return {
      product: originalProduct,
      link: originalProduct.links[country],
      image: originalProduct.images?.[country] || originalProduct.image || DEFAULT_PRODUCT_IMAGE,
      isAlternative: false
    };
  }

  // 2. Si le produit n'existe pas ou est interdit, on prend l'alternative du pays
  const alternativeKey = originalProduct.alternatives?.[country];
  const alternativeProduct = PRODUCT_CATALOG[alternativeKey];

  if (alternativeProduct?.links?.[country]) {
    return {
      product: alternativeProduct,
      link: alternativeProduct.links[country],
      image: alternativeProduct.images?.[country] || alternativeProduct.image || DEFAULT_PRODUCT_IMAGE,
      isAlternative: true,
      originalProduct: originalProduct
    };
  }

  // 3. Si l'alternative n'a pas de lien dans ce pays, on prend son premier lien disponible
  if (alternativeProduct) {
    const alternativeFallbackCountry = ["US", "CA", "FR", "UK", "AU", "BR"].find(
      (code) => alternativeProduct.links?.[code]
    );

    return {
      product: alternativeProduct,
      link: alternativeProduct.links?.[alternativeFallbackCountry] || "#",
      image: alternativeProduct.images?.[alternativeFallbackCountry] || alternativeProduct.image || DEFAULT_PRODUCT_IMAGE,
      isAlternative: true,
      originalProduct: originalProduct
    };
  }

  // 4. Dernier secours : on prend le produit original avec son premier lien disponible
  const fallbackCountry = ["US", "CA", "FR", "UK", "AU", "BR"].find(
    (code) => originalProduct.links?.[code]
  );

  return {
    product: originalProduct,
    link: originalProduct.links?.[fallbackCountry] || "#",
    image: originalProduct.images?.[fallbackCountry] || originalProduct.image || DEFAULT_PRODUCT_IMAGE,
    isAlternative: false
  };
}

function getProductLink(product) {
  const market = typeof USER_MARKET !== "undefined" ? USER_MARKET : "US";

  if (!product.links) {
    return product.link || "#";
  }

  return (
    product.links[market] ||
    product.links.US ||
    product.links.CA ||
    product.links.FR ||
    product.links.UK ||
    product.links.AU ||
    product.links.BR ||
    "#"
  );
}

function getProductImage(product) {
  const market = typeof USER_MARKET !== "undefined" ? USER_MARKET : "US";

  if (!product.images) {
    return product.image || DEFAULT_PRODUCT_IMAGE;
  }

  return (
    product.images[market] ||
    product.image ||
    product.images.US ||
    product.images.CA ||
    product.images.FR ||
    product.images.UK ||
    product.images.AU ||
    product.images.BR ||
    DEFAULT_PRODUCT_IMAGE
  );
}

function makeProduct(productKey) {
  const product = PRODUCT_CATALOG[productKey];

  if (!product) {
    console.warn(`Missing product in PRODUCT_CATALOG: ${productKey}`);
    return {
      category: "Unknown",
      brand: "",
      name: productKey,
      image: DEFAULT_PRODUCT_IMAGE,
      images: { US: "", CA: "", FR: "", UK: "", AU: "", BR: "" },
      link: "#",
      links: { US: "", CA: "", FR: "", UK: "", AU: "", BR: "" }
    };
  }

  return {
    ...product,
    key: productKey,
    image: getProductImage(product),
    link: getProductLink(product)
  };
}

// Optional browser globals if this file is loaded before data.js
window.PRODUCT_CATALOG = PRODUCT_CATALOG;
window.makeProduct = makeProduct;
window.getProductLink = getProductLink;
window.getProductImage = getProductImage;
