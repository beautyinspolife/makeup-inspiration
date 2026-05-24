// data.js simplified: products now reference codes from productCatalog.js only.
// Use each code to resolve the full product object from productCatalog / products.

const LOOKS = [

  {
    id: 1,
    slug: "natural-makeup-look-that-feels-simple-but-looks-stunning",
    title: "Natural Makeup Look That Feels Simple but Looks Stunning",
    category: "natural",
    homeImage: "images/home/file_000000009320720ab56dfc40246aadec~2.png",
    heroImage: "images/home/file_000000009320720ab56dfc40246aadec~2.png",
    products: [
      "FACE_PRIMER_025",
      "FOUNDATION_147",
      "CONCEALER_009",
      "BRONZER_001",
      "BLUSH_002",
      "HIGHLIGHTER_008",
      "EYEBROW_031",
      "MASCARA_047",
      "HIGHLIGHTER_013",
      "LIPSTICK_020",
      "EYEBROW_005",
      "SETTING_SPRAY_POWDER_005",
    ]
  },
  {
    id: 2,
    slug: "bronzed-summer-makeup-inspiration-for-golden-skin",
    title: "Bronzed Summer Makeup Inspiration for Golden Skin",
    category: "glam",
    homeImage: "images/home/file_000000006cd07246a54f8b4967d3bb9b~2.png",
    heroImage: "images/home/file_000000006cd07246a54f8b4967d3bb9b~2.png",
    products: [
      "LIP_LINER_022",
      "MASCARA_107",
      "FACE_PRIMER_017",
      "FOUNDATION_019",
      "LIPSTICK_050",
      "CONTOUR_024",
      "CONCEALER_011",
      "EYEBROW_011",
      "HIGHLIGHTER_079",
      "BRONZER_004",
      "EYESHADOW_011",
      "LIP_OIL_052",
      "SETTING_SPRAY_POWDER_038",
    ]
  },
  {
    id: 3,
    slug: "clean-girl-makeup-glow-up",
    title: "Clean Girl Makeup Glow Up",
    category: "glam",
    homeImage: "images/home/file_0000000040507243af48b20c5c53436c~2.png",
    heroImage: "images/home/file_0000000040507243af48b20c5c53436c~2.png",
    products: [
      "SETTING_SPRAY_POWDER_001",
      "SETTING_SPRAY_POWDER_037",
      "FOUNDATION_011",
      "EYEBROW_008",
      "SETTING_SPRAY_POWDER_063",
      "EYESHADOW_059",
      "BLUSH_057",
      "EYESHADOW_029",
      "EYEBROW_044",
      "LIP_LINER_015",
      "LIP_OIL_052",
      "FACE_PRIMER_021",
      "MASCARA_047",
      "MASCARA_078",
    ]
  },
  {
    id: 17,
    slug: "face-enhancing-makeup-that-makes-everything-look-better",
    title: "Face Enhancing Makeup That Makes Everything Look Better",
    category: "glam",
    homeImage: "images/home/file_00000000c440724692779783117fa245~2.png",
    heroImage: "images/home/file_00000000c440724692779783117fa245~2.png",
    products: [
      "FACE_PRIMER_004",
      "FOUNDATION_011",
      "CONCEALER_001",
      "BLUSH_002",
      "CONTOUR_002",
      "HIGHLIGHTER_003",
      "EYEBROW_012",
      "EYESHADOW_009",
      "LIP_LINER_013",
      "LIP_GLOSS_003",
      "EYEBROW_014",
      "MASCARA_145",
      "SETTING_SPRAY_POWDER_037",
      "LIP_BALM_091",
    ]
  },
  {
    id: 19,
    slug: "the-makeup-look-that-gives-an-effortlessly-polished-face",
    title: "The Makeup Look That Gives an Effortlessly Polished Face",
    category: "glam",
    homeImage: "images/home/file_0000000001f47246aa1273777a4c36f8~2.png",
    heroImage: "images/home/file_0000000001f47246aa1273777a4c36f8~2.png",
    products: [
      "FACE_PRIMER_017",
      "SETTING_SPRAY_POWDER_008",
      "CONCEALER_018",
      "CONCEALER_002",
      "EYEBROW_028",
      "SETTING_SPRAY_POWDER_081",
      "BLUSH_058",
      "MASCARA_011",
      "LIP_LINER_013",
      "LIP_GLOSS_035",
      "HIGHLIGHTER_029",
      "HIGHLIGHTER_013",
      "LIP_BALM_091",
    ]
  },
  {
    id: 4,
    slug: "dewy-makeup-inspiration-that-makes-skin-look-so-smooth",
    title: "Dewy Makeup Inspiration That Makes Skin Look So Smooth",
    category: "natural",
    homeImage: "images/home/file_000000008bd8724393479e6986690946~2.png",
    heroImage: "images/home/file_000000008bd8724393479e6986690946~2.png",
    products: [
      "HIGHLIGHTER_068",
      "FOUNDATION_115",
      "CONCEALER_013",
      "BLUSH_076",
      "BRONZER_032",
      "HIGHLIGHTER_073",
      "EYEBROW_051",
      "EYEBROW_051",
      "EYESHADOW_009",
      "MASCARA_048",
      "LIP_LINER_005",
      "LIP_GLOSS_068",
      "SETTING_SPRAY_POWDER_108",
      "LIP_BALM_011",
    ]
  },
  {
    id: 5,
    slug: "fresh-glowy-makeup-for-the-prettiest-everyday-finish",
    title: "Fresh Glowy Makeup for the Prettiest Everyday Finish",
    category: "natural",
    homeImage: "images/home/file_0000000011e87243b86ac2410c807c7b~2.png",
    heroImage: "images/home/file_0000000011e87243b86ac2410c807c7b~2.png",
    products: [
      "FACE_PRIMER_017",
      "FOUNDATION_006",
      "CONCEALER_002",
      "BLUSH_009",
      "BRONZER_032",
      "HIGHLIGHTER_003",
      "EYEBROW_012",
      "EYEBROW_021",
      "EYESHADOW_PALETTE_058",
      "MASCARA_011",
      "LIP_LINER_013",
      "LIP_GLOSS_035",
      "SETTING_SPRAY_POWDER_008",
      "LIP_GLOSS_036",
    ]
  },
  {
    id: 6,
    slug: "neutral-glam-makeup-that-instantly-elevates-your-features",
    title: "Neutral Glam Makeup That Instantly Elevates Your Features",
    category: "glam",
    homeImage: "images/home/file_000000008934720abb1de08cdabb8573~2.png",
    heroImage: "images/home/file_000000008934720abb1de08cdabb8573~2.png",
    products: [
      "FACE_PRIMER_017",
      "FOUNDATION_016",
      "CONCEALER_013",
      "BLUSH_024",
      "BRONZER_018",
      "HIGHLIGHTER_039",
      "EYEBROW_066",
      "EYESHADOW_008",
      "MASCARA_077",
      "LIP_LINER_025",
      "SETTING_SPRAY_POWDER_108",
      "HIGHLIGHTER_013",
    ]
  },
  {
    id: 8,
    slug: "perfect-lip-combo-for-girls-who-wants-long-lasting-makeup",
    title: "Perfect Lip Combo for Girls Who Wants Long-Lasting Makeup",
    category: "glam",
    homeImage: "images/home/file_000000003af8720a8100cabf80076160~2.png",
    heroImage: "images/home/file_000000003af8720a8100cabf80076160~2.png",
    products: [
      "LIPSTICK_027",
      "LIP_GLOSS_096",
    ]
  },
  {
    id: 9,
    slug: "soft-glam-makeup-look-that-never-fails-on-pinterest",
    title: "Soft Glam Makeup Look That Never Fails on Pinterest",
    category: "glam",
    homeImage: "images/home/file_000000003fbc71f49db18d3a394aac2e~2.png",
    heroImage: "images/home/file_000000003fbc71f49db18d3a394aac2e~2.png",
    products: [
      "FACE_PRIMER_080",
      "FOUNDATION_072",
      "CONCEALER_004",
      "BLUSH_053",
      "CONTOUR_003",
      "HIGHLIGHTER_023",
      "MASCARA_152",
      "LIPSTICK_063",
      "LIP_OIL_015",
      "LIP_OIL_003",
    ]
  },
  {
    id: 10,
    slug: "pretty-natural-makeup-look-that-instantly-elevates-your-face",
    title: "Pretty Natural Makeup Look That Instantly Elevates Your Face",
    category: "natural",
    homeImage: "images/home/file_00000000f28471f48add86e2807ab42f~2.png",
    heroImage: "images/home/file_00000000f28471f48add86e2807ab42f~2.png",
    products: [
      "FACE_PRIMER_048",
      "FOUNDATION_058",
      "CONCEALER_014",
      "BLUSH_011",
      "BRONZER_010",
      "HIGHLIGHTER_029",
      "MASCARA_001",
      "LIPSTICK_042",
      "LIP_GLOSS_011",
      "LIPSTICK_037",
    ]
  },
  {
    id: 11,
    slug: "high-end-makeup-look-that-gives-luxury-model-vibes",
    title: "High End Makeup Look That Gives Luxury Model Vibes",
    category: "natural",
    homeImage: "images/home/file_000000002eac724684ea35e5bc8b4698~2.png",
    heroImage: "images/home/file_000000002eac724684ea35e5bc8b4698~2.png",
    products: [
      "FOUNDATION_145",
      "CONCEALER_002",
      "BRONZER_004",
      "BLUSH_050",
      "HIGHLIGHTER_003",
      "EYEBROW_080",
      "MASCARA_021",
      "LIP_LINER_013",
      "LIP_GLOSS_008",
      "SETTING_SPRAY_POWDER_108",
      "LIPSTICK_037",
    ]
  },
  {
    id: 12,
    slug: "toasty-makeup-look-for-a-soft-glam-beauty-vibe",
    title: "Toasty Makeup Look for a Soft Glam Beauty Vibe",
    category: "glam",
    homeImage: "images/home/file_00000000e8a07243a881b8da7ad269c9~2.png",
    heroImage: "images/home/file_00000000e8a07243a881b8da7ad269c9~2.png",
    products: [
      "FACE_PRIMER_017",
      "FOUNDATION_019",
      "CONCEALER_007",
      "BLUSH_009",
      "BRONZER_018",
      "HIGHLIGHTER_009",
      "EYEBROW_067",
      "MASCARA_023",
      "LIP_LINER_003",
      "LIP_GLOSS_035",
      "LIP_GLOSS_083",
    ]
  },
  {
    id: 13,
    slug: "simple-glam-makeup-ideas-for-a-chic-and-polished-look",
    title: "Simple Glam Makeup Ideas For a chic and polished look",
    category: "natural",
    homeImage: "images/home/file_00000000b7907246aa2fcab289b98d0a~2.png",
    heroImage: "images/home/file_00000000b7907246aa2fcab289b98d0a~2.png",
    products: [
      "EYESHADOW_079",
      "MASCARA_008",
      "SETTING_SPRAY_POWDER_102",
      "FOUNDATION_071",
      "BLUSH_008",
      "LIP_LINER_014",
      "LIPSTICK_032",
      "CONCEALER_050",
      "HIGHLIGHTER_028",
      "LIP_BALM_091",
    ]
  },
  {
    id: 14,
    slug: "face-card-makeup-routine-for-a-flawless-glowy-finish",
    title: "Face Card Makeup Routine for a Flawless Glowy Finish",
    category: "natural",
    homeImage: "images/home/file_000000008c707243a1c886de8ba850ed.png",
    heroImage: "images/home/file_000000008c707243a1c886de8ba850ed.png",
    products: [
      "FOUNDATION_015",
      "CONCEALER_014",
      "BLUSH_008",
      "CONTOUR_013",
      "HIGHLIGHTER_005",
      "EYEBROW_080",
      "MASCARA_008",
      "LIP_LINER_025",
      "LIP_GLOSS_013",
      "LIP_BALM_091",
    ]
  },
  {
    id: 15,
    slug: "this-clean-makeup-look-is-giving-rich-girl-beauty",
    title: "This Clean Makeup Look Is Giving Rich Girl Beauty",
    category: "glam",
    homeImage: "images/home/file_000000007be87243b96cc3015495cd6a~2.png",
    heroImage: "images/home/file_000000007be87243b96cc3015495cd6a~2.png",
    products: [
      "FACE_PRIMER_002",
      "FOUNDATION_006",
      "UNDER_EYE_CONCEALER_008",
      "CHEEK_PALETTES_019",
      "BRONZER_032",
      "HIGHLIGHTER_032",
      "EYEBROW_022",
      "EYEBROW_007",
      "EYESHADOW_022",
      "EYESHADOW_063",
      "MASCARA_097",
      "LIP_LINER_018",
      "LIP_GLOSS_144",
      "FACE_PRIMER_020",
    ]
  },
  {
    id: 16,
    slug: "soft-glam-full-face-makeup-that-looks-expensive",
    title: "Soft Glam Full Face Makeup That Looks Expensive",
    category: "glam",
    homeImage: "images/home/file_0000000022a871f4977fc6c20f3b021d~2.png",
    heroImage: "images/home/file_0000000022a871f4977fc6c20f3b021d~2.png",
    products: [
      "MASCARA_011",
      "CONCEALER_002",
      "BLUSH_057",
      "FOUNDATION_011",
      "SETTING_SPRAY_POWDER_108",
      "EYEBROW_012",
      "BRONZER_018",
      "HIGHLIGHTER_003",
      "LIP_LINER_013",
      "FACE_PRIMER_004",
      "LIP_BALM_091",
    ]
  },
  {
    id: 18,
    slug: "soft-girl-makeup-natural-glow-that-attracts",
    title: "Soft Girl Makeup Natural Glow That Attracts",
    category: "glam",
    homeImage: "images/home/file_00000000d2bc72439f46b45472ac8b30~2.png",
    heroImage: "images/home/file_00000000d2bc72439f46b45472ac8b30~2.png",
    products: [
      "FACE_PRIMER_004",
      "FOUNDATION_019",
      "CONCEALER_007",
      "BLUSH_009",
      "HIGHLIGHTER_009",
      "EYEBROW_012",
      "MASCARA_023",
      "LIP_LINER_003",
      "LIP_GLOSS_035",
      "SETTING_SPRAY_POWDER_063",
    ]
  },
  {
    id: 20,
    slug: "bronzed-summer-natural-glowy-makeup-inspo",
    title: "Bronzed Summer Natural Glowy Makeup Inspo",
    category: "natural",
    homeImage: "images/home/file_0000000029107246b834053eedd7c6f1~3.png",
    heroImage: "images/home/file_0000000029107246b834053eedd7c6f1~3.png",
    products: [
      "HIGHLIGHTER_068",
      "FOUNDATION_016",
      "CONCEALER_018",
      "BLUSH_009",
      "BRONZER_032",
      "HIGHLIGHTER_075",
      "EYEBROW_051",
      "MASCARA_007",
      "LIP_LINER_025",
      "LIP_GLOSS_052",
      "LIP_GLOSS_035",
    ]
  },{
    id: 21,
    slug: "soft-sculpted-makeup-that-flatters-the-whole-face",
    title: "Soft Sculpted Makeup That Flatters the Whole Face",
    category: "natural",
    homeImage: "images/home/file_0000000014a471f48762fd29dd6c4c01.png",
    heroImage: "images/home/file_0000000014a471f48762fd29dd6c4c01.png",
    products: [
      "FACE_PRIMER_017",
      "FOUNDATION_078",
      "UNDER_EYE_CONCEALER_008",
      "BLUSH_009",
      "BRONZER_001",
      "HIGHLIGHTER_075",
      "EYEBROW_033",
      "EYEBROW_011",
      "EYESHADOW_079",
      "MASCARA_011",
      "LIP_LINER_003",
      "LIP_GLOSS_035",
      "SETTING_SPRAY_POWDER_059",
      "HIGHLIGHTER_013",
    ]
  },
  {
    id: 22,
    slug: "the-makeup-look-that-gives-effortless-model",
    title: "The Makeup Look That Gives Effortless Model Energy",
    category: "smokey",
    homeImage: "images/home/file_000000001ec4724692960dff46d77ea3~2.png",
    heroImage: "images/home/file_000000001ec4724692960dff46d77ea3~2.png",
    products: [
      "FACE_PRIMER_048",
      "FOUNDATION_006",
      "UNDER_EYE_CONCEALER_008",
      "BLUSH_032",
      "BRONZER_001",
      "HIGHLIGHTER_009",
      "EYEBROW_028",
      "MASCARA_004",
      "LIP_LINER_027",
      "LIP_GLOSS_013",
      "LIP_GLOSS_005",
    ]
  },
  {
    id: 23,
    slug: "a-feminine-full-face-makeup-look-that-feels-so-soft-and-chic",
    title: "A Feminine Full face Makeup Look That Feels So Soft and Chic",
    category: "glam",
    homeImage: "images/home/file_0000000083587243b0e2871e907bcee2~3.png",
    heroImage: "images/home/file_0000000083587243b0e2871e907bcee2~3.png",
    products: [
      "FOUNDATION_015",
      "CONCEALER_004",
      "BLUSH_008",
      "BRONZER_004",
      "HIGHLIGHTER_003",
      "SETTING_SPRAY_POWDER_001",
      "EYEBROW_080",
      "EYESHADOW_079",
      "MASCARA_001",
      "LIP_LINER_003",
      "LIPSTICK_001",
      "LIP_BALM_091",
    ]
  },
{
    id: 25,
    slug: "minimal-glam-makeup-with-maximum-pretty-effect",
    title: "Minimal Glam Makeup With Maximum Pretty Effect",
    category: "natural",
    homeImage: "images/home/file_00000000e8e8724698f7fc3651e77214~2.png",
    heroImage: "images/home/file_00000000e8e8724698f7fc3651e77214~2.png",
    products: [
      "FACE_PRIMER_046",
      "FOUNDATION_041",
      "CONCEALER_015",
      "BLUSH_053",
      "CONTOUR_003",
      "HIGHLIGHTER_057",
      "EYEBROW_055",
      "MASCARA_005",
      "LIP_LINER_014",
      "LIP_GLOSS_008",
      "LIP_OIL_050",
    ]
  },
  {
    id: 26,
    slug: "soft-glow-makeup-that-looks-pretty-without-trying-too-hard",
    title: "Soft Glow Makeup That Looks Pretty Without Trying Too Hard",
    category: "natural",
    homeImage: "images/home/file_00000000b32071f4951f7b414e66cefb~2.png",
    heroImage: "images/home/file_00000000b32071f4951f7b414e66cefb~2.png",
    products: [
      "FACE_PRIMER_010",
      "FOUNDATION_001",
      "CONCEALER_011",
      "BLUSH_003",
      "HIGHLIGHTER_010",
      "MASCARA_009",
      "EYEBROW_029",
      "EYEBROW_010",
      "SETTING_SPRAY_POWDER_038",
      "LIP_GLOSS_035",
      "LIP_OIL_012",
    ]
  },
  {
    id: 27,
    slug: "soft-summer-face-goals",
    title: "Soft summer face goals",
    category: "natural",
    homeImage: "images/home/file_00000000d58c720aad99eb01a1c58cb3~2.png",
    heroImage: "images/home/file_00000000d58c720aad99eb01a1c58cb3~2.png",
    products: []
  },
  {
    id: 28,
    slug: "natural-makeup-look-glowing-skin",
    title: "Natural makeup look glowing skin",
    category: "natural",
    homeImage: "images/home/file_00000000d0e07243a0fef5f654eb7d9b~2.png",
    heroImage: "images/home/file_00000000d0e07243a0fef5f654eb7d9b~2.png",
    products: []
  },
  {
    id: 29,
    slug: "obsessed-with-this-glossy-makeup-look",
    title: "Obsessed with this glossy makeup look",
    category: "natural",
    homeImage: "images/home/file_00000000f9cc7246aff5aee19941825b~2.png",
    heroImage: "images/home/file_00000000f9cc7246aff5aee19941825b~2.png",
    products: []
  },
  {
    id: 30,
    slug: "clean-girl-aesthetic-makeup",
    title: "Clean girl aesthetic makeup",
    category: "clean girl",
    homeImage: "images/home/file_000000007e9c7243907bca61532d320b~2.png",
    heroImage: "images/home/file_000000007e9c7243907bca61532d320b~2.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_005",
    "CONCEALER_003",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_002",
    "BRONZER_018",
    "BLUSH_002",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_001",
    "MASCARA_047",
    "EYEBROW_014",
    "LIP_LINER_002",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_019"
  ]
  },
  {
    id: 31,
    slug: "viral-makeup-look-2026",
    title: "Viral Makeup Look 2026 ",
    category: "natural",
    homeImage: "images/home/file_00000000259072468be1f4ed790c2868~2.png",
    heroImage: "images/home/file_00000000259072468be1f4ed790c2868~2.png"
  },
  {
    id: 32,
    slug: "pretty-natural-makeup-ideas-for-everyday-beauty",
    title: "Pretty Natural Makeup Ideas for Everyday Beauty",
    category: "natural",
    homeImage: "images/home/file_000000007104720a968f49ab2b5653a4~2.png",
    heroImage: "images/home/file_000000007104720a968f49ab2b5653a4~2.png",
  },
  {
    id: 33,
    slug: "subtle-glam-inspiration-for-a-soft-feminine-makeup-look",
    title: "Subtle Glam Inspiration for a Soft Feminine Makeup Look",
    category: "natural",
    homeImage: "images/home/file_0000000090dc7246a4c71ddd62e848e7~2.png",
    heroImage: "images/home/file_0000000090dc7246a4c71ddd62e848e7~2.png",
    products: [
    "TINTED_MOISTURIZER_004",
    "CONCEALER_013",
    "CONTOUR_044",
    "BRONZER_020",
    "BLUSH_014",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_GLOSS_002",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
  {
    id: 34,
    slug: "neutral-makeup-look-idea-that-flatters-every-face",
    title: "Neutral Makeup Look Idea That Flatters Every Face",
    category: "clean girl",
    homeImage: "images/home/file_00000000e6f4720a86c85843d2525682~2.png",
    heroImage: "images/home/file_00000000e6f4720a86c85843d2525682~2.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_005",
    "CONCEALER_003",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_002",
    "BRONZER_018",
    "BLUSH_002",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_001",
    "MASCARA_047",
    "EYEBROW_014",
    "LIP_LINER_002",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_019"
  ]
  },
  {
    id: 35,
    slug: "bronzed-skin-makeup-inspiration-for-a-natural-luminous-makeup-look",
    title: "Bronzed Skin Makeup Inspiration for a natural luminous makeup look",
    category: "natural",
    homeImage: "images/home/file_000000001a6c7246abf44b0fdaae9e70~2.png",
    heroImage: "images/home/file_000000001a6c7246abf44b0fdaae9e70~2.png",
      products: [
    "FACE_PRIMER_030",
    "TINTED_MOISTURIZER_007",
    "CONCEALER_013",
    "CONTOUR_024",
    "BRONZER_016",
    "BLUSH_011",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_013",
    "MASCARA_020",
    "EYEBROW_005",
    "LIP_OIL_004",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
  {
    id: 36,
    slug: "dewy-skin-makeup-trend-that-makes-your-skin-look-unreal",
    title: "Dewy Skin Makeup Trend That Makes Your Skin Look Unreal",
    category: "natural",
    homeImage: "images/home/file_000000009aa0724390027931645b40c1~2.png",
    heroImage: "images/home/file_000000009aa0724390027931645b40c1~2.png",
    products: [
      "FACE_PRIMER_012",
      "FOUNDATION_041",
      "CONCEALER_004",
      "BLUSH_002",
      "BRONZER_004",
      "EYEBROW_004",
      "EYEBROW_014",
      "EYESHADOW_PALETTE_058",
      "MASCARA_021",
      "LIP_LINER_027",
      "LIP_GLOSS_006",
      "SETTING_SPRAY_POWDER_008",
      "LIP_OIL_007",
    ]
  },
  {
    id: 37,
    slug: "pretty-everyday-makeup-with-a-soft-glossy-finish",
    title: "Pretty Everyday Makeup With a Soft Glossy Finish",
    category: "natural",
    homeImage: "images/home/file_000000006f4472439b7fde27551a9da3~3.png",
    heroImage: "images/home/file_000000006f4472439b7fde27551a9da3~3.png",
    products: [
    "TINTED_MOISTURIZER_007",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_012",
    "BRONZER_020",
    "BLUSH_005",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_LINER_001",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
  {
    id: 38,
    slug: "bronzed-skin-makeup-look-for-a-sun-kissed-glow",
    title: "Bronzed Skin Makeup Look for a Sun Kissed Glow",
    category: "natural",
    homeImage: "images/home/file_00000000f4f07243a66ceead3a4fb5af~2.png",
    heroImage: "images/home/file_00000000f4f07243a66ceead3a4fb5af~2.png",
    products: [
      "HIGHLIGHTER_068",
      "FOUNDATION_016",
      "CONCEALER_018",
      "BLUSH_009",
      "BRONZER_032",
      "HIGHLIGHTER_075",
      "EYEBROW_051",
      "MASCARA_007",
      "LIP_LINER_025",
      "LIP_GLOSS_052",
      "LIP_GLOSS_035",
    ]
  },
  {
    id: 39,
    slug: "effortless-beauty-makeup-for-a-naturally-perfect-look",
    title: "Effortless Beauty Makeup for a Naturally Perfect Look",
    category: "natural",
    homeImage: "images/home/file_00000000b6f0724391ac2f00ec0e9501~2.png",
    heroImage: "images/home/file_00000000b6f0724391ac2f00ec0e9501~2.png"
  },
  {
    id: 40,
    slug: "natural-glowy-makeup-idea-for-a-pretty-feminine-look",
    title: "Natural Glowy Makeup Idea for a Pretty Feminine Look",
    category: "glam",
    homeImage: "images/home/file_00000000e6b87243b86f771d4b82ceb0~2.png",
    heroImage: "images/home/file_00000000e6b87243b86f771d4b82ceb0~2.png"
  },
  {
    id: 41,
    slug: "night-out-makeup-look-that-turns-heads-instantly",
    title: "Night Out Makeup Look That Turns Heads Instantly",
    category: "glam",
    homeImage: "images/home/file_00000000190071f49e23fb8e6df2d3f0~2.png",
    heroImage: "images/home/file_00000000190071f49e23fb8e6df2d3f0~2.png"
  },
  {
    id: 42,
    slug: "everyday-makeup-aesthetic-that-makes-you-look-so-put-together",
    title: "Everyday Makeup Aesthetic That Makes You Look So Put Together",
    category: "glam",
    homeImage: "images/home/file_000000008f9471f4b49a2a625b6997df~2.png",
    heroImage: "images/home/file_000000008f9471f4b49a2a625b6997df~2.png"
  },
  {
    id: 43,
    slug: "luxury-soft-glam-look-that-looks-rich-and-effortless",
    title: "Luxury Soft Glam Look That Looks Rich and Effortless",
    category: "glam",
    homeImage: "images/home/file_00000000ffec71f49d6795559e8be151~2.png",
    heroImage: "images/home/file_00000000ffec71f49d6795559e8be151~2.png",
    products: [
    "FACE_PRIMER_021",
    "FOUNDATION_005",
    "CONCEALER_003",
    "SETTING_SPRAY_POWDER_028",
    "CONTOUR_002",
    "BRONZER_018",
    "BLUSH_002",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_004",
    "MASCARA_047",
    "FALSE_LASHES_006",
    "EYEBROW_014",
    "LIP_LINER_002",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_019"
  ]
  },
  {
    id: 44,
    slug: "subtle-glam-makeup-that-looks-soft-but-so-stunning",
    title: "Subtle Glam Makeup That Looks Soft but So Stunning",
    category: "glam",
    homeImage: "images/home/file_00000000bc3471f4ae2b3996c949ba24~2.png",
    heroImage: "images/home/file_00000000bc3471f4ae2b3996c949ba24~2.png"
  },
  {
    id: 45,
    slug: "luxury-soft-glam-look-for-elegant-makeup-inspo",
    title: "Luxury Soft Glam Look for Elegant Makeup Inspo",
    category: "glam",
    homeImage: "images/home/file_00000000046c720a9f5f638e99d9a83f~2.png",
    heroImage: "images/home/file_00000000046c720a9f5f638e99d9a83f~2.png"
  },
  {
    id: 46,
    slug: "full-face-soft-glam-tutorial-step-by-step",
    title: "Full Face Soft Glam Tutorial Step by Step",
    category: "glam",
    homeImage: "images/home/file_00000000a20c7243a72f79cd4cd6cff5~2.png",
    heroImage: "images/home/file_00000000a20c7243a72f79cd4cd6cff5~2.png",
    products: [
    "FACE_PRIMER_004",
    "FOUNDATION_011",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_001",
    "CONTOUR_002",
    "BRONZER_005",
    "BLUSH_012",
    "HIGHLIGHTER_003",
    "EYESHADOW_PALETTE_012",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  {
    id: 47,
    slug: "viral-makeup-look-2026-with-flawless-base",
    title: "Viral Makeup Look 2026 with Flawless Base",
    category: "glam",
    homeImage: "images/home/file_00000000e1f071f48768b706fe3b7e73~2.png",
    heroImage: "images/home/file_00000000e1f071f48768b706fe3b7e73~2.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_OIL_005",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  {
    id: 48,
    slug: "clean-girl-makeup-glow-up-for-a-fresh-natural-look",
    title: "Clean Girl Makeup Glow Up for a Fresh Natural Look",
    category: "clean girl",
    homeImage: "images/home/file_0000000030f871f4ad10559b44894f2d~2.png",
    heroImage: "images/home/file_0000000030f871f4ad10559b44894f2d~2.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_003",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_014",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_011",
    "HIGHLIGHTER_006",
    "EYESHADOW_PALETTE_009",
    "MASCARA_004",
    "FALSE_LASHES_001",
    "EYEBROW_012",
    "LIP_LINER_013",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"]
  },
  {
    id: 49,
    slug: "full-face-soft-glam-tutorial-for-a-radiant-finish",
    title: "Full Face Soft Glam Tutorial for a Radiant Finish",
    category: "glam",
    homeImage: "images/home/file_000000009bb47243ae8c6f0987549e20.png",
    heroImage: "images/home/file_000000009bb47243ae8c6f0987549e20.png"
  },
  {
    id: 50,
    slug: "bridal-soft-glam-makeup-inspiration-with-glowy-skin",
    title: "Bridal Soft Glam Makeup Inspiration with glowy skin",
    category: "glam",
    homeImage: "images/home/file_000000005d1c71fdb519d44993b87c96~2.png",
    heroImage: "images/home/file_000000005d1c71fdb519d44993b87c96~2.png"
  },
  {
    id: 51,
    slug: "soft-glam-makeup-inspiration-for-everyday-beauty",
    title: "Soft Glam Makeup Inspiration for Everyday Beauty",
    category: "glam",
    homeImage: "images/home/file_00000000b35471fdbfc54d2132b501f0.png",
    heroImage: "images/home/file_00000000b35471fdbfc54d2132b501f0.png"
  },
  {
    id: 52,
    slug: "dewy-makeup-inspiration-for-glowing-healthy-skin",
    title: "Dewy Makeup Inspiration for Glowing Healthy Skin",
    category: "glam",
    homeImage: "images/home/file_000000009bb47243ae8c6f0987549e20.png",
    heroImage: "images/home/file_000000009bb47243ae8c6f0987549e20.png"
  },
  {
    id: 53,
    slug: "bronzed-makeup-look-that-gives-the-perfect-vacation-glow",
    title: "Bronzed Makeup Look That Gives the Perfect Vacation Glow",
    category: "glam",
    homeImage: "images/home/file_000000003fec71f48dd4afef666f67fd~2.png",
    heroImage: "images/home/file_000000003fec71f48dd4afef666f67fd~2.png"
  },
  {
    id: 54,
    slug: "a-feminine-makeup-look-that-feels-so-soft-and-chic",
    title: "A Feminine Makeup Look That Feels So Soft and Chic",
    category: "glam",
    homeImage: "images/home/file_000000009aa87243bb8c4d09679aa187~2.png",
    heroImage: "images/home/file_000000009aa87243bb8c4d09679aa187~2.png"
  },
  {
    id: 55,
    slug: "full-face-natural-soft-glam-for-a-beautifully-defined-face",
    title: "Full Face Natural Soft Glam for a Beautifully Defined Face",
    category: "glam",
    homeImage: "images/home/file_00000000aa3c724394c500e9d1916b4c~2.png",
    heroImage: "images/home/file_00000000aa3c724394c500e9d1916b4c~2.png"
  },
  {
    id: 56,
    slug: "your-next-favorite-makeup-look-for-soft-glam-perfection",
    title: "Your Next Favorite Makeup Look for Soft Glam Perfection",
    category: "glam",
    homeImage: "images/home/file_00000000aa3c724394c500e9d1916b4c~2.png",
    heroImage: "images/home/file_00000000aa3c724394c500e9d1916b4c~2.png"
  },
    {
    id: 57,
    slug: "neutral-tones-makeup-inspo",
    title: "Neutral Tones Makeup inspo",
    category: "glam",
    homeImage: "images/home/file_00000000afc4720aa16e6cfde6952fa3~2.png",
    heroImage: "images/home/file_00000000afc4720aa16e6cfde6952fa3~2.png",
      products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_002",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_016",
    "BRONZER_005",
    "BLUSH_033",
    "HIGHLIGHTER_009",
    "EYESHADOW_PALETTE_001",
    "EYESHADOW_009",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  {id: 58,
    slug: "subtle-glam-beauty-look-that-still-turns-heads",
    title: "Subtle Glam Beauty Look That Still Turns Heads",
    category: "glam",
    homeImage: "images/home/file_00000000c09c72468923513ecc66b427~2.png",
    heroImage: "images/home/file_00000000c09c72468923513ecc66b427~2.png",
   products: [
    "FACE_PRIMER_004",
    "FOUNDATION_011",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_001",
    "CONTOUR_002",
    "BRONZER_005",
    "BLUSH_033",
    "HIGHLIGHTER_003",
    "EYESHADOW_PALETTE_012",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  {
    id: 59,
    slug: "radiant-skin-makeup-for-a-soft-blam-beauty-vibe",
    title: "Radiant Skin Makeup for a Soft Glam Beauty Vibe",
    category: "glam",
    homeImage: "images/home/file_0000000034ec71f49ab86a8930db65c5~2.png",
    heroImage: "images/home/file_0000000034ec71f49ab86a8930db65c5~2.png"
  },
  {
    id: 60,
    slug: "the-makeup-look-that-gives-effortless-model-energy",
    title: "The Makeup Look That Gives Effortless Model Energy",
    category: "natural",
    homeImage: "images/home/file_0000000012b07243899812d26665a39c~2.png",
    heroImage: "images/home/file_0000000012b07243899812d26665a39c~2.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_003",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_014",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_011",
    "HIGHLIGHTER_006",
    "EYESHADOW_PALETTE_009",
    "MASCARA_004",
    "EYEBROW_012",
    "LIP_LINER_013",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  {
    id: 61,
    slug: "glow-first-makeup-that-makes-skin-look-healthy-and-bright",
    title: "Glow First Makeup That Makes Skin Look Healthy and Bright",
    category: "natural",
    homeImage: "images/home/file_00000000ae3c71f4af98c37816159fd6~2.png",
    heroImage: "images/home/file_00000000ae3c71f4af98c37816159fd6~2.png",
    products: [
      "FACE_PRIMER_002",
      "FOUNDATION_006",
      "CONCEALER_004",
      "BLUSH_009",
      "CONTOUR_010",
      "HIGHLIGHTER_009",
      "EYEBROW_033",
      "EYEBROW_055",
      "EYESHADOW_009",
      "MASCARA_007",
      "LIP_LINER_003",
      "LIP_GLOSS_052",
      "SETTING_SPRAY_POWDER_002",
      "LIP_STAIN_014",
    ]
  },
  {
    id: 62,
    slug: "modern-soft-makeup-with-the-prettiest-glowy-skin",
    title: "Modern Soft Makeup With the Prettiest Glowy Skin",
    category: "glam",
    homeImage: "images/home/file_000000004f407243811b5c4884170dd9~2.png",
    heroImage: "images/home/file_000000004f407243811b5c4884170dd9~2.png",
    products: [
      "FOUNDATION_145",
      "UNDER_EYE_CONCEALER_008",
      "BLUSH_050",
      "BRONZER_004",
      "BLUSH_080",
      "EYEBROW_004",
      "EYEBROW_014",
      "EYESHADOW_PALETTE_058",
      "MASCARA_021",
      "LIP_LINER_027",
      "LIP_GLOSS_006",
      "SETTING_SPRAY_POWDER_008",
      "FACE_PRIMER_012",
      "LIP_BALM_091",
    ]
  },
  {
    id: 65,
    slug: "the-fresh-glam-makeup-look-everyone-will-want-to-copy",
    title: "The Fresh glam makeup look everyone will want to copy",
    category: "natural",
    homeImage: "images/home/file_0000000085a4720aadad982bfa08624b~2.png",
    heroImage: "images/home/file_0000000085a4720aadad982bfa08624b~2.png",
    products: [
    "FACE_PRIMER_030",
    "FOUNDATION_016",
    "CONCEALER_013",
    "CONTOUR_024",
    "BRONZER_016",
    "BLUSH_011",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_013",
    "MASCARA_020",
    "EYEBROW_005",
    "LIP_OIL_004",
    "SETTING_SPRAY_POWDER_016"
  ]
  },

  {
    id: 66,
    slug: "Makeup-inspiration-perfect-for-a-luxe-beauty-board",
    title: "Makeup inspiration perfect for a luxe beauty board",
    category: "glam",
    homeImage: "images/home/file_00000000c2f072469bcf7123c88fad34~2.png",
    heroImage: "images/home/file_00000000c2f072469bcf7123c88fad34~2.png",
    products: [
    "FACE_PRIMER_026",
    "FOUNDATION_017",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_004",
    "CONTOUR_011",
    "BRONZER_004",
    "BLUSH_091",
    "HIGHLIGHTER_021",
    "EYESHADOW_PALETTE_004",
    "EYESHADOW_009",
    "FALSE_LASHES_014",
    "EYEBROW_012",
    "LIP_LINER_015",
    "LIP_GLOSS_005"
  ]
  },

  {
    id: 63,
    slug: "minimal-glam-makeup-with-maximum-pretty-effet",
    title: "Minimal glam Makeup with Maximum Pretty Effet",
    category: "natural",
    homeImage: "images/home/file_00000000b674720abf4fa532659130c5~2.png",
    heroImage: "images/home/file_00000000b674720abf4fa532659130c5~2.png",
    products: [
    "TINTED_MOISTURIZER_004",
    "CONCEALER_013",
    "CONTOUR_044",
    "BRONZER_020",
    "BLUSH_014",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_GLOSS_002",
    "SETTING_SPRAY_POWDER_016"
  ]
  },

  {
    id: 67,
    slug: "expensive-looking-makeup-for-a-rich-girl-vibe",
    title: "Expensive looking makeup for a rich girl vibe",
    category: "glam",
    homeImage: "images/home/file_0000000011147243b3986303f7dfa6df~2.png",
    heroImage: "images/home/file_0000000011147243b3986303f7dfa6df~2.png",
    products: [
    "FACE_PRIMER_026",
    "FOUNDATION_011",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_004",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_033",
    "HIGHLIGHTER_009",
    "EYESHADOW_PALETTE_009",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 68,
    slug: "luminous-makeup-look-for-a-soft-expensive-finish",
    title: "luminous makeup look for a Soft expensive finish",
    category: "glam",
    homeImage: "images/home/file_000000005978720a9a53a2c7223a79b4~2.png",
    heroImage: "images/home/file_000000005978720a9a53a2c7223a79b4~2.png",
    products: []
  },

  {
    id: 69,
    slug: "makeup-look-that-makes-the-face-look-so-fresh-and-lifted-",
    title: "Makeup look that makes the face look so fresh and lifted",
    category: "glam",
    homeImage: "images/home/file_0000000040f8724388d3027182045f61~2.png",
    heroImage: "images/home/file_0000000040f8724388d3027182045f61~2.png",
    products: []
  },

  {
    id: 70,
    slug: "natural-bronzed-beauty-for-a-glowy-feminine-look-",
    title: "natural bronzed beauty for a glowy feminine look",
    category: "natural",
    homeImage: "images/home/file_00000000d638724381fb8a5b6c5b3a6f~2.png",
    heroImage: "images/home/file_00000000d638724381fb8a5b6c5b3a6f~2.png",
    products: []
  },

  {
    id: 71,
    slug: "light-glam-makeup-that-feels-chic-and-never-too-much",
    title: "light glam makeup that feels chic and never too much",
    category: "natural",
    homeImage: "images/home/file_0000000004947246b5daf80d8f455718~2.png",
    heroImage: "images/home/file_0000000004947246b5daf80d8f455718~2.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_OIL_005",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 72,
    slug: "full-glam-face-makeup-with-a-flawless-finish-",
    title: "Full glam face makeup with a flawless finish",
    category: "glam",
    homeImage: "images/home/file_000000004250720a8bcc25f778972b9d~2.png",
    heroImage: "images/home/file_000000004250720a8bcc25f778972b9d~2.png",
    products: []
  },

  {
    id: 73,
    slug: "fresh-glowy-makeup-for-a-healthy-skin-effect",
    title: "fresh glowy makeup for a healthy skin effect",
    category: "natural",
    homeImage: "images/home/file_0000000028bc72469e4ae034f73a326a~2.png",
    heroImage: "images/home/file_0000000028bc72469e4ae034f73a326a~2.png",
    products: []
  },

  {
    id: 74,
    slug: "full-face-makeup-that-looks-smooth-and-expensive-",
    title: "Full face makeup that looks smooth and expensive",
    category: "glam",
    homeImage: "images/home/file_0000000028bc72469e4ae034f73a326a~2.png",
    heroImage: "images/home/file_0000000028bc72469e4ae034f73a326a~2.png",
    products: []
  },

  {
    id: 75,
    slug: "clean-pretty-makeup-for-everyday-perfection",
    title: "Clean pretty makeup for everyday perfection",
    category: "clean girl",
    homeImage: "images/home/file_0000000023bc7246b8b5dda3cb681c88~2.png",
    heroImage: "images/home/file_0000000023bc7246b8b5dda3cb681c88~2.png",
    products: []
  },

  {
    id: 76,
    slug: "warm-bronzed-beauty-with-a-soft-glam-finish-",
    title: "Warm bronzed beauty with a soft glam finish",
    category: "glam",
    homeImage: "images/home/file_00000000987c7246bbb4cba0ad7c8b57~2.png",
    heroImage: "images/home/file_00000000987c7246bbb4cba0ad7c8b57~2.png",
    products: []
  },

  {
    id: 77,
    slug: "sun-kiss-makeup-that-makes-you-look-radiant-",
    title: "Sun kiss makeup that makes you look radiant",
    category: "glam",
    homeImage: "images/home/file_00000000ab40720aa5744110979fa0c3~2.png",
    heroImage: "images/home/file_00000000ab40720aa5744110979fa0c3~2.png",
    products: []
  },

  {
    id: 78,
    slug: "luminous-makeup-for-a-naturally-pretty-face-",
    title: "Luminous makeup for a Naturally pretty face",
    category: "glam",
    homeImage: "images/home/file_0000000006dc71f48c6ee2df1a996afb~2.png",
    heroImage: "images/home/file_0000000006dc71f48c6ee2df1a996afb~2.png",
    products: [
    "FACE_PRIMER_012",
    "TINTED_MOISTURIZER_004",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_044",
    "BLUSH_014",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_OIL_015",
    "SETTING_SPRAY_POWDER_016"
  ]
  },

  {
    id: 79,
    slug: "luminous-makeup-for-a-natural-pretty-face-",
    title: "Luminous makeup for a Natural pretty face",
    category: "natural",
    homeImage: "images/home/file_000000007918720abb53408fe5551ee7~2.png",
    heroImage: "images/home/file_000000007918720abb53408fe5551ee7~2.png",
    products: []
  },

  {
    id: 80,
    slug: "full-face-makeup-routine-for-a-perfect-glam-look",
    title: "Full face makeup routine for a perfect glam look",
    category: "glam",
    homeImage: "images/home/file_000000002890720a90be095a63a7dec2~2.png",
    heroImage: "images/home/file_000000002890720a90be095a63a7dec2~2.png",
    products: []
  },

  {
    id: 81,
    slug: "sculpted-full-face-makeup-with-a-clean-finish-",
    title: "Sculpted full face makeup with a clean finish",
    category: "glam",
    homeImage: "images/home/file_0000000062107246a5d4edc5dde14e02~2.png",
    heroImage: "images/home/file_0000000062107246a5d4edc5dde14e02~2.png",
    products: []
  },

  {
    id: 82,
    slug: "expensive-looking-makeup-for-a-rich-girl-vibe-",
    title: "Expensive looking makeup for a rich girl vibe",
    category: "glam",
    homeImage: "images/home/file_0000000062107246a5d4edc5dde14e02~2.png",
    heroImage: "images/home/file_0000000011147243b3986303f7dfa6df~2.png",
    products: []
  },

  {
    id: 83,
    slug: "natural-makeup-that-looks-good-in-every-light-",
    title: "Natural makeup that looks good in every light",
    category: "clean girl",
    homeImage: "images/home/file_000000006b34720981d70fb6980a4db1~2.png",
    heroImage: "images/home/file_000000006b34720981d70fb6980a4db1~2.png",
    products: []
  },

  {
    id: 84,
    slug: "minimal-natural-makeup-that-enhances-everything-",
    title: "Minimal natural makeup that enhances everything",
    category: "natural",
    homeImage: "images/home/file_00000000e8707246be886a0102231063~2.png",
    heroImage: "images/home/file_00000000e8707246be886a0102231063~2.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_014",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "FALSE_LASHES_004",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 85,
    slug: "effortless-natural-makeup-for-a-clean-feminine-look",
    title: "Effortless Natural makeup for a clean feminine look",
    category: "natural",
    homeImage: "images/home/file_0000000040fc720985f08f879a262607.png",
    heroImage: "images/home/file_0000000040fc720985f08f879a262607.png",
    products: []
  },

  {
    id: 86,
    slug: "fresh-natural-makeup-that-still-looks-polished",
    title: "Fresh natural makeup that still looks polished",
    category: "natural",
    homeImage: "images/home/file_000000000270720a9f99235bb31497f1~2.png",
    heroImage: "images/home/file_000000000270720a9f99235bb31497f1~2.png",
    products: []
  },

  {
    id: 87,
    slug: "natural-glam-makeup-with-a-smooth-skin-finish-",
    title: "Natural glam makeup with a smooth skin finish",
    category: "natural",
    homeImage: "images/home/file_000000000d8472468f61aa64f63ec39c~2.png",
    heroImage: "images/home/file_000000000d8472468f61aa64f63ec39c~2.png",
    products: []
  },

  {
    id: 88,
    slug: "full-face-beauty-look-that-turns-heads-",
    title: "Full face beauty look that turns heads",
    category: "glam",
    homeImage: "images/home/file_0000000057c4720abbecc3a5828b0e09~2.png",
    heroImage: "images/home/file_0000000057c4720abbecc3a5828b0e09~2.png",
    products: []
  },

  {
    id: 89,
    slug: "soft-glam-look-with-the-perfect-balance-of-glow-",
    title: "Soft Glam look with the perfect balance of glow",
    category: "glam",
    homeImage: "images/home/file_00000000d178720a94b57839fa5a76f2~2.png",
    heroImage: "images/home/file_00000000d178720a94b57839fa5a76f2~2.png",
    products: []
  },

  {
    id: 90,
    slug: "full-face-makeup-inspiration-for-a-face-card-look-",
    title: "Full face makeup inspiration for a face card look",
    category: "glam",
    homeImage: "images/home/file_0000000084c07243b9fbbe536ddcc88f~2.png",
    heroImage: "images/home/file_0000000084c07243b9fbbe536ddcc88f~2.png",
    products: []
  },

  {
    id: 91,
    slug: "luxury-soft-glam-for-an-expensive-looking-finish",
    title: "luxury soft glam for an expensive looking finish",
    category: "glam",
    homeImage: "images/home/file_0000000084c07243b9fbbe536ddcc88f~2.png",
    heroImage: "images/home/file_0000000084c07243b9fbbe536ddcc88f~2.png",
    products: []
  },

  {
    id: 92,
    slug: "rich-girl-makeup-with-a-clean-polished-glow-",
    title: "Rich girl makeup with a clean polished glow",
    category: "natural",
    homeImage: "images/home/file_000000001720720a89a3dbaeba4f49b5.png",
    heroImage: "images/home/file_000000001720720a89a3dbaeba4f49b5.png",
    products: [
    "FACE_PRIMER_026",
    "FOUNDATION_011",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_004",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_033",
    "HIGHLIGHTER_009",
    "EYESHADOW_PALETTE_009",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 93,
    slug: "soft-minimal-makeup-with-a-beautiful-skin-finish-",
    title: "Soft minimal makeup with a beautiful skin finish",
    category: "natural",
    homeImage: "images/home/file_0000000045b87243a656266dbba954a9~2.png",
    heroImage: "images/home/file_0000000045b87243a656266dbba954a9~2.png",
    products: [
    "TINTED_MOISTURIZER_004",
    "CONCEALER_013",
    "CONTOUR_044",
    "BRONZER_020",
    "BLUSH_014",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "FALSE_LASHES_001",
    "EYEBROW_005",
    "LIP_GLOSS_002",
    "SETTING_SPRAY_POWDER_016"
  ]
  },

  {
    id: 94,
    slug: "luxe-makeup-inspiration-for-a-smooth-elegant-face-",
    title: "Luxe makeup inspiration for a smooth elegant face",
    category: "glam",
    homeImage: "images/home/file_000000006f5c7246979d2cebf93b7333.png",
    heroImage: "images/home/file_000000006f5c7246979d2cebf93b7333.png",
    products: [
    "FACE_PRIMER_021",
    "FOUNDATION_017",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_028",
    "CONTOUR_011",
    "BRONZER_018",
    "BLUSH_002",
    "HIGHLIGHTER_021",
    "EYESHADOW_PALETTE_004",
    "EYESHADOW_009",
    "MASCARA_047",
    "FALSE_LASHES_014",
    "EYEBROW_012",
    "LIP_LINER_015",
    "LIP_GLOSS_005",
    "SETTING_SPRAY_POWDER_019"
  ]
  },

  {
    id: 95,
    slug: "date-night-glam-with-the-prettiest-skin-finish-",
    title: "Date night glam with the prettiest skin finish",
    category: "glam",
    homeImage: "images/home/file_000000009f1c720a874e5400250cbe40.png",
    heroImage: "images/home/file_000000009f1c720a874e5400250cbe40.png",
    products: []
  },
  
  {
    id: 96,
    slug: "sun-glow-makeup-with-a-bronzed-feminine-vibe",
    title: "Sun Glow Makeup with a Bronzed Feminine Vibe",
    category: "smokey",
    homeImage: "images/home/file_0000000096947246b474db9de4c21d39.png",
    heroImage: "images/home/file_0000000096947246b474db9de4c21d39.png",
    products: [
    "FACE_PRIMER_004",
    "FOUNDATION_011",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_001",
    "CONTOUR_002",
    "BRONZER_005",
    "BLUSH_012",
    "HIGHLIGHTER_003",
    "EYESHADOW_PALETTE_012",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 97,
    slug: "dark-feminine-makeup-that-looks-powerful-and-chic",
    title: "Dark Feminine Makeup That Looks Powerful and Chic",
    category: "smokey",
    homeImage: "images/home/file_0000000096f47246b75b7cd1f6ed3ac4~2.png",
    heroImage: "images/home/file_0000000096f47246b75b7cd1f6ed3ac4~2.png",
    products: [
    "FACE_PRIMER_021",
    "FOUNDATION_017",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_028",
    "CONTOUR_011",
    "BRONZER_018",
    "BLUSH_091",
    "HIGHLIGHTER_021",
    "EYESHADOW_PALETTE_004",
    "EYESHADOW_009",
    "MASCARA_047",
    "FALSE_LASHES_014",
    "EYEBROW_012",
    "LIP_LINER_015",
    "SETTING_SPRAY_POWDER_019"
  ]
  },

  {
    id: 98,
    slug: "brown-smokey-glam-for-a-warm-pretty-look",
    title: "Brown Smokey Glam for a Warm Pretty Look",
    category: "smokey",
    homeImage: "images/home/file_000000003ef87246a388240431ad11f8.png",
    heroImage: "images/home/file_000000003ef87246a388240431ad11f8.png",
    products: []
  },

  {
    id: 99,
    slug: "classic-smokey-eye-with-a-glamorous-touch",
    title: "Classic Smokey Eye with a Glamorous Touch",
    category: "smokey",
    homeImage: "images/home/file_00000000e174720a9c3acaedafb379e4.png",
    heroImage: "images/home/file_00000000e174720a9c3acaedafb379e4.png",
    products: []
  },

  {
    id: 100,
    slug: "femme-fatale-makeup-look-with-defined-eyes",
    title: "Femme Fatale Makeup Look with Defined Eyes",
    category: "smokey",
    homeImage: "images/home/file_00000000a9ec722f9fb9e3d61ba65a89~2.png",
    heroImage: "images/home/file_00000000a9ec722f9fb9e3d61ba65a89~2.png",
    products: []
  },

  {
    id: 101,
    slug: "soft-smokey-eye-makeup-with-a-glam-skin-finish",
    title: "Soft Smokey Eye Makeup with a Glam Skin Finish",
    category: "smokey",
    homeImage: "images/home/file_00000000b02471f4abf1d53289f3d0b1.png",
    heroImage: "images/home/file_00000000b02471f4abf1d53289f3d0b1.png",
    products: []
  },

  {
    id: 102,
    slug: "night-out-makeup-tutorial-with-smokey-eyes",
    title: "Night Out Makeup Tutorial with Smokey Eyes",
    category: "smokey",
    homeImage: "images/home/file_00000000da80724683e280c39ae2da65.png",
    heroImage: "images/home/file_00000000da80724683e280c39ae2da65.png",
    products: []
  },

  {
    id: 103,
    slug: "dark-feminine-makeup-tutorial-",
    title: "Dark Feminine Makeup Tutorial",
    category: "smokey",
    homeImage: "images/home/file_00000000b7547243a69ae19e0988f56c.png",
    heroImage: "images/home/file_00000000b7547243a69ae19e0988f56c.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_005",
    "CONCEALER_003",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_002",
    "BRONZER_018",
    "BLUSH_011",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_004",
    "MASCARA_047",
    "FALSE_LASHES_006",
    "EYEBROW_014",
    "LIP_LINER_002",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_019"
  ]
  },

  {
    id: 104,
    slug: "frosted-makeup-look-with-cool-blue-eyeshadow",
    title: "Frosted Makeup Look with Cool Blue Eyeshadow",
    category: "smokey",
    homeImage: "images/home/file_00000000de44720aaee149c62d23b846.png",
    heroImage: "images/home/file_00000000de44720aaee149c62d23b846.png",
    products: []
  },

  {
    id: 105,
    slug: "radiant-makeup-look-for-a-fresh-luminous-face",
    title: "Radiant Makeup Look for a Fresh Luminous Face",
    category: "natural",
    homeImage: "images/home/file_00000000055c7243994e7e7143093f7a.png",
    heroImage: "images/home/file_00000000055c7243994e7e7143093f7a.png",
    products: []
  },

  {
    id: 106,
    slug: "party-glam-makeup-that-feels-feminine-and-chic",
    title: "Party Glam Makeup That Feels Feminine and Chic",
    category: "glam",
    homeImage: "images/home/file_000000008ac8720aa6a520245bac3d90.png",
    heroImage: "images/home/file_000000008ac8720aa6a520245bac3d90.png",
    products: [
      "HIGHLIGHTER_068",
      "FOUNDATION_033",
      "BLUSH_005",
      "BRONZER_032",
      "HIGHLIGHTER_023",
      "EYEBROW_033",
      "MASCARA_049",
      "LIP_LINER_025",
      "LIP_OIL_015",
      "LIP_BALM_091",
    ]
  },

  {
    id: 107,
    slug: "timeless-soft-glam-makeup-you-will-want-to-copy",
    title: "Timeless Soft Glam Makeup You Will Want to Copy",
    category: "glam",
    homeImage: "images/home/file_00000000bff0724695f265c24f418c08.png",
    heroImage: "images/home/file_00000000bff0724695f265c24f418c08.png",
    products: []
  },

  {
    id: 108,
    slug: "luminous-soft-makeup-that-makes-skin-look-so-good",
    title: "Luminous Soft Makeup That Makes Skin Look So Good",
    category: "natural",
    homeImage: "images/home/file_00000000bf0c7243bce500fb6553cb26.png",
    heroImage: "images/home/file_00000000bf0c7243bce500fb6553cb26.png",
    products: []
  },

  {
    id: 109,
    slug: "everyday-makeup-routine-for-a-fresh-face",
    title: "Everyday Makeup Routine for a Fresh Face",
    category: "natural",
    homeImage: "images/home/file_00000000fe38724696c9529ca99bbd08.png",
    heroImage: "images/home/file_00000000fe38724696c9529ca99bbd08.png",
    products: []
  },

  {
    id: 110,
    slug: "natural-makeup-tutorial-for-beginners",
    title: "Natural Makeup Tutorial for Beginners",
    category: "natural",
    homeImage: "images/home/file_000000009ccc7243ac684117ca226e3d.png",
    heroImage: "images/home/file_000000009ccc7243ac684117ca226e3d.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 111,
    slug: "soft-glam-makeup-tutorial-step-by-step",
    title: "Soft Glam Makeup Tutorial Step by Step",
    category: "glam",
    homeImage: "images/home/file_0000000051d071f48389314579b353c3.png",
    heroImage: "images/home/file_0000000051d071f48389314579b353c3.png",
    products: []
  },

  {
    id: 112,
    slug: "makeup-for-brown-eyes-with-neutral-eyeshadow",
    title: "Makeup for Brown Eyes with Neutral Eyeshadow",
    category: "glam",
    homeImage: "images/home/file_0000000011f472469c7b0bfecb2c1dff.png",
    heroImage: "images/home/file_0000000011f472469c7b0bfecb2c1dff.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_014",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "FALSE_LASHES_004",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 113,
    slug: "makeup-for-blue-eyes-with-warm-tones",
    title: "Makeup for Blue Eyes with Warm Tones",
    category: "glam",
    homeImage: "images/home/file_000000003f547246849c4e733670d962.png",
    heroImage: "images/home/file_000000003f547246849c4e733670d962.png",
    products: [
    "FACE_PRIMER_021",
    "FOUNDATION_017",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_028",
    "CONTOUR_011",
    "BRONZER_018",
    "BLUSH_002",
    "HIGHLIGHTER_021",
    "EYESHADOW_PALETTE_004",
    "EYESHADOW_009",
    "MASCARA_047",
    "FALSE_LASHES_014",
    "EYEBROW_012",
    "LIP_LINER_015",
    "LIP_GLOSS_005",
    "SETTING_SPRAY_POWDER_019"
  ]
  },

  {
    id: 114,
    slug: "full-face-makeup-routine-for-flawless-skin",
    title: "Full Face Makeup Routine for Flawless Skin",
    category: "glam",
    homeImage: "images/home/file_000000006fc47246b7231089d80fbbd4~2.png",
    heroImage: "images/home/file_000000006fc47246b7231089d80fbbd4~2.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_003",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_014",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_033",
    "HIGHLIGHTER_006",
    "EYESHADOW_PALETTE_009",
    "MASCARA_004",
    "FALSE_LASHES_001",
    "EYEBROW_012",
    "LIP_LINER_013",
    "LIP_GLOSS_013",
    "SETTING_SPRAY_POWDER_008"
  ]
  },

  {
    id: 115,
    slug: "simple-makeup-look-for-school-or-work",
    title: "Simple Makeup Look for School or Work",
    category: "natural",
    homeImage: "images/home/file_0000000034f4720aa3af6316c478dd0e.png",
    heroImage: "images/home/file_0000000034f4720aa3af6316c478dd0e.png",
    products: [
    "TINTED_MOISTURIZER_007",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_012",
    "BRONZER_020",
    "BLUSH_005",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_LINER_001",
    "LIP_OIL_015",
    "SETTING_SPRAY_POWDER_016"
  ]
  },

  {
    id: 116,
    slug: "makeup-for-green-eyes-with-soft-brown-eyeshadow",
    title: "Makeup for Green Eyes with Soft Brown Eyeshadow",
    category: "natural",
    homeImage: "images/home/Screenshot_20260429-191516.png",
    heroImage: "images/home/Screenshot_20260429-191516.png",
    products: [
    "FACE_PRIMER_030",
    "FOUNDATION_016",
    "CONCEALER_013",
    "CONTOUR_024",
    "BRONZER_016",
    "BLUSH_011",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_013",
    "MASCARA_020",
    "FALSE_LASHES_006",
    "EYEBROW_005",
    "LIP_LINER_002",
    "LIP_OIL_004",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
    {
    id: 117,
    slug: "matte-makeup-routine-for-oily-skin",
    title: "Matte Makeup Routine for Oily Skin",
    category: "natural",
    homeImage: "images/home/file_000000000838720aaa0b24b1d6e2c800.png",
    heroImage: "images/home/file_000000000838720aaa0b24b1d6e2c800.png",
    products: [
    "TINTED_MOISTURIZER_007",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_012",
    "BRONZER_020",
    "BLUSH_005",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_LINER_001",
    "LIP_OIL_015",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
    {
    id: 118,
    slug: "wedding-guest-makeup-look",
    title: "Wedding Guest Makeup Look",
    category: "glam",
    homeImage: "images/home/file_00000000fa1c724681d6a674bff9c5b8~2.png",
    heroImage: "images/home/file_00000000fa1c724681d6a674bff9c5b8~2.png",
    products: [
    "FACE_PRIMER_026",
    "FOUNDATION_011",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_004",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_033",
    "HIGHLIGHTER_009",
    "EYESHADOW_PALETTE_009",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
  
  {
    id: 119,
    slug: "makeup-routine-for-acne-prone-skin",
    title: "Makeup Routine for Acne-Prone Skin",
    category: "glam",
    homeImage: "images/home/file_000000009c90724693ac58ef3e16b6d1.png",
    heroImage: "images/home/file_000000009c90724693ac58ef3e16b6d1.png",
    products: [
    "TINTED_MOISTURIZER_004",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_044",
    "BRONZER_020",
    "BLUSH_014",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "FALSE_LASHES_001",
    "EYEBROW_005",
    "LIP_GLOSS_002",
    "SETTING_SPRAY_POWDER_016"
  ]
  },
   {
    id: 120,
    slug: "bronzed-makeup-look-for-summer-",
    title: "Bronzed Makeup Look for summer",
    category: "natural",
    homeImage: "images/home/file_00000000333c7246806236dca2b4f14d.png",
    heroImage: "images/home/file_00000000333c7246806236dca2b4f14d.png",
    products: [
    "FACE_PRIMER_017",
    "FOUNDATION_005",
    "CONCEALER_003",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_002",
    "BRONZER_018",
    "BLUSH_011",
    "HIGHLIGHTER_013",
    "EYESHADOW_PALETTE_004",
    "MASCARA_047",
    "FALSE_LASHES_006",
    "EYEBROW_014",
    "LIP_LINER_002",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_019"
  ]
  }, 
  
  {
    id: 121,
    slug: "no-makeup-makeup-tutorial-",
    title: "No makeup makeup tutorial",
    category: "natural",
    homeImage: "images/home/file_00000000e57c724680c15f1eacbbe7a1.png",
    heroImage: "images/home/file_00000000e57c724680c15f1eacbbe7a1.png",
    products: [
    "FACE_PRIMER_004",
    "FOUNDATION_011",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_001",
    "CONTOUR_002",
    "BRONZER_005",
    "BLUSH_012",
    "HIGHLIGHTER_003",
    "EYESHADOW_PALETTE_012",
    "EYESHADOW_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_003",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
    {
    id: 122,
    slug: "glowy-makeup-routine-for-dry-skin",
    title: "Glowy Makeup Routine for Dry Skin",
    category: "natural",
    homeImage: "images/home/file_00000000477072468db1a24546f8d0ee~2.png",
    heroImage: "images/home/file_00000000477072468db1a24546f8d0ee~2.png",
    products: [
    "FACE_PRIMER_012",
    "FOUNDATION_145",
    "CONCEALER_018",
    "SETTING_SPRAY_POWDER_005",
    "CONTOUR_004",
    "BRONZER_004",
    "BLUSH_005",
    "HIGHLIGHTER_005",
    "EYESHADOW_PALETTE_001",
    "MASCARA_002",
    "EYEBROW_011",
    "LIP_LINER_007",
    "LIP_OIL_005",
    "SETTING_SPRAY_POWDER_008"
  ]
  },
    {
    id: 163,
    slug: "Pretty-Natural-Makeup-Everyone-Clicks-on-for-a-Soft-Glam-Look",
    title: "Pretty Natural Makeup Everyone Clicks on for a Soft Glam Look",
    category: "glam",
    homeImage: "images/home/file_00000000d1087243ab944a4a06a77696~2.png",
    heroImage: "images/home/file_00000000d1087243ab944a4a06a77696~2.png", 
    products: [
    "TINTED_MOISTURIZER_007",
    "CONCEALER_013",
    "SETTING_SPRAY_POWDER_018",
    "CONTOUR_012",
    "BRONZER_020",
    "BLUSH_005",
    "HIGHLIGHTER_017",
    "EYESHADOW_PALETTE_005",
    "MASCARA_001",
    "EYEBROW_005",
    "LIP_LINER_001",
    "LIP_OIL_015"
  ]
  },
  {
    id: 164,
    slug: "clean-girl-makeup-routine-step-by-step",
    title: "Clean girl Makeup routine step by step",
    category: "natural",
    homeImage: "images/home/file_00000000601071f4815038d840ad9fc1~2.png",
    heroImage: "images/home/file_00000000601071f4815038d840ad9fc1~2.png", 
    products: [
    "FACE_PRIMER_021",
    "FOUNDATION_017",
    "CONCEALER_001",
    "SETTING_SPRAY_POWDER_028",
    "CONTOUR_011",
    "BRONZER_018",
    "BLUSH_091",
    "HIGHLIGHTER_021",
    "EYESHADOW_PALETTE_004",
    "EYESHADOW_009",
    "MASCARA_047",
    "FALSE_LASHES_014",
    "EYEBROW_012",
    "LIP_LINER_015",
    "LIP_GLOSS_005",
    "SETTING_SPRAY_POWDER_019"
  ]},
  {
    id: 165,
    slug: "Pretty-Natural-Makeup-Everyone-Clicks-on-for-a-Soft-Glam-Look",
    title: "Pretty Natural Makeup Everyone Clicks on for a Soft Glam Look",
    category: "glam",
    homeImage: "images/home/file_00000000d1087243ab944a4a06a77696~2.png",
    heroImage: "images/home/file_00000000d1087243ab944a4a06a77696~2.png", 
    products: [
    "FACE_PRIMER_026",
    "FOUNDATION_011",
    "CONCEALER_014",
    "SETTING_SPRAY_POWDER_004",
    "CONTOUR_016",
    "BRONZER_006",
    "BLUSH_033",
    "HIGHLIGHTER_009",
    "EYESHADOW_PALETTE_009",
    "MASCARA_004",
    "FALSE_LASHES_004",
    "EYEBROW_014",
    "LIP_LINER_013",
    "LIP_GLOSS_020",
    "SETTING_SPRAY_POWDER_008"
  ]}
];

LOOKS.push(
  {
    id: 123,
    slug: "all-perfume-find-001-sephora-us",
    title: "Luxury Perfume Find",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000053fc720a8260c8cfb8cd69d0.png",
    heroImage: "images/perfume/file_0000000053fc720a8260c8cfb8cd69d0.png",
    products: []
  },
  {
    id: 124,
    slug: "all-perfume-find-002-sephora-us",
    title: "Expensive Smelling Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000005450720ab78dc66e29ecc1af.png",
    heroImage: "images/perfume/file_000000005450720ab78dc66e29ecc1af.png",
    products: []
  },
  {
    id: 125,
    slug: "all-perfume-find-003-sephora-us",
    title: "Luxury Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000551871f4a29fc8817eba1956.png",
    heroImage: "images/perfume/file_00000000551871f4a29fc8817eba1956.png",
    products: []
  },
  {
    id: 126,
    slug: "all-perfume-find-004-sephora-us",
    title: "Perfume That Smells Expensive",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000005f08720aa27f1fcf129c7716.png",
    heroImage: "images/perfume/file_000000005f08720aa27f1fcf129c7716.png",
    products: []
  },
  {
    id: 127,
    slug: "all-perfume-find-005-sephora-us",
    title: "Chic Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000061cc720aa7cb087b5332de65.png",
    heroImage: "images/perfume/file_0000000061cc720aa7cb087b5332de65.png",
    products: []
  },
  {
    id: 128,
    slug: "all-perfume-find-006-sephora-us",
    title: "Elegant Perfume Find",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000062fc71f48ee58fc8c53ee0f7.png",
    heroImage: "images/perfume/file_0000000062fc71f48ee58fc8c53ee0f7.png",
    products: []
  },
  {
    id: 129,
    slug: "all-perfume-find-007-sephora-us",
    title: "Clean Girl Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000067507246a5f1bc0f5c7f6634.png",
    heroImage: "images/perfume/file_0000000067507246a5f1bc0f5c7f6634.png",
    products: []
  },
  {
    id: 130,
    slug: "all-perfume-find-008-sephora-us",
    title: "Fresh Perfume Find",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000067c4720aad03db0f97ef4b85.png",
    heroImage: "images/perfume/file_0000000067c4720aad03db0f97ef4b85.png",
    products: []
  },
  {
    id: 131,
    slug: "all-perfume-find-009-sephora-us",
    title: "Soft Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000068a8720a8554a50db9cea19c.png",
    heroImage: "images/perfume/file_0000000068a8720a8554a50db9cea19c.png",
    products: []
  },
  {
    id: 132,
    slug: "all-perfume-find-010-sephora-us",
    title: "Feminine Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000833c720a835f4b9189654d5e.png",
    heroImage: "images/perfume/file_00000000833c720a835f4b9189654d5e.png",
    products: []
  },
  {
    id: 133,
    slug: "all-perfume-find-011-sephora-us",
    title: "Luxury Scent Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000084c072468639ca4bfb2cf6c9.png",
    heroImage: "images/perfume/file_0000000084c072468639ca4bfb2cf6c9.png",
    products: []
  },
  {
    id: 134,
    slug: "all-perfume-find-012-sephora-us",
    title: "Warm Perfume Find",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000890c71f4ab1019a4d315bed6.png",
    heroImage: "images/perfume/file_00000000890c71f4ab1019a4d315bed6.png",
    products: []
  },
  {
    id: 135,
    slug: "all-perfume-find-013-sephora-us",
    title: "Minimal Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000093f471f4846bccc8bdb8b4aa.png",
    heroImage: "images/perfume/file_0000000093f471f4846bccc8bdb8b4aa.png",
    products: []
  },
  {
    id: 136,
    slug: "all-perfume-find-014-sephora-us",
    title: "Golden Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000976471f4b7c48c526fa4259d.png",
    heroImage: "images/perfume/file_00000000976471f4b7c48c526fa4259d.png",
    products: []
  },
  {
    id: 137,
    slug: "all-perfume-find-015-sephora-us",
    title: "Dark Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000a39071f49adcb85be356d804.png",
    heroImage: "images/perfume/file_00000000a39071f49adcb85be356d804.png",
    products: []
  },
  {
    id: 138,
    slug: "all-perfume-find-016-sephora-us",
    title: "Pretty Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000a5ec7243a8a61a13eedd54bc.png",
    heroImage: "images/perfume/file_00000000a5ec7243a8a61a13eedd54bc.png",
    products: []
  },
  {
    id: 139,
    slug: "all-perfume-find-017-sephora-us",
    title: "Soft Feminine Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000a9a8720a8960f2ad437a0687.png",
    heroImage: "images/perfume/file_00000000a9a8720a8960f2ad437a0687.png",
    products: []
  },
  {
    id: 140,
    slug: "all-perfume-find-018-sephora-us",
    title: "Red Bottle Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000add071f4b23b70df799037fa.png",
    heroImage: "images/perfume/file_00000000add071f4b23b70df799037fa.png",
    products: []
  },
  {
    id: 141,
    slug: "all-perfume-find-019-sephora-us",
    title: "Vanilla Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000b790720aaaf74000d76e99e9.png",
    heroImage: "images/perfume/file_00000000b790720aaaf74000d76e99e9.png",
    products: []
  },
  {
    id: 142,
    slug: "all-perfume-find-020-sephora-us",
    title: "Pink Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000ba9c720ab2631605675c4348.png",
    heroImage: "images/perfume/file_00000000ba9c720ab2631605675c4348.png",
    products: []
  },
  {
    id: 143,
    slug: "all-perfume-find-021-sephora-us",
    title: "Creamy Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000c5bc71f4b4cc394a605b9cc6.png",
    heroImage: "images/perfume/file_00000000c5bc71f4b4cc394a605b9cc6.png",
    products: []
  },
  {
    id: 144,
    slug: "all-perfume-find-022-sephora-us",
    title: "Brown Bottle Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000dc5071f49447badd437da7ff.png",
    heroImage: "images/perfume/file_00000000dc5071f49447badd437da7ff.png",
    products: []
  },
  {
    id: 145,
    slug: "all-perfume-find-023-sephora-us",
    title: "Elegant Bottle Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000e5f471f4b10148b9d2515040.png",
    heroImage: "images/perfume/file_00000000e5f471f4b10148b9d2515040.png",
    products: []
  },
  {
    id: 146,
    slug: "all-perfume-find-024-sephora-us",
    title: "Black Bottle Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000f1b0720a9781d41ae8c4682a.png",
    heroImage: "images/perfume/file_00000000f1b0720a9781d41ae8c4682a.png",
    products: []
  },
  {
    id: 147,
    slug: "all-perfume-find-025-sephora-us",
    title: "Luxury Lifestyle Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000f60c720a9a60641b79560dd5.png",
    heroImage: "images/perfume/file_00000000f60c720a9a60641b79560dd5.png",
    products: []
  },
  {
    id: 148,
    slug: "all-perfume-find-026-sephora-us",
    title: "Amber Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000f6a4724384c9ea83b4206299.png",
    heroImage: "images/perfume/file_00000000f6a4724384c9ea83b4206299.png",
    products: []
  },
  {
    id: 149,
    slug: "all-perfume-find-027-sephora-us",
    title: "Warm Luxury Fragrance",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000000580720a8b2a294cabf9639a.png",
    heroImage: "images/perfume/file_000000000580720a8b2a294cabf9639a.png",
    products: []
  },
  {
    id: 150,
    slug: "all-perfume-find-028-sephora-us",
    title: "Pink Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000000a18720aa28a495446ef1734.png",
    heroImage: "images/perfume/file_000000000a18720aa28a495446ef1734.png",
    products: []
  },
  {
    id: 151,
    slug: "all-perfume-find-029-sephora-us",
    title: "Coffee Table Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000000c9072469cb004e873860ef8.png",
    heroImage: "images/perfume/file_000000000c9072469cb004e873860ef8.png",
    products: []
  },
  {
    id: 152,
    slug: "all-perfume-find-030-sephora-us",
    title: "Soft Neutral Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000000f7871f48d4e066609e5ac56.png",
    heroImage: "images/perfume/file_000000000f7871f48d4e066609e5ac56.png",
    products: []
  },
  {
    id: 153,
    slug: "all-perfume-find-031-sephora-us",
    title: "Bright Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000104c71f4972040a0aad4b7b0.png",
    heroImage: "images/perfume/file_00000000104c71f4972040a0aad4b7b0.png",
    products: []
  },
  {
    id: 154,
    slug: "all-perfume-find-032-sephora-us",
    title: "Handheld Luxury Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_00000000177c71f4acbdffa182674250.png",
    heroImage: "images/perfume/file_00000000177c71f4acbdffa182674250.png",
    products: []
  },
  {
    id: 155,
    slug: "all-perfume-find-033-sephora-us",
    title: "Warm Date Night Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000001c98720a9cd80a37add410a1.png",
    heroImage: "images/perfume/file_000000001c98720a9cd80a37add410a1.png",
    products: []
  },
  {
    id: 156,
    slug: "all-perfume-find-034-sephora-us",
    title: "Black And White Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000001f38720aaee04c23dd157e13.png",
    heroImage: "images/perfume/file_000000001f38720aaee04c23dd157e13.png",
    products: []
  },
  {
    id: 157,
    slug: "all-perfume-find-035-sephora-us",
    title: "Soft Cream Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000002f20720a8ab107a8cecc7696.png",
    heroImage: "images/perfume/file_000000002f20720a8ab107a8cecc7696.png",
    products: []
  },
  {
    id: 158,
    slug: "all-perfume-find-036-sephora-us",
    title: "Gold Perfume Bottle",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000003fa0724698193bad0015ad0f.png",
    heroImage: "images/perfume/file_000000003fa0724698193bad0015ad0f.png",
    products: []
  },
  {
    id: 159,
    slug: "all-perfume-find-037-sephora-us",
    title: "Soft Beige Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000049cc71f48dac6f215af55de9.png",
    heroImage: "images/perfume/file_0000000049cc71f48dac6f215af55de9.png",
    products: []
  },
  {
    id: 160,
    slug: "all-perfume-find-038-sephora-us",
    title: "Fresh Summer Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000004b7c71f497c30c0a53ded9e1.png",
    heroImage: "images/perfume/file_000000004b7c71f497c30c0a53ded9e1.png",
    products: []
  },
  {
    id: 161,
    slug: "all-perfume-find-039-sephora-us",
    title: "Orange Perfume Inspiration",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_000000005078720aac4390445314e6c6.png",
    heroImage: "images/perfume/file_000000005078720aac4390445314e6c6.png",
    products: []
  },
  {
    id: 162,
    slug: "all-perfume-find-040-sephora-us",
    title: "Pink Feminine Perfume",
    category: "perfume",
    subcategory: "all",
    homeImage: "images/perfume/file_0000000052f071f48338777274cef90a.png",
    heroImage: "images/perfume/file_0000000052f071f48338777274cef90a.png",
    products: []
  }
);



// Converts product codes into full product objects from productCatalog.js.
// IMPORTANT: load productCatalog.js BEFORE this data.js in your HTML.
(function resolveLookProductsFromCatalog() {
  const catalog = typeof products !== "undefined" ? products : [];

  if (!Array.isArray(catalog) || catalog.length === 0) {
    console.warn("productCatalog.js is not loaded before data.js, so product codes cannot be resolved.");
    return;
  }

  const productsByCode = {};
  catalog.forEach((product) => {
    if (product && product.code) {
      productsByCode[product.code] = product;
    }
  });

  LOOKS.forEach((look) => {
    const codes = Array.isArray(look.products) ? look.products : [];
    look.productCodes = codes;
    look.products = codes
      .map((code) => productsByCode[code])
      .filter(Boolean);
  });
})();
