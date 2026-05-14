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

  sephoraCollectionSmoothBlurPrimer: productData({
    category: "Primer",
    brand: "SEPHORA COLLECTION",
    name: "Smooth + Blur Primer",
    type: "Smoothing / blurring primer",
    sizes: ["standard"],
    image: "https://www.sephora.com/productimages/sku/s2413318-main-zoom.jpg?imwidth=315",
    links: countryLinks({
      US: "https://www.sephora.com/product/sephora-collection-smooth-blur-primer-P474102",
      CA: "https://www.sephora.com/ca/en/product/sephora-collection-smooth-blur-primer-P474102",
      FR: "https://www.sephora.fr/p/base-de-teint-P10049212.html"
    }),
    alternatives: {
      UK: "milkPoreEclipsePrimer",
      AU: "milkPoreEclipsePrimer",
      BR: "rareBeautyPoreDiffusingPrimer"
    }
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

  tarteBaseTapeHydratingPrimer: productData({
    category: "Primer",
    brand: "tarte",
    name: "base tape™ Hydrating & Smoothing Serum Face Primer",
    type: "Hydrating / smoothing primer",
    sizes: ["mini", "standard"],
    image: "",
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/tarte-base-tape-hydrating-primer-P471805",
      FR: "https://www.sephora.fr/p/base-tape-hydrating-primer---base-teint-hydratante-P3643141.html"
    }),
    alternatives: {
      US: "fentyGripTripHydratingPrimer",
      UK: "bobbiBrownVitaminEnrichedFaceBase",
      AU: "fentyGripTripHydratingPrimer",
      BR: "fentyGripTripHydratingPrimer"
    }
  }),

  smashboxPrimerizerHydratingPrimer: productData({
    category: "Primer",
    brand: "Smashbox",
    name: "Photo Finish Primerizer+ Hydrating Primer",
    type: "Hydrating primer",
    sizes: ["mini", "standard"],
    image: "",
    links: countryLinks({
      CA: "https://www.sephora.com/ca/en/product/smashbox-photo-finish-primerizer-hydrating-primer-P464327"
    }),
    alternatives: {
      US: "fentyGripTripHydratingPrimer",
      FR: "fentyGripTripHydratingPrimer",
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
    image: "",
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
    image: "",
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
    image: "",
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
  // FOUNDATIONS / SKIN TINTS
  // -------------------------
  narsLightReflectingFoundation: productData({
    category: "Foundation",
    brand: "NARS",
    name: "Light Reflecting Skin Improving Medium Coverage Foundation with Cacao Peptides",
    image: skuImage("s2514644"),
    links: {
      US: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338",
      CA: "https://www.sephora.com/ca/en/product/nars-light-reflecting-advance-skincare-foundation-P479338"
    }
  }),

  hausLabsTricloneFoundation: productData({
    category: "Foundation",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica",
    image: skuImage("s2597276"),
    links: {
      US: "https://www.sephora.com/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185",
      CA: "https://www.sephora.com/ca/en/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185"
    }
  }),

  makeupByMarioSurrealSkinFoundation: productData({
    category: "Foundation",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin Luminous Hydrating Foundation",
    image: skuImage("s2835213"),
    links: {
      US: "https://www.sephora.com/product/makeup-by-mario-surreal-foundation-P503679",
      CA: "https://www.sephora.com/ca/en/product/makeup-by-mario-surreal-foundation-P503679"
    }
  }),

  makeupByMarioSurrealSkinNaturalFoundation: productData({
    category: "Foundation",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin Natural Finish Foundation",
    links: {
      US: "https://www.sephora.com/product/surrealskin-natural-finish-foundation-P516977",
      CA: "https://www.sephora.com/ca/en/product/surrealskin-natural-finish-foundation-P516977"
    }
  }),

  armaniLuminousSilkFoundation: productData({
    category: "Foundation",
    brand: "Armani Beauty",
    name: "Luminous Silk Natural Glow Blurring Liquid Foundation with 24 Hour Wear",
    image: skuImage("s2926731"),
    links: {
      US: "https://www.sephora.com/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887",
      CA: "https://www.sephora.com/ca/en/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887"
    }
  }),

  tooFacedBornThisWayFoundation: productData({
    category: "Foundation",
    brand: "Too Faced",
    name: "Born This Way Natural Finish Foundation",
    image: skuImage("s2885853"),
    links: {
      US: "https://www.sephora.com/product/too-faced-born-this-way-natural-finish-foundation-P517843",
      CA: "https://www.sephora.com/ca/en/product/too-faced-born-this-way-natural-finish-foundation-P517843"
    }
  }),

  hudaFauxFilterFoundation: productData({
    category: "Foundation",
    brand: "HUDA BEAUTY",
    name: "#FauxFilter Luminous Matte Foundation",
    links: {
      US: "https://www.sephora.com/product/fauxfilter-luminous-matte-foundation-P468208",
      CA: "https://www.sephora.com/ca/en/product/fauxfilter-luminous-matte-foundation-P468208"
    }
  }),

  mufeHdSkinFoundation: productData({
    category: "Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Undetectable Longwear Foundation",
    links: {
      US: "https://www.sephora.com/product/hd-skin-foundation-P479712",
      CA: "https://www.sephora.com/ca/en/product/hd-skin-foundation-P479712"
    }
  }),

  fentyEazeDropSkinTint: productData({
    category: "Skin Tint",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Blurring Skin Tint",
    links: {
      US: "https://www.sephora.com/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025",
      CA: "https://www.sephora.com/ca/en/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025"
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
