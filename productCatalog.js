// Sephora US Complete Makeup Catalogue - simplified data.js
// Version finale simplifiée : un seul lien Sephora US par produit.
// Structure propre : productData({ code, category, brand, name, type, image, link })
// Chaque image utilise skuImage(sku) quand le SKU est disponible.
// Catégories : 38
// Total produits : 2493

const DEFAULT_PRODUCT_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%23999'%3ENo image%3C/text%3E%3C/svg%3E";

function skuImage(sku) {
  return sku
    ? `https://www.sephora.com/productimages/sku/s${sku}-main-zoom.jpg?imwidth=315`
    : DEFAULT_PRODUCT_IMAGE;
}

function productData({
  code = "",
  category,
  brand,
  name,
  type = "",
  image = "",
  link = ""
}) {
  return {
    code,
    category,
    brand,
    name,
    type,
    image: image || DEFAULT_PRODUCT_IMAGE,
    link,
    links: { US: link }
  };
}

const products = [
  // ==================================================
  // Makeup > Face > Foundation
  // Products: 148
  // ==================================================
  productData({
    code: "FOUNDATION_001",
    category: "Makeup > Face > Foundation",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica",
    type: "Foundation",
    image: skuImage("2597276"),
    link: "https://www.sephora.com/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185?skuId=2597276"
  }),
  productData({
    code: "FOUNDATION_002",
    category: "Makeup > Face > Foundation",
    brand: "SEPHORA COLLECTION",
    name: "Best Skin Ever 16 Hour Natural Finish Liquid Foundation",
    type: "Foundation",
    image: skuImage("2887131"),
    link: "https://www.sephora.com/product/best-skin-ever-liquid-foundation-P517322?skuId=2887131"
  }),
  productData({
    code: "FOUNDATION_003",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Forever Skin Glow Liquid Foundation 24HR Wear",
    type: "Foundation",
    image: skuImage("2933869"),
    link: "https://www.sephora.com/product/forever-skin-glow-liquid-foundation-24-hour-wear-P520267?skuId=2933869"
  }),
  productData({
    code: "FOUNDATION_004",
    category: "Makeup > Face > Foundation",
    brand: "Armani Beauty",
    name: "Mini Luminous Silk Natural Glow Blurring Liquid Foundation with 24HR Wear",
    type: "Foundation",
    image: skuImage("2926822"),
    link: "https://www.sephora.com/product/mini-luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P520119?skuId=2926822"
  }),
  productData({
    code: "FOUNDATION_005",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Soft'Lit Naturally Luminous Hydrating Longwear Foundation",
    type: "Foundation",
    image: skuImage("2746543"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-soft-lit-naturally-luminous-hydrating-longwear-foundation-P511130?skuId=2746543"
  }),
  productData({
    code: "FOUNDATION_006",
    category: "Makeup > Face > Foundation",
    brand: "NARS",
    name: "Light Reflecting Skin Improving Medium Coverage Foundation with Cacao Peptides",
    type: "Foundation",
    image: skuImage("2514644"),
    link: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338?skuId=2514644"
  }),
  productData({
    code: "FOUNDATION_007",
    category: "Makeup > Face > Foundation",
    brand: "NATASHA DENONA",
    name: "Hy-Glam Foundation Hydrating & Blurring Luminous Longwear Serum Foundation",
    type: "Foundation",
    image: skuImage("2890325"),
    link: "https://www.sephora.com/product/natasha-denona-hy-glam-foundation-hydrating-blurring-luminous-longwear-serum-foundation-P517849?skuId=2890325"
  }),
  productData({
    code: "FOUNDATION_008",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Forever Skin Perfect 24H Multi-Use Foundation Stick",
    type: "Foundation",
    image: skuImage("2882546"),
    link: "https://www.sephora.com/product/dior-forever-skin-perfect-24h-multi-use-foundation-P512480?skuId=2882546"
  }),
  productData({
    code: "FOUNDATION_009",
    category: "Makeup > Face > Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder - Tinted Primer & Foundation",
    type: "Foundation",
    image: skuImage("2836716"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-P484039?skuId=2836716"
  }),
  productData({
    code: "FOUNDATION_010",
    category: "Makeup > Face > Foundation",
    brand: "MERIT",
    name: "The Minimalist Perfecting Complexion Foundation and Concealer Stick",
    type: "Foundation",
    image: skuImage("2791861"),
    link: "https://www.sephora.com/product/merit-the-minimalist-perfecting-complexion-foundation-concealer-stick-P468694?skuId=2791861"
  }),
  productData({
    code: "FOUNDATION_011",
    category: "Makeup > Face > Foundation",
    brand: "HUDA BEAUTY",
    name: "Easy Blur Natural Airbrush Foundation with Niacinamide",
    type: "Foundation",
    image: skuImage("2888873"),
    link: "https://www.sephora.com/product/huda-beauty-easy-blur-smoothing-foundation-P512640?skuId=2888873"
  }),
  productData({
    code: "FOUNDATION_012",
    category: "Makeup > Face > Foundation",
    brand: "Prada",
    name: "Reveal Skin-Optimizing Refillable Soft Matte Foundation",
    type: "Foundation",
    image: skuImage("2754323"),
    link: "https://www.sephora.com/product/prada-beauty-reveal-skin-optimizing-refillable-soft-matte-foundation-P509693?skuId=2754323"
  }),
  productData({
    code: "FOUNDATION_013",
    category: "Makeup > Face > Foundation",
    brand: "m.ph by Mary Phillips",
    name: "Le Skin Weightless Serum Foundation",
    type: "Foundation",
    image: skuImage("2944841"),
    link: "https://www.sephora.com/product/le-skin-serum-foundation-P520563?skuId=2944841"
  }),
  productData({
    code: "FOUNDATION_014",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Forever Skin Wear Blurring Natural Matte Foundation - 24HR Ultra Wear",
    type: "Foundation",
    image: skuImage("2933901"),
    link: "https://www.sephora.com/product/dior-forever-skin-wear-blurring-natural-matte-foundation-24-hour-ultra-wear-P520603?skuId=2933901"
  }),
  productData({
    code: "FOUNDATION_015",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Backstage Face & Body Foundation",
    type: "Foundation",
    image: skuImage("2669539"),
    link: "https://www.sephora.com/product/backstage-face-body-foundation-P432500?skuId=2669539"
  }),
  productData({
    code: "FOUNDATION_016",
    category: "Makeup > Face > Foundation",
    brand: "ILIA",
    name: "Super Serum Skin Tint SPF 40 - Hydrating Foundation",
    type: "Foundation",
    image: skuImage("2333607"),
    link: "https://www.sephora.com/product/ilia-super-serum-skin-tint-spf-40-P455418?skuId=2333607"
  }),
  productData({
    code: "FOUNDATION_017",
    category: "Makeup > Face > Foundation",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin® Natural Finish Foundation",
    type: "Foundation",
    image: skuImage("2835361"),
    link: "https://www.sephora.com/product/surrealskin-natural-finish-foundation-P516977?skuId=2835361"
  }),
  productData({
    code: "FOUNDATION_018",
    category: "Makeup > Face > Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Soothing Serum Skin Tint Foundation with Peptides + Ceramides",
    type: "Foundation",
    image: skuImage("2836641"),
    link: "https://www.sephora.com/product/yummy-skin-serum-tint-P506512?skuId=2836641"
  }),
  productData({
    code: "FOUNDATION_019",
    category: "Makeup > Face > Foundation",
    brand: "NARS",
    name: "Natural Radiant Longwear Full Coverage Foundation",
    type: "Foundation",
    image: skuImage("2031011"),
    link: "https://www.sephora.com/product/natural-radiant-longwear-foundation-P427301?skuId=2031011"
  }),
  productData({
    code: "FOUNDATION_020",
    category: "Makeup > Face > Foundation",
    brand: "Hourglass",
    name: "Veil™ Hydrating Skin Tint Foundation",
    type: "Foundation",
    image: skuImage("2690915"),
    link: "https://www.sephora.com/product/veil-hydrating-skin-tint-P506573?skuId=2690915"
  }),
  productData({
    code: "FOUNDATION_021",
    category: "Makeup > Face > Foundation",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    type: "Foundation",
    image: skuImage("2419786"),
    link: "https://www.sephora.com/product/hollywood-flawless-filter-P434104?skuId=2419786"
  }),
  productData({
    code: "FOUNDATION_022",
    category: "Makeup > Face > Foundation",
    brand: "ciele",
    name: "tint & PROTECT medium coverage serum foundation with SPF 50+",
    type: "Foundation",
    image: skuImage("2708261"),
    link: "https://www.sephora.com/product/tint-protect-medium-coverage-serum-foundation-spf-50-P507751?skuId=2708261"
  }),
  productData({
    code: "FOUNDATION_023",
    category: "Makeup > Face > Foundation",
    brand: "Tower 28 Beauty",
    name: "SunnyDays Skin Tint with Mineral Zinc SPF 30",
    type: "Foundation",
    image: skuImage("2484533"),
    link: "https://www.sephora.com/product/tower-28-sunnydays-spf-30-tinted-sunscreen-foundation-P477829?skuId=2484533"
  }),
  productData({
    code: "FOUNDATION_024",
    category: "Makeup > Face > Foundation",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Flawless Filter",
    type: "Foundation",
    image: skuImage("2890978"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-hollywood-flawless-filter-P467607?skuId=2890978"
  }),
  productData({
    code: "FOUNDATION_025",
    category: "Makeup > Face > Foundation",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Blurring & Matte Full Coverage Foundation",
    type: "Foundation",
    image: skuImage("2891240"),
    link: "https://www.sephora.com/product/airbrush-flawless-blurring-matte-full-coverage-foundation-P516897?skuId=2891240"
  }),
  productData({
    code: "FOUNDATION_026",
    category: "Makeup > Face > Foundation",
    brand: "SEPHORA COLLECTION",
    name: "Best Skin Ever Matte Powder Foundation",
    type: "Foundation",
    image: skuImage("2667400"),
    link: "https://www.sephora.com/product/best-skin-ever-matte-powder-foundation-P505903?skuId=2667400"
  }),
  productData({
    code: "FOUNDATION_027",
    category: "Makeup > Face > Foundation",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour Hydrating Gel Skin Tint",
    type: "Foundation",
    image: skuImage("2843183"),
    link: "https://www.sephora.com/product/milk-makeup-hydro-grip-12-hour-hydrating-gel-skin-tint-P515226?skuId=2843183"
  }),
  productData({
    code: "FOUNDATION_028",
    category: "Makeup > Face > Foundation",
    brand: "Lancôme",
    name: "Teint Idole Ultra 24H Long Wear Matte Foundation with Hyaluronic Acid & Vitamin E",
    type: "Foundation",
    image: skuImage("2744597"),
    link: "https://www.sephora.com/product/teint-idole-ultra-24h-long-wear-foundation-P308201?skuId=2744597"
  }),
  productData({
    code: "FOUNDATION_029",
    category: "Makeup > Face > Foundation",
    brand: "NARS",
    name: "Natural Matte Longwear Pore Blurring Medium-to-Full Coverage Foundation",
    type: "Foundation",
    image: skuImage("2942621"),
    link: "https://www.sephora.com/product/natural-matte-longwear-foundation-P520608?skuId=2942621"
  }),
  productData({
    code: "FOUNDATION_030",
    category: "Makeup > Face > Foundation",
    brand: "bareMinerals",
    name: "BAREPRO® 24HR Skin Perfecting Talc-Free Matte Powder Foundation",
    type: "Foundation",
    image: skuImage("2850006"),
    link: "https://www.sephora.com/product/barepro-tm-24hr-skin-perfecting-talc-free-matte-powder-foundation-P514907?skuId=2850006"
  }),
  productData({
    code: "FOUNDATION_031",
    category: "Makeup > Face > Foundation",
    brand: "REFY",
    name: "Skin Base Hydrating Gel Skin Tint with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2938355"),
    link: "https://www.sephora.com/product/skin-base-hydrating-gel-skin-tint-with-hyaluronic-acid-P520680?skuId=2938355"
  }),
  productData({
    code: "FOUNDATION_032",
    category: "Makeup > Face > Foundation",
    brand: "Hourglass",
    name: "Illusion Luminous Glow Foundation SPF 30",
    type: "Foundation",
    image: skuImage("2920247"),
    link: "https://www.sephora.com/product/illusion-luminous-glow-foundation-spf-30-P520378?skuId=2920247"
  }),
  productData({
    code: "FOUNDATION_033",
    category: "Makeup > Face > Foundation",
    brand: "Saie",
    name: "Slip Tint – Lightweight Tinted Moisturizer with Mineral Zinc SPF 35 and Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2497485"),
    link: "https://www.sephora.com/product/saie-slip-tint-dewy-tinted-moisturizer-spf-35-sunscreen-P468210?skuId=2497485"
  }),
  productData({
    code: "FOUNDATION_034",
    category: "Makeup > Face > Foundation",
    brand: "Too Faced",
    name: "Born This Way Undetectable Medium-To-Full Coverage Foundation",
    type: "Foundation",
    image: skuImage("2885853"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-natural-finish-foundation-P517843?skuId=2885853"
  }),
  productData({
    code: "FOUNDATION_035",
    category: "Makeup > Face > Foundation",
    brand: "Bobbi Brown",
    name: "Weightless Skin Oil-Controlling Foundation SPF 15 with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2798403"),
    link: "https://www.sephora.com/product/weightless-skin-oil-controlling-foundation-spf-15-with-hyaluronic-acid-P512885?skuId=2798403"
  }),
  productData({
    code: "FOUNDATION_036",
    category: "Makeup > Face > Foundation",
    brand: "Charlotte Tilbury",
    name: "Unreal Skin Sheer Glow Tint Hydrating Foundation Stick",
    type: "Foundation",
    image: skuImage("2765758"),
    link: "https://www.sephora.com/product/charlotte-tilbury-unreal-skin-sheer-glow-tint-hydrating-foundation-stick-P511699?skuId=2765758"
  }),
  productData({
    code: "FOUNDATION_037",
    category: "Makeup > Face > Foundation",
    brand: "MAC Cosmetics",
    name: "Studio Fix Powder Plus Foundation with 24HR Oil Control + Blur-Matte Finish",
    type: "Foundation",
    image: skuImage("2862381"),
    link: "https://www.sephora.com/product/studio-fix-powder-plus-foundation-24hr-oil-control-blur-matte-finish-12hr-buildable-coverage-P516457?skuId=2862381"
  }),
  productData({
    code: "FOUNDATION_038",
    category: "Makeup > Face > Foundation",
    brand: "MERIT",
    name: "The Uniform™ Tinted Mineral Sunscreen Broad Spectrum SPF 45",
    type: "Foundation",
    image: skuImage("2971281"),
    link: "https://www.sephora.com/product/merit-the-uniform-tinted-mineral-spf-45-P516692?skuId=2971281"
  }),
  productData({
    code: "FOUNDATION_039",
    category: "Makeup > Face > Foundation",
    brand: "PATRICK TA",
    name: "Major Skin Hydra-Luxe Luminous Skin Perfecting Foundation For Natural Glow",
    type: "Foundation",
    image: skuImage("2793578"),
    link: "https://www.sephora.com/product/patrick-ta-major-skin-hydra-luxe-luminous-skin-perfecting-foundation-for-natural-glow-P513075?skuId=2793578"
  }),
  productData({
    code: "FOUNDATION_040",
    category: "Makeup > Face > Foundation",
    brand: "MAC Cosmetics",
    name: "Studio Fix Fluid SPF 15 24HR Buildable Soft-Matte Foundation + Oil Control",
    type: "Foundation",
    image: skuImage("2779098"),
    link: "https://www.sephora.com/product/mac-cosmetics-studio-fix-fluid-spf-15-P511153?skuId=2779098"
  }),
  productData({
    code: "FOUNDATION_041",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Hydra Glow Hydrating Foundation with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2738425"),
    link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-hydra-glow-skincare-foundation-with-hyaluronic-acid-P510064?skuId=2738425"
  }),
  productData({
    code: "FOUNDATION_042",
    category: "Makeup > Face > Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
    type: "Foundation",
    image: skuImage("2840676"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-cream-spf-50-P411885?skuId=2840676"
  }),
  productData({
    code: "FOUNDATION_043",
    category: "Makeup > Face > Foundation",
    brand: "Yves Saint Laurent",
    name: "All Hours Luminous Natural Matte Foundation 24H Longwear SPF 30 with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2598225"),
    link: "https://www.sephora.com/product/all-hours-full-coverage-matte-foundation-P421456?skuId=2598225"
  }),
  productData({
    code: "FOUNDATION_044",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Matte Velvet Blurring Powder Foundation",
    type: "Foundation",
    image: skuImage("2646685"),
    link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-matte-velvet-powder-foundation-P504432?skuId=2646685"
  }),
  productData({
    code: "FOUNDATION_045",
    category: "Makeup > Face > Foundation",
    brand: "LAWLESS",
    name: "Forget The Filler Skin-Plumping Line-Smoothing Foundation",
    type: "Foundation",
    image: skuImage("2840338"),
    link: "https://www.sephora.com/product/forget-filler-foundation-P514903?skuId=2840338"
  }),
  productData({
    code: "FOUNDATION_046",
    category: "Makeup > Face > Foundation",
    brand: "tarte",
    name: "face tape foundation™",
    type: "Foundation",
    image: skuImage("2977437"),
    link: "https://www.sephora.com/product/face-tape-foundation-P522249?skuId=2977437"
  }),
  productData({
    code: "FOUNDATION_047",
    category: "Makeup > Face > Foundation",
    brand: "LYS Beauty",
    name: "Triple Fix Blurring and Hydrating Skin Tint Foundation Stick",
    type: "Foundation",
    image: skuImage("2823011"),
    link: "https://www.sephora.com/product/lys-beauty-triple-fix-blurring-hydrating-skin-tint-foundation-stick-P513483?skuId=2823011"
  }),
  productData({
    code: "FOUNDATION_048",
    category: "Makeup > Face > Foundation",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin® Luminous Hydrating Foundation",
    type: "Foundation",
    image: skuImage("2835213"),
    link: "https://www.sephora.com/product/makeup-by-mario-surreal-foundation-P503679?skuId=2835213"
  }),
  productData({
    code: "FOUNDATION_049",
    category: "Makeup > Face > Foundation",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up the Base Full Beat Waterproof Liquid Foundation",
    type: "Foundation",
    image: skuImage("2801140"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-full-beat-liquid-foundation-P513724?skuId=2801140"
  }),
  productData({
    code: "FOUNDATION_050",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt’r Soft Matte Longwear Liquid Foundation",
    type: "Foundation",
    image: skuImage("1925478"),
    link: "https://www.sephora.com/product/pro-filtr-soft-matte-longwear-foundation-P87985432?skuId=1925478"
  }),
  productData({
    code: "FOUNDATION_051",
    category: "Makeup > Face > Foundation",
    brand: "bareMinerals",
    name: "Original Loose Talc-Free Powder Mineral Foundation SPF 15​",
    type: "Foundation",
    image: skuImage("1922541"),
    link: "https://www.sephora.com/product/bareminerals-original-foundation-broad-spectrum-spf-15-P61003?skuId=1922541"
  }),
  productData({
    code: "FOUNDATION_052",
    category: "Makeup > Face > Foundation",
    brand: "Givenchy",
    name: "Prisme Libre Glow Serum Blurring Foundation with Natural Finish",
    type: "Foundation",
    image: skuImage("2834034"),
    link: "https://www.sephora.com/product/givenchy-prisme-libre-glow-serum-blurring-foundation-with-natural-finish-P514905?skuId=2834034"
  }),
  productData({
    code: "FOUNDATION_053",
    category: "Makeup > Face > Foundation",
    brand: "Kosas",
    name: "Revealer Skin-Improving Foundation SPF 25 with Hyaluronic Acid and Niacinamide",
    type: "Foundation",
    image: skuImage("2512291"),
    link: "https://www.sephora.com/product/kosas-revealer-skin-improving-foundation-spf25-with-hyaluronic-acid-niacinamide-P481396?skuId=2512291"
  }),
  productData({
    code: "FOUNDATION_054",
    category: "Makeup > Face > Foundation",
    brand: "SEPHORA COLLECTION",
    name: "Microsmooth Multi-Tasking Baked Face Powder Foundation",
    type: "Foundation",
    image: skuImage("2730729"),
    link: "https://www.sephora.com/product/sephora-collection-microsmooth-multi-tasking-baked-face-powder-P474388?skuId=2730729"
  }),
  productData({
    code: "FOUNDATION_055",
    category: "Makeup > Face > Foundation",
    brand: "ILIA",
    name: "Skin Rewind Blurring Foundation and Concealer Complexion Stick",
    type: "Foundation",
    image: skuImage("2739589"),
    link: "https://www.sephora.com/product/ilia-skin-rewind-complexion-stick-P509720?skuId=2739589"
  }),
  productData({
    code: "FOUNDATION_056",
    category: "Makeup > Face > Foundation",
    brand: "Anastasia Beverly Hills",
    name: "Impeccable Blurring Second-Skin Matte Foundation",
    type: "Foundation",
    image: skuImage("2934693"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-impeccable-blurring-second-skin-matte-foundation-P515098?skuId=2934693"
  }),
  productData({
    code: "FOUNDATION_057",
    category: "Makeup > Face > Foundation",
    brand: "Lancôme",
    name: "Teint Idole Shape Stick Blurring Multi-Use Foundation",
    type: "Foundation",
    image: skuImage("2975647"),
    link: "https://www.sephora.com/product/teint-idole-shape-stick-blurring-multi-use-foundation-P522515?skuId=2975647"
  }),
  productData({
    code: "FOUNDATION_058",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Tinted Blur Balm Skin Tint with Peptides",
    type: "Foundation",
    image: skuImage("2938991"),
    link: "https://www.sephora.com/product/tinted-blur-balm-skin-tint-with-peptides-P520503?skuId=2938991"
  }),
  productData({
    code: "FOUNDATION_059",
    category: "Makeup > Face > Foundation",
    brand: "Laura Geller",
    name: "Double Take Full Coverage Baked Powder Foundation with Vitamin E",
    type: "Foundation",
    image: skuImage("2922409"),
    link: "https://www.sephora.com/product/double-take-foundation-baked-full-coverage-foundation-P519541?skuId=2922409"
  }),
  productData({
    code: "FOUNDATION_060",
    category: "Makeup > Face > Foundation",
    brand: "Charlotte Tilbury",
    name: "Beautiful Skin Medium Coverage Liquid Foundation with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2551398"),
    link: "https://www.sephora.com/product/charlotte-tilbury-beautiful-skin-medium-coverage-liquid-foundation-with-hyaluronic-acid-P480286?skuId=2551398"
  }),
  productData({
    code: "FOUNDATION_061",
    category: "Makeup > Face > Foundation",
    brand: "SEPHORA COLLECTION",
    name: "Reveal The Real 12HR Soft Radiant Skin Tint",
    type: "Foundation",
    image: skuImage("2760726"),
    link: "https://www.sephora.com/product/reveal-real-soft-radiant-skin-tint-P511752?skuId=2760726"
  }),
  productData({
    code: "FOUNDATION_062",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Balancing & Perfecting Natural Finish Longwear Foundation",
    type: "Foundation",
    image: skuImage("2972883"),
    link: "https://www.sephora.com/product/hd-skin-perfecting-foundation-P522269?skuId=2972883"
  }),
  productData({
    code: "FOUNDATION_063",
    category: "Makeup > Face > Foundation",
    brand: "Hourglass",
    name: "Vanish™ Seamless Finish Foundation Stick",
    type: "Foundation",
    image: skuImage("1827252"),
    link: "https://www.sephora.com/product/vanish-seamless-finish-foundation-stick-P410532?skuId=1827252"
  }),
  productData({
    code: "FOUNDATION_064",
    category: "Makeup > Face > Foundation",
    brand: "Laura Geller",
    name: "Balance and Brighten Color Correcting Baked Powder Foundation, Full Size + Travel Mini Set",
    type: "Foundation",
    image: skuImage("2959955"),
    link: "https://www.sephora.com/product/laura-geller-baked-balance-n-brighten-color-correcting-foundation-full-size-deluxe-mini-bundle-P521358?skuId=2959955"
  }),
  productData({
    code: "FOUNDATION_065",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Mini Long-Wear Tinted Moisturizer Natural Dewy Skin Tint SPF 30 with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2838324"),
    link: "https://www.sephora.com/product/mini-long-wear-tinted-moisturizer-natural-dewy-spf-30-with-hyaluronic-acid-P514880?skuId=2838324"
  }),
  productData({
    code: "FOUNDATION_066",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Long-Lasting Waterproof Natural Matte Foundation",
    type: "Foundation",
    image: skuImage("2513935"),
    link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-foundation-P479712?skuId=2513935"
  }),
  productData({
    code: "FOUNDATION_067",
    category: "Makeup > Face > Foundation",
    brand: "Urban Decay",
    name: "Face Bond Self Setting Waterproof Foundation",
    type: "Foundation",
    image: skuImage("2741858"),
    link: "https://www.sephora.com/product/urban-decay-face-bond-self-setting-waterproof-foundation-P509419?skuId=2741858"
  }),
  productData({
    code: "FOUNDATION_068",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Super Boost Lightweight Moisturizing Skin Tint with Hyaluronic and Polyglutamic Acids",
    type: "Foundation",
    image: skuImage("2844538"),
    link: "https://www.sephora.com/product/super-boost-skin-tint-P515080?skuId=2844538"
  }),
  productData({
    code: "FOUNDATION_069",
    category: "Makeup > Face > Foundation",
    brand: "NARS",
    name: "Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30",
    type: "Foundation",
    image: skuImage("1396399"),
    link: "https://www.sephora.com/product/pure-radiant-tinted-moisturizer-spf-30-pa-P302923?skuId=1396399"
  }),
  productData({
    code: "FOUNDATION_070",
    category: "Makeup > Face > Foundation",
    brand: "Summer Fridays",
    name: "Sheer Skin Tint with Hyaluronic Acid + Squalane",
    type: "Foundation",
    image: skuImage("2536183"),
    link: "https://www.sephora.com/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183"
  }),
  productData({
    code: "FOUNDATION_071",
    category: "Makeup > Face > Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
    type: "Foundation",
    image: skuImage("2966208"),
    link: "https://www.sephora.com/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010?skuId=2966208"
  }),
  productData({
    code: "FOUNDATION_072",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Real Flawless Weightless Perfecting Waterproof Foundation",
    type: "Foundation",
    image: skuImage("2642742"),
    link: "https://www.sephora.com/product/laura-mercier-real-flawless-weightless-perfecting-foundation-P504012?skuId=2642742"
  }),
  productData({
    code: "FOUNDATION_073",
    category: "Makeup > Face > Foundation",
    brand: "Saie",
    name: "Glowy Super Skin Tint Foundation with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2637387"),
    link: "https://www.sephora.com/product/saie-glowy-super-skin-lightweight-hydrobounce-serum-foundation-P504907?skuId=2637387"
  }),
  productData({
    code: "FOUNDATION_074",
    category: "Makeup > Face > Foundation",
    brand: "Armani Beauty",
    name: "Golden Hour 24HR Lightweight Skin Tint with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2881332"),
    link: "https://www.sephora.com/product/golden-hour-24hr-lightweight-skin-tint-with-hyaluronic-acid-P517007?skuId=2881332"
  }),
  productData({
    code: "FOUNDATION_075",
    category: "Makeup > Face > Foundation",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Sublime Perfection Weightless Foundation",
    type: "Foundation",
    image: skuImage("2257111"),
    link: "https://www.sephora.com/product/skin-fetish-sublime-perfection-foundation-P447519?skuId=2257111"
  }),
  productData({
    code: "FOUNDATION_076",
    category: "Makeup > Face > Foundation",
    brand: "LIXR Beauty",
    name: "Multi-Use Cream-to-Powder Concealer & Foundation Stick",
    type: "Foundation",
    image: skuImage("2955284"),
    link: "https://www.sephora.com/product/lixr-complexion-stick-P521062?skuId=2955284"
  }),
  productData({
    code: "FOUNDATION_077",
    category: "Makeup > Face > Foundation",
    brand: "CLINIQUE",
    name: "Even Better™ Makeup Broad Spectrum SPF 15 Foundation",
    type: "Foundation",
    image: skuImage("1160381"),
    link: "https://www.sephora.com/product/even-better-makeup-spf-15-P234967?skuId=1160381"
  }),
  productData({
    code: "FOUNDATION_078",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Long-Wear Tinted Moisturizer Natural Dewy Skin Tint SPF 30 with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2844256"),
    link: "https://www.sephora.com/product/long-wear-tinted-moisturizer-natural-dewy-spf-30-with-hyaluronic-acid-P514887?skuId=2844256"
  }),
  productData({
    code: "FOUNDATION_079",
    category: "Makeup > Face > Foundation",
    brand: "Laura Geller",
    name: "Balance and Brighten Color Correcting Baked Powder Foundation + Kabuki Brush Set",
    type: "Foundation",
    image: skuImage("2921963"),
    link: "https://www.sephora.com/product/baked-balance-n-brighten-color-correcting-foundation-brush-bundle-P519537?skuId=2921963"
  }),
  productData({
    code: "FOUNDATION_080",
    category: "Makeup > Face > Foundation",
    brand: "Gucci",
    name: "24 Hour Full Coverage Luminous Matte Finish Foundation",
    type: "Foundation",
    image: skuImage("2666691"),
    link: "https://www.sephora.com/product/gucci-fluide-de-beaute-fini-naturel-natural-finish-fluid-foundation-P467622?skuId=2666691"
  }),
  productData({
    code: "FOUNDATION_081",
    category: "Makeup > Face > Foundation",
    brand: "Westman Atelier",
    name: "Vital Skin Medium Coverage Multi-Use Foundation Stick",
    type: "Foundation",
    image: skuImage("2503092"),
    link: "https://www.sephora.com/product/westman-atelier-vital-skin-foundation-stick-P468429?skuId=2503092"
  }),
  productData({
    code: "FOUNDATION_082",
    category: "Makeup > Face > Foundation",
    brand: "ILIA",
    name: "True Skin Medium Coverage Serum Foundation with Niacinamide",
    type: "Foundation",
    image: skuImage("2527729"),
    link: "https://www.sephora.com/product/true-skin-serum-foundation-P429548?skuId=2527729"
  }),
  productData({
    code: "FOUNDATION_083",
    category: "Makeup > Face > Foundation",
    brand: "BASMA",
    name: "The Foundation Stick for Hydrating, Buildable Coverage and Natural Finish",
    type: "Foundation",
    image: skuImage("2681427"),
    link: "https://www.sephora.com/product/the-foundation-stick-P505428?skuId=2681427"
  }),
  productData({
    code: "FOUNDATION_084",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Mini HD Skin Hydra Glow Skincare Foundation with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2738177"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-hd-skin-hydra-glow-skincare-foundation-with-hyaluronic-acid-P510065?skuId=2738177"
  }),
  productData({
    code: "FOUNDATION_085",
    category: "Makeup > Face > Foundation",
    brand: "Sarah Creal",
    name: "Face Flex Concealer & Complexion Enhancer with Caffeine",
    type: "Foundation",
    image: skuImage("2888675"),
    link: "https://www.sephora.com/product/sarah-creal-face-flex-concealer-complexion-enhancer-with-caffeine-P513274?skuId=2888675"
  }),
  productData({
    code: "FOUNDATION_086",
    category: "Makeup > Face > Foundation",
    brand: "Estée Lauder",
    name: "Futurist Hydra Rescue Moisturizing Foundation SPF 45 with Vitamin E",
    type: "Foundation",
    image: skuImage("2324481"),
    link: "https://www.sephora.com/product/estee-lauder-futurist-hydrating-rescue-moisturizing-foundation-spf-45-P454063?skuId=2324481"
  }),
  productData({
    code: "FOUNDATION_087",
    category: "Makeup > Face > Foundation",
    brand: "ROSE INC",
    name: "Softlight Skin-Smoothing Hydrating Non-Comedogenic Foundation",
    type: "Foundation",
    image: skuImage("2698066"),
    link: "https://www.sephora.com/product/softlight-skin-smoothing-hydrating-non-comedogenic-foundation-P507996?skuId=2698066"
  }),
  productData({
    code: "FOUNDATION_088",
    category: "Makeup > Face > Foundation",
    brand: "PATRICK TA",
    name: "Major Skin Crème Foundation and Finishing Powder Duo",
    type: "Foundation",
    image: skuImage("2607364"),
    link: "https://www.sephora.com/product/major-skin-creme-powder-foundation-duo-P502039?skuId=2607364"
  }),
  productData({
    code: "FOUNDATION_089",
    category: "Makeup > Face > Foundation",
    brand: "Hourglass",
    name: "Ambient Soft Glow Foundation",
    type: "Foundation",
    image: skuImage("2586741"),
    link: "https://www.sephora.com/product/ambient-soft-glow-foundation-P501154?skuId=2586741"
  }),
  productData({
    code: "FOUNDATION_090",
    category: "Makeup > Face > Foundation",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Foundation + Concealer",
    type: "Foundation",
    image: skuImage("1744697"),
    link: "https://www.sephora.com/product/beyond-perfecting-foundation-concealer-P393325?skuId=1744697"
  }),
  productData({
    code: "FOUNDATION_091",
    category: "Makeup > Face > Foundation",
    brand: "U Beauty",
    name: "The SUPER Tinted Hydrator Tinted Moisturizer Vitamin E + Antioxidants",
    type: "Foundation",
    image: skuImage("2950319"),
    link: "https://www.sephora.com/product/u-beauty-the-super-tinted-hydrator-tinted-moisturizer-vitamin-e-antioxidants-P521053?skuId=2950319"
  }),
  productData({
    code: "FOUNDATION_092",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Forever Natural Velvet Matte Compact Foundation",
    type: "Foundation",
    image: skuImage("2595080"),
    link: "https://www.sephora.com/product/diorskin-forever-perfect-matte-powder-foundation-P297404?skuId=2595080"
  }),
  productData({
    code: "FOUNDATION_093",
    category: "Makeup > Face > Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Cream Natural Matte Foundation with SPF 40",
    type: "Foundation",
    image: skuImage("2773695"),
    link: "https://www.sephora.com/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447?skuId=2773695"
  }),
  productData({
    code: "FOUNDATION_094",
    category: "Makeup > Face > Foundation",
    brand: "Range Beauty",
    name: "True Intentions Skin-Soothing Hydrating Foundation",
    type: "Foundation",
    image: skuImage("2785921"),
    link: "https://www.sephora.com/product/range-beauty-true-intentions-skin-soothing-hydrating-foundation-P513540?skuId=2785921"
  }),
  productData({
    code: "FOUNDATION_095",
    category: "Makeup > Face > Foundation",
    brand: "Lancôme",
    name: "Teint Idole Ultra Wear Care & Glow Foundation​ with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2589091"),
    link: "https://www.sephora.com/product/teint-idole-ultra-wear-care-glow-foundation-P500706?skuId=2589091"
  }),
  productData({
    code: "FOUNDATION_096",
    category: "Makeup > Face > Foundation",
    brand: "Glossier",
    name: "Stretch Fluid Foundation for Buildable Coverage",
    type: "Foundation",
    image: skuImage("2702231"),
    link: "https://www.sephora.com/product/stretch-fluid-skincare-foundation-P507806?skuId=2702231"
  }),
  productData({
    code: "FOUNDATION_097",
    category: "Makeup > Face > Foundation",
    brand: "tarte",
    name: "Amazonian clay 16-hour full coverage soft matte foundation",
    type: "Foundation",
    image: skuImage("2476083"),
    link: "https://www.sephora.com/product/tarte-amazonian-clay-16-hour-full-coverage-foundation-P473821?skuId=2476083"
  }),
  productData({
    code: "FOUNDATION_098",
    category: "Makeup > Face > Foundation",
    brand: "Lancôme",
    name: "DUAL FINISH – Multi-tasking Longwear Powder Foundation",
    type: "Foundation",
    image: skuImage("135558"),
    link: "https://www.sephora.com/product/dual-finish-multi-tasking-longwear-powder-foundation-P54419?skuId=135558"
  }),
  productData({
    code: "FOUNDATION_099",
    category: "Makeup > Face > Foundation",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Tinted Moisturizer Broad Spectrum SPF 20 Sunscreen",
    type: "Foundation",
    image: skuImage("2557072"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-tinted-moisturizer-broad-spectrum-spf-20-sunscreen-P482729?skuId=2557072"
  }),
  productData({
    code: "FOUNDATION_100",
    category: "Makeup > Face > Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Serum Foundation",
    type: "Foundation",
    image: skuImage("2574895"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-serum-foundation-P481694?skuId=2574895"
  }),
  productData({
    code: "FOUNDATION_101",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Tinted Moisturizer Oil Free Blurred Matte Skin Tint SPF 30",
    type: "Foundation",
    image: skuImage("2854479"),
    link: "https://www.sephora.com/product/tinted-moisturizer-oil-free-blurred-matte-spf-30-P515711?skuId=2854479"
  }),
  productData({
    code: "FOUNDATION_102",
    category: "Makeup > Face > Foundation",
    brand: "Anastasia Beverly Hills",
    name: "Beauty Balm Serum Boosted Skin Tint",
    type: "Foundation",
    image: skuImage("2752848"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-beauty-balm-skin-serum-boosted-skin-tint-P511190?skuId=2752848"
  }),
  productData({
    code: "FOUNDATION_103",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt'r Hydrating Longwear Foundation",
    type: "Foundation",
    image: skuImage("2268415"),
    link: "https://www.sephora.com/product/pro-filt-r-hydrating-longwear-foundation-P448702?skuId=2268415"
  }),
  productData({
    code: "FOUNDATION_104",
    category: "Makeup > Face > Foundation",
    brand: "Gucci",
    name: "Glow Skin Tinted Moisturizer with Hyaluronic Acid & Bakuchiol",
    type: "Foundation",
    image: skuImage("2834513"),
    link: "https://www.sephora.com/product/glow-skin-tinted-moisturizer-with-hyaluronic-acid-bakuchiol-P517009?skuId=2834513"
  }),
  productData({
    code: "FOUNDATION_105",
    category: "Makeup > Face > Foundation",
    brand: "Westman Atelier",
    name: "Vital Skincare Complexion Drops Dewy Skin Tint",
    type: "Foundation",
    image: skuImage("2597888"),
    link: "https://www.sephora.com/product/vital-skincare-dew-foundation-drops-P501795?skuId=2597888"
  }),
  productData({
    code: "FOUNDATION_106",
    category: "Makeup > Face > Foundation",
    brand: "tarte",
    name: "BB blur natural matte tinted moisturizer Broad Spectrum SPF 30 Sunscreen",
    type: "Foundation",
    image: skuImage("2413045"),
    link: "https://www.sephora.com/product/bb-tinted-treatment-12-hour-primer-broad-spectrum-spf-30-sunscreen-P377542?skuId=2413045"
  }),
  productData({
    code: "FOUNDATION_107",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Hydra Vizor Huez Tinted Moisturizer Broad Spectrum Mineral Spf 30 Sunscreen",
    type: "Foundation",
    image: skuImage("2766095"),
    link: "https://www.sephora.com/product/fenty-skin-rihanna-hydra-vizor-huez-tinted-moisturizer-broad-spectrum-mineral-spf-30-sunscreen-P511541?skuId=2766095"
  }),
  productData({
    code: "FOUNDATION_108",
    category: "Makeup > Face > Foundation",
    brand: "Westman Atelier",
    name: "Vital Skincare Brightening Concealer With Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2797728"),
    link: "https://www.sephora.com/product/westman-atelier-vital-skincare-brightening-concealer-with-hyaluronic-acid-P513533?skuId=2797728"
  }),
  productData({
    code: "FOUNDATION_109",
    category: "Makeup > Face > Foundation",
    brand: "tarte",
    name: "mini Amazonian clay 16-hour full coverage soft matte foundation",
    type: "Foundation",
    image: skuImage("2476190"),
    link: "https://www.sephora.com/product/tarte-mini-amazonian-clay-16-hour-full-coverage-foundation-P473843?skuId=2476190"
  }),
  productData({
    code: "FOUNDATION_110",
    category: "Makeup > Face > Foundation",
    brand: "Ami Colé",
    name: "Skin-Enhancing Tinted Moisturizer",
    type: "Foundation",
    image: skuImage("2631679"),
    link: "https://www.sephora.com/product/skin-enhancing-tinted-moisturizer-P503754?skuId=2631679"
  }),
  productData({
    code: "FOUNDATION_111",
    category: "Makeup > Face > Foundation",
    brand: "Benefit Cosmetics",
    name: "The POREfessional Smoothing & Blurring Foundation with Niacinamide",
    type: "Foundation",
    image: skuImage("2896447"),
    link: "https://www.sephora.com/product/the-porefessional-smoothing-blurring-foundation-P517143?skuId=2896447"
  }),
  productData({
    code: "FOUNDATION_112",
    category: "Makeup > Face > Foundation",
    brand: "IT Cosmetics",
    name: "CC+ Cream Illumination with SPF 50+",
    type: "Foundation",
    image: skuImage("1869015"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-illumination-cream-spf-50-P411884?skuId=1869015"
  }),
  productData({
    code: "FOUNDATION_113",
    category: "Makeup > Face > Foundation",
    brand: "NUDESTIX",
    name: "Tinted Blur Foundation Stick",
    type: "Foundation",
    image: skuImage("2079457"),
    link: "https://www.sephora.com/product/nudies-tinted-blur-stick-P431758?skuId=2079457"
  }),
  productData({
    code: "FOUNDATION_114",
    category: "Makeup > Face > Foundation",
    brand: "CLINIQUE",
    name: "Even Better Clinical™ Serum Foundation Broad Spectrum SPF 25",
    type: "Foundation",
    image: skuImage("2422566"),
    link: "https://www.sephora.com/product/clinique-even-better-clinical-serum-foundation-broad-spectrum-spf-25-P468639?skuId=2422566"
  }),
  productData({
    code: "FOUNDATION_115",
    category: "Makeup > Face > Foundation",
    brand: "Glossier",
    name: "Perfecting Skin Tint for Dewy Sheer Coverage",
    type: "Foundation",
    image: skuImage("2649085"),
    link: "https://www.sephora.com/product/glossier-perfecting-skin-tint-for-dewy-sheer-coverage-P504782?skuId=2649085"
  }),
  productData({
    code: "FOUNDATION_116",
    category: "Makeup > Face > Foundation",
    brand: "Iris&Romeo",
    name: "Best Skin Days SPF30 Whipped Skin Tint with Vitamin C + Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2745073"),
    link: "https://www.sephora.com/product/best-skin-days-spf30-whipped-tinted-moisturizer-with-vitamin-c-hyaluronic-acid-P509345?skuId=2745073"
  }),
  productData({
    code: "FOUNDATION_117",
    category: "Makeup > Face > Foundation",
    brand: "tarte",
    name: "Amazonian clay 16-hour blurring powder foundation",
    type: "Foundation",
    image: skuImage("2641306"),
    link: "https://www.sephora.com/product/tarte-amazonian-clay-blurring-powder-foundation-P504215?skuId=2641306"
  }),
  productData({
    code: "FOUNDATION_118",
    category: "Makeup > Face > Foundation",
    brand: "LIXR Beauty",
    name: "Skin Shake Bi-Phase Serum Skin Tint with Squalane",
    type: "Foundation",
    image: skuImage("2955334"),
    link: "https://www.sephora.com/product/lixr-skin-shake-bi-phase-serum-roller-P521067?skuId=2955334"
  }),
  productData({
    code: "FOUNDATION_119",
    category: "Makeup > Face > Foundation",
    brand: "Supergoop!",
    name: "Protec(tint) Daily SPF Tint SPF 50 Sunscreen Skin Tint with Ectoin",
    type: "Foundation",
    image: skuImage("2734952"),
    link: "https://www.sephora.com/product/supergoop-protec-tint-daily-spf-tint-spf-50-sunscreen-skin-tint-with-hyaluronic-acid-infused-clay-P510355?skuId=2734952"
  }),
  productData({
    code: "FOUNDATION_120",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Mini Tinted Moisturizer Oil Free Blurred Matte Skin Tint SPF 30",
    type: "Foundation",
    image: skuImage("2854677"),
    link: "https://www.sephora.com/product/mini-tinted-moisturizer-oil-free-blurred-matte-spf-30-P515716?skuId=2854677"
  }),
  productData({
    code: "FOUNDATION_121",
    category: "Makeup > Face > Foundation",
    brand: "Kosas",
    name: "BB Burst Tinted Moisturizer Gel Cream with Copper Peptides",
    type: "Foundation",
    image: skuImage("2737617"),
    link: "https://www.sephora.com/product/kosas-bb-burst-tinted-moisturizer-gel-cream-with-copper-peptides-P510072?skuId=2737617"
  }),
  productData({
    code: "FOUNDATION_122",
    category: "Makeup > Face > Foundation",
    brand: "NUDESTIX",
    name: "Tinted Cover Liquid Foundation",
    type: "Foundation",
    image: skuImage("2661486"),
    link: "https://www.sephora.com/product/nudies-tinted-cover-foundation-P448152?skuId=2661486"
  }),
  productData({
    code: "FOUNDATION_123",
    category: "Makeup > Face > Foundation",
    brand: "MILK MAKEUP",
    name: "Flex Foundation Stick",
    type: "Foundation",
    image: skuImage("2242261"),
    link: "https://www.sephora.com/product/flex-foundation-stick-P448151?skuId=2242261"
  }),
  productData({
    code: "FOUNDATION_124",
    category: "Makeup > Face > Foundation",
    brand: "Fashion Fair",
    name: "SkinFlex Stick Foundation",
    type: "Foundation",
    image: skuImage("2476653"),
    link: "https://www.sephora.com/product/fashion-fair-skinflex-stick-foundation-P476556?skuId=2476653"
  }),
  productData({
    code: "FOUNDATION_125",
    category: "Makeup > Face > Foundation",
    brand: "Dr. Jart+",
    name: "Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
    type: "Foundation",
    image: skuImage("2604494"),
    link: "https://www.sephora.com/product/premium-bb-tinted-moisturizer-with-niacinamide-spf-40-P501005?skuId=2604494"
  }),
  productData({
    code: "FOUNDATION_126",
    category: "Makeup > Face > Foundation",
    brand: "bareMinerals",
    name: "COMPLEXION RESCUE Tinted Moisturizer with Hyaluronic Acid and Mineral SPF 30",
    type: "Foundation",
    image: skuImage("2851749"),
    link: "https://www.sephora.com/product/complexion-rescue-tm-tinted-moisturizer-broad-spectrum-spf-30-P514908?skuId=2851749"
  }),
  productData({
    code: "FOUNDATION_127",
    category: "Makeup > Face > Foundation",
    brand: "Too Faced",
    name: "Born This Way Soft Matte Foundation",
    type: "Foundation",
    image: skuImage("2795599"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-matte-24-hour-foundation-P458586?skuId=2795599"
  }),
  productData({
    code: "FOUNDATION_128",
    category: "Makeup > Face > Foundation",
    brand: "Estée Lauder",
    name: "Futurist Skin Tint Serum Foundation SPF 20 with Glycerin",
    type: "Foundation",
    image: skuImage("2708790"),
    link: "https://www.sephora.com/product/futurist-skin-tint-serum-foundation-spf-20-P508183?skuId=2708790"
  }),
  productData({
    code: "FOUNDATION_129",
    category: "Makeup > Face > Foundation",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Hydrating Skin Tint SPF 15 with Hyaluronic Acid",
    type: "Foundation",
    image: skuImage("2701662"),
    link: "https://www.sephora.com/product/vitamin-enriched-hydrating-skin-tint-spf-15-with-hyaluronic-acid-P506571?skuId=2701662"
  }),
  productData({
    code: "FOUNDATION_130",
    category: "Makeup > Face > Foundation",
    brand: "Fara Homidi",
    name: "Essential Face Compact Refillable Concealer and Foundation",
    type: "Foundation",
    image: skuImage("2790681"),
    link: "https://www.sephora.com/product/fara-homidi-essential-face-compact-refillable-concealer-and-foundation-P511747?skuId=2790681"
  }),
  productData({
    code: "FOUNDATION_131",
    category: "Makeup > Face > Foundation",
    brand: "ROSE INC",
    name: "Skin Enhance Non-Comedogenic Skin Tint Serum Foundation",
    type: "Foundation",
    image: skuImage("2529170"),
    link: "https://www.sephora.com/product/rose-inc-skin-enhance-luminous-skin-tint-serum-foundation-P480345?skuId=2529170"
  }),
  productData({
    code: "FOUNDATION_132",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Stick Blur + Smooth Tint Stick Foundation",
    type: "Foundation",
    image: skuImage("2700805"),
    link: "https://www.sephora.com/product/fenty-eaze-drop-blur-smooth-tint-stick-P507453?skuId=2700805"
  }),
  productData({
    code: "FOUNDATION_133",
    category: "Makeup > Face > Foundation",
    brand: "bareMinerals",
    name: "Original Loose Matte Talc-Free Powder Mineral Foundation SPF 15",
    type: "Foundation",
    image: skuImage("1195296"),
    link: "https://www.sephora.com/product/bareminerals-matte-foundation-broad-spectrum-spf-15-P240604?skuId=1195296"
  }),
  productData({
    code: "FOUNDATION_134",
    category: "Makeup > Face > Foundation",
    brand: "Laura Geller",
    name: "Balance and Glow Luminous Baked Powder Foundation with Vitamin E",
    type: "Foundation",
    image: skuImage("2922011"),
    link: "https://www.sephora.com/product/baked-balance-n-glow-illuminating-foundation-P519539?skuId=2922011"
  }),
  productData({
    code: "FOUNDATION_135",
    category: "Makeup > Face > Foundation",
    brand: "Iconic London",
    name: "Super Smoother Blurring Skin Tint",
    type: "Foundation",
    image: skuImage("2609105"),
    link: "https://www.sephora.com/product/iconic-london-super-smoother-blurring-skin-tint-P502623?skuId=2609105"
  }),
  productData({
    code: "FOUNDATION_136",
    category: "Makeup > Face > Foundation",
    brand: "Urban Decay",
    name: "Hydromaniac Glowy Tinted Hydrator Foundation",
    type: "Foundation",
    image: skuImage("2406668"),
    link: "https://www.sephora.com/product/urban-decay-hydromaniac-glowy-tinted-hydrator-foundation-P467658?skuId=2406668"
  }),
  productData({
    code: "FOUNDATION_137",
    category: "Makeup > Face > Foundation",
    brand: "Fashion Fair",
    name: "Crème to Powder Skin Foundation",
    type: "Foundation",
    image: skuImage("2476794"),
    link: "https://www.sephora.com/product/fashion-fair-creme-to-powder-skin-foundation-P476444?skuId=2476794"
  }),
  productData({
    code: "FOUNDATION_138",
    category: "Makeup > Face > Foundation",
    brand: "CLINIQUE",
    name: "Moisture Surge™ CC Cream Hydrating Color Corrector Broad Spectrum SPF 30",
    type: "Foundation",
    image: skuImage("1509512"),
    link: "https://www.sephora.com/product/moisture-surge-cc-cream-hydrating-colour-corrector-broad-spectrum-spf-30-P378639?skuId=1509512"
  }),
  productData({
    code: "FOUNDATION_139",
    category: "Makeup > Face > Foundation",
    brand: "Laura Mercier",
    name: "Tinted Moisturizer Light Revealer Natural Skin Illuminator Broad Spectrum SPF 25",
    type: "Foundation",
    image: skuImage("2551521"),
    link: "https://www.sephora.com/product/laura-mercier-tinted-moisturizer-light-revealer-spf-25-P479972?skuId=2551521"
  }),
  productData({
    code: "FOUNDATION_140",
    category: "Makeup > Face > Foundation",
    brand: "Danessa Myricks Beauty",
    name: "Vision Cream Cover Adjustable Foundation & Concealer",
    type: "Foundation",
    image: skuImage("2443851"),
    link: "https://www.sephora.com/product/danessa-myricks-vision-cream-cover-2-in-1-foundation-concealer-P469460?skuId=2443851"
  }),
  productData({
    code: "FOUNDATION_141",
    category: "Makeup > Face > Foundation",
    brand: "NARS",
    name: "Soft Matte Complete Foundation",
    type: "Foundation",
    image: skuImage("2374593"),
    link: "https://www.sephora.com/product/nars-soft-matte-complete-foundation-P462720?skuId=2374593"
  }),
  productData({
    code: "FOUNDATION_142",
    category: "Makeup > Face > Foundation",
    brand: "Ami Colé",
    name: "Skin-Enhancing Lightweight & Blurring Foundation Stick",
    type: "Foundation",
    image: skuImage("2752400"),
    link: "https://www.sephora.com/product/ami-cole-skin-enhancing-lightweight-blurring-foundation-stick-P509657?skuId=2752400"
  }),
  productData({
    code: "FOUNDATION_143",
    category: "Makeup > Face > Foundation",
    brand: "DIOR",
    name: "Dreamskin Fresh & Perfect Refillable Face Cushion SPF 50",
    type: "Foundation",
    image: skuImage("2154631"),
    link: "https://www.sephora.com/product/capture-dreamskin-fresh-perfect-cushion-broad-spectrum-spf-50-P435806?skuId=2154631"
  }),
  productData({
    code: "FOUNDATION_144",
    category: "Makeup > Face > Foundation",
    brand: "MAKE UP FOR EVER",
    name: "Matte Velvet Skin Full Coverage Foundation",
    type: "Foundation",
    image: skuImage("2106490"),
    link: "https://www.sephora.com/product/matte-velvet-skin-full-coverage-foundation-P434023?skuId=2106490"
  }),
  productData({
    code: "FOUNDATION_145",
    category: "Makeup > Face > Foundation",
    brand: "Armani Beauty",
    name: "Luminous Silk Natural Glow Blurring Liquid Foundation with 24 Hour Wear",
    type: "Foundation",
    image: skuImage("2926731"),
    link: "https://www.sephora.com/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887?skuId=2926731"
  }),
  productData({
    code: "FOUNDATION_146",
    category: "Makeup > Face > Foundation",
    brand: "Estée Lauder",
    name: "NEW Double Wear Stay-in-Place Lightweight Matte Foundation with 36H Wear",
    type: "Foundation",
    image: skuImage("2937324"),
    link: "https://www.sephora.com/product/double-wear-stay-in-place-lightweight-matte-foundation-with-36-hour-wear-P520286?skuId=2937324"
  }),
  productData({
    code: "FOUNDATION_147",
    category: "Makeup > Face > Foundation",
    brand: "Rare Beauty by Selena Gomez",
    name: "True to Myself Natural Matte Longwear Foundation",
    type: "Foundation",
    image: skuImage("2894020"),
    link: "https://www.sephora.com/product/true-to-myself-natural-matte-longwear-foundation-P521996?skuId=2894020"
  }),
  productData({
    code: "FOUNDATION_148",
    category: "Makeup > Face > Foundation",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Blurring Skin Tint",
    type: "Foundation",
    image: skuImage("2431864"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025?skuId=2431864"
  }),

  // ==================================================
  // Makeup > Face > Setting Sprays & Powder
  // Products: 150
  // ==================================================
  productData({
    code: "SETTING_SPRAY_POWDER_001",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Easy Bake Blurring Loose Baking & Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2947976"),
    link: "https://www.sephora.com/product/easy-bake-loose-baking-setting-powder-P433402?skuId=2947976"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_002",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "On 'Til Dawn Mattifying Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2490696"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-on-til-dawn-setting-spray-P476719?skuId=2490696"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_003",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "Blur It Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2886935"),
    link: "https://www.sephora.com/product/blur-it-loose-setting-powder-P517856?skuId=2886935"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_004",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Powder Melt Glass Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2848992"),
    link: "https://www.sephora.com/product/powder-melt-glass-setting-spray-P516174?skuId=2848992"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_005",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Finish Refillable Blurring & Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2605988"),
    link: "https://www.sephora.com/product/airbrush-flawless-finish-setting-powder-P433526?skuId=2605988"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_006",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "Invisimatte Instant Setting + Blotting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2590131"),
    link: "https://www.sephora.com/product/invisimatte-blotting-powder-P39784685?skuId=2590131"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_007",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini On 'Til Dawn Mattifying Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2490704"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-mini-on-til-dawn-setting-spray-P476718?skuId=2490704"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_008",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Hydrating & Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2368439"),
    link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147?skuId=2368439"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_009",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "All Day Makeup Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2408011"),
    link: "https://www.sephora.com/product/sephora-collection-makeup-setting-spray-P474100?skuId=2408011"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_010",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Mini Easy Bake Loose Baking & Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2934230"),
    link: "https://www.sephora.com/product/huda-beauty-mini-easy-bake-loose-baking-setting-powder-P471242?skuId=2934230"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_011",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Mini Airbrush Flawless Hydrating & Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2368447"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-airbrush-flawless-setting-spray-P461148?skuId=2368447"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_012",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini Ultimate Blurring Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2396265"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-mini-ultimate-blurring-setting-powder-P466143?skuId=2396265"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_013",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Easy Bake Airbrush Matte Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2925758"),
    link: "https://www.sephora.com/product/easy-bake-airbrush-matte-pressed-setting-powder-P520357?skuId=2925758"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_014",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Translucent Loose Longwear Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("870618"),
    link: "https://www.sephora.com/product/translucent-loose-setting-powder-P109908?skuId=870618"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_015",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Mini Airbrush Flawless Finish Refillable Blurring & Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2407344"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-airbrush-flawless-finish-setting-powder-P467754?skuId=2407344"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_016",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Tatcha",
    name: "Luminous Dewy Skin Mist 2-in-1 Hydrator & Finishing Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("1742337"),
    link: "https://www.sephora.com/product/luminous-dewy-skin-mist-P399623?skuId=1742337"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_017",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Ultimate Blurring Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2656304"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-ultimate-blurring-setting-powder-P466144?skuId=2656304"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_018",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Saie",
    name: "CitySet™ Ultra-Fine Mist Setting Spray with 16 Hour Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2938280"),
    link: "https://www.sephora.com/product/cityset-lightweight-setting-spray-P520037?skuId=2938280"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_019",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "You Mist Makeup-Extending Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2847739"),
    link: "https://www.sephora.com/product/prep-set-setting-spray-P514731?skuId=2847739"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_020",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "All Nighter Waterproof Natural Finish Setting Spray with 24HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2891414"),
    link: "https://www.sephora.com/product/all-nighter-setting-spray-P518812?skuId=2891414"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_021",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin® Talc-Free Soft Blur Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2795912"),
    link: "https://www.sephora.com/product/makeup-by-mario-soft-blur-setting-powder-P512865?skuId=2795912"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_022",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Prada",
    name: "Reset Rebalancing Refillable Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2791218"),
    link: "https://www.sephora.com/product/prada-beauty-reset-rebalancing-setting-powder-P513094?skuId=2791218"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_023",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Cloud Set Baked Setting & Smoothing Talc-Free Vegan Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2414373"),
    link: "https://www.sephora.com/product/kosas-cloud-set-baked-setting-smoothing-talc-free-vegan-powder-P468685?skuId=2414373"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_024",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Easy Bake Loose Powder Brightening + Correcting Duo",
    type: "Setting Sprays & Powder",
    image: skuImage("2904894"),
    link: "https://www.sephora.com/product/huda-beauty-easy-bake-duo-P518602?skuId=2904894"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_025",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "DIOR",
    name: "Forever Nude Matte and Radiant Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2865723"),
    link: "https://www.sephora.com/product/dior-forever-blurring-setting-powder-P517566?skuId=2865723"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_026",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Rare Beauty by Selena Gomez",
    name: "True to Myself Tinted Pressed Talc-Free Finishing Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2893444"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-true-to-myself-tinted-pressed-finishing-powder-P512330?skuId=2893444"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_027",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "tarte",
    name: "creaseless SPF 30 mineral powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2982510"),
    link: "https://www.sephora.com/product/creaseless-spf-30-mineral-powder-P522417?skuId=2982510"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_028",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "Set it Down Superfine Blurring Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2865772"),
    link: "https://www.sephora.com/product/prep-set-loose-setting-powder-P519277?skuId=2865772"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_029",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Jumbo Airbrush Flawless Hydrating & Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2670164"),
    link: "https://www.sephora.com/product/jumbo-airbrush-flawless-setting-spray-P506903?skuId=2670164"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_030",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Secret Brightening Color Correcting Longwear Under Eye Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2878221"),
    link: "https://www.sephora.com/product/secret-brightening-powder-P109911?skuId=2878221"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_031",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKEUP BY MARIO",
    name: "Mini SurrealSkin® Waterproof Setting Spray with 16HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2967867"),
    link: "https://www.sephora.com/product/mini-surrealskin-16hr-soft-setting-spray-P522451?skuId=2967867"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_032",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Ultra-Blur Talc-Free Longwearing Translucent Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2949808"),
    link: "https://www.sephora.com/product/ultra-blur-translucent-loose-setting-powder-P500622?skuId=2949808"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_033",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Veil™ Translucent Setting Powder - Talc Free",
    type: "Setting Sprays & Powder",
    image: skuImage("2691046"),
    link: "https://www.sephora.com/product/veil-translucent-setting-powder-P430240?skuId=2691046"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_034",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Givenchy",
    name: "Prisme Libre Blurring & Color-Correcting Matte Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2864841"),
    link: "https://www.sephora.com/product/prisme-libre-blurring-color-correcting-pressed-powder-P515776?skuId=2864841"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_035",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Bouclé Silk Airbrushed Talc-Free Finishing Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2893808"),
    link: "https://www.sephora.com/product/boucle-silk-airbrushed-talc-free-finishing-powder-P517298?skuId=2893808"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_036",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKEUP BY MARIO",
    name: "SurrealSkin® Waterproof Setting Spray with 16HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2795938"),
    link: "https://www.sephora.com/product/makeup-by-mario-setting-spray-P512899?skuId=2795938"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_037",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Easy Bake Blurring Setting Spray with 16-Hour Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2870574"),
    link: "https://www.sephora.com/product/huda-beauty-easy-bake-blurring-setting-spray-with-16-hour-wear-P515553?skuId=2870574"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_038",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Matte Blurring & Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2891372"),
    link: "https://www.sephora.com/product/airbrush-flawless-matte-blurring-waterproof-setting-spray-P516899?skuId=2891372"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_039",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "LAWLESS",
    name: "Skin-Smoothing Talc-Free Perfecting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2894939"),
    link: "https://www.sephora.com/product/lawless-skin-smoothing-talc-free-perfecting-powder-P504893?skuId=2894939"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_040",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Yves Saint Laurent",
    name: "YSL All Hours Hyper Blur Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2905594"),
    link: "https://www.sephora.com/product/ysl-all-hours-hyper-blur-loose-setting-powder-P515780?skuId=2905594"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_041",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Liquid Blurring Balm Mattifying Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2892396"),
    link: "https://www.sephora.com/product/yummy-skin-liquid-blurring-balm-mattifying-setting-spray-P516894?skuId=2892396"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_042",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Givenchy",
    name: "Mini Prisme Libre Illuminating & Color Correcting Loose Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2788545"),
    link: "https://www.sephora.com/product/prisme-libre-travel-mat-finish-enhanced-radiance-loose-powder-P416205?skuId=2788545"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_043",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Mini Cloud Set Baked Setting & Smoothing Talc-Free Vegan Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2936011"),
    link: "https://www.sephora.com/product/mini-cloud-set-baked-setting-smoothing-talc-free-vegan-powder-P505832?skuId=2936011"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_044",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Sublime Perfection Blurring Under Eye Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2766764"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-sublime-perfection-blurring-under-eye-setting-powder-P456107?skuId=2766764"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_045",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Cloud Set Loose Translucent Talc-Free Setting + Blurring Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2840833"),
    link: "https://www.sephora.com/product/kosas-cloud-set-translucent-loose-setting-blurring-powder-P515091?skuId=2840833"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_046",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKE UP FOR EVER",
    name: "Mini HD Skin Blurring & Perfecting Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2869493"),
    link: "https://www.sephora.com/product/mini-hd-skin-blurring-perfecting-pressed-powder-P517874?skuId=2869493"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_047",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Invisimatte Instant Setting + Blotting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2898484"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-mini-invisimatte-instant-setting-blotting-powder-P518273?skuId=2898484"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_048",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "NATASHA DENONA",
    name: "HY-GLAM™ Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2982007"),
    link: "https://www.sephora.com/product/hy-glam-loose-powder-P522552?skuId=2982007"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_049",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Mini Cloud Set Loose Translucent Talc-Free Setting + Blurring Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2936003"),
    link: "https://www.sephora.com/product/mini-cloud-set-loose-translucent-talc-free-setting-blurring-powder-P520515?skuId=2936003"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_050",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini Oil Sucker Liquid Blotting Paper Touch-Up Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2975373"),
    link: "https://www.sephora.com/product/mini-oil-sucker-liquid-blotting-paper-touch-up-spray-P522536?skuId=2975373"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_051",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "Mini All Day Makeup Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2932580"),
    link: "https://www.sephora.com/product/classic-setting-spray-mini-P520682?skuId=2932580"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_052",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAC Cosmetics",
    name: "Studio Fix Pro Set + Blur Weightless Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2958312"),
    link: "https://www.sephora.com/product/mac-studio-fix-pro-set-blur-weightless-loose-powder-P521481?skuId=2958312"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_053",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Tower 28 Beauty",
    name: "GetSet® Blur + Set Talc-Free 12H Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2787430"),
    link: "https://www.sephora.com/product/getset-blur-set-talc-free-pressed-setting-powder-P512175?skuId=2787430"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_054",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "innisfree",
    name: "No Sebum Matte Mineral Blurring Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2875383"),
    link: "https://www.sephora.com/product/no-sebum-matte-mineral-blurring-loose-setting-powder-P516875?skuId=2875383"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_055",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Blurring & Perfecting Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2868628"),
    link: "https://www.sephora.com/product/hd-skin-blurring-perfecting-loose-powder-P516335?skuId=2868628"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_056",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Vanish Airbrush Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2757896"),
    link: "https://www.sephora.com/product/hourglass-vanish-airbrush-pressed-powder-P510929?skuId=2757896"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_057",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "All Nighter Waterproof Hydrating and Glowy Setting Spray with 24HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2891380"),
    link: "https://www.sephora.com/product/all-nighter-glow-setting-spray-P518815?skuId=2891380"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_058",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kulfi",
    name: "Khili Khili Moisturizing Ultra-Fine Glow Mist with Squalane",
    type: "Setting Sprays & Powder",
    image: skuImage("2969665"),
    link: "https://www.sephora.com/product/khili-khili-glow-mist-P522155?skuId=2969665"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_059",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Benefit Cosmetics",
    name: "The POREfessional: Super Setter Pore-Minimizing Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2409514"),
    link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-super-setter-setting-spray-P466656?skuId=2409514"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_060",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "caliray",
    name: "Magic Hour 16-hour Blurring Talc-Free Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2846202"),
    link: "https://www.sephora.com/product/magic-hour-setting-powder-P517326?skuId=2846202"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_061",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini On 'Til Dawn Mattifying Sunscreen Makeup Setting Spray SPF 28",
    type: "Setting Sprays & Powder",
    image: skuImage("2869550"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-mini-on-til-dawn-mattifying-sunscreen-makeup-setting-spray-spf-28-P516912?skuId=2869550"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_062",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "Mini Glow 12HR Wear Transferproof Makeup Setting Spray with Vitamin C",
    type: "Setting Sprays & Powder",
    image: skuImage("2933018"),
    link: "https://www.sephora.com/product/glow-setting-spray-mini-P520692?skuId=2933018"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_063",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Rare Beauty by Selena Gomez",
    name: "Always An Optimist 4-in-1 Prime & Set Mist",
    type: "Setting Sprays & Powder",
    image: skuImage("2362465"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-always-an-optimist-4-in-1-prime-set-mist-P55849781?skuId=2362465"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_064",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Beauty Soulmates Airbrush Flawless Finish Brightening and Blush Powder Palette",
    type: "Setting Sprays & Powder",
    image: skuImage("2952745"),
    link: "https://www.sephora.com/product/pillow-talk-beauty-soulmates-brighten-blush-palette-P516013?skuId=2952745"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_065",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HUDA BEAUTY",
    name: "Mini Easy Bake Blurring Setting Spray with 16-Hour Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2870566"),
    link: "https://www.sephora.com/product/huda-beauty-mini-easy-bake-blurring-setting-spray-with-16-hour-wear-P515698?skuId=2870566"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_066",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Shine-Controlling & Blurring Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2738243"),
    link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-shine-controlling-blurring-setting-powder-P510067?skuId=2738243"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_067",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Sublime Perfection Longwear Blurring Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2890622"),
    link: "https://www.sephora.com/product/skin-fetish-sublime-perfection-longwear-blurring-setting-spray-P519220?skuId=2890622"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_068",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Gucci",
    name: "Mattifying Face Powder with 18-Hour Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2883742"),
    link: "https://www.sephora.com/product/mattifying-face-powder-18-hour-wear-P517299?skuId=2883742"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_069",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Too Faced",
    name: "Born This Way Soft Blur Flexible Finish Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2794600"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-soft-blur-flexible-finish-setting-powder-P512388?skuId=2794600"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_070",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "12HR Setting & Mattifying Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2730828"),
    link: "https://www.sephora.com/product/12hr-setting-talc-free-mattifying-powder-P512759?skuId=2730828"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_071",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Estée Lauder",
    name: "Double Wear Stay-In-Place Matte Setting Powder Veil",
    type: "Setting Sprays & Powder",
    image: skuImage("2956704"),
    link: "https://www.sephora.com/product/double-wear-stay-in-place-matte-powder-veil-P521393?skuId=2956704"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_072",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Iconic London",
    name: "Prep-Set-Glow Hydrating Glowy Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2380400"),
    link: "https://www.sephora.com/product/prep-set-glow-hydrating-spray-P461219?skuId=2380400"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_073",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Givenchy",
    name: "Prisme Libre Illuminating & Color Correcting Loose Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2788602"),
    link: "https://www.sephora.com/product/prisme-libre-loose-powder-P390722?skuId=2788602"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_074",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Cloud Set Airy Setting Spray + Smoothing Mist",
    type: "Setting Sprays & Powder",
    image: skuImage("2840874"),
    link: "https://www.sephora.com/product/kosas-cloud-set-airy-setting-spray-smoothing-mist-P515696?skuId=2840874"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_075",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Impeccable 24HR Blurring Matte Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2833895"),
    link: "https://www.sephora.com/product/impeccable-24hr-blurring-matte-setting-spray-P515096?skuId=2833895"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_076",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "Bright Fix Instant Brightening + Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2898427"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-bright-fix-instant-brightening-setting-powder-P517840?skuId=2898427"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_077",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "All Nighter Waterproof Matte Setting Spray with 24HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2891422"),
    link: "https://www.sephora.com/product/urban-decay-all-nighter-matte-setting-spray-P518809?skuId=2891422"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_078",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Geller",
    name: "Anti-Hot Flash Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2965762"),
    link: "https://www.sephora.com/product/anti-hot-flash-setting-spray-P521594?skuId=2965762"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_079",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Ultra-Blur Talc-Free Waterproof Translucent Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2748226"),
    link: "https://www.sephora.com/product/ultra-blur-talc-free-translucent-pressed-setting-powder-P510893?skuId=2748226"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_080",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Mini Vanish Airbrush Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2857373"),
    link: "https://www.sephora.com/product/mini-vanish-airbrush-pressed-powder-P515564?skuId=2857373"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_081",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Ambient® Lighting Palette",
    type: "Setting Sprays & Powder",
    image: skuImage("2519767"),
    link: "https://www.sephora.com/product/ambient-lighting-palette-P382309?skuId=2519767"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_082",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Rare Beauty by Selena Gomez",
    name: "Always an Optimist Soft Radiance Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2519080"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-always-an-optimist-soft-radiance-powder-P479345?skuId=2519080"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_083",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ciele",
    name: "filter & PROTECT SPF 30+ blurring finishing and setting powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2708428"),
    link: "https://www.sephora.com/product/filter-protect-spf-30-finishing-setting-powder-P507750?skuId=2708428"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_084",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "On 'Til Dawn Waterproof Glitter Setting Spray - Brown Sugar",
    type: "Setting Sprays & Powder",
    image: skuImage("2915940"),
    link: "https://www.sephora.com/product/on-til-dawn-waterproof-glitter-setting-spray-brown-sugar-P519904?skuId=2915940"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_085",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Saie",
    name: "Airset Radiant and Weightless Talc-Free Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2513018"),
    link: "https://www.sephora.com/product/saie-airset-radiant-loose-setting-powder-P480188?skuId=2513018"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_086",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MILK MAKEUP",
    name: "Pore Eclipse Matte Translucent Talc-Free Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2702751"),
    link: "https://www.sephora.com/product/pore-eclipse-matte-translucent-talc-free-setting-powder-P507482?skuId=2702751"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_087",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "caliray",
    name: "Surfproof 24-hour Waterproof & Transferproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2643476"),
    link: "https://www.sephora.com/product/caliray-surfproof-setting-spray-P504293?skuId=2643476"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_088",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "On 'Til Dawn Mattifying Sunscreen Makeup Setting Spray SPF 28",
    type: "Setting Sprays & Powder",
    image: skuImage("2869568"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-on-til-dawn-mattifying-sunscreen-makeup-setting-spray-spf-28-P516911?skuId=2869568"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_089",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Veil Soft Focus Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2857381"),
    link: "https://www.sephora.com/product/veil-soft-focus-setting-spray-P516316?skuId=2857381"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_090",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "LYS Beauty",
    name: "Triple Fix Loose Talc Free Translucent Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2825800"),
    link: "https://www.sephora.com/product/lys-beauty-triple-fix-loose-talc-free-translucent-setting-powder-P513229?skuId=2825800"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_091",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Blurring Talc-Free Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2597565"),
    link: "https://www.sephora.com/product/bio-blurring-talc-free-loose-setting-powder-P502321?skuId=2597565"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_092",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "GUERLAIN",
    name: "Meteorites Setting & Finishing Illuminating Powder Pearls",
    type: "Setting Sprays & Powder",
    image: skuImage("2780096"),
    link: "https://www.sephora.com/product/meteorites-illuminating-powder-pearls-P266308?skuId=2780096"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_093",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder -Universal Primer",
    type: "Setting Sprays & Powder",
    image: skuImage("2836708"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-universal-P514793?skuId=2836708"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_094",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "NARS",
    name: "Soft Matte Advanced Perfecting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2647006"),
    link: "https://www.sephora.com/product/nars-soft-matte-advanced-perfecting-powder-P504202?skuId=2647006"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_095",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "Mini All Nighter Waterproof Hydrating and Glowy Setting Spray with 24HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2891398"),
    link: "https://www.sephora.com/product/urban-decay-glow-all-nighter-setting-spray-P517859?skuId=2891398"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_096",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "bareMinerals",
    name: "Original Mineral Veil Talc-Free Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("1073014"),
    link: "https://www.sephora.com/product/mineral-veil-P61004?skuId=1073014"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_097",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "REFY",
    name: "Face Setter Hydrating and Plumping Setting Spray with Polyglutamic Acid",
    type: "Setting Sprays & Powder",
    image: skuImage("2792398"),
    link: "https://www.sephora.com/product/refy-beauty-face-setter-hydrating-plumping-setting-spray-polyglutamic-acid-P512241?skuId=2792398"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_098",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "LYS Beauty",
    name: "True Enlightenment Soft Focus Skin Finisher Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2870244"),
    link: "https://www.sephora.com/product/true-enlightenment-soft-focus-skin-finisher-powder-P518066?skuId=2870244"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_099",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Danessa Myricks Beauty",
    name: "Evolution Setting & Blurring Loose Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2703577"),
    link: "https://www.sephora.com/product/danessa-myricks-evolution-powder-setting-powder-P469456?skuId=2703577"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_100",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt® Transforming Skin Perfector",
    type: "Setting Sprays & Powder",
    image: skuImage("2577963"),
    link: "https://www.sephora.com/product/softsculpt-transforming-skin-perfector-P500403?skuId=2577963"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_101",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "SEPHORA COLLECTION",
    name: "Glow 12HR Wear Transferproof Makeup Setting Spray with Vitamin C",
    type: "Setting Sprays & Powder",
    image: skuImage("2871101"),
    link: "https://www.sephora.com/product/glow-makeup-setting-spray-P516071?skuId=2871101"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_102",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Real Flawless Luminous Perfecting Talc-Free Pressed Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2643112"),
    link: "https://www.sephora.com/product/laura-mercier-real-flawless-pressed-powder-P505458?skuId=2643112"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_103",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Westman Atelier",
    name: "Vital Pressed Skincare Blurring Talc-Free Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2570372"),
    link: "https://www.sephora.com/product/vital-pressed-skincare-blurring-talc-free-setting-powder-P500303?skuId=2570372"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_104",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Yves Saint Laurent",
    name: "All Hours Hyper Finish 24H Multi-Use Natural Matte Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2751493"),
    link: "https://www.sephora.com/product/yves-saint-laurent-all-hours-hyper-finish-24h-multi-use-natural-matte-powder-P511405?skuId=2751493"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_105",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Supergoop!",
    name: "100% Mineral (Re)setting Powder Face Sunscreen SPF 35",
    type: "Setting Sprays & Powder",
    image: skuImage("2421600"),
    link: "https://www.sephora.com/product/supergoop-re-setting-100-mineral-powder-spf-35-pa-P467976?skuId=2421600"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_106",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "LYS Beauty",
    name: "Triple Fix Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2437507"),
    link: "https://www.sephora.com/product/lys-beauty-triple-fix-setting-powder-P468382?skuId=2437507"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_107",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Mini Airbrush Flawless Matte Blurring & Waterproof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2881498"),
    link: "https://www.sephora.com/product/mini-airbrush-flawless-matte-blurring-waterproof-setting-spray-P516898?skuId=2881498"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_108",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Dewy Set Hydrating Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2224608"),
    link: "https://www.sephora.com/product/dewy-set-setting-spray-P443753?skuId=2224608"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_109",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Kosas",
    name: "Brighten & Blur Set - Color Corrector + Loose Setting Powder Face Set",
    type: "Setting Sprays & Powder",
    image: skuImage("2935989"),
    link: "https://www.sephora.com/product/brighten-and-blur-set-color-corrector-loose-setting-powder-face-set-P520516?skuId=2935989"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_110",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "tarte",
    name: "life lock™ hydrating waterproof setting spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2849388"),
    link: "https://www.sephora.com/product/life-lock-hydrating-setting-spray-P515095?skuId=2849388"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_111",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "bareMinerals",
    name: "ORIGINAL Mineral Veil Talc-free Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2850659"),
    link: "https://www.sephora.com/product/original-mineral-veil-talc-free-pressed-setting-powder-P514916?skuId=2850659"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_112",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt'r Instant Retouch Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2173664"),
    link: "https://www.sephora.com/product/pro-filt-r-instant-retouch-setting-powder-P88779810?skuId=2173664"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_113",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAC Cosmetics",
    name: "Fix+ Stay Over Alcohol-Free 24HR Hydrating + Multitasking Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2604825"),
    link: "https://www.sephora.com/product/fix-stay-over-alcohol-free-long-lasting-setting-spray-P501497?skuId=2604825"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_114",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "LYS Beauty",
    name: "LYS Beauty Skin Loyalty Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2564318"),
    link: "https://www.sephora.com/product/skin-loyalty-setting-spray-P507320?skuId=2564318"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_115",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ILIA",
    name: "Soft Focus Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("1930429"),
    link: "https://www.sephora.com/product/soft-focus-finishing-powder-P417170?skuId=1930429"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_116",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "NARS",
    name: "Light Reflecting Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2268654"),
    link: "https://www.sephora.com/product/light-reflecting-pressed-setting-powder-P377757?skuId=2268654"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_117",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Iconic London",
    name: "Prep Set Blur Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2866077"),
    link: "https://www.sephora.com/product/prep-set-blur-setting-spray-P516849?skuId=2866077"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_118",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "Mini All Nighter Waterproof Matte Setting Spray with 24HR Wear",
    type: "Setting Sprays & Powder",
    image: skuImage("2891406"),
    link: "https://www.sephora.com/product/mini-all-nighter-matte-setting-spray-P518811?skuId=2891406"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_119",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "tarte",
    name: "mini life lock™ hyrdating waterproof setting spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2849743"),
    link: "https://www.sephora.com/product/tarte-mini-life-lock-hydrating-setting-spray-P515094?skuId=2849743"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_120",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Range Beauty",
    name: "Smooth Out Setting Powder Talc-Free",
    type: "Setting Sprays & Powder",
    image: skuImage("2786077"),
    link: "https://www.sephora.com/product/range-beauty-smooth-out-setting-powder-talc-free-P513636?skuId=2786077"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_121",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MILK MAKEUP",
    name: "Pore Eclipse Mattifying + Blurring Transfer-Proof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2653459"),
    link: "https://www.sephora.com/product/milk-makeup-pore-eclipse-mattifying-setting-spray-P504886?skuId=2653459"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_122",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Mini Translucent Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2382760"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-loose-setting-powder-P462330?skuId=2382760"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_123",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2701761"),
    link: "https://www.sephora.com/product/vitamin-enriched-pressed-finishing-powder-P506782?skuId=2701761"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_124",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "NARS",
    name: "Light Reflecting™ Hydrating Makeup Setting Mist",
    type: "Setting Sprays & Powder",
    image: skuImage("2772374"),
    link: "https://www.sephora.com/product/nars-light-reflecting-makeup-setting-mist-P511956?skuId=2772374"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_125",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Too Faced",
    name: "Hangover 3-in-1 Replenishing Primer & Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("1952928"),
    link: "https://www.sephora.com/product/hangover-3-in-1-replenishing-primer-setting-spray-P420166?skuId=1952928"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_126",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Translucent Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2270585"),
    link: "https://www.sephora.com/product/loose-setting-powder-P449149?skuId=2270585"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_127",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Benefit Cosmetics",
    name: "Mini The POREfessional: Super Setter Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2409522"),
    link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-super-setter-setting-spray-mini-P466657?skuId=2409522"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_128",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Benefit Cosmetics",
    name: "The POREfessional Matte Blurring Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2792984"),
    link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-power-powder-P512867?skuId=2792984"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_129",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKE UP FOR EVER",
    name: "Mist & Fix 24HR Hydrating Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2646875"),
    link: "https://www.sephora.com/product/mist-fix-24hr-hydrating-setting-spray-P504860?skuId=2646875"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_130",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Go Off Makeup Remover Dissolving Mist",
    type: "Setting Sprays & Powder",
    image: skuImage("2876258"),
    link: "https://www.sephora.com/product/go-off-spray-P516368?skuId=2876258"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_131",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Charlotte Tilbury",
    name: "Refillable Airbrush Flawless Finish Brightening Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2613453"),
    link: "https://www.sephora.com/product/airbrush-brightening-flawless-finish-P502270?skuId=2613453"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_132",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "IT Cosmetics",
    name: "Bye Bye Pores Translucent Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("1868264"),
    link: "https://www.sephora.com/product/bye-bye-pores-pressed-poreless-finish-airbrush-pressed-powder-P411886?skuId=1868264"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_133",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Glass 001 Legendary Glow Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2874022"),
    link: "https://www.sephora.com/product/skin-fetish-glass-001-legendary-glow-setting-spray-P516895?skuId=2874022"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_134",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Iconic London",
    name: "Mini Prep Set Glow Hydrating Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2579076"),
    link: "https://www.sephora.com/product/iconic-london-prep-set-glow-mini-P484045?skuId=2579076"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_135",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Mini Impeccable 24HR Blurring Matte Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2833887"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-impeccable-24hr-blurring-matte-setting-spray-P515097?skuId=2833887"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_136",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "PAT McGRATH LABS",
    name: "Sublime Perfection Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2271138"),
    link: "https://www.sephora.com/product/skin-fetish-sublime-setting-powder-P447770?skuId=2271138"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_137",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MILK MAKEUP",
    name: "Mini Pore Eclipse Mattifying + Blurring Transfer-Proof Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2666832"),
    link: "https://www.sephora.com/product/mini-pore-eclipse-mattifying-blurring-setting-spray-P506022?skuId=2666832"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_138",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Anastasia Beverly Hills",
    name: "Mini Dewy Set Hydrating Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2360998"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-dewy-set-hydrating-setting-spay-P459508?skuId=2360998"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_139",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder Lowlighter Soft Glow Highlighter",
    type: "Setting Sprays & Powder",
    image: skuImage("2774396"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-lowlighter-soft-glow-highlighter-P510405?skuId=2774396"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_140",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKE UP FOR EVER",
    name: "Mini Mist & Fix 24HR Hydrating Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2646883"),
    link: "https://www.sephora.com/product/mini-mist-fix-24hr-hydrating-setting-spray-P504863?skuId=2646883"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_141",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "tarte",
    name: "creaseless loose setting & brightening powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2833192"),
    link: "https://www.sephora.com/product/tarte-creaseless-loose-setting-powder-P512246?skuId=2833192"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_142",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "NARS",
    name: "Light Reflecting Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2514826"),
    link: "https://www.sephora.com/product/light-reflecting-loose-setting-powder-P377756?skuId=2514826"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_143",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Benefit Cosmetics",
    name: "Mini POREfessional Matte Blurring Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2792950"),
    link: "https://www.sephora.com/product/benefit-cosmetics-mini-porefessional-power-powder-P512868?skuId=2792950"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_144",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Too Faced",
    name: "Mini Hangover 3-in-1 Replenishing Primer & Setting Spray",
    type: "Setting Sprays & Powder",
    image: skuImage("2030088"),
    link: "https://www.sephora.com/product/hangover-3-in-1-replenishing-primer-setting-spray-mini-P428037?skuId=2030088"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_145",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Urban Decay",
    name: "All Nighter Waterproof Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2081404"),
    link: "https://www.sephora.com/product/all-nighter-waterproof-setting-powder-P431455?skuId=2081404"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_146",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "MAKEUP BY MARIO",
    name: "Master Pro Puff",
    type: "Setting Sprays & Powder",
    image: skuImage("2796258"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-pro-puff-P513396?skuId=2796258"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_147",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Laura Mercier",
    name: "Mini Artistry Icons Loose Powder and Eyeshadow Set",
    type: "Setting Sprays & Powder",
    image: skuImage("2872414"),
    link: "https://www.sephora.com/product/mini-artistry-icons-loose-powder-and-eyeshadow-set-P515899?skuId=2872414"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_148",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fashion Fair",
    name: "Iconic Pressed Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2477032"),
    link: "https://www.sephora.com/product/fashion-fair-iconic-pressed-setting-powder-P476494?skuId=2477032"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_149",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Fashion Fair",
    name: "Set It Loose Setting Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("2476885"),
    link: "https://www.sephora.com/product/fashion-fair-set-it-loose-setting-powder-P476550?skuId=2476885"
  }),
  productData({
    code: "SETTING_SPRAY_POWDER_150",
    category: "Makeup > Face > Setting Sprays & Powder",
    brand: "Hourglass",
    name: "Ambient® Lighting Finishing Powder",
    type: "Setting Sprays & Powder",
    image: skuImage("1849017"),
    link: "https://www.sephora.com/product/ambient-lighting-powder-P377723?skuId=1849017"
  }),

  // ==================================================
  // Makeup > Face > Tinted Moisturizer
  // Products: 57
  // ==================================================
  productData({
    code: "TINTED_MOISTURIZER_001",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Hourglass",
    name: "Veil™ Hydrating Skin Tint Foundation",
    type: "Tinted Moisturizer",
    image: skuImage("2690915"),
    link: "https://www.sephora.com/product/veil-hydrating-skin-tint-P506573?skuId=2690915"
  }),
  productData({
    code: "TINTED_MOISTURIZER_002",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Soothing Serum Skin Tint Foundation with Peptides + Ceramides",
    type: "Tinted Moisturizer",
    image: skuImage("2836641"),
    link: "https://www.sephora.com/product/yummy-skin-serum-tint-P506512?skuId=2836641"
  }),
  productData({
    code: "TINTED_MOISTURIZER_003",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Blurring Skin Tint",
    type: "Tinted Moisturizer",
    image: skuImage("2431864"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-eaze-drop-blurring-skin-tint-P470025?skuId=2431864"
  }),
  productData({
    code: "TINTED_MOISTURIZER_004",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour Hydrating Gel Skin Tint",
    type: "Tinted Moisturizer",
    image: skuImage("2843183"),
    link: "https://www.sephora.com/product/milk-makeup-hydro-grip-12-hour-hydrating-gel-skin-tint-P515226?skuId=2843183"
  }),
  productData({
    code: "TINTED_MOISTURIZER_005",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Saie",
    name: "Slip Tint – Lightweight Tinted Moisturizer with Mineral Zinc SPF 35 and Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2497485"),
    link: "https://www.sephora.com/product/saie-slip-tint-dewy-tinted-moisturizer-spf-35-sunscreen-P468210?skuId=2497485"
  }),
  productData({
    code: "TINTED_MOISTURIZER_006",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "REFY",
    name: "Skin Base Hydrating Gel Skin Tint with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2938355"),
    link: "https://www.sephora.com/product/skin-base-hydrating-gel-skin-tint-with-hyaluronic-acid-P520680?skuId=2938355"
  }),
  productData({
    code: "TINTED_MOISTURIZER_007",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    type: "Tinted Moisturizer",
    image: skuImage("2419786"),
    link: "https://www.sephora.com/product/hollywood-flawless-filter-P434104?skuId=2419786"
  }),
  productData({
    code: "TINTED_MOISTURIZER_008",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "MAKE UP FOR EVER",
    name: "Super Boost Lightweight Moisturizing Skin Tint with Hyaluronic and Polyglutamic Acids",
    type: "Tinted Moisturizer",
    image: skuImage("2844538"),
    link: "https://www.sephora.com/product/super-boost-skin-tint-P515080?skuId=2844538"
  }),
  productData({
    code: "TINTED_MOISTURIZER_009",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Long-Wear Tinted Moisturizer Natural Dewy Skin Tint SPF 30 with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2844256"),
    link: "https://www.sephora.com/product/long-wear-tinted-moisturizer-natural-dewy-spf-30-with-hyaluronic-acid-P514887?skuId=2844256"
  }),
  productData({
    code: "TINTED_MOISTURIZER_010",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Summer Fridays",
    name: "Sheer Skin Tint with Hyaluronic Acid + Squalane",
    type: "Tinted Moisturizer",
    image: skuImage("2536183"),
    link: "https://www.sephora.com/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183"
  }),
  productData({
    code: "TINTED_MOISTURIZER_011",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Mini Long-Wear Tinted Moisturizer Natural Dewy Skin Tint SPF 30 with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2838324"),
    link: "https://www.sephora.com/product/mini-long-wear-tinted-moisturizer-natural-dewy-spf-30-with-hyaluronic-acid-P514880?skuId=2838324"
  }),
  productData({
    code: "TINTED_MOISTURIZER_012",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "bareMinerals",
    name: "COMPLEXION RESCUE Tinted Moisturizer with Hyaluronic Acid and Mineral SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("2851749"),
    link: "https://www.sephora.com/product/complexion-rescue-tm-tinted-moisturizer-broad-spectrum-spf-30-P514908?skuId=2851749"
  }),
  productData({
    code: "TINTED_MOISTURIZER_013",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Armani Beauty",
    name: "Golden Hour 24HR Lightweight Skin Tint with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2881332"),
    link: "https://www.sephora.com/product/golden-hour-24hr-lightweight-skin-tint-with-hyaluronic-acid-P517007?skuId=2881332"
  }),
  productData({
    code: "TINTED_MOISTURIZER_014",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "NARS",
    name: "Pure Radiant Tinted Moisturizer Broad Spectrum SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("1396399"),
    link: "https://www.sephora.com/product/pure-radiant-tinted-moisturizer-spf-30-pa-P302923?skuId=1396399"
  }),
  productData({
    code: "TINTED_MOISTURIZER_015",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "DIOR",
    name: "Forever Glow Star Filter Multi-Use Complexion Enhancing Booster",
    type: "Tinted Moisturizer",
    image: skuImage("2751014"),
    link: "https://www.sephora.com/product/forever-glow-star-filter-multi-use-complexion-enhancing-booster-P509901?skuId=2751014"
  }),
  productData({
    code: "TINTED_MOISTURIZER_016",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Tinted Moisturizer Oil Free Blurred Matte Skin Tint SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("2854479"),
    link: "https://www.sephora.com/product/tinted-moisturizer-oil-free-blurred-matte-spf-30-P515711?skuId=2854479"
  }),
  productData({
    code: "TINTED_MOISTURIZER_017",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Supergoop!",
    name: "Protec(tint) Daily SPF Tint SPF 50 Sunscreen Skin Tint with Ectoin",
    type: "Tinted Moisturizer",
    image: skuImage("2734952"),
    link: "https://www.sephora.com/product/supergoop-protec-tint-daily-spf-tint-spf-50-sunscreen-skin-tint-with-hyaluronic-acid-infused-clay-P510355?skuId=2734952"
  }),
  productData({
    code: "TINTED_MOISTURIZER_018",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Kosas",
    name: "Revealer Skin-Improving Foundation SPF 25 with Hyaluronic Acid and Niacinamide",
    type: "Tinted Moisturizer",
    image: skuImage("2512291"),
    link: "https://www.sephora.com/product/kosas-revealer-skin-improving-foundation-spf25-with-hyaluronic-acid-niacinamide-P481396?skuId=2512291"
  }),
  productData({
    code: "TINTED_MOISTURIZER_019",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "B12 Base Thinner Luminous Vitamin Pearl Boosting Serum",
    type: "Tinted Moisturizer",
    image: skuImage("2943413"),
    link: "https://www.sephora.com/product/b12-base-thinner-luminous-vitamin-pearl-boosting-serum-P515065?skuId=2943413"
  }),
  productData({
    code: "TINTED_MOISTURIZER_020",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Saie",
    name: "Glowy Super Skin Tint Foundation with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2637387"),
    link: "https://www.sephora.com/product/saie-glowy-super-skin-lightweight-hydrobounce-serum-foundation-P504907?skuId=2637387"
  }),
  productData({
    code: "TINTED_MOISTURIZER_021",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "SEPHORA COLLECTION",
    name: "Reveal The Real 12HR Soft Radiant Skin Tint",
    type: "Tinted Moisturizer",
    image: skuImage("2760726"),
    link: "https://www.sephora.com/product/reveal-real-soft-radiant-skin-tint-P511752?skuId=2760726"
  }),
  productData({
    code: "TINTED_MOISTURIZER_022",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Tinted Blur Balm Skin Tint with Peptides",
    type: "Tinted Moisturizer",
    image: skuImage("2938991"),
    link: "https://www.sephora.com/product/tinted-blur-balm-skin-tint-with-peptides-P520503?skuId=2938991"
  }),
  productData({
    code: "TINTED_MOISTURIZER_023",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Glossier",
    name: "Perfecting Skin Tint for Dewy Sheer Coverage",
    type: "Tinted Moisturizer",
    image: skuImage("2649085"),
    link: "https://www.sephora.com/product/glossier-perfecting-skin-tint-for-dewy-sheer-coverage-P504782?skuId=2649085"
  }),
  productData({
    code: "TINTED_MOISTURIZER_024",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Tinted Moisturizer Broad Spectrum SPF 20 Sunscreen",
    type: "Tinted Moisturizer",
    image: skuImage("2557072"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-tinted-moisturizer-broad-spectrum-spf-20-sunscreen-P482729?skuId=2557072"
  }),
  productData({
    code: "TINTED_MOISTURIZER_025",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Gucci",
    name: "Glow Skin Tinted Moisturizer with Hyaluronic Acid & Bakuchiol",
    type: "Tinted Moisturizer",
    image: skuImage("2834513"),
    link: "https://www.sephora.com/product/glow-skin-tinted-moisturizer-with-hyaluronic-acid-bakuchiol-P517009?skuId=2834513"
  }),
  productData({
    code: "TINTED_MOISTURIZER_026",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Peter Thomas Roth",
    name: "Water Drench Broad Spectrum SPF 45 Hyaluronic Sheer Tint Moisturizer",
    type: "Tinted Moisturizer",
    image: skuImage("2866036"),
    link: "https://www.sephora.com/product/water-drench-broad-spectrum-spf-45-hyaluronic-sheer-tint-moisturizer-P516481?skuId=2866036"
  }),
  productData({
    code: "TINTED_MOISTURIZER_027",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "IT Cosmetics",
    name: "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
    type: "Tinted Moisturizer",
    image: skuImage("2966208"),
    link: "https://www.sephora.com/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010?skuId=2966208"
  }),
  productData({
    code: "TINTED_MOISTURIZER_028",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "IT Cosmetics",
    name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
    type: "Tinted Moisturizer",
    image: skuImage("2840676"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-cream-spf-50-P411885?skuId=2840676"
  }),
  productData({
    code: "TINTED_MOISTURIZER_029",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Mini Tinted Moisturizer Oil Free Blurred Matte Skin Tint SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("2854677"),
    link: "https://www.sephora.com/product/mini-tinted-moisturizer-oil-free-blurred-matte-spf-30-P515716?skuId=2854677"
  }),
  productData({
    code: "TINTED_MOISTURIZER_030",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Dr. Jart+",
    name: "Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
    type: "Tinted Moisturizer",
    image: skuImage("2604494"),
    link: "https://www.sephora.com/product/premium-bb-tinted-moisturizer-with-niacinamide-spf-40-P501005?skuId=2604494"
  }),
  productData({
    code: "TINTED_MOISTURIZER_031",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Hydrating Skin Tint SPF 15 with Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2701662"),
    link: "https://www.sephora.com/product/vitamin-enriched-hydrating-skin-tint-spf-15-with-hyaluronic-acid-P506571?skuId=2701662"
  }),
  productData({
    code: "TINTED_MOISTURIZER_032",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "tarte",
    name: "BB blur natural matte tinted moisturizer Broad Spectrum SPF 30 Sunscreen",
    type: "Tinted Moisturizer",
    image: skuImage("2413045"),
    link: "https://www.sephora.com/product/bb-tinted-treatment-12-hour-primer-broad-spectrum-spf-30-sunscreen-P377542?skuId=2413045"
  }),
  productData({
    code: "TINTED_MOISTURIZER_033",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Anastasia Beverly Hills",
    name: "Beauty Balm Serum Boosted Skin Tint",
    type: "Tinted Moisturizer",
    image: skuImage("2752848"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-beauty-balm-skin-serum-boosted-skin-tint-P511190?skuId=2752848"
  }),
  productData({
    code: "TINTED_MOISTURIZER_034",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Ami Colé",
    name: "Skin-Enhancing Tinted Moisturizer",
    type: "Tinted Moisturizer",
    image: skuImage("2631679"),
    link: "https://www.sephora.com/product/skin-enhancing-tinted-moisturizer-P503754?skuId=2631679"
  }),
  productData({
    code: "TINTED_MOISTURIZER_035",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "U Beauty",
    name: "The SUPER Tinted Hydrator Tinted Moisturizer Vitamin E + Antioxidants",
    type: "Tinted Moisturizer",
    image: skuImage("2950319"),
    link: "https://www.sephora.com/product/u-beauty-the-super-tinted-hydrator-tinted-moisturizer-vitamin-e-antioxidants-P521053?skuId=2950319"
  }),
  productData({
    code: "TINTED_MOISTURIZER_036",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Fenty Beauty by Rihanna",
    name: "Hydra Vizor Huez Tinted Moisturizer Broad Spectrum Mineral Spf 30 Sunscreen",
    type: "Tinted Moisturizer",
    image: skuImage("2766095"),
    link: "https://www.sephora.com/product/fenty-skin-rihanna-hydra-vizor-huez-tinted-moisturizer-broad-spectrum-mineral-spf-30-sunscreen-P511541?skuId=2766095"
  }),
  productData({
    code: "TINTED_MOISTURIZER_037",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Laura Mercier",
    name: "Tinted Moisturizer Light Revealer Natural Skin Illuminator Broad Spectrum SPF 25",
    type: "Tinted Moisturizer",
    image: skuImage("2551521"),
    link: "https://www.sephora.com/product/laura-mercier-tinted-moisturizer-light-revealer-spf-25-P479972?skuId=2551521"
  }),
  productData({
    code: "TINTED_MOISTURIZER_038",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Stick Blur + Smooth Tint Stick Foundation",
    type: "Tinted Moisturizer",
    image: skuImage("2700805"),
    link: "https://www.sephora.com/product/fenty-eaze-drop-blur-smooth-tint-stick-P507453?skuId=2700805"
  }),
  productData({
    code: "TINTED_MOISTURIZER_039",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Iris&Romeo",
    name: "Weekend Skin SPF 50 Natural Glow Tinted Sunscreen with Vitamin C + Niacinamide",
    type: "Tinted Moisturizer",
    image: skuImage("2745149"),
    link: "https://www.sephora.com/product/weekend-skin-spf-50-instant-glow-mineral-sunscreen-with-vitamin-c-niacinamide-P509342?skuId=2745149"
  }),
  productData({
    code: "TINTED_MOISTURIZER_040",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "CLINIQUE",
    name: "Moisture Surge™ CC Cream Hydrating Color Corrector Broad Spectrum SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("1509512"),
    link: "https://www.sephora.com/product/moisture-surge-cc-cream-hydrating-colour-corrector-broad-spectrum-spf-30-P378639?skuId=1509512"
  }),
  productData({
    code: "TINTED_MOISTURIZER_041",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "ISAMAYA",
    name: "Color Correcting Skin Tint Serum",
    type: "Tinted Moisturizer",
    image: skuImage("2855427"),
    link: "https://www.sephora.com/product/color-correcting-skin-tint-serum-P515445?skuId=2855427"
  }),
  productData({
    code: "TINTED_MOISTURIZER_042",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Peter Thomas Roth",
    name: "Water Drench® Hyaluronic Cloud Sheer Tint Moisturizer Broad Spectrum Sunscreen SPF 45",
    type: "Tinted Moisturizer",
    image: skuImage("2743714"),
    link: "https://www.sephora.com/product/peter-thomas-roth-water-drench-r-hyaluronic-cloud-sheer-tint-moisturizer-broad-spectrum-spf-45-P511259?skuId=2743714"
  }),
  productData({
    code: "TINTED_MOISTURIZER_043",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Kosas",
    name: "BB Burst Tinted Moisturizer Gel Cream with Copper Peptides",
    type: "Tinted Moisturizer",
    image: skuImage("2737617"),
    link: "https://www.sephora.com/product/kosas-bb-burst-tinted-moisturizer-gel-cream-with-copper-peptides-P510072?skuId=2737617"
  }),
  productData({
    code: "TINTED_MOISTURIZER_044",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "LIXR Beauty",
    name: "Skin Shake Bi-Phase Serum Skin Tint with Squalane",
    type: "Tinted Moisturizer",
    image: skuImage("2955334"),
    link: "https://www.sephora.com/product/lixr-skin-shake-bi-phase-serum-roller-P521067?skuId=2955334"
  }),
  productData({
    code: "TINTED_MOISTURIZER_045",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Iris&Romeo",
    name: "Best Skin Days SPF30 Whipped Skin Tint with Vitamin C + Hyaluronic Acid",
    type: "Tinted Moisturizer",
    image: skuImage("2745073"),
    link: "https://www.sephora.com/product/best-skin-days-spf30-whipped-tinted-moisturizer-with-vitamin-c-hyaluronic-acid-P509345?skuId=2745073"
  }),
  productData({
    code: "TINTED_MOISTURIZER_046",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Saie",
    name: "Sunvisor Radiant Moisturizing Face Sunscreen SPF 35",
    type: "Tinted Moisturizer",
    image: skuImage("2414183"),
    link: "https://www.sephora.com/product/saie-sunvisor-moisturizing-sunscreen-spf-35-P468211?skuId=2414183"
  }),
  productData({
    code: "TINTED_MOISTURIZER_047",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Estée Lauder",
    name: "Futurist Hydra Rescue Moisturizing Foundation SPF 45 with Vitamin E",
    type: "Tinted Moisturizer",
    image: skuImage("2324481"),
    link: "https://www.sephora.com/product/estee-lauder-futurist-hydrating-rescue-moisturizing-foundation-spf-45-P454063?skuId=2324481"
  }),
  productData({
    code: "TINTED_MOISTURIZER_048",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Dr. Jart+",
    name: "Cicapair ™ Tiger Grass Camo Drops Color Corrector SPF 35",
    type: "Tinted Moisturizer",
    image: skuImage("2450856"),
    link: "https://www.sephora.com/product/cicapair-tiger-grass-camo-drops-P429250?skuId=2450856"
  }),
  productData({
    code: "TINTED_MOISTURIZER_049",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "CLINIQUE",
    name: "Moisture Surge™ Sheertint Hydrator Broad Spectrum SPF 25 Tinted Moisturizer",
    type: "Tinted Moisturizer",
    image: skuImage("2313708"),
    link: "https://www.sephora.com/product/clinique-moisture-surge-sheertint-hydrator-broad-spectrum-spf-25-P457692?skuId=2313708"
  }),
  productData({
    code: "TINTED_MOISTURIZER_050",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Charlotte Tilbury",
    name: "Unisex Healthy Glow Tinted Moisturizer",
    type: "Tinted Moisturizer",
    image: skuImage("2117190"),
    link: "https://www.sephora.com/product/unisex-healthy-glow-P433525?skuId=2117190"
  }),
  productData({
    code: "TINTED_MOISTURIZER_051",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "ROSE INC",
    name: "Skin Enhance Non-Comedogenic Skin Tint Serum Foundation",
    type: "Tinted Moisturizer",
    image: skuImage("2529170"),
    link: "https://www.sephora.com/product/rose-inc-skin-enhance-luminous-skin-tint-serum-foundation-P480345?skuId=2529170"
  }),
  productData({
    code: "TINTED_MOISTURIZER_052",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "NUDESTIX",
    name: "Nudescreen - Mineral Sunscreen SPF 30",
    type: "Tinted Moisturizer",
    image: skuImage("2554871"),
    link: "https://www.sephora.com/product/nudestix-nudescreen-daily-mineral-veil-spf-30-P481828?skuId=2554871"
  }),
  productData({
    code: "TINTED_MOISTURIZER_053",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "NUDESTIX",
    name: "Tinted Blur Foundation Stick",
    type: "Tinted Moisturizer",
    image: skuImage("2079457"),
    link: "https://www.sephora.com/product/nudies-tinted-blur-stick-P431758?skuId=2079457"
  }),
  productData({
    code: "TINTED_MOISTURIZER_054",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Urban Decay",
    name: "Hydromaniac Glowy Tinted Hydrator Foundation",
    type: "Tinted Moisturizer",
    image: skuImage("2406668"),
    link: "https://www.sephora.com/product/urban-decay-hydromaniac-glowy-tinted-hydrator-foundation-P467658?skuId=2406668"
  }),
  productData({
    code: "TINTED_MOISTURIZER_055",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "IT Cosmetics",
    name: "CC+ Cream Illumination with SPF 50+",
    type: "Tinted Moisturizer",
    image: skuImage("1869015"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-illumination-cream-spf-50-P411884?skuId=1869015"
  }),
  productData({
    code: "TINTED_MOISTURIZER_056",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Iconic London",
    name: "Radiance Complexion Booster",
    type: "Tinted Moisturizer",
    image: skuImage("2463586"),
    link: "https://www.sephora.com/product/iconic-london-radiance-complexion-booster-P473171?skuId=2463586"
  }),
  productData({
    code: "TINTED_MOISTURIZER_057",
    category: "Makeup > Face > Tinted Moisturizer",
    brand: "Peter Thomas Roth",
    name: "Water Drench Broad Spectrum SPF 45 Hyaluronic Moisturizer",
    type: "Tinted Moisturizer",
    image: skuImage("2866028"),
    link: "https://www.sephora.com/product/water-drench-broad-spectrum-spf-45-hyaluronic-moisturizer-P516471?skuId=2866028"
  }),

  // ==================================================
  // Makeup > Face > Contour
  // Products: 58
  // ==================================================
  productData({
    code: "CONTOUR_001",
    category: "Makeup > Face > Contour",
    brand: "LYS Beauty",
    name: "No Limits Cream Bronzer and Contour Stick",
    type: "Contour",
    image: skuImage("2735967"),
    link: "https://www.sephora.com/product/no-limits-cream-bronzer-stick-P500123?skuId=2735967"
  }),
  productData({
    code: "CONTOUR_002",
    category: "Makeup > Face > Contour",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt® Cream Contour & Bronzer Shaping Stick",
    type: "Contour",
    image: skuImage("2867505"),
    link: "https://www.sephora.com/product/softsculpt-cream-contour-bronzer-stick-P516546?skuId=2867505"
  }),
  productData({
    code: "CONTOUR_003",
    category: "Makeup > Face > Contour",
    brand: "Saie",
    name: "Dew Bronze Soft-Focus Sculpting Liquid Bronzer",
    type: "Contour",
    image: skuImage("2753788"),
    link: "https://www.sephora.com/product/saie-dew-bronze-soft-focus-effortless-liquid-bronzer-P510823?skuId=2753788"
  }),
  productData({
    code: "CONTOUR_004",
    category: "Makeup > Face > Contour",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt Transforming Skin Enhancer®",
    type: "Contour",
    image: skuImage("2578011"),
    link: "https://www.sephora.com/product/softsculpt-transforming-skin-enhancer-P500452?skuId=2578011"
  }),
  productData({
    code: "CONTOUR_005",
    category: "Makeup > Face > Contour",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Contour",
    type: "Contour",
    image: skuImage("2828705"),
    link: "https://www.sephora.com/product/soft-pinch-liquid-contour-P514741?skuId=2828705"
  }),
  productData({
    code: "CONTOUR_006",
    category: "Makeup > Face > Contour",
    brand: "MAKEUP BY MARIO",
    name: "Mini SoftSculpt® Shaping Stick",
    type: "Contour",
    image: skuImage("2867430"),
    link: "https://www.sephora.com/product/mini-softsculpt-shaping-stick-P516118?skuId=2867430"
  }),
  productData({
    code: "CONTOUR_007",
    category: "Makeup > Face > Contour",
    brand: "SEPHORA COLLECTION",
    name: "Cream Contour Stick",
    type: "Contour",
    image: skuImage("2731289"),
    link: "https://www.sephora.com/product/contour-stick-P511273?skuId=2731289"
  }),
  productData({
    code: "CONTOUR_008",
    category: "Makeup > Face > Contour",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Precision Sculpt Shaping Balm Contour Stick",
    type: "Contour",
    image: skuImage("2892438"),
    link: "https://www.sephora.com/product/precision-sculpt-shaping-balm-P517329?skuId=2892438"
  }),
  productData({
    code: "CONTOUR_009",
    category: "Makeup > Face > Contour",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Matte Contour Skinstick",
    type: "Contour",
    image: skuImage("2589927"),
    link: "https://www.sephora.com/product/match-stix-matte-skinstick-P18975403?skuId=2589927"
  }),
  productData({
    code: "CONTOUR_010",
    category: "Makeup > Face > Contour",
    brand: "Westman Atelier",
    name: "Face Trace Cream Contour Stick",
    type: "Contour",
    image: skuImage("2434108"),
    link: "https://www.sephora.com/product/westman-atelier-face-trace-contour-stick-P468433?skuId=2434108"
  }),
  productData({
    code: "CONTOUR_011",
    category: "Makeup > Face > Contour",
    brand: "PATRICK TA",
    name: "Major Sculpt Crème Contour & Powder Bronzer Duo",
    type: "Contour",
    image: skuImage("2653921"),
    link: "https://www.sephora.com/product/patrick-ta-major-sculpt-creme-contour-powder-bronzer-duo-P471059?skuId=2653921"
  }),
  productData({
    code: "CONTOUR_012",
    category: "Makeup > Face > Contour",
    brand: "MERIT",
    name: "Bronze Balm Sheer Sculpting Bronzer",
    type: "Contour",
    image: skuImage("2744068"),
    link: "https://www.sephora.com/product/bronze-balm-sheer-sculpting-bronzer-P501766?skuId=2744068"
  }),
  productData({
    code: "CONTOUR_013",
    category: "Makeup > Face > Contour",
    brand: "MILK MAKEUP",
    name: "Sculpt Cream Contour Stick",
    type: "Contour",
    image: skuImage("2872406"),
    link: "https://www.sephora.com/product/milk-makeup-sculpt-cream-contour-stick-P503903?skuId=2872406"
  }),
  productData({
    code: "CONTOUR_014",
    category: "Makeup > Face > Contour",
    brand: "Westman Atelier",
    name: "Mini Petite Face Trace Cream Contour Stick",
    type: "Contour",
    image: skuImage("2640811"),
    link: "https://www.sephora.com/product/westman-atelier-petite-face-trace-contour-stick-P504318?skuId=2640811"
  }),
  productData({
    code: "CONTOUR_015",
    category: "Makeup > Face > Contour",
    brand: "Anastasia Beverly Hills",
    name: "Smooth Blur Cream Contour Stick",
    type: "Contour",
    image: skuImage("2934743"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-smooth-blur-cream-contour-stick-P516074?skuId=2934743"
  }),
  productData({
    code: "CONTOUR_016",
    category: "Makeup > Face > Contour",
    brand: "Charlotte Tilbury",
    name: "Hollywood Contour Wand",
    type: "Contour",
    image: skuImage("2841278"),
    link: "https://www.sephora.com/product/hollywood-contour-wand-P434002?skuId=2841278"
  }),
  productData({
    code: "CONTOUR_017",
    category: "Makeup > Face > Contour",
    brand: "Charlotte Tilbury",
    name: "Refillable Airbrush Matte Bronzer",
    type: "Contour",
    image: skuImage("2351187"),
    link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-bronzer-P459144?skuId=2351187"
  }),
  productData({
    code: "CONTOUR_018",
    category: "Makeup > Face > Contour",
    brand: "Too Faced",
    name: "Chocolate Soleil Melting Bronzing & Sculpting Stick",
    type: "Contour",
    image: skuImage("2772101"),
    link: "https://www.sephora.com/product/too-faced-chocolate-soleil-bronzing-stick-P510403?skuId=2772101"
  }),
  productData({
    code: "CONTOUR_019",
    category: "Makeup > Face > Contour",
    brand: "DIOR",
    name: "Forever Skin Cream Contour Sculpting Face Stick",
    type: "Contour",
    image: skuImage("2789089"),
    link: "https://www.sephora.com/product/dior-forever-24h-wear-seamless-contour-stick-P512863?skuId=2789089"
  }),
  productData({
    code: "CONTOUR_020",
    category: "Makeup > Face > Contour",
    brand: "NARS",
    name: "The Multiple Sculpting Contour Stick",
    type: "Contour",
    image: skuImage("2975001"),
    link: "https://www.sephora.com/product/the-multiple-sculpting-sticks-P522185?skuId=2975001"
  }),
  productData({
    code: "CONTOUR_021",
    category: "Makeup > Face > Contour",
    brand: "SEPHORA COLLECTION",
    name: "Sephora Colorful® Contour Matte Powder",
    type: "Contour",
    image: skuImage("2711265"),
    link: "https://www.sephora.com/product/sephora-colorful-contour-matte-powder-P509721?skuId=2711265"
  }),
  productData({
    code: "CONTOUR_022",
    category: "Makeup > Face > Contour",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Power Sculpt Velvet Talc-Free Powder Bronzer",
    type: "Contour",
    image: skuImage("2796555"),
    link: "https://www.sephora.com/product/power-sculpt-velvet-bronzer-powder-with-fermented-arnica-P500301?skuId=2796555"
  }),
  productData({
    code: "CONTOUR_023",
    category: "Makeup > Face > Contour",
    brand: "NARS",
    name: "Radiant Creamy Concealer with Hydrating Medium Coverage",
    type: "Contour",
    image: skuImage("2172310"),
    link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=2172310"
  }),
  productData({
    code: "CONTOUR_024",
    category: "Makeup > Face > Contour",
    brand: "tarte",
    name: "go with the faux freckle stamp",
    type: "Contour",
    image: skuImage("2923365"),
    link: "https://www.sephora.com/product/tarte-faux-freckle-stamp-P519624?skuId=2923365"
  }),
  productData({
    code: "CONTOUR_025",
    category: "Makeup > Face > Contour",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Contour",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "CONTOUR_026",
    category: "Makeup > Face > Contour",
    brand: "MAKEUP BY MARIO",
    name: "Softsculpt® Multi-Use Bronzing & Shaping Serum with Hyaluronic Acid",
    type: "Contour",
    image: skuImage("2775617"),
    link: "https://www.sephora.com/product/makeup-by-mario-softsculpt-bronzing-shaping-serum-P511568?skuId=2775617"
  }),
  productData({
    code: "CONTOUR_027",
    category: "Makeup > Face > Contour",
    brand: "Too Faced",
    name: "Born This Way Super Coverage Multi-Use Concealer with Hyaluronic Acid",
    type: "Contour",
    image: skuImage("2084408"),
    link: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298?skuId=2084408"
  }),
  productData({
    code: "CONTOUR_028",
    category: "Makeup > Face > Contour",
    brand: "HUNG VANNGO BEAUTY",
    name: "Tansculpt Cream Bronzing Contour Balm with Vitamin E",
    type: "Contour",
    image: skuImage("2969806"),
    link: "https://www.sephora.com/product/tansculpt-cream-bronzing-contour-balm-with-vitamin-e-P521648?skuId=2969806"
  }),
  productData({
    code: "CONTOUR_029",
    category: "Makeup > Face > Contour",
    brand: "Freck Beauty",
    name: "FACE HACK Precision Sculpting Cream Contour Bronzer Stick",
    type: "Contour",
    image: skuImage("2658557"),
    link: "https://www.sephora.com/product/freck-beauty-face-hack-precision-sculpting-bronzer-P505422?skuId=2658557"
  }),
  productData({
    code: "CONTOUR_030",
    category: "Makeup > Face > Contour",
    brand: "ISAMAYA",
    name: "Sculpting Stick- Precision Cream Contour Stick with Ceramides",
    type: "Contour",
    image: skuImage("2855633"),
    link: "https://www.sephora.com/product/sculpting-stick-precision-cream-contour-stick-with-ceramides-P515443?skuId=2855633"
  }),
  productData({
    code: "CONTOUR_031",
    category: "Makeup > Face > Contour",
    brand: "MILK MAKEUP",
    name: "Matte Cream Bronzer Stick",
    type: "Contour",
    image: skuImage("2639722"),
    link: "https://www.sephora.com/product/matte-bronzer-P404797?skuId=2639722"
  }),
  productData({
    code: "CONTOUR_032",
    category: "Makeup > Face > Contour",
    brand: "tarte",
    name: "macaron sculpt & bronze™ duo",
    type: "Contour",
    image: skuImage("2977726"),
    link: "https://www.sephora.com/product/macaron-sculpt-bronze-P522236?skuId=2977726"
  }),
  productData({
    code: "CONTOUR_033",
    category: "Makeup > Face > Contour",
    brand: "Too Faced",
    name: "Mini Born This Way Super Coverage Multi-Use Concealer",
    type: "Contour",
    image: skuImage("2794329"),
    link: "https://www.sephora.com/product/too-faced-mini-born-this-way-super-coverage-multi-use-concealer-P512354?skuId=2794329"
  }),
  productData({
    code: "CONTOUR_034",
    category: "Makeup > Face > Contour",
    brand: "MAC Cosmetics",
    name: "Multisculpt Matte Liquid Eyeshadow + All-over Colour",
    type: "Contour",
    image: skuImage("2944106"),
    link: "https://www.sephora.com/product/mac-multisculpt-matte-liquid-eyeshadow-and-all-over-colour-P520529?skuId=2944106"
  }),
  productData({
    code: "CONTOUR_035",
    category: "Makeup > Face > Contour",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Contour",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "CONTOUR_036",
    category: "Makeup > Face > Contour",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo for Buildable, Radiant Finish",
    type: "Contour",
    image: skuImage("2602837"),
    link: "https://www.sephora.com/product/shade-illuminate-P422574?skuId=2602837"
  }),
  productData({
    code: "CONTOUR_037",
    category: "Makeup > Face > Contour",
    brand: "ciele",
    name: "sculpt & PROTECT SPF 30+ bronzing cream contour stick",
    type: "Contour",
    image: skuImage("2708386"),
    link: "https://www.sephora.com/product/sculpt-protect-spf-30-bronzing-contour-stick-P507783?skuId=2708386"
  }),
  productData({
    code: "CONTOUR_038",
    category: "Makeup > Face > Contour",
    brand: "Danessa Myricks Beauty",
    name: "Balm Contour",
    type: "Contour",
    image: skuImage("2796084"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-balm-contour-P473701?skuId=2796084"
  }),
  productData({
    code: "CONTOUR_039",
    category: "Makeup > Face > Contour",
    brand: "MAKE UP FOR EVER",
    name: "Artist Longwear Skin-fusing Contour Powder",
    type: "Contour",
    image: skuImage("2703031"),
    link: "https://www.sephora.com/product/artist-longwear-skin-fusing-contour-powder-p507362-P507362?skuId=2703031"
  }),
  productData({
    code: "CONTOUR_040",
    category: "Makeup > Face > Contour",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Dual-Ended Precision Sculpting Brush",
    type: "Contour",
    image: skuImage("2892529"),
    link: "https://www.sephora.com/product/dual-ended-precision-sculpting-brush-P519355?skuId=2892529"
  }),
  productData({
    code: "CONTOUR_041",
    category: "Makeup > Face > Contour",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Contour",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "CONTOUR_042",
    category: "Makeup > Face > Contour",
    brand: "Too Faced",
    name: "Chocolate Soleil Multi-Use Sculpting Pencil",
    type: "Contour",
    image: skuImage("2966117"),
    link: "https://www.sephora.com/product/too-faced-chocolate-soleil-precision-pencil-P521487?skuId=2966117"
  }),
  productData({
    code: "CONTOUR_043",
    category: "Makeup > Face > Contour",
    brand: "Westman Atelier",
    name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
    type: "Contour",
    image: skuImage("2869105"),
    link: "https://www.sephora.com/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091?skuId=2869105"
  }),
  productData({
    code: "CONTOUR_044",
    category: "Makeup > Face > Contour",
    brand: "Freck Beauty",
    name: "Freck The Original Freckle",
    type: "Contour",
    image: skuImage("2441129"),
    link: "https://www.sephora.com/product/freck-beauty-freck-og-the-original-P468653?skuId=2441129"
  }),
  productData({
    code: "CONTOUR_045",
    category: "Makeup > Face > Contour",
    brand: "NUDESTIX",
    name: "Tinted Blur Contour Stick",
    type: "Contour",
    image: skuImage("2601110"),
    link: "https://www.sephora.com/product/tinted-blur-sculpt-stick-P501155?skuId=2601110"
  }),
  productData({
    code: "CONTOUR_046",
    category: "Makeup > Face > Contour",
    brand: "Bobbi Brown",
    name: "Matte Bronzing Powder",
    type: "Contour",
    image: skuImage("2701795"),
    link: "https://www.sephora.com/product/bronzing-powder-P270548?skuId=2701795"
  }),
  productData({
    code: "CONTOUR_047",
    category: "Makeup > Face > Contour",
    brand: "ciele",
    name: "bronze & PROTECT SPF 50+ bronzing concentrate",
    type: "Contour",
    image: skuImage("2768679"),
    link: "https://www.sephora.com/product/ciele-bronze-and-protect-spf-50-bronzing-concentrate-P512270?skuId=2768679"
  }),
  productData({
    code: "CONTOUR_048",
    category: "Makeup > Face > Contour",
    brand: "Anastasia Beverly Hills",
    name: "Matte Contour and Sculpt Cream Bronzer",
    type: "Contour",
    image: skuImage("2448736"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-cream-bronzer-P474812?skuId=2448736"
  }),
  productData({
    code: "CONTOUR_049",
    category: "Makeup > Face > Contour",
    brand: "NATASHA DENONA",
    name: "HY-SCULPT Liquid Bronzer",
    type: "Contour",
    image: skuImage("2890275"),
    link: "https://www.sephora.com/product/hy-sculpt-liquid-bronzer-P518216?skuId=2890275"
  }),
  productData({
    code: "CONTOUR_050",
    category: "Makeup > Face > Contour",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Dual-Ended Sculpting Brush",
    type: "Contour",
    image: skuImage("2884617"),
    link: "https://www.sephora.com/product/mph-mary-phillips-underpainting-dual-ended-sculpting-brush-P518753?skuId=2884617"
  }),
  productData({
    code: "CONTOUR_051",
    category: "Makeup > Face > Contour",
    brand: "Glossier",
    name: "Cloud Paint Gel Cream Bronzer",
    type: "Contour",
    image: skuImage("2737708"),
    link: "https://www.sephora.com/product/glossier-cloud-paint-gel-cream-bronzer-P509855?skuId=2737708"
  }),
  productData({
    code: "CONTOUR_052",
    category: "Makeup > Face > Contour",
    brand: "MAKE UP FOR EVER",
    name: "158 Double Ended Sculpting Brush",
    type: "Contour",
    image: skuImage("1536309"),
    link: "https://www.sephora.com/product/158-double-ended-sculpting-brush-P382379?skuId=1536309"
  }),
  productData({
    code: "CONTOUR_053",
    category: "Makeup > Face > Contour",
    brand: "MAKE UP FOR EVER",
    name: "156 Large Flat Blush Brush",
    type: "Contour",
    image: skuImage("1536291"),
    link: "https://www.sephora.com/product/156-large-flat-blush-brush-P382438?skuId=1536291"
  }),
  productData({
    code: "CONTOUR_054",
    category: "Makeup > Face > Contour",
    brand: "Sarah Creal",
    name: "Dual Contour Precision Cheek And Eye Brush",
    type: "Contour",
    image: skuImage("2852929"),
    link: "https://www.sephora.com/product/dual-contour-precision-cheek-eye-brush-P515934?skuId=2852929"
  }),
  productData({
    code: "CONTOUR_055",
    category: "Makeup > Face > Contour",
    brand: "Anastasia Beverly Hills",
    name: "Magic Touch Medium to Full Coverage Concealer",
    type: "Contour",
    image: skuImage("2480481"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-concealer-P475045?skuId=2480481"
  }),
  productData({
    code: "CONTOUR_056",
    category: "Makeup > Face > Contour",
    brand: "Anastasia Beverly Hills",
    name: "Impeccable Foundation & Face Brush",
    type: "Contour",
    image: skuImage("2976066"),
    link: "https://www.sephora.com/product/impeccable-foundation-face-brush-P521781?skuId=2976066"
  }),
  productData({
    code: "CONTOUR_057",
    category: "Makeup > Face > Contour",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Made for Shade Bronze & Sculpt Trio Palette",
    type: "Contour",
    image: skuImage("2547958"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-made-for-shade-bronze-sculpt-trio-palette-P482710?skuId=2547958"
  }),
  productData({
    code: "CONTOUR_058",
    category: "Makeup > Face > Contour",
    brand: "Summer Fridays",
    name: "The Bronzer Brush",
    type: "Contour",
    image: skuImage("2968881"),
    link: "https://www.sephora.com/product/the-bronzer-brush-P522831?skuId=2968881"
  }),

  // ==================================================
  // Makeup > Face > Color Correct
  // Products: 32
  // ==================================================
  productData({
    code: "COLOR_CORRECT_001",
    category: "Makeup > Face > Color Correct",
    brand: "HUDA BEAUTY",
    name: "Mini #FauxFilter Brightening Under Eye Color Corrector",
    type: "Color Correct",
    image: skuImage("2934222"),
    link: "https://www.sephora.com/product/mini-ffcc-P517330?skuId=2934222"
  }),
  productData({
    code: "COLOR_CORRECT_002",
    category: "Makeup > Face > Color Correct",
    brand: "Kosas",
    name: "Revealer Extra Bright Serum-Powered Color Correctors for Dark Circles",
    type: "Color Correct",
    image: skuImage("2840783"),
    link: "https://www.sephora.com/product/kosas-revealer-extra-bright-serum-powered-color-correctors-P514585?skuId=2840783"
  }),
  productData({
    code: "COLOR_CORRECT_003",
    category: "Makeup > Face > Color Correct",
    brand: "tarte",
    name: "shape tape™ full coverage hydrating color corrector",
    type: "Color Correct",
    image: skuImage("2955524"),
    link: "https://www.sephora.com/product/shape-tape-corrector-P521111?skuId=2955524"
  }),
  productData({
    code: "COLOR_CORRECT_004",
    category: "Makeup > Face > Color Correct",
    brand: "HUDA BEAUTY",
    name: "#FauxFilter Brightening Under Eye Color Corrector",
    type: "Color Correct",
    image: skuImage("2739456"),
    link: "https://www.sephora.com/product/fauxfilter-under-eye-color-corrector-P506560?skuId=2739456"
  }),
  productData({
    code: "COLOR_CORRECT_005",
    category: "Makeup > Face > Color Correct",
    brand: "Bobbi Brown",
    name: "Skin Long-Wearing Color Corrector Stick",
    type: "Color Correct",
    image: skuImage("2513604"),
    link: "https://www.sephora.com/product/bobbi-brown-skin-corrector-stick-P480282?skuId=2513604"
  }),
  productData({
    code: "COLOR_CORRECT_006",
    category: "Makeup > Face > Color Correct",
    brand: "tarte",
    name: "CC full coverage undereye color corrector",
    type: "Color Correct",
    image: skuImage("1626951"),
    link: "https://www.sephora.com/product/colored-clay-cc-undereye-corrector-P387175?skuId=1626951"
  }),
  productData({
    code: "COLOR_CORRECT_007",
    category: "Makeup > Face > Color Correct",
    brand: "SEPHORA COLLECTION",
    name: "Best Skin Ever 8HR Color Corrector",
    type: "Color Correct",
    image: skuImage("2760809"),
    link: "https://www.sephora.com/product/best-skin-ever-color-corrector-P512793?skuId=2760809"
  }),
  productData({
    code: "COLOR_CORRECT_008",
    category: "Makeup > Face > Color Correct",
    brand: "Givenchy",
    name: "Prisme Libre Skin-Caring Color Corrector",
    type: "Color Correct",
    image: skuImage("2948917"),
    link: "https://www.sephora.com/product/prisme-libre-skin-caring-corrector-P504939?skuId=2948917"
  }),
  productData({
    code: "COLOR_CORRECT_009",
    category: "Makeup > Face > Color Correct",
    brand: "caliray",
    name: "Hideaway Brightening + Hydrating Under Eye Color Corrector Concealer",
    type: "Color Correct",
    image: skuImage("2846228"),
    link: "https://www.sephora.com/product/caliray-hideaway-brightening-hydrating-under-eye-color-corrector-concealer-P510426?skuId=2846228"
  }),
  productData({
    code: "COLOR_CORRECT_010",
    category: "Makeup > Face > Color Correct",
    brand: "Charlotte Tilbury",
    name: "Magic Vanish Color Corrector",
    type: "Color Correct",
    image: skuImage("2245090"),
    link: "https://www.sephora.com/product/magic-vanish-color-corrector-P449571?skuId=2245090"
  }),
  productData({
    code: "COLOR_CORRECT_011",
    category: "Makeup > Face > Color Correct",
    brand: "NATASHA DENONA",
    name: "Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Color Corrector",
    type: "Color Correct",
    image: skuImage("2671246"),
    link: "https://www.sephora.com/product/natasha-denona-hy-glam-brightening-hydrating-medium-to-full-coverage-crease-proof-serum-color-corrector-P505841?skuId=2671246"
  }),
  productData({
    code: "COLOR_CORRECT_012",
    category: "Makeup > Face > Color Correct",
    brand: "ILIA",
    name: "Skin Blur Serum Concealer with 12-Hour Wear",
    type: "Color Correct",
    image: skuImage("2893097"),
    link: "https://www.sephora.com/product/skin-blur-hydrating-serum-concealer-P520377?skuId=2893097"
  }),
  productData({
    code: "COLOR_CORRECT_013",
    category: "Makeup > Face > Color Correct",
    brand: "Sarah Creal",
    name: "Face Flex Color Corrector Instant Under Eye Brightener",
    type: "Color Correct",
    image: skuImage("2932374"),
    link: "https://www.sephora.com/product/face-flex-color-corrector-instant-under-eye-brightener-P520691?skuId=2932374"
  }),
  productData({
    code: "COLOR_CORRECT_014",
    category: "Makeup > Face > Color Correct",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Under Eye Brightener",
    type: "Color Correct",
    image: skuImage("2629418"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-under-eye-brightener-P503714?skuId=2629418"
  }),
  productData({
    code: "COLOR_CORRECT_015",
    category: "Makeup > Face > Color Correct",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Color Correct",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "COLOR_CORRECT_016",
    category: "Makeup > Face > Color Correct",
    brand: "stila",
    name: "Correct & Perfect All-In-One Color Correcting Palette",
    type: "Color Correct",
    image: skuImage("1776848"),
    link: "https://www.sephora.com/product/correct-perfect-all-in-one-color-correcting-palette-P406281?skuId=1776848"
  }),
  productData({
    code: "COLOR_CORRECT_017",
    category: "Makeup > Face > Color Correct",
    brand: "MAKE UP FOR EVER",
    name: "Mini Step 1 Primer Color Corrector – 24HR Redness Control & Hydrating Primer",
    type: "Color Correct",
    image: skuImage("2640779"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-step-1-primer-color-corrector-24hr-redness-control-hydrating-primer-P504180?skuId=2640779"
  }),
  productData({
    code: "COLOR_CORRECT_018",
    category: "Makeup > Face > Color Correct",
    brand: "OLEHENRIKSEN",
    name: "Banana Bright+ Vitamin CC Eye Sticks for Dark Circles",
    type: "Color Correct",
    image: skuImage("2648483"),
    link: "https://www.sephora.com/product/banana-bright-vitamin-cc-eye-sticks-P504639?skuId=2648483"
  }),
  productData({
    code: "COLOR_CORRECT_019",
    category: "Makeup > Face > Color Correct",
    brand: "Dr. Jart+",
    name: "Cicapair ™ Tiger Grass Camo Drops Color Corrector SPF 35",
    type: "Color Correct",
    image: skuImage("2450856"),
    link: "https://www.sephora.com/product/cicapair-tiger-grass-camo-drops-P429250?skuId=2450856"
  }),
  productData({
    code: "COLOR_CORRECT_020",
    category: "Makeup > Face > Color Correct",
    brand: "stila",
    name: "One Step Correct",
    type: "Color Correct",
    image: skuImage("1277474"),
    link: "https://www.sephora.com/product/one-step-correct-P269019?skuId=1277474"
  }),
  productData({
    code: "COLOR_CORRECT_021",
    category: "Makeup > Face > Color Correct",
    brand: "LIXR Beauty",
    name: "Multi-Use Cream-to-Powder Concealer & Foundation Stick",
    type: "Color Correct",
    image: skuImage("2955284"),
    link: "https://www.sephora.com/product/lixr-complexion-stick-P521062?skuId=2955284"
  }),
  productData({
    code: "COLOR_CORRECT_022",
    category: "Makeup > Face > Color Correct",
    brand: "MAKE UP FOR EVER",
    name: "Ultra HD Underpainting Color Correction Palette",
    type: "Color Correct",
    image: skuImage("2034775"),
    link: "https://www.sephora.com/product/ultra-hd-underpainting-correction-palette-P428677?skuId=2034775"
  }),
  productData({
    code: "COLOR_CORRECT_023",
    category: "Makeup > Face > Color Correct",
    brand: "Kosas",
    name: "Brighten & Blur Set - Color Corrector + Loose Setting Powder Face Set",
    type: "Color Correct",
    image: skuImage("2935989"),
    link: "https://www.sephora.com/product/brighten-and-blur-set-color-corrector-loose-setting-powder-face-set-P520516?skuId=2935989"
  }),
  productData({
    code: "COLOR_CORRECT_024",
    category: "Makeup > Face > Color Correct",
    brand: "tarte",
    name: "maracuja creaseless creamy color corrector",
    type: "Color Correct",
    image: skuImage("2781664"),
    link: "https://www.sephora.com/product/tarte-maracuja-creaseless-color-corrector-P512245?skuId=2781664"
  }),
  productData({
    code: "COLOR_CORRECT_025",
    category: "Makeup > Face > Color Correct",
    brand: "ISAMAYA",
    name: "Color Correcting Skin Tint Serum",
    type: "Color Correct",
    image: skuImage("2855427"),
    link: "https://www.sephora.com/product/color-correcting-skin-tint-serum-P515445?skuId=2855427"
  }),
  productData({
    code: "COLOR_CORRECT_026",
    category: "Makeup > Face > Color Correct",
    brand: "GUERLAIN",
    name: "Meteorites Setting & Finishing Illuminating Powder Pearls",
    type: "Color Correct",
    image: skuImage("2780096"),
    link: "https://www.sephora.com/product/meteorites-illuminating-powder-pearls-P266308?skuId=2780096"
  }),
  productData({
    code: "COLOR_CORRECT_027",
    category: "Makeup > Face > Color Correct",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Matte Contour Skinstick",
    type: "Color Correct",
    image: skuImage("2589927"),
    link: "https://www.sephora.com/product/match-stix-matte-skinstick-P18975403?skuId=2589927"
  }),
  productData({
    code: "COLOR_CORRECT_028",
    category: "Makeup > Face > Color Correct",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Color Corrector - Redness Corrector",
    type: "Color Correct",
    image: skuImage("2424703"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-redness-corrector-P468185?skuId=2424703"
  }),
  productData({
    code: "COLOR_CORRECT_029",
    category: "Makeup > Face > Color Correct",
    brand: "Dr. Jart+",
    name: "Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
    type: "Color Correct",
    image: skuImage("2604494"),
    link: "https://www.sephora.com/product/premium-bb-tinted-moisturizer-with-niacinamide-spf-40-P501005?skuId=2604494"
  }),
  productData({
    code: "COLOR_CORRECT_030",
    category: "Makeup > Face > Color Correct",
    brand: "MAKE UP FOR EVER",
    name: "Color Correcting Step 1 Primers",
    type: "Color Correct",
    image: skuImage("2424752"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-tone-up-perfector-P468186?skuId=2424752"
  }),
  productData({
    code: "COLOR_CORRECT_031",
    category: "Makeup > Face > Color Correct",
    brand: "Givenchy",
    name: "Prisme Libre Illuminating & Color Correcting Loose Powder",
    type: "Color Correct",
    image: skuImage("2788602"),
    link: "https://www.sephora.com/product/prisme-libre-loose-powder-P390722?skuId=2788602"
  }),
  productData({
    code: "COLOR_CORRECT_032",
    category: "Makeup > Face > Color Correct",
    brand: "ISAMAYA",
    name: "5 Point Lift Illuminator",
    type: "Color Correct",
    image: skuImage("2856029"),
    link: "https://www.sephora.com/product/5-point-lift-color-correcting-concealer-with-caffeine-P515460?skuId=2856029"
  }),

  // ==================================================
  // Makeup > Face > BB & CC Cream
  // Products: 16
  // ==================================================
  productData({
    code: "BB_CC_CREAM_001",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Erborian",
    name: "CC Cream Color-Corrector for Natural Luminous Finish with Korean Centella Asiatica Extract",
    type: "BB & CC Cream",
    image: skuImage("2967446"),
    link: "https://www.sephora.com/product/erborian-cc-cream-color-corrector-for-natural-luminous-finish-with-korean-centella-asiatica-extract-P521605?skuId=2967446"
  }),
  productData({
    code: "BB_CC_CREAM_002",
    category: "Makeup > Face > BB & CC Cream",
    brand: "IT Cosmetics",
    name: "CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
    type: "BB & CC Cream",
    image: skuImage("2840676"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-cream-spf-50-P411885?skuId=2840676"
  }),
  productData({
    code: "BB_CC_CREAM_003",
    category: "Makeup > Face > BB & CC Cream",
    brand: "IT Cosmetics",
    name: "CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40 and Niacinamide",
    type: "BB & CC Cream",
    image: skuImage("2966208"),
    link: "https://www.sephora.com/product/it-cosmetics-cc-nude-glow-lightweight-foundation-glow-serum-spf-40-niacinamide-P482010?skuId=2966208"
  }),
  productData({
    code: "BB_CC_CREAM_004",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Erborian",
    name: "CC Red Correct Green Color-Corrector SPF 25 to Cover Redness, with Korean Centella Asiatica Extract",
    type: "BB & CC Cream",
    image: skuImage("2967339"),
    link: "https://www.sephora.com/product/cc-red-correct-green-color-corrector-spf-25-to-cover-redness-with-korean-centella-asiatica-extract-P521602?skuId=2967339"
  }),
  productData({
    code: "BB_CC_CREAM_005",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Dr. Jart+",
    name: "Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
    type: "BB & CC Cream",
    image: skuImage("2604494"),
    link: "https://www.sephora.com/product/premium-bb-tinted-moisturizer-with-niacinamide-spf-40-P501005?skuId=2604494"
  }),
  productData({
    code: "BB_CC_CREAM_006",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Summer Fridays",
    name: "Sheer Skin Tint with Hyaluronic Acid + Squalane",
    type: "BB & CC Cream",
    image: skuImage("2536183"),
    link: "https://www.sephora.com/product/sheer-skin-tint-with-hyaluronic-acid-squalane-P501777?skuId=2536183"
  }),
  productData({
    code: "BB_CC_CREAM_007",
    category: "Makeup > Face > BB & CC Cream",
    brand: "IT Cosmetics",
    name: "Mini CC+ Cream Full Coverage Color Correcting Foundation with SPF 50+",
    type: "BB & CC Cream",
    image: skuImage("2872679"),
    link: "https://www.sephora.com/product/your-skin-but-better-trade-cc-trade-cream-with-spf-50-mini-P425876?skuId=2872679"
  }),
  productData({
    code: "BB_CC_CREAM_008",
    category: "Makeup > Face > BB & CC Cream",
    brand: "tarte",
    name: "mini BB blur natural matte tinted moisturizer Broad Spectrum SPF 30 Sunscreen",
    type: "BB & CC Cream",
    image: skuImage("2413078"),
    link: "https://www.sephora.com/product/tarte-mini-bb-tinted-treatment-12-hour-primer-broad-spectrum-spf-30-sunscreen-P468223?skuId=2413078"
  }),
  productData({
    code: "BB_CC_CREAM_009",
    category: "Makeup > Face > BB & CC Cream",
    brand: "tarte",
    name: "CC full coverage undereye color corrector",
    type: "BB & CC Cream",
    image: skuImage("1626951"),
    link: "https://www.sephora.com/product/colored-clay-cc-undereye-corrector-P387175?skuId=1626951"
  }),
  productData({
    code: "BB_CC_CREAM_010",
    category: "Makeup > Face > BB & CC Cream",
    brand: "tarte",
    name: "BB blur natural matte tinted moisturizer Broad Spectrum SPF 30 Sunscreen",
    type: "BB & CC Cream",
    image: skuImage("2413045"),
    link: "https://www.sephora.com/product/bb-tinted-treatment-12-hour-primer-broad-spectrum-spf-30-sunscreen-P377542?skuId=2413045"
  }),
  productData({
    code: "BB_CC_CREAM_011",
    category: "Makeup > Face > BB & CC Cream",
    brand: "CLINIQUE",
    name: "Moisture Surge™ CC Cream Hydrating Color Corrector Broad Spectrum SPF 30",
    type: "BB & CC Cream",
    image: skuImage("1509512"),
    link: "https://www.sephora.com/product/moisture-surge-cc-cream-hydrating-colour-corrector-broad-spectrum-spf-30-P378639?skuId=1509512"
  }),
  productData({
    code: "BB_CC_CREAM_012",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Supergoop!",
    name: "Protec(tint) Daily SPF Tint SPF 50 Sunscreen Skin Tint with Ectoin",
    type: "BB & CC Cream",
    image: skuImage("2734952"),
    link: "https://www.sephora.com/product/supergoop-protec-tint-daily-spf-tint-spf-50-sunscreen-skin-tint-with-hyaluronic-acid-infused-clay-P510355?skuId=2734952"
  }),
  productData({
    code: "BB_CC_CREAM_013",
    category: "Makeup > Face > BB & CC Cream",
    brand: "IT Cosmetics",
    name: "CC+ Cream Natural Matte Foundation with SPF 40",
    type: "BB & CC Cream",
    image: skuImage("2773695"),
    link: "https://www.sephora.com/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447?skuId=2773695"
  }),
  productData({
    code: "BB_CC_CREAM_014",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Kosas",
    name: "BB Burst Tinted Moisturizer Gel Cream with Copper Peptides",
    type: "BB & CC Cream",
    image: skuImage("2737617"),
    link: "https://www.sephora.com/product/kosas-bb-burst-tinted-moisturizer-gel-cream-with-copper-peptides-P510072?skuId=2737617"
  }),
  productData({
    code: "BB_CC_CREAM_015",
    category: "Makeup > Face > BB & CC Cream",
    brand: "Anastasia Beverly Hills",
    name: "Beauty Balm Serum Boosted Skin Tint",
    type: "BB & CC Cream",
    image: skuImage("2752848"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-beauty-balm-skin-serum-boosted-skin-tint-P511190?skuId=2752848"
  }),
  productData({
    code: "BB_CC_CREAM_016",
    category: "Makeup > Face > BB & CC Cream",
    brand: "IT Cosmetics",
    name: "CC+ Cream Illumination with SPF 50+",
    type: "BB & CC Cream",
    image: skuImage("1869015"),
    link: "https://www.sephora.com/product/your-skin-but-better-cc-illumination-cream-spf-50-P411884?skuId=1869015"
  }),

  // ==================================================
  // Makeup > Face > Highlighter
  // Products: 122
  // ==================================================
  productData({
    code: "HIGHLIGHTER_001",
    category: "Makeup > Face > Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Gleam & Go Liquid Luminizer",
    type: "Highlighter",
    image: skuImage("2932564"),
    link: "https://www.sephora.com/product/gleam-glow-luminizer-P520687?skuId=2932564"
  }),
  productData({
    code: "HIGHLIGHTER_002",
    category: "Makeup > Face > Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Sephora Colorful® Powder Luminizer",
    type: "Highlighter",
    image: skuImage("2711760"),
    link: "https://www.sephora.com/product/sephora-colorful-powder-luminizer-P509722?skuId=2711760"
  }),
  productData({
    code: "HIGHLIGHTER_003",
    category: "Makeup > Face > Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Liquid Luminizer Highlight",
    type: "Highlighter",
    image: skuImage("2848356"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-liquid-luminizer-highlight-P38855877?skuId=2848356"
  }),
  productData({
    code: "HIGHLIGHTER_004",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Freestyle Highlighter",
    type: "Highlighter",
    image: skuImage("1925916"),
    link: "https://www.sephora.com/product/killawatt-freestyle-highlighter-P64879845?skuId=1925916"
  }),
  productData({
    code: "HIGHLIGHTER_005",
    category: "Makeup > Face > Highlighter",
    brand: "Saie",
    name: "Glowy Super Gel Lightweight Dewy Multipurpose Illuminator",
    type: "Highlighter",
    image: skuImage("2834943"),
    link: "https://www.sephora.com/product/saie-glowy-super-gel-lightweight-dewy-highlighter-P468206?skuId=2834943"
  }),
  productData({
    code: "HIGHLIGHTER_006",
    category: "Makeup > Face > Highlighter",
    brand: "DIOR",
    name: "Forever Glow Luminizer Highlighter",
    type: "Highlighter",
    image: skuImage("2836435"),
    link: "https://www.sephora.com/product/dior-forever-glow-luminizer-highlighter-P515394?skuId=2836435"
  }),
  productData({
    code: "HIGHLIGHTER_007",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Diamond Bomb",
    type: "Highlighter",
    image: skuImage("2912277"),
    link: "https://www.sephora.com/product/mini-diamond-bomb-P518419?skuId=2912277"
  }),
  productData({
    code: "HIGHLIGHTER_008",
    category: "Makeup > Face > Highlighter",
    brand: "Rare Beauty by Selena Gomez",
    name: "Mini Positive Light Liquid Luminizer",
    type: "Highlighter",
    image: skuImage("2761997"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-mini-positive-light-liquid-luminizer-P509964?skuId=2761997"
  }),
  productData({
    code: "HIGHLIGHTER_009",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Beauty Highlighter Wand",
    type: "Highlighter",
    image: skuImage("2366524"),
    link: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154?skuId=2366524"
  }),
  productData({
    code: "HIGHLIGHTER_010",
    category: "Makeup > Face > Highlighter",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Radiant Glassy Balm Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2850345"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434?skuId=2850345"
  }),
  productData({
    code: "HIGHLIGHTER_011",
    category: "Makeup > Face > Highlighter",
    brand: "Tatcha",
    name: "The Serum Stick Line-Smoothing Treatment & Touch Up Balm",
    type: "Highlighter",
    image: skuImage("2315323"),
    link: "https://www.sephora.com/product/tatcha-the-serum-stick-treatment-touch-up-balm-P454018?skuId=2315323"
  }),
  productData({
    code: "HIGHLIGHTER_012",
    category: "Makeup > Face > Highlighter",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Bio-Radiant Gel-Powder Illuminating Highlighter with Fermented Arnica",
    type: "Highlighter",
    image: skuImage("2572626"),
    link: "https://www.sephora.com/product/bio-radiant-gel-powder-highlighter-with-fermented-arnica-P500314?skuId=2572626"
  }),
  productData({
    code: "HIGHLIGHTER_013",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Diamond Bomb All-Over Diamond Veil",
    type: "Highlighter",
    image: skuImage("2385169"),
    link: "https://www.sephora.com/product/diamond-bomb-all-over-diamond-veil-P85225585?skuId=2385169"
  }),
  productData({
    code: "HIGHLIGHTER_014",
    category: "Makeup > Face > Highlighter",
    brand: "Tatcha",
    name: "The Dewy Serum Resurfacing and Plumping Treatment",
    type: "Highlighter",
    image: "https://www.sephora.com/productimages/sku/s2406858-av-14-zoom.jpg?pb=clean-at-sephora&imwidth=315",
    link: "https://www.sephora.com/product/tatcha-the-dewy-serum-resurfacing-plumping-treatment-P466155?skuId=2406858"
  }),
  productData({
    code: "HIGHLIGHTER_015",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Blush & Glow Palette",
    type: "Highlighter",
    image: skuImage("2705440"),
    link: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700?skuId=2705440"
  }),
  productData({
    code: "HIGHLIGHTER_016",
    category: "Makeup > Face > Highlighter",
    brand: "MILK MAKEUP",
    name: "Dewy Cream Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2135333"),
    link: "https://www.sephora.com/product/dewy-cream-highlighter-stick-P404798?skuId=2135333"
  }),
  productData({
    code: "HIGHLIGHTER_017",
    category: "Makeup > Face > Highlighter",
    brand: "MERIT",
    name: "Day Glow Dewy Highlighting Balm",
    type: "Highlighter",
    image: skuImage("2775203"),
    link: "https://www.sephora.com/product/merit-day-glow-highlighting-balm-P468696?skuId=2775203"
  }),
  productData({
    code: "HIGHLIGHTER_018",
    category: "Makeup > Face > Highlighter",
    brand: "PATRICK TA",
    name: "Major Glow Creme & Powder Light Reflecting Translucent Highlighter Duo",
    type: "Highlighter",
    image: skuImage("2779718"),
    link: "https://www.sephora.com/product/major-glow-creme-powder-light-reflecting-translucent-highlighter-duo-P516953?skuId=2779718"
  }),
  productData({
    code: "HIGHLIGHTER_019",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Flawless Filter",
    type: "Highlighter",
    image: skuImage("2890978"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-hollywood-flawless-filter-P467607?skuId=2890978"
  }),
  productData({
    code: "HIGHLIGHTER_020",
    category: "Makeup > Face > Highlighter",
    brand: "Givenchy",
    name: "Prisme Libre Strobing & Illuminating Highlighter Powder",
    type: "Highlighter",
    image: skuImage("2947679"),
    link: "https://www.sephora.com/product/prisme-libre-strobing-and-illuminating-highlighter-powder-P520320?skuId=2947679"
  }),
  productData({
    code: "HIGHLIGHTER_021",
    category: "Makeup > Face > Highlighter",
    brand: "Armani Beauty",
    name: "Fluid Sheer Glow Enhancer Highlighter",
    type: "Highlighter",
    image: skuImage("2442663"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-fluid-sheer-glow-enhancer-highlighter-P469835?skuId=2442663"
  }),
  productData({
    code: "HIGHLIGHTER_022",
    category: "Makeup > Face > Highlighter",
    brand: "Westman Atelier",
    name: "Mini Petite Lit Up Glassy Gel Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2594331"),
    link: "https://www.sephora.com/product/petite-lit-up-highlight-stick-P500321?skuId=2594331"
  }),
  productData({
    code: "HIGHLIGHTER_023",
    category: "Makeup > Face > Highlighter",
    brand: "Westman Atelier",
    name: "Lit Up Glassy Gel Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2648038"),
    link: "https://www.sephora.com/product/westman-atelier-lit-up-highlight-stick-P468430?skuId=2648038"
  }),
  productData({
    code: "HIGHLIGHTER_024",
    category: "Makeup > Face > Highlighter",
    brand: "DIOR",
    name: "Forever Glow Maximizer Longwear Liquid Highlighter",
    type: "Highlighter",
    image: skuImage("2750826"),
    link: "https://www.sephora.com/product/dior-forever-glow-maximizer-longwear-liquid-highlighter-P510547?skuId=2750826"
  }),
  productData({
    code: "HIGHLIGHTER_025",
    category: "Makeup > Face > Highlighter",
    brand: "ILIA",
    name: "Multi-Stick Cream Blush + Highlighter + Lip Tint",
    type: "Highlighter",
    image: skuImage("2564359"),
    link: "https://www.sephora.com/product/multi-stick-P411848?skuId=2564359"
  }),
  productData({
    code: "HIGHLIGHTER_026",
    category: "Makeup > Face > Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Face Bronzer, Blush & Highlighter Palette",
    type: "Highlighter",
    image: skuImage("2820041"),
    link: "https://www.sephora.com/product/colorful-face-palettes-P514459?skuId=2820041"
  }),
  productData({
    code: "HIGHLIGHTER_027",
    category: "Makeup > Face > Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Glow Seeker Champagne Gold Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2799666"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-glow-seeker-highlighter-P509005?skuId=2799666"
  }),
  productData({
    code: "HIGHLIGHTER_028",
    category: "Makeup > Face > Highlighter",
    brand: "Kosas",
    name: "Shiny Objects Wet Glisten Highlighter Powder for Face and Eyes",
    type: "Highlighter",
    image: skuImage("2935880"),
    link: "https://www.sephora.com/product/shiny-objects-highlighter-P520040?skuId=2935880"
  }),
  productData({
    code: "HIGHLIGHTER_029",
    category: "Makeup > Face > Highlighter",
    brand: "Gucci",
    name: "Glow Multi-Use Illuminating Gel-Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2788370"),
    link: "https://www.sephora.com/product/gucci-gucci-glow-highlighter-P512763?skuId=2788370"
  }),
  productData({
    code: "HIGHLIGHTER_030",
    category: "Makeup > Face > Highlighter",
    brand: "Yves Saint Laurent",
    name: "Hyper Luminize Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2880854"),
    link: "https://www.sephora.com/product/yves-saint-laurent-ysl-hyper-luminize-powder-highlighter-P517012?skuId=2880854"
  }),
  productData({
    code: "HIGHLIGHTER_031",
    category: "Makeup > Face > Highlighter",
    brand: "HUDA BEAUTY",
    name: "Blush Filter Blurring Blushlighters Palette",
    type: "Highlighter",
    image: skuImage("2954642"),
    link: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601?skuId=2954642"
  }),
  productData({
    code: "HIGHLIGHTER_032",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    type: "Highlighter",
    image: skuImage("2419786"),
    link: "https://www.sephora.com/product/hollywood-flawless-filter-P434104?skuId=2419786"
  }),
  productData({
    code: "HIGHLIGHTER_033",
    category: "Makeup > Face > Highlighter",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder Lowlighter Soft Glow Highlighter",
    type: "Highlighter",
    image: skuImage("2774396"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-lowlighter-soft-glow-highlighter-P510405?skuId=2774396"
  }),
  productData({
    code: "HIGHLIGHTER_034",
    category: "Makeup > Face > Highlighter",
    brand: "Sarah Creal",
    name: "Today's Highlights 12H Peptide Balm Luminizer",
    type: "Highlighter",
    image: skuImage("2852887"),
    link: "https://www.sephora.com/product/todays-highlights-12-hour-peptide-balm-luminizer-P515933?skuId=2852887"
  }),
  productData({
    code: "HIGHLIGHTER_035",
    category: "Makeup > Face > Highlighter",
    brand: "Saie",
    name: "Glow Sculpt Multi-Use Cream Highlighting Blush",
    type: "Highlighter",
    image: skuImage("2679462"),
    link: "https://www.sephora.com/product/saie-the-glow-sculpt-P505541?skuId=2679462"
  }),
  productData({
    code: "HIGHLIGHTER_036",
    category: "Makeup > Face > Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Bronze Bronze Glow Face Palette",
    type: "Highlighter",
    image: skuImage("2960482"),
    link: "https://www.sephora.com/product/bronze-bronze-glow-face-palette-P522105?skuId=2960482"
  }),
  productData({
    code: "HIGHLIGHTER_037",
    category: "Makeup > Face > Highlighter",
    brand: "Too Faced",
    name: "Born This Way Super Glow Multi-Use Highlighting Skin Enhancer",
    type: "Highlighter",
    image: skuImage("2935476"),
    link: "https://www.sephora.com/product/born-this-way-super-glow-P520818?skuId=2935476"
  }),
  productData({
    code: "HIGHLIGHTER_038",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Foil Freestyle Highlighter",
    type: "Highlighter",
    image: skuImage("2211084"),
    link: "https://www.sephora.com/product/killawatt-foil-freestyle-highlighter-duo-P34908923?skuId=2211084"
  }),
  productData({
    code: "HIGHLIGHTER_039",
    category: "Makeup > Face > Highlighter",
    brand: "MAKEUP BY MARIO",
    name: "Soft Glow Highlighter",
    type: "Highlighter",
    image: skuImage("2449767"),
    link: "https://www.sephora.com/product/makeup-by-mario-soft-glow-highlighter-P472328?skuId=2449767"
  }),
  productData({
    code: "HIGHLIGHTER_040",
    category: "Makeup > Face > Highlighter",
    brand: "Tower 28 Beauty",
    name: "SuperDew Shimmer-Free Highlight Balm",
    type: "Highlighter",
    image: skuImage("2284867"),
    link: "https://www.sephora.com/product/superdew-shimmer-free-highlight-balm-P448855?skuId=2284867"
  }),
  productData({
    code: "HIGHLIGHTER_041",
    category: "Makeup > Face > Highlighter",
    brand: "DIOR",
    name: "Backstage Glassy Glow Stick Multi-Use Stick Highlighter Balm",
    type: "Highlighter",
    image: skuImage("2962504"),
    link: "https://www.sephora.com/product/backstage-glassy-glow-stick-multi-use-stick-highlighter-balm-P522583?skuId=2962504"
  }),
  productData({
    code: "HIGHLIGHTER_042",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Shimmer Skinstick",
    type: "Highlighter",
    image: skuImage("2589935"),
    link: "https://www.sephora.com/product/match-stix-shimmer-skinstick-P73124556?skuId=2589935"
  }),
  productData({
    code: "HIGHLIGHTER_043",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Unreal Skin Sheer Glow Tint Hydrating Foundation Stick",
    type: "Highlighter",
    image: skuImage("2765758"),
    link: "https://www.sephora.com/product/charlotte-tilbury-unreal-skin-sheer-glow-tint-hydrating-foundation-stick-P511699?skuId=2765758"
  }),
  productData({
    code: "HIGHLIGHTER_044",
    category: "Makeup > Face > Highlighter",
    brand: "Hourglass",
    name: "Ambient® Lighting Palette",
    type: "Highlighter",
    image: skuImage("2519767"),
    link: "https://www.sephora.com/product/ambient-lighting-palette-P382309?skuId=2519767"
  }),
  productData({
    code: "HIGHLIGHTER_045",
    category: "Makeup > Face > Highlighter",
    brand: "Too Faced",
    name: "Disco Crush High Shine Glitter Eye + Face Sparkle",
    type: "Highlighter",
    image: skuImage("2794519"),
    link: "https://www.sephora.com/product/too-faced-disco-crush-high-shine-glitter-eye-face-sparkle-P512319?skuId=2794519"
  }),
  productData({
    code: "HIGHLIGHTER_046",
    category: "Makeup > Face > Highlighter",
    brand: "Charlotte Tilbury",
    name: "Glow Glide Face Architect Highlighter",
    type: "Highlighter",
    image: skuImage("2643377"),
    link: "https://www.sephora.com/product/charlotte-tilbury-hollywood-glow-glide-highlighter-P503729?skuId=2643377"
  }),
  productData({
    code: "HIGHLIGHTER_047",
    category: "Makeup > Face > Highlighter",
    brand: "Too Faced",
    name: "Sun Bunny Luminous Blushing Bronzer",
    type: "Highlighter",
    image: skuImage("2966083"),
    link: "https://www.sephora.com/product/sun-bunny-luminous-blushing-bronzer-P522127?skuId=2966083"
  }),
  productData({
    code: "HIGHLIGHTER_048",
    category: "Makeup > Face > Highlighter",
    brand: "DIOR",
    name: "Limited Edition Forever Glow Luminizer Highlighter",
    type: "Highlighter",
    image: skuImage("2965010"),
    link: "https://www.sephora.com/product/limited-edition-forever-glow-luminizer-highlighter-P522108?skuId=2965010"
  }),
  productData({
    code: "HIGHLIGHTER_049",
    category: "Makeup > Face > Highlighter",
    brand: "caliray",
    name: "Light Source Blurring & Hydrating Illuminator",
    type: "Highlighter",
    image: skuImage("2962702"),
    link: "https://www.sephora.com/product/light-source-illuminator-P522521?skuId=2962702"
  }),
  productData({
    code: "HIGHLIGHTER_050",
    category: "Makeup > Face > Highlighter",
    brand: "MILK MAKEUP",
    name: "Cooling Water Jelly Shimmer Highlighter Stick for Face and Eyes",
    type: "Highlighter",
    image: skuImage("2938645"),
    link: "https://www.sephora.com/product/cooling-water-jelly-shimmer-P520582?skuId=2938645"
  }),
  productData({
    code: "HIGHLIGHTER_051",
    category: "Makeup > Face > Highlighter",
    brand: "MAC Cosmetics",
    name: "Skinfinish Lightstruck Hydrating, Radiant Glow Liquid Highlighter",
    type: "Highlighter",
    image: skuImage("2884377"),
    link: "https://www.sephora.com/product/skinfinish-lightstruck-light-reflecting-hydrating-lustrous-colour-liquid-highlighter-P517618?skuId=2884377"
  }),
  productData({
    code: "HIGHLIGHTER_052",
    category: "Makeup > Face > Highlighter",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Highlighter",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "HIGHLIGHTER_053",
    category: "Makeup > Face > Highlighter",
    brand: "ILIA",
    name: "Lightshift Weightless Silky Cream Highlighter with 12-hour Wear",
    type: "Highlighter",
    image: skuImage("2794923"),
    link: "https://www.sephora.com/product/ilia-lightshift-weightless-silky-cream-highlighter-P511708?skuId=2794923"
  }),
  productData({
    code: "HIGHLIGHTER_054",
    category: "Makeup > Face > Highlighter",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Blush and Highlighter Glaze",
    type: "Highlighter",
    image: skuImage("2871028"),
    link: "https://www.sephora.com/product/colorful-blush-glaze-P516171?skuId=2871028"
  }),
  productData({
    code: "HIGHLIGHTER_055",
    category: "Makeup > Face > Highlighter",
    brand: "MAC Cosmetics",
    name: "Multisculpt Matte Liquid Eyeshadow + All-over Colour",
    type: "Highlighter",
    image: skuImage("2944106"),
    link: "https://www.sephora.com/product/mac-multisculpt-matte-liquid-eyeshadow-and-all-over-colour-P520529?skuId=2944106"
  }),
  productData({
    code: "HIGHLIGHTER_056",
    category: "Makeup > Face > Highlighter",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Dew Drops Serum",
    type: "Highlighter",
    image: skuImage("2404846"),
    link: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123?skuId=2404846"
  }),
  productData({
    code: "HIGHLIGHTER_057",
    category: "Makeup > Face > Highlighter",
    brand: "Westman Atelier",
    name: "Super Loaded Tinted Cream Highlighter",
    type: "Highlighter",
    image: skuImage("2415081"),
    link: "https://www.sephora.com/product/westman-atelier-super-loaded-tinted-highlight-P468432?skuId=2415081"
  }),
  productData({
    code: "HIGHLIGHTER_058",
    category: "Makeup > Face > Highlighter",
    brand: "DIOR",
    name: "Forever Glow Star Filter Multi-Use Complexion Enhancing Booster",
    type: "Highlighter",
    image: skuImage("2751014"),
    link: "https://www.sephora.com/product/forever-glow-star-filter-multi-use-complexion-enhancing-booster-P509901?skuId=2751014"
  }),
  productData({
    code: "HIGHLIGHTER_059",
    category: "Makeup > Face > Highlighter",
    brand: "Armani Beauty",
    name: "Luminous Silk Acqua Highlighter",
    type: "Highlighter",
    image: skuImage("2799583"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-acqua-highlighter-P513504?skuId=2799583"
  }),
  productData({
    code: "HIGHLIGHTER_060",
    category: "Makeup > Face > Highlighter",
    brand: "REFY",
    name: "Gloss Highlighter",
    type: "Highlighter",
    image: skuImage("2473445"),
    link: "https://www.sephora.com/product/refy-beauty-gloss-highlighter-P475158?skuId=2473445"
  }),
  productData({
    code: "HIGHLIGHTER_061",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Killawatt Freestyle Highlighter",
    type: "Highlighter",
    image: skuImage("2929537"),
    link: "https://www.sephora.com/product/mini-killwatt-freestyle-highlighter-P520308?skuId=2929537"
  }),
  productData({
    code: "HIGHLIGHTER_062",
    category: "Makeup > Face > Highlighter",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "B12 Base Thinner Luminous Vitamin Pearl Boosting Serum",
    type: "Highlighter",
    image: skuImage("2943413"),
    link: "https://www.sephora.com/product/b12-base-thinner-luminous-vitamin-pearl-boosting-serum-P515065?skuId=2943413"
  }),
  productData({
    code: "HIGHLIGHTER_063",
    category: "Makeup > Face > Highlighter",
    brand: "NUDESTIX",
    name: "Nudies Glow Cream Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2834406"),
    link: "https://www.sephora.com/product/nudies-all-over-face-color-bronze-glow-P417912?skuId=2834406"
  }),
  productData({
    code: "HIGHLIGHTER_064",
    category: "Makeup > Face > Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "Artist Matte Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2690048"),
    link: "https://www.sephora.com/product/artist-longwear-skin-fusing-powder-highlighter-h100-P520850?skuId=2690048"
  }),
  productData({
    code: "HIGHLIGHTER_065",
    category: "Makeup > Face > Highlighter",
    brand: "Bobbi Brown",
    name: "Highlighter Powder",
    type: "Highlighter",
    image: skuImage("2577351"),
    link: "https://www.sephora.com/product/highlight-powder-P401602?skuId=2577351"
  }),
  productData({
    code: "HIGHLIGHTER_066",
    category: "Makeup > Face > Highlighter",
    brand: "ciele",
    name: "prime & PROTECT SPF 30+ Smoothing Primer",
    type: "Highlighter",
    image: skuImage("2927671"),
    link: "https://www.sephora.com/product/ciele-prime-protect-spf-30-P515838?skuId=2927671"
  }),
  productData({
    code: "HIGHLIGHTER_067",
    category: "Makeup > Face > Highlighter",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Hue Drops Serum",
    type: "Highlighter",
    image: skuImage("2742195"),
    link: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P509844?skuId=2742195"
  }),
  productData({
    code: "HIGHLIGHTER_068",
    category: "Makeup > Face > Highlighter",
    brand: "Glossier",
    name: "Futuredew Solid Oil-Serum Illuminator",
    type: "Highlighter",
    image: skuImage("2839389"),
    link: "https://www.sephora.com/product/futuredew-solid-oil-serum-illuminator-P514670?skuId=2839389"
  }),
  productData({
    code: "HIGHLIGHTER_069",
    category: "Makeup > Face > Highlighter",
    brand: "ciele",
    name: "glow & PROTECT SPF 50+ liquid highlighter",
    type: "Highlighter",
    image: skuImage("2768711"),
    link: "https://www.sephora.com/product/ciele-glow-protect-spf-50-P514784?skuId=2768711"
  }),
  productData({
    code: "HIGHLIGHTER_070",
    category: "Makeup > Face > Highlighter",
    brand: "MILK MAKEUP",
    name: "Hydro Grip + Glow Illuminating Primer with Light-Reflecting Pearls",
    type: "Highlighter",
    image: skuImage("2792877"),
    link: "https://www.sephora.com/product/milk-makeup-hydro-grip-glow-illuminating-primer-with-light-reflecting-pearls-P513472?skuId=2792877"
  }),
  productData({
    code: "HIGHLIGHTER_071",
    category: "Makeup > Face > Highlighter",
    brand: "LYS Beauty",
    name: "Aim High Cream Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2735934"),
    link: "https://www.sephora.com/product/lys-beauty-aim-high-cream-highlighter-stick-P511937?skuId=2735934"
  }),
  productData({
    code: "HIGHLIGHTER_072",
    category: "Makeup > Face > Highlighter",
    brand: "Supergoop!",
    name: "Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide",
    type: "Highlighter",
    image: skuImage("2535656"),
    link: "https://www.sephora.com/product/supergoop-glowscreen-sunscreen-spf-40-P456218?skuId=2535656"
  }),
  productData({
    code: "HIGHLIGHTER_073",
    category: "Makeup > Face > Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Iced Out Illuminating Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2411494"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-iced-out-highlighter-P468344?skuId=2411494"
  }),
  productData({
    code: "HIGHLIGHTER_074",
    category: "Makeup > Face > Highlighter",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo for Buildable, Radiant Finish",
    type: "Highlighter",
    image: skuImage("2602837"),
    link: "https://www.sephora.com/product/shade-illuminate-P422574?skuId=2602837"
  }),
  productData({
    code: "HIGHLIGHTER_075",
    category: "Makeup > Face > Highlighter",
    brand: "Benefit Cosmetics",
    name: "High Beam Satin Pink Liquid Highlighter",
    type: "Highlighter",
    image: skuImage("2264646"),
    link: "https://www.sephora.com/product/high-beam-liquid-highlighter-P447373?skuId=2264646"
  }),
  productData({
    code: "HIGHLIGHTER_076",
    category: "Makeup > Face > Highlighter",
    brand: "MAKEUP BY MARIO",
    name: "SoftSculpt® Transforming Skin Perfector",
    type: "Highlighter",
    image: skuImage("2577963"),
    link: "https://www.sephora.com/product/softsculpt-transforming-skin-perfector-P500403?skuId=2577963"
  }),
  productData({
    code: "HIGHLIGHTER_077",
    category: "Makeup > Face > Highlighter",
    brand: "GUERLAIN",
    name: "Meteorites Setting & Finishing Illuminating Powder Pearls",
    type: "Highlighter",
    image: skuImage("2780096"),
    link: "https://www.sephora.com/product/meteorites-illuminating-powder-pearls-P266308?skuId=2780096"
  }),
  productData({
    code: "HIGHLIGHTER_078",
    category: "Makeup > Face > Highlighter",
    brand: "Glow Recipe",
    name: "Glow Recipe X Beautyblender Watermelon Glow Bestsellers",
    type: "Highlighter",
    image: skuImage("2947141"),
    link: "https://www.sephora.com/product/glow-recipe-x-beautyblender-watermelon-glow-bestsellers-P521353?skuId=2947141"
  }),
  productData({
    code: "HIGHLIGHTER_079",
    category: "Makeup > Face > Highlighter",
    brand: "TOM FORD",
    name: "Soleil Glow Gel Powder Highlighter with 8HR Wear",
    type: "Highlighter",
    image: skuImage("2966539"),
    link: "https://www.sephora.com/product/soleil-glow-highlighter-P522143?skuId=2966539"
  }),
  productData({
    code: "HIGHLIGHTER_080",
    category: "Makeup > Face > Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Highlighter",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "HIGHLIGHTER_081",
    category: "Makeup > Face > Highlighter",
    brand: "Westman Atelier",
    name: "Liquid Super Loaded All-Over Illuminating Highlighter with Vitamin C",
    type: "Highlighter",
    image: skuImage("2701282"),
    link: "https://www.sephora.com/product/liquid-super-loaded-all-over-illuminator-with-vitamin-c-P506546?skuId=2701282"
  }),
  productData({
    code: "HIGHLIGHTER_082",
    category: "Makeup > Face > Highlighter",
    brand: "Danessa Myricks Beauty",
    name: "Vision Flush Glow - Hyper Radiant Liquid Highlighter",
    type: "Highlighter",
    image: skuImage("2654093"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-vision-flush-glow-hyper-radiant-liquid-highlighter-P504669?skuId=2654093"
  }),
  productData({
    code: "HIGHLIGHTER_083",
    category: "Makeup > Face > Highlighter",
    brand: "ISAMAYA",
    name: "Skin Enhancing Duo- Cream Blush and Highlighter",
    type: "Highlighter",
    image: skuImage("2855559"),
    link: "https://www.sephora.com/product/skin-enhancing-duo-cream-blush-highlighter-P515454?skuId=2855559"
  }),
  productData({
    code: "HIGHLIGHTER_084",
    category: "Makeup > Face > Highlighter",
    brand: "Benefit Cosmetics",
    name: "Dandelion Baby-Pink Brightening Blush",
    type: "Highlighter",
    image: skuImage("2520195"),
    link: "https://www.sephora.com/product/dandelion-box-o-powder-blush-P38347?skuId=2520195"
  }),
  productData({
    code: "HIGHLIGHTER_085",
    category: "Makeup > Face > Highlighter",
    brand: "NARS",
    name: "Light Reflecting™ Undereye Brightener",
    type: "Highlighter",
    image: skuImage("2722841"),
    link: "https://www.sephora.com/product/nars-light-reflecting-eye-brightener-P506288?skuId=2722841"
  }),
  productData({
    code: "HIGHLIGHTER_086",
    category: "Makeup > Face > Highlighter",
    brand: "VIOLETTE_FR",
    name: "BAUME SHINE Universal Highlighter Balm with Squalane",
    type: "Highlighter",
    image: skuImage("2921252"),
    link: "https://www.sephora.com/product/baume-shine-universal-highlighter-balm-with-squalane-P519747?skuId=2921252"
  }),
  productData({
    code: "HIGHLIGHTER_087",
    category: "Makeup > Face > Highlighter",
    brand: "Yves Saint Laurent",
    name: "Touche Éclat Awakening Concealer Click Pen",
    type: "Highlighter",
    image: skuImage("2859098"),
    link: "https://www.sephora.com/product/touche-eclat-radiance-perfecting-pen-P218431?skuId=2859098"
  }),
  productData({
    code: "HIGHLIGHTER_088",
    category: "Makeup > Face > Highlighter",
    brand: "Benefit Cosmetics",
    name: "Glow La La Blurring Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2872133"),
    link: "https://www.sephora.com/product/glow-la-la-powder-highlighter-P516555?skuId=2872133"
  }),
  productData({
    code: "HIGHLIGHTER_089",
    category: "Makeup > Face > Highlighter",
    brand: "Urban Decay",
    name: "Face Bond Luminizer Waterproof Glow Drops for Face + Body",
    type: "Highlighter",
    image: skuImage("2845469"),
    link: "https://www.sephora.com/product/face-bond-luminizer-waterproof-glow-drops-for-face-body-P514682?skuId=2845469"
  }),
  productData({
    code: "HIGHLIGHTER_090",
    category: "Makeup > Face > Highlighter",
    brand: "Iconic London",
    name: "Illuminator Liquid Highlight",
    type: "Highlighter",
    image: skuImage("2380426"),
    link: "https://www.sephora.com/product/illuminator-P461217?skuId=2380426"
  }),
  productData({
    code: "HIGHLIGHTER_091",
    category: "Makeup > Face > Highlighter",
    brand: "Mango People",
    name: "Dewy Glow Cream Highlighter Stick",
    type: "Highlighter",
    image: skuImage("2717767"),
    link: "https://www.sephora.com/product/dewy-glow-cream-highlighter-stick-P507338?skuId=2717767"
  }),
  productData({
    code: "HIGHLIGHTER_092",
    category: "Makeup > Face > Highlighter",
    brand: "MAC Cosmetics",
    name: "Strobe Beam Bronzelighter Liquid Bronzer",
    type: "Highlighter",
    image: skuImage("2958122"),
    link: "https://www.sephora.com/product/mac-strobe-beam-bronzelighter-liquid-bronzer-P521490?skuId=2958122"
  }),
  productData({
    code: "HIGHLIGHTER_093",
    category: "Makeup > Face > Highlighter",
    brand: "Prada",
    name: "Prada Light Glowing Highlighter Powder",
    type: "Highlighter",
    image: skuImage("2853273"),
    link: "https://www.sephora.com/product/prada-beauty-prada-light-glowing-highlighter-powder-P516789?skuId=2853273"
  }),
  productData({
    code: "HIGHLIGHTER_094",
    category: "Makeup > Face > Highlighter",
    brand: "MAKEUP BY MARIO",
    name: "Master Crystal Reflector™",
    type: "Highlighter",
    image: skuImage("2389609"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-crystal-reflector-tm-P33257988?skuId=2389609"
  }),
  productData({
    code: "HIGHLIGHTER_095",
    category: "Makeup > Face > Highlighter",
    brand: "Supergoop!",
    name: "Glowscreen Soft-Radiance Drops Mineral SPF 40",
    type: "Highlighter",
    image: skuImage("2845550"),
    link: "https://www.sephora.com/product/glowscreen-soft-radiance-drops-mineral-spf-40-P515365?skuId=2845550"
  }),
  productData({
    code: "HIGHLIGHTER_096",
    category: "Makeup > Face > Highlighter",
    brand: "Benefit Cosmetics",
    name: "Dew La La All-Over Glow Liquid Highlighter",
    type: "Highlighter",
    image: skuImage("2773141"),
    link: "https://www.sephora.com/product/benefit-cosmetics-dew-la-la-liquid-glow-highlighter-P511909?skuId=2773141"
  }),
  productData({
    code: "HIGHLIGHTER_097",
    category: "Makeup > Face > Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Blush & Glow Longwear Cream Face Palette",
    type: "Highlighter",
    image: skuImage("2844660"),
    link: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035?skuId=2844660"
  }),
  productData({
    code: "HIGHLIGHTER_098",
    category: "Makeup > Face > Highlighter",
    brand: "Benefit Cosmetics",
    name: "Dandelion Twinkle Shimmer Finish Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2520484"),
    link: "https://www.sephora.com/product/dandelion-twinkle-P417320?skuId=2520484"
  }),
  productData({
    code: "HIGHLIGHTER_099",
    category: "Makeup > Face > Highlighter",
    brand: "NUDESTIX",
    name: "Mini NUDIES Roses 'N Honey Nudes 3pc Kit",
    type: "Highlighter",
    image: skuImage("2467561"),
    link: "https://www.sephora.com/product/nudestix-mini-nudies-roses-n-honey-nudes-3pc-kit-P478523?skuId=2467561"
  }),
  productData({
    code: "HIGHLIGHTER_100",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Glow Skinstick",
    type: "Highlighter",
    image: skuImage("2340305"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-match-stix-glow-skinstick-P456148?skuId=2340305"
  }),
  productData({
    code: "HIGHLIGHTER_101",
    category: "Makeup > Face > Highlighter",
    brand: "Iconic London",
    name: "Rollaway Glow Highlighter",
    type: "Highlighter",
    image: skuImage("2645166"),
    link: "https://www.sephora.com/product/iconic-london-rollaway-glow-highlighter-P505240?skuId=2645166"
  }),
  productData({
    code: "HIGHLIGHTER_102",
    category: "Makeup > Face > Highlighter",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Glow Blush",
    type: "Highlighter",
    image: skuImage("2743375"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533?skuId=2743375"
  }),
  productData({
    code: "HIGHLIGHTER_103",
    category: "Makeup > Face > Highlighter",
    brand: "Supergoop!",
    name: "Glowscreen Sunlighter Glow & Protect Stick SPF 45",
    type: "Highlighter",
    image: skuImage("2866168"),
    link: "https://www.sephora.com/product/glowscreen-sunlighter-glow-protect-stick-spf-45-P515974?skuId=2866168"
  }),
  productData({
    code: "HIGHLIGHTER_104",
    category: "Makeup > Face > Highlighter",
    brand: "ISAMAYA",
    name: "Face Glaze",
    type: "Highlighter",
    image: skuImage("2855773"),
    link: "https://www.sephora.com/product/face-glaze-skin-primer-P515463?skuId=2855773"
  }),
  productData({
    code: "HIGHLIGHTER_105",
    category: "Makeup > Face > Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Highlighter",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "HIGHLIGHTER_106",
    category: "Makeup > Face > Highlighter",
    brand: "Anastasia Beverly Hills",
    name: "Cream Stick Highlighter with Brush Applicator",
    type: "Highlighter",
    image: skuImage("2520336"),
    link: "https://www.sephora.com/product/stick-highlighter-P500604?skuId=2520336"
  }),
  productData({
    code: "HIGHLIGHTER_107",
    category: "Makeup > Face > Highlighter",
    brand: "Drunk Elephant",
    name: "B-Goldi™ Bright Illuminating Drops with 5% Niacinamide",
    type: "Highlighter",
    image: skuImage("2689743"),
    link: "https://www.sephora.com/product/b-goldi-tm-illuminating-drops-with-5-niacinamide-for-brightening-P507099?skuId=2689743"
  }),
  productData({
    code: "HIGHLIGHTER_108",
    category: "Makeup > Face > Highlighter",
    brand: "MILK MAKEUP",
    name: "Holographic Stick",
    type: "Highlighter",
    image: skuImage("2032746"),
    link: "https://www.sephora.com/product/holographic-stick-mini-P425737?skuId=2032746"
  }),
  productData({
    code: "HIGHLIGHTER_109",
    category: "Makeup > Face > Highlighter",
    brand: "Fenty Beauty by Rihanna",
    name: "FAIRY BOMB WATTACRUSH HEART-SHAPED SHIMMER PUFF",
    type: "Highlighter",
    image: skuImage("2929511"),
    link: "https://www.sephora.com/product/fairy-bomb-wattacrush-heart-shaped-shimmer-puff-P520338?skuId=2929511"
  }),
  productData({
    code: "HIGHLIGHTER_110",
    category: "Makeup > Face > Highlighter",
    brand: "MAKE UP FOR EVER",
    name: "Artist Longwear Skin-fusing Powder Highlighter",
    type: "Highlighter",
    image: skuImage("2690055"),
    link: "https://www.sephora.com/product/artist-longwear-skin-fusing-powder-highlighter-P507335?skuId=2690055"
  }),
  productData({
    code: "HIGHLIGHTER_111",
    category: "Makeup > Face > Highlighter",
    brand: "MILK MAKEUP",
    name: "Bionic Glow Illuminating Liquid Highlighter with Hyaluronic Acid",
    type: "Highlighter",
    image: skuImage("2511715"),
    link: "https://www.sephora.com/product/milk-makeup-bionic-glow-illuminating-liquid-highlighter-P481129?skuId=2511715"
  }),
  productData({
    code: "HIGHLIGHTER_112",
    category: "Makeup > Face > Highlighter",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish Highlighter & Balm Duo",
    type: "Highlighter",
    image: skuImage("2111409"),
    link: "https://www.sephora.com/product/skin-fetish-highlighter-balm-duo-P433003?skuId=2111409"
  }),
  productData({
    code: "HIGHLIGHTER_113",
    category: "Makeup > Face > Highlighter",
    brand: "Fashion Fair",
    name: "Luxe Highlighter Duo",
    type: "Highlighter",
    image: skuImage("2591758"),
    link: "https://www.sephora.com/product/fashion-fair-luxe-highlighter-duos-P503003?skuId=2591758"
  }),
  productData({
    code: "HIGHLIGHTER_114",
    category: "Makeup > Face > Highlighter",
    brand: "Glow Recipe",
    name: "Mini Watermelon Glow Niacinamide Hue Drops Sun Glow Serum",
    type: "Highlighter",
    image: skuImage("2827947"),
    link: "https://www.sephora.com/product/mini-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P515372?skuId=2827947"
  }),
  productData({
    code: "HIGHLIGHTER_115",
    category: "Makeup > Face > Highlighter",
    brand: "Valentino",
    name: "V-Lighter Illuminating Face Primer and Highlighter with Hyaluronic Acid",
    type: "Highlighter",
    image: skuImage("2542843"),
    link: "https://www.sephora.com/product/valentino-v-lighter-face-primer-highlighter-P479510?skuId=2542843"
  }),
  productData({
    code: "HIGHLIGHTER_116",
    category: "Makeup > Face > Highlighter",
    brand: "INNBEAUTY PROJECT",
    name: "Bronze Face Glaze Gel Cream with Squalane, Ceramides & Hyaluronic Acid",
    type: "Highlighter",
    image: skuImage("2714483"),
    link: "https://www.sephora.com/product/bronze-face-glaze-gel-cream-with-squalane-ceramides-hyaluronic-acid-P507166?skuId=2714483"
  }),
  productData({
    code: "HIGHLIGHTER_117",
    category: "Makeup > Face > Highlighter",
    brand: "Drunk Elephant",
    name: "O-Bloos™ Rosi Blush Drops with Vitamin F",
    type: "Highlighter",
    image: skuImage("2460475"),
    link: "https://www.sephora.com/product/drunk-elephant-o-bloos-trade-rosi-drops-P473304?skuId=2460475"
  }),
  productData({
    code: "HIGHLIGHTER_118",
    category: "Makeup > Face > Highlighter",
    brand: "Gucci",
    name: "Luminous Face & Lip Gloss",
    type: "Highlighter",
    image: skuImage("2357721"),
    link: "https://www.sephora.com/product/gucci-eclat-de-beaute-effet-lumiere-all-over-face-lip-gloss-P457649?skuId=2357721"
  }),
  productData({
    code: "HIGHLIGHTER_119",
    category: "Makeup > Face > Highlighter",
    brand: "Iconic London",
    name: "Radiance Complexion Booster",
    type: "Highlighter",
    image: skuImage("2463586"),
    link: "https://www.sephora.com/product/iconic-london-radiance-complexion-booster-P473171?skuId=2463586"
  }),
  productData({
    code: "HIGHLIGHTER_120",
    category: "Makeup > Face > Highlighter",
    brand: "NUDESTIX",
    name: "Sunpink Glow Stax 3pc Blush Balm Set",
    type: "Highlighter",
    image: skuImage("2789014"),
    link: "https://www.sephora.com/product/nudestix-sunpink-glow-3pc-stax-set-P512311?skuId=2789014"
  }),
  productData({
    code: "HIGHLIGHTER_121",
    category: "Makeup > Face > Highlighter",
    brand: "Hello Sunday",
    name: "The Shimmer One SPF 45 Face and Body Mineral Sunscreen Glow Stick with Hyaluronic Acid",
    type: "Highlighter",
    image: skuImage("2753317"),
    link: "https://www.sephora.com/product/hello-sunday-the-shimmer-one-spf-45-face-body-mineral-glow-stick-with-hyaluronic-acid-P510384?skuId=2753317"
  }),
  productData({
    code: "HIGHLIGHTER_122",
    category: "Makeup > Face > Highlighter",
    brand: "Hourglass",
    name: "Ambient® Lighting Finishing Powder",
    type: "Highlighter",
    image: skuImage("1849017"),
    link: "https://www.sephora.com/product/ambient-lighting-powder-P377723?skuId=1849017"
  }),

  // ==================================================
  // Makeup > Face > Face Primer
  // Products: 134
  // ==================================================
  productData({
    code: "FACE_PRIMER_001",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder - Tinted Primer & Foundation",
    type: "Face Primer",
    image: skuImage("2836716"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-P484039?skuId=2836716"
  }),
  productData({
    code: "FACE_PRIMER_002",
    category: "Makeup > Face > Face Primer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("1292820"),
    link: "https://www.sephora.com/product/vitamin-enriched-face-base-P270594?skuId=1292820"
  }),
  productData({
    code: "FACE_PRIMER_003",
    category: "Makeup > Face > Face Primer",
    brand: "Tatcha",
    name: "Luminous Dewy Skin Mist 2-in-1 Hydrator & Finishing Spray",
    type: "Face Primer",
    image: skuImage("1742337"),
    link: "https://www.sephora.com/product/luminous-dewy-skin-mist-P399623?skuId=1742337"
  }),
  productData({
    code: "FACE_PRIMER_004",
    category: "Makeup > Face > Face Primer",
    brand: "HUDA BEAUTY",
    name: "Easy Blur Silicone-Free Smoothing & Pore-Minimizing Primer",
    type: "Face Primer",
    image: skuImage("2888931"),
    link: "https://www.sephora.com/product/huda-beauty-easy-blur-silicone-free-smoothing-primer-P512639?skuId=2888931"
  }),
  productData({
    code: "FACE_PRIMER_005",
    category: "Makeup > Face > Face Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Secure The Sweat Waterproof Mattifying Primer",
    type: "Face Primer",
    image: skuImage("2656320"),
    link: "https://www.sephora.com/product/secure-sweat-primer-P505398?skuId=2656320"
  }),
  productData({
    code: "FACE_PRIMER_006",
    category: "Makeup > Face > Face Primer",
    brand: "Iconic London",
    name: "Underglow Blurring Primer",
    type: "Face Primer",
    image: skuImage("2626794"),
    link: "https://www.sephora.com/product/iconic-london-underglow-blurring-primer-P502611?skuId=2626794"
  }),
  productData({
    code: "FACE_PRIMER_007",
    category: "Makeup > Face > Face Primer",
    brand: "SEPHORA COLLECTION",
    name: "Smooth + Blur Primer",
    type: "Face Primer",
    image: skuImage("2413318"),
    link: "https://www.sephora.com/product/sephora-collection-smooth-blur-primer-P474102?skuId=2413318"
  }),
  productData({
    code: "FACE_PRIMER_008",
    category: "Makeup > Face > Face Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini Secure The Blur Makeup Magnet Primer",
    type: "Face Primer",
    image: skuImage("2849008"),
    link: "https://www.sephora.com/product/mini-secure-blur-makeup-magnet-primer-P516256?skuId=2849008"
  }),
  productData({
    code: "FACE_PRIMER_009",
    category: "Makeup > Face > Face Primer",
    brand: "Tower 28 Beauty",
    name: "SOS Daily Hypochlorous Acid Spray for Breakouts & Redness",
    type: "Face Primer",
    image: skuImage("2527844"),
    link: "https://www.sephora.com/product/sos-save-our-skin-daily-rescue-facial-spray-P448852?skuId=2527844"
  }),
  productData({
    code: "FACE_PRIMER_010",
    category: "Makeup > Face > Face Primer",
    brand: "MILK MAKEUP",
    name: "Pore Eclipse Mattifying + Blurring Makeup Primer with Niacinamide",
    type: "Face Primer",
    image: skuImage("2572857"),
    link: "https://www.sephora.com/product/milk-makeup-pore-eclipse-liquid-primer-P483674?skuId=2572857"
  }),
  productData({
    code: "FACE_PRIMER_011",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin 10/10 Barrier Boost Hyaluronic Acid + Ectoin Plumping Serum",
    type: "Face Primer",
    image: skuImage("2942399"),
    link: "https://www.sephora.com/product/yummy-skin-10-10-barrier-boost-hyaluronic-acid-ectoin-plumping-serum-P520301?skuId=2942399"
  }),
  productData({
    code: "FACE_PRIMER_012",
    category: "Makeup > Face > Face Primer",
    brand: "Armani Beauty",
    name: "Luminous Silk Hydrating & Glow-Extending Primer",
    type: "Face Primer",
    image: skuImage("2928059"),
    link: "https://www.sephora.com/product/luminous-silk-hydrating-glow-extending-primer-P520126?skuId=2928059"
  }),
  productData({
    code: "FACE_PRIMER_013",
    category: "Makeup > Face > Face Primer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Pore Diffusing Primer - Always an Optimist Collection",
    type: "Face Primer",
    image: skuImage("2448124"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-always-an-optimist-pore-diffusing-primer-P471074?skuId=2448124"
  }),
  productData({
    code: "FACE_PRIMER_014",
    category: "Makeup > Face > Face Primer",
    brand: "Hourglass",
    name: "Vanish Airbrush Primer",
    type: "Face Primer",
    image: skuImage("2519759"),
    link: "https://www.sephora.com/product/hourglass-vanish-airbrush-primer-P480609?skuId=2519759"
  }),
  productData({
    code: "FACE_PRIMER_015",
    category: "Makeup > Face > Face Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Oil Sucker Extreme Mattifying Alkaline Primer",
    type: "Face Primer",
    image: skuImage("2787570"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-oil-sucker-extreme-mattifying-alkaline-primer-P512638?skuId=2787570"
  }),
  productData({
    code: "FACE_PRIMER_016",
    category: "Makeup > Face > Face Primer",
    brand: "REFY",
    name: "Mini Glow and Sculpt Face Serum Primer with Niacinamide",
    type: "Face Primer",
    image: skuImage("2971083"),
    link: "https://www.sephora.com/product/mini-glow-sculpt-face-serum-primer-with-niacinamide-P516373?skuId=2971083"
  }),
  productData({
    code: "FACE_PRIMER_017",
    category: "Makeup > Face > Face Primer",
    brand: "MILK MAKEUP",
    name: "Hydro Grip + Glow Illuminating Primer with Light-Reflecting Pearls",
    type: "Face Primer",
    image: skuImage("2792877"),
    link: "https://www.sephora.com/product/milk-makeup-hydro-grip-glow-illuminating-primer-with-light-reflecting-pearls-P513472?skuId=2792877"
  }),
  productData({
    code: "FACE_PRIMER_018",
    category: "Makeup > Face > Face Primer",
    brand: "Benefit Cosmetics",
    name: "The POREfessional Pore Minimizing Primer",
    type: "Face Primer",
    image: skuImage("1259068"),
    link: "https://www.sephora.com/product/the-porefessional-face-primer-P264900?skuId=1259068"
  }),
  productData({
    code: "FACE_PRIMER_019",
    category: "Makeup > Face > Face Primer",
    brand: "ciele",
    name: "prime & PROTECT SPF 30+ Smoothing Primer",
    type: "Face Primer",
    image: skuImage("2927671"),
    link: "https://www.sephora.com/product/ciele-prime-protect-spf-30-P515838?skuId=2927671"
  }),
  productData({
    code: "FACE_PRIMER_020",
    category: "Makeup > Face > Face Primer",
    brand: "Benefit Cosmetics",
    name: "The POREfessional Matte Pore Minimizing Primer",
    type: "Face Primer",
    image: skuImage("2792976"),
    link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-matte-primer-P512866?skuId=2792976"
  }),
  productData({
    code: "FACE_PRIMER_021",
    category: "Makeup > Face > Face Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Grip Trip Hydrating Primer",
    type: "Face Primer",
    image: skuImage("2865285"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-grip-trip-hydrating-primer-P517850?skuId=2865285"
  }),
  productData({
    code: "FACE_PRIMER_022",
    category: "Makeup > Face > Face Primer",
    brand: "MAC Cosmetics",
    name: "Studio Radiance Moisturizing + Illuminating Silky Primer with Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2556355"),
    link: "https://www.sephora.com/product/mac-cosmetics-studio-radiance-moisturizing-illuminating-silky-primer-P483472?skuId=2556355"
  }),
  productData({
    code: "FACE_PRIMER_023",
    category: "Makeup > Face > Face Primer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Secure the Blur Makeup Magnet Primer",
    type: "Face Primer",
    image: skuImage("2427128"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-secure-blur-makeup-magnet-primer-P468394?skuId=2427128"
  }),
  productData({
    code: "FACE_PRIMER_024",
    category: "Makeup > Face > Face Primer",
    brand: "Tower 28 Beauty",
    name: "Mini SOS Daily Hypochlorous Acid Spray for Breakouts & Redness",
    type: "Face Primer",
    image: skuImage("2527836"),
    link: "https://www.sephora.com/product/sos-save-our-skin-daily-rescue-facial-spray-mini-P448853?skuId=2527836"
  }),
  productData({
    code: "FACE_PRIMER_025",
    category: "Makeup > Face > Face Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Grip Trip Mattifying & Blurring Primer",
    type: "Face Primer",
    image: skuImage("2865236"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-prep-set-mattifying-blurring-primer-P517852?skuId=2865236"
  }),
  productData({
    code: "FACE_PRIMER_026",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Glow Serum with Hyaluronic Acid & Niacinamide",
    type: "Face Primer",
    image: skuImage("2836609"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-glow-serum-primer-P481696?skuId=2836609"
  }),
  productData({
    code: "FACE_PRIMER_027",
    category: "Makeup > Face > Face Primer",
    brand: "Hourglass",
    name: "Hourglass Illusion Priming Moisturizer",
    type: "Face Primer",
    image: skuImage("2857068"),
    link: "https://www.sephora.com/product/hourglass-hourglass-illusion-priming-moisturizer-P515563?skuId=2857068"
  }),
  productData({
    code: "FACE_PRIMER_028",
    category: "Makeup > Face > Face Primer",
    brand: "MILK MAKEUP",
    name: "Mini Pore Eclipse Mattifying + Blurring Makeup Primer with Niacinamide",
    type: "Face Primer",
    image: skuImage("2572865"),
    link: "https://www.sephora.com/product/milk-makeup-mini-pore-eclipse-liquid-primer-P483675?skuId=2572865"
  }),
  productData({
    code: "FACE_PRIMER_029",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Unseen Sunscreen Invisible Broad Spectrum SPF 50  PA +++",
    type: "Face Primer",
    image: skuImage("2837938"),
    link: "https://www.sephora.com/product/supergoop-unseen-sunscreen-invisible-broad-spectrum-spf-50-pa-P514631?skuId=2837938"
  }),
  productData({
    code: "FACE_PRIMER_030",
    category: "Makeup > Face > Face Primer",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Dew Drops Serum",
    type: "Face Primer",
    image: skuImage("2404846"),
    link: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-dew-drops-P466123?skuId=2404846"
  }),
  productData({
    code: "FACE_PRIMER_031",
    category: "Makeup > Face > Face Primer",
    brand: "LAWLESS",
    name: "Mini Forget the Filler Skin-Plumping Line-Smoothing Moisturizer + Makeup Primer",
    type: "Face Primer",
    image: skuImage("2778579"),
    link: "https://www.sephora.com/product/lawless-mini-forget-filler-skin-plumping-line-smoothing-moisturizer-makeup-primer-P511696?skuId=2778579"
  }),
  productData({
    code: "FACE_PRIMER_032",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Blurring Balm Powder -Universal Primer",
    type: "Face Primer",
    image: skuImage("2836708"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-universal-P514793?skuId=2836708"
  }),
  productData({
    code: "FACE_PRIMER_033",
    category: "Makeup > Face > Face Primer",
    brand: "tarte",
    name: "ballin' base™ poreless primer",
    type: "Face Primer",
    image: skuImage("2977528"),
    link: "https://www.sephora.com/product/ballin-base-poreless-primer-P522193?skuId=2977528"
  }),
  productData({
    code: "FACE_PRIMER_034",
    category: "Makeup > Face > Face Primer",
    brand: "Hourglass",
    name: "Mini Vanish Airbrush Primer",
    type: "Face Primer",
    image: skuImage("2669026"),
    link: "https://www.sephora.com/product/hourglass-mini-vanish-airbrush-primer-P506147?skuId=2669026"
  }),
  productData({
    code: "FACE_PRIMER_035",
    category: "Makeup > Face > Face Primer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Mini Pore Diffusing Primer- Always An Optimist Collection",
    type: "Face Primer",
    image: skuImage("2448082"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-mini-always-an-optimist-pore-diffusing-primer-P471075?skuId=2448082"
  }),
  productData({
    code: "FACE_PRIMER_036",
    category: "Makeup > Face > Face Primer",
    brand: "DIOR",
    name: "Forever Glow Star Filter Multi-Use Complexion Enhancing Booster",
    type: "Face Primer",
    image: skuImage("2751014"),
    link: "https://www.sephora.com/product/forever-glow-star-filter-multi-use-complexion-enhancing-booster-P509901?skuId=2751014"
  }),
  productData({
    code: "FACE_PRIMER_037",
    category: "Makeup > Face > Face Primer",
    brand: "REFY",
    name: "Blur and Hydrate Oil-Control Face Primer with Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2792182"),
    link: "https://www.sephora.com/product/refy-beauty-blur-and-hydrate-oil-control-face-primer-hyaluronic-acid-P512240?skuId=2792182"
  }),
  productData({
    code: "FACE_PRIMER_038",
    category: "Makeup > Face > Face Primer",
    brand: "SEPHORA COLLECTION",
    name: "Hydrate + Glow Primer Hydrate + Glow Primer with Polyglutamic Acid",
    type: "Face Primer",
    image: skuImage("2820082"),
    link: "https://www.sephora.com/product/hydrate-glow-primer-hydrate-glow-primer-with-polyglutamic-acid-P515054?skuId=2820082"
  }),
  productData({
    code: "FACE_PRIMER_039",
    category: "Makeup > Face > Face Primer",
    brand: "Iconic London",
    name: "Mini Underglow Blurring Primer",
    type: "Face Primer",
    image: skuImage("2866069"),
    link: "https://www.sephora.com/product/mini-underglow-blurring-primer-P516859?skuId=2866069"
  }),
  productData({
    code: "FACE_PRIMER_040",
    category: "Makeup > Face > Face Primer",
    brand: "Hourglass",
    name: "Veil Mineral Primer",
    type: "Face Primer",
    image: skuImage("1074442"),
    link: "https://www.sephora.com/product/veil-mineral-primer-P210575?skuId=1074442"
  }),
  productData({
    code: "FACE_PRIMER_041",
    category: "Makeup > Face > Face Primer",
    brand: "NARS",
    name: "Light Reflecting™ Hydrating Primer with Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2772358"),
    link: "https://www.sephora.com/product/nars-light-reflecting-hydrating-primer-P511955?skuId=2772358"
  }),
  productData({
    code: "FACE_PRIMER_042",
    category: "Makeup > Face > Face Primer",
    brand: "Kulfi",
    name: "Double Life Pore Blurring Serum Primer with Niacinamide & Tranexamic Acid",
    type: "Face Primer",
    image: skuImage("2901429"),
    link: "https://www.sephora.com/product/double-life-pore-blurring-serum-primer-with-niacinamide-tranexamic-acid-P517120?skuId=2901429"
  }),
  productData({
    code: "FACE_PRIMER_043",
    category: "Makeup > Face > Face Primer",
    brand: "Glow Recipe",
    name: "Watermelon Milk™ Peptide Cushion Cream Refillable Moisturizer for Dry Skin & Barrier Support",
    type: "Face Primer",
    image: skuImage("2978997"),
    link: "https://www.sephora.com/product/watermelon-milk-peptide-cushion-cream-refillable-moisturizer-P522727?skuId=2978997"
  }),
  productData({
    code: "FACE_PRIMER_044",
    category: "Makeup > Face > Face Primer",
    brand: "Charlotte Tilbury",
    name: "Wonderglow Face Primer",
    type: "Face Primer",
    image: skuImage("2117133"),
    link: "https://www.sephora.com/product/wonderglow-face-primer-P434004?skuId=2117133"
  }),
  productData({
    code: "FACE_PRIMER_045",
    category: "Makeup > Face > Face Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Grip Trip Hydrating Primer",
    type: "Face Primer",
    image: skuImage("2865251"),
    link: "https://www.sephora.com/product/mini-grip-trip-hydrating-primer-P520345?skuId=2865251"
  }),
  productData({
    code: "FACE_PRIMER_046",
    category: "Makeup > Face > Face Primer",
    brand: "Tatcha",
    name: "The Liquid Silk Canvas: Featherweight Protective Primer",
    type: "Face Primer",
    image: skuImage("2339711"),
    link: "https://www.sephora.com/product/tatcha-the-liquid-silk-canvas-featherweight-protective-primer-P456446?skuId=2339711"
  }),
  productData({
    code: "FACE_PRIMER_047",
    category: "Makeup > Face > Face Primer",
    brand: "Kosas",
    name: "DreamBeam Silicone-Free Mineral Sunscreen SPF 40 with Ceramides and Peptides",
    type: "Face Primer",
    image: skuImage("2761633"),
    link: "https://www.sephora.com/product/dreambeam-moisturizing-mineral-sunscreen-spf-40-with-ceramides-and-peptides-P505327?skuId=2761633"
  }),
  productData({
    code: "FACE_PRIMER_048",
    category: "Makeup > Face > Face Primer",
    brand: "Yves Saint Laurent",
    name: "Touche Eclat Blur Face Primer",
    type: "Face Primer",
    image: skuImage("1713114"),
    link: "https://www.sephora.com/product/touche-eclat-blur-primer-P397615?skuId=1713114"
  }),
  productData({
    code: "FACE_PRIMER_049",
    category: "Makeup > Face > Face Primer",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Hue Drops Serum",
    type: "Face Primer",
    image: skuImage("2742195"),
    link: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P509844?skuId=2742195"
  }),
  productData({
    code: "FACE_PRIMER_050",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Mattifying Water Powder Serum with Niacinamide and Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2738656"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-mattifying-water-powder-serum-with-niacinamide-hyaluronic-acid-P509827?skuId=2738656"
  }),
  productData({
    code: "FACE_PRIMER_051",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Mini Glowscreen Sunscreen SPF 40 with Hyaluronic Acid + Niacinamide",
    type: "Face Primer",
    image: skuImage("2549756"),
    link: "https://www.sephora.com/product/supergoop-mini-glowscreen-sunscreen-spf-40-pa-P482320?skuId=2549756"
  }),
  productData({
    code: "FACE_PRIMER_052",
    category: "Makeup > Face > Face Primer",
    brand: "Tatcha",
    name: "The Silk Canvas Protective Primer",
    type: "Face Primer",
    image: skuImage("1970235"),
    link: "https://www.sephora.com/product/the-silk-canvas-P428661?skuId=1970235"
  }),
  productData({
    code: "FACE_PRIMER_053",
    category: "Makeup > Face > Face Primer",
    brand: "Prada",
    name: "Refine Blurring Extending Primer",
    type: "Face Primer",
    image: skuImage("2791200"),
    link: "https://www.sephora.com/product/prada-beauty-refine-blurring-extending-primer-P513150?skuId=2791200"
  }),
  productData({
    code: "FACE_PRIMER_054",
    category: "Makeup > Face > Face Primer",
    brand: "caliray",
    name: "Light Source Blurring & Hydrating Illuminator",
    type: "Face Primer",
    image: skuImage("2962702"),
    link: "https://www.sephora.com/product/light-source-illuminator-P522521?skuId=2962702"
  }),
  productData({
    code: "FACE_PRIMER_055",
    category: "Makeup > Face > Face Primer",
    brand: "YSE Beauty",
    name: "Skin Glow SPF 30 Tinted Sunscreen Primer with Niacinamide",
    type: "Face Primer",
    image: skuImage("2886323"),
    link: "https://www.sephora.com/product/yse-beauty-skin-glow-spf-30-primer-with-niacinamide-P517101?skuId=2886323"
  }),
  productData({
    code: "FACE_PRIMER_056",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Glowscreen SPF 40 Sunscreen with Hyaluronic Acid + Niacinamide",
    type: "Face Primer",
    image: skuImage("2535656"),
    link: "https://www.sephora.com/product/supergoop-glowscreen-sunscreen-spf-40-P456218?skuId=2535656"
  }),
  productData({
    code: "FACE_PRIMER_057",
    category: "Makeup > Face > Face Primer",
    brand: "Danessa Myricks Beauty",
    name: "Yummy Skin Moisture Repair Balm Serum with Hyaluronic Acid and Squalane",
    type: "Face Primer",
    image: skuImage("2738664"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-moisture-repair-balm-serum-with-hyaluronic-acid-squalane-P509837?skuId=2738664"
  }),
  productData({
    code: "FACE_PRIMER_058",
    category: "Makeup > Face > Face Primer",
    brand: "ILIA",
    name: "True Skin Radiant Priming Serum",
    type: "Face Primer",
    image: skuImage("2196780"),
    link: "https://www.sephora.com/product/true-skin-radiant-priming-serum-P441874?skuId=2196780"
  }),
  productData({
    code: "FACE_PRIMER_059",
    category: "Makeup > Face > Face Primer",
    brand: "YSE Beauty",
    name: "Xtreme Glow Dewy Peptide Plumping Serum",
    type: "Face Primer",
    image: skuImage("2967487"),
    link: "https://www.sephora.com/product/dewy-peptide-plumping-serum-P522135?skuId=2967487"
  }),
  productData({
    code: "FACE_PRIMER_060",
    category: "Makeup > Face > Face Primer",
    brand: "MILK MAKEUP",
    name: "Pore Eclipse Non-Comedogenic Mattifying + Blurring Primer Stick",
    type: "Face Primer",
    image: skuImage("2770352"),
    link: "https://www.sephora.com/product/milk-makeup-pore-eclipse-non-comedogenic-mattifying-blurring-primer-stick-P511297?skuId=2770352"
  }),
  productData({
    code: "FACE_PRIMER_061",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Mini Step 1 Primer Shine Control",
    type: "Face Primer",
    image: skuImage("2424760"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-step-1-primer-shine-control-P468192?skuId=2424760"
  }),
  productData({
    code: "FACE_PRIMER_062",
    category: "Makeup > Face > Face Primer",
    brand: "Urban Decay",
    name: "All Nighter Face Makeup Primer",
    type: "Face Primer",
    image: skuImage("2302818"),
    link: "https://www.sephora.com/product/urban-decay-all-nighter-face-primer-P454337?skuId=2302818"
  }),
  productData({
    code: "FACE_PRIMER_063",
    category: "Makeup > Face > Face Primer",
    brand: "Glow Recipe",
    name: "Glow Recipe X Beautyblender Watermelon Glow Bestsellers",
    type: "Face Primer",
    image: skuImage("2947141"),
    link: "https://www.sephora.com/product/glow-recipe-x-beautyblender-watermelon-glow-bestsellers-P521353?skuId=2947141"
  }),
  productData({
    code: "FACE_PRIMER_064",
    category: "Makeup > Face > Face Primer",
    brand: "Youth To The People",
    name: "Superfood Skin Drip Smooth + Glow Barrier Serum with Peptides + Niacinamide",
    type: "Face Primer",
    image: skuImage("2767176"),
    link: "https://www.sephora.com/product/youth-to-the-people-superfood-skin-drip-smooth-glow-barrier-serum-with-kale-niacinamide-P510507?skuId=2767176"
  }),
  productData({
    code: "FACE_PRIMER_065",
    category: "Makeup > Face > Face Primer",
    brand: "Charlotte Tilbury",
    name: "Lightweight Invisible UV Flawless Primer SPF 50",
    type: "Face Primer",
    image: skuImage("2569408"),
    link: "https://www.sephora.com/product/uv-makeup-primer-P500286?skuId=2569408"
  }),
  productData({
    code: "FACE_PRIMER_066",
    category: "Makeup > Face > Face Primer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Smoothing Serum with Niacinamide + Vitamin C",
    type: "Face Primer",
    image: skuImage("2737237"),
    link: "https://www.sephora.com/product/bobbi-brown-vitamin-enriched-smoothing-serum-P509437?skuId=2737237"
  }),
  productData({
    code: "FACE_PRIMER_067",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Pure Canvas Primer - Hydrating",
    type: "Face Primer",
    image: skuImage("2919249"),
    link: "https://www.sephora.com/product/pure-canvas-primer-hydrating-P519471?skuId=2919249"
  }),
  productData({
    code: "FACE_PRIMER_068",
    category: "Makeup > Face > Face Primer",
    brand: "Iconic London",
    name: "The Everyday Glow Priming and Setting Gift Set",
    type: "Face Primer",
    image: skuImage("2935575"),
    link: "https://www.sephora.com/product/the-everyday-glow-priming-and-setting-gift-set-P521651?skuId=2935575"
  }),
  productData({
    code: "FACE_PRIMER_069",
    category: "Makeup > Face > Face Primer",
    brand: "MILK MAKEUP",
    name: "Cloud Glow Priming Foam With Brightening Turmeric",
    type: "Face Primer",
    image: skuImage("2742880"),
    link: "https://www.sephora.com/product/milk-makeup-cloud-glow-P509463?skuId=2742880"
  }),
  productData({
    code: "FACE_PRIMER_070",
    category: "Makeup > Face > Face Primer",
    brand: "Urban Decay",
    name: "Extra Glow All Nighter Primer",
    type: "Face Primer",
    image: skuImage("2367993"),
    link: "https://www.sephora.com/product/urban-decay-ultra-glow-all-nighter-primer-P461545?skuId=2367993"
  }),
  productData({
    code: "FACE_PRIMER_071",
    category: "Makeup > Face > Face Primer",
    brand: "Topicals",
    name: "Sealed Active Scar Filling Primer for Acne Prone Skin",
    type: "Face Primer",
    image: skuImage("2705606"),
    link: "https://www.sephora.com/product/sealed-active-scar-filing-primer-P506832?skuId=2705606"
  }),
  productData({
    code: "FACE_PRIMER_072",
    category: "Makeup > Face > Face Primer",
    brand: "NATASHA DENONA",
    name: "HY-GEN - Energizing & Hydrating Primer Serum",
    type: "Face Primer",
    image: skuImage("2569499"),
    link: "https://www.sephora.com/product/hy-gen-skin-glass-energizing-hydrating-primer-serum-P500263?skuId=2569499"
  }),
  productData({
    code: "FACE_PRIMER_073",
    category: "Makeup > Face > Face Primer",
    brand: "tarte",
    name: "BB blur natural matte tinted moisturizer Broad Spectrum SPF 30 Sunscreen",
    type: "Face Primer",
    image: skuImage("2413045"),
    link: "https://www.sephora.com/product/bb-tinted-treatment-12-hour-primer-broad-spectrum-spf-30-sunscreen-P377542?skuId=2413045"
  }),
  productData({
    code: "FACE_PRIMER_074",
    category: "Makeup > Face > Face Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Hydra Vizor Huez Tinted Moisturizer Broad Spectrum Mineral Spf 30 Sunscreen",
    type: "Face Primer",
    image: skuImage("2766095"),
    link: "https://www.sephora.com/product/fenty-skin-rihanna-hydra-vizor-huez-tinted-moisturizer-broad-spectrum-mineral-spf-30-sunscreen-P511541?skuId=2766095"
  }),
  productData({
    code: "FACE_PRIMER_075",
    category: "Makeup > Face > Face Primer",
    brand: "OLEHENRIKSEN",
    name: "Banana Bright Face Primer",
    type: "Face Primer",
    image: skuImage("2174860"),
    link: "https://www.sephora.com/product/banana-bright-face-primer-P442012?skuId=2174860"
  }),
  productData({
    code: "FACE_PRIMER_076",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Glowscreen Soft-Radiance Drops Mineral SPF 40",
    type: "Face Primer",
    image: skuImage("2845550"),
    link: "https://www.sephora.com/product/glowscreen-soft-radiance-drops-mineral-spf-40-P515365?skuId=2845550"
  }),
  productData({
    code: "FACE_PRIMER_077",
    category: "Makeup > Face > Face Primer",
    brand: "caliray",
    name: "Mini So Blown Blurring & Hydrating Tripeptide Makeup Primer",
    type: "Face Primer",
    image: skuImage("2683431"),
    link: "https://www.sephora.com/product/caliray-mini-so-blown-blurring-collagen-peptide-primer-P505634?skuId=2683431"
  }),
  productData({
    code: "FACE_PRIMER_078",
    category: "Makeup > Face > Face Primer",
    brand: "LAWLESS",
    name: "Forget the Filler Skin-Plumping Line-Smoothing Moisturizer + Makeup Primer",
    type: "Face Primer",
    image: skuImage("2694677"),
    link: "https://www.sephora.com/product/forget-filler-skin-plumping-line-smoothing-moisturizer-makeup-primer-P507153?skuId=2694677"
  }),
  productData({
    code: "FACE_PRIMER_079",
    category: "Makeup > Face > Face Primer",
    brand: "caliray",
    name: "So Blown Blurring & Hydrating Tripeptide Makeup Primer",
    type: "Face Primer",
    image: skuImage("2594422"),
    link: "https://www.sephora.com/product/caliray-so-blown-blurring-primer-P501569?skuId=2594422"
  }),
  productData({
    code: "FACE_PRIMER_080",
    category: "Makeup > Face > Face Primer",
    brand: "Gucci",
    name: "Hydrating Silk Priming Serum",
    type: "Face Primer",
    image: skuImage("2416675"),
    link: "https://www.sephora.com/product/gucci-serum-de-beaute-fluide-soyeux-silk-priming-serum-P467623?skuId=2416675"
  }),
  productData({
    code: "FACE_PRIMER_081",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Pore Minimizer",
    type: "Face Primer",
    image: skuImage("2424687"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-pore-minimizer-P468182?skuId=2424687"
  }),
  productData({
    code: "FACE_PRIMER_082",
    category: "Makeup > Face > Face Primer",
    brand: "Hourglass",
    name: "Vanish Airbrush Primer Jumbo",
    type: "Face Primer",
    image: skuImage("2669034"),
    link: "https://www.sephora.com/product/vanish-airbrush-primer-jumbo-P506150?skuId=2669034"
  }),
  productData({
    code: "FACE_PRIMER_083",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Mini Step 1 Primer Color Corrector – 24HR Redness Control & Hydrating Primer",
    type: "Face Primer",
    image: skuImage("2640779"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-step-1-primer-color-corrector-24hr-redness-control-hydrating-primer-P504180?skuId=2640779"
  }),
  productData({
    code: "FACE_PRIMER_084",
    category: "Makeup > Face > Face Primer",
    brand: "DIOR",
    name: "Dior Forever Glow Veil Makeup Primer",
    type: "Face Primer",
    image: skuImage("2639409"),
    link: "https://www.sephora.com/product/dior-glow-veil-primer-P504675?skuId=2639409"
  }),
  productData({
    code: "FACE_PRIMER_085",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Pure Canvas Primer - Blurring",
    type: "Face Primer",
    image: skuImage("2748150"),
    link: "https://www.sephora.com/product/laura-mercier-pure-canvas-primer-blurring-floutant-P454941?skuId=2748150"
  }),
  productData({
    code: "FACE_PRIMER_086",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Pure Canvas Primer - Illuminating",
    type: "Face Primer",
    image: skuImage("2748176"),
    link: "https://www.sephora.com/product/laura-mercier-pure-canvas-primer-illuminating-lumineux-P454943?skuId=2748176"
  }),
  productData({
    code: "FACE_PRIMER_087",
    category: "Makeup > Face > Face Primer",
    brand: "Isle of Paradise",
    name: "Sunny Serum Instant Face Bronzer",
    type: "Face Primer",
    image: skuImage("2871895"),
    link: "https://www.sephora.com/product/isle-paradise-sunny-serum-instant-face-bronzer-P510731?skuId=2871895"
  }),
  productData({
    code: "FACE_PRIMER_088",
    category: "Makeup > Face > Face Primer",
    brand: "stila",
    name: "One Step Correct",
    type: "Face Primer",
    image: skuImage("1277474"),
    link: "https://www.sephora.com/product/one-step-correct-P269019?skuId=1277474"
  }),
  productData({
    code: "FACE_PRIMER_089",
    category: "Makeup > Face > Face Primer",
    brand: "Mango People",
    name: "Juicy Glow Prep & Hydrate Balm Stick with Centella Asiatica",
    type: "Face Primer",
    image: skuImage("2723294"),
    link: "https://www.sephora.com/product/mango-people-juicy-glow-prep-hydrate-balm-stick-P509434?skuId=2723294"
  }),
  productData({
    code: "FACE_PRIMER_090",
    category: "Makeup > Face > Face Primer",
    brand: "Glow Recipe",
    name: "Mini Watermelon Glow Niacinamide Hue Drops Sun Glow Serum",
    type: "Face Primer",
    image: skuImage("2827947"),
    link: "https://www.sephora.com/product/mini-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P515372?skuId=2827947"
  }),
  productData({
    code: "FACE_PRIMER_091",
    category: "Makeup > Face > Face Primer",
    brand: "Iconic London",
    name: "Velvet Smooth Pore-Refining Primer",
    type: "Face Primer",
    image: skuImage("2759306"),
    link: "https://www.sephora.com/product/iconic-london-velvet-smooth-pore-refining-primer-P510031?skuId=2759306"
  }),
  productData({
    code: "FACE_PRIMER_092",
    category: "Makeup > Face > Face Primer",
    brand: "Peter Thomas Roth",
    name: "Instant FIRMx® Glow-Filter Priming Serum",
    type: "Face Primer",
    image: skuImage("2762946"),
    link: "https://www.sephora.com/product/peter-thomas-roth-instant-firmx-r-glow-filter-priming-serum-P510332?skuId=2762946"
  }),
  productData({
    code: "FACE_PRIMER_093",
    category: "Makeup > Face > Face Primer",
    brand: "ISAMAYA",
    name: "Microbial Gel Face Prep Primer",
    type: "Face Primer",
    image: skuImage("2855682"),
    link: "https://www.sephora.com/product/microbial-gel-face-prep-primer-P515461?skuId=2855682"
  }),
  productData({
    code: "FACE_PRIMER_094",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Hydra Booster",
    type: "Face Primer",
    image: skuImage("2424695"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-hydra-booster-P468184?skuId=2424695"
  }),
  productData({
    code: "FACE_PRIMER_095",
    category: "Makeup > Face > Face Primer",
    brand: "Too Faced",
    name: "Hangover 3-in-1 Replenishing Primer & Setting Spray",
    type: "Face Primer",
    image: skuImage("1952928"),
    link: "https://www.sephora.com/product/hangover-3-in-1-replenishing-primer-setting-spray-P420166?skuId=1952928"
  }),
  productData({
    code: "FACE_PRIMER_096",
    category: "Makeup > Face > Face Primer",
    brand: "StriVectin",
    name: "Line BlurFector ™ Instant Wrinkle Blurring Face Primer",
    type: "Face Primer",
    image: skuImage("2467959"),
    link: "https://www.sephora.com/product/line-blurfector-trade-instant-wrinkle-blurring-face-primer-P474119?skuId=2467959"
  }),
  productData({
    code: "FACE_PRIMER_097",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Icons Only SPF Bestseller Kit",
    type: "Face Primer",
    image: skuImage("2839744"),
    link: "https://www.sephora.com/product/icons-only-spf-bestseller-kit-P515052?skuId=2839744"
  }),
  productData({
    code: "FACE_PRIMER_098",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Mini Step 1 Primer Hydra Booster",
    type: "Face Primer",
    image: skuImage("2424786"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-step-1-primer-hydra-booster-P468193?skuId=2424786"
  }),
  productData({
    code: "FACE_PRIMER_099",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Color Corrector - Redness Corrector",
    type: "Face Primer",
    image: skuImage("2424703"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-redness-corrector-P468185?skuId=2424703"
  }),
  productData({
    code: "FACE_PRIMER_100",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Mini Step 1 Primer Pore Minimizer",
    type: "Face Primer",
    image: skuImage("2424778"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-step-1-primer-pore-minimizer-P468191?skuId=2424778"
  }),
  productData({
    code: "FACE_PRIMER_101",
    category: "Makeup > Face > Face Primer",
    brand: "Estée Lauder",
    name: "Futurist Aqua Brilliance Watery Glow Primer with Hyaluronic Acid and Glycerin",
    type: "Face Primer",
    image: skuImage("2381051"),
    link: "https://www.sephora.com/product/estee-lauder-futurist-aqua-brilliance-watery-glow-primer-P460732?skuId=2381051"
  }),
  productData({
    code: "FACE_PRIMER_102",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "100% Mineral Mattescreen Sunscreen SPF 40",
    type: "Face Primer",
    image: skuImage("2458446"),
    link: "https://www.sephora.com/product/supergoop-mineral-mattescreen-spf-40-pa-P476733?skuId=2458446"
  }),
  productData({
    code: "FACE_PRIMER_103",
    category: "Makeup > Face > Face Primer",
    brand: "Range Beauty",
    name: "True Intentions Hydrating and Soothing Primer with Vitamin E",
    type: "Face Primer",
    image: skuImage("2786069"),
    link: "https://www.sephora.com/product/range-beauty-true-intentions-hydrating-primer-with-vitamin-e-P513544?skuId=2786069"
  }),
  productData({
    code: "FACE_PRIMER_104",
    category: "Makeup > Face > Face Primer",
    brand: "Glossier",
    name: "Invisible Shield Priming Sunscreen SPF 50",
    type: "Face Primer",
    image: skuImage("2771434"),
    link: "https://www.sephora.com/product/glossier-invisible-shield-blurring-primer-spf-P511457?skuId=2771434"
  }),
  productData({
    code: "FACE_PRIMER_105",
    category: "Makeup > Face > Face Primer",
    brand: "Dr. Barbara Sturm",
    name: "Glow Cream — Hydrating & Glow‑Boosting Face Cream for Instant Luminosity, Smoothness & Long‑Term Radiance",
    type: "Face Primer",
    image: skuImage("2777019"),
    link: "https://www.sephora.com/product/dr-barbara-sturm-glow-cream-P511547?skuId=2777019"
  }),
  productData({
    code: "FACE_PRIMER_106",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Mini Pure Canvas Primer - Blurring",
    type: "Face Primer",
    image: skuImage("2748168"),
    link: "https://www.sephora.com/product/laura-mercier-pure-canvas-primer-mini-blurring-floutant-P454946?skuId=2748168"
  }),
  productData({
    code: "FACE_PRIMER_107",
    category: "Makeup > Face > Face Primer",
    brand: "REFY",
    name: "Mini Blur and Hydrate Oil-Control Face Primer with Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2859312"),
    link: "https://www.sephora.com/product/mini-blur-hydrate-oil-control-face-primer-with-hyaluronic-acid-P516892?skuId=2859312"
  }),
  productData({
    code: "FACE_PRIMER_108",
    category: "Makeup > Face > Face Primer",
    brand: "Lancôme",
    name: "UV Expert Defense SPF 50+  Primer & Moisturizer",
    type: "Face Primer",
    image: skuImage("2186773"),
    link: "https://www.sephora.com/product/uv-expert-aquagel-defense-primer-moisturizer-spf-50-P442750?skuId=2186773"
  }),
  productData({
    code: "FACE_PRIMER_109",
    category: "Makeup > Face > Face Primer",
    brand: "DIOR",
    name: "Dior Forever Velvet Veil Matte Primer",
    type: "Face Primer",
    image: skuImage("2639417"),
    link: "https://www.sephora.com/product/dior-velvet-veil-primer-P504694?skuId=2639417"
  }),
  productData({
    code: "FACE_PRIMER_110",
    category: "Makeup > Face > Face Primer",
    brand: "Peter Thomas Roth",
    name: "Instant FIRMx® No-Filter Firming Primer",
    type: "Face Primer",
    image: skuImage("2640670"),
    link: "https://www.sephora.com/product/peter-thomas-roth-instant-firmx-reg-no-filter-primer-P503702?skuId=2640670"
  }),
  productData({
    code: "FACE_PRIMER_111",
    category: "Makeup > Face > Face Primer",
    brand: "NATASHA DENONA",
    name: "HY-GEN Bronze - Energizing & Hydrating Primer Serum",
    type: "Face Primer",
    image: skuImage("2868420"),
    link: "https://www.sephora.com/product/natasha-denona-hy-gen-bronze-energizing-hydrating-primer-serum-P516777?skuId=2868420"
  }),
  productData({
    code: "FACE_PRIMER_112",
    category: "Makeup > Face > Face Primer",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Sublime Perfection Hydrating Primer",
    type: "Face Primer",
    image: skuImage("2779999"),
    link: "https://www.sephora.com/product/skin-fetish-sublime-perfecting-primer-P447764?skuId=2779999"
  }),
  productData({
    code: "FACE_PRIMER_113",
    category: "Makeup > Face > Face Primer",
    brand: "Iris&Romeo",
    name: "Weekend Skin SPF 50 Natural Glow Tinted Sunscreen with Vitamin C + Niacinamide",
    type: "Face Primer",
    image: skuImage("2745149"),
    link: "https://www.sephora.com/product/weekend-skin-spf-50-instant-glow-mineral-sunscreen-with-vitamin-c-niacinamide-P509342?skuId=2745149"
  }),
  productData({
    code: "FACE_PRIMER_114",
    category: "Makeup > Face > Face Primer",
    brand: "Freck Beauty",
    name: "Best of Rich Bitch Primer and Lip Balm Set",
    type: "Face Primer",
    image: skuImage("2812626"),
    link: "https://www.sephora.com/product/freck-beauty-rich-bitch-primer-balm-og-P512558?skuId=2812626"
  }),
  productData({
    code: "FACE_PRIMER_115",
    category: "Makeup > Face > Face Primer",
    brand: "Dermalogica",
    name: "Skinperfect Primer SPF 30",
    type: "Face Primer",
    image: skuImage("2221190"),
    link: "https://www.sephora.com/product/skinperfect-primer-P443361?skuId=2221190"
  }),
  productData({
    code: "FACE_PRIMER_116",
    category: "Makeup > Face > Face Primer",
    brand: "Valentino",
    name: "V-Lighter Illuminating Face Primer and Highlighter with Hyaluronic Acid",
    type: "Face Primer",
    image: skuImage("2542843"),
    link: "https://www.sephora.com/product/valentino-v-lighter-face-primer-highlighter-P479510?skuId=2542843"
  }),
  productData({
    code: "FACE_PRIMER_117",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Shine Control",
    type: "Face Primer",
    image: skuImage("2424679"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-shine-control-P468183?skuId=2424679"
  }),
  productData({
    code: "FACE_PRIMER_118",
    category: "Makeup > Face > Face Primer",
    brand: "Kate Somerville",
    name: "Hydrakate Illuminating Sunscreen SPF 50+ Drops with Ectoin",
    type: "Face Primer",
    image: skuImage("2755817"),
    link: "https://www.sephora.com/product/kate-somerville-hydrakate-illuminating-spf-50-drops-with-ectoin-P511462?skuId=2755817"
  }),
  productData({
    code: "FACE_PRIMER_119",
    category: "Makeup > Face > Face Primer",
    brand: "Supergoop!",
    name: "Mineral Unseen Sunscreen SPF 40",
    type: "Face Primer",
    image: skuImage("2773299"),
    link: "https://www.sephora.com/product/supergoop-mineral-unseen-sunscreen-spf-40-P510927?skuId=2773299"
  }),
  productData({
    code: "FACE_PRIMER_120",
    category: "Makeup > Face > Face Primer",
    brand: "Drunk Elephant",
    name: "B-Goldi™ Bright Illuminating Drops with 5% Niacinamide",
    type: "Face Primer",
    image: skuImage("2689743"),
    link: "https://www.sephora.com/product/b-goldi-tm-illuminating-drops-with-5-niacinamide-for-brightening-P507099?skuId=2689743"
  }),
  productData({
    code: "FACE_PRIMER_121",
    category: "Makeup > Face > Face Primer",
    brand: "Fenty Beauty by Rihanna",
    name: "Blemish Defeat'r BHA Spot-Targeting Gel",
    type: "Face Primer",
    image: skuImage("2703692"),
    link: "https://www.sephora.com/product/blemish-defeat-r-bha-spot-targeting-gel-P507324?skuId=2703692"
  }),
  productData({
    code: "FACE_PRIMER_122",
    category: "Makeup > Face > Face Primer",
    brand: "Too Faced",
    name: "Mini Hangover 3-in-1 Replenishing Primer & Setting Spray",
    type: "Face Primer",
    image: skuImage("2030088"),
    link: "https://www.sephora.com/product/hangover-3-in-1-replenishing-primer-setting-spray-mini-P428037?skuId=2030088"
  }),
  productData({
    code: "FACE_PRIMER_123",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Mini Pure Canvas Primer - Hydrating",
    type: "Face Primer",
    image: skuImage("2919199"),
    link: "https://www.sephora.com/product/mini-pure-canvas-primer-hydrating-P519472?skuId=2919199"
  }),
  productData({
    code: "FACE_PRIMER_124",
    category: "Makeup > Face > Face Primer",
    brand: "Iconic London",
    name: "Radiance Complexion Booster",
    type: "Face Primer",
    image: skuImage("2463586"),
    link: "https://www.sephora.com/product/iconic-london-radiance-complexion-booster-P473171?skuId=2463586"
  }),
  productData({
    code: "FACE_PRIMER_125",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Mercier",
    name: "Mini Pure Canvas Primer Illuminating",
    type: "Face Primer",
    image: skuImage("2748192"),
    link: "https://www.sephora.com/product/laura-mercier-mini-pure-canvas-primer-illuminating-P467956?skuId=2748192"
  }),
  productData({
    code: "FACE_PRIMER_126",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Geller",
    name: "Spackle Skin Perfecting Hydrating Primer with Squalane & Shea Butter",
    type: "Face Primer",
    image: skuImage("2922417"),
    link: "https://www.sephora.com/product/spackle-skin-perfecting-primer-hydrate-moisturizes-replenishes-P519548?skuId=2922417"
  }),
  productData({
    code: "FACE_PRIMER_127",
    category: "Makeup > Face > Face Primer",
    brand: "MAKE UP FOR EVER",
    name: "Color Correcting Step 1 Primers",
    type: "Face Primer",
    image: skuImage("2424752"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-tone-up-perfector-P468186?skuId=2424752"
  }),
  productData({
    code: "FACE_PRIMER_128",
    category: "Makeup > Face > Face Primer",
    brand: "Lion Pose",
    name: "Unghosted 100% Mineral Sunscreen SPF 42 with Zinc & Squalane",
    type: "Face Primer",
    image: skuImage("2905511"),
    link: "https://www.sephora.com/product/lion-pose-unghosted-100-mineral-sunscreen-spf-42-with-zinc-and-squalane-P510085?skuId=2905511"
  }),
  productData({
    code: "FACE_PRIMER_129",
    category: "Makeup > Face > Face Primer",
    brand: "Laura Geller",
    name: "Spackle Skin Perfecting Primer with Broad Spectrum SPF 30",
    type: "Face Primer",
    image: skuImage("2922789"),
    link: "https://www.sephora.com/product/spackle-skin-perfecting-primer-broad-spectrum-sunscreen-spf-30-P519547?skuId=2922789"
  }),
  productData({
    code: "FACE_PRIMER_130",
    category: "Makeup > Face > Face Primer",
    brand: "Murad",
    name: "Invisiblur™ Perfecting Face Sunscreen Broad Spectrum SPF 30 PA+++",
    type: "Face Primer",
    image: skuImage("2212058"),
    link: "https://www.sephora.com/product/invisiblur-perfecting-shield-broad-spectrum-spf-30-pa-P394397?skuId=2212058"
  }),
  productData({
    code: "FACE_PRIMER_131",
    category: "Makeup > Face > Face Primer",
    brand: "CAY SKIN",
    name: "Isle Glow Face Sunscreen Moisturizer SPF 45 with Sea Moss and Niacinamide",
    type: "Face Primer",
    image: skuImage("2662971"),
    link: "https://www.sephora.com/product/cay-skin-isle-glow-face-lotion-spf-45-P481366?skuId=2662971"
  }),
  productData({
    code: "FACE_PRIMER_132",
    category: "Makeup > Face > Face Primer",
    brand: "Urban Decay",
    name: "Ultimate Ozone Multipurpose Primer Pencil",
    type: "Face Primer",
    image: skuImage("1704550"),
    link: "https://www.sephora.com/product/ultimate-ozone-multipurpose-primer-pencil-P395733?skuId=1704550"
  }),
  productData({
    code: "FACE_PRIMER_133",
    category: "Makeup > Face > Face Primer",
    brand: "REFY",
    name: "Mini Brow Sculpt and Glow and Sculpt Primer Set",
    type: "Face Primer",
    image: skuImage("2802031"),
    link: "https://www.sephora.com/product/refy-beauty-mini-brow-sculpt-and-sculpt-face-primer-set-P512795?skuId=2802031"
  }),
  productData({
    code: "FACE_PRIMER_134",
    category: "Makeup > Face > Face Primer",
    brand: "CLINIQUE",
    name: "Superprimer Face Primer - Universal Face Primer",
    type: "Face Primer",
    image: skuImage("1540202"),
    link: "https://www.sephora.com/product/superprimer-face-primer-universal-face-primer-P382504?skuId=1540202"
  }),

  // ==================================================
  // Makeup > Face > Concealer
  // Products: 69
  // ==================================================
  productData({
    code: "CONCEALER_001",
    category: "Makeup > Face > Concealer",
    brand: "NARS",
    name: "Radiant Creamy Concealer with Hydrating Medium Coverage",
    type: "Concealer",
    image: skuImage("2172310"),
    link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=2172310"
  }),
  productData({
    code: "CONCEALER_002",
    category: "Makeup > Face > Concealer",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Crease-Proof Long-Wear Blur Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2941888"),
    link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870?skuId=2941888"
  }),
  productData({
    code: "CONCEALER_003",
    category: "Makeup > Face > Concealer",
    brand: "Fenty Beauty by Rihanna",
    name: "We're Even Hydrating Longwear Waterproof Concealer",
    type: "Concealer",
    image: skuImage("2746493"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-we-re-even-hydrating-longwear-concealer-P509852?skuId=2746493"
  }),
  productData({
    code: "CONCEALER_004",
    category: "Makeup > Face > Concealer",
    brand: "NATASHA DENONA",
    name: "Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer",
    type: "Concealer",
    image: skuImage("2671618"),
    link: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800?skuId=2671618"
  }),
  productData({
    code: "CONCEALER_005",
    category: "Makeup > Face > Concealer",
    brand: "NARS",
    name: "Soft Matte Complete Full Coverage Longwear Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2371425"),
    link: "https://www.sephora.com/product/soft-matte-complete-concealer-P416200?skuId=2371425"
  }),
  productData({
    code: "CONCEALER_006",
    category: "Makeup > Face > Concealer",
    brand: "MERIT",
    name: "The Minimalist Perfecting Complexion Foundation and Concealer Stick",
    type: "Concealer",
    image: skuImage("2791861"),
    link: "https://www.sephora.com/product/merit-the-minimalist-perfecting-complexion-foundation-concealer-stick-P468694?skuId=2791861"
  }),
  productData({
    code: "CONCEALER_007",
    category: "Makeup > Face > Concealer",
    brand: "Too Faced",
    name: "Born This Way Super Coverage Multi-Use Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2084408"),
    link: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298?skuId=2084408"
  }),
  productData({
    code: "CONCEALER_008",
    category: "Makeup > Face > Concealer",
    brand: "SEPHORA COLLECTION",
    name: "Best Skin Ever Multi-Use Hydrating Glow Concealer",
    type: "Concealer",
    image: skuImage("2710432"),
    link: "https://www.sephora.com/product/best-skin-ever-glow-concealer-P509539?skuId=2710432"
  }),
  productData({
    code: "CONCEALER_009",
    category: "Makeup > Face > Concealer",
    brand: "HUDA BEAUTY",
    name: "#FauxFilter Matte Buildable Coverage Waterproof Concealer",
    type: "Concealer",
    image: skuImage("2577781"),
    link: "https://www.sephora.com/product/fauxfilter-luminous-matte-buildable-coverage-crease-proof-concealer-P500309?skuId=2577781"
  }),
  productData({
    code: "CONCEALER_010",
    category: "Makeup > Face > Concealer",
    brand: "Prada",
    name: "Micro-Correcting Blurring Concealer with Peptides",
    type: "Concealer",
    image: skuImage("2928661"),
    link: "https://www.sephora.com/product/micro-correcting-blurring-concealer-with-peptides-P520649?skuId=2928661"
  }),
  productData({
    code: "CONCEALER_011",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "shape tape™ hydrating full coverage creamy concealer",
    type: "Concealer",
    image: skuImage("2821478"),
    link: "https://www.sephora.com/product/tarte-shape-tape-tm-ultra-creamy-concealer-P514043?skuId=2821478"
  }),
  productData({
    code: "CONCEALER_012",
    category: "Makeup > Face > Concealer",
    brand: "Hourglass",
    name: "Mini Vanish™ Airbrush Concealer",
    type: "Concealer",
    image: skuImage("2857241"),
    link: "https://www.sephora.com/product/hourglass-mini-vanish-trade-airbrush-concealer-P467953?skuId=2857241"
  }),
  productData({
    code: "CONCEALER_013",
    category: "Makeup > Face > Concealer",
    brand: "ILIA",
    name: "Skin Blur Serum Concealer with 12-Hour Wear",
    type: "Concealer",
    image: skuImage("2893097"),
    link: "https://www.sephora.com/product/skin-blur-hydrating-serum-concealer-P520377?skuId=2893097"
  }),
  productData({
    code: "CONCEALER_014",
    category: "Makeup > Face > Concealer",
    brand: "DIOR",
    name: "Dior Forever Skin Correct Full-Coverage Concealer",
    type: "Concealer",
    image: skuImage("2639318"),
    link: "https://www.sephora.com/product/dior-dior-forever-skin-correct-concealer-P454348?skuId=2639318"
  }),
  productData({
    code: "CONCEALER_015",
    category: "Makeup > Face > Concealer",
    brand: "Kosas",
    name: "Mini Revealer Super Creamy + Brightening Concealer with Caffeine and Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2935963"),
    link: "https://www.sephora.com/product/mini-revealer-super-creamy-and-brightening-concealer-and-daytime-eye-cream-P503996?skuId=2935963"
  }),
  productData({
    code: "CONCEALER_016",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "mini shape tape™ hydrating full coverage creamy concealer",
    type: "Concealer",
    image: skuImage("2821130"),
    link: "https://www.sephora.com/product/tarte-travel-size-shape-tape-tm-ultra-creamy-concealer-P514036?skuId=2821130"
  }),
  productData({
    code: "CONCEALER_017",
    category: "Makeup > Face > Concealer",
    brand: "PATRICK TA",
    name: "Major Skin Soft Blur Brightening Hydrating Concealer with Vitamin E",
    type: "Concealer",
    image: skuImage("2927390"),
    link: "https://www.sephora.com/product/major-skin-soft-blur-brightening-hydrating-concealer-with-vitamin-e-P520636?skuId=2927390"
  }),
  productData({
    code: "CONCEALER_018",
    category: "Makeup > Face > Concealer",
    brand: "Armani Beauty",
    name: "Luminous Silk Hydrating Face and Under-Eye Concealer",
    type: "Concealer",
    image: skuImage("2340982"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158?skuId=2340982"
  }),
  productData({
    code: "CONCEALER_019",
    category: "Makeup > Face > Concealer",
    brand: "Bobbi Brown",
    name: "Skin Hydrating Full Coverage Longwear Concealer",
    type: "Concealer",
    image: skuImage("2595510"),
    link: "https://www.sephora.com/product/skin-full-cover-concealer-P501412?skuId=2595510"
  }),
  productData({
    code: "CONCEALER_020",
    category: "Makeup > Face > Concealer",
    brand: "IT Cosmetics",
    name: "Bye Bye Under Eye Anti-Aging Full Coverage Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2137834"),
    link: "https://www.sephora.com/product/bye-bye-under-eye-full-coverage-anti-aging-waterproof-concealer-P437987?skuId=2137834"
  }),
  productData({
    code: "CONCEALER_021",
    category: "Makeup > Face > Concealer",
    brand: "Yves Saint Laurent",
    name: "Touche Éclat Awakening Concealer Click Pen",
    type: "Concealer",
    image: skuImage("2859098"),
    link: "https://www.sephora.com/product/touche-eclat-radiance-perfecting-pen-P218431?skuId=2859098"
  }),
  productData({
    code: "CONCEALER_022",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "shape tape™ blurring concealer stick",
    type: "Concealer",
    image: skuImage("2869865"),
    link: "https://www.sephora.com/product/shape-tape-tm-blur-concealer-stick-P515882?skuId=2869865"
  }),
  productData({
    code: "CONCEALER_023",
    category: "Makeup > Face > Concealer",
    brand: "Charlotte Tilbury",
    name: "Magic Vanish Color Corrector",
    type: "Concealer",
    image: skuImage("2245090"),
    link: "https://www.sephora.com/product/magic-vanish-color-corrector-P449571?skuId=2245090"
  }),
  productData({
    code: "CONCEALER_024",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "mini shape tape™ full coverage matte concealer",
    type: "Concealer",
    image: skuImage("2452878"),
    link: "https://www.sephora.com/product/tarte-travel-size-shape-tape-concealer-P471800?skuId=2452878"
  }),
  productData({
    code: "CONCEALER_025",
    category: "Makeup > Face > Concealer",
    brand: "MILK MAKEUP",
    name: "Future Fluid Creamy Longwear Hydrating Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2596112"),
    link: "https://www.sephora.com/product/future-fluid-all-over-cream-concealer-P500448?skuId=2596112"
  }),
  productData({
    code: "CONCEALER_026",
    category: "Makeup > Face > Concealer",
    brand: "Anastasia Beverly Hills",
    name: "Magic Touch Medium to Full Coverage Concealer",
    type: "Concealer",
    image: skuImage("2480481"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-concealer-P475045?skuId=2480481"
  }),
  productData({
    code: "CONCEALER_027",
    category: "Makeup > Face > Concealer",
    brand: "Givenchy",
    name: "Prisme Libre Skin-Caring 24H Hydrating + Radiant + Correcting Creamy Concealer",
    type: "Concealer",
    image: skuImage("2637015"),
    link: "https://www.sephora.com/product/givenchy-prisme-libre-skin-caring-24h-hydrating-radiant-correcting-creamy-concealer-P505129?skuId=2637015"
  }),
  productData({
    code: "CONCEALER_028",
    category: "Makeup > Face > Concealer",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Matte Contour Skinstick",
    type: "Concealer",
    image: skuImage("2589927"),
    link: "https://www.sephora.com/product/match-stix-matte-skinstick-P18975403?skuId=2589927"
  }),
  productData({
    code: "CONCEALER_029",
    category: "Makeup > Face > Concealer",
    brand: "ILIA",
    name: "Skin Rewind Blurring Foundation and Concealer Complexion Stick",
    type: "Concealer",
    image: skuImage("2739589"),
    link: "https://www.sephora.com/product/ilia-skin-rewind-complexion-stick-P509720?skuId=2739589"
  }),
  productData({
    code: "CONCEALER_030",
    category: "Makeup > Face > Concealer",
    brand: "Fara Homidi",
    name: "Essential Face Compact Refillable Concealer and Foundation",
    type: "Concealer",
    image: skuImage("2790681"),
    link: "https://www.sephora.com/product/fara-homidi-essential-face-compact-refillable-concealer-and-foundation-P511747?skuId=2790681"
  }),
  productData({
    code: "CONCEALER_031",
    category: "Makeup > Face > Concealer",
    brand: "REFY",
    name: "Brightening and Blurring Serum Concealer with Plant-Derived Squalene",
    type: "Concealer",
    image: skuImage("2763282"),
    link: "https://www.sephora.com/product/refy-beauty-refy-brightening-blurring-serum-concealer-with-plant-derived-squalene-P511534?skuId=2763282"
  }),
  productData({
    code: "CONCEALER_032",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "maracuja creaseless full coverage radiant undereye concealer",
    type: "Concealer",
    image: skuImage("2094548"),
    link: "https://www.sephora.com/product/creaseless-concealer-P433206?skuId=2094548"
  }),
  productData({
    code: "CONCEALER_033",
    category: "Makeup > Face > Concealer",
    brand: "PAT McGRATH LABS",
    name: "Sublime Perfection Concealer",
    type: "Concealer",
    image: skuImage("2310811"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-sublime-perfection-concealer-P456106?skuId=2310811"
  }),
  productData({
    code: "CONCEALER_034",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "maracuja creaseless creamy liquid concealer",
    type: "Concealer",
    image: skuImage("2772853"),
    link: "https://www.sephora.com/product/tarte-maracuja-creaseless-creamy-concealer-P512243?skuId=2772853"
  }),
  productData({
    code: "CONCEALER_035",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "Mini Shape Tape Concealer + Tubing Mascara Set",
    type: "Concealer",
    image: skuImage("2948230"),
    link: "https://www.sephora.com/product/travel-size-shape-tape-tubing-set-P520769?skuId=2948230"
  }),
  productData({
    code: "CONCEALER_036",
    category: "Makeup > Face > Concealer",
    brand: "SEPHORA COLLECTION",
    name: "Best Skin Ever 8HR Color Corrector",
    type: "Concealer",
    image: skuImage("2760809"),
    link: "https://www.sephora.com/product/best-skin-ever-color-corrector-P512793?skuId=2760809"
  }),
  productData({
    code: "CONCEALER_037",
    category: "Makeup > Face > Concealer",
    brand: "Bobbi Brown",
    name: "Skin Cream Concealer Stick",
    type: "Concealer",
    image: skuImage("2552826"),
    link: "https://www.sephora.com/product/bobbi-brown-skin-concealer-stick-P480281?skuId=2552826"
  }),
  productData({
    code: "CONCEALER_038",
    category: "Makeup > Face > Concealer",
    brand: "Saie",
    name: "Hydrabeam Hydrating & Concealing Under Eye Brightener with Cucumber Extract",
    type: "Concealer",
    image: skuImage("2578920"),
    link: "https://www.sephora.com/product/saie-hydrabeam-brightening-hydrating-under-eye-concealer-P483685?skuId=2578920"
  }),
  productData({
    code: "CONCEALER_039",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "mini maracuja creaseless creamy liquid concealer",
    type: "Concealer",
    image: skuImage("2783553"),
    link: "https://www.sephora.com/product/tarte-mini-maracuja-creamy-creaseless-concealer-P512244?skuId=2783553"
  }),
  productData({
    code: "CONCEALER_040",
    category: "Makeup > Face > Concealer",
    brand: "Kosas",
    name: "Brighten & Blur Set - Color Corrector + Loose Setting Powder Face Set",
    type: "Concealer",
    image: skuImage("2935989"),
    link: "https://www.sephora.com/product/brighten-and-blur-set-color-corrector-loose-setting-powder-face-set-P520516?skuId=2935989"
  }),
  productData({
    code: "CONCEALER_041",
    category: "Makeup > Face > Concealer",
    brand: "Anastasia Beverly Hills",
    name: "Highlighting & Concealing Eyebrow Pro Pencil",
    type: "Concealer",
    image: skuImage("1622075"),
    link: "https://www.sephora.com/product/pro-pencil-P386783?skuId=1622075"
  }),
  productData({
    code: "CONCEALER_042",
    category: "Makeup > Face > Concealer",
    brand: "Too Faced",
    name: "Born This Way Ethereal Light Illuminating Smoothing Concealer",
    type: "Concealer",
    image: skuImage("2584704"),
    link: "https://www.sephora.com/product/too-faced-etheral-light-smoothing-concealer-P484079?skuId=2584704"
  }),
  productData({
    code: "CONCEALER_043",
    category: "Makeup > Face > Concealer",
    brand: "OLEHENRIKSEN",
    name: "Banana Bright+ Vitamin CC Eye Sticks for Dark Circles",
    type: "Concealer",
    image: skuImage("2648483"),
    link: "https://www.sephora.com/product/banana-bright-vitamin-cc-eye-sticks-P504639?skuId=2648483"
  }),
  productData({
    code: "CONCEALER_044",
    category: "Makeup > Face > Concealer",
    brand: "CLINIQUE",
    name: "Even Better™ All-Over Concealer + Eraser",
    type: "Concealer",
    image: skuImage("2365021"),
    link: "https://www.sephora.com/product/clinique-even-better-all-over-concealer-eraser-P461436?skuId=2365021"
  }),
  productData({
    code: "CONCEALER_045",
    category: "Makeup > Face > Concealer",
    brand: "tarte",
    name: "mini maracuja creaseless full coverage radiant undereye concealer",
    type: "Concealer",
    image: skuImage("2252179"),
    link: "https://www.sephora.com/product/mini-creaseless-under-eye-concealer-P447364?skuId=2252179"
  }),
  productData({
    code: "CONCEALER_046",
    category: "Makeup > Face > Concealer",
    brand: "NUDESTIX",
    name: "Nudefix Cream Concealer",
    type: "Concealer",
    image: skuImage("2661692"),
    link: "https://www.sephora.com/product/nudestix-nudefix-cream-concealer-P463098?skuId=2661692"
  }),
  productData({
    code: "CONCEALER_047",
    category: "Makeup > Face > Concealer",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Foundation + Concealer",
    type: "Concealer",
    image: skuImage("1744697"),
    link: "https://www.sephora.com/product/beyond-perfecting-foundation-concealer-P393325?skuId=1744697"
  }),
  productData({
    code: "CONCEALER_048",
    category: "Makeup > Face > Concealer",
    brand: "bareMinerals",
    name: "Loose Talc-Free Powder Concealer SPF 20",
    type: "Concealer",
    image: skuImage("1073063"),
    link: "https://www.sephora.com/product/bareminerals-broad-spectrum-multi-tasking-face-P61006?skuId=1073063"
  }),
  productData({
    code: "CONCEALER_049",
    category: "Makeup > Face > Concealer",
    brand: "LAWLESS",
    name: "Conseal the Deal Lightweight Concealer",
    type: "Concealer",
    image: skuImage("2511483"),
    link: "https://www.sephora.com/product/lawless-conseal-deal-full-coverage-concealer-P482699?skuId=2511483"
  }),
  productData({
    code: "CONCEALER_050",
    category: "Makeup > Face > Concealer",
    brand: "Urban Decay",
    name: "Quickie 24HR Full-Coverage Waterproof Concealer",
    type: "Concealer",
    image: skuImage("2514396"),
    link: "https://www.sephora.com/product/urban-decay-naked-quickie-concealer-P503994?skuId=2514396"
  }),
  productData({
    code: "CONCEALER_051",
    category: "Makeup > Face > Concealer",
    brand: "IT Cosmetics",
    name: "Do It All Radiant Concealer",
    type: "Concealer",
    image: skuImage("2863066"),
    link: "https://www.sephora.com/product/do-it-all-radiant-concealer-P516055?skuId=2863066"
  }),
  productData({
    code: "CONCEALER_052",
    category: "Makeup > Face > Concealer",
    brand: "Gucci",
    name: "Concentré de Beauté Multi-Use Crease Proof and Hydrating Concealer",
    type: "Concealer",
    image: skuImage("2691939"),
    link: "https://www.sephora.com/product/concentre-de-beaute-concealer-P507784?skuId=2691939"
  }),
  productData({
    code: "CONCEALER_053",
    category: "Makeup > Face > Concealer",
    brand: "Ami Colé",
    name: "Skin-Enhancing Concealer",
    type: "Concealer",
    image: skuImage("2631828"),
    link: "https://www.sephora.com/product/skin-enhancing-concealer-P503767?skuId=2631828"
  }),
  productData({
    code: "CONCEALER_054",
    category: "Makeup > Face > Concealer",
    brand: "MAKE UP FOR EVER",
    name: "Ultra HD Underpainting Color Correction Palette",
    type: "Concealer",
    image: skuImage("2034775"),
    link: "https://www.sephora.com/product/ultra-hd-underpainting-correction-palette-P428677?skuId=2034775"
  }),
  productData({
    code: "CONCEALER_055",
    category: "Makeup > Face > Concealer",
    brand: "Valentino",
    name: "Very Valentino 24 Hour Wear Hydrating Concealer",
    type: "Concealer",
    image: skuImage("2637866"),
    link: "https://www.sephora.com/product/valentino-very-valentino-concealer-P504684?skuId=2637866"
  }),
  productData({
    code: "CONCEALER_056",
    category: "Makeup > Face > Concealer",
    brand: "MILK MAKEUP",
    name: "Sunshine Under Eye Brightening Light Coverage Concealer",
    type: "Concealer",
    image: skuImage("2487106"),
    link: "https://www.sephora.com/product/milk-makeup-sunshine-under-eye-brightening-light-coverage-concealer-P475966?skuId=2487106"
  }),
  productData({
    code: "CONCEALER_057",
    category: "Makeup > Face > Concealer",
    brand: "Benefit Cosmetics",
    name: "Boi-ing Cakeless Full Coverage Waterproof Liquid Concealer",
    type: "Concealer",
    image: skuImage("2519684"),
    link: "https://www.sephora.com/product/boi-ing-cakeless-concealer-P448162?skuId=2519684"
  }),
  productData({
    code: "CONCEALER_058",
    category: "Makeup > Face > Concealer",
    brand: "ROSE INC",
    name: "Softlight Clean Dewy Hydrating Concealer",
    type: "Concealer",
    image: skuImage("2488245"),
    link: "https://www.sephora.com/product/rose-inc-softlight-clean-dewy-hydrating-concealer-P476011?skuId=2488245"
  }),
  productData({
    code: "CONCEALER_059",
    category: "Makeup > Face > Concealer",
    brand: "Benefit Cosmetics",
    name: "Boi-ing Industrial Strength Full Coverage Cream Concealer",
    type: "Concealer",
    image: skuImage("1951441"),
    link: "https://www.sephora.com/product/boi-ing-indistrial-strength-concealer-P1273?skuId=1951441"
  }),
  productData({
    code: "CONCEALER_060",
    category: "Makeup > Face > Concealer",
    brand: "TOM FORD",
    name: "Traceless Soft Matte Concealer with Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2647279"),
    link: "https://www.sephora.com/product/tom-ford-traceless-soft-matte-concealer-P505387?skuId=2647279"
  }),
  productData({
    code: "CONCEALER_061",
    category: "Makeup > Face > Concealer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up the Base Butter Silk Concealer",
    type: "Concealer",
    image: skuImage("2472025"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-buttersilk-concealer-P473741?skuId=2472025"
  }),
  productData({
    code: "CONCEALER_062",
    category: "Makeup > Face > Concealer",
    brand: "Iris&Romeo",
    name: "Best Skin Days Brightening Dark Spot Treatment Concealer with Vitamin C",
    type: "Concealer",
    image: skuImage("2758225"),
    link: "https://www.sephora.com/product/iris-romeo-best-skin-days-treatment-concealer-P510037?skuId=2758225"
  }),
  productData({
    code: "CONCEALER_063",
    category: "Makeup > Face > Concealer",
    brand: "Kaja",
    name: "Don't Settle Concealer",
    type: "Concealer",
    image: skuImage("2139699"),
    link: "https://www.sephora.com/product/don-t-settle-concealer-P436154?skuId=2139699"
  }),
  productData({
    code: "CONCEALER_064",
    category: "Makeup > Face > Concealer",
    brand: "Danessa Myricks Beauty",
    name: "Vision Cream Cover Adjustable Foundation & Concealer",
    type: "Concealer",
    image: skuImage("2443851"),
    link: "https://www.sephora.com/product/danessa-myricks-vision-cream-cover-2-in-1-foundation-concealer-P469460?skuId=2443851"
  }),
  productData({
    code: "CONCEALER_065",
    category: "Makeup > Face > Concealer",
    brand: "ISAMAYA",
    name: "5 Point Lift Illuminator",
    type: "Concealer",
    image: skuImage("2856029"),
    link: "https://www.sephora.com/product/5-point-lift-color-correcting-concealer-with-caffeine-P515460?skuId=2856029"
  }),
  productData({
    code: "CONCEALER_066",
    category: "Makeup > Face > Concealer",
    brand: "IT Cosmetics",
    name: "Bye Bye Dark Spots Concealer + Serum with Niacinamide & Hyaluronic Acid",
    type: "Concealer",
    image: skuImage("2643872"),
    link: "https://www.sephora.com/product/it-cosmetics-bye-bye-dark-spots-concealer-P504805?skuId=2643872"
  }),
  productData({
    code: "CONCEALER_067",
    category: "Makeup > Face > Concealer",
    brand: "Urban Decay",
    name: "Mini Stay Naked Correcting Concealer",
    type: "Concealer",
    image: skuImage("2311264"),
    link: "https://www.sephora.com/product/urban-decay-mini-stay-naked-correcting-concealer-P455265?skuId=2311264"
  }),
  productData({
    code: "CONCEALER_068",
    category: "Makeup > Face > Concealer",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Super Concealer Camouflage + 24-Hour Wear",
    type: "Concealer",
    image: skuImage("1948207"),
    link: "https://www.sephora.com/product/beyond-perfecting-super-concealer-P421227?skuId=1948207"
  }),
  productData({
    code: "CONCEALER_069",
    category: "Makeup > Face > Concealer",
    brand: "Fashion Fair",
    name: "Crème Concealer",
    type: "Concealer",
    image: skuImage("2759223"),
    link: "https://www.sephora.com/product/fashion-fair-creme-concealer-P510293?skuId=2759223"
  }),

  // ==================================================
  // Makeup > Face > Face Sets
  // Products: 33
  // ==================================================
  productData({
    code: "FACE_SET_001",
    category: "Makeup > Face > Face Sets",
    brand: "HUDA BEAUTY",
    name: "Blush Filter Blurring Blushlighters Palette",
    type: "Face Sets",
    image: skuImage("2954642"),
    link: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601?skuId=2954642"
  }),
  productData({
    code: "FACE_SET_002",
    category: "Makeup > Face > Face Sets",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Face Essentials Long-Lasting Full Face Cream Palette",
    type: "Face Sets",
    image: skuImage("2765352"),
    link: "https://www.sephora.com/product/hd-skin-face-essentials-full-face-cream-palette-P510371?skuId=2765352"
  }),
  productData({
    code: "FACE_SET_003",
    category: "Makeup > Face > Face Sets",
    brand: "SEPHORA COLLECTION",
    name: "Bronze Bronze Glow Face Palette",
    type: "Face Sets",
    image: skuImage("2960482"),
    link: "https://www.sephora.com/product/bronze-bronze-glow-face-palette-P522105?skuId=2960482"
  }),
  productData({
    code: "FACE_SET_004",
    category: "Makeup > Face > Face Sets",
    brand: "Charlotte Tilbury",
    name: "Mini Airbrush Flawless Setting Spray Duo Gift Set",
    type: "Face Sets",
    image: skuImage("2911832"),
    link: "https://www.sephora.com/product/mini-airbrush-flawless-setting-spray-duo-gift-set-P518402?skuId=2911832"
  }),
  productData({
    code: "FACE_SET_005",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "Balance and Brighten Color Correcting Baked Powder Foundation + Kabuki Brush Set",
    type: "Face Sets",
    image: skuImage("2921963"),
    link: "https://www.sephora.com/product/baked-balance-n-brighten-color-correcting-foundation-brush-bundle-P519537?skuId=2921963"
  }),
  productData({
    code: "FACE_SET_006",
    category: "Makeup > Face > Face Sets",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Face Sets",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "FACE_SET_007",
    category: "Makeup > Face > Face Sets",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Blush & Glow Palette",
    type: "Face Sets",
    image: skuImage("2705440"),
    link: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700?skuId=2705440"
  }),
  productData({
    code: "FACE_SET_008",
    category: "Makeup > Face > Face Sets",
    brand: "Saie",
    name: "The Saieglow™ Bestsellers Kit",
    type: "Face Sets",
    image: skuImage("2945202"),
    link: "https://www.sephora.com/product/saieglow-tm-bestsellers-kit-P520673?skuId=2945202"
  }),
  productData({
    code: "FACE_SET_009",
    category: "Makeup > Face > Face Sets",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Face Bronzer, Blush & Highlighter Palette",
    type: "Face Sets",
    image: skuImage("2820041"),
    link: "https://www.sephora.com/product/colorful-face-palettes-P514459?skuId=2820041"
  }),
  productData({
    code: "FACE_SET_010",
    category: "Makeup > Face > Face Sets",
    brand: "Danessa Myricks Beauty",
    name: "Mini Yummy Skin Glow Finish Skin Prep Essential Kit",
    type: "Face Sets",
    image: skuImage("2942407"),
    link: "https://www.sephora.com/product/mini-yummy-skin-glow-finish-skin-prep-essential-kit-P520272?skuId=2942407"
  }),
  productData({
    code: "FACE_SET_011",
    category: "Makeup > Face > Face Sets",
    brand: "Tower 28 Beauty",
    name: "SOS Hypochlorous Acid Spray Duo Skincare Set",
    type: "Face Sets",
    image: skuImage("2945103"),
    link: "https://www.sephora.com/product/sos-value-kit-P520795?skuId=2945103"
  }),
  productData({
    code: "FACE_SET_012",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "Geller's Greatest Lift-n-Glow Face Palette & Dual-Ended Blush + Bronzer Brush",
    type: "Face Sets",
    image: skuImage("2965846"),
    link: "https://www.sephora.com/product/laura-geller-gellers-greatest-lift-n-glow-face-palette-dual-ended-blush-bronzer-brush-P521593?skuId=2965846"
  }),
  productData({
    code: "FACE_SET_013",
    category: "Makeup > Face > Face Sets",
    brand: "Danessa Myricks Beauty",
    name: "Mini Yummy Skin Matte Finish Skin Prep Essential Kit",
    type: "Face Sets",
    image: skuImage("2942373"),
    link: "https://www.sephora.com/product/mini-yummy-skin-matte-finish-skin-prep-essential-kit-P520288?skuId=2942373"
  }),
  productData({
    code: "FACE_SET_014",
    category: "Makeup > Face > Face Sets",
    brand: "SEPHORA COLLECTION",
    name: "Pillow Dream Face and Eye Brush Set",
    type: "Face Sets",
    image: skuImage("2907707"),
    link: "https://www.sephora.com/product/pillow-dream-face-and-eye-brush-set-P520104?skuId=2907707"
  }),
  productData({
    code: "FACE_SET_015",
    category: "Makeup > Face > Face Sets",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Face Sets",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "FACE_SET_016",
    category: "Makeup > Face > Face Sets",
    brand: "SEPHORA COLLECTION",
    name: "After Advent Makeup & Skincare Gift Set",
    type: "Face Sets",
    image: skuImage("2907871"),
    link: "https://www.sephora.com/product/after-advent-makeup-skincare-gift-set-P518502?skuId=2907871"
  }),
  productData({
    code: "FACE_SET_017",
    category: "Makeup > Face > Face Sets",
    brand: "NARS",
    name: "Mini Multiple Blush & Sculpt Stick Duo",
    type: "Face Sets",
    image: skuImage("2974988"),
    link: "https://www.sephora.com/product/mini-multiple-sculpt-stick-set-P522224?skuId=2974988"
  }),
  productData({
    code: "FACE_SET_018",
    category: "Makeup > Face > Face Sets",
    brand: "NATASHA DENONA",
    name: "Hy-per Natural Face Palette",
    type: "Face Sets",
    image: skuImage("2743383"),
    link: "https://www.sephora.com/product/natasha-denona-hyper-natural-face-palette-P510087?skuId=2743383"
  }),
  productData({
    code: "FACE_SET_019",
    category: "Makeup > Face > Face Sets",
    brand: "Benefit Cosmetics",
    name: "It's Glam Time Trio Makeup Gift Set",
    type: "Face Sets",
    image: skuImage("2938140"),
    link: "https://www.sephora.com/product/its-glam-time-trio-makeup-gift-set-P520141?skuId=2938140"
  }),
  productData({
    code: "FACE_SET_020",
    category: "Makeup > Face > Face Sets",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Glow Blush",
    type: "Face Sets",
    image: skuImage("2743375"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533?skuId=2743375"
  }),
  productData({
    code: "FACE_SET_021",
    category: "Makeup > Face > Face Sets",
    brand: "PATRICK TA",
    name: "Major Skin Crème Foundation and Finishing Powder Duo",
    type: "Face Sets",
    image: skuImage("2607364"),
    link: "https://www.sephora.com/product/major-skin-creme-powder-foundation-duo-P502039?skuId=2607364"
  }),
  productData({
    code: "FACE_SET_022",
    category: "Makeup > Face > Face Sets",
    brand: "Anastasia Beverly Hills",
    name: "Primrose All In One Face & Eye Shadow Palette",
    type: "Face Sets",
    image: skuImage("2479533"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-primrose-all-in-one-face-eye-shadow-palette-P477809?skuId=2479533"
  }),
  productData({
    code: "FACE_SET_023",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "The Best of the Best Essential Full Face Baked Powder Palette",
    type: "Face Sets",
    image: skuImage("2922367"),
    link: "https://www.sephora.com/product/the-best-the-best-P519556?skuId=2922367"
  }),
  productData({
    code: "FACE_SET_024",
    category: "Makeup > Face > Face Sets",
    brand: "Iconic London",
    name: "The Everyday Glow Priming and Setting Gift Set",
    type: "Face Sets",
    image: skuImage("2935575"),
    link: "https://www.sephora.com/product/the-everyday-glow-priming-and-setting-gift-set-P521651?skuId=2935575"
  }),
  productData({
    code: "FACE_SET_025",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "The Best of the Best Cream Full Face Basics & Dual-Ended Blush + Bronzer Brush",
    type: "Face Sets",
    image: skuImage("2965820"),
    link: "https://www.sephora.com/product/laura-geller-the-best-the-best-cream-full-face-basics-dual-ended-blush-bronzer-brush-P521592?skuId=2965820"
  }),
  productData({
    code: "FACE_SET_026",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "Balance and Brighten Color Correcting Baked Powder Foundation + FlashProof Anti–Hot Flash Setting Spray Set",
    type: "Face Sets",
    image: skuImage("2965812"),
    link: "https://www.sephora.com/product/baked-balance-n-brighten-foundation-anti-hot-flash-setting-spray-bundle-P521596?skuId=2965812"
  }),
  productData({
    code: "FACE_SET_027",
    category: "Makeup > Face > Face Sets",
    brand: "Laura Geller",
    name: "Balance and Brighten Color Correcting Baked Powder Foundation, Full Size + Travel Mini Set",
    type: "Face Sets",
    image: skuImage("2959955"),
    link: "https://www.sephora.com/product/laura-geller-baked-balance-n-brighten-color-correcting-foundation-full-size-deluxe-mini-bundle-P521358?skuId=2959955"
  }),
  productData({
    code: "FACE_SET_028",
    category: "Makeup > Face > Face Sets",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo for Buildable, Radiant Finish",
    type: "Face Sets",
    image: skuImage("2602837"),
    link: "https://www.sephora.com/product/shade-illuminate-P422574?skuId=2602837"
  }),
  productData({
    code: "FACE_SET_029",
    category: "Makeup > Face > Face Sets",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Face Sets",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "FACE_SET_030",
    category: "Makeup > Face > Face Sets",
    brand: "NATASHA DENONA",
    name: "Love Face Eyeshadow & Cheek Essential Palette",
    type: "Face Sets",
    image: skuImage("2647170"),
    link: "https://www.sephora.com/product/natasha-denona-love-face-palette-P505250?skuId=2647170"
  }),
  productData({
    code: "FACE_SET_031",
    category: "Makeup > Face > Face Sets",
    brand: "Benefit Cosmetics",
    name: "Benetint Bliss Liquid Lip + Cheek Blush Stain Duo Makeup Gift Set",
    type: "Face Sets",
    image: skuImage("2947588"),
    link: "https://www.sephora.com/product/benetint-bliss-liquid-lip-cheek-blush-stain-duo-makeup-gift-set-P520151?skuId=2947588"
  }),
  productData({
    code: "FACE_SET_032",
    category: "Makeup > Face > Face Sets",
    brand: "Freck Beauty",
    name: "Best of Rich Bitch Primer and Lip Balm Set",
    type: "Face Sets",
    image: skuImage("2812626"),
    link: "https://www.sephora.com/product/freck-beauty-rich-bitch-primer-balm-og-P512558?skuId=2812626"
  }),
  productData({
    code: "FACE_SET_033",
    category: "Makeup > Face > Face Sets",
    brand: "Fara Homidi",
    name: "Essential Face Compact Refillable Concealer and Foundation",
    type: "Face Sets",
    image: skuImage("2790681"),
    link: "https://www.sephora.com/product/fara-homidi-essential-face-compact-refillable-concealer-and-foundation-P511747?skuId=2790681"
  }),

  // ==================================================
  // Makeup > Eye > Eyeshadow
  // Products: 114
  // ==================================================
  productData({
    code: "EYESHADOW_001",
    category: "Makeup > Eye > Eyeshadow",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2820108"),
    link: "https://www.sephora.com/product/colorful-eyeshadow-P515026?skuId=2820108"
  }),
  productData({
    code: "EYESHADOW_002",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Armani Beauty",
    name: "Eye Tint Long-Lasting Liquid Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2644730"),
    link: "https://www.sephora.com/product/eye-tint-P393434?skuId=2644730"
  }),
  productData({
    code: "EYESHADOW_003",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Fenty Beauty by Rihanna",
    name: "Killawatt Freestyle Highlighter",
    type: "Eyeshadow",
    image: skuImage("1925916"),
    link: "https://www.sephora.com/product/killawatt-freestyle-highlighter-P64879845?skuId=1925916"
  }),
  productData({
    code: "EYESHADOW_004",
    category: "Makeup > Eye > Eyeshadow",
    brand: "VIOLETTE_FR",
    name: "PLUME EYESHADOW Feather Matte Veil + Feather Shimmer Veil",
    type: "Eyeshadow",
    image: skuImage("2975191"),
    link: "https://www.sephora.com/product/plume-eyeshadow-feather-matte-veil-feather-shimmer-veil-P522394?skuId=2975191"
  }),
  productData({
    code: "EYESHADOW_005",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Bobbi Brown",
    name: "Long-Wear Waterproof Cream Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2892297"),
    link: "https://www.sephora.com/product/long-wear-waterproof-cream-eyeshadow-stick-P378145?skuId=2892297"
  }),
  productData({
    code: "EYESHADOW_006",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Prada",
    name: "Dimensions Multi-Effect Refillable Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2835940"),
    link: "https://www.sephora.com/product/prada-beauty-dimensions-multi-effect-refillable-eyeshadow-palette-P509684?skuId=2835940"
  }),
  productData({
    code: "EYESHADOW_007",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MERIT",
    name: "Solo Shadow Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2916922"),
    link: "https://www.sephora.com/product/solo-shadow-cream-eyeshadow-P506671?skuId=2916922"
  }),
  productData({
    code: "EYESHADOW_008",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Laura Mercier",
    name: "Caviar Stick Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2793305"),
    link: "https://www.sephora.com/product/laura-mercier-caviar-shimmer-eyeshadow-stick-reform-P512549?skuId=2793305"
  }),
  productData({
    code: "EYESHADOW_009",
    category: "Makeup > Eye > Eyeshadow",
    brand: "SEPHORA COLLECTION",
    name: "Sephora Colorful® Waterproof Eyeshadow & Eyeliner Multi-Stick",
    type: "Eyeshadow",
    image: skuImage("2672640"),
    link: "https://www.sephora.com/product/sephora-colorful-waterproof-eyeshadow-eyeliner-multi-stick-P284507?skuId=2672640"
  }),
  productData({
    code: "EYESHADOW_010",
    category: "Makeup > Eye > Eyeshadow",
    brand: "ILIA",
    name: "Eye Stylus Shadow Stick - Long-Lasting Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2685261"),
    link: "https://www.sephora.com/product/eye-stylus-shadow-stick-long-lasting-cream-eyeshadow-P506672?skuId=2685261"
  }),
  productData({
    code: "EYESHADOW_011",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Ethereal Eyes™ Eyeshadow Palette: The Original",
    type: "Eyeshadow",
    image: skuImage("2599660"),
    link: "https://www.sephora.com/product/ethereal-eyes-eyeshadow-palette-P501527?skuId=2599660"
  }),
  productData({
    code: "EYESHADOW_012",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAC Cosmetics",
    name: "Multisculpt Matte Liquid Eyeshadow + All-over Colour",
    type: "Eyeshadow",
    image: skuImage("2944106"),
    link: "https://www.sephora.com/product/mac-multisculpt-matte-liquid-eyeshadow-and-all-over-colour-P520529?skuId=2944106"
  }),
  productData({
    code: "EYESHADOW_013",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Tower 28 Beauty",
    name: "GoGo Cooling Shimmer 8H Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2892883"),
    link: "https://www.sephora.com/product/gogo-shimmer-stick-P517334?skuId=2892883"
  }),
  productData({
    code: "EYESHADOW_014",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "24/7 Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2417905"),
    link: "https://www.sephora.com/product/eyeshadow-P309813?skuId=2417905"
  }),
  productData({
    code: "EYESHADOW_015",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes® Long-Wearing Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2867364"),
    link: "https://www.sephora.com/product/master-mattes-long-wearing-cream-eyeshadow-P516972?skuId=2867364"
  }),
  productData({
    code: "EYESHADOW_016",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Glidr Smudge Proof Cream Eyeshadow Stick with 12-Hour Wear",
    type: "Eyeshadow",
    image: skuImage("2934610"),
    link: "https://www.sephora.com/product/glider-eyeshadow-stick-P520099?skuId=2934610"
  }),
  productData({
    code: "EYESHADOW_017",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PATRICK TA",
    name: "Major Dimension Eye Illusion Eyeshadow Duo",
    type: "Eyeshadow",
    image: skuImage("2906188"),
    link: "https://www.sephora.com/product/patrick-ta-major-dimension-eye-illusion-eyeshadow-duos-P512579?skuId=2906188"
  }),
  productData({
    code: "EYESHADOW_018",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Mini Embers Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2905339"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-embers-mini-eyeshadow-palette-P518663?skuId=2905339"
  }),
  productData({
    code: "EYESHADOW_019",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAC Cosmetics",
    name: "Pro Longwear Paint Pot 24HR Blendable Eye Primer + Cream Eye Shadow",
    type: "Eyeshadow",
    image: skuImage("2090975"),
    link: "https://www.sephora.com/product/pro-longwear-paint-pot-P14785236?skuId=2090975"
  }),
  productData({
    code: "EYESHADOW_020",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Bobbi Brown",
    name: "Crystal Eyes Shimmer Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2972701"),
    link: "https://www.sephora.com/product/crystal-eyeshadow-stick-P522172?skuId=2972701"
  }),
  productData({
    code: "EYESHADOW_021",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAC Cosmetics",
    name: "Dazzleshadow Longwear Liquid Eye Shadow",
    type: "Eyeshadow",
    image: skuImage("2923712"),
    link: "https://www.sephora.com/product/dazzleshadow-liquid-eyeshadow-P519628?skuId=2923712"
  }),
  productData({
    code: "EYESHADOW_022",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Laura Mercier",
    name: "Mini Caviar Stick Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2796696"),
    link: "https://www.sephora.com/product/laura-mercier-mini-caviar-shimmer-eyeshadow-stick-reform-P512524?skuId=2796696"
  }),
  productData({
    code: "EYESHADOW_023",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes® Eyeshadow Palette: The Original",
    type: "Eyeshadow",
    image: skuImage("2389518"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-mattes-tm-eyeshadow-palette-P98364786?skuId=2389518"
  }),
  productData({
    code: "EYESHADOW_024",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Colorfix - Multi-Use Eye, Cheek & Lip Waterproof Liquid Pigment",
    type: "Eyeshadow",
    image: skuImage("2798239"),
    link: "https://www.sephora.com/product/danessa-myricks-colorfix-24-hour-cream-color-P468353?skuId=2798239"
  }),
  productData({
    code: "EYESHADOW_025",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Rare Beauty by Selena Gomez",
    name: "All of the Above Weightless Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2689198"),
    link: "https://www.sephora.com/product/all-the-above-weightless-eyeshadow-stick-P506704?skuId=2689198"
  }),
  productData({
    code: "EYESHADOW_026",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Colorfix Stix - Multi-Use Pearl Pigment Stick for Eye, Cheek & Lip",
    type: "Eyeshadow",
    image: skuImage("2978658"),
    link: "https://www.sephora.com/product/colorfix-stix-P516865?skuId=2978658"
  }),
  productData({
    code: "EYESHADOW_027",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Kaja",
    name: "Eye Bento Bouncy Eyeshadow Trio",
    type: "Eyeshadow",
    image: skuImage("2785392"),
    link: "https://www.sephora.com/product/beauty-bento-bounce-shimmer-eyeshadow-trio-P436148?skuId=2785392"
  }),
  productData({
    code: "EYESHADOW_028",
    category: "Makeup > Eye > Eyeshadow",
    brand: "DIOR",
    name: "BACKSTAGE Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2666022"),
    link: "https://www.sephora.com/product/backstage-eyeshadow-palette-P432504?skuId=2666022"
  }),
  productData({
    code: "EYESHADOW_029",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Haze Mini Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2934503"),
    link: "https://www.sephora.com/product/haze-mini-eyeshadow-palette-P520091?skuId=2934503"
  }),
  productData({
    code: "EYESHADOW_030",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "24/7 Moondust Glittery Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2845261"),
    link: "https://www.sephora.com/product/24-7-moondust-eyeshadow-P378821?skuId=2845261"
  }),
  productData({
    code: "EYESHADOW_031",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2743367"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-eyeshadow-palette-P509527?skuId=2743367"
  }),
  productData({
    code: "EYESHADOW_032",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Hourglass",
    name: "Curator™ Eyeshadow Palettes",
    type: "Eyeshadow",
    image: skuImage("2887594"),
    link: "https://www.sephora.com/product/hourglass-curator-trade-eyeshadow-palettes-P473858?skuId=2887594"
  }),
  productData({
    code: "EYESHADOW_033",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Kulfi",
    name: "Zari Eyes Long-Lasting Crease-Proof Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2902112"),
    link: "https://www.sephora.com/product/kulfi-zari-eyes-eyeshadow-P505440?skuId=2902112"
  }),
  productData({
    code: "EYESHADOW_034",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAC Cosmetics",
    name: "Dazzleshadow 12HR Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2958429"),
    link: "https://www.sephora.com/product/mac-dazzleshadow-stick-P521488?skuId=2958429"
  }),
  productData({
    code: "EYESHADOW_035",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Charlotte Tilbury",
    name: "Eyes To Mesmerise Cream Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2360634"),
    link: "https://www.sephora.com/product/eyes-to-mesmerize-cream-eyeshadow-P434101?skuId=2360634"
  }),
  productData({
    code: "EYESHADOW_036",
    category: "Makeup > Eye > Eyeshadow",
    brand: "HUNG VANNGO BEAUTY",
    name: "Color Story Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2903235"),
    link: "https://www.sephora.com/product/color-story-eyeshadow-palette-P518116?skuId=2903235"
  }),
  productData({
    code: "EYESHADOW_037",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NARS",
    name: "Total Seduction Smudge-Proof Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2772333"),
    link: "https://www.sephora.com/product/nars-total-seduction-eyeshadow-stick-P511954?skuId=2772333"
  }),
  productData({
    code: "EYESHADOW_038",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Too Faced",
    name: "Disco Crush High Shine Glitter Eye + Face Sparkle",
    type: "Eyeshadow",
    image: skuImage("2794519"),
    link: "https://www.sephora.com/product/too-faced-disco-crush-high-shine-glitter-eye-face-sparkle-P512319?skuId=2794519"
  }),
  productData({
    code: "EYESHADOW_039",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Twin Flames Liquid Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2797025"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-twin-flames-liquid-eyeshadow-P479311?skuId=2797025"
  }),
  productData({
    code: "EYESHADOW_040",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Charlotte Tilbury",
    name: "Luxury Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2218790"),
    link: "https://www.sephora.com/product/luxury-eyeshadow-palette-P433523?skuId=2218790"
  }),
  productData({
    code: "EYESHADOW_041",
    category: "Makeup > Eye > Eyeshadow",
    brand: "VIOLETTE_FR",
    name: "YEUX PAINT Liquid Eyeshadow & Eyeliner",
    type: "Eyeshadow",
    image: skuImage("2864429"),
    link: "https://www.sephora.com/product/yeux-paint-liquid-eyeshadow-liner-P515452?skuId=2864429"
  }),
  productData({
    code: "EYESHADOW_042",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Mini Spice Eye Palette",
    type: "Eyeshadow",
    image: skuImage("2799724"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-spice-eye-palette-P512500?skuId=2799724"
  }),
  productData({
    code: "EYESHADOW_043",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Freck Beauty",
    name: "Shadow Slide Long Wear H20 Shadow Sticks",
    type: "Eyeshadow",
    image: skuImage("2699189"),
    link: "https://www.sephora.com/product/shadow-slide-long-wear-h20-shadow-sticks-P507471?skuId=2699189"
  }),
  productData({
    code: "EYESHADOW_044",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Kosas",
    name: "Shiny Objects Wet Glisten Highlighter Powder for Face and Eyes",
    type: "Eyeshadow",
    image: skuImage("2935880"),
    link: "https://www.sephora.com/product/shiny-objects-highlighter-P520040?skuId=2935880"
  }),
  productData({
    code: "EYESHADOW_045",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NARS",
    name: "The Multiple Soft Blur Blush Stick for Cheeks, Eyes and Lips",
    type: "Eyeshadow",
    image: skuImage("2891901"),
    link: "https://www.sephora.com/product/nars-the-mulitple-P517845?skuId=2891901"
  }),
  productData({
    code: "EYESHADOW_046",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Soft Glam Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2036481"),
    link: "https://www.sephora.com/product/soft-glam-eyeshadow-palette-P58930227?skuId=2036481"
  }),
  productData({
    code: "EYESHADOW_047",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "Naked2 Basics Matte Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("1637719"),
    link: "https://www.sephora.com/product/naked2-basics-P388225?skuId=1637719"
  }),
  productData({
    code: "EYESHADOW_048",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Kaja",
    name: "Wink Dazzle Dual-Ended Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2760205"),
    link: "https://www.sephora.com/product/kaja-wink-dazzle-P509957?skuId=2760205"
  }),
  productData({
    code: "EYESHADOW_049",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Luxe Glam Compact Quad Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2933166"),
    link: "https://www.sephora.com/product/natasha-denona-luxe-glam-eyeshadow-palette-compact-P520966?skuId=2933166"
  }),
  productData({
    code: "EYESHADOW_050",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Bobbi Brown",
    name: "Mini Long-Wear Cream Waterproof Eyeshadow Stick Duo",
    type: "Eyeshadow",
    image: skuImage("2903425"),
    link: "https://www.sephora.com/product/mini-lwcss-duo-P520118?skuId=2903425"
  }),
  productData({
    code: "EYESHADOW_051",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Yves Saint Laurent",
    name: "Couture Mini Clutch Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2873453"),
    link: "https://www.sephora.com/product/clutch-eye-shadow-palette-P507353?skuId=2873453"
  }),
  productData({
    code: "EYESHADOW_052",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "24/7 Glaze-On Shimmer Liquid Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2855302"),
    link: "https://www.sephora.com/product/24-7-glaze-on-shimmer-liquid-eyeshadow-P516198?skuId=2855302"
  }),
  productData({
    code: "EYESHADOW_053",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKE UP FOR EVER",
    name: "Artist Waterproof Color Cream Eyeshadow & Eyeliner",
    type: "Eyeshadow",
    image: skuImage("2943181"),
    link: "https://www.sephora.com/product/artist-color-cream-P520604?skuId=2943181"
  }),
  productData({
    code: "EYESHADOW_054",
    category: "Makeup > Eye > Eyeshadow",
    brand: "HUDA BEAUTY",
    name: "Matte Obsessions Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2651859"),
    link: "https://www.sephora.com/product/huda-beauty-matte-obsessions-eyeshadow-palette-P504885?skuId=2651859"
  }),
  productData({
    code: "EYESHADOW_055",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Mini Starlette Palette",
    type: "Eyeshadow",
    image: skuImage("2697464"),
    link: "https://www.sephora.com/product/mini-starlette-palette-P507577?skuId=2697464"
  }),
  productData({
    code: "EYESHADOW_056",
    category: "Makeup > Eye > Eyeshadow",
    brand: "LAWLESS",
    name: "Mini The Little One Talc-Free Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2294544"),
    link: "https://www.sephora.com/product/the-little-one-talc-free-eyeshadow-palette-P450514?skuId=2294544"
  }),
  productData({
    code: "EYESHADOW_057",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Eye Sculpt Texture & Tone Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2890556"),
    link: "https://www.sephora.com/product/eye-sculpt-texture-tone-palette-P518421?skuId=2890556"
  }),
  productData({
    code: "EYESHADOW_058",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Infinite Chrome Flakes Multichrome Gel for Eyes & Face",
    type: "Eyeshadow",
    image: skuImage("2575538"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-infinite-chrome-flakes-multichrome-gel-for-eyes-face-P481968?skuId=2575538"
  }),
  productData({
    code: "EYESHADOW_059",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Hourglass",
    name: "Scattered Light Glitter Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2087682"),
    link: "https://www.sephora.com/product/scattered-light-glitter-eye-shadow-P433811?skuId=2087682"
  }),
  productData({
    code: "EYESHADOW_060",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NUDESTIX",
    name: "Magnetic Eye Pencil",
    type: "Eyeshadow",
    image: skuImage("1648633"),
    link: "https://www.sephora.com/product/magnetic-eye-color-P388953?skuId=1648633"
  }),
  productData({
    code: "EYESHADOW_061",
    category: "Makeup > Eye > Eyeshadow",
    brand: "stila",
    name: "Shimmer & Glow Liquid Eye Shadow",
    type: "Eyeshadow",
    image: skuImage("2027191"),
    link: "https://www.sephora.com/product/shimmer-glow-liquid-eye-shadow-P427385?skuId=2027191"
  }),
  productData({
    code: "EYESHADOW_062",
    category: "Makeup > Eye > Eyeshadow",
    brand: "ILIA",
    name: "The Necessary Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2274249"),
    link: "https://www.sephora.com/product/the-necessary-eyeshadow-palette-P448845?skuId=2274249"
  }),
  productData({
    code: "EYESHADOW_063",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Eyeshadow",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "EYESHADOW_064",
    category: "Makeup > Eye > Eyeshadow",
    brand: "tarte",
    name: "#trippinwithtarte Amazonian clay eyeshadow palette",
    type: "Eyeshadow",
    image: skuImage("2883593"),
    link: "https://www.sephora.com/product/trippinwithtarte-amazonian-clay-palette-P517871?skuId=2883593"
  }),
  productData({
    code: "EYESHADOW_065",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKE UP FOR EVER",
    name: "Aqua Resist Smoky Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2365633"),
    link: "https://www.sephora.com/product/make-up-for-ever-aqua-resist-smoky-eyeshadow-stick-P460731?skuId=2365633"
  }),
  productData({
    code: "EYESHADOW_066",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Mini Everyday Magic Neutral Freedom Palette",
    type: "Eyeshadow",
    image: skuImage("2942381"),
    link: "https://www.sephora.com/product/mini-everyday-magic-neutral-freedom-palette-P520269?skuId=2942381"
  }),
  productData({
    code: "EYESHADOW_067",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "Naked Shaped Cool-Toned Makeup Palette for Eyes & Face",
    type: "Eyeshadow",
    image: skuImage("2878320"),
    link: "https://www.sephora.com/product/naked-shaped-cool-toned-makeup-palette-for-eyes-face-P517847?skuId=2878320"
  }),
  productData({
    code: "EYESHADOW_068",
    category: "Makeup > Eye > Eyeshadow",
    brand: "HUDA BEAUTY",
    name: "Icy Nude Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2814390"),
    link: "https://www.sephora.com/product/huda-beauty-icy-nude-eyeshadow-palette-P513158?skuId=2814390"
  }),
  productData({
    code: "EYESHADOW_069",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Too Faced",
    name: "Quickie Queen Eyeshadow Stick",
    type: "Eyeshadow",
    image: skuImage("2866655"),
    link: "https://www.sephora.com/product/quickie-queen-eyeshadow-stick-P516097?skuId=2866655"
  }),
  productData({
    code: "EYESHADOW_070",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "Naked3 Mini Soft Pink Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2482339"),
    link: "https://www.sephora.com/product/urban-decay-naked-3-mini-eyeshadow-palette-P474380?skuId=2482339"
  }),
  productData({
    code: "EYESHADOW_071",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Fara Homidi",
    name: "Essential Eyeshadow Refillable Compact",
    type: "Eyeshadow",
    image: skuImage("2939908"),
    link: "https://www.sephora.com/product/fara-homidi-essential-eyeshadow-refillable-compact-P520965?skuId=2939908"
  }),
  productData({
    code: "EYESHADOW_072",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Glam Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2378313"),
    link: "https://www.sephora.com/product/natasha-denona-glam-eyeshadow-palette-P461188?skuId=2378313"
  }),
  productData({
    code: "EYESHADOW_073",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Retro Glam Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2618981"),
    link: "https://www.sephora.com/product/retro-glam-eyeshadow-palette-P501473?skuId=2618981"
  }),
  productData({
    code: "EYESHADOW_074",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "I Need a Nude Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2697456"),
    link: "https://www.sephora.com/product/i-need-a-nude-eyeshadow-palette-P507807?skuId=2697456"
  }),
  productData({
    code: "EYESHADOW_075",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Too Faced",
    name: "Born This Way The Natural Nudes Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2307536"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-natural-nudes-eyeshadow-palette-P455201?skuId=2307536"
  }),
  productData({
    code: "EYESHADOW_076",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PATRICK TA",
    name: "Major Dimension III Matte Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2703254"),
    link: "https://www.sephora.com/product/major-dimensions-eyeshadow-palette-iii-P506700?skuId=2703254"
  }),
  productData({
    code: "EYESHADOW_077",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Urban Decay",
    name: "Naked3 Soft Pink Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("1573336"),
    link: "https://www.sephora.com/product/naked3-P384099?skuId=1573336"
  }),
  productData({
    code: "EYESHADOW_078",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Charlotte Tilbury",
    name: "Luxury Eyeshadow Palette - Pillow Talk Collection",
    type: "Eyeshadow",
    image: skuImage("2182566"),
    link: "https://www.sephora.com/product/charlotte-tilbury-luxury-eyeshadow-palette-pillow-talk-collection-P455321?skuId=2182566"
  }),
  productData({
    code: "EYESHADOW_079",
    category: "Makeup > Eye > Eyeshadow",
    brand: "stila",
    name: "Glitter & Glow Liquid Eye Shadow",
    type: "Eyeshadow",
    image: skuImage("1891357"),
    link: "https://www.sephora.com/product/magnificent-metals-glitter-glow-liquid-eye-shadow-P63087293?skuId=1891357"
  }),
  productData({
    code: "EYESHADOW_080",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Mini Rose Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2792356"),
    link: "https://www.sephora.com/product/natasha-denona-mini-rose-eyeshadow-palette-P512300?skuId=2792356"
  }),
  productData({
    code: "EYESHADOW_081",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Bloom Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2845659"),
    link: "https://www.sephora.com/product/bloom-eyeshadow-palette-P514926?skuId=2845659"
  }),
  productData({
    code: "EYESHADOW_082",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Master Crystal Reflector™",
    type: "Eyeshadow",
    image: skuImage("2389609"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-crystal-reflector-tm-P33257988?skuId=2389609"
  }),
  productData({
    code: "EYESHADOW_083",
    category: "Makeup > Eye > Eyeshadow",
    brand: "MAKEUP BY MARIO",
    name: "Master Metallics® Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2389559"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-metallics-tm-eye-palette-P02318798?skuId=2389559"
  }),
  productData({
    code: "EYESHADOW_084",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Essential Eyeshadow Duo",
    type: "Eyeshadow",
    image: skuImage("2911113"),
    link: "https://www.sephora.com/product/essential-eyeshadow-duo-P518408?skuId=2911113"
  }),
  productData({
    code: "EYESHADOW_085",
    category: "Makeup > Eye > Eyeshadow",
    brand: "HUDA BEAUTY",
    name: "Empowered Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2617744"),
    link: "https://www.sephora.com/product/empowered-eyeshadow-palette-P501327?skuId=2617744"
  }),
  productData({
    code: "EYESHADOW_086",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "FetishEYES™ Longwear Liquid Eyeshadow",
    type: "Eyeshadow",
    image: skuImage("2699403"),
    link: "https://www.sephora.com/product/fetisheyes-longwear-liquid-eyeshadow-P507525?skuId=2699403"
  }),
  productData({
    code: "EYESHADOW_087",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NUDESTIX",
    name: "Nude Metallics For Eyes",
    type: "Eyeshadow",
    image: skuImage("2041788"),
    link: "https://www.sephora.com/product/nude-metallics-for-eyes-P428673?skuId=2041788"
  }),
  productData({
    code: "EYESHADOW_088",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "I Need a Warm Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2792364"),
    link: "https://www.sephora.com/product/natasha-denona-i-need-a-warm-eyeshadow-palette-P512296?skuId=2792364"
  }),
  productData({
    code: "EYESHADOW_089",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Too Faced",
    name: "Mini Born This Way Complexion-Inspired Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2771665"),
    link: "https://www.sephora.com/product/too-faced-mini-born-this-way-complexion-inspired-eyeshadow-palette-P510445?skuId=2771665"
  }),
  productData({
    code: "EYESHADOW_090",
    category: "Makeup > Eye > Eyeshadow",
    brand: "tarte",
    name: "tartelette™ Amazonian clay matte eyeshadow palette",
    type: "Eyeshadow",
    image: skuImage("2883585"),
    link: "https://www.sephora.com/product/tartelette-amazonian-clay-matte-eyeshadow-palette-P391759?skuId=2883585"
  }),
  productData({
    code: "EYESHADOW_091",
    category: "Makeup > Eye > Eyeshadow",
    brand: "tarte",
    name: "tartelette™ toasted Amazonian clay eyeshadow palette",
    type: "Eyeshadow",
    image: skuImage("2883619"),
    link: "https://www.sephora.com/product/tartelette-toasted-eyeshadow-palette-P423935?skuId=2883619"
  }),
  productData({
    code: "EYESHADOW_092",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Venus in Fleurs Luxe Eyeshadow Palette: Voyeuristic Vixen",
    type: "Eyeshadow",
    image: skuImage("2464931"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-venus-in-fleurs-luxe-eyeshadow-palette-voyeuristic-vixen-P472486?skuId=2464931"
  }),
  productData({
    code: "EYESHADOW_093",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Westman Atelier",
    name: "Eye Pods Cream Eye Shadow",
    type: "Eyeshadow",
    image: skuImage("2684215"),
    link: "https://www.sephora.com/product/westman-atelier-eye-pods-eyeshadows-P468436?skuId=2684215"
  }),
  productData({
    code: "EYESHADOW_094",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Nouveau Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2567923"),
    link: "https://www.sephora.com/product/nouveau-palette-P500629?skuId=2567923"
  }),
  productData({
    code: "EYESHADOW_095",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "MOTHERSHIP XII Eyeshadow Palette: Petalmorphosis",
    type: "Eyeshadow",
    image: skuImage("2840114"),
    link: "https://www.sephora.com/product/mothership-xii-petalmorphosis-P516229?skuId=2840114"
  }),
  productData({
    code: "EYESHADOW_096",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Highlighting Duo Eyebrow Pencil",
    type: "Eyeshadow",
    image: skuImage("1118819"),
    link: "https://www.sephora.com/product/brow-duality-P224610?skuId=1118819"
  }),
  productData({
    code: "EYESHADOW_097",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Charlotte Tilbury",
    name: "Super Nudes Easy Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2382885"),
    link: "https://www.sephora.com/product/charlotte-tilbury-iconic-nude-easy-eye-palette-P461433?skuId=2382885"
  }),
  productData({
    code: "EYESHADOW_098",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Black Longwear Waterproof Crème Color",
    type: "Eyeshadow",
    image: skuImage("1703768"),
    link: "https://www.sephora.com/product/waterproof-creme-color-P395205?skuId=1703768"
  }),
  productData({
    code: "EYESHADOW_099",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Iconic London",
    name: "Glaze Dual Ended Eyeshadow Crayon",
    type: "Eyeshadow",
    image: skuImage("2630259"),
    link: "https://www.sephora.com/product/iconic-london-glaze-dual-ended-eyeshadow-crayon-P478279?skuId=2630259"
  }),
  productData({
    code: "EYESHADOW_100",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Love Glow Cheek Palette",
    type: "Eyeshadow",
    image: skuImage("2304814"),
    link: "https://www.sephora.com/product/natasha-denona-love-glow-cheek-palette-P455197?skuId=2304814"
  }),
  productData({
    code: "EYESHADOW_101",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Laura Mercier",
    name: "Mini Artistry Icons Loose Powder and Eyeshadow Set",
    type: "Eyeshadow",
    image: skuImage("2872414"),
    link: "https://www.sephora.com/product/mini-artistry-icons-loose-powder-and-eyeshadow-set-P515899?skuId=2872414"
  }),
  productData({
    code: "EYESHADOW_102",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Eyeshadow",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "EYESHADOW_103",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Mothership X Eyeshadow Palette:  Moonlit Seduction",
    type: "Eyeshadow",
    image: skuImage("2597680"),
    link: "https://www.sephora.com/product/mothership-x-eyeshadow-palette-moonlit-seduction-P500887?skuId=2597680"
  }),
  productData({
    code: "EYESHADOW_104",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "IntensifEYES Artistry Wand",
    type: "Eyeshadow",
    image: skuImage("2488807"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-intensifeyes-artistry-wand-P475597?skuId=2488807"
  }),
  productData({
    code: "EYESHADOW_105",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Celestial Divinity Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2383602"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-celestial-divinity-luxe-quad-interstellar-icons-P463924?skuId=2383602"
  }),
  productData({
    code: "EYESHADOW_106",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Love Face Eyeshadow & Cheek Essential Palette",
    type: "Eyeshadow",
    image: skuImage("2647170"),
    link: "https://www.sephora.com/product/natasha-denona-love-face-palette-P505250?skuId=2647170"
  }),
  productData({
    code: "EYESHADOW_107",
    category: "Makeup > Eye > Eyeshadow",
    brand: "NATASHA DENONA",
    name: "Yucca Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2671055"),
    link: "https://www.sephora.com/product/yucca-eyeshadow-palette-P506499?skuId=2671055"
  }),
  productData({
    code: "EYESHADOW_108",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Fall Romance Eyeshadow Palette",
    type: "Eyeshadow",
    image: skuImage("2716645"),
    link: "https://www.sephora.com/product/fall-romance-eyeshadow-palette-P508171?skuId=2716645"
  }),
  productData({
    code: "EYESHADOW_109",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Mothership VII Eyeshadow Palette: Divine Rose",
    type: "Eyeshadow",
    image: skuImage("2877728"),
    link: "https://www.sephora.com/product/mothership-vii-divine-rose-P516243?skuId=2877728"
  }),
  productData({
    code: "EYESHADOW_110",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Mothership XI Eyeshadow Palette: Sunlit Seduction",
    type: "Eyeshadow",
    image: skuImage("2699411"),
    link: "https://www.sephora.com/product/mothership-xi-eye-shadow-palette-sunlit-seduction-P507506?skuId=2699411"
  }),
  productData({
    code: "EYESHADOW_111",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Mothership V Eyeshadow Palette: Bronze Seduction",
    type: "Eyeshadow",
    image: skuImage("2877744"),
    link: "https://www.sephora.com/product/mothership-v-bronze-seduction-P516219?skuId=2877744"
  }),
  productData({
    code: "EYESHADOW_112",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Divine Bronze Luxe Eyeshadow Palette: Venusian Sunrise",
    type: "Eyeshadow",
    image: skuImage("2670743"),
    link: "https://www.sephora.com/product/divine-bronze-luxe-eyeshadow-palette-venusian-sunrise-P505733?skuId=2670743"
  }),
  productData({
    code: "EYESHADOW_113",
    category: "Makeup > Eye > Eyeshadow",
    brand: "PAT McGRATH LABS",
    name: "Mothership IX Eyeshadow Palette: Huetopian Dream",
    type: "Eyeshadow",
    image: skuImage("2877736"),
    link: "https://www.sephora.com/product/mothership-ix-huetopian-dream-P516235?skuId=2877736"
  }),
  productData({
    code: "EYESHADOW_114",
    category: "Makeup > Eye > Eyeshadow",
    brand: "Anastasia Beverly Hills",
    name: "Primrose All In One Face & Eye Shadow Palette",
    type: "Eyeshadow",
    image: skuImage("2479533"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-primrose-all-in-one-face-eye-shadow-palette-P477809?skuId=2479533"
  }),

  // ==================================================
  // Makeup > Eye > Eyeshadow Palettes
  // Products: 81
  // ==================================================
  productData({
    code: "EYESHADOW_PALETTE_001",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "MAKEUP BY MARIO",
    name: "Ethereal Eyes™ Eyeshadow Palette: The Original",
    type: "Eyeshadow Palettes",
    image: skuImage("2599660"),
    link: "https://www.sephora.com/product/ethereal-eyes-eyeshadow-palette-P501527?skuId=2599660"
  }),
  productData({
    code: "EYESHADOW_PALETTE_002",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes® Eyeshadow Palette: The Original",
    type: "Eyeshadow Palettes",
    image: skuImage("2389518"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-mattes-tm-eyeshadow-palette-P98364786?skuId=2389518"
  }),
  productData({
    code: "EYESHADOW_PALETTE_003",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Dolce&Gabbana",
    name: "Ever Icon Eye Palette Longwear Multi-Finish Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2986289"),
    link: "https://www.sephora.com/product/ever-icon-eye-palette-longwear-multi-finish-eyeshadow-palette-P522608?skuId=2986289"
  }),
  productData({
    code: "EYESHADOW_PALETTE_004",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PATRICK TA",
    name: "Major Dimension Essential Artistry Edit Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2906139"),
    link: "https://www.sephora.com/product/major-dimension-essential-artistry-edit-eyeshadow-palette-P518504?skuId=2906139"
  }),
  productData({
    code: "EYESHADOW_PALETTE_005",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes® Eyeshadow Palette: The Neutrals",
    type: "Eyeshadow Palettes",
    image: skuImage("2737187"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-mattes-r-eyeshadow-palette-neutrals-P510193?skuId=2737187"
  }),
  productData({
    code: "EYESHADOW_PALETTE_006",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Prada",
    name: "Dimensions Multi-Effect Refillable Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2835940"),
    link: "https://www.sephora.com/product/prada-beauty-dimensions-multi-effect-refillable-eyeshadow-palette-P509684?skuId=2835940"
  }),
  productData({
    code: "EYESHADOW_PALETTE_007",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "SEPHORA COLLECTION",
    name: "Mega Mix Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2819944"),
    link: "https://www.sephora.com/product/mega-mix-eyeshadow-palette-P515018?skuId=2819944"
  }),
  productData({
    code: "EYESHADOW_PALETTE_008",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Mini Embers Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2905339"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-embers-mini-eyeshadow-palette-P518663?skuId=2905339"
  }),
  productData({
    code: "EYESHADOW_PALETTE_009",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "DIOR",
    name: "BACKSTAGE Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2666022"),
    link: "https://www.sephora.com/product/backstage-eyeshadow-palette-P432504?skuId=2666022"
  }),
  productData({
    code: "EYESHADOW_PALETTE_010",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "SEPHORA COLLECTION",
    name: "Mini Mix Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2819977"),
    link: "https://www.sephora.com/product/mini-mix-eyeshadow-palette-P515045?skuId=2819977"
  }),
  productData({
    code: "EYESHADOW_PALETTE_011",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Mini Eye Sculpt Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2929982"),
    link: "https://www.sephora.com/product/mini-eye-sculpt-eyeshadow-palette-P514928?skuId=2929982"
  }),
  productData({
    code: "EYESHADOW_PALETTE_012",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Soft Glam Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2036481"),
    link: "https://www.sephora.com/product/soft-glam-eyeshadow-palette-P58930227?skuId=2036481"
  }),
  productData({
    code: "EYESHADOW_PALETTE_013",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "tartelette™ in bloom Amazonian clay eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2883569"),
    link: "https://www.sephora.com/product/tartelette-in-bloom-clay-eyeshadow-palette-P403812?skuId=2883569"
  }),
  productData({
    code: "EYESHADOW_PALETTE_014",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Haze Mini Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2934503"),
    link: "https://www.sephora.com/product/haze-mini-eyeshadow-palette-P520091?skuId=2934503"
  }),
  productData({
    code: "EYESHADOW_PALETTE_015",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUDA BEAUTY",
    name: "Icy Nude Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2814390"),
    link: "https://www.sephora.com/product/huda-beauty-icy-nude-eyeshadow-palette-P513158?skuId=2814390"
  }),
  productData({
    code: "EYESHADOW_PALETTE_016",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Urban Decay",
    name: "Naked2 Basics Matte Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("1637719"),
    link: "https://www.sephora.com/product/naked2-basics-P388225?skuId=1637719"
  }),
  productData({
    code: "EYESHADOW_PALETTE_017",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2743367"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-eyeshadow-palette-P509527?skuId=2743367"
  }),
  productData({
    code: "EYESHADOW_PALETTE_018",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PATRICK TA",
    name: "Major Dimension Eye Illusion Eyeshadow Duo",
    type: "Eyeshadow Palettes",
    image: skuImage("2906188"),
    link: "https://www.sephora.com/product/patrick-ta-major-dimension-eye-illusion-eyeshadow-duos-P512579?skuId=2906188"
  }),
  productData({
    code: "EYESHADOW_PALETTE_019",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Yves Saint Laurent",
    name: "Couture Mini Clutch Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2873453"),
    link: "https://www.sephora.com/product/clutch-eye-shadow-palette-P507353?skuId=2873453"
  }),
  productData({
    code: "EYESHADOW_PALETTE_020",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUNG VANNGO BEAUTY",
    name: "Color Story Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2903235"),
    link: "https://www.sephora.com/product/color-story-eyeshadow-palette-P518116?skuId=2903235"
  }),
  productData({
    code: "EYESHADOW_PALETTE_021",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Kaja",
    name: "Eye Bento Bouncy Eyeshadow Trio",
    type: "Eyeshadow Palettes",
    image: skuImage("2785392"),
    link: "https://www.sephora.com/product/beauty-bento-bounce-shimmer-eyeshadow-trio-P436148?skuId=2785392"
  }),
  productData({
    code: "EYESHADOW_PALETTE_022",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Hourglass",
    name: "Curator™ Eyeshadow Palettes",
    type: "Eyeshadow Palettes",
    image: skuImage("2887594"),
    link: "https://www.sephora.com/product/hourglass-curator-trade-eyeshadow-palettes-P473858?skuId=2887594"
  }),
  productData({
    code: "EYESHADOW_PALETTE_023",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Eye Sculpt Texture & Tone Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2890556"),
    link: "https://www.sephora.com/product/eye-sculpt-texture-tone-palette-P518421?skuId=2890556"
  }),
  productData({
    code: "EYESHADOW_PALETTE_024",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "LAWLESS",
    name: "Mini The Little One Talc-Free Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2294544"),
    link: "https://www.sephora.com/product/the-little-one-talc-free-eyeshadow-palette-P450514?skuId=2294544"
  }),
  productData({
    code: "EYESHADOW_PALETTE_025",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Laura Geller",
    name: "The Delectables Baked Eyeshadow Palette – Timeless Tones",
    type: "Eyeshadow Palettes",
    image: skuImage("2922813"),
    link: "https://www.sephora.com/product/the-delectables-14-multi-finish-baked-eyeshadows-timeless-tones-P519558?skuId=2922813"
  }),
  productData({
    code: "EYESHADOW_PALETTE_026",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Charlotte Tilbury",
    name: "Luxury Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2218790"),
    link: "https://www.sephora.com/product/luxury-eyeshadow-palette-P433523?skuId=2218790"
  }),
  productData({
    code: "EYESHADOW_PALETTE_027",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUDA BEAUTY",
    name: "Matte Obsessions Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2651859"),
    link: "https://www.sephora.com/product/huda-beauty-matte-obsessions-eyeshadow-palette-P504885?skuId=2651859"
  }),
  productData({
    code: "EYESHADOW_PALETTE_028",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Too Faced",
    name: "Born This Way The Natural Nudes Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2307536"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-natural-nudes-eyeshadow-palette-P455201?skuId=2307536"
  }),
  productData({
    code: "EYESHADOW_PALETTE_029",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "DIOR",
    name: "Diorshow 5 Couleurs Couture Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2948354"),
    link: "https://www.sephora.com/product/dior-5-couleurs-couture-eyeshadow-palette-P463032?skuId=2948354"
  }),
  productData({
    code: "EYESHADOW_PALETTE_030",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Luxe Glam Compact Quad Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2933166"),
    link: "https://www.sephora.com/product/natasha-denona-luxe-glam-eyeshadow-palette-compact-P520966?skuId=2933166"
  }),
  productData({
    code: "EYESHADOW_PALETTE_031",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PATRICK TA",
    name: "Major Dimension III Matte Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2703254"),
    link: "https://www.sephora.com/product/major-dimensions-eyeshadow-palette-iii-P506700?skuId=2703254"
  }),
  productData({
    code: "EYESHADOW_PALETTE_032",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Urban Decay",
    name: "Naked Shaped Cool-Toned Makeup Palette for Eyes & Face",
    type: "Eyeshadow Palettes",
    image: skuImage("2878320"),
    link: "https://www.sephora.com/product/naked-shaped-cool-toned-makeup-palette-for-eyes-face-P517847?skuId=2878320"
  }),
  productData({
    code: "EYESHADOW_PALETTE_033",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Danessa Myricks Beauty",
    name: "Mini Everyday Magic Neutral Freedom Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2942381"),
    link: "https://www.sephora.com/product/mini-everyday-magic-neutral-freedom-palette-P520269?skuId=2942381"
  }),
  productData({
    code: "EYESHADOW_PALETTE_034",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Bloom Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2845659"),
    link: "https://www.sephora.com/product/bloom-eyeshadow-palette-P514926?skuId=2845659"
  }),
  productData({
    code: "EYESHADOW_PALETTE_035",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "mini tartelette™ in bloom Amazonian clay neutral eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2834356"),
    link: "https://www.sephora.com/product/tartelette-in-bloom-mini-palette-P515083?skuId=2834356"
  }),
  productData({
    code: "EYESHADOW_PALETTE_036",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUDA BEAUTY",
    name: "Pretty Grunge Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2691350"),
    link: "https://www.sephora.com/product/pretty-grunge-eyeshadow-palette-P507079?skuId=2691350"
  }),
  productData({
    code: "EYESHADOW_PALETTE_037",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "I Need a Nude Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2697456"),
    link: "https://www.sephora.com/product/i-need-a-nude-eyeshadow-palette-P507807?skuId=2697456"
  }),
  productData({
    code: "EYESHADOW_PALETTE_038",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUDA BEAUTY",
    name: "Empowered Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2617744"),
    link: "https://www.sephora.com/product/empowered-eyeshadow-palette-P501327?skuId=2617744"
  }),
  productData({
    code: "EYESHADOW_PALETTE_039",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "MAKE UP FOR EVER",
    name: "Mini Artist To Go Eyeshadow Palettes",
    type: "Eyeshadow Palettes",
    image: skuImage("2797363"),
    link: "https://www.sephora.com/product/make-up-for-ever-mini-artist-to-go-eyeshadow-palettes-P512253?skuId=2797363"
  }),
  productData({
    code: "EYESHADOW_PALETTE_040",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Urban Decay",
    name: "Naked3 Soft Pink Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("1573336"),
    link: "https://www.sephora.com/product/naked3-P384099?skuId=1573336"
  }),
  productData({
    code: "EYESHADOW_PALETTE_041",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "I Need a Warm Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2792364"),
    link: "https://www.sephora.com/product/natasha-denona-i-need-a-warm-eyeshadow-palette-P512296?skuId=2792364"
  }),
  productData({
    code: "EYESHADOW_PALETTE_042",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "#trippinwithtarte Amazonian clay eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2883593"),
    link: "https://www.sephora.com/product/trippinwithtarte-amazonian-clay-palette-P517871?skuId=2883593"
  }),
  productData({
    code: "EYESHADOW_PALETTE_043",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Mini Starlette Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2697464"),
    link: "https://www.sephora.com/product/mini-starlette-palette-P507577?skuId=2697464"
  }),
  productData({
    code: "EYESHADOW_PALETTE_044",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "tartelette™ Amazonian clay matte eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2883585"),
    link: "https://www.sephora.com/product/tartelette-amazonian-clay-matte-eyeshadow-palette-P391759?skuId=2883585"
  }),
  productData({
    code: "EYESHADOW_PALETTE_045",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Mini Xenon Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2486611"),
    link: "https://www.sephora.com/product/natasha-denona-mini-xenon-eyeshadow-palette-P475140?skuId=2486611"
  }),
  productData({
    code: "EYESHADOW_PALETTE_046",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Urban Decay",
    name: "Naked3 Mini Soft Pink Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2482339"),
    link: "https://www.sephora.com/product/urban-decay-naked-3-mini-eyeshadow-palette-P474380?skuId=2482339"
  }),
  productData({
    code: "EYESHADOW_PALETTE_047",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "TOM FORD",
    name: "Runway Eye Color Quad Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2948180"),
    link: "https://www.sephora.com/product/runway-eye-color-quad-eyeshadow-palette-P520787?skuId=2948180"
  }),
  productData({
    code: "EYESHADOW_PALETTE_048",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Glam Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2378313"),
    link: "https://www.sephora.com/product/natasha-denona-glam-eyeshadow-palette-P461188?skuId=2378313"
  }),
  productData({
    code: "EYESHADOW_PALETTE_049",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Retro Glam Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2618981"),
    link: "https://www.sephora.com/product/retro-glam-eyeshadow-palette-P501473?skuId=2618981"
  }),
  productData({
    code: "EYESHADOW_PALETTE_050",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Danessa Myricks Beauty",
    name: "Mini Pastel Dream Freedom Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2870483"),
    link: "https://www.sephora.com/product/mini-pastel-dream-freedom-palette-P516374?skuId=2870483"
  }),
  productData({
    code: "EYESHADOW_PALETTE_051",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "mini tartelette toasted™ Amazonian clay warm neutral eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2834364"),
    link: "https://www.sephora.com/product/tarte-tartelette-toasted-mini-palette-P515084?skuId=2834364"
  }),
  productData({
    code: "EYESHADOW_PALETTE_052",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "ILIA",
    name: "The Necessary Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2274249"),
    link: "https://www.sephora.com/product/the-necessary-eyeshadow-palette-P448845?skuId=2274249"
  }),
  productData({
    code: "EYESHADOW_PALETTE_053",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Too Faced",
    name: "Mini Born This Way Complexion-Inspired Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2771665"),
    link: "https://www.sephora.com/product/too-faced-mini-born-this-way-complexion-inspired-eyeshadow-palette-P510445?skuId=2771665"
  }),
  productData({
    code: "EYESHADOW_PALETTE_054",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Charlotte Tilbury",
    name: "Luxury Eyeshadow Palette - Pillow Talk Collection",
    type: "Eyeshadow Palettes",
    image: skuImage("2182566"),
    link: "https://www.sephora.com/product/charlotte-tilbury-luxury-eyeshadow-palette-pillow-talk-collection-P455321?skuId=2182566"
  }),
  productData({
    code: "EYESHADOW_PALETTE_055",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "MAKEUP BY MARIO",
    name: "Master Metallics® Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2389559"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-metallics-tm-eye-palette-P02318798?skuId=2389559"
  }),
  productData({
    code: "EYESHADOW_PALETTE_056",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Mini Rose Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2792356"),
    link: "https://www.sephora.com/product/natasha-denona-mini-rose-eyeshadow-palette-P512300?skuId=2792356"
  }),
  productData({
    code: "EYESHADOW_PALETTE_057",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Mini Soft Glam II Eye Shadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2385516"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-soft-glam-palette-P463420?skuId=2385516"
  }),
  productData({
    code: "EYESHADOW_PALETTE_058",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "HUDA BEAUTY",
    name: "Creamy Obsessions Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2739423"),
    link: "https://www.sephora.com/product/huda-beauty-creamy-obsessions-eye-palette-P509445?skuId=2739423"
  }),
  productData({
    code: "EYESHADOW_PALETTE_059",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "tarte",
    name: "tartelette™ toasted Amazonian clay eyeshadow palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2883619"),
    link: "https://www.sephora.com/product/tartelette-toasted-eyeshadow-palette-P423935?skuId=2883619"
  }),
  productData({
    code: "EYESHADOW_PALETTE_060",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Hourglass",
    name: "Ambient® Lighting Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2519767"),
    link: "https://www.sephora.com/product/ambient-lighting-palette-P382309?skuId=2519767"
  }),
  productData({
    code: "EYESHADOW_PALETTE_061",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Nouveau Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2567923"),
    link: "https://www.sephora.com/product/nouveau-palette-P500629?skuId=2567923"
  }),
  productData({
    code: "EYESHADOW_PALETTE_062",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Fara Homidi",
    name: "Essential Eyeshadow Refillable Compact",
    type: "Eyeshadow Palettes",
    image: skuImage("2939908"),
    link: "https://www.sephora.com/product/fara-homidi-essential-eyeshadow-refillable-compact-P520965?skuId=2939908"
  }),
  productData({
    code: "EYESHADOW_PALETTE_063",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Fall Romance Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2716645"),
    link: "https://www.sephora.com/product/fall-romance-eyeshadow-palette-P508171?skuId=2716645"
  }),
  productData({
    code: "EYESHADOW_PALETTE_064",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Yucca Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2671055"),
    link: "https://www.sephora.com/product/yucca-eyeshadow-palette-P506499?skuId=2671055"
  }),
  productData({
    code: "EYESHADOW_PALETTE_065",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Mothership X Eyeshadow Palette:  Moonlit Seduction",
    type: "Eyeshadow Palettes",
    image: skuImage("2597680"),
    link: "https://www.sephora.com/product/mothership-x-eyeshadow-palette-moonlit-seduction-P500887?skuId=2597680"
  }),
  productData({
    code: "EYESHADOW_PALETTE_066",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Eyeshadow Palettes",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "EYESHADOW_PALETTE_067",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Essential Eyeshadow Duo",
    type: "Eyeshadow Palettes",
    image: skuImage("2911113"),
    link: "https://www.sephora.com/product/essential-eyeshadow-duo-P518408?skuId=2911113"
  }),
  productData({
    code: "EYESHADOW_PALETTE_068",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Charlotte Tilbury",
    name: "Super Nudes Easy Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2382885"),
    link: "https://www.sephora.com/product/charlotte-tilbury-iconic-nude-easy-eye-palette-P461433?skuId=2382885"
  }),
  productData({
    code: "EYESHADOW_PALETTE_069",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "MOTHERSHIP XII Eyeshadow Palette: Petalmorphosis",
    type: "Eyeshadow Palettes",
    image: skuImage("2840114"),
    link: "https://www.sephora.com/product/mothership-xii-petalmorphosis-P516229?skuId=2840114"
  }),
  productData({
    code: "EYESHADOW_PALETTE_070",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Anastasia Beverly Hills",
    name: "Primrose All In One Face & Eye Shadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2479533"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-primrose-all-in-one-face-eye-shadow-palette-P477809?skuId=2479533"
  }),
  productData({
    code: "EYESHADOW_PALETTE_071",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Hy-per Natural Face Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2743383"),
    link: "https://www.sephora.com/product/natasha-denona-hyper-natural-face-palette-P510087?skuId=2743383"
  }),
  productData({
    code: "EYESHADOW_PALETTE_072",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "ISAMAYA",
    name: "Core Palette 2.0",
    type: "Eyeshadow Palettes",
    image: skuImage("2910370"),
    link: "https://www.sephora.com/product/isamaya-core-palette-2-P518714?skuId=2910370"
  }),
  productData({
    code: "EYESHADOW_PALETTE_073",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "TOM FORD",
    name: "Soleil Eye Color Quad Lumiere Eyeshadow",
    type: "Eyeshadow Palettes",
    image: skuImage("2966521"),
    link: "https://www.sephora.com/product/soleil-eye-color-quad-lumiere-eyeshadow-P522138?skuId=2966521"
  }),
  productData({
    code: "EYESHADOW_PALETTE_074",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Venus in Fleurs Luxe Eyeshadow Palette: Voyeuristic Vixen",
    type: "Eyeshadow Palettes",
    image: skuImage("2464931"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-venus-in-fleurs-luxe-eyeshadow-palette-voyeuristic-vixen-P472486?skuId=2464931"
  }),
  productData({
    code: "EYESHADOW_PALETTE_075",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "Westman Atelier",
    name: "Eye Pods Cream Eye Shadow",
    type: "Eyeshadow Palettes",
    image: skuImage("2684215"),
    link: "https://www.sephora.com/product/westman-atelier-eye-pods-eyeshadows-P468436?skuId=2684215"
  }),
  productData({
    code: "EYESHADOW_PALETTE_076",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Divine Bronze Luxe Eyeshadow Palette: Venusian Sunrise",
    type: "Eyeshadow Palettes",
    image: skuImage("2670743"),
    link: "https://www.sephora.com/product/divine-bronze-luxe-eyeshadow-palette-venusian-sunrise-P505733?skuId=2670743"
  }),
  productData({
    code: "EYESHADOW_PALETTE_077",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Mothership VII Eyeshadow Palette: Divine Rose",
    type: "Eyeshadow Palettes",
    image: skuImage("2877728"),
    link: "https://www.sephora.com/product/mothership-vii-divine-rose-P516243?skuId=2877728"
  }),
  productData({
    code: "EYESHADOW_PALETTE_078",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "ISAMAYA",
    name: "Core Palette 1.0",
    type: "Eyeshadow Palettes",
    image: skuImage("2910362"),
    link: "https://www.sephora.com/product/isamaya-core-palette-1-P518697?skuId=2910362"
  }),
  productData({
    code: "EYESHADOW_PALETTE_079",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Celestial Divinity Eyeshadow Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2383602"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-celestial-divinity-luxe-quad-interstellar-icons-P463924?skuId=2383602"
  }),
  productData({
    code: "EYESHADOW_PALETTE_080",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "NATASHA DENONA",
    name: "Love Face Eyeshadow & Cheek Essential Palette",
    type: "Eyeshadow Palettes",
    image: skuImage("2647170"),
    link: "https://www.sephora.com/product/natasha-denona-love-face-palette-P505250?skuId=2647170"
  }),
  productData({
    code: "EYESHADOW_PALETTE_081",
    category: "Makeup > Eye > Eyeshadow Palettes",
    brand: "PAT McGRATH LABS",
    name: "Mothership V Eyeshadow Palette: Bronze Seduction",
    type: "Eyeshadow Palettes",
    image: skuImage("2877744"),
    link: "https://www.sephora.com/product/mothership-v-bronze-seduction-P516219?skuId=2877744"
  }),

  // ==================================================
  // Makeup > Eye > Under Eye Concealer
  // Products: 55
  // ==================================================
  productData({
    code: "UNDER_EYE_CONCEALER_001",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Crease-Proof Long-Wear Blur Concealer with Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2941888"),
    link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870?skuId=2941888"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_002",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Hourglass",
    name: "Mini Vanish™ Airbrush Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2857241"),
    link: "https://www.sephora.com/product/hourglass-mini-vanish-trade-airbrush-concealer-P467953?skuId=2857241"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_003",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "NARS",
    name: "Radiant Creamy Concealer with Hydrating Medium Coverage",
    type: "Under Eye Concealer",
    image: skuImage("2172310"),
    link: "https://www.sephora.com/product/radiant-creamy-concealer-P377873?skuId=2172310"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_004",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "HUDA BEAUTY",
    name: "Mini #FauxFilter Brightening Under Eye Color Corrector",
    type: "Under Eye Concealer",
    image: skuImage("2934222"),
    link: "https://www.sephora.com/product/mini-ffcc-P517330?skuId=2934222"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_005",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "NARS",
    name: "Soft Matte Complete Full Coverage Longwear Concealer with Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2371425"),
    link: "https://www.sephora.com/product/soft-matte-complete-concealer-P416200?skuId=2371425"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_006",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "HUDA BEAUTY",
    name: "#FauxFilter Brightening Under Eye Color Corrector",
    type: "Under Eye Concealer",
    image: skuImage("2739456"),
    link: "https://www.sephora.com/product/fauxfilter-under-eye-color-corrector-P506560?skuId=2739456"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_007",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Saie",
    name: "Slip Tint Radiant All-Over Concealer with Niacinamide",
    type: "Under Eye Concealer",
    image: skuImage("2752111"),
    link: "https://www.sephora.com/product/saie-slip-tint-radiant-all-over-concealer-with-niacinamide-P510438?skuId=2752111"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_008",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Hourglass",
    name: "Vanish™ Airbrush Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2857159"),
    link: "https://www.sephora.com/product/hourglass-vanish-airbrush-concealer-P454042?skuId=2857159"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_009",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "caliray",
    name: "Hideaway Brightening + Hydrating Under Eye Color Corrector Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2846228"),
    link: "https://www.sephora.com/product/caliray-hideaway-brightening-hydrating-under-eye-color-corrector-concealer-P510426?skuId=2846228"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_010",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Armani Beauty",
    name: "Luminous Silk Hydrating Face and Under-Eye Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2340982"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158?skuId=2340982"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_011",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Too Faced",
    name: "Born This Way Super Coverage Multi-Use Concealer with Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2084408"),
    link: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298?skuId=2084408"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_012",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "CC full coverage undereye color corrector",
    type: "Under Eye Concealer",
    image: skuImage("1626951"),
    link: "https://www.sephora.com/product/colored-clay-cc-undereye-corrector-P387175?skuId=1626951"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_013",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12HR Hydrating Gel Stick Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2938694"),
    link: "https://www.sephora.com/product/milk-hydro-grip-gel-concealer-P520574?skuId=2938694"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_014",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Under Eye Brightener",
    type: "Under Eye Concealer",
    image: skuImage("2629418"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-under-eye-brightener-P503714?skuId=2629418"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_015",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Saie",
    name: "Hydrabeam Hydrating & Concealing Under Eye Brightener with Cucumber Extract",
    type: "Under Eye Concealer",
    image: skuImage("2578920"),
    link: "https://www.sephora.com/product/saie-hydrabeam-brightening-hydrating-under-eye-concealer-P483685?skuId=2578920"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_016",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Estée Lauder",
    name: "Double Wear Stay-in-Place 24-Hour Longwear Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2870418"),
    link: "https://www.sephora.com/product/double-wear-stay-in-place-24-hour-longwear-concealer-P516294?skuId=2870418"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_017",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "shape tape™ blurring concealer stick",
    type: "Under Eye Concealer",
    image: skuImage("2869865"),
    link: "https://www.sephora.com/product/shape-tape-tm-blur-concealer-stick-P515882?skuId=2869865"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_018",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "DIOR",
    name: "Backstage Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2509651"),
    link: "https://www.sephora.com/product/dior-backstage-concealer-P482262?skuId=2509651"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_019",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "DIOR",
    name: "Dior Forever Skin Correct Full-Coverage Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2639318"),
    link: "https://www.sephora.com/product/dior-dior-forever-skin-correct-concealer-P454348?skuId=2639318"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_020",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MAC Cosmetics",
    name: "Studio Fix 36HR Smooth Angles Hydrating Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2944056"),
    link: "https://www.sephora.com/product/mac-studio-fix-36hr-smooth-angles-hydrating-concealer-P520523?skuId=2944056"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_021",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "LYS Beauty",
    name: "Bright Start Creamy Buildable Coverage Airbrush Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2910065"),
    link: "https://www.sephora.com/product/bright-start-creamy-buildable-coverage-airbrush-concealer-P518457?skuId=2910065"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_022",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "maracuja creaseless creamy liquid concealer",
    type: "Under Eye Concealer",
    image: skuImage("2772853"),
    link: "https://www.sephora.com/product/tarte-maracuja-creaseless-creamy-concealer-P512243?skuId=2772853"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_023",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "PATRICK TA",
    name: "Major Skin Soft Blur Brightening Hydrating Concealer with Vitamin E",
    type: "Under Eye Concealer",
    image: skuImage("2927390"),
    link: "https://www.sephora.com/product/major-skin-soft-blur-brightening-hydrating-concealer-with-vitamin-e-P520636?skuId=2927390"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_024",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Charlotte Tilbury",
    name: "Magic Vanish Color Corrector",
    type: "Under Eye Concealer",
    image: skuImage("2245090"),
    link: "https://www.sephora.com/product/magic-vanish-color-corrector-P449571?skuId=2245090"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_025",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "NARS",
    name: "Light Reflecting™ Undereye Brightener",
    type: "Under Eye Concealer",
    image: skuImage("2722841"),
    link: "https://www.sephora.com/product/nars-light-reflecting-eye-brightener-P506288?skuId=2722841"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_026",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Yves Saint Laurent",
    name: "Touche Éclat Awakening Concealer Click Pen",
    type: "Under Eye Concealer",
    image: skuImage("2859098"),
    link: "https://www.sephora.com/product/touche-eclat-radiance-perfecting-pen-P218431?skuId=2859098"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_027",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MILK MAKEUP",
    name: "Future Fluid Creamy Longwear Hydrating Concealer with Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2596112"),
    link: "https://www.sephora.com/product/future-fluid-all-over-cream-concealer-P500448?skuId=2596112"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_028",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Bobbi Brown",
    name: "Skin Cream Concealer Stick",
    type: "Under Eye Concealer",
    image: skuImage("2552826"),
    link: "https://www.sephora.com/product/bobbi-brown-skin-concealer-stick-P480281?skuId=2552826"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_029",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Fenty Beauty by Rihanna",
    name: "Pro Filt’r Instant Retouch Longwear Liquid Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2173367"),
    link: "https://www.sephora.com/product/pro-filt-r-instant-retouch-concealer-P88779809?skuId=2173367"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_030",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "maracuja creaseless full coverage radiant undereye concealer",
    type: "Under Eye Concealer",
    image: skuImage("2094548"),
    link: "https://www.sephora.com/product/creaseless-concealer-P433206?skuId=2094548"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_031",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "IT Cosmetics",
    name: "Do It All Radiant Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2863066"),
    link: "https://www.sephora.com/product/do-it-all-radiant-concealer-P516055?skuId=2863066"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_032",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "IT Cosmetics",
    name: "Bye Bye Under Eye Anti-Aging Full Coverage Concealer with Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2137834"),
    link: "https://www.sephora.com/product/bye-bye-under-eye-full-coverage-anti-aging-waterproof-concealer-P437987?skuId=2137834"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_033",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Sarah Creal",
    name: "Face Flex Concealer & Complexion Enhancer with Caffeine",
    type: "Under Eye Concealer",
    image: skuImage("2888675"),
    link: "https://www.sephora.com/product/sarah-creal-face-flex-concealer-complexion-enhancer-with-caffeine-P513274?skuId=2888675"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_034",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Givenchy",
    name: "Prisme Libre Skin-Caring 24H Hydrating + Radiant + Correcting Creamy Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2637015"),
    link: "https://www.sephora.com/product/givenchy-prisme-libre-skin-caring-24h-hydrating-radiant-correcting-creamy-concealer-P505129?skuId=2637015"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_035",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "OLEHENRIKSEN",
    name: "Banana Bright+ Vitamin CC Eye Sticks for Dark Circles",
    type: "Under Eye Concealer",
    image: skuImage("2648483"),
    link: "https://www.sephora.com/product/banana-bright-vitamin-cc-eye-sticks-P504639?skuId=2648483"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_036",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "LIXR Beauty",
    name: "Multi-Use Cream-to-Powder Concealer & Foundation Stick",
    type: "Under Eye Concealer",
    image: skuImage("2955284"),
    link: "https://www.sephora.com/product/lixr-complexion-stick-P521062?skuId=2955284"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_037",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Westman Atelier",
    name: "Vital Skincare Brightening Concealer With Hyaluronic Acid",
    type: "Under Eye Concealer",
    image: skuImage("2797728"),
    link: "https://www.sephora.com/product/westman-atelier-vital-skincare-brightening-concealer-with-hyaluronic-acid-P513533?skuId=2797728"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_038",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MILK MAKEUP",
    name: "Sunshine Under Eye Brightening Light Coverage Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2487106"),
    link: "https://www.sephora.com/product/milk-makeup-sunshine-under-eye-brightening-light-coverage-concealer-P475966?skuId=2487106"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_039",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "mini maracuja creaseless creamy liquid concealer",
    type: "Under Eye Concealer",
    image: skuImage("2783553"),
    link: "https://www.sephora.com/product/tarte-mini-maracuja-creamy-creaseless-concealer-P512244?skuId=2783553"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_040",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "tarte",
    name: "mini maracuja creaseless full coverage radiant undereye concealer",
    type: "Under Eye Concealer",
    image: skuImage("2252179"),
    link: "https://www.sephora.com/product/mini-creaseless-under-eye-concealer-P447364?skuId=2252179"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_041",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Valentino",
    name: "Very Valentino 24 Hour Wear Hydrating Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2637874"),
    link: "https://www.sephora.com/product/valentino-very-valentino-concealer-P504684?skuId=2637874"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_042",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Matte Contour Skinstick",
    type: "Under Eye Concealer",
    image: skuImage("2589927"),
    link: "https://www.sephora.com/product/match-stix-matte-skinstick-P18975403?skuId=2589927"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_043",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Too Faced",
    name: "Born This Way Ethereal Light Illuminating Smoothing Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2584704"),
    link: "https://www.sephora.com/product/too-faced-etheral-light-smoothing-concealer-P484079?skuId=2584704"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_044",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "bareMinerals",
    name: "Loose Talc-Free Powder Concealer SPF 20",
    type: "Under Eye Concealer",
    image: skuImage("1073063"),
    link: "https://www.sephora.com/product/bareminerals-broad-spectrum-multi-tasking-face-P61006?skuId=1073063"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_045",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "CLINIQUE",
    name: "Beyond Perfecting Super Concealer Camouflage + 24-Hour Wear",
    type: "Under Eye Concealer",
    image: skuImage("1948207"),
    link: "https://www.sephora.com/product/beyond-perfecting-super-concealer-P421227?skuId=1948207"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_046",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Benefit Cosmetics",
    name: "Boi-ing Cakeless Full Coverage Waterproof Liquid Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2519684"),
    link: "https://www.sephora.com/product/boi-ing-cakeless-concealer-P448162?skuId=2519684"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_047",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Benefit Cosmetics",
    name: "Boi-ing Industrial Strength Full Coverage Cream Concealer",
    type: "Under Eye Concealer",
    image: skuImage("1951441"),
    link: "https://www.sephora.com/product/boi-ing-indistrial-strength-concealer-P1273?skuId=1951441"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_048",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Gucci",
    name: "Concentré de Beauté Multi-Use Crease Proof and Hydrating Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2691939"),
    link: "https://www.sephora.com/product/concentre-de-beaute-concealer-P507784?skuId=2691939"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_049",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "CLINIQUE",
    name: "Even Better™ All-Over Concealer + Eraser",
    type: "Under Eye Concealer",
    image: skuImage("2365021"),
    link: "https://www.sephora.com/product/clinique-even-better-all-over-concealer-eraser-P461436?skuId=2365021"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_050",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Fara Homidi",
    name: "Essential Face Compact Refillable Concealer and Foundation",
    type: "Under Eye Concealer",
    image: skuImage("2790681"),
    link: "https://www.sephora.com/product/fara-homidi-essential-face-compact-refillable-concealer-and-foundation-P511747?skuId=2790681"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_051",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MAKE UP FOR EVER",
    name: "Step 1 Primer Color Corrector - Redness Corrector",
    type: "Under Eye Concealer",
    image: skuImage("2424703"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-redness-corrector-P468185?skuId=2424703"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_052",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "Kaja",
    name: "Don't Settle Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2139699"),
    link: "https://www.sephora.com/product/don-t-settle-concealer-P436154?skuId=2139699"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_053",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Turn Up the Base Butter Silk Concealer",
    type: "Under Eye Concealer",
    image: skuImage("2472025"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-turn-up-base-buttersilk-concealer-P473741?skuId=2472025"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_054",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MAKE UP FOR EVER",
    name: "Ultra HD Underpainting Color Correction Palette",
    type: "Under Eye Concealer",
    image: skuImage("2034775"),
    link: "https://www.sephora.com/product/ultra-hd-underpainting-correction-palette-P428677?skuId=2034775"
  }),
  productData({
    code: "UNDER_EYE_CONCEALER_055",
    category: "Makeup > Eye > Under Eye Concealer",
    brand: "MAKE UP FOR EVER",
    name: "Color Correcting Step 1 Primers",
    type: "Under Eye Concealer",
    image: skuImage("2424752"),
    link: "https://www.sephora.com/product/make-up-for-ever-step-1-primer-color-corrector-tone-up-perfector-P468186?skuId=2424752"
  }),

  // ==================================================
  // Makeup > Eye > Mascara
  // Products: 168
  // ==================================================
  productData({
    code: "MASCARA_001",
    category: "Makeup > Eye > Mascara",
    brand: "ILIA",
    name: "Limitless Lash Mascara - Clean Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2850378"),
    link: "https://www.sephora.com/product/limitless-lash-mascara-P431750?skuId=2850378"
  }),
  productData({
    code: "MASCARA_002",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Lash Idôle Lengthening & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2417145"),
    link: "https://www.sephora.com/product/lancome-lash-idole-lash-lifting-volumizing-mascara-P467208?skuId=2417145"
  }),
  productData({
    code: "MASCARA_003",
    category: "Makeup > Eye > Mascara",
    brand: "Dolce&Gabbana",
    name: "Mini Everfull XL Mascara for 36H Lasting Extreme Volume & Lift",
    type: "Mascara",
    image: skuImage("2986172"),
    link: "https://www.sephora.com/product/mini-everfull-xl-mascara-for-36h-lasting-extreme-volume-lift-P522610?skuId=2986172"
  }),
  productData({
    code: "MASCARA_004",
    category: "Makeup > Eye > Mascara",
    brand: "Yves Saint Laurent",
    name: "Lash Clash Extreme Volume Mascara",
    type: "Mascara",
    image: skuImage("2638336"),
    link: "https://www.sephora.com/product/yves-saint-laurent-lash-clash-extreme-volume-mascara-P479863?skuId=2638336"
  }),
  productData({
    code: "MASCARA_005",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Better Than Sex Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1533439"),
    link: "https://www.sephora.com/product/better-than-sex-mascara-P381000?skuId=1533439"
  }),
  productData({
    code: "MASCARA_006",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "GrandeLASH - MD Lash Enhancing Serum",
    type: "Mascara",
    image: skuImage("1923275"),
    link: "https://www.sephora.com/product/grandlash-tm-md-lash-enhancing-serum-P419219?skuId=1923275"
  }),
  productData({
    code: "MASCARA_007",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "tartelette™ lengthening & tubing mascara",
    type: "Mascara",
    image: skuImage("2585628"),
    link: "https://www.sephora.com/product/tartelette-tubing-mascara-P500182?skuId=2585628"
  }),
  productData({
    code: "MASCARA_008",
    category: "Makeup > Eye > Mascara",
    brand: "Tower 28 Beauty",
    name: "MakeWaves® Lengthening + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2606176"),
    link: "https://www.sephora.com/product/makewaves-lengthening-curling-clean-mascara-P502484?skuId=2606176"
  }),
  productData({
    code: "MASCARA_009",
    category: "Makeup > Eye > Mascara",
    brand: "Prada",
    name: "Pradascope Lash Lifting & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2836070"),
    link: "https://www.sephora.com/product/prada-beauty-pradascope-lash-lifting-lengthening-mascara-P515390?skuId=2836070"
  }),
  productData({
    code: "MASCARA_010",
    category: "Makeup > Eye > Mascara",
    brand: "MAKE UP FOR EVER",
    name: "Volume Artist Clump-Free Mascara",
    type: "Mascara",
    image: skuImage("2943017"),
    link: "https://www.sephora.com/product/volume-artist-mascara-P520522?skuId=2943017"
  }),
  productData({
    code: "MASCARA_011",
    category: "Makeup > Eye > Mascara",
    brand: "Rare Beauty by Selena Gomez",
    name: "Perfect Strokes Universal Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2474138"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475599?skuId=2474138"
  }),
  productData({
    code: "MASCARA_012",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Size Up Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2339539"),
    link: "https://www.sephora.com/product/size-up-mascara-P466443?skuId=2339539"
  }),
  productData({
    code: "MASCARA_013",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Mini Lash Idôle Lengthening & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2417152"),
    link: "https://www.sephora.com/product/lancome-mini-lash-idole-lash-lifting-volumizing-mascara-P467209?skuId=2417152"
  }),
  productData({
    code: "MASCARA_014",
    category: "Makeup > Eye > Mascara",
    brand: "Yves Saint Laurent",
    name: "Lash Latex Sculpting & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2925717"),
    link: "https://www.sephora.com/product/lash-latex-sculpting-lengthening-mascara-P520022?skuId=2925717"
  }),
  productData({
    code: "MASCARA_015",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "BADgal BANG! Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2031649"),
    link: "https://www.sephora.com/product/bad-gal-bang-mascara-P427517?skuId=2031649"
  }),
  productData({
    code: "MASCARA_016",
    category: "Makeup > Eye > Mascara",
    brand: "Dolce&Gabbana",
    name: "Everfull XL Mascara for 36H Lasting Extreme Volume & Lift",
    type: "Mascara",
    image: skuImage("2986164"),
    link: "https://www.sephora.com/product/everfull-xl-mascara-for-36h-lasting-extreme-volume-lift-P522582?skuId=2986164"
  }),
  productData({
    code: "MASCARA_017",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "GrandeLASH-MD Lash Enhancing Serum Mini",
    type: "Mascara",
    image: skuImage("2227312"),
    link: "https://www.sephora.com/product/grandelash-md-lash-enhancing-serum-mini-P444603?skuId=2227312"
  }),
  productData({
    code: "MASCARA_018",
    category: "Makeup > Eye > Mascara",
    brand: "caliray",
    name: "Come Hell or High Water 24-hour Volumizing & Lengthening Tubing Mascara",
    type: "Mascara",
    image: skuImage("2938488"),
    link: "https://www.sephora.com/product/caliray-come-hell-or-high-water-volumizing-tubing-mascara-P479308?skuId=2938488"
  }),
  productData({
    code: "MASCARA_019",
    category: "Makeup > Eye > Mascara",
    brand: "CLINIQUE",
    name: "High Impact Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2889285"),
    link: "https://www.sephora.com/product/high-impact-mascara-P122912?skuId=2889285"
  }),
  productData({
    code: "MASCARA_020",
    category: "Makeup > Eye > Mascara",
    brand: "REFY",
    name: "Lash Sculpt Lengthen and Lift Natural Looking Mascara",
    type: "Mascara",
    image: skuImage("2617819"),
    link: "https://www.sephora.com/product/refy-beauty-lash-sculpt-lengthen-and-lift-mascara-P510451?skuId=2617819"
  }),
  productData({
    code: "MASCARA_021",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Lash Idôle Flutter Extension Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2843555"),
    link: "https://www.sephora.com/product/lash-idole-flutter-extension-lengthening-mascara-P515062?skuId=2843555"
  }),
  productData({
    code: "MASCARA_022",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "2-Step Lash System Mini GrandeLASH-MD & GrandeMASCARA",
    type: "Mascara",
    image: skuImage("2352482"),
    link: "https://www.sephora.com/product/2-step-lash-system-mini-grandelash-md-and-grandemascara-P518456?skuId=2352482"
  }),
  productData({
    code: "MASCARA_023",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Fan Fest Fanning & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2658862"),
    link: "https://www.sephora.com/product/fan-fest-mascara-P506688?skuId=2658862"
  }),
  productData({
    code: "MASCARA_024",
    category: "Makeup > Eye > Mascara",
    brand: "Hourglass",
    name: "Hourglass Unlocked Defining and Lengthening Tubing Mascara",
    type: "Mascara",
    image: skuImage("2887537"),
    link: "https://www.sephora.com/product/hourglass-unlocked-instant-extensions-mascara-P460829?skuId=2887537"
  }),
  productData({
    code: "MASCARA_025",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "GrandeMASCARA Conditioning Peptide Mascara",
    type: "Mascara",
    image: skuImage("1956465"),
    link: "https://www.sephora.com/product/grande-mascara-P420491?skuId=1956465"
  }),
  productData({
    code: "MASCARA_026",
    category: "Makeup > Eye > Mascara",
    brand: "Armani Beauty",
    name: "Vertigo Lift Longwear Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2853364"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-vertigo-lift-longwear-lengthening-mascara-P515781?skuId=2853364"
  }),
  productData({
    code: "MASCARA_027",
    category: "Makeup > Eye > Mascara",
    brand: "Kosas",
    name: "Soulgazer Lengthening Mascara + Lash Serum in 1 for Sensitive Eyes",
    type: "Mascara",
    image: skuImage("2885242"),
    link: "https://www.sephora.com/product/soulgazer-lengthening-lifting-peptide-mascara-P517333?skuId=2885242"
  }),
  productData({
    code: "MASCARA_028",
    category: "Makeup > Eye > Mascara",
    brand: "MAKEUP BY MARIO",
    name: "Master Mascara® Volumizing & Lift",
    type: "Mascara",
    image: skuImage("2867307"),
    link: "https://www.sephora.com/product/master-mascara-volumizing-lift-P515679?skuId=2867307"
  }),
  productData({
    code: "MASCARA_029",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "tartelette™ XL lengthening & tubing mascara",
    type: "Mascara",
    image: skuImage("2834372"),
    link: "https://www.sephora.com/product/tarte-tartelette-tubing-xl-mascara-P510692?skuId=2834372"
  }),
  productData({
    code: "MASCARA_030",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Overvolume Extreme Volume Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2934982"),
    link: "https://www.sephora.com/product/diorshow-overvolume-extreme-volume-waterproof-mascara-P520274?skuId=2934982"
  }),
  productData({
    code: "MASCARA_031",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini Fan Fest Fanning & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2658870"),
    link: "https://www.sephora.com/product/mini-fan-fest-mascara-P506675?skuId=2658870"
  }),
  productData({
    code: "MASCARA_032",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "GrandeLASH - Sensitive Peptide Lash Enhancing Serum",
    type: "Mascara",
    image: skuImage("2912947"),
    link: "https://www.sephora.com/product/grandelash-sensitive-peptide-lash-enhancing-serum-P518428?skuId=2912947"
  }),
  productData({
    code: "MASCARA_033",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "GrandeDRAMA Intense Thickening Mascara",
    type: "Mascara",
    image: skuImage("2200079"),
    link: "https://www.sephora.com/product/grandedrama-intense-thickening-mascara-P441882?skuId=2200079"
  }),
  productData({
    code: "MASCARA_034",
    category: "Makeup > Eye > Mascara",
    brand: "ILIA",
    name: "Mini Limitless Lash Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2217933"),
    link: "https://www.sephora.com/product/limitless-lash-mascara-mini-P444439?skuId=2217933"
  }),
  productData({
    code: "MASCARA_035",
    category: "Makeup > Eye > Mascara",
    brand: "caliray",
    name: "Mini Come Hell or High Water 24-hour Volumizing & Lengthening Tubing Mascara",
    type: "Mascara",
    image: skuImage("2543866"),
    link: "https://www.sephora.com/product/caliray-mini-come-hell-or-high-water-volumizing-tubing-mascara-P479309?skuId=2543866"
  }),
  productData({
    code: "MASCARA_036",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Cils Booster XL Super-Enhancing Mascara Primer",
    type: "Mascara",
    image: skuImage("2109965"),
    link: "https://www.sephora.com/product/cils-booster-xl-super-enhancing-mascara-base-P128706?skuId=2109965"
  }),
  productData({
    code: "MASCARA_037",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "mini tartelette™ lengthening & tubing mascara",
    type: "Mascara",
    image: skuImage("2783660"),
    link: "https://www.sephora.com/product/mini-tartelette-tm-tubing-mascara-P501022?skuId=2783660"
  }),
  productData({
    code: "MASCARA_038",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Overvolume Extreme Volume Mascara",
    type: "Mascara",
    image: skuImage("2859338"),
    link: "https://www.sephora.com/product/diorshow-overvolume-extreme-volume-mascara-P516615?skuId=2859338"
  }),
  productData({
    code: "MASCARA_039",
    category: "Makeup > Eye > Mascara",
    brand: "Tower 28 Beauty",
    name: "Mini MakeWaves Lengthening + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2714459"),
    link: "https://www.sephora.com/product/tower-28-mini-makewaves-lengthening-volumizing-mascara-P509047?skuId=2714459"
  }),
  productData({
    code: "MASCARA_040",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "Mini Cult Faves Lash and Brow Serum Set",
    type: "Mascara",
    image: skuImage("2869543"),
    link: "https://www.sephora.com/product/grande-cosmetics-mini-cult-faves-lash-brow-serum-set-P516554?skuId=2869543"
  }),
  productData({
    code: "MASCARA_041",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Iconic Overcurl Mascara",
    type: "Mascara",
    image: skuImage("2669729"),
    link: "https://www.sephora.com/product/diorshow-iconic-overcurl-mascara-P377821?skuId=2669729"
  }),
  productData({
    code: "MASCARA_042",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Définicils High Definition Lengthening Mascara",
    type: "Mascara",
    image: skuImage("137471"),
    link: "https://www.sephora.com/product/definicils-high-definition-mascara-P54450?skuId=137471"
  }),
  productData({
    code: "MASCARA_043",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Love The Lift Curling + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2711695"),
    link: "https://www.sephora.com/product/love-the-lift-curling-and-volumizing-mascara-P509469?skuId=2711695"
  }),
  productData({
    code: "MASCARA_044",
    category: "Makeup > Eye > Mascara",
    brand: "Yves Saint Laurent",
    name: "Lash Clash Extreme Volume Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2751568"),
    link: "https://www.sephora.com/product/lash-clash-extreme-volume-waterproof-mascara-P509511?skuId=2751568"
  }),
  productData({
    code: "MASCARA_045",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Big By Definition Defining & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2464048"),
    link: "https://www.sephora.com/product/sephora-collection-big-by-definition-defining-volumizing-mascara-P479649?skuId=2464048"
  }),
  productData({
    code: "MASCARA_046",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow 24h Buildable Volume Mascara",
    type: "Mascara",
    image: skuImage("2510816"),
    link: "https://www.sephora.com/product/diorshow-mascara-P396240?skuId=2510816"
  }),
  productData({
    code: "MASCARA_047",
    category: "Makeup > Eye > Mascara",
    brand: "Fenty Beauty by Rihanna",
    name: "Hella Thicc Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2656130"),
    link: "https://www.sephora.com/product/fenty-hella-thicc-volumizing-mascara-P505055?skuId=2656130"
  }),
  productData({
    code: "MASCARA_048",
    category: "Makeup > Eye > Mascara",
    brand: "Glossier",
    name: "Lash Slick Lift and Lengthen Tubing Mascara",
    type: "Mascara",
    image: skuImage("2649267"),
    link: "https://www.sephora.com/product/glossier-lash-slick-lift-lengthening-mascara-P504834?skuId=2649267"
  }),
  productData({
    code: "MASCARA_049",
    category: "Makeup > Eye > Mascara",
    brand: "MERIT",
    name: "Clean Lash Lengthening Tubing Mascara",
    type: "Mascara",
    image: skuImage("2426781"),
    link: "https://www.sephora.com/product/merit-clean-lash-lengthening-mascara-P468692?skuId=2426781"
  }),
  productData({
    code: "MASCARA_050",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Mini Love The Lift Curling + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2711711"),
    link: "https://www.sephora.com/product/mini-love-lift-curling-and-volumizing-mascara-P509804?skuId=2711711"
  }),
  productData({
    code: "MASCARA_051",
    category: "Makeup > Eye > Mascara",
    brand: "Charlotte Tilbury",
    name: "Exagger-eyes Volumizing and Curling Mascara",
    type: "Mascara",
    image: skuImage("2790228"),
    link: "https://www.sephora.com/product/charlotte-tilbury-exaggereyes-volumizing-and-curling-mascara-P513485?skuId=2790228"
  }),
  productData({
    code: "MASCARA_052",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Mini Better Than Sex Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1789635"),
    link: "https://www.sephora.com/product/better-than-sex-mini-P425608?skuId=1789635"
  }),
  productData({
    code: "MASCARA_053",
    category: "Makeup > Eye > Mascara",
    brand: "Yves Saint Laurent",
    name: "Mini Lash Clash Extreme Volume Mascara",
    type: "Mascara",
    image: skuImage("2880839"),
    link: "https://www.sephora.com/product/mini-lash-clash-extreme-volume-mascara-P517708?skuId=2880839"
  }),
  productData({
    code: "MASCARA_054",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "mini tartelette™ XL lengthening & tubing mascara",
    type: "Mascara",
    image: skuImage("2834380"),
    link: "https://www.sephora.com/product/tarte-mini-tartelette-tubing-xl-mascara-P510693?skuId=2834380"
  }),
  productData({
    code: "MASCARA_055",
    category: "Makeup > Eye > Mascara",
    brand: "Armani Beauty",
    name: "Mini Vertigo Lift Longwear Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2853372"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-mini-vertigo-lift-longwear-lengthening-mascara-P515782?skuId=2853372"
  }),
  productData({
    code: "MASCARA_056",
    category: "Makeup > Eye > Mascara",
    brand: "Urban Decay",
    name: "Tube Job Lash Augmenting Tubing Mascara",
    type: "Mascara",
    image: skuImage("2942886"),
    link: "https://www.sephora.com/product/tube-job-tubing-mascara-P520878?skuId=2942886"
  }),
  productData({
    code: "MASCARA_057",
    category: "Makeup > Eye > Mascara",
    brand: "Charlotte Tilbury",
    name: "Mini Exagger-eyes Volumizing and Curling Mascara",
    type: "Mascara",
    image: skuImage("2815116"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-exagger-eyes-volumizing-and-curling-mascara-P513329?skuId=2815116"
  }),
  productData({
    code: "MASCARA_058",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Better Than Sex Volumizing & Lengthening Waterproof Mascara",
    type: "Mascara",
    image: skuImage("1809193"),
    link: "https://www.sephora.com/product/better-than-sex-waterproof-mascara-P407908?skuId=1809193"
  }),
  productData({
    code: "MASCARA_059",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Mini Size Up Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2360832"),
    link: "https://www.sephora.com/product/sephora-collection-size-up-mascara-P509805?skuId=2360832"
  }),
  productData({
    code: "MASCARA_060",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Roller Lash Curling & Lifting Mascara",
    type: "Mascara",
    image: skuImage("1665082"),
    link: "https://www.sephora.com/product/roller-lash-curling-lifting-mascara-P392516?skuId=1665082"
  }),
  productData({
    code: "MASCARA_061",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Mini Lash Idôle Flutter Extension Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2843563"),
    link: "https://www.sephora.com/product/lash-idole-flutter-mascara-mini-P515255?skuId=2843563"
  }),
  productData({
    code: "MASCARA_062",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Ribbon Wrapped Lash Extreme Length Tubing Mascara",
    type: "Mascara",
    image: skuImage("2866614"),
    link: "https://www.sephora.com/product/too-faced-ribbon-wrapped-lash-extreme-length-tubing-mascara-P516089?skuId=2866614"
  }),
  productData({
    code: "MASCARA_063",
    category: "Makeup > Eye > Mascara",
    brand: "MAC Cosmetics",
    name: "M·A·CStack Smudge-Proof Volumizing + Lengthening Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2604916"),
    link: "https://www.sephora.com/product/mac-cosmetics-macstack-waterproof-mascara-P504806?skuId=2604916"
  }),
  productData({
    code: "MASCARA_064",
    category: "Makeup > Eye > Mascara",
    brand: "Westman Atelier",
    name: "Eye Want You Lengthening + Volumizing Clean Mascara",
    type: "Mascara",
    image: skuImage("2699205"),
    link: "https://www.sephora.com/product/eye-want-you-lengthening-volumizing-clean-mascara-P508542?skuId=2699205"
  }),
  productData({
    code: "MASCARA_065",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "HYPNÔSE DRAMA Instant Full Body Volume Mascara",
    type: "Mascara",
    image: skuImage("2782829"),
    link: "https://www.sephora.com/product/lancome-hypnose-drama-instant-full-body-volume-mascara-P511962?skuId=2782829"
  }),
  productData({
    code: "MASCARA_066",
    category: "Makeup > Eye > Mascara",
    brand: "Saie",
    name: "Mascara 101 Lengthening and Lifting",
    type: "Mascara",
    image: skuImage("2686715"),
    link: "https://www.sephora.com/product/saie-mascara-101-lengthening-lifting-P468204?skuId=2686715"
  }),
  productData({
    code: "MASCARA_067",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "maneater™ lengthening & volumizing mascara",
    type: "Mascara",
    image: skuImage("2640548"),
    link: "https://www.sephora.com/product/tarte-tarte-maneater-tm-mascara-P504067?skuId=2640548"
  }),
  productData({
    code: "MASCARA_068",
    category: "Makeup > Eye > Mascara",
    brand: "MAC Cosmetics",
    name: "MACStack Elevated Lifting, Volumizing + Clump-Proof Mascara",
    type: "Mascara",
    image: skuImage("2837490"),
    link: "https://www.sephora.com/product/macstack-elevated-mascara-P515898?skuId=2837490"
  }),
  productData({
    code: "MASCARA_069",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "BADgal BANG! Volumizing Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2520294"),
    link: "https://www.sephora.com/product/benefit-cosmetics-badgal-bang-volumizing-waterproof-mascara-P484032?skuId=2520294"
  }),
  productData({
    code: "MASCARA_070",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "KUSH Big Hit Lifting + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2894970"),
    link: "https://www.sephora.com/product/milk-makeup-kush-big-hit-volumizing-mascara-P519222?skuId=2894970"
  }),
  productData({
    code: "MASCARA_071",
    category: "Makeup > Eye > Mascara",
    brand: "ILIA",
    name: "Fullest Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2475259"),
    link: "https://www.sephora.com/product/ilia-fullest-volumizing-mascara-P475110?skuId=2475259"
  }),
  productData({
    code: "MASCARA_072",
    category: "Makeup > Eye > Mascara",
    brand: "Kulfi",
    name: "Badi Lash Smudge Proof Volumizing Tubing Mascara",
    type: "Mascara",
    image: skuImage("2867117"),
    link: "https://www.sephora.com/product/badi-lash-smudge-proof-volumizing-tubing-mascara-P515709?skuId=2867117"
  }),
  productData({
    code: "MASCARA_073",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Waterproof Size Up Mascara",
    type: "Mascara",
    image: skuImage("2730794"),
    link: "https://www.sephora.com/product/size-up-waterproof-mascara-P515108?skuId=2730794"
  }),
  productData({
    code: "MASCARA_074",
    category: "Makeup > Eye > Mascara",
    brand: "Vegamour",
    name: "GRO Volumizing Lash Serum",
    type: "Mascara",
    image: skuImage("2473262"),
    link: "https://www.sephora.com/product/vegamour-vegalash-volumizing-serum-P473009?skuId=2473262"
  }),
  productData({
    code: "MASCARA_075",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "KUSH High Roll Lengthening Smudge-Proof Tubing Mascara",
    type: "Mascara",
    image: skuImage("2770337"),
    link: "https://www.sephora.com/product/milk-makeup-kush-high-roll-tubing-mascara-P511576?skuId=2770337"
  }),
  productData({
    code: "MASCARA_076",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "lights, camera, lashes™ 4-in-1 volumizing mascara",
    type: "Mascara",
    image: skuImage("862417"),
    link: "https://www.sephora.com/product/lights-camera-lashes-P111902?skuId=862417"
  }),
  productData({
    code: "MASCARA_077",
    category: "Makeup > Eye > Mascara",
    brand: "Anastasia Beverly Hills",
    name: "Lash Sculpt Lengthening & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2707149"),
    link: "https://www.sephora.com/product/lash-sculpt-lengthening-volumizing-mascara-P507655?skuId=2707149"
  }),
  productData({
    code: "MASCARA_078",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Lash Idôle Curl Goddess Curling & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2938926"),
    link: "https://www.sephora.com/product/lash-idole-curl-goddess-curling-volumizing-mascara-P520470?skuId=2938926"
  }),
  productData({
    code: "MASCARA_079",
    category: "Makeup > Eye > Mascara",
    brand: "Laura Mercier",
    name: "Caviar Extravagant Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2793081"),
    link: "https://www.sephora.com/product/laura-mercier-caviar-extravagant-volumizing-lenghthening-waterproof-mascara-P512943?skuId=2793081"
  }),
  productData({
    code: "MASCARA_080",
    category: "Makeup > Eye > Mascara",
    brand: "HAUS LABS BY LADY GAGA",
    name: "B Structural Volumizing and Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2827780"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-b-structural-volumizing-lengthening-mascara-P514550?skuId=2827780"
  }),
  productData({
    code: "MASCARA_081",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "They're Real! Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1343938"),
    link: "https://www.sephora.com/product/they-re-real-lengthening-volumizing-mascara-P289307?skuId=1343938"
  }),
  productData({
    code: "MASCARA_082",
    category: "Makeup > Eye > Mascara",
    brand: "Urban Decay",
    name: "Perversion Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2849610"),
    link: "https://www.sephora.com/product/urban-decay-perversion-vegan-volumizing-mascara-P515195?skuId=2849610"
  }),
  productData({
    code: "MASCARA_083",
    category: "Makeup > Eye > Mascara",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Hella Thicc Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2782969"),
    link: "https://www.sephora.com/product/mini-hella-thic-P513074?skuId=2782969"
  }),
  productData({
    code: "MASCARA_084",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "Mini Shape Tape Concealer + Tubing Mascara Set",
    type: "Mascara",
    image: skuImage("2948230"),
    link: "https://www.sephora.com/product/travel-size-shape-tape-tubing-set-P520769?skuId=2948230"
  }),
  productData({
    code: "MASCARA_085",
    category: "Makeup > Eye > Mascara",
    brand: "Gucci",
    name: "L'Obscur Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2821338"),
    link: "https://www.sephora.com/product/gucci-mascara-l-obscur-P456588?skuId=2821338"
  }),
  productData({
    code: "MASCARA_086",
    category: "Makeup > Eye > Mascara",
    brand: "ILIA",
    name: "Mini Fullest Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2475267"),
    link: "https://www.sephora.com/product/ilia-mini-fullest-volumizing-mascara-P475111?skuId=2475267"
  }),
  productData({
    code: "MASCARA_087",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "lights, camera, lashes™ 4-in-1 volumizing & conditioning platinum mascara",
    type: "Mascara",
    image: skuImage("2833218"),
    link: "https://www.sephora.com/product/tarte-lights-camera-lashes-platinum-mascara-P515053?skuId=2833218"
  }),
  productData({
    code: "MASCARA_088",
    category: "Makeup > Eye > Mascara",
    brand: "Sarah Creal",
    name: "Back of The Cab Volumizing & Tubing Mascara",
    type: "Mascara",
    image: skuImage("2823599"),
    link: "https://www.sephora.com/product/sarah-creal-back-the-cab-volumizing-tubing-mascara-P513261?skuId=2823599"
  }),
  productData({
    code: "MASCARA_089",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "Waterproof RISE Lifting + Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2664886"),
    link: "https://www.sephora.com/product/waterproof-rise-lifting-lengthening-mascara-P506005?skuId=2664886"
  }),
  productData({
    code: "MASCARA_090",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Maximizer 4D  Lash Primer-Serum for Length, Volume, Curl & Definition",
    type: "Mascara",
    image: skuImage("2751105"),
    link: "https://www.sephora.com/product/diorshow-maximizer-4d-P511584?skuId=2751105"
  }),
  productData({
    code: "MASCARA_091",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Waterproof Mascara",
    type: "Mascara",
    image: skuImage("838763"),
    link: "https://www.sephora.com/product/diorshow-waterproof-mascara-P99901?skuId=838763"
  }),
  productData({
    code: "MASCARA_092",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Monsieur Big Volumizing Mascara",
    type: "Mascara",
    image: skuImage("1956176"),
    link: "https://www.sephora.com/product/monsieur-big-mascara-P419848?skuId=1956176"
  }),
  productData({
    code: "MASCARA_093",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Better Than Sex Foreplay Waterproof Mascara Primer",
    type: "Mascara",
    image: skuImage("2693117"),
    link: "https://www.sephora.com/product/too-faced-bts-foreplay-instant-lengthening-lifting-thickening-mascara-primer-P506248?skuId=2693117"
  }),
  productData({
    code: "MASCARA_094",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "mini tartelette™ tubing primer",
    type: "Mascara",
    image: skuImage("2865640"),
    link: "https://www.sephora.com/product/tarte-mini-tartelette-tubing-primer-P515876?skuId=2865640"
  }),
  productData({
    code: "MASCARA_095",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Fluff & Fix 12HR Brow Wax for Lamination Effect",
    type: "Mascara",
    image: skuImage("2761575"),
    link: "https://www.sephora.com/product/fluff-fix-brow-wax-P512742?skuId=2761575"
  }),
  productData({
    code: "MASCARA_096",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "Jumbo GrandeLASH™ - MD Lash Enhancing Serum",
    type: "Mascara",
    image: skuImage("2404713"),
    link: "https://www.sephora.com/product/grande-cosmetics-jumbo-grandelash-trade-md-lash-enhancing-serum-P465760?skuId=2404713"
  }),
  productData({
    code: "MASCARA_097",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "tartelette™ tubing mascara primer",
    type: "Mascara",
    image: skuImage("2865632"),
    link: "https://www.sephora.com/product/tarte-tartelette-tubing-mascara-primer-P515872?skuId=2865632"
  }),
  productData({
    code: "MASCARA_098",
    category: "Makeup > Eye > Mascara",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Push Up Lashes Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2368496"),
    link: "https://www.sephora.com/product/charlotte-tilbury-pillow-talk-push-up-lashes-mascara-P462841?skuId=2368496"
  }),
  productData({
    code: "MASCARA_099",
    category: "Makeup > Eye > Mascara",
    brand: "IT Cosmetics",
    name: "Superhero Elastic Stretch Volumizing and Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1868215"),
    link: "https://www.sephora.com/product/superhero-elastic-stretch-volumizing-mascara-P411396?skuId=1868215"
  }),
  productData({
    code: "MASCARA_100",
    category: "Makeup > Eye > Mascara",
    brand: "Westman Atelier",
    name: "Petite Eye Want You Lengthening + Volumizing Clean Mascara",
    type: "Mascara",
    image: skuImage("2845709"),
    link: "https://www.sephora.com/product/petite-eye-want-you-lengthening-volumizing-clean-mascara-P515664?skuId=2845709"
  }),
  productData({
    code: "MASCARA_101",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Love The Lift Curling + Volumizing Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2711703"),
    link: "https://www.sephora.com/product/love-lift-waterproof-mascara-P510844?skuId=2711703"
  }),
  productData({
    code: "MASCARA_102",
    category: "Makeup > Eye > Mascara",
    brand: "Bobbi Brown",
    name: "Smokey Eye Longwear Volumizing Mascara",
    type: "Mascara",
    image: skuImage("1562024"),
    link: "https://www.sephora.com/product/smokey-eye-mascara-P382581?skuId=1562024"
  }),
  productData({
    code: "MASCARA_103",
    category: "Makeup > Eye > Mascara",
    brand: "SEPHORA COLLECTION",
    name: "Big By Definition Defining & Volumizing Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2607877"),
    link: "https://www.sephora.com/product/sephora-collection-big-by-definition-defining-volumizing-mascara-P503904?skuId=2607877"
  }),
  productData({
    code: "MASCARA_104",
    category: "Makeup > Eye > Mascara",
    brand: "Augustinus Bader",
    name: "The Eyebrow & Lash Enhancing Serum",
    type: "Mascara",
    image: skuImage("2533941"),
    link: "https://www.sephora.com/product/augustinus-bader-the-eyebrow-lash-enhancing-serum-P502588?skuId=2533941"
  }),
  productData({
    code: "MASCARA_105",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "Mini KUSH Big Hit Lifting + Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2894996"),
    link: "https://www.sephora.com/product/mini-kush-big-hit-volumizing-mascara-P519223?skuId=2894996"
  }),
  productData({
    code: "MASCARA_106",
    category: "Makeup > Eye > Mascara",
    brand: "Saie",
    name: "Mini Mascara 101 Lengthening and Lifting",
    type: "Mascara",
    image: skuImage("2492841"),
    link: "https://www.sephora.com/product/saie-mini-mascara-101-lengthening-lifting-P478730?skuId=2492841"
  }),
  productData({
    code: "MASCARA_107",
    category: "Makeup > Eye > Mascara",
    brand: "NARS",
    name: "Climax Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2090090"),
    link: "https://www.sephora.com/product/climax-mascara-P434385?skuId=2090090"
  }),
  productData({
    code: "MASCARA_108",
    category: "Makeup > Eye > Mascara",
    brand: "MAC Cosmetics",
    name: "Extended Play Gigablack Lash Tubing Mascara",
    type: "Mascara",
    image: skuImage("2093789"),
    link: "https://www.sephora.com/product/extended-play-gigablack-lash-P65498712?skuId=2093789"
  }),
  productData({
    code: "MASCARA_109",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Mini Lash Idôle Curl Goddess Curling & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2939015"),
    link: "https://www.sephora.com/product/mini-lash-idole-curl-goddess-curling-volumizing-mascara-P520489?skuId=2939015"
  }),
  productData({
    code: "MASCARA_110",
    category: "Makeup > Eye > Mascara",
    brand: "HUDA BEAUTY",
    name: "Mini 1 Coat WOW! Extra Volumizing and Lifting Mascara",
    type: "Mascara",
    image: skuImage("2739399"),
    link: "https://www.sephora.com/product/huda-beauty-one-coat-wow-mini-mascara-P509426?skuId=2739399"
  }),
  productData({
    code: "MASCARA_111",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "BADgal Bounce Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2844041"),
    link: "https://www.sephora.com/product/badgal-bang-bounce-volumizing-mascara-P514696?skuId=2844041"
  }),
  productData({
    code: "MASCARA_112",
    category: "Makeup > Eye > Mascara",
    brand: "MAC Cosmetics",
    name: "M·A·CStack Volumizing + Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2556132"),
    link: "https://www.sephora.com/product/mac-cosmetics-macstack-mascara-P482028?skuId=2556132"
  }),
  productData({
    code: "MASCARA_113",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "KUSH Lash + Brow Enhancing Serum",
    type: "Mascara",
    image: skuImage("2217545"),
    link: "https://www.sephora.com/product/kush-growhouse-lash-brow-serum-P446824?skuId=2217545"
  }),
  productData({
    code: "MASCARA_114",
    category: "Makeup > Eye > Mascara",
    brand: "Hourglass",
    name: "Caution™ Extreme Lash Mascara",
    type: "Mascara",
    image: skuImage("2087666"),
    link: "https://www.sephora.com/product/caution-extreme-lash-mascara-P433809?skuId=2087666"
  }),
  productData({
    code: "MASCARA_115",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "opening act™ lash primer",
    type: "Mascara",
    image: skuImage("1707835"),
    link: "https://www.sephora.com/product/opening-act-lash-primer-P397383?skuId=1707835"
  }),
  productData({
    code: "MASCARA_116",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "DÉfinicils Waterproof - High Definition Mascara",
    type: "Mascara",
    image: skuImage("724294"),
    link: "https://www.sephora.com/product/definicils-waterproof-high-definition-mascara-P54417?skuId=724294"
  }),
  productData({
    code: "MASCARA_117",
    category: "Makeup > Eye > Mascara",
    brand: "Givenchy",
    name: "Volume Disturbia Mascara",
    type: "Mascara",
    image: skuImage("2822401"),
    link: "https://www.sephora.com/product/mascara-volume-disturbia-P446334?skuId=2822401"
  }),
  productData({
    code: "MASCARA_118",
    category: "Makeup > Eye > Mascara",
    brand: "Grande Cosmetics",
    name: "Mini GrandeLASH - Sensitive Peptide Lash Enhancing Serum",
    type: "Mascara",
    image: skuImage("2967032"),
    link: "https://www.sephora.com/product/mini-grandelash-sensitive-peptide-lash-enhancing-serum-P521794?skuId=2967032"
  }),
  productData({
    code: "MASCARA_119",
    category: "Makeup > Eye > Mascara",
    brand: "Iris&Romeo",
    name: "Mini Lash Up Peptide Volumizing, Curling & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2774446"),
    link: "https://www.sephora.com/product/iris-romeo-mini-lash-up-peptide-volumizing-curling-lengthening-mascara-P510888?skuId=2774446"
  }),
  productData({
    code: "MASCARA_120",
    category: "Makeup > Eye > Mascara",
    brand: "Givenchy",
    name: "L'Interdit Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2748101"),
    link: "https://www.sephora.com/product/givenchy-l-interdit-mascara-P510073?skuId=2748101"
  }),
  productData({
    code: "MASCARA_121",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Mini Better Than Sex Waterproof Mascara",
    type: "Mascara",
    image: skuImage("1834167"),
    link: "https://www.sephora.com/product/better-than-sex-waterproof-mascara-mini-P425855?skuId=1834167"
  }),
  productData({
    code: "MASCARA_122",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Mini Better Than Sex Foreplay Waterproof Mascara Primer",
    type: "Mascara",
    image: skuImage("2693125"),
    link: "https://www.sephora.com/product/mini-better-than-sex-foreplay-mascara-primer-P506827?skuId=2693125"
  }),
  productData({
    code: "MASCARA_123",
    category: "Makeup > Eye > Mascara",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Mini Fantasize Lifting & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2589620"),
    link: "https://www.sephora.com/product/mini-fantasize-lifting-lengthening-mascara-P500501?skuId=2589620"
  }),
  productData({
    code: "MASCARA_124",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "big ego™ lifting & volumizing mascara",
    type: "Mascara",
    image: skuImage("2234326"),
    link: "https://www.sephora.com/product/big-ego-mascara-P444433?skuId=2234326"
  }),
  productData({
    code: "MASCARA_125",
    category: "Makeup > Eye > Mascara",
    brand: "DIOR",
    name: "Diorshow Iconic Overcurl Waterproof Mascara",
    type: "Mascara",
    image: skuImage("1593730"),
    link: "https://www.sephora.com/product/diorshow-iconic-overcurl-waterproof-mascara-P386816?skuId=1593730"
  }),
  productData({
    code: "MASCARA_126",
    category: "Makeup > Eye > Mascara",
    brand: "IT Cosmetics",
    name: "Superhero Volumizing Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2665248"),
    link: "https://www.sephora.com/product/it-cosmetics-superhero-waterproof-mascara-P505648?skuId=2665248"
  }),
  productData({
    code: "MASCARA_127",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Lash Idôle Lash-Lifting & Volumizing Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2516136"),
    link: "https://www.sephora.com/product/lancome-lash-idole-waterproof-mascara-P481823?skuId=2516136"
  }),
  productData({
    code: "MASCARA_128",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "HYPNÔSE DRAMA Instant Full Body Volume Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2859718"),
    link: "https://www.sephora.com/product/hypnose-drama-instant-full-body-volume-waterproof-mascara-P516866?skuId=2859718"
  }),
  productData({
    code: "MASCARA_129",
    category: "Makeup > Eye > Mascara",
    brand: "Givenchy",
    name: "Mini L'Interdit Volumizing & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2749570"),
    link: "https://www.sephora.com/product/givenchy-mini-l-interdit-mascara-P510074?skuId=2749570"
  }),
  productData({
    code: "MASCARA_130",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "lights, camera, splashes™ 4-in-1 volumizing waterproof mascara",
    type: "Mascara",
    image: skuImage("1001775"),
    link: "https://www.sephora.com/product/lights-camera-splashes-waterproof-mascara-P179924?skuId=1001775"
  }),
  productData({
    code: "MASCARA_131",
    category: "Makeup > Eye > Mascara",
    brand: "CLINIQUE",
    name: "Mini High Impact High-Fi™ Full Volume Mascara",
    type: "Mascara",
    image: skuImage("2742872"),
    link: "https://www.sephora.com/product/clinique-mini-high-impact-high-fi-full-volume-mascara-P510414?skuId=2742872"
  }),
  productData({
    code: "MASCARA_132",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini They're Real! Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1395482"),
    link: "https://www.sephora.com/product/they-rsquo-re-real-lengthening-volumizing-mascara-mini-P425953?skuId=1395482"
  }),
  productData({
    code: "MASCARA_133",
    category: "Makeup > Eye > Mascara",
    brand: "HUDA BEAUTY",
    name: "1 Coat WOW! Extra Volumizing and Lifting Mascara",
    type: "Mascara",
    image: skuImage("2691541"),
    link: "https://www.sephora.com/product/1-coat-wow-extra-volumizing-and-lifting-mascara-P506787?skuId=2691541"
  }),
  productData({
    code: "MASCARA_134",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Mini HYPNÔSE DRAMA Instant Full Body Volume Mascara",
    type: "Mascara",
    image: skuImage("2792190"),
    link: "https://www.sephora.com/product/lancome-hypnose-drama-instant-full-body-volume-mascara-P511993?skuId=2792190"
  }),
  productData({
    code: "MASCARA_135",
    category: "Makeup > Eye > Mascara",
    brand: "Armani Beauty",
    name: "Eyes To Kill Lengthening Mascara",
    type: "Mascara",
    image: skuImage("1667864"),
    link: "https://www.sephora.com/product/eyes-to-kill-mascara-P393671?skuId=1667864"
  }),
  productData({
    code: "MASCARA_136",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Mini Ribbon Wrapped Lash Extreme Length Tubing Mascara",
    type: "Mascara",
    image: skuImage("2866630"),
    link: "https://www.sephora.com/product/mini-ribbon-wrapped-lash-extreme-length-tubing-mascara-P516225?skuId=2866630"
  }),
  productData({
    code: "MASCARA_137",
    category: "Makeup > Eye > Mascara",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Fantasize Lifting & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2589612"),
    link: "https://www.sephora.com/product/fantasize-lifting-lengthening-mascara-P500481?skuId=2589612"
  }),
  productData({
    code: "MASCARA_138",
    category: "Makeup > Eye > Mascara",
    brand: "Iris&Romeo",
    name: "Lash Up Peptide Volumizing, Curling & Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2774453"),
    link: "https://www.sephora.com/product/iris-romeo-lash-up-peptide-volumizing-curling-lengthening-mascara-P510895?skuId=2774453"
  }),
  productData({
    code: "MASCARA_139",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Naturally Better Than Sex Lengthening and Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2739191"),
    link: "https://www.sephora.com/product/naturally-better-than-sex-lengthening-volumizing-mascara-P509303?skuId=2739191"
  }),
  productData({
    code: "MASCARA_140",
    category: "Makeup > Eye > Mascara",
    brand: "MAC Cosmetics",
    name: "M·A·CStack Volumizing + Lengthening Mascara Mini",
    type: "Mascara",
    image: skuImage("2556140"),
    link: "https://www.sephora.com/product/mac-cosmetics-mini-macstack-mascara-P482029?skuId=2556140"
  }),
  productData({
    code: "MASCARA_141",
    category: "Makeup > Eye > Mascara",
    brand: "Urban Decay",
    name: "Mini Perversion Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2849628"),
    link: "https://www.sephora.com/product/mini-perversion-vegan-volumizing-mascara-P515198?skuId=2849628"
  }),
  productData({
    code: "MASCARA_142",
    category: "Makeup > Eye > Mascara",
    brand: "Too Faced",
    name: "Mini Naturally Better Than Sex Lengthening and Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2739233"),
    link: "https://www.sephora.com/product/mini-naturally-better-than-sex-lengthening-volumizing-mascara-P509304?skuId=2739233"
  }),
  productData({
    code: "MASCARA_143",
    category: "Makeup > Eye > Mascara",
    brand: "Anastasia Beverly Hills",
    name: "Mini Lash Sculpt Lengthening & Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2707156"),
    link: "https://www.sephora.com/product/mini-lash-sculpt-lengthening-volumizing-mascara-P507642?skuId=2707156"
  }),
  productData({
    code: "MASCARA_144",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Mini Monsieur Big Mascara",
    type: "Mascara",
    image: skuImage("1956184"),
    link: "https://www.sephora.com/product/monsieur-big-mascara-mini-P422464?skuId=1956184"
  }),
  productData({
    code: "MASCARA_145",
    category: "Makeup > Eye > Mascara",
    brand: "HUDA BEAUTY",
    name: "Mini LEGIT LASHES Double-Ended Volumizing and Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2466548"),
    link: "https://www.sephora.com/product/huda-beauty-mini-legit-lashes-double-ended-volumizing-lengthening-mascara-P474837?skuId=2466548"
  }),
  productData({
    code: "MASCARA_146",
    category: "Makeup > Eye > Mascara",
    brand: "ISAMAYA",
    name: "Mascara- Lash Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2855831"),
    link: "https://www.sephora.com/product/mascara-lash-lengthening-mascara-P515466?skuId=2855831"
  }),
  productData({
    code: "MASCARA_147",
    category: "Makeup > Eye > Mascara",
    brand: "Urban Decay",
    name: "Subversion Lash Primer",
    type: "Mascara",
    image: skuImage("1635788"),
    link: "https://www.sephora.com/product/subversion-lash-primer-P387594?skuId=1635788"
  }),
  productData({
    code: "MASCARA_148",
    category: "Makeup > Eye > Mascara",
    brand: "Olaplex",
    name: "Lashbond Building and Enhancing Serum",
    type: "Mascara",
    image: skuImage("2663631"),
    link: "https://www.sephora.com/product/olaplex-lashbond-building-serum-P505536?skuId=2663631"
  }),
  productData({
    code: "MASCARA_149",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini BADgal Bounce Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2844058"),
    link: "https://www.sephora.com/product/mini-badgal-bounce-volumizing-mascara-P514697?skuId=2844058"
  }),
  productData({
    code: "MASCARA_150",
    category: "Makeup > Eye > Mascara",
    brand: "Anastasia Beverly Hills",
    name: "Mini Lash Brag® Jet-Black Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2311322"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-lash-brag-volumizing-mascara-mini-P456591?skuId=2311322"
  }),
  productData({
    code: "MASCARA_151",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "mini lights camera lashes™ volumizing mascara",
    type: "Mascara",
    image: skuImage("2156420"),
    link: "https://www.sephora.com/product/lights-camera-lashes-tm-4-in-1-mascara-mini-P439932?skuId=2156420"
  }),
  productData({
    code: "MASCARA_152",
    category: "Makeup > Eye > Mascara",
    brand: "Gucci",
    name: "Le Magnétisme Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2834620"),
    link: "https://www.sephora.com/product/gucci-le-magnetisme-volumizing-mascara-P514698?skuId=2834620"
  }),
  productData({
    code: "MASCARA_153",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini BADgal BANG! Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2031813"),
    link: "https://www.sephora.com/product/bad-gal-bang-mascara-mini-P428505?skuId=2031813"
  }),
  productData({
    code: "MASCARA_154",
    category: "Makeup > Eye > Mascara",
    brand: "Hourglass",
    name: "Mini Caution™ Extreme Lash Mascara",
    type: "Mascara",
    image: skuImage("2087724"),
    link: "https://www.sephora.com/product/caution-extreme-lash-mascara-mini-P433812?skuId=2087724"
  }),
  productData({
    code: "MASCARA_155",
    category: "Makeup > Eye > Mascara",
    brand: "SIMIHAZE BEAUTY",
    name: "Easy Lash Clean Lift Tubing Mascara",
    type: "Mascara",
    image: skuImage("2633931"),
    link: "https://www.sephora.com/product/easy-lash-clean-lift-mascara-P503300?skuId=2633931"
  }),
  productData({
    code: "MASCARA_156",
    category: "Makeup > Eye > Mascara",
    brand: "MILK MAKEUP",
    name: "RISE Lifting + Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2511681"),
    link: "https://www.sephora.com/product/milk-makeup-rise-mascara-P479643?skuId=2511681"
  }),
  productData({
    code: "MASCARA_157",
    category: "Makeup > Eye > Mascara",
    brand: "Lancôme",
    name: "Monsieur Big Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2059491"),
    link: "https://www.sephora.com/product/monsieur-big-waterproof-mascara-P429440?skuId=2059491"
  }),
  productData({
    code: "MASCARA_158",
    category: "Makeup > Eye > Mascara",
    brand: "HUDA BEAUTY",
    name: "LEGIT LASHES Double-Ended Volumizing and Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2356681"),
    link: "https://www.sephora.com/product/huda-beauty-legit-lashes-double-ended-volumizing-lengthening-mascara-P98466189?skuId=2356681"
  }),
  productData({
    code: "MASCARA_159",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini Roller Lash Curling & Lifting Mascara",
    type: "Mascara",
    image: skuImage("1728492"),
    link: "https://www.sephora.com/product/roller-lash-curling-lifting-mascara-mini-P425947?skuId=1728492"
  }),
  productData({
    code: "MASCARA_160",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "They're Real! Magnet Extreme Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2328110"),
    link: "https://www.sephora.com/product/benefit-cosmetics-they-re-real-magnet-extreme-lengthening-mascara-P469203?skuId=2328110"
  }),
  productData({
    code: "MASCARA_161",
    category: "Makeup > Eye > Mascara",
    brand: "PAT McGRATH LABS",
    name: "FetishEyes™ Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2193795"),
    link: "https://www.sephora.com/product/fetish-eyes-mascara-P440967?skuId=2193795"
  }),
  productData({
    code: "MASCARA_162",
    category: "Makeup > Eye > Mascara",
    brand: "CLINIQUE",
    name: "High Impact High-Fi™ Full Volume Mascara",
    type: "Mascara",
    image: skuImage("2742872"),
    link: "https://www.sephora.com/product/high-impact-high-fi-tm-full-volume-mascara-P507084?skuId=2742872"
  }),
  productData({
    code: "MASCARA_163",
    category: "Makeup > Eye > Mascara",
    brand: "tarte",
    name: "mini big ego™ lifting & volumizing mascara",
    type: "Mascara",
    image: skuImage("2254605"),
    link: "https://www.sephora.com/product/big-ego-mascara-mini-P446871?skuId=2254605"
  }),
  productData({
    code: "MASCARA_164",
    category: "Makeup > Eye > Mascara",
    brand: "Benefit Cosmetics",
    name: "Mini They're Real! Magnet Extreme Lengthening Mascara",
    type: "Mascara",
    image: skuImage("2328128"),
    link: "https://www.sephora.com/product/benefit-cosmetics-mini-tar-magnet-mascara-P469438?skuId=2328128"
  }),
  productData({
    code: "MASCARA_165",
    category: "Makeup > Eye > Mascara",
    brand: "PAT McGRATH LABS",
    name: "Dark Star Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2316735"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-dark-star-mascara-P460745?skuId=2316735"
  }),
  productData({
    code: "MASCARA_166",
    category: "Makeup > Eye > Mascara",
    brand: "Urban Decay",
    name: "Perversion Waterproof Mascara",
    type: "Mascara",
    image: skuImage("2203198"),
    link: "https://www.sephora.com/product/perversion-waterproof-mascara-P445423?skuId=2203198"
  }),
  productData({
    code: "MASCARA_167",
    category: "Makeup > Eye > Mascara",
    brand: "Bobbi Brown",
    name: "Eye Opening Volumizing Mascara",
    type: "Mascara",
    image: skuImage("1780667"),
    link: "https://www.sephora.com/product/eye-opening-mascara-P403974?skuId=1780667"
  }),
  productData({
    code: "MASCARA_168",
    category: "Makeup > Eye > Mascara",
    brand: "Anastasia Beverly Hills",
    name: "Lash Brag® Jet-Black Volumizing Mascara",
    type: "Mascara",
    image: skuImage("2311322"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-lash-brag-volumizing-mascara-P455981?skuId=2311322"
  }),

  // ==================================================
  // Makeup > Eye > Eyebrow Makeup
  // Products: 121
  // ==================================================
  productData({
    code: "EYEBROW_001",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "ArchiBrow Microblade Hair-Like Eyebrow Detailing Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2934271"),
    link: "https://www.sephora.com/product/archibrow-pencil-P520096?skuId=2934271"
  }),
  productData({
    code: "EYEBROW_002",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Retractable EyeBrow Pencil - Waterproof",
    type: "Eyebrow Makeup",
    image: skuImage("2243012"),
    link: "https://www.sephora.com/product/retractable-brow-pencil-waterproof-P286513?skuId=2243012"
  }),
  productData({
    code: "EYEBROW_003",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Grande Cosmetics",
    name: "GrandeBROW 2-In-1 Tinted Brow Gel + Brow Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2589810"),
    link: "https://www.sephora.com/product/grande-cosmetics-grandebrow-tinted-brow-gel-grande-brow-enhancing-serum-P503722?skuId=2589810"
  }),
  productData({
    code: "EYEBROW_004",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Wiz® Ultra-Slim Precision Eyebrow Defining Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("1488337"),
    link: "https://www.sephora.com/product/brow-wiz-P202633?skuId=1488337"
  }),
  productData({
    code: "EYEBROW_005",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Rare Beauty by Selena Gomez",
    name: "Brow Harmony Flexible Lifting and Laminating Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2728186"),
    link: "https://www.sephora.com/product/brow-harmony-flexible-lifting-gel-P507797?skuId=2728186"
  }),
  productData({
    code: "EYEBROW_006",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Grande Cosmetics",
    name: "GrandeBROW Brow Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2114817"),
    link: "https://www.sephora.com/product/grandebrow-brow-enhancing-serum-P419218?skuId=2114817"
  }),
  productData({
    code: "EYEBROW_007",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Precisely, My Brow Tinted Eyebrow Wax",
    type: "Eyebrow Makeup",
    image: skuImage("2744811"),
    link: "https://www.sephora.com/product/benefit-cosmetics-precisely-my-brow-wax-P510172?skuId=2744811"
  }),
  productData({
    code: "EYEBROW_008",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Rare Beauty by Selena Gomez",
    name: "Brow Harmony Precision Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2689289"),
    link: "https://www.sephora.com/product/brow-harmony-precision-pencil-P506703?skuId=2689289"
  }),
  productData({
    code: "EYEBROW_009",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Grande Cosmetics",
    name: "Mini Cult Faves Lash and Brow Serum Set",
    type: "Eyebrow Makeup",
    image: skuImage("2869543"),
    link: "https://www.sephora.com/product/grande-cosmetics-mini-cult-faves-lash-brow-serum-set-P516554?skuId=2869543"
  }),
  productData({
    code: "EYEBROW_010",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Mighty Fine Waterproof Brow Pen",
    type: "Eyebrow Makeup",
    image: skuImage("2843852"),
    link: "https://www.sephora.com/product/mighty-fine-waterproof-brow-pen-P514691?skuId=2843852"
  }),
  productData({
    code: "EYEBROW_011",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "24-HR Brow Setter Clear Brow Gel with Lamination Effect",
    type: "Eyebrow Makeup",
    image: skuImage("1935774"),
    link: "https://www.sephora.com/product/24-hr-brow-setter-P409242?skuId=1935774"
  }),
  productData({
    code: "EYEBROW_012",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Precisely, My Brow Pencil Waterproof Eyebrow Definer",
    type: "Eyebrow Makeup",
    image: skuImage("2086759"),
    link: "https://www.sephora.com/product/precisely-my-brow-pencil-P408219?skuId=2086759"
  }),
  productData({
    code: "EYEBROW_013",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "DIPBROW® Waterproof, Smudge-Proof Brow Pomade",
    type: "Eyebrow Makeup",
    image: skuImage("1578699"),
    link: "https://www.sephora.com/product/dipbrow-pomade-P384060?skuId=1578699"
  }),
  productData({
    code: "EYEBROW_014",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Freeze® Gel Extreme-Hold Lifting & Laminating Clear Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2732220"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-brow-freeze-gel-P509088?skuId=2732220"
  }),
  productData({
    code: "EYEBROW_015",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Mini Gimme Brow+ Tinted Volumizing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2181329"),
    link: "https://www.sephora.com/product/gimme-brow-volumizing-eyebrow-gel-mini-P440700?skuId=2181329"
  }),
  productData({
    code: "EYEBROW_016",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Mini Brow Sculpt Shaping and Lifting Gel with Strong Hold",
    type: "Eyebrow Makeup",
    image: skuImage("2971075"),
    link: "https://www.sephora.com/product/mini-brow-sculpt-shaping-lifting-gel-with-strong-hold-P522175?skuId=2971075"
  }),
  productData({
    code: "EYEBROW_017",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Powder Duo Dual-Shade Fill & Define",
    type: "Eyebrow Makeup",
    image: skuImage("929778"),
    link: "https://www.sephora.com/product/brow-powder-duo-P69300?skuId=929778"
  }),
  productData({
    code: "EYEBROW_018",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Tinted Volumizing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2617199"),
    link: "https://www.sephora.com/product/sephora-collection-tinted-volumizing-eyebrow-gel-P505527?skuId=2617199"
  }),
  productData({
    code: "EYEBROW_019",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MERIT",
    name: "Brow 1980 Volumizing Tinted Eyebrow Gel-Pomade",
    type: "Eyebrow Makeup",
    image: skuImage("2787067"),
    link: "https://www.sephora.com/product/merit-brow-1980-volumizing-tinted-eyebrow-gel-pomade-P512187?skuId=2787067"
  }),
  productData({
    code: "EYEBROW_020",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "MicroStroke Brush Tip Eyebrow Detailing Pen with 24-Hour Wear",
    type: "Eyebrow Makeup",
    image: skuImage("2882306"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-microstroke-detailing-brow-pen-24-hour-wear-P517056?skuId=2882306"
  }),
  productData({
    code: "EYEBROW_021",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Kosas",
    name: "Air Brow Tinted Clean Volumizing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2429629"),
    link: "https://www.sephora.com/product/kosas-air-brow-tinted-clean-volumizing-eyebrow-gel-P471049?skuId=2429629"
  }),
  productData({
    code: "EYEBROW_022",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Mini Precisely, My Brow Pencil Waterproof Eyebrow Definer",
    type: "Eyebrow Makeup",
    image: skuImage("2305092"),
    link: "https://www.sephora.com/product/precisely-my-brow-pencil-ultra-fine-shape-define-mini-P427712?skuId=2305092"
  }),
  productData({
    code: "EYEBROW_023",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Fenty Beauty by Rihanna",
    name: "Brow MVP Ultra Fine Brow Pencil & Styler",
    type: "Eyebrow Makeup",
    image: skuImage("2268522"),
    link: "https://www.sephora.com/product/brow-mvp-ultra-fine-brow-pencil-styler-P448878?skuId=2268522"
  }),
  productData({
    code: "EYEBROW_024",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Definer 3-in-1 Easy Define, Fill, & Detail Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2372548"),
    link: "https://www.sephora.com/product/brow-definer-P404827?skuId=2372548"
  }),
  productData({
    code: "EYEBROW_025",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "The Ordinary",
    name: "Multi-Peptide Lash and Brow Serum for Thicker, Fuller Looking Lashes & Brows",
    type: "Eyebrow Makeup",
    image: skuImage("2532588"),
    link: "https://www.sephora.com/product/multi-peptide-lash-brow-serum-P500423?skuId=2532588"
  }),
  productData({
    code: "EYEBROW_026",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Clear Brow Gel Flexible Medium-Hold Eyebrow Setter",
    type: "Eyebrow Makeup",
    image: skuImage("2914802"),
    link: "https://www.sephora.com/product/brow-gel-P69304?skuId=2914802"
  }),
  productData({
    code: "EYEBROW_027",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Instant Sculpt Retractable Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2932556"),
    link: "https://www.sephora.com/product/instant-sculpt-retractable-eyebrow-pencil-P520700?skuId=2932556"
  }),
  productData({
    code: "EYEBROW_028",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Gimme Brow+ Tinted Volumizing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2080224"),
    link: "https://www.sephora.com/product/gimme-brow-P409239?skuId=2080224"
  }),
  productData({
    code: "EYEBROW_029",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH Fiber Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2100501"),
    link: "https://www.sephora.com/product/kush-fiber-brow-gel-P433125?skuId=2100501"
  }),
  productData({
    code: "EYEBROW_030",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Brow Wiz® Ultra-Slim Precision Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2748747"),
    link: "https://www.sephora.com/product/mini-brow-wiz-r-ultra-slim-precision-brow-pencil-P509420?skuId=2748747"
  }),
  productData({
    code: "EYEBROW_031",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Goof Proof Waterproof Easy Shape & Fill Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2217511"),
    link: "https://www.sephora.com/product/goof-proof-brow-pencil-P408218?skuId=2217511"
  }),
  productData({
    code: "EYEBROW_032",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Fill & Define Powder-Finish Perfect Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("764936"),
    link: "https://www.sephora.com/product/perfect-brow-pencil-P69305?skuId=764936"
  }),
  productData({
    code: "EYEBROW_033",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Kosas",
    name: "Brow Pop Nano Ultra-Fine Detailing + Feathering Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2687416"),
    link: "https://www.sephora.com/product/brow-pop-nano-ultra-fine-detailing-feathering-eyebrow-pencil-P506794?skuId=2687416"
  }),
  productData({
    code: "EYEBROW_034",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Brow Sculpt Shaping and Lifting Gel with Strong Hold",
    type: "Eyebrow Makeup",
    image: skuImage("2878353"),
    link: "https://www.sephora.com/product/brow-sculpt-P516251?skuId=2878353"
  }),
  productData({
    code: "EYEBROW_035",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Fluff & Fix 12HR Brow Wax for Lamination Effect",
    type: "Eyebrow Makeup",
    image: skuImage("2761575"),
    link: "https://www.sephora.com/product/fluff-fix-brow-wax-P512742?skuId=2761575"
  }),
  productData({
    code: "EYEBROW_036",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Charlotte Tilbury",
    name: "Legendary Brows Tinted Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2432797"),
    link: "https://www.sephora.com/product/legendary-brows-eyebrow-gel-P434526?skuId=2432797"
  }),
  productData({
    code: "EYEBROW_037",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "PATRICK TA",
    name: "Major Brow Defining Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2598886"),
    link: "https://www.sephora.com/product/brow-pencil-P501193?skuId=2598886"
  }),
  productData({
    code: "EYEBROW_038",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Volumizing Tinted Long-Wearing Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2976165"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-volumizing-tinted-brow-gel-P513726?skuId=2976165"
  }),
  productData({
    code: "EYEBROW_039",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Glossier",
    name: "Boy Brow Volumizing Eyebrow Gel-Pomade",
    type: "Eyebrow Makeup",
    image: skuImage("2702173"),
    link: "https://www.sephora.com/product/glossier-boy-brow-volumizing-eyebrow-gel-pomade-P504526?skuId=2702173"
  }),
  productData({
    code: "EYEBROW_040",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Mini 24-HR Brow Setter Clear Brow Gel with Lamination Effect",
    type: "Eyebrow Makeup",
    image: skuImage("2295046"),
    link: "https://www.sephora.com/product/24-hr-brow-setter-mini-P450856?skuId=2295046"
  }),
  productData({
    code: "EYEBROW_041",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MAC Cosmetics",
    name: "Pro Locked Brow Gel with 12HR Sweat-Resistant Hold",
    type: "Eyebrow Makeup",
    image: skuImage("2958460"),
    link: "https://www.sephora.com/product/mac-pro-locked-brow-gel-P521489?skuId=2958460"
  }),
  productData({
    code: "EYEBROW_042",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Highlighting & Concealing Eyebrow Pro Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("1622075"),
    link: "https://www.sephora.com/product/pro-pencil-P386783?skuId=1622075"
  }),
  productData({
    code: "EYEBROW_043",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Brow Freeze® Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2732212"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-brow-freeze-gel-P509416?skuId=2732212"
  }),
  productData({
    code: "EYEBROW_044",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Bobbi Brown",
    name: "Precise 24-Hour Ultra Slim Waterproof Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2839751"),
    link: "https://www.sephora.com/product/precise-brow-pencil-P514606?skuId=2839751"
  }),
  productData({
    code: "EYEBROW_045",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "DIOR",
    name: "Diorshow Brow Styler Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2669596"),
    link: "https://www.sephora.com/product/diorshow-brow-styler-ultra-fine-precision-brow-pencil-P238433?skuId=2669596"
  }),
  productData({
    code: "EYEBROW_046",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Brow Haul of Fame Brow Bestsellers Set",
    type: "Eyebrow Makeup",
    image: skuImage("2773828"),
    link: "https://www.sephora.com/product/benefit-cosmetics-brow-haul-fame-set-P511578?skuId=2773828"
  }),
  productData({
    code: "EYEBROW_047",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "ILIA",
    name: "In Frame Clear Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2637999"),
    link: "https://www.sephora.com/product/ilia-in-frame-clear-eyebrow-gel-p506382-P506382?skuId=2637999"
  }),
  productData({
    code: "EYEBROW_048",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH Brow Shadow Stick Waterproof Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2664944"),
    link: "https://www.sephora.com/product/milk-makeup-kush-soft-shadow-brow-stick-P505738?skuId=2664944"
  }),
  productData({
    code: "EYEBROW_049",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Shape & Set Clear Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2617223"),
    link: "https://www.sephora.com/product/sephora-collection-shape-set-clear-eyebrow-gel-P505560?skuId=2617223"
  }),
  productData({
    code: "EYEBROW_050",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Soft Arch Brow Kit",
    type: "Eyebrow Makeup",
    image: skuImage("2934370"),
    link: "https://www.sephora.com/product/spring-brow-kit-P520092?skuId=2934370"
  }),
  productData({
    code: "EYEBROW_051",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Glossier",
    name: "Boy Brow Arch 2-in-1 Longwear Pomade Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2792794"),
    link: "https://www.sephora.com/product/glossier-boy-brow-arch-2-in-1-longwear-pomade-eyebrow-pencil-P513331?skuId=2792794"
  }),
  productData({
    code: "EYEBROW_052",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Urban Decay",
    name: "Slick Day Strong-Hold Clear Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2738060"),
    link: "https://www.sephora.com/product/urban-decay-slick-day-strong-hold-clear-brow-gel-P509476?skuId=2738060"
  }),
  productData({
    code: "EYEBROW_053",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Brow Tint Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2868479"),
    link: "https://www.sephora.com/product/refy-beauty-brow-tint-P505347?skuId=2868479"
  }),
  productData({
    code: "EYEBROW_054",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Freeze® Flexible-Hold Clear Lifting & Sculpting Wax",
    type: "Eyebrow Makeup",
    image: skuImage("2411486"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-brow-freeze-styling-wax-P468341?skuId=2411486"
  }),
  productData({
    code: "EYEBROW_055",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Kosas",
    name: "Air Brow Clear + Clean Lifting Treatment Eyebrow Gel with Lamination Effect",
    type: "Eyebrow Makeup",
    image: skuImage("2429579"),
    link: "https://www.sephora.com/product/kosas-air-brow-clean-lifting-treatment-eyebrow-gel-P471048?skuId=2429579"
  }),
  productData({
    code: "EYEBROW_056",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "ILIA",
    name: "In Full Micro-Tip Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2638070"),
    link: "https://www.sephora.com/product/ilia-in-full-micro-tip-eyebrow-pencil-P506360?skuId=2638070"
  }),
  productData({
    code: "EYEBROW_057",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "PRO Brow Brush #20",
    type: "Eyebrow Makeup",
    image: skuImage("2290245"),
    link: "https://www.sephora.com/product/pro-brow-brush-20-P403632?skuId=2290245"
  }),
  productData({
    code: "EYEBROW_058",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Kosas",
    name: "Brow Pop Dual-Action Filling and Shaping Easy Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2429736"),
    link: "https://www.sephora.com/product/kosas-brow-pop-dual-action-defining-eyebrow-pencil-P471047?skuId=2429736"
  }),
  productData({
    code: "EYEBROW_059",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Urban Decay",
    name: "Brow Blade 2-in-1 Eyebrow Pen + Waterproof Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2182319"),
    link: "https://www.sephora.com/product/brow-blade-2-in-1-eyebrow-pen-waterproof-pencil-P440905?skuId=2182319"
  }),
  productData({
    code: "EYEBROW_060",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Dual-Ended Firm Angled Eyebrow Brush #12",
    type: "Eyebrow Makeup",
    image: skuImage("1578657"),
    link: "https://www.sephora.com/product/brush-12-P384059?skuId=1578657"
  }),
  productData({
    code: "EYEBROW_061",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Long-Wearing Natural Volumizing Tinted Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2792083"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-volumizing-tinted-brow-gel-P513739?skuId=2792083"
  }),
  productData({
    code: "EYEBROW_062",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Clear Brow Gel Flexible Medium-Hold Eyebrow Setter",
    type: "Eyebrow Makeup",
    image: skuImage("2914810"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-clear-brow-gel-mini-P454751?skuId=2914810"
  }),
  productData({
    code: "EYEBROW_063",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Brow Definer 3-in-1 Triangle Tip",
    type: "Eyebrow Makeup",
    image: skuImage("2748440"),
    link: "https://www.sephora.com/product/mini-brow-definer-3-in-1-triangle-tip-P509411?skuId=2748440"
  }),
  productData({
    code: "EYEBROW_064",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Hubba Brow Brow Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2694396"),
    link: "https://www.sephora.com/product/hubba-brow-care-serum-P506894?skuId=2694396"
  }),
  productData({
    code: "EYEBROW_065",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Goof Proof Waterproof Brow-Filling Powder",
    type: "Eyebrow Makeup",
    image: skuImage("2662310"),
    link: "https://www.sephora.com/product/goof-proof-brow-powder-P506072?skuId=2662310"
  }),
  productData({
    code: "EYEBROW_066",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Hourglass",
    name: "Arch Brow Micro Sculpting Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2251544"),
    link: "https://www.sephora.com/product/arch-brow-micro-sculpting-pencil-P447359?skuId=2251544"
  }),
  productData({
    code: "EYEBROW_067",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Precisely, My Brow Detailer Microfine Waterproof Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2744803"),
    link: "https://www.sephora.com/product/benefit-cosmetics-precisely-detailer-pencil-P510190?skuId=2744803"
  }),
  productData({
    code: "EYEBROW_068",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MAKE UP FOR EVER",
    name: "Aqua Resist Waterproof Eyebrow Definer Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2460996"),
    link: "https://www.sephora.com/product/make-up-for-ever-aqua-resist-waterproof-eyebrow-definer-pencil-P472988?skuId=2460996"
  }),
  productData({
    code: "EYEBROW_069",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Kulfi",
    name: "Free The Brow Volumizing Flexible Hold Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2743466"),
    link: "https://www.sephora.com/product/kulfi-free-brow-clear-brow-gel-P509873?skuId=2743466"
  }),
  productData({
    code: "EYEBROW_070",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Dream Sheen Waterproof Tinted Brow Glaze Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2975324"),
    link: "https://www.sephora.com/product/dream-sheen-brow-glaze-P522182?skuId=2975324"
  }),
  productData({
    code: "EYEBROW_071",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Brow Freeze® Extreme Hold Laminated-Look Sculpting Wax",
    type: "Eyebrow Makeup",
    image: skuImage("2732204"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-brow-freeze-extreme-hold-laminated-look-sculpting-wax-P510015?skuId=2732204"
  }),
  productData({
    code: "EYEBROW_072",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Charlotte Tilbury",
    name: "Brow Cheat Refillable Hair-Like Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2432649"),
    link: "https://www.sephora.com/product/charlotte-tilbury-brow-cheat-P470203?skuId=2432649"
  }),
  productData({
    code: "EYEBROW_073",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Dual-Ended Angled Powder Eyebrow Brush 7B",
    type: "Eyebrow Makeup",
    image: skuImage("1908284"),
    link: "https://www.sephora.com/product/brush-7b-P69517?skuId=1908284"
  }),
  productData({
    code: "EYEBROW_074",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MERIT",
    name: "Brow 1990 Ultra Fine Eyebrow Gel Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2787109"),
    link: "https://www.sephora.com/product/merit-brow-1990-ultra-fine-eyebrow-gel-pencil-P512188?skuId=2787109"
  }),
  productData({
    code: "EYEBROW_075",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "LAWLESS",
    name: "Hold Up Soft Set Creamy Eyebrow Wax",
    type: "Eyebrow Makeup",
    image: skuImage("2590925"),
    link: "https://www.sephora.com/product/hold-up-soft-set-creamy-brow-wax-P502170?skuId=2590925"
  }),
  productData({
    code: "EYEBROW_076",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MAKEUP BY MARIO",
    name: "Master Blade® Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2468791"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-blade-brow-pencil-P475576?skuId=2468791"
  }),
  productData({
    code: "EYEBROW_077",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2868461"),
    link: "https://www.sephora.com/product/refy-beauty-brow-pencil-P473118?skuId=2868461"
  }),
  productData({
    code: "EYEBROW_078",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH Clear Eyebrow Lamination Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2669067"),
    link: "https://www.sephora.com/product/kush-clear-eyebrow-lamination-gel-P506000?skuId=2669067"
  }),
  productData({
    code: "EYEBROW_079",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH High Roll Defining Tubing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2770253"),
    link: "https://www.sephora.com/product/milk-makeup-kush-high-roll-defining-tubing-eyebrow-gel-P511575?skuId=2770253"
  }),
  productData({
    code: "EYEBROW_080",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Hourglass",
    name: "Arch Brow Sculpting Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("1454271"),
    link: "https://www.sephora.com/product/arch-brow-sculpting-pencil-P376457?skuId=1454271"
  }),
  productData({
    code: "EYEBROW_081",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Brow Pomade",
    type: "Eyebrow Makeup",
    image: skuImage("2889418"),
    link: "https://www.sephora.com/product/refy-beauty-brow-pomade-P473119?skuId=2889418"
  }),
  productData({
    code: "EYEBROW_082",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Westman Atelier",
    name: "Bonne Brow Defining Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2570356"),
    link: "https://www.sephora.com/product/westman-atelier-bonne-brow-defining-pencil-P482557?skuId=2570356"
  }),
  productData({
    code: "EYEBROW_083",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Flexible Hold Tinted Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("829713"),
    link: "https://www.sephora.com/product/tinted-brow-gel-P187202?skuId=829713"
  }),
  productData({
    code: "EYEBROW_084",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Hourglass",
    name: "Arch Brow Volumizing Fiber Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2029817"),
    link: "https://www.sephora.com/product/arch-brow-volumizing-fiber-gel-P427516?skuId=2029817"
  }),
  productData({
    code: "EYEBROW_085",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "POWmade Waterproof Brow Pomade",
    type: "Eyebrow Makeup",
    image: skuImage("2496792"),
    link: "https://www.sephora.com/product/benefit-cosmetics-powmade-brow-pomade-P474932?skuId=2496792"
  }),
  productData({
    code: "EYEBROW_086",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Grande Cosmetics",
    name: "Mini GrandeBROW Brow Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2227320"),
    link: "https://www.sephora.com/product/grandebrow-brow-enhancing-serum-mini-P444604?skuId=2227320"
  }),
  productData({
    code: "EYEBROW_087",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Highlighting Duo Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("1118819"),
    link: "https://www.sephora.com/product/brow-duality-P224610?skuId=1118819"
  }),
  productData({
    code: "EYEBROW_088",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "SEPHORA COLLECTION",
    name: "Brow Scissor",
    type: "Eyebrow Makeup",
    image: skuImage("2636306"),
    link: "https://www.sephora.com/product/brow-scissor-P506831?skuId=2636306"
  }),
  productData({
    code: "EYEBROW_089",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "IT Cosmetics",
    name: "Brow Power Universal Brow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("1868207"),
    link: "https://www.sephora.com/product/brow-power-universal-brow-pencil-P411397?skuId=1868207"
  }),
  productData({
    code: "EYEBROW_090",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Eyebrow Makeup",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "EYEBROW_091",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Fluff Up Brow Flexible Brow-Texturizing Wax",
    type: "Eyebrow Makeup",
    image: skuImage("2641751"),
    link: "https://www.sephora.com/product/benefit-cosmetics-fluff-up-brow-flexible-brow-texturizing-wax-P503681?skuId=2641751"
  }),
  productData({
    code: "EYEBROW_092",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Eyebrow Shaping Stencil Set",
    type: "Eyebrow Makeup",
    image: skuImage("765800"),
    link: "https://www.sephora.com/product/classic-stencils-P69600?skuId=765800"
  }),
  productData({
    code: "EYEBROW_093",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Slant-Tip Stainless-Steel Precision Tweezers",
    type: "Eyebrow Makeup",
    image: skuImage("765172"),
    link: "https://www.sephora.com/product/tweezers-P69502?skuId=765172"
  }),
  productData({
    code: "EYEBROW_094",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Vegamour",
    name: "GRO Volumizing Brow Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2473254"),
    link: "https://www.sephora.com/product/vegamour-vegabrow-volumizing-serum-P473010?skuId=2473254"
  }),
  productData({
    code: "EYEBROW_095",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH Clear Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2100485"),
    link: "https://www.sephora.com/product/kush-clear-brow-gel-P433124?skuId=2100485"
  }),
  productData({
    code: "EYEBROW_096",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "LYS Beauty",
    name: "Secure Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2719094"),
    link: "https://www.sephora.com/product/secure-brow-gel-P508752?skuId=2719094"
  }),
  productData({
    code: "EYEBROW_097",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Olaplex",
    name: "Browbond Building Serum Eyebrow Enhancer",
    type: "Eyebrow Makeup",
    image: skuImage("2764140"),
    link: "https://www.sephora.com/product/olaplex-brow-bond-eyebrow-serum-P510817?skuId=2764140"
  }),
  productData({
    code: "EYEBROW_098",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Glossier",
    name: "Brow Flick Microfine Detailing Eyebrow Pen",
    type: "Eyebrow Makeup",
    image: skuImage("2649127"),
    link: "https://www.sephora.com/product/glossier-brow-flick-microfine-detailing-eyebrow-pen-P504789?skuId=2649127"
  }),
  productData({
    code: "EYEBROW_099",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Genius® Eyebrow Conditioning Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2586261"),
    link: "https://www.sephora.com/product/brow-genius-brow-serum-P500402?skuId=2586261"
  }),
  productData({
    code: "EYEBROW_100",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Iconic London",
    name: "Liquid Brow Silk Max Hold Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2577062"),
    link: "https://www.sephora.com/product/iconic-london-liquid-brow-silk-max-hold-P482679?skuId=2577062"
  }),
  productData({
    code: "EYEBROW_101",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MAKEUP BY MARIO",
    name: "Master Hold Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2468882"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-hold-brow-gel-P475575?skuId=2468882"
  }),
  productData({
    code: "EYEBROW_102",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "MILK MAKEUP",
    name: "KUSH Lash + Brow Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2217545"),
    link: "https://www.sephora.com/product/kush-growhouse-lash-brow-serum-P446824?skuId=2217545"
  }),
  productData({
    code: "EYEBROW_103",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Hourglass",
    name: "Arch Brow Shaping Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2029775"),
    link: "https://www.sephora.com/product/arch-brow-shaping-gel-P427605?skuId=2029775"
  }),
  productData({
    code: "EYEBROW_104",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Augustinus Bader",
    name: "The Eyebrow & Lash Enhancing Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2533941"),
    link: "https://www.sephora.com/product/augustinus-bader-the-eyebrow-lash-enhancing-serum-P502588?skuId=2533941"
  }),
  productData({
    code: "EYEBROW_105",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Dual-Ended Filling and Detailing Eyebrow Brush #14",
    type: "Eyebrow Makeup",
    image: skuImage("1721968"),
    link: "https://www.sephora.com/product/brush-14-P397498?skuId=1721968"
  }),
  productData({
    code: "EYEBROW_106",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Charlotte Tilbury",
    name: "Brow Fix Clear Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2432821"),
    link: "https://www.sephora.com/product/charlotte-tilbury-brow-fix-brow-gel-P470208?skuId=2432821"
  }),
  productData({
    code: "EYEBROW_107",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Urban Decay",
    name: "Big Bush Volumizing Tinted Brow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2738003"),
    link: "https://www.sephora.com/product/urban-decay-big-bush-volumizing-tinted-brow-gel-P509460?skuId=2738003"
  }),
  productData({
    code: "EYEBROW_108",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "TWEEZERMAN",
    name: "Pink Perfection Petite Tweeze Set",
    type: "Eyebrow Makeup",
    image: skuImage("1457688"),
    link: "https://www.sephora.com/product/hot-pink-petite-tweeze-set-P377523?skuId=1457688"
  }),
  productData({
    code: "EYEBROW_109",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Gimme Brow+ Volumizing  Fiber Eyebrow Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2601292"),
    link: "https://www.sephora.com/product/gimmie-brow-volumizing-fiber-eyebrow-pencil-P500840?skuId=2601292"
  }),
  productData({
    code: "EYEBROW_110",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Melt Cosmetics",
    name: "Perfectionist Brow Ultra-Precision Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("2657773"),
    link: "https://www.sephora.com/product/melt-cosmetics-perfectionist-brow-pencil-P504891?skuId=2657773"
  }),
  productData({
    code: "EYEBROW_111",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brow Primer Colorless Wax Pencil",
    type: "Eyebrow Makeup",
    image: skuImage("975334"),
    link: "https://www.sephora.com/product/brow-fix-P173317?skuId=975334"
  }),
  productData({
    code: "EYEBROW_112",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Benefit Cosmetics",
    name: "Jumbo Gimme Brow+ Volumizing Eyebrow Gel",
    type: "Eyebrow Makeup",
    image: skuImage("2305654"),
    link: "https://www.sephora.com/product/benefit-cosmetics-gimme-brow-volumizing-eyebrow-gel-jumbo-P457461?skuId=2305654"
  }),
  productData({
    code: "EYEBROW_113",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Brush #20",
    type: "Eyebrow Makeup",
    image: skuImage("1622083"),
    link: "https://www.sephora.com/product/brush-20-P386784?skuId=1622083"
  }),
  productData({
    code: "EYEBROW_114",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Angled Cut Brush - Small 15",
    type: "Eyebrow Makeup",
    image: skuImage("765677"),
    link: "https://www.sephora.com/product/angled-cut-brush-small-15-P69512?skuId=765677"
  }),
  productData({
    code: "EYEBROW_115",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "PATRICK TA",
    name: "Dual-Ended Brow Brush",
    type: "Eyebrow Makeup",
    image: skuImage("2340271"),
    link: "https://www.sephora.com/product/patrick-ta-brow-brush-P456593?skuId=2340271"
  }),
  productData({
    code: "EYEBROW_116",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "TWEEZERMAN",
    name: "Stainless Steel Slant Tweezer",
    type: "Eyebrow Makeup",
    image: skuImage("2192946"),
    link: "https://www.sephora.com/product/stainless-steel-slant-tweezer-P375640?skuId=2192946"
  }),
  productData({
    code: "EYEBROW_117",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Virtue",
    name: "Flourish® Brow Density Booster Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2638351"),
    link: "https://www.sephora.com/product/virtue-flourish-brow-density-booster-serum-P506265?skuId=2638351"
  }),
  productData({
    code: "EYEBROW_118",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "Anastasia Beverly Hills",
    name: "Mini Brow Genius® Eyebrow Conditioning Serum",
    type: "Eyebrow Makeup",
    image: skuImage("2708188"),
    link: "https://www.sephora.com/product/mini-brow-genius-r-conditioning-brow-serum-P507673?skuId=2708188"
  }),
  productData({
    code: "EYEBROW_119",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "TWEEZERMAN",
    name: "Pink Perfection Slant Tweezer",
    type: "Eyebrow Makeup",
    image: skuImage("1457621"),
    link: "https://www.sephora.com/product/hot-pink-slant-tweezer-P377005?skuId=1457621"
  }),
  productData({
    code: "EYEBROW_120",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "REFY",
    name: "Mini Brow Sculpt and Glow and Sculpt Primer Set",
    type: "Eyebrow Makeup",
    image: skuImage("2802031"),
    link: "https://www.sephora.com/product/refy-beauty-mini-brow-sculpt-and-sculpt-face-primer-set-P512795?skuId=2802031"
  }),
  productData({
    code: "EYEBROW_121",
    category: "Makeup > Eye > Eyebrow Makeup",
    brand: "TWEEZERMAN",
    name: "Pink Perfection Pointed Slant Tweezer",
    type: "Eyebrow Makeup",
    image: skuImage("1457647"),
    link: "https://www.sephora.com/product/hot-pink-pointed-slant-tweezer-P377007?skuId=1457647"
  }),

  // ==================================================
  // Makeup > Eye > Eye Makeup Kits & Sets
  // Products: 26
  // ==================================================
  productData({
    code: "EYE_SET_001",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Urban Decay",
    name: "Naked3 Mini Soft Pink Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2482339"),
    link: "https://www.sephora.com/product/urban-decay-naked-3-mini-eyeshadow-palette-P474380?skuId=2482339"
  }),
  productData({
    code: "EYE_SET_002",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Bobbi Brown",
    name: "Mini Long-Wear Cream Waterproof Eyeshadow Stick Duo",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2903425"),
    link: "https://www.sephora.com/product/mini-lwcss-duo-P520118?skuId=2903425"
  }),
  productData({
    code: "EYE_SET_003",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Prada",
    name: "Dimensions Multi-Effect Refillable Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2835940"),
    link: "https://www.sephora.com/product/prada-beauty-dimensions-multi-effect-refillable-eyeshadow-palette-P509684?skuId=2835940"
  }),
  productData({
    code: "EYE_SET_004",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "PATRICK TA",
    name: "Major Dimension Essential Artistry Edit Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2906139"),
    link: "https://www.sephora.com/product/major-dimension-essential-artistry-edit-eyeshadow-palette-P518504?skuId=2906139"
  }),
  productData({
    code: "EYE_SET_005",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "MAKEUP BY MARIO",
    name: "Master Mattes® Eyeshadow Palette: The Neutrals",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2737187"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-mattes-r-eyeshadow-palette-neutrals-P510193?skuId=2737187"
  }),
  productData({
    code: "EYE_SET_006",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Grande Cosmetics",
    name: "2-Step Lash System Mini GrandeLASH-MD & GrandeMASCARA",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2352482"),
    link: "https://www.sephora.com/product/2-step-lash-system-mini-grandelash-md-and-grandemascara-P518456?skuId=2352482"
  }),
  productData({
    code: "EYE_SET_007",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Danessa Myricks Beauty",
    name: "Infinite Chrome Flakes Multichrome Gel for Eyes & Face",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2575538"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-infinite-chrome-flakes-multichrome-gel-for-eyes-face-P481968?skuId=2575538"
  }),
  productData({
    code: "EYE_SET_008",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "NUDESTIX",
    name: "Nude Metallics For Eyes",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2041788"),
    link: "https://www.sephora.com/product/nude-metallics-for-eyes-P428673?skuId=2041788"
  }),
  productData({
    code: "EYE_SET_009",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Grande Cosmetics",
    name: "Mini Cult Faves Lash and Brow Serum Set",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2869543"),
    link: "https://www.sephora.com/product/grande-cosmetics-mini-cult-faves-lash-brow-serum-set-P516554?skuId=2869543"
  }),
  productData({
    code: "EYE_SET_010",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "HUDA BEAUTY",
    name: "Pretty Grunge Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2691350"),
    link: "https://www.sephora.com/product/pretty-grunge-eyeshadow-palette-P507079?skuId=2691350"
  }),
  productData({
    code: "EYE_SET_011",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Benefit Cosmetics",
    name: "Brow Haul of Fame Brow Bestsellers Set",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2773828"),
    link: "https://www.sephora.com/product/benefit-cosmetics-brow-haul-fame-set-P511578?skuId=2773828"
  }),
  productData({
    code: "EYE_SET_012",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "PATRICK TA",
    name: "Major Dimension Eye Illusion Eyeshadow Duo",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2906188"),
    link: "https://www.sephora.com/product/patrick-ta-major-dimension-eye-illusion-eyeshadow-duos-P512579?skuId=2906188"
  }),
  productData({
    code: "EYE_SET_013",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "DIOR",
    name: "Diorshow 5 Couleurs Couture Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2948354"),
    link: "https://www.sephora.com/product/dior-5-couleurs-couture-eyeshadow-palette-P463032?skuId=2948354"
  }),
  productData({
    code: "EYE_SET_014",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "NUDESTIX",
    name: "Matte Eye Trio",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2851483"),
    link: "https://www.sephora.com/product/nudestix-matte-eye-trio-P515088?skuId=2851483"
  }),
  productData({
    code: "EYE_SET_015",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Too Faced",
    name: "Better Than Sex Volumizing & Lengthening Mascara",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("1533439"),
    link: "https://www.sephora.com/product/better-than-sex-mascara-P381000?skuId=1533439"
  }),
  productData({
    code: "EYE_SET_016",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "SEPHORA COLLECTION",
    name: "Essentials Lashes Starter Kit",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2932598"),
    link: "https://www.sephora.com/product/essentials-lashes-starter-kit-P520712?skuId=2932598"
  }),
  productData({
    code: "EYE_SET_017",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Anastasia Beverly Hills",
    name: "Fall Romance Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2716645"),
    link: "https://www.sephora.com/product/fall-romance-eyeshadow-palette-P508171?skuId=2716645"
  }),
  productData({
    code: "EYE_SET_018",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "PATRICK TA",
    name: "Major Dimension III Matte Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2703254"),
    link: "https://www.sephora.com/product/major-dimensions-eyeshadow-palette-iii-P506700?skuId=2703254"
  }),
  productData({
    code: "EYE_SET_019",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Yves Saint Laurent",
    name: "Couture Mini Clutch Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2873453"),
    link: "https://www.sephora.com/product/clutch-eye-shadow-palette-P507353?skuId=2873453"
  }),
  productData({
    code: "EYE_SET_020",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "ISAMAYA",
    name: "Core Palette 1.0",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2910362"),
    link: "https://www.sephora.com/product/isamaya-core-palette-1-P518697?skuId=2910362"
  }),
  productData({
    code: "EYE_SET_021",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Charlotte Tilbury",
    name: "Super Nudes Easy Eyeshadow Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2382885"),
    link: "https://www.sephora.com/product/charlotte-tilbury-iconic-nude-easy-eye-palette-P461433?skuId=2382885"
  }),
  productData({
    code: "EYE_SET_022",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Danessa Myricks Beauty",
    name: "Mini Everyday Magic Neutral Freedom Palette",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2942381"),
    link: "https://www.sephora.com/product/mini-everyday-magic-neutral-freedom-palette-P520269?skuId=2942381"
  }),
  productData({
    code: "EYE_SET_023",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "EYE_SET_024",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "ISAMAYA",
    name: "Core Palette 2.0",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2910370"),
    link: "https://www.sephora.com/product/isamaya-core-palette-2-P518714?skuId=2910370"
  }),
  productData({
    code: "EYE_SET_025",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Benefit Cosmetics",
    name: "Mini Benefit Dream Team Makeup Gift Set",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2898591"),
    link: "https://www.sephora.com/product/mini-benefit-dream-team-makeup-gift-set-P517118?skuId=2898591"
  }),
  productData({
    code: "EYE_SET_026",
    category: "Makeup > Eye > Eye Makeup Kits & Sets",
    brand: "Velour Lashes",
    name: "Effortless Kit - No Trim No Measure Natural Lash Kit",
    type: "Eye Makeup Kits & Sets",
    image: skuImage("2747467"),
    link: "https://www.sephora.com/product/the-effortless-kit-P429278?skuId=2747467"
  }),

  // ==================================================
  // Makeup > Eye > Eye Primer
  // Products: 19
  // ==================================================
  productData({
    code: "EYE_PRIMER_001",
    category: "Makeup > Eye > Eye Primer",
    brand: "SEPHORA COLLECTION",
    name: "Boost + Lock 12HR Eyeshadow Primer",
    type: "Eye Primer",
    image: skuImage("2730802"),
    link: "https://www.sephora.com/product/boost-lock-eye-primer-P510843?skuId=2730802"
  }),
  productData({
    code: "EYE_PRIMER_002",
    category: "Makeup > Eye > Eye Primer",
    brand: "Urban Decay",
    name: "Eyeshadow Primer Potion",
    type: "Eye Primer",
    image: skuImage("1704402"),
    link: "https://www.sephora.com/product/eyeshadow-primer-potion-tube-original-P284716?skuId=1704402"
  }),
  productData({
    code: "EYE_PRIMER_003",
    category: "Makeup > Eye > Eye Primer",
    brand: "NARS",
    name: "Pro-Prime™ Smudge Proof Eyeshadow Base",
    type: "Eye Primer",
    image: skuImage("1236843"),
    link: "https://www.sephora.com/product/pro-prime-smudge-proof-eyeshadow-base-P261211?skuId=1236843"
  }),
  productData({
    code: "EYE_PRIMER_004",
    category: "Makeup > Eye > Eye Primer",
    brand: "Lancôme",
    name: "Cils Booster XL Super-Enhancing Mascara Primer",
    type: "Eye Primer",
    image: skuImage("2109965"),
    link: "https://www.sephora.com/product/cils-booster-xl-super-enhancing-mascara-base-P128706?skuId=2109965"
  }),
  productData({
    code: "EYE_PRIMER_005",
    category: "Makeup > Eye > Eye Primer",
    brand: "Anastasia Beverly Hills",
    name: "Mini Water-Resistant Eye Primer",
    type: "Eye Primer",
    image: skuImage("2226280"),
    link: "https://www.sephora.com/product/mini-eye-primer-P446027?skuId=2226280"
  }),
  productData({
    code: "EYE_PRIMER_006",
    category: "Makeup > Eye > Eye Primer",
    brand: "Urban Decay",
    name: "Eyeshadow Primer Potion - Anti-Aging",
    type: "Eye Primer",
    image: skuImage("1704410"),
    link: "https://www.sephora.com/product/eyeshadow-primer-potion-anti-aging-P381306?skuId=1704410"
  }),
  productData({
    code: "EYE_PRIMER_007",
    category: "Makeup > Eye > Eye Primer",
    brand: "Bobbi Brown",
    name: "Mini Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
    type: "Eye Primer",
    image: skuImage("2073195"),
    link: "https://www.sephora.com/product/vitamin-enriched-face-base-to-go-P431505?skuId=2073195"
  }),
  productData({
    code: "EYE_PRIMER_008",
    category: "Makeup > Eye > Eye Primer",
    brand: "MAKE UP FOR EVER",
    name: "Aqua Seal",
    type: "Eye Primer",
    image: skuImage("969352"),
    link: "https://www.sephora.com/product/eye-seal-P169812?skuId=969352"
  }),
  productData({
    code: "EYE_PRIMER_009",
    category: "Makeup > Eye > Eye Primer",
    brand: "Too Faced",
    name: "Shadow Insurance 24-Hour Eyeshadow Primer",
    type: "Eye Primer",
    image: skuImage("2519791"),
    link: "https://www.sephora.com/product/shadow-insurance-P202625?skuId=2519791"
  }),
  productData({
    code: "EYE_PRIMER_010",
    category: "Makeup > Eye > Eye Primer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
    type: "Eye Primer",
    image: skuImage("1292820"),
    link: "https://www.sephora.com/product/vitamin-enriched-face-base-P270594?skuId=1292820"
  }),
  productData({
    code: "EYE_PRIMER_011",
    category: "Makeup > Eye > Eye Primer",
    brand: "Anastasia Beverly Hills",
    name: "Highlighting & Concealing Eyebrow Pro Pencil",
    type: "Eye Primer",
    image: skuImage("1622075"),
    link: "https://www.sephora.com/product/pro-pencil-P386783?skuId=1622075"
  }),
  productData({
    code: "EYE_PRIMER_012",
    category: "Makeup > Eye > Eye Primer",
    brand: "Urban Decay",
    name: "Subversion Lash Primer",
    type: "Eye Primer",
    image: skuImage("1635788"),
    link: "https://www.sephora.com/product/subversion-lash-primer-P387594?skuId=1635788"
  }),
  productData({
    code: "EYE_PRIMER_013",
    category: "Makeup > Eye > Eye Primer",
    brand: "Bobbi Brown",
    name: "Vitamin Enriched Eye Base Primer & Moisturizer with Hyaluronic Acid",
    type: "Eye Primer",
    image: skuImage("2367845"),
    link: "https://www.sephora.com/product/bobbi-brown-vitamin-enriched-eye-base-P462339?skuId=2367845"
  }),
  productData({
    code: "EYE_PRIMER_014",
    category: "Makeup > Eye > Eye Primer",
    brand: "tarte",
    name: "opening act™ lash primer",
    type: "Eye Primer",
    image: skuImage("1707835"),
    link: "https://www.sephora.com/product/opening-act-lash-primer-P397383?skuId=1707835"
  }),
  productData({
    code: "EYE_PRIMER_015",
    category: "Makeup > Eye > Eye Primer",
    brand: "PAT McGRATH LABS",
    name: "IntensifEYES Artistry Wand",
    type: "Eye Primer",
    image: skuImage("2488807"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-intensifeyes-artistry-wand-P475597?skuId=2488807"
  }),
  productData({
    code: "EYE_PRIMER_016",
    category: "Makeup > Eye > Eye Primer",
    brand: "Too Faced",
    name: "Mini Better Than Sex Foreplay Waterproof Mascara Primer",
    type: "Eye Primer",
    image: skuImage("2693125"),
    link: "https://www.sephora.com/product/mini-better-than-sex-foreplay-mascara-primer-P506827?skuId=2693125"
  }),
  productData({
    code: "EYE_PRIMER_017",
    category: "Makeup > Eye > Eye Primer",
    brand: "PAT McGRATH LABS",
    name: "IntensifEYES™ Longwear Eyeshadow Primer",
    type: "Eye Primer",
    image: skuImage("2699429"),
    link: "https://www.sephora.com/product/intensifeyes-long-wear-eyeshadow-primer-P507491?skuId=2699429"
  }),
  productData({
    code: "EYE_PRIMER_018",
    category: "Makeup > Eye > Eye Primer",
    brand: "bareMinerals",
    name: "Loose Talc-Free Powder Concealer SPF 20",
    type: "Eye Primer",
    image: skuImage("1073063"),
    link: "https://www.sephora.com/product/bareminerals-broad-spectrum-multi-tasking-face-P61006?skuId=1073063"
  }),
  productData({
    code: "EYE_PRIMER_019",
    category: "Makeup > Eye > Eye Primer",
    brand: "Bobbi Brown",
    name: "Jumbo Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid",
    type: "Eye Primer",
    image: skuImage("2421840"),
    link: "https://www.sephora.com/product/bobbi-brown-vitamin-enriched-face-base-jumbo-P468634?skuId=2421840"
  }),

  // ==================================================
  // Makeup > Eye > False Eyelashes
  // Products: 32
  // ==================================================
  productData({
    code: "FALSE_LASHES_001",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Self Adhesive Half Lashes",
    type: "False Eyelashes",
    image: skuImage("2987279"),
    link: "https://www.sephora.com/product/self-adhesive-half-lashes-P517690?skuId=2987279"
  }),
  productData({
    code: "FALSE_LASHES_002",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour-Xtension Self-Stick Lash Clusters",
    type: "False Eyelashes",
    image: skuImage("2921088"),
    link: "https://www.sephora.com/product/velour-xtension-self-stick-lash-clusters-P519726?skuId=2921088"
  }),
  productData({
    code: "FALSE_LASHES_003",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Self-Stick Lash Xtension Strips",
    type: "False Eyelashes",
    image: skuImage("2969871"),
    link: "https://www.sephora.com/product/velour-lashes-self-stick-lash-xtension-strips-P521687?skuId=2969871"
  }),
  productData({
    code: "FALSE_LASHES_004",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Everyday Faux Mink Lashes",
    type: "False Eyelashes",
    image: skuImage("2546331"),
    link: "https://www.sephora.com/product/lilly-lashes-everyday-faux-mink-lashes-P483672?skuId=2546331"
  }),
  productData({
    code: "FALSE_LASHES_005",
    category: "Makeup > Eye > False Eyelashes",
    brand: "SEPHORA COLLECTION",
    name: "Angled False Lash Applicator",
    type: "False Eyelashes",
    image: skuImage("2726230"),
    link: "https://www.sephora.com/product/angled-false-lash-applicator-P509815?skuId=2726230"
  }),
  productData({
    code: "FALSE_LASHES_006",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Lilly Lashes 3D Faux Mink Lashes",
    type: "False Eyelashes",
    image: skuImage("2748242"),
    link: "https://www.sephora.com/product/lilly-lashes-lilly-lashes-3d-faux-mink-lashes-P471255?skuId=2748242"
  }),
  productData({
    code: "FALSE_LASHES_007",
    category: "Makeup > Eye > False Eyelashes",
    brand: "SEPHORA COLLECTION",
    name: "Essentials False Lashes",
    type: "False Eyelashes",
    image: skuImage("2932945"),
    link: "https://www.sephora.com/product/essentials-false-lashes-P520697?skuId=2932945"
  }),
  productData({
    code: "FALSE_LASHES_008",
    category: "Makeup > Eye > False Eyelashes",
    brand: "SEPHORA COLLECTION",
    name: "PRO False Lashes",
    type: "False Eyelashes",
    image: skuImage("2932499"),
    link: "https://www.sephora.com/product/pro-false-lashes-P520695?skuId=2932499"
  }),
  productData({
    code: "FALSE_LASHES_009",
    category: "Makeup > Eye > False Eyelashes",
    brand: "SEPHORA COLLECTION",
    name: "Lash Glue",
    type: "False Eyelashes",
    image: skuImage("2932879"),
    link: "https://www.sephora.com/product/lash-glue-P520705?skuId=2932879"
  }),
  productData({
    code: "FALSE_LASHES_010",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour-Xtensions Self-Stick Lash Kit",
    type: "False Eyelashes",
    image: skuImage("2921104"),
    link: "https://www.sephora.com/product/velour-xtensions-self-stick-lash-kit-P519728?skuId=2921104"
  }),
  productData({
    code: "FALSE_LASHES_011",
    category: "Makeup > Eye > False Eyelashes",
    brand: "LYS Beauty",
    name: "Uplifted Press & Go False Lash Clusters",
    type: "False Eyelashes",
    image: skuImage("2929214"),
    link: "https://www.sephora.com/product/uplifted-press-go-false-lash-clusters-P520540?skuId=2929214"
  }),
  productData({
    code: "FALSE_LASHES_012",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Self Adhesive Lashes",
    type: "False Eyelashes",
    image: skuImage("2820868"),
    link: "https://www.sephora.com/product/lilly-lashes-adhesive-lashes-P511127?skuId=2820868"
  }),
  productData({
    code: "FALSE_LASHES_013",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Effortless Self-Adhesive 2-Pack",
    type: "False Eyelashes",
    image: skuImage("2987253"),
    link: "https://www.sephora.com/product/self-adhesive-effortless-2-pack-P516863?skuId=2987253"
  }),
  productData({
    code: "FALSE_LASHES_014",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Lilly Lashes Faux 3D Lashes",
    type: "False Eyelashes",
    image: skuImage("2736817"),
    link: "https://www.sephora.com/product/lilly-lashes-faux-3d-lashes-P471278?skuId=2736817"
  }),
  productData({
    code: "FALSE_LASHES_015",
    category: "Makeup > Eye > False Eyelashes",
    brand: "DUO",
    name: "Brush On Adhesive",
    type: "False Eyelashes",
    image: skuImage("1633106"),
    link: "https://www.sephora.com/product/brush-on-adhesive-P387891?skuId=1633106"
  }),
  productData({
    code: "FALSE_LASHES_016",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour x C Gonzalez Beauty Self-Stick Lash Clusters",
    type: "False Eyelashes",
    image: skuImage("2921096"),
    link: "https://www.sephora.com/product/velour-x-c-gonzalez-beauty-self-stick-lash-clusters-P519727?skuId=2921096"
  }),
  productData({
    code: "FALSE_LASHES_017",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour-Xtensions™ False Lash Clusters",
    type: "False Eyelashes",
    image: skuImage("2568921"),
    link: "https://www.sephora.com/product/velour-xtensions-tm-false-lash-clusters-P506146?skuId=2568921"
  }),
  productData({
    code: "FALSE_LASHES_018",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Sheer Band False Eyelashes",
    type: "False Eyelashes",
    image: skuImage("2689784"),
    link: "https://www.sephora.com/product/sheer-band-lash-P506491?skuId=2689784"
  }),
  productData({
    code: "FALSE_LASHES_019",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Effortless - No Trim - Natural Lash Collection",
    type: "False Eyelashes",
    image: skuImage("2646479"),
    link: "https://www.sephora.com/product/effortless-lash-collection-P429277?skuId=2646479"
  }),
  productData({
    code: "FALSE_LASHES_020",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Lilly Lashes Brush On Lash Adhesive",
    type: "False Eyelashes",
    image: skuImage("2248433"),
    link: "https://www.sephora.com/product/lilly-lashes-brush-on-lash-adhesive-P451195?skuId=2248433"
  }),
  productData({
    code: "FALSE_LASHES_021",
    category: "Makeup > Eye > False Eyelashes",
    brand: "SEPHORA COLLECTION",
    name: "Essentials Lashes Starter Kit",
    type: "False Eyelashes",
    image: skuImage("2932598"),
    link: "https://www.sephora.com/product/essentials-lashes-starter-kit-P520712?skuId=2932598"
  }),
  productData({
    code: "FALSE_LASHES_022",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Effortless Self-Adhesive Lashes - Single Pack",
    type: "False Eyelashes",
    image: skuImage("2987287"),
    link: "https://www.sephora.com/product/effortless-self-adhesive-lashes-single-pack-P522851?skuId=2987287"
  }),
  productData({
    code: "FALSE_LASHES_023",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Self-Adhesive Lash Toppers",
    type: "False Eyelashes",
    image: skuImage("2987261"),
    link: "https://www.sephora.com/product/self-adhesive-lash-toppers-P522842?skuId=2987261"
  }),
  productData({
    code: "FALSE_LASHES_024",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour-Xtensions™ Kit",
    type: "False Eyelashes",
    image: skuImage("2865996"),
    link: "https://www.sephora.com/product/velour-xtensions-tm-kit-2-0-P517691?skuId=2865996"
  }),
  productData({
    code: "FALSE_LASHES_025",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Velour-Xtensions Self-Stick Strip Lashes Kit",
    type: "False Eyelashes",
    image: skuImage("3000973"),
    link: "https://www.sephora.com/product/velour-xtensions-self-stick-strip-lashes-kit-P522858?skuId=3000973"
  }),
  productData({
    code: "FALSE_LASHES_026",
    category: "Makeup > Eye > False Eyelashes",
    brand: "House of Lashes",
    name: "House of Lashes® Eyelash Adhesive",
    type: "False Eyelashes",
    image: skuImage("2492940"),
    link: "https://www.sephora.com/product/house-lashes-eyelash-adhesive-P408663?skuId=2492940"
  }),
  productData({
    code: "FALSE_LASHES_027",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Effortless Kit - No Trim No Measure Natural Lash Kit",
    type: "False Eyelashes",
    image: skuImage("2747467"),
    link: "https://www.sephora.com/product/the-effortless-kit-P429278?skuId=2747467"
  }),
  productData({
    code: "FALSE_LASHES_028",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Lilly Lashes",
    name: "Self-Adhesive Band 3D Faux Mink Lashes",
    type: "False Eyelashes",
    image: skuImage("2987329"),
    link: "https://www.sephora.com/product/self-adhesive-band-3d-faux-mink-lashes-P522833?skuId=2987329"
  }),
  productData({
    code: "FALSE_LASHES_029",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Glue & Go Lash Adhesive Pen",
    type: "False Eyelashes",
    image: skuImage("2700037"),
    link: "https://www.sephora.com/product/glue-go-adhesive-pen-P507583?skuId=2700037"
  }),
  productData({
    code: "FALSE_LASHES_030",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Multi-Day Lash Bond",
    type: "False Eyelashes",
    image: skuImage("2866002"),
    link: "https://www.sephora.com/product/multi-day-lash-bond-2-0-P517684?skuId=2866002"
  }),
  productData({
    code: "FALSE_LASHES_031",
    category: "Makeup > Eye > False Eyelashes",
    brand: "Velour Lashes",
    name: "Lash Adhesive",
    type: "False Eyelashes",
    image: skuImage("1927714"),
    link: "https://www.sephora.com/product/lash-adhesive-P420513?skuId=1927714"
  }),
  productData({
    code: "FALSE_LASHES_032",
    category: "Makeup > Eye > False Eyelashes",
    brand: "House of Lashes",
    name: "Reusable Feline® Wispy Cat-Eye Lashes",
    type: "False Eyelashes",
    image: skuImage("2868354"),
    link: "https://www.sephora.com/product/reusable-feline-r-wispy-cat-eye-lashes-P516876?skuId=2868354"
  }),

  // ==================================================
  // Makeup > Lip > Lip Gloss
  // Products: 160
  // ==================================================
  productData({
    code: "LIP_GLOSS_001",
    category: "Makeup > Lip > Lip Gloss",
    brand: "EADEM",
    name: "Le Chouchou Exfoliating + Softening Peptide Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2960730"),
    link: "https://www.sephora.com/product/eadem-le-chouchou-exfoliating-softening-peptide-lip-balm-P511921?skuId=2960730"
  }),
  productData({
    code: "LIP_GLOSS_002",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Summer Fridays",
    name: "Lip Butter Balm Treatment for Hydration + Nourishing Shine",
    type: "Lip Gloss",
    image: skuImage("2960094"),
    link: "https://www.sephora.com/product/summer-fridays-lip-butter-balm-P455936?skuId=2960094"
  }),
  productData({
    code: "LIP_GLOSS_003",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Universal Lip Gloss Luminizer",
    type: "Lip Gloss",
    image: skuImage("2327252"),
    link: "https://www.sephora.com/product/gloss-bomb-universal-lip-luminizer-P67988453?skuId=2327252"
  }),
  productData({
    code: "LIP_GLOSS_004",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Tower 28 Beauty",
    name: "ShineOn Lip Jelly Hydrating Non-Sticky Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2549970"),
    link: "https://www.sephora.com/product/shineon-lip-jelly-P448854?skuId=2549970"
  }),
  productData({
    code: "LIP_GLOSS_005",
    category: "Makeup > Lip > Lip Gloss",
    brand: "DIOR",
    name: "Lip Glow Oil Hydrating High-Shine Gloss",
    type: "Lip Gloss",
    image: skuImage("2920676"),
    link: "https://www.sephora.com/product/dior-lip-glow-oil-hydrating-high-shine-gloss-P519637?skuId=2920676"
  }),
  productData({
    code: "LIP_GLOSS_006",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Stix High-Shine Gloss Stick",
    type: "Lip Gloss",
    image: skuImage("2950129"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-stix-high-shine-gloss-stick-P511572?skuId=2950129"
  }),
  productData({
    code: "LIP_GLOSS_007",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Plump Hydrating Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2234185"),
    link: "https://www.sephora.com/product/outrageous-effect-volume-lip-gloss-P417985?skuId=2234185"
  }),
  productData({
    code: "LIP_GLOSS_008",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LAWLESS",
    name: "Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Gloss",
    image: skuImage("2937928"),
    link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-gloss-P468175?skuId=2937928"
  }),
  productData({
    code: "LIP_GLOSS_009",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Prada",
    name: "Prada Reflection Glossy Liquid Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2954717"),
    link: "https://www.sephora.com/product/prada-reflection-glossy-liquid-balm-P520657?skuId=2954717"
  }),
  productData({
    code: "LIP_GLOSS_010",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LANEIGE",
    name: "Glaze Craze Tinted Polypeptide Lip Serum Treatment",
    type: "Lip Gloss",
    image: skuImage("2960771"),
    link: "https://www.sephora.com/product/glaze-craze-tinted-polypeptide-lip-serum-P515527?skuId=2960771"
  }),
  productData({
    code: "LIP_GLOSS_011",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HUDA BEAUTY",
    name: "Faux Filler Shiny Non-Sticky Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2954667"),
    link: "https://www.sephora.com/product/huda-beauty-faux-filler-shiny-non-sticky-lip-gloss-P509453?skuId=2954667"
  }),
  productData({
    code: "LIP_GLOSS_012",
    category: "Makeup > Lip > Lip Gloss",
    brand: "REFY",
    name: "Lip Gloss with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2554772"),
    link: "https://www.sephora.com/product/refy-beauty-refy-lip-gloss-P483124?skuId=2554772"
  }),
  productData({
    code: "LIP_GLOSS_013",
    category: "Makeup > Lip > Lip Gloss",
    brand: "DIOR",
    name: "Dior Addict Lip Maximizer Plumping Gloss",
    type: "Lip Gloss",
    image: skuImage("2635654"),
    link: "https://www.sephora.com/product/dior-addict-lip-maximizer-plumping-gloss-P186805?skuId=2635654"
  }),
  productData({
    code: "LIP_GLOSS_014",
    category: "Makeup > Lip > Lip Gloss",
    brand: "DIOR",
    name: "Dior Addict Glass Lipstick Ultra-Shine Hydrating Lip Gloss Stick",
    type: "Lip Gloss",
    image: skuImage("2962496"),
    link: "https://www.sephora.com/product/dior-addict-glass-lipstick-ultra-shine-hydrating-lip-gloss-stick-P522692?skuId=2962496"
  }),
  productData({
    code: "LIP_GLOSS_015",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Saie",
    name: "Glossybounce™ High-Shine Hydrating Lip Gloss Oil",
    type: "Lip Gloss",
    image: skuImage("2872463"),
    link: "https://www.sephora.com/product/glossybounce-high-shine-hydrating-lip-gloss-oil-P507492?skuId=2872463"
  }),
  productData({
    code: "LIP_GLOSS_016",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Dolce&Gabbana",
    name: "Mint Oil Lip Plumper with 24H Hydration & Vitamin E",
    type: "Lip Gloss",
    image: skuImage("2986131"),
    link: "https://www.sephora.com/product/mint-oil-lip-plumper-with-24h-hydration-vitamin-e-P522609?skuId=2986131"
  }),
  productData({
    code: "LIP_GLOSS_017",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Glossed Smoothing Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2960193"),
    link: "https://www.sephora.com/product/glossed-moisturizing-lip-gloss-P522464?skuId=2960193"
  }),
  productData({
    code: "LIP_GLOSS_018",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Sincerely Yours",
    name: "Sugarcoat Gloss Soothing & Hydrating Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2969376"),
    link: "https://www.sephora.com/product/sugarcoat-gloss-soothing-and-hydrating-lip-balm-P522846?skuId=2969376"
  }),
  productData({
    code: "LIP_GLOSS_019",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Dolce&Gabbana",
    name: "Rose Dew Lip Bite 24H Hydrating Glossy Lip Tint with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2986073"),
    link: "https://www.sephora.com/product/rose-dew-lip-bite-24h-hydrating-glossy-lip-tint-with-hyaluronic-acid-P522574?skuId=2986073"
  }),
  productData({
    code: "LIP_GLOSS_020",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAKEUP BY MARIO",
    name: "Hydrating SuperShine™ Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2835130"),
    link: "https://www.sephora.com/product/makeup-by-mario-hydrating-supershine-lip-gloss-P514610?skuId=2835130"
  }),
  productData({
    code: "LIP_GLOSS_021",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAC Cosmetics",
    name: "Lipglass Air Non-Sticky Hydrating Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2861979"),
    link: "https://www.sephora.com/product/lipglass-air-non-sticky-gloss-with-glass-like-shine-P516483?skuId=2861979"
  }),
  productData({
    code: "LIP_GLOSS_022",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Clarins",
    name: "Lip Comfort Hydrating Oil",
    type: "Lip Gloss",
    image: skuImage("2583938"),
    link: "https://www.sephora.com/product/clarins-lip-comfort-oil-P483060?skuId=2583938"
  }),
  productData({
    code: "LIP_GLOSS_023",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kosas",
    name: "Lip Pulse Glassy Lip Plumper Gloss",
    type: "Lip Gloss",
    image: skuImage("2935914"),
    link: "https://www.sephora.com/product/lip-pulse-plumper-P520532?skuId=2935914"
  }),
  productData({
    code: "LIP_GLOSS_024",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LANEIGE",
    name: "JuicePop Box Hydrating & Lightweight Oil Lip Tint",
    type: "Lip Gloss",
    image: skuImage("2925618"),
    link: "https://www.sephora.com/product/juice-box-tints-P519687?skuId=2925618"
  }),
  productData({
    code: "LIP_GLOSS_025",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Clarins",
    name: "Hydrating Peptide & Plumping Lip Oil Balm",
    type: "Lip Gloss",
    image: skuImage("2775518"),
    link: "https://www.sephora.com/product/clarins-hydrating-peptide-plumping-lip-oil-balm-P512149?skuId=2775518"
  }),
  productData({
    code: "LIP_GLOSS_026",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Plumping Lip Oil Gloss",
    type: "Lip Gloss",
    image: skuImage("2830172"),
    link: "https://www.sephora.com/product/ysl-loveshine-plumping-lip-oil-gloss-with-hyaluronic-acid-P515552?skuId=2830172"
  }),
  productData({
    code: "LIP_GLOSS_027",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Anastasia Beverly Hills",
    name: "Universal Luminous Tinted Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2675759"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-diamond-lip-gloss-P468343?skuId=2675759"
  }),
  productData({
    code: "LIP_GLOSS_028",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Tower 28 Beauty",
    name: "LipSoftie® Hydrating Tinted Lip Treatment Balm",
    type: "Lip Gloss",
    image: skuImage("2843068"),
    link: "https://www.sephora.com/product/tower-28-lipsoftie-hydrating-tinted-lip-treatment-balm-P509397?skuId=2843068"
  }),
  productData({
    code: "LIP_GLOSS_029",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil Stain",
    type: "Lip Gloss",
    image: skuImage("2640159"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640159"
  }),
  productData({
    code: "LIP_GLOSS_030",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MERIT",
    name: "Shade Slick Hydrating Tinted Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2849925"),
    link: "https://www.sephora.com/product/merit-shade-slick-tinted-lip-oil-P468691?skuId=2849925"
  }),
  productData({
    code: "LIP_GLOSS_031",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAC Cosmetics",
    name: "Lipglass High-Shine, Conditioning + Smoothing Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2092195"),
    link: "https://www.sephora.com/product/lipglass-P35499987?skuId=2092195"
  }),
  productData({
    code: "LIP_GLOSS_032",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Hydrating Gloss Balm",
    type: "Lip Gloss",
    image: skuImage("2960235"),
    link: "https://www.sephora.com/product/colorful-hydrating-and-plumping-gloss-balm-P521371?skuId=2960235"
  }),
  productData({
    code: "LIP_GLOSS_033",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Cream Color Drip Lip Cream",
    type: "Lip Gloss",
    image: skuImage("2399285"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-cream-color-drip-lip-cream-P465757?skuId=2399285"
  }),
  productData({
    code: "LIP_GLOSS_034",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAKE UP FOR EVER",
    name: "Super Boost Moisturizing & Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2844728"),
    link: "https://www.sephora.com/product/make-up-for-ever-super-boost-lip-gloss-P515082?skuId=2844728"
  }),
  productData({
    code: "LIP_GLOSS_035",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Yves Saint Laurent",
    name: "YSL Candy Glaze Lip Gloss Stick",
    type: "Lip Gloss",
    image: skuImage("2511335"),
    link: "https://www.sephora.com/product/yves-saint-laurent-candy-glaze-lip-gloss-stick-P480000?skuId=2511335"
  }),
  productData({
    code: "LIP_GLOSS_036",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Luminizing Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2876357"),
    link: "https://www.sephora.com/product/positive-light-luminizing-lip-gloss-P516855?skuId=2876357"
  }),
  productData({
    code: "LIP_GLOSS_037",
    category: "Makeup > Lip > Lip Gloss",
    brand: "ILIA",
    name: "Overglaze Hydrating Lip Gloss for 24-Hour Moisture",
    type: "Lip Gloss",
    image: skuImage("2900819"),
    link: "https://www.sephora.com/product/overglaze-hydrating-lip-gloss-P520356?skuId=2900819"
  }),
  productData({
    code: "LIP_GLOSS_038",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Hourglass",
    name: "Phantom Volumizing Glossy Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2833085"),
    link: "https://www.sephora.com/product/hourglass-phantom-volumizing-glossy-balm-P483662?skuId=2833085"
  }),
  productData({
    code: "LIP_GLOSS_039",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Oil Luminizing Lip Oil 'N Gloss",
    type: "Lip Gloss",
    image: skuImage("2868255"),
    link: "https://www.sephora.com/product/gloss-bomb-oil-luminizing-lip-oil-n-gloss-P516100?skuId=2868255"
  }),
  productData({
    code: "LIP_GLOSS_040",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Heat Universal Lip Luminizer + Plumper",
    type: "Lip Gloss",
    image: skuImage("2656254"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-heat-universal-lip-luminizer-plumper-P473708?skuId=2656254"
  }),
  productData({
    code: "LIP_GLOSS_041",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Atomic Shake High-Shine Longwear Lip Lacquer Lipstick",
    type: "Lip Gloss",
    image: skuImage("2977841"),
    link: "https://www.sephora.com/product/atomic-shake-lip-lacquer-P522531?skuId=2977841"
  }),
  productData({
    code: "LIP_GLOSS_042",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Givenchy",
    name: "Perfecto Hydrating & Smoothing High-Shine Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2947620"),
    link: "https://www.sephora.com/product/perfecto-hydrating-smoothing-high-shine-lip-oil-P522004?skuId=2947620"
  }),
  productData({
    code: "LIP_GLOSS_043",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NARS",
    name: "Afterglow Lip Shine Gloss",
    type: "Lip Gloss",
    image: skuImage("2514909"),
    link: "https://www.sephora.com/product/nars-afterglow-lip-shine-gloss-P479337?skuId=2514909"
  }),
  productData({
    code: "LIP_GLOSS_044",
    category: "Makeup > Lip > Lip Gloss",
    brand: "DIOR",
    name: "Lip Glow Butter Hydrating Gloss Balm",
    type: "Lip Gloss",
    image: skuImage("2864726"),
    link: "https://www.sephora.com/product/dior-lip-glow-butter-hydrating-gloss-balm-P516779?skuId=2864726"
  }),
  productData({
    code: "LIP_GLOSS_045",
    category: "Makeup > Lip > Lip Gloss",
    brand: "PAT McGRATH LABS",
    name: "LUST: Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2708048"),
    link: "https://www.sephora.com/product/lust-lip-gloss-P431852?skuId=2708048"
  }),
  productData({
    code: "LIP_GLOSS_046",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Totally Juicy Lip Tint",
    type: "Lip Gloss",
    image: skuImage("2870731"),
    link: "https://www.sephora.com/product/sephora-collection-totally-juicy-lip-tint-P516072?skuId=2870731"
  }),
  productData({
    code: "LIP_GLOSS_047",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Tower 28 Beauty",
    name: "ShineOn Plumping Lip Jelly",
    type: "Lip Gloss",
    image: skuImage("2975928"),
    link: "https://www.sephora.com/product/shineon-plumping-lip-jelly-P522378?skuId=2975928"
  }),
  productData({
    code: "LIP_GLOSS_048",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MILK MAKEUP",
    name: "Balmade Hydrating Tinted Lip Balm with Electrolytes",
    type: "Lip Gloss",
    image: skuImage("2872315"),
    link: "https://www.sephora.com/product/milk-makeup-balmade-lip-balm-P517096?skuId=2872315"
  }),
  productData({
    code: "LIP_GLOSS_049",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "maracuja juicy lip plumping gloss",
    type: "Lip Gloss",
    image: skuImage("2741098"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-plump-P482750?skuId=2741098"
  }),
  productData({
    code: "LIP_GLOSS_050",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Topicals",
    name: "Slick Salve Glossy Lip Balm for Soothing + Hydration",
    type: "Lip Gloss",
    image: skuImage("2740660"),
    link: "https://www.sephora.com/product/topicals-slick-salve-glossy-lip-balm-for-soothing-hydration-P509711?skuId=2740660"
  }),
  productData({
    code: "LIP_GLOSS_051",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Glossed Icy Shine",
    type: "Lip Gloss",
    image: skuImage("2960334"),
    link: "https://www.sephora.com/product/glossed-icy-shine-P522407?skuId=2960334"
  }),
  productData({
    code: "LIP_GLOSS_052",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "maracuja juicy lip hydrating balm gloss",
    type: "Lip Gloss",
    image: skuImage("2370518"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-P467977?skuId=2370518"
  }),
  productData({
    code: "LIP_GLOSS_053",
    category: "Makeup > Lip > Lip Gloss",
    brand: "PATRICK TA",
    name: "Major Volume Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2912186"),
    link: "https://www.sephora.com/product/patrick-ta-major-volume-plumping-lip-gloss-P481729?skuId=2912186"
  }),
  productData({
    code: "LIP_GLOSS_054",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HUNG VANNGO BEAUTY",
    name: "Glossy Lip Hue Hydrating Lip Shine with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2943488"),
    link: "https://www.sephora.com/product/glossy-lip-hue-hydrating-lip-shine-with-hyaluronic-acid-P520364?skuId=2943488"
  }),
  productData({
    code: "LIP_GLOSS_055",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAC Cosmetics",
    name: "Lipglass Clear High-Shine, Conditioning + Smoothing Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2092153"),
    link: "https://www.sephora.com/product/lipglass-clear-P88971231?skuId=2092153"
  }),
  productData({
    code: "LIP_GLOSS_056",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Lip Glaze Plumping Gloss",
    type: "Lip Gloss",
    image: skuImage("2736866"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-phd-hybrid-lip-glaze-plumping-gloss-P509390?skuId=2736866"
  }),
  productData({
    code: "LIP_GLOSS_057",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Glow Recipe",
    name: "Glass Balm Lip Treatment for Shine & Hydration",
    type: "Lip Gloss",
    image: skuImage("2957934"),
    link: "https://www.sephora.com/product/glow-recipe-glass-balm-lip-treatment-for-shine-and-hydration-P515960?skuId=2957934"
  }),
  productData({
    code: "LIP_GLOSS_058",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Lancôme",
    name: "Juicy Tubes Original Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2872992"),
    link: "https://www.sephora.com/product/lancome-juicy-tubes-original-lip-gloss-P457812?skuId=2872992"
  }),
  productData({
    code: "LIP_GLOSS_059",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Westman Atelier",
    name: "HydroBalm Sheer Tinted Lipstick with Peptides and Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2942142"),
    link: "https://www.sephora.com/product/hydrobalm-tinted-lipstick-P520826?skuId=2942142"
  }),
  productData({
    code: "LIP_GLOSS_060",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "Collagen Lip Bath Gloss",
    type: "Lip Gloss",
    image: skuImage("2765642"),
    link: "https://www.sephora.com/product/collagen-lip-bath-gloss-P434009?skuId=2765642"
  }),
  productData({
    code: "LIP_GLOSS_061",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NATASHA DENONA",
    name: "Hy-Gloss Tinted Lip Gloss Balm",
    type: "Lip Gloss",
    image: skuImage("2933174"),
    link: "https://www.sephora.com/product/natasha-denona-hy-gloss-tinted-gloss-balm-P520967?skuId=2933174"
  }),
  productData({
    code: "LIP_GLOSS_062",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Supergoop!",
    name: "Glow Gloss SPF 40 Lip Balm with Peptides and Shea Butter",
    type: "Lip Gloss",
    image: skuImage("2871598"),
    link: "https://www.sephora.com/product/glow-gloss-lip-balm-spf-40-vanilla-soft-serve-P516839?skuId=2871598"
  }),
  productData({
    code: "LIP_GLOSS_063",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAC Cosmetics",
    name: "Lip Cushion High-Pigment + Hydrating Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2969954"),
    link: "https://www.sephora.com/product/mac-lip-cushion-high-pigment-hydrating-lip-oil-P522330?skuId=2969954"
  }),
  productData({
    code: "LIP_GLOSS_064",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kulfi",
    name: "Lip Snack Moisturizing Glossing Balm",
    type: "Lip Gloss",
    image: skuImage("2894988"),
    link: "https://www.sephora.com/product/lip-snack-moisturizing-glossing-balm-P517157?skuId=2894988"
  }),
  productData({
    code: "LIP_GLOSS_065",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NARS",
    name: "Afterglow Moisturizing Lip Balm with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2927325"),
    link: "https://www.sephora.com/product/afterglow-lip-balm-P519765?skuId=2927325"
  }),
  productData({
    code: "LIP_GLOSS_066",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LAWLESS",
    name: "Mini Forget The Filler Lip Plumper Duo with Velvet + Strawberry Popsicle",
    type: "Lip Gloss",
    image: skuImage("2973808"),
    link: "https://www.sephora.com/product/mini-forget-filler-lip-plumper-set-P522166?skuId=2973808"
  }),
  productData({
    code: "LIP_GLOSS_067",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Lancôme",
    name: "Lip Idole JuicyTreat Hydrating Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2872794"),
    link: "https://www.sephora.com/product/lip-idole-juicy-treat-hydrating-lip-gloss-P516861?skuId=2872794"
  }),
  productData({
    code: "LIP_GLOSS_068",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Glossier",
    name: "Glassy High-Shine Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2831287"),
    link: "https://www.sephora.com/product/glossier-glassy-high-shine-lip-gloss-P504829?skuId=2831287"
  }),
  productData({
    code: "LIP_GLOSS_069",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Too Faced",
    name: "Kissing Jelly Non-Sticky Lip Oil Gloss",
    type: "Lip Gloss",
    image: skuImage("2739217"),
    link: "https://www.sephora.com/product/kissing-jelly-non-sticky-lip-oil-gloss-P509300?skuId=2739217"
  }),
  productData({
    code: "LIP_GLOSS_070",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NUDESTIX",
    name: "Nude Plumping Lip Glace",
    type: "Lip Gloss",
    image: skuImage("2228815"),
    link: "https://www.sephora.com/product/nude-plumping-lip-glace-P444920?skuId=2228815"
  }),
  productData({
    code: "LIP_GLOSS_071",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Rare Beauty by Selena Gomez",
    name: "Stay Vulnerable Glossy Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2418614"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-stay-vulnerable-glossy-lip-balm-P467449?skuId=2418614"
  }),
  productData({
    code: "LIP_GLOSS_072",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kulfi",
    name: "Lassi Lips Staining Long-Lasting Moisturizing Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2855229"),
    link: "https://www.sephora.com/product/kulfi-lassi-lips-staining-long-lasting-hydrating-lip-oil-P512014?skuId=2855229"
  }),
  productData({
    code: "LIP_GLOSS_073",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HUDA BEAUTY",
    name: "Faux Filler Ultra-Hydrating Tinted Jelly Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2870590"),
    link: "https://www.sephora.com/product/huda-beauty-faux-filler-jelly-oil-P516660?skuId=2870590"
  }),
  productData({
    code: "LIP_GLOSS_074",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Too Faced",
    name: "Lip Injection Cooling Instant Lip Plumper Gloss",
    type: "Lip Gloss",
    image: skuImage("2935450"),
    link: "https://www.sephora.com/product/lip-injection-plumping-lip-gloss-P519873?skuId=2935450"
  }),
  productData({
    code: "LIP_GLOSS_075",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Yves Saint Laurent",
    name: "Candy Glow Tinted Butter Balm",
    type: "Lip Gloss",
    image: skuImage("2847994"),
    link: "https://www.sephora.com/product/yves-saint-laurent-candy-glow-tinted-butter-balm-P511431?skuId=2847994"
  }),
  productData({
    code: "LIP_GLOSS_076",
    category: "Makeup > Lip > Lip Gloss",
    brand: "PATRICK TA",
    name: "Major Glow Lip Shine",
    type: "Lip Gloss",
    image: skuImage("2221307"),
    link: "https://www.sephora.com/product/major-glow-lip-shine-P443623?skuId=2221307"
  }),
  productData({
    code: "LIP_GLOSS_077",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Laka",
    name: "Fruity Lip Glotioner Hydrating High Shine Lip Gloss Serum",
    type: "Lip Gloss",
    image: skuImage("2961548"),
    link: "https://www.sephora.com/product/fruity-lip-glotioner-hydrating-high-shine-lip-gloss-serum-P521383?skuId=2961548"
  }),
  productData({
    code: "LIP_GLOSS_078",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Too Faced",
    name: "Lip Injection Maximum Plump Extra Strength Hydrating Lip Plumper",
    type: "Lip Gloss",
    image: skuImage("2885630"),
    link: "https://www.sephora.com/product/too-faced-lip-injection-maximum-plump-extra-strength-hydrating-lip-plumper-P467794?skuId=2885630"
  }),
  productData({
    code: "LIP_GLOSS_079",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Plump Intense Hydrating Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2730810"),
    link: "https://www.sephora.com/product/sephora-collection-extreme-lip-plumper-P479855?skuId=2730810"
  }),
  productData({
    code: "LIP_GLOSS_080",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAC Cosmetics",
    name: "Squirt Plumping + Nourishing Lip Gloss Stick",
    type: "Lip Gloss",
    image: skuImage("2676815"),
    link: "https://www.sephora.com/product/squirt-lip-plumping-gloss-stick-P506425?skuId=2676815"
  }),
  productData({
    code: "LIP_GLOSS_081",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAKEUP BY MARIO",
    name: "Mini Moistureglow™ On-The-Go Plumping Lip Serum",
    type: "Lip Gloss",
    image: skuImage("2737179"),
    link: "https://www.sephora.com/product/makeup-by-mario-mini-moistureglow-tm-on-the-go-plumping-lip-serum-P509674?skuId=2737179"
  }),
  productData({
    code: "LIP_GLOSS_082",
    category: "Makeup > Lip > Lip Gloss",
    brand: "TOM FORD",
    name: "Gloss Luxe Lip Gloss with Hydrating Jojoba Oil & High-Shine",
    type: "Lip Gloss",
    image: skuImage("2883080"),
    link: "https://www.sephora.com/product/gloss-luxe-lip-gloss-P449372?skuId=2883080"
  }),
  productData({
    code: "LIP_GLOSS_083",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Armani Beauty",
    name: "Prisma Glass Hydrating Lip Gloss with Squalane",
    type: "Lip Gloss",
    image: skuImage("2799641"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-prisma-glass-hydrating-lip-gloss-with-squalane-P510283?skuId=2799641"
  }),
  productData({
    code: "LIP_GLOSS_084",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LYS Beauty",
    name: "Speak Love Lip-Plumping Glossy Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2847473"),
    link: "https://www.sephora.com/product/speak-love-lip-plumping-glossy-lip-balm-P515638?skuId=2847473"
  }),
  productData({
    code: "LIP_GLOSS_085",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "Big Lip Plumpgasm Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2765584"),
    link: "https://www.sephora.com/product/charlotte-tilbury-pillow-talk-big-lip-plumpgasm-plumping-lip-gloss-P511102?skuId=2765584"
  }),
  productData({
    code: "LIP_GLOSS_086",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MILK MAKEUP",
    name: "Odyssey Hydrating Non-Sticky Lip Oil Gloss",
    type: "Lip Gloss",
    image: skuImage("2792869"),
    link: "https://www.sephora.com/product/odyssey-lip-oil-gloss-P506917?skuId=2792869"
  }),
  productData({
    code: "LIP_GLOSS_087",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kosas",
    name: "Wet Lip Oil Plumping Peptide Lip Treatment Gloss",
    type: "Lip Gloss",
    image: skuImage("2486769"),
    link: "https://www.sephora.com/product/lip-oil-P451920?skuId=2486769"
  }),
  productData({
    code: "LIP_GLOSS_088",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Anastasia Beverly Hills",
    name: "Non-Sticky Clear Crystal Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2411502"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-crystal-lip-gloss-P468342?skuId=2411502"
  }),
  productData({
    code: "LIP_GLOSS_089",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kaja",
    name: "Juicy Glass Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2807022"),
    link: "https://www.sephora.com/product/juicy-glass-lip-oil-P508041?skuId=2807022"
  }),
  productData({
    code: "LIP_GLOSS_090",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MERIT",
    name: "Signature Lip Lightweight Lip Blush",
    type: "Lip Gloss",
    image: skuImage("2945186"),
    link: "https://www.sephora.com/product/signature-lip-blush-P520546?skuId=2945186"
  }),
  productData({
    code: "LIP_GLOSS_091",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Laka",
    name: "Fruity Glam Tint Hydrating Long-lasting Lip Stain",
    type: "Lip Gloss",
    image: skuImage("2961456"),
    link: "https://www.sephora.com/product/fruity-glam-tint-hydrating-long-lasting-lip-stain-P521381?skuId=2961456"
  }),
  productData({
    code: "LIP_GLOSS_092",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Nécessaire",
    name: "The Lip Balm – Instant Relief For Dry, Chapped Lips",
    type: "Lip Gloss",
    image: skuImage("2896868"),
    link: "https://www.sephora.com/product/the-lip-balm-P518275?skuId=2896868"
  }),
  productData({
    code: "LIP_GLOSS_093",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "maracuja juicy lip plumping oil with hyaluronic acid",
    type: "Lip Gloss",
    image: skuImage("2824795"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-plumping-lip-oil-P511952?skuId=2824795"
  }),
  productData({
    code: "LIP_GLOSS_094",
    category: "Makeup > Lip > Lip Gloss",
    brand: "caliray",
    name: "Lipguard SPF 31 Hydrating Lip Gloss Balm",
    type: "Lip Gloss",
    image: skuImage("2879039"),
    link: "https://www.sephora.com/product/caliray-lipguard-spf-31-hydrating-lip-gloss-balm-P516790?skuId=2879039"
  }),
  productData({
    code: "LIP_GLOSS_095",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Glossier",
    name: "Ultralip High Shine Lipstick with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2636728"),
    link: "https://www.sephora.com/product/glossier-ultralip-high-shine-lipstick-with-hyaluronic-acid-P504823?skuId=2636728"
  }),
  productData({
    code: "LIP_GLOSS_096",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "maracuja juicy lip high-shine vinyl gloss",
    type: "Lip Gloss",
    image: skuImage("2737112"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-vinyl-P509396?skuId=2737112"
  }),
  productData({
    code: "LIP_GLOSS_097",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Gucci",
    name: "Oil-In-Water Tint Hydrating Lip Stain",
    type: "Lip Gloss",
    image: skuImage("2960151"),
    link: "https://www.sephora.com/product/oil-in-water-tint-hydrating-lip-stain-P521427?skuId=2960151"
  }),
  productData({
    code: "LIP_GLOSS_098",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Tatcha",
    name: "The Kissu Hydrating & Plumping Lip Mask",
    type: "Lip Gloss",
    image: skuImage("2315315"),
    link: "https://www.sephora.com/product/tatcha-the-kissu-lip-mask-P453225?skuId=2315315"
  }),
  productData({
    code: "LIP_GLOSS_099",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Bobbi Brown",
    name: "Extra Blushing pH Tinted Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2941581"),
    link: "https://www.sephora.com/product/extra-blushing-lip-oil-P520115?skuId=2941581"
  }),
  productData({
    code: "LIP_GLOSS_100",
    category: "Makeup > Lip > Lip Gloss",
    brand: "La Mer",
    name: "The Lip Volumizer for Plumping and Softening",
    type: "Lip Gloss",
    image: skuImage("2748606"),
    link: "https://www.sephora.com/product/the-lip-volumizer-P444964?skuId=2748606"
  }),
  productData({
    code: "LIP_GLOSS_101",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Paula's Choice",
    name: "Pro-Collagen Peptide Plumping Gloss Balm Lip Treatment",
    type: "Lip Gloss",
    image: skuImage("2828416"),
    link: "https://www.sephora.com/product/pro-collagen-peptide-plumping-gloss-balm-lip-treatment-P514674?skuId=2828416"
  }),
  productData({
    code: "LIP_GLOSS_102",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Ice Cooling Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2616613"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-ice-P502222?skuId=2616613"
  }),
  productData({
    code: "LIP_GLOSS_103",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Iris&Romeo",
    name: "Weekend Skin SPF 30 Moisture Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2871663"),
    link: "https://www.sephora.com/product/weekend-skin-spf-30-moisture-lip-balm-P516192?skuId=2871663"
  }),
  productData({
    code: "LIP_GLOSS_104",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Valentino",
    name: "Puffer Complex™ Lip Plumper Gloss",
    type: "Lip Gloss",
    image: skuImage("2870657"),
    link: "https://www.sephora.com/product/puffer-complex-lip-plumper-gloss-P515388?skuId=2870657"
  }),
  productData({
    code: "LIP_GLOSS_105",
    category: "Makeup > Lip > Lip Gloss",
    brand: "CLINIQUE",
    name: "Pop Plush™ Creamy Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2601961"),
    link: "https://www.sephora.com/product/clinique-pop-plush-tm-creamy-lip-gloss-P501008?skuId=2601961"
  }),
  productData({
    code: "LIP_GLOSS_106",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LAWLESS",
    name: "Mini Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Gloss",
    image: skuImage("2555092"),
    link: "https://www.sephora.com/product/lawless-mini-forget-filler-lip-plumper-line-smoothing-gloss-P483470?skuId=2555092"
  }),
  productData({
    code: "LIP_GLOSS_107",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MILK MAKEUP",
    name: "KUSH Hydrating Sheer Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2742922"),
    link: "https://www.sephora.com/product/milk-makeup-kush-hydrating-sheer-tinted-lip-oil-P509474?skuId=2742922"
  }),
  productData({
    code: "LIP_GLOSS_108",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Tower 28 Beauty",
    name: "SOS LipSoftie® Hydrating Lip Treatment Balm",
    type: "Lip Gloss",
    image: skuImage("2735207"),
    link: "https://www.sephora.com/product/tower-28-sos-lipsoftie-hydrating-lip-treatment-balm-P509899?skuId=2735207"
  }),
  productData({
    code: "LIP_GLOSS_109",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Bobbi Brown",
    name: "Extra Plump Hydrating Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2769198"),
    link: "https://www.sephora.com/product/bobbi-brown-extra-plump-lip-serum-P504216?skuId=2769198"
  }),
  productData({
    code: "LIP_GLOSS_110",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Sarah Creal",
    name: "No Further Questions High Glide Peptide Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2888709"),
    link: "https://www.sephora.com/product/sarah-creal-no-further-questions-high-glide-peptide-lip-gloss-P517011?skuId=2888709"
  }),
  productData({
    code: "LIP_GLOSS_111",
    category: "Makeup > Lip > Lip Gloss",
    brand: "PATRICK TA",
    name: "Mini Major Volume Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2760338"),
    link: "https://www.sephora.com/product/patrick-ta-mini-major-volume-plumping-lip-gloss-P511548?skuId=2760338"
  }),
  productData({
    code: "LIP_GLOSS_112",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Mango People",
    name: "Hydrating Glossy Fruit Lip Stain",
    type: "Lip Gloss",
    image: skuImage("2887719"),
    link: "https://www.sephora.com/product/hydrating-glossy-fruit-lip-stain-P519492?skuId=2887719"
  }),
  productData({
    code: "LIP_GLOSS_113",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "Lip Lustre Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2116499"),
    link: "https://www.sephora.com/product/lip-lustre-lip-gloss-P433864?skuId=2116499"
  }),
  productData({
    code: "LIP_GLOSS_114",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "Lip Lustre Lip Gloss - Pillow Talk Collection",
    type: "Lip Gloss",
    image: skuImage("2245199"),
    link: "https://www.sephora.com/product/charlotte-tilbury-lip-lustre-lip-gloss-pillow-talk-collection-P455323?skuId=2245199"
  }),
  productData({
    code: "LIP_GLOSS_115",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Bobbi Brown",
    name: "Crushed Oil-Infused Tinted Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2306686"),
    link: "https://www.sephora.com/product/bobbi-brown-crushed-oil-infused-gloss-P454116?skuId=2306686"
  }),
  productData({
    code: "LIP_GLOSS_116",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Westman Atelier",
    name: "Squeaky Clean Liquid Lip Hydrating Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2845717"),
    link: "https://www.sephora.com/product/westman-atelier-squeaky-clean-liquid-lip-balm-P469873?skuId=2845717"
  }),
  productData({
    code: "LIP_GLOSS_117",
    category: "Makeup > Lip > Lip Gloss",
    brand: "caliray",
    name: "Socal Superbloom Dewy Lip & Cheek Soft Stain Tint",
    type: "Lip Gloss",
    image: skuImage("2698306"),
    link: "https://www.sephora.com/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322?skuId=2698306"
  }),
  productData({
    code: "LIP_GLOSS_118",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LIXR Beauty",
    name: "Lixstick™ Creamy Lip +Cheek Tint Stick",
    type: "Lip Gloss",
    image: skuImage("2955201"),
    link: "https://www.sephora.com/product/lixr-lixstick-multi-tint-P521064?skuId=2955201"
  }),
  productData({
    code: "LIP_GLOSS_119",
    category: "Makeup > Lip > Lip Gloss",
    brand: "TOM FORD",
    name: "Soleil High-Shine Tinted Glow Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2966513"),
    link: "https://www.sephora.com/product/soleil-high-shine-tinted-glow-plumping-lip-gloss-P522126?skuId=2966513"
  }),
  productData({
    code: "LIP_GLOSS_120",
    category: "Makeup > Lip > Lip Gloss",
    brand: "YSE Beauty",
    name: "Like A Gloss 3-in-1 Hydrating Lip Tint",
    type: "Lip Gloss",
    image: skuImage("2886216"),
    link: "https://www.sephora.com/product/like-gloss-3-in-1-hydrating-lip-tint-P517107?skuId=2886216"
  }),
  productData({
    code: "LIP_GLOSS_121",
    category: "Makeup > Lip > Lip Gloss",
    brand: "BASMA",
    name: "The Ultra-Hydrating Liquid Lipstick",
    type: "Lip Gloss",
    image: skuImage("2847580"),
    link: "https://www.sephora.com/product/the-high-pigment-blurring-gloss-balm-P515726?skuId=2847580"
  }),
  productData({
    code: "LIP_GLOSS_122",
    category: "Makeup > Lip > Lip Gloss",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Lip Plumper Lip Gloss Makeup Gift Set",
    type: "Lip Gloss",
    image: skuImage("2907764"),
    link: "https://www.sephora.com/product/outrageous-plump-set-P518413?skuId=2907764"
  }),
  productData({
    code: "LIP_GLOSS_123",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Clarins",
    name: "Lip Perfector Peptide-Plumping & Hydrating Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2774834"),
    link: "https://www.sephora.com/product/clarins-lip-perfector-sheer-lip-gloss-P512207?skuId=2774834"
  }),
  productData({
    code: "LIP_GLOSS_124",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "on-the-go mascara & lip duo set",
    type: "Lip Gloss",
    image: skuImage("2942928"),
    link: "https://www.sephora.com/product/on-the-go-mascara-lip-duo-P520774?skuId=2942928"
  }),
  productData({
    code: "LIP_GLOSS_125",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NARS",
    name: "Afterglow Sheer Hydrating Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2842391"),
    link: "https://www.sephora.com/product/afterglow-lip-oil-P514562?skuId=2842391"
  }),
  productData({
    code: "LIP_GLOSS_126",
    category: "Makeup > Lip > Lip Gloss",
    brand: "tarte",
    name: "maracuja juicy lip pH powered plumping shift with hyaluronic acid",
    type: "Lip Gloss",
    image: skuImage("2692317"),
    link: "https://www.sephora.com/product/tarte-tarte-maracuja-juicy-lip-plump-shift-P506268?skuId=2692317"
  }),
  productData({
    code: "LIP_GLOSS_127",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "K.I.S.S.I.N.G Lipstick and Lip Gloss Duos",
    type: "Lip Gloss",
    image: skuImage("2765873"),
    link: "https://www.sephora.com/product/charlotte-tilbury-k-i-s-s-i-n-g-lipstick-and-lip-gloss-duos-P511724?skuId=2765873"
  }),
  productData({
    code: "LIP_GLOSS_128",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Givenchy",
    name: "Rose Perfecto Hydrating Tinted Lip Balm & Gloss",
    type: "Lip Gloss",
    image: skuImage("2749554"),
    link: "https://www.sephora.com/product/givenchy-le-rose-perfecto-liquid-balm-P457245?skuId=2749554"
  }),
  productData({
    code: "LIP_GLOSS_129",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Too Faced",
    name: "Pillow Balm Hydrating Lip Treatment Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2839421"),
    link: "https://www.sephora.com/product/pillow-balm-hydrating-lip-treatment-lip-balm-P514911?skuId=2839421"
  }),
  productData({
    code: "LIP_GLOSS_130",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kaja",
    name: "Jelly Charm Glazed Lip Stain & Blush With Keychain",
    type: "Lip Gloss",
    image: skuImage("2646545"),
    link: "https://www.sephora.com/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365?skuId=2646545"
  }),
  productData({
    code: "LIP_GLOSS_131",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LIXR Beauty",
    name: "Lip Lixr Hydrating Tinted Lip Mask",
    type: "Lip Gloss",
    image: skuImage("2954865"),
    link: "https://www.sephora.com/product/lixr-lip-mask-P521063?skuId=2954865"
  }),
  productData({
    code: "LIP_GLOSS_132",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Hydrating Tinted Lip Oil",
    type: "Lip Gloss",
    image: skuImage("2571941"),
    link: "https://www.sephora.com/product/phd-hybrid-lip-oil-P500283?skuId=2571941"
  }),
  productData({
    code: "LIP_GLOSS_133",
    category: "Makeup > Lip > Lip Gloss",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Lip Snatcher Hydrating Liquid Lipstick and Lip Gloss Duo",
    type: "Lip Gloss",
    image: skuImage("2648228"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-lip-snatcher-hydrating-liquid-lipstick-lip-gloss-duo-P504363?skuId=2648228"
  }),
  productData({
    code: "LIP_GLOSS_134",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Gucci",
    name: "Hydrating Plumping Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2735702"),
    link: "https://www.sephora.com/product/gucci-hydrating-plumping-lip-gloss-P509299?skuId=2735702"
  }),
  productData({
    code: "LIP_GLOSS_135",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAKEUP BY MARIO",
    name: "Hydrating SuperShine™ Lip Gloss Duo Gift Set",
    type: "Lip Gloss",
    image: skuImage("2906063"),
    link: "https://www.sephora.com/product/makeup-by-mario-hydrating-supershine-lip-gloss-duo-gift-set-P518387?skuId=2906063"
  }),
  productData({
    code: "LIP_GLOSS_136",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAKE UP FOR EVER",
    name: "Mini Artist Color Pencil Lip Liner & Lip Gloss Kit",
    type: "Lip Gloss",
    image: skuImage("2972727"),
    link: "https://www.sephora.com/product/mini-artist-color-pencil-super-boost-gloss-duo-P522855?skuId=2972727"
  }),
  productData({
    code: "LIP_GLOSS_137",
    category: "Makeup > Lip > Lip Gloss",
    brand: "ISAMAYA",
    name: "Lip Lacq- Maximising Lip Plumping Serum",
    type: "Lip Gloss",
    image: skuImage("2855872"),
    link: "https://www.sephora.com/product/lip-lacq-maximising-lip-plumping-serum-P515446?skuId=2855872"
  }),
  productData({
    code: "LIP_GLOSS_138",
    category: "Makeup > Lip > Lip Gloss",
    brand: "LAWLESS",
    name: "Jumbo Queen Sized Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Gloss",
    image: skuImage("2741627"),
    link: "https://www.sephora.com/product/lawless-jumbo-queen-sized-forget-filler-lip-plumper-line-smoothing-gloss-P509060?skuId=2741627"
  }),
  productData({
    code: "LIP_GLOSS_139",
    category: "Makeup > Lip > Lip Gloss",
    brand: "U Beauty",
    name: "The PLASMA Lip Compound Tinted Lip Treatment with Peptides + Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2950566"),
    link: "https://www.sephora.com/product/u-beauty-the-plasma-lip-compound-tinted-lip-treatment-with-peptides-hyaluronic-acid-P521046?skuId=2950566"
  }),
  productData({
    code: "LIP_GLOSS_140",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NATASHA DENONA",
    name: "My Dream Lip Gloss - Soft & Hydrating Lip Shine",
    type: "Lip Gloss",
    image: skuImage("2597664"),
    link: "https://www.sephora.com/product/my-dream-lip-gloss-soft-hydrating-lip-shine-P502353?skuId=2597664"
  }),
  productData({
    code: "LIP_GLOSS_141",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Charlotte Tilbury",
    name: "Collagen Lip Bath Gloss - Walk of No Shame Collection",
    type: "Lip Gloss",
    image: skuImage("2368561"),
    link: "https://www.sephora.com/product/charlotte-tilbury-collagen-lip-bath-gloss-walk-no-shame-collection-P462847?skuId=2368561"
  }),
  productData({
    code: "LIP_GLOSS_142",
    category: "Makeup > Lip > Lip Gloss",
    brand: "caliray",
    name: "Big Swell Hydrating Lip Plumper Gloss",
    type: "Lip Gloss",
    image: skuImage("2643500"),
    link: "https://www.sephora.com/product/big-swell-hydrating-lip-plumper-gloss-P508701?skuId=2643500"
  }),
  productData({
    code: "LIP_GLOSS_143",
    category: "Makeup > Lip > Lip Gloss",
    brand: "ISAMAYA",
    name: "Hyalurolip Lip Plumper with Hyaluronic Acid",
    type: "Lip Gloss",
    image: skuImage("2855377"),
    link: "https://www.sephora.com/product/hyalurolip-lip-plumper-with-hyaluronic-acid-P515455?skuId=2855377"
  }),
  productData({
    code: "LIP_GLOSS_144",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Bobbi Brown",
    name: "Crushed Oil-Infused Tinted Lip Gloss Shimmer",
    type: "Lip Gloss",
    image: skuImage("2577310"),
    link: "https://www.sephora.com/product/crushed-oil-infused-gloss-shimmer-P500606?skuId=2577310"
  }),
  productData({
    code: "LIP_GLOSS_145",
    category: "Makeup > Lip > Lip Gloss",
    brand: "HUDA BEAUTY",
    name: "Berries and Cream Liquid Blush and Lip Gloss Set",
    type: "Lip Gloss",
    image: skuImage("2932325"),
    link: "https://www.sephora.com/product/berries-cream-cheek-lip-duo-P519807?skuId=2932325"
  }),
  productData({
    code: "LIP_GLOSS_146",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Kosas",
    name: "Plump + Juicy Lip Booster Buttery Treatment",
    type: "Lip Gloss",
    image: skuImage("2600849"),
    link: "https://www.sephora.com/product/plump-juicy-lip-collagen-booster-P500329?skuId=2600849"
  }),
  productData({
    code: "LIP_GLOSS_147",
    category: "Makeup > Lip > Lip Gloss",
    brand: "TOM FORD",
    name: "Ultra Shine Lipstick Color with Glossy Effect",
    type: "Lip Gloss",
    image: skuImage("2857860"),
    link: "https://www.sephora.com/product/ultra-shine-lip-color-P429018?skuId=2857860"
  }),
  productData({
    code: "LIP_GLOSS_148",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Dr. Jart+",
    name: "Ceramidin™ Hydrating Ceramide Lip Balm for Dry Lips",
    type: "Lip Gloss",
    image: skuImage("2765097"),
    link: "https://www.sephora.com/product/dr-jart-ceramidin-tm-hydrating-ceramide-lip-balm-for-dry-lips-P511549?skuId=2765097"
  }),
  productData({
    code: "LIP_GLOSS_149",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Iconic London",
    name: "Lip Plumping Gloss",
    type: "Lip Gloss",
    image: skuImage("2380301"),
    link: "https://www.sephora.com/product/lip-plumping-gloss-P461218?skuId=2380301"
  }),
  productData({
    code: "LIP_GLOSS_150",
    category: "Makeup > Lip > Lip Gloss",
    brand: "MAED",
    name: "Signature Lip Pigment Matte Liquid Lipstick",
    type: "Lip Gloss",
    image: skuImage("2912673"),
    link: "https://www.sephora.com/product/signature-lip-pigment-matte-liquid-lipstick-P518291?skuId=2912673"
  }),
  productData({
    code: "LIP_GLOSS_151",
    category: "Makeup > Lip > Lip Gloss",
    brand: "fresh",
    name: "Sugar Advanced Therapy Lip Rescue Ointment",
    type: "Lip Gloss",
    image: skuImage("2737880"),
    link: "https://www.sephora.com/product/fresh-sugar-advanced-therapy-lip-rescue-ointment-P509778?skuId=2737880"
  }),
  productData({
    code: "LIP_GLOSS_152",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Mango People",
    name: "Hydrating Glossy Mango Butter Lip Balm",
    type: "Lip Gloss",
    image: skuImage("2774917"),
    link: "https://www.sephora.com/product/mango-people-hydrating-glossy-mango-butter-lip-balm-P512272?skuId=2774917"
  }),
  productData({
    code: "LIP_GLOSS_153",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Fashion Fair",
    name: "Lip Teasers Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2591808"),
    link: "https://www.sephora.com/product/fashion-fair-lip-teasers-P502223?skuId=2591808"
  }),
  productData({
    code: "LIP_GLOSS_154",
    category: "Makeup > Lip > Lip Gloss",
    brand: "BeautyBio",
    name: "The Pout Sparkling Rosé Hyaluronic Acid Collagen Plumping Lip Serum",
    type: "Lip Gloss",
    image: skuImage("2163079"),
    link: "https://www.sephora.com/product/the-pout-sparkling-rose-hyaluronic-acid-collagen-plumping-lip-serum-P438635?skuId=2163079"
  }),
  productData({
    code: "LIP_GLOSS_155",
    category: "Makeup > Lip > Lip Gloss",
    brand: "NARS",
    name: "Mini Afterglow Liquid Blush & Lip Shine Duo",
    type: "Lip Gloss",
    image: skuImage("2773380"),
    link: "https://www.sephora.com/product/nars-mini-afterglow-blush-lip-shine-duo-P512183?skuId=2773380"
  }),
  productData({
    code: "LIP_GLOSS_156",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Saint Jane Beauty",
    name: "Luxury Lip Shine – Longwear Hydration Lip Oil with Vitamin C",
    type: "Lip Gloss",
    image: skuImage("2599322"),
    link: "https://www.sephora.com/product/luxury-lip-shine-longwear-hydration-gloss-with-vitamin-c-P501185?skuId=2599322"
  }),
  productData({
    code: "LIP_GLOSS_157",
    category: "Makeup > Lip > Lip Gloss",
    brand: "caliray",
    name: "Double Dip Lipguard Set",
    type: "Lip Gloss",
    image: skuImage("2961803"),
    link: "https://www.sephora.com/product/lipguard-duo-set-P522119?skuId=2961803"
  }),
  productData({
    code: "LIP_GLOSS_158",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Too Faced",
    name: "Lip Injection Extreme Plumping Clicks Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2839520"),
    link: "https://www.sephora.com/product/lip-injection-juicy-clicks-P514910?skuId=2839520"
  }),
  productData({
    code: "LIP_GLOSS_159",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Grande Cosmetics",
    name: "GrandeLIPS Hydrating Lip Plumper Gloss",
    type: "Lip Gloss",
    image: skuImage("2350171"),
    link: "https://www.sephora.com/product/grandelips-hydrating-lip-plumper-P407471?skuId=2350171"
  }),
  productData({
    code: "LIP_GLOSS_160",
    category: "Makeup > Lip > Lip Gloss",
    brand: "Gucci",
    name: "Luminous Face & Lip Gloss",
    type: "Lip Gloss",
    image: skuImage("2357721"),
    link: "https://www.sephora.com/product/gucci-eclat-de-beaute-effet-lumiere-all-over-face-lip-gloss-P457649?skuId=2357721"
  }),

  // ==================================================
  // Makeup > Lip > Lip Liner
  // Products: 39
  // ==================================================
  productData({
    code: "LIP_LINER_001",
    category: "Makeup > Lip > Lip Liner",
    brand: "rhode",
    name: "Peptide Lip Shape Contouring Lip Shaper",
    type: "Lip Liner",
    image: skuImage("2895985"),
    link: "https://www.sephora.com/product/peptide-lip-shape-P517509?skuId=2895985"
  }),
  productData({
    code: "LIP_LINER_002",
    category: "Makeup > Lip > Lip Liner",
    brand: "Fenty Beauty by Rihanna",
    name: "Trace'd Out Longwear Waterproof Pencil Lip Liner",
    type: "Lip Liner",
    image: skuImage("2925279"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-trace-d-out-longwear-waterproof-pencil-lip-liner-P512259?skuId=2925279"
  }),
  productData({
    code: "LIP_LINER_003",
    category: "Makeup > Lip > Lip Liner",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Pencil Long-Lasting Lip Liner",
    type: "Lip Liner",
    image: skuImage("2946648"),
    link: "https://www.sephora.com/product/artist-color-pencil-P430969?skuId=2946648"
  }),
  productData({
    code: "LIP_LINER_004",
    category: "Makeup > Lip > Lip Liner",
    brand: "m.ph by Mary Phillips",
    name: "The Overliner Lip Liner Pencil",
    type: "Lip Liner",
    image: skuImage("2884799"),
    link: "https://www.sephora.com/product/mph-mary-phillips-overliner-lip-liner-pencil-P518755?skuId=2884799"
  }),
  productData({
    code: "LIP_LINER_005",
    category: "Makeup > Lip > Lip Liner",
    brand: "Glossier",
    name: "Lip Line Enhancing Hydrating Longwear Lip Liner Pencil",
    type: "Lip Liner",
    image: skuImage("2771483"),
    link: "https://www.sephora.com/product/glossier-lip-line-enhancing-hydrating-longwear-lip-liner-pencil-P511969?skuId=2771483"
  }),
  productData({
    code: "LIP_LINER_006",
    category: "Makeup > Lip > Lip Liner",
    brand: "ILIA",
    name: "Lip Sketch Hydrating Lipstick + Lip Liner Crayon",
    type: "Lip Liner",
    image: skuImage("2885234"),
    link: "https://www.sephora.com/product/ilia-lip-sketch-hydrating-crayon-P510654?skuId=2885234"
  }),
  productData({
    code: "LIP_LINER_007",
    category: "Makeup > Lip > Lip Liner",
    brand: "NATASHA DENONA",
    name: "I Need A Nude Lip Liner",
    type: "Lip Liner",
    image: skuImage("2933117"),
    link: "https://www.sephora.com/product/natasha-denona-i-need-nude-lip-liner-P467783?skuId=2933117"
  }),
  productData({
    code: "LIP_LINER_008",
    category: "Makeup > Lip > Lip Liner",
    brand: "Too Faced",
    name: "Lip Injection Extreme Lip Shaper Plumping Lip Liner",
    type: "Lip Liner",
    image: skuImage("2795631"),
    link: "https://www.sephora.com/product/too-faced-lip-injection-extreme-lip-shaper-plumping-lip-liner-P505390?skuId=2795631"
  }),
  productData({
    code: "LIP_LINER_009",
    category: "Makeup > Lip > Lip Liner",
    brand: "MAC Cosmetics",
    name: "Lipglazer Glossy Lip Liner",
    type: "Lip Liner",
    image: skuImage("2884468"),
    link: "https://www.sephora.com/product/lipglazer-glossy-lip-liner-P517615?skuId=2884468"
  }),
  productData({
    code: "LIP_LINER_010",
    category: "Makeup > Lip > Lip Liner",
    brand: "REFY",
    name: "Lip Sculpt Longwear Liner",
    type: "Lip Liner",
    image: skuImage("2835619"),
    link: "https://www.sephora.com/product/lip-sculpt-longwear-liner-P515735?skuId=2835619"
  }),
  productData({
    code: "LIP_LINER_011",
    category: "Makeup > Lip > Lip Liner",
    brand: "Urban Decay",
    name: "24/7 Glide-On Waterproof Lip Liner",
    type: "Lip Liner",
    image: skuImage("2790459"),
    link: "https://www.sephora.com/product/24-7-glide-on-lip-pencil-P219001?skuId=2790459"
  }),
  productData({
    code: "LIP_LINER_012",
    category: "Makeup > Lip > Lip Liner",
    brand: "Kosas",
    name: "Hotliner Hyaluronic Acid Contouring Lip Liner",
    type: "Lip Liner",
    image: skuImage("2767408"),
    link: "https://www.sephora.com/product/kosas-hotliner-hyaluronic-acid-contouring-lip-liner-P510999?skuId=2767408"
  }),
  productData({
    code: "LIP_LINER_013",
    category: "Makeup > Lip > Lip Liner",
    brand: "Charlotte Tilbury",
    name: "Super Nudes Lip Cheat Contour Duo Lip Liner",
    type: "Lip Liner",
    image: skuImage("2868032"),
    link: "https://www.sephora.com/product/lip-cheat-contour-duo-lip-liner-P516187?skuId=2868032"
  }),
  productData({
    code: "LIP_LINER_014",
    category: "Makeup > Lip > Lip Liner",
    brand: "LAWLESS",
    name: "Forget The Filler Definer Lip Liner",
    type: "Lip Liner",
    image: skuImage("2862894"),
    link: "https://www.sephora.com/product/lawless-forget-filler-definer-lip-liner-P468455?skuId=2862894"
  }),
  productData({
    code: "LIP_LINER_015",
    category: "Makeup > Lip > Lip Liner",
    brand: "Westman Atelier",
    name: "Lip Shape Defining Lip Liner",
    type: "Lip Liner",
    image: skuImage("2869006"),
    link: "https://www.sephora.com/product/lip-shape-defining-lip-liner-P516980?skuId=2869006"
  }),
  productData({
    code: "LIP_LINER_016",
    category: "Makeup > Lip > Lip Liner",
    brand: "DIOR",
    name: "Rouge Dior Contour No-Transfer Lip Liner Pencil",
    type: "Lip Liner",
    image: skuImage("2789345"),
    link: "https://www.sephora.com/product/dior-rouge-dior-contour-no-transfer-lip-liner-pencil-P510564?skuId=2789345"
  }),
  productData({
    code: "LIP_LINER_017",
    category: "Makeup > Lip > Lip Liner",
    brand: "tarte",
    name: "maracuja juicy lip liner",
    type: "Lip Liner",
    image: skuImage("2849701"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-liner-P504210?skuId=2849701"
  }),
  productData({
    code: "LIP_LINER_018",
    category: "Makeup > Lip > Lip Liner",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Lip Liner",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "LIP_LINER_019",
    category: "Makeup > Lip > Lip Liner",
    brand: "PAT McGRATH LABS",
    name: "Dramatique Mega Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2766814"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-dramatique-mega-lip-pencil-P511701?skuId=2766814"
  }),
  productData({
    code: "LIP_LINER_020",
    category: "Makeup > Lip > Lip Liner",
    brand: "PATRICK TA",
    name: "Monochrome Moment Precision Lip Crayon",
    type: "Lip Liner",
    image: skuImage("2281681"),
    link: "https://www.sephora.com/product/monochrome-moment-precision-lip-crayon-P451937?skuId=2281681"
  }),
  productData({
    code: "LIP_LINER_021",
    category: "Makeup > Lip > Lip Liner",
    brand: "PAT McGRATH LABS",
    name: "Lip Sculpt + Shade Lipstick and Lip Liner Contour Duo",
    type: "Lip Liner",
    image: skuImage("2972362"),
    link: "https://www.sephora.com/product/lip-sculpt-shade-lipstick-lip-liner-contour-duo-P521642?skuId=2972362"
  }),
  productData({
    code: "LIP_LINER_022",
    category: "Makeup > Lip > Lip Liner",
    brand: "NARS",
    name: "Powermatte High-Intensity Long-Lasting Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2756104"),
    link: "https://www.sephora.com/product/powermatte-high-intensity-long-lasting-lip-pencil-P507545?skuId=2756104"
  }),
  productData({
    code: "LIP_LINER_023",
    category: "Makeup > Lip > Lip Liner",
    brand: "tarte",
    name: "Maracuja Juicy Plump Liner",
    type: "Lip Liner",
    image: skuImage("2977361"),
    link: "https://www.sephora.com/product/maracuja-juicy-plump-liner-P522215?skuId=2977361"
  }),
  productData({
    code: "LIP_LINER_024",
    category: "Makeup > Lip > Lip Liner",
    brand: "HUNG VANNGO BEAUTY",
    name: "Accentuating Longwear Lip Liner",
    type: "Lip Liner",
    image: skuImage("2902963"),
    link: "https://www.sephora.com/product/accentuating-longwear-lip-liner-P517858?skuId=2902963"
  }),
  productData({
    code: "LIP_LINER_025",
    category: "Makeup > Lip > Lip Liner",
    brand: "Hourglass",
    name: "Shape & Sculpt Lip Liner",
    type: "Lip Liner",
    image: skuImage("2738896"),
    link: "https://www.sephora.com/product/hourglass-shape-sculpt-lip-liner-P509656?skuId=2738896"
  }),
  productData({
    code: "LIP_LINER_026",
    category: "Makeup > Lip > Lip Liner",
    brand: "Bobbi Brown",
    name: "Lip Liner Pencil",
    type: "Lip Liner",
    image: skuImage("2892149"),
    link: "https://www.sephora.com/product/lip-liner-pencil-P518100?skuId=2892149"
  }),
  productData({
    code: "LIP_LINER_027",
    category: "Makeup > Lip > Lip Liner",
    brand: "Fara Homidi",
    name: "Smudge & Contour Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2840221"),
    link: "https://www.sephora.com/product/fara-homidi-smudge-contour-lip-pencil-P511650?skuId=2840221"
  }),
  productData({
    code: "LIP_LINER_028",
    category: "Makeup > Lip > Lip Liner",
    brand: "NARS",
    name: "Precision Lip Liner",
    type: "Lip Liner",
    image: skuImage("1975275"),
    link: "https://www.sephora.com/product/precision-lip-liner-P422073?skuId=1975275"
  }),
  productData({
    code: "LIP_LINER_029",
    category: "Makeup > Lip > Lip Liner",
    brand: "Givenchy",
    name: "Lip Liner",
    type: "Lip Liner",
    image: skuImage("1918275"),
    link: "https://www.sephora.com/product/lip-liner-P183916?skuId=1918275"
  }),
  productData({
    code: "LIP_LINER_030",
    category: "Makeup > Lip > Lip Liner",
    brand: "TOM FORD",
    name: "Runway Matte Lip Liner Pencil for Sculpted Definition",
    type: "Lip Liner",
    image: skuImage("2810893"),
    link: "https://www.sephora.com/product/tom-ford-lip-liner-P513674?skuId=2810893"
  }),
  productData({
    code: "LIP_LINER_031",
    category: "Makeup > Lip > Lip Liner",
    brand: "PAT McGRATH LABS",
    name: "Legendary Longwear Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2890705"),
    link: "https://www.sephora.com/product/legendary-longwear-lip-pencil-P518074?skuId=2890705"
  }),
  productData({
    code: "LIP_LINER_032",
    category: "Makeup > Lip > Lip Liner",
    brand: "Laura Mercier",
    name: "Caviar Perfecting Long-Lasting Lip Liner with Vitamin E",
    type: "Lip Liner",
    image: skuImage("2919207"),
    link: "https://www.sephora.com/product/caviar-perfecting-long-lasting-lip-liner-with-vitamin-e-P520519?skuId=2919207"
  }),
  productData({
    code: "LIP_LINER_033",
    category: "Makeup > Lip > Lip Liner",
    brand: "NATASHA DENONA",
    name: "I Need A Rose Long Lasting Easy Glide Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2512507"),
    link: "https://www.sephora.com/product/natasha-denona-i-need-rose-long-lasting-easy-glide-lip-pencil-P482051?skuId=2512507"
  }),
  productData({
    code: "LIP_LINER_034",
    category: "Makeup > Lip > Lip Liner",
    brand: "MAKE UP FOR EVER",
    name: "Mini Artist Color Pencil Lip Liner & Lip Gloss Kit",
    type: "Lip Liner",
    image: skuImage("2972727"),
    link: "https://www.sephora.com/product/mini-artist-color-pencil-super-boost-gloss-duo-P522855?skuId=2972727"
  }),
  productData({
    code: "LIP_LINER_035",
    category: "Makeup > Lip > Lip Liner",
    brand: "Fara Homidi",
    name: "Mini Smudge & Contour Lip Pencil",
    type: "Lip Liner",
    image: skuImage("2911048"),
    link: "https://www.sephora.com/product/smudge-contour-lip-pencil-mini-P519730?skuId=2911048"
  }),
  productData({
    code: "LIP_LINER_036",
    category: "Makeup > Lip > Lip Liner",
    brand: "ISAMAYA",
    name: "Lip Liner- Universal Lip Liner",
    type: "Lip Liner",
    image: skuImage("2855625"),
    link: "https://www.sephora.com/product/lip-liner-universal-lip-liner-P515464?skuId=2855625"
  }),
  productData({
    code: "LIP_LINER_037",
    category: "Makeup > Lip > Lip Liner",
    brand: "Urban Decay",
    name: "Ultimate Ozone Multipurpose Primer Pencil",
    type: "Lip Liner",
    image: skuImage("1704550"),
    link: "https://www.sephora.com/product/ultimate-ozone-multipurpose-primer-pencil-P395733?skuId=1704550"
  }),
  productData({
    code: "LIP_LINER_038",
    category: "Makeup > Lip > Lip Liner",
    brand: "PAT McGRATH LABS",
    name: "Mini Dramatique Mega Lip Pencil Set",
    type: "Lip Liner",
    image: skuImage("2840080"),
    link: "https://www.sephora.com/product/mini-dramatique-mega-lip-pencil-duo-P514912?skuId=2840080"
  }),
  productData({
    code: "LIP_LINER_039",
    category: "Makeup > Lip > Lip Liner",
    brand: "Fashion Fair",
    name: "Iconic Lip Shaper Liner",
    type: "Lip Liner",
    image: skuImage("2712610"),
    link: "https://www.sephora.com/product/iconic-lip-shaper-P507457?skuId=2712610"
  }),

  // ==================================================
  // Makeup > Lip > Lipstick
  // Products: 144
  // ==================================================
  productData({
    code: "LIPSTICK_001",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "M·A·Cximal Silky Matte 12HR Wear Lipstick",
    type: "Lipstick",
    image: skuImage("2764306"),
    link: "https://www.sephora.com/product/mac-cosmetics-m-a-cximal-silky-matte-lipstick-P510799?skuId=2764306"
  }),
  productData({
    code: "LIPSTICK_002",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Cream Lip Stain 10HR Liquid Lipstick",
    type: "Lipstick",
    image: skuImage("2760981"),
    link: "https://www.sephora.com/product/cream-lip-stain-liquid-lipstick-P281411?skuId=2760981"
  }),
  productData({
    code: "LIPSTICK_003",
    category: "Makeup > Lip > Lipstick",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Stix High-Shine Gloss Stick",
    type: "Lipstick",
    image: skuImage("2950129"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-stix-high-shine-gloss-stick-P511572?skuId=2950129"
  }),
  productData({
    code: "LIPSTICK_004",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Satin Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2564474"),
    link: "https://www.sephora.com/product/satin-hydrating-lipstick-P501496?skuId=2564474"
  }),
  productData({
    code: "LIPSTICK_005",
    category: "Makeup > Lip > Lipstick",
    brand: "Anastasia Beverly Hills",
    name: "Full-Pigment Matte & Satin Velvet Lipstick",
    type: "Lipstick",
    image: skuImage("2882280"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-matte-satin-velvet-lipstick-P480576?skuId=2882280"
  }),
  productData({
    code: "LIPSTICK_006",
    category: "Makeup > Lip > Lipstick",
    brand: "CLINIQUE",
    name: "Almost Lipstick in Black and Pink Honey",
    type: "Lipstick",
    image: skuImage("70680"),
    link: "https://www.sephora.com/product/almost-lipstick-P122751?skuId=70680"
  }),
  productData({
    code: "LIPSTICK_007",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "M·A·Cximal Sleek Satin 8HR Full-Coverage Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2826113"),
    link: "https://www.sephora.com/product/mac-cosmetics-macximal-sleek-satin-lipstick-P513655?skuId=2826113"
  }),
  productData({
    code: "LIPSTICK_008",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "K.I.S.S.I.N.G Satin Shine Lipstick",
    type: "Lipstick",
    image: skuImage("2951275"),
    link: "https://www.sephora.com/product/k-i-s-s-i-n-g-lipstick-P433531?skuId=2951275"
  }),
  productData({
    code: "LIPSTICK_009",
    category: "Makeup > Lip > Lipstick",
    brand: "Prada",
    name: "Prada Monochrome Soft Matte Blur Lipstick",
    type: "Lipstick",
    image: skuImage("2754125"),
    link: "https://www.sephora.com/product/prada-beauty-monochrome-soft-matte-refillable-lipstick-P509660?skuId=2754125"
  }),
  productData({
    code: "LIPSTICK_010",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Matte Velvet Lipstick",
    type: "Lipstick",
    image: skuImage("2666840"),
    link: "https://www.sephora.com/product/matte-velvet-lipstick-P506548?skuId=2666840"
  }),
  productData({
    code: "LIPSTICK_011",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Long Lasting Blush Balm Sheer Lip Tint",
    type: "Lipstick",
    image: skuImage("2954766"),
    link: "https://www.sephora.com/product/pillow-talk-long-lasting-blush-balm-sheer-lip-tint-P522077?skuId=2954766"
  }),
  productData({
    code: "LIPSTICK_012",
    category: "Makeup > Lip > Lipstick",
    brand: "DIOR",
    name: "Dior Addict Glass Lipstick Ultra-Shine Hydrating Lip Gloss Stick",
    type: "Lipstick",
    image: skuImage("2962496"),
    link: "https://www.sephora.com/product/dior-addict-glass-lipstick-ultra-shine-hydrating-lip-gloss-stick-P522692?skuId=2962496"
  }),
  productData({
    code: "LIPSTICK_013",
    category: "Makeup > Lip > Lipstick",
    brand: "MERIT",
    name: "Signature Lip Lightweight Lipstick",
    type: "Lipstick",
    image: skuImage("2945178"),
    link: "https://www.sephora.com/product/merit-signature-lip-lightweight-lipstick-P481403?skuId=2945178"
  }),
  productData({
    code: "LIPSTICK_014",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "Mini M·A·Cximal Silky Matte 12HR Wear Lipstick",
    type: "Lipstick",
    image: skuImage("2799120"),
    link: "https://www.sephora.com/product/mac-cosmetics-mini-m-a-cximal-silky-matte-lipstick-P511922?skuId=2799120"
  }),
  productData({
    code: "LIPSTICK_015",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "About That Shine Lacquer Shine Lipstick",
    type: "Lipstick",
    image: skuImage("2730158"),
    link: "https://www.sephora.com/product/sc-rouge-lacquer-P511209?skuId=2730158"
  }),
  productData({
    code: "LIPSTICK_016",
    category: "Makeup > Lip > Lipstick",
    brand: "Prada",
    name: "Prada Light Glowing Lip Oil Stick",
    type: "Lipstick",
    image: skuImage("2853265"),
    link: "https://www.sephora.com/product/prada-light-glowing-lip-oil-stick-P516420?skuId=2853265"
  }),
  productData({
    code: "LIPSTICK_017",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKEUP BY MARIO",
    name: "SuperSatin® Lipstick",
    type: "Lipstick",
    image: skuImage("2731636"),
    link: "https://www.sephora.com/product/makeup-by-mario-supersatin-lipstick-P509305?skuId=2731636"
  }),
  productData({
    code: "LIPSTICK_018",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "Lustreglass Sheer-Shine Hydrating 8HR Lipstick",
    type: "Lipstick",
    image: skuImage("2837433"),
    link: "https://www.sephora.com/product/mac-cosmetics-lustreglass-lipstick-P474074?skuId=2837433"
  }),
  productData({
    code: "LIPSTICK_019",
    category: "Makeup > Lip > Lipstick",
    brand: "Prada",
    name: "Monochrome Hyper Matte Refillable Lipstick",
    type: "Lipstick",
    image: skuImage("2754083"),
    link: "https://www.sephora.com/product/prada-beauty-monochrome-hyper-matte-refillable-lipstick-P509658?skuId=2754083"
  }),
  productData({
    code: "LIPSTICK_020",
    category: "Makeup > Lip > Lipstick",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Lip Oil Stick",
    type: "Lipstick",
    image: skuImage("2830065"),
    link: "https://www.sephora.com/product/love-shine-lip-oil-stick-P377710?skuId=2830065"
  }),
  productData({
    code: "LIPSTICK_021",
    category: "Makeup > Lip > Lipstick",
    brand: "Westman Atelier",
    name: "HydroBalm Sheer Tinted Lipstick with Peptides and Hyaluronic Acid",
    type: "Lipstick",
    image: skuImage("2942142"),
    link: "https://www.sephora.com/product/hydrobalm-tinted-lipstick-P520826?skuId=2942142"
  }),
  productData({
    code: "LIPSTICK_022",
    category: "Makeup > Lip > Lipstick",
    brand: "DIOR",
    name: "Rouge Dior Refillable Lipstick",
    type: "Lipstick",
    image: skuImage("2750966"),
    link: "https://www.sephora.com/product/dior-rouge-dior-lipstick-P467760?skuId=2750966"
  }),
  productData({
    code: "LIPSTICK_023",
    category: "Makeup > Lip > Lipstick",
    brand: "DIOR",
    name: "Dior Addict Shine Lipstick",
    type: "Lipstick",
    image: skuImage("2767093"),
    link: "https://www.sephora.com/product/dior-dior-addict-refillable-shine-lipstick-P481969?skuId=2767093"
  }),
  productData({
    code: "LIPSTICK_024",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Matte Revolution Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2736098"),
    link: "https://www.sephora.com/product/matte-revolution-lipstick-P433530?skuId=2736098"
  }),
  productData({
    code: "LIPSTICK_025",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Cloud Blurred Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2887206"),
    link: "https://www.sephora.com/product/cloud-matte-lipstick-P517857?skuId=2887206"
  }),
  productData({
    code: "LIPSTICK_026",
    category: "Makeup > Lip > Lipstick",
    brand: "MERIT",
    name: "Signature Lip Lightweight Lip Blush",
    type: "Lipstick",
    image: skuImage("2945186"),
    link: "https://www.sephora.com/product/signature-lip-blush-P520546?skuId=2945186"
  }),
  productData({
    code: "LIPSTICK_027",
    category: "Makeup > Lip > Lipstick",
    brand: "HUDA BEAUTY",
    name: "Lip Contour Lip Stain for 12-Hour Wear",
    type: "Lipstick",
    image: skuImage("2870491"),
    link: "https://www.sephora.com/product/huda-beauty-lip-contour-stain-P516661?skuId=2870491"
  }),
  productData({
    code: "LIPSTICK_028",
    category: "Makeup > Lip > Lipstick",
    brand: "GUERLAIN",
    name: "Rouge G Customizable Satin & Velvet Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2925956"),
    link: "https://www.sephora.com/product/rouge-g-customizable-lipstick-bullet-P429915?skuId=2925956"
  }),
  productData({
    code: "LIPSTICK_029",
    category: "Makeup > Lip > Lipstick",
    brand: "m.ph by Mary Phillips",
    name: "Lip Ciggy Sheer Lipstick Balm",
    type: "Lipstick",
    image: skuImage("2884740"),
    link: "https://www.sephora.com/product/mph-mary-phillips-lip-ciggy-hydrating-lipstick-balm-P518754?skuId=2884740"
  }),
  productData({
    code: "LIPSTICK_030",
    category: "Makeup > Lip > Lipstick",
    brand: "Yves Saint Laurent",
    name: "Lovenude Lip Blusher Soft Blurring Lip Color",
    type: "Lipstick",
    image: skuImage("2952828"),
    link: "https://www.sephora.com/product/lovenude-lip-blusher-soft-blurring-lip-color-P520825?skuId=2952828"
  }),
  productData({
    code: "LIPSTICK_031",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "SatinAllure™ Lipstick",
    type: "Lipstick",
    image: skuImage("2670784"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-satinallure-lipstick-P482714?skuId=2670784"
  }),
  productData({
    code: "LIPSTICK_032",
    category: "Makeup > Lip > Lipstick",
    brand: "VIOLETTE_FR",
    name: "BISOU BALM Sheer Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2864403"),
    link: "https://www.sephora.com/product/bisou-balm-sheer-matte-lipstick-P515456?skuId=2864403"
  }),
  productData({
    code: "LIPSTICK_033",
    category: "Makeup > Lip > Lipstick",
    brand: "Gucci",
    name: "Velvet Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2788420"),
    link: "https://www.sephora.com/product/gucci-gucci-rouge-a-levres-mat-matte-lipstick-P453273?skuId=2788420"
  }),
  productData({
    code: "LIPSTICK_034",
    category: "Makeup > Lip > Lipstick",
    brand: "NARS",
    name: "Powermatte High-Intensity Long-Lasting Lip Pencil",
    type: "Lipstick",
    image: skuImage("2756104"),
    link: "https://www.sephora.com/product/powermatte-high-intensity-long-lasting-lip-pencil-P507545?skuId=2756104"
  }),
  productData({
    code: "LIPSTICK_035",
    category: "Makeup > Lip > Lipstick",
    brand: "NARS",
    name: "Afterglow Sensual Shine Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2942597"),
    link: "https://www.sephora.com/product/nars-afterglow-sensual-shine-lipstick-P505364?skuId=2942597"
  }),
  productData({
    code: "LIPSTICK_036",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKEUP BY MARIO",
    name: "Ultra Suede® Lipstick",
    type: "Lipstick",
    image: skuImage("2502433"),
    link: "https://www.sephora.com/product/makeup-by-mario-ultra-suede-lipstick-P477837?skuId=2502433"
  }),
  productData({
    code: "LIPSTICK_037",
    category: "Makeup > Lip > Lipstick",
    brand: "Valentino",
    name: "Spike Valentino Buttery Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2788834"),
    link: "https://www.sephora.com/product/valentino-spike-buttery-matte-lipstick-P512637?skuId=2788834"
  }),
  productData({
    code: "LIPSTICK_038",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "About That Shine Sheer Shine Lipstick",
    type: "Lipstick",
    image: skuImage("2729986"),
    link: "https://www.sephora.com/product/sephora-collection-about-that-shine-sheer-shine-P511183?skuId=2729986"
  }),
  productData({
    code: "LIPSTICK_039",
    category: "Makeup > Lip > Lipstick",
    brand: "NARS",
    name: "Explicit Refillable Satin Lipstick",
    type: "Lipstick",
    image: skuImage("2797181"),
    link: "https://www.sephora.com/product/nars-explicit-refillable-satin-lipstick-P512469?skuId=2797181"
  }),
  productData({
    code: "LIPSTICK_040",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKE UP FOR EVER",
    name: "Rouge Artist For Ever Satin & Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2797504"),
    link: "https://www.sephora.com/product/make-up-for-ever-rouge-artist-forever-lipstick-P512254?skuId=2797504"
  }),
  productData({
    code: "LIPSTICK_041",
    category: "Makeup > Lip > Lipstick",
    brand: "Kosas",
    name: "Wet Stick Moisturizing Shiny Sheer Lipstick with Ceramides",
    type: "Lipstick",
    image: skuImage("2681799"),
    link: "https://www.sephora.com/product/kosas-wet-stick-moisture-lip-shine-P505694?skuId=2681799"
  }),
  productData({
    code: "LIPSTICK_042",
    category: "Makeup > Lip > Lipstick",
    brand: "LAWLESS",
    name: "Forget the Filler Lip-Plumping Line-Smoothing Satin Cream Lipstick",
    type: "Lipstick",
    image: skuImage("2694552"),
    link: "https://www.sephora.com/product/forget-filler-lip-plumping-line-smoothing-satin-cream-lipstick-P506812?skuId=2694552"
  }),
  productData({
    code: "LIPSTICK_043",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "Powder Kiss Lip & Cheek Matte Liquid Mousse",
    type: "Lipstick",
    image: skuImage("2958262"),
    link: "https://www.sephora.com/product/powder-kiss-lip-cheek-mousse-P520514?skuId=2958262"
  }),
  productData({
    code: "LIPSTICK_044",
    category: "Makeup > Lip > Lipstick",
    brand: "Yves Saint Laurent",
    name: "Rouge Pur Couture Caring Satin Lipstick with Ceramides",
    type: "Lipstick",
    image: skuImage("2696011"),
    link: "https://www.sephora.com/product/rouge-pur-couture-lipstick-collection-P400701?skuId=2696011"
  }),
  productData({
    code: "LIPSTICK_045",
    category: "Makeup > Lip > Lipstick",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Atomic Shake High-Shine Longwear Lip Lacquer Lipstick",
    type: "Lipstick",
    image: skuImage("2977841"),
    link: "https://www.sephora.com/product/atomic-shake-lip-lacquer-P522531?skuId=2977841"
  }),
  productData({
    code: "LIPSTICK_046",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Runway Matte Lipstick Color with Hydrating, 12H Longwear",
    type: "Lipstick",
    image: skuImage("2806420"),
    link: "https://www.sephora.com/product/tom-ford-lip-color-lipstick-P513666?skuId=2806420"
  }),
  productData({
    code: "LIPSTICK_047",
    category: "Makeup > Lip > Lipstick",
    brand: "ILIA",
    name: "Lip Sketch Hydrating Lipstick + Lip Liner Crayon",
    type: "Lipstick",
    image: skuImage("2885234"),
    link: "https://www.sephora.com/product/ilia-lip-sketch-hydrating-crayon-P510654?skuId=2885234"
  }),
  productData({
    code: "LIPSTICK_048",
    category: "Makeup > Lip > Lipstick",
    brand: "Kosas",
    name: "Weightless Lip Color Nourishing Satin Lipstick",
    type: "Lipstick",
    image: skuImage("2686343"),
    link: "https://www.sephora.com/product/weightless-lip-color-P441883?skuId=2686343"
  }),
  productData({
    code: "LIPSTICK_049",
    category: "Makeup > Lip > Lipstick",
    brand: "Freck Beauty",
    name: "MAKEOUT CLUB Soft Blur Lipstick",
    type: "Lipstick",
    image: skuImage("2590156"),
    link: "https://www.sephora.com/product/freck-beauty-makeout-club-soft-blur-lipstick-P502850?skuId=2590156"
  }),
  productData({
    code: "LIPSTICK_050",
    category: "Makeup > Lip > Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Sheer Velvet Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2484715"),
    link: "https://www.sephora.com/product/givenchy-le-rouge-sheer-velvet-matte-lipstick-P474948?skuId=2484715"
  }),
  productData({
    code: "LIPSTICK_051",
    category: "Makeup > Lip > Lipstick",
    brand: "DIOR",
    name: "Rouge Dior Forever Liquid Transfer-Proof Lipstick",
    type: "Lipstick",
    image: skuImage("2571453"),
    link: "https://www.sephora.com/product/dior-rouge-dior-forever-liquid-transfer-proof-lipstick-P472977?skuId=2571453"
  }),
  productData({
    code: "LIPSTICK_052",
    category: "Makeup > Lip > Lipstick",
    brand: "LAWLESS",
    name: "Forget the Filler Lip-Plumping Line-Smoothing Tinted Lip Balm",
    type: "Lipstick",
    image: skuImage("2787851"),
    link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-tinted-lip-balm-P504609?skuId=2787851"
  }),
  productData({
    code: "LIPSTICK_053",
    category: "Makeup > Lip > Lipstick",
    brand: "Urban Decay",
    name: "Vice Lip Bond Glossy Longwear Liquid Lipstick",
    type: "Lipstick",
    image: skuImage("2589653"),
    link: "https://www.sephora.com/product/vice-lip-bond-longwear-liquid-lipstick-P501181?skuId=2589653"
  }),
  productData({
    code: "LIPSTICK_054",
    category: "Makeup > Lip > Lipstick",
    brand: "NARS",
    name: "Powermatte Long-Lasting Lipstick",
    type: "Lipstick",
    image: skuImage("2599041"),
    link: "https://www.sephora.com/product/nars-powermatte-lipstick-P501583?skuId=2599041"
  }),
  productData({
    code: "LIPSTICK_055",
    category: "Makeup > Lip > Lipstick",
    brand: "Westman Atelier",
    name: "Lip Suede Hydrating Matte Lipstick with Hyaluronic Acid",
    type: "Lipstick",
    image: skuImage("2845725"),
    link: "https://www.sephora.com/product/westman-atelier-lip-suede-hydrating-matte-lipstick-P510431?skuId=2845725"
  }),
  productData({
    code: "LIPSTICK_056",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Lip Tint Felt Lip Stain & Liner",
    type: "Lipstick",
    image: skuImage("2932770"),
    link: "https://www.sephora.com/product/lip-tint-felt-lip-stain-liner-P519837?skuId=2932770"
  }),
  productData({
    code: "LIPSTICK_057",
    category: "Makeup > Lip > Lipstick",
    brand: "Glossier",
    name: "Ultralip High Shine Lipstick with Hyaluronic Acid",
    type: "Lipstick",
    image: skuImage("2636728"),
    link: "https://www.sephora.com/product/glossier-ultralip-high-shine-lipstick-with-hyaluronic-acid-P504823?skuId=2636728"
  }),
  productData({
    code: "LIPSTICK_058",
    category: "Makeup > Lip > Lipstick",
    brand: "HUNG VANNGO BEAUTY",
    name: "Creamy Matte Longwear Lipstick with Hyaluronic Acid",
    type: "Lipstick",
    image: skuImage("2903904"),
    link: "https://www.sephora.com/product/creamy-matte-longwear-lipstick-with-hyaluronic-acid-P518974?skuId=2903904"
  }),
  productData({
    code: "LIPSTICK_059",
    category: "Makeup > Lip > Lipstick",
    brand: "VIOLETTE_FR",
    name: "LIP NECTAR Hydrating Lip Stain",
    type: "Lipstick",
    image: skuImage("2882918"),
    link: "https://www.sephora.com/product/violette-fr-lip-nectar-hydrating-lip-stain-P516909?skuId=2882918"
  }),
  productData({
    code: "LIPSTICK_060",
    category: "Makeup > Lip > Lipstick",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Le Monster Lip Crayon Vegan Lipstick and Lip Liner",
    type: "Lipstick",
    image: skuImage("2572147"),
    link: "https://www.sephora.com/product/le-monster-lip-crayon-lipstick-P500284?skuId=2572147"
  }),
  productData({
    code: "LIPSTICK_061",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "Dramatique Mega Lip Pencil",
    type: "Lipstick",
    image: skuImage("2766814"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-dramatique-mega-lip-pencil-P511701?skuId=2766814"
  }),
  productData({
    code: "LIPSTICK_062",
    category: "Makeup > Lip > Lipstick",
    brand: "ILIA",
    name: "Color Block Lipstick",
    type: "Lipstick",
    image: skuImage("2128650"),
    link: "https://www.sephora.com/product/color-block-high-impact-lipstick-P436270?skuId=2128650"
  }),
  productData({
    code: "LIPSTICK_063",
    category: "Makeup > Lip > Lipstick",
    brand: "MERIT",
    name: "Signature Lip Sheer Lip Liner",
    type: "Lipstick",
    image: skuImage("2975803"),
    link: "https://www.sephora.com/product/signature-lip-sheer-lip-liner-P516006?skuId=2975803"
  }),
  productData({
    code: "LIPSTICK_064",
    category: "Makeup > Lip > Lipstick",
    brand: "Kulfi",
    name: "Heirloom Satin Lipstick",
    type: "Lipstick",
    image: skuImage("2699080"),
    link: "https://www.sephora.com/product/heirloom-satin-lipstick-P507664?skuId=2699080"
  }),
  productData({
    code: "LIPSTICK_065",
    category: "Makeup > Lip > Lipstick",
    brand: "Laka",
    name: "Bonding Glow High Shine Glossy Lipstick",
    type: "Lipstick",
    image: skuImage("2961514"),
    link: "https://www.sephora.com/product/bonding-glow-high-shine-glossy-lipstick-P521382?skuId=2961514"
  }),
  productData({
    code: "LIPSTICK_066",
    category: "Makeup > Lip > Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Velvet Matte Long-Lasting Lipstick",
    type: "Lipstick",
    image: skuImage("2882173"),
    link: "https://www.sephora.com/product/le-rouge-velvet-matte-lipstick-P517624?skuId=2882173"
  }),
  productData({
    code: "LIPSTICK_067",
    category: "Makeup > Lip > Lipstick",
    brand: "Urban Decay",
    name: "Vice Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2481943"),
    link: "https://www.sephora.com/product/vice-lipstick-P409523?skuId=2481943"
  }),
  productData({
    code: "LIPSTICK_068",
    category: "Makeup > Lip > Lipstick",
    brand: "VIOLETTE_FR",
    name: "PLUME LIP Moisturizing Feather Matte Lip Whip",
    type: "Lipstick",
    image: skuImage("2892347"),
    link: "https://www.sephora.com/product/plume-lip-moisturizing-feather-matte-lip-whip-P516971?skuId=2892347"
  }),
  productData({
    code: "LIPSTICK_069",
    category: "Makeup > Lip > Lipstick",
    brand: "Danessa Myricks Beauty",
    name: "Colorfix - Multi-Use Eye, Cheek & Lip Waterproof Liquid Pigment",
    type: "Lipstick",
    image: skuImage("2798239"),
    link: "https://www.sephora.com/product/danessa-myricks-colorfix-24-hour-cream-color-P468353?skuId=2798239"
  }),
  productData({
    code: "LIPSTICK_070",
    category: "Makeup > Lip > Lipstick",
    brand: "MAC Cosmetics",
    name: "M·A·Cximal Silky Matte Viva Glam 12HR Wear Lipstick",
    type: "Lipstick",
    image: skuImage("2764611"),
    link: "https://www.sephora.com/product/mac-cosmetics-m-a-cximal-silky-matte-viva-glam-lipstick-P510790?skuId=2764611"
  }),
  productData({
    code: "LIPSTICK_071",
    category: "Makeup > Lip > Lipstick",
    brand: "Gucci",
    name: "Glow & Care Shine Lipstick",
    type: "Lipstick",
    image: skuImage("2448843"),
    link: "https://www.sephora.com/product/gucci-rouge-de-beaut-eacute-brillant-glow-care-lipstick-P471239?skuId=2448843"
  }),
  productData({
    code: "LIPSTICK_072",
    category: "Makeup > Lip > Lipstick",
    brand: "NARS",
    name: "The Multiple Soft Blur Blush Stick for Cheeks, Eyes and Lips",
    type: "Lipstick",
    image: skuImage("2891901"),
    link: "https://www.sephora.com/product/nars-the-mulitple-P517845?skuId=2891901"
  }),
  productData({
    code: "LIPSTICK_073",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Hot Lips Lipstick 2",
    type: "Lipstick",
    image: skuImage("2244564"),
    link: "https://www.sephora.com/product/hot-lips-lipstick-2-0-P446609?skuId=2244564"
  }),
  productData({
    code: "LIPSTICK_074",
    category: "Makeup > Lip > Lipstick",
    brand: "Bobbi Brown",
    name: "Luxe Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2595718"),
    link: "https://www.sephora.com/product/luxe-lip-color-P400625?skuId=2595718"
  }),
  productData({
    code: "LIPSTICK_075",
    category: "Makeup > Lip > Lipstick",
    brand: "VIOLETTE_FR",
    name: "BISOU JELLY Sheer Shine Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2864338"),
    link: "https://www.sephora.com/product/bisou-jelly-sheer-shine-lipstick-P515465?skuId=2864338"
  }),
  productData({
    code: "LIPSTICK_076",
    category: "Makeup > Lip > Lipstick",
    brand: "Fenty Beauty by Rihanna",
    name: "Stunna Lip Paint Longwear Fluid Lip Color",
    type: "Lipstick",
    image: skuImage("2094266"),
    link: "https://www.sephora.com/product/stunna-lip-paint-P39787544?skuId=2094266"
  }),
  productData({
    code: "LIPSTICK_077",
    category: "Makeup > Lip > Lipstick",
    brand: "Hourglass",
    name: "Unlocked™ Soft Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2738946"),
    link: "https://www.sephora.com/product/hourglass-unlocked-tm-soft-matte-lipstick-P510553?skuId=2738946"
  }),
  productData({
    code: "LIPSTICK_078",
    category: "Makeup > Lip > Lipstick",
    brand: "Westman Atelier",
    name: "Mini Petite Baby Cheeks Lip + Cheek Cream Blush Stick",
    type: "Lipstick",
    image: skuImage("2670990"),
    link: "https://www.sephora.com/product/westman-atelier-mini-petite-baby-cheeks-lip-cheek-cream-blush-stick-P506281?skuId=2670990"
  }),
  productData({
    code: "LIPSTICK_079",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Soft Matte & Easy Liquid Lipstick",
    type: "Lipstick",
    image: skuImage("2667061"),
    link: "https://www.sephora.com/product/soft-matte-easy-liqud-lipstick-P506541?skuId=2667061"
  }),
  productData({
    code: "LIPSTICK_080",
    category: "Makeup > Lip > Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Interdit Satin Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2788438"),
    link: "https://www.sephora.com/product/givenchy-le-rouge-interdit-satin-P512684?skuId=2788438"
  }),
  productData({
    code: "LIPSTICK_081",
    category: "Makeup > Lip > Lipstick",
    brand: "Sarah Creal",
    name: "Speak For Yourself Hydrating Lipstick",
    type: "Lipstick",
    image: skuImage("2823839"),
    link: "https://www.sephora.com/product/sarah-creal-speak-for-yourself-hydrating-lipstick-P513257?skuId=2823839"
  }),
  productData({
    code: "LIPSTICK_082",
    category: "Makeup > Lip > Lipstick",
    brand: "Gucci",
    name: "Long Lasting Satin Lipstick",
    type: "Lipstick",
    image: skuImage("2749489"),
    link: "https://www.sephora.com/product/gucci-rouge-agrave-l-egrave-vres-satin-lipstick-P452736?skuId=2749489"
  }),
  productData({
    code: "LIPSTICK_083",
    category: "Makeup > Lip > Lipstick",
    brand: "LIXR Beauty",
    name: "Lixstick™ Creamy Lip +Cheek Tint Stick",
    type: "Lipstick",
    image: skuImage("2955201"),
    link: "https://www.sephora.com/product/lixr-lixstick-multi-tint-P521064?skuId=2955201"
  }),
  productData({
    code: "LIPSTICK_084",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Lipstick",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "LIPSTICK_085",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKE UP FOR EVER",
    name: "Artist Liquid Color Waterproof Liquid Blush for Lip + Cheek",
    type: "Lipstick",
    image: skuImage("2943249"),
    link: "https://www.sephora.com/product/artist-liquid-color-P520538?skuId=2943249"
  }),
  productData({
    code: "LIPSTICK_086",
    category: "Makeup > Lip > Lipstick",
    brand: "Bobbi Brown",
    name: "Luxe Cashmere Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2892198"),
    link: "https://www.sephora.com/product/bobbi-brown-luxe-cashmere-matte-lipstick-P518018?skuId=2892198"
  }),
  productData({
    code: "LIPSTICK_087",
    category: "Makeup > Lip > Lipstick",
    brand: "Hourglass",
    name: "Unlocked™ Satin Crème Lipstick",
    type: "Lipstick",
    image: skuImage("2637510"),
    link: "https://www.sephora.com/product/hourglass-unlocked-tm-satin-creme-lipstick-P504297?skuId=2637510"
  }),
  productData({
    code: "LIPSTICK_088",
    category: "Makeup > Lip > Lipstick",
    brand: "GUERLAIN",
    name: "Kiss Kiss Blur Matte Long-Wearing Lipstick",
    type: "Lipstick",
    image: skuImage("2990091"),
    link: "https://www.sephora.com/product/kiss-kiss-blur-matte-long-wearing-lipstick-P524903?skuId=2990091"
  }),
  productData({
    code: "LIPSTICK_089",
    category: "Makeup > Lip > Lipstick",
    brand: "Rare Beauty by Selena Gomez",
    name: "Kind Words Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2798262"),
    link: "https://www.sephora.com/product/kind-words-matte-lipstick-P500637?skuId=2798262"
  }),
  productData({
    code: "LIPSTICK_090",
    category: "Makeup > Lip > Lipstick",
    brand: "ILIA",
    name: "Multi-Stick Cream Blush + Highlighter + Lip Tint",
    type: "Lipstick",
    image: skuImage("2564359"),
    link: "https://www.sephora.com/product/multi-stick-P411848?skuId=2564359"
  }),
  productData({
    code: "LIPSTICK_091",
    category: "Makeup > Lip > Lipstick",
    brand: "Kosas",
    name: "Impressionist Multistick Cream Blush Stick + Lip Color",
    type: "Lipstick",
    image: skuImage("2965259"),
    link: "https://www.sephora.com/product/impressionist-multistick-P522379?skuId=2965259"
  }),
  productData({
    code: "LIPSTICK_092",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Unreal Lip + Cheek Glow Blush Stick with Hyaluronic Acid",
    type: "Lipstick",
    image: skuImage("2868123"),
    link: "https://www.sephora.com/product/unreal-blush-P516850?skuId=2868123"
  }),
  productData({
    code: "LIPSTICK_093",
    category: "Makeup > Lip > Lipstick",
    brand: "PATRICK TA",
    name: "Major Headlines Matte Suede Lipstick",
    type: "Lipstick",
    image: skuImage("2699320"),
    link: "https://www.sephora.com/product/patrick-ta-major-headlines-matte-suede-lipstick-P458748?skuId=2699320"
  }),
  productData({
    code: "LIPSTICK_094",
    category: "Makeup > Lip > Lipstick",
    brand: "Bobbi Brown",
    name: "Crushed Lip Color Moisturizing Lipstick",
    type: "Lipstick",
    image: skuImage("2417566"),
    link: "https://www.sephora.com/product/crushed-lip-color-P422224?skuId=2417566"
  }),
  productData({
    code: "LIPSTICK_095",
    category: "Makeup > Lip > Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Color Twister Color Changing Oil-in-Stick for Lip + Cheek",
    type: "Lipstick",
    image: skuImage("2870749"),
    link: "https://www.sephora.com/product/color-twister-color-changing-oil-in-stick-lip-cheek-P516070?skuId=2870749"
  }),
  productData({
    code: "LIPSTICK_096",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "MatteTrance™ Lipstick",
    type: "Lipstick",
    image: skuImage("2012706"),
    link: "https://www.sephora.com/product/mattetrance-lipstick-P421813?skuId=2012706"
  }),
  productData({
    code: "LIPSTICK_097",
    category: "Makeup > Lip > Lipstick",
    brand: "Bobbi Brown",
    name: "Extra Lip Tinted Balm with Plumping + Peptide Technology",
    type: "Lipstick",
    image: skuImage("2941565"),
    link: "https://www.sephora.com/product/extra-lip-tinted-balm-P520113?skuId=2941565"
  }),
  productData({
    code: "LIPSTICK_098",
    category: "Makeup > Lip > Lipstick",
    brand: "Anastasia Beverly Hills",
    name: "Smudge-Proof Matte Liquid Lipstick",
    type: "Lipstick",
    image: skuImage("1790641"),
    link: "https://www.sephora.com/product/liquid-lipstick-P404831?skuId=1790641"
  }),
  productData({
    code: "LIPSTICK_099",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "Lip Sculpt + Shade Lipstick and Lip Liner Contour Duo",
    type: "Lipstick",
    image: skuImage("2972362"),
    link: "https://www.sephora.com/product/lip-sculpt-shade-lipstick-lip-liner-contour-duo-P521642?skuId=2972362"
  }),
  productData({
    code: "LIPSTICK_100",
    category: "Makeup > Lip > Lipstick",
    brand: "NUDESTIX",
    name: "Intense Matte Lip Pencil + Cheek",
    type: "Lipstick",
    image: skuImage("1783836"),
    link: "https://www.sephora.com/product/intense-matte-lip-cheek-pencil-P405290?skuId=1783836"
  }),
  productData({
    code: "LIPSTICK_101",
    category: "Makeup > Lip > Lipstick",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Heat Universal Lip Luminizer + Plumper",
    type: "Lipstick",
    image: skuImage("2656254"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-heat-universal-lip-luminizer-plumper-P473708?skuId=2656254"
  }),
  productData({
    code: "LIPSTICK_102",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Runway Lip Stylo Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2949741"),
    link: "https://www.sephora.com/product/tom-ford-runway-lip-stylo-matte-lipstick-P520955?skuId=2949741"
  }),
  productData({
    code: "LIPSTICK_103",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Superstar Lips Lipstick - Pillow Talk Collection",
    type: "Lipstick",
    image: skuImage("2244606"),
    link: "https://www.sephora.com/product/charlotte-tilbury-superstar-lips-lipstick-pillow-talk-collection-P455322?skuId=2244606"
  }),
  productData({
    code: "LIPSTICK_104",
    category: "Makeup > Lip > Lipstick",
    brand: "Fashion Fair",
    name: "Iconic Lipstick",
    type: "Lipstick",
    image: skuImage("2476463"),
    link: "https://www.sephora.com/product/fashion-fair-iconic-lipstick-P476493?skuId=2476463"
  }),
  productData({
    code: "LIPSTICK_105",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "LiquiLUST™: Legendary Wear Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2458800"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-liquidlust-legendary-wear-matte-lipstick-P468398?skuId=2458800"
  }),
  productData({
    code: "LIPSTICK_106",
    category: "Makeup > Lip > Lipstick",
    brand: "Laura Mercier",
    name: "Caviar Smoothing Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2793362"),
    link: "https://www.sephora.com/product/laura-mercier-caviar-smoothing-matte-lipstick-P512645?skuId=2793362"
  }),
  productData({
    code: "LIPSTICK_107",
    category: "Makeup > Lip > Lipstick",
    brand: "BASMA",
    name: "The Ultra-Hydrating Liquid Lipstick",
    type: "Lipstick",
    image: skuImage("2847580"),
    link: "https://www.sephora.com/product/the-high-pigment-blurring-gloss-balm-P515726?skuId=2847580"
  }),
  productData({
    code: "LIPSTICK_108",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Ultra Shine Lipstick Color with Glossy Effect",
    type: "Lipstick",
    image: skuImage("2857860"),
    link: "https://www.sephora.com/product/ultra-shine-lip-color-P429018?skuId=2857860"
  }),
  productData({
    code: "LIPSTICK_109",
    category: "Makeup > Lip > Lipstick",
    brand: "GUERLAIN",
    name: "Kiss Kiss Bee Glow Hydrating Tinted Lip Balm",
    type: "Lipstick",
    image: skuImage("2511186"),
    link: "https://www.sephora.com/product/guerlain-kisskiss-bee-glow-lipstick-balm-P483450?skuId=2511186"
  }),
  productData({
    code: "LIPSTICK_110",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "PAT McGRATH LABS x CANDY CRUSH Mattetrance Lipstick",
    type: "Lipstick",
    image: skuImage("2840148"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-x-candy-crush-mattetrance-lipstick-P515902?skuId=2840148"
  }),
  productData({
    code: "LIPSTICK_111",
    category: "Makeup > Lip > Lipstick",
    brand: "Laura Mercier",
    name: "Petal Soft Lipstick Crayon",
    type: "Lipstick",
    image: skuImage("2306959"),
    link: "https://www.sephora.com/product/petal-soft-lip-crayon-P501504?skuId=2306959"
  }),
  productData({
    code: "LIPSTICK_112",
    category: "Makeup > Lip > Lipstick",
    brand: "REFY",
    name: "Lip Blush",
    type: "Lipstick",
    image: skuImage("2686269"),
    link: "https://www.sephora.com/product/lip-blush-P507174?skuId=2686269"
  }),
  productData({
    code: "LIPSTICK_113",
    category: "Makeup > Lip > Lipstick",
    brand: "tarte",
    name: "maracuja juicy lip high-shine vinyl gloss",
    type: "Lipstick",
    image: skuImage("2737112"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-vinyl-P509396?skuId=2737112"
  }),
  productData({
    code: "LIPSTICK_114",
    category: "Makeup > Lip > Lipstick",
    brand: "Glossier",
    name: "Generation G Sheer Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2717965"),
    link: "https://www.sephora.com/product/glossier-generation-g-sheer-matte-lipstick-P504802?skuId=2717965"
  }),
  productData({
    code: "LIPSTICK_115",
    category: "Makeup > Lip > Lipstick",
    brand: "fel beauty",
    name: "Kissylips™ Hydrating High Shine Lip and Cheek Balm",
    type: "Lipstick",
    image: skuImage("2930063"),
    link: "https://www.sephora.com/product/kissylips-hydrating-high-shine-lip-and-cheek-balm-P519767?skuId=2930063"
  }),
  productData({
    code: "LIPSTICK_116",
    category: "Makeup > Lip > Lipstick",
    brand: "NATASHA DENONA",
    name: "My Dream Lipstick - Creamy Lip Color",
    type: "Lipstick",
    image: skuImage("2597656"),
    link: "https://www.sephora.com/product/my-dream-lipstick-creamy-lip-color-P502442?skuId=2597656"
  }),
  productData({
    code: "LIPSTICK_117",
    category: "Makeup > Lip > Lipstick",
    brand: "ISAMAYA",
    name: "Lips Metal- Sheer Metallic Balm",
    type: "Lipstick",
    image: skuImage("2855351"),
    link: "https://www.sephora.com/product/lips-metal-sheer-metallic-balm-P515447?skuId=2855351"
  }),
  productData({
    code: "LIPSTICK_118",
    category: "Makeup > Lip > Lipstick",
    brand: "Armani Beauty",
    name: "Lip Power Long Lasting Lipstick",
    type: "Lipstick",
    image: skuImage("2662898"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-lip-power-lipstick-P471221?skuId=2662898"
  }),
  productData({
    code: "LIPSTICK_119",
    category: "Makeup > Lip > Lipstick",
    brand: "Yves Saint Laurent",
    name: "Rouge Pur Couture The Slim Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2341519"),
    link: "https://www.sephora.com/product/rouge-pur-couture-matte-slim-lipstick-P436506?skuId=2341519"
  }),
  productData({
    code: "LIPSTICK_120",
    category: "Makeup > Lip > Lipstick",
    brand: "REFY",
    name: "Satin Liquid Lipstick Pen with Vitamin E",
    type: "Lipstick",
    image: skuImage("2912046"),
    link: "https://www.sephora.com/product/satin-liquid-lipstick-pen-with-vitamin-e-P518453?skuId=2912046"
  }),
  productData({
    code: "LIPSTICK_121",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Hyaluronic Happikiss Lipstick Balm",
    type: "Lipstick",
    image: skuImage("2420503"),
    link: "https://www.sephora.com/product/charlotte-tilbury-hyaluronic-happi-kiss-color-lip-balm-P468347?skuId=2420503"
  }),
  productData({
    code: "LIPSTICK_122",
    category: "Makeup > Lip > Lipstick",
    brand: "MAKEUP BY MARIO",
    name: "Jelly Jar™ Lip & Cheek Multi-Use Balm",
    type: "Lipstick",
    image: skuImage("2933026"),
    link: "https://www.sephora.com/product/makeup-by-mario-jelly-jar-lip-cheek-multi-use-balm-P519836?skuId=2933026"
  }),
  productData({
    code: "LIPSTICK_123",
    category: "Makeup > Lip > Lipstick",
    brand: "NUDESTIX",
    name: "Nude Plumping Lip Glace",
    type: "Lipstick",
    image: skuImage("2228815"),
    link: "https://www.sephora.com/product/nude-plumping-lip-glace-P444920?skuId=2228815"
  }),
  productData({
    code: "LIPSTICK_124",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Fucking Fabulous Lip Color Matte Lipstick",
    type: "Lipstick",
    image: skuImage("2883023"),
    link: "https://www.sephora.com/product/fucking-fabulous-lip-color-matte-lipstick-P517706?skuId=2883023"
  }),
  productData({
    code: "LIPSTICK_125",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Lip Color Matte Lipstick with Full Coverage Pigment",
    type: "Lipstick",
    image: skuImage("2358422"),
    link: "https://www.sephora.com/product/lip-color-matte-lipstick-P416222?skuId=2358422"
  }),
  productData({
    code: "LIPSTICK_126",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "K.I.S.S.I.N.G Lipstick and Lip Gloss Duos",
    type: "Lipstick",
    image: skuImage("2765873"),
    link: "https://www.sephora.com/product/charlotte-tilbury-k-i-s-s-i-n-g-lipstick-and-lip-gloss-duos-P511724?skuId=2765873"
  }),
  productData({
    code: "LIPSTICK_127",
    category: "Makeup > Lip > Lipstick",
    brand: "SIMIHAZE BEAUTY",
    name: "Velvet Blur Matte Lipstick Balm",
    type: "Lipstick",
    image: skuImage("2782654"),
    link: "https://www.sephora.com/product/velvet-blur-matte-lipbalm-P503349?skuId=2782654"
  }),
  productData({
    code: "LIPSTICK_128",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "Mini Dramatique Mega Lip Pencil Set",
    type: "Lipstick",
    image: skuImage("2840080"),
    link: "https://www.sephora.com/product/mini-dramatique-mega-lip-pencil-duo-P514912?skuId=2840080"
  }),
  productData({
    code: "LIPSTICK_129",
    category: "Makeup > Lip > Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Interdit pH Reactive Hydrating Universal Black Lip Balm",
    type: "Lipstick",
    image: skuImage("2672046"),
    link: "https://www.sephora.com/product/rouge-interdit-vinyl-color-enhancing-lipstick-P405231?skuId=2672046"
  }),
  productData({
    code: "LIPSTICK_130",
    category: "Makeup > Lip > Lipstick",
    brand: "Hourglass",
    name: "Unlocked Satin Creme Lipstick- Red 0",
    type: "Lipstick",
    image: skuImage("2637718"),
    link: "https://www.sephora.com/product/hourglass-unlocked-satin-creme-lipstick-red-0-P504339?skuId=2637718"
  }),
  productData({
    code: "LIPSTICK_131",
    category: "Makeup > Lip > Lipstick",
    brand: "Valentino",
    name: "Rosso Valentino High Pigment Refillable Lipstick",
    type: "Lipstick",
    image: skuImage("2541894"),
    link: "https://www.sephora.com/product/valentino-rosso-valentino-refillable-lipstick-P479501?skuId=2541894"
  }),
  productData({
    code: "LIPSTICK_132",
    category: "Makeup > Lip > Lipstick",
    brand: "Westman Atelier",
    name: "Lip Suede Lipstick Palette",
    type: "Lipstick",
    image: skuImage("2434397"),
    link: "https://www.sephora.com/product/westman-atelier-lip-suede-P468435?skuId=2434397"
  }),
  productData({
    code: "LIPSTICK_133",
    category: "Makeup > Lip > Lipstick",
    brand: "Bobbi Brown",
    name: "Pot Rouge Cream Blush for Lips and Cheeks",
    type: "Lipstick",
    image: skuImage("1418078"),
    link: "https://www.sephora.com/product/pot-rouge-for-lips-cheeks-P270553?skuId=1418078"
  }),
  productData({
    code: "LIPSTICK_134",
    category: "Makeup > Lip > Lipstick",
    brand: "PAT McGRATH LABS",
    name: "MatteTrance™ Lipstick - Divine Rose Collection",
    type: "Lipstick",
    image: skuImage("2458743"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-mattetrance-lipstick-divine-rose-collection-P458775?skuId=2458743"
  }),
  productData({
    code: "LIPSTICK_135",
    category: "Makeup > Lip > Lipstick",
    brand: "TOM FORD",
    name: "Soleil Sunlit Rose Lip Balm for Shine + Plumping",
    type: "Lipstick",
    image: skuImage("2503381"),
    link: "https://www.sephora.com/product/tom-ford-soleil-sunlit-rose-lip-balm-P509462?skuId=2503381"
  }),
  productData({
    code: "LIPSTICK_136",
    category: "Makeup > Lip > Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Interdit Cream Velvet Lipstick",
    type: "Lipstick",
    image: skuImage("2691285"),
    link: "https://www.sephora.com/product/le-rouge-interdit-cream-velvet-lipstick-P507785?skuId=2691285"
  }),
  productData({
    code: "LIPSTICK_137",
    category: "Makeup > Lip > Lipstick",
    brand: "Anastasia Beverly Hills",
    name: "Magic Touch Cream Blush & Lip Trio",
    type: "Lipstick",
    image: skuImage("2873594"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-blush-trio-P516915?skuId=2873594"
  }),
  productData({
    code: "LIPSTICK_138",
    category: "Makeup > Lip > Lipstick",
    brand: "Too Faced",
    name: "Lip Injection Extreme Lip Shaper Plumping Lip Liner",
    type: "Lipstick",
    image: skuImage("2795631"),
    link: "https://www.sephora.com/product/too-faced-lip-injection-extreme-lip-shaper-plumping-lip-liner-P505390?skuId=2795631"
  }),
  productData({
    code: "LIPSTICK_139",
    category: "Makeup > Lip > Lipstick",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Lip Snatcher Hydrating Liquid Lipstick and Lip Gloss Duo",
    type: "Lipstick",
    image: skuImage("2648228"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-lip-snatcher-hydrating-liquid-lipstick-lip-gloss-duo-P504363?skuId=2648228"
  }),
  productData({
    code: "LIPSTICK_140",
    category: "Makeup > Lip > Lipstick",
    brand: "Fara Homidi",
    name: "Essential Lip Refillable Compact",
    type: "Lipstick",
    image: skuImage("2911055"),
    link: "https://www.sephora.com/product/fara-homidi-essential-lip-refillable-compact-P511748?skuId=2911055"
  }),
  productData({
    code: "LIPSTICK_141",
    category: "Makeup > Lip > Lipstick",
    brand: "Kaja",
    name: "Jelly Charm Glazed Lip Stain & Blush With Keychain",
    type: "Lipstick",
    image: skuImage("2646545"),
    link: "https://www.sephora.com/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365?skuId=2646545"
  }),
  productData({
    code: "LIPSTICK_142",
    category: "Makeup > Lip > Lipstick",
    brand: "ISAMAYA",
    name: "Lips Balm- Sheer Lipstick Balm with Vitamin E",
    type: "Lipstick",
    image: skuImage("2855476"),
    link: "https://www.sephora.com/product/lips-balm-sheer-lipstick-balm-with-vitamin-e-P515457?skuId=2855476"
  }),
  productData({
    code: "LIPSTICK_143",
    category: "Makeup > Lip > Lipstick",
    brand: "Fashion Fair",
    name: "Lip Teasers Lip Gloss",
    type: "Lipstick",
    image: skuImage("2591808"),
    link: "https://www.sephora.com/product/fashion-fair-lip-teasers-P502223?skuId=2591808"
  }),
  productData({
    code: "LIPSTICK_144",
    category: "Makeup > Lip > Lipstick",
    brand: "Charlotte Tilbury",
    name: "Superstar Lips Lipstick",
    type: "Lipstick",
    image: skuImage("2244606"),
    link: "https://www.sephora.com/product/superstar-lips-lipstick-P446610?skuId=2244606"
  }),

  // ==================================================
  // Makeup > Lip > Lip Stain
  // Products: 20
  // ==================================================
  productData({
    code: "LIP_STAIN_001",
    category: "Makeup > Lip > Lip Stain",
    brand: "Wonderskin",
    name: "Wonder Blading All-Day Lip Stain",
    type: "Lip Stain",
    image: skuImage("2980274"),
    link: "https://www.sephora.com/product/wonderskin-wonder-blading-all-day-lip-stain-P519525?skuId=2980274"
  }),
  productData({
    code: "LIP_STAIN_002",
    category: "Makeup > Lip > Lip Stain",
    brand: "SEPHORA COLLECTION",
    name: "Cream Lip Stain 10HR Liquid Lipstick",
    type: "Lip Stain",
    image: skuImage("2760981"),
    link: "https://www.sephora.com/product/cream-lip-stain-liquid-lipstick-P281411?skuId=2760981"
  }),
  productData({
    code: "LIP_STAIN_003",
    category: "Makeup > Lip > Lip Stain",
    brand: "Clarins",
    name: "Hydrating Water Lip Stain Kiss-Proof & Matte Finish",
    type: "Lip Stain",
    image: skuImage("2844082"),
    link: "https://www.sephora.com/product/hydrating-water-lip-stain-kiss-proof-matte-finish-P515492?skuId=2844082"
  }),
  productData({
    code: "LIP_STAIN_004",
    category: "Makeup > Lip > Lip Stain",
    brand: "Summer Fridays",
    name: "Flushed Lip Stain 12HR Long-Lasting Lip Tint",
    type: "Lip Stain",
    image: skuImage("2940401"),
    link: "https://www.sephora.com/product/summer-fridays-flushed-lip-stain-P520759?skuId=2940401"
  }),
  productData({
    code: "LIP_STAIN_005",
    category: "Makeup > Lip > Lip Stain",
    brand: "Dolce&Gabbana",
    name: "Rose Dew Lip Bite 24H Hydrating Glossy Lip Tint with Hyaluronic Acid",
    type: "Lip Stain",
    image: skuImage("2986073"),
    link: "https://www.sephora.com/product/rose-dew-lip-bite-24h-hydrating-glossy-lip-tint-with-hyaluronic-acid-P522574?skuId=2986073"
  }),
  productData({
    code: "LIP_STAIN_006",
    category: "Makeup > Lip > Lip Stain",
    brand: "Benefit Cosmetics",
    name: "Benetint Liquid Lip + Cheek Blush Stain",
    type: "Lip Stain",
    image: skuImage("2869519"),
    link: "https://www.sephora.com/product/benetint-cheek-lip-stain-P1272?skuId=2869519"
  }),
  productData({
    code: "LIP_STAIN_007",
    category: "Makeup > Lip > Lip Stain",
    brand: "SEPHORA COLLECTION",
    name: "Lip Tint Felt Lip Stain & Liner",
    type: "Lip Stain",
    image: skuImage("2932770"),
    link: "https://www.sephora.com/product/lip-tint-felt-lip-stain-liner-P519837?skuId=2932770"
  }),
  productData({
    code: "LIP_STAIN_008",
    category: "Makeup > Lip > Lip Stain",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil Stain",
    type: "Lip Stain",
    image: skuImage("2640159"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640159"
  }),
  productData({
    code: "LIP_STAIN_009",
    category: "Makeup > Lip > Lip Stain",
    brand: "MILK MAKEUP",
    name: "Cooling Water Jelly Tint Lip + Cheek Blush Stain",
    type: "Lip Stain",
    image: skuImage("2872380"),
    link: "https://www.sephora.com/product/milk-makeup-cooling-water-jelly-tint-lip-cheek-blush-stain-P509414?skuId=2872380"
  }),
  productData({
    code: "LIP_STAIN_010",
    category: "Makeup > Lip > Lip Stain",
    brand: "caliray",
    name: "Socal Superbloom Dewy Lip & Cheek Soft Stain Tint",
    type: "Lip Stain",
    image: skuImage("2698306"),
    link: "https://www.sephora.com/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322?skuId=2698306"
  }),
  productData({
    code: "LIP_STAIN_011",
    category: "Makeup > Lip > Lip Stain",
    brand: "Kaja",
    name: "Cushy Vibe High-Pigment Lip Stain",
    type: "Lip Stain",
    image: skuImage("2139764"),
    link: "https://www.sephora.com/product/cushy-vibe-moisturizing-lip-stain-P436153?skuId=2139764"
  }),
  productData({
    code: "LIP_STAIN_012",
    category: "Makeup > Lip > Lip Stain",
    brand: "DIOR",
    name: "Dior Addict Lip Tint",
    type: "Lip Stain",
    image: skuImage("2571420"),
    link: "https://www.sephora.com/product/dior-dior-addict-lip-tint-P483654?skuId=2571420"
  }),
  productData({
    code: "LIP_STAIN_013",
    category: "Makeup > Lip > Lip Stain",
    brand: "SEPHORA COLLECTION",
    name: "Blush & Go Longwear Matte Liquid Blush For Lip and Cheek",
    type: "Lip Stain",
    image: skuImage("2871077"),
    link: "https://www.sephora.com/product/sephora-collection-blush-go-matte-liquid-blush-P515938?skuId=2871077"
  }),
  productData({
    code: "LIP_STAIN_014",
    category: "Makeup > Lip > Lip Stain",
    brand: "Yves Saint Laurent",
    name: "The Inks Vinyl Cream High Shine Lip Stain",
    type: "Lip Stain",
    image: skuImage("2789527"),
    link: "https://www.sephora.com/product/yves-saint-laurent-inks-shine-liquid-lip-P514289?skuId=2789527"
  }),
  productData({
    code: "LIP_STAIN_015",
    category: "Makeup > Lip > Lip Stain",
    brand: "Benefit Cosmetics",
    name: "Splashtint Moisturizing Dewy Lip Tint",
    type: "Lip Stain",
    image: skuImage("2766210"),
    link: "https://www.sephora.com/product/benefit-cosmetics-splashtint-lip-stain-P510391?skuId=2766210"
  }),
  productData({
    code: "LIP_STAIN_016",
    category: "Makeup > Lip > Lip Stain",
    brand: "Kaja",
    name: "Jelly Charm Glazed Lip Stain & Blush With Keychain",
    type: "Lip Stain",
    image: skuImage("2646545"),
    link: "https://www.sephora.com/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365?skuId=2646545"
  }),
  productData({
    code: "LIP_STAIN_017",
    category: "Makeup > Lip > Lip Stain",
    brand: "Yves Saint Laurent",
    name: "The Inks Blurring Matte Liquid Lip Stain",
    type: "Lip Stain",
    image: skuImage("2818144"),
    link: "https://www.sephora.com/product/the-inks-blurring-matte-liquid-lip-stain-P514675?skuId=2818144"
  }),
  productData({
    code: "LIP_STAIN_018",
    category: "Makeup > Lip > Lip Stain",
    brand: "Too Faced",
    name: "Kissing Juicy Tint Lip Balm",
    type: "Lip Stain",
    image: skuImage("2871325"),
    link: "https://www.sephora.com/product/kissing-juicy-tint-lip-balm-P516741?skuId=2871325"
  }),
  productData({
    code: "LIP_STAIN_019",
    category: "Makeup > Lip > Lip Stain",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Color-Adaptive Cheek + Lip Stick",
    type: "Lip Stain",
    image: skuImage("2709368"),
    link: "https://www.sephora.com/product/match-stix-color-adaptive-cheek-lip-stick-P506509?skuId=2709368"
  }),
  productData({
    code: "LIP_STAIN_020",
    category: "Makeup > Lip > Lip Stain",
    brand: "TOM FORD",
    name: "Soleil Lip Blush Balm with pH-Adaptive Pink Stain",
    type: "Lip Stain",
    image: skuImage("2573418"),
    link: "https://www.sephora.com/product/tom-ford-soleil-lip-blush-P483702?skuId=2573418"
  }),

  // ==================================================
  // Makeup > Lip > Liquid Lipstick
  // Products: 27
  // ==================================================
  productData({
    code: "LIQUID_LIPSTICK_001",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Cream Lip Stain 10HR Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2760981"),
    link: "https://www.sephora.com/product/cream-lip-stain-liquid-lipstick-P281411?skuId=2760981"
  }),
  productData({
    code: "LIQUID_LIPSTICK_002",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Atomic Shake High-Shine Longwear Lip Lacquer Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2977841"),
    link: "https://www.sephora.com/product/atomic-shake-lip-lacquer-P522531?skuId=2977841"
  }),
  productData({
    code: "LIQUID_LIPSTICK_003",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Anastasia Beverly Hills",
    name: "Lip Velvet Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2799708"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-lip-velvet-liquid-lipstick-P509681?skuId=2799708"
  }),
  productData({
    code: "LIQUID_LIPSTICK_004",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "MAC Cosmetics",
    name: "Powder Kiss Lip & Cheek Matte Liquid Mousse",
    type: "Liquid Lipstick",
    image: skuImage("2958262"),
    link: "https://www.sephora.com/product/powder-kiss-lip-cheek-mousse-P520514?skuId=2958262"
  }),
  productData({
    code: "LIQUID_LIPSTICK_005",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "HUDA BEAUTY",
    name: "Liquid Matte Ultra-Comfort Transfer-proof Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2548840"),
    link: "https://www.sephora.com/product/huda-beauty-liquid-matte-ultra-comfort-transfer-proof-lipstick-P479843?skuId=2548840"
  }),
  productData({
    code: "LIQUID_LIPSTICK_006",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "PATRICK TA",
    name: "Silky Lip Crème",
    type: "Liquid Lipstick",
    image: skuImage("2699270"),
    link: "https://www.sephora.com/product/monochrome-moment-silky-lip-creme-P451938?skuId=2699270"
  }),
  productData({
    code: "LIQUID_LIPSTICK_007",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "DIOR",
    name: "Rouge Dior Forever Liquid Transfer-Proof Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2571453"),
    link: "https://www.sephora.com/product/dior-rouge-dior-forever-liquid-transfer-proof-lipstick-P472977?skuId=2571453"
  }),
  productData({
    code: "LIQUID_LIPSTICK_008",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil Stain",
    type: "Liquid Lipstick",
    image: skuImage("2640159"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640159"
  }),
  productData({
    code: "LIQUID_LIPSTICK_009",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Urban Decay",
    name: "Vice Lip Bond Glossy Longwear Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2589653"),
    link: "https://www.sephora.com/product/vice-lip-bond-longwear-liquid-lipstick-P501181?skuId=2589653"
  }),
  productData({
    code: "LIQUID_LIPSTICK_010",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "SEPHORA COLLECTION",
    name: "Soft Matte & Easy Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2667061"),
    link: "https://www.sephora.com/product/soft-matte-easy-liqud-lipstick-P506541?skuId=2667061"
  }),
  productData({
    code: "LIQUID_LIPSTICK_011",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Fenty Beauty by Rihanna",
    name: "Stunna Lip Paint Longwear Fluid Lip Color",
    type: "Liquid Lipstick",
    image: skuImage("2094266"),
    link: "https://www.sephora.com/product/stunna-lip-paint-P39787544?skuId=2094266"
  }),
  productData({
    code: "LIQUID_LIPSTICK_012",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Anastasia Beverly Hills",
    name: "Smudge-Proof Matte Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("1790641"),
    link: "https://www.sephora.com/product/liquid-lipstick-P404831?skuId=1790641"
  }),
  productData({
    code: "LIQUID_LIPSTICK_013",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "VIOLETTE_FR",
    name: "PLUME LIP Moisturizing Feather Matte Lip Whip",
    type: "Liquid Lipstick",
    image: skuImage("2892347"),
    link: "https://www.sephora.com/product/plume-lip-moisturizing-feather-matte-lip-whip-P516971?skuId=2892347"
  }),
  productData({
    code: "LIQUID_LIPSTICK_014",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Valentino",
    name: "Liquirosso 2 in 1 Soft Matte Liquid Lipstick & Blush",
    type: "Liquid Lipstick",
    image: skuImage("2874097"),
    link: "https://www.sephora.com/product/valentino-liquirosso-P506965?skuId=2874097"
  }),
  productData({
    code: "LIQUID_LIPSTICK_015",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "MAKE UP FOR EVER",
    name: "Artist Liquid Color Waterproof Liquid Blush for Lip + Cheek",
    type: "Liquid Lipstick",
    image: skuImage("2943249"),
    link: "https://www.sephora.com/product/artist-liquid-color-P520538?skuId=2943249"
  }),
  productData({
    code: "LIQUID_LIPSTICK_016",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Matte Lip Blur Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2670115"),
    link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-lip-blur-P506239?skuId=2670115"
  }),
  productData({
    code: "LIQUID_LIPSTICK_017",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Kaja",
    name: "Cushy Vibe High-Pigment Lip Stain",
    type: "Liquid Lipstick",
    image: skuImage("2139764"),
    link: "https://www.sephora.com/product/cushy-vibe-moisturizing-lip-stain-P436153?skuId=2139764"
  }),
  productData({
    code: "LIQUID_LIPSTICK_018",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "TOM FORD",
    name: "Liquid Lipstick Luxe Matte for Long-Wear",
    type: "Liquid Lipstick",
    image: skuImage("2662740"),
    link: "https://www.sephora.com/product/tom-ford-liquid-lip-luxe-matte-P505704?skuId=2662740"
  }),
  productData({
    code: "LIQUID_LIPSTICK_019",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "BASMA",
    name: "The Ultra-Hydrating Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2847580"),
    link: "https://www.sephora.com/product/the-high-pigment-blurring-gloss-balm-P515726?skuId=2847580"
  }),
  productData({
    code: "LIQUID_LIPSTICK_020",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Givenchy",
    name: "Le Rouge Interdit Cream Velvet Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2691285"),
    link: "https://www.sephora.com/product/le-rouge-interdit-cream-velvet-lipstick-P507785?skuId=2691285"
  }),
  productData({
    code: "LIQUID_LIPSTICK_021",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "VIOLETTE_FR",
    name: "PETAL BOUCHE Liquid Longwearing Matte Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2864635"),
    link: "https://www.sephora.com/product/petal-bouche-matte-liquid-lipstick-P515459?skuId=2864635"
  }),
  productData({
    code: "LIQUID_LIPSTICK_022",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "VIOLETTE_FR",
    name: "LIP NECTAR Hydrating Lip Stain",
    type: "Liquid Lipstick",
    image: skuImage("2882918"),
    link: "https://www.sephora.com/product/violette-fr-lip-nectar-hydrating-lip-stain-P516909?skuId=2882918"
  }),
  productData({
    code: "LIQUID_LIPSTICK_023",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Gucci",
    name: "Transfer-Proof Matte Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2749448"),
    link: "https://www.sephora.com/product/gucci-gucci-rouge-a-levres-liquid-matte-lipstick-P483448?skuId=2749448"
  }),
  productData({
    code: "LIQUID_LIPSTICK_024",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "MAED",
    name: "Signature Lip Pigment Matte Liquid Lipstick",
    type: "Liquid Lipstick",
    image: skuImage("2912673"),
    link: "https://www.sephora.com/product/signature-lip-pigment-matte-liquid-lipstick-P518291?skuId=2912673"
  }),
  productData({
    code: "LIQUID_LIPSTICK_025",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "REFY",
    name: "Satin Liquid Lipstick Pen with Vitamin E",
    type: "Liquid Lipstick",
    image: skuImage("2912046"),
    link: "https://www.sephora.com/product/satin-liquid-lipstick-pen-with-vitamin-e-P518453?skuId=2912046"
  }),
  productData({
    code: "LIQUID_LIPSTICK_026",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "Clarins",
    name: "Lip Perfector Peptide-Plumping & Hydrating Lip Gloss",
    type: "Liquid Lipstick",
    image: skuImage("2774834"),
    link: "https://www.sephora.com/product/clarins-lip-perfector-sheer-lip-gloss-P512207?skuId=2774834"
  }),
  productData({
    code: "LIQUID_LIPSTICK_027",
    category: "Makeup > Lip > Liquid Lipstick",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Lip Snatcher Hydrating Liquid Lipstick and Lip Gloss Duo",
    type: "Liquid Lipstick",
    image: skuImage("2648228"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-lip-snatcher-hydrating-liquid-lipstick-lip-gloss-duo-P504363?skuId=2648228"
  }),

  // ==================================================
  // Makeup > Lip > Lip Oil
  // Products: 58
  // ==================================================
  productData({
    code: "LIP_OIL_001",
    category: "Makeup > Lip > Lip Oil",
    brand: "Gisou",
    name: "Honey Infused Hydrating Lip Oil",
    type: "Lip Oil",
    image: skuImage("2971257"),
    link: "https://www.sephora.com/product/gisou-lip-oil-P505233?skuId=2971257"
  }),
  productData({
    code: "LIP_OIL_002",
    category: "Makeup > Lip > Lip Oil",
    brand: "Tower 28 Beauty",
    name: "ShineOn Lip Jelly Hydrating Non-Sticky Lip Oil",
    type: "Lip Oil",
    image: skuImage("2549970"),
    link: "https://www.sephora.com/product/shineon-lip-jelly-P448854?skuId=2549970"
  }),
  productData({
    code: "LIP_OIL_003",
    category: "Makeup > Lip > Lip Oil",
    brand: "Prada",
    name: "Prada Light Glowing Lip Oil Stick",
    type: "Lip Oil",
    image: skuImage("2853265"),
    link: "https://www.sephora.com/product/prada-light-glowing-lip-oil-stick-P516420?skuId=2853265"
  }),
  productData({
    code: "LIP_OIL_004",
    category: "Makeup > Lip > Lip Oil",
    brand: "DIOR",
    name: "Lip Glow Oil Hydrating High-Shine Gloss",
    type: "Lip Oil",
    image: skuImage("2920676"),
    link: "https://www.sephora.com/product/dior-lip-glow-oil-hydrating-high-shine-gloss-P519637?skuId=2920676"
  }),
  productData({
    code: "LIP_OIL_005",
    category: "Makeup > Lip > Lip Oil",
    brand: "Summer Fridays",
    name: "Dream Lip Oil for Moisturizing Sheer Coverage",
    type: "Lip Oil",
    image: skuImage("2744696"),
    link: "https://www.sephora.com/product/summer-fridays-dream-lip-oil-P509439?skuId=2744696"
  }),
  productData({
    code: "LIP_OIL_006",
    category: "Makeup > Lip > Lip Oil",
    brand: "Clarins",
    name: "Lip Comfort Hydrating Oil",
    type: "Lip Oil",
    image: skuImage("2583938"),
    link: "https://www.sephora.com/product/clarins-lip-comfort-oil-P483060?skuId=2583938"
  }),
  productData({
    code: "LIP_OIL_007",
    category: "Makeup > Lip > Lip Oil",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil Stain",
    type: "Lip Oil",
    image: skuImage("2640159"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640159"
  }),
  productData({
    code: "LIP_OIL_008",
    category: "Makeup > Lip > Lip Oil",
    brand: "Kulfi",
    name: "Lassi Lips Staining Long-Lasting Moisturizing Lip Oil",
    type: "Lip Oil",
    image: skuImage("2855229"),
    link: "https://www.sephora.com/product/kulfi-lassi-lips-staining-long-lasting-hydrating-lip-oil-P512014?skuId=2855229"
  }),
  productData({
    code: "LIP_OIL_009",
    category: "Makeup > Lip > Lip Oil",
    brand: "Clarins",
    name: "Lip Comfort Hydrating Oil Set",
    type: "Lip Oil",
    image: skuImage("2844066"),
    link: "https://www.sephora.com/product/lip-comfort-hydrating-oil-set-P516018?skuId=2844066"
  }),
  productData({
    code: "LIP_OIL_010",
    category: "Makeup > Lip > Lip Oil",
    brand: "LANEIGE",
    name: "JuicePop Box Hydrating & Lightweight Oil Lip Tint",
    type: "Lip Oil",
    image: skuImage("2925618"),
    link: "https://www.sephora.com/product/juice-box-tints-P519687?skuId=2925618"
  }),
  productData({
    code: "LIP_OIL_011",
    category: "Makeup > Lip > Lip Oil",
    brand: "Saie",
    name: "Glossybounce™ High-Shine Hydrating Lip Gloss Oil",
    type: "Lip Oil",
    image: skuImage("2872463"),
    link: "https://www.sephora.com/product/glossybounce-high-shine-hydrating-lip-gloss-oil-P507492?skuId=2872463"
  }),
  productData({
    code: "LIP_OIL_012",
    category: "Makeup > Lip > Lip Oil",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Plumping Lip Oil Gloss",
    type: "Lip Oil",
    image: skuImage("2830172"),
    link: "https://www.sephora.com/product/ysl-loveshine-plumping-lip-oil-gloss-with-hyaluronic-acid-P515552?skuId=2830172"
  }),
  productData({
    code: "LIP_OIL_013",
    category: "Makeup > Lip > Lip Oil",
    brand: "Fenty Beauty by Rihanna",
    name: "Fenty Treatz Hydrating + Strengthening Lip Oil",
    type: "Lip Oil",
    image: skuImage("2536423"),
    link: "https://www.sephora.com/product/cherry-treat-conditioning-lip-oil-P500307?skuId=2536423"
  }),
  productData({
    code: "LIP_OIL_014",
    category: "Makeup > Lip > Lip Oil",
    brand: "HUDA BEAUTY",
    name: "Faux Filler Ultra-Hydrating Tinted Jelly Lip Oil",
    type: "Lip Oil",
    image: skuImage("2870590"),
    link: "https://www.sephora.com/product/huda-beauty-faux-filler-jelly-oil-P516660?skuId=2870590"
  }),
  productData({
    code: "LIP_OIL_015",
    category: "Makeup > Lip > Lip Oil",
    brand: "MERIT",
    name: "Shade Slick Hydrating Tinted Lip Oil",
    type: "Lip Oil",
    image: skuImage("2849925"),
    link: "https://www.sephora.com/product/merit-shade-slick-tinted-lip-oil-P468691?skuId=2849925"
  }),
  productData({
    code: "LIP_OIL_016",
    category: "Makeup > Lip > Lip Oil",
    brand: "Evereden",
    name: "Kids & Teen Hydrating Tinted Lip Oil",
    type: "Lip Oil",
    image: skuImage("2881787"),
    link: "https://www.sephora.com/product/kids-tinted-lip-oil-P516958?skuId=2881787"
  }),
  productData({
    code: "LIP_OIL_017",
    category: "Makeup > Lip > Lip Oil",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Lip Oil Stick",
    type: "Lip Oil",
    image: skuImage("2830065"),
    link: "https://www.sephora.com/product/love-shine-lip-oil-stick-P377710?skuId=2830065"
  }),
  productData({
    code: "LIP_OIL_018",
    category: "Makeup > Lip > Lip Oil",
    brand: "Glossier",
    name: "Lip Glaze Hydrating Cooling Sheer Lip Oil",
    type: "Lip Oil",
    image: skuImage("2868172"),
    link: "https://www.sephora.com/product/lip-glaze-hydrating-cooling-sheer-lip-oil-P516910?skuId=2868172"
  }),
  productData({
    code: "LIP_OIL_019",
    category: "Makeup > Lip > Lip Oil",
    brand: "Clarins",
    name: "Hydrating Peptide & Plumping Lip Oil Balm",
    type: "Lip Oil",
    image: skuImage("2775518"),
    link: "https://www.sephora.com/product/clarins-hydrating-peptide-plumping-lip-oil-balm-P512149?skuId=2775518"
  }),
  productData({
    code: "LIP_OIL_020",
    category: "Makeup > Lip > Lip Oil",
    brand: "Givenchy",
    name: "Perfecto Hydrating & Smoothing High-Shine Lip Oil",
    type: "Lip Oil",
    image: skuImage("2947620"),
    link: "https://www.sephora.com/product/perfecto-hydrating-smoothing-high-shine-lip-oil-P522004?skuId=2947620"
  }),
  productData({
    code: "LIP_OIL_021",
    category: "Makeup > Lip > Lip Oil",
    brand: "Gucci",
    name: "Oil-In-Water Tint Hydrating Lip Stain",
    type: "Lip Oil",
    image: skuImage("2960151"),
    link: "https://www.sephora.com/product/oil-in-water-tint-hydrating-lip-stain-P521427?skuId=2960151"
  }),
  productData({
    code: "LIP_OIL_022",
    category: "Makeup > Lip > Lip Oil",
    brand: "CLINIQUE",
    name: "Clinique Pop™ Cheek + Lip Oil",
    type: "Lip Oil",
    image: skuImage("2825255"),
    link: "https://www.sephora.com/product/clinique-clinique-pop-tm-lip-cheek-oil-black-honey-P514240?skuId=2825255"
  }),
  productData({
    code: "LIP_OIL_023",
    category: "Makeup > Lip > Lip Oil",
    brand: "Kosas",
    name: "Wet Lip Oil Plumping Peptide Lip Treatment Gloss",
    type: "Lip Oil",
    image: skuImage("2486769"),
    link: "https://www.sephora.com/product/lip-oil-P451920?skuId=2486769"
  }),
  productData({
    code: "LIP_OIL_024",
    category: "Makeup > Lip > Lip Oil",
    brand: "fresh",
    name: "Sugar Treat Hydrating High Shine Lip Oil",
    type: "Lip Oil",
    image: skuImage("2865384"),
    link: "https://www.sephora.com/product/sugar-treat-hydrating-high-shine-lip-oil-P516841?skuId=2865384"
  }),
  productData({
    code: "LIP_OIL_025",
    category: "Makeup > Lip > Lip Oil",
    brand: "MAC Cosmetics",
    name: "Lip Cushion High-Pigment + Hydrating Lip Oil",
    type: "Lip Oil",
    image: skuImage("2969954"),
    link: "https://www.sephora.com/product/mac-lip-cushion-high-pigment-hydrating-lip-oil-P522330?skuId=2969954"
  }),
  productData({
    code: "LIP_OIL_026",
    category: "Makeup > Lip > Lip Oil",
    brand: "Charlotte Tilbury",
    name: "Unreal Lips Healthy Glow Nectar Nourishing Lip Oil with Hyaluronic Acid and Vitamin E",
    type: "Lip Oil",
    image: skuImage("2891836"),
    link: "https://www.sephora.com/product/unreal-lips-healthy-glow-nectar-lip-oil-P516906?skuId=2891836"
  }),
  productData({
    code: "LIP_OIL_027",
    category: "Makeup > Lip > Lip Oil",
    brand: "Laka",
    name: "Fruity Lip Glotioner Hydrating High Shine Lip Gloss Serum",
    type: "Lip Oil",
    image: skuImage("2961548"),
    link: "https://www.sephora.com/product/fruity-lip-glotioner-hydrating-high-shine-lip-gloss-serum-P521383?skuId=2961548"
  }),
  productData({
    code: "LIP_OIL_028",
    category: "Makeup > Lip > Lip Oil",
    brand: "Kaja",
    name: "Juicy Glass Lip Oil",
    type: "Lip Oil",
    image: skuImage("2807022"),
    link: "https://www.sephora.com/product/juicy-glass-lip-oil-P508041?skuId=2807022"
  }),
  productData({
    code: "LIP_OIL_029",
    category: "Makeup > Lip > Lip Oil",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Lip Glaze Plumping Gloss",
    type: "Lip Oil",
    image: skuImage("2736866"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-phd-hybrid-lip-glaze-plumping-gloss-P509390?skuId=2736866"
  }),
  productData({
    code: "LIP_OIL_030",
    category: "Makeup > Lip > Lip Oil",
    brand: "Bobbi Brown",
    name: "Extra Blushing pH Tinted Lip Oil",
    type: "Lip Oil",
    image: skuImage("2941581"),
    link: "https://www.sephora.com/product/extra-blushing-lip-oil-P520115?skuId=2941581"
  }),
  productData({
    code: "LIP_OIL_031",
    category: "Makeup > Lip > Lip Oil",
    brand: "Lancôme",
    name: "Lip Idole JuicyTreat Hydrating Lip Gloss",
    type: "Lip Oil",
    image: skuImage("2872794"),
    link: "https://www.sephora.com/product/lip-idole-juicy-treat-hydrating-lip-gloss-P516861?skuId=2872794"
  }),
  productData({
    code: "LIP_OIL_032",
    category: "Makeup > Lip > Lip Oil",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Hydrating Tinted Lip Oil",
    type: "Lip Oil",
    image: skuImage("2571941"),
    link: "https://www.sephora.com/product/phd-hybrid-lip-oil-P500283?skuId=2571941"
  }),
  productData({
    code: "LIP_OIL_033",
    category: "Makeup > Lip > Lip Oil",
    brand: "Fenty Beauty by Rihanna",
    name: "Guava Goodiez - Guava Lip + Mini Butta Drop Set",
    type: "Lip Oil",
    image: skuImage("2978153"),
    link: "https://www.sephora.com/product/guava-goodiez-guava-lip-mini-butta-drop-set-P522553?skuId=2978153"
  }),
  productData({
    code: "LIP_OIL_034",
    category: "Makeup > Lip > Lip Oil",
    brand: "MILK MAKEUP",
    name: "KUSH Hydrating Sheer Lip Oil",
    type: "Lip Oil",
    image: skuImage("2742922"),
    link: "https://www.sephora.com/product/milk-makeup-kush-hydrating-sheer-tinted-lip-oil-P509474?skuId=2742922"
  }),
  productData({
    code: "LIP_OIL_035",
    category: "Makeup > Lip > Lip Oil",
    brand: "MAC Cosmetics",
    name: "Lipglass Blow Plumping Non-Sticky Lip Oil",
    type: "Lip Oil",
    image: skuImage("2861763"),
    link: "https://www.sephora.com/product/lipglass-blow-plumping-lip-oil-P516443?skuId=2861763"
  }),
  productData({
    code: "LIP_OIL_036",
    category: "Makeup > Lip > Lip Oil",
    brand: "Too Faced",
    name: "Kissing Jelly Non-Sticky Lip Oil Gloss",
    type: "Lip Oil",
    image: skuImage("2739217"),
    link: "https://www.sephora.com/product/kissing-jelly-non-sticky-lip-oil-gloss-P509300?skuId=2739217"
  }),
  productData({
    code: "LIP_OIL_037",
    category: "Makeup > Lip > Lip Oil",
    brand: "INNBEAUTY PROJECT",
    name: "Glaze Lip Oil",
    type: "Lip Oil",
    image: skuImage("2458677"),
    link: "https://www.sephora.com/product/innbeauty-project-glaze-lip-oil-P471038?skuId=2458677"
  }),
  productData({
    code: "LIP_OIL_038",
    category: "Makeup > Lip > Lip Oil",
    brand: "Fara Homidi",
    name: "Soft Glass Lip Plumper Gloss Oil",
    type: "Lip Oil",
    image: skuImage("2881654"),
    link: "https://www.sephora.com/product/fara-homidi-soft-glass-lip-plumping-oil-P517848?skuId=2881654"
  }),
  productData({
    code: "LIP_OIL_039",
    category: "Makeup > Lip > Lip Oil",
    brand: "Rare Beauty by Selena Gomez",
    name: "Mini Soft Pinch Tinted Lip Oil Stain",
    type: "Lip Oil",
    image: skuImage("2893337"),
    link: "https://www.sephora.com/product/mini-soft-pinch-tinted-lip-oil-P517124?skuId=2893337"
  }),
  productData({
    code: "LIP_OIL_040",
    category: "Makeup > Lip > Lip Oil",
    brand: "NARS",
    name: "Afterglow Sheer Hydrating Lip Oil",
    type: "Lip Oil",
    image: skuImage("2842391"),
    link: "https://www.sephora.com/product/afterglow-lip-oil-P514562?skuId=2842391"
  }),
  productData({
    code: "LIP_OIL_041",
    category: "Makeup > Lip > Lip Oil",
    brand: "Mango People",
    name: "Hydrating Glossy Fruit Lip Stain",
    type: "Lip Oil",
    image: skuImage("2887719"),
    link: "https://www.sephora.com/product/hydrating-glossy-fruit-lip-stain-P519492?skuId=2887719"
  }),
  productData({
    code: "LIP_OIL_042",
    category: "Makeup > Lip > Lip Oil",
    brand: "tarte",
    name: "maracuja juicy lip plumping oil with hyaluronic acid",
    type: "Lip Oil",
    image: skuImage("2824795"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-plumping-lip-oil-P511952?skuId=2824795"
  }),
  productData({
    code: "LIP_OIL_043",
    category: "Makeup > Lip > Lip Oil",
    brand: "INNBEAUTY PROJECT",
    name: "Get Glazed Lip Set",
    type: "Lip Oil",
    image: skuImage("2674372"),
    link: "https://www.sephora.com/product/innbeauty-project-get-glazed-lip-duo-P505617?skuId=2674372"
  }),
  productData({
    code: "LIP_OIL_044",
    category: "Makeup > Lip > Lip Oil",
    brand: "GUERLAIN",
    name: "Kiss Kiss Bee Glow Hydrating Tinted Lip Oil",
    type: "Lip Oil",
    image: skuImage("2772218"),
    link: "https://www.sephora.com/product/guerlain-kiss-kiss-bee-glow-lip-oil-P510448?skuId=2772218"
  }),
  productData({
    code: "LIP_OIL_045",
    category: "Makeup > Lip > Lip Oil",
    brand: "LYS Beauty",
    name: "Speak Love Glossy Lip Treatment Oil",
    type: "Lip Oil",
    image: skuImage("2437549"),
    link: "https://www.sephora.com/product/lys-beauty-speak-love-glossy-lip-treatment-oil-P468385?skuId=2437549"
  }),
  productData({
    code: "LIP_OIL_046",
    category: "Makeup > Lip > Lip Oil",
    brand: "Clarins",
    name: "Cryo-Plumping Lip Oil",
    type: "Lip Oil",
    image: skuImage("2968832"),
    link: "https://www.sephora.com/product/cryo-lip-oil-P522404?skuId=2968832"
  }),
  productData({
    code: "LIP_OIL_047",
    category: "Makeup > Lip > Lip Oil",
    brand: "Kulfi",
    name: "Lip Snack Moisturizing Glossing Balm",
    type: "Lip Oil",
    image: skuImage("2894988"),
    link: "https://www.sephora.com/product/lip-snack-moisturizing-glossing-balm-P517157?skuId=2894988"
  }),
  productData({
    code: "LIP_OIL_048",
    category: "Makeup > Lip > Lip Oil",
    brand: "VIOLETTE_FR",
    name: "PLUME LIP Moisturizing Feather Matte Lip Whip",
    type: "Lip Oil",
    image: skuImage("2892347"),
    link: "https://www.sephora.com/product/plume-lip-moisturizing-feather-matte-lip-whip-P516971?skuId=2892347"
  }),
  productData({
    code: "LIP_OIL_049",
    category: "Makeup > Lip > Lip Oil",
    brand: "MILK MAKEUP",
    name: "Odyssey Hydrating Non-Sticky Lip Oil Gloss",
    type: "Lip Oil",
    image: skuImage("2792869"),
    link: "https://www.sephora.com/product/odyssey-lip-oil-gloss-P506917?skuId=2792869"
  }),
  productData({
    code: "LIP_OIL_050",
    category: "Makeup > Lip > Lip Oil",
    brand: "TOM FORD",
    name: "Soleil Hydrating Lip Oil with Vitamin E & Coconut Oil",
    type: "Lip Oil",
    image: skuImage("2966638"),
    link: "https://www.sephora.com/product/soleil-hydrating-lip-oil-with-vitamin-e-coconut-oil-P522114?skuId=2966638"
  }),
  productData({
    code: "LIP_OIL_051",
    category: "Makeup > Lip > Lip Oil",
    brand: "Clarins",
    name: "Lip Perfector Peptide-Plumping & Hydrating Lip Gloss",
    type: "Lip Oil",
    image: skuImage("2774834"),
    link: "https://www.sephora.com/product/clarins-lip-perfector-sheer-lip-gloss-P512207?skuId=2774834"
  }),
  productData({
    code: "LIP_OIL_052",
    category: "Makeup > Lip > Lip Oil",
    brand: "Givenchy",
    name: "Givenchy Rose Perfecto Shine Serum Lip Oil Stick",
    type: "Lip Oil",
    image: skuImage("2834224"),
    link: "https://www.sephora.com/product/givenchy-givenchy-rose-perfecto-shine-serum-lip-oil-stick-P515119?skuId=2834224"
  }),
  productData({
    code: "LIP_OIL_053",
    category: "Makeup > Lip > Lip Oil",
    brand: "Iris&Romeo",
    name: "Weekend Skin SPF 30 Moisture Lip Balm",
    type: "Lip Oil",
    image: skuImage("2871663"),
    link: "https://www.sephora.com/product/weekend-skin-spf-30-moisture-lip-balm-P516192?skuId=2871663"
  }),
  productData({
    code: "LIP_OIL_054",
    category: "Makeup > Lip > Lip Oil",
    brand: "Hourglass",
    name: "N° 28 Lip Treatment Oil",
    type: "Lip Oil",
    image: skuImage("1500826"),
    link: "https://www.sephora.com/product/no-28-lip-treatment-oil-P379096?skuId=1500826"
  }),
  productData({
    code: "LIP_OIL_055",
    category: "Makeup > Lip > Lip Oil",
    brand: "Bobbi Brown",
    name: "Extra Plump Hydrating Lip Oil",
    type: "Lip Oil",
    image: skuImage("2769198"),
    link: "https://www.sephora.com/product/bobbi-brown-extra-plump-lip-serum-P504216?skuId=2769198"
  }),
  productData({
    code: "LIP_OIL_056",
    category: "Makeup > Lip > Lip Oil",
    brand: "Bobbi Brown",
    name: "Crushed Oil-Infused Tinted Lip Gloss",
    type: "Lip Oil",
    image: skuImage("2306686"),
    link: "https://www.sephora.com/product/bobbi-brown-crushed-oil-infused-gloss-P454116?skuId=2306686"
  }),
  productData({
    code: "LIP_OIL_057",
    category: "Makeup > Lip > Lip Oil",
    brand: "Saint Jane Beauty",
    name: "Luxury Lip Shine – Longwear Hydration Lip Oil with Vitamin C",
    type: "Lip Oil",
    image: skuImage("2599322"),
    link: "https://www.sephora.com/product/luxury-lip-shine-longwear-hydration-gloss-with-vitamin-c-P501185?skuId=2599322"
  }),
  productData({
    code: "LIP_OIL_058",
    category: "Makeup > Lip > Lip Oil",
    brand: "Bobbi Brown",
    name: "Crushed Oil-Infused Tinted Lip Gloss Shimmer",
    type: "Lip Oil",
    image: skuImage("2577310"),
    link: "https://www.sephora.com/product/crushed-oil-infused-gloss-shimmer-P500606?skuId=2577310"
  }),

  // ==================================================
  // Makeup > Lip > Lip Sets
  // Products: 21
  // ==================================================
  productData({
    code: "LIP_SETS_001",
    category: "Makeup > Lip > Lip Sets",
    brand: "Charlotte Tilbury",
    name: "Mini Pillow Talk Lipstick & Liner Set",
    type: "Lip Sets",
    image: skuImage("2801371"),
    link: "https://www.sephora.com/product/charlotte-tilbury-mini-pillow-talk-lip-duo-P458268?skuId=2801371"
  }),
  productData({
    code: "LIP_SETS_002",
    category: "Makeup > Lip > Lip Sets",
    brand: "Charlotte Tilbury",
    name: "Mini Pillow Talk Glossy Lip Duos",
    type: "Lip Sets",
    image: skuImage("2914059"),
    link: "https://www.sephora.com/product/mini-pillow-talk-glossy-lip-duos-P518833?skuId=2914059"
  }),
  productData({
    code: "LIP_SETS_003",
    category: "Makeup > Lip > Lip Sets",
    brand: "Prada",
    name: "Hydrating Mini Lip Balm Trio Gift Set",
    type: "Lip Sets",
    image: skuImage("2949683"),
    link: "https://www.sephora.com/product/hydrating-mini-lip-balm-trio-gift-set-P522082?skuId=2949683"
  }),
  productData({
    code: "LIP_SETS_004",
    category: "Makeup > Lip > Lip Sets",
    brand: "Fenty Beauty by Rihanna",
    name: "Extra Fu$$y Lip Liner + Mini Lip Luminizer Duo",
    type: "Lip Sets",
    image: skuImage("2968766"),
    link: "https://www.sephora.com/product/extra-fussy-lip-liner-mini-lip-luminizer-duo-P522146?skuId=2968766"
  }),
  productData({
    code: "LIP_SETS_005",
    category: "Makeup > Lip > Lip Sets",
    brand: "Charlotte Tilbury",
    name: "Mini Iconic Lip Cheat Lip Liner Trio",
    type: "Lip Sets",
    image: skuImage("2842581"),
    link: "https://www.sephora.com/product/mini-iconic-lip-cheat-lip-liner-trio-P515611?skuId=2842581"
  }),
  productData({
    code: "LIP_SETS_006",
    category: "Makeup > Lip > Lip Sets",
    brand: "Fenty Beauty by Rihanna",
    name: "Brown'd Pout Lip Liner + Mini Lip Plumper Duo",
    type: "Lip Sets",
    image: skuImage("2970283"),
    link: "https://www.sephora.com/product/brown-d-pout-lip-liner-mini-lip-plumper-duo-P522156?skuId=2970283"
  }),
  productData({
    code: "LIP_SETS_007",
    category: "Makeup > Lip > Lip Sets",
    brand: "LANEIGE",
    name: "Glaze Craze Donut Delight Hydrating Tinted Lip Serum Duo",
    type: "Lip Sets",
    image: skuImage("2932242"),
    link: "https://www.sephora.com/product/donut-delight-lip-serum-duo-P520491?skuId=2932242"
  }),
  productData({
    code: "LIP_SETS_008",
    category: "Makeup > Lip > Lip Sets",
    brand: "MAKEUP BY MARIO",
    name: "Hydrating SuperShine™ Lip Gloss Duo Gift Set",
    type: "Lip Sets",
    image: skuImage("2906063"),
    link: "https://www.sephora.com/product/makeup-by-mario-hydrating-supershine-lip-gloss-duo-gift-set-P518387?skuId=2906063"
  }),
  productData({
    code: "LIP_SETS_009",
    category: "Makeup > Lip > Lip Sets",
    brand: "MAKE UP FOR EVER",
    name: "Mini Artist Color Pencil Lip Liner & Lip Gloss Kit",
    type: "Lip Sets",
    image: skuImage("2972727"),
    link: "https://www.sephora.com/product/mini-artist-color-pencil-super-boost-gloss-duo-P522855?skuId=2972727"
  }),
  productData({
    code: "LIP_SETS_010",
    category: "Makeup > Lip > Lip Sets",
    brand: "Moroccanoil",
    name: "Lip Balm Trio Gift Set – Hydrating Argan + Peptide Lip Treatment",
    type: "Lip Sets",
    image: skuImage("2985950"),
    link: "https://www.sephora.com/product/lip-balm-trio-gift-set-hydrating-argan-peptide-lip-treatment-P522857?skuId=2985950"
  }),
  productData({
    code: "LIP_SETS_011",
    category: "Makeup > Lip > Lip Sets",
    brand: "PAT McGRATH LABS",
    name: "Mini Dramatique Mega Lip Pencil Set",
    type: "Lip Sets",
    image: skuImage("2840080"),
    link: "https://www.sephora.com/product/mini-dramatique-mega-lip-pencil-duo-P514912?skuId=2840080"
  }),
  productData({
    code: "LIP_SETS_012",
    category: "Makeup > Lip > Lip Sets",
    brand: "OLEHENRIKSEN",
    name: "Smooth + Sweet Pout Preserve Peptide Lip Duo",
    type: "Lip Sets",
    image: skuImage("2939932"),
    link: "https://www.sephora.com/product/smooth-sweet-pout-preserve-peptide-lip-duo-P520634?skuId=2939932"
  }),
  productData({
    code: "LIP_SETS_013",
    category: "Makeup > Lip > Lip Sets",
    brand: "Charlotte Tilbury",
    name: "K.I.S.S.I.N.G Lipstick and Lip Gloss Duos",
    type: "Lip Sets",
    image: skuImage("2765873"),
    link: "https://www.sephora.com/product/charlotte-tilbury-k-i-s-s-i-n-g-lipstick-and-lip-gloss-duos-P511724?skuId=2765873"
  }),
  productData({
    code: "LIP_SETS_014",
    category: "Makeup > Lip > Lip Sets",
    brand: "Fenty Beauty by Rihanna",
    name: "Guava Goodiez - Guava Lip + Mini Butta Drop Set",
    type: "Lip Sets",
    image: skuImage("2978153"),
    link: "https://www.sephora.com/product/guava-goodiez-guava-lip-mini-butta-drop-set-P522553?skuId=2978153"
  }),
  productData({
    code: "LIP_SETS_015",
    category: "Makeup > Lip > Lip Sets",
    brand: "NARS",
    name: "Afterglow Sheer Hydrating Lip Oil",
    type: "Lip Sets",
    image: skuImage("2842391"),
    link: "https://www.sephora.com/product/afterglow-lip-oil-P514562?skuId=2842391"
  }),
  productData({
    code: "LIP_SETS_016",
    category: "Makeup > Lip > Lip Sets",
    brand: "Fenty Beauty by Rihanna",
    name: "Cherry Mouth 3-Piece Lip Set + Pouch",
    type: "Lip Sets",
    image: skuImage("2868263"),
    link: "https://www.sephora.com/product/cherry-mouth-3-piece-lip-set-pouch-P516580?skuId=2868263"
  }),
  productData({
    code: "LIP_SETS_017",
    category: "Makeup > Lip > Lip Sets",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Lip Oil Stick & Plumping Gloss Duo Gift Set",
    type: "Lip Sets",
    image: skuImage("2935237"),
    link: "https://www.sephora.com/product/ysl-loveshine-lip-oil-stick-and-plumping-gloss-duo-gift-set-P520829?skuId=2935237"
  }),
  productData({
    code: "LIP_SETS_018",
    category: "Makeup > Lip > Lip Sets",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Lip Plumper Lip Gloss Makeup Gift Set",
    type: "Lip Sets",
    image: skuImage("2907764"),
    link: "https://www.sephora.com/product/outrageous-plump-set-P518413?skuId=2907764"
  }),
  productData({
    code: "LIP_SETS_019",
    category: "Makeup > Lip > Lip Sets",
    brand: "NUDESTIX",
    name: "Nudeglow Hydrating Peptide Lip Butter Duo Set",
    type: "Lip Sets",
    image: skuImage("2799864"),
    link: "https://www.sephora.com/product/nudestix-nudeglow-lip-set-2-pcs-hydrating-peptide-lip-butter-P512544?skuId=2799864"
  }),
  productData({
    code: "LIP_SETS_020",
    category: "Makeup > Lip > Lip Sets",
    brand: "Fara Homidi",
    name: "Essential Lip Refillable Compact",
    type: "Lip Sets",
    image: skuImage("2911055"),
    link: "https://www.sephora.com/product/fara-homidi-essential-lip-refillable-compact-P511748?skuId=2911055"
  }),
  productData({
    code: "LIP_SETS_021",
    category: "Makeup > Lip > Lip Sets",
    brand: "caliray",
    name: "Double Dip Lipguard Set",
    type: "Lip Sets",
    image: skuImage("2961803"),
    link: "https://www.sephora.com/product/lipguard-duo-set-P522119?skuId=2961803"
  }),

  // ==================================================
  // Makeup > Lip > Lip Plumper
  // Products: 52
  // ==================================================
  productData({
    code: "LIP_PLUMPER_001",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Plumper",
    image: skuImage("2937928"),
    link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-gloss-P468175?skuId=2937928"
  }),
  productData({
    code: "LIP_PLUMPER_002",
    category: "Makeup > Lip > Lip Plumper",
    brand: "DIOR",
    name: "Dior Addict Lip Maximizer Plumping Gloss",
    type: "Lip Plumper",
    image: skuImage("2635654"),
    link: "https://www.sephora.com/product/dior-addict-lip-maximizer-plumping-gloss-P186805?skuId=2635654"
  }),
  productData({
    code: "LIP_PLUMPER_003",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Dolce&Gabbana",
    name: "Mint Oil Lip Plumper with 24H Hydration & Vitamin E",
    type: "Lip Plumper",
    image: skuImage("2986131"),
    link: "https://www.sephora.com/product/mint-oil-lip-plumper-with-24h-hydration-vitamin-e-P522609?skuId=2986131"
  }),
  productData({
    code: "LIP_PLUMPER_004",
    category: "Makeup > Lip > Lip Plumper",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Plump Hydrating Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2234185"),
    link: "https://www.sephora.com/product/outrageous-effect-volume-lip-gloss-P417985?skuId=2234185"
  }),
  productData({
    code: "LIP_PLUMPER_005",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Too Faced",
    name: "Mini Lip Injection Maximum Plump Extra Strength Hydrating Lip Plumper",
    type: "Lip Plumper",
    image: skuImage("2449072"),
    link: "https://www.sephora.com/product/too-faced-mini-lip-injection-maximum-plump-extra-strength-lip-plumper-P471584?skuId=2449072"
  }),
  productData({
    code: "LIP_PLUMPER_006",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Clarins",
    name: "Hydrating Peptide & Plumping Lip Oil Balm",
    type: "Lip Plumper",
    image: skuImage("2775518"),
    link: "https://www.sephora.com/product/clarins-hydrating-peptide-plumping-lip-oil-balm-P512149?skuId=2775518"
  }),
  productData({
    code: "LIP_PLUMPER_007",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Tower 28 Beauty",
    name: "ShineOn Plumping Lip Jelly",
    type: "Lip Plumper",
    image: skuImage("2975928"),
    link: "https://www.sephora.com/product/shineon-plumping-lip-jelly-P522378?skuId=2975928"
  }),
  productData({
    code: "LIP_PLUMPER_008",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Plumping Lip Oil Gloss",
    type: "Lip Plumper",
    image: skuImage("2830172"),
    link: "https://www.sephora.com/product/ysl-loveshine-plumping-lip-oil-gloss-with-hyaluronic-acid-P515552?skuId=2830172"
  }),
  productData({
    code: "LIP_PLUMPER_009",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Kosas",
    name: "Lip Pulse Glassy Lip Plumper Gloss",
    type: "Lip Plumper",
    image: skuImage("2935914"),
    link: "https://www.sephora.com/product/lip-pulse-plumper-P520532?skuId=2935914"
  }),
  productData({
    code: "LIP_PLUMPER_010",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Mini Forget The Filler Lip Plumper Duo with Velvet + Strawberry Popsicle",
    type: "Lip Plumper",
    image: skuImage("2973808"),
    link: "https://www.sephora.com/product/mini-forget-filler-lip-plumper-set-P522166?skuId=2973808"
  }),
  productData({
    code: "LIP_PLUMPER_011",
    category: "Makeup > Lip > Lip Plumper",
    brand: "MAKEUP BY MARIO",
    name: "MoistureGlow™ Plumping Lip Serum",
    type: "Lip Plumper",
    image: skuImage("2783199"),
    link: "https://www.sephora.com/product/makeup-by-mario-moisture-glow-tm-plumping-lip-serum-P481114?skuId=2783199"
  }),
  productData({
    code: "LIP_PLUMPER_012",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Fenty Beauty by Rihanna",
    name: "Gloss Bomb Heat Universal Lip Luminizer + Plumper",
    type: "Lip Plumper",
    image: skuImage("2656254"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-heat-universal-lip-luminizer-plumper-P473708?skuId=2656254"
  }),
  productData({
    code: "LIP_PLUMPER_013",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Too Faced",
    name: "Lip Injection Maximum Plump Extra Strength Hydrating Lip Plumper",
    type: "Lip Plumper",
    image: skuImage("2885630"),
    link: "https://www.sephora.com/product/too-faced-lip-injection-maximum-plump-extra-strength-hydrating-lip-plumper-P467794?skuId=2885630"
  }),
  productData({
    code: "LIP_PLUMPER_014",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Forget The Filler Overnight Lip Plumping Mask",
    type: "Lip Plumper",
    image: skuImage("2785657"),
    link: "https://www.sephora.com/product/lawless-forget-filler-overnight-lip-plumping-mask-P480326?skuId=2785657"
  }),
  productData({
    code: "LIP_PLUMPER_015",
    category: "Makeup > Lip > Lip Plumper",
    brand: "SEPHORA COLLECTION",
    name: "Outrageous Plump Intense Hydrating Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2730810"),
    link: "https://www.sephora.com/product/sephora-collection-extreme-lip-plumper-P479855?skuId=2730810"
  }),
  productData({
    code: "LIP_PLUMPER_016",
    category: "Makeup > Lip > Lip Plumper",
    brand: "tarte",
    name: "maracuja juicy lip plumping gloss",
    type: "Lip Plumper",
    image: skuImage("2741098"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-plump-P482750?skuId=2741098"
  }),
  productData({
    code: "LIP_PLUMPER_017",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Gucci",
    name: "Hydrating Plumping Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2735702"),
    link: "https://www.sephora.com/product/gucci-hydrating-plumping-lip-gloss-P509299?skuId=2735702"
  }),
  productData({
    code: "LIP_PLUMPER_018",
    category: "Makeup > Lip > Lip Plumper",
    brand: "ISAMAYA",
    name: "Hyalurolip Lip Plumper with Hyaluronic Acid",
    type: "Lip Plumper",
    image: skuImage("2855377"),
    link: "https://www.sephora.com/product/hyalurolip-lip-plumper-with-hyaluronic-acid-P515455?skuId=2855377"
  }),
  productData({
    code: "LIP_PLUMPER_019",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Too Faced",
    name: "Lip Injection Cooling Instant Lip Plumper Gloss",
    type: "Lip Plumper",
    image: skuImage("2935450"),
    link: "https://www.sephora.com/product/lip-injection-plumping-lip-gloss-P519873?skuId=2935450"
  }),
  productData({
    code: "LIP_PLUMPER_020",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Forget the Filler Lip-Plumping Line-Smoothing Tinted Lip Balm",
    type: "Lip Plumper",
    image: skuImage("2787851"),
    link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-tinted-lip-balm-P504609?skuId=2787851"
  }),
  productData({
    code: "LIP_PLUMPER_021",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Charlotte Tilbury",
    name: "Big Lip Plumpgasm Plumping Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2765584"),
    link: "https://www.sephora.com/product/charlotte-tilbury-pillow-talk-big-lip-plumpgasm-plumping-lip-gloss-P511102?skuId=2765584"
  }),
  productData({
    code: "LIP_PLUMPER_022",
    category: "Makeup > Lip > Lip Plumper",
    brand: "MAKEUP BY MARIO",
    name: "Mini Moistureglow™ On-The-Go Plumping Lip Serum",
    type: "Lip Plumper",
    image: skuImage("2737179"),
    link: "https://www.sephora.com/product/makeup-by-mario-mini-moistureglow-tm-on-the-go-plumping-lip-serum-P509674?skuId=2737179"
  }),
  productData({
    code: "LIP_PLUMPER_023",
    category: "Makeup > Lip > Lip Plumper",
    brand: "tarte",
    name: "maracuja juicy lip plumping oil with hyaluronic acid",
    type: "Lip Plumper",
    image: skuImage("2824795"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-plumping-lip-oil-P511952?skuId=2824795"
  }),
  productData({
    code: "LIP_PLUMPER_024",
    category: "Makeup > Lip > Lip Plumper",
    brand: "PATRICK TA",
    name: "Major Volume Plumping Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2912186"),
    link: "https://www.sephora.com/product/patrick-ta-major-volume-plumping-lip-gloss-P481729?skuId=2912186"
  }),
  productData({
    code: "LIP_PLUMPER_025",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Bobbi Brown",
    name: "Extra Plump Hydrating Lip Oil",
    type: "Lip Plumper",
    image: skuImage("2769198"),
    link: "https://www.sephora.com/product/bobbi-brown-extra-plump-lip-serum-P504216?skuId=2769198"
  }),
  productData({
    code: "LIP_PLUMPER_026",
    category: "Makeup > Lip > Lip Plumper",
    brand: "MAC Cosmetics",
    name: "Squirt Plumping + Nourishing Lip Gloss Stick",
    type: "Lip Plumper",
    image: skuImage("2676815"),
    link: "https://www.sephora.com/product/squirt-lip-plumping-gloss-stick-P506425?skuId=2676815"
  }),
  productData({
    code: "LIP_PLUMPER_027",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Clarins",
    name: "Lip Perfector Peptide-Plumping & Hydrating Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2774834"),
    link: "https://www.sephora.com/product/clarins-lip-perfector-sheer-lip-gloss-P512207?skuId=2774834"
  }),
  productData({
    code: "LIP_PLUMPER_028",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Too Faced",
    name: "Lip Injection Extreme Lip Shaper Plumping Lip Liner",
    type: "Lip Plumper",
    image: skuImage("2795631"),
    link: "https://www.sephora.com/product/too-faced-lip-injection-extreme-lip-shaper-plumping-lip-liner-P505390?skuId=2795631"
  }),
  productData({
    code: "LIP_PLUMPER_029",
    category: "Makeup > Lip > Lip Plumper",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Lip Glaze Plumping Gloss",
    type: "Lip Plumper",
    image: skuImage("2736866"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-phd-hybrid-lip-glaze-plumping-gloss-P509390?skuId=2736866"
  }),
  productData({
    code: "LIP_PLUMPER_030",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LANEIGE",
    name: "Bouncy & Firm Plumping Lip Treatment",
    type: "Lip Plumper",
    image: skuImage("2743102"),
    link: "https://www.sephora.com/product/laneige-bouncy-firm-plumping-lip-treatment-P513177?skuId=2743102"
  }),
  productData({
    code: "LIP_PLUMPER_031",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Grande Cosmetics",
    name: "GrandeLIPS Hydrating Lip Plumper Gloss",
    type: "Lip Plumper",
    image: skuImage("2350171"),
    link: "https://www.sephora.com/product/grandelips-hydrating-lip-plumper-P407471?skuId=2350171"
  }),
  productData({
    code: "LIP_PLUMPER_032",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Yves Saint Laurent",
    name: "Candy Glow Tinted Butter Balm",
    type: "Lip Plumper",
    image: skuImage("2847994"),
    link: "https://www.sephora.com/product/yves-saint-laurent-candy-glow-tinted-butter-balm-P511431?skuId=2847994"
  }),
  productData({
    code: "LIP_PLUMPER_033",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LYS Beauty",
    name: "Speak Love Lip-Plumping Glossy Lip Balm",
    type: "Lip Plumper",
    image: skuImage("2847473"),
    link: "https://www.sephora.com/product/speak-love-lip-plumping-glossy-lip-balm-P515638?skuId=2847473"
  }),
  productData({
    code: "LIP_PLUMPER_034",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Valentino",
    name: "Puffer Complex™ Lip Plumper Gloss",
    type: "Lip Plumper",
    image: skuImage("2870657"),
    link: "https://www.sephora.com/product/puffer-complex-lip-plumper-gloss-P515388?skuId=2870657"
  }),
  productData({
    code: "LIP_PLUMPER_035",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Jumbo Queen Sized Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Plumper",
    image: skuImage("2741627"),
    link: "https://www.sephora.com/product/lawless-jumbo-queen-sized-forget-filler-lip-plumper-line-smoothing-gloss-P509060?skuId=2741627"
  }),
  productData({
    code: "LIP_PLUMPER_036",
    category: "Makeup > Lip > Lip Plumper",
    brand: "LAWLESS",
    name: "Forget the Filler Lip-Plumping Line-Smoothing Satin Cream Lipstick",
    type: "Lip Plumper",
    image: skuImage("2694552"),
    link: "https://www.sephora.com/product/forget-filler-lip-plumping-line-smoothing-satin-cream-lipstick-P506812?skuId=2694552"
  }),
  productData({
    code: "LIP_PLUMPER_037",
    category: "Makeup > Lip > Lip Plumper",
    brand: "caliray",
    name: "Big Swell Hydrating Lip Plumper Gloss",
    type: "Lip Plumper",
    image: skuImage("2643500"),
    link: "https://www.sephora.com/product/big-swell-hydrating-lip-plumper-gloss-P508701?skuId=2643500"
  }),
  productData({
    code: "LIP_PLUMPER_038",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Too Faced",
    name: "Lip Injection Extreme Plumping Clicks Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2839520"),
    link: "https://www.sephora.com/product/lip-injection-juicy-clicks-P514910?skuId=2839520"
  }),
  productData({
    code: "LIP_PLUMPER_039",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Kosas",
    name: "Wet Lip Oil Plumping Peptide Lip Treatment Gloss",
    type: "Lip Plumper",
    image: skuImage("2486769"),
    link: "https://www.sephora.com/product/lip-oil-P451920?skuId=2486769"
  }),
  productData({
    code: "LIP_PLUMPER_040",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Charlotte Tilbury",
    name: "Collagen Lip Bath Gloss",
    type: "Lip Plumper",
    image: skuImage("2765642"),
    link: "https://www.sephora.com/product/collagen-lip-bath-gloss-P434009?skuId=2765642"
  }),
  productData({
    code: "LIP_PLUMPER_041",
    category: "Makeup > Lip > Lip Plumper",
    brand: "NUDESTIX",
    name: "Nude Plumping Lip Glace",
    type: "Lip Plumper",
    image: skuImage("2228815"),
    link: "https://www.sephora.com/product/nude-plumping-lip-glace-P444920?skuId=2228815"
  }),
  productData({
    code: "LIP_PLUMPER_042",
    category: "Makeup > Lip > Lip Plumper",
    brand: "DIOR",
    name: "Lip Maximizer Serum",
    type: "Lip Plumper",
    image: skuImage("2509255"),
    link: "https://www.sephora.com/product/dior-lip-maximizer-serum-P480599?skuId=2509255"
  }),
  productData({
    code: "LIP_PLUMPER_043",
    category: "Makeup > Lip > Lip Plumper",
    brand: "La Mer",
    name: "The Lip Volumizer for Plumping and Softening",
    type: "Lip Plumper",
    image: skuImage("2748606"),
    link: "https://www.sephora.com/product/the-lip-volumizer-P444964?skuId=2748606"
  }),
  productData({
    code: "LIP_PLUMPER_044",
    category: "Makeup > Lip > Lip Plumper",
    brand: "tarte",
    name: "maracuja juicy lip pH powered plumping shift with hyaluronic acid",
    type: "Lip Plumper",
    image: skuImage("2692317"),
    link: "https://www.sephora.com/product/tarte-tarte-maracuja-juicy-lip-plump-shift-P506268?skuId=2692317"
  }),
  productData({
    code: "LIP_PLUMPER_045",
    category: "Makeup > Lip > Lip Plumper",
    brand: "ISAMAYA",
    name: "Lip Lacq- Maximising Lip Plumping Serum",
    type: "Lip Plumper",
    image: skuImage("2855872"),
    link: "https://www.sephora.com/product/lip-lacq-maximising-lip-plumping-serum-P515446?skuId=2855872"
  }),
  productData({
    code: "LIP_PLUMPER_046",
    category: "Makeup > Lip > Lip Plumper",
    brand: "PATRICK TA",
    name: "Mini Major Volume Plumping Lip Gloss",
    type: "Lip Plumper",
    image: skuImage("2760338"),
    link: "https://www.sephora.com/product/patrick-ta-mini-major-volume-plumping-lip-gloss-P511548?skuId=2760338"
  }),
  productData({
    code: "LIP_PLUMPER_047",
    category: "Makeup > Lip > Lip Plumper",
    brand: "ALPYN",
    name: "Plumping & Softening Sweet Agave Lip Balm Treatment",
    type: "Lip Plumper",
    image: skuImage("2801991"),
    link: "https://www.sephora.com/product/alpyn-beauty-willow-sweet-agave-plumping-lip-mask-P483643?skuId=2801991"
  }),
  productData({
    code: "LIP_PLUMPER_048",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Kosas",
    name: "Kosasport LipFuel Hyaluronic Acid Lip Balm",
    type: "Lip Plumper",
    image: skuImage("2447209"),
    link: "https://www.sephora.com/product/lip-fuel-hyaluronic-lip-balm-P443764?skuId=2447209"
  }),
  productData({
    code: "LIP_PLUMPER_049",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Iconic London",
    name: "Lip Plumping Gloss",
    type: "Lip Plumper",
    image: skuImage("2380301"),
    link: "https://www.sephora.com/product/lip-plumping-gloss-P461218?skuId=2380301"
  }),
  productData({
    code: "LIP_PLUMPER_050",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Givenchy",
    name: "Rose Perfecto Lip Balm 24H Hydration",
    type: "Lip Plumper",
    image: skuImage("2749539"),
    link: "https://www.sephora.com/product/givenchy-rouge-rose-perfecto-plumping-lip-balm-24h-hydration-P472700?skuId=2749539"
  }),
  productData({
    code: "LIP_PLUMPER_051",
    category: "Makeup > Lip > Lip Plumper",
    brand: "Kosas",
    name: "Plump + Juicy Lip Booster Buttery Treatment",
    type: "Lip Plumper",
    image: skuImage("2600849"),
    link: "https://www.sephora.com/product/plump-juicy-lip-collagen-booster-P500329?skuId=2600849"
  }),
  productData({
    code: "LIP_PLUMPER_052",
    category: "Makeup > Lip > Lip Plumper",
    brand: "BeautyBio",
    name: "The Pout Sparkling Rosé Hyaluronic Acid Collagen Plumping Lip Serum",
    type: "Lip Plumper",
    image: skuImage("2163079"),
    link: "https://www.sephora.com/product/the-pout-sparkling-rose-hyaluronic-acid-collagen-plumping-lip-serum-P438635?skuId=2163079"
  }),

  // ==================================================
  // Makeup > Lip > Lip Balm & Treatment
  // Products: 167
  // ==================================================
  productData({
    code: "LIP_BALM_001",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "EADEM",
    name: "Le Chouchou Exfoliating + Softening Peptide Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2960730"),
    link: "https://www.sephora.com/product/eadem-le-chouchou-exfoliating-softening-peptide-lip-balm-P511921?skuId=2960730"
  }),
  productData({
    code: "LIP_BALM_002",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Summer Fridays",
    name: "Lip Butter Balm Treatment for Hydration + Nourishing Shine",
    type: "Lip Balm & Treatment",
    image: skuImage("2960094"),
    link: "https://www.sephora.com/product/summer-fridays-lip-butter-balm-P455936?skuId=2960094"
  }),
  productData({
    code: "LIP_BALM_003",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "CLINIQUE",
    name: "Almost Lipstick in Black and Pink Honey",
    type: "Lip Balm & Treatment",
    image: skuImage("70680"),
    link: "https://www.sephora.com/product/almost-lipstick-P122751?skuId=70680"
  }),
  productData({
    code: "LIP_BALM_004",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "OLEHENRIKSEN",
    name: "Pout Preserve Hydrating Peptide Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2882074"),
    link: "https://www.sephora.com/product/pout-preserve-peptide-lip-treatment-P503878?skuId=2882074"
  }),
  productData({
    code: "LIP_BALM_005",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "Lip Glowy Balm – Lightweight Hydration Lip Treatment with Shea Butter",
    type: "Lip Balm & Treatment",
    image: skuImage("2743060"),
    link: "https://www.sephora.com/product/glowy-lip-balm-P443563?skuId=2743060"
  }),
  productData({
    code: "LIP_BALM_006",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Advanced Therapy Treatment Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("1378215"),
    link: "https://www.sephora.com/product/sugar-advanced-therapy-lip-treatment-P302103?skuId=1378215"
  }),
  productData({
    code: "LIP_BALM_007",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "Glaze Craze Tinted Polypeptide Lip Serum Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2960771"),
    link: "https://www.sephora.com/product/glaze-craze-tinted-polypeptide-lip-serum-P515527?skuId=2960771"
  }),
  productData({
    code: "LIP_BALM_008",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "Lip Sleeping Mask – Intense Hydration Lip Treatment with Vitamin C",
    type: "Lip Balm & Treatment",
    image: skuImage("1966258"),
    link: "https://www.sephora.com/product/lip-sleeping-mask-P420652?skuId=1966258"
  }),
  productData({
    code: "LIP_BALM_009",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Moroccanoil",
    name: "Lip Balm - Hydrating Argan Butter + Peptide Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2944346"),
    link: "https://www.sephora.com/product/lip-balm-hydrating-argan-peptide-lip-treatment-P520568?skuId=2944346"
  }),
  productData({
    code: "LIP_BALM_010",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "DIOR",
    name: "Dior Addict Lip Glow Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2830479"),
    link: "https://www.sephora.com/product/dior-addict-lip-glow-balm-P514572?skuId=2830479"
  }),
  productData({
    code: "LIP_BALM_011",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Glossier",
    name: "Balm Dotcom Lip Balm and Skin Salve",
    type: "Lip Balm & Treatment",
    image: skuImage("2839397"),
    link: "https://www.sephora.com/product/glossier-balm-dotcom-lip-balm-skin-salve-P512013?skuId=2839397"
  }),
  productData({
    code: "LIP_BALM_012",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Sincerely Yours",
    name: "Sugarcoat Gloss Soothing & Hydrating Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2969376"),
    link: "https://www.sephora.com/product/sugarcoat-gloss-soothing-and-hydrating-lip-balm-P522846?skuId=2969376"
  }),
  productData({
    code: "LIP_BALM_013",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "REFY",
    name: "Lip Gloss with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2554772"),
    link: "https://www.sephora.com/product/refy-beauty-refy-lip-gloss-P483124?skuId=2554772"
  }),
  productData({
    code: "LIP_BALM_014",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "PATRICK TA",
    name: "Major Moisture Smoothing and Hydrating Tinted Lip Balm with Vitamin E",
    type: "Lip Balm & Treatment",
    image: skuImage("2925667"),
    link: "https://www.sephora.com/product/patrick-ta-major-moisture-smoothing-hydrating-tinted-lip-balm-with-vitamin-e-P519739?skuId=2925667"
  }),
  productData({
    code: "LIP_BALM_015",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Summer Fridays",
    name: "Flushed Lip Stain 12HR Long-Lasting Lip Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2940401"),
    link: "https://www.sephora.com/product/summer-fridays-flushed-lip-stain-P520759?skuId=2940401"
  }),
  productData({
    code: "LIP_BALM_016",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Prada",
    name: "Prada Reflection Glossy Liquid Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2954717"),
    link: "https://www.sephora.com/product/prada-reflection-glossy-liquid-balm-P520657?skuId=2954717"
  }),
  productData({
    code: "LIP_BALM_017",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Long Lasting Blush Balm Sheer Lip Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2954766"),
    link: "https://www.sephora.com/product/pillow-talk-long-lasting-blush-balm-sheer-lip-tint-P522077?skuId=2954766"
  }),
  productData({
    code: "LIP_BALM_018",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Tower 28 Beauty",
    name: "ShineOn Lip Jelly Hydrating Non-Sticky Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2549970"),
    link: "https://www.sephora.com/product/shineon-lip-jelly-P448854?skuId=2549970"
  }),
  productData({
    code: "LIP_BALM_019",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Prada",
    name: "Prada Light Glowing Lip Oil Stick",
    type: "Lip Balm & Treatment",
    image: skuImage("2853265"),
    link: "https://www.sephora.com/product/prada-light-glowing-lip-oil-stick-P516420?skuId=2853265"
  }),
  productData({
    code: "LIP_BALM_020",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SEPHORA COLLECTION",
    name: "Moisturizing Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2707875"),
    link: "https://www.sephora.com/product/moisturizing-lip-balm-P500744?skuId=2707875"
  }),
  productData({
    code: "LIP_BALM_021",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "VIOLETTE_FR",
    name: "BISOU BALM Sheer Matte Lipstick",
    type: "Lip Balm & Treatment",
    image: skuImage("2864403"),
    link: "https://www.sephora.com/product/bisou-balm-sheer-matte-lipstick-P515456?skuId=2864403"
  }),
  productData({
    code: "LIP_BALM_022",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Valentino",
    name: "Spike Valentino Hydrating Disco Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2901585"),
    link: "https://www.sephora.com/product/spike-valentino-hydrating-disco-lip-balm-P517559?skuId=2901585"
  }),
  productData({
    code: "LIP_BALM_023",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Lancôme",
    name: "Lip Idôle Squalane-12 Butterglow™ Hydrating Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2974939"),
    link: "https://www.sephora.com/product/lancome-lip-idole-butterglow-lip-balm-P512007?skuId=2974939"
  }),
  productData({
    code: "LIP_BALM_024",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Clarins",
    name: "Hydrating Peptide & Plumping Lip Oil Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2775518"),
    link: "https://www.sephora.com/product/clarins-hydrating-peptide-plumping-lip-oil-balm-P512149?skuId=2775518"
  }),
  productData({
    code: "LIP_BALM_025",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Nécessaire",
    name: "The Lip Balm – Instant Relief For Dry, Chapped Lips",
    type: "Lip Balm & Treatment",
    image: skuImage("2896868"),
    link: "https://www.sephora.com/product/the-lip-balm-P518275?skuId=2896868"
  }),
  productData({
    code: "LIP_BALM_026",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Yves Saint Laurent",
    name: "Lovenude Lip Blusher Soft Blurring Lip Color",
    type: "Lip Balm & Treatment",
    image: skuImage("2952828"),
    link: "https://www.sephora.com/product/lovenude-lip-blusher-soft-blurring-lip-color-P520825?skuId=2952828"
  }),
  productData({
    code: "LIP_BALM_027",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Saie",
    name: "Glossybounce™ High-Shine Hydrating Lip Gloss Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2872463"),
    link: "https://www.sephora.com/product/glossybounce-high-shine-hydrating-lip-gloss-oil-P507492?skuId=2872463"
  }),
  productData({
    code: "LIP_BALM_028",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Yves Saint Laurent",
    name: "YSL Loveshine Lip Oil Stick",
    type: "Lip Balm & Treatment",
    image: skuImage("2830065"),
    link: "https://www.sephora.com/product/love-shine-lip-oil-stick-P377710?skuId=2830065"
  }),
  productData({
    code: "LIP_BALM_029",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "JuicePop Box Hydrating & Lightweight Oil Lip Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2925618"),
    link: "https://www.sephora.com/product/juice-box-tints-P519687?skuId=2925618"
  }),
  productData({
    code: "LIP_BALM_030",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Fenty Beauty by Rihanna",
    name: "Plush Puddin’ Intensive Recovery Lip Mask With Pomegranate Sterols + Vitamin E",
    type: "Lip Balm & Treatment",
    image: skuImage("2619997"),
    link: "https://www.sephora.com/product/fenty-skin-rihanna-plush-puddin-intensive-recovery-lip-mask-with-pomegranate-sterols-vitamin-e-P503692?skuId=2619997"
  }),
  productData({
    code: "LIP_BALM_031",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Tinted Lip Oil Stain",
    type: "Lip Balm & Treatment",
    image: skuImage("2640159"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-tinted-lip-oil-P505568?skuId=2640159"
  }),
  productData({
    code: "LIP_BALM_032",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Summer Fridays",
    name: "SoftLine Lip Liner Creamy Sculpting Lip Pencil",
    type: "Lip Balm & Treatment",
    image: skuImage("2940427"),
    link: "https://www.sephora.com/product/summer-fridays-softline-lip-liner-P520074?skuId=2940427"
  }),
  productData({
    code: "LIP_BALM_033",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "NARS",
    name: "Afterglow Moisturizing Lip Balm with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2927325"),
    link: "https://www.sephora.com/product/afterglow-lip-balm-P519765?skuId=2927325"
  }),
  productData({
    code: "LIP_BALM_034",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "Glaze Craze Donut Delight Hydrating Tinted Lip Serum Duo",
    type: "Lip Balm & Treatment",
    image: skuImage("2932242"),
    link: "https://www.sephora.com/product/donut-delight-lip-serum-duo-P520491?skuId=2932242"
  }),
  productData({
    code: "LIP_BALM_035",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Glow Recipe",
    name: "Glass Balm Lip Treatment for Shine & Hydration",
    type: "Lip Balm & Treatment",
    image: skuImage("2957934"),
    link: "https://www.sephora.com/product/glow-recipe-glass-balm-lip-treatment-for-shine-and-hydration-P515960?skuId=2957934"
  }),
  productData({
    code: "LIP_BALM_036",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "DIOR",
    name: "Lip Glow Butter Hydrating Gloss Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2864726"),
    link: "https://www.sephora.com/product/dior-lip-glow-butter-hydrating-gloss-balm-P516779?skuId=2864726"
  }),
  productData({
    code: "LIP_BALM_037",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Paula's Choice",
    name: "Pro-Collagen Peptide Plumping Gloss Balm Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2828416"),
    link: "https://www.sephora.com/product/pro-collagen-peptide-plumping-gloss-balm-lip-treatment-P514674?skuId=2828416"
  }),
  productData({
    code: "LIP_BALM_038",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAKEUP BY MARIO",
    name: "MoistureGlow™ Plumping Lip Serum",
    type: "Lip Balm & Treatment",
    image: skuImage("2783199"),
    link: "https://www.sephora.com/product/makeup-by-mario-moisture-glow-tm-plumping-lip-serum-P481114?skuId=2783199"
  }),
  productData({
    code: "LIP_BALM_039",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "ILIA",
    name: "Balmy Tint Hydrating Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2446144"),
    link: "https://www.sephora.com/product/ilia-balmy-tint-hydrating-lip-balm-P472978?skuId=2446144"
  }),
  productData({
    code: "LIP_BALM_040",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SEPHORA COLLECTION",
    name: "Moisturizing Cherry Lip Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2707735"),
    link: "https://www.sephora.com/product/moisturizing-cherry-lip-mask-P510932?skuId=2707735"
  }),
  productData({
    code: "LIP_BALM_041",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Armani Beauty",
    name: "Prisma Flash Glossy Color Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2941458"),
    link: "https://www.sephora.com/product/prisma-flash-glossy-color-lip-balm-P522298?skuId=2941458"
  }),
  productData({
    code: "LIP_BALM_042",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Laka",
    name: "Fruity Lip Glotioner Hydrating High Shine Lip Gloss Serum",
    type: "Lip Balm & Treatment",
    image: skuImage("2961548"),
    link: "https://www.sephora.com/product/fruity-lip-glotioner-hydrating-high-shine-lip-gloss-serum-P521383?skuId=2961548"
  }),
  productData({
    code: "LIP_BALM_043",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MILK MAKEUP",
    name: "Balmade Hydrating Tinted Lip Balm with Electrolytes",
    type: "Lip Balm & Treatment",
    image: skuImage("2872315"),
    link: "https://www.sephora.com/product/milk-makeup-balmade-lip-balm-P517096?skuId=2872315"
  }),
  productData({
    code: "LIP_BALM_044",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Lip Balm Hydrating Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2594489"),
    link: "https://www.sephora.com/product/sugar-lip-balm-hydrating-treatment-P500777?skuId=2594489"
  }),
  productData({
    code: "LIP_BALM_045",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Yves Saint Laurent",
    name: "Candy Glow Tinted Butter Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2847994"),
    link: "https://www.sephora.com/product/yves-saint-laurent-candy-glow-tinted-butter-balm-P511431?skuId=2847994"
  }),
  productData({
    code: "LIP_BALM_046",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Summer Fridays",
    name: "Dream Lip Oil for Moisturizing Sheer Coverage",
    type: "Lip Balm & Treatment",
    image: skuImage("2744696"),
    link: "https://www.sephora.com/product/summer-fridays-dream-lip-oil-P509439?skuId=2744696"
  }),
  productData({
    code: "LIP_BALM_047",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "VIOLETTE_FR",
    name: "BISOU JELLY Sheer Shine Hydrating Lipstick",
    type: "Lip Balm & Treatment",
    image: skuImage("2864338"),
    link: "https://www.sephora.com/product/bisou-jelly-sheer-shine-lipstick-P515465?skuId=2864338"
  }),
  productData({
    code: "LIP_BALM_048",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Tower 28 Beauty",
    name: "BeachPlease Lip + Cheek Dewy Cream Blush",
    type: "Lip Balm & Treatment",
    image: skuImage("2811750"),
    link: "https://www.sephora.com/product/beachplease-tinted-balm-blush-P449342?skuId=2811750"
  }),
  productData({
    code: "LIP_BALM_049",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LAWLESS",
    name: "Forget the Filler Lip-Plumping Line-Smoothing Tinted Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2787851"),
    link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-tinted-lip-balm-P504609?skuId=2787851"
  }),
  productData({
    code: "LIP_BALM_050",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SEPHORA COLLECTION",
    name: "Nourishing Lip Sleeping Mask in Cherry + Vanilla",
    type: "Lip Balm & Treatment",
    image: skuImage("2707727"),
    link: "https://www.sephora.com/product/sephora-collection-nourishing-lip-sleeping-mask-in-cherry-vanilla-P467652?skuId=2707727"
  }),
  productData({
    code: "LIP_BALM_051",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Prada",
    name: "Hydrating Lip Balm with Jojoba Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2786093"),
    link: "https://www.sephora.com/product/prada-beauty-moisturizing-lip-balm-P509710?skuId=2786093"
  }),
  productData({
    code: "LIP_BALM_052",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAKEUP BY MARIO",
    name: "Mini Moistureglow™ On-The-Go Plumping Lip Serum",
    type: "Lip Balm & Treatment",
    image: skuImage("2737179"),
    link: "https://www.sephora.com/product/makeup-by-mario-mini-moistureglow-tm-on-the-go-plumping-lip-serum-P509674?skuId=2737179"
  }),
  productData({
    code: "LIP_BALM_053",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "OLIVIAUMMA",
    name: "Candy Glow Lip Balm Sheer Lip Tint with Ceramide",
    type: "Lip Balm & Treatment",
    image: skuImage("2951598"),
    link: "https://www.sephora.com/product/olivia-umma-candy-glow-lip-balm-with-mint-ceramide-P521659?skuId=2951598"
  }),
  productData({
    code: "LIP_BALM_054",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MERIT",
    name: "Shade Slick Hydrating Tinted Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2849925"),
    link: "https://www.sephora.com/product/merit-shade-slick-tinted-lip-oil-P468691?skuId=2849925"
  }),
  productData({
    code: "LIP_BALM_055",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Clarins",
    name: "Lip Comfort Hydrating Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2583938"),
    link: "https://www.sephora.com/product/clarins-lip-comfort-oil-P483060?skuId=2583938"
  }),
  productData({
    code: "LIP_BALM_056",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Biossance",
    name: "Pro-Peptide™ Hydrating Lip Perfector Balm with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2797942"),
    link: "https://www.sephora.com/product/biossance-pro-peptide-tm-hydrating-lip-perfector-balm-with-hyaluronic-acid-P513592?skuId=2797942"
  }),
  productData({
    code: "LIP_BALM_057",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "HUNG VANNGO BEAUTY",
    name: "Glossy Lip Hue Hydrating Lip Shine with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2943488"),
    link: "https://www.sephora.com/product/glossy-lip-hue-hydrating-lip-shine-with-hyaluronic-acid-P520364?skuId=2943488"
  }),
  productData({
    code: "LIP_BALM_058",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LYS Beauty",
    name: "Speak Love Lip-Plumping Glossy Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2847473"),
    link: "https://www.sephora.com/product/speak-love-lip-plumping-glossy-lip-balm-P515638?skuId=2847473"
  }),
  productData({
    code: "LIP_BALM_059",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SEPHORA COLLECTION",
    name: "Exfoliating Lip Scrub",
    type: "Lip Balm & Treatment",
    image: skuImage("2707909"),
    link: "https://www.sephora.com/product/exfoliating-lip-scrub-P511113?skuId=2707909"
  }),
  productData({
    code: "LIP_BALM_060",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Dr. Dennis Gross Skincare",
    name: "DermInfusions™ Plump + Repair Tinted Lip Treatment with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2940989"),
    link: "https://www.sephora.com/product/derminfusions-tm-plump-repair-lip-treatment-with-hyaluronic-acid-P506789?skuId=2940989"
  }),
  productData({
    code: "LIP_BALM_061",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "tarte",
    name: "maracuja juicy lip plumping gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2741098"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-plump-P482750?skuId=2741098"
  }),
  productData({
    code: "LIP_BALM_062",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "VIOLETTE_FR",
    name: "BALM AMOUR Nourishing Lip Treatment with Peptides",
    type: "Lip Balm & Treatment",
    image: skuImage("2892339"),
    link: "https://www.sephora.com/product/balm-amour-nourishing-lip-treatment-with-peptides-P516956?skuId=2892339"
  }),
  productData({
    code: "LIP_BALM_063",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kosas",
    name: "Wet Stick Moisturizing Shiny Sheer Lipstick with Ceramides",
    type: "Lip Balm & Treatment",
    image: skuImage("2681799"),
    link: "https://www.sephora.com/product/kosas-wet-stick-moisture-lip-shine-P505694?skuId=2681799"
  }),
  productData({
    code: "LIP_BALM_064",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "CAY SKIN",
    name: "Isle Lip Balm SPF 30 with Sea Moss and Aloe Stem Cells",
    type: "Lip Balm & Treatment",
    image: skuImage("2561868"),
    link: "https://www.sephora.com/product/cay-skin-isle-lip-balm-spf-30-P481367?skuId=2561868"
  }),
  productData({
    code: "LIP_BALM_065",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "REFY",
    name: "Lip Blush",
    type: "Lip Balm & Treatment",
    image: skuImage("2686269"),
    link: "https://www.sephora.com/product/lip-blush-P507174?skuId=2686269"
  }),
  productData({
    code: "LIP_BALM_066",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "caliray",
    name: "Lipguard SPF 31 Hydrating Lip Gloss Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2879039"),
    link: "https://www.sephora.com/product/caliray-lipguard-spf-31-hydrating-lip-gloss-balm-P516790?skuId=2879039"
  }),
  productData({
    code: "LIP_BALM_067",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LAWLESS",
    name: "Forget The Filler Overnight Lip Plumping Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2785657"),
    link: "https://www.sephora.com/product/lawless-forget-filler-overnight-lip-plumping-mask-P480326?skuId=2785657"
  }),
  productData({
    code: "LIP_BALM_068",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SEPHORA COLLECTION",
    name: "Nourishing Lip Butter",
    type: "Lip Balm & Treatment",
    image: skuImage("2707990"),
    link: "https://www.sephora.com/product/nourishing-lip-butter-P510926?skuId=2707990"
  }),
  productData({
    code: "LIP_BALM_069",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "YSE Beauty",
    name: "Like A Gloss 3-in-1 Hydrating Lip Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2886216"),
    link: "https://www.sephora.com/product/like-gloss-3-in-1-hydrating-lip-tint-P517107?skuId=2886216"
  }),
  productData({
    code: "LIP_BALM_070",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Fenty Beauty by Rihanna",
    name: "Fenty Treatz Hydrating + Strengthening Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2536423"),
    link: "https://www.sephora.com/product/cherry-treat-conditioning-lip-oil-P500307?skuId=2536423"
  }),
  productData({
    code: "LIP_BALM_071",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Tatcha",
    name: "The Kissu Hydrating & Plumping Lip Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2315315"),
    link: "https://www.sephora.com/product/tatcha-the-kissu-lip-mask-P453225?skuId=2315315"
  }),
  productData({
    code: "LIP_BALM_072",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAKEUP BY MARIO",
    name: "Hydrating SuperShine™ Lip Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2835130"),
    link: "https://www.sephora.com/product/makeup-by-mario-hydrating-supershine-lip-gloss-P514610?skuId=2835130"
  }),
  productData({
    code: "LIP_BALM_073",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "GUERLAIN",
    name: "Kiss Kiss Bee Glow Hydrating Tinted Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2511186"),
    link: "https://www.sephora.com/product/guerlain-kisskiss-bee-glow-lipstick-balm-P483450?skuId=2511186"
  }),
  productData({
    code: "LIP_BALM_074",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kosas",
    name: "Kosasport LipFuel Hyaluronic Acid Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2447209"),
    link: "https://www.sephora.com/product/lip-fuel-hyaluronic-lip-balm-P443764?skuId=2447209"
  }),
  productData({
    code: "LIP_BALM_075",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Farmacy",
    name: "Lip Smoothie Vitamin C + Peptide Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2674281"),
    link: "https://www.sephora.com/product/farmacy-apple-lip-smoothie-vitamin-c-peptide-lip-balm-P505757?skuId=2674281"
  }),
  productData({
    code: "LIP_BALM_076",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Bobbi Brown",
    name: "Extra Lip Tinted Balm with Plumping + Peptide Technology",
    type: "Lip Balm & Treatment",
    image: skuImage("2941565"),
    link: "https://www.sephora.com/product/extra-lip-tinted-balm-P520113?skuId=2941565"
  }),
  productData({
    code: "LIP_BALM_077",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Sarah Creal",
    name: "No Further Questions High Glide Peptide Lip Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2888709"),
    link: "https://www.sephora.com/product/sarah-creal-no-further-questions-high-glide-peptide-lip-gloss-P517011?skuId=2888709"
  }),
  productData({
    code: "LIP_BALM_078",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MILK MAKEUP",
    name: "KUSH Hydrating Sheer Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2742922"),
    link: "https://www.sephora.com/product/milk-makeup-kush-hydrating-sheer-tinted-lip-oil-P509474?skuId=2742922"
  }),
  productData({
    code: "LIP_BALM_079",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Dr. Idriss",
    name: "Barrier Baste Moisturizing Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2835593"),
    link: "https://www.sephora.com/product/barrier-baste-moisturizing-lip-balm-P515374?skuId=2835593"
  }),
  productData({
    code: "LIP_BALM_080",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Lip Glaze Plumping Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2736866"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-phd-hybrid-lip-glaze-plumping-gloss-P509390?skuId=2736866"
  }),
  productData({
    code: "LIP_BALM_081",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LIXR Beauty",
    name: "Lixstick™ Creamy Lip +Cheek Tint Stick",
    type: "Lip Balm & Treatment",
    image: skuImage("2955201"),
    link: "https://www.sephora.com/product/lixr-lixstick-multi-tint-P521064?skuId=2955201"
  }),
  productData({
    code: "LIP_BALM_082",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Laka",
    name: "Soothing Prep Lip Care Hydrating Peel-Off Lip Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2989903"),
    link: "https://www.sephora.com/product/soothing-prep-lip-care-hydrating-peel-off-lip-mask-P524680?skuId=2989903"
  }),
  productData({
    code: "LIP_BALM_083",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "HUDA BEAUTY",
    name: "Faux Filler Ultra-Hydrating Tinted Jelly Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2870590"),
    link: "https://www.sephora.com/product/huda-beauty-faux-filler-jelly-oil-P516660?skuId=2870590"
  }),
  productData({
    code: "LIP_BALM_084",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Tower 28 Beauty",
    name: "SOS LipSoftie® Hydrating Lip Treatment Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2735207"),
    link: "https://www.sephora.com/product/tower-28-sos-lipsoftie-hydrating-lip-treatment-balm-P509899?skuId=2735207"
  }),
  productData({
    code: "LIP_BALM_085",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Treat Hydrating High Shine Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2865384"),
    link: "https://www.sephora.com/product/sugar-treat-hydrating-high-shine-lip-oil-P516841?skuId=2865384"
  }),
  productData({
    code: "LIP_BALM_086",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Sarah Creal",
    name: "The Adults are Talking Solid Serum Lip Repair Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2852960"),
    link: "https://www.sephora.com/product/sarah-creal-the-adults-are-talking-solid-serum-lip-repair-P513264?skuId=2852960"
  }),
  productData({
    code: "LIP_BALM_087",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Rare Beauty by Selena Gomez",
    name: "Stay Vulnerable Glossy Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2418614"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-stay-vulnerable-glossy-lip-balm-P467449?skuId=2418614"
  }),
  productData({
    code: "LIP_BALM_088",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "CLINIQUE",
    name: "Repairwear™ Intensive Lip Treatment for Hydration + Lines",
    type: "Lip Balm & Treatment",
    image: skuImage("883306"),
    link: "https://www.sephora.com/product/repairwear-intensive-lip-treatment-P122782?skuId=883306"
  }),
  productData({
    code: "LIP_BALM_089",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Iris&Romeo",
    name: "Weekend Skin SPF 30 Moisture Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2871663"),
    link: "https://www.sephora.com/product/weekend-skin-spf-30-moisture-lip-balm-P516192?skuId=2871663"
  }),
  productData({
    code: "LIP_BALM_090",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Gucci",
    name: "Glow & Care Shine Lipstick",
    type: "Lip Balm & Treatment",
    image: skuImage("2448843"),
    link: "https://www.sephora.com/product/gucci-rouge-de-beaut-eacute-brillant-glow-care-lipstick-P471239?skuId=2448843"
  }),
  productData({
    code: "LIP_BALM_091",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Sol de Janeiro",
    name: "Brazilian Kiss Cupuaçu Lip Butter",
    type: "Lip Balm & Treatment",
    image: skuImage("2879245"),
    link: "https://www.sephora.com/product/brazilian-kiss-cupua-u-lip-butter-P415747?skuId=2879245"
  }),
  productData({
    code: "LIP_BALM_092",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Recovery Lip Mask Advanced Therapy",
    type: "Lip Balm & Treatment",
    image: skuImage("2476349"),
    link: "https://www.sephora.com/product/fresh-sugar-recovery-lip-mask-advanced-therapy-P474832?skuId=2476349"
  }),
  productData({
    code: "LIP_BALM_093",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Mango People",
    name: "Hydrating Glossy Fruit Lip Stain",
    type: "Lip Balm & Treatment",
    image: skuImage("2887719"),
    link: "https://www.sephora.com/product/hydrating-glossy-fruit-lip-stain-P519492?skuId=2887719"
  }),
  productData({
    code: "LIP_BALM_094",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "NATASHA DENONA",
    name: "Hy-Gloss Tinted Lip Gloss Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2933174"),
    link: "https://www.sephora.com/product/natasha-denona-hy-gloss-tinted-gloss-balm-P520967?skuId=2933174"
  }),
  productData({
    code: "LIP_BALM_095",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "U Beauty",
    name: "The PLASMA Lip Compound Tinted Lip Treatment with Peptides + Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2950566"),
    link: "https://www.sephora.com/product/u-beauty-the-plasma-lip-compound-tinted-lip-treatment-with-peptides-hyaluronic-acid-P521046?skuId=2950566"
  }),
  productData({
    code: "LIP_BALM_096",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MARA",
    name: "Hydrating Sea Silk Lip Balm Treatment for Anti-Aging and Lip Wrinkles",
    type: "Lip Balm & Treatment",
    image: skuImage("2633105"),
    link: "https://www.sephora.com/product/mara-beauty-sea-silk-lip-balm-P504134?skuId=2633105"
  }),
  productData({
    code: "LIP_BALM_097",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Iris&Romeo",
    name: "Lip Cocoon Hydrating Barrier Repair Lip Balm with Peptides",
    type: "Lip Balm & Treatment",
    image: skuImage("2976595"),
    link: "https://www.sephora.com/product/lip-cocoon-hydrating-lip-balm-with-peptides-P514919?skuId=2976595"
  }),
  productData({
    code: "LIP_BALM_098",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LIXR Beauty",
    name: "Lip Lixr Hydrating Tinted Lip Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2954865"),
    link: "https://www.sephora.com/product/lixr-lip-mask-P521063?skuId=2954865"
  }),
  productData({
    code: "LIP_BALM_099",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kiehl's Since 1851",
    name: "Buttermask Intense Repair Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2201093"),
    link: "https://www.sephora.com/product/buttermask-intense-repair-lip-treatment-P432239?skuId=2201093"
  }),
  productData({
    code: "LIP_BALM_100",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Westman Atelier",
    name: "Squeaky Clean Liquid Lip Hydrating Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2845717"),
    link: "https://www.sephora.com/product/westman-atelier-squeaky-clean-liquid-lip-balm-P469873?skuId=2845717"
  }),
  productData({
    code: "LIP_BALM_101",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Fenty Beauty by Rihanna",
    name: "Lux Balm Ultra-Hydrating Cherry Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2730919"),
    link: "https://www.sephora.com/product/lux-balm-ultra-hydrating-cherry-lip-balm-P508880?skuId=2730919"
  }),
  productData({
    code: "LIP_BALM_102",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LYS Beauty",
    name: "Speak Love Glossy Lip Treatment Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2437549"),
    link: "https://www.sephora.com/product/lys-beauty-speak-love-glossy-lip-treatment-oil-P468385?skuId=2437549"
  }),
  productData({
    code: "LIP_BALM_103",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Givenchy",
    name: "Rose Perfecto Lip Balm 24H Hydration",
    type: "Lip Balm & Treatment",
    image: skuImage("2749539"),
    link: "https://www.sephora.com/product/givenchy-rouge-rose-perfecto-plumping-lip-balm-24h-hydration-P472700?skuId=2749539"
  }),
  productData({
    code: "LIP_BALM_104",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Givenchy",
    name: "Le Rouge Interdit pH Reactive Hydrating Universal Black Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2672046"),
    link: "https://www.sephora.com/product/rouge-interdit-vinyl-color-enhancing-lipstick-P405231?skuId=2672046"
  }),
  productData({
    code: "LIP_BALM_105",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "La Mer",
    name: "The Lip Volumizer for Plumping and Softening",
    type: "Lip Balm & Treatment",
    image: skuImage("2748606"),
    link: "https://www.sephora.com/product/the-lip-volumizer-P444964?skuId=2748606"
  }),
  productData({
    code: "LIP_BALM_106",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Too Faced",
    name: "Pillow Balm Hydrating Lip Treatment Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2839421"),
    link: "https://www.sephora.com/product/pillow-balm-hydrating-lip-treatment-lip-balm-P514911?skuId=2839421"
  }),
  productData({
    code: "LIP_BALM_107",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "ISAMAYA",
    name: "Lips Balm- Sheer Lipstick Balm with Vitamin E",
    type: "Lip Balm & Treatment",
    image: skuImage("2855476"),
    link: "https://www.sephora.com/product/lips-balm-sheer-lipstick-balm-with-vitamin-e-P515457?skuId=2855476"
  }),
  productData({
    code: "LIP_BALM_108",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Too Faced",
    name: "Kissing Juicy Tint Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2871325"),
    link: "https://www.sephora.com/product/kissing-juicy-tint-lip-balm-P516741?skuId=2871325"
  }),
  productData({
    code: "LIP_BALM_109",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Drunk Elephant",
    name: "Lippe Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("1766930"),
    link: "https://www.sephora.com/product/lippe-tm-P403818?skuId=1766930"
  }),
  productData({
    code: "LIP_BALM_110",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Dr. Idriss",
    name: "Barrier Baste Exfoliating AHA Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2835585"),
    link: "https://www.sephora.com/product/barrier-baste-exfoliating-aha-lip-treatment-P515380?skuId=2835585"
  }),
  productData({
    code: "LIP_BALM_111",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Too Faced",
    name: "Kissing Jelly Non-Sticky Lip Oil Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2739217"),
    link: "https://www.sephora.com/product/kissing-jelly-non-sticky-lip-oil-gloss-P509300?skuId=2739217"
  }),
  productData({
    code: "LIP_BALM_112",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kosas",
    name: "Wet Lip Oil Plumping Peptide Lip Treatment Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2486769"),
    link: "https://www.sephora.com/product/lip-oil-P451920?skuId=2486769"
  }),
  productData({
    code: "LIP_BALM_113",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Mango People",
    name: "Mango Cream Blush & Lip Multistick",
    type: "Lip Balm & Treatment",
    image: skuImage("2717791"),
    link: "https://www.sephora.com/product/mango-cream-blush-lip-multistick-P507343?skuId=2717791"
  }),
  productData({
    code: "LIP_BALM_114",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Jack Black",
    name: "Lip Service - Lip Balm Duo Mint & Shea",
    type: "Lip Balm & Treatment",
    image: skuImage("2456259"),
    link: "https://www.sephora.com/product/jack-black-lip-service-lip-balm-duo-mint-shea-P474057?skuId=2456259"
  }),
  productData({
    code: "LIP_BALM_115",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Bobbi Brown",
    name: "Extra Plump Hydrating Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2769198"),
    link: "https://www.sephora.com/product/bobbi-brown-extra-plump-lip-serum-P504216?skuId=2769198"
  }),
  productData({
    code: "LIP_BALM_116",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "NUDESTIX",
    name: "Nudescreen SPF 30 Blush Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2756005"),
    link: "https://www.sephora.com/product/nudestix-nudescreen-blush-lip-tint-spf-30-P509877?skuId=2756005"
  }),
  productData({
    code: "LIP_BALM_117",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Dr. Jart+",
    name: "Vital Hydra Solution™ Jelly Bear Lip Mask with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: "https://www.sephora.com/productimages/sku/s2810299-av-0202507240851191670700-zoom.jpg?imwidth=315",
    link: "https://www.sephora.com/product/dr-jart-dr-jart-x-enhypen-jelly-bear-lip-mask-with-bonus-id-photo-set-P513294?skuId=2810299"
  }),
  productData({
    code: "LIP_BALM_118",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "TOM FORD",
    name: "Soleil Lip Balm for Glowing Hydration",
    type: "Lip Balm & Treatment",
    image: skuImage("2849537"),
    link: "https://www.sephora.com/product/soleil-lip-balm-P516417?skuId=2849537"
  }),
  productData({
    code: "LIP_BALM_119",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kosas",
    name: "Plump + Juicy Lip Booster Buttery Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2600849"),
    link: "https://www.sephora.com/product/plump-juicy-lip-collagen-booster-P500329?skuId=2600849"
  }),
  productData({
    code: "LIP_BALM_120",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Farmacy",
    name: "Honey Butter Beeswax Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2042794"),
    link: "https://www.sephora.com/product/honey-butter-beeswax-lip-balm-P428416?skuId=2042794"
  }),
  productData({
    code: "LIP_BALM_121",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Gucci",
    name: "Multipurpose Hydrating and Nourishing Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2585982"),
    link: "https://www.sephora.com/product/gucci-baume-nourrissant-universal-nourishing-balm-P500476?skuId=2585982"
  }),
  productData({
    code: "LIP_BALM_122",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "BASMA",
    name: "The Ultra-Hydrating Liquid Lipstick",
    type: "Lip Balm & Treatment",
    image: skuImage("2847580"),
    link: "https://www.sephora.com/product/the-high-pigment-blurring-gloss-balm-P515726?skuId=2847580"
  }),
  productData({
    code: "LIP_BALM_123",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Charlotte Tilbury",
    name: "Hyaluronic Happikiss Lipstick Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2420503"),
    link: "https://www.sephora.com/product/charlotte-tilbury-hyaluronic-happi-kiss-color-lip-balm-P468347?skuId=2420503"
  }),
  productData({
    code: "LIP_BALM_124",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "HAUS LABS BY LADY GAGA",
    name: "PhD Hybrid Hydrating Tinted Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2571941"),
    link: "https://www.sephora.com/product/phd-hybrid-lip-oil-P500283?skuId=2571941"
  }),
  productData({
    code: "LIP_BALM_125",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fel beauty",
    name: "Kissylips™ Hydrating High Shine Lip and Cheek Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2930063"),
    link: "https://www.sephora.com/product/kissylips-hydrating-high-shine-lip-and-cheek-balm-P519767?skuId=2930063"
  }),
  productData({
    code: "LIP_BALM_126",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Mango People",
    name: "Hydrating Glossy Mango Butter Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2774917"),
    link: "https://www.sephora.com/product/mango-people-hydrating-glossy-mango-butter-lip-balm-P512272?skuId=2774917"
  }),
  productData({
    code: "LIP_BALM_127",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "TOM FORD",
    name: "Soleil High-Shine Tinted Glow Plumping Lip Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2966513"),
    link: "https://www.sephora.com/product/soleil-high-shine-tinted-glow-plumping-lip-gloss-P522126?skuId=2966513"
  }),
  productData({
    code: "LIP_BALM_128",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Fara Homidi",
    name: "Essential Lip Refillable Compact",
    type: "Lip Balm & Treatment",
    image: skuImage("2911055"),
    link: "https://www.sephora.com/product/fara-homidi-essential-lip-refillable-compact-P511748?skuId=2911055"
  }),
  productData({
    code: "LIP_BALM_129",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "caliray",
    name: "Socal Superbloom Dewy Lip & Cheek Soft Stain Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2698306"),
    link: "https://www.sephora.com/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322?skuId=2698306"
  }),
  productData({
    code: "LIP_BALM_130",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "INNBEAUTY PROJECT",
    name: "Glaze Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2458677"),
    link: "https://www.sephora.com/product/innbeauty-project-glaze-lip-oil-P471038?skuId=2458677"
  }),
  productData({
    code: "LIP_BALM_131",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LANEIGE",
    name: "Bouncy & Firm Plumping Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2743102"),
    link: "https://www.sephora.com/product/laneige-bouncy-firm-plumping-lip-treatment-P513177?skuId=2743102"
  }),
  productData({
    code: "LIP_BALM_132",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "INNBEAUTY PROJECT",
    name: "Latte Lips Glaze Lip Oil Lip Set",
    type: "Lip Balm & Treatment",
    image: skuImage("2802403"),
    link: "https://www.sephora.com/product/innbeauty-project-latte-lips-lip-oil-glaze-duo-P513466?skuId=2802403"
  }),
  productData({
    code: "LIP_BALM_133",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Laura Geller",
    name: "The Wonder Balm Cream Blush with Squalane",
    type: "Lip Balm & Treatment",
    image: skuImage("2922797"),
    link: "https://www.sephora.com/product/the-wonder-balm-for-face-lips-P519549?skuId=2922797"
  }),
  productData({
    code: "LIP_BALM_134",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Sarah Creal",
    name: "Lip Grip Peptide Priming Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2823730"),
    link: "https://www.sephora.com/product/sarah-creal-lip-grip-peptide-priming-treatment-P513265?skuId=2823730"
  }),
  productData({
    code: "LIP_BALM_135",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "ILIA",
    name: "Lip Wrap Reviving Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2512572"),
    link: "https://www.sephora.com/product/ilia-lip-wrap-revival-balm-P480308?skuId=2512572"
  }),
  productData({
    code: "LIP_BALM_136",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "TOM FORD",
    name: "Soleil Sunlit Rose Lip Balm for Shine + Plumping",
    type: "Lip Balm & Treatment",
    image: skuImage("2503381"),
    link: "https://www.sephora.com/product/tom-ford-soleil-sunlit-rose-lip-balm-P509462?skuId=2503381"
  }),
  productData({
    code: "LIP_BALM_137",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Kaja",
    name: "Juicy Glass Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2807022"),
    link: "https://www.sephora.com/product/juicy-glass-lip-oil-P508041?skuId=2807022"
  }),
  productData({
    code: "LIP_BALM_138",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "DIOR",
    name: "Dior Addict Lip Tint",
    type: "Lip Balm & Treatment",
    image: skuImage("2571420"),
    link: "https://www.sephora.com/product/dior-dior-addict-lip-tint-P483654?skuId=2571420"
  }),
  productData({
    code: "LIP_BALM_139",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "ILIA",
    name: "Lip Wrap Overnight Mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2410561"),
    link: "https://www.sephora.com/product/ilia-lip-wrap-clean-hydrating-lip-mask-P467765?skuId=2410561"
  }),
  productData({
    code: "LIP_BALM_140",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "The INKEY List",
    name: "Tripeptide Plumping Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2701027"),
    link: "https://www.sephora.com/product/tripeptide-plumping-lip-balm-P507592?skuId=2701027"
  }),
  productData({
    code: "LIP_BALM_141",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Hourglass",
    name: "N° 28 Lip Treatment Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("1500826"),
    link: "https://www.sephora.com/product/no-28-lip-treatment-oil-P379096?skuId=1500826"
  }),
  productData({
    code: "LIP_BALM_142",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "PATRICK TA",
    name: "Major Glow Softening Lip Masque",
    type: "Lip Balm & Treatment",
    image: skuImage("2371730"),
    link: "https://www.sephora.com/product/patrick-ta-major-glow-2-0-lip-masque-P461224?skuId=2371730"
  }),
  productData({
    code: "LIP_BALM_143",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Freck Beauty",
    name: "Best of Rich Bitch Primer and Lip Balm Set",
    type: "Lip Balm & Treatment",
    image: skuImage("2812626"),
    link: "https://www.sephora.com/product/freck-beauty-rich-bitch-primer-balm-og-P512558?skuId=2812626"
  }),
  productData({
    code: "LIP_BALM_144",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Dr. Jart+",
    name: "Ceramidin™ Hydrating Ceramide Lip Balm for Dry Lips",
    type: "Lip Balm & Treatment",
    image: skuImage("2765097"),
    link: "https://www.sephora.com/product/dr-jart-ceramidin-tm-hydrating-ceramide-lip-balm-for-dry-lips-P511549?skuId=2765097"
  }),
  productData({
    code: "LIP_BALM_145",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "LAWLESS",
    name: "Jumbo Queen Sized Forget The Filler Lip Plumper Line Smoothing Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2741627"),
    link: "https://www.sephora.com/product/lawless-jumbo-queen-sized-forget-filler-lip-plumper-line-smoothing-gloss-P509060?skuId=2741627"
  }),
  productData({
    code: "LIP_BALM_146",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Fenty Beauty by Rihanna",
    name: "Perfect Puck'r Hydrating Lip Care Duo",
    type: "Lip Balm & Treatment",
    image: skuImage("2766376"),
    link: "https://www.sephora.com/product/fenty-skin-rihanna-perfect-puck-r-hydrating-lip-care-duo-P511733?skuId=2766376"
  }),
  productData({
    code: "LIP_BALM_147",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAKEUP BY MARIO",
    name: "Perfecting Lip Scrub",
    type: "Lip Balm & Treatment",
    image: skuImage("2502441"),
    link: "https://www.sephora.com/product/makeup-by-mario-perfecting-lip-scrub-P477805?skuId=2502441"
  }),
  productData({
    code: "LIP_BALM_148",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "tarte",
    name: "maracuja juicy lip high-shine vinyl gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2737112"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-vinyl-P509396?skuId=2737112"
  }),
  productData({
    code: "LIP_BALM_149",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "tarte",
    name: "maracuja juicy lip nourishing melt mask",
    type: "Lip Balm & Treatment",
    image: skuImage("2833259"),
    link: "https://www.sephora.com/product/tarte-maracuja-juicy-melt-mask-P515775?skuId=2833259"
  }),
  productData({
    code: "LIP_BALM_150",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "TOM FORD",
    name: "Soleil Lip Blush Balm with pH-Adaptive Pink Stain",
    type: "Lip Balm & Treatment",
    image: skuImage("2573418"),
    link: "https://www.sephora.com/product/tom-ford-soleil-lip-blush-P483702?skuId=2573418"
  }),
  productData({
    code: "LIP_BALM_151",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "SIMIHAZE BEAUTY",
    name: "Velvet Blur Matte Lipstick Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2782654"),
    link: "https://www.sephora.com/product/velvet-blur-matte-lipbalm-P503349?skuId=2782654"
  }),
  productData({
    code: "LIP_BALM_152",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Iris&Romeo",
    name: "Ceramide Multi-balm Lip+Cheek Cream Blush Stick",
    type: "Lip Balm & Treatment",
    image: skuImage("2787935"),
    link: "https://www.sephora.com/product/ceramide-multi-balm-lip-cheek-cream-blush-stick-P509340?skuId=2787935"
  }),
  productData({
    code: "LIP_BALM_153",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Too Faced",
    name: "Lip Injection Extreme Plumping Clicks Lip Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2839520"),
    link: "https://www.sephora.com/product/lip-injection-juicy-clicks-P514910?skuId=2839520"
  }),
  productData({
    code: "LIP_BALM_154",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAED",
    name: "Reveal Exfoliating Lip Polish",
    type: "Lip Balm & Treatment",
    image: skuImage("2912632"),
    link: "https://www.sephora.com/product/reveal-exfoliating-lip-polish-P518286?skuId=2912632"
  }),
  productData({
    code: "LIP_BALM_155",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Givenchy",
    name: "Rose Perfecto Hydrating Tinted Lip Balm & Gloss",
    type: "Lip Balm & Treatment",
    image: skuImage("2749554"),
    link: "https://www.sephora.com/product/givenchy-le-rose-perfecto-liquid-balm-P457245?skuId=2749554"
  }),
  productData({
    code: "LIP_BALM_156",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Advanced Therapy Lip Rescue Ointment",
    type: "Lip Balm & Treatment",
    image: skuImage("2737880"),
    link: "https://www.sephora.com/product/fresh-sugar-advanced-therapy-lip-rescue-ointment-P509778?skuId=2737880"
  }),
  productData({
    code: "LIP_BALM_157",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "fresh",
    name: "Sugar Mint Rush Freshening Lip Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2175503"),
    link: "https://www.sephora.com/product/sugar-lip-treatment-mint-rush-P442003?skuId=2175503"
  }),
  productData({
    code: "LIP_BALM_158",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "INNBEAUTY PROJECT",
    name: "Get Glazed Lip Set",
    type: "Lip Balm & Treatment",
    image: skuImage("2674372"),
    link: "https://www.sephora.com/product/innbeauty-project-get-glazed-lip-duo-P505617?skuId=2674372"
  }),
  productData({
    code: "LIP_BALM_159",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Urban Decay",
    name: "Ultimate Ozone Multipurpose Primer Pencil",
    type: "Lip Balm & Treatment",
    image: skuImage("1704550"),
    link: "https://www.sephora.com/product/ultimate-ozone-multipurpose-primer-pencil-P395733?skuId=1704550"
  }),
  productData({
    code: "LIP_BALM_160",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Anastasia Beverly Hills",
    name: "Hydrating and Smoothing Lip Primer",
    type: "Lip Balm & Treatment",
    image: skuImage("1792555"),
    link: "https://www.sephora.com/product/lip-primer-P406577?skuId=1792555"
  }),
  productData({
    code: "LIP_BALM_161",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "GUERLAIN",
    name: "Kiss Kiss Bee Glow Hydrating Tinted Lip Oil",
    type: "Lip Balm & Treatment",
    image: skuImage("2772218"),
    link: "https://www.sephora.com/product/guerlain-kiss-kiss-bee-glow-lip-oil-P510448?skuId=2772218"
  }),
  productData({
    code: "LIP_BALM_162",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "ISAMAYA",
    name: "Hyalurolip Lip Plumper with Hyaluronic Acid",
    type: "Lip Balm & Treatment",
    image: skuImage("2855377"),
    link: "https://www.sephora.com/product/hyalurolip-lip-plumper-with-hyaluronic-acid-P515455?skuId=2855377"
  }),
  productData({
    code: "LIP_BALM_163",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Saint Jane Beauty",
    name: "Luxury Lip Shine – Longwear Hydration Lip Oil with Vitamin C",
    type: "Lip Balm & Treatment",
    image: skuImage("2599322"),
    link: "https://www.sephora.com/product/luxury-lip-shine-longwear-hydration-gloss-with-vitamin-c-P501185?skuId=2599322"
  }),
  productData({
    code: "LIP_BALM_164",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Augustinus Bader",
    name: "The Lip Balm",
    type: "Lip Balm & Treatment",
    image: skuImage("2874246"),
    link: "https://www.sephora.com/product/the-lip-balm-P516364?skuId=2874246"
  }),
  productData({
    code: "LIP_BALM_165",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "MAED",
    name: "Reset Hydrating Line-Filling Lip Serum Treatment",
    type: "Lip Balm & Treatment",
    image: skuImage("2912665"),
    link: "https://www.sephora.com/product/reset-hydrating-line-smoothing-lip-serum-P518287?skuId=2912665"
  }),
  productData({
    code: "LIP_BALM_166",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "Bobbi Brown",
    name: "Crushed Oil-Infused Tinted Lip Gloss Shimmer",
    type: "Lip Balm & Treatment",
    image: skuImage("2577310"),
    link: "https://www.sephora.com/product/crushed-oil-infused-gloss-shimmer-P500606?skuId=2577310"
  }),
  productData({
    code: "LIP_BALM_167",
    category: "Makeup > Lip > Lip Balm & Treatment",
    brand: "BeautyBio",
    name: "The Pout Sparkling Rosé Hyaluronic Acid Collagen Plumping Lip Serum",
    type: "Lip Balm & Treatment",
    image: skuImage("2163079"),
    link: "https://www.sephora.com/product/the-pout-sparkling-rose-hyaluronic-acid-collagen-plumping-lip-serum-P438635?skuId=2163079"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Sponges & Applicators
  // Products: 6
  // ==================================================
  productData({
    code: "SPONGES_APPLICATORS_001",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "SEPHORA COLLECTION",
    name: "Velour Makeup Powder Puff",
    type: "Sponges & Applicators",
    image: skuImage("2730844"),
    link: "https://www.sephora.com/product/sephora-collection-velour-makeup-face-puff-P502975?skuId=2730844"
  }),
  productData({
    code: "SPONGES_APPLICATORS_002",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "Beautyblender",
    name: "ORIGINAL Beautyblender® Makeup Sponge",
    type: "Sponges & Applicators",
    image: skuImage("2230829"),
    link: "https://www.sephora.com/product/beautyblender-P228913?skuId=2230829"
  }),
  productData({
    code: "SPONGES_APPLICATORS_003",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "SEPHORA COLLECTION",
    name: "Flawless Complexion Angled Sponge",
    type: "Sponges & Applicators",
    image: skuImage("2760221"),
    link: "https://www.sephora.com/product/sephora-collection-flawless-complexion-angled-sponge-P513111?skuId=2760221"
  }),
  productData({
    code: "SPONGES_APPLICATORS_004",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "SEPHORA COLLECTION",
    name: "Tap That Puff Makeup Sponge",
    type: "Sponges & Applicators",
    image: skuImage("2887867"),
    link: "https://www.sephora.com/product/sephora-pantone-universe-tap-that-puff-sponge-P518087?skuId=2887867"
  }),
  productData({
    code: "SPONGES_APPLICATORS_005",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "SEPHORA COLLECTION",
    name: "Mini Tap That Puff Makeup Sponges",
    type: "Sponges & Applicators",
    image: skuImage("2887826"),
    link: "https://www.sephora.com/product/sephora-pantone-universe-mini-tap-that-puff-sponges-P518088?skuId=2887826"
  }),
  productData({
    code: "SPONGES_APPLICATORS_006",
    category: "Makeup > Brushes & Applicators > Sponges & Applicators",
    brand: "SEPHORA COLLECTION",
    name: "Pillow Dream Makeup Sponge Set",
    type: "Sponges & Applicators",
    image: skuImage("2907897"),
    link: "https://www.sephora.com/product/dream-makeup-sponge-set-P520103?skuId=2907897"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Face Brushes
  // Products: 6
  // ==================================================
  productData({
    code: "FACE_BRUSHES_001",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "MAKEUP BY MARIO",
    name: "F4 Dual-Ended Foundation and Face Brush",
    type: "Face Brushes",
    image: skuImage("2648020"),
    link: "https://www.sephora.com/product/makeup-by-mario-surreal-foundation-f4-brush-P503698?skuId=2648020"
  }),
  productData({
    code: "FACE_BRUSHES_002",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "SEPHORA COLLECTION",
    name: "PRO Foundation Brush #64",
    type: "Face Brushes",
    image: skuImage("2596468"),
    link: "https://www.sephora.com/product/sephora-collection-pro-foundation-64-P455639?skuId=2596468"
  }),
  productData({
    code: "FACE_BRUSHES_003",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "SEPHORA COLLECTION",
    name: "PRO Concealer Brush #71",
    type: "Face Brushes",
    image: skuImage("2290278"),
    link: "https://www.sephora.com/product/pro-concealer-brush-71-P417913?skuId=2290278"
  }),
  productData({
    code: "FACE_BRUSHES_004",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "SEPHORA COLLECTION",
    name: "Dual Ended Cheek Brush",
    type: "Face Brushes",
    image: skuImage("2866713"),
    link: "https://www.sephora.com/product/sephora-collection-dual-ended-cheek-brush-P516092?skuId=2866713"
  }),
  productData({
    code: "FACE_BRUSHES_005",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "SEPHORA COLLECTION",
    name: "Mini PRO Foundation Brush #70.5",
    type: "Face Brushes",
    image: skuImage("2632461"),
    link: "https://www.sephora.com/product/sephora-collection-mini-pro-foundation-brush-70-P505758?skuId=2632461"
  }),
  productData({
    code: "FACE_BRUSHES_006",
    category: "Makeup > Brushes & Applicators > Face Brushes",
    brand: "SEPHORA COLLECTION",
    name: "Essential Brush - 02 Concealer",
    type: "Face Brushes",
    image: skuImage("2759330"),
    link: "https://www.sephora.com/product/sephora-essential-02-concealer-brush-P513140?skuId=2759330"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Eye Brushes
  // Products: 6
  // ==================================================
  productData({
    code: "EYE_BRUSHES_001",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "SEPHORA COLLECTION",
    name: "PRO Eyeliner Brush #22",
    type: "Eye Brushes",
    image: skuImage("2290542"),
    link: "https://www.sephora.com/product/pro-angled-liner-brush-22-P313034?skuId=2290542"
  }),
  productData({
    code: "EYE_BRUSHES_002",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "SEPHORA COLLECTION",
    name: "The Eye Brush Set",
    type: "Eye Brushes",
    image: skuImage("2760098"),
    link: "https://www.sephora.com/product/sephora-collection-the-eye-brush-set-P513116?skuId=2760098"
  }),
  productData({
    code: "EYE_BRUSHES_003",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "SEPHORA COLLECTION",
    name: "PRO Crease Brush #19",
    type: "Eye Brushes",
    image: skuImage("2290138"),
    link: "https://www.sephora.com/product/sephora-collection-pro-crease-19-P455661?skuId=2290138"
  }),
  productData({
    code: "EYE_BRUSHES_004",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "SEPHORA COLLECTION",
    name: "Essential Brush - 10 Smudger",
    type: "Eye Brushes",
    image: skuImage("2759405"),
    link: "https://www.sephora.com/product/sephora-essential-10-smudger-brush-P513114?skuId=2759405"
  }),
  productData({
    code: "EYE_BRUSHES_005",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "SEPHORA COLLECTION",
    name: "Essential Brush- 13 Multitasker Eye",
    type: "Eye Brushes",
    image: skuImage("2760015"),
    link: "https://www.sephora.com/product/sephora-essential-13-multitasker-eye-brush-P513132?skuId=2760015"
  }),
  productData({
    code: "EYE_BRUSHES_006",
    category: "Makeup > Brushes & Applicators > Eye Brushes",
    brand: "MERIT",
    name: "Brush No. 2 Double Sided Eyeshadow Brush",
    type: "Eye Brushes",
    image: skuImage("2692408"),
    link: "https://www.sephora.com/product/eyeshadow-brush-brush-no-2-P507794?skuId=2692408"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Lip Brushes
  // Products: 3
  // ==================================================
  productData({
    code: "LIP_BRUSHES_001",
    category: "Makeup > Brushes & Applicators > Lip Brushes",
    brand: "SEPHORA COLLECTION",
    name: "PRO Lip Brush #85",
    type: "Lip Brushes",
    image: skuImage("2290559"),
    link: "https://www.sephora.com/product/pro-lip-brush-85-P409080?skuId=2290559"
  }),
  productData({
    code: "LIP_BRUSHES_002",
    category: "Makeup > Brushes & Applicators > Lip Brushes",
    brand: "Westman Atelier",
    name: "Clean Lip Brush",
    type: "Lip Brushes",
    image: skuImage("2434546"),
    link: "https://www.sephora.com/product/westman-atelier-lip-brush-P468444?skuId=2434546"
  }),
  productData({
    code: "LIP_BRUSHES_003",
    category: "Makeup > Brushes & Applicators > Lip Brushes",
    brand: "Fara Homidi",
    name: "Lip Brush",
    type: "Lip Brushes",
    image: skuImage("2791069"),
    link: "https://www.sephora.com/product/fara-homidi-lip-brush-P511731?skuId=2791069"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Brush Sets
  // Products: 4
  // ==================================================
  productData({
    code: "BRUSH_SETS_001",
    category: "Makeup > Brushes & Applicators > Brush Sets",
    brand: "SEPHORA COLLECTION",
    name: "The Total Brush Set",
    type: "Brush Sets",
    image: skuImage("2760080"),
    link: "https://www.sephora.com/product/sephora-collection-the-total-brush-set-P513143?skuId=2760080"
  }),
  productData({
    code: "BRUSH_SETS_002",
    category: "Makeup > Brushes & Applicators > Brush Sets",
    brand: "SEPHORA COLLECTION",
    name: "The Face Brush Set",
    type: "Brush Sets",
    image: skuImage("2760106"),
    link: "https://www.sephora.com/product/sephora-collection-the-face-brush-set-P513145?skuId=2760106"
  }),
  productData({
    code: "BRUSH_SETS_003",
    category: "Makeup > Brushes & Applicators > Brush Sets",
    brand: "SEPHORA COLLECTION",
    name: "The Starter Brush Set",
    type: "Brush Sets",
    image: skuImage("2760114"),
    link: "https://www.sephora.com/product/sephora-collection-the-starter-brush-set-P513153?skuId=2760114"
  }),
  productData({
    code: "BRUSH_SETS_004",
    category: "Makeup > Brushes & Applicators > Brush Sets",
    brand: "SEPHORA COLLECTION",
    name: "Pillow Dream Face and Eye Brush Set",
    type: "Brush Sets",
    image: skuImage("2907707"),
    link: "https://www.sephora.com/product/pillow-dream-face-and-eye-brush-set-P520104?skuId=2907707"
  }),

  // ==================================================
  // Makeup > Brushes & Applicators > Brush Cleaners
  // Products: 6
  // ==================================================
  productData({
    code: "BRUSH_CLEANERS_001",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "SEPHORA COLLECTION",
    name: "Deep-Cleaning Brush and Sponge Shampoo",
    type: "Brush Cleaners",
    image: skuImage("2497246"),
    link: "https://www.sephora.com/product/detox-deep-cleaning-brush-shampoo-P427017?skuId=2497246"
  }),
  productData({
    code: "BRUSH_CLEANERS_002",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "SEPHORA COLLECTION",
    name: "Mini Daily Brush Cleaner",
    type: "Brush Cleaners",
    image: skuImage("2497261"),
    link: "https://www.sephora.com/product/refresh-daily-brush-mini-cleaner-P451198?skuId=2497261"
  }),
  productData({
    code: "BRUSH_CLEANERS_003",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "Beautyblender",
    name: "Blendercleanser Tool Scrub Exfoliating Solid Soap",
    type: "Brush Cleaners",
    image: skuImage("2886034"),
    link: "https://www.sephora.com/product/blendercleanser-tool-scrub-P516856?skuId=2886034"
  }),
  productData({
    code: "BRUSH_CLEANERS_004",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "SEPHORA COLLECTION",
    name: "Jumbo Deep-Cleaning Brush and Sponge Shampoo",
    type: "Brush Cleaners",
    image: skuImage("2636272"),
    link: "https://www.sephora.com/product/jumbo-deep-cleaning-brush-sponge-shampoo-P506824?skuId=2636272"
  }),
  productData({
    code: "BRUSH_CLEANERS_005",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "SEPHORA COLLECTION",
    name: "Jumbo Daily Brush Cleaner",
    type: "Brush Cleaners",
    image: skuImage("2636280"),
    link: "https://www.sephora.com/product/jumbo-daily-brush-cleaner-P506834?skuId=2636280"
  }),
  productData({
    code: "BRUSH_CLEANERS_006",
    category: "Makeup > Brushes & Applicators > Brush Cleaners",
    brand: "SEPHORA COLLECTION",
    name: "Daily Brush Cleaner",
    type: "Brush Cleaners",
    image: skuImage("2497253"),
    link: "https://www.sephora.com/product/the-cleanse-daily-brush-cleaner-P408017?skuId=2497253"
  }),

  // ==================================================
  // Makeup > Face > Blush
  // Products: 124
  // ==================================================
  productData({
    code: "BLUSH_001",
    category: "Makeup > Face > Blush",
    brand: "Fenty Beauty by Rihanna",
    name: "Shake N' Play Liquid Blush",
    type: "Blush",
    image: skuImage("2978831"),
    link: "https://www.sephora.com/product/shake-n-play-liquid-blush-P522446?skuId=2978831"
  }),
  productData({
    code: "BLUSH_002",
    category: "Makeup > Face > Blush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Blush",
    type: "Blush",
    image: skuImage("2911741"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778?skuId=2911741"
  }),
  productData({
    code: "BLUSH_003",
    category: "Makeup > Face > Blush",
    brand: "Yves Saint Laurent",
    name: "Make Me Blush 24H Buildable Powder Blush",
    type: "Blush",
    image: skuImage("2935195"),
    link: "https://www.sephora.com/product/make-me-blush-24h-buildable-powder-blush-P514568?skuId=2935195"
  }),
  productData({
    code: "BLUSH_004",
    category: "Makeup > Face > Blush",
    brand: "Prada",
    name: "Touch Cream-To-Powder Soft Blur Longwear Blush",
    type: "Blush",
    image: skuImage("2952737"),
    link: "https://www.sephora.com/product/prada-touch-cream-to-powder-soft-blur-longwear-blush-P521356?skuId=2952737"
  }),
  productData({
    code: "BLUSH_005",
    category: "Makeup > Face > Blush",
    brand: "MERIT",
    name: "Flush Balm Cream Blush",
    type: "Blush",
    image: skuImage("2842870"),
    link: "https://www.sephora.com/product/merit-flush-balm-cream-blush-P468693?skuId=2842870"
  }),
  productData({
    code: "BLUSH_006",
    category: "Makeup > Face > Blush",
    brand: "Saie",
    name: "Mini Dew Blush Liquid Cream Blush",
    type: "Blush",
    image: skuImage("2938538"),
    link: "https://www.sephora.com/product/mini-dew-blush-P520666?skuId=2938538"
  }),
  productData({
    code: "BLUSH_007",
    category: "Makeup > Face > Blush",
    brand: "Dolce&Gabbana",
    name: "Cherry Glaze Bar 24H Lasting Glow & Waterproof Cream Blush Stick with Vegan Collagen",
    type: "Blush",
    image: skuImage("2986123"),
    link: "https://www.sephora.com/product/dolce-gabbana-cherry-glaze-bar-blush-P522575?skuId=2986123"
  }),
  productData({
    code: "BLUSH_008",
    category: "Makeup > Face > Blush",
    brand: "PATRICK TA",
    name: "Mini Major Headlines Double-Take Crème & Powder Blush Duo",
    type: "Blush",
    image: skuImage("2926020"),
    link: "https://www.sephora.com/product/mini-major-headlines-double-take-creme-powder-blush-duo-P518438?skuId=2926020"
  }),
  productData({
    code: "BLUSH_009",
    category: "Makeup > Face > Blush",
    brand: "HAUS LABS BY LADY GAGA",
    name: "Color Fuse Longwear Hydrating Glassy Lip + Cheek Blush Balm Stick",
    type: "Blush",
    image: skuImage("2870178"),
    link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-longwear-hydrating-glassy-lip-cheek-blush-balm-stick-P510741?skuId=2870178"
  }),
  productData({
    code: "BLUSH_010",
    category: "Makeup > Face > Blush",
    brand: "Saie",
    name: "SuperSuedeTM Radiant Talc-Free Baked Powder Blush",
    type: "Blush",
    image: skuImage("2849123"),
    link: "https://www.sephora.com/product/saie-supersuede-talc-free-powder-blush-P515061?skuId=2849123"
  }),
  productData({
    code: "BLUSH_011",
    category: "Makeup > Face > Blush",
    brand: "Saie",
    name: "Dew Blush Liquid Cream Blush",
    type: "Blush",
    image: skuImage("2872448"),
    link: "https://www.sephora.com/product/saie-dew-blush-liquid-cheek-blush-P469825?skuId=2872448"
  }),
  productData({
    code: "BLUSH_012",
    category: "Makeup > Face > Blush",
    brand: "HUDA BEAUTY",
    name: "Blush Filter Soft Glow Liquid Blush",
    type: "Blush",
    image: skuImage("2954675"),
    link: "https://www.sephora.com/product/blush-filter-soft-glow-liquid-blush-P510756?skuId=2954675"
  }),
  productData({
    code: "BLUSH_013",
    category: "Makeup > Face > Blush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Mini Soft Pinch Liquid Blush",
    type: "Blush",
    image: skuImage("2893329"),
    link: "https://www.sephora.com/product/mini-soft-pinch-liquid-blush-P508264?skuId=2893329"
  }),
  productData({
    code: "BLUSH_014",
    category: "Makeup > Face > Blush",
    brand: "Glossier",
    name: "Cloud Paint Plush Blush",
    type: "Blush",
    image: skuImage("2902617"),
    link: "https://www.sephora.com/product/cloud-paint-plush-blush-P518494?skuId=2902617"
  }),
  productData({
    code: "BLUSH_015",
    category: "Makeup > Face > Blush",
    brand: "NARS",
    name: "Mini Talc-Free Powder Blush",
    type: "Blush",
    image: skuImage("2756062"),
    link: "https://www.sephora.com/product/nars-mini-talc-free-powder-blush-P511166?skuId=2756062"
  }),
  productData({
    code: "BLUSH_016",
    category: "Makeup > Face > Blush",
    brand: "MILK MAKEUP",
    name: "Lip + Cheek Non-Comedogenic Cream Blush Stick",
    type: "Blush",
    image: skuImage("2639664"),
    link: "https://www.sephora.com/product/milk-lip-cheek-cream-blush-stick-P437097?skuId=2639664"
  }),
  productData({
    code: "BLUSH_017",
    category: "Makeup > Face > Blush",
    brand: "ciele",
    name: "flush & PROTECT SPF 45+ powder blush",
    type: "Blush",
    image: skuImage("2867919"),
    link: "https://www.sephora.com/product/flush-protect-spf-45-powder-blush-P517325?skuId=2867919"
  }),
  productData({
    code: "BLUSH_018",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Silky-Soft Powder Blush",
    type: "Blush",
    image: skuImage("2872166"),
    link: "https://www.sephora.com/product/box-o-powder-blush-P500253?skuId=2872166"
  }),
  productData({
    code: "BLUSH_019",
    category: "Makeup > Face > Blush",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Cheek Clapper 3D Blush Trio Palette",
    type: "Blush",
    image: skuImage("2656296"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-cheek-clapper-3d-blush-trio-palette-P482709?skuId=2656296"
  }),
  productData({
    code: "BLUSH_020",
    category: "Makeup > Face > Blush",
    brand: "MAKEUP BY MARIO",
    name: "Soft Pop Powder Blush",
    type: "Blush",
    image: skuImage("2449726"),
    link: "https://www.sephora.com/product/makeup-by-mario-soft-pop-powder-blush-P472325?skuId=2449726"
  }),
  productData({
    code: "BLUSH_021",
    category: "Makeup > Face > Blush",
    brand: "Sarah Creal",
    name: "Coming in Hot Blurring Pressed-Mousse Blush",
    type: "Blush",
    image: skuImage("2921336"),
    link: "https://www.sephora.com/product/coming-in-hot-blurring-pressed-mousse-blush-P522043?skuId=2921336"
  }),
  productData({
    code: "BLUSH_022",
    category: "Makeup > Face > Blush",
    brand: "SEPHORA COLLECTION",
    name: "Blush & Go Longwear Matte Liquid Blush For Lip and Cheek",
    type: "Blush",
    image: skuImage("2871077"),
    link: "https://www.sephora.com/product/sephora-collection-blush-go-matte-liquid-blush-P515938?skuId=2871077"
  }),
  productData({
    code: "BLUSH_023",
    category: "Makeup > Face > Blush",
    brand: "Rare Beauty by Selena Gomez",
    name: "Stay Vulnerable Melting Cream Blush",
    type: "Blush",
    image: skuImage("2418663"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-stay-vulnerable-melting-blush-P467451?skuId=2418663"
  }),
  productData({
    code: "BLUSH_024",
    category: "Makeup > Face > Blush",
    brand: "Laura Mercier",
    name: "Blush Color Infusion Duo Talc-Free Powder Blush",
    type: "Blush",
    image: skuImage("2952521"),
    link: "https://www.sephora.com/product/laura-mercier-blush-color-infusion-duo-talc-free-powder-blush-P521688?skuId=2952521"
  }),
  productData({
    code: "BLUSH_025",
    category: "Makeup > Face > Blush",
    brand: "NARS",
    name: "Insatiable Longwearing Liquid Blush",
    type: "Blush",
    image: skuImage("2968238"),
    link: "https://www.sephora.com/product/nars-insatiable-liquid-blush-P522502?skuId=2968238"
  }),
  productData({
    code: "BLUSH_026",
    category: "Makeup > Face > Blush",
    brand: "Yves Saint Laurent",
    name: "Make Me Blush 12H Blurring Liquid Blush",
    type: "Blush",
    image: skuImage("2872182"),
    link: "https://www.sephora.com/product/yves-saint-laurent-make-me-blush-12h-blurring-liquid-blush-P512305?skuId=2872182"
  }),
  productData({
    code: "BLUSH_027",
    category: "Makeup > Face > Blush",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Blush and Highlighter Glaze",
    type: "Blush",
    image: skuImage("2871028"),
    link: "https://www.sephora.com/product/colorful-blush-glaze-P516171?skuId=2871028"
  }),
  productData({
    code: "BLUSH_028",
    category: "Makeup > Face > Blush",
    brand: "ciele",
    name: "blush & PROTECT SPF 50+ liquid blush",
    type: "Blush",
    image: skuImage("2867935"),
    link: "https://www.sephora.com/product/blush-protect-spf-50-liquid-blush-P507753?skuId=2867935"
  }),
  productData({
    code: "BLUSH_029",
    category: "Makeup > Face > Blush",
    brand: "caliray",
    name: "Blurry Blush Longwear Cream Blush",
    type: "Blush",
    image: skuImage("2794451"),
    link: "https://www.sephora.com/product/caliray-blurry-blush-pore-minimizing-cream-blush-with-niacinamide-P513474?skuId=2794451"
  }),
  productData({
    code: "BLUSH_030",
    category: "Makeup > Face > Blush",
    brand: "SEPHORA COLLECTION",
    name: "Color Twister Color Changing Oil-in-Stick for Lip + Cheek",
    type: "Blush",
    image: skuImage("2870749"),
    link: "https://www.sephora.com/product/color-twister-color-changing-oil-in-stick-lip-cheek-P516070?skuId=2870749"
  }),
  productData({
    code: "BLUSH_031",
    category: "Makeup > Face > Blush",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Beauty Soulmates Airbrush Flawless Finish Brightening and Blush Powder Palette",
    type: "Blush",
    image: skuImage("2952745"),
    link: "https://www.sephora.com/product/pillow-talk-beauty-soulmates-brighten-blush-palette-P516013?skuId=2952745"
  }),
  productData({
    code: "BLUSH_032",
    category: "Makeup > Face > Blush",
    brand: "Gucci",
    name: "Luminous Matte Powder Blush",
    type: "Blush",
    image: skuImage("2587319"),
    link: "https://www.sephora.com/product/luminous-matte-beauty-blush-P502188?skuId=2587319"
  }),
  productData({
    code: "BLUSH_033",
    category: "Makeup > Face > Blush",
    brand: "Armani Beauty",
    name: "Luminous Silk Blurring Natural Glow Powder Blush",
    type: "Blush",
    image: skuImage("2662864"),
    link: "https://www.sephora.com/product/luminous-silk-glow-blush-P505416?skuId=2662864"
  }),
  productData({
    code: "BLUSH_034",
    category: "Makeup > Face > Blush",
    brand: "MAC Cosmetics",
    name: "Multisculpt Matte Liquid Eyeshadow + All-over Colour",
    type: "Blush",
    image: skuImage("2944106"),
    link: "https://www.sephora.com/product/mac-multisculpt-matte-liquid-eyeshadow-and-all-over-colour-P520529?skuId=2944106"
  }),
  productData({
    code: "BLUSH_035",
    category: "Makeup > Face > Blush",
    brand: "Charlotte Tilbury",
    name: "Matte Beauty Blush Wand",
    type: "Blush",
    image: skuImage("2697829"),
    link: "https://www.sephora.com/product/matte-beauty-blush-wands-P504020?skuId=2697829"
  }),
  productData({
    code: "BLUSH_036",
    category: "Makeup > Face > Blush",
    brand: "LYS Beauty",
    name: "Higher Standard Cream Glow Blush Sticks",
    type: "Blush",
    image: skuImage("2735900"),
    link: "https://www.sephora.com/product/lys-beauty-higher-standard-cream-glow-blush-sticks-P509577?skuId=2735900"
  }),
  productData({
    code: "BLUSH_037",
    category: "Makeup > Face > Blush",
    brand: "HUNG VANNGO BEAUTY",
    name: "Very Beautiful Matte Velvet Blush",
    type: "Blush",
    image: skuImage("2903821"),
    link: "https://www.sephora.com/product/very-beautiful-matte-velvet-blush-P518972?skuId=2903821"
  }),
  productData({
    code: "BLUSH_038",
    category: "Makeup > Face > Blush",
    brand: "MILK MAKEUP",
    name: "Cooling Water Jelly Tint Lip + Cheek Blush Stain",
    type: "Blush",
    image: skuImage("2872380"),
    link: "https://www.sephora.com/product/milk-makeup-cooling-water-jelly-tint-lip-cheek-blush-stain-P509414?skuId=2872380"
  }),
  productData({
    code: "BLUSH_039",
    category: "Makeup > Face > Blush",
    brand: "VIOLETTE_FR",
    name: "BISOU BLUSH Marbled Cream Blush Stick",
    type: "Blush",
    image: skuImage("2864395"),
    link: "https://www.sephora.com/product/bisou-blush-cream-blush-brush-P515462?skuId=2864395"
  }),
  productData({
    code: "BLUSH_040",
    category: "Makeup > Face > Blush",
    brand: "Hourglass",
    name: "Unreal Liquid Blush",
    type: "Blush",
    image: skuImage("2785194"),
    link: "https://www.sephora.com/product/hourglass-unreal-liquid-blush-P512314?skuId=2785194"
  }),
  productData({
    code: "BLUSH_041",
    category: "Makeup > Face > Blush",
    brand: "LAWLESS",
    name: "Pinch My Cheeks Soft-Blur Cream Blush",
    type: "Blush",
    image: skuImage("2785673"),
    link: "https://www.sephora.com/product/lawless-pinch-my-cheeks-soft-blur-cream-blush-P510360?skuId=2785673"
  }),
  productData({
    code: "BLUSH_042",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Nudies Cream Blush Stick",
    type: "Blush",
    image: skuImage("2834398"),
    link: "https://www.sephora.com/product/nudies-all-over-face-color-P419107?skuId=2834398"
  }),
  productData({
    code: "BLUSH_043",
    category: "Makeup > Face > Blush",
    brand: "SEPHORA COLLECTION",
    name: "Blush Blush Blush. Cream & Powder Palette",
    type: "Blush",
    image: skuImage("2870897"),
    link: "https://www.sephora.com/product/blush-blush-blush-palette-P516069?skuId=2870897"
  }),
  productData({
    code: "BLUSH_044",
    category: "Makeup > Face > Blush",
    brand: "tarte",
    name: "macaron blush & glowTM duo",
    type: "Blush",
    image: skuImage("2989978"),
    link: "https://www.sephora.com/product/macaron-blush-glow-duo-honey-blossom-P520786?skuId=2989978"
  }),
  productData({
    code: "BLUSH_045",
    category: "Makeup > Face > Blush",
    brand: "MAKEUP BY MARIO",
    name: "Jelly JarTM Lip & Cheek Multi-Use Balm",
    type: "Blush",
    image: skuImage("2933026"),
    link: "https://www.sephora.com/product/makeup-by-mario-jelly-jar-lip-cheek-multi-use-balm-P519836?skuId=2933026"
  }),
  productData({
    code: "BLUSH_046",
    category: "Makeup > Face > Blush",
    brand: "BASMA",
    name: "The Hydrating Long-wearing Cream Blush",
    type: "Blush",
    image: skuImage("2739274"),
    link: "https://www.sephora.com/product/basma-the-cream-blush-P509435?skuId=2739274"
  }),
  productData({
    code: "BLUSH_047",
    category: "Makeup > Face > Blush",
    brand: "Saie",
    name: "Glow Sculpt Multi-Use Cream Highlighting Blush",
    type: "Blush",
    image: skuImage("2679462"),
    link: "https://www.sephora.com/product/saie-the-glow-sculpt-P505541?skuId=2679462"
  }),
  productData({
    code: "BLUSH_048",
    category: "Makeup > Face > Blush",
    brand: "Urban Decay",
    name: "Face Bond Long-Lasting Powder Blush Suede",
    type: "Blush",
    image: skuImage("2845378"),
    link: "https://www.sephora.com/product/urban-decay-face-bond-long-lasting-blush-suede-P515194?skuId=2845378"
  }),
  productData({
    code: "BLUSH_049",
    category: "Makeup > Face > Blush",
    brand: "Laura Geller",
    name: "The Wonder Balm Cream Blush with Squalane",
    type: "Blush",
    image: skuImage("2922797"),
    link: "https://www.sephora.com/product/the-wonder-balm-for-face-lips-P519549?skuId=2922797"
  }),
  productData({
    code: "BLUSH_050",
    category: "Makeup > Face > Blush",
    brand: "PAT McGRATH LABS",
    name: "Skin Fetish: Divine Powder Blush",
    type: "Blush",
    image: skuImage("2464881"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-divine-powder-blush-P472489?skuId=2464881"
  }),
  productData({
    code: "BLUSH_051",
    category: "Makeup > Face > Blush",
    brand: "LYS Beauty",
    name: "Higher Standard Cream and Powder Multidimensional Longwear Blush Duo",
    type: "Blush",
    image: skuImage("2921922"),
    link: "https://www.sephora.com/product/higher-standard-cream-powder-multidimensional-longwear-blush-duo-P520547?skuId=2921922"
  }),
  productData({
    code: "BLUSH_052",
    category: "Makeup > Face > Blush",
    brand: "Too Faced",
    name: "Sun Bunny Luminous Blushing Bronzer",
    type: "Blush",
    image: skuImage("2966083"),
    link: "https://www.sephora.com/product/sun-bunny-luminous-blushing-bronzer-P522127?skuId=2966083"
  }),
  productData({
    code: "BLUSH_053",
    category: "Makeup > Face > Blush",
    brand: "Danessa Myricks Beauty",
    name: "Colorfix - Multi-Use Eye, Cheek & Lip Waterproof Liquid Pigment",
    type: "Blush",
    image: skuImage("2798239"),
    link: "https://www.sephora.com/product/danessa-myricks-colorfix-24-hour-cream-color-P468353?skuId=2798239"
  }),
  productData({
    code: "BLUSH_054",
    category: "Makeup > Face > Blush",
    brand: "REFY",
    name: "Cream Blush",
    type: "Blush",
    image: skuImage("2493898"),
    link: "https://www.sephora.com/product/refy-beauty-cream-blush-P475156?skuId=2493898"
  }),
  productData({
    code: "BLUSH_055",
    category: "Makeup > Face > Blush",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Blush",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "BLUSH_056",
    category: "Makeup > Face > Blush",
    brand: "MAC Cosmetics",
    name: "Powder Kiss Lip & Cheek Matte Liquid Mousse",
    type: "Blush",
    image: skuImage("2958262"),
    link: "https://www.sephora.com/product/powder-kiss-lip-cheek-mousse-P520514?skuId=2958262"
  }),
  productData({
    code: "BLUSH_057",
    category: "Makeup > Face > Blush",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Blush & Glow Palette",
    type: "Blush",
    image: skuImage("2705440"),
    link: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700?skuId=2705440"
  }),
  productData({
    code: "BLUSH_058",
    category: "Makeup > Face > Blush",
    brand: "Gucci",
    name: "Glow Dewy Powder Blush",
    type: "Blush",
    image: skuImage("2928448"),
    link: "https://www.sephora.com/product/gucci-glow-dewy-powder-blush-P520021?skuId=2928448"
  }),
  productData({
    code: "BLUSH_059",
    category: "Makeup > Face > Blush",
    brand: "NATASHA DENONA",
    name: "Hy-Blush Cloudy Cream Cheek Duo",
    type: "Blush",
    image: skuImage("2933190"),
    link: "https://www.sephora.com/product/hy-blush-cloudy-cream-cheek-duo-P514909?skuId=2933190"
  }),
  productData({
    code: "BLUSH_060",
    category: "Makeup > Face > Blush",
    brand: "Givenchy",
    name: "Prisme Libre Loose Powder Long-Wearing Radiant Blush",
    type: "Blush",
    image: skuImage("2691178"),
    link: "https://www.sephora.com/product/prisme-libre-blush-P506581?skuId=2691178"
  }),
  productData({
    code: "BLUSH_061",
    category: "Makeup > Face > Blush",
    brand: "Bobbi Brown",
    name: "Pot Rouge Velvet Matte Cream Blush for Cheeks & Lips",
    type: "Blush",
    image: skuImage("2873834"),
    link: "https://www.sephora.com/product/pot-rouge-matte-velvet-cream-blush-for-cheeks-and-lips-P515575?skuId=2873834"
  }),
  productData({
    code: "BLUSH_062",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Juice Stick Dewy Gel-Cream Blush",
    type: "Blush",
    image: skuImage("2938884"),
    link: "https://www.sephora.com/product/juice-stick-dewy-gel-cream-blush-P520123?skuId=2938884"
  }),
  productData({
    code: "BLUSH_063",
    category: "Makeup > Face > Blush",
    brand: "Westman Atelier",
    name: "Baby Cheeks Powder Blush Duo",
    type: "Blush",
    image: skuImage("2869147"),
    link: "https://www.sephora.com/product/westman-atelier-baby-cheeks-powder-blush-duo-P516090?skuId=2869147"
  }),
  productData({
    code: "BLUSH_064",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Play Daze Airy Liquid Blush",
    type: "Blush",
    image: skuImage("2936250"),
    link: "https://www.sephora.com/product/play-daze-airy-liquid-blush-P520082?skuId=2936250"
  }),
  productData({
    code: "BLUSH_065",
    category: "Makeup > Face > Blush",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Face Bronzer, Blush & Highlighter Palette",
    type: "Blush",
    image: skuImage("2820041"),
    link: "https://www.sephora.com/product/colorful-face-palettes-P514459?skuId=2820041"
  }),
  productData({
    code: "BLUSH_066",
    category: "Makeup > Face > Blush",
    brand: "DIOR",
    name: "Rouge Blush",
    type: "Blush",
    image: skuImage("2686962"),
    link: "https://www.sephora.com/product/rouge-blush-P442793?skuId=2686962"
  }),
  productData({
    code: "BLUSH_067",
    category: "Makeup > Face > Blush",
    brand: "Bobbi Brown",
    name: "Skin Enhancer Blush Stick",
    type: "Blush",
    image: skuImage("2941672"),
    link: "https://www.sephora.com/product/bobbi-brown-skin-enhancer-blush-stick-P520117?skuId=2941672"
  }),
  productData({
    code: "BLUSH_068",
    category: "Makeup > Face > Blush",
    brand: "MAC Cosmetics",
    name: "Strobe Beam Illuminating Liquid Blush with Buildable Coverage",
    type: "Blush",
    image: skuImage("2837466"),
    link: "https://www.sephora.com/product/strobe-beam-liquid-blush-P515912?skuId=2837466"
  }),
  productData({
    code: "BLUSH_069",
    category: "Makeup > Face > Blush",
    brand: "Laura Geller",
    name: "Blush and Brighten Marbleized Baked Powder Blush",
    type: "Blush",
    image: skuImage("2922516"),
    link: "https://www.sephora.com/product/baked-blush-n-brighten-marbleized-blush-P519540?skuId=2922516"
  }),
  productData({
    code: "BLUSH_070",
    category: "Makeup > Face > Blush",
    brand: "MAKE UP FOR EVER",
    name: "Artist Longwear Skin-fusing Powder Blush",
    type: "Blush",
    image: skuImage("2690030"),
    link: "https://www.sephora.com/product/artist-longwear-skin-fusing-powder-blush-P507326?skuId=2690030"
  }),
  productData({
    code: "BLUSH_071",
    category: "Makeup > Face > Blush",
    brand: "MILK MAKEUP",
    name: "Bionic Liquid Blush with Hyaluronic Acid",
    type: "Blush",
    image: skuImage("2486967"),
    link: "https://www.sephora.com/product/milk-makeup-bionic-buildable-liquid-blush-P476712?skuId=2486967"
  }),
  productData({
    code: "BLUSH_072",
    category: "Makeup > Face > Blush",
    brand: "Bobbi Brown",
    name: "Pot Rouge Cream Blush for Lips and Cheeks",
    type: "Blush",
    image: skuImage("1418078"),
    link: "https://www.sephora.com/product/pot-rouge-for-lips-cheeks-P270553?skuId=1418078"
  }),
  productData({
    code: "BLUSH_073",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Dandelion Baby-Pink Brightening Blush",
    type: "Blush",
    image: skuImage("2520195"),
    link: "https://www.sephora.com/product/dandelion-box-o-powder-blush-P38347?skuId=2520195"
  }),
  productData({
    code: "BLUSH_074",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Nudestix Stax Blush Balm",
    type: "Blush",
    image: skuImage("2788321"),
    link: "https://www.sephora.com/product/nudestix-nudestix-stax-all-over-color-blush-balm-P512301?skuId=2788321"
  }),
  productData({
    code: "BLUSH_075",
    category: "Makeup > Face > Blush",
    brand: "MAKE UP FOR EVER",
    name: "Artist Liquid Color Waterproof Liquid Blush for Lip + Cheek",
    type: "Blush",
    image: skuImage("2943249"),
    link: "https://www.sephora.com/product/artist-liquid-color-P520538?skuId=2943249"
  }),
  productData({
    code: "BLUSH_076",
    category: "Makeup > Face > Blush",
    brand: "Anastasia Beverly Hills",
    name: "Blurring Serum Liquid Blush",
    type: "Blush",
    image: skuImage("2771996"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-blurring-serum-liquid-blush-P512208?skuId=2771996"
  }),
  productData({
    code: "BLUSH_077",
    category: "Makeup > Face > Blush",
    brand: "NARS",
    name: "Mini Multiple Blush & Sculpt Stick Duo",
    type: "Blush",
    image: skuImage("2974988"),
    link: "https://www.sephora.com/product/mini-multiple-sculpt-stick-set-P522224?skuId=2974988"
  }),
  productData({
    code: "BLUSH_078",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Nudies Matte Blush + Glow Core",
    type: "Blush",
    image: skuImage("2692481"),
    link: "https://www.sephora.com/product/nudestix-nudies-matte-glow-core-all-over-face-blush-P507768?skuId=2692481"
  }),
  productData({
    code: "BLUSH_079",
    category: "Makeup > Face > Blush",
    brand: "Anastasia Beverly Hills",
    name: "Cream Stick Blush with Brush Applicator",
    type: "Blush",
    image: skuImage("2474419"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-stick-blush-P474813?skuId=2474419"
  }),
  productData({
    code: "BLUSH_080",
    category: "Makeup > Face > Blush",
    brand: "PAT McGRATH LABS",
    name: "Divine Cream Blush: Legendary Glow Color Balm",
    type: "Blush",
    image: skuImage("2766780"),
    link: "https://www.sephora.com/product/divine-cream-blush-legendary-glow-color-balm-P506540?skuId=2766780"
  }),
  productData({
    code: "BLUSH_081",
    category: "Makeup > Face > Blush",
    brand: "Charlotte Tilbury",
    name: "Cheek to Chic Blush - Pillow Talk Collection",
    type: "Blush",
    image: skuImage("2309425"),
    link: "https://www.sephora.com/product/charlotte-tilbury-cheek-to-chic-blush-pillow-talk-collection-P454506?skuId=2309425"
  }),
  productData({
    code: "BLUSH_082",
    category: "Makeup > Face > Blush",
    brand: "Fenty Beauty by Rihanna",
    name: "Mini Killawatt Freestyle Highlighter",
    type: "Blush",
    image: skuImage("2929537"),
    link: "https://www.sephora.com/product/mini-killwatt-freestyle-highlighter-P520308?skuId=2929537"
  }),
  productData({
    code: "BLUSH_083",
    category: "Makeup > Face > Blush",
    brand: "LIXR Beauty",
    name: "LixstickTM Creamy Lip +Cheek Tint Stick",
    type: "Blush",
    image: skuImage("2955201"),
    link: "https://www.sephora.com/product/lixr-lixstick-multi-tint-P521064?skuId=2955201"
  }),
  productData({
    code: "BLUSH_084",
    category: "Makeup > Face > Blush",
    brand: "IT Cosmetics",
    name: "Glow with Confidence Sun Cream Blush with Hyaluronic Acid",
    type: "Blush",
    image: skuImage("2773349"),
    link: "https://www.sephora.com/product/it-cosmetics-glow-with-confidence-sun-blush-P511282?skuId=2773349"
  }),
  productData({
    code: "BLUSH_085",
    category: "Makeup > Face > Blush",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Glow Blush",
    type: "Blush",
    image: skuImage("2743375"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533?skuId=2743375"
  }),
  productData({
    code: "BLUSH_086",
    category: "Makeup > Face > Blush",
    brand: "Anastasia Beverly Hills",
    name: "Magic Touch Cream Blush & Lip Trio",
    type: "Blush",
    image: skuImage("2873594"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-magic-touch-blush-trio-P516915?skuId=2873594"
  }),
  productData({
    code: "BLUSH_087",
    category: "Makeup > Face > Blush",
    brand: "Charlotte Tilbury",
    name: "Cheek To Chic Blush",
    type: "Blush",
    image: skuImage("2115905"),
    link: "https://www.sephora.com/product/cheek-to-chic-P433527?skuId=2115905"
  }),
  productData({
    code: "BLUSH_088",
    category: "Makeup > Face > Blush",
    brand: "Too Faced",
    name: "Cloud Crush Whipped Lip & Cheek Blush",
    type: "Blush",
    image: skuImage("2886000"),
    link: "https://www.sephora.com/product/too-faced-cloud-crush-whipped-lip-cheek-blur-blush-P517844?skuId=2886000"
  }),
  productData({
    code: "BLUSH_089",
    category: "Makeup > Face > Blush",
    brand: "Mango People",
    name: "Mango Cream Blush & Lip Multistick",
    type: "Blush",
    image: skuImage("2717791"),
    link: "https://www.sephora.com/product/mango-cream-blush-lip-multistick-P507343?skuId=2717791"
  }),
  productData({
    code: "BLUSH_090",
    category: "Makeup > Face > Blush",
    brand: "NARS",
    name: "Mini Multiple Soft Blur Blush Stick Duo",
    type: "Blush",
    image: skuImage("2927366"),
    link: "https://www.sephora.com/product/mini-multiple-soft-blur-blush-stick-duo-P520071?skuId=2927366"
  }),
  productData({
    code: "BLUSH_091",
    category: "Makeup > Face > Blush",
    brand: "TOM FORD",
    name: "Soleil Sunkissed Liquid Cream Blush",
    type: "Blush",
    image: skuImage("2966547"),
    link: "https://www.sephora.com/product/soleil-sunkissed-liquid-cream-blush-P522109?skuId=2966547"
  }),
  productData({
    code: "BLUSH_092",
    category: "Makeup > Face > Blush",
    brand: "Iris&Romeo",
    name: "Ceramide Multi-balm Lip+Cheek Cream Blush Stick",
    type: "Blush",
    image: skuImage("2787935"),
    link: "https://www.sephora.com/product/ceramide-multi-balm-lip-cheek-cream-blush-stick-P509340?skuId=2787935"
  }),
  productData({
    code: "BLUSH_093",
    category: "Makeup > Face > Blush",
    brand: "Lancôme",
    name: "Juicy Tubes Cheeks Jelly Long-wear Blush Tint",
    type: "Blush",
    image: skuImage("2974947"),
    link: "https://www.sephora.com/product/juicy-tubes-cheeks-jelly-long-wear-blush-tint-P522518?skuId=2974947"
  }),
  productData({
    code: "BLUSH_094",
    category: "Makeup > Face > Blush",
    brand: "caliray",
    name: "Socal Superbloom Dewy Lip & Cheek Soft Stain Tint",
    type: "Blush",
    image: skuImage("2698306"),
    link: "https://www.sephora.com/product/socal-superbloom-lip-cheek-blush-hydrating-soft-stain-with-hyaluronic-acid-P507322?skuId=2698306"
  }),
  productData({
    code: "BLUSH_095",
    category: "Makeup > Face > Blush",
    brand: "Westman Atelier",
    name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
    type: "Blush",
    image: skuImage("2869105"),
    link: "https://www.sephora.com/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091?skuId=2869105"
  }),
  productData({
    code: "BLUSH_096",
    category: "Makeup > Face > Blush",
    brand: "Kaja",
    name: "Cheeky Stamp Blendable Blush",
    type: "Blush",
    image: skuImage("2252112"),
    link: "https://www.sephora.com/product/cheeky-stamp-blendable-blush-P436152?skuId=2252112"
  }),
  productData({
    code: "BLUSH_097",
    category: "Makeup > Face > Blush",
    brand: "HUDA BEAUTY",
    name: "Berries and Cream Liquid Blush and Lip Gloss Set",
    type: "Blush",
    image: skuImage("2932325"),
    link: "https://www.sephora.com/product/berries-cream-cheek-lip-duo-P519807?skuId=2932325"
  }),
  productData({
    code: "BLUSH_098",
    category: "Makeup > Face > Blush",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Shimmer Skinstick",
    type: "Blush",
    image: skuImage("2589935"),
    link: "https://www.sephora.com/product/match-stix-shimmer-skinstick-P73124556?skuId=2589935"
  }),
  productData({
    code: "BLUSH_099",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Dandelion Twinkle Shimmer Finish Powder Highlighter",
    type: "Blush",
    image: skuImage("2520484"),
    link: "https://www.sephora.com/product/dandelion-twinkle-P417320?skuId=2520484"
  }),
  productData({
    code: "BLUSH_100",
    category: "Makeup > Face > Blush",
    brand: "ISAMAYA",
    name: "Skin Enhancing Duo- Cream Blush and Highlighter",
    type: "Blush",
    image: skuImage("2855559"),
    link: "https://www.sephora.com/product/skin-enhancing-duo-cream-blush-highlighter-P515454?skuId=2855559"
  }),
  productData({
    code: "BLUSH_101",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Blush Kit Glamzilla Dirty 30",
    type: "Blush",
    image: skuImage("2799849"),
    link: "https://www.sephora.com/product/nudestix-nudestix-glamzilla-2pc-nudies-kit-P512304?skuId=2799849"
  }),
  productData({
    code: "BLUSH_102",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Nudescreen SPF 30 Blush Tint",
    type: "Blush",
    image: skuImage("2756005"),
    link: "https://www.sephora.com/product/nudestix-nudescreen-blush-lip-tint-spf-30-P509877?skuId=2756005"
  }),
  productData({
    code: "BLUSH_103",
    category: "Makeup > Face > Blush",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Blush & Glow Longwear Cream Face Palette",
    type: "Blush",
    image: skuImage("2844660"),
    link: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035?skuId=2844660"
  }),
  productData({
    code: "BLUSH_104",
    category: "Makeup > Face > Blush",
    brand: "Glow Recipe",
    name: "Glow Recipe X Beautyblender Watermelon Glow Bestsellers",
    type: "Blush",
    image: skuImage("2947141"),
    link: "https://www.sephora.com/product/glow-recipe-x-beautyblender-watermelon-glow-bestsellers-P521353?skuId=2947141"
  }),
  productData({
    code: "BLUSH_105",
    category: "Makeup > Face > Blush",
    brand: "Kaja",
    name: "Dewy Bar Blush & Lip Balm",
    type: "Blush",
    image: skuImage("2775013"),
    link: "https://www.sephora.com/product/kaja-dewy-blush-bar-P510918?skuId=2775013"
  }),
  productData({
    code: "BLUSH_106",
    category: "Makeup > Face > Blush",
    brand: "Laura Geller",
    name: "Serum Blush Liquid Cheek Tint",
    type: "Blush",
    image: skuImage("2922706"),
    link: "https://www.sephora.com/product/serum-blush-cheek-tint-P519542?skuId=2922706"
  }),
  productData({
    code: "BLUSH_107",
    category: "Makeup > Face > Blush",
    brand: "NUDESTIX",
    name: "Intense Matte Lip Pencil + Cheek",
    type: "Blush",
    image: skuImage("1783836"),
    link: "https://www.sephora.com/product/intense-matte-lip-cheek-pencil-P405290?skuId=1783836"
  }),
  productData({
    code: "BLUSH_108",
    category: "Makeup > Face > Blush",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo for Buildable, Radiant Finish",
    type: "Blush",
    image: skuImage("2602837"),
    link: "https://www.sephora.com/product/shade-illuminate-P422574?skuId=2602837"
  }),
  productData({
    code: "BLUSH_109",
    category: "Makeup > Face > Blush",
    brand: "Valentino",
    name: "Liquirosso 2 in 1 Soft Matte Liquid Lipstick & Blush",
    type: "Blush",
    image: skuImage("2874097"),
    link: "https://www.sephora.com/product/valentino-liquirosso-P506965?skuId=2874097"
  }),
  productData({
    code: "BLUSH_110",
    category: "Makeup > Face > Blush",
    brand: "Benefit Cosmetics",
    name: "Benetint Bliss Liquid Lip + Cheek Blush Stain Duo Makeup Gift Set",
    type: "Blush",
    image: skuImage("2947588"),
    link: "https://www.sephora.com/product/benetint-bliss-liquid-lip-cheek-blush-stain-duo-makeup-gift-set-P520151?skuId=2947588"
  }),
  productData({
    code: "BLUSH_111",
    category: "Makeup > Face > Blush",
    brand: "NATASHA DENONA",
    name: "My Dream Cheek Trio - Cream Blush, Glow Cream Base and Glow Powder Highlighter",
    type: "Blush",
    image: skuImage("2597672"),
    link: "https://www.sephora.com/product/my-dream-cheek-trio-cream-blush-glow-cream-base-glow-powder-highlighter-P502073?skuId=2597672"
  }),
  productData({
    code: "BLUSH_112",
    category: "Makeup > Face > Blush",
    brand: "SIMIHAZE BEAUTY",
    name: "Solar Tint Cream Blush Duo",
    type: "Blush",
    image: skuImage("2633774"),
    link: "https://www.sephora.com/product/solar-tint-blush-duo-P503342?skuId=2633774"
  }),
  productData({
    code: "BLUSH_113",
    category: "Makeup > Face > Blush",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Color-Adaptive Cheek + Lip Stick",
    type: "Blush",
    image: skuImage("2709368"),
    link: "https://www.sephora.com/product/match-stix-color-adaptive-cheek-lip-stick-P506509?skuId=2709368"
  }),
  productData({
    code: "BLUSH_114",
    category: "Makeup > Face > Blush",
    brand: "TOM FORD",
    name: "Soleil Lip Blush Balm with pH-Adaptive Pink Stain",
    type: "Blush",
    image: skuImage("2573418"),
    link: "https://www.sephora.com/product/tom-ford-soleil-lip-blush-P483702?skuId=2573418"
  }),
  productData({
    code: "BLUSH_115",
    category: "Makeup > Face > Blush",
    brand: "Drunk Elephant",
    name: "O-BloosTM Rosi Blush Drops with Vitamin F",
    type: "Blush",
    image: skuImage("2460475"),
    link: "https://www.sephora.com/product/drunk-elephant-o-bloos-trade-rosi-drops-P473304?skuId=2460475"
  }),
  productData({
    code: "BLUSH_116",
    category: "Makeup > Face > Blush",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Blush",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "BLUSH_117",
    category: "Makeup > Face > Blush",
    brand: "NARS",
    name: "Mini Afterglow Liquid Blush & Lip Shine Duo",
    type: "Blush",
    image: skuImage("2773380"),
    link: "https://www.sephora.com/product/nars-mini-afterglow-blush-lip-shine-duo-P512183?skuId=2773380"
  }),
  productData({
    code: "BLUSH_118",
    category: "Makeup > Face > Blush",
    brand: "NATASHA DENONA",
    name: "Hy-per Natural Face Palette",
    type: "Blush",
    image: skuImage("2743383"),
    link: "https://www.sephora.com/product/natasha-denona-hyper-natural-face-palette-P510087?skuId=2743383"
  }),
  productData({
    code: "BLUSH_119",
    category: "Makeup > Face > Blush",
    brand: "Kaja",
    name: "Jelly Charm Glazed Lip Stain & Blush With Keychain",
    type: "Blush",
    image: skuImage("2646545"),
    link: "https://www.sephora.com/product/kaja-jelly-charm-lip-blush-glazed-stain-with-keychain-P504365?skuId=2646545"
  }),
  productData({
    code: "BLUSH_120",
    category: "Makeup > Face > Blush",
    brand: "Fashion Fair",
    name: "Cream and Powder Blush Duo",
    type: "Blush",
    image: skuImage("2591733"),
    link: "https://www.sephora.com/product/fashion-fair-lush-blush-duo-P503002?skuId=2591733"
  }),
  productData({
    code: "BLUSH_121",
    category: "Makeup > Face > Blush",
    brand: "Westman Atelier",
    name: "Clean Baby Blender Blush Brush",
    type: "Blush",
    image: skuImage("2434512"),
    link: "https://www.sephora.com/product/westman-atelier-baby-blender-brush-P468440?skuId=2434512"
  }),
  productData({
    code: "BLUSH_122",
    category: "Makeup > Face > Blush",
    brand: "Marc Jacobs Beauty",
    name: "Joystick Buildable Cream Blush Stick",
    type: "Blush",
    image: skuImage("2994564"),
    link: "https://www.sephora.com/product/joystick-buildable-cream-blush-stick-P524934?skuId=2994564"
  }),
  productData({
    code: "BLUSH_123",
    category: "Makeup > Face > Blush",
    brand: "PATRICK TA",
    name: "Liquid Transition Brightening Blush",
    type: "Blush",
    image: skuImage("2976231"),
    link: "https://www.sephora.com/product/liquid-transition-brightening-blush-P522523?skuId=2976231"
  }),
  productData({
    code: "BLUSH_124",
    category: "Makeup > Face > Blush",
    brand: "PATRICK TA",
    name: "Major Headlines Transition Blurring Under Eye Blush Duo",
    type: "Blush",
    image: skuImage("2976264"),
    link: "https://www.sephora.com/product/major-headlines-transition-blurring-under-eye-blush-duo-P522484?skuId=2976264"
  }),

  // ==================================================
  // Makeup > Face > Bronzer
  // Products: 71
  // ==================================================
  productData({
    code: "BRONZER_001",
    category: "Makeup > Face > Bronzer",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Contour",
    type: "Bronzer",
    image: skuImage("2828705"),
    link: "https://www.sephora.com/product/soft-pinch-liquid-contour-P514741?skuId=2828705"
  }),
  productData({
    code: "BRONZER_002",
    category: "Makeup > Face > Bronzer",
    brand: "Hourglass",
    name: "Ambient® Lighting Bronzer",
    type: "Bronzer",
    image: skuImage("1688860"),
    link: "https://www.sephora.com/product/ambient-bronzer-P395697?skuId=1688860"
  }),
  productData({
    code: "BRONZER_003",
    category: "Makeup > Face > Bronzer",
    brand: "MILK MAKEUP",
    name: "Matte Cream Bronzer Stick",
    type: "Bronzer",
    image: skuImage("2639722"),
    link: "https://www.sephora.com/product/matte-bronzer-P404797?skuId=2639722"
  }),
  productData({
    code: "BRONZER_004",
    category: "Makeup > Face > Bronzer",
    brand: "MAKEUP BY MARIO",
    name: "Softsculpt® Multi-Use Bronzing & Shaping Serum with Hyaluronic Acid",
    type: "Bronzer",
    image: skuImage("2775617"),
    link: "https://www.sephora.com/product/makeup-by-mario-softsculpt-bronzing-shaping-serum-P511568?skuId=2775617"
  }),
  productData({
    code: "BRONZER_005",
    category: "Makeup > Face > Bronzer",
    brand: "Armani Beauty",
    name: "Luminous Silk Creamy Bronzing Powder",
    type: "Bronzer",
    image: skuImage("2751667"),
    link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-creamy-bronzing-powder-P511656?skuId=2751667"
  }),
  productData({
    code: "BRONZER_006",
    category: "Makeup > Face > Bronzer",
    brand: "DIOR",
    name: "Forever Nude Jumbo Bronzer",
    type: "Bronzer",
    image: skuImage("2836369"),
    link: "https://www.sephora.com/product/dior-forever-nude-jumbo-bronzer-P515392?skuId=2836369"
  }),
  productData({
    code: "BRONZER_007",
    category: "Makeup > Face > Bronzer",
    brand: "Too Faced",
    name: "Sun Bunny Luminous Blushing Bronzer",
    type: "Bronzer",
    image: skuImage("2966083"),
    link: "https://www.sephora.com/product/sun-bunny-luminous-blushing-bronzer-P522127?skuId=2966083"
  }),
  productData({
    code: "BRONZER_008",
    category: "Makeup > Face > Bronzer",
    brand: "Anastasia Beverly Hills",
    name: "Smooth Blur Matte Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2873545"),
    link: "https://www.sephora.com/product/smooth-blur-powder-bronzer-P517091?skuId=2873545"
  }),
  productData({
    code: "BRONZER_009",
    category: "Makeup > Face > Bronzer",
    brand: "Laura Geller",
    name: "Bronze and Brighten Glow Baked Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2922037"),
    link: "https://www.sephora.com/product/baked-bronze-n-brighten-multipurpose-bronzer-P519545?skuId=2922037"
  }),
  productData({
    code: "BRONZER_010",
    category: "Makeup > Face > Bronzer",
    brand: "Westman Atelier",
    name: "Sun Tone Hydrating Matte Bronzing Drops",
    type: "Bronzer",
    image: skuImage("2845675"),
    link: "https://www.sephora.com/product/sun-tone-bronzing-drops-P514681?skuId=2845675"
  }),
  productData({
    code: "BRONZER_011",
    category: "Makeup > Face > Bronzer",
    brand: "Sarah Creal",
    name: "Just Like Paradise 12H Peptide Sculpting Cream Bronzer",
    type: "Bronzer",
    image: skuImage("2852895"),
    link: "https://www.sephora.com/product/just-like-paradise-bronzer-P515821?skuId=2852895"
  }),
  productData({
    code: "BRONZER_012",
    category: "Makeup > Face > Bronzer",
    brand: "HUNG VANNGO BEAUTY",
    name: "Soft Focus Blurring Matte Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2903268"),
    link: "https://www.sephora.com/product/soft-focus-bluring-matte-powder-bronzer-P518975?skuId=2903268"
  }),
  productData({
    code: "BRONZER_013",
    category: "Makeup > Face > Bronzer",
    brand: "tarte",
    name: "macaron sculpt & bronzeTM duo",
    type: "Bronzer",
    image: skuImage("2977726"),
    link: "https://www.sephora.com/product/macaron-sculpt-bronze-P522236?skuId=2977726"
  }),
  productData({
    code: "BRONZER_014",
    category: "Makeup > Face > Bronzer",
    brand: "ILIA",
    name: "Sunshift Weightless Silky Cream Bronzer with 12-hour Wear",
    type: "Bronzer",
    image: skuImage("2794915"),
    link: "https://www.sephora.com/product/ilia-sunshift-weightless-silky-cream-bronzer-P511709?skuId=2794915"
  }),
  productData({
    code: "BRONZER_015",
    category: "Makeup > Face > Bronzer",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Matte Contour Skinstick",
    type: "Bronzer",
    image: skuImage("2589927"),
    link: "https://www.sephora.com/product/match-stix-matte-skinstick-P18975403?skuId=2589927"
  }),
  productData({
    code: "BRONZER_016",
    category: "Makeup > Face > Bronzer",
    brand: "GUERLAIN",
    name: "Terracotta Light Healthy Glow Bronzer",
    type: "Bronzer",
    image: skuImage("2510287"),
    link: "https://www.sephora.com/product/terracotta-light-healthy-glow-vitamin-radiance-powder-P430124?skuId=2510287"
  }),
  productData({
    code: "BRONZER_017",
    category: "Makeup > Face > Bronzer",
    brand: "Fara Homidi",
    name: "Essential Bronzer Refillable Compact",
    type: "Bronzer",
    image: skuImage("2867166"),
    link: "https://www.sephora.com/product/essential-bronzer-refillable-compact-P518071?skuId=2867166"
  }),
  productData({
    code: "BRONZER_018",
    category: "Makeup > Face > Bronzer",
    brand: "Fenty Beauty by Rihanna",
    name: "Sun Stalk'r Instant Warmth Bronzer",
    type: "Bronzer",
    image: skuImage("2436038"),
    link: "https://www.sephora.com/product/sun-stalk-r-instant-warmth-bronzer-P55978864?skuId=2436038"
  }),
  productData({
    code: "BRONZER_019",
    category: "Makeup > Face > Bronzer",
    brand: "Givenchy",
    name: "Prisme Libre 4-Color Blurring & Sculpting Bronzer Powder",
    type: "Bronzer",
    image: skuImage("2860328"),
    link: "https://www.sephora.com/product/givenchy-givenchy-prisme-libre-bronzing-powder-P517008?skuId=2860328"
  }),
  productData({
    code: "BRONZER_020",
    category: "Makeup > Face > Bronzer",
    brand: "REFY",
    name: "Cream Bronzer",
    type: "Bronzer",
    image: skuImage("2879690"),
    link: "https://www.sephora.com/product/refy-beauty-cream-bronzer-P475157?skuId=2879690"
  }),
  productData({
    code: "BRONZER_021",
    category: "Makeup > Face > Bronzer",
    brand: "DIOR",
    name: "Forever Skin Cream Contour Sculpting Face Stick",
    type: "Bronzer",
    image: skuImage("2789089"),
    link: "https://www.sephora.com/product/dior-forever-24h-wear-seamless-contour-stick-P512863?skuId=2789089"
  }),
  productData({
    code: "BRONZER_022",
    category: "Makeup > Face > Bronzer",
    brand: "MAC Cosmetics",
    name: "Multisculpt Matte Liquid Eyeshadow + All-over Colour",
    type: "Bronzer",
    image: skuImage("2944106"),
    link: "https://www.sephora.com/product/mac-multisculpt-matte-liquid-eyeshadow-and-all-over-colour-P520529?skuId=2944106"
  }),
  productData({
    code: "BRONZER_023",
    category: "Makeup > Face > Bronzer",
    brand: "ciele",
    name: "bronze & PROTECT SPF 50+ bronzing concentrate",
    type: "Bronzer",
    image: skuImage("2768679"),
    link: "https://www.sephora.com/product/ciele-bronze-and-protect-spf-50-bronzing-concentrate-P512270?skuId=2768679"
  }),
  productData({
    code: "BRONZER_024",
    category: "Makeup > Face > Bronzer",
    brand: "Glow Recipe",
    name: "Watermelon Glow Niacinamide Hue Drops Serum",
    type: "Bronzer",
    image: skuImage("2742195"),
    link: "https://www.sephora.com/product/glow-recipe-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P509844?skuId=2742195"
  }),
  productData({
    code: "BRONZER_025",
    category: "Makeup > Face > Bronzer",
    brand: "MAKE UP FOR EVER",
    name: "Artist Longwear Skin-fusing Matte Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2738284"),
    link: "https://www.sephora.com/product/make-up-for-ever-artist-face-powder-bronzer-P510097?skuId=2738284"
  }),
  productData({
    code: "BRONZER_026",
    category: "Makeup > Face > Bronzer",
    brand: "NARS",
    name: "Mini Multiple Blush & Sculpt Stick Duo",
    type: "Bronzer",
    image: skuImage("2974988"),
    link: "https://www.sephora.com/product/mini-multiple-sculpt-stick-set-P522224?skuId=2974988"
  }),
  productData({
    code: "BRONZER_027",
    category: "Makeup > Face > Bronzer",
    brand: "Anastasia Beverly Hills",
    name: "Matte Contour and Sculpt Cream Bronzer",
    type: "Bronzer",
    image: skuImage("2448736"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-cream-bronzer-P474812?skuId=2448736"
  }),
  productData({
    code: "BRONZER_028",
    category: "Makeup > Face > Bronzer",
    brand: "caliray",
    name: "Sundrip Luminous Peptide Serum Bronzer",
    type: "Bronzer",
    image: skuImage("2767275"),
    link: "https://www.sephora.com/product/caliray-sundrip-luminous-liquid-bronzer-with-hyaluronic-acid-peptides-P510877?skuId=2767275"
  }),
  productData({
    code: "BRONZER_029",
    category: "Makeup > Face > Bronzer",
    brand: "DIOR",
    name: "Forever Nude Bronze Glow Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2965002"),
    link: "https://www.sephora.com/product/forever-nude-bronze-glow-powder-bronzer-P522088?skuId=2965002"
  }),
  productData({
    code: "BRONZER_030",
    category: "Makeup > Face > Bronzer",
    brand: "Westman Atelier",
    name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
    type: "Bronzer",
    image: skuImage("2869105"),
    link: "https://www.sephora.com/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091?skuId=2869105"
  }),
  productData({
    code: "BRONZER_031",
    category: "Makeup > Face > Bronzer",
    brand: "MAKE UP FOR EVER",
    name: "Artist Color Crayon Waterproof Multi-Use Stick",
    type: "Bronzer",
    image: skuImage("2868768"),
    link: "https://www.sephora.com/product/artist-color-crayon-P516173?skuId=2868768"
  }),
  productData({
    code: "BRONZER_032",
    category: "Makeup > Face > Bronzer",
    brand: "Benefit Cosmetics",
    name: "Hoola Wave Cream Bronzer Balm",
    type: "Bronzer",
    image: skuImage("2867885"),
    link: "https://www.sephora.com/product/hoola-wave-bronzing-balm-P515967?skuId=2867885"
  }),
  productData({
    code: "BRONZER_033",
    category: "Makeup > Face > Bronzer",
    brand: "Bobbi Brown",
    name: "Matte Bronzing Powder",
    type: "Bronzer",
    image: skuImage("2701795"),
    link: "https://www.sephora.com/product/bronzing-powder-P270548?skuId=2701795"
  }),
  productData({
    code: "BRONZER_034",
    category: "Makeup > Face > Bronzer",
    brand: "Benefit Cosmetics",
    name: "Jumbo Hoola Bronzer",
    type: "Bronzer",
    image: skuImage("2773109"),
    link: "https://www.sephora.com/product/benefit-cosmetics-jumbo-hoola-bronzer-P511136?skuId=2773109"
  }),
  productData({
    code: "BRONZER_035",
    category: "Makeup > Face > Bronzer",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Face Bronzer, Blush & Highlighter Palette",
    type: "Bronzer",
    image: skuImage("2820041"),
    link: "https://www.sephora.com/product/colorful-face-palettes-P514459?skuId=2820041"
  }),
  productData({
    code: "BRONZER_036",
    category: "Makeup > Face > Bronzer",
    brand: "Glossier",
    name: "Cloud Paint Gel Cream Bronzer",
    type: "Bronzer",
    image: skuImage("2737708"),
    link: "https://www.sephora.com/product/glossier-cloud-paint-gel-cream-bronzer-P509855?skuId=2737708"
  }),
  productData({
    code: "BRONZER_037",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Nudies Cream Bronzer Stick",
    type: "Bronzer",
    image: skuImage("2647618"),
    link: "https://www.sephora.com/product/nudies-matte-cream-bronzer-P500480?skuId=2647618"
  }),
  productData({
    code: "BRONZER_038",
    category: "Makeup > Face > Bronzer",
    brand: "TOM FORD",
    name: "Soleil Matte Bronzing Powder with 8HR Wear",
    type: "Bronzer",
    image: skuImage("2966570"),
    link: "https://www.sephora.com/product/soleil-matte-bronzing-powder-with-8-hour-wear-P522140?skuId=2966570"
  }),
  productData({
    code: "BRONZER_039",
    category: "Makeup > Face > Bronzer",
    brand: "ciele",
    name: "sculpt & PROTECT SPF 30+ bronzing cream contour stick",
    type: "Bronzer",
    image: skuImage("2708386"),
    link: "https://www.sephora.com/product/sculpt-protect-spf-30-bronzing-contour-stick-P507783?skuId=2708386"
  }),
  productData({
    code: "BRONZER_040",
    category: "Makeup > Face > Bronzer",
    brand: "MAC Cosmetics",
    name: "Strobe Beam Bronzelighter Liquid Bronzer",
    type: "Bronzer",
    image: skuImage("2958122"),
    link: "https://www.sephora.com/product/mac-strobe-beam-bronzelighter-liquid-bronzer-P521490?skuId=2958122"
  }),
  productData({
    code: "BRONZER_041",
    category: "Makeup > Face > Bronzer",
    brand: "Laura Mercier",
    name: "Bronze Color Infusion Talc-Free Matte & Luminous Duo",
    type: "Bronzer",
    image: skuImage("2855062"),
    link: "https://www.sephora.com/product/bronze-color-infusion-talc-free-matte-luminous-duo-P515893?skuId=2855062"
  }),
  productData({
    code: "BRONZER_042",
    category: "Makeup > Face > Bronzer",
    brand: "Fenty Beauty by Rihanna",
    name: "Cheeks Out Freestyle Cream Bronzer",
    type: "Bronzer",
    image: skuImage("2352888"),
    link: "https://www.sephora.com/product/fenty-beauty-rihanna-cheeks-out-freestyle-cream-bronzer-P31870457?skuId=2352888"
  }),
  productData({
    code: "BRONZER_043",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Nudies Cream Blush Stick",
    type: "Bronzer",
    image: skuImage("2834398"),
    link: "https://www.sephora.com/product/nudies-all-over-face-color-P419107?skuId=2834398"
  }),
  productData({
    code: "BRONZER_044",
    category: "Makeup > Face > Bronzer",
    brand: "NARS",
    name: "Laguna Bronzing Cream",
    type: "Bronzer",
    image: skuImage("2568798"),
    link: "https://www.sephora.com/product/nars-laguna-bronzing-cream-P471270?skuId=2568798"
  }),
  productData({
    code: "BRONZER_045",
    category: "Makeup > Face > Bronzer",
    brand: "BASMA",
    name: "The Soft Matte Talc-Free Blurring Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2897767"),
    link: "https://www.sephora.com/product/the-soft-matte-talc-free-blurring-powder-bronzer-P516987?skuId=2897767"
  }),
  productData({
    code: "BRONZER_046",
    category: "Makeup > Face > Bronzer",
    brand: "Isle of Paradise",
    name: "Sunny Serum Instant Face Bronzer",
    type: "Bronzer",
    image: skuImage("2871895"),
    link: "https://www.sephora.com/product/isle-paradise-sunny-serum-instant-face-bronzer-P510731?skuId=2871895"
  }),
  productData({
    code: "BRONZER_047",
    category: "Makeup > Face > Bronzer",
    brand: "Westman Atelier",
    name: "Beauty Butter Matte Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2434082"),
    link: "https://www.sephora.com/product/westman-atelier-beauty-butter-powder-bronzer-P468434?skuId=2434082"
  }),
  productData({
    code: "BRONZER_048",
    category: "Makeup > Face > Bronzer",
    brand: "Danessa Myricks Beauty",
    name: "Balm Contour",
    type: "Bronzer",
    image: skuImage("2796084"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-balm-contour-P473701?skuId=2796084"
  }),
  productData({
    code: "BRONZER_049",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Sunkissed Skin Trio",
    type: "Bronzer",
    image: skuImage("2851491"),
    link: "https://www.sephora.com/product/nudestix-sunkissed-skin-trio-P515089?skuId=2851491"
  }),
  productData({
    code: "BRONZER_050",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Tinted Blur Contour Stick",
    type: "Bronzer",
    image: skuImage("2601110"),
    link: "https://www.sephora.com/product/tinted-blur-sculpt-stick-P501155?skuId=2601110"
  }),
  productData({
    code: "BRONZER_051",
    category: "Makeup > Face > Bronzer",
    brand: "Supergoop!",
    name: "Glowscreen Soft-Radiance Drops Mineral SPF 40",
    type: "Bronzer",
    image: skuImage("2845550"),
    link: "https://www.sephora.com/product/glowscreen-soft-radiance-drops-mineral-spf-40-P515365?skuId=2845550"
  }),
  productData({
    code: "BRONZER_052",
    category: "Makeup > Face > Bronzer",
    brand: "Glow Recipe",
    name: "Mini Watermelon Glow Niacinamide Hue Drops Sun Glow Serum",
    type: "Bronzer",
    image: skuImage("2827947"),
    link: "https://www.sephora.com/product/mini-watermelon-glow-niacinamide-hue-drops-sun-glow-serum-P515372?skuId=2827947"
  }),
  productData({
    code: "BRONZER_053",
    category: "Makeup > Face > Bronzer",
    brand: "Mango People",
    name: "Sun-Kissed Cream Bronzer Stick",
    type: "Bronzer",
    image: skuImage("2717882"),
    link: "https://www.sephora.com/product/sun-kissed-cream-bronzer-stick-P507345?skuId=2717882"
  }),
  productData({
    code: "BRONZER_054",
    category: "Makeup > Face > Bronzer",
    brand: "INNBEAUTY PROJECT",
    name: "Bronze Face Glaze Gel Cream with Squalane, Ceramides & Hyaluronic Acid",
    type: "Bronzer",
    image: skuImage("2714483"),
    link: "https://www.sephora.com/product/bronze-face-glaze-gel-cream-with-squalane-ceramides-hyaluronic-acid-P507166?skuId=2714483"
  }),
  productData({
    code: "BRONZER_055",
    category: "Makeup > Face > Bronzer",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Bronzer",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "BRONZER_056",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Mini NUDIES Roses 'N Honey Nudes 3pc Kit",
    type: "Bronzer",
    image: skuImage("2467561"),
    link: "https://www.sephora.com/product/nudestix-mini-nudies-roses-n-honey-nudes-3pc-kit-P478523?skuId=2467561"
  }),
  productData({
    code: "BRONZER_057",
    category: "Makeup > Face > Bronzer",
    brand: "Danessa Myricks Beauty",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Bronzer",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "BRONZER_058",
    category: "Makeup > Face > Bronzer",
    brand: "NATASHA DENONA",
    name: "Mini Bronze & Glow Cheek Duo",
    type: "Bronzer",
    image: skuImage("2204568"),
    link: "https://www.sephora.com/product/mini-bronze-glow-P444024?skuId=2204568"
  }),
  productData({
    code: "BRONZER_059",
    category: "Makeup > Face > Bronzer",
    brand: "NUDESTIX",
    name: "Nudies Glow Cream Highlighter Stick",
    type: "Bronzer",
    image: skuImage("2834406"),
    link: "https://www.sephora.com/product/nudies-all-over-face-color-bronze-glow-P417912?skuId=2834406"
  }),
  productData({
    code: "BRONZER_060",
    category: "Makeup > Face > Bronzer",
    brand: "Fenty Beauty by Rihanna",
    name: "Match Stix Shimmer Skinstick",
    type: "Bronzer",
    image: skuImage("2589935"),
    link: "https://www.sephora.com/product/match-stix-shimmer-skinstick-P73124556?skuId=2589935"
  }),
  productData({
    code: "BRONZER_061",
    category: "Makeup > Face > Bronzer",
    brand: "NATASHA DENONA",
    name: "Hy-per Natural Face Palette",
    type: "Bronzer",
    image: skuImage("2743383"),
    link: "https://www.sephora.com/product/natasha-denona-hyper-natural-face-palette-P510087?skuId=2743383"
  }),
  productData({
    code: "BRONZER_062",
    category: "Makeup > Face > Bronzer",
    brand: "MILK MAKEUP",
    name: "Bionic Sunkissed Liquid Bronzer with Hyaluronic Acid",
    type: "Bronzer",
    image: skuImage("2639748"),
    link: "https://www.sephora.com/product/milk-makeup-bionic-liquid-bronzer-P481128?skuId=2639748"
  }),
  productData({
    code: "BRONZER_063",
    category: "Makeup > Face > Bronzer",
    brand: "Iconic London",
    name: "Sheer Bronze Liquid Bronzer",
    type: "Bronzer",
    image: skuImage("2438273"),
    link: "https://www.sephora.com/product/iconic-london-sheer-bronze-liquid-bronzer-P471035?skuId=2438273"
  }),
  productData({
    code: "BRONZER_064",
    category: "Makeup > Face > Bronzer",
    brand: "NATASHA DENONA",
    name: "HY-GEN Bronze - Energizing & Hydrating Primer Serum",
    type: "Bronzer",
    image: skuImage("2868420"),
    link: "https://www.sephora.com/product/natasha-denona-hy-gen-bronze-energizing-hydrating-primer-serum-P516777?skuId=2868420"
  }),
  productData({
    code: "BRONZER_065",
    category: "Makeup > Face > Bronzer",
    brand: "Freck Beauty",
    name: "FACE HACK Precision Sculpting Cream Contour Bronzer Stick",
    type: "Bronzer",
    image: skuImage("2658565"),
    link: "https://www.sephora.com/product/freck-beauty-face-hack-precision-sculpting-bronzer-P505422?skuId=2658565"
  }),
  productData({
    code: "BRONZER_066",
    category: "Makeup > Face > Bronzer",
    brand: "Urban Decay",
    name: "Face Bond Luminizer Waterproof Glow Drops for Face + Body",
    type: "Bronzer",
    image: skuImage("2845469"),
    link: "https://www.sephora.com/product/face-bond-luminizer-waterproof-glow-drops-for-face-body-P514682?skuId=2845469"
  }),
  productData({
    code: "BRONZER_067",
    category: "Makeup > Face > Bronzer",
    brand: "NARS",
    name: "Monoi Body Glow I",
    type: "Bronzer",
    image: skuImage("1817311"),
    link: "https://www.sephora.com/product/body-glow-P2856?skuId=1817311"
  }),
  productData({
    code: "BRONZER_068",
    category: "Makeup > Face > Bronzer",
    brand: "tarte",
    name: "Key Largo glow serum bronzing drops for face & body",
    type: "Bronzer",
    image: skuImage("2741262"),
    link: "https://www.sephora.com/product/tarte-key-largo-glow-bronzing-drops-P509695?skuId=2741262"
  }),
  productData({
    code: "BRONZER_069",
    category: "Makeup > Face > Bronzer",
    brand: "Iconic London",
    name: "Instant Sunshine Bronzing Drops",
    type: "Bronzer",
    image: skuImage("2759298"),
    link: "https://www.sephora.com/product/iconic-london-instant-sunshine-bronzing-drops-P510787?skuId=2759298"
  }),
  productData({
    code: "BRONZER_070",
    category: "Makeup > Face > Bronzer",
    brand: "Benefit Cosmetics",
    name: "Mini Benefit Dream Team Makeup Gift Set",
    type: "Bronzer",
    image: skuImage("2898591"),
    link: "https://www.sephora.com/product/mini-benefit-dream-team-makeup-gift-set-P517118?skuId=2898591"
  }),
  productData({
    code: "BRONZER_071",
    category: "Makeup > Face > Bronzer",
    brand: "Marc Jacobs Beauty",
    name: "Legally Bronze Talc-Free Blurring Powder Bronzer",
    type: "Bronzer",
    image: skuImage("2994820"),
    link: "https://www.sephora.com/product/legally-bronze-talc-free-blurring-powder-bronzer-P524927?skuId=2994820"
  }),

  // ==================================================
  // Makeup > Face > Cheek Palettes
  // Products: 24
  // ==================================================
  productData({
    code: "CHEEK_PALETTES_001",
    category: "Makeup > Face > Cheek Palettes",
    brand: "HUDA BEAUTY",
    name: "Blush Filter Blurring Blushlighters Palette",
    type: "Cheek Palettes",
    image: skuImage("2954642"),
    link: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601?skuId=2954642"
  }),
  productData({
    code: "CHEEK_PALETTES_002",
    category: "Makeup > Face > Cheek Palettes",
    brand: "SEPHORA COLLECTION",
    name: "Colorful Face Bronzer, Blush & Highlighter Palette",
    type: "Cheek Palettes",
    image: skuImage("2820041"),
    link: "https://www.sephora.com/product/colorful-face-palettes-P514459?skuId=2820041"
  }),
  productData({
    code: "CHEEK_PALETTES_003",
    category: "Makeup > Face > Cheek Palettes",
    brand: "m.ph by Mary Phillips",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Cheek Palettes",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "CHEEK_PALETTES_004",
    category: "Makeup > Face > Cheek Palettes",
    brand: "PATRICK TA",
    name: "Major Sculpt Crème Contour & Powder Bronzer Duo",
    type: "Cheek Palettes",
    image: skuImage("2653921"),
    link: "https://www.sephora.com/product/patrick-ta-major-sculpt-creme-contour-powder-bronzer-duo-P471059?skuId=2653921"
  }),
  productData({
    code: "CHEEK_PALETTES_005",
    category: "Makeup > Face > Cheek Palettes",
    brand: "SEPHORA COLLECTION",
    name: "Blush Blush Blush. Cream & Powder Palette",
    type: "Cheek Palettes",
    image: skuImage("2870897"),
    link: "https://www.sephora.com/product/blush-blush-blush-palette-P516069?skuId=2870897"
  }),
  productData({
    code: "CHEEK_PALETTES_006",
    category: "Makeup > Face > Cheek Palettes",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Face Essentials Long-Lasting Full Face Cream Palette",
    type: "Cheek Palettes",
    image: skuImage("2765352"),
    link: "https://www.sephora.com/product/hd-skin-face-essentials-full-face-cream-palette-P510371?skuId=2765352"
  }),
  productData({
    code: "CHEEK_PALETTES_007",
    category: "Makeup > Face > Cheek Palettes",
    brand: "ONE/SIZE by Patrick Starrr",
    name: "Cheek Clapper 3D Blush Trio Palette",
    type: "Cheek Palettes",
    image: skuImage("2656296"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-cheek-clapper-3d-blush-trio-palette-P482709?skuId=2656296"
  }),
  productData({
    code: "CHEEK_PALETTES_008",
    category: "Makeup > Face > Cheek Palettes",
    brand: "NATASHA DENONA",
    name: "My Mini Dream Glow Blush",
    type: "Cheek Palettes",
    image: skuImage("2743375"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533?skuId=2743375"
  }),
  productData({
    code: "CHEEK_PALETTES_009",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Laura Geller",
    name: "Baked Icons Complete All-in-one Full Face Palette",
    type: "Cheek Palettes",
    image: skuImage("2922300"),
    link: "https://www.sephora.com/product/baked-icons-complete-full-face-palette-P519538?skuId=2922300"
  }),
  productData({
    code: "CHEEK_PALETTES_010",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Charlotte Tilbury",
    name: "Pillow Talk Beauty Soulmates Airbrush Flawless Finish Brightening and Blush Powder Palette",
    type: "Cheek Palettes",
    image: skuImage("2952745"),
    link: "https://www.sephora.com/product/pillow-talk-beauty-soulmates-brighten-blush-palette-P516013?skuId=2952745"
  }),
  productData({
    code: "CHEEK_PALETTES_011",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Westman Atelier",
    name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
    type: "Cheek Palettes",
    image: skuImage("2869105"),
    link: "https://www.sephora.com/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091?skuId=2869105"
  }),
  productData({
    code: "CHEEK_PALETTES_012",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Laura Geller",
    name: "The Best of the Best Essential Full Face Baked Powder Palette",
    type: "Cheek Palettes",
    image: skuImage("2922367"),
    link: "https://www.sephora.com/product/the-best-the-best-P519556?skuId=2922367"
  }),
  productData({
    code: "CHEEK_PALETTES_013",
    category: "Makeup > Face > Cheek Palettes",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Blush & Glow Longwear Cream Face Palette",
    type: "Cheek Palettes",
    image: skuImage("2844660"),
    link: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035?skuId=2844660"
  }),
  productData({
    code: "CHEEK_PALETTES_014",
    category: "Makeup > Face > Cheek Palettes",
    brand: "NATASHA DENONA",
    name: "Love Glow Cheek Palette",
    type: "Cheek Palettes",
    image: skuImage("2304814"),
    link: "https://www.sephora.com/product/natasha-denona-love-glow-cheek-palette-P455197?skuId=2304814"
  }),
  productData({
    code: "CHEEK_PALETTES_015",
    category: "Makeup > Face > Cheek Palettes",
    brand: "MAKE UP FOR EVER",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Cheek Palettes",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "CHEEK_PALETTES_016",
    category: "Makeup > Face > Cheek Palettes",
    brand: "NATASHA DENONA",
    name: "My Dream Cheek Trio - Cream Blush, Glow Cream Base and Glow Powder Highlighter",
    type: "Cheek Palettes",
    image: skuImage("2597672"),
    link: "https://www.sephora.com/product/my-dream-cheek-trio-cream-blush-glow-cream-base-glow-powder-highlighter-P502073?skuId=2597672"
  }),
  productData({
    code: "CHEEK_PALETTES_017",
    category: "Makeup > Face > Cheek Palettes",
    brand: "TOM FORD",
    name: "Shade And Illuminate Cream Contour Duo for Buildable, Radiant Finish",
    type: "Cheek Palettes",
    image: skuImage("2602837"),
    link: "https://www.sephora.com/product/shade-illuminate-P422574?skuId=2602837"
  }),
  productData({
    code: "CHEEK_PALETTES_018",
    category: "Makeup > Face > Cheek Palettes",
    brand: "NATASHA DENONA",
    name: "Hy-per Natural Face Palette",
    type: "Cheek Palettes",
    image: skuImage("2743383"),
    link: "https://www.sephora.com/product/natasha-denona-hyper-natural-face-palette-P510087?skuId=2743383"
  }),
  productData({
    code: "CHEEK_PALETTES_019",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Laura Mercier",
    name: "Bronze Color Infusion Talc-Free Matte & Luminous Duo",
    type: "Cheek Palettes",
    image: skuImage("2855062"),
    link: "https://www.sephora.com/product/bronze-color-infusion-talc-free-matte-luminous-duo-P515893?skuId=2855062"
  }),
  productData({
    code: "CHEEK_PALETTES_020",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Westman Atelier",
    name: "Baby Cheeks Powder Blush Duo",
    type: "Cheek Palettes",
    image: skuImage("2869147"),
    link: "https://www.sephora.com/product/westman-atelier-baby-cheeks-powder-blush-duo-P516090?skuId=2869147"
  }),
  productData({
    code: "CHEEK_PALETTES_021",
    category: "Makeup > Face > Cheek Palettes",
    brand: "SIMIHAZE BEAUTY",
    name: "Solar Tint Cream Blush Duo",
    type: "Cheek Palettes",
    image: skuImage("2633774"),
    link: "https://www.sephora.com/product/solar-tint-blush-duo-P503342?skuId=2633774"
  }),
  productData({
    code: "CHEEK_PALETTES_022",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Fashion Fair",
    name: "Cream and Powder Blush Duo",
    type: "Cheek Palettes",
    image: skuImage("2591733"),
    link: "https://www.sephora.com/product/fashion-fair-lush-blush-duo-P503002?skuId=2591733"
  }),
  productData({
    code: "CHEEK_PALETTES_023",
    category: "Makeup > Face > Cheek Palettes",
    brand: "NATASHA DENONA",
    name: "Love Face Eyeshadow & Cheek Essential Palette",
    type: "Cheek Palettes",
    image: skuImage("2647170"),
    link: "https://www.sephora.com/product/natasha-denona-love-face-palette-P505250?skuId=2647170"
  }),
  productData({
    code: "CHEEK_PALETTES_024",
    category: "Makeup > Face > Cheek Palettes",
    brand: "Fashion Fair",
    name: "Luxe Highlighter Duo",
    type: "Cheek Palettes",
    image: skuImage("2591758"),
    link: "https://www.sephora.com/product/fashion-fair-luxe-highlighter-duos-P503003?skuId=2591758"
  }),

  // ==================================================
  // Makeup > Makeup Palettes
  // Products: 61
  // ==================================================
  productData({
    code: "MAKEUP_PALETTES_001",
    category: "Makeup > Makeup Palettes",
    brand: "HUDA BEAUTY\",\n    sku: \"2954642\",\n    productId: \"P518601",
    name: "Blush Filter Blurring Blushlighters Palette",
    type: "Makeup Palettes",
    image: skuImage("2954642"),
    link: "https://www.sephora.com/product/huda-beauty-blush-filter-blurring-blushlighter-palette-P518601?skuId=2954642"
  }),
  productData({
    code: "MAKEUP_PALETTES_002",
    category: "Makeup > Makeup Palettes",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2819944\",\n    productId: \"P515018",
    name: "Mega Mix Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2819944"),
    link: "https://www.sephora.com/product/mega-mix-eyeshadow-palette-P515018?skuId=2819944"
  }),
  productData({
    code: "MAKEUP_PALETTES_003",
    category: "Makeup > Makeup Palettes",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2765352\",\n    productId: \"P510371",
    name: "HD Skin Face Essentials Long-Lasting Full Face Cream Palette",
    type: "Makeup Palettes",
    image: skuImage("2765352"),
    link: "https://www.sephora.com/product/hd-skin-face-essentials-full-face-cream-palette-P510371?skuId=2765352"
  }),
  productData({
    code: "MAKEUP_PALETTES_004",
    category: "Makeup > Makeup Palettes",
    brand: "Anastasia Beverly Hills\",\n    sku: \"2036481\",\n    productId: \"P58930227",
    name: "Soft Glam Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2036481"),
    link: "https://www.sephora.com/product/soft-glam-eyeshadow-palette-P58930227?skuId=2036481"
  }),
  productData({
    code: "MAKEUP_PALETTES_005",
    category: "Makeup > Makeup Palettes",
    brand: "m.ph by Mary Phillips\",\n    sku: \"2967974\",\n    productId: \"P516830",
    name: "Underpainting Face Highlight & Contour Palette",
    type: "Makeup Palettes",
    image: skuImage("2967974"),
    link: "https://www.sephora.com/product/underpainting-face-highlight-contour-palette-P516830?skuId=2967974"
  }),
  productData({
    code: "MAKEUP_PALETTES_006",
    category: "Makeup > Makeup Palettes",
    brand: "MAKEUP BY MARIO\",\n    sku: \"2737187\",\n    productId: \"P510193",
    name: "Master Mattes® Eyeshadow Palette: The Neutrals",
    type: "Makeup Palettes",
    image: skuImage("2737187"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-mattes-r-eyeshadow-palette-neutrals-P510193?skuId=2737187"
  }),
  productData({
    code: "MAKEUP_PALETTES_007",
    category: "Makeup > Makeup Palettes",
    brand: "Anastasia Beverly Hills\",\n    sku: \"2799724\",\n    productId: \"P512500",
    name: "Mini Spice Eye Palette",
    type: "Makeup Palettes",
    image: skuImage("2799724"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-spice-eye-palette-P512500?skuId=2799724"
  }),
  productData({
    code: "MAKEUP_PALETTES_008",
    category: "Makeup > Makeup Palettes",
    brand: "Yves Saint Laurent\",\n    sku: \"2873453\",\n    productId: \"P507353",
    name: "Couture Mini Clutch Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2873453"),
    link: "https://www.sephora.com/product/clutch-eye-shadow-palette-P507353?skuId=2873453"
  }),
  productData({
    code: "MAKEUP_PALETTES_009",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2929982\",\n    productId: \"P514928",
    name: "Mini Eye Sculpt Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2929982"),
    link: "https://www.sephora.com/product/mini-eye-sculpt-eyeshadow-palette-P514928?skuId=2929982"
  }),
  productData({
    code: "MAKEUP_PALETTES_010",
    category: "Makeup > Makeup Palettes",
    brand: "Urban Decay\",\n    sku: \"2878312\",\n    productId: \"P519224",
    name: "Naked Shaped Warm-Toned Makeup Palette for Eyes & Face",
    type: "Makeup Palettes",
    image: skuImage("2878312"),
    link: "https://www.sephora.com/product/urban-decay-warm-eye-shaped-eyeshadow-palette-P519224?skuId=2878312"
  }),
  productData({
    code: "MAKEUP_PALETTES_011",
    category: "Makeup > Makeup Palettes",
    brand: "HUDA BEAUTY\",\n    sku: \"2691350\",\n    productId: \"P507079",
    name: "Pretty Grunge Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2691350"),
    link: "https://www.sephora.com/product/pretty-grunge-eyeshadow-palette-P507079?skuId=2691350"
  }),
  productData({
    code: "MAKEUP_PALETTES_012",
    category: "Makeup > Makeup Palettes",
    brand: "ONE/SIZE by Patrick Starrr\",\n    sku: \"2656296\",\n    productId: \"P482709",
    name: "Cheek Clapper 3D Blush Trio Palette",
    type: "Makeup Palettes",
    image: skuImage("2656296"),
    link: "https://www.sephora.com/product/one-size-by-patrick-starrr-cheek-clapper-3d-blush-trio-palette-P482709?skuId=2656296"
  }),
  productData({
    code: "MAKEUP_PALETTES_013",
    category: "Makeup > Makeup Palettes",
    brand: "Hourglass\",\n    sku: \"2519767\",\n    productId: \"P382309",
    name: "Ambient® Lighting Palette",
    type: "Makeup Palettes",
    image: skuImage("2519767"),
    link: "https://www.sephora.com/product/ambient-lighting-palette-P382309?skuId=2519767"
  }),
  productData({
    code: "MAKEUP_PALETTES_014",
    category: "Makeup > Makeup Palettes",
    brand: "MAKEUP BY MARIO\",\n    sku: \"2389559\",\n    productId: \"P02318798",
    name: "Master Metallics® Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2389559"),
    link: "https://www.sephora.com/product/makeup-by-mario-master-metallics-tm-eye-palette-P02318798?skuId=2389559"
  }),
  productData({
    code: "MAKEUP_PALETTES_015",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2697464\",\n    productId: \"P507577",
    name: "Mini Starlette Palette",
    type: "Makeup Palettes",
    image: skuImage("2697464"),
    link: "https://www.sephora.com/product/mini-starlette-palette-P507577?skuId=2697464"
  }),
  productData({
    code: "MAKEUP_PALETTES_016",
    category: "Makeup > Makeup Palettes",
    brand: "HUNG VANNGO BEAUTY\",\n    sku: \"2903235\",\n    productId: \"P518116",
    name: "Color Story Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2903235"),
    link: "https://www.sephora.com/product/color-story-eyeshadow-palette-P518116?skuId=2903235"
  }),
  productData({
    code: "MAKEUP_PALETTES_017",
    category: "Makeup > Makeup Palettes",
    brand: "Laura Geller\",\n    sku: \"2922300\",\n    productId: \"P519538",
    name: "Baked Icons Complete All-in-one Full Face Palette",
    type: "Makeup Palettes",
    image: skuImage("2922300"),
    link: "https://www.sephora.com/product/baked-icons-complete-full-face-palette-P519538?skuId=2922300"
  }),
  productData({
    code: "MAKEUP_PALETTES_018",
    category: "Makeup > Makeup Palettes",
    brand: "Too Faced\",\n    sku: \"2307536\",\n    productId: \"P455201",
    name: "Born This Way The Natural Nudes Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2307536"),
    link: "https://www.sephora.com/product/too-faced-born-this-way-natural-nudes-eyeshadow-palette-P455201?skuId=2307536"
  }),
  productData({
    code: "MAKEUP_PALETTES_019",
    category: "Makeup > Makeup Palettes",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2670305\",\n    productId: \"P505329",
    name: "HD Skin Cream Contour and Highlight Sculpting Palette",
    type: "Makeup Palettes",
    image: skuImage("2670305"),
    link: "https://www.sephora.com/product/hd-skin-cream-contour-highlight-sculpting-palette-P505329?skuId=2670305"
  }),
  productData({
    code: "MAKEUP_PALETTES_020",
    category: "Makeup > Makeup Palettes",
    brand: "tarte\",\n    sku: \"2883569\",\n    productId: \"P403812",
    name: "tartelette™ in bloom Amazonian clay eyeshadow palette",
    type: "Makeup Palettes",
    image: skuImage("2883569"),
    link: "https://www.sephora.com/product/tartelette-in-bloom-clay-eyeshadow-palette-P403812?skuId=2883569"
  }),
  productData({
    code: "MAKEUP_PALETTES_021",
    category: "Makeup > Makeup Palettes",
    brand: "Urban Decay\",\n    sku: \"1573336\",\n    productId: \"P384099",
    name: "Naked3 Soft Pink Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("1573336"),
    link: "https://www.sephora.com/product/naked3-P384099?skuId=1573336"
  }),
  productData({
    code: "MAKEUP_PALETTES_022",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2697456\",\n    productId: \"P507807",
    name: "I Need a Nude Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2697456"),
    link: "https://www.sephora.com/product/i-need-a-nude-eyeshadow-palette-P507807?skuId=2697456"
  }),
  productData({
    code: "MAKEUP_PALETTES_023",
    category: "Makeup > Makeup Palettes",
    brand: "DIOR\",\n    sku: \"2948354\",\n    productId: \"P463032",
    name: "Diorshow 5 Couleurs Couture Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2948354"),
    link: "https://www.sephora.com/product/dior-5-couleurs-couture-eyeshadow-palette-P463032?skuId=2948354"
  }),
  productData({
    code: "MAKEUP_PALETTES_024",
    category: "Makeup > Makeup Palettes",
    brand: "HUDA BEAUTY\",\n    sku: \"2739423\",\n    productId: \"P509445",
    name: "Creamy Obsessions Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2739423"),
    link: "https://www.sephora.com/product/huda-beauty-creamy-obsessions-eye-palette-P509445?skuId=2739423"
  }),
  productData({
    code: "MAKEUP_PALETTES_025",
    category: "Makeup > Makeup Palettes",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2870897\",\n    productId: \"P516069",
    name: "Blush Blush Blush. Cream & Powder Palette",
    type: "Makeup Palettes",
    image: skuImage("2870897"),
    link: "https://www.sephora.com/product/blush-blush-blush-palette-P516069?skuId=2870897"
  }),
  productData({
    code: "MAKEUP_PALETTES_026",
    category: "Makeup > Makeup Palettes",
    brand: "PATRICK TA\",\n    sku: \"2703254\",\n    productId: \"P506700",
    name: "Major Dimension III Matte Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2703254"),
    link: "https://www.sephora.com/product/major-dimensions-eyeshadow-palette-iii-P506700?skuId=2703254"
  }),
  productData({
    code: "MAKEUP_PALETTES_027",
    category: "Makeup > Makeup Palettes",
    brand: "Charlotte Tilbury\",\n    sku: \"2952745\",\n    productId: \"P516013",
    name: "Pillow Talk Beauty Soulmates Airbrush Flawless Finish Brightening and Blush Powder Palette",
    type: "Makeup Palettes",
    image: skuImage("2952745"),
    link: "https://www.sephora.com/product/pillow-talk-beauty-soulmates-brighten-blush-palette-P516013?skuId=2952745"
  }),
  productData({
    code: "MAKEUP_PALETTES_028",
    category: "Makeup > Makeup Palettes",
    brand: "HUDA BEAUTY\",\n    sku: \"2651859\",\n    productId: \"P504885",
    name: "Matte Obsessions Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2651859"),
    link: "https://www.sephora.com/product/huda-beauty-matte-obsessions-eyeshadow-palette-P504885?skuId=2651859"
  }),
  productData({
    code: "MAKEUP_PALETTES_029",
    category: "Makeup > Makeup Palettes",
    brand: "Urban Decay\",\n    sku: \"1637719\",\n    productId: \"P388225",
    name: "Naked2 Basics Matte Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("1637719"),
    link: "https://www.sephora.com/product/naked2-basics-P388225?skuId=1637719"
  }),
  productData({
    code: "MAKEUP_PALETTES_030",
    category: "Makeup > Makeup Palettes",
    brand: "Hourglass\",\n    sku: \"2887594\",\n    productId: \"P473858",
    name: "Curator™ Eyeshadow Palettes",
    type: "Makeup Palettes",
    image: skuImage("2887594"),
    link: "https://www.sephora.com/product/hourglass-curator-trade-eyeshadow-palettes-P473858?skuId=2887594"
  }),
  productData({
    code: "MAKEUP_PALETTES_031",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2792364\",\n    productId: \"P512296",
    name: "I Need a Warm Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2792364"),
    link: "https://www.sephora.com/product/natasha-denona-i-need-a-warm-eyeshadow-palette-P512296?skuId=2792364"
  }),
  productData({
    code: "MAKEUP_PALETTES_032",
    category: "Makeup > Makeup Palettes",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2844660\",\n    productId: \"P513035",
    name: "HD Skin Blush & Glow Longwear Cream Face Palette",
    type: "Makeup Palettes",
    image: skuImage("2844660"),
    link: "https://www.sephora.com/product/hd-skin-blush-glow-longwear-cream-face-palette-P513035?skuId=2844660"
  }),
  productData({
    code: "MAKEUP_PALETTES_033",
    category: "Makeup > Makeup Palettes",
    brand: "Givenchy\",\n    sku: \"2864841\",\n    productId: \"P515776",
    name: "Prisme Libre Blurring & Color-Correcting Matte Pressed Powder",
    type: "Makeup Palettes",
    image: skuImage("2864841"),
    link: "https://www.sephora.com/product/prisme-libre-blurring-color-correcting-pressed-powder-P515776?skuId=2864841"
  }),
  productData({
    code: "MAKEUP_PALETTES_034",
    category: "Makeup > Makeup Palettes",
    brand: "PAT McGRATH LABS\",\n    sku: \"2597680\",\n    productId: \"P500887",
    name: "Mothership X Eyeshadow Palette:  Moonlit Seduction",
    type: "Makeup Palettes",
    image: skuImage("2597680"),
    link: "https://www.sephora.com/product/mothership-x-eyeshadow-palette-moonlit-seduction-P500887?skuId=2597680"
  }),
  productData({
    code: "MAKEUP_PALETTES_035",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2671055\",\n    productId: \"P506499",
    name: "Yucca Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2671055"),
    link: "https://www.sephora.com/product/yucca-eyeshadow-palette-P506499?skuId=2671055"
  }),
  productData({
    code: "MAKEUP_PALETTES_036",
    category: "Makeup > Makeup Palettes",
    brand: "tarte\",\n    sku: \"2883619\",\n    productId: \"P423935",
    name: "tartelette™ toasted Amazonian clay eyeshadow palette",
    type: "Makeup Palettes",
    image: skuImage("2883619"),
    link: "https://www.sephora.com/product/tartelette-toasted-eyeshadow-palette-P423935?skuId=2883619"
  }),
  productData({
    code: "MAKEUP_PALETTES_037",
    category: "Makeup > Makeup Palettes",
    brand: "Charlotte Tilbury\",\n    sku: \"2218790\",\n    productId: \"P433523",
    name: "Luxury Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2218790"),
    link: "https://www.sephora.com/product/luxury-eyeshadow-palette-P433523?skuId=2218790"
  }),
  productData({
    code: "MAKEUP_PALETTES_038",
    category: "Makeup > Makeup Palettes",
    brand: "Anastasia Beverly Hills\",\n    sku: \"2934503\",\n    productId: \"P520091",
    name: "Haze Mini Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2934503"),
    link: "https://www.sephora.com/product/haze-mini-eyeshadow-palette-P520091?skuId=2934503"
  }),
  productData({
    code: "MAKEUP_PALETTES_039",
    category: "Makeup > Makeup Palettes",
    brand: "stila\",\n    sku: \"1776848\",\n    productId: \"P406281",
    name: "Correct & Perfect All-In-One Color Correcting Palette",
    type: "Makeup Palettes",
    image: skuImage("1776848"),
    link: "https://www.sephora.com/product/correct-perfect-all-in-one-color-correcting-palette-P406281?skuId=1776848"
  }),
  productData({
    code: "MAKEUP_PALETTES_040",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2378313\",\n    productId: \"P461188",
    name: "Glam Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2378313"),
    link: "https://www.sephora.com/product/natasha-denona-glam-eyeshadow-palette-P461188?skuId=2378313"
  }),
  productData({
    code: "MAKEUP_PALETTES_041",
    category: "Makeup > Makeup Palettes",
    brand: "Danessa Myricks Beauty\",\n    sku: \"2738649\",\n    productId: \"P509948",
    name: "Groundwork: Blooming Romance - Palette For Eyes, Brows, Face & Lips",
    type: "Makeup Palettes",
    image: skuImage("2738649"),
    link: "https://www.sephora.com/product/danessa-myricks-beauty-groundwork-palette-blooming-romance-eyeshadow-palette-P509948?skuId=2738649"
  }),
  productData({
    code: "MAKEUP_PALETTES_042",
    category: "Makeup > Makeup Palettes",
    brand: "LAWLESS\",\n    sku: \"2294544\",\n    productId: \"P450514",
    name: "Mini The Little One Talc-Free Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2294544"),
    link: "https://www.sephora.com/product/the-little-one-talc-free-eyeshadow-palette-P450514?skuId=2294544"
  }),
  productData({
    code: "MAKEUP_PALETTES_043",
    category: "Makeup > Makeup Palettes",
    brand: "tarte\",\n    sku: \"2883585\",\n    productId: \"P391759",
    name: "tartelette™ Amazonian clay matte eyeshadow palette",
    type: "Makeup Palettes",
    image: skuImage("2883585"),
    link: "https://www.sephora.com/product/tartelette-amazonian-clay-matte-eyeshadow-palette-P391759?skuId=2883585"
  }),
  productData({
    code: "MAKEUP_PALETTES_044",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2792356\",\n    productId: \"P512300",
    name: "Mini Rose Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2792356"),
    link: "https://www.sephora.com/product/natasha-denona-mini-rose-eyeshadow-palette-P512300?skuId=2792356"
  }),
  productData({
    code: "MAKEUP_PALETTES_045",
    category: "Makeup > Makeup Palettes",
    brand: "Westman Atelier\",\n    sku: \"2869105\",\n    productId: \"P516091",
    name: "Baby Cheeks + Face Trace Sculpting Powder Duo",
    type: "Makeup Palettes",
    image: skuImage("2869105"),
    link: "https://www.sephora.com/product/baby-cheeks-face-trace-sculpting-powder-duo-P516091?skuId=2869105"
  }),
  productData({
    code: "MAKEUP_PALETTES_046",
    category: "Makeup > Makeup Palettes",
    brand: "Charlotte Tilbury\",\n    sku: \"2182566\",\n    productId: \"P455321",
    name: "Luxury Eyeshadow Palette - Pillow Talk Collection",
    type: "Makeup Palettes",
    image: skuImage("2182566"),
    link: "https://www.sephora.com/product/charlotte-tilbury-luxury-eyeshadow-palette-pillow-talk-collection-P455321?skuId=2182566"
  }),
  productData({
    code: "MAKEUP_PALETTES_047",
    category: "Makeup > Makeup Palettes",
    brand: "Anastasia Beverly Hills\",\n    sku: \"2385516\",\n    productId: \"P463420",
    name: "Mini Soft Glam II Eye Shadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2385516"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-soft-glam-palette-P463420?skuId=2385516"
  }),
  productData({
    code: "MAKEUP_PALETTES_048",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2486611\",\n    productId: \"P475140",
    name: "Mini Xenon Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2486611"),
    link: "https://www.sephora.com/product/natasha-denona-mini-xenon-eyeshadow-palette-P475140?skuId=2486611"
  }),
  productData({
    code: "MAKEUP_PALETTES_049",
    category: "Makeup > Makeup Palettes",
    brand: "Too Faced\",\n    sku: \"2771665\",\n    productId: \"P510445",
    name: "Mini Born This Way Complexion-Inspired Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2771665"),
    link: "https://www.sephora.com/product/too-faced-mini-born-this-way-complexion-inspired-eyeshadow-palette-P510445?skuId=2771665"
  }),
  productData({
    code: "MAKEUP_PALETTES_050",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2743375\",\n    productId: \"P509533",
    name: "My Mini Dream Glow Blush",
    type: "Makeup Palettes",
    image: skuImage("2743375"),
    link: "https://www.sephora.com/product/natasha-denona-my-mini-dream-glow-blush-P509533?skuId=2743375"
  }),
  productData({
    code: "MAKEUP_PALETTES_051",
    category: "Makeup > Makeup Palettes",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2034775\",\n    productId: \"P428677",
    name: "Ultra HD Underpainting Color Correction Palette",
    type: "Makeup Palettes",
    image: skuImage("2034775"),
    link: "https://www.sephora.com/product/ultra-hd-underpainting-correction-palette-P428677?skuId=2034775"
  }),
  productData({
    code: "MAKEUP_PALETTES_052",
    category: "Makeup > Makeup Palettes",
    brand: "ILIA\",\n    sku: \"2274249\",\n    productId: \"P448845",
    name: "The Necessary Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2274249"),
    link: "https://www.sephora.com/product/the-necessary-eyeshadow-palette-P448845?skuId=2274249"
  }),
  productData({
    code: "MAKEUP_PALETTES_053",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2597672\",\n    productId: \"P502073",
    name: "My Dream Cheek Trio - Cream Blush, Glow Cream Base and Glow Powder Highlighter",
    type: "Makeup Palettes",
    image: skuImage("2597672"),
    link: "https://www.sephora.com/product/my-dream-cheek-trio-cream-blush-glow-cream-base-glow-powder-highlighter-P502073?skuId=2597672"
  }),
  productData({
    code: "MAKEUP_PALETTES_054",
    category: "Makeup > Makeup Palettes",
    brand: "ISAMAYA\",\n    sku: \"2910370\",\n    productId: \"P518714",
    name: "Core Palette 2.0",
    type: "Makeup Palettes",
    image: skuImage("2910370"),
    link: "https://www.sephora.com/product/isamaya-core-palette-2-P518714?skuId=2910370"
  }),
  productData({
    code: "MAKEUP_PALETTES_055",
    category: "Makeup > Makeup Palettes",
    brand: "NATASHA DENONA\",\n    sku: \"2647170\",\n    productId: \"P505250",
    name: "Love Face Eyeshadow & Cheek Essential Palette",
    type: "Makeup Palettes",
    image: skuImage("2647170"),
    link: "https://www.sephora.com/product/natasha-denona-love-face-palette-P505250?skuId=2647170"
  }),
  productData({
    code: "MAKEUP_PALETTES_056",
    category: "Makeup > Makeup Palettes",
    brand: "Westman Atelier\",\n    sku: \"2684215\",\n    productId: \"P468436",
    name: "Eye Pods Cream Eye Shadow",
    type: "Makeup Palettes",
    image: skuImage("2684215"),
    link: "https://www.sephora.com/product/westman-atelier-eye-pods-eyeshadows-P468436?skuId=2684215"
  }),
  productData({
    code: "MAKEUP_PALETTES_057",
    category: "Makeup > Makeup Palettes",
    brand: "Westman Atelier\",\n    sku: \"2869147\",\n    productId: \"P516090",
    name: "Baby Cheeks Powder Blush Duo",
    type: "Makeup Palettes",
    image: skuImage("2869147"),
    link: "https://www.sephora.com/product/westman-atelier-baby-cheeks-powder-blush-duo-P516090?skuId=2869147"
  }),
  productData({
    code: "MAKEUP_PALETTES_058",
    category: "Makeup > Makeup Palettes",
    brand: "ISAMAYA\",\n    sku: \"2910362\",\n    productId: \"P518697",
    name: "Core Palette 1.0",
    type: "Makeup Palettes",
    image: skuImage("2910362"),
    link: "https://www.sephora.com/product/isamaya-core-palette-1-P518697?skuId=2910362"
  }),
  productData({
    code: "MAKEUP_PALETTES_059",
    category: "Makeup > Makeup Palettes",
    brand: "Charlotte Tilbury\",\n    sku: \"2382885\",\n    productId: \"P461433",
    name: "Super Nudes Easy Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2382885"),
    link: "https://www.sephora.com/product/charlotte-tilbury-iconic-nude-easy-eye-palette-P461433?skuId=2382885"
  }),
  productData({
    code: "MAKEUP_PALETTES_060",
    category: "Makeup > Makeup Palettes",
    brand: "PAT McGRATH LABS\",\n    sku: \"2383602\",\n    productId: \"P463924",
    name: "Celestial Divinity Eyeshadow Palette",
    type: "Makeup Palettes",
    image: skuImage("2383602"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-celestial-divinity-luxe-quad-interstellar-icons-P463924?skuId=2383602"
  }),
  productData({
    code: "MAKEUP_PALETTES_061",
    category: "Makeup > Makeup Palettes",
    brand: "PAT McGRATH LABS\",\n    sku: \"2464931\",\n    productId: \"P472486",
    name: "Venus in Fleurs Luxe Eyeshadow Palette: Voyeuristic Vixen",
    type: "Makeup Palettes",
    image: skuImage("2464931"),
    link: "https://www.sephora.com/product/pat-mcgrath-labs-venus-in-fleurs-luxe-eyeshadow-palette-voyeuristic-vixen-P472486?skuId=2464931"
  }),

  // ==================================================
  // Makeup > Makeup Accessories
  // Products: 59
  // ==================================================
  productData({
    code: "MAKEUP_ACCESSORIES_001",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2191526\",\n    productId: \"P446621",
    name: "Organic Cotton Pads",
    type: "Makeup Accessories",
    image: skuImage("2191526"),
    link: "https://www.sephora.com/product/organic-cotton-pads-P446621?skuId=2191526"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_002",
    category: "Makeup > Makeup Accessories",
    brand: "Shiseido\",\n    sku: \"1201474\",\n    productId: \"P244437",
    name: "Eyelash Curler",
    type: "Makeup Accessories",
    image: skuImage("1201474"),
    link: "https://www.sephora.com/product/eyelash-curler-P244437?skuId=1201474"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_003",
    category: "Makeup > Makeup Accessories",
    brand: "fresh\",\n    sku: \"2534675\",\n    productId: \"P7880",
    name: "Soy Hydrating Gentle Face Cleanser",
    type: "Makeup Accessories",
    image: skuImage("2534675"),
    link: "https://www.sephora.com/product/soy-face-cleanser-P7880?skuId=2534675"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_004",
    category: "Makeup > Makeup Accessories",
    brand: "Saie\",\n    sku: \"2789956\",\n    productId: \"P511593",
    name: "The Vanity Case",
    type: "Makeup Accessories",
    image: skuImage("2789956"),
    link: "https://www.sephora.com/product/the-vanity-case-P511593?skuId=2789956"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_005",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2887859\",\n    productId: \"P518086",
    name: "Matte On-The-Go Blotting Papers",
    type: "Makeup Accessories",
    image: skuImage("2887859"),
    link: "https://www.sephora.com/product/sephora-pantone-universe-matte-on-the-go-blotting-papers-P518086?skuId=2887859"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_006",
    category: "Makeup > Makeup Accessories",
    brand: "Grande Cosmetics\",\n    sku: \"2370252\",\n    productId: \"P460017",
    name: "GrandeLASH-LIFT Heated Lash Curler",
    type: "Makeup Accessories",
    image: skuImage("2370252"),
    link: "https://www.sephora.com/product/grande-cosmetics-grandelash-lift-heated-lash-curler-P460017?skuId=2370252"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_007",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2726248\",\n    productId: \"P509813",
    name: "Eyelash Curler",
    type: "Makeup Accessories",
    image: skuImage("2726248"),
    link: "https://www.sephora.com/product/eyelash-curler-P509813?skuId=2726248"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_008",
    category: "Makeup > Makeup Accessories",
    brand: "Rare Beauty by Selena Gomez\",\n    sku: \"2825958\",\n    productId: \"P514463",
    name: "Rare Beauty x Sephora Travel Makeup Pouch",
    type: "Makeup Accessories",
    image: skuImage("2825958"),
    link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-travel-pouch-P514463?skuId=2825958"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_009",
    category: "Makeup > Makeup Accessories",
    brand: "CLINIQUE\",\n    sku: \"886267\",\n    productId: \"P126301",
    name: "Take The Day Off™ Makeup Removing Cleansing Balm",
    type: "Makeup Accessories",
    image: skuImage("886267"),
    link: "https://www.sephora.com/product/take-the-day-off-cleansing-balm-P126301?skuId=886267"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_010",
    category: "Makeup > Makeup Accessories",
    brand: "The Ordinary\",\n    sku: \"2916997\",\n    productId: \"P520783",
    name: "Lash Curl Finisher",
    type: "Makeup Accessories",
    image: skuImage("2916997"),
    link: "https://www.sephora.com/product/lash-curl-finisher-P520783?skuId=2916997"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_011",
    category: "Makeup > Makeup Accessories",
    brand: "Sincerely Yours\",\n    sku: \"2982221\",\n    productId: \"P524695",
    name: "Sincerely Yours Blue Cloud Case Travel Bag",
    type: "Makeup Accessories",
    image: skuImage("2982221"),
    link: "https://www.sephora.com/product/sincerely-yours-blue-travel-bag-P524695?skuId=2982221"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_012",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA The Merch Shop\",\n    sku: \"2901460\",\n    productId: \"P517132",
    name: "Canvas Tote Bag with Lipstick Pockets",
    type: "Makeup Accessories",
    image: skuImage("2901460"),
    link: "https://www.sephora.com/product/canvas-tote-bag-with-lipstick-pockets-P517132?skuId=2901460"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_013",
    category: "Makeup > Makeup Accessories",
    brand: "The Original MakeUp Eraser\",\n    sku: \"2952323\",\n    productId: \"P524917",
    name: "MakeUp Eraser®  Spritz Please 7- Day Set Reusable Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2952323"),
    link: "https://www.sephora.com/product/makeup-eraser-spritz-please-7-day-set-reusable-makeup-remover-P524917?skuId=2952323"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_014",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2300218\",\n    productId: \"P460703",
    name: "Organic Cotton Swabs",
    type: "Makeup Accessories",
    image: skuImage("2300218"),
    link: "https://www.sephora.com/product/sephora-collection-organic-cotton-swabs-P460703?skuId=2300218"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_015",
    category: "Makeup > Makeup Accessories",
    brand: "Drunk Elephant\",\n    sku: \"2170355\",\n    productId: \"P442566",
    name: "Slaai™  Makeup-Melting Butter Cleanser",
    type: "Makeup Accessories",
    image: skuImage("2170355"),
    link: "https://www.sephora.com/product/slaai-makeup-melting-butter-cleanser-P442566?skuId=2170355"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_016",
    category: "Makeup > Makeup Accessories",
    brand: "CLINIQUE\",\n    sku: \"1802354\",\n    productId: \"P406924",
    name: "Take The Day Off™ Micellar Cleansing Makeup Remover Wipes for Face & Eyes",
    type: "Makeup Accessories",
    image: "https://www.sephora.com/productimages/sku/s1802354-av-5202604020630182260700-zoom.jpg?imwidth=315",
    link: "https://www.sephora.com/product/take-day-off-micellar-cleansing-towelettes-for-face-eyes-P406924?skuId=1802354"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_017",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"2192946\",\n    productId: \"P375640",
    name: "Stainless Steel Slant Tweezer",
    type: "Makeup Accessories",
    image: skuImage("2192946"),
    link: "https://www.sephora.com/product/stainless-steel-slant-tweezer-P375640?skuId=2192946"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_018",
    category: "Makeup > Makeup Accessories",
    brand: "LoveShackFancy\",\n    sku: \"2908309\",\n    productId: \"P518720",
    name: "Octavia Secret Crush Travel Cosmetic Bag",
    type: "Makeup Accessories",
    image: skuImage("2908309"),
    link: "https://www.sephora.com/product/lsf-cosmetic-bag-secret-crush-P518720?skuId=2908309"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_019",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2760270\",\n    productId: \"P513142",
    name: "Slant Eyebrow Tweezer",
    type: "Makeup Accessories",
    image: skuImage("2760270"),
    link: "https://www.sephora.com/product/sephora-collection-slant-tweezer-P513142?skuId=2760270"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_020",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"2820181\",\n    productId: \"P515049",
    name: "Mini Express Waterproof Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2820181"),
    link: "https://www.sephora.com/product/mini-express-waterproof-makeup-remover-P515049?skuId=2820181"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_021",
    category: "Makeup > Makeup Accessories",
    brand: "SEPHORA COLLECTION\",\n    sku: \"1560002\",\n    productId: \"P276319",
    name: "Waterproof Eye Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("1560002"),
    link: "https://www.sephora.com/product/waterproof-eye-makeup-remover-P276319?skuId=1560002"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_022",
    category: "Makeup > Makeup Accessories",
    brand: "Farmacy\",\n    sku: \"2860302\",\n    productId: \"P515961",
    name: "Green Clean Makeup Removing Cleansing Balm",
    type: "Makeup Accessories",
    image: skuImage("2860302"),
    link: "https://www.sephora.com/product/green-clean-cleansing-balm-P515961?skuId=2860302"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_023",
    category: "Makeup > Makeup Accessories",
    brand: "The Original MakeUp Eraser\",\n    sku: \"2805521\",\n    productId: \"P504898",
    name: "Mini MakeUp Eraser® PRO Pink Reusable Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2805521"),
    link: "https://www.sephora.com/product/the-mini-makeup-eraser-P504898?skuId=2805521"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_024",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"2192953\",\n    productId: \"P442763",
    name: "Micro Mini Pink Perfection Tweezer Set",
    type: "Makeup Accessories",
    image: skuImage("2192953"),
    link: "https://www.sephora.com/product/mini-pink-perfection-tweezer-set-P442763?skuId=2192953"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_025",
    category: "Makeup > Makeup Accessories",
    brand: "ONE/SIZE by Patrick Starrr\",\n    sku: \"2876258\",\n    productId: \"P516368",
    name: "Go Off Makeup Remover Dissolving Mist",
    type: "Makeup Accessories",
    image: skuImage("2876258"),
    link: "https://www.sephora.com/product/go-off-spray-P516368?skuId=2876258"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_026",
    category: "Makeup > Makeup Accessories",
    brand: "DIOR\",\n    sku: \"2244440\",\n    productId: \"P451225",
    name: "BACKSTAGE Lash Curler",
    type: "Makeup Accessories",
    image: skuImage("2244440"),
    link: "https://www.sephora.com/product/backstage-lash-curler-P451225?skuId=2244440"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_027",
    category: "Makeup > Makeup Accessories",
    brand: "Fenty Beauty by Rihanna\",\n    sku: \"2418853\",\n    productId: \"P467247",
    name: "Total Cleans'r Remove-It-All Cleanser with Barbados Cherry",
    type: "Makeup Accessories",
    image: skuImage("2418853"),
    link: "https://www.sephora.com/product/fenty-skin-total-cleans-r-remove-it-all-cleanser-P467247?skuId=2418853"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_028",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"2457190\",\n    productId: \"P471219",
    name: "Brow Freeze® Applicator",
    type: "Makeup Accessories",
    image: skuImage("2457190"),
    link: "https://www.sephora.com/product/anastasia-beverly-hills-brow-freeze-applicator-P471219?skuId=2457190"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_029",
    category: "Makeup > Makeup Accessories",
    brand: "CLINIQUE\",\n    sku: \"48074\",\n    productId: \"P122735",
    name: "Take The Day Off Makeup Remover For Lids, Lashes & Lips",
    type: "Makeup Accessories",
    image: skuImage("48074"),
    link: "https://www.sephora.com/product/take-the-day-off-makeup-remover-for-lids-lashes-lips-P122735?skuId=48074"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_030",
    category: "Makeup > Makeup Accessories",
    brand: "The Original MakeUp Eraser\",\n    sku: \"2805547\",\n    productId: \"P507349",
    name: "MakeUp Eraser® Neutrals 7-Day Set Reusable Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2805547"),
    link: "https://www.sephora.com/product/neutrals-7-day-set-reusable-makeup-wipes-P507349?skuId=2805547"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_031",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"1457688\",\n    productId: \"P377523",
    name: "Pink Perfection Petite Tweeze Set",
    type: "Makeup Accessories",
    image: skuImage("1457688"),
    link: "https://www.sephora.com/product/hot-pink-petite-tweeze-set-P377523?skuId=1457688"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_032",
    category: "Makeup > Makeup Accessories",
    brand: "Benefit Cosmetics\",\n    sku: \"2641686\",\n    productId: \"P505024",
    name: "The POREfessional Get Unblocked Makeup-Removing Cleansing Oil",
    type: "Makeup Accessories",
    image: skuImage("2641686"),
    link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-get-unblocked-makeup-removing-cleansing-oil-P505024?skuId=2641686"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_033",
    category: "Makeup > Makeup Accessories",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2646909\",\n    productId: \"P504859",
    name: "Mini Gentle Eye Gel Waterproof Eye & Lip Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2646909"),
    link: "https://www.sephora.com/product/mini-gentle-eye-gel-waterproof-eye-lip-makeup-remover-P504859?skuId=2646909"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_034",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"1578657\",\n    productId: \"P384059",
    name: "Dual-Ended Firm Angled Eyebrow Brush #12",
    type: "Makeup Accessories",
    image: skuImage("1578657"),
    link: "https://www.sephora.com/product/brush-12-P384059?skuId=1578657"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_035",
    category: "Makeup > Makeup Accessories",
    brand: "Drunk Elephant\",\n    sku: \"2382489\",\n    productId: \"P460515",
    name: "E-Rase™ Milki Micellar Water",
    type: "Makeup Accessories",
    image: skuImage("2382489"),
    link: "https://www.sephora.com/product/drunk-elephant-e-rase-milki-micellar-water-P460515?skuId=2382489"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_036",
    category: "Makeup > Makeup Accessories",
    brand: "Glossier\",\n    sku: \"2839413\",\n    productId: \"P516254",
    name: "Milky Jelly Cleansing Balm & Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2839413"),
    link: "https://www.sephora.com/product/milky-jelly-cleansing-balm-makeup-remover-P516254?skuId=2839413"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_037",
    category: "Makeup > Makeup Accessories",
    brand: "IT Cosmetics\",\n    sku: \"2582260\",\n    productId: \"P482681",
    name: "Bye Bye Makeup 3-in-1 Makeup Melting Cleansing Balm",
    type: "Makeup Accessories",
    image: skuImage("2582260"),
    link: "https://www.sephora.com/product/it-cosmetics-bye-bye-makeup-3-in-1-makeup-melting-cleansing-balm-P482681?skuId=2582260"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_038",
    category: "Makeup > Makeup Accessories",
    brand: "Glossier\",\n    sku: \"2636744\",\n    productId: \"P504919",
    name: "Milky Oil Dual-Phase Waterproof Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2636744"),
    link: "https://www.sephora.com/product/glossier-milky-oil-P504919?skuId=2636744"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_039",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"765800\",\n    productId: \"P69600",
    name: "Eyebrow Shaping Stencil Set",
    type: "Makeup Accessories",
    image: skuImage("765800"),
    link: "https://www.sephora.com/product/classic-stencils-P69600?skuId=765800"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_040",
    category: "Makeup > Makeup Accessories",
    brand: "CLINIQUE\",\n    sku: \"1123116\",\n    productId: \"P223704",
    name: "Mini Take The Day Off Makeup Remover For Lids, Lashes & Lips",
    type: "Makeup Accessories",
    image: skuImage("1123116"),
    link: "https://www.sephora.com/product/take-the-day-off-to-go-P223704?skuId=1123116"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_041",
    category: "Makeup > Makeup Accessories",
    brand: "Caudalie\",\n    sku: \"2062495\",\n    productId: \"P381020",
    name: "Vinoclean Cleansing Micellar Water",
    type: "Makeup Accessories",
    image: skuImage("2062495"),
    link: "https://www.sephora.com/product/micellar-cleansing-water-P381020?skuId=2062495"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_042",
    category: "Makeup > Makeup Accessories",
    brand: "Lancôme\",\n    sku: \"534628\",\n    productId: \"P54477",
    name: "Bi-Facil Double-Action Eye Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("534628"),
    link: "https://www.sephora.com/product/bi-facil-double-action-eye-makeup-remover-P54477?skuId=534628"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_043",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"1148022\",\n    productId: \"P230701",
    name: "ProCurl Eyelash Curler",
    type: "Makeup Accessories",
    image: skuImage("1148022"),
    link: "https://www.sephora.com/product/procurl-eyelash-curler-P230701?skuId=1148022"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_044",
    category: "Makeup > Makeup Accessories",
    brand: "Youth To The People\",\n    sku: \"2859114\",\n    productId: \"P516543",
    name: "Youthscreen Long Strap Bag",
    type: "Makeup Accessories",
    image: skuImage("2859114"),
    link: "https://www.sephora.com/product/youth-to-the-people-youthscreen-long-strap-bag-P516543?skuId=2859114"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_045",
    category: "Makeup > Makeup Accessories",
    brand: "Lancôme\",\n    sku: \"2947596\",\n    productId: \"P520472",
    name: "Mascara Melter Gentle Conditioning Mascara Remover with Squalane",
    type: "Makeup Accessories",
    image: skuImage("2947596"),
    link: "https://www.sephora.com/product/mascara-melter-gentle-conditioning-mascara-remover-with-squalane-P520472?skuId=2947596"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_046",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"1707207\",\n    productId: \"P398357",
    name: "ProMaster Eyelash Curler",
    type: "Makeup Accessories",
    image: skuImage("1707207"),
    link: "https://www.sephora.com/product/promaster-lash-curler-P398357?skuId=1707207"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_047",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"1908284\",\n    productId: \"P69517",
    name: "Dual-Ended Angled Powder Eyebrow Brush 7B",
    type: "Makeup Accessories",
    image: skuImage("1908284"),
    link: "https://www.sephora.com/product/brush-7b-P69517?skuId=1908284"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_048",
    category: "Makeup > Makeup Accessories",
    brand: "DAMDAM\",\n    sku: \"2463099\",\n    productId: \"P472025",
    name: "Silk Rice Makeup-Removing Cleansing Oil",
    type: "Makeup Accessories",
    image: skuImage("2463099"),
    link: "https://www.sephora.com/product/dam-dam-silk-rice-makeup-removing-cleansing-oil-P472025?skuId=2463099"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_049",
    category: "Makeup > Makeup Accessories",
    brand: "SIMIHAZE BEAUTY\",\n    sku: \"2633923\",\n    productId: \"P503310",
    name: "Eye Play Gem Sticker Pack",
    type: "Makeup Accessories",
    image: skuImage("2633923"),
    link: "https://www.sephora.com/product/eye-play-gem-pack-P503310?skuId=2633923"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_050",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"765677\",\n    productId: \"P69512",
    name: "Angled Cut Brush - Small 15",
    type: "Makeup Accessories",
    image: skuImage("765677"),
    link: "https://www.sephora.com/product/angled-cut-brush-small-15-P69512?skuId=765677"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_051",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"765172\",\n    productId: \"P69502",
    name: "Slant-Tip Stainless-Steel Precision Tweezers",
    type: "Makeup Accessories",
    image: skuImage("765172"),
    link: "https://www.sephora.com/product/tweezers-P69502?skuId=765172"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_052",
    category: "Makeup > Makeup Accessories",
    brand: "MAKE UP FOR EVER\",\n    sku: \"2646891\",\n    productId: \"P504861",
    name: "Gentle Eye Gel Waterproof Eye & Lip Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2646891"),
    link: "https://www.sephora.com/product/gentle-eye-gel-waterproof-eye-lip-makeup-remover-P504861?skuId=2646891"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_053",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"1622083\",\n    productId: \"P386784",
    name: "Brush #20",
    type: "Makeup Accessories",
    image: skuImage("1622083"),
    link: "https://www.sephora.com/product/brush-20-P386784?skuId=1622083"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_054",
    category: "Makeup > Makeup Accessories",
    brand: "REFY\",\n    sku: \"2847549\",\n    productId: \"P515019",
    name: "Face Cleanse Hydrating Cleanser + Makeup Remover",
    type: "Makeup Accessories",
    image: skuImage("2847549"),
    link: "https://www.sephora.com/product/face-cleanse-hydrating-cleanser-makeup-remover-P515019?skuId=2847549"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_055",
    category: "Makeup > Makeup Accessories",
    brand: "Anastasia Beverly Hills\",\n    sku: \"1721968\",\n    productId: \"P397498",
    name: "Dual-Ended Filling and Detailing Eyebrow Brush #14",
    type: "Makeup Accessories",
    image: skuImage("1721968"),
    link: "https://www.sephora.com/product/brush-14-P397498?skuId=1721968"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_056",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"1457647\",\n    productId: \"P377007",
    name: "Pink Perfection Pointed Slant Tweezer",
    type: "Makeup Accessories",
    image: skuImage("1457647"),
    link: "https://www.sephora.com/product/hot-pink-pointed-slant-tweezer-P377007?skuId=1457647"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_057",
    category: "Makeup > Makeup Accessories",
    brand: "TWEEZERMAN\",\n    sku: \"1457621\",\n    productId: \"P377005",
    name: "Pink Perfection Slant Tweezer",
    type: "Makeup Accessories",
    image: skuImage("1457621"),
    link: "https://www.sephora.com/product/hot-pink-slant-tweezer-P377005?skuId=1457621"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_058",
    category: "Makeup > Makeup Accessories",
    brand: "NUDESTIX\",\n    sku: \"2530657\",\n    productId: \"P476892",
    name: "NUDESKIN Citrus Clean Balm & Make-Up Melt",
    type: "Makeup Accessories",
    image: skuImage("2530657"),
    link: "https://www.sephora.com/product/nudestix-nudeskin-citrus-clean-balm-make-up-melt-P476892?skuId=2530657"
  }),
  productData({
    code: "MAKEUP_ACCESSORIES_059",
    category: "Makeup > Makeup Accessories",
    brand: "tarte\",\n    sku: \"3003852\",\n    productId: \"P525033",
    name: "picture perfect lash curler",
    type: "Makeup Accessories",
    image: skuImage("3003852"),
    link: "https://www.sephora.com/product/picture-perfect-curler-P525033?skuId=3003852"
  })

];

// Compatible avec un site sans modules :
if (typeof window !== "undefined") {
  window.products = products;
  window.productCatalog = products;
  window.sephoraUSCompleteCatalogue = products;
}

// Compatible avec Node/exports si besoin :
if (typeof module !== "undefined") {
  module.exports = {
    products,
    productCatalog: products,
    sephoraUSCompleteCatalogue: products
  };
}

// Category counts:
// - Makeup > Face > Foundation: 148 products
// - Makeup > Face > Setting Sprays & Powder: 150 products
// - Makeup > Face > Tinted Moisturizer: 57 products
// - Makeup > Face > Contour: 58 products
// - Makeup > Face > Color Correct: 32 products
// - Makeup > Face > BB & CC Cream: 16 products
// - Makeup > Face > Highlighter: 122 products
// - Makeup > Face > Face Primer: 134 products
// - Makeup > Face > Concealer: 69 products
// - Makeup > Face > Face Sets: 33 products
// - Makeup > Eye > Eyeshadow: 114 products
// - Makeup > Eye > Eyeshadow Palettes: 81 products
// - Makeup > Eye > Under Eye Concealer: 55 products
// - Makeup > Eye > Mascara: 168 products
// - Makeup > Eye > Eyebrow Makeup: 121 products
// - Makeup > Eye > Eye Makeup Kits & Sets: 26 products
// - Makeup > Eye > Eye Primer: 19 products
// - Makeup > Eye > False Eyelashes: 32 products
// - Makeup > Lip > Lip Gloss: 160 products
// - Makeup > Lip > Lip Liner: 39 products
// - Makeup > Lip > Lipstick: 144 products
// - Makeup > Lip > Lip Stain: 20 products
// - Makeup > Lip > Liquid Lipstick: 27 products
// - Makeup > Lip > Lip Oil: 58 products
// - Makeup > Lip > Lip Sets: 21 products
// - Makeup > Lip > Lip Plumper: 52 products
// - Makeup > Lip > Lip Balm & Treatment: 167 products
// - Makeup > Brushes & Applicators > Sponges & Applicators: 6 products
// - Makeup > Brushes & Applicators > Face Brushes: 6 products
// - Makeup > Brushes & Applicators > Eye Brushes: 6 products
// - Makeup > Brushes & Applicators > Lip Brushes: 3 products
// - Makeup > Brushes & Applicators > Brush Sets: 4 products
// - Makeup > Brushes & Applicators > Brush Cleaners: 6 products
// - Makeup > Face > Blush: 124 products
// - Makeup > Face > Bronzer: 71 products
// - Makeup > Face > Cheek Palettes: 24 products
// - Makeup > Makeup Palettes: 61 products
// - Makeup > Makeup Accessories: 59 products
