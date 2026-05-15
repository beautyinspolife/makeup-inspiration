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
  milkHydroGripPrimer: productData({
    category: "Primer",
    brand: "MILK MAKEUP",
    name: "Hydro Grip Hydrating Makeup Primer with Hyaluronic Acid + Niacinamide",
    type: "Hydrating / gripping primer",
    sizes: ["mini", "standard", "jumbo"],
    image: "https://www.sephora.com/productimages/sku/s2169423-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/hydro-grip-primer-P441813",
      CA: "https://www.sephora.com/ca/en/product/hydro-grip-primer-P441813",
      FR: "https://www.sephora.fr/p/hydro-grip-primer---base-teint-hydratante-P3818087.html",
      UK: "https://www.sephora.co.uk/p/milk-makeup-hydro-grip-primer-makeup-primer",
      AU: "https://www.sephora.com.au/products/milk-makeup-hydro-grip-primer"
    }),
    alternatives: {
      BR: "fentyGripTripHydratingPrimer"
    }
  }),
  
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
  }),

// -------------------------
  // FOUNDATIONS / FONDS DE TEINT 
  // -------------------------

  makeUpForEverRebootFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Reboot Active Care Revitalizing Foundation",
    type: "Revitalizing / natural finish foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "makeUpForEverHdSkinFoundation",
      CA: "makeUpForEverHdSkinFoundation",
      FR: "makeUpForEverHdSkinFoundation",
      UK: "makeUpForEverHdSkinFoundation",
      AU: "makeUpForEverHdSkinFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  danessaMyricksYummySkinSerumFoundation: productData({
    category: "Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Serum Foundation",
    type: "Serum foundation / skin-like finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2574879-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2574879-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2574879-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-serum-foundation-P481694",
      CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-yummy-skin-serum-foundation-P481694"
    }),
    alternatives: {
      FR: "hausLabsTricloneFoundation",
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  urbanDecayHydromaniacTintedHydrator: productData({
    category: "Foundation",
    brand: "Urban Decay",
    name: "Hydromaniac Glowy Tinted Hydrator Foundation",
    type: "Glowy tinted hydrator / medium coverage",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2670966-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2670966-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2670966-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/urban-decay-hydromaniac-glowy-tinted-hydrator-foundation-P467658",
      CA: "https://www.sephora.com/ca/en/product/urban-decay-hydromaniac-glowy-tinted-hydrator-foundation-P467658"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  givenchyPrismeLibreSkinCaringFoundation: productData({
    category: "Foundation",
    brand: "Givenchy",
    name: "Prisme Libre Skin-Caring 24H Hydrating Foundation",
    type: "Hydrating / skin-caring foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "givenchyPrismeLibreGlowSerumFoundation",
      CA: "fentySoftLitLuminousFoundation",
      FR: "givenchyPrismeLibreGlowSerumFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lixrBeautyMultiUseFoundationStick: productData({
    category: "Foundation",
    brand: "LIXR Beauty",
    name: "Multi-Use Cream-to-Powder Concealer & Foundation Stick",
    type: "Cream-to-powder foundation and concealer stick",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2955284-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2955284-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2955284-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/lixr-complexion-stick-P521062",
      CA: "https://www.sephora.com/ca/en/product/lixr-complexion-stick-P521062"
    }),
    alternatives: {
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  kvdLockItPowderFoundation: productData({
    category: "Foundation",
    brand: "KVD Beauty",
    name: "Lock-It Powder Foundation",
    type: "Powder foundation / full coverage",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "bareMineralsBareProPowderFoundation",
      CA: "bareMineralsBareProPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lancomeDualFinishPowderFoundation: productData({
    category: "Foundation",
    brand: "Lancôme",
    name: "DUAL FINISH Multi-Tasking Longwear Powder Foundation",
    type: "Powder foundation / longwear finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s135558-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s135558-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s135558-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/dual-finish-multi-tasking-longwear-powder-foundation-P54419",
      CA: "https://www.sephora.com/ca/en/product/dual-finish-multi-tasking-longwear-powder-foundation-P54419"
    }),
    alternatives: {
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  natashaDenonaHyGlamPowderFoundation: productData({
    category: "Foundation",
    brand: "NATASHA DENONA",
    name: "Hy-Glam Powder Foundation",
    type: "Powder foundation / smoothing finish",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "bareMineralsBareProPowderFoundation",
      CA: "bareMineralsBareProPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  danessaMyricksVisionCreamCover: productData({
    category: "Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Vision Cream Cover Adjustable Foundation & Concealer",
    type: "Foundation and concealer cream",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "danessaMyricksYummySkinSerumFoundation",
      CA: "danessaMyricksYummySkinSerumFoundation",
      FR: "hausLabsTricloneFoundation",
      UK: "hudaEasyBlurFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  tarteAmazonianClayPowderFoundation: productData({
    category: "Foundation",
    brand: "tarte",
    name: "Amazonian Clay Blurring Powder Foundation",
    type: "Powder foundation / blurring finish",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "bareMineralsBareProPowderFoundation",
      CA: "bareMineralsBareProPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  guerlainTerracottaJoliTeintFoundation: productData({
    category: "Foundation",
    brand: "GUERLAIN",
    name: "Terracotta Joli Teint Foundation",
    type: "Lightweight glow foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      FR: ""
    }),
    alternatives: {
      US: "esteeLauderFuturistHydraRescueFoundation",
      CA: "guerlainTerracottaLeTeintFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lancomeTeintIdoleFoundationStick: productData({
    category: "Foundation",
    brand: "Lancôme",
    name: "Teint Idole Ultra Wear Foundation Stick",
    type: "Multi-use foundation stick",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "westmanAtelierVitalSkinFoundationStick",
      CA: "westmanAtelierVitalSkinFoundationStick",
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  esteeLauderFuturistHydraRescueFoundation: productData({
    category: "Foundation",
    brand: "Estée Lauder",
    name: "Futurist Hydra Rescue Moisturizing Foundation SPF 45 with Vitamin E",
    type: "Hydrating / radiant foundation / SPF 45",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2324481-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2324481-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2324481-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/estee-lauder-futurist-hydrating-rescue-moisturizing-foundation-spf-45-P454063",
      CA: "https://www.sephora.com/ca/en/product/estee-lauder-futurist-hydrating-rescue-moisturizing-foundation-spf-45-P454063"
    }),
    alternatives: {
      FR: "fentySoftLitLuminousFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  esteeLauderDoubleWearPowderFoundation: productData({
    category: "Foundation",
    brand: "Estée Lauder",
    name: "Double Wear Stay-in-Place Matte Powder Foundation",
    type: "Matte powder foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "lancomeDualFinishPowderFoundation",
      CA: "lancomeDualFinishPowderFoundation",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "fentyProFiltrSoftMattePowderFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  macStudioRadianceSerumFoundation: productData({
    category: "Foundation",
    brand: "MAC Cosmetics",
    name: "Studio Radiance Serum-Powered Foundation",
    type: "Serum foundation / radiant finish",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "macStudioFixFluidFoundation",
      CA: "macStudioFixFluidFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  cliniqueBeyondPerfectingPowderFoundation: productData({
    category: "Foundation",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Powder Foundation + Concealer",
    type: "Powder foundation and concealer",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "cliniqueBeyondPerfectingFoundationConcealer",
      CA: "cliniqueBeyondPerfectingFoundationConcealer",
      FR: "fentyProFiltrSoftMattePowderFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  diorForeverSkinMatteFoundation: productData({
    category: "Foundation",
    brand: "DIOR",
    name: "Forever Skin Wear Blurring Natural Matte Foundation - 24HR Ultra Wear",
    type: "Natural matte / blurring longwear foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2933901-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2933901-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2933901-main-zoom.jpg?imwidth=315",
      FR: "https://www.sephora.com/productimages/sku/s2933901-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/dior-forever-skin-wear-blurring-natural-matte-foundation-24-hour-ultra-wear-P520603",
      CA: "https://www.sephora.com/ca/en/product/dior-forever-skin-wear-blurring-natural-matte-foundation-24-hour-ultra-wear-P520603",
      FR: ""
    }),
    alternatives: {
      FR: "hudaEasyBlurFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  milkFlexFoundationStick: productData({
    category: "Foundation",
    brand: "MILK MAKEUP",
    name: "Flex Foundation Stick",
    type: "Foundation stick / natural finish",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2242261-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2242261-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2242261-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/flex-foundation-stick-P448151",
      CA: "https://www.sephora.com/ca/en/product/flex-foundation-stick-P448151"
    }),
    alternatives: {
      FR: "westmanAtelierVitalSkinFoundationStick",
      UK: "charlotteTilburyUnrealSkinStick",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  iliaTrueSkinSerumFoundation: productData({
    category: "Foundation",
    brand: "ILIA",
    name: "True Skin Medium Coverage Serum Foundation with Niacinamide",
    type: "Medium coverage / serum foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2527729-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2527729-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2527729-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/true-skin-serum-foundation-P429548",
      CA: "https://www.sephora.com/ca/en/product/true-skin-serum-foundation-P429548"
    }),
    alternatives: {
      FR: "iliaSuperSerumSkinTintSpf40",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  lawlessConcealTheDealFoundation: productData({
    category: "Foundation",
    brand: "LAWLESS",
    name: "Conceal The Deal Long-Wear Full-Coverage Foundation",
    type: "Full coverage / longwear foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({}),
    alternatives: {
      US: "charlotteTilburyAirbrushFlawlessFoundation",
      CA: "charlotteTilburyAirbrushFlawlessFoundation",
      FR: "charlotteTilburyAirbrushFlawlessFoundation",
      UK: "charlotteTilburyAirbrushFlawlessFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  hourglassAmbientSoftGlowFoundation: productData({
    category: "Foundation",
    brand: "Hourglass",
    name: "Ambient Soft Glow Foundation",
    type: "Soft glow / medium coverage foundation",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2586741-main-zoom.jpg?imwidth=315",
    images: {
      US: "https://www.sephora.com/productimages/sku/s2586741-main-zoom.jpg?imwidth=315",
      CA: "https://www.sephora.com/productimages/sku/s2586741-main-zoom.jpg?imwidth=315"
    },
    links: countryLinks({
      US: "https://www.sephora.com/product/ambient-soft-glow-foundation-P501154",
      CA: "https://www.sephora.com/ca/en/product/ambient-soft-glow-foundation-P501154"
    }),
    alternatives: {
      FR: "hourglassVeilHydratingSkinTint",
      UK: "fentySoftLitLuminousFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

  guerlainTerracottaLeTeintGlowFoundation: productData({
    category: "Foundation",
    brand: "GUERLAIN",
    name: "Terracotta Le Teint Glow Foundation",
    type: "Healthy glow foundation",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      FR: ""
    }),
    alternatives: {
      US: "esteeLauderFuturistHydraRescueFoundation",
      CA: "guerlainTerracottaLeTeintFoundation",
      FR: "fentySoftLitLuminousFoundation",
      UK: "charlotteTilburyBeautifulSkinFoundation",
      AU: "fentySoftLitLuminousFoundation",
      BR: "fentySoftLitLuminousFoundation"
    }
  }),

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
// TINTED MOISTURIZERS / SKIN TINTS
// -------------------------

liveTintedHueguardSkinTint: productData({
  category: "Tinted Sunscreen",
  brand: "Live Tinted",
  name: "Hueguard Skin Tint SPF 50 Mineral Sunscreen Broad Spectrum",
  type: "Mineral tinted sunscreen / lightweight skin tint",
  sizes: ["standard"],
  image: skuImage("s2838936"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hueguard-skin-tint-spf-50-mineral-sunscreen-broad-spectrum-P517709"
  }),
  alternatives: {
    US: "supergoopProtectintDailySpfTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "summerFridaysSheerSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "fentyEazeDropBlurringSkinTint"
  }
}),

summerFridaysSheerSkinTint: productData({
  category: "Skin Tint",
  brand: "Summer Fridays",
  name: "Sheer Skin Tint with Hyaluronic Acid + Squalane",
  type: "Sheer hydrating skin tint / natural finish",
  sizes: ["standard"],
  image: skuImage("s2536183"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777"
  }),
  alternatives: {
    US: "fentyEazeDropBlurringSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "saieSlipTintTintedMoisturizer",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

itCosmeticsCcNudeGlowSkinTint: productData({
  category: "CC Skin Tint",
  brand: "IT Cosmetics",
  name: "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
  type: "Glowy CC skin tint / SPF 40",
  sizes: ["standard"],
  image: skuImage("s2515716"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamSpf50",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "itCosmeticsCcCreamSpf50",
    AU: "iliaSuperSerumSkinTintSpf40",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

armaniGoldenHourSkinTint: productData({
  category: "Skin Tint",
  brand: "Armani Beauty",
  name: "Golden Hour 24HR Lightweight Skin Tint with Hyaluronic Acid",
  type: "Lightweight longwear skin tint / natural glow",
  sizes: ["standard"],
  image: skuImage("s2881332"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/golden-hour-24hr-lightweight-skin-tint-with-hyaluronic-acid-P517007"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentySoftLitLuminousFoundation",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

anastasiaBeautyBalmSkinTint: productData({
  category: "Skin Tint Balm",
  brand: "Anastasia Beverly Hills",
  name: "Beauty Balm Serum Boosted Skin Tint",
  type: "Serum-boosted balm skin tint / sheer-to-light coverage",
  sizes: ["stick"],
  image: skuImage("s2752848"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-beauty-balm-skin-serum-boosted-skin-tint-P511190"
  }),
  alternatives: {
    US: "rareBeautyPositiveLightTintedMoisturizer",
    FR: "fentyEazeDropBlurSmoothTintStick",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "fentyEazeDropBlurSmoothTintStick",
    BR: "fentyEazeDropBlurSmoothTintStick"
  }
}),

cliniqueMoistureSurgeCcCreamSpf30: productData({
  category: "CC Cream",
  brand: "CLINIQUE",
  name: "Moisture Surge™ CC Cream Hydrating Colour Corrector Broad Spectrum SPF 30",
  type: "Hydrating color-correcting CC cream / SPF 30",
  sizes: ["standard"],
  image: skuImage("s1509512"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/moisture-surge-cc-cream-hydrating-colour-corrector-broad-spectrum-spf-30-P378639"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamSpf50",
    FR: "itCosmeticsCcNudeGlowSkinTint",
    UK: "itCosmeticsCcCreamSpf50",
    AU: "iliaSuperSerumSkinTintSpf40",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

itCosmeticsCcIlluminationCreamSpf50: productData({
  category: "CC Cream",
  brand: "IT Cosmetics",
  name: "CC+ Cream Illumination with SPF 50+",
  type: "Radiant full-coverage CC cream / SPF 50+",
  sizes: ["mini", "standard"],
  image: skuImage("s1869015"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/your-skin-but-better-cc-illumination-cream-spf-50-P411884"
  }),
  alternatives: {
    US: "itCosmeticsCcNudeGlowSkinTint",
    FR: "fentySoftLitLuminousFoundation",
    UK: "itCosmeticsCcCreamSpf50",
    AU: "iliaSuperSerumSkinTintSpf40",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

gucciGlowSkinTintedMoisturizer: productData({
  category: "Tinted Moisturizer",
  brand: "Gucci",
  name: "Glow Skin Tinted Moisturizer with Hyaluronic Acid & Bakuchiol",
  type: "Glowy tinted moisturizer / hydrating skin tint",
  sizes: ["standard"],
  image: skuImage("s2834513"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/glow-skin-tinted-moisturizer-with-hyaluronic-acid-bakuchiol-P517009"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentySoftLitLuminousFoundation",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

kosasGlowIvSkinEnhancer: productData({
  category: "Glow Booster",
  brand: "Kosas",
  name: "Glow I.V. Vitamin-Infused Skin Illuminating Enhancer",
  type: "Illuminating skin enhancer / glow booster",
  sizes: ["standard"],
  image: skuImage("s2642411"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/kosas-glow-i-v-vitamin-infused-skin-illuminating-enhancer-P503896"
  }),
  alternatives: {
    US: "charlotteHollywoodFlawlessFilter",
    FR: "fentySoftLitLuminousFoundation",
    UK: "charlotteHollywoodFlawlessFilter",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

milkHydroGripGelTint: productData({
  category: "Skin Tint",
  brand: "MILK MAKEUP",
  name: "Hydro Grip 12-Hour Hydrating Gel Skin Tint",
  type: "Hydrating gel skin tint / 12-hour wear",
  sizes: ["standard"],
  image: skuImage("s2843183"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/milk-makeup-hydro-grip-12-hour-hydrating-gel-skin-tint-P515226",
    FR: "https://www.sephora.fr/p/hydro-grip-gel-tint---gel-teinte-hydratant-hydro-grip-12-heures-P10061406.html"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "fentyEazeDropBlurringSkinTint",
    BR: "fentyEazeDropBlurringSkinTint"
  }
}),

supergoopProtectintDailySpfTint: productData({
  category: "Tinted Sunscreen",
  brand: "Supergoop!",
  name: "Protec(tint) Daily SPF Tint SPF 50 Sunscreen Skin Tint with Ectoin",
  type: "Daily tinted SPF skin tint / SPF 50",
  sizes: ["standard"],
  image: skuImage("s2842219"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/protec-tint-daily-spf-tint-spf-50-sunscreen-skin-tint-with-ectoin-P515667"
  }),
  alternatives: {
    US: "liveTintedHueguardSkinTint",
    FR: "iliaSuperSerumSkinTintSpf40",
    UK: "summerFridaysSheerSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "fentyEazeDropBlurringSkinTint"
  }
}),

fentyEazeDropBlurringSkinTint: productData({
  category: "Skin Tint",
  brand: "Fenty Beauty by Rihanna",
  name: "Eaze Drop Blurring Skin Tint",
  type: "Blurring lightweight skin tint / natural finish",
  sizes: ["standard"],
  image: skuImage("s2431864"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025"
  }),
  alternatives: {
    US: "fentyEazeDropBlurSmoothTintStick",
    FR: "fentySoftLitLuminousFoundation",
    UK: "fentySoftLitLuminousFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

saieSlipTintTintedMoisturizer: productData({
  category: "Tinted Moisturizer",
  brand: "Saie",
  name: "Slip Tint Lightweight Tinted Moisturizer with Hyaluronic Acid",
  type: "Lightweight tinted moisturizer / dewy finish",
  sizes: ["standard"],
  image: skuImage("s2499465"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/saie-slip-tint-dewy-tinted-moisturizer-P478316"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

danessaMyricksYummySkinSerumTint: productData({
  category: "Serum Skin Tint",
  brand: "Danessa Myricks Beauty",
  name: "Yummy Skin Soothing Serum Skin Tint Foundation with Peptides + Ceramides",
  type: "Soothing serum skin tint / light coverage",
  sizes: ["standard"],
  image: skuImage("s2836641"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/yummy-skin-serum-tint-P506512"
  }),
  alternatives: {
    US: "danessaMyricksYummySkinSerumFoundation",
    FR: "hausLabsTricloneFoundation",
    UK: "hudaEasyBlurFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

refySkinBaseHydratingGelSkinTint: productData({
  category: "Skin Tint",
  brand: "REFY",
  name: "Skin Base Hydrating Gel Skin Tint with Hyaluronic Acid",
  type: "Hydrating gel skin tint / fresh finish",
  sizes: ["standard"],
  image: skuImage("s2938355"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/skin-base-hydrating-gel-skin-tint-with-hyaluronic-acid-P520680"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "milkHydroGripGelTint",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

oneSizeB12BaseThinnerLuminousSerum: productData({
  category: "Complexion Booster",
  brand: "ONE/SIZE by Patrick Starrr",
  name: "B12 Base Thinner Luminous Vitamin Pearl Boosting Serum",
  type: "Luminous vitamin serum / complexion booster",
  sizes: ["standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/b12-base-thinner-luminous-vitamin-pearl-boosting-serum-P515065"
  }),
  alternatives: {
    US: "kosasGlowIvSkinEnhancer",
    FR: "fentySoftLitLuminousFoundation",
    UK: "charlotteHollywoodFlawlessFilter",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

sephoraCollectionRevealTheRealSkinTint: productData({
  category: "Skin Tint",
  brand: "SEPHORA COLLECTION",
  name: "Reveal The Real 12HR Soft Radiant Skin Tint",
  type: "Soft radiant skin tint / 12-hour wear",
  sizes: ["standard"],
  image: skuImage("s2760726"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/reveal-real-soft-radiant-skin-tint-P511752"
  }),
  alternatives: {
    US: "fentyEazeDropBlurringSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

rareBeautyPositiveLightTintedMoisturizer: productData({
  category: "Tinted Moisturizer",
  brand: "Rare Beauty by Selena Gomez",
  name: "Positive Light Tinted Moisturizer",
  type: "Lightweight tinted moisturizer / natural glow",
  sizes: ["standard"],
  image: skuImage("s2557106"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-positive-light-tinted-moisturizer-P482728"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

tarteBbBlurTintedMoisturizer: productData({
  category: "BB Cream",
  brand: "tarte",
  name: "BB Blur Natural Matte Tinted Moisturizer",
  type: "Matte tinted moisturizer / BB cream",
  sizes: ["standard"],
  image: skuImage("s2757094"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/bb-tinted-treatment-12-hour-primer-P382096"
  }),
  alternatives: {
    US: "itCosmeticsCcNudeGlowSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "itCosmeticsCcCreamSpf50",
    AU: "summerFridaysSheerSkinTint",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

lauraMercierTintedBlurBalmSkinTint: productData({
  category: "Tinted Balm",
  brand: "Laura Mercier",
  name: "Tinted Blur Balm Skin Tint with Peptides",
  type: "Blurring tinted balm / light coverage",
  sizes: ["standard"],
  image: skuImage("s2938991"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tinted-blur-balm-skin-tint-with-peptides-P520503"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

makeUpForEverSuperBoostSkinTint: productData({
  category: "Skin Tint",
  brand: "MAKE UP FOR EVER",
  name: "Super Boost Lightweight Moisturizing Skin Tint with Hyaluronic and Polyglutamic Acids",
  type: "Moisturizing lightweight skin tint",
  sizes: ["standard"],
  image: skuImage("s2844538"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/super-boost-skin-tint-P515080"
  }),
  alternatives: {
    US: "makeUpForEverHdSkinHydraGlowFoundation",
    FR: "makeUpForEverHdSkinFoundation",
    UK: "makeUpForEverHdSkinFoundation",
    AU: "makeUpForEverHdSkinFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

glossierPerfectingSkinTint: productData({
  category: "Skin Tint",
  brand: "Glossier",
  name: "Perfecting Skin Tint for Dewy Sheer Coverage",
  type: "Dewy sheer coverage skin tint",
  sizes: ["standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/glossier-perfecting-skin-tint-for-dewy-sheer-coverage-P504782"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

beautyblenderRadiantSkinTint: productData({
  category: "Skin Tint",
  brand: "Beautyblender",
  name: "Bounce™ Always On Radiant Skin Tint",
  type: "Radiant 12-hour skin tint with hyaluronic acid",
  sizes: ["standard"],
  image: skuImage("s2477438"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/beautyblender-bounce-trade-always-on-radiant-skin-tint-P477136"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

narsPureRadiantTintedMoisturizer: productData({
  category: "Tinted Moisturizer",
  brand: "NARS",
  name: "Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30",
  type: "Radiant tinted moisturizer / SPF 30",
  sizes: ["standard"],
  image: skuImage("s1421429"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pure-radiant-tinted-moisturizer-P381737"
  }),
  alternatives: {
    US: "narsLightReflectingFoundation",
    FR: "narsLightReflectingFoundation",
    UK: "narsLightReflectingFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "narsLightReflectingFoundation"
  }
}),

bobbiBrownVitaminEnrichedSkinTint: productData({
  category: "Tinted Moisturizer",
  brand: "Bobbi Brown",
  name: "Vitamin Enriched Hydrating Skin Tint SPF 15 with Hyaluronic Acid",
  type: "Hydrating vitamin skin tint / SPF 15",
  sizes: ["standard"],
  image: skuImage("s2701639"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/vitamin-enriched-hydrating-skin-tint-spf-15-with-hyaluronic-acid-P506571"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentySoftLitLuminousFoundation",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

fentyEazeDropBlurSmoothTintStick: productData({
  category: "Tint Stick",
  brand: "Fenty Beauty by Rihanna",
  name: "Eaze Drop Blur + Smooth Tint Stick Foundation",
  type: "Blurring skin tint stick / smooth finish",
  sizes: ["stick"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/fenty-eaze-drop-blur-smooth-tint-stick-P507453"
  }),
  alternatives: {
    US: "fentyEazeDropBlurringSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "fentySoftLitLuminousFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

calirayFreedreamingSkinTint: productData({
  category: "Skin Tint",
  brand: "caliray",
  name: "Freedreaming Blurring Lightweight Skin Tint",
  type: "Lightweight blurring skin tint",
  sizes: ["standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/caliray-freedreaming-clean-blurring-skin-tint-P480579"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "hourglassVeilHydratingSkinTint",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

lixrBeautySkinShakeSerumTint: productData({
  category: "Serum Skin Tint",
  brand: "LIXR Beauty",
  name: "Skin Shake Bi-Phase Serum Skin Tint with Squalane",
  type: "Bi-phase serum skin tint / lightweight glow",
  sizes: ["standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lixr-skin-shake-bi-phase-serum-roller-P521067"
  }),
  alternatives: {
    US: "danessaMyricksYummySkinSerumTint",
    FR: "fentySoftLitLuminousFoundation",
    UK: "hudaEasyBlurFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "fentySoftLitLuminousFoundation"
  }
}),

smashboxHaloHealthyGlowTintedMoisturizer: productData({
  category: "Tinted Moisturizer",
  brand: "Smashbox",
  name: "Halo Healthy Glow Tinted Moisturizer Broad Spectrum SPF 25 with Hyaluronic Acid",
  type: "Healthy glow tinted moisturizer / SPF 25",
  sizes: ["standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/smashbox-halo-healthy-glow-tinted-moisturizer-broad-spectrum-spf-25-P460019"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "fentySoftLitLuminousFoundation",
    BR: "rareBeautyPositiveLightTintedMoisturizer"
  }
}),

lauraMercierNaturalDewySkinTint: productData({
  category: "Tinted Moisturizer",
  brand: "Laura Mercier",
  name: "Long-Wear Tinted Moisturizer Natural Dewy with Hyaluronic Acid",
  type: "Natural dewy tinted moisturizer / long-wear",
  sizes: ["mini", "standard"],
  image: "",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/skin-tint-natural-dewy-P514826"
  }),
  alternatives: {
    US: "hourglassVeilHydratingSkinTint",
    FR: "fentyEazeDropBlurringSkinTint",
    UK: "charlotteTilburyBeautifulSkinFoundation",
    AU: "rareBeautyPositiveLightTintedMoisturizer",
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
// CONCEALERS 
// -------------------------
  guerlainPreciousLightConcealer: productData({
  category: "Concealer",
  brand: "GUERLAIN",
  name: "Precious Light Illuminator and Concealer",
  type: "Radiant illuminating concealer pen",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s1197920-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/precious-light-illuminator-and-concealer-P249300"
  }),
  alternatives: {
    US: "armaniLuminousSilkConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

guerlainTerracottaNaturalPerfectionConcealer: productData({
  category: "Concealer",
  brand: "GUERLAIN",
  name: "Terracotta Natural Perfection Concealer",
  type: "Natural finish liquid-to-powder concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2772408-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/guerlain-terracotta-natural-perfection-concealer-P510719"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

danessaMyricksVisionCreamCoverConcealer: productData({
  category: "Concealer",
  brand: "Danessa Myricks Beauty",
  name: "Vision Cream Cover Adjustable Foundation & Concealer",
  type: "Adjustable foundation and concealer cream",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2443943-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/danessa-myricks-vision-cream-cover-2-in-1-foundation-concealer-P469460",
    CA: "https://www.sephora.com/ca/en/product/danessa-myricks-vision-cream-cover-2-in-1-foundation-concealer-P469460"
  }),
  alternatives: {
    FR: "hausLabsTricloneSkinTechConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

lixrBeautyMultiUseConcealerFoundationStick: productData({
  category: "Concealer",
  brand: "LIXR Beauty",
  name: "Multi-Use Cream-to-Powder Concealer & Foundation Stick",
  type: "Cream-to-powder concealer and foundation stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2955284-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lixr-complexion-stick-P521062",
    CA: "https://www.sephora.com/ca/en/product/lixr-complexion-stick-P521062"
  }),
  alternatives: {
    FR: "westmanAtelierVitalSkincareConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteShapeTapeBlurringConcealerStick: productData({
  category: "Concealer",
  brand: "tarte",
  name: "shape tape™ blurring concealer stick",
  type: "Blurring waterproof concealer and foundation stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2869865-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/shape-tape-tm-blur-concealer-stick-P515882",
    CA: "https://www.sephora.com/ca/en/product/shape-tape-tm-blur-concealer-stick-P515882"
  }),
  alternatives: {
    FR: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

anastasiaBeverlyHillsProPencil: productData({
  category: "Concealer",
  brand: "Anastasia Beverly Hills",
  name: "Highlighting & Concealing Eyebrow Pro Pencil",
  type: "Brow highlighter, concealer and eyeshadow base pencil",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s1622075-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/pro-pencil-P386783",
    CA: "https://www.sephora.com/ca/en/product/pro-pencil-P386783"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "benefitBoiIngCakelessConcealer"
  }
}),

cleDePeauBeauteTheConcealer: productData({
  category: "Concealer",
  brand: "Clé de Peau Beauté",
  name: "The Concealer",
  type: "Luxury stick concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2566222-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/cle-de-peau-beaute-the-concealor-P481967"
  }),
  alternatives: {
    US: "hourglassVanishAirbrushConcealer",
    FR: "westmanAtelierVitalSkincareConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

makeUpForEverFullCoverConcealer: productData({
  category: "Concealer",
  brand: "MAKE UP FOR EVER",
  name: "Full Cover Concealer",
  type: "Full-coverage waterproof matte concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s1247204-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/full-cover-concealer-P151107"
  }),
  alternatives: {
    US: "makeUpForEverHdSkinFullCoverConcealer",
    FR: "makeUpForEverHdSkinFullCoverConcealer",
    UK: "makeUpForEverHdSkinFullCoverConcealer",
    AU: "makeUpForEverHdSkinFullCoverConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteMaracujaCreaselessFullCoverageUndereyeConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "Maracuja Creaseless Full Coverage Radiant Undereye Concealer",
  type: "Full-coverage radiant under-eye concealer",
  sizes: ["standard", "mini"],
  image: "https://www.sephora.com/productimages/sku/s2094548-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/creaseless-concealer-P433206",
    CA: "https://www.sephora.com/ca/en/product/creaseless-concealer-P433206"
  }),
  alternatives: {
    FR: "tarteShapeTapeCreamyConcealer",
    UK: "charlotteTilburyBeautifulSkinRadiantConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteMiniMaracujaCreaselessUndereyeConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "Mini Maracuja Creaseless Full Coverage Radiant Undereye Concealer",
  type: "Mini full-coverage radiant under-eye concealer",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2252179-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-creaseless-under-eye-concealer-P447364",
    CA: "https://www.sephora.com/ca/en/product/mini-creaseless-under-eye-concealer-P447364"
  }),
  alternatives: {
    FR: "tarteShapeTapeCreamyConcealer",
    UK: "charlotteTilburyBeautifulSkinRadiantConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteMiniMaracujaCreaselessCreamyConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "Mini Maracuja Creaseless Creamy Liquid Concealer",
  type: "Mini creamy crease-proof concealer",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2783553-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/tarte-mini-maracuja-creamy-creaseless-concealer-P512244",
    CA: "https://www.sephora.com/ca/en/product/tarte-mini-maracuja-creamy-creaseless-concealer-P512244"
  }),
  alternatives: {
    FR: "tarteShapeTapeCreamyConcealer",
    UK: "charlotteTilburyBeautifulSkinRadiantConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteEssentialsShapeTapeMaracujaJuicyLipDuo: productData({
  category: "Concealer Set",
  brand: "tarte",
  name: "tarte™ essentials shape tape™ concealer & maracuja juicy lip duo",
  type: "Limited-edition concealer and lip oil duo",
  sizes: ["set", "travel-size"],
  image: "https://www.sephora.com/productimages/sku/s2945814-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-essentials-shape-tape-maracuja-juicy-lip-duo-P520776"
  }),
  alternatives: {
    US: "tarteShapeTapeMatteConcealer",
    FR: "tarteShapeTapeCreamyConcealer",
    UK: "tarteShapeTapeCreamyConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

chantecailleBioLiftingConcealer: productData({
  category: "Concealer",
  brand: "CHANTECAILLE",
  name: "Bio Lifting Concealer",
  type: "Peptide-infused smoothing concealer",
  sizes: ["standard"],
  image: "",
  links: countryLinks({}),
  alternatives: {
    US: "hourglassVanishAirbrushConcealer",
    CA: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),
  
  tarteShapeTapeHydratingColorCorrector: productData({
  category: "Concealer",
  brand: "tarte",
  name: "shape tape™ full coverage hydrating color corrector",
  type: "Full-coverage hydrating color corrector",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2955524-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/shape-tape-corrector-P521111",
    CA: "https://www.sephora.com/ca/en/product/shape-tape-corrector-P521111"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

tarteShapeTapeRadiantConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "shape tape™ radiant concealer",
  type: "Radiant medium-coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2700102-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/shape-tape-tm-radiant-concealer-P506424"
  }),
  alternatives: {
    US: "tarteShapeTapeCreamyConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyBeautifulSkinRadiantConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

milkSunshineUnderEyeConcealer: productData({
  category: "Concealer",
  brand: "MILK MAKEUP",
  name: "Sunshine Under Eye Brightening Light Coverage Concealer",
  type: "Light-coverage brightening under-eye concealer",
  sizes: ["standard", "refill"],
  image: "https://www.sephora.com/productimages/sku/s2487106-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/milk-makeup-sunshine-under-eye-brightening-light-coverage-concealer-P475966",
    CA: "https://www.sephora.com/ca/en/product/milk-makeup-sunshine-under-eye-brightening-light-coverage-concealer-P475966",
    FR: "https://www.sephora.fr/p/sunshine-under-eye-tint-brighten-P10018535.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

macProLongwearConcealer: productData({
  category: "Concealer",
  brand: "MAC Cosmetics",
  name: "Pro Longwear Concealer",
  type: "Long-wear liquid concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2095826-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pro-longwear-concealer-P18346978"
  }),
  alternatives: {
    US: "macStudioFix36HrSmoothAnglesConcealer",
    FR: "macStudioFix36HrSmoothAnglesConcealer",
    UK: "macStudioFix36HrSmoothAnglesConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

esteeLauderDoubleWearConcealer: productData({
  category: "Concealer",
  brand: "Estée Lauder",
  name: "Double Wear Stay-in-Place 24-Hour Longwear Concealer",
  type: "24-hour longwear multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2870418-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/double-wear-stay-in-place-24-hour-longwear-concealer-P516294",
    CA: "https://www.sephora.com/ca/en/product/double-wear-stay-in-place-24-hour-longwear-concealer-P516294",
    FR: "https://www.sephora.fr/p/double-wear---anti-cernes-zero-defaut-P1000206894.html"
  }),
  alternatives: {
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

lawlessConcealTheDealConcealer: productData({
  category: "Concealer",
  brand: "LAWLESS",
  name: "Conseal the Deal Lightweight Concealer",
  type: "Lightweight medium-to-full coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2511483-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lawless-conseal-deal-full-coverage-concealer-P482699",
    CA: "https://www.sephora.com/ca/en/product/lawless-conseal-deal-full-coverage-concealer-P482699",
    UK: "https://www.sephora.co.uk/p/lawless-beauty-conseal-the-deal-lightweight-concealer-5ml"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

danessaMyricksYummySkinLiftFlexConcealer: productData({
  category: "Concealer",
  brand: "Danessa Myricks Beauty",
  name: "Yummy Skin Lift & Flex Hydrating Concealer With Hyaluronic Acid & Caffeine",
  type: "Hydrating medium-to-full coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2792653-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-lift-flex-concealer-P511652",
    CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-yummy-skin-lift-flex-concealer-P511652"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

lauraMercierSecretBrighteningUnderEyePowder: productData({
  category: "Concealer",
  brand: "Laura Mercier",
  name: "Secret Brightening Color Correcting Longwear Under Eye Setting Powder",
  type: "Brightening under-eye setting powder",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s870675-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/secret-brightening-powder-P109911",
    CA: "https://www.sephora.com/ca/en/product/secret-brightening-powder-P109911"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

macStudioRadianceLuminousLiftConcealer: productData({
  category: "Concealer",
  brand: "MAC Cosmetics",
  name: "Studio Radiance 24HR Luminous Lift Buildable Hydrating Radiant Concealer",
  type: "Buildable hydrating radiant concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2807816-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mac-cosmetics-studio-radiance-24-hr-luminous-lift-concealer-P512537",
    FR: "https://www.sephora.fr/p/studio-radiance-concealer---anticernes-lumineux-longue-tenue-P1000203438.html",
    UK: "https://www.sephora.co.uk/p/m-a-c-studio-radiance-concealer-long-lasting-luminous-concealer"
  }),
  alternatives: {
    US: "macStudioFix36HrSmoothAnglesConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

liveTintedHueskinSerumConcealer: productData({
  category: "Concealer",
  brand: "Live Tinted",
  name: "Hueskin Serum Concealer",
  type: "Serum concealer with medium-to-full coverage",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2725836-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hueskin-serum-concealer-P508435"
  }),
  alternatives: {
    US: "tower28SwipeHydratingSerumConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

oneSizeTurnUpBaseButterSilkConcealer: productData({
  category: "Concealer",
  brand: "ONE/SIZE by Patrick Starrr",
  name: "Turn Up the Base Butter Silk Concealer",
  type: "Medium-to-full coverage smoothing concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2471951-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-buttersilk-concealer-P473741",
    CA: "https://www.sephora.com/ca/en/product/one-size-by-patrick-starrr-turn-up-base-buttersilk-concealer-P473741",
    UK: "https://www.sephora.co.uk/p/ONESIZE-Turn-Up-the-Base-Butter-Silk-Concealer-7ml"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

benefitBoiIngIndustrialStrengthConcealer: productData({
  category: "Concealer",
  brand: "Benefit Cosmetics",
  name: "Boi-ing Industrial Strength Full Coverage Cream Concealer",
  type: "Full-coverage matte cream concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s1951441-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/boi-ing-indistrial-strength-concealer-P1273",
    CA: "https://www.sephora.com/ca/en/product/boi-ing-indistrial-strength-concealer-P1273"
  }),
  alternatives: {
    FR: "benefitBoiIngCakelessConcealer",
    UK: "benefitBoiIngCakelessConcealer",
    AU: "benefitBoiIngCakelessConcealer",
    BR: "benefitBoiIngCakelessConcealer"
  }
}),

charlotteTilburyBeautifulSkinRadiantConcealer: productData({
  category: "Concealer",
  brand: "Charlotte Tilbury",
  name: "Beautiful Skin Medium to Full Coverage Radiant Concealer with Hyaluronic Acid",
  type: "Radiant medium-to-full coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2596617-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/beautiful-skin-radiant-concealer-P500407",
    FR: "https://www.sephora.fr/p/beautiful-skin-radiant-concealer---anti-cernes-lumineux-P1000207815.html"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

chantecailleCamouflagePrecisionConcealerStylo: productData({
  category: "Concealer",
  brand: "CHANTECAILLE",
  name: "Camouflage Precision Concealer Stylo",
  type: "Brightening precision concealer pen",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2963379-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/camouflage-precision-concealer-stylo-P521962"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),
  
  tarteMaracujaCreaselessConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "Maracuja Creaseless Creamy Liquid Concealer",
  type: "Full-coverage creamy crease-proof concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2772853-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/tarte-maracuja-creaseless-creamy-concealer-P512243",
    CA: "https://www.sephora.com/ca/en/product/tarte-maracuja-creaseless-creamy-concealer-P512243",
    FR: "https://www.sephora.fr/p/creaseless-concealer---anti-cerne-waterproof-P3643104.html",
    UK: "https://www.sephora.co.uk/p/tarte-maracuja-creaseless-concealer-6-4g",
    AU: "https://www.sephora.com.au/products/tarte-maracuja-creaseless-concealer"
  }),
  alternatives: {
    BR: "benefitBoiIngCakelessConcealer"
  }
}),

itCosmeticsByeByeDarkSpotsConcealerSerum: productData({
  category: "Concealer",
  brand: "IT Cosmetics",
  name: "Bye Bye Dark Spots Concealer + Serum",
  type: "Dark spot concealer serum with niacinamide",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2643872-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/it-cosmetics-bye-bye-dark-spots-concealer-P504805",
    CA: "https://www.sephora.com/ca/en/product/it-cosmetics-bye-bye-dark-spots-concealer-P504805",
    UK: "https://www.sephora.co.uk/p/it-cosmetics-bye-bye-dark-spot-concealer-6-2ml",
    AU: "https://www.sephora.com.au/products/it-cosmetics-bye-bye-dark-spots-concealer-plus-serum"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

gucciConcentreDeBeauteConcealer: productData({
  category: "Concealer",
  brand: "Gucci",
  name: "Concentré de Beauté Multi-Use Longwear Concealer",
  type: "Multi-use longwear hydrating concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2691939-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/concentre-de-beaute-concealer-P507784",
    CA: "https://www.sephora.com/ca/en/product/concentre-de-beaute-concealer-P507784",
    UK: "https://www.sephora.co.uk/p/gucci-concentre-de-beaute-concealer-8ml",
    AU: "https://www.sephora.com.au/products/gucci-beauty-concentre-de-beaute-liquid-concealer"
  }),
  alternatives: {
    FR: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

macStudioFix36HrSmoothAnglesConcealer: productData({
  category: "Concealer",
  brand: "MAC Cosmetics",
  name: "Studio Fix 36HR Smooth Wear Concealer",
  type: "Hydrating longwear matte concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2944056-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mac-studio-fix-36hr-smooth-angles-hydrating-concealer-P520523",
    CA: "https://www.sephora.com/ca/en/product/mac-studio-fix-36hr-smooth-angles-hydrating-concealer-P520523",
    FR: "https://www.sephora.fr/p/studio-fix-36h-smooth-angles-concealer---anti-cernes-matifiant-et-longue-tenue-P1000212997.html",
    UK: "https://www.sephora.co.uk/p/m-a-c-studio-fix-36hr-smooth-angles-concealer",
    BR: "https://www.sephora.com.br/corretivo-mac-soft-matte-studio-fix-36hr-sephora-9090813998-88995432.html"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer"
  }
}),

bobbiBrownSkinFullCoverConcealer: productData({
  category: "Concealer",
  brand: "Bobbi Brown",
  name: "Skin Full Cover Concealer",
  type: "Full-coverage longwear hydrating concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2595510-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/skin-full-cover-concealer-P501412",
    CA: "https://www.sephora.com/ca/en/product/skin-full-cover-concealer-P501412",
    FR: "https://www.sephora.fr/p/skin-full-cover-concealer---anticernes-P10045091.html",
    UK: "https://www.sephora.co.uk/p/bobbi-brown-skin-full-cover-concealer-8ml"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

bobbiBrownSkinConcealerStick: productData({
  category: "Concealer",
  brand: "Bobbi Brown",
  name: "Skin Concealer Stick",
  type: "Creamy concealer stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2552826-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/bobbi-brown-skin-concealer-stick-P480281",
    CA: "https://www.sephora.com/ca/en/product/bobbi-brown-skin-concealer-stick-P480281",
    FR: "https://www.sephora.fr/p/skin-concealer-stick---stick-anticernes-P10056445.html",
    UK: "https://www.sephora.co.uk/p/bobbi-brown-skin-concealer-stick-3g"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "benefitBoiIngCakelessConcealer"
  }
}),

lauraMercierRealFlawlessSerumConcealer: productData({
  category: "Concealer",
  brand: "Laura Mercier",
  name: "Real Flawless Weightless Perfecting Serum Concealer",
  type: "Weightless serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2747889-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/laura-mercier-real-flawless-weightless-perfecting-serum-concealer-P509848",
    CA: "https://www.sephora.com/ca/en/product/laura-mercier-real-flawless-weightless-perfecting-serum-concealer-P509848",
    FR: "https://www.sephora.fr/p/real-flawless-weightless-perfecting-concealer---correcteur-P10056343.html",
    UK: "https://www.sephora.co.uk/p/laura-mercier-real-flawless-weightless-perfecting-concealer-5-4ml"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

tomFordTracelessSoftMatteConcealer: productData({
  category: "Concealer",
  brand: "TOM FORD",
  name: "Traceless Soft Matte Concealer",
  type: "Soft matte hydrating invisible concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2647220-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/tom-ford-traceless-soft-matte-concealer-P505387",
    CA: "https://www.sephora.com/ca/en/product/tom-ford-traceless-soft-matte-concealer-P505387"
  }),
  alternatives: {
    FR: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

refySerumConcealer: productData({
  category: "Concealer",
  brand: "REFY",
  name: "Brightening and Blurring Serum Concealer with Plant-Derived Squalane",
  type: "Brightening serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2763282-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/refy-beauty-refy-brightening-blurring-serum-concealer-with-plant-derived-squalene-P511534",
    CA: "https://www.sephora.com/ca/en/product/refy-beauty-refy-brightening-blurring-serum-concealer-with-plant-derived-squalene-P511534",
    UK: "https://www.sephora.co.uk/p/refy-concealer-4-5ml"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

urbanDecayQuickieConcealer: productData({
  category: "Concealer",
  brand: "Urban Decay",
  name: "Quickie 24H Multi-Use Hydrating Full-Coverage Concealer",
  type: "Full-coverage hydrating multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2514297-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/urban-decay-naked-quickie-concealer-P503994",
    CA: "https://www.sephora.com/ca/en/product/urban-decay-naked-quickie-concealer-P503994",
    UK: "https://www.sephora.co.uk/p/urban-decay-stay-naked-quickie-multi-use-concealer-16-4ml"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "macStudioFix36HrSmoothAnglesConcealer"
  }
}),

benefitBoiIngCakelessConcealer: productData({
  category: "Concealer",
  brand: "Benefit Cosmetics",
  name: "Boi-ing Cakeless Full Coverage Waterproof Liquid Concealer",
  type: "Full-coverage waterproof liquid concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2305225-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/boi-ing-cakeless-concealer-P448162",
    CA: "https://www.sephora.com/ca/en/product/boi-ing-cakeless-concealer-P448162",
    FR: "https://www.sephora.fr/p/boiing-cakeless---anticernes-haute-couvrance-P3787003.html",
    UK: "https://www.sephora.co.uk/p/benefit-cosmetics-boi-ing-cakeless-concealer",
    AU: "https://www.sephora.com.au/products/benefit-cosmetics-boi-ing-cakeless-concealer",
    BR: "https://www.sephora.com.br/corretivo-liquido-benefit-boi-ing-cakeless-concealer-prd43796-16949.html"
  }),
  alternatives: {}
}),

itCosmeticsByeByeUnderEyeConcealer: productData({
  category: "Concealer",
  brand: "IT Cosmetics",
  name: "Bye Bye Under Eye Full Coverage Anti-Aging Waterproof Concealer",
  type: "Full-coverage waterproof under-eye concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2137834-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/bye-bye-under-eye-full-coverage-anti-aging-waterproof-concealer-P437987",
    CA: "https://www.sephora.com/ca/en/product/bye-bye-under-eye-full-coverage-anti-aging-waterproof-concealer-P437987"
  }),
  alternatives: {
    FR: "benefitBoiIngCakelessConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "benefitBoiIngCakelessConcealer"
  }
}),

itCosmeticsDoItAllRadiantConcealer: productData({
  category: "Concealer",
  brand: "IT Cosmetics",
  name: "Do It All Radiant Concealer",
  type: "Radiant serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2863066-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/do-it-all-radiant-concealer-P516055",
    CA: "https://www.sephora.com/ca/en/product/do-it-all-radiant-concealer-P516055"
  }),
  alternatives: {
    FR: "cliniqueEvenBetterAllOverConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "cliniqueEvenBetterAllOverConcealer"
  }
}),

cliniqueEvenBetterAllOverConcealer: productData({
  category: "Concealer",
  brand: "CLINIQUE",
  name: "Even Better All-Over Concealer + Eraser",
  type: "Full-coverage concealer with built-in sponge applicator",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2365021-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/clinique-even-better-all-over-concealer-eraser-P461436",
    CA: "https://www.sephora.com/ca/en/product/clinique-even-better-all-over-concealer-eraser-P461436",
    FR: "https://www.sephora.fr/p/even-better-sup-tm-%2Fsup--corrector-borrador-total-P10011913.html",
    UK: "https://www.sephora.co.uk/p/clinique-even-better-all-over-concealer-eraser",
    AU: "https://www.sephora.com.au/products/clinique-even-better-all-over-concealer-plus-eraser",
    BR: "https://www.sephora.com.br/Corretivo-Clinique-Even-Better-Concealer-44990266-44990266.html"
  }),
  alternatives: {}
}),

kvdGoodAppleLightweightConcealer: productData({
  category: "Concealer",
  brand: "KVD Beauty",
  name: "Good Apple Lightweight Full-Coverage Concealer",
  type: "Lightweight full-coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2517142-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/kvd-vegan-beauty-good-apple-lightweight-full-coverage-concealer-P481106",
    CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-good-apple-lightweight-full-coverage-concealer-P481106",
    FR: "https://www.sephora.fr/p/good-apple-lightweight-full-coverage-concealer-P10023758.html",
    UK: "https://www.sephora.co.uk/p/kvd-beauty-good-apple-lightweight-full-coverage-concealer"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "benefitBoiIngCakelessConcealer"
  }
}),
  
makeUpForEverHdSkinFullCoverConcealer: productData({
  category: "Concealer",
  brand: "MAKE UP FOR EVER",
  name: "HD Skin Full Cover Multi-Use Waterproof Concealer with Niacinamide",
  type: "Full-coverage waterproof multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2891497-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/make-up-for-ever-hd-skin-full-cover-concealer-P517846",
    CA: "https://www.sephora.com/ca/en/product/make-up-for-ever-hd-skin-full-cover-concealer-P517846",
    FR: "https://www.sephora.fr/p/hd-skin-full-cover-concealer-%E2%80%93-anti-cernes-multi-usages-haute-couvrance-P10062631.html",
    UK: "https://www.sephora.co.uk/p/make-up-for-ever-hd-skin-full-cover-concealer-9ml",
    AU: "https://www.sephora.com.au/products/make-up-for-ever-hd-skin-full-cover-multi-use-concealer-with-niacinamide-and-hyaluronic-acid"
  }),
  alternatives: {
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

makeUpForEverHdSkinSmoothBlurConcealer: productData({
  category: "Concealer",
  brand: "MAKE UP FOR EVER",
  name: "HD Skin Smooth & Blur Undetectable Under Eye Concealer",
  type: "Smoothing and blurring under-eye concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2689859-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/hd-skin-smooth-blur-undetectable-under-eye-concealer-P506568",
    CA: "https://www.sephora.com/ca/en/product/hd-skin-smooth-blur-undetectable-under-eye-concealer-P506568",
    FR: "https://www.sephora.fr/p/hd-skin-concealer-%E2%80%93-anti-cernes-imperceptible-P10060092.html",
    UK: "https://www.sephora.co.uk/p/make-up-for-ever-hd-skin-concealer-4-7ml",
    AU: "https://www.sephora.com.au/products/make-up-for-ever-hd-skin-concealer"
  }),
  alternatives: {
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

glossierStretchConcealer: productData({
  category: "Concealer",
  brand: "Glossier",
  name: "Stretch Concealer for Dewy Buildable Coverage",
  type: "Dewy buildable balm concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2702520-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/glossier-stretch-concealer-for-dewy-buildable-coverage-P504831",
    CA: "https://www.sephora.com/ca/en/product/glossier-stretch-concealer-for-dewy-buildable-coverage-P504831",
    UK: "https://www.sephora.co.uk/p/glossier-stretch-balm-concealer-for-dewy-buildable-coverage-4-8g"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

makeupByMarioSurrealSkinAwakeningConcealer: productData({
  category: "Concealer",
  brand: "MAKEUP BY MARIO",
  name: "SurrealSkin® Awakening Concealer",
  type: "Brightening lifting multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2681922-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/surrealskin-tm-awakening-concealer-P507792",
    CA: "https://www.sephora.com/ca/en/product/surrealskin-tm-awakening-concealer-P507792",
    FR: "https://www.sephora.fr/p/anticernes-illuminant-surrealskin%E2%84%A2---anticernes-illuminant-P10056566.html",
    UK: "https://www.sephora.co.uk/p/makeup-by-mario-surrealskin-awakening-concealer-5-8ml",
    AU: "https://www.sephora.com.au/products/makeup-by-mario-surrealskin-awakening-concealer"
  }),
  alternatives: {
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

lancomeTeintIdoleUltraWearAllOverConcealer: productData({
  category: "Concealer",
  brand: "Lancôme",
  name: "Teint Idole Ultra Wear All Over Full Coverage Concealer",
  type: "Full-coverage all-over concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2466944-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lancome-teint-idole-ultra-wear-all-over-full-coverage-concealer-P473717",
    CA: "https://www.sephora.com/ca/en/product/P473717",
    FR: "https://www.sephora.fr/p/teint-idole-ultra-wear-all-over-concealer---correcteur-et-fond-de-teint-2-en-1-P10018083.html",
    UK: "https://www.sephora.co.uk/p/lancome-teint-idole-ultra-wear-all-over-concealer-multi-tasking-concealer",
    AU: "https://www.sephora.com.au/products/lancome-teint-idole-ultra-wear-all-over-concealer"
  }),
  alternatives: {
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

milkFutureFluidConcealer: productData({
  category: "Concealer",
  brand: "MILK MAKEUP",
  name: "Future Fluid Creamy Longwear Hydrating Concealer with Hyaluronic Acid",
  type: "Creamy hydrating longwear concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2596070-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/future-fluid-all-over-cream-concealer-P500448",
    CA: "https://www.sephora.com/ca/en/product/future-fluid-all-over-cream-concealer-P500448",
    UK: "https://www.sephora.co.uk/p/milk-makeup-future-fluid-all-over-cream-concealer",
    AU: "https://www.sephora.com.au/products/milk-makeup-future-fluid-all-over-concealer"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

patrickTaMajorSkinSoftBlurConcealer: productData({
  category: "Concealer",
  brand: "PATRICK TA",
  name: "Major Skin Soft Blur Brightening Hydrating Concealer with Vitamin E",
  type: "Soft-blur brightening hydrating concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2927390-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/major-skin-soft-blur-brightening-hydrating-concealer-with-vitamin-e-P520636",
    CA: "https://www.sephora.com/ca/en/product/major-skin-soft-blur-brightening-hydrating-concealer-with-vitamin-e-P520636",
    AU: "https://www.sephora.com.au/products/patrick-ta-major-skin-concealer"
  }),
  alternatives: {
    FR: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

esteeLauderFuturistSoftTouchSkincealer: productData({
  category: "Concealer",
  brand: "Estée Lauder",
  name: "Futurist Soft Touch Brightening Skincealer with Vitamin C",
  type: "Brightening skincare concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2760544-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/estee-lauder-futurist-soft-touch-brightening-skincealer-concealer-P510141",
    FR: "https://www.sephora.fr/p/futurist-anti-cernes-soin-correcteur-de-teint-lumiere---anti-cernes-soin-P10054684.html",
    UK: "https://www.sephora.co.uk/p/estee-lauder-futurist-soft-touch-brightening-skincealer-6ml",
    AU: "https://www.sephora.com.au/products/estee-lauder-futurist-soft-touch-brightening-skincealer"
  }),
  alternatives: {
    US: "lancomeCareGlowSerumConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

lancomeCareGlowSerumConcealer: productData({
  category: "Concealer",
  brand: "Lancôme",
  name: "Care and Glow Serum Concealer with Hyaluronic Acid",
  type: "Hydrating glow serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2716157-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/care-glow-serum-concealer-P508271",
    FR: "https://www.sephora.fr/p/teint-idole-ultra-wear-care-et-glow---serum-correcteur-P10052663.html",
    UK: "https://www.sephora.co.uk/p/lancome-teint-idole-ultra-wear-care-glow-concealer-13ml",
    AU: "https://www.sephora.com.au/products/lancome-teint-idole-ultra-wear-care-and-glow-serum-concealer"
  }),
  alternatives: {
    US: "lancomeTeintIdoleUltraWearAllOverConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

kulfiMainMatchConcealer: productData({
  category: "Concealer",
  brand: "Kulfi",
  name: "Main Match Crease-Proof Long-Wear Hydrating Concealer",
  type: "Radiant crease-proof hydrating concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2609378-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/main-match-crease-proof-long-wear-hydrating-concealer-P501589",
    CA: "https://www.sephora.com/ca/en/product/P501589"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

fentyProFiltrInstantRetouchConcealer: productData({
  category: "Concealer",
  brand: "Fenty Beauty by Rihanna",
  name: "Pro Filt’r Instant Retouch Longwear Liquid Concealer",
  type: "Soft-matte longwear liquid concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2173367-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/pro-filt-r-instant-retouch-concealer-P88779809",
    CA: "https://www.sephora.com/ca/en/product/pro-filt-r-instant-retouch-concealer-P88779809",
    FR: "https://www.sephora.fr/p/pro-filt%E2%80%99r-instant-retouch-concealer--anticernes-retouche-instantanee-P3595009.html",
    UK: "https://www.sephora.co.uk/p/fenty-beauty-pro-filt-r-instant-retouch-concealer",
    AU: "https://www.sephora.com.au/products/fenty-beauty-pro-filtr-instant-retouch-concealer",
    BR: "https://www.sephora.com.br/corretivo-fenty-instant-retouch-concealer-prd45254-15566.html"
  }),
  alternatives: {}
}),

calirayHideawayColorCorrectorConcealer: productData({
  category: "Concealer",
  brand: "caliray",
  name: "Hideaway Brightening + Hydrating Under Eye Color Corrector Concealer",
  type: "Brightening hydrating color corrector concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2739365-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/caliray-hideaway-brightening-hydrating-under-eye-color-corrector-concealer-P510426"
  }),
  alternatives: {
    US: "saieHydrabeamConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),

saieHydrabeamConcealer: productData({
  category: "Concealer",
  brand: "Saie",
  name: "Hydrabeam Hydrating & Concealing Under Eye Brightener with Cucumber Extract",
  type: "Hydrating brightening under-eye concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2578920-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/saie-hydrabeam-brightening-hydrating-under-eye-concealer-P483685",
    CA: "https://www.sephora.com/ca/en/product/saie-hydrabeam-brightening-hydrating-under-eye-concealer-P483685"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "fentyProFiltrInstantRetouchConcealer"
  }
}),
  
pradaMicroCorrectingBlurringConcealer: productData({
  category: "Concealer",
  brand: "Prada",
  name: "Micro-Correcting Blurring Concealer with Peptides",
  type: "Blurring medium-buildable concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2928661-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/micro-correcting-blurring-concealer-with-peptides-P520649",
    CA: "https://www.sephora.com/ca/en/product/micro-correcting-blurring-concealer-with-peptides-P520649"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

sephoraBestSkinEverGlowConcealer: productData({
  category: "Concealer",
  brand: "SEPHORA COLLECTION",
  name: "Best Skin Ever Multi-Use Hydrating Glow Concealer",
  type: "Hydrating glow multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2710432-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/best-skin-ever-glow-concealer-P509539",
    CA: "https://www.sephora.com/ca/en/product/best-skin-ever-glow-concealer-P509539"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

anastasiaMagicTouchConcealer: productData({
  category: "Concealer",
  brand: "Anastasia Beverly Hills",
  name: "Magic Touch Medium to Full Coverage Concealer",
  type: "Medium-to-full coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2480481-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-concealer-P475045",
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-magic-touch-concealer-P475045"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

tarteShapeTapeMatteConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "shape tape™ full coverage matte concealer",
  type: "Full-coverage matte concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2452316-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/tarte-shape-tape-concealer-P471799",
    CA: "https://www.sephora.com/ca/en/product/tarte-shape-tape-concealer-P471799"
  }),
  alternatives: {
    FR: "tarteShapeTapeCreamyConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

westmanAtelierVitalSkincareConcealer: productData({
  category: "Concealer",
  brand: "Westman Atelier",
  name: "Vital Skincare Brightening Concealer With Hyaluronic Acid",
  type: "Brightening skincare concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2797728-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/westman-atelier-vital-skincare-brightening-concealer-with-hyaluronic-acid-P513533",
    CA: "https://www.sephora.com/ca/en/product/westman-atelier-vital-skincare-brightening-concealer-with-hyaluronic-acid-P513533"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

rareBeautyPositiveLightUnderEyeBrightener: productData({
  category: "Concealer",
  brand: "Rare Beauty by Selena Gomez",
  name: "Positive Light Under Eye Brightener",
  type: "Brightening under-eye concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2629418-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-under-eye-brightener-P503714",
    CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-under-eye-brightener-P503714"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

fentyWereEvenHydratingConcealer: productData({
  category: "Concealer",
  brand: "Fenty Beauty by Rihanna",
  name: "We're Even Hydrating Longwear Waterproof Concealer",
  type: "Hydrating longwear waterproof concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2746493-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/fenty-beauty-rihanna-we-re-even-hydrating-longwear-concealer-P509852",
    CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-we-re-even-hydrating-longwear-concealer-P509852"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

saieSlipTintRadiantConcealer: productData({
  category: "Concealer",
  brand: "Saie",
  name: "Slip Tint Radiant All-Over Concealer with Niacinamide",
  type: "Radiant all-over concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2752111-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/saie-slip-tint-radiant-all-over-concealer-with-niacinamide-P510438",
    CA: "https://www.sephora.com/ca/en/product/saie-slip-tint-radiant-all-over-concealer-with-niacinamide-P510438"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),
  
narsSoftMatteCompleteConcealer: productData({
  category: "Concealer",
  brand: "NARS",
  name: "Soft Matte Complete Full Coverage Longwear Concealer with Hyaluronic Acid",
  type: "Full-coverage soft matte concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2371425-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soft-matte-complete-concealer-P416200",
    CA: "https://www.sephora.com/ca/en/product/soft-matte-complete-concealer-P416200",
    FR: "https://www.sephora.fr/p/soft-matte-complete-concealer---anti-cernes-P2865006.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

natashaDenonaHyGlamSerumConcealer: productData({
  category: "Concealer",
  brand: "NATASHA DENONA",
  name: "Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer",
  type: "Brightening hydrating serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2671618-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800",
    CA: "https://www.sephora.com/ca/en/product/natasha-denona-hy-glam-concealer-P505800",
    FR: "https://www.sephora.fr/p/hy-glam-concealer---anticernes-P10050439.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

armaniLuminousSilkConcealer: productData({
  category: "Concealer",
  brand: "Armani Beauty",
  name: "Luminous Silk Hydrating Face and Under-Eye Concealer",
  type: "Hydrating brightening face and under-eye concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2340982-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158",
    CA: "https://www.sephora.com/ca/en/product/giorgio-armani-beauty-luminous-silk-concealer-P456158",
    FR: "https://www.sephora.fr/p/luminous-silk-multi-purpose-glow-concealer-P4010109.html"
  }),
  alternatives: {
    UK: "charlotteTilburyAirbrushFlawlessBlurConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

iliaSkinBlurSerumConcealer: productData({
  category: "Concealer",
  brand: "ILIA",
  name: "Skin Blur Serum Concealer with 12-Hour Wear",
  type: "Blurring serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2893097-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/skin-blur-hydrating-serum-concealer-P520377",
    CA: "https://www.sephora.com/ca/en/product/skin-blur-hydrating-serum-concealer-P520377",
    FR: "https://www.sephora.fr/p/correcteur-serum-skin-blur-d-une-tenue-de-12-heures-P1000213621.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

milkHydroGripGelStickConcealer: productData({
  category: "Concealer",
  brand: "MILK MAKEUP",
  name: "Hydro Grip 12HR Hydrating Gel Stick Concealer",
  type: "Hydrating gel stick concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2938694-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/milk-hydro-grip-gel-concealer-P520574",
    CA: "https://www.sephora.com/ca/en/product/milk-hydro-grip-gel-concealer-P520574"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

fentyBrightFixEyeBrightenerConcealer: productData({
  category: "Concealer",
  brand: "Fenty Beauty by Rihanna",
  name: "Bright Fix Eye Brightener Concealer",
  type: "Brightening under-eye concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2465987-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/fenty-beauty-rihanna-bright-fix-eye-brightener-concealer-P472161",
    CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-bright-fix-eye-brightener-concealer-P472161"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

lysBeautyTripleFixBrighteningConcealer: productData({
  category: "Concealer",
  brand: "LYS Beauty",
  name: "Triple Fix Brightening Concealer",
  type: "Brightening creamy concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2549442-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lys-beauty-triple-fix-brightening-concealer-P480618",
    AU: "https://www.sephora.com.au/products/lys-beauty-triple-fix-brightening-concealer"
  }),
  alternatives: {
    US: "sephoraBestSkinEverMultiUseConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

diorBackstageFlashPerfectorConcealer: productData({
  category: "Concealer",
  brand: "DIOR BACKSTAGE",
  name: "Backstage Flash Perfector Concealer",
  type: "Waterproof high-coverage concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2509651-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/dior-backstage-concealer-P482262",
    CA: "https://www.sephora.com/ca/en/product/dior-backstage-concealer-P482262"
  }),
  alternatives: {
    FR: "hourglassVanishAirbrushConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "hourglassVanishAirbrushConcealer"
  }
}),
  
morpheWakeupArtistCorrectingConcealer: productData({
  category: "Concealer",
  brand: "Morphe",
  name: "Wakeup Artist Under Eye Correcting Concealer",
  type: "Under-eye correcting concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2850915-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/wakeup-artist-under-eye-correcting-concealer-P515502"
  }),
  alternatives: {
    US: "sephoraBestSkinEverMultiUseConcealer",
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

sephoraBestSkinEverMultiUseConcealer: productData({
  category: "Concealer",
  brand: "SEPHORA COLLECTION",
  name: "Best Skin Ever Multi-Use Concealer",
  type: "Hydrating medium-coverage multi-use concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2886836-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/sephora-collection-best-skin-ever-natural-concealer-P517323",
    CA: "https://www.sephora.com/ca/en/product/sephora-collection-best-skin-ever-natural-concealer-P517323",
    FR: "https://www.sephora.fr/p/best-skin-ever---anticerne-multi-usages-P10062277.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

tower28SwipeHydratingSerumConcealer: productData({
  category: "Concealer",
  brand: "Tower 28 Beauty",
  name: "Swipe All-Over Hydrating Serum Concealer with 18-HR Wear",
  type: "Hydrating serum concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2945053-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/swipe-all-over-hydrating-serum-concealer-P507142",
    CA: "https://www.sephora.com/ca/en/product/swipe-all-over-hydrating-serum-concealer-P507142"
  }),
  alternatives: {
    FR: "sephoraBestSkinEverMultiUseConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

hourglassVanishAirbrushConcealer: productData({
  category: "Concealer",
  brand: "Hourglass",
  name: "Vanish™ Airbrush Concealer",
  type: "Full-coverage airbrush liquid concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2857159-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/hourglass-vanish-airbrush-concealer-P454042",
    CA: "https://www.sephora.com/ca/en/product/hourglass-vanish-airbrush-concealer-P454042",
    FR: "https://www.sephora.fr/p/vanish-airbrush-concealer---anticernes-P3959108.html",
    UK: "https://www.sephora.co.uk/p/hourglass-vanish-airbrush-concealer-6ml"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

charlotteTilburyAirbrushFlawlessBlurConcealer: productData({
  category: "Concealer",
  brand: "Charlotte Tilbury",
  name: "Airbrush Flawless Crease-Proof Long-Wear Blur Concealer with Hyaluronic Acid",
  type: "Full-coverage long-wear blurring concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2941888-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870",
    CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870",
    FR: "https://www.sephora.fr/p/airbrush-flawless-blur-concealer-%E2%80%93-correcteur-hydratant-longue-duree-P1000211922.html",
    UK: "https://www.sephora.co.uk/p/charlotte-tilbury-airbrush-flawless-blur-concealer-flawless-concealer"
  }),
  alternatives: {
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

hausLabsTricloneSkinTechConcealer: productData({
  category: "Concealer",
  brand: "HAUS LABS BY LADY GAGA",
  name: "Triclone Skin Tech Hydrating + De-puffing Concealer with Fermented Arnica",
  type: "Hydrating and de-puffing concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2696920-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/triclone-skin-tech-hydrating-concealer-with-fermented-arnica-P507110",
    CA: "https://www.sephora.com/ca/en/product/triclone-skin-tech-hydrating-concealer-with-fermented-arnica-P507110",
    FR: "https://www.sephora.fr/p/triclone-skin-tech-hydrating-concealer-with-fermented-arnica---correcteur-P10052817.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

tarteShapeTapeCreamyConcealer: productData({
  category: "Concealer",
  brand: "tarte",
  name: "shape tape™ hydrating full coverage creamy concealer",
  type: "Hydrating full-coverage creamy concealer",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2821478-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/tarte-shape-tape-tm-ultra-creamy-concealer-P514043",
    CA: "https://www.sephora.com/ca/en/product/tarte-shape-tape-tm-ultra-creamy-concealer-P514043",
    FR: "https://www.sephora.fr/p/shape-tape---anticernes-ultra-cremeux-P10014456.html"
  }),
  alternatives: {
    UK: "hourglassVanishAirbrushConcealer",
    AU: "sephoraBestSkinEverMultiUseConcealer",
    BR: "diorForeverSkinCorrectConcealer"
  }
}),

diorForeverSkinCorrectConcealer: productData({
  category: "Concealer",
  brand: "DIOR",
  name: "Forever Skin Correct Full-Coverage Concealer",
  type: "Full-coverage 24H concealer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2639318-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/dior-dior-forever-skin-correct-concealer-P454348",
    CA: "https://www.sephora.com/ca/en/product/dior-dior-forever-skin-correct-concealer-P454348"
  }),
  alternatives: {
    FR: "hourglassVanishAirbrushConcealer",
    UK: "hourglassVanishAirbrushConcealer",
    AU: "tarteShapeTapeCreamyConcealer",
    BR: "hourglassVanishAirbrushConcealer"
  }
}),
  
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

nudestixNudescreenSpf30BlushTint: productData({
  category: "Blush",
  brand: "NUDESTIX",
  name: "Nudescreen SPF 30 Blush Tint",
  type: "SPF 30 liquid blush tint for cheeks, lips and eyes",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2756039-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/nudestix-nudescreen-blush-lip-tint-spf-30-P509877",
    CA: "https://www.sephora.com/ca/en/product/nudestix-nudescreen-blush-lip-tint-spf-30-P509877"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

lixrLixstickCreamyLipCheekTintStick: productData({
  category: "Blush",
  brand: "LIXR Beauty",
  name: "Lixstick™ Creamy Lip + Cheek Tint Stick",
  type: "Creamy lip and cheek tint stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2955201-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lixr-lixstick-multi-tint-P521064",
    CA: "https://www.sephora.com/ca/en/product/lixr-lixstick-multi-tint-P521064"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

tomFordSoleilSunkissedLiquidCreamBlush: productData({
  category: "Blush",
  brand: "TOM FORD",
  name: "Soleil Sunkissed Liquid Cream Blush",
  type: "Liquid cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2966547-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soleil-sunkissed-liquid-cream-blush-P522109",
    CA: "https://www.sephora.com/ca/en/product/soleil-sunkissed-liquid-cream-blush-P522109"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

isamayaSkinEnhancingDuoCreamBlushHighlighter: productData({
  category: "Blush",
  brand: "ISAMAYA",
  name: "Skin Enhancing Duo - Cream Blush and Highlighter",
  type: "Cream blush and highlighter duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2855559-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/skin-enhancing-duo-cream-blush-highlighter-P515454",
    CA: "https://www.sephora.com/ca/en/product/skin-enhancing-duo-cream-blush-highlighter-P515454"
  }),
  alternatives: {
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

macSkinfinishColourstruckBlush: productData({
  category: "Blush",
  brand: "MAC Cosmetics",
  name: "Skinfinish Colourstruck Blush",
  type: "Buildable powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2968303-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/skinfinish-colourstruck-blush-P522303",
    CA: "https://www.sephora.com/ca/en/product/skinfinish-colourstruck-blush-P522303"
  }),
  alternatives: {
    FR: "macGlowPlayCushionyBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

macStrobeBeamLiquidBlush: productData({
  category: "Blush",
  brand: "MAC Cosmetics",
  name: "Strobe Beam Illuminating Liquid Blush with Buildable Coverage",
  type: "Illuminating liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2837466-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/strobe-beam-liquid-blush-P515912",
    CA: "https://www.sephora.com/ca/en/product/strobe-beam-liquid-blush-P515912"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

chantecailleCheekGeleeHydratingGelCreamBlush: productData({
  category: "Blush",
  brand: "CHANTECAILLE",
  name: "Cheek Gelée Hydrating Gel-Cream Blush",
  type: "Hydrating gel-cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2972230-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/cheek-gelee-hydrating-gel-cream-blush-P521950"
  }),
  alternatives: {
    US: "saieDewBlushLiquidCreamBlush",
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

anastasiaMagicTouchCreamBlushLipTrio: productData({
  category: "Blush",
  brand: "Anastasia Beverly Hills",
  name: "Magic Touch Cream Blush & Lip Trio",
  type: "Cream blush and lip trio",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2873594-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-blush-trio-P516915",
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-magic-touch-blush-trio-P516915"
  }),
  alternatives: {
    FR: "tarteMacaronBlushGlowDuo",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

kvdEverlastingBlush: productData({
  category: "Blush",
  brand: "KVD Beauty",
  name: "Everlasting Blush",
  type: "Long-wear powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2307940-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-everlasting-blush-P454732",
    FR: "https://www.sephora.fr/p/everlasting-blush-P3967160.html",
    UK: "https://www.sephora.co.uk/p/kvd-beauty-everlasting-blush"
  }),
  alternatives: {
    US: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

guerlainTerracottaHealthyGlowPowderBlush: productData({
  category: "Blush",
  brand: "GUERLAIN",
  name: "Terracotta Healthy Glow Powder Blush",
  type: "Healthy glow powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2778801-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/guerlain-terracotta-healthy-glow-powder-blush-P510720"
  }),
  alternatives: {
    US: "gucciLuminousMattePowderBlush",
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

liveTintedBlushCrushLiquidBlush: productData({
  category: "Blush",
  brand: "Live Tinted",
  name: "Blush Crush Liquid Blush",
  type: "Liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2782068-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/live-tinted-blush-crush-liquid-blush-P512735"
  }),
  alternatives: {
    US: "saieDewBlushLiquidCreamBlush",
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

charlotteTilburyMatteBeautyBlushWand: productData({
  category: "Blush",
  brand: "Charlotte Tilbury",
  name: "Matte Beauty Blush Wand",
  type: "Matte liquid blush wand",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2697829-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/matte-beauty-blush-wands-P504020",
    CA: "https://www.sephora.com/ca/en/product/matte-beauty-blush-wands-P504020"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

glossierCloudPaintPlushBlush: productData({
  category: "Blush",
  brand: "Glossier",
  name: "Cloud Paint Plush Blush",
  type: "Soft-matte plush blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2902617-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/cloud-paint-plush-blush-P518494",
    CA: "https://www.sephora.com/ca/en/product/cloud-paint-plush-blush-P518494"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tower28GetSetMattePowderBlush: productData({
  category: "Blush",
  brand: "Tower 28 Beauty",
  name: "GetSet® Blur + Set Matte Powder Blush",
  type: "Matte powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2843084-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/getset-blur-set-matte-powder-blush-P514892",
    CA: "https://www.sephora.com/ca/en/product/getset-blur-set-matte-powder-blush-P514892",
    UK: "https://www.sephora.co.uk/p/tower-28-getset-blur-set-matte-powder-blush-4g"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

saieGlowSculptHighlightingBlush: productData({
  category: "Blush",
  brand: "Saie",
  name: "Glow Sculpt Multi-Use Cream Highlighting Blush",
  type: "Cream highlighting blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2679462-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/saie-the-glow-sculpt-P505541",
    CA: "https://www.sephora.com/ca/en/product/saie-the-glow-sculpt-P505541"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

hudaBeautyMiniBlushMocktailDuo: productData({
  category: "Blush",
  brand: "HUDA BEAUTY",
  name: "Mini Blush Mocktail Duos",
  type: "Mini blush duo",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2963239-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-blush-mocktail-duos-P522100",
    CA: "https://www.sephora.com/ca/en/product/mini-blush-mocktail-duos-P522100"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

benefitCheekBudsLimitedEditionPalette: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "Cheek Buds Limited-Edition Cheek Palette",
  type: "Cheek palette with bronzer, blushes and highlighter",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2930865-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-bloom-full-face-palette-P521492"
  }),
  alternatives: {
    US: "oneSizeCheekClapper3DBlushTrio",
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

nudestixMiniPinkNudeBlushKit: productData({
  category: "Blush",
  brand: "NUDESTIX",
  name: "Mini Pink Nude Blush 3 PC Kit",
  type: "Mini blush stick kit",
  sizes: ["mini", "value"],
  image: "https://www.sephora.com/productimages/sku/s2647667-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/nudestix-mini-pink-nude-blush-3-pc-kit-P505577"
  }),
  alternatives: {
    US: "nudestixNudiesMatteGlowCoreBlush",
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

lysHigherStandardSatinMatteCreamBlush: productData({
  category: "Blush",
  brand: "LYS Beauty",
  name: "Higher Standard Satin Matte Cream Blush",
  type: "Satin matte cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2419935-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lys-beauty-higher-standard-satin-matte-cream-blush-P468384"
  }),
  alternatives: {
    US: "lysBeautyHigherStandardCreamGlowBlushStick",
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

makeUpForEverArtistLiquidColorBlush: productData({
  category: "Blush",
  brand: "MAKE UP FOR EVER",
  name: "Artist Liquid Color Waterproof Liquid Blush for Lip + Cheek",
  type: "Waterproof liquid blush for lip and cheek",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2943249-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/artist-liquid-color-P520538",
    CA: "https://www.sephora.com/ca/en/product/artist-liquid-color-P520538"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

natashaDenonaRoseCheekDuo: productData({
  category: "Blush",
  brand: "NATASHA DENONA",
  name: "Rose Cheek Duo - Cream Blush and Highlighter",
  type: "Cream blush and highlighter duo",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2470698-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/natasha-denona-rose-cheek-duo-P479977"
  }),
  alternatives: {
    US: "natashaDenonaHyBlushCloudyCreamCheekDuo",
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

natashaDenonaMyMiniDreamGlowBlush: productData({
  category: "Blush",
  brand: "NATASHA DENONA",
  name: "My Mini Dream Glow Blush",
  type: "Mini blush and highlighter trio",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2743375-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533",
    CA: "https://www.sephora.com/ca/en/product/natasha-denona-my-mini-dream-glow-blush-P509533"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

charlotteTilburyMiniHollywoodBlushGlowPalette: productData({
  category: "Blush",
  brand: "Charlotte Tilbury",
  name: "Mini Hollywood Blush & Glow Palette",
  type: "Mini blush and highlighter palette",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2705440-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700",
    CA: "https://www.sephora.com/ca/en/product/mini-hollywood-blush-glow-set-shade-1-P508700"
  }),
  alternatives: {
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tooFacedSunBunnyBlushingBronzer: productData({
  category: "Blush",
  brand: "Too Faced",
  name: "Sun Bunny Luminous Blushing Bronzer",
  type: "Blushing bronzer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2966083-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/sun-bunny-luminous-blushing-bronzer-P522127",
    CA: "https://www.sephora.com/ca/en/product/sun-bunny-luminous-blushing-bronzer-P522127"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

caliraySocalSuperbloomLipCheekTint: productData({
  category: "Blush",
  brand: "caliray",
  name: "Socal Superbloom Dewy Lip + Cheek Soft Stain Tint",
  type: "Dewy lip and cheek tint",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2652923-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322",
    CA: "https://www.sephora.com/ca/en/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

sephoraCollectionBlushMultiuseCreamBlush: productData({
  category: "Blush",
  brand: "SEPHORA COLLECTION",
  name: "Blush! Multiuse Cream Blush",
  type: "Multi-use cream-to-powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2960367-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/multiuse-cream-blush-P522057",
    CA: "https://www.sephora.com/ca/en/product/multiuse-cream-blush-P522057",
    FR: "https://www.sephora.fr/p/blush----blush-creme-multi-usage-P1000213391.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

sephoraCollectionBlushBlushBlushPalette: productData({
  category: "Blush",
  brand: "SEPHORA COLLECTION",
  name: "Blush Blush Blush. Cream & Powder Palette",
  type: "Cream and powder blush palette",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2870897-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/blush-blush-blush-palette-P516069",
    CA: "https://www.sephora.com/ca/en/product/blush-blush-blush-palette-P516069"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

benefitWanderfulWorldSilkySoftPowderBlush: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "WANDERful World Silky-Soft Powder Blush",
  type: "Silky-soft powder blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2872166-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/box-o-powder-blush-P500253",
    CA: "https://www.sephora.com/ca/en/product/box-o-powder-blush-P500253"
  }),
  alternatives: {
    FR: "cliniqueCheekPopBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

rareBeautySoftPinchMatteBouncyBlush: productData({
  category: "Blush",
  brand: "Rare Beauty by Selena Gomez",
  name: "Soft Pinch Matte Bouncy Blush",
  type: "Cream-to-powder matte bouncy blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2936425-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soft-pinch-matte-bouncy-blush-P515519",
    CA: "https://www.sephora.com/ca/en/product/soft-pinch-matte-bouncy-blush-P515519",
    FR: "https://www.sephora.fr/p/soft-pinch-matte-bouncy-blush---blush-mat-effet-cocon-P1000206857.html"
  }),
  alternatives: {
    UK: "rareBeautySoftPinchLiquidBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

danessaMyricksDewyCheekLipPalette: productData({
  category: "Blush",
  brand: "Danessa Myricks Beauty",
  name: "Dewy Cheek & Lip Palette",
  type: "Cream cheek and lip palette",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2541316-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-dewy-cheek-lip-palette-P479949"
  }),
  alternatives: {
    US: "danessaMyricksYummySkinFlushedBlush",
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

makeupByMarioMiniSoftPopBlushStick: productData({
  category: "Blush",
  brand: "MAKEUP BY MARIO",
  name: "Mini Soft Pop Blush Stick",
  type: "Mini cream blush stick",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2867588-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-soft-pop-blush-stick-P516161",
    CA: "https://www.sephora.com/ca/en/product/mini-soft-pop-blush-stick-P516161"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

makeUpForEverHdSkinBlushGlowPalette: productData({
  category: "Blush",
  brand: "MAKE UP FOR EVER",
  name: "HD Skin Blush & Glow Longwear Cream Face Palette",
  type: "Cream blush and glow face palette",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2844660-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035",
    CA: "https://www.sephora.com/ca/en/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

charlotteTilburyUnrealLipCheekGlowBlushStick: productData({
  category: "Blush",
  brand: "Charlotte Tilbury",
  name: "Unreal Lip + Cheek Glow Blush Stick with Hyaluronic Acid",
  type: "Radiant lip and cheek blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2868123-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/unreal-blush-P516850",
    CA: "https://www.sephora.com/ca/en/product/unreal-blush-P516850",
    FR: "https://www.sephora.fr/p/unreal-blush-healthy-glow-stick----blush-creme-en-stick-P1000208103.html",
    UK: "https://www.sephora.co.uk/p/charlotte-tilbury-unreal-blush-healthy-glow-stick-9g"
  }),
  alternatives: {
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),
  
oneSizeCheekClapper3DBlushTrio: productData({
  category: "Blush",
  brand: "ONE/SIZE by Patrick Starrr",
  name: "Cheek Clapper 3D Blush Trio Palette",
  type: "Cream, matte and shimmer blush trio",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2656296-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/one-size-by-patrick-starrr-cheek-clapper-3d-blush-trio-palette-P482709",
    CA: "https://www.sephora.com/ca/en/product/one-size-by-patrick-starrr-cheek-clapper-3d-blush-trio-palette-P482709"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

diorRougeBlush: productData({
  category: "Blush",
  brand: "DIOR",
  name: "Rouge Blush",
  type: "Long-wearing powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2686962-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rouge-blush-P442793",
    CA: "https://www.sephora.com/ca/en/product/rouge-blush-P442793"
  }),
  alternatives: {
    FR: "givenchyPrismeLibreLoosePowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

sephoraCollectionBlushGoLiquidBlush: productData({
  category: "Blush",
  brand: "SEPHORA COLLECTION",
  name: "Blush & Go Longwear Matte Liquid Blush For Lip and Cheek",
  type: "Matte liquid blush for lips and cheeks",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2871077-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/sephora-collection-blush-go-matte-liquid-blush-P515938",
    CA: "https://www.sephora.com/ca/en/product/sephora-collection-blush-go-matte-liquid-blush-P515938",
    FR: "https://www.sephora.fr/p/blush-et-go---blush-liquide-fini-mat-P10061918.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "hudaBeautyBlushFilterSoftGlowLiquidBlush"
  }
}),

westmanAtelierBabyCheeksPowderBlushDuo: productData({
  category: "Blush",
  brand: "Westman Atelier",
  name: "Baby Cheeks Powder Blush Duo",
  type: "Powder blush duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2869147-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/westman-atelier-baby-cheeks-powder-blush-duo-P516090",
    CA: "https://www.sephora.com/ca/en/product/westman-atelier-baby-cheeks-powder-blush-duo-P516090"
  }),
  alternatives: {
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

narsTheMultipleSoftBlurBlushStick: productData({
  category: "Blush",
  brand: "NARS",
  name: "The Multiple Soft Blur Blush Stick for Cheeks, Eyes and Lips",
  type: "Multi-use soft blur blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2891901-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/nars-the-mulitple-P517845",
    CA: "https://www.sephora.com/ca/en/product/nars-the-mulitple-P517845",
    FR: "https://www.sephora.fr/p/the-multiple---stick-de-maquillage-multi-usage-P1000208749.html"
  }),
  alternatives: {
    UK: "meritFlushBalmCreamBlush",
    AU: "westmanAtelierBabyCheeksBlushStick",
    BR: "makeupByMarioSoftPopCreamBlushStick"
  }
}),

beautyblenderBounceLiquidWhipCreamBlush: productData({
  category: "Blush",
  brand: "Beautyblender",
  name: "Bounce™ Liquid Whip Cream Blush",
  type: "Whipped cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2477461-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/beautyblender-bounce-liquid-whip-cream-blush-P475051"
  }),
  alternatives: {
    US: "tower28BeachpleaseCreamBlush",
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

cliniqueChubbyStickCheekColourBalmCreamBlush: productData({
  category: "Blush",
  brand: "CLINIQUE",
  name: "Chubby Stick™ Cheek Colour Balm Cream Blush",
  type: "Cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2922193-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/chubby-stick-cheek-colour-balm-cream-blush-P520221",
    FR: "https://www.sephora.fr/p/chubby-stick%E2%84%A2---fard-a-joues-creme-P1000212251.html"
  }),
  alternatives: {
    US: "westmanAtelierBabyCheeksBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

lauraMercierBlushColorInfusion: productData({
  category: "Blush",
  brand: "Laura Mercier",
  name: "Blush Color Infusion",
  type: "Longwear powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2117513-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/blush-colour-infusion-P433131",
    FR: "https://www.sephora.fr/p/blush-colour-infusion---blush-infusion-de-couleur-P3452046.html"
  }),
  alternatives: {
    US: "gucciLuminousMattePowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

benefitPlayDazeAiryLiquidBlush: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "Play Daze Airy Liquid Blush",
  type: "Airy soft-matte liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2936250-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/play-daze-airy-liquid-blush-P520082",
    CA: "https://www.sephora.com/ca/en/product/play-daze-airy-liquid-blush-P520082",
    FR: "https://www.sephora.fr/p/play-daze---blush-liquide-fini-mat-velours-P10063888.html"
  }),
  alternatives: {
    UK: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

fentyShakeNPlayLiquidBlush: productData({
  category: "Blush",
  brand: "Fenty Beauty by Rihanna",
  name: "Shake N' Play Liquid Blush",
  type: "Buildable waterproof liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2978831-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/shake-n-play-liquid-blush-P522446",
    CA: "https://www.sephora.com/ca/en/product/shake-n-play-liquid-blush-P522446",
    FR: "https://www.sephora.fr/p/shake--n-play---blush-liquide-modulable-P10064039.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

fentyCheeksSuedePowderBlush: productData({
  category: "Blush",
  brand: "Fenty Beauty by Rihanna",
  name: "Fenty Cheeks Suede Waterproof Powder Blush",
  type: "Waterproof powder blush",
  sizes: ["standard"],
  image: "https://media.sephora.eu/content/dam/digital/pim/published/F/FENTY_BEAUTY/728140/348251-media_swatch.jpg?scaleHeight=750&scaleMode=fit&scaleWidth=750",
  links: countryLinks({
    FR: "https://www.sephora.fr/p/fenty-cheeks---fard-a-joue-en-poudre-P1000206202.html",
    AU: "https://www.sephora.com.au/products/fenty-beauty-cheeks-suede-powder-blush"
  }),
  alternatives: {
    US: "sephoraCollectionColorfulBlush",
    CA: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

sephoraCollectionColorfulBlush: productData({
  category: "Blush",
  brand: "SEPHORA COLLECTION",
  name: "Sephora Colorful® Blush",
  type: "Matte and shimmer powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2496065-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/sephora-colorful-blush-P433005",
    CA: "https://www.sephora.com/ca/en/product/sephora-colorful-blush-P433005",
    FR: "https://www.sephora.fr/p/colorful-blush---blush-poudre-P10046084.html"
  }),
  alternatives: {
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

sephoraCollectionColorfulBlushGlaze: productData({
  category: "Blush",
  brand: "SEPHORA COLLECTION",
  name: "Colorful Blush and Highlighter Glaze",
  type: "Radiant blush and highlighter hybrid",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2871028-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/colorful-blush-glaze-P516171",
    CA: "https://www.sephora.com/ca/en/product/colorful-blush-glaze-P516171",
    FR: "https://www.sephora.fr/p/colorful-blush-glaze---blush-fini-ultra-lumineux-P10061216.html"
  }),
  alternatives: {
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

saieSuperSuedeRadiantBlush: productData({
  category: "Blush",
  brand: "Saie",
  name: "SuperSuede™ Radiant Talc-Free Baked Powder Blush",
  type: "Radiant talc-free baked powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2849123-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/saie-supersuede-talc-free-powder-blush-P515061",
    CA: "https://www.sephora.com/ca/en/product/saie-supersuede-talc-free-powder-blush-P515061"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

gucciGlowDewyPowderBlush: productData({
  category: "Blush",
  brand: "Gucci",
  name: "Glow Dewy Powder Blush",
  type: "Radiant dewy powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2928448-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/gucci-glow-dewy-powder-blush-P520021",
    CA: "https://www.sephora.com/ca/en/product/gucci-glow-dewy-powder-blush-P520021"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

iliaSoftFocusBlurringBlush: productData({
  category: "Blush",
  brand: "ILIA",
  name: "Soft Focus Blurring Blush - Talc-Free Powder Blush",
  type: "Talc-free blurring powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2887974-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soft-focus-blurring-blush-P517095",
    CA: "https://www.sephora.com/ca/en/product/soft-focus-blurring-blush-P517095",
    FR: "https://www.sephora.fr/p/blush-floutant-soft-focus-%E2%80%93-fard-a-joues-poudre-sans-talc-P1000209063.html"
  }),
  alternatives: {
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

kvdModConLiquidGelBlush: productData({
  category: "Blush",
  brand: "KVD Beauty",
  name: "ModCon Liquid-Gel Blush",
  type: "Long-wear liquid-gel blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2451185-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-modcon-liquid-gel-blush-P472980"
  }),
  alternatives: {
    US: "danessaMyricksYummySkinFlushedBlush",
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

kvdGoodAppleBlushBalmDuo: productData({
  category: "Blush",
  brand: "KVD Beauty",
  name: "Good Apple Blush Balm Duo",
  type: "Cream blush balm duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2785111-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/kvd-vegan-beauty-good-apple-blush-balm-duo-P511536"
  }),
  alternatives: {
    US: "patrickTaMajorHeadlinesBlushDuo",
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

iconicLondonBlurringBlushStick: productData({
  category: "Blush",
  brand: "Iconic London",
  name: "Blurring Blush Cream to Powder Lip and Cheek Stick",
  type: "Cream-to-powder lip and cheek blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2770246-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/iconic-london-blurring-blush-cream-to-powder-stick-P511925"
  }),
  alternatives: {
    US: "milkLipCheekCreamBlushStick",
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

makeUpForEverArtistLongwearSkinFusingPowderBlush: productData({
  category: "Blush",
  brand: "MAKE UP FOR EVER",
  name: "Artist Longwear Skin-Fusing Powder Blush",
  type: "Longwear skin-fusing powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2690030-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/artist-longwear-skin-fusing-powder-blush-P507326",
    CA: "https://www.sephora.com/ca/en/product/artist-longwear-skin-fusing-powder-blush-P507326"
  }),
  alternatives: {
    FR: "givenchyPrismeLibreLoosePowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

kosasBlushIsLifeBakedBlush: productData({
  category: "Blush",
  brand: "Kosas",
  name: "Blush is Life Baked Talc-Free Dimensional + Brightening Blush",
  type: "Baked talc-free powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2871713-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/blush-is-life-baked-talc-free-dimensional-brightening-blush-P510885",
    CA: "https://www.sephora.com/ca/en/product/blush-is-life-baked-talc-free-dimensional-brightening-blush-P510885"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

cheekboneBeautyBalanceBlushBronzer: productData({
  category: "Blush",
  brand: "Cheekbone Beauty",
  name: "Balance Blush Bronzer",
  type: "Blush and bronzer duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2675361-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/cheekbone-sustain-blush-bronzer-duo-P476661"
  }),
  alternatives: {
    US: "patrickTaMajorHeadlinesBlushDuo",
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tarteManeaterSatinBlushCheekPlump: productData({
  category: "Blush",
  brand: "tarte",
  name: "maneater™ satin liquid blush cheek plump",
  type: "Satin liquid blush and cheek plump",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2757300-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-maneater-tm-satin-blush-cheek-plump-P509825",
    FR: "https://www.sephora.fr/p/maneater-satin-blush-cheek-plump-blush-P1000203181.html",
    UK: "https://www.sephora.co.uk/p/tarte-maneater-satin-blush-cheek-plump-blush-8ml"
  }),
  alternatives: {
    US: "narsAfterglowLiquidBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

liseWatierBlushOnPowder: productData({
  category: "Blush",
  brand: "Lise Watier",
  name: "Blush-On Powder",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2133692-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/blush-on-powder-P435760"
  }),
  alternatives: {
    US: "gucciLuminousMattePowderBlush",
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),
  
anastasiaBeverlyHillsBlurringSerumLiquidBlush: productData({
  category: "Blush",
  brand: "Anastasia Beverly Hills",
  name: "Blurring Serum Liquid Blush",
  type: "Blurring serum liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2771996-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/anastasia-beverly-hills-blurring-serum-liquid-blush-P512208",
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-blurring-serum-liquid-blush-P512208",
    FR: "https://www.sephora.fr/p/blurring-serum-blush---blush-liquide-P10059709.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

hungVanngoVeryBeautifulMatteVelvetBlush: productData({
  category: "Blush",
  brand: "HUNG VANNGO BEAUTY",
  name: "Very Beautiful Matte Velvet Blush",
  type: "Matte velvet powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2903821-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/very-beautiful-matte-velvet-blush-P518972",
    CA: "https://www.sephora.com/ca/en/product/very-beautiful-matte-velvet-blush-P518972"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

tarteAmazonianClaySkintuitiveBlush: productData({
  category: "Blush",
  brand: "tarte",
  name: "Amazonian Clay Skintuitive™ 12-Hour Powder Blush",
  type: "Color-adjusting powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2741411-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/amazonian-clay-skintuitive-tm-12-hour-blush-P506561"
  }),
  alternatives: {
    US: "tarteAmazonianClay12HourBlush",
    FR: "tarteAmazonianClay12HourBlush",
    UK: "charlotteTilburyCheekToChicBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

urbanDecayFaceBondPowderBlushSuede: productData({
  category: "Blush",
  brand: "Urban Decay",
  name: "Face Bond Long-Lasting Powder Blush Suede",
  type: "Longwear waterproof powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2845378-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/urban-decay-face-bond-long-lasting-blush-suede-P515194",
    CA: "https://www.sephora.com/ca/en/product/urban-decay-face-bond-long-lasting-blush-suede-P515194"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

chantecailleCheekShadePowderBlush: productData({
  category: "Blush",
  brand: "CHANTECAILLE",
  name: "Cheek Shade Silky Blendable Powder Blush",
  type: "Silky powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2964468-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/cheek-shade-silky-blendable-powder-blush-P521967"
  }),
  alternatives: {
    US: "gucciLuminousMattePowderBlush",
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

benefitDandelionBabyPinkBlush: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "Dandelion Baby-Pink Brightening Blush",
  type: "Baby-pink powder blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2520195-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/dandelion-box-o-powder-blush-P38347",
    CA: "https://www.sephora.com/ca/en/product/dandelion-box-o-powder-blush-P38347"
  }),
  alternatives: {
    FR: "cliniqueCheekPopBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

kulfiMehndiMomentCreamBlush: productData({
  category: "Blush",
  brand: "Kulfi",
  name: "Mehndi Moment Long-Lasting Radiant Cream Blush",
  type: "Long-lasting radiant cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2609402-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/kulfi-mehndi-moment-blush-P504604"
  }),
  alternatives: {
    US: "milkLipCheekCreamBlushStick",
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

macMineralizeBlush: productData({
  category: "Blush",
  brand: "MAC Cosmetics",
  name: "Mineralize Blush with Radiant Baked Mineral Luminous Colour + Lightweight Coverage",
  type: "Radiant baked powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2093995-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mineralize-blush-P17122237",
    FR: "https://www.sephora.fr/p/mineralize-blush---fard-a-joues-P10023885.html"
  }),
  alternatives: {
    US: "macGlowPlayCushionyBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

hourglassUnrealLiquidBlush: productData({
  category: "Blush",
  brand: "Hourglass",
  name: "Unreal Liquid Blush",
  type: "Hydrating liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2785178-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/hourglass-unreal-liquid-blush-P512314",
    CA: "https://www.sephora.com/ca/en/product/hourglass-unreal-liquid-blush-P512314",
    FR: "https://www.sephora.fr/p/unreal-liquid-blush---blush-liquide-P10059163.html",
    UK: "https://www.sephora.co.uk/p/hourglass-unreal-liquid-blush-liquid-blush"
  }),
  alternatives: {
    AU: "narsAfterglowLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

hourglassAmbientLightingBlush: productData({
  category: "Blush",
  brand: "Hourglass",
  name: "Ambient Lighting Blush Collection",
  type: "Powder blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s1581339-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/ambient-lighting-blush-collection-P384963",
    CA: "https://www.sephora.com/ca/en/product/ambient-lighting-blush-collection-P384963"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

danessaMyricksYummySkinFlushedBlush: productData({
  category: "Blush",
  brand: "Danessa Myricks Beauty",
  name: "Yummy Skin Blurring Balm Powder Flushed - Matte Color for Cheek & Lip",
  type: "Matte balm blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2654010-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-flushed-P504051",
    CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-flushed-P504051"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

iliaMultiStickCreamBlush: productData({
  category: "Blush",
  brand: "ILIA",
  name: "Multi-Stick Cream Blush + Lip Tint",
  type: "Cream blush and lip tint",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2564359-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/multi-stick-P411848",
    CA: "https://www.sephora.com/ca/en/product/multi-stick-P411848"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

milkCoolingWaterJellyTint: productData({
  category: "Blush",
  brand: "MILK MAKEUP",
  name: "Cooling Water Jelly Tint Lip + Cheek Blush Stain",
  type: "Jelly lip and cheek blush stain",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2872380-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/milk-makeup-cooling-water-jelly-tint-lip-cheek-blush-stain-P509414",
    CA: "https://www.sephora.com/ca/en/product/milk-makeup-cooling-water-jelly-tint-lip-cheek-blush-stain-P509414"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

milkLipCheekCreamBlushStick: productData({
  category: "Blush",
  brand: "MILK MAKEUP",
  name: "Lip + Cheek Non-Comedogenic Cream Blush Stick",
  type: "Cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2141992-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/milk-lip-cheek-cream-blush-stick-P437097",
    CA: "https://www.sephora.com/ca/en/product/milk-lip-cheek-cream-blush-stick-P437097"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

benefitBenetintLipCheekBlushStain: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "Benetint Liquid Lip + Cheek Blush Stain",
  type: "Liquid lip and cheek stain",
  sizes: ["mini", "standard", "value"],
  image: "https://www.sephora.com/productimages/sku/s2264638-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/benetint-cheek-lip-stain-P1272",
    CA: "https://www.sephora.com/ca/en/product/benetint-cheek-lip-stain-P1272",
    FR: "https://www.sephora.fr/p/benetint---blush-liquide-joues-et-levres-P1217.html"
  }),
  alternatives: {
    UK: "narsAfterglowLiquidBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

benefitJuiceStickDewyGelCreamBlush: productData({
  category: "Blush",
  brand: "Benefit Cosmetics",
  name: "Juice Stick Dewy Gel-Cream Blush",
  type: "Dewy gel-cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2938884-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/juice-stick-dewy-gel-cream-blush-P520123",
    CA: "https://www.sephora.com/ca/en/product/juice-stick-dewy-gel-cream-blush-P520123"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

fentyCheeksOutCreamBlush: productData({
  category: "Blush",
  brand: "Fenty Beauty by Rihanna",
  name: "Cheeks Out Freestyle Cream Blush",
  type: "Cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2260081-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    FR: "https://www.sephora.fr/p/cheeks-out-freestyle---blush-en-creme-P4063110.html"
  }),
  alternatives: {
    US: "milkCoolingWaterJellyTint",
    CA: "milkCoolingWaterJellyTint",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),
  

narsAfterglowLiquidBlush: productData({
  category: "Blush",
  brand: "NARS",
  name: "Afterglow Liquid Blush",
  type: "Hydrating liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2670420-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/afterglow-liquid-blush-P506024",
    CA: "https://www.sephora.com/ca/en/product/afterglow-liquid-blush-P506024",
    FR: "https://www.sephora.fr/p/afterglow-liquid-blush---blush-liquide-P10052424.html"
  }),
  alternatives: {
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

gucciLuminousMattePowderBlush: productData({
  category: "Blush",
  brand: "Gucci",
  name: "Luminous Matte Powder Blush",
  type: "Buildable powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2587319-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/luminous-matte-beauty-blush-P502188",
    CA: "https://www.sephora.com/ca/en/product/luminous-matte-beauty-blush-P502188"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

charlotteTilburyCheekToChicBlush: productData({
  category: "Blush",
  brand: "Charlotte Tilbury",
  name: "Cheek to Chic Blush - Pillow Talk Collection",
  type: "Two-tone powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2245272-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/charlotte-tilbury-cheek-to-chic-blush-pillow-talk-collection-P454506",
    CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-cheek-to-chic-blush-pillow-talk-collection-P454506",
    FR: "https://www.sephora.fr/p/cheek-to-chic---blush-poudre-P1000209090.html"
  }),
  alternatives: {
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

violetteFrBisouBlush: productData({
  category: "Blush",
  brand: "VIOLETTE_FR",
  name: "BISOU BLUSH Marbled Cream Blush Stick",
  type: "Marbled cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2864585-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/bisou-blush-cream-blush-brush-P515462",
    CA: "https://www.sephora.com/ca/en/product/bisou-blush-cream-blush-brush-P515462"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

kajaJellyCharmLipBlushStain: productData({
  category: "Blush",
  brand: "Kaja",
  name: "Jelly Charm Glazed Lip Stain & Blush With Keychain",
  type: "Lip and cheek stain blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2647022-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365",
    CA: "https://www.sephora.com/ca/en/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

basmaHydratingCreamBlush: productData({
  category: "Blush",
  brand: "BASMA",
  name: "The Hydrating Long-Wearing Cream Blush",
  type: "Hydrating cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2764256-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/basma-the-cream-blush-P509435",
    CA: "https://www.sephora.com/ca/en/product/basma-the-cream-blush-P509435"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

givenchyPrismeLibreLoosePowderBlush: productData({
  category: "Blush",
  brand: "Givenchy",
  name: "Prisme Libre Loose Powder Long-Wearing Radiant Blush",
  type: "Loose powder radiant blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2691202-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/prisme-libre-blush-P506581",
    CA: "https://www.sephora.com/ca/en/product/prisme-libre-blush-P506581",
    FR: "https://www.sephora.fr/p/prisme-libre-blush---blush-poudre-libre-4-couleurs-P10016626.html"
  }),
  alternatives: {
    UK: "charlotteTilburyCheekToChicBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

refyCreamBlush: productData({
  category: "Blush",
  brand: "REFY",
  name: "Cream Blush",
  type: "Buildable cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2879880-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/refy-beauty-cream-blush-P475156",
    CA: "https://www.sephora.com/ca/en/product/refy-beauty-cream-blush-P475156"
  }),
  alternatives: {
    FR: "macGlowPlayCushionyBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

pradaTouchCreamToPowderBlush: productData({
  category: "Blush",
  brand: "Prada",
  name: "Prada Touch Cream-To-Powder Soft Blur Longwear Blush",
  type: "Cream-to-powder soft blur blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2952737-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/prada-touch-cream-to-powder-soft-blur-longwear-blush-P521356",
    CA: "https://www.sephora.com/ca/en/product/prada-touch-cream-to-powder-soft-blur-longwear-blush-P521356",
    FR: "https://www.sephora.fr/p/prada-touch---blush-creme-a-poudre-coloree-P1000212958.html"
  }),
  alternatives: {
    UK: "charlotteTilburyCheekToChicBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),

tarteMacaronBlushGlowDuo: productData({
  category: "Blush",
  brand: "tarte",
  name: "macaron blush & glow™ duo",
  type: "Cream and powder blush duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2947471-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/macaron-blush-glow-duo-honey-blossom-P520786",
    CA: "https://www.sephora.com/ca/en/product/macaron-blush-glow-duo-honey-blossom-P520786",
    FR: "https://www.sephora.fr/p/macaron-blush-et-glow%E2%84%A2-duo---duo-blush-creme-et-poudre-P1000212023.html"
  }),
  alternatives: {
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tarteBlushTapeLiquidBlush: productData({
  category: "Blush",
  brand: "tarte",
  name: "Blush Tape™ Liquid Blush",
  type: "Glowy liquid blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2816155-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    FR: "https://www.sephora.fr/p/blush-tape%E2%84%A2-liquid-blush---blush-liquide-P10049283.html"
  }),
  alternatives: {
    US: "narsAfterglowLiquidBlush",
    CA: "glowRecipeWatermelonGlowDewyFlushBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "glossierCloudPaintGelCreamBlush"
  }
}),

tarteAmazonianClay12HourBlush: productData({
  category: "Blush",
  brand: "tarte",
  name: "Amazonian Clay 12-Hour Blush",
  type: "Long-wear powder blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2872018-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/amazonian-clay-12-hour-blush-P278610",
    FR: "https://www.sephora.fr/p/amazonian-clay-12-hour-blush---blush-P10056348.html"
  }),
  alternatives: {
    US: "narsTalcFreePowderBlush",
    UK: "charlotteTilburyCheekToChicBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "cliniqueCheekPopBlush"
  }
}),
  

lysBeautyHigherStandardCreamGlowBlushStick: productData({
  category: "Blush",
  brand: "LYS Beauty",
  name: "Higher Standard Cream Glow Blush Stick",
  type: "Cream glow blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2735900-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lys-beauty-higher-standard-cream-glow-blush-sticks-P509577",
    CA: "https://www.sephora.com/ca/en/product/lys-beauty-higher-standard-cream-glow-blush-sticks-P509577"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "westmanAtelierBabyCheeksBlushStick",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

tooFacedCloudCrushBlurringPowderBlush: productData({
  category: "Blush",
  brand: "Too Faced",
  name: "Cloud Crush Blurring Powder Blush",
  type: "Blurring powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2642502-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/too-faced-cloud-crush-blurring-powder-blush-P504072",
    CA: "https://www.sephora.com/ca/en/product/too-faced-cloud-crush-blurring-powder-blush-P504072",
    FR: "https://www.sephora.fr/p/cloud-crush-blurring-blush---blush-poudre-P10048315.html"
  }),
  alternatives: {
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tooFacedCloudCrushWhippedLipCheekBlush: productData({
  category: "Blush",
  brand: "Too Faced",
  name: "Cloud Crush Whipped Lip & Cheek Blush",
  type: "Whipped lip and cheek blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2885929-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/too-faced-cloud-crush-whipped-lip-cheek-blur-blush-P517844",
    CA: "https://www.sephora.com/ca/en/product/too-faced-cloud-crush-whipped-lip-cheek-blur-blush-P517844",
    FR: "https://www.sephora.fr/p/cloud-crush-whipped-lip-et-cheek---encre-a-levres-et-joues-P1000208213.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

macGlowPlayCushionyBlush: productData({
  category: "Blush",
  brand: "MAC Cosmetics",
  name: "Glow Play Cushiony Lightweight Buildable Blurring Blush",
  type: "Cushiony cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2808376-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mac-cosmetics-glow-play-cushiony-blush-P512289",
    CA: "https://www.sephora.com/ca/en/product/mac-cosmetics-glow-play-cushiony-blush-P512289",
    FR: "https://www.sephora.fr/p/glow-play-blush---blush-cushion-P10059627.html"
  }),
  alternatives: {
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

lauraMercierBlushColorInfusionDuo: productData({
  category: "Blush",
  brand: "Laura Mercier",
  name: "Blush Color Infusion Duo Talc-Free Powder Blush",
  type: "Talc-free powder blush duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2952521-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/laura-mercier-blush-color-infusion-duo-talc-free-powder-blush-P521688",
    CA: "https://www.sephora.com/ca/en/product/laura-mercier-blush-color-infusion-duo-talc-free-powder-blush-P521688"
  }),
  alternatives: {
    FR: "givenchyPrismeLibreLoosePowderBlush",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

patMcGrathDivinePowderBlush: productData({
  category: "Blush",
  brand: "PAT McGRATH LABS",
  name: "Skin Fetish: Divine Powder Blush",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2464915-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-divine-powder-blush-P472489",
    CA: "https://www.sephora.com/ca/en/product/pat-mcgrath-labs-skin-fetish-divine-powder-blush-P472489"
  }),
  alternatives: {
    FR: "charlotteTilburyCheekToChicBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

patMcGrathDivineCreamBlushBalm: productData({
  category: "Blush",
  brand: "PAT McGRATH LABS",
  name: "Divine Cream Blush: Legendary Glow Color Balm",
  type: "Cream blush balm",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2702363-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/divine-cream-blush-legendary-glow-color-balm-P506540",
    CA: "https://www.sephora.com/ca/en/product/divine-cream-blush-legendary-glow-color-balm-P506540"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

itCosmeticsGlowWithConfidenceSunBlush: productData({
  category: "Blush",
  brand: "IT Cosmetics",
  name: "Glow with Confidence Sun Cream Blush with Hyaluronic Acid",
  type: "Cream blush and bronzer",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2773349-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/it-cosmetics-glow-with-confidence-sun-blush-P511282",
    CA: "https://www.sephora.com/ca/en/product/it-cosmetics-glow-with-confidence-sun-blush-P511282"
  }),
  alternatives: {
    FR: "tooFacedCloudCrushWhippedLipCheekBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

nudestixNudiesMatteGlowCoreBlush: productData({
  category: "Blush",
  brand: "NUDESTIX",
  name: "Nudies Matte Blush + Glow Core",
  type: "Cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2692481-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/nudestix-nudies-matte-glow-core-all-over-face-blush-P507768",
    CA: "https://www.sephora.com/ca/en/product/nudestix-nudies-matte-glow-core-all-over-face-blush-P507768"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

anastasiaStickCreamBlush: productData({
  category: "Blush",
  brand: "Anastasia Beverly Hills",
  name: "Cream Stick Blush with Brush Applicator",
  type: "Cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2567873-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/anastasia-beverly-hills-stick-blush-P474813",
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-stick-blush-P474813"
  }),
  alternatives: {
    FR: "westmanAtelierBabyCheeksBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

bobbiBrownPotRougeVelvetMatteBlush: productData({
  category: "Blush",
  brand: "Bobbi Brown",
  name: "Pot Rouge Velvet Matte Cream Blush for Cheeks & Lips",
  type: "Matte cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2873834-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/pot-rouge-matte-velvet-cream-blush-for-cheeks-and-lips-P515575",
    CA: "https://www.sephora.com/ca/en/product/pot-rouge-matte-velvet-cream-blush-for-cheeks-and-lips-P515575",
    FR: "https://www.sephora.fr/p/pot-rouge-velvet-matte-blush-creme-2-en-1-pour-les-joues-et-les-levres-P1000209264.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

bobbiBrownSkinEnhancerBlushStick: productData({
  category: "Blush",
  brand: "Bobbi Brown",
  name: "Skin Enhancer Blush Stick",
  type: "Blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2941672-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/bobbi-brown-skin-enhancer-blush-stick-P520117",
    CA: "https://www.sephora.com/ca/en/product/bobbi-brown-skin-enhancer-blush-stick-P520117"
  }),
  alternatives: {
    FR: "macGlowPlayCushionyBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

natashaDenonaHyBlushCloudyCreamCheekDuo: productData({
  category: "Blush",
  brand: "NATASHA DENONA",
  name: "Hy-Blush Cloudy Cream Cheek Duo",
  type: "Cream cheek duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2933190-main-zoom.jpg?imwidth=315",
  links: countryLinks({}),
  alternatives: {
    US: "patrickTaMajorHeadlinesBlushDuo",
    CA: "morpheCheekThrillsBlushTrio",
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),
  

hudaBeautyBlushFilterSoftGlowLiquidBlush: productData({
  category: "Blush",
  brand: "HUDA BEAUTY",
  name: "Blush Filter Soft Glow Liquid Blush",
  type: "Soft glow liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2837185-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/blush-filter-soft-glow-liquid-blush-P510756",
    CA: "https://www.sephora.com/ca/en/product/blush-filter-soft-glow-liquid-blush-P510756",
    FR: "https://www.sephora.fr/p/blush-filter---blush-liquide-P10058240.html"
  }),
  alternatives: {
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

hudaBeautyBlushFilterBlushlighterPalette: productData({
  category: "Blush",
  brand: "HUDA BEAUTY",
  name: "Blush Filter Blurring Blushlighters Palette",
  type: "Blush and highlighter palette",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2906345-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601",
    CA: "https://www.sephora.com/ca/en/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601"
  }),
  alternatives: {
    FR: "morpheCheekThrillsBlushTrio",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

rhodePocketBlush: productData({
  category: "Blush",
  brand: "rhode",
  name: "Pocket Blush Buildable Hydrating Cream Blush",
  type: "Hydrating cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2895845-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/pocket-blush-P517483"
  }),
  alternatives: {
    CA: "meritFlushBalmCreamBlush",
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

yslMakeMeBlushPowderBlush: productData({
  category: "Blush",
  brand: "Yves Saint Laurent",
  name: "Make Me Blush 24H Buildable Powder Blush",
  type: "Buildable powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2884930-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/make-me-blush-24h-buildable-powder-blush-P514568",
    CA: "https://www.sephora.com/ca/en/product/make-me-blush-24h-buildable-powder-blush-P514568"
  }),
  alternatives: {
    FR: "cliniqueCheekPopBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

yslMakeMeBlushLiquidBlush: productData({
  category: "Blush",
  brand: "Yves Saint Laurent",
  name: "Make Me Blush 12H Blurring Liquid Blush",
  type: "Blurring liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2789410-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/yves-saint-laurent-make-me-blush-12h-blurring-liquid-blush-P512305",
    CA: "https://www.sephora.com/ca/en/product/yves-saint-laurent-make-me-blush-12h-blurring-liquid-blush-P512305"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

makeupByMarioSoftPopCreamBlushStick: productData({
  category: "Blush",
  brand: "MAKEUP BY MARIO",
  name: "Soft Pop Cream Blush Stick",
  type: "Cream blush stick",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2603389-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soft-pop-blush-stick-P516566",
    CA: "https://www.sephora.com/ca/en/product/soft-pop-blush-stick-P516566",
    FR: "https://www.sephora.fr/p/soft-pop-blush-stick---stick-blush-P10044137.html"
  }),
  alternatives: {
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

makeupByMarioSoftPopPowderBlush: productData({
  category: "Blush",
  brand: "MAKEUP BY MARIO",
  name: "Soft Pop Powder Blush",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2449718-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/makeup-by-mario-soft-pop-powder-blush-P472325",
    CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-soft-pop-powder-blush-P472325"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    UK: "narsTalcFreePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

makeupByMarioSoftPopPlumpingBlushVeil: productData({
  category: "Blush",
  brand: "MAKEUP BY MARIO",
  name: "Soft Pop Plumping Cream Blush Veil",
  type: "Plumping cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2679561-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/soft-pop-plumping-blush-veil-P506130",
    CA: "https://www.sephora.com/ca/en/product/soft-pop-plumping-blush-veil-P506130"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

armaniLuminousSilkCheekTint: productData({
  category: "Blush",
  brand: "Armani Beauty",
  name: "Cheek Tint Longwear Lightweight Liquid Blush",
  type: "Luminous liquid blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2867109-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-cheek-tint-P511567",
    CA: "https://www.sephora.com/ca/en/product/giorgio-armani-beauty-luminous-silk-cheek-tint-P511567"
  }),
  alternatives: {
    FR: "cliniqueCheekPopBlush",
    UK: "rareBeautySoftPinchLiquidBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

diorRosyGlowBlushStick: productData({
  category: "Blush",
  brand: "DIOR",
  name: "Rosy Glow Blush Stick",
  type: "Cream blush stick",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2864668-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rosy-glow-blush-sticks-P516168",
    CA: "https://www.sephora.com/ca/en/product/rosy-glow-blush-sticks-P516168"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

glowRecipeWatermelonGlowDewyFlushBlush: productData({
  category: "Blush",
  brand: "Glow Recipe",
  name: "Watermelon Glow Niacinamide Dewy Flush Brightening Serum Blush",
  type: "Dewy serum blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2845030-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/watermelon-glow-niacinamide-dewy-flush-brightening-serum-blush-P515371",
    CA: "https://www.sephora.com/ca/en/product/watermelon-glow-niacinamide-dewy-flush-brightening-serum-blush-P515371"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

westmanAtelierBabyCheeksBlushStick: productData({
  category: "Blush",
  brand: "Westman Atelier",
  name: "Baby Cheeks Lip + Cheek Cream Blush Stick",
  type: "Cream blush stick",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2434165-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/westman-atelier-baby-cheeks-blush-stick-P468431",
    CA: "https://www.sephora.com/ca/en/product/westman-atelier-baby-cheeks-blush-stick-P468431"
  }),
  alternatives: {
    FR: "makeupByMarioSoftPopCreamBlushStick",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

summerFridaysBlushButterBalm: productData({
  category: "Blush",
  brand: "Summer Fridays",
  name: "Blush Butter Balm Hydrating Cream Blush with Peptides",
  type: "Hydrating cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2879336-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/blush-butter-balm-P518147",
    CA: "https://www.sephora.com/ca/en/product/blush-butter-balm-P518147"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

hausLabsColorFuseBlush: productData({
  category: "Blush",
  brand: "HAUS LABS BY LADY GAGA",
  name: "Color Fuse Talc-Free Blush Powder With Fermented Arnica",
  type: "Talc-free powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2760957-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025",
    CA: "https://www.sephora.com/ca/en/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025",
    FR: "https://www.sephora.fr/p/color-fuse-talc-free-powder-blush-with-fermented-arnica---blush-poudre-P10057652.html",
    AU: "https://www.sephora.com.au/products/haus-labs-by-lady-gaga-color-fuse-blush-powder"
  }),
  alternatives: {
    UK: "narsTalcFreePowderBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),

lawlessPinchMyCheeksBlush: productData({
  category: "Blush",
  brand: "LAWLESS",
  name: "Pinch My Cheeks Soft-Blur Cream Blush",
  type: "Soft-blur cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2783827-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/lawless-pinch-my-cheeks-soft-blur-cream-blush-P510360",
    CA: "https://www.sephora.com/ca/en/product/lawless-pinch-my-cheeks-soft-blur-cream-blush-P510360"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterSoftGlowLiquidBlush",
    UK: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLuminousPowderBlush"
  }
}),
  
rareBeautySoftPinchLiquidBlush: productData({
  category: "Blush",
  brand: "Rare Beauty by Selena Gomez",
  name: "Soft Pinch Liquid Blush",
  type: "Weightless liquid blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2518991-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778",
    CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778",
    FR: "https://www.sephora.fr/p/soft-pinch---liquid-blush-P10017094.html",
    UK: "https://www.sephora.co.uk/p/rare-beauty-soft-pinch-liquid-blush-7-5ml",
    AU: "https://www.sephora.com.au/products/rare-beauty-soft-pinch-liquid-blush",
    BR: "https://www.sephora.com.br/blush-liquido-rare-beauty-soft-pinch-liquid-blush-18862-18862.html"
  }),
  alternatives: {}
}),

rareBeautyMiniSoftPinchLiquidBlush: productData({
  category: "Blush",
  brand: "Rare Beauty by Selena Gomez",
  name: "Mini Soft Pinch Liquid Blush",
  type: "Mini liquid blush",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2781995-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-soft-pinch-liquid-blush-P508264",
    CA: "https://www.sephora.com/ca/en/product/mini-soft-pinch-liquid-blush-P508264",
    FR: "https://www.sephora.fr/p/soft-pinch---liquid-blush-in-hope-P10053951.html",
    AU: "https://www.sephora.com.au/products/rare-beauty-soft-pinch-liquid-blush-mini"
  }),
  alternatives: {
    UK: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

rareBeautySoftPinchLuminousPowderBlush: productData({
  category: "Blush",
  brand: "Rare Beauty by Selena Gomez",
  name: "Soft Pinch Luminous Powder Blush",
  type: "Luminous powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2748275-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-luminous-powder-blush-P509960",
    CA: "https://www.sephora.com/ca/en/product/P509960",
    FR: "https://www.sephora.fr/p/soft-pinch-luminous-powder-blush---blush-poudre-P10057746.html",
    UK: "https://www.sephora.co.uk/p/rare-beauty-soft-pinch-luminous-powder-blush",
    AU: "https://www.sephora.com.au/products/rare-beauty-soft-pinch-luminous-powder-blush",
    BR: "https://www.sephora.com.br/blush-iluminador-em-po-rare-beauty-soft-pinch-88991776-88991776.html"
  }),
  alternatives: {}
}),

rareBeautyStayVulnerableMeltingBlush: productData({
  category: "Blush",
  brand: "Rare Beauty by Selena Gomez",
  name: "Stay Vulnerable Melting Cream Blush",
  type: "Melting cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2385557-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-stay-vulnerable-melting-blush-P467451",
    CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-stay-vulnerable-melting-blush-P467451"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "meritFlushBalmCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

saieDewBlushLiquidCreamBlush: productData({
  category: "Blush",
  brand: "Saie",
  name: "Dew Blush Liquid Cream Blush",
  type: "Dewy liquid cream blush",
  sizes: ["mini", "standard"],
  image: "https://www.sephora.com/productimages/sku/s2742971-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/saie-dew-blush-liquid-cheek-blush-P469825",
    CA: "https://www.sephora.com/ca/en/product/saie-dew-blush-liquid-cheek-blush-P469825"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    UK: "tower28BeachpleaseCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

patrickTaMajorHeadlinesBlushDuo: productData({
  category: "Blush",
  brand: "PATRICK TA",
  name: "Major Headlines Double-Take Crème & Powder Blush Duo",
  type: "Cream and powder blush duo",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2849768-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747",
    CA: "https://www.sephora.com/ca/en/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747",
    AU: "https://www.sephora.com.au/products/patrick-ta-major-headlines-double-take-creme-and-powder-blush-duo"
  }),
  alternatives: {
    FR: "givenchyPrismeLibreLoosePowderBlush",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

patrickTaMiniMajorHeadlinesBlushDuo: productData({
  category: "Blush",
  brand: "PATRICK TA",
  name: "Mini Major Headlines Double-Take Crème & Powder Blush Duo",
  type: "Mini cream and powder blush duo",
  sizes: ["mini"],
  image: "https://www.sephora.com/productimages/sku/s2926020-main-zoom.jpg?imwidth=315",
  links: countryLinks({}),
  alternatives: {
    US: "patrickTaMajorHeadlinesBlushDuo",
    CA: "patrickTaMajorHeadlinesBlushDuo",
    FR: "tarteMacaronBlushGlowDuo",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "patrickTaMajorHeadlinesBlushDuo",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

tower28BeachpleaseCreamBlush: productData({
  category: "Blush",
  brand: "Tower 28 Beauty",
  name: "BeachPlease Lip + Cheek Dewy Cream Blush",
  type: "Lip and cheek cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2436673-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/beachplease-tinted-balm-blush-P449342",
    CA: "https://www.sephora.com/ca/en/product/beachplease-tinted-balm-blush-P449342",
    UK: "https://www.sephora.co.uk/p/tower-28-beachplease-lip-cheek-cream-blush"
  }),
  alternatives: {
    FR: "glossierCloudPaintGelCreamBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

meritFlushBalmCreamBlush: productData({
  category: "Blush",
  brand: "MERIT",
  name: "Flush Balm Cream Blush",
  type: "Cream blush balm",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2414480-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/merit-flush-balm-cream-blush-P468693",
    CA: "https://www.sephora.com/ca/en/product/merit-flush-balm-cream-blush-P468693",
    UK: "https://www.sephora.co.uk/p/merit-beauty-flush-balm-cream-blush"
  }),
  alternatives: {
    FR: "cliniqueCheekPopBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

diorRosyGlowPowderBlush: productData({
  category: "Blush",
  brand: "DIOR",
  name: "Rosy Glow Powder Blush",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2328375-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/dior-rosy-glow-blush-P454762",
    CA: "https://www.sephora.com/ca/en/product/dior-rosy-glow-blush-P454762",
    UK: "https://www.sephora.co.uk/p/dior-backstage-rosy-glow-blush-4-5g"
  }),
  alternatives: {
    FR: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

cliniqueCheekPopBlush: productData({
  category: "Blush",
  brand: "CLINIQUE",
  name: "Cheek Pop Blush",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s1674951-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/cheek-pop-P384996",
    CA: "https://www.sephora.com/ca/en/product/cheek-pop-P384996",
    FR: "https://www.sephora.fr/p/clinique-cheek-pop---blush-P2469005.html"
  }),
  alternatives: {
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

glossierCloudPaintGelCreamBlush: productData({
  category: "Blush",
  brand: "Glossier",
  name: "Cloud Paint Gel Cream Blush",
  type: "Gel cream blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2649382-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/glossier-cloud-paint-gel-cream-blush-P504521",
    CA: "https://www.sephora.com/ca/en/product/glossier-cloud-paint-gel-cream-blush-P504521",
    FR: "https://www.sephora.fr/p/cloud-paint-blush---fard-a-joues-gel-creme-P10053388.html",
    UK: "https://www.sephora.co.uk/p/glossier-cloud-paint-blush-gel-cream-blush"
  }),
  alternatives: {
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

morpheCheekThrillsBlushTrio: productData({
  category: "Blush",
  brand: "Morphe",
  name: "Cheek Thrills Multi-Finish Blush Trio",
  type: "Multi-finish blush trio",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s2865525-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/cheek-thrills-multi-finish-blush-trio-P516476",
    CA: "https://www.sephora.com/ca/en/product/cheek-thrills-multi-finish-blush-trio-P516476"
  }),
  alternatives: {
    FR: "hudaBeautyBlushFilterBlushlighterPalette",
    UK: "rareBeautySoftPinchLuminousPowderBlush",
    AU: "rareBeautySoftPinchLiquidBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),

narsTalcFreePowderBlush: productData({
  category: "Blush",
  brand: "NARS",
  name: "Talc-Free Powder Blush",
  type: "Powder blush",
  sizes: ["standard"],
  image: "https://www.sephora.com/productimages/sku/s636779-main-zoom.jpg?imwidth=315",
  links: countryLinks({
    US: "https://www.sephora.com/product/blush-P2855",
    CA: "https://www.sephora.com/ca/en/product/blush-P2855",
    UK: "https://www.sephora.co.uk/p/nars-blush-talc-free-refill-4-8g"
  }),
  alternatives: {
    FR: "givenchyPrismeLibreLoosePowderBlush",
    AU: "rareBeautySoftPinchLuminousPowderBlush",
    BR: "rareBeautySoftPinchLiquidBlush"
  }
}),



  
  // -------------------------
  // HIGHLIGHTER / GLOW
  // -------------------------
  benefitHighBeamLiquidHighlighter: productData({
    category: "Highlighter",
    brand: "Benefit Cosmetics",
    name: "High Beam Satin Pink Liquid Highlighter",
    type: "Satin-pink liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2264646"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/high-beam-liquid-highlighter-P447373",
      FR: "https://www.sephora.com/ca/fr/product/high-beam-liquid-highlighter-P447373"
    }),
    alternatives: {
      US: "benefitDewLaLaLiquidGlowHighlighter",
      UK: "charlotteBeautyHighlighterWand",
      AU: "rareBeautyPositiveLightLiquidLuminizer",
      BR: "fentyKillawattHighlighter"
    }
  }),

  benefitDewLaLaLiquidGlowHighlighter: productData({
    category: "Highlighter",
    brand: "Benefit Cosmetics",
    name: "Dew La La All-Over Glow Liquid Highlighter",
    type: "All-over liquid glow highlighter",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      US: "https://www.sephora.com/product/benefit-cosmetics-dew-la-la-liquid-glow-highlighter-P511909",
      CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-dew-la-la-liquid-glow-highlighter-P511909",
      FR: "https://www.sephora.fr/p/dew-la-la---illuminante-liquido-glowy-P10058153.html"
    }),
    alternatives: {
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  benefitGlowLaLaPowderHighlighter: productData({
    category: "Highlighter",
    brand: "Benefit Cosmetics",
    name: "Glow La La Blurring Powder Highlighter",
    type: "Blurring baked powder highlighter",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      US: "https://www.sephora.com/product/glow-la-la-powder-highlighter-P516555",
      CA: "https://www.sephora.com/ca/en/product/glow-la-la-powder-highlighter-P516555",
      FR: "https://www.sephora.fr/p/glow-la-la---highlighter-poudre-glow-P1000207922.html"
    }),
    alternatives: {
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "rareBeautyPositiveLightHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  benefitDandelionTwinkleHighlighter: productData({
    category: "Highlighter",
    brand: "Benefit Cosmetics",
    name: "Dandelion Twinkle Highlighter",
    type: "Soft nude-pink powder highlighter",
    sizes: ["standard"],
    image: skuImage("s1912138"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dandelion-twinkle-P417320",
      CA: "https://www.sephora.com/ca/en/product/dandelion-twinkle-P417320"
    }),
    alternatives: {
      FR: "benefitGlowLaLaPowderHighlighter",
      UK: "benefitCookieTicklePowderHighlighter",
      AU: "rareBeautyPositiveLightHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  bobbiBrownHighlighterPowder: productData({
    category: "Highlighter",
    brand: "Bobbi Brown",
    name: "Highlighter Powder",
    type: "Gel-powder pearl highlighter",
    sizes: ["mini", "standard"],
    image: skuImage("s2028074"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/highlight-powder-P401602",
      FR: "https://www.sephora.fr/p/highlighting-powder---highlighter-visage-P4063123.html"
    }),
    alternatives: {
      US: "hourglassAmbientLightingPowder",
      UK: "hourglassAmbientLightingPowder",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  tarteGlowTapeLiquidHighlighter: productData({
    category: "Highlighter",
    brand: "tarte",
    name: "glow tape™ luminous liquid highlighter",
    type: "Luminous liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2684504"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/tarte-glow-tape-tm-highlighter-P505454"
    }),
    alternatives: {
      US: "tarteShapeTapeGlowWand",
      FR: "benefitDewLaLaLiquidGlowHighlighter",
      UK: "charlotteBeautyHighlighterWand",
      AU: "rareBeautyPositiveLightLiquidLuminizer",
      BR: "fentyKillawattHighlighter"
    }
  }),

  tarteShimmeringLightPowderHighlighter: productData({
    category: "Highlighter",
    brand: "tarte",
    name: "shimmering light powder highlighter",
    type: "Powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2545333"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/brand/tarte/luminizer-luminous-makeup"
    }),
    alternatives: {
      US: "benefitGlowLaLaPowderHighlighter",
      FR: "sephoraColorfulPowderLuminizer",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  tarteShapeTapeGlowWand: productData({
    category: "Highlighter",
    brand: "tarte",
    name: "shape tape™ glow wand",
    type: "Liquid brightening glow wand",
    sizes: ["mini", "standard"],
    image: skuImage("s2394740"),
    links: countryLinks({
      US: "https://www.sephora.com/product/shape-tape-glow-wand-P463838",
      CA: "https://www.sephora.com/ca/en/product/shape-tape-glow-wand-P463838"
    }),
    alternatives: {
      FR: "benefitDewLaLaLiquidGlowHighlighter",
      UK: "charlotteBeautyHighlighterWand",
      AU: "rareBeautyPositiveLightLiquidLuminizer",
      BR: "fentyKillawattHighlighter"
    }
  }),

  fentyDemiGlowLightDiffusingHighlighter: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Demi’Glow Light-Diffusing Highlighter",
    type: "Soft-focus powder highlighter",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-demi-glow-baked-highlighter-P511192",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-demi-glow-baked-highlighter-P511192",
      FR: "https://www.sephora.fr/p/demi--glow-light---highlighter-diffusant-P10057486.html"
    }),
    alternatives: {
      UK: "fentyKillawattHighlighter",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  nudestixNudiesGlowCreamHighlighterStick: productData({
    category: "Highlighter",
    brand: "NUDESTIX",
    name: "Nudies Glow Cream Highlighter Stick",
    type: "Cream highlighter stick",
    sizes: ["standard"],
    image: skuImage("s2834406"),
    links: countryLinks({
      US: "https://www.sephora.com/brand/nudestix/luminizer-luminous-makeup"
    }),
    alternatives: {
      CA: "nudestixMiniNudiesRosesHoneyNudesKit",
      FR: "iliaMultiStickCreamBlushHighlighterLipTint",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  urbanDecayFaceBondLuminizerDrops: productData({
    category: "Highlighter",
    brand: "Urban Decay",
    name: "Face Bond Luminizer Waterproof Glow Drops for Face + Body",
    type: "Waterproof liquid glow drops",
    sizes: ["standard"],
    image: skuImage("s2845469"),
    links: countryLinks({
      US: "https://www.sephora.com/product/face-bond-luminizer-waterproof-glow-drops-for-face-body-P514682",
      CA: "https://www.sephora.com/ca/en/product/face-bond-luminizer-waterproof-glow-drops-for-face-body-P514682"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  drunkElephantOBloosRosiGlowDrops: productData({
    category: "Highlighter / Glow Drops",
    brand: "Drunk Elephant",
    name: "O-Bloos™ Rosi Glow Drops with Vitamin F",
    type: "Rosy glow serum drops",
    sizes: ["standard"],
    image: skuImage("s2460475"),
    links: countryLinks({
      US: "https://www.sephora.com/product/o-bloos-rosi-drops-P477058",
      CA: "https://www.sephora.com/ca/en/product/o-bloos-rosi-drops-P477058",
      FR: "https://www.sephora.fr/p/o-bloos-rosi-drops-P10017323.html"
    }),
    alternatives: {
      UK: "glowRecipeWatermelonGlowDewDrops",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  drunkElephantBGoldiBrightDrops: productData({
    category: "Highlighter / Glow Drops",
    brand: "Drunk Elephant",
    name: "B-Goldi™ Bright Illuminating Drops with 5% Niacinamide",
    type: "Golden illuminating serum drops",
    sizes: ["standard"],
    image: skuImage("s2689743"),
    links: countryLinks({
      US: "https://www.sephora.com/product/b-goldi-tm-illuminating-drops-with-5-niacinamide-for-brightening-P507099",
      CA: "https://www.sephora.com/ca/en/product/b-goldi-tm-illuminating-drops-with-5-niacinamide-for-brightening-P507099"
    }),
    alternatives: {
      FR: "glowRecipeWatermelonGlowDewDrops",
      UK: "glowRecipeWatermelonGlowDewDrops",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  glowRecipeWatermelonGlowDewDrops: productData({
    category: "Highlighter / Glow Serum",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Dew Drops Serum",
    type: "Highlighting skincare glow serum",
    sizes: ["mini", "standard", "value"],
    image: skuImage("s2404846"),
    links: countryLinks({
      US: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123",
      CA: "https://www.sephora.com/ca/en/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123",
      FR: "https://www.sephora.fr/p/watermelon-glow-niacinamide-dew-drops-P10018696.html"
    }),
    alternatives: {
      UK: "saieGlowySuperGel",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  glowRecipeWatermelonGlowHueDrops: productData({
    category: "Highlighter / Glow Serum",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Hue Drops Serum",
    type: "Warm glow niacinamide serum drops",
    sizes: ["mini", "standard"],
    image: skuImage("s2827947"),
    links: countryLinks({
      US: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P509844",
      CA: "https://www.sephora.com/ca/en/product/glow-recipe-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P509844"
    }),
    alternatives: {
      FR: "glowRecipeWatermelonGlowDewDrops",
      UK: "saieGlowySuperGel",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  violetteFrBaumeShineHighlighterBalm: productData({
    category: "Highlighter",
    brand: "VIOLETTE_FR",
    name: "BAUME SHINE Universal Highlighter Balm with Squalane",
    type: "Universal balm highlighter",
    sizes: ["standard"],
    image: skuImage("s2921252"),
    links: countryLinks({
      US: "https://www.sephora.com/brand/violette-fr/luminizer-luminous-makeup"
    }),
    alternatives: {
      CA: "tower28SuperDewHighlightBalm",
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  isamayaSkinEnhancingDuo: productData({
    category: "Highlighter / Blush",
    brand: "ISAMAYA",
    name: "Skin Enhancing Duo - Cream Blush and Highlighter",
    type: "Cream blush and highlighter duo",
    sizes: ["duo"],
    image: skuImage("s2855559"),
    links: countryLinks({
      US: "https://www.sephora.com/brand/isamaya/cheek-makeup",
      CA: "https://www.sephora.com/ca/en/brand/isamaya/cheek-makeup"
    }),
    alternatives: {
      FR: "charlotteMiniHollywoodBlushGlowPalette",
      UK: "charlotteMiniHollywoodBlushGlowPalette",
      AU: "makeUpForEverHdSkinBlushGlowPalette",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  isamayaFaceGlaze: productData({
    category: "Highlighter / Face Gloss",
    brand: "ISAMAYA",
    name: "Face Glaze",
    type: "Glassy face glaze",
    sizes: ["standard"],
    image: skuImage("s2855773"),
    links: countryLinks({
      US: "https://www.sephora.com/brand/isamaya/cheek-makeup",
      CA: "https://www.sephora.com/ca/en/product/face-glaze-skin-primer-P515463"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  anastasiaBeverlyHillsIcedOutHighlighter: productData({
    category: "Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Iced Out Illuminating Powder Highlighter",
    type: "Icy powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2411494"),
    links: countryLinks({
      US: "https://www.sephora.com/product/anastasia-beverly-hills-iced-out-highlighter-P468344",
      CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-iced-out-highlighter-P468344"
    }),
    alternatives: {
      FR: "sephoraColorfulPowderLuminizer",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  anastasiaBeverlyHillsCreamStickHighlighter: productData({
    category: "Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Cream Stick Highlighter with Brush Applicator",
    type: "Cream stick highlighter with brush",
    sizes: ["standard"],
    image: skuImage("s2520336"),
    links: countryLinks({
      US: "https://www.sephora.com/brand/anastasia-beverly-hills/luminizer-luminous-makeup"
    }),
    alternatives: {
      CA: "anastasiaBeverlyHillsIcedOutHighlighter",
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  kosasColorLightCremeBlushHighlighterDuo: productData({
    category: "Highlighter / Blush",
    brand: "Kosas",
    name: "Color & Light: Crème Cream Blush & Highlighter Duo",
    type: "Cream blush and highlighter duo",
    sizes: ["duo"],
    image: skuImage("s2193704"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/brand/kosas/blush"
    }),
    alternatives: {
      US: "kosasShinyObjectsWetGlistenHighlighter",
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  natashaDenonaGoldenHighlighterTrio: productData({
    category: "Highlighter Palette",
    brand: "NATASHA DENONA",
    name: "Golden Highlighter Trio Multi-Use Hybrid Glow Palette",
    type: "Three-shade foil-finish highlighter palette",
    sizes: ["palette"],
    image: skuImage("s2775716"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/natasha-denona-golden-highlighter-trio-multi-use-hybrid-glow-palette-P511468"
    }),
    alternatives: {
      US: "natashaDenonaGlamFaceEyePalette",
      FR: "hudaBlushFilterBlushlightersPalette",
      UK: "hourglassAmbientLightingPalette",
      AU: "makeUpForEverHdSkinBlushGlowPalette",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),
  
glossierFuturedewSolidOilSerumIlluminator: productData({
    category: "Highlighter",
    brand: "Glossier",
    name: "Futuredew Solid Oil-Serum Illuminator",
    type: "Solid oil-serum dewy illuminator",
    sizes: ["standard"],
    image: skuImage("s2839389"),
    links: countryLinks({
      US: "https://www.sephora.com/product/futuredew-solid-oil-serum-illuminator-P514670",
      CA: "https://www.sephora.com/ca/en/product/futuredew-solid-oil-serum-illuminator-P514670"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "meritDayGlowHighlightingBalm",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  milkCoolingWaterJellyShimmerHighlighterStick: productData({
    category: "Highlighter",
    brand: "MILK MAKEUP",
    name: "Cooling Water Jelly Shimmer Highlighter Stick for Face and Eyes",
    type: "Cooling jelly shimmer highlighter stick",
    sizes: ["standard"],
    image: skuImage("s2938645"),
    links: countryLinks({
      US: "https://www.sephora.com/product/cooling-water-jelly-shimmer-P520582",
      CA: "https://www.sephora.com/ca/en/product/cooling-water-jelly-shimmer-P520582",
      FR: "https://www.sephora.fr/p/cooling-water-jelly-shimmer-stick-%E2%80%93-illuminateur-pour-le-visage-et-les-yeux-P1000211724.html"
    }),
    alternatives: {
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "milkDewyCreamHighlighterStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  hausLabsBioRadiantGelPowderHighlighter: productData({
    category: "Highlighter",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Radiant Gel-Powder Illuminating Highlighter with Fermented Arnica",
    type: "Gel-powder illuminating highlighter",
    sizes: ["standard"],
    image: skuImage("s2572576"),
    links: countryLinks({
      US: "https://www.sephora.com/product/bio-radiant-gel-powder-highlighter-with-fermented-arnica-P500314",
      CA: "https://www.sephora.com/ca/en/product/bio-radiant-gel-powder-highlighter-with-fermented-arnica-P500314"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  anastasiaBeverlyHillsGlowSeekerHighlighter: productData({
    category: "Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Glow Seeker Champagne Gold Powder Highlighter",
    type: "Champagne gold powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2716785"),
    links: countryLinks({
      US: "https://www.sephora.com/product/anastasia-beverly-hills-glow-seeker-highlighter-P509005",
      CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-glow-seeker-highlighter-P509005"
    }),
    alternatives: {
      FR: "sephoraColorfulPowderLuminizer",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  milkHolographicStickHighlighter: productData({
    category: "Highlighter",
    brand: "MILK MAKEUP",
    name: "Holographic Stick",
    type: "Prismatic cream highlighter stick",
    sizes: ["mini", "standard"],
    image: skuImage("s2032746"),
    links: countryLinks({
      US: "https://www.sephora.com/product/holographic-stick-P411508",
      CA: "https://www.sephora.com/ca/en/product/holographic-stick-P411508"
    }),
    alternatives: {
      FR: "milkCoolingWaterJellyShimmerHighlighterStick",
      UK: "fentyDiamondBombAllOverDiamondVeil",
      AU: "milkDewyCreamHighlighterStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  charlotteGlowGlideFaceArchitectHighlighter: productData({
    category: "Highlighter",
    brand: "Charlotte Tilbury",
    name: "Glow Glide Face Architect Highlighter",
    type: "Liquid-like powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2643344"),
    links: countryLinks({
      US: "https://www.sephora.com/product/charlotte-tilbury-hollywood-glow-glide-highlighter-P503729",
      CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-hollywood-glow-glide-highlighter-P503729"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  makeupByMarioSoftGlowHighlighter: productData({
    category: "Highlighter",
    brand: "MAKEUP BY MARIO",
    name: "Soft Glow Highlighter",
    type: "Creamy weightless powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2449775"),
    links: countryLinks({
      US: "https://www.sephora.com/product/makeup-by-mario-soft-glow-highlighter-P472328",
      CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-soft-glow-highlighter-P472328"
    }),
    alternatives: {
      FR: "sephoraColorfulPowderLuminizer",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  tooFacedBornThisWaySuperGlowEnhancer: productData({
    category: "Highlighter / Glow Booster",
    brand: "Too Faced",
    name: "Born This Way Super Glow Multi-Use Highlighting Skin Enhancer",
    type: "Multi-use liquid highlighting skin enhancer",
    sizes: ["standard"],
    image: skuImage("s2935476"),
    links: countryLinks({
      US: "https://www.sephora.com/product/born-this-way-super-glow-P520818",
      CA: "https://www.sephora.com/ca/en/product/born-this-way-super-glow-P520818"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  benefitDandelionBabyPinkBrighteningBlush: productData({
    category: "Highlighter / Blush",
    brand: "Benefit Cosmetics",
    name: "Dandelion Baby-Pink Brightening Blush",
    type: "Brightening satin blush",
    sizes: ["mini", "standard"],
    image: skuImage("s2520195"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dandelion-box-o-powder-blush-P38347",
      CA: "https://www.sephora.com/ca/en/product/dandelion-box-o-powder-blush-P38347"
    }),
    alternatives: {
      FR: "benefitCookieTicklePowderHighlighter",
      UK: "benefitCookieTicklePowderHighlighter",
      AU: "benefitCookieTicklePowderHighlighter",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  macMineralizeSkinfinishHighlighterPowder: productData({
    category: "Highlighter / Face Powder",
    brand: "MAC Cosmetics",
    name: "Mineralize Skinfinish Sheer Coverage Luminous Highlighting Powder for Face and Body",
    type: "Luminous baked face and body powder",
    sizes: ["standard"],
    image: skuImage("s2093672"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/mineralize-skinfinish-P07431785"
    }),
    alternatives: {
      US: "macSkinfinishLightstruckLiquidHighlighter",
      FR: "macSkinfinishLightstruckLiquidHighlighter",
      UK: "macSkinfinishLightstruckLiquidHighlighter",
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  glossierHaloscopeBalmHighlighterStick: productData({
    category: "Highlighter",
    brand: "Glossier",
    name: "Haloscope Balm Dewy Highlighter Stick",
    type: "Dewy balm highlighter stick",
    sizes: ["standard"],
    image: skuImage("s2649416"),
    links: countryLinks({
      US: "https://www.sephora.com/product/glossier-haloscope-balm-dewy-highlighter-stick-P504814",
      CA: "https://www.sephora.com/ca/en/product/glossier-haloscope-balm-dewy-highlighter-stick-P504814"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "milkDewyCreamHighlighterStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  tower28SuperDewHighlightBalm: productData({
    category: "Highlighter",
    brand: "Tower 28 Beauty",
    name: "SuperDew Shimmer-Free Highlight Balm",
    type: "Shimmer-free glossy highlight balm",
    sizes: ["standard"],
    image: skuImage("s2284867"),
    links: countryLinks({
      US: "https://www.sephora.com/product/superdew-shimmer-free-highlight-balm-P448855",
      CA: "https://www.sephora.com/ca/en/product/superdew-shimmer-free-highlight-balm-P448855"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  fentyKillawattFoilFreestyleHighlighter: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Foil Freestyle Highlighter",
    type: "Metallic cream-powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2211092"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/killawatt-foil-freestyle-highlighter-duo-P34908923",
      FR: "https://www.sephora.fr/p/killawatt-foil-freestyle-highlighter---enlumineur-P3099025.html"
    }),
    alternatives: {
      US: "fentyKillawattHighlighter",
      UK: "fentyDiamondBombAllOverDiamondVeil",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  macPrepPrimeHighlighter: productData({
    category: "Highlighting Pen",
    brand: "MAC Cosmetics",
    name: "Prep + Prime Illuminating Sheer Coverage Long-Wear Brightening Highlighter",
    type: "Brightening highlighting pen",
    sizes: ["standard"],
    image: skuImage("s2093193"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/prep-prime-highlighter-P04879887"
    }),
    alternatives: {
      US: "yslToucheEclatAwakeningConcealerClickPen",
      FR: "yslToucheEclatAwakeningConcealerClickPen",
      UK: "charlotteBeautyHighlighterWand",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  iliaLightshiftCreamHighlighter: productData({
    category: "Highlighter",
    brand: "ILIA",
    name: "Lightshift Weightless Silky Cream Highlighter with 12-hour Wear",
    type: "Silky cream-to-powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2794923"),
    links: countryLinks({
      US: "https://www.sephora.com/product/ilia-lightshift-weightless-silky-cream-highlighter-P511708",
      CA: "https://www.sephora.com/ca/en/product/ilia-lightshift-weightless-silky-cream-highlighter-P511708"
    }),
    alternatives: {
      FR: "iliaMultiStickCreamBlushHighlighterLipTint",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  danessaMyricksVisionFlushGlowHighlighter: productData({
    category: "Highlighter",
    brand: "Danessa Myricks Beauty",
    name: "Vision Flush Glow - Hyper Radiant Liquid Highlighter",
    type: "Hyper-radiant liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2654093"),
    links: countryLinks({
      US: "https://www.sephora.com/product/danessa-myricks-beauty-vision-flush-glow-hyper-radiant-liquid-highlighter-P504669",
      CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-vision-flush-glow-hyper-radiant-liquid-highlighter-P504669"
    }),
    alternatives: {
      FR: "hausLabsBioRadiantGelPowderHighlighter",
      UK: "hourglassUnrealRadiantGlowLiquidHighlighter",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "fentyKillawattHighlighter"
    }
  }),
  
  diorLimitedEditionForeverGlowLuminizerHighlighter: productData({
    category: "Highlighter",
    brand: "DIOR",
    name: "Limited Edition Forever Glow Luminizer Highlighter",
    type: "Limited-edition powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2965010"),
    links: countryLinks({
      US: "https://www.sephora.com/product/limited-edition-forever-glow-luminizer-highlighter-P522108",
      CA: "https://www.sephora.com/ca/en/product/limited-edition-forever-glow-luminizer-highlighter-P522108"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "hourglassAmbientStrobeLightingPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  diorBackstageGlassyGlowStickHighlighterBalm: productData({
    category: "Highlighter",
    brand: "DIOR",
    name: "Backstage Glassy Glow Stick Multi-Use Stick Highlighter Balm",
    type: "Glassy multi-use highlighter balm stick",
    sizes: ["standard"],
    image: skuImage("s2962504"),
    links: countryLinks({
      US: "https://www.sephora.com/product/backstage-glassy-glow-stick-multi-use-stick-highlighter-balm-P522583",
      CA: "https://www.sephora.com/ca/en/product/backstage-glassy-glow-stick-multi-use-stick-highlighter-balm-P522583"
    }),
    alternatives: {
      FR: "westmanAtelierLitUpHighlightStick",
      UK: "meritDayGlowHighlightingBalm",
      AU: "hausLabsBioRadiantHighlighterBalm",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  tomFordShadeIlluminateHighlightingDuo: productData({
    category: "Highlighter",
    brand: "TOM FORD",
    name: "Shade and Illuminate Highlighting Duo",
    type: "Powder highlighting duo",
    sizes: ["standard"],
    image: skuImage("s2602886"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/skin-illuminating-powder-duo-P422552"
    }),
    alternatives: {
      US: "yslHyperLuminizePowderHighlighter",
      FR: "charlotteMiniFilmstarBronzeGlowDuo",
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  tomFordSoleilGlowBronzer: productData({
    category: "Highlighter / Bronzer",
    brand: "TOM FORD",
    name: "Soleil Glow Bronzer for Buildable, Luminous Finish",
    type: "Luminous powder bronzer",
    sizes: ["standard"],
    image: skuImage("s2219582"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/soleil-glow-bronzer-P443930"
    }),
    alternatives: {
      US: "makeupByMarioSoftSculptTransformingSkinPerfector",
      FR: "charlotteMiniFilmstarBronzeGlowDuo",
      UK: "charlotteMiniFilmstarBronzeGlowDuo",
      AU: "makeupByMarioSoftSculptTransformingSkinPerfector",
      BR: "fentyKillawattHighlighter"
    }
  }),

  makeUpForEverArtistColorPencilLongwearEyeliner: productData({
    category: "Highlighter / Multi-Use Pencil",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Pencil Longwear Eyeliner",
    type: "Multi-use matte and shimmer pencil",
    sizes: ["standard"],
    image: skuImage("s2072734"),
    links: countryLinks({
      US: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-longwear-eyeliner-P511574",
      CA: "https://www.sephora.com/ca/en/product/make-up-for-ever-artist-color-pencil-longwear-eyeliner-P511574",
      FR: "https://www.sephora.fr/p/artist-color-pencil---crayon-multi-usage-P3294062.html"
    }),
    alternatives: {
      UK: "charlotteBeautyHighlighterWand",
      AU: "makeUpForEverHdSkinBlushGlowPalette",
      BR: "fentyKillawattHighlighter"
    }
  }),

  nudestixMiniNudiesRosesHoneyNudesKit: productData({
    category: "Highlighter / Multi-Use Set",
    brand: "NUDESTIX",
    name: "Mini NUDIES Roses 'N Honey Nudes 3pc Kit",
    type: "Mini multi-use face, eye and lip set",
    sizes: ["set", "mini"],
    image: skuImage("s2467561"),
    links: countryLinks({
      US: "https://www.sephora.com/product/nudestix-mini-nudies-roses-n-honey-nudes-3pc-kit-P478523",
      CA: "https://www.sephora.com/ca/en/product/nudestix-mini-nudies-roses-n-honey-nudes-3pc-kit-P478523"
    }),
    alternatives: {
      FR: "iliaMultiStickCreamBlushHighlighterLipTint",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "iliaMultiStickCreamBlushHighlighterLipTint",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  rareBeautyMiniPositiveLightLiquidLuminizer: productData({
    category: "Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Mini Positive Light Liquid Luminizer",
    type: "Mini liquid highlighter",
    sizes: ["mini"],
    image: skuImage("s2761997"),
    links: countryLinks({
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-mini-positive-light-liquid-luminizer-P509964",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-mini-positive-light-liquid-luminizer-P509964",
      UK: "https://www.sephora.co.uk/p/rare-beauty-mini-positive-light-liquid-luminizer"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      AU: "rareBeautyPositiveLightLiquidLuminizer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  sephoraGleamGoLiquidLuminizer: productData({
    category: "Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Gleam & Go Liquid Luminizer",
    type: "Liquid highlighter with cushion applicator",
    sizes: ["standard"],
    image: skuImage("s2932481"),
    links: countryLinks({
      US: "https://www.sephora.com/product/gleam-glow-luminizer-P520687",
      CA: "https://www.sephora.com/ca/en/product/gleam-glow-luminizer-P520687",
      FR: "https://www.sephora.fr/p/gleam-et-go---highlighter-liquide-fini-seconde-peau-P1000211789.html",
      UK: "https://www.sephora.co.uk/p/sephora-collection-gleam-go-liquid-highlighter"
    }),
    alternatives: {
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  macSkinfinishLightstruckLiquidHighlighter: productData({
    category: "Highlighter",
    brand: "MAC Cosmetics",
    name: "Skinfinish Lightstruck Hydrating, Radiant Glow Liquid Highlighter",
    type: "Hydrating radiant liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2884377"),
    links: countryLinks({
      US: "https://www.sephora.com/product/skinfinish-lightstruck-light-reflecting-hydrating-lustrous-colour-liquid-highlighter-P517618",
      CA: "https://www.sephora.com/ca/en/product/skinfinish-lightstruck-light-reflecting-hydrating-lustrous-colour-liquid-highlighter-P517618",
      FR: "https://www.sephora.fr/p/skinfinish-lightstruck-liquid-highlighter---highlighter-liquide-P1000209805.html",
      UK: "https://www.sephora.co.uk/p/m-a-c-skinfinish-lightstruck-liquid-highlighter-15ml"
    }),
    alternatives: {
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  refyGlossHighlighter: productData({
    category: "Highlighter",
    brand: "REFY",
    name: "Gloss Highlighter",
    type: "Glass-like gloss highlighter",
    sizes: ["standard"],
    image: skuImage("s2798213"),
    links: countryLinks({
      US: "https://www.sephora.com/product/refy-beauty-gloss-highlighter-P475158",
      CA: "https://www.sephora.com/ca/en/product/refy-beauty-gloss-highlighter-P475158",
      UK: "https://www.sephora.co.uk/p/REFY-GLOSS-HIGHLIGHTER-20ml"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  fentyLiquidKillawattFluidFreestyleHighlighter: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Liquid Killawatt Fluid Freestyle Highlighter",
    type: "Liquid freestyle highlighter",
    sizes: ["standard"],
    image: "",
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-liquid-killawatt-fluid-freestyle-highlighter-P479634",
      FR: "https://www.sephora.fr/p/liquid-killawatt---fluid-freestyle-highlighter-P10022569.html"
    }),
    alternatives: {
      US: "fentyKillawattHighlighter",
      UK: "fentyDiamondBombAllOverDiamondVeil",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  guerlainMeteoritesPearlsOfPowder: productData({
    category: "Highlighter / Finishing Powder",
    brand: "GUERLAIN",
    name: "Meteorites Light-Revealing Pearls of Powder",
    type: "Illuminating finishing powder pearls",
    sizes: ["standard"],
    image: skuImage("s2780096"),
    links: countryLinks({
      US: "https://www.sephora.com/product/P266308",
      CA: "https://www.sephora.com/ca/en/product/meteorites-illuminating-powder-pearls-P266308"
    }),
    alternatives: {
      FR: "hourglassAmbientLightingPowder",
      UK: "hourglassAmbientLightingPowder",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  charlotteUnrealSkinSheerGlowTintStick: productData({
    category: "Highlighter / Complexion Glow",
    brand: "Charlotte Tilbury",
    name: "Unreal Skin Sheer Glow Tint Hydrating Foundation Stick",
    type: "Sheer glow tint foundation stick",
    sizes: ["standard"],
    image: skuImage("s2765774"),
    links: countryLinks({
      US: "https://www.sephora.com/product/P511699",
      CA: "https://www.sephora.com/ca/en/product/P511699",
      UK: "https://www.sephora.co.uk/p/charlotte-tilbury-unreal-skin-sheer-glow-tint-hydrating-foundation-stick"
    }),
    alternatives: {
      FR: "charlotteHollywoodFlawlessFilter",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  diorRosyGlowBlushStick: productData({
    category: "Highlighter / Blush Stick",
    brand: "DIOR",
    name: "Rosy Glow Blush Stick",
    type: "Dewy glow blush stick",
    sizes: ["standard"],
    image: skuImage("s2864684"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dior-rosy-glow-blush-stick-P516168",
      CA: "https://www.sephora.com/ca/en/product/P516168"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "charlotteBeautyHighlighterWand",
      AU: "hourglassUnrealRadiantGlowLiquidHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  kosasGlowIvSkinIlluminatingEnhancer: productData({
    category: "Highlighter / Glow Booster",
    brand: "Kosas",
    name: "Glow I.V. Vitamin-Infused Skin Illuminating Enhancer",
    type: "Liquid skin enhancer and glow booster",
    sizes: ["standard"],
    image: skuImage("s2642403"),
    links: countryLinks({
      US: "https://www.sephora.com/product/kosas-glow-iv-vitamin-infused-skin-illuminating-enhancer-P503896",
      CA: "https://www.sephora.com/ca/en/product/P503896",
      UK: "https://www.sephora.co.uk/p/kosas-glow-iv-vitamin-infused-skin-illuminating-enhancer"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  sephoraColorfulBlushHighlighterGlaze: productData({
    category: "Highlighter / Blush",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Blush and Highlighter Glaze",
    type: "Blush and highlighter hybrid",
    sizes: ["standard"],
    image: skuImage("s2871028"),
    links: countryLinks({
      US: "https://www.sephora.com/product/colorful-blush-glaze-P516171",
      CA: "https://www.sephora.com/ca/en/product/colorful-blush-glaze-P516171"
    }),
    alternatives: {
      FR: "sephoraColorfulPowderLuminizer",
      UK: "rareBeautyPositiveLightHighlighter",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  patrickTaMajorGlowHighlighterDuo: productData({
    category: "Highlighter",
    brand: "PATRICK TA",
    name: "Major Glow Creme & Powder Light Reflecting Translucent Highlighter Duo",
    type: "Cream and powder highlighter duo",
    sizes: ["standard"],
    image: skuImage("s2779718"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/major-glow-creme-powder-light-reflecting-translucent-highlighter-duo-P516953"
    }),
    alternatives: {
      US: "hourglassUnrealRadiantGlowLiquidHighlighter",
      FR: "charlotteBeautyHighlighterWand",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "westmanAtelierSuperLoadedTintedHighlight",
      BR: "fentyKillawattHighlighter"
    }
  }),

  macStrobeCreamIlluminatingHighlighter: productData({
    category: "Highlighter / Glow Cream",
    brand: "MAC Cosmetics",
    name: "Strobe Cream Illuminating Tinted Moisturizer and Hydrating Highlighter",
    type: "Hydrating illuminating cream",
    sizes: ["mini", "standard"],
    image: skuImage("s2099505"),
    links: countryLinks({
      US: "https://www.sephora.com/product/strobe-cream-illuminating-tinted-moisturizer-and-hydrating-highlighter-P04845668",
      CA: "https://www.sephora.com/ca/en/product/strobe-cream-illuminating-tinted-moisturizer-and-hydrating-highlighter-P04845668"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  narsLightReflectingUndereyeBrightener: productData({
    category: "Highlighting Corrector",
    brand: "NARS",
    name: "Light Reflecting™ Undereye Brightener",
    type: "Undereye brightening highlighter",
    sizes: ["standard"],
    image: skuImage("s2670362"),
    links: countryLinks({
      US: "https://www.sephora.com/product/nars-light-reflecting-eye-brightener-P506288",
      CA: "https://www.sephora.com/ca/en/product/nars-light-reflecting-eye-brightener-P506288",
      FR: "https://www.sephora.fr/p/light-reflecting-eye-brightener---illuminateur-de-teint-P10052567.html"
    }),
    alternatives: {
      UK: "charlotteBeautyHighlighterWand",
      AU: "hourglassAmbientLightingPowder",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  supergoopGlowscreenSpf40: productData({
    category: "Highlighter / SPF Glow",
    brand: "Supergoop!",
    name: "Glowscreen SPF 40 PA+++",
    type: "Glowy sunscreen primer",
    sizes: ["mini", "standard"],
    image: skuImage("s2433977"),
    links: countryLinks({
      US: "https://www.sephora.com/product/supergoop-glowscreen-spf-40-P468414",
      CA: "https://www.sephora.com/ca/en/product/supergoop-glowscreen-spf-40-P468414"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  iconicLondonRollawayGlowHighlighter: productData({
    category: "Highlighter",
    brand: "Iconic London",
    name: "Rollaway Glow Highlighter",
    type: "Roll-on liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2645166"),
    links: countryLinks({
      US: "https://www.sephora.com/product/iconic-london-rollaway-glow-highlighter-P505240",
      CA: "https://www.sephora.com/ca/en/product/iconic-london-rollaway-glow-highlighter-P505240"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightLiquidLuminizer",
      UK: "charlotteBeautyHighlighterWand",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  iconicLondonIlluminatorLiquidHighlight: productData({
    category: "Highlighter",
    brand: "Iconic London",
    name: "Illuminator Liquid Highlight",
    type: "Concentrated liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2380426"),
    links: countryLinks({
      US: "https://www.sephora.com/product/illuminator-P461217",
      CA: "https://www.sephora.com/ca/en/product/illuminator-P461217"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  saieGlowSculptHighlightingBlush: productData({
    category: "Highlighter / Blush",
    brand: "Saie",
    name: "Glow Sculpt Multi-Use Cream Highlighting Blush",
    type: "Cream highlighting blush",
    sizes: ["standard"],
    image: skuImage("s2679462"),
    links: countryLinks({
      US: "https://www.sephora.com/product/saie-the-glow-sculpt-P505541",
      CA: "https://www.sephora.com/ca/en/product/saie-the-glow-sculpt-P505541"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "fentyKillawattHighlighter"
    }
  }),
  
  westmanAtelierLiquidSuperLoadedIlluminator: productData({
    category: "Highlighter",
    brand: "Westman Atelier",
    name: "Liquid Super Loaded All-Over Illuminating Highlighter with Vitamin C",
    type: "Liquid complexion illuminator",
    sizes: ["standard"],
    image: skuImage("s2701282"),
    links: countryLinks({
      US: "https://www.sephora.com/product/liquid-super-loaded-all-over-illuminator-with-vitamin-c-P506546",
      CA: "https://www.sephora.com/ca/en/product/liquid-super-loaded-all-over-illuminator-with-vitamin-c-P506546"
    }),
    alternatives: {
      FR: "westmanAtelierSuperLoadedTintedHighlight",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  guerlainTerracottaLuminizerHighlighterPowder: productData({
    category: "Highlighter",
    brand: "GUERLAIN",
    name: "Terracotta Luminizer Highlighter Powder",
    type: "Shimmering powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2664118"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/guerlain-terracotta-luminizer-highlighter-powder-P505718"
    }),
    alternatives: {
      US: "yslHyperLuminizePowderHighlighter",
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  makeUpForEverStarLitPowder: productData({
    category: "Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "Star Lit Powder",
    type: "Ultra-fine shimmering powder",
    sizes: ["standard"],
    image: skuImage("s1911114"),
    links: countryLinks({
      US: "https://www.sephora.com/product/star-lit-powder-P415958",
      CA: "https://www.sephora.com/ca/en/product/star-lit-powder-P415958"
    }),
    alternatives: {
      FR: "makeUpForEverHdSkinBlushGlowPalette",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  givenchyPrismeLibreStrobingHighlighterPowder: productData({
    category: "Highlighter",
    brand: "Givenchy",
    name: "Prisme Libre Strobing & Illuminating Highlighter Powder",
    type: "Marbled powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2947679"),
    links: countryLinks({
      US: "https://www.sephora.com/product/prisme-libre-strobing-and-illuminating-highlighter-powder-P520320",
      CA: "https://www.sephora.com/ca/en/product/prisme-libre-strobing-and-illuminating-highlighter-powder-P520320"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  anastasiaBeverlyHillsFacePalette: productData({
    category: "Highlighter Palette",
    brand: "Anastasia Beverly Hills",
    name: "Face Palettes – All in One Bronzer, Highlighter, Blush",
    type: "Bronzer, highlighter and blush face palette",
    sizes: ["palette"],
    image: skuImage("s2411536"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-face-palette-P471735"
    }),
    alternatives: {
      US: "natashaDenonaGlamFaceEyePalette",
      FR: "hudaBlushFilterBlushlightersPalette",
      UK: "charlotteMiniHollywoodBlushGlowPalette",
      AU: "makeUpForEverHdSkinBlushGlowPalette",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  kvdShadeLightRefillableContourPalette: productData({
    category: "Highlighter / Contour Palette",
    brand: "KVD Beauty",
    name: "Shade + Light Refillable Powder Face Contour Palette",
    type: "Powder contour and highlight palette",
    sizes: ["palette"],
    image: skuImage("s1848522"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/shade-light-face-contour-refillable-palette-P413458"
    }),
    alternatives: {
      US: "makeupByMarioSoftSculptTransformingSkinPerfector",
      FR: "makeUpForEverHdSkinSculptingPalette",
      UK: "makeupByMarioSoftSculptTransformingSkinPerfector",
      AU: "makeUpForEverHdSkinSculptingPalette",
      BR: "fentyKillawattHighlighter"
    }
  }),

  liseWatierHavanaTrioHighlighter: productData({
    category: "Highlighter Palette",
    brand: "Lise Watier",
    name: "Havana Trio Highlighter",
    type: "Three-shade powder highlighter palette",
    sizes: ["palette"],
    image: skuImage("s2133643"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/havana-trio-highlighter-P435747"
    }),
    alternatives: {
      US: "hourglassAmbientLightingPalette",
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientLightingPalette",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  gucciIlluminateurDeBeauteDrops: productData({
    category: "Highlighter",
    brand: "Gucci",
    name: "Illuminateur De Beauté Multi Use Highlighting Drops",
    type: "Liquid highlighting drops",
    sizes: ["standard"],
    image: skuImage("s2687135"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/eclat-de-beaute-multi-use-drops-P506101"
    }),
    alternatives: {
      US: "armaniLuminousSilkAcquaHighlighter",
      FR: "saieGlowySuperGel",
      UK: "armaniFluidSheerGlowEnhancer",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  charlotteMiniHollywoodBlushGlowPalette: productData({
    category: "Highlighter Palette",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Blush & Glow Palette",
    type: "Mini blush and highlighter palette",
    sizes: ["mini", "palette"],
    image: skuImage("s2705440"),
    links: countryLinks({
      US: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700",
      CA: "https://www.sephora.com/ca/en/product/mini-hollywood-blush-glow-set-shade-1-P508700"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  morpheDreamlightGeleeHighlighterStick: productData({
    category: "Highlighter",
    brand: "Morphe",
    name: "Dreamlight Gelee Highlighter Stick",
    type: "Water-based gelée highlighter stick",
    sizes: ["standard"],
    image: skuImage("s2936193"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/dreamlight-gelee-highlighter-stick-P520075"
    }),
    alternatives: {
      US: "milkDewyCreamHighlighterStick",
      FR: "sephoraColorfulPowderLuminizer",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "milkDewyCreamHighlighterStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  oneSizeB12BaseThinnerLuminousSerum: productData({
    category: "Highlighter / Glow Serum",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "B12 Base Thinner Luminous Vitamin Pearl Boosting Serum",
    type: "Glow serum and mixing medium",
    sizes: ["standard"],
    image: skuImage("s2943413"),
    links: countryLinks({
      US: "https://www.sephora.com/product/b12-base-thinner-luminous-vitamin-pearl-boosting-serum-P515065",
      CA: "https://www.sephora.com/ca/en/product/b12-base-thinner-luminous-vitamin-pearl-boosting-serum-P515065"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "armaniFluidSheerGlowEnhancer",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  milkDewyCreamHighlighterStick: productData({
    category: "Highlighter",
    brand: "MILK MAKEUP",
    name: "Dewy Cream Highlighter Stick",
    type: "Cream highlighter stick",
    sizes: ["standard"],
    image: skuImage("s2601175"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dewy-cream-highlighter-stick-P404798",
      CA: "https://www.sephora.com/ca/en/product/dewy-cream-highlighter-stick-P404798"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  iliaMultiStickCreamBlushHighlighterLipTint: productData({
    category: "Highlighter / Multi-Use Stick",
    brand: "ILIA",
    name: "Multi-Stick Cream Blush + Highlighter + Lip Tint",
    type: "Multi-use cream stick",
    sizes: ["standard"],
    image: skuImage("s2564367"),
    links: countryLinks({
      US: "https://www.sephora.com/product/multi-stick-P411848",
      CA: "https://www.sephora.com/ca/en/product/multi-stick-P411848"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  calirayLightSourceIlluminator: productData({
    category: "Highlighter",
    brand: "caliray",
    name: "Light Source Blurring & Hydrating Illuminator",
    type: "Blurring hydrating liquid illuminator",
    sizes: ["standard"],
    image: skuImage("s2968410"),
    links: countryLinks({
      US: "https://www.sephora.com/product/light-source-illuminator-P522521"
    }),
    alternatives: {
      CA: "saieGlowySuperGel",
      FR: "saieGlowySuperGel",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "westmanAtelierLiquidSuperLoadedIlluminator",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),
  
  givenchyPrismeLibreLoosePowder: productData({
    category: "Highlighter / Setting Powder",
    brand: "Givenchy",
    name: "Prisme Libre Illuminating & Color Correcting Loose Powder",
    type: "Illuminating loose finishing powder",
    sizes: ["mini", "standard"],
    image: skuImage("s2364628"),
    links: countryLinks({
      US: "https://www.sephora.com/product/prisme-libre-loose-powder-P390722",
      CA: "https://www.sephora.com/ca/en/product/prisme-libre-loose-powder-P390722",
      FR: "https://www.sephora.fr/p/prisme-libre---poudre-libre-matifiante--correctrice-et-lumineuse-P10058222.html"
    }),
    alternatives: {
      UK: "hourglassAmbientLightingPowder",
      AU: "rareBeautyPositiveLightHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  makeUpForEverHdSkinSculptingPalette: productData({
    category: "Highlighter Palette",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Cream contour and highlight face palette",
    sizes: ["palette"],
    image: skuImage("s2670305"),
    links: countryLinks({
      US: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329",
      CA: "https://www.sephora.com/ca/en/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329",
      FR: "https://www.sephora.fr/p/hd-skin-sculting-palette---palette-sculptante-creme-P10050601.html",
      AU: "https://www.sephora.com.au/products/make-up-for-ever-hd-skin-sculpting-palette"
    }),
    alternatives: {
      UK: "makeUpForEverHdSkinBlushGlowPalette",
      BR: "fentyKillawattHighlighter"
    }
  }),

  makeUpForEverHdSkinBlushGlowPalette: productData({
    category: "Highlighter Palette",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Blush & Glow Longwear Cream Face Palette",
    type: "Cream blush and highlighter palette",
    sizes: ["palette"],
    image: skuImage("s2844660"),
    links: countryLinks({
      US: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035",
      CA: "https://www.sephora.com/ca/en/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035",
      FR: "https://www.sephora.fr/p/hd-skin-blush-et-glow---palette-blush-et-highlighter-creme-P1000203737.html",
      UK: "https://www.sephora.co.uk/p/make-up-for-ever-hd-skin-blush-glow-palette",
      AU: "https://www.sephora.com.au/products/make-up-for-ever-hd-skin-blush-and-glow-palette"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  westmanAtelierSuperLoadedTintedHighlight: productData({
    category: "Highlighter",
    brand: "Westman Atelier",
    name: "Super Loaded Tinted Cream Highlighter",
    type: "Tinted cream highlighter",
    sizes: ["standard"],
    image: skuImage("s2415081"),
    links: countryLinks({
      US: "https://www.sephora.com/product/westman-atelier-super-loaded-tinted-highlight-P468432",
      CA: "https://www.sephora.com/ca/en/product/westman-atelier-super-loaded-tinted-highlight-P468432",
      FR: "https://www.sephora.fr/p/super-loaded---illuminateur-creme-P10058434.html"
    }),
    alternatives: {
      UK: "westmanAtelierLitUpHighlightStick",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  cleDePeauLuminizingFaceEnhancer: productData({
    category: "Highlighter",
    brand: "Clé de Peau Beauté",
    name: "Luminizing Face Enhancer",
    type: "Luxury powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2946342"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/luminizing-face-enhancer-P501456"
    }),
    alternatives: {
      US: "hourglassAmbientLightingPowder",
      FR: "westmanAtelierSuperLoadedTintedHighlight",
      UK: "hourglassAmbientLightingPowder",
      AU: "pradaLightGlowingHighlighterPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  gucciGlowGelPowderHighlighter: productData({
    category: "Highlighter",
    brand: "Gucci",
    name: "Glow Multi-Use Illuminating Gel-Powder Highlighter",
    type: "Gel-powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2788412"),
    links: countryLinks({
      US: "https://www.sephora.com/product/P512763",
      CA: "https://www.sephora.com/ca/en/product/P512763",
      FR: "https://www.sephora.fr/p/glow-highlighter----illuminateur-en-gel-poudre-P1000203562.html",
      UK: "https://www.sephora.co.uk/p/gucci-gucci-glow-highlighter",
      AU: "https://www.sephora.com.au/products/gucci-beauty-glow-highlighter-multi-use-silky-illuminating-powder"
    }),
    alternatives: {
      BR: "fentyKillawattHighlighter"
    }
  }),

  tomFordShadeIlluminateCreamContourDuo: productData({
    category: "Highlighter / Contour",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo",
    type: "Cream contour and illuminating duo",
    sizes: ["standard"],
    image: skuImage("s1992429"),
    links: countryLinks({
      US: "https://www.sephora.com/product/shade-illuminate-P422574",
      CA: "https://www.sephora.com/ca/en/product/shade-illuminate-P422574"
    }),
    alternatives: {
      FR: "charlotteMiniFilmstarBronzeGlowDuo",
      UK: "charlotteMiniFilmstarBronzeGlowDuo",
      AU: "makeupByMarioSoftSculptTransformingSkinPerfector",
      BR: "fentyKillawattHighlighter"
    }
  }),

  charlotteMiniFilmstarBronzeGlowDuo: productData({
    category: "Highlighter / Bronzer",
    brand: "Charlotte Tilbury",
    name: "Mini Filmstar Bronze & Glow Contour Duo",
    type: "Mini contour and highlighter powder duo",
    sizes: ["mini"],
    image: skuImage("s2390391"),
    links: countryLinks({
      US: "https://www.sephora.com/product/charlotte-tilbury-mini-filmstar-bronze-glow-P463822",
      CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-mini-filmstar-bronze-glow-P463822"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  armaniLuminousSilkAcquaHighlighter: productData({
    category: "Highlighter",
    brand: "Armani Beauty",
    name: "Luminous Silk Acqua Highlighter",
    type: "Water-based liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2799583"),
    links: countryLinks({
      US: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-acqua-highlighter-P513504",
      CA: "https://www.sephora.com/ca/en/product/giorgio-armani-beauty-luminous-silk-acqua-highlighter-P513504",
      FR: "https://www.sephora.fr/p/acqua-highlighter---fluide-illuminateur-nacre-P1000203377.html",
      UK: "https://www.sephora.co.uk/p/armani-luminous-silk-acqua-highlighter-12ml",
      AU: "https://www.sephora.com.au/products/armani-beauty-luminous-silk-acqua-highlighter"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  makeupByMarioSoftSculptTransformingSkinPerfector: productData({
    category: "Highlighter / Bronzer",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt® Transforming Skin Perfector",
    type: "Bronzer, highlighter and finishing powder",
    sizes: ["standard"],
    image: skuImage("s2577963"),
    links: countryLinks({
      US: "https://www.sephora.com/product/softsculpt-transforming-skin-perfector-P500403",
      CA: "https://www.sephora.com/ca/en/product/softsculpt-transforming-skin-perfector-P500403",
      FR: "https://www.sephora.fr/p/softsculpt%C2%AE-transforming-skin-perfector---3-in-1-poudre-P10044341.html",
      UK: "https://www.sephora.co.uk/p/makeup-by-mario-soft-sculpt-transforming-skin-perfector-5g",
      AU: "https://www.sephora.com.au/products/makeup-by-mario-softsculpt-r-transforming-skin-perfector"
    }),
    alternatives: {
      BR: "fentyKillawattHighlighter"
    }
  }),

  gucciEclatDeBeauteEffetLumiere: productData({
    category: "Highlighter / Face Gloss",
    brand: "Gucci",
    name: "Éclat De Beauté Effet Lumière — All Over Face & Lip Gloss",
    type: "Multi-use luminous face and lip gloss",
    sizes: ["standard"],
    image: skuImage("s2357721"),
    links: countryLinks({
      US: "https://www.sephora.com/product/gucci-eclat-de-beaute-effet-lumiere-all-over-face-lip-gloss-P457649",
      CA: "https://www.sephora.com/ca/en/product/gucci-eclat-de-beaute-effet-lumiere-all-over-face-lip-gloss-P457649"
    }),
    alternatives: {
      FR: "gucciGlowGelPowderHighlighter",
      UK: "gucciGlowGelPowderHighlighter",
      AU: "gucciGlowGelPowderHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  tomFordSoleilGlowHighlighter: productData({
    category: "Highlighter",
    brand: "TOM FORD",
    name: "Soleil Glow Highlighter",
    type: "Gel-powder 8-hour highlighter",
    sizes: ["standard"],
    image: skuImage("s2966539"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/soleil-glow-highlighter-P522143"
    }),
    alternatives: {
      US: "yslHyperLuminizePowderHighlighter",
      FR: "gucciGlowGelPowderHighlighter",
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "armaniLuminousSilkAcquaHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),
  
  hausLabsBioRadiantHighlighterBalm: productData({
    category: "Highlighter",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Radiant Glassy Balm Highlighter Stick",
    type: "Glassy hydrating highlighter balm stick",
    sizes: ["standard"],
    image: skuImage("s2850345"),
    links: countryLinks({
      US: "https://www.sephora.com/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434",
      CA: "https://www.sephora.com/ca/en/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434",
      FR: "https://www.sephora.fr/p/bio-radiant%E2%84%A2-glassy-highlighter-balm---baume-enlumineur-visage-P10061973.html",
      UK: "https://www.sephora.co.uk/p/haus-labs-by-lady-gaga-bio-radiant-highlighter-balm-3g",
      AU: "https://www.sephora.com.au/products/haus-labs-by-lady-gaga-bio-radiant-glassy-balm-highlighter-stick"
    }),
    alternatives: {
      BR: "fentyKillawattHighlighter"
    }
  }),

  tooFacedDiscoCrushEyeFaceSparkle: productData({
    category: "Highlighter",
    brand: "Too Faced",
    name: "Disco Crush High Shine Glitter Eye + Face Sparkle",
    type: "Multi-use glitter eye and face highlighter",
    sizes: ["standard"],
    image: skuImage("s2794519"),
    links: countryLinks({
      US: "https://www.sephora.com/product/too-faced-disco-crush-high-shine-glitter-eye-face-sparkle-P512319",
      CA: "https://www.sephora.com/ca/en/product/too-faced-disco-crush-high-shine-glitter-eye-face-sparkle-P512319",
      FR: "https://www.sephora.fr/p/ddisco-crush---fard-a-paupieres-P10059057.html"
    }),
    alternatives: {
      UK: "fentyDiamondBombAllOverDiamondVeil",
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  kosasShinyObjectsWetGlistenHighlighter: productData({
    category: "Highlighter",
    brand: "Kosas",
    name: "Shiny Objects Wet Glisten Highlighter Powder for Face and Eyes",
    type: "Wet-pressed powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2935930"),
    links: countryLinks({
      US: "https://www.sephora.com/product/shiny-objects-highlighter-P520040",
      CA: "https://www.sephora.com/ca/en/product/shiny-objects-highlighter-P520040",
      UK: "https://www.sephora.co.uk/p/kosas-shiny-objects-wet-glisten-powder-highlighter"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      AU: "hourglassAmbientStrobeLightingPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  danessaMyricksYummySkinLowlighter: productData({
    category: "Highlighter",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder Lowlighter Soft Glow Highlighter",
    type: "Balm-to-powder soft glow highlighter",
    sizes: ["standard"],
    image: skuImage("s2774396"),
    links: countryLinks({
      US: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-lowlighter-soft-glow-highlighter-P510405",
      CA: "https://www.sephora.com/ca/en/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-lowlighter-soft-glow-highlighter-P510405"
    }),
    alternatives: {
      FR: "hausLabsBioRadiantHighlighterBalm",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  natashaDenonaMyMiniDreamGlowBlush: productData({
    category: "Highlighter Palette",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Glow Blush",
    type: "Mini blush and highlighter palette",
    sizes: ["mini", "palette"],
    image: skuImage("s2743375"),
    links: countryLinks({
      US: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533",
      CA: "https://www.sephora.com/ca/en/product/natasha-denona-my-mini-dream-glow-blush-P509533",
      FR: "https://www.sephora.fr/p/my-mini-dream-glow-blush---palette-de-blush-et-enlumineurs-P10055817.html",
      UK: "https://www.sephora.co.uk/p/natasha-denona-my-mini-dream-glow-blush-blush-highlighter-palette",
      AU: "https://www.sephora.com.au/products/natasha-denona-my-mini-dream-glow-blush"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  fentyKillawattHighlighter: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Freestyle Highlighter",
    type: "Cream-powder freestyle highlighter",
    sizes: ["standard"],
    image: skuImage("s1925916"),
    links: countryLinks({
      US: "https://www.sephora.com/product/killawatt-freestyle-highlighter-P64879845",
      CA: "https://www.sephora.com/ca/en/product/killawatt-freestyle-highlighter-P64879845",
      FR: "https://www.sephora.fr/p/killawatt-freestyle-highlighter---enlumineur-P3079031.html",
      UK: "https://www.sephora.co.uk/p/fenty-beauty-killawatt-freestyle-highlighter-duo",
      AU: "https://www.sephora.com.au/products/fenty-killawatt-freestyle-highlighter",
      BR: "https://www.sephora.com.br/iluminador-fenty-killawatt-freestyle-highlighter-prd45240-11952.html"
    }),
    alternatives: {}
  }),

  rareBeautyPositiveLightHighlighter: productData({
    category: "Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Silky Touch Highlighter",
    type: "Silky powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2629509"),
    links: countryLinks({
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711",
      FR: "https://www.sephora.fr/p/positive-light-silky-touch-highlighter---enlumineur-P10045917.html",
      UK: "https://www.sephora.co.uk/p/rare-beauty-positive-light-silky-touch-highlighter"
    }),
    alternatives: {
      AU: "fentyKillawattHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  pradaLightGlowingHighlighterPowder: productData({
    category: "Highlighter",
    brand: "Prada",
    name: "Prada Light Glowing Highlighter Powder",
    type: "Lightweight powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2853273"),
    links: countryLinks({
      US: "https://www.sephora.com/product/prada-beauty-prada-light-glowing-highlighter-powder-P516789",
      CA: "https://www.sephora.com/ca/en/product/prada-beauty-prada-light-glowing-highlighter-powder-P516789",
      FR: "https://www.sephora.fr/p/prada-light-glowing-powder---poudre-highlighter-eclatante-P1000207884.html"
    }),
    alternatives: {
      UK: "yslHyperLuminizePowderHighlighter",
      AU: "hourglassAmbientStrobeLightingPowder",
      BR: "fentyKillawattHighlighter"
    }
  }),

  hourglassAmbientStrobeLightingPowder: productData({
    category: "Highlighter",
    brand: "Hourglass",
    name: "Ambient® Strobe Lighting Powder",
    type: "Illuminating strobing powder",
    sizes: ["mini", "standard"],
    image: skuImage("s1779982"),
    links: countryLinks({
      US: "https://www.sephora.com/product/ambient-strobe-lighting-powder-P404706",
      CA: "https://www.sephora.com/ca/en/product/ambient-strobe-lighting-powder-P404706",
      UK: "https://www.sephora.co.uk/p/hourglass-ambient-strobe-lighting-powder",
      AU: "https://www.sephora.com.au/products/hourglass-ambient-strobe-lighting-powder"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      BR: "fentyKillawattHighlighter"
    }
  }),

  saieMiniGlowySuperGel: productData({
    category: "Highlighter",
    brand: "Saie",
    name: "Mini Glowy Super Gel Lightweight Dewy Multipurpose Illuminator",
    type: "Mini liquid gel illuminator",
    sizes: ["mini"],
    image: skuImage("s2834935"),
    links: countryLinks({
      US: "https://www.sephora.com/product/saie-mini-glowy-super-gel-lightweight-dewy-highlighter-P468207",
      CA: "https://www.sephora.com/ca/en/product/saie-mini-glowy-super-gel-lightweight-dewy-highlighter-P468207"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientStrobeLightingPowder",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "fentyKillawattHighlighter"
    }
  }),

  armaniFluidSheerGlowEnhancer: productData({
    category: "Highlighter",
    brand: "Armani Beauty",
    name: "Fluid Sheer Glow Enhancer Highlighter",
    type: "Liquid glow enhancer",
    sizes: ["standard"],
    image: skuImage("s2424851"),
    links: countryLinks({
      US: "https://www.sephora.com/product/giorgio-armani-beauty-fluid-sheer-glow-enhancer-highlighter-P469835",
      CA: "https://www.sephora.com/ca/en/product/giorgio-armani-beauty-fluid-sheer-glow-enhancer-highlighter-P469835",
      FR: "https://www.sephora.fr/p/fluid-sheer---fluide-embellisseur-P10013536.html",
      UK: "https://www.sephora.co.uk/p/armani-fluid-sheer-glow-enhancer",
      AU: "https://www.sephora.com.au/products/armani-beauty-fluid-sheer-liquid-highlighter"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),
  
  diorForeverGlowLuminizerHighlighter: productData({
    category: "Highlighter",
    brand: "DIOR",
    name: "Forever Glow Luminizer Highlighter",
    type: "Powder highlighter with hyaluronic acid",
    sizes: ["standard"],
    image: skuImage("s2836419"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dior-forever-glow-luminizer-highlighter-P515394",
      CA: "https://www.sephora.com/ca/en/product/dior-forever-glow-luminizer-highlighter-P515394",
      UK: "https://www.sephora.co.uk/p/dior-forever-glow-luminizer-6g"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      AU: "hourglassAmbientLightingPowder",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  natashaDenonaGlamFaceEyePalette: productData({
    category: "Highlighter Palette",
    brand: "NATASHA DENONA",
    name: "Glam Face & Eye Palette",
    type: "Face and eye palette with highlighter shades",
    sizes: ["palette"],
    image: skuImage("s2486702"),
    links: countryLinks({
      US: "https://www.sephora.com/product/natasha-denona-glam-face-eye-palette-P478018",
      CA: "https://www.sephora.com/ca/en/product/natasha-denona-glam-face-eye-palette-P478018",
      FR: "https://www.sephora.fr/p/glam-face-palette---palette-maquillage-P10018761.html",
      UK: "https://www.sephora.co.uk/p/natasha-denona-glam-face-palette-makeup-palette",
      AU: "https://www.sephora.com.au/products/natasha-denona-glam-face-palette"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  benefitCookieTicklePowderHighlighter: productData({
    category: "Highlighter",
    brand: "Benefit Cosmetics",
    name: "Cookie and Tickle Shimmer Finish Powder Highlighters",
    type: "Shimmer powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2520476"),
    links: countryLinks({
      US: "https://www.sephora.com/product/cookie-highlighter-P447375",
      CA: "https://www.sephora.com/ca/en/product/cookie-highlighter-P447375",
      FR: "https://www.sephora.fr/p/cookie---highlighter-en-poudre-P10006363.html",
      UK: "https://www.sephora.co.uk/p/benefit-cosmetics-cookie-box-o-highlighter-8g",
      AU: "https://www.sephora.com.au/products/benefit-cosmetics-cookie-golden-pearl-highlighter"
    }),
    alternatives: {
      BR: "fentyKillawattHighlighter"
    }
  }),

  tatchaSerumStickTreatmentBalm: productData({
    category: "Glow Balm",
    brand: "Tatcha",
    name: "The Serum Stick Line-Smoothing Treatment & Touch Up Balm",
    type: "Glow touch-up balm",
    sizes: ["standard"],
    image: skuImage("s2315323"),
    links: countryLinks({
      US: "https://www.sephora.com/product/tatcha-the-serum-stick-treatment-touch-up-balm-P454018",
      CA: "https://www.sephora.com/ca/en/product/tatcha-the-serum-stick-treatment-touch-up-balm-P454018",
      UK: "https://www.sephora.co.uk/p/tatcha-the-serum-stick-P1000212639"
    }),
    alternatives: {
      FR: "meritDayGlowHighlightingBalm",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  charlotteBeautyHighlighterWand: productData({
    category: "Highlighter",
    brand: "Charlotte Tilbury",
    name: "Beauty Highlighter Wand",
    type: "Liquid highlighter wand",
    sizes: ["standard"],
    image: skuImage("s2366524"),
    links: countryLinks({
      US: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154",
      CA: "https://www.sephora.com/ca/en/product/glowgasm-beauty-highlighter-wand-P444154",
      FR: "https://www.sephora.fr/p/glowgasm-beauty-light-wand---highlighter-liquide-P3462076.html"
    }),
    alternatives: {
      UK: "charlotteHollywoodFlawlessFilter",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  patMcGrathSkinFetishHighlighterBalmDuo: productData({
    category: "Highlighter",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish Highlighter & Balm Duo",
    type: "Highlighter and balm duo",
    sizes: ["standard"],
    image: skuImage("s2111409"),
    links: countryLinks({
      US: "https://www.sephora.com/product/skin-fetish-highlighter-balm-duo-P433003",
      CA: "https://www.sephora.com/ca/en/product/skin-fetish-highlighter-balm-duo-P433003",
      FR: "https://www.sephora.fr/p/skin-fetish---duo-illuminateur-P3865104.html",
      UK: "https://www.sephora.co.uk/p/pat-mcgrath-labs-skin-fetish-highlighter-balm-duo",
      AU: "https://www.sephora.com.au/products/pat-mcgrath-skin-fetish-highlighter-and-balm-duo"
    }),
    alternatives: {
      BR: "fentyDiamondBombAllOverDiamondVeil"
    }
  }),

  charlotteHollywoodFlawlessFilter: productData({
    category: "Complexion Glow",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    type: "Liquid glow booster / highlighter",
    sizes: ["mini", "standard"],
    image: skuImage("s2116044"),
    links: countryLinks({
      US: "https://www.sephora.com/product/hollywood-flawless-filter-P434104",
      CA: "https://www.sephora.com/ca/en/product/hollywood-flawless-filter-P434104",
      FR: "https://www.sephora.fr/p/hollywood-filter---highlighter-liquide-P3462081.html",
      UK: "https://www.sephora.co.uk/p/charlotte-tilbury-hollywood-flawless-filter-liquid-highlighter-30ml"
    }),
    alternatives: {
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  yslToucheEclatAwakeningConcealerClickPen: productData({
    category: "Highlighting Pen",
    brand: "Yves Saint Laurent",
    name: "Touche Éclat Awakening Concealer Click Pen",
    type: "Brightening concealer and highlighting pen",
    sizes: ["standard"],
    image: skuImage("s2859098"),
    links: countryLinks({
      US: "https://www.sephora.com/product/touche-eclat-radiance-perfecting-pen-P218431",
      CA: "https://www.sephora.com/ca/en/product/touche-eclat-radiance-perfecting-pen-P218431",
      FR: "https://www.sephora.fr/p/touche-eclat-le-stylo---stylo-illuminateur-de-teint-P29905.html",
      AU: "https://www.sephora.com.au/products/yves-saint-laurent-touche-eclat-radiance-perfecting-pen"
    }),
    alternatives: {
      UK: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  hudaBlushFilterBlushlightersPalette: productData({
    category: "Highlighter Palette",
    brand: "HUDA BEAUTY",
    name: "Blush Filter Blurring Blushlighters Palette",
    type: "Blush and highlighter palette",
    sizes: ["palette"],
    image: skuImage("s2954642"),
    links: countryLinks({
      US: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601",
      CA: "https://www.sephora.com/ca/en/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601",
      FR: "https://www.sephora.fr/p/blush-filter-blurring-blushlighters-palette---palette-blush-et-highlighter-P1000211103.html",
      UK: "https://www.sephora.co.uk/p/huda-beauty-blush-filter-blurring-blushlighters-palette-7-5g",
      AU: "https://www.sephora.com.au/products/huda-beauty-blush-filter-blurring-blushlighters-palette"
    }),
    alternatives: {
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  liveTintedHueglowLiquidHighlighterDrops: productData({
    category: "Highlighter",
    brand: "Live Tinted",
    name: "Hueglow Liquid Highlighter Drops",
    type: "Liquid highlighter drops",
    sizes: ["mini", "standard"],
    image: skuImage("s2704344"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/hueglow-liquid-highlighter-drops-P506933"
    }),
    alternatives: {
      US: "saieGlowySuperGel",
      FR: "meritDayGlowHighlightingBalm",
      UK: "meritDayGlowHighlightingBalm",
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  hourglassUnrealRadiantGlowLiquidHighlighter: productData({
    category: "Highlighter",
    brand: "Hourglass",
    name: "Unreal Radiant Glow Liquid Highlighter",
    type: "Radiant liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2957108"),
    links: countryLinks({
      US: "https://www.sephora.com/product/unreal-radiant-glow-liquid-highlighter-P521357",
      CA: "https://www.sephora.com/ca/en/product/unreal-radiant-glow-liquid-highlighter-P521357",
      FR: "https://www.sephora.fr/p/unreal-liquid-highlighter---highlighter-liquide-P1000213630.html",
      UK: "https://www.sephora.co.uk/p/hourglass-unreal-liquid-highlighter",
      AU: "https://www.sephora.com.au/products/hourglass-unreal-liquid-highlighter"
    }),
    alternatives: {
      BR: "fentyDiamondBombAllOverDiamondVeil"
    }
  }),

  meritDayGlowHighlightingBalm: productData({
    category: "Highlighter",
    brand: "MERIT",
    name: "Day Glow Dewy Highlighting Balm",
    type: "Dewy highlighting balm",
    sizes: ["standard"],
    image: skuImage("s2426765"),
    links: countryLinks({
      US: "https://www.sephora.com/product/merit-day-glow-highlighting-balm-P468696",
      CA: "https://www.sephora.com/ca/en/product/merit-day-glow-highlighting-balm-P468696",
      FR: "https://www.sephora.fr/p/day-glow-highlighting-balm-P1000213279.html",
      UK: "https://www.sephora.co.uk/p/merit-beauty-day-glow-highlighting-balm-2-28g"
    }),
    alternatives: {
      AU: "westmanAtelierLitUpHighlightStick",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  hourglassAmbientLightingPalette: productData({
    category: "Highlighter Palette",
    brand: "Hourglass",
    name: "Ambient Lighting Palette",
    type: "Finishing / glow palette",
    sizes: ["standard"],
    image: skuImage("s1606086"),
    links: countryLinks({
      US: "https://www.sephora.com/product/ambient-lighting-palette-P382309",
      CA: "https://www.sephora.com/ca/en/product/ambient-lighting-palette-P382309",
      UK: "https://www.sephora.co.uk/p/hourglass-ambient-lighting-palette"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      AU: "fentyKillawattHighlighter",
      BR: "charlotteBeautyHighlighterWand"
    }
  }),

  rareBeautyPositiveLightLiquidLuminizer: productData({
    category: "Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Liquid Luminizer Highlight",
    type: "Liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2362168"),
    links: countryLinks({
      US: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-liquid-luminizer-highlight-P38855877",
      CA: "https://www.sephora.com/ca/en/product/rare-beauty-by-selena-gomez-positive-light-liquid-luminizer-highlight-P38855877",
      UK: "https://www.sephora.co.uk/p/rare-beauty-rare-beauty-positive-light-liquid-luminizer-highlighter-15ml"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      AU: "saieGlowySuperGel",
      BR: "charlotteBeautyHighlighterWand"
    }
  }),

  fentyDiamondBombAllOverDiamondVeil: productData({
    category: "Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Diamond Bomb All-Over Diamond Veil",
    type: "Glitter gel-powder highlighter",
    sizes: ["mini", "standard"],
    image: skuImage("s2113033"),
    links: countryLinks({
      US: "https://www.sephora.com/product/diamond-bomb-all-over-diamond-veil-P85225585",
      CA: "https://www.sephora.com/ca/en/product/diamond-bomb-all-over-diamond-veil-P85225585",
      UK: "https://www.sephora.co.uk/p/fenty-beauty-diamond-bomb"
    }),
    alternatives: {
      FR: "fentyKillawattHighlighter",
      AU: "rareBeautyPositiveLightHighlighter",
      BR: "hausLabsBioRadiantHighlighterBalm"
    }
  }),

  yslHyperLuminizePowderHighlighter: productData({
    category: "Highlighter",
    brand: "Yves Saint Laurent",
    name: "Hyper Luminize Powder Highlighter",
    type: "Powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2880854"),
    links: countryLinks({
      US: "https://www.sephora.com/product/yves-saint-laurent-ysl-hyper-luminize-powder-highlighter-P517012",
      CA: "https://www.sephora.com/ca/en/product/yves-saint-laurent-ysl-hyper-luminize-powder-highlighter-P517012",
      UK: "https://www.sephora.co.uk/p/yves-saint-laurent-all-hours-hyper-luminize"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      AU: "hourglassAmbientLightingPalette",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  diorForeverGlowMaximizer: productData({
    category: "Highlighter",
    brand: "DIOR",
    name: "Forever Glow Maximizer Longwear Liquid Highlighter",
    type: "Liquid highlighter",
    sizes: ["standard"],
    image: skuImage("s2750826"),
    links: countryLinks({
      US: "https://www.sephora.com/product/dior-forever-glow-maximizer-longwear-liquid-highlighter-P510547",
      CA: "https://www.sephora.com/ca/en/product/dior-forever-glow-maximizer-longwear-liquid-highlighter-P510547",
      UK: "https://www.sephora.co.uk/p/dior-forever-glow-maximizer-11ml"
    }),
    alternatives: {
      FR: "yslHyperLuminizePowderHighlighter",
      AU: "hourglassAmbientLightingPowder",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  hourglassAmbientLightingPowder: productData({
    category: "Highlighter",
    brand: "Hourglass",
    name: "Ambient Lighting Powder",
    type: "Finishing glow powder",
    sizes: ["mini", "standard"],
    image: skuImage("s1483510"),
    links: countryLinks({
      US: "https://www.sephora.com/product/ambient-lighting-powder-P377723",
      CA: "https://www.sephora.com/ca/en/product/ambient-lighting-powder-P377723",
      UK: "https://www.sephora.co.uk/p/hourglass-ambient-lighting-powder"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      AU: "charlotteBeautyHighlighterWand",
      BR: "fentyKillawattHighlighter"
    }
  }),

  saieGlowySuperGel: productData({
    category: "Highlighter",
    brand: "Saie",
    name: "Glowy Super Gel Lightweight Dewy Multipurpose Illuminator",
    type: "Liquid gel illuminator",
    sizes: ["standard"],
    image: skuImage("s2763894"),
    links: countryLinks({
      US: "https://www.sephora.com/product/saie-glowy-super-gel-lightweight-dewy-highlighter-P468206",
      CA: "https://www.sephora.com/ca/en/product/saie-glowy-super-gel-lightweight-dewy-highlighter-P468206"
    }),
    alternatives: {
      FR: "rareBeautyPositiveLightHighlighter",
      UK: "hourglassAmbientLightingPowder",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "hausLabsBioRadiantHighlighterBalm"
    }
  }),

  westmanAtelierLitUpHighlightStick: productData({
    category: "Highlighter",
    brand: "Westman Atelier",
    name: "Lit Up Highlight Stick",
    type: "Glassy gel highlighter stick",
    sizes: ["mini", "standard"],
    image: skuImage("s2434181"),
    links: countryLinks({
      US: "https://www.sephora.com/product/westman-atelier-lit-up-highlight-stick-P468430",
      CA: "https://www.sephora.com/ca/en/product/westman-atelier-lit-up-highlight-stick-P468430"
    }),
    alternatives: {
      FR: "charlotteBeautyHighlighterWand",
      UK: "hourglassAmbientLightingPowder",
      AU: "saieGlowySuperGel",
      BR: "rareBeautyPositiveLightHighlighter"
    }
  }),

  diorForeverGlowStarFilter: productData({
    category: "Highlighter",
    brand: "DIOR",
    name: "Forever Glow Star Filter Multi-Use Complexion Enhancing Booster",
    type: "Complexion glow booster",
    sizes: ["standard"],
    image: skuImage("s2751014"),
    links: countryLinks({
      US: "https://www.sephora.com/product/forever-glow-star-filter-multi-use-complexion-enhancing-booster-P509901",
      CA: "https://www.sephora.com/ca/en/product/forever-glow-star-filter-multi-use-complexion-enhancing-booster-P509901",
      UK: "https://www.sephora.co.uk/p/dior-forever-glow-star-filter-30ml"
    }),
    alternatives: {
      FR: "saieGlowySuperGel",
      AU: "charlotteHollywoodFlawlessFilter",
      BR: "rareBeautyPositiveLightLiquidLuminizer"
    }
  }),

  sephoraColorfulPowderLuminizer: productData({
    category: "Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Powder Luminizer",
    type: "Powder highlighter",
    sizes: ["standard"],
    image: skuImage("s2711729"),
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/sephora-colorful-powder-luminizer-P509722"
    }),
    alternatives: {
      US: "rareBeautyPositiveLightHighlighter",
      FR: "charlotteBeautyHighlighterWand",
      UK: "hourglassAmbientLightingPowder",
      AU: "fentyKillawattHighlighter",
      BR: "hausLabsBioRadiantHighlighterBalm"
    }
  }),

  // -------------------------
  // BRONZER / CONTOUR
  // -------------------------
  westmanAtelierMiniFaceTraceContourStick: productData({
  category: "Contour Stick",
  brand: "Westman Atelier",
  name: "Mini Petite Face Trace Cream Contour Stick",
  type: "Mini cream contour stick with a natural sculpted finish",
  sizes: ["mini"],
  image: skuImage("s2640811"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/westman-atelier-petite-face-trace-contour-stick-P504318"
  }),
  alternatives: {
    US: "makeupByMarioMiniSoftSculptShapingStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

westmanAtelierFaceTraceContourStick: productData({
  category: "Contour Stick",
  brand: "Westman Atelier",
  name: "Face Trace Cream Contour Stick",
  type: "Cream contour stick for soft sculpting and definition",
  sizes: ["standard"],
  image: skuImage("s2434108"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/westman-atelier-face-trace-contour-stick-P468433"
  }),
  alternatives: {
    US: "makeupByMarioSoftSculptContourBronzerStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "rareBeautySoftPinchLiquidContour"
  }
}),

diorForeverSkinCreamContourStick: productData({
  category: "Contour Stick",
  brand: "DIOR",
  name: "Forever Skin Cream Contour Sculpting Face Stick",
  type: "Luxury cream contour and bronzing face stick",
  sizes: ["standard"],
  image: skuImage("s2789063"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/dior-forever-24h-wear-seamless-contour-stick-P512863"
  }),
  alternatives: {
    US: "makeupByMarioSoftSculptContourBronzerStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

makeupByMarioSoftSculptContourBronzerStick: productData({
  category: "Contour Stick",
  brand: "MAKEUP BY MARIO",
  name: "SoftSculpt® Cream Contour & Bronzer Shaping Stick",
  type: "Dual-ended cream contour and bronzer shaping stick",
  sizes: ["standard"],
  image: skuImage("s2867505"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/softsculpt-cream-contour-bronzer-stick-P516546"
  }),
  alternatives: {
    US: "westmanAtelierFaceTraceContourStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "rareBeautySoftPinchLiquidContour"
  }
}),

makeupByMarioMiniSoftSculptShapingStick: productData({
  category: "Contour Stick",
  brand: "MAKEUP BY MARIO",
  name: "Mini SoftSculpt® Shaping Stick",
  type: "Mini cream contour stick for soft definition",
  sizes: ["mini"],
  image: skuImage("s2867430"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-softsculpt-shaping-stick-P516118?skuId=2867430"
  }),
  alternatives: {
    US: "westmanAtelierMiniFaceTraceContourStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

rareBeautySoftPinchLiquidContour: productData({
  category: "Liquid Contour",
  brand: "Rare Beauty by Selena Gomez",
  name: "Soft Pinch Liquid Contour",
  type: "Weightless liquid contour for natural lifted definition",
  sizes: ["standard"],
  image: skuImage("s2828705"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/soft-pinch-liquid-contour-P514741"
  }),
  alternatives: {
    US: "saieDewBronzeLiquidBronzer",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "fentyBeautyMatchStixMatteContourSkinstick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

sephoraCollectionCreamContourStick: productData({
  category: "Contour Stick",
  brand: "SEPHORA COLLECTION",
  name: "Cream Contour Stick",
  type: "Affordable cream contour stick for face sculpting",
  sizes: ["standard"],
  image: skuImage("s2731289"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/contour-stick-P511273"
  }),
  alternatives: {
    US: "makeupByMarioSoftSculptContourBronzerStick",
    FR: "rareBeautySoftPinchLiquidContour",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

fentyBeautyMatchStixMatteContourSkinstick: productData({
  category: "Contour Stick",
  brand: "Fenty Beauty by Rihanna",
  name: "Match Stix Matte Contour Skinstick",
  type: "Matte contour stick for sculpting and defining",
  sizes: ["standard"],
  image: skuImage("s1925577"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/match-stix-matte-skinstick-P18975403"
  }),
  alternatives: {
    US: "makeupByMarioSoftSculptContourBronzerStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "rareBeautySoftPinchLiquidContour",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

milkMakeupSculptCreamContourStick: productData({
  category: "Contour Stick",
  brand: "MILK MAKEUP",
  name: "Sculpt Cream Contour Stick",
  type: "Cream contour stick with a matte sculpted finish",
  sizes: ["standard"],
  image: skuImage("s2872406"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/milk-makeup-sculpt-cream-contour-stick-P503903"
  }),
  alternatives: {
    US: "fentyBeautyMatchStixMatteContourSkinstick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "rareBeautySoftPinchLiquidContour",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

lysBeautyNoLimitsCreamBronzerContourStick: productData({
  category: "Bronzer Stick",
  brand: "LYS Beauty",
  name: "No Limits Cream Bronzer and Contour Stick",
  type: "Cream bronzer and contour stick for sculpting warmth",
  sizes: ["standard"],
  image: skuImage("s2735967"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/no-limits-cream-bronzer-stick-P500123"
  }),
  alternatives: {
    US: "fentyBeautyMatchStixMatteContourSkinstick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "rareBeautySoftPinchLiquidContour"
  }
}),

saieDewBronzeLiquidBronzer: productData({
  category: "Liquid Bronzer",
  brand: "Saie",
  name: "Dew Bronze Soft-Focus Sculpting Liquid Bronzer",
  type: "Soft-focus liquid bronzer for natural sculpting",
  sizes: ["standard"],
  image: skuImage("s2753788"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/saie-dew-bronze-soft-focus-effortless-liquid-bronzer-P510823"
  }),
  alternatives: {
    US: "rareBeautySoftPinchLiquidContour",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "fentyBeautyMatchStixMatteContourSkinstick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

morpheSuddenHeatCreamyBronzerStick: productData({
  category: "Bronzer Stick",
  brand: "Morphe",
  name: "Sudden Heat Creamy Bronzer Stick",
  type: "Creamy bronzer stick with a soft matte finish",
  sizes: ["standard"],
  image: skuImage("s2877223"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sudden-heat-creamy-bronzer-stick-P517701"
  }),
  alternatives: {
    US: "lysBeautyNoLimitsCreamBronzerContourStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "rareBeautySoftPinchLiquidContour"
  }
}),

tooFacedChocolateSoleilBronzingStick: productData({
  category: "Bronzer Stick",
  brand: "Too Faced",
  name: "Chocolate Soleil Melting Bronzing & Sculpting Stick",
  type: "Melting cream bronzing and sculpting stick",
  sizes: ["standard"],
  image: skuImage("s2772101"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/too-faced-chocolate-soleil-bronzing-stick-P510403"
  }),
  alternatives: {
    US: "lysBeautyNoLimitsCreamBronzerContourStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "fentyBeautyMatchStixMatteContourSkinstick",
    BR: "milkMakeupSculptCreamContourStick"
  }
}),

meritBronzeBalmSheerBronzer: productData({
  category: "Bronzer Stick",
  brand: "MERIT",
  name: "Bronze Balm Sheer Sculpting Bronzer",
  type: "Sheer cream bronzer stick for natural warmth",
  sizes: ["standard"],
  image: skuImage("s2744068"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/bronze-balm-sheer-sculpting-bronzer-P501766"
  }),
  alternatives: {
    US: "saieDewBronzeLiquidBronzer",
    FR: "sephoraCollectionCreamContourStick",
    UK: "rareBeautySoftPinchLiquidContour",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

charlotteTilburyHollywoodContourWand: productData({
  category: "Liquid Contour",
  brand: "Charlotte Tilbury",
  name: "Hollywood Contour Wand",
  type: "Liquid cream contour wand for sculpted cheekbones",
  sizes: ["standard"],
  image: skuImage("s2841278"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hollywood-contour-wand-P434002"
  }),
  alternatives: {
    US: "rareBeautySoftPinchLiquidContour",
    FR: "sephoraCollectionCreamContourStick",
    UK: "makeupByMarioSoftSculptContourBronzerStick",
    AU: "fentyBeautyMatchStixMatteContourSkinstick",
    BR: "lysBeautyNoLimitsCreamBronzerContourStick"
  }
}),

anastasiaSmoothBlurCreamContourStick: productData({
  category: "Contour Stick",
  brand: "Anastasia Beverly Hills",
  name: "Smooth Blur Cream Contour Stick",
  type: "Cream contour stick with a smooth blurred finish",
  sizes: ["standard"],
  image: skuImage("s2934743"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-smooth-blur-cream-contour-stick-P516074"
  }),
  alternatives: {
    US: "makeupByMarioSoftSculptContourBronzerStick",
    FR: "sephoraCollectionCreamContourStick",
    UK: "fentyBeautyMatchStixMatteContourSkinstick",
    AU: "milkMakeupSculptCreamContourStick",
    BR: "rareBeautySoftPinchLiquidContour"
  }
}),
  charlotteTilburyAirbrushMatteBronzer: productData({
  category: "Powder Bronzer",
  brand: "Charlotte Tilbury",
  name: "Refillable Airbrush Matte Bronzer",
  type: "Matte powder bronzer in a refillable compact",
  sizes: ["standard", "refill"],
  image: skuImage("s2351187"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-airbrush-flawless-bronzer-P459144"
  }),
  alternatives: {
    US: "hausLabsPowerSculptVelvetBronzer",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "makeupForEverArtistContourPowder",
    AU: "patrickTaMajorSculptDuo",
    BR: "westmanAtelierBabyCheeksFaceTraceDuo"
  }
}),

hausLabsPowerSculptVelvetBronzer: productData({
  category: "Powder Bronzer",
  brand: "HAUS LABS BY LADY GAGA",
  name: "Power Sculpt Velvet Talc-Free Powder Bronzer",
  type: "Talc-free powder bronzer with a blurred velvet finish",
  sizes: ["standard"],
  image: skuImage("s2796555"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/power-sculpt-velvet-bronzer-powder-with-fermented-arnica-P500301"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushMatteBronzer",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "makeupForEverArtistContourPowder",
    AU: "patrickTaMajorSculptDuo",
    BR: "westmanAtelierBabyCheeksFaceTraceDuo"
  }
}),

sephoraCollectionColorfulContourMattePowder: productData({
  category: "Contour Powder",
  brand: "SEPHORA COLLECTION",
  name: "Sephora Colorful® Contour Matte Powder",
  type: "Single matte contour powder",
  sizes: ["standard"],
  image: skuImage("s2711281"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sephora-colorful-contour-matte-powder-P509721"
  }),
  alternatives: {
    US: "makeupForEverArtistContourPowder",
    FR: "hausLabsPowerSculptVelvetBronzer",
    UK: "charlotteTilburyAirbrushMatteBronzer",
    AU: "patrickTaMajorSculptDuo",
    BR: "westmanAtelierBabyCheeksFaceTraceDuo"
  }
}),

makeupForEverArtistContourPowder: productData({
  category: "Contour Powder",
  brand: "MAKE UP FOR EVER",
  name: "Artist Longwear Skin-Fusing Contour Powder",
  type: "Longwear powder contour with a skin-fusing matte finish",
  sizes: ["standard"],
  image: skuImage("s2703031"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/artist-longwear-skin-fusing-contour-powder-p507362-P507362"
  }),
  alternatives: {
    US: "sephoraCollectionColorfulContourMattePowder",
    FR: "hausLabsPowerSculptVelvetBronzer",
    UK: "charlotteTilburyAirbrushMatteBronzer",
    AU: "patrickTaMajorSculptDuo",
    BR: "westmanAtelierBabyCheeksFaceTraceDuo"
  }
}),

patrickTaMajorSculptDuo: productData({
  category: "Contour & Bronzer Duo",
  brand: "PATRICK TA",
  name: "Major Sculpt Crème Contour & Powder Bronzer Duo",
  type: "Cream contour and powder bronzer sculpting duo",
  sizes: ["duo"],
  image: skuImage("s2653921"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/patrick-ta-major-sculpt-creme-contour-powder-bronzer-duo-P471059"
  }),
  alternatives: {
    US: "westmanAtelierBabyCheeksFaceTraceDuo",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "charlotteTilburyAirbrushMatteBronzer",
    AU: "hausLabsPowerSculptVelvetBronzer",
    BR: "makeupForEverArtistContourPowder"
  }
}),

westmanAtelierBabyCheeksFaceTraceDuo: productData({
  category: "Contour & Blush Duo",
  brand: "Westman Atelier",
  name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
  type: "Powder blush and contour sculpting duo",
  sizes: ["duo"],
  image: skuImage("s2869105"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091"
  }),
  alternatives: {
    US: "patrickTaMajorSculptDuo",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "charlotteTilburyAirbrushMatteBronzer",
    AU: "hausLabsPowerSculptVelvetBronzer",
    BR: "makeupForEverArtistContourPowder"
  }
}),

macStudioFixSculptShapeContourPalette: productData({
  category: "Contour Palette",
  brand: "MAC Cosmetics",
  name: "Studio Fix Sculpt and Shape Sheer Contour and Highlight Palette",
  type: "Six-shade sheer contour and highlight face palette",
  sizes: ["palette"],
  image: skuImage("s2044030"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/studio-fix-sculpt-shape-contour-palette-P14798414"
  }),
  alternatives: {
    US: "smashboxCaliContourFacePalette",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "patrickTaMajorSculptDuo",
    AU: "makeupForEverArtistContourPowder",
    BR: "hausLabsPowerSculptVelvetBronzer"
  }
}),

smashboxCaliContourFacePalette: productData({
  category: "Contour Palette",
  brand: "Smashbox",
  name: "Cali Contour Face Palette",
  type: "Six-well contour, bronzer, blush and highlighter face palette",
  sizes: ["palette"],
  image: skuImage("s2026565"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/cali-contour-palette-P429909"
  }),
  alternatives: {
    US: "macStudioFixSculptShapeContourPalette",
    FR: "sephoraCollectionColorfulContourMattePowder",
    UK: "patrickTaMajorSculptDuo",
    AU: "charlotteTilburyAirbrushMatteBronzer",
    BR: "hausLabsPowerSculptVelvetBronzer"
  }
}),
  // -------------------------
  // BB CREMES
  // -------------------------
  summerFridaysSheerSkinTint: productData({
  category: "Skin Tint",
  brand: "Summer Fridays",
  name: "Sheer Skin Tint with Hyaluronic Acid + Squalane",
  type: "Lightweight sheer skin tint with natural finish",
  sizes: ["standard"],
  image: skuImage("s2536183"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777"
  }),
  alternatives: {
    US: "itCosmeticsCcNudeGlowSkinTint",
    FR: "itCosmeticsCcCreamFullCoverageSpf50",
    UK: "drJartPremiumBbTintedMoisturizer",
    AU: "tarteBbBlurTintedMoisturizer",
    BR: "anastasiaBeautyBalmSkinTint"
  }
}),

itCosmeticsCcAirbrushPerfectingPowderFoundation: productData({
  category: "Powder Foundation",
  brand: "IT Cosmetics",
  name: "CC+ Airbrush Perfecting Powder Foundation",
  type: "Color-correcting pressed powder foundation with buildable coverage",
  sizes: ["standard"],
  image: skuImage("s2227601"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/your-skin-but-better-cc-airbrush-perfecting-powder-spf-50-P411889?skuId=2227601"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamNaturalMatteSpf40",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "itCosmeticsCcCreamFullCoverageSpf50",
    AU: "tarteBbBlurTintedMoisturizer",
    BR: "anastasiaBeautyBalmSkinTint"
  }
}),

itCosmeticsCcCreamFullCoverageSpf50: productData({
  category: "CC Cream",
  brand: "IT Cosmetics",
  name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
  type: "Full-coverage color-correcting CC cream with SPF 50+",
  sizes: ["mini", "standard"],
  image: skuImage("s2599793"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/your-skin-but-better-cc-cream-spf-50-P411885"
  }),
  alternatives: {
    US: "itCosmeticsCcNudeGlowSkinTint",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "drJartPremiumBbTintedMoisturizer",
    AU: "itCosmeticsCcCreamNaturalMatteSpf40",
    BR: "summerFridaysSheerSkinTint"
  }
}),

itCosmeticsCcNudeGlowSkinTint: productData({
  category: "CC Skin Tint",
  brand: "IT Cosmetics",
  name: "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
  type: "Medium-coverage glowy skin tint with SPF 40 and niacinamide",
  sizes: ["standard"],
  image: skuImage("s2515716"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "itCosmeticsCcCreamFullCoverageSpf50",
    UK: "drJartPremiumBbTintedMoisturizer",
    AU: "anastasiaBeautyBalmSkinTint",
    BR: "tarteBbBlurTintedMoisturizer"
  }
}),

tarteBbBlurTintedMoisturizer: productData({
  category: "BB Cream",
  brand: "tarte",
  name: "BB Blur Natural Matte Tinted Moisturizer",
  type: "Vegan matte BB tinted moisturizer with blurred finish",
  sizes: ["standard"],
  image: skuImage("s2757094"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/bb-tinted-treatment-12-hour-primer-P382096"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "itCosmeticsCcCreamNaturalMatteSpf40",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "anastasiaBeautyBalmSkinTint"
  }
}),

drJartPremiumBbTintedMoisturizer: productData({
  category: "BB Cream",
  brand: "Dr. Jart+",
  name: "Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
  type: "Natural-finish BB tinted moisturizer with skincare benefits and SPF 40",
  sizes: ["standard"],
  image: skuImage("s2676260"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/dr-jart-premium-bb-tinted-moisturizer-with-niacinamide-spf-40-P505373"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamFullCoverageSpf50",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "summerFridaysSheerSkinTint",
    AU: "itCosmeticsCcNudeGlowSkinTint",
    BR: "tarteBbBlurTintedMoisturizer"
  }
}),

itCosmeticsCcCreamNaturalMatteSpf40: productData({
  category: "CC Cream",
  brand: "IT Cosmetics",
  name: "CC+ Cream Natural Matte Foundation with SPF 40",
  type: "Full-coverage natural matte CC cream for oily skin with SPF 40",
  sizes: ["standard"],
  image: skuImage("s2773695"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447"
  }),
  alternatives: {
    US: "tarteBbBlurTintedMoisturizer",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "itCosmeticsCcCreamFullCoverageSpf50",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "summerFridaysSheerSkinTint"
  }
}),

cliniqueMoistureSurgeCcCreamSpf30: productData({
  category: "CC Cream",
  brand: "CLINIQUE",
  name: "Moisture Surge™ CC Cream Hydrating Color Corrector Broad Spectrum SPF 30",
  type: "Hydrating color-correcting CC cream with SPF 30",
  sizes: ["standard"],
  image: skuImage("s1509512"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/moisture-surge-cc-cream-hydrating-colour-corrector-broad-spectrum-spf-30-P378639"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamFullCoverageSpf50",
    FR: "itCosmeticsCcNudeGlowSkinTint",
    UK: "drJartPremiumBbTintedMoisturizer",
    AU: "summerFridaysSheerSkinTint",
    BR: "tarteBbBlurTintedMoisturizer"
  }
}),

itCosmeticsCcCreamIlluminationSpf50: productData({
  category: "CC Cream",
  brand: "IT Cosmetics",
  name: "CC+ Cream Illumination with SPF 50+",
  type: "Radiant full-coverage color-correcting CC cream with SPF 50+",
  sizes: ["mini", "standard"],
  image: skuImage("s1869015"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/your-skin-but-better-cc-illumination-cream-spf-50-P411884"
  }),
  alternatives: {
    US: "itCosmeticsCcNudeGlowSkinTint",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "summerFridaysSheerSkinTint",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "anastasiaBeautyBalmSkinTint"
  }
}),

tarteColoredClayCcUndereyeCorrector: productData({
  category: "Color Corrector",
  brand: "tarte",
  name: "Colored Clay CC Undereye Corrector",
  type: "Cream color corrector for under-eye darkness",
  sizes: ["standard"],
  image: skuImage("s1626951"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/colored-clay-cc-undereye-corrector-P387175"
  }),
  alternatives: {
    US: "itCosmeticsCcCreamFullCoverageSpf50",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "itCosmeticsCcNudeGlowSkinTint",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "anastasiaBeautyBalmSkinTint"
  }
}),

liseWatierMultiPerfectingCcCream: productData({
  category: "CC Cream",
  brand: "Lise Watier",
  name: "Multi-Perfecting CC Cream Moisturizer",
  type: "Hydrating multi-perfecting CC cream moisturizer",
  sizes: ["standard"],
  image: skuImage("s2232569"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/multi-perfecting-cc-cream-moisturizer-P444958?skuId=2232569"
  }),
  alternatives: {
    US: "cliniqueMoistureSurgeCcCreamSpf30",
    FR: "itCosmeticsCcCreamFullCoverageSpf50",
    UK: "summerFridaysSheerSkinTint",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "tarteBbBlurTintedMoisturizer"
  }
}),

anastasiaBeautyBalmSkinTint: productData({
  category: "Skin Tint Balm",
  brand: "Anastasia Beverly Hills",
  name: "Beauty Balm Serum Boosted Skin Tint",
  type: "Solid serum-boosted skin tint with sheer-to-light coverage",
  sizes: ["stick"],
  image: skuImage("s2752848"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-beauty-balm-skin-serum-boosted-skin-tint-P511190"
  }),
  alternatives: {
    US: "summerFridaysSheerSkinTint",
    FR: "cliniqueMoistureSurgeCcCreamSpf30",
    UK: "itCosmeticsCcNudeGlowSkinTint",
    AU: "drJartPremiumBbTintedMoisturizer",
    BR: "tarteBbBlurTintedMoisturizer"
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
  // POUDRE FIXATEUR 
  // -------------------------
  makeUpForEverMiniHdSkinPressedPowder: productData({
  category: "Pressed Setting Powder",
  brand: "MAKE UP FOR EVER",
  name: "Mini HD Skin Blurring & Perfecting Pressed Powder",
  type: "Mini pressed blurring and perfecting powder",
  sizes: ["mini"],
  image: skuImage("s2869493"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-hd-skin-blurring-perfecting-pressed-powder-P517874?skuId=2869493"
  }),
  alternatives: {
    US: "narsMiniLightReflectingSettingPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

kosasMiniCloudSetLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Kosas",
  name: "Mini Cloud Set Loose Translucent Talc-Free Setting + Blurring Powder",
  type: "Mini translucent loose blurring setting powder",
  sizes: ["mini"],
  image: skuImage("s2936003"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-cloud-set-loose-translucent-talc-free-setting-blurring-powder-P520515?skuId=2936003"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hourglassVeilTranslucentSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

givenchyMiniPrismeLibreLoosePowder: productData({
  category: "Loose Setting Powder",
  brand: "Givenchy",
  name: "Mini Prisme Libre Illuminating & Color Correcting Loose Powder",
  type: "Mini illuminating color-correcting loose setting powder",
  sizes: ["mini"],
  image: skuImage("s2788545"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/prisme-libre-travel-mat-finish-enhanced-radiance-loose-powder-P416205?skuId=2788545"
  }),
  alternatives: {
    US: "hourglassVeilTranslucentSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "kosasMiniCloudSetLooseSettingPowder"
  }
}),

fentyBeautyMiniProFiltrSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Fenty Beauty by Rihanna",
  name: "Mini Pro Filt’r Instant Retouch Setting Powder",
  type: "Mini soft-matte loose setting powder",
  sizes: ["mini"],
  image: skuImage("s2211126"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pro-filt-r-mini-instant-retouch-setting-powder-P443790?skuId=2211126"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

narsMiniLightReflectingSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "NARS",
  name: "Mini Light Reflecting Setting Powder",
  type: "Mini pressed light-reflecting setting powder",
  sizes: ["mini"],
  image: skuImage("s2550499"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/nars-mini-light-reflecting-setting-powder-P480462?skuId=2550499"
  }),
  alternatives: {
    US: "makeUpForEverMiniHdSkinPressedPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hudaBeautyEasyBakeAndSnatchPressedPowder"
  }
}),

tarteCreaselessTwelveHourPowder: productData({
  category: "Setting Powder",
  brand: "tarte",
  name: "Creaseless 12 Hour Powder",
  type: "Brush-on creaseless setting powder",
  sizes: ["standard"],
  image: skuImage("s2984193"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-creaseless-12-hour-powder-P524687?skuId=2984193"
  }),
  alternatives: {
    US: "narsMiniLightReflectingSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

fentyBeautyMiniInvisimatteSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Fenty Beauty by Rihanna",
  name: "Mini Invisimatte Instant Setting + Blotting Powder",
  type: "Mini matte pressed setting and blotting powder",
  sizes: ["mini"],
  image: skuImage("s2898484"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-mini-invisimatte-instant-setting-blotting-powder-P518273?skuId=2898484"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "makeUpForEverMiniHdSkinPressedPowder"
  }
}),

tarteCreaselessLooseSettingBrighteningPowder: productData({
  category: "Loose Setting Powder",
  brand: "tarte",
  name: "Creaseless Loose Setting & Brightening Powder",
  type: "Loose brightening setting powder",
  sizes: ["standard"],
  image: skuImage("s2833192"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-creaseless-loose-setting-powder-P512246?skuId=2833192"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasMiniCloudSetLooseSettingPowder",
    BR: "fentyBeautyMiniProFiltrSettingPowder"
  }
}),

tarteSmoothOperatorTintedPressedSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "tarte",
  name: "Smooth Operator™ Amazonian Clay Tinted Pressed Setting Powder",
  type: "Tinted pressed finishing and setting powder",
  sizes: ["standard"],
  image: skuImage("s1659515"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/powderful-amazonian-clay-pressed-mineral-powder-P152703?skuId=1659515"
  }),
  alternatives: {
    US: "rareBeautyTrueToMyselfPressedFinishingPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "makeUpForEverMiniHdSkinPressedPowder"
  }
}),

benefitMiniPorefessionalPowerPowder: productData({
  category: "Loose Setting Powder",
  brand: "Benefit Cosmetics",
  name: "Mini POREfessional Matte Blurring Loose Setting Powder",
  type: "Mini matte pore-blurring loose setting powder",
  sizes: ["mini"],
  image: skuImage("s2792950"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-mini-porefessional-power-powder-P512868?skuId=2792950"
  }),
  alternatives: {
    US: "milkMakeupPoreEclipseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "fentyBeautyMiniInvisimatteSettingPowder"
  }
}),

tarteAmazonianClayFinishingPowder: productData({
  category: "Loose Finishing Powder",
  brand: "tarte",
  name: "Amazonian Clay Finishing Powder",
  type: "Translucent loose finishing powder",
  sizes: ["standard"],
  image: skuImage("s2614949"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-amazonian-clay-finishing-powder-P502885?skuId=2614949"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasMiniCloudSetLooseSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),
  
  hourglassVeilTranslucentSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Hourglass",
  name: "Veil™ Translucent Setting Powder - Talc Free",
  type: "Translucent talc-free loose setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2691046"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/veil-translucent-setting-powder-P430240"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

tooFacedBornThisWaySoftBlurSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Too Faced",
  name: "Born This Way Soft Blur Flexible Finish Setting Powder",
  type: "Soft-blur flexible finish pressed setting powder",
  sizes: ["standard"],
  image: skuImage("s2794592"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/too-faced-born-this-way-soft-blur-flexible-finish-setting-powder-P512388"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "hudaBeautyEasyBakeLooseSettingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

beautyblenderBounceGemstoneSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Beautyblender",
  name: "BOUNCE™ Soft Focus Gemstone Setting Powder",
  type: "Soft-focus oil-absorbing loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2247807"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/beautyblender-bounce-trade-soft-focus-gemstone-setting-powder-P470004"
  }),
  alternatives: {
    US: "fentyBeautyInvisimatteSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

hudaBeautyEasyBakeAndSnatchPressedPowder: productData({
  category: "Pressed Setting Powder",
  brand: "HUDA BEAUTY",
  name: "Easy Bake and Snatch Pressed Talc-Free Brightening and Setting Powder",
  type: "Brightening talc-free pressed setting powder",
  sizes: ["standard"],
  image: skuImage("s2691624"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/easy-bake-and-snatched-pressed-talc-free-brightening-setting-powder-P508244"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

morpheBakeAndSetSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Morphe",
  name: "Bake & Set Setting Powder",
  type: "Matte loose baking and setting powder",
  sizes: ["mini", "standard", "jumbo"],
  image: skuImage("s2851368"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/morphe-bake-set-setting-powder-P481131"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

fentyBeautyInvisimatteSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Fenty Beauty by Rihanna",
  name: "Invisimatte Instant Setting + Blotting Powder",
  type: "Universal shine-absorbing pressed setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2590131"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/invisimatte-blotting-powder-P39784685"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hudaBeautyEasyBakeLooseSettingPowder"
  }
}),

hausLabsBioBlurringLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "HAUS LABS BY LADY GAGA",
  name: "Bio-Blurring Talc-Free Loose Setting Powder",
  type: "Talc-free loose blurring setting powder",
  sizes: ["standard"],
  image: skuImage("s2597565"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/bio-blurring-talc-free-loose-setting-powder-P502321"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

narsLightReflectingLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "NARS",
  name: "Light Reflecting Loose Setting Powder",
  type: "Luminous loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2514826"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/light-reflecting-loose-setting-powder-P377756"
  }),
  alternatives: {
    US: "makeUpForEverHdSkinLoosePowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "hudaBeautyEasyBakeLooseSettingPowder",
    AU: "hourglassVeilTranslucentSettingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

saieAirsetRadiantLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Saie",
  name: "Airset Radiant and Weightless Talc-Free Loose Setting Powder",
  type: "Radiant talc-free loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2513026"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/saie-airset-radiant-loose-setting-powder-P480188"
  }),
  alternatives: {
    US: "hourglassVeilTranslucentSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

lauraMercierUltraBlurPressedSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Laura Mercier",
  name: "Ultra-Blur Talc-Free Waterproof Translucent Pressed Setting Powder",
  type: "Waterproof pressed translucent setting powder",
  sizes: ["standard"],
  image: skuImage("s2748226"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/ultra-blur-talc-free-translucent-pressed-setting-powder-P510893"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hudaBeautyEasyBakeAndSnatchPressedPowder"
  }
}),

fentyBeautyBrightFixSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Fenty Beauty by Rihanna",
  name: "Bright Fix Instant Brightening + Setting Powder",
  type: "Instant brightening pressed setting powder",
  sizes: ["standard"],
  image: skuImage("s2898427"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-bright-fix-instant-brightening-setting-powder-P517840"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeAndSnatchPressedPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "patMcGrathSublimePerfectionUnderEyePowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

milkMakeupPoreEclipseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "MILK MAKEUP",
  name: "Pore Eclipse Matte Translucent Talc-Free Setting Powder",
  type: "Matte translucent talc-free loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2689495"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pore-eclipse-matte-translucent-talc-free-setting-powder-P507482"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hourglassVeilTranslucentSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

anastasiaLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Anastasia Beverly Hills",
  name: "Loose Setting Powder",
  type: "Translucent loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2226785"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/loose-setting-powder-P447604"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hourglassVeilTranslucentSettingPowder"
  }
}),

bareMineralsOriginalMineralVeilLoosePowder: productData({
  category: "Loose Setting Powder",
  brand: "bareMinerals",
  name: "Original Mineral Veil Pressed Setting Powder",
  type: "Talc-free mineral setting powder",
  sizes: ["standard"],
  image: skuImage("s2648301"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/original-mineral-veil-pressed-setting-powder-P501547"
  }),
  alternatives: {
    US: "kosasCloudSetBakedSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "rareBeautyTrueToMyselfPressedFinishingPowder",
    BR: "hourglassVeilTranslucentSettingPowder"
  }
}),

narsSoftMatteAdvancedPerfectingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "NARS",
  name: "Soft Matte Advanced Perfecting Powder",
  type: "Soft matte pressed perfecting powder",
  sizes: ["standard"],
  image: skuImage("s2579654"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/soft-matte-advanced-perfecting-powder-P505044"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hudaBeautyEasyBakeAndSnatchPressedPowder"
  }
}),

lawlessPerfectingSmoothingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "LAWLESS",
  name: "Perfecting Smoothing Talc-Free Powder",
  type: "Talc-free smoothing pressed powder",
  sizes: ["standard"],
  image: skuImage("s2536423"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lawless-perfecting-smoothing-powder-P468670"
  }),
  alternatives: {
    US: "kosasCloudSetBakedSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "charlotteTilburyAirbrushFlawlessFinishPowder",
    BR: "hudaBeautyEasyBakeLooseSettingPowder"
  }
}),

givenchyPrismeLibreLoosePowder: productData({
  category: "Loose Setting Powder",
  brand: "Givenchy",
  name: "Prisme Libre Loose Setting and Finishing Powder",
  type: "Color-correcting loose setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2375418"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/prisme-libre-loose-powder-P390722"
  }),
  alternatives: {
    US: "hourglassVeilTranslucentSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

benefitPorefessionalPowerPowder: productData({
  category: "Loose Setting Powder",
  brand: "Benefit Cosmetics",
  name: "The POREfessional Matte Blurring Loose Setting Powder",
  type: "Matte pore-blurring loose setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2792984"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-the-porefessional-power-powder-P512867"
  }),
  alternatives: {
    US: "milkMakeupPoreEclipseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "fentyBeautyInvisimatteSettingPowder"
  }
}),

itCosmeticsByeByePoresPressedPowder: productData({
  category: "Pressed Setting Powder",
  brand: "IT Cosmetics",
  name: "Bye Bye Pores Pressed Translucent Powder",
  type: "Pressed translucent pore-blurring setting powder",
  sizes: ["standard"],
  image: skuImage("s2182749"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/bye-bye-pores-pressed-P411393"
  }),
  alternatives: {
    US: "fentyBeautyInvisimatteSettingPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "charlotteTilburyAirbrushFlawlessFinishPowder"
  }
}),

hourglassAmbientLightingFinishingPowder: productData({
  category: "Finishing Powder",
  brand: "Hourglass",
  name: "Ambient® Lighting Finishing Powder",
  type: "Soft-focus luminous finishing powder",
  sizes: ["mini", "standard"],
  image: skuImage("s1483500"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/ambient-lighting-powder-P377723"
  }),
  alternatives: {
    US: "saieAirsetRadiantLooseSettingPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "narsLightReflectingLooseSettingPowder",
    AU: "rareBeautyTrueToMyselfPressedFinishingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

refySkinFinishSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "REFY",
  name: "Skin Finish Water-Based Loose Setting Powder",
  type: "Water-based loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2786150"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/refy-skin-finish-water-based-powder-P511627"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "hourglassVeilTranslucentSettingPowder"
  }
}),

lysBeautyTripleFixSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "LYS Beauty",
  name: "Triple Fix Pressed Setting Powder",
  type: "Pressed blurring setting powder",
  sizes: ["standard"],
  image: skuImage("s2485951"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lys-beauty-triple-fix-pressed-setting-powder-P469478"
  }),
  alternatives: {
    US: "rareBeautyTrueToMyselfPressedFinishingPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "kosasCloudSetBakedSettingPowder",
    AU: "fentyBeautyInvisimatteSettingPowder",
    BR: "charlotteTilburyAirbrushFlawlessFinishPowder"
  }
}),

fentyBeautyProFiltrInstantRetouchSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Fenty Beauty by Rihanna",
  name: "Pro Filt’r Instant Retouch Setting Powder",
  type: "Soft matte loose setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2107415"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pro-filtr-setting-powder-P88779874"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hourglassVeilTranslucentSettingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

calirayMagicHourSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "caliray",
  name: "Magic Hour 16-hour Blurring Talc-Free Loose Setting Powder",
  type: "Talc-free 16-hour blurring loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2799625"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/caliray-magic-hour-16-hour-blurring-talc-free-loose-setting-powder-P510858"
  }),
  alternatives: {
    US: "hausLabsBioBlurringLooseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),
  
  charlotteTilburyAirbrushFlawlessFinishPowder: productData({
  category: "Setting Powder",
  brand: "Charlotte Tilbury",
  name: "Airbrush Flawless Finish Setting Powder",
  type: "Rechargeable pressed blurring setting powder",
  sizes: ["mini", "standard", "refill"],
  image: skuImage("s2605988"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/airbrush-flawless-finish-setting-powder-P433526?skuId=2605988"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

hudaBeautyEasyBakeLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "HUDA BEAUTY",
  name: "Easy Bake Loose Baking & Setting Powder",
  type: "Loose blurring baking and setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2947976"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/easy-bake-loose-baking-setting-powder-P433402?skuId=2947976"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

makeupByMarioSurrealSkinSoftBlurSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "MAKEUP BY MARIO",
  name: "SurrealSkin™ Talc-Free Soft Blur Setting Powder",
  type: "Talc-free soft-blur loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2795870"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/makeup-by-mario-soft-blur-setting-powder-P512865?skuId=2795870"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

sephoraCollectionBlurItLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "SEPHORA COLLECTION",
  name: "Blur It Loose Setting Powder",
  type: "Matte blurring loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2886935"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/blur-it-loose-setting-powder-P517856"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "kosasCloudSetBakedSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "charlotteTilburyAirbrushFlawlessFinishPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

yslAllHoursHyperBlurLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Yves Saint Laurent",
  name: "All Hours Hyper Blur Loose Setting Powder",
  type: "Luxury loose blurring setting powder",
  sizes: ["standard"],
  image: skuImage("s2905594"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/ysl-all-hours-hyper-blur-loose-setting-powder-P515780"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "charlotteTilburyAirbrushFlawlessFinishPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

sephoraCollectionTranslucentSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "SEPHORA COLLECTION",
  name: "Translucent Loose Setting Powder",
  type: "Translucent loose setting powder",
  sizes: ["standard"],
  image: skuImage("s2710895"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/sephora-collection-translucent-setting-powder-P467142"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "makeupByMarioSurrealSkinSoftBlurSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

sephoraCollectionMicrosmoothBakedFacePowder: productData({
  category: "Face Powder",
  brand: "SEPHORA COLLECTION",
  name: "Microsmooth Multi-Tasking Baked Face Powder",
  type: "Baked multi-use face powder foundation",
  sizes: ["standard"],
  image: skuImage("s2730760"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/sephora-collection-microsmooth-multi-tasking-baked-face-powder-P474388?skuId=2730760"
  }),
  alternatives: {
    US: "rareBeautyTrueToMyselfPressedFinishingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "kosasCloudSetBakedSettingPowder",
    AU: "charlotteTilburyAirbrushFlawlessFinishPowder",
    BR: "makeUpForEverHdSkinLoosePowder"
  }
}),

yslAllHoursHyperFinishPowder: productData({
  category: "Pressed Powder",
  brand: "Yves Saint Laurent",
  name: "All Hours Hyper Finish 24H Multi-Use Natural Matte Powder",
  type: "Luxury matte multi-use pressed powder",
  sizes: ["standard"],
  image: skuImage("s2751493"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/yves-saint-laurent-all-hours-hyper-finish-24h-multi-use-natural-matte-powder-P511405?skuId=2751493"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "makeUpForEverHdSkinLoosePowder"
  }
}),

patMcGrathSublimePerfectionUnderEyePowder: productData({
  category: "Under Eye Setting Powder",
  brand: "PAT McGRATH LABS",
  name: "Skin Fetish: Sublime Perfection Blurring Under-Eye Setting Powder",
  type: "Blurring under-eye pressed setting powder",
  sizes: ["standard"],
  image: skuImage("s2315489"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/pat-mcgrath-labs-skin-fetish-sublime-perfection-blurring-under-eye-setting-powder-P456107"
  }),
  alternatives: {
    US: "lauraMercierSecretBrighteningPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "hudaBeautyEasyBakeLooseSettingPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

givenchyPrismeLibrePressedPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Givenchy",
  name: "Prisme Libre Blurring Color-Correcting Pressed Powder",
  type: "Color-correcting blurring pressed powder",
  sizes: ["standard"],
  image: skuImage("s2864841"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/prisme-libre-blurring-color-correcting-pressed-powder-P515776"
  }),
  alternatives: {
    US: "sephoraCollectionBlurItLooseSettingPowder",
    FR: "hudaBeautyEasyBakeLooseSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "charlotteTilburyAirbrushFlawlessFinishPowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

hudaBeautyEasyBakePressedSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "HUDA BEAUTY",
  name: "Easy Bake Airbrush Matte Pressed Setting Powder",
  type: "Airbrush matte pressed setting powder",
  sizes: ["standard"],
  image: skuImage("s2925758"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/easy-bake-airbrush-matte-pressed-setting-powder-P520357"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "makeUpForEverHdSkinLoosePowder"
  }
}),

lauraMercierUltraBlurLooseSettingPowder: productData({
  category: "Loose Setting Powder",
  brand: "Laura Mercier",
  name: "Ultra-Blur Talc-Free Translucent Loose Setting Powder",
  type: "Talc-free translucent loose setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2793453"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/ultra-blur-translucent-loose-setting-powder-P500622?skuId=2793453"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "makeUpForEverHdSkinLoosePowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

lauraMercierSecretBrighteningPowder: productData({
  category: "Under Eye Setting Powder",
  brand: "Laura Mercier",
  name: "Secret Brightening Powder for Under Eyes",
  type: "Brightening under-eye loose setting powder",
  sizes: ["standard"],
  image: skuImage("s870675"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/secret-brightening-powder-P109911?skuId=870675"
  }),
  alternatives: {
    US: "patMcGrathSublimePerfectionUnderEyePowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "hudaBeautyEasyBakeLooseSettingPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "kosasCloudSetBakedSettingPowder"
  }
}),

kosasCloudSetBakedSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Kosas",
  name: "Cloud Set Baked Setting & Smoothing Talc-Free Vegan Powder",
  type: "Talc-free baked smoothing setting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2414373"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/kosas-cloud-set-baked-setting-smoothing-talc-free-vegan-powder-P468685?skuId=2414373"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

rareBeautyTrueToMyselfPressedFinishingPowder: productData({
  category: "Pressed Finishing Powder",
  brand: "Rare Beauty by Selena Gomez",
  name: "True to Myself Tinted Pressed Finishing Powder",
  type: "Talc-free tinted pressed finishing powder",
  sizes: ["standard"],
  image: skuImage("s2893444"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/rare-beauty-by-selena-gomez-true-to-myself-tinted-pressed-finishing-powder-P512330"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessFinishPowder",
    FR: "sephoraCollectionMicrosmoothBakedFacePowder",
    UK: "kosasCloudSetBakedSettingPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "hudaBeautyEasyBakeLooseSettingPowder"
  }
}),

makeUpForEverHdSkinLoosePowder: productData({
  category: "Loose Setting Powder",
  brand: "MAKE UP FOR EVER",
  name: "HD Skin Blurring & Perfecting Loose Powder",
  type: "Blurring loose setting and perfecting powder",
  sizes: ["mini", "standard"],
  image: skuImage("s2868628"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/hd-skin-blurring-perfecting-loose-powder-P516335"
  }),
  alternatives: {
    US: "hudaBeautyEasyBakeLooseSettingPowder",
    FR: "sephoraCollectionTranslucentSettingPowder",
    UK: "charlotteTilburyAirbrushFlawlessFinishPowder",
    AU: "kosasCloudSetBakedSettingPowder",
    BR: "rareBeautyTrueToMyselfPressedFinishingPowder"
  }
}),

saieSlipTintSettingPowder: productData({
  category: "Pressed Setting Powder",
  brand: "Saie",
  name: "Slip Tint Undetectable Baked Setting Powder",
  type: "Undetectable baked setting powder",
  sizes: ["standard"],
  image: skuImage("s2893014"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/saie-slip-tint-undetectable-baked-setting-powder-P517161"
  }),
  alternatives: {
    US: "kosasCloudSetBakedSettingPowder",
    FR: "sephoraCollectionBlurItLooseSettingPowder",
    UK: "rareBeautyTrueToMyselfPressedFinishingPowder",
    AU: "makeUpForEverHdSkinLoosePowder",
    BR: "hudaBeautyEasyBakeLooseSettingPowder"
  }
}),
  // -------------------------
  // SETTING SPRAYS 
  // -------------------------
  morpheMiniContinuousSettingMist: productData({
  category: "Setting Spray",
  brand: "Morphe",
  name: "Mini Continuous Setting Mist",
  type: "Mini micro-fine continuous setting mist",
  sizes: ["mini"],
  image: skuImage("s2397578"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/morphe-mini-continuous-setting-mist-P463089?skuId=2397578"
  }),
  alternatives: {
    US: "urbanDecayMiniAllNighterNaturalSettingSpray",
    FR: "sephoraCollectionMiniAllDaySettingSpray",
    UK: "makeUpForEverMiniMistFixSettingSpray",
    AU: "milkMiniPoreEclipseSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

urbanDecayMiniAllNighterGlowSettingSpray: productData({
  category: "Setting Spray",
  brand: "Urban Decay",
  name: "Mini All Nighter Waterproof Hydrating and Glowy Setting Spray with 24HR Wear",
  type: "Mini hydrating glowy waterproof setting spray",
  sizes: ["mini"],
  image: skuImage("s2891398"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/urban-decay-glow-all-nighter-setting-spray-P517859?skuId=2891398"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

benefitMiniPorefessionalSuperSetterSpray: productData({
  category: "Setting Spray",
  brand: "Benefit Cosmetics",
  name: "Mini The POREfessional: Super Setter Setting Spray",
  type: "Mini pore-blurring makeup setting spray",
  sizes: ["mini"],
  image: skuImage("s2409522"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-the-porefessional-super-setter-setting-spray-mini-P466657?skuId=2409522"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

tarteMiniStaySpraySettingSpray: productData({
  category: "Setting Spray",
  brand: "tarte",
  name: "Mini Stay Spray™ Waterproof Long Lasting Setting Spray",
  type: "Mini waterproof long-lasting setting spray",
  sizes: ["mini"],
  image: skuImage("s2454585"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-travel-size-stay-spray-setting-spray-P471808?skuId=2454585"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

iliaMiniBlueLightProtectSetMist: productData({
  category: "Setting Spray",
  brand: "ILIA",
  name: "Mini Blue Light Protect + Set Mist",
  type: "Mini protective makeup setting mist",
  sizes: ["mini"],
  image: skuImage("s2442184"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/ilia-mini-blue-light-filter-protect-set-mist-P471246?skuId=2442184"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayMiniAllNighterGlowSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

tarteMiniLifeLockSettingSpray: productData({
  category: "Setting Spray",
  brand: "tarte",
  name: "Mini Life Lock™ Hydrating Waterproof Setting Spray",
  type: "Mini hydrating waterproof setting spray",
  sizes: ["mini"],
  image: skuImage("s2849743"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/tarte-mini-life-lock-hydrating-setting-spray-P515094?skuId=2849743"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayMiniAllNighterGlowSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

urbanDecayMiniAllNighterMatteSettingSpray: productData({
  category: "Setting Spray",
  brand: "Urban Decay",
  name: "Mini All Nighter Waterproof Matte Setting Spray with 24HR Wear",
  type: "Mini matte waterproof setting spray",
  sizes: ["mini"],
  image: skuImage("s2891406"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-all-nighter-matte-setting-spray-P518811?skuId=2891406"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMiniPoreEclipseSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessMatteBlurSettingSpray"
  }
}),

milkMiniPoreEclipseSettingSpray: productData({
  category: "Setting Spray",
  brand: "MILK MAKEUP",
  name: "Mini Pore Eclipse Mattifying + Blurring Transfer-Proof Setting Spray",
  type: "Mini mattifying blurring transfer-proof setting spray",
  sizes: ["mini"],
  image: skuImage("s2666832"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-pore-eclipse-mattifying-blurring-setting-spray-P506022?skuId=2666832"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayMiniAllNighterMatteSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessMatteBlurSettingSpray"
  }
}),

danessaMyricksMiniYummySkinMattifyingSettingSpray: productData({
  category: "Setting Spray",
  brand: "Danessa Myricks Beauty",
  name: "Mini Yummy Skin Liquid Blurring Balm Mattifying Setting Spray",
  type: "Mini blurring mattifying setting spray",
  sizes: ["mini"],
  image: skuImage("s2887883"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-yummy-skin-liquid-blurring-balm-mattifying-setting-spray-P516874?skuId=2887883"
  }),
  alternatives: {
    US: "milkMiniPoreEclipseSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayMiniAllNighterMatteSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessMatteBlurSettingSpray"
  }
}),

anastasiaMiniDewySetSettingSpray: productData({
  category: "Setting Spray",
  brand: "Anastasia Beverly Hills",
  name: "Mini Dewy Set Hydrating Setting Spray",
  type: "Mini hydrating dewy setting spray",
  sizes: ["mini"],
  image: skuImage("s2360998"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/anastasia-beverly-hills-mini-dewy-set-hydrating-setting-spay-P459508?skuId=2360998"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayMiniAllNighterGlowSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

tooFacedMiniHangoverSettingSpray: productData({
  category: "Setting Spray",
  brand: "Too Faced",
  name: "Mini Hangover 3-in-1 Replenishing Primer & Setting Spray",
  type: "Mini primer and setting spray",
  sizes: ["mini"],
  image: skuImage("s2030088"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hangover-3-in-1-replenishing-primer-setting-spray-mini-P428037?skuId=2030088"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayMiniAllNighterGlowSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),
  
  benefitPorefessionalSuperSetterSpray: productData({
  category: "Setting Spray",
  brand: "Benefit Cosmetics",
  name: "The POREfessional: Super Setter Pore-Minimizing Waterproof Setting Spray",
  type: "Pore-minimizing waterproof makeup setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2409514"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/benefit-cosmetics-the-porefessional-super-setter-setting-spray-P466656"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

danessaMyricksYummySkinMattifyingSettingSpray: productData({
  category: "Setting Spray",
  brand: "Danessa Myricks Beauty",
  name: "Yummy Skin Liquid Blurring Balm Mattifying Setting Spray",
  type: "Blurring mattifying makeup setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2892396"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/yummy-skin-liquid-blurring-balm-mattifying-setting-spray-P516894"
  }),
  alternatives: {
    US: "milkMakeupPoreEclipseSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

fentyBeautyYouMistSettingSpray: productData({
  category: "Setting Spray",
  brand: "Fenty Beauty by Rihanna",
  name: "You Mist Makeup-Extending Setting Spray",
  type: "Makeup-extending setting spray",
  sizes: ["standard"],
  image: skuImage("s2847739"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/prep-set-setting-spray-P514731"
  }),
  alternatives: {
    US: "milkMakeupHydroGripSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "charlotteTilburyAirbrushFlawlessSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

oneSizeOnTilDawnGlitterSettingSpray: productData({
  category: "Setting Spray",
  brand: "ONE/SIZE by Patrick Starrr",
  name: "On 'Til Dawn Glitter Waterproof Setting Spray",
  type: "Glitter waterproof makeup setting spray",
  sizes: ["standard"],
  image: skuImage("s2856185"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/on-til-dawn-glitter-waterproof-setting-spray-P515867"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

makeUpForEverMiniMistFixSettingSpray: productData({
  category: "Setting Spray",
  brand: "MAKE UP FOR EVER",
  name: "Mini Mist & Fix 24HR Hydrating Setting Spray",
  type: "Mini hydrating makeup setting spray",
  sizes: ["mini"],
  image: skuImage("s2646883"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/mini-mist-fix-24hr-hydrating-setting-spray-P504863"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

anastasiaImpeccableBlurringMatteSettingSpray: productData({
  category: "Setting Spray",
  brand: "Anastasia Beverly Hills",
  name: "Impeccable 24HR Blurring Matte Setting Spray",
  type: "24-hour blurring matte setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2833895"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/impeccable-24hr-blurring-matte-setting-spray-P515096"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "milkMakeupPoreEclipseSettingSpray"
  }
}),

macFixPlusMatteSettingSpray: productData({
  category: "Setting Spray",
  brand: "MAC Cosmetics",
  name: "Fix+ Matte Lightweight Mattifying Setting Spray with Oil and Shine-Control",
  type: "Mattifying setting spray with oil-control",
  sizes: ["standard"],
  image: skuImage("s2097640"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/prep-prime-fix-matte-P15411548"
  }),
  alternatives: {
    US: "milkMakeupPoreEclipseSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "oneSizeOnTilDawnSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

caliraySurfproofSettingSpray: productData({
  category: "Setting Spray",
  brand: "caliray",
  name: "Surfproof 24-hour Waterproof & Transferproof Setting Spray",
  type: "Waterproof and transferproof 24-hour setting spray",
  sizes: ["standard"],
  image: skuImage("s2643476"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/caliray-surfproof-setting-spray-P504293"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

milkMakeupPoreEclipseSettingSpray: productData({
  category: "Setting Spray",
  brand: "MILK MAKEUP",
  name: "Pore Eclipse Mattifying + Blurring Transfer-Proof Setting Spray",
  type: "Mattifying transfer-proof blurring setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2653459"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/milk-makeup-pore-eclipse-mattifying-setting-spray-P504886"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

cliniqueSetTheDaySettingSpray: productData({
  category: "Setting Spray",
  brand: "CLINIQUE",
  name: "Set The Day™ Makeup Setting Spray",
  type: "Makeup setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2889863"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/clinique-set-the-day-makeup-setting-spray-P512734"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

lysBeautySkinLoyaltySettingSpray: productData({
  category: "Setting Spray",
  brand: "LYS Beauty",
  name: "Skin Loyalty Setting Spray",
  type: "Long-wear makeup setting spray",
  sizes: ["standard"],
  image: skuImage("s2469617"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/lys-beauty-skin-loyalty-setting-spray-P469479"
  }),
  alternatives: {
    US: "milkMakeupHydroGripSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

beautyblenderBoostSettingSpray: productData({
  category: "Setting Spray",
  brand: "Beautyblender",
  name: "BOOST™ 18-Hour Firming & Smoothing Peptide Setting Spray",
  type: "Refreshing peptide setting spray",
  sizes: ["standard"],
  image: skuImage("s2793842"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/beautyblender-boost-18-hour-firming-smoothing-peptide-setting-spray-P511416"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

hourglassVeilSoftFocusSettingSpray: productData({
  category: "Setting Spray",
  brand: "Hourglass",
  name: "Veil™ Soft Focus Setting Spray",
  type: "Soft-focus makeup setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2409480"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hourglass-veil-soft-focus-setting-spray-P467410"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

refyFaceSetterSettingSpray: productData({
  category: "Setting Spray",
  brand: "REFY",
  name: "Face Setter Hydrating Setting Spray",
  type: "Hydrating face setting spray",
  sizes: ["standard"],
  image: skuImage("s2786127"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/refy-face-setter-hydrating-setting-spray-P511628"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "charlotteTilburyAirbrushFlawlessSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

charlotteTilburyMagicHydratorMist: productData({
  category: "Face Mist",
  brand: "Charlotte Tilbury",
  name: "Charlotte’s Magic Hydrator Mist",
  type: "Hydrating face mist for makeup prep and refresh",
  sizes: ["standard"],
  image: skuImage("s2868909"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-charlotte-s-magic-hydrator-mist-P515585"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

lauraMercierTranslucentPureSettingSpray: productData({
  category: "Setting Spray",
  brand: "Laura Mercier",
  name: "Translucent Pure Setting Spray 16HR",
  type: "16-hour translucent setting spray",
  sizes: ["standard"],
  image: skuImage("s2653996"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/translucent-pure-setting-spray-16hr-P504946"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

patMcGrathSublimePerfectionSettingSpray: productData({
  category: "Setting Spray",
  brand: "PAT McGRATH LABS",
  name: "Skin Fetish: Sublime Perfection Longwear Blurring Setting Spray",
  type: "Longwear blurring makeup setting spray",
  sizes: ["standard"],
  image: skuImage("s2899607"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/pat-mcgrath-labs-skin-fetish-sublime-perfection-longwear-blurring-setting-spray-P517255"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "urbanDecayAllNighterSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

iliaBlueLightFilterSettingSpray: productData({
  category: "Setting Spray",
  brand: "ILIA",
  name: "Blue Light Filter Protect + Set Mist",
  type: "Protecting makeup setting mist",
  sizes: ["mini", "standard"],
  image: skuImage("s2499473"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/blue-light-mist-P481978"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

iconicLondonPrepSetBlurSettingSpray: productData({
  category: "Setting Spray",
  brand: "Iconic London",
  name: "Prep-Set-Blur Setting Spray",
  type: "Blurring prep and setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2860179"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/iconic-london-prep-set-blur-setting-spray-P514904"
  }),
  alternatives: {
    US: "milkMakeupPoreEclipseSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "oneSizeOnTilDawnSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

sephoraCollectionMiniGlowSettingSpray: productData({
  category: "Setting Spray",
  brand: "SEPHORA COLLECTION",
  name: "Mini Glow 12HR Wear Transferproof Makeup Setting Spray",
  type: "Mini transferproof glow setting spray",
  sizes: ["mini"],
  image: skuImage("s2802247"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sephora-collection-mini-glow-12hr-wear-transferproof-makeup-setting-spray-P512585"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

sephoraCollectionMiniAllDaySettingSpray: productData({
  category: "Setting Spray",
  brand: "SEPHORA COLLECTION",
  name: "Mini All Day Makeup Setting Spray",
  type: "Mini long-wear makeup setting spray",
  sizes: ["mini"],
  image: skuImage("s2802239"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/sephora-collection-mini-all-day-makeup-setting-spray-P512584"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

tooFacedHangoverSettingSpray: productData({
  category: "Setting Spray",
  brand: "Too Faced",
  name: "Hangover 3-in-1 Replenishing Primer & Setting Spray",
  type: "Primer and setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s1778099"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/hangover-3-in-1-replenishing-primer-setting-spray-P420166"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "charlotteTilburyAirbrushFlawlessSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

tooFacedMakeupInsuranceSettingSpray: productData({
  category: "Setting Spray",
  brand: "Too Faced",
  name: "Makeup Insurance Longwear Setting Spray + Protection",
  type: "Longwear setting spray with protection",
  sizes: ["standard"],
  image: skuImage("s2899235"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/too-faced-makeup-insurance-longwear-setting-spray-protection-P517269"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

charlotteTilburyAirbrushFlawlessMatteBlurSettingSpray: productData({
  category: "Setting Spray",
  brand: "Charlotte Tilbury",
  name: "Airbrush Flawless Setting Spray Matte Blur",
  type: "Matte blur waterproof setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2854073"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/charlotte-tilbury-airbrush-flawless-setting-spray-matte-blur-P514363"
  }),
  alternatives: {
    US: "oneSizeOnTilDawnSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupPoreEclipseSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

iconicLondonPrepSetGlowSettingSpray: productData({
  category: "Setting Spray",
  brand: "Iconic London",
  name: "Prep-Set-Glow Hydrating Setting Spray",
  type: "Hydrating glow setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2249456"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/prep-set-glow-P501034"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "charlotteTilburyAirbrushFlawlessSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),
  
  charlotteTilburyAirbrushFlawlessSettingSpray: productData({
  category: "Setting Spray",
  brand: "Charlotte Tilbury",
  name: "Airbrush Flawless Setting Spray",
  type: "Hydrating waterproof makeup setting spray",
  sizes: ["mini", "standard", "jumbo"],
  image: skuImage("s2368439"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

oneSizeOnTilDawnSettingSpray: productData({
  category: "Setting Spray",
  brand: "ONE/SIZE by Patrick Starrr",
  name: "On ’Til Dawn Mattifying Waterproof Setting Spray",
  type: "Mattifying waterproof makeup setting spray",
  sizes: ["mini", "standard", "jumbo"],
  image: skuImage("s2490720"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/one-size-by-patrick-starrr-on-til-dawn-setting-spray-P476716?skuId=2490720"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "charlotteTilburyAirbrushFlawlessSettingSpray",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

urbanDecayAllNighterSettingSpray: productData({
  category: "Setting Spray",
  brand: "Urban Decay",
  name: "All Nighter Waterproof Makeup Setting Spray",
  type: "24-hour waterproof setting spray",
  sizes: ["mini", "standard", "duo"],
  image: skuImage("s2891414"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/all-nighter-setting-spray-P518812?skuId=2891414"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "rareBeautyAlwaysAnOptimistSettingMist",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

morpheContinuousSettingMistJumbo: productData({
  category: "Setting Spray",
  brand: "Morphe",
  name: "Continuous Setting Mist Jumbo",
  type: "Jumbo continuous makeup setting mist",
  sizes: ["jumbo"],
  image: skuImage("s2556702"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/morphe-continuous-setting-mist-jumbo-P478298?skuId=2556702"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "makeUpForEverMistFixSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

makeupByMarioSurrealSkinMiniSettingSpray: productData({
  category: "Setting Spray",
  brand: "MAKEUP BY MARIO",
  name: "Mini SurrealSkin™ 16HR Soft Setting Spray",
  type: "Mini waterproof soft-focus setting spray",
  sizes: ["mini"],
  image: skuImage("s2967867"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/mini-surrealskin-16hr-soft-setting-spray-P522451"
  }),
  alternatives: {
    US: "charlotteTilburyAirbrushFlawlessSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "urbanDecayAllNighterSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

macFixPlusAlcoholFreeSettingSpray: productData({
  category: "Setting Spray",
  brand: "MAC Cosmetics",
  name: "Fix+ Alcohol-Free Long-Lasting Setting Spray",
  type: "Alcohol-free multitasking long-wear setting spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2843431"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/mac-cosmetics-fix-alcohol-free-multitasking-setting-spray-P512281"
  }),
  alternatives: {
    US: "makeUpForEverMistFixSettingSpray",
    FR: "urbanDecayAllNighterSettingSpray",
    UK: "rareBeautyAlwaysAnOptimistSettingMist",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
  }
}),

milkMakeupHydroGripSettingSpray: productData({
  category: "Setting Spray",
  brand: "MILK MAKEUP",
  name: "Hydro Grip Set + Refresh Spray",
  type: "Long-wear radiant setting and refreshing spray",
  sizes: ["mini", "standard"],
  image: skuImage("s2306199"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/milk-makeup-hydro-grip-set-refresh-spray-P463071"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

rareBeautyAlwaysAnOptimistSettingMist: productData({
  category: "Setting Spray",
  brand: "Rare Beauty by Selena Gomez",
  name: "Always An Optimist 4-in-1 Prime & Set Mist",
  type: "Radiant priming and setting mist",
  sizes: ["mini", "standard"],
  image: skuImage("s2362465"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/rare-beauty-by-selena-gomez-always-an-optimist-4-in-1-prime-set-mist-P55849781"
  }),
  alternatives: {
    US: "milkMakeupHydroGripSettingSpray",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "macFixPlusAlcoholFreeSettingSpray"
  }
}),

makeUpForEverMistFixSettingSpray: productData({
  category: "Setting Spray",
  brand: "MAKE UP FOR EVER",
  name: "Mist & Fix 24HR Hydrating Setting Spray",
  type: "Hydrating alcohol-free setting spray",
  sizes: ["standard"],
  image: skuImage("s2646875"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/mist-fix-24hr-hydrating-setting-spray-P504860"
  }),
  alternatives: {
    US: "urbanDecayAllNighterSettingSpray",
    FR: "sephoraCollectionAllDaySettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "rareBeautyAlwaysAnOptimistSettingMist"
  }
}),

narsLightReflectingSettingMist: productData({
  category: "Setting Spray",
  brand: "NARS",
  name: "Light Reflecting™ Makeup Setting Mist",
  type: "Hydrating light-reflecting makeup setting mist",
  sizes: ["standard"],
  image: skuImage("s2772374"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/product/nars-light-reflecting-makeup-setting-mist-P511956"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "charlotteTilburyAirbrushFlawlessSettingSpray",
    AU: "milkMakeupHydroGripSettingSpray",
    BR: "urbanDecayAllNighterSettingSpray"
  }
}),

saieCitySetSettingSpray: productData({
  category: "Setting Spray",
  brand: "Saie",
  name: "CitySet™ 16HR Ultrafine Setting Mist",
  type: "Ultrafine long-wear setting mist",
  sizes: ["mini", "standard"],
  image: skuImage("s2938280"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/fr/brand/saie/setting-powder-face-powder"
  }),
  alternatives: {
    US: "rareBeautyAlwaysAnOptimistSettingMist",
    FR: "makeUpForEverMistFixSettingSpray",
    UK: "milkMakeupHydroGripSettingSpray",
    AU: "urbanDecayAllNighterSettingSpray",
    BR: "charlotteTilburyAirbrushFlawlessSettingSpray"
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
// EYE PRIMERS / BASES POUR LES YEUX
// -------------------------

urbanDecaySubversionLashPrimer: productData({
  category: "Mascara Primer",
  brand: "Urban Decay",
  name: "Subversion Lash Primer",
  type: "Whipped lash primer / mascara base",
  sizes: ["standard"],
  image: skuImage("s1635788"),
  links: countryLinks({
    US: "https://www.sephora.com/product/subversion-lash-primer-P387594",
    CA: "https://www.sephora.com/ca/en/product/subversion-lash-primer-P387594"
  }),
  alternatives: {
    FR: "lancomeCilsBooster",
    UK: "tarteOpeningActLashPrimer",
    AU: "tarteOpeningActLashPrimer",
    BR: "lancomeCilsBooster"
  }
}),

urbanDecayEyeshadowPrimerPotionOriginal: productData({
  category: "Eye Primer",
  brand: "Urban Decay",
  name: "Eyeshadow Primer Potion - Original",
  type: "Long-wear eyeshadow primer / crease-proof base",
  sizes: ["mini", "standard"],
  image: skuImage("s1704402"),
  links: countryLinks({
    US: "https://www.sephora.com/product/eyeshadow-primer-potion-tube-original-P284716",
    CA: "https://www.sephora.com/ca/en/product/eyeshadow-primer-potion-tube-original-P284716"
  }),
  alternatives: {
    FR: "narsProPrimeSmudgeProofEyeshadowBase",
    UK: "tooFacedShadowInsurancePrimer",
    AU: "narsProPrimeSmudgeProofEyeshadowBase",
    BR: "narsProPrimeSmudgeProofEyeshadowBase"
  }
}),

cliniqueLashBuildingPrimer: productData({
  category: "Mascara Primer",
  brand: "CLINIQUE",
  name: "Lash Building Primer",
  type: "Lash-conditioning mascara primer",
  sizes: ["standard"],
  image: skuImage("s741967"),
  links: countryLinks({
    US: "https://www.sephora.com/product/lash-building-primer-P122866",
    CA: "https://www.sephora.com/ca/en/product/lash-building-primer-P122866"
  }),
  alternatives: {
    FR: "lancomeCilsBooster",
    UK: "tarteOpeningActLashPrimer",
    AU: "tarteOpeningActLashPrimer",
    BR: "lancomeCilsBooster"
  }
}),

patMcGrathIntensifeyesArtistryWand: productData({
  category: "Eye Primer",
  brand: "PAT McGRATH LABS",
  name: "IntensifEYES Artistry Wand",
  type: "Eyeshadow intensifying wand / glitter and pigment base",
  sizes: ["standard"],
  image: skuImage("s2488807"),
  links: countryLinks({
    US: "https://www.sephora.com/product/pat-mcgrath-labs-intensifeyes-artistry-wand-P475597",
    CA: "https://www.sephora.com/ca/en/product/pat-mcgrath-labs-intensifeyes-artistry-wand-P475597"
  }),
  alternatives: {
    FR: "sephoraCollectionBoostLockEyePrimer",
    UK: "patMcGrathIntensifeyesLongwearPrimer",
    AU: "narsProPrimeSmudgeProofEyeshadowBase",
    BR: "tooFacedShadowInsurancePrimer"
  }
}),

narsProPrimeSmudgeProofEyeshadowBase: productData({
  category: "Eye Primer",
  brand: "NARS",
  name: "Pro-Prime™ Smudge Proof Eyeshadow Base",
  type: "Smudge-proof eyeshadow primer / long-wear base",
  sizes: ["standard"],
  image: skuImage("s1236843"),
  links: countryLinks({
    US: "https://www.sephora.com/product/pro-prime-smudge-proof-eyeshadow-base-P261211",
    CA: "https://www.sephora.com/ca/en/product/pro-prime-smudge-proof-eyeshadow-base-P261211",
    FR: "https://www.sephora.fr/p/smudgeproof-eyeshadow-base---base-a-paupieres-tenue-parfaite-P109207.html"
  }),
  alternatives: {
    UK: "tooFacedShadowInsurancePrimer",
    AU: "sephoraCollectionBoostLockEyePrimer",
    BR: "tooFacedShadowInsurancePrimer"
  }
}),

tarteOpeningActLashPrimer: productData({
  category: "Mascara Primer",
  brand: "tarte",
  name: "opening act™ lash primer",
  type: "Lash treatment primer / volumizing mascara base",
  sizes: ["standard"],
  image: skuImage("s1707835"),
  links: countryLinks({
    US: "https://www.sephora.com/product/opening-act-lash-primer-P397383",
    CA: "https://www.sephora.com/ca/en/product/opening-act-lash-primer-P397383"
  }),
  alternatives: {
    FR: "lancomeCilsBooster",
    UK: "lancomeCilsBooster",
    AU: "lancomeCilsBooster",
    BR: "lancomeCilsBooster"
  }
}),

macPrepPrime24HourExtendEyeBase: productData({
  category: "Eye Primer",
  brand: "MAC Cosmetics",
  name: "Prep + Prime 24-Hour Extend Eye Base",
  type: "24-hour eyeshadow primer / crease-resistant base",
  sizes: ["standard"],
  image: skuImage("s2097681"),
  links: countryLinks({
    US: "https://www.sephora.com/product/prep-prime-24-hour-extend-eye-base-P34575546",
    CA: "https://www.sephora.com/ca/en/product/prep-prime-24-hour-extend-eye-base-P34575546",
    FR: "https://www.sephora.fr/p/prep-prime-24-hour-extend-eye-base---base-pour-les-yeux-24-heures-P10023548.html"
  }),
  alternatives: {
    UK: "narsProPrimeSmudgeProofEyeshadowBase",
    AU: "tooFacedShadowInsurancePrimer",
    BR: "sephoraCollectionBoostLockEyePrimer"
  }
}),

urbanDecayEyeshadowPrimerPotionAntiAging: productData({
  category: "Eye Primer",
  brand: "Urban Decay",
  name: "Eyeshadow Primer Potion - Anti-Aging",
  type: "Anti-aging eyeshadow primer / 24-hour wear",
  sizes: ["mini", "standard"],
  image: skuImage("s1704410"),
  links: countryLinks({
    US: "https://www.sephora.com/product/eyeshadow-primer-potion-anti-aging-P381306",
    CA: "https://www.sephora.com/ca/en/product/eyeshadow-primer-potion-anti-aging-P381306"
  }),
  alternatives: {
    FR: "narsProPrimeSmudgeProofEyeshadowBase",
    UK: "tooFacedShadowInsurancePrimer",
    AU: "sephoraCollectionBoostLockEyePrimer",
    BR: "narsProPrimeSmudgeProofEyeshadowBase"
  }
}),

sephoraCollectionBoostLockEyePrimer: productData({
  category: "Eye Primer",
  brand: "SEPHORA COLLECTION",
  name: "Boost + Lock 12HR Eyeshadow Primer",
  type: "12-hour eyeshadow primer / color-boosting base",
  sizes: ["standard"],
  image: skuImage("s2730802"),
  links: countryLinks({
    CA: "https://www.sephora.com/ca/en/product/boost-lock-eye-primer-P510843",
    FR: "https://www.sephora.fr/p/base-a-paupieres---booste-fixe-P10058381.html"
  }),
  alternatives: {
    US: "narsProPrimeSmudgeProofEyeshadowBase",
    UK: "tooFacedShadowInsurancePrimer",
    AU: "narsProPrimeSmudgeProofEyeshadowBase",
    BR: "tooFacedShadowInsurancePrimer"
  }
}),

anastasiaBeverlyHillsMiniWaterResistantEyePrimer: productData({
  category: "Eye Primer",
  brand: "Anastasia Beverly Hills",
  name: "Mini Water-Resistant Eye Primer",
  type: "Mini water-resistant eyeshadow primer / light-colored base",
  sizes: ["mini"],
  image: skuImage("s2226280"),
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-eye-primer-P446027",
    CA: "https://www.sephora.com/ca/en/product/mini-eye-primer-P446027"
  }),
  alternatives: {
    FR: "sephoraCollectionBoostLockEyePrimer",
    UK: "narsProPrimeSmudgeProofEyeshadowBase",
    AU: "tooFacedShadowInsurancePrimer",
    BR: "narsProPrimeSmudgeProofEyeshadowBase"
  }
}),

makeUpForEverAquaSeal: productData({
  category: "Eye Primer",
  brand: "MAKE UP FOR EVER",
  name: "Aqua Seal",
  type: "Waterproof liquid converter / sealer for eye makeup",
  sizes: ["standard"],
  image: skuImage("s969352"),
  links: countryLinks({
    US: "https://www.sephora.com/product/eye-seal-P169812",
    CA: "https://www.sephora.com/ca/en/product/eye-seal-P169812"
  }),
  alternatives: {
    FR: "macPrepPrime24HourExtendEyeBase",
    UK: "patMcGrathIntensifeyesLongwearPrimer",
    AU: "narsProPrimeSmudgeProofEyeshadowBase",
    BR: "sephoraCollectionBoostLockEyePrimer"
  }
}),

bobbiBrownVitaminEnrichedEyeBase: productData({
  category: "Eye Primer",
  brand: "Bobbi Brown",
  name: "Vitamin Enriched Eye Base Primer & Moisturizer with Hyaluronic Acid",
  type: "Hydrating eye primer / moisturizer base",
  sizes: ["standard"],
  image: skuImage("s2367845"),
  links: countryLinks({
    US: "https://www.sephora.com/product/bobbi-brown-vitamin-enriched-eye-base-P462339",
    CA: "https://www.sephora.com/ca/en/product/bobbi-brown-vitamin-enriched-eye-base-P462339",
    FR: "https://www.sephora.fr/p/vitamin-enriched-eye-base---base-vitaminee-pour-les-yeux-P10013433.html"
  }),
  alternatives: {
    UK: "macPrepPrime24HourExtendEyeBase",
    AU: "narsProPrimeSmudgeProofEyeshadowBase",
    BR: "sephoraCollectionBoostLockEyePrimer"
  }
}),

patMcGrathIntensifeyesLongwearPrimer: productData({
  category: "Eye Primer",
  brand: "PAT McGRATH LABS",
  name: "IntensifEYES™ Longwear Eyeshadow Primer",
  type: "Longwear eyeshadow primer / prep-and-set base",
  sizes: ["standard"],
  image: skuImage("s2699429"),
  links: countryLinks({
    US: "https://www.sephora.com/product/intensifeyes-long-wear-eyeshadow-primer-P507491",
    CA: "https://www.sephora.com/ca/en/product/intensifeyes-long-wear-eyeshadow-primer-P507491"
  }),
  alternatives: {
    FR: "sephoraCollectionBoostLockEyePrimer",
    UK: "narsProPrimeSmudgeProofEyeshadowBase",
    AU: "tooFacedShadowInsurancePrimer",
    BR: "narsProPrimeSmudgeProofEyeshadowBase"
  }
}),

tooFacedShadowInsurancePrimer: productData({
  category: "Eye Primer",
  brand: "Too Faced",
  name: "Shadow Insurance 24-Hour Eyeshadow Primer",
  type: "24-hour eyeshadow primer / color-intensifying base",
  sizes: ["standard"],
  image: skuImage("s2652279"),
  links: countryLinks({
    US: "https://www.sephora.com/product/too-faced-shadow-insurance-24-hour-eyeshadow-primer-P503816",
    CA: "https://www.sephora.com/ca/en/product/too-faced-shadow-insurance-24-hour-eyeshadow-primer-P503816",
    FR: "https://www.sephora.fr/p/shadow-insurance--environmental-defense----base-de-fards-a-paupieres-P10023913.html"
  }),
  alternatives: {
    UK: "narsProPrimeSmudgeProofEyeshadowBase",
    AU: "sephoraCollectionBoostLockEyePrimer",
    BR: "narsProPrimeSmudgeProofEyeshadowBase"
  }
}),

grandeCosmeticsGrandeLashPeptideSerum: productData({
  category: "Lash Serum",
  brand: "Grande Cosmetics",
  name: "GrandeLASH Peptide Lash Enhancing Serum",
  type: "Peptide lash enhancing serum",
  sizes: ["standard"],
  image: skuImage("s2965648"),
  links: countryLinks({
    US: "https://www.sephora.com/product/grandelash-peptide-lash-enhancing-serum-P522522",
    CA: "https://www.sephora.com/ca/en/product/grandelash-peptide-lash-enhancing-serum-P522522"
  }),
  alternatives: {
    FR: "lancomeCilsBooster",
    UK: "lancomeCilsBooster",
    AU: "tarteOpeningActLashPrimer",
    BR: "lancomeCilsBooster"
  }
}),

grandeCosmeticsMiniGrandeLashPeptideSerum: productData({
  category: "Lash Serum",
  brand: "Grande Cosmetics",
  name: "Mini GrandeLASH Peptide Lash Enhancing Serum",
  type: "Mini peptide lash enhancing serum",
  sizes: ["mini"],
  image: skuImage("s2965655"),
  links: countryLinks({
    US: "https://www.sephora.com/product/mini-grandelash-peptide-lash-enhancing-serum-P522534",
    CA: "https://www.sephora.com/ca/en/product/mini-grandelash-peptide-lash-enhancing-serum-P522534"
  }),
  alternatives: {
    FR: "lancomeCilsBooster",
    UK: "lancomeCilsBooster",
    AU: "tarteOpeningActLashPrimer",
    BR: "lancomeCilsBooster"
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
