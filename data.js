const LOOKS = [
  {
    id: 1,
    slug: "natural-makeup-look-that-feels-simple-but-looks-stunning",
    title: "Natural Makeup Look That Feels Simple but Looks Stunning",
    category: "natural",
    homeImage: "images/home/file_000000009320720ab56dfc40246aadec~2.png",
    heroImage: "images/home/file_000000009320720ab56dfc40246aadec~2.png",
    products: [
      { name: "FENTY BEAUTY Grip Trip - Mattifying and Blurring Primer", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/369882-media_swatch.jpg", link: "https://www.sephora.fr/p/grip-trip---base-de-teint-matifiante-et-floutante-P10062742.html" },
      { name: "RARE BEAUTY True to Myself - Long-Lasting Natural Matte Foundation", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/369965-media_swatch-0.jpg", link: "https://www.sephora.fr/p/true-to-myself---fond-de-teint-mat-naturel-longue-tenue-P10064073.html" },
      { name: "HUDA BEAUTY Luminous Matte Liquid Concealer", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/276460-media_swatch-1.jpg", link: "https://www.sephora.fr/p/-fauxfilter-luminous-matte-liquid-concealer-P10026486.html" },
      { name: "RARE BEAUTY Warm Wishes Effortless Bronzer Stick", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/268492-media_swatch.jpg", link: "https://www.sephora.fr/p/warm-wishes-effortless-bronzer---poudre-bronzante-P10023966.html" },
      { name: "RARE BEAUTY Mini Soft Pinch - Liquid Blush", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/327905-media_swatch.jpg", link: "https://www.sephora.fr/p/soft-pinch---liquid-blush-P10017094.html" },
      { name: "RARE BEAUTY Positive Light Silky Touch Highlighter - Illuminating Powder", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/307505-media_swatch.jpg", link: "https://www.sephora.fr/p/positive-light-silky-touch-highlighter---enlumineur-P10045917.html" },
      { name: "BENEFIT COSMETICS Goof Proof Brow Pencil", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/28522-media_swatch-1.jpg", link: "https://www.sephora.fr/p/mini-precisely-my-brow-pencil---crayon-sourcils-ultra-precis-P3228018.html" },
      { name: "FENTY BEAUTY Black Duo - Hella Thicc Volumizing Mascara and Fine Linez", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/duo_fenty_black.jpeg", link: "https://www.sephora.fr/p-duo_fenty_mascara_eyeliner_black.html" },
      { name: "SOL DE JANEIRO Glowmotions Glow Oil - Shimmering & Nourishing Body Oil", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/360699-media_swatch.jpg", link: "https://www.sephora.fr/p/glowmotions-glow-oil---huile-pour-le-corps-scintillante-et-nourissante-P1000205603.html" },
      { name: "YSL Loveshine - Glossy and Nourishing Lipstick", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/341699-media_swatch.jpg", link: "https://www.sephora.fr/p/loveshine---rouge-a-levres-brillant-et-soin-P10057416.html" },
      { name: "RARE BEAUTY Brow Harmony Flexible Lifting Gel - Clear Brow Gel", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/337652-media_swatch.jpg", link: "https://www.sephora.fr/p/brow-harmony-flexible-lifting-gel---gel-sourcils-P1000202677.html" },
      { name: "CHARLOTTE TILBURY Airbrush Flawless Finish Setting Spray", image: "images/products/Natural Makeup Look That Feels Simple but Looks Stunning/115243-media_4-0.jpg", link: "https://www.sephora.fr/p/airbrush-flawless-finish-setting-spray---spray-fixateur-maquillage-P1000211613.html" }
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
      { name: "NARS Powermatte High-Intensity Lip Pencil", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/342428-media_swatch.jpg", link: "https://www.sephora.fr/p/powermatte-high-intensity-lip-pencil---crayon-a-levres-P1000202815.html" },
      { name: "NARS Climax Mascara Extreme", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/225173-media_swatch.jpg", link: "https://www.sephora.fr/p/climax-mascara-extreme---mascara-P10011394.html" },
      { name: "MILK MAKEUP Hydro Grip Primer - Foundation Base", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/274592-media_swatch-1.jpeg", link: "https://www.sephora.fr/p/hydro-grip-primer---base-teint-hydratante-P3818087.html" },
      { name: "NARS Natural Radiant Longwear Foundation", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/400709-media_swatch-0.jpg", link: "https://www.sephora.fr/p/natural-radiant-longwear-foundation---fond-de-teint-P3250032.html" },
      { name: "GIVENCHY Rose Perfecto Shine Serum Lipstick", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/365482-media_swatch.jpg", link: "https://www.sephora.fr/p/rose-perfecto-shine-serum-lipstick---rouge-a-levres-brillant-et-soin-P1000205701.html" },
      { name: "PIE Go With the Faux Freckle Stamp", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/375894-media_swatch.jpg", link: "https://www.sephora.fr/p/go-with-the-faux-freckle-stamp---tampon-a-fausses-taches-de-rousseur-774882.html" },
      { name: "PIE Shape Tape Contour Concealer", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/112636-media_swatch-1.jpg", link: "https://www.sephora.fr/p/shape-tape-contour-concealer---anticernes-matte-451697.html" },
      { name: "BENEFIT COSMETICS 24h Brow Setter - Clear Brow Fixing Gel", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/59201-media_swatch.jpg", link: "https://www.sephora.fr/p/24h-brow-setter---gel-fixateur-sourcils-transparent-P2578009.html" },
      { name: "TOM FORD Soleil Blanc - Shimmering Body Oil", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/70897-media_swatch.jpg", link: "https://www.sephora.fr/p/soleil-blanc---huile-scintillante-pour-le-corps-P3267004.html" },
      { name: "MAKEUP BY MARIO SoftSculpt® Tanning & Sculpting Serum", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/349853-media_swatch.jpg", link: "https://www.sephora.fr/p/softsculpt%C2%AE---serum-bronzant-et-sculptant-P10059412.html" },
      { name: "MAKEUP BY MARIO Ethereal Eyes Eyeshadow Palette", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/343946-media_swatch.jpg", link: "https://www.sephora.fr/p/ethereal-eyes-eyeshadow-palette---palette-yeux-P10056571.html" },
      { name: "GIVENCHY Perfecto Serum Lip Oil", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/399978-media_swatch-0.jpg", link: "https://www.sephora.fr/p/perfecto-serum-lip-oil---huile-a-levres-nourrissante-et-brillante-longue-tenue-P1000212272.html" },
      { name: "CHARLOTTE TILBURY Airbrush Flawless Setting Spray Matte", image: "images/products/Bronzed Summer Makeup Inspiration for Golden Skin/380065-media_swatch.jpg", link: "https://www.sephora.fr/p/airbrush-flawless-setting-spray-matte---spray-fixateur-mat-P1000209496.html" }
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
      { name: "HUDA BEAUTY Easy Bake Loose Baking & Setting Powder", image: "images/products/Clean girl makeup glow up/55221-media_swatch.jpg", link: "https://www.sephora.com/product/easy-bake-loose-baking-setting-powder-P433402" },
      { name: "HUDA BEAUTY Easy Bake Setting Spray - Makeup Setting Spray with 16-Hour Hold", image: "images/products/Clean girl makeup glow up/366537-media_swatch.jpg", link: "https://www.sephora.com/product/huda-beauty-easy-bake-blurring-setting-spray-with-16-hour-wear-P515553" },
      { name: "HUDA BEAUTY Easy Blur Natural Airbrush Foundation", image: "images/products/Clean girl makeup glow up/352383-media_swatch.jpg", link: "https://www.sephora.com/product/huda-beauty-easy-blur-smoothing-foundation-P512640" },
      { name: "RARE BEAUTY Brow Harmony Precision Pencil - Eyebrow Pencil", image: "images/products/Clean girl makeup glow up/372707-media_swatch.jpg", link: "https://www.sephora.com/product/brow-harmony-precision-pencil-P506703" },
      { name: "NEST New York - Madagascar Vanilla Perfume Oil", image: "images/products/Clean girl makeup glow up/s2894798-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/nest-madagascar-vanilla-perfume-oil-P470232?skuId=2894798" },
      { name: "HOURGLASS Voyeur Waterproof Liquid Liner - Liquid Eyeliner", image: "images/products/Clean girl makeup glow up/72616-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=hourglass%20voyeur%20waterproof%20liquid%20liner" },
      { name: "CHARLOTTE TILBURY Hollywood Blush & Glow Glide Palette - Blush & Highlighter Palette", image: "images/products/Clean girl makeup glow up/327571-media_swatch.jpg", link: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700" },
      { name: "ANASTASIA BEVERLY HILLS Mini Sultry Palette - Eyeshadow Palette", image: "images/products/Clean girl makeup glow up/s2385516-main-zoom.webp", link: "https://www.sephora.com/product/anastasia-beverly-hills-mini-soft-glam-palette-P463420" },
      { name: "BOBBI BROWN Natural Brow Shaper - Gel Mascara for Eyebrows", image: "images/products/Clean girl makeup glow up/281035-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=bobbi%20brown%20natural%20brow%20shaper" },
      { name: "WESTMAN WORKSHOP Lip Shape Lip Pencil", image: "images/products/Clean girl makeup glow up/323571-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=westman%20atelier%20lip%20shape%20lip%20pencil" },
      { name: "GIVENCHY Perfecto Serum Lip Oil - Long-Lasting Nourishing and Shiny", image: "images/products/Clean girl makeup glow up/399973-media_swatch-0.jpg", link: "https://www.sephora.com/search?keyword=givenchy%20perfecto%20serum%20lip%20oil" },
      { name: "FENTY BEAUTY Grip Trip - Hydrating and Plumping Primer", image: "images/products/Clean girl makeup glow up/371361-media_swatch-0.jpeg", link: "https://www.sephora.com/search?keyword=fenty%20beauty%20grip%20trip%20primer" },
      { name: "FENTY BEAUTY Hella Thicc Extra Primer - Volumizing Mascara Base", image: "images/products/Clean girl makeup glow up/364017-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=fenty%20beauty%20hella%20thicc%20extra%20primer" },
      { name: "LANCÔME Lash Idôle Curl Goddess - Instant Curl & Volume Mascara", image: "images/products/Clean girl makeup glow up/393767-media_swatch-0.jpeg", link: "https://www.sephora.com/search?keyword=lancome%20lash%20idole%20curl%20goddess" }
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
      { name: "HUDA BEAUTY - Easy Blur Primer / Base de teint lissante sans silicone", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/352387-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=huda%20beauty%20easy%20blur%20primer" },
      { name: "HUDA BEAUTY - Easy Blur Natural Airbrush Foundation - Fond de teint", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/352383-media_swatch (1).jpg", link: "https://www.sephora.com/product/huda-beauty-easy-blur-smoothing-foundation-P512640" },
      { name: "NARS - Radiant Creamy Concealer - Anticernes multi-usages", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/223507-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=nars%20radiant%20creamy%20concealer" },
      { name: "RARE BEAUTY - Soft Pinch Blush liquide", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/42904-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=rare%20beauty%20soft%20pinch%20liquid%20blush" },
      { name: "HUDA BEAUTY - TANTOUR - Crème Effet Poudre Soleil & Contouring", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/114826-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=huda%20beauty%20tantour" },
      { name: "RARE BEAUTY - Positive Light Liquid Luminizer Highlighter liquide", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/236119-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=rare%20beauty%20positive%20light%20liquid%20luminizer" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil - Crayon Sourcils Ultra-Précis", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/301010-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=benefit%20precisely%20my%20brow" },
      { name: "FENTY BEAUTY - Flyliner Feutre Liquide longue tenue", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/14801-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=fenty%20flyliner" },
      { name: "CHARLOTTE TILBURY - Lip Cheat - Crayon à lèvres sans transfert", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/329593-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=charlotte%20tilbury%20lip%20cheat" },
      { name: "FENTY BEAUTY - Gloss Bomb Universal Lip Luminizer", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/268488-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=fenty%20gloss%20bomb" },
      { name: "ANASTASIA BEVERLY HILLS - Brow Freeze Gel - Gel Pour Les Sourcils", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/338453-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20brow%20freeze%20gel" },
      { name: "HUDA BEAUTY - LEGIT LASHES - Mascara Double-embout Volumisant et Allongeant", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/166965-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=huda%20beauty%20legit%20lashes" },
      { name: "HUDA BEAUTY - Easy Bake Setting Spray - Spray fixateur maquillage tenue 16 h", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/55221-media_swatch.jpg", link: "https://www.sephora.com/product/huda-beauty-easy-bake-blurring-setting-spray-with-16-hour-wear-P515553" },
      { name: "SOL DE JANEIRO - Brazilian Crush Cheirosa 62 - Brume Parfumée pour le Corps et les cheveux", image: "images/products/Face Enhancing Makeup That Makes Everything Look Better/38651-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=sol%20de%20janeiro%20cheirosa%2062" }
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
      { name: "MILK MAKEUP - Hydro Grip Hydrating Makeup Primer with Hyaluronic Acid + Niacinamide", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/274592-media_swatch-1.jpeg", link: "https://www.sephora.com/product/hydro-grip-primer-P441813" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Hydrating & Waterproof Setting Spray", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/352358-media_swatch.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147" },
      { name: "ARMANI BEAUTY - Luminous Silk Hydrating Face and Under-Eye Concealer", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2926731-main-zoom.webp", link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Crease-Proof Long-Wear Blur Concealer", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2941888-main-zoom.webp", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870" },
      { name: "Benefit Cosmetics - Gimme Brow+ Tinted Volumizing Eyebrow Gel", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2080224-main-zoom.webp", link: "https://www.sephora.com/product/gimme-brow-P409239" },
      { name: "Hourglass - Ambient® Lighting Palette", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2519767-main-zoom.webp", link: "https://www.sephora.com/product/ambient-lighting-palette-P382309" },
      { name: "Gucci - Glow Dewy Powder Blush", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2587343-main-zoom.webp", link: "https://www.sephora.com/product/gucci-glow-dewy-powder-blush-P520021" },
      { name: "Rare Beauty by Selena Gomez - Perfect Strokes Universal Volumizing Mascara", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/240793-media_swatch.jpg", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475599" },
      { name: "CHARLOTTE TILBURY - Lip Cheat Lip Liner", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2765618-main-zoom (1).webp", link: "https://www.sephora.com/product/lip-cheat-lip-liner-P433516" },
      { name: "YVES SAINT LAURENT - YSL Candy Glaze Lip Gloss Stick", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2787513-main-zoom.webp", link: "https://www.sephora.com/product/yves-saint-laurent-candy-glaze-lip-gloss-stick-P480000" },
      { name: "Gucci - Glow Multi-Use Illuminating Gel-Powder Highlighter", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2788388-main-zoom.webp", link: "https://www.sephora.com/product/gucci-gucci-glow-highlighter-P512763" },
      { name: "OUAI - St. Barts Moisturizing Body Cream", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/319245-media_swatch.jpg", link: "https://www.sephora.com/product/ouai-haircare-st-barts-moisturizing-body-cream-P505016" },
      { name: "Ellis Brooklyn - MIAMI NECTAR Eau de Parfum with Coconut and Pink Pineapple", image: "images/products/The Makeup Look That Gives an Effortlessly Polished Face/s2888402-main-zoom.webp", link: "https://www.sephora.com/product/ellis-brooklyn-miami-nectar-eau-de-parfum-P511416" }
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
      { name: "GLOSSIER - Futuredew Serum - Huile-sérum visage hybride", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/332765-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20futuredew" },
      { name: "GLOSSIER - Perfecting Skin Tint - Fluide teinté", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/332719-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20perfecting%20skin%20tint" },
      { name: "GLOSSIER - Stretch Balm Concealer - Anticernes", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/330818-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20stretch%20balm%20concealer" },
      { name: "ANASTASIA BEVERLY HILLS - Blurring Serum Blush - Blush liquide", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/349892-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20blurring%20serum%20blush" },
      { name: "BENEFIT COSMETICS - Hoola Wave - Baume bronzant", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/364577-media_swatch.jpeg", link: "https://www.sephora.com/search?keyword=benefit%20hoola%20wave" },
      { name: "ANASTASIA BEVERLY HILLS - Iced Out - Highlighter en poudre", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/229124-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20iced%20out%20highlighter" },
      { name: "GLOSSIER - Boy Brow Arch - Crayon-pommade à sourcils longue tenue 2 en 1", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/353452-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20boy%20brow%20arch" },
      { name: "GLOSSIER - Boy Brow - Pommade-gel sourcils volumateur", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/332746-media_swatch-1.jpg", link: "https://www.sephora.com/search?keyword=glossier%20boy%20brow" },
      { name: "GLOSSIER - No 1. Pencil - Crayon yeux crémeux longue tenue", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/332733-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20no.%201%20pencil" },
      { name: "GLOSSIER - Lash Slick - Mascara pour des cils liftés et allongés", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/332728-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20lash%20slick" },
      { name: "GLOSSIER - Lip Line - Crayon à Lèvres Longue Tenue Sublimateur", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/364315-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20lip%20line" },
      { name: "GLOSSIER - Lip Gloss - Brillant à lèvres ultra-brillant", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/353926-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20lip%20gloss" },
      { name: "ANASTASIA BEVERLY HILLS - Dewy Set - Spray Fixateur", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/441548-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20dewy%20set" },
      { name: "GLOSSIER - Glossier You Fleur - Eau de Parfum", image: "images/products/Dewy Makeup Inspiration That Makes Skin Look So Smooth/367343-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=glossier%20you%20fleur" }
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
      { name: "MILK MAKEUP - Hydro Grip + Glow Primer - Illuminating Grip Primer", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/354113-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=milk%20hydro%20grip%20glow%20primer" },
      { name: "NARS - Light Reflecting Foundation", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/272025-media_swatch.jpg", link: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Blur Concealer - Hydrating Longwear Concealer", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/393208-media_swatch-1.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Powder Blush With Fermented Arnica", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/342911-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=haus%20labs%20color%20fuse%20powder%20blush" },
      { name: "BENEFIT COSMETICS - Hoola Wave - Cream Bronzer Balm", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/364577-media_swatch.jpeg", link: "https://www.sephora.com/search?keyword=benefit%20hoola%20wave" },
      { name: "RARE BEAUTY - Positive Light Silky Touch Highlighter", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/307505-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=rare%20beauty%20positive%20light%20silky%20touch%20highlighter" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil - Ultra Fine Brow Pencil", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/28751-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=benefit%20precisely%20my%20brow" },
      { name: "KOSAS - Air Brow Clear - Clear Laminating Brow Gel", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/316418-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=kosas%20air%20brow%20clear" },
      { name: "HUDA BEAUTY - Creamy Kohl Longwear Eye Pencil", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/312973-media_swatch-1.jpg", link: "https://www.sephora.com/search?keyword=huda%20beauty%20creamy%20kohl" },
      { name: "RARE BEAUTY - Perfect Strokes Universal Volumizing Mascara", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/240793-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=rare%20beauty%20perfect%20strokes%20mascara" },
      { name: "CHARLOTTE TILBURY - Lip Cheat - Lip Liner", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/363947-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=charlotte%20tilbury%20lip%20cheat" },
      { name: "YVES SAINT LAURENT - YSL Loveshine Candy Glaze - Glossy Lip Balm", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/365124-media_swatch.jpeg", link: "https://www.sephora.com/search?keyword=ysl%20candy%20glaze" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Setting Spray", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/352358-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=charlotte%20tilbury%20airbrush%20flawless%20setting%20spray" },
      { name: "MAISON FRANCIS KURKDJIAN - feminin Pluriel - Eau de Parfum", image: "images/products/Fresh Glowy Makeup for the Prettiest Everyday Finish/337406-media_swatch-3.jpg", link: "https://www.sephora.com/search?keyword=maison%20francis%20kurkdjian%20feminin%20pluriel" }
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
      { name: "MILK MAKEUP - Hydro Grip + Glow Primer - Illuminating Grip Primer", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/354113-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=milk%20hydro%20grip%20glow%20primer" },
      { name: "ILIA - Super Serum Skin Tint SPF 30", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/272327-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=ilia%20super%20serum%20skin%20tint" },
      { name: "ILIA - True Skin Serum Concealer", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/232313-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=ilia%20true%20skin%20serum%20concealer" },
      { name: "LAURA MERCIER - Roseglow Blush Color Infusion", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/302098-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=laura%20mercier%20roseglow%20blush%20color%20infusion" },
      { name: "FENTY BEAUTY - Sun Stalk'r Instant Warmth Bronzer", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/114193-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=fenty%20sun%20stalkr%20bronzer" },
      { name: "RMS BEAUTY - Glow Quad mini - Highlighter Palette", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/224631-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=rms%20glow%20quad%20mini" },
      { name: "HOURGLASS - Arch Brow Sculpting Pencil", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/5066-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=hourglass%20arch%20brow%20sculpting%20pencil" },
      { name: "LAURA MERCIER - Caviar Stick Eye Color Roseglow", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/338607-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=laura%20mercier%20caviar%20stick%20roseglow" },
      { name: "ANASTASIA BEVERLY HILLS - Lash Sculpt - Lengthening & Volumizing Mascara", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/326456-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20lash%20sculpt%20mascara" },
      { name: "HOURGLASS - Shape and Sculpt Lip Liner", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/353157-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=hourglass%20shape%20and%20sculpt%20lip%20liner" },
      { name: "ANASTASIA BEVERLY HILLS - Dewy Set - Setting Spray", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/441548-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=anastasia%20dewy%20set" },
      { name: "JULIETTE HAS A GUN - Lust For Sun - Eau de Parfum", image: "images/products/Neutral Glam Makeup That Instantly Elevates Your Features/319369-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=juliette%20has%20a%20gun%20lust%20for%20sun" }
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
      { name: "HUDA BEAUTY - Lip Contour Lip Stain - Lip Liner", image: "images/products/Perfect lip combo for girls who wants long-lasting makeup/364252-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=huda%20beauty%20lip%20contour%20lip%20stain" },
      { name: "TARTE - Maracuja Juicy Lip Vinyl - Ultra-Shiny Lip Gloss", image: "images/products/Perfect lip combo for girls who wants long-lasting makeup/344315-media_swatch.jpg", link: "https://www.sephora.com/search?keyword=tarte%20maracuja%20juicy%20lip%20vinyl" }
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
      { name: "Gucci - Sérum De Beauté Fluide Soyeux Silk Priming Serum", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2416675-main-zoom.webp", link: "https://www.sephora.com/product/gucci-serum-de-beaute-fluide-soyeux-silk-priming-serum-P467623" },
      { name: "LAURA MERCIER - Real Flawless Weightless Perfecting Waterproof Foundation", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2642742-main-zoom.webp", link: "https://www.sephora.com/product/laura-mercier-real-flawless-weightless-perfecting-foundation-P504012" },
      { name: "NATASHA DENONA - Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2671592-main-zoom.webp", link: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800" },
      { name: "Danessa Myricks Beauty - Yummy Skin Blurring Balm Powder Flushed", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2654010-main-zoom.jpg", link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-flushed-P504051" },
      { name: "Saie - Sun Melt Natural Cream Bronzer", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2638138-main-zoom.webp", link: "https://www.sephora.com/product/saie-sun-melt-natural-cream-bronzer-P472997" },
      { name: "Westman Atelier - Lit Up Glassy Gel Highlighter Stick", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2648038-main-zoom (1).webp", link: "https://www.sephora.com/product/westman-atelier-lit-up-highlight-stick-P468430" },
      { name: "Gucci - Le Magnétisme Volumizing Mascara", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2834620-main-zoom~2.jpg", link: "https://www.sephora.com/product/gucci-le-magnetisme-volumizing-mascara-P514698" },
      { name: "MERIT - Signature Lip Sheer Lip Liner", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2842912-main-zoom.webp", link: "https://www.sephora.com/product/signature-lip-sheer-lip-liner-P516006" },
      { name: "MERIT - Shade Slick Hydrating Tinted Lip Oil", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2849925-main-zoom (1).webp", link: "https://www.sephora.com/product/merit-shade-slick-tinted-lip-oil-P468691" },
      { name: "Prada - Paradoxe Eau de Parfum with White Musk & Amber", image: "images/products/Soft and Effortless Glam Makeup Look That Never Fails/s2591170-main-zoom.webp", link: "https://www.sephora.com/product/paradoxe-eau-de-parfum-P501198" }
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
      { name: "Yves Saint Laurent - Touche Éclat Blur Face Primer", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s1713114-main-zoom.webp", link: "https://www.sephora.com/product/touche-eclat-blur-primer-P397615" },
      { name: "LAURA MERCIER - Tinted Blur Balm Skin Tint with Peptides", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2938983-main-zoom.webp", link: "https://www.sephora.com/product/tinted-blur-balm-skin-tint-with-peptides-P520503" },
      { name: "DIOR - Dior Forever Skin Correct Full-Coverage Concealer", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2639318-main-zoom (1).webp", link: "https://www.sephora.com/product/dior-dior-forever-skin-correct-concealer-P454348" },
      { name: "Saie - Dew Blush Liquid Cream Blush", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2872448-main-zoom.webp", link: "https://www.sephora.com/product/saie-dew-blush-liquid-cheek-blush-P469825" },
      { name: "Westman Atelier - Sun Tone Hydrating Matte Bronzing Drops", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2845675-main-zoom.webp", link: "https://www.sephora.com/product/sun-tone-bronzing-drops-P514681" },
      { name: "Gucci - Glow Multi-Use Illuminating Gel-Powder Highlighter", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2788388-main-zoom (1).webp", link: "https://www.sephora.com/product/gucci-gucci-glow-highlighter-P512763" },
      { name: "ILIA - Limitless Lash Mascara - Clean Lengthening Mascara", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2850378-main-zoom~2.jpg", link: "https://www.sephora.com/product/limitless-lash-mascara-P431750" },
      { name: "LAWLESS - Forget the Filler Lip-Plumping Line-Smoothing Satin Cream Lipstick", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2694560-main-zoom.webp", link: "https://www.sephora.com/product/forget-filler-lip-plumping-line-smoothing-satin-cream-lipstick-P506812" },
      { name: "HUDA BEAUTY - Faux Filler Shiny Non-Sticky Lip Gloss", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2954667-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/huda-beauty-faux-filler-shiny-non-sticky-lip-gloss-P509453" },
      { name: "Valentino - Donna Born In Roma Eau de Parfum", image: "images/products/Pretty Natural Makeup Look That Instantly Elevates Your Face/s2249696-main-zoom.webp", link: "https://www.sephora.com/product/born-in-roma-P449116" }
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
      { name: "ARMANI BEAUTY - Luminous Silk Natural Glow Blurring Liquid Foundation", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/392675-media_swatch-1.jpg", link: "https://www.sephora.com/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Crease-Proof Long-Wear Blur Concealer", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/393208-media_swatch-1.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870" },
      { name: "MAKEUP BY MARIO - SoftSculpt® Talc-Free Blurring Bronzer", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/301036-media_swatch.jpg", link: "https://www.sephora.com/product/P516545" },
      { name: "PAT McGRATH LABS - Skin Fetish: Divine Powder Blush", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/s2464857-main-zoom.webp", link: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-divine-powder-blush-P472489" },
      { name: "RARE BEAUTY - Positive Light Silky Touch Highlighter", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/s2848356-main-zoom.webp", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711" },
      { name: "HOURGLASS - Arch Brow Sculpting Pencil", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/5066-media_swatch.jpg", link: "https://www.sephora.com/product/P376457" },
      { name: "LANCÔME - Lash Idôle Flutter Extension Lengthening Mascara", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/LashIdoleMain_500x500.jpg", link: "https://www.sephora.com/product/lash-idole-flutter-extension-lengthening-mascara-P515062" },
      { name: "CHARLOTTE TILBURY - Lip Cheat Lip Liner", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/329593-media_swatch.jpg", link: "https://www.sephora.com/product/lip-cheat-lip-liner-P433516" },
      { name: "LAWLESS - Forget The Filler Lip Plumping Line Smoothing Gloss", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/s2937928-main-zoom.webp", link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-gloss-P468175" },
      { name: "ANASTASIA BEVERLY HILLS - Dewy Set Hydrating Setting Spray", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/441548-media_swatch.jpg", link: "https://www.sephora.com/product/dewy-set-setting-spray-P443753" },
      { name: "VALENTINO - Perfume Born in Roma", image: "images/products/High End Makeup Look That Gives Luxury Model Vibes/s2249696-main-zoom (1).webp", link: "https://www.sephora.com/ca/fr/product/born-in-roma-P449116" }
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
      { name: "MILK MAKEUP - Hydro Grip Hydrating Makeup Primer with Hyaluronic Acid + Niacinamide", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/s2850402-main-zoom.webp", link: "https://www.sephora.com/product/hydro-grip-primer-P441813" },
      { name: "NARS - Natural Radiant Longwear Full Coverage Foundation", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/34636-media_swatch.jpg", link: "https://www.sephora.com/product/natural-radiant-longwear-foundation-P427301" },
      { name: "TOO FACED - Born This Way Super Coverage Multi-Use Concealer with Hyaluronic Acid", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/s2084408-main-zoom.webp", link: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Talc-Free Blush Powder With Fermented Arnica", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/342911-media_swatch.jpg", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025" },
      { name: "FENTY BEAUTY - Sun Stalk'r Instant Warmth Bronzer", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/44607-media_swatch.jpg", link: "https://www.sephora.com/ca/fr/product/match-stix-matte-skinstick-P18975403" },
      { name: "CHARLOTTE TILBURY - Beauty Highlighter Wand", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/273432-media_swatch.jpg", link: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil Waterproof Eyebrow Definer", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/s2744803-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/benefit-cosmetics-precisely-detailer-pencil-P510190" },
      { name: "BENEFIT COSMETICS - Fan Fest Fanning & Volumizing Mascara", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/325908-media_swatch-1.jpg", link: "https://www.sephora.com/product/fan-fest-mascara-P506688" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extreme Smudge-Proof Lip Liner", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/355096-media_swatch.jpg", link: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-extreme-waterproof-lip-liner-P512173" },
      { name: "YVES SAINT LAURENT - Candy Glaze Lip Gloss Stick", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/365124-media_swatch.jpeg", link: "https://www.sephora.com/product/yves-saint-laurent-candy-glaze-lip-gloss-stick-P480000" },
      { name: "Emporio Armani- Power of You perfume ", image: "images/products/Toasty Makeup Look for a Soft Glam Beauty Vibe/s2945376-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/power-you-eau-de-parfum-P520331" }
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
      { name: "stila - Stay All Day® Waterproof Liquid Eye Liner", image: "images/products/simple glam makeup ideas for a chic and polished look/s1221084-main-zoom (1).webp", link: "https://www.sephora.com/product/stay-all-day-waterproof-liquid-eye-liner-P253818" },
      { name: "Tower 28 Beauty - MakeWaves® Lengthening + Volumizing Mascara", image: "images/products/simple glam makeup ideas for a chic and polished look/s2606176-main-zoom~2.jpg", link: "https://www.sephora.com/product/makewaves-lengthening-curling-clean-mascara-P502484" },
      { name: "LAURA MERCIER - Real Flawless Luminous Perfecting Talc-Free Pressed Powder", image: "images/products/simple glam makeup ideas for a chic and polished look/s2643112-main-zoom.webp", link: "https://www.sephora.com/product/laura-mercier-real-flawless-pressed-powder-P505458" },
      { name: "IT Cosmetics - CC+ Nude Glow Lightweight Foundation + Glow Serum with SPF 40", image: "images/products/simple glam makeup ideas for a chic and polished look/s2773695-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/it-cosmetics-cc-cream-natural-matte-foundation-with-spf-40-P510447" },
      { name: "PATRICK TA - Major Headlines Double-Take Crème & Powder Blush Duo", image: "images/products/simple glam makeup ideas for a chic and polished look/s2849768-main-zoom (2).webp", link: "https://www.sephora.com/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747" },
      { name: "LAWLESS - Forget The Filler Definer Lip Liner", image: "images/products/simple glam makeup ideas for a chic and polished look/s2862894-main-zoom.webp", link: "https://www.sephora.com/product/lawless-forget-filler-definer-lip-liner-P468455" },
      { name: "VIOLETTE_FR - BISOU BALM Sheer Matte Lipstick", image: "images/products/simple glam makeup ideas for a chic and polished look/s2864403-main-zoom.webp", link: "https://www.sephora.com/product/bisou-balm-sheer-matte-lipstick-P515456" },
      { name: "MAKE UP FOR EVER - HD Skin Full Cover Multi-Use Waterproof Concealer with Hyaluronic Acid", image: "images/products/simple glam makeup ideas for a chic and polished look/s2891497-main-zoom.webp", link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-full-cover-concealer-P517846" },
      { name: "Kosas - Shiny Objects Wet Glisten Illuminating Powder for Face and Eyes", image: "images/products/simple glam makeup ideas for a chic and polished look/s2935880-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/shiny-objects-highlighter-P520040" },
      { name: "Ellis Brooklyn - ISLA SIRENA Eau de Parfum", image: "images/products/simple glam makeup ideas for a chic and polished look/s2938017-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/isla-sirena-eau-de-parfum-P520324" }
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
      { name: "DIOR - Backstage Face & Body Foundation", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2669539-main-zoom.webp", link: "https://www.sephora.com/product/backstage-face-body-foundation-P432500" },
      { name: "DIOR - Forever Skin Correct Full-Coverage Concealer", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2639318-main-zoom.webp", link: "https://www.sephora.com/product/dior-dior-forever-skin-correct-concealer-P454348" },
      { name: "PATRICK TA - Major Headlines Double-Take Crème & Powder Blush Duo", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2849768-main-zoom.webp", link: "https://www.sephora.com/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747" },
      { name: "MILK MAKEUP - Sculpt Cream Contour Stick", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2872406-main-zoom.webp", link: "https://www.sephora.com/product/milk-makeup-sculpt-cream-contour-stick-P503903" },
      { name: "Saie - Glowy Super Gel Lightweight Dewy Multipurpose Illuminator", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2834943-main-zoom.webp", link: "https://www.sephora.com/product/saie-glowy-super-gel-lightweight-dewy-highlighter-P468206" },
      { name: "HOURGLASS - Arch Brow Sculpting Pencil", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s1454271-main-zoom.webp", link: "https://www.sephora.com/product/arch-brow-sculpting-pencil-P376457" },
      { name: "Tower 28 Beauty - MakeWaves® Lengthening + Volumizing Mascara", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2606176-main-zoom~2.jpg", link: "https://www.sephora.com/product/makewaves-lengthening-curling-clean-mascara-P502484" },
      { name: "HOURGLASS - Shape & Sculpt Lip Liner", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2738896-main-zoom.webp", link: "https://www.sephora.com/product/hourglass-shape-sculpt-lip-liner-P509656" },
      { name: "DIOR - Dior Addict Lip Maximizer Plumping Gloss", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2635654-main-zoom.webp", link: "https://www.sephora.com/product/dior-addict-lip-maximizer-plumping-gloss-P186805" },
      { name: "Ellis Brooklyn - MIAMI NECTAR Eau de Parfum with Coconut and Pink Pineapple", image: "images/products/Face Card Makeup Routine for a Flawless Glowy Finish/s2761609-main-zoom.webp", link: "https://www.sephora.com/product/ellis-brooklyn-miami-nectar-eau-de-parfum-P511416" }
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
      { name: "BOBBI BROWN - Vitamin Enriched Face Base - Base de Teint Hydratante & Vitaminée", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/77197-media_swatch.jpg", link: "https://www.sephora.fr/p/vitamin-enriched-face-base---base-de-maquillage-vitaminee-P47312.html" },
      { name: "NARS - Light Reflecting Foundation - Fond de Teint Fluide", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/272068-media_swatch.jpg", link: "https://www.sephora.fr/p/light-reflecting-foundation-P10024551.html" },
      { name: "HOURGLASS - Vanish Airbrush Concealer - Anti-cernes", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/161730-media_swatch.jpg", link: "https://www.sephora.fr/p/vanish-airbrush-concealer---anticernes-P3959108.html" },
      { name: "LAURA MERCIER - Roseglow Blush Color Infusion - Blush", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/302098-media_swatch.jpg", link: "https://www.sephora.fr/p/roseglow-blush-color-infusion---blush-P10043298.html" },
      { name: "BENEFIT COSMETICS - Hoola - Poudre Bronzante Matte", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/275247-media_swatch.jpg", link: "https://www.sephora.fr/p/hoola---poudre-soleil-P2551.html" },
      { name: "CHARLOTTE TILBURY - Hollywood Flawless Filter - Highlighter liquide", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/45139-media_swatch.jpg", link: "https://www.sephora.fr/p/hollywood-filter---highlighter-liquide-P3462081.html" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil - Crayon Sourcils Ultra-Précis", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/28522-media_swatch-1.jpg", link: "https://www.sephora.fr/p/precisely-my-brow-pencil---crayon-sourcils-ultra-precis-P2578003.html" },
      { name: "BENEFIT COSMETICS - 24h Brow Setter - Gel fixateur sourcils transparent", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/59201-media_swatch.jpg", link: "https://www.sephora.fr/p/24h-brow-setter---gel-fixateur-sourcils-transparent-P2578009.html" },
      { name: "LAURA MERCIER - Caviar Stick Eye Colour Matte - Fard à Paupières En Crayon", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/327898-media_swatch.jpg", link: "https://www.sephora.fr/p/caviar-stick---eyeshadow-matte-P10053953.html" },
      { name: "MAKE UP FOR EVER - Aqua Resist Color Pencil - Crayon yeux waterproof, tenue extrême 24H", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/393397-media_swatch-0.jpg", link: "https://www.sephora.fr/p/aqua-resist-color-pencil-%E2%80%93-crayon-yeux-waterproof--tenue-extreme-24h%2A-P1000212441.html" },
      { name: "TARTE - tartelette™ tubing mascara - Mascara technologie tubing et allongeant", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/277089-media_swatch.jpg", link: "https://www.sephora.fr/p/tartelette%E2%84%A2-tubing-mascara-P10027090.html" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extrême - Crayon à lèvres Waterproof couleur intense", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/355096-media_swatch.jpg", link: "https://www.sephora.fr/p/artist-color-pencil-extreme---crayon-a-levres-waterproof-couleur-intense-P10060422.html" },
      { name: "BOBBI BROWN - Crushed Lip Gloss Sweet Talk", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/175302-media_swatch.jpg", link: "https://www.sephora.fr/p/crushed-lip-gloss-sweet-talk-P4033084.html" },
      { name: "BENEFIT COSMETICS - The POREfessional Super Setter - Spray fixateur de maquillage lissant", image: "images/products/This Clean Makeup Look Is Giving Rich Girl Beauty/229327-media_swatch.jpg", link: "https://www.sephora.fr/p/the-porefessional-super-setter---spray-fixateur-de-maquillage-lissant-P10013104.html" }
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
      { name: "RARE BEAUTY - Perfect Strokes Universal Volumizing Mascara", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/240793-media_swatch.jpg", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475599" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Finish Concealer", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/307899-media_swatch.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-blur-concealer-P520870" },
      { name: "CHARLOTTE TILBURY - Mini Hollywood Blush & Glow Palette", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/327571-media_swatch.jpg", link: "https://www.sephora.com/product/mini-hollywood-blush-glow-set-shade-1-P508700" },
      { name: "HUDA BEAUTY - Easy Blur Natural Airbrush Foundation with Niacinamide", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/352383-media_swatch.jpg", link: "https://www.sephora.com/product/huda-beauty-easy-blur-smoothing-foundation-P512640" },
      { name: "ANASTASIA BEVERLY HILLS - Dewy Set Hydrating Setting Spray", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/441548-media_swatch.jpg", link: "https://www.sephora.com/product/dewy-set-setting-spray-P443753" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil Waterproof Eyebrow Definer", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/s2086759-main-zoom.webp", link: "https://www.sephora.com/product/precisely-my-brow-pencil-P408219" },
      { name: "FENTY BEAUTY - Sun Stalk'r Instant Warmth Bronzer", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/s2210979-main-zoom.webp", link: "https://www.sephora.com/product/sun-stalk-r-instant-warmth-bronzer-P55978864" },
      { name: "RARE BEAUTY - Positive Light Silky Touch Highlighter", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/s2629483-main-zoom.webp", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711" },
      { name: "CHARLOTTE TILBURY - Lip Cheat Long-Lasting Waterproof Lip Liner", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/s2765618-main-zoom.webp", link: "https://www.sephora.com/product/lip-cheat-lip-liner-P433516" },
      { name: "HUDA BEAUTY - Easy Blur Silicone-Free Smoothing & Pore-Minimizing Primer", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/s2888931-main-zoom.webp", link: "https://www.sephora.com/product/huda-beauty-easy-blur-silicone-free-smoothing-primer-P512639" },
      { name: "JO MALONE LONDON - Beach Blossom Eau de Cologne with coconut water and vanilla", image: "images/products/Soft Glam Full Face Makeup That Looks Expensive/jomalonecocovanille.webp", link: "https://www.sephora.com/ca/fr/product/beach-blossom-cologne-P514500" }
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
      { name: "HUDA BEAUTY - Easy Blur Silicone-Free Smoothing & Pore-Minimizing Primer", image: "images/products/Soft girl makeup natural glow that attracts/s2787414-main-zoom.webp", link: "https://www.sephora.com/product/huda-beauty-easy-blur-silicone-free-smoothing-primer-P512639" },
      { name: "NARS - Natural Radiant Longwear Foundation", image: "images/products/Soft girl makeup natural glow that attracts/s2031011-main-zoom.webp", link: "https://www.sephora.com/product/natural-radiant-longwear-foundation-P427301" },
      { name: "TOO FACED - Born This Way Super Coverage Multi-Use Concealer", image: "images/products/Soft girl makeup natural glow that attracts/s2084408-main-zoom (1).webp", link: "https://www.sephora.com/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Talc-Free Blush Powder With Fermented Arnica", image: "images/products/Soft girl makeup natural glow that attracts/s2760908-main-zoom.webp", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025" },
      { name: "CHARLOTTE TILBURY - Beauty Highlighter Wand", image: "images/products/Soft girl makeup natural glow that attracts/s2366524-main-zoom.webp", link: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154" },
      { name: "BENEFIT COSMETICS - Precisely, My Brow Pencil Waterproof Eyebrow Definer", image: "images/products/Soft girl makeup natural glow that attracts/s2086759-main-zoom (1).webp", link: "https://www.sephora.com/product/precisely-my-brow-pencil-P408219" },
      { name: "BENEFIT COSMETICS - Fan Fest Fanning & Volumizing Mascara", image: "images/products/Soft girl makeup natural glow that attracts/325908-media_swatch-1.jpg", link: "https://www.sephora.com/product/fan-fest-mascara-P506688" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extreme Smudge-Proof Lip Liner", image: "images/products/Soft girl makeup natural glow that attracts/s2797405-main-zoom.webp", link: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-extreme-waterproof-lip-liner-P512173" },
      { name: "YVES SAINT LAURENT - Candy Glaze Lip Gloss Stick", image: "images/products/Soft girl makeup natural glow that attracts/s2511335-main-zoom.webp", link: "https://www.sephora.com/product/yves-saint-laurent-candy-glaze-lip-gloss-stick-P480000" },
      { name: "Juliette Has a Gun - Not A Perfume", image: "images/products/Soft girl makeup natural glow that attracts/s1703321-main-zoom.webp", link: "https://www.sephora.com/product/not-perfume-P395313" }
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
      { name: "GLOSSIER - Futuredew Facial Oil-Serum Hybrid", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/332765-media_swatch.jpg", link: "https://www.sephora.com/product/glossier-futuredew-facial-oil-serum-hybrid-P504523" },
      { name: "ILIA - Super Serum Skin Tint SPF 40 Hydrating Foundation", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/s2547123-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/P478281" },
      { name: "ARMANI BEAUTY - Luminous Silk Hydrating Face and Under-Eye Concealer", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/s2340982-main-zoom.webp", link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Longwear Hydrating Glassy Lip + Cheek Blush Balm Stick", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/s2870178-main-zoom.webp", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-longwear-hydrating-glassy-lip-cheek-blush-balm-stick-P510741" },
      { name: "BENEFIT COSMETICS - Hoola Wave Cream Bronzer Balm", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/364577-media_swatch.jpeg", link: "https://www.sephora.com/product/hoola-wave-bronzing-balm-P515967" },
      { name: "BENEFIT COSMETICS - Cookie Highlighter", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/275249-media_swatch.jpg", link: "https://www.sephora.com/product/cookie-highlighter-P447375" },
      { name: "GLOSSIER - Boy Brow Arch 2-in-1 Longwear Pomade Eyebrow Pencil", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/353452-media_swatch.jpg", link: "https://www.sephora.com/product/glossier-boy-brow-arch-2-in-1-longwear-pomade-eyebrow-pencil-P513331" },
      { name: "tarte - tartelette™ tubing mascara", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/277089-media_swatch.jpg", link: "https://www.sephora.com/product/tartelette-tubing-mascara-P500182" },
      { name: "HOURGLASS - Shape & Sculpt Lip Liner", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/338607-media_swatch.jpg", link: "https://www.sephora.com/product/hourglass-shape-sculpt-lip-liner-P509656" },
      { name: "tarte - Maracuja Juicy Lip Balm Gloss", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/s2370518-main-zoom.webp", link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-P467977" },
      { name: "KYLIE COSMETICS - Cosmic Eau de Parfum", image: "images/products/Bronzed Summer Natural Glowy Makeup Inspo/s2930287-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/cosmic-eau-de-parfum-P520475" }
    ]
  },{
    id: 21,
    slug: "soft-sculpted-makeup-that-flatters-the-whole-face",
    title: "Soft Sculpted Makeup That Flatters the Whole Face",
    category: "natural",
    homeImage: "images/home/file_0000000014a471f48762fd29dd6c4c01.png",
    heroImage: "images/home/file_0000000014a471f48762fd29dd6c4c01.png",
    products: [
      { name: "MILK MAKEUP - Hydro Grip Primer", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/s2850402-main-zoom.webp", link: "https://www.sephora.com/product/hydro-grip-primer-P441813" },
      { name: "LAURA MERCIER - Long-Wear Tinted Moisturizer Natural Dewy Skin Tint SPF 30 with Hyaluronic Acid", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/364876-media_swatch.jpg", link: "https://www.sephora.com/product/long-wear-tinted-moisturizer-natural-dewy-spf-30-with-hyaluronic-acid-P514887" },
      { name: "HOURGLASS - Vanish Airbrush Concealer", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/161730-media_swatch.jpg", link: "https://www.sephora.com/product/hourglass-vanish-airbrush-concealer-P454042" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Talc-Free Blush Powder With Fermented Arnica", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/342909-media_swatch.jpg", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025" },
      { name: "RARE BEAUTY - Warm Wishes Effortless Cream Bronzer Stick", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/268492-media_swatch.jpg", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-warm-wishes-effortless-bronzer-sticks-P479343" },
      { name: "BENEFIT COSMETICS - Cookie Highlighter", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/275249-media_swatch.jpg", link: "https://www.sephora.com/product/cookie-highlighter-P447375" },
      { name: "KOSAS - Brow Pop Nano Ultra-Fine Detailing + Feathering Eyebrow Pencil", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/330210-media_swatch.jpg", link: "https://www.sephora.com/product/brow-pop-nano-ultra-fine-detailing-feathering-eyebrow-pencil-P506794" },
      { name: "BENEFIT COSMETICS - 24-HR Brow Setter Clear Brow Gel with Lamination Effect", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/59201-media_swatch.jpg", link: "https://www.sephora.com/product/24-hr-brow-setter-P409242" },
      { name: "stila - Stay All Day Waterproof Liquid Eye Liner", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/s1221084-main-zoom.webp", link: "https://www.sephora.com/product/stay-all-day-waterproof-liquid-eye-liner-P253818" },
      { name: "RARE BEAUTY - Perfect Strokes Universal Volumizing Mascara", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/240793-media_swatch.jpg", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-perfect-strokes-universal-volumizing-mascara-P475599" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extreme Smudge-Proof Lip Liner", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/355096-media_swatch.jpg", link: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-extreme-waterproof-lip-liner-P512173" },
      { name: "YVES SAINT LAURENT - YSL Candy Glaze Lip Gloss Stick", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/283920-media_swatch.jpg", link: "https://www.sephora.com/product/yves-saint-laurent-candy-glaze-lip-gloss-stick-P480000" },
      { name: "BENEFIT COSMETICS - The POREfessional: Super Setter Pore-Minimizing Waterproof Setting Spray", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/229327-media_swatch.jpg", link: "https://www.sephora.com/product/benefit-cosmetics-the-porefessional-super-setter-setting-spray-P466656" },
      { name: "Juliette Has a Gun - Lust For Sun Eau de Parfum", image: "images/products/Soft Sculpted Makeup That Flatters the Whole Face/s2648582-main-zoom.webp", link: "https://www.sephora.com/product/lust-for-sun-eau-de-parfum-P505319" }
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
      { name: "Yves Saint Laurent - Touche Éclat Blur Face Primer", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s1713114-main-zoom (1).webp", link: "https://www.sephora.com/product/touche-eclat-blur-primer-P397615" },
      { name: "NARS - Light Reflecting Skin Improving Medium Coverage Foundation with Cacao Peptides", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2514644-main-zoom.webp", link: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338" },
      { name: "Hourglass - Vanish Airbrush Concealer", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2302909-main-zoom.webp", link: "https://www.sephora.com/product/hourglass-vanish-airbrush-concealer-P454042" },
      { name: "Gucci - Luminous Matte Powder Blush", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2587319-main-zoom.webp", link: "https://www.sephora.com/product/luminous-matte-beauty-blush-P502188" },
      { name: "Rare Beauty by Selena Gomez - Warm Wishes Effortless Cream Bronzer Stick", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2518934-main-zoom.webp", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-warm-wishes-effortless-bronzer-sticks-P479343" },
      { name: "Charlotte Tilbury - Beauty Highlighter Wand", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2366524-main-zoom (1).webp", link: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154" },
      { name: "Benefit Cosmetics - Gimme Brow+ Tinted Volumizing Eyebrow Gel", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2080224-main-zoom (1).webp", link: "https://www.sephora.com/product/gimme-brow-P409239" },
      { name: "Yves Saint Laurent - Lash Clash Extreme Volume Mascara", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2638336-main-zoom (1) (1).webp", link: "https://www.sephora.com/product/yves-saint-laurent-lash-clash-extreme-volume-mascara-P479863" },
      { name: "HUDA BEAUTY - Lip Contour 2.0 Automatic Matte Lip Pencil", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2431120-main-zoom.webp", link: "https://www.sephora.com/product/huda-beauty-lip-contour-pencil-2-0-P471243" },
      { name: "DIOR - Dior Addict Lip Maximizer Plumping Gloss", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2635654-main-zoom (1).webp", link: "https://www.sephora.com/product/dior-addict-lip-maximizer-plumping-gloss-P186805" },
      { name: "MISS DIOR - Eau de Parfum", image: "images/products/The Makeup Look That Gives Effortless Model Energy/s2467371-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/dior-miss-dior-eau-de-parfum-P474316" }
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
      { name: "DIOR - Backstage Face & Body Foundation", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2669166-main-zoom.webp", link: "https://www.sephora.com/product/backstage-face-body-foundation-P432500" },
      { name: "NATASHA DENONA - Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2671618-main-zoom.webp", link: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800" },
      { name: "PATRICK TA - Major Headlines Double-Take Crème & Powder Blush Duo", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2849768-main-zoom (1).webp", link: "https://www.sephora.com/product/patrick-ta-major-headlines-cream-powder-blush-duo-P458747" },
      { name: "MAKEUP BY MARIO - SoftSculpt® Talc-Free Blurring Bronzer", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2867547-main-zoom.webp", link: "https://www.sephora.com/product/softsculpt-blurring-bronzer-P516545" },
      { name: "RARE BEAUTY - Positive Light Silky Touch Highlighter", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2629483-main-zoom (1).webp", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-positive-light-silky-touch-highlighter-P503711" },
      { name: "HUDA BEAUTY - Easy Bake Loose Baking & Setting Powder", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2114080-main-zoom.webp", link: "https://www.sephora.com/product/easy-bake-loose-baking-setting-powder-P433402" },
      { name: "HOURGLASS - Arch Brow Sculpting Pencil", image: "images/products/A feminine full face makeup look that feels so soft and chic/s1454271-main-zoom (1).webp", link: "https://www.sephora.com/product/arch-brow-sculpting-pencil-P376457" },
      { name: "stila - Stay All Day® Waterproof Liquid Eye Liner", image: "images/products/A feminine full face makeup look that feels so soft and chic/s1221084-main-zoom.webp", link: "https://www.sephora.com/product/stay-all-day-waterproof-liquid-eye-liner-P253818" },
      { name: "ILIA - Limitless Lash Mascara", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2335198-main-zoom~2.jpg", link: "https://www.sephora.com/ca/fr/product/limitless-lash-mascara-P431750" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extreme Smudge-Proof Lip Liner", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2797405-main-zoom (1).webp", link: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-extreme-waterproof-lip-liner-P512173" },
      { name: "MAC COSMETICS - M·A·Cximal Silky Matte Lipstick", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2764421-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/mac-cosmetics-m-a-cximal-silky-matte-lipstick-P510799" },
      { name: "KAYALI - VANILLA | 28 Eau de Parfum", image: "images/products/A feminine full face makeup look that feels so soft and chic/s2163970-main-zoom.webp", link: "https://www.sephora.com/product/kayali-vanilla-P439406" }
    ]
  },
  {
    id: 24,
    slug: "natural-soft-glam-for-a-beautifully-defined-face",
    title: "Natural Soft Glam for a Beautifully Defined Face",
    category: "natural",
    homeImage: "images/home/file_00000000211c720aaa39ea5ebc9f4aff~2.png",
    heroImage: "images/home/file_00000000211c720aaa39ea5ebc9f4aff~2.png",
    products: [
      { name: "GLOSSIER - Futuredew Facial Oil-Serum Hybrid", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2649507-main-zoom.webp", link: "https://www.sephora.com/product/glossier-futuredew-facial-oil-serum-hybrid-P504523" },
      { name: "Saie - Slip Tint Lightweight Tinted Moisturizer with Mineral Zinc SPF 35 and Hyaluronic Acid", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2499465-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/P478316" },
      { name: "MERIT - Flush Balm Cream Blush", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2842870-main-zoom.webp", link: "https://www.sephora.com/product/merit-flush-balm-cream-blush-P468693" },
      { name: "Benefit Cosmetics - Hoola Wave Cream Bronzer Balm", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2867885-main-zoom.webp", link: "https://www.sephora.com/product/hoola-wave-bronzing-balm-P515967" },
      { name: "Westman Atelier - Lit Up Highlight Stick", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2648038-main-zoom.webp", link: "https://www.sephora.com/product/westman-atelier-lit-up-highlight-stick-P468430" },
      { name: "Kosas - Brow Pop Nano Ultra-Fine Detailing + Feathering Eyebrow Pencil", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/330210-media_swatch.jpg", link: "https://www.sephora.com/product/brow-pop-nano-ultra-fine-detailing-feathering-eyebrow-pencil-P506794" },
      { name: "MERIT - Clean Lash Lengthening Tubing Mascara", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2426781-main-zoom~2.jpg", link: "https://www.sephora.com/product/merit-clean-lash-lengthening-mascara-P468692" },
      { name: "HOURGLASS - Shape & Sculpt Lip Liner", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2738896-main-zoom (1).webp", link: "https://www.sephora.com/product/hourglass-shape-sculpt-lip-liner-P509656" },
      { name: "MERIT - Shade Slick Hydrating Tinted Lip Oil", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s2849925-main-zoom.webp", link: "https://www.sephora.com/product/merit-shade-slick-tinted-lip-oil-P468691" },
      { name: "Maison Margiela - 'REPLICA' Beach Walk Eau de Toilette with Coconut Milk & Musk", image: "images/products/Natural Soft Glam for a Beautifully Defined Face/s1593144-main-zoom.webp", link: "https://www.sephora.com/product/replica-beach-walk-P385358" }
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
      { name: "Tatcha - The Liquid Silk Canvas: Featherweight Protective Primer", image: "images/products/Minimal glam makeup with maximum pretty effect/s2339711-main-zoom.jpg", link: "https://www.sephora.com/product/tatcha-the-liquid-silk-canvas-featherweight-protective-primer-P456446" },
      { name: "MAKE UP FOR EVER - HD Skin Hydra Glow Hydrating Foundation with Hyaluronic Acid", image: "images/products/Minimal glam makeup with maximum pretty effect/s2738425-main-zoom.webp", link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-hydra-glow-skincare-foundation-with-hyaluronic-acid-P510064" },
      { name: "Kosas - Revealer Super Creamy + Brightening Concealer with Caffeine and Hyaluronic Acid", image: "images/products/Minimal glam makeup with maximum pretty effect/s2737351-main-zoom.webp", link: "https://www.sephora.com/product/kosas-revealer-concealer-P456151" },
      { name: "Danessa Myricks Beauty - Yummy Skin Blurring Balm Powder Flushed - Matte Color for Cheek & Lip", image: "images/products/Minimal glam makeup with maximum pretty effect/s2654028-main-zoom.webp", link: "https://www.sephora.com/product/danessa-myricks-beauty-yummy-skin-blurring-balm-powder-flushed-P504051" },
      { name: "Saie - Soft Focus Effortless Liquid Bronzer", image: "images/products/Minimal glam makeup with maximum pretty effect/s2753788-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/saie-dew-bronze-soft-focus-effortless-liquid-bronzer-P510823" },
      { name: "Westman Atelier - Super Loaded Tinted Highlighter", image: "images/products/Minimal glam makeup with maximum pretty effect/s2415081-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/westman-atelier-super-loaded-tinted-highlight-P468432" },
      { name: "Kosas - Air Brow Clear + Clean Lifting Treatment Eyebrow Gel with Lamination Effect", image: "images/products/Minimal glam makeup with maximum pretty effect/316418-media_swatch.jpg", link: "https://www.sephora.com/product/kosas-air-brow-clean-lifting-treatment-eyebrow-gel-P471048" },
      { name: "Too Faced - Better than Sex Mascara", image: "images/products/Minimal glam makeup with maximum pretty effect/s1533439-main-zoom~2.jpg", link: "https://www.sephora.com/ca/fr/product/better-than-sex-mascara-P381000" },
      { name: "LAWLESS - Forget The Filler Definer Lip Liner", image: "images/products/Minimal glam makeup with maximum pretty effect/s2862894-main-zoom (1).webp", link: "https://www.sephora.com/product/lawless-forget-filler-definer-lip-liner-P468455" },
      { name: "LAWLESS - Forget The Filler Lip Plumper Line Smoothing Gloss", image: "images/products/Minimal glam makeup with maximum pretty effect/s2414514-main-zoom.webp", link: "https://www.sephora.com/product/lawless-forget-filler-lip-plumping-line-smoothing-gloss-P468175" },
      { name: "TOM FORD - Vanilla Sex Perfume", image: "images/products/Minimal glam makeup with maximum pretty effect/s2729713-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/vanilla-sex-P508293" }
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
      { name: "MILK MAKEUP - Pore Eclipse Liquid Primer", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2572857-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/milk-makeup-pore-eclipse-liquid-primer-P483674" },
      { name: "HAUS LABS BY LADY GAGA - Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/321536-media_swatch.jpg", link: "https://www.sephora.com/ca/fr/product/triclone-skin-tech-medium-coverage-foundation-with-fermented-arnica-P502185" },
      { name: "tarte - shape tape™ hydrating full coverage creamy concealer", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2821478-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/tarte-shape-tape-tm-ultra-creamy-concealer-P514043" },
      { name: "Yves Saint Laurent - Make Me Blush 24H Buildable Powder Blush", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2935195-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/make-me-blush-24h-buildable-powder-blush-P514568" },
      { name: "HAUS LABS BY LADY GAGA - Bio-Radiant Glassy Highlighter Balm", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2850345-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/haus-labs-by-lady-gaga-bio-radiant-glassy-highlighter-balm-P515434" },
      { name: "Prada - Pradascope Lash Lifting & Lengthening Mascara", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2836070-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/prada-beauty-pradascope-lash-lifting-lengthening-mascara-P515390" },
      { name: "MILK MAKEUP - KUSH Fiber Eyebrow Gel", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2100519-main-zoom.jpg", link: "https://www.sephora.com/ca/fr/product/kush-fiber-brow-gel-P433125" },
      { name: "Benefit Cosmetics - Mighty Fine Waterproof Brow Pen", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2843852-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/mighty-fine-waterproof-brow-pen-P514691" },
      { name: "Charlotte Tilbury - Airbrush Flawless Matte Blurring Waterproof Setting Spray", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2891372-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/airbrush-flawless-matte-blurring-waterproof-setting-spray-P516899" },
      { name: "Carolina Herrera - Good Girl Jasmine Absolute Eau de Parfum", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2929719-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/good-girl-jasmine-absoulute-eau-de-parfum-P520176" },
      { name: "Yves Saint Laurent - YSL Loveshine Plumping Lip Oil Gloss with Hyaluronic Acid", image: "images/products/Soft Glow Makeup That Looks Pretty Without Trying too Hard/s2830172-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/ysl-loveshine-plumping-lip-oil-gloss-with-hyaluronic-acid-P515552" }
    ]
  },
  {
    id: 27,
    slug: "soft-summer-face-goals",
    title: "Soft summer face goals",
    category: "natural",
    homeImage: "images/home/file_00000000d58c720aad99eb01a1c58cb3~2.png",
    heroImage: "images/home/file_00000000d58c720aad99eb01a1c58cb3~2.png",
    products: [
      { name: "Hourglass Mini Veil Mineral Primer", link: "https://www.sephora.com/ca/fr/product/veil-mineral-primer-mini-P425958", image: "images/products/Soft summer face goals/s1319201-main-zoom.webp" },
      { name: "Milk Makeup Dewy Cream Highlighter Stick", link: "https://www.sephora.com/ca/fr/product/dewy-cream-highlighter-stick-P404798", image: "images/products/Soft summer face goals/s2135333-main-zoom.webp" },
      { name: "NARS Mini Radiant Creamy Concealer", link: "https://www.sephora.com/ca/fr/product/radiant-creamy-concealer-mini-P422077", image: "images/products/Soft summer face goals/s2245363-main-zoom.webp" },
      { name: "TOM FORD Mini Soleil Blanc Shimmering Body Oil", link: "https://www.sephora.com/ca/fr/product/tom-ford-soleil-blanc-mini-shimmering-body-oil-P456175", image: "images/products/Soft summer face goals/s2327278-main-zoom.webp" },
      { name: "Caliray Big Swell Hydrating Lip Plumper Gloss", link: "https://www.sephora.com/ca/fr/product/big-swell-hydrating-lip-plumper-gloss-P508701", image: "images/products/Soft summer face goals/s2643500-main-zoom.jpg" },
      { name: "Rare Beauty by Selena Gomez Brow Harmony Precision Pencil", link: "https://www.sephora.com/ca/fr/product/brow-harmony-precision-pencil-P506703", image: "images/products/Soft summer face goals/s2689289-main-zoom.webp" },
      { name: "Hourglass Veil Hydrating Skin Tint Foundation", link: "https://www.sephora.com/ca/fr/product/veil-hydrating-skin-tint-P506573", image: "images/products/Soft summer face goals/s2690915-main-zoom.webp" },
      { name: "Rare Beauty by Selena Gomez Brow Harmony Flexible Lifting Gel", link: "https://www.sephora.com/ca/fr/product/brow-harmony-flexible-lifting-gel-P507797", image: "images/products/Soft summer face goals/s2728186-main-zoom (1).webp" },
      { name: "KAYALI Yum Boujee Marshmallow | 81 Eau de Parfum Intense", link: "https://www.sephora.com/ca/fr/product/kayali-yum-boujee-marshmallow-81-eau-de-parfum-intense-P512856", image: "images/products/Soft summer face goals/s2804821-main-zoom.webp" },
      { name: "Armani Beauty Vertigo Lift Longwear Lengthening Mascara", link: "https://www.sephora.com/ca/fr/product/giorgio-armani-beauty-vertigo-lift-longwear-lengthening-mascara-P515781", image: "images/products/Soft summer face goals/s2853364-main-zoom (1).webp" },
      { name: "Urban Decay All Nighter Setting Spray", link: "https://www.sephora.com/ca/fr/product/all-nighter-setting-spray-P518812", image: "images/products/Soft summer face goals/s2891414-main-zoom.webp" },
      { name: "Rhode Pocket Blush", link: "https://www.sephora.com/ca/fr/product/pocket-blush-P517483", image: "images/products/Soft summer face goals/s2895845-main-zoom.webp" }
    ]
  },
  {
    id: 28,
    slug: "natural-makeup-look-glowing-skin",
    title: "Natural makeup look glowing skin",
    category: "natural",
    homeImage: "images/home/file_00000000d0e07243a0fef5f654eb7d9b~2.png",
    heroImage: "images/home/file_00000000d0e07243a0fef5f654eb7d9b~2.png",
    products: [
      { name: "Charlotte Tilbury Brow Cheat Refillable Hair-Like Eyebrow Pencil", link: "https://www.sephora.com/ca/fr/product/charlotte-tilbury-brow-cheat-P470203", image: "images/products/Natural makeup look glowing skin/s2432649-main-zoom.webp" },
      { name: "Anastasia Beverly Hills Strong Hold Clear Brow Gel", link: "https://www.sephora.com/ca/fr/product/brow-gel-P69304", image: "images/products/Natural makeup look glowing skin/s2914802-main-zoom.webp" },
      { name: "REFY Lash Sculpt Lengthen and Lift Mascara", link: "https://www.sephora.com/ca/fr/product/refy-beauty-lash-sculpt-lengthen-and-lift-mascara-P510451", image: "images/products/Natural makeup look glowing skin/s2617819-main-zoom.webp" },
      { name: "HAUS LABS BY LADY GAGA Triclone Skin Tech Hydrating Concealer with Fermented Arnica", link: "https://www.sephora.com/ca/fr/product/triclone-skin-tech-hydrating-concealer-with-fermented-arnica-P507110", image: "images/products/Natural makeup look glowing skin/s2696920-main-zoom.webp" },
      { name: "Laura Mercier Pure Canvas Primer Mini Blurring", link: "https://www.sephora.com/ca/fr/product/laura-mercier-pure-canvas-primer-mini-blurring-floutant-P454946", image: "images/products/Natural makeup look glowing skin/s2748168-main-zoom.webp" },
      { name: "Charlotte Tilbury Lip Cheat Lip Liner", link: "https://www.sephora.com/ca/fr/product/lip-cheat-lip-liner-P433516", image: "images/products/Natural makeup look glowing skin/s2765618-main-zoom (2).webp" },
      { name: "KVD Beauty Tattoo Liner Vegan Waterproof Liquid Eyeliner", link: "https://www.sephora.com/ca/fr/product/kvd-vegan-beauty-tattoo-liner-vegan-waterproof-liquid-eyeliner-P512215", image: "images/products/Natural makeup look glowing skin/s2781599-main-zoom.webp" },
      { name: "MAKEUP BY MARIO SurrealSkin 16HR Soft Setting Spray", link: "https://www.sephora.com/ca/fr/product/makeup-by-mario-setting-spray-P512899", image: "images/products/Natural makeup look glowing skin/s2795938-main-zoom.webp" },
      { name: "MAKEUP BY MARIO SurrealSkin Natural Finish Foundation", link: "https://www.sephora.com/ca/fr/product/surrealskin-natural-finish-foundation-P516977", image: "images/products/Natural makeup look glowing skin/s2835361-main-zoom.webp" },
      { name: "DIOR Forever Glow Luminizer Highlighter", link: "https://www.sephora.com/ca/fr/product/dior-forever-glow-luminizer-highlighter-P515394", image: "images/products/Natural makeup look glowing skin/s2836435-main-zoom.webp" },
      { name: "Dior J'adore Eau de Parfum", link: "https://www.sephora.com/ca/fr/product/j-adore-eau-de-parfum-P6430", image: "images/products/Natural makeup look glowing skin/s2836880-main-zoom.webp" },
      { name: "Freck Beauty FRECK OG The Original Freckle", link: "https://www.sephora.com/ca/fr/product/freck-beauty-freck-og-the-original-P468653", image: "images/products/Natural makeup look glowing skin/s2441129-main-zoom.webp" },
      { name: "Saie Mini Dew Blush Liquid Cream Blush", link: "https://www.sephora.com/ca/fr/product/mini-dew-blush-P520666", image: "images/products/Natural makeup look glowing skin/s2938538-main-zoom.webp" },
      { name: "rhode Peptide Lip Tint", link: "https://www.sephora.com/ca/fr/product/peptide-lip-tint-P517552", image: "images/products/Natural makeup look glowing skin/s2895993-main-zoom.webp" }
    ]
  },
  {
    id: 29,
    slug: "obsessed-with-this-glossy-makeup-look",
    title: "Obsessed with this glossy makeup look",
    category: "natural",
    homeImage: "images/home/file_00000000f9cc7246aff5aee19941825b~2.png",
    heroImage: "images/home/file_00000000f9cc7246aff5aee19941825b~2.png",
    products: [
      { name: "Too Faced Born This Way Super Coverage Multi-Use Concealer", link: "https://www.sephora.com/ca/fr/product/born-this-way-super-coverage-multi-use-concealer-with-hyaluronic-acid-P432298", image: "images/products/Obsessed with this glossy makeup look/s2084408-main-zoom (2).webp" },
      { name: "Rare Beauty by Selena Gomez Mini Pore Diffusing Primer - Always An Optimist Collection", link: "https://www.sephora.com/ca/fr/product/rare-beauty-by-selena-gomez-mini-always-an-optimist-pore-diffusing-primer-P471075", image: "images/products/Obsessed with this glossy makeup look/s2448082-main-zoom.webp" },
      { name: "ONE/SIZE by Patrick Starrr On 'Til Dawn Mattifying Waterproof Setting Spray", link: "https://www.sephora.com/ca/fr/product/one-size-by-patrick-starrr-on-til-dawn-setting-spray-P476716", image: "images/products/Obsessed with this glossy makeup look/s2490720-main-zoom.webp" },
      { name: "Carolina Herrera Good Girl Blush Eau de Parfum", link: "https://www.sephora.com/ca/fr/product/good-girl-blush-eau-de-parfum-P504996", image: "images/products/Obsessed with this glossy makeup look/s2645018-main-zoom.webp" },
      { name: "MILK MAKEUP KUSH High Volumizing Mascara", link: "https://www.sephora.com/ca/fr/product/kush-mascara-P429903", image: "images/products/Obsessed with this glossy makeup look/s2827608-main-zoom (1).webp" },
      { name: "Bobbi Brown Precise 24-Hour Ultra Slim Waterproof Eyebrow Pencil", link: "https://www.sephora.com/ca/fr/product/precise-brow-pencil-P514606", image: "images/products/Obsessed with this glossy makeup look/s2839769-main-zoom.webp" },
      { name: "Live Tinted Soft Gloss Juicy Lip Gloss", link: "https://www.sephora.com/ca/fr/product/softgloss-juicy-lip-gloss-P515699", image: "images/products/Obsessed with this glossy makeup look/s2875862-main-zoom.webp" },
      { name: "Rare Beauty by Selena Gomez True to Myself Natural Matte Longwear Foundation", link: "https://www.sephora.com/ca/fr/product/true-to-myself-natural-matte-longwear-foundation-P521996", image: "images/products/Obsessed with this glossy makeup look/s2894020-main-zoom.webp" },
      { name: "Rare Beauty by Selena Gomez Soft Pinch Liquid Blush", link: "https://www.sephora.com/ca/fr/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778", image: "images/products/Obsessed with this glossy makeup look/s2911741-main-zoom.webp" },
      { name: "Morphe Dreamlight Gelee Highlighter Stick", link: "https://www.sephora.com/ca/fr/product/dreamlight-gelee-highlighter-stick-P520075", image: "images/products/Obsessed with this glossy makeup look/s2936078-main-zoom.webp" }
    ]
  },
  {
    id: 30,
    slug: "clean-girl-aesthetic-makeup",
    title: "Clean girl aesthetic makeup",
    category: "natural",
    homeImage: "images/home/file_000000007e9c7243907bca61532d320b~2.png",
    heroImage: "images/home/file_000000007e9c7243907bca61532d320b~2.png"
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
    heroImage: "images/home/file_000000007104720a968f49ab2b5653a4~2.png"
  },
  {
    id: 33,
    slug: "subtle-glam-inspiration-for-a-soft-feminine-makeup-look",
    title: "Subtle Glam Inspiration for a Soft Feminine Makeup Look",
    category: "natural",
    homeImage: "images/home/file_0000000090dc7246a4c71ddd62e848e7~2.png",
    heroImage: "images/home/file_0000000090dc7246a4c71ddd62e848e7~2.png"
  },
  {
    id: 34,
    slug: "neutral-makeup-look-idea-that-flatters-every-face",
    title: "Neutral Makeup Look Idea That Flatters Every Face",
    category: "natural",
    homeImage: "images/home/file_00000000e6f4720a86c85843d2525682~2.png",
    heroImage: "images/home/file_00000000e6f4720a86c85843d2525682~2.png"
  },
  {
    id: 35,
    slug: "bronzed-skin-makeup-inspiration-for-a-natural-luminous-makeup-look",
    title: "Bronzed Skin Makeup Inspiration for a natural luminous makeup look",
    category: "natural",
    homeImage: "images/home/file_000000001a6c7246abf44b0fdaae9e70~2.png",
    heroImage: "images/home/file_000000001a6c7246abf44b0fdaae9e70~2.png"
  },
  {
    id: 36,
    slug: "dewy-skin-makeup-trend-that-makes-your-skin-look-unreal",
    title: "Dewy Skin Makeup Trend That Makes Your Skin Look Unreal",
    category: "natural",
    homeImage: "images/home/file_000000009aa0724390027931645b40c1~2.png",
    heroImage: "images/home/file_000000009aa0724390027931645b40c1~2.png",
    products: [
      { name: "ARMANI BEAUTY - Luminous Silk Hydrating & Glow-Extending Primer", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/393683-media_swatch-0.jpg", link: "https://www.sephora.com/product/luminous-silk-hydrating-glow-extending-primer-P520126" },
      { name: "MAKE UP FOR EVER - HD Skin Hydra Glow Hydrating Foundation with Hyaluronic Acid", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/342359-media_swatch.jpg", link: "https://www.sephora.com/product/make-up-for-ever-hd-skin-hydra-glow-skincare-foundation-with-hyaluronic-acid-P510064" },
      { name: "NATASHA DENONA - Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/307899-media_swatch.jpg", link: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800" },
      { name: "RARE BEAUTY - Soft Pinch Liquid Blush", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/236075-media_swatch.jpg", link: "https://www.sephora.com/product/rare-beauty-by-selena-gomez-soft-pinch-liquid-blush-P97989778" },
      { name: "MAKEUP BY MARIO - SoftSculpt® Talc-Free Blurring Bronzer", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/301036-media_swatch.jpg", link: "https://www.sephora.com/product/softsculpt-blurring-bronzer-P516545" },
      { name: "ANASTASIA BEVERLY HILLS - Brow Wiz® Ultra-Slim Precision Eyebrow Defining Pencil", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/57455-media_swatch (1).jpg", link: "https://www.sephora.com/product/brow-wiz-P202633" },
      { name: "ANASTASIA BEVERLY HILLS - Brow Freeze® Gel Extreme-Hold Lifting & Laminating Clear Gel", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/338453-media_swatch.jpg", link: "https://www.sephora.com/product/anastasia-beverly-hills-brow-freeze-gel-P509088" },
      { name: "HUDA BEAUTY - Creamy Kohl Longwear Eye Pencil", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/s2651834-main-zoom.webp", link: "https://www.sephora.com/product/huda-beauty-creamy-kohl-longwear-eye-pencil-P504900" },
      { name: "LANCÔME - Lash Idôle Flutter Extension Lengthening Mascara", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/364718-media_swatch.jpeg", link: "https://www.sephora.com/product/lash-idole-flutter-extension-lengthening-mascara-P515062" },
      { name: "MAKEUP BY MARIO - Ultra Suede® Sculpting Lip Pencil", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/301118-media_swatch.jpg", link: "https://www.sephora.com/product/makeup-by-mario-ultra-suede-sculpting-lip-pencil-P477838" },
      { name: "FENTY BEAUTY - Gloss Bomb Stix High-Shine Gloss Stick", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/348348-media_swatch.jpg", link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-stix-high-shine-gloss-stick-P511572" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Hydrating & Waterproof Setting Spray", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/352359-media_swatch.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147" },
      { name: "KAYALI - Eden Sparkling Lychee | 39 Eau de Parfum", image: "images/products/Dewy Skin Makeup Trend That Makes Your Skin Look Unreal/335741-media_swatch.jpg", link: "https://www.sephora.com/product/eden-sparkling-lychee-39-eau-de-parfum-P508177" }
    ]
  },
  {
    id: 37,
    slug: "pretty-everyday-makeup-with-a-soft-glossy-finish",
    title: "Pretty Everyday Makeup With a Soft Glossy Finish",
    category: "natural",
    homeImage: "images/home/file_00000000e17071f493d5a95688ac28a2~2.png",
    heroImage: "images/home/file_00000000e17071f493d5a95688ac28a2~2.png"
  },
  {
    id: 38,
    slug: "bronzed-skin-makeup-look-for-a-sun-kissed-glow",
    title: "Bronzed Skin Makeup Look for a Sun Kissed Glow",
    category: "natural",
    homeImage: "images/home/file_00000000f4f07243a66ceead3a4fb5af~2.png",
    heroImage: "images/home/file_00000000f4f07243a66ceead3a4fb5af~2.png",
    products: [
      { name: "GLOSSIER - Futuredew Facial Oil-Serum Hybrid", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/332765-media_swatch.jpg", link: "https://www.sephora.com/product/glossier-futuredew-facial-oil-serum-hybrid-P504523" },
      { name: "ILIA - Super Serum Skin Tint SPF 40 Hydrating Foundation", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/s2547123-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/P478281" },
      { name: "ARMANI BEAUTY - Luminous Silk Hydrating Face and Under-Eye Concealer", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/s2340982-main-zoom.webp", link: "https://www.sephora.com/product/giorgio-armani-beauty-luminous-silk-concealer-P456158" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Longwear Hydrating Glassy Lip + Cheek Blush Balm Stick", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/s2870178-main-zoom.webp", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-longwear-hydrating-glassy-lip-cheek-blush-balm-stick-P510741" },
      { name: "BENEFIT COSMETICS - Hoola Wave Cream Bronzer Balm", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/364577-media_swatch.jpeg", link: "https://www.sephora.com/product/hoola-wave-bronzing-balm-P515967" },
      { name: "BENEFIT COSMETICS - Cookie Highlighter", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/275249-media_swatch.jpg", link: "https://www.sephora.com/product/cookie-highlighter-P447375" },
      { name: "GLOSSIER - Boy Brow Arch 2-in-1 Longwear Pomade Eyebrow Pencil", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/353452-media_swatch.jpg", link: "https://www.sephora.com/product/glossier-boy-brow-arch-2-in-1-longwear-pomade-eyebrow-pencil-P513331" },
      { name: "tarte - tartelette™ tubing mascara", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/277089-media_swatch.jpg", link: "https://www.sephora.com/product/tartelette-tubing-mascara-P500182" },
      { name: "HOURGLASS - Shape & Sculpt Lip Liner", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/338607-media_swatch.jpg", link: "https://www.sephora.com/product/hourglass-shape-sculpt-lip-liner-P509656" },
      { name: "tarte - Maracuja Juicy Lip Balm Gloss", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/s2370518-main-zoom.webp", link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-P467977" },
      { name: "KYLIE COSMETICS - Cosmic Eau de Parfum", image: "images/products/Bronzed Skin Makeup Look for a Sun Kissed Glow/s2930287-main-zoom.webp", link: "https://www.sephora.com/ca/fr/product/cosmic-eau-de-parfum-P520475" }
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
    heroImage: "images/home/file_00000000ffec71f49d6795559e8be151~2.png"
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
    heroImage: "images/home/file_00000000a20c7243a72f79cd4cd6cff5~2.png"
  },
  {
    id: 47,
    slug: "viral-makeup-look-2026-with-flawless-base",
    title: "Viral Makeup Look 2026 with Flawless Base",
    category: "glam",
    homeImage: "images/home/file_00000000e1f071f48768b706fe3b7e73~2.png",
    heroImage: "images/home/file_00000000e1f071f48768b706fe3b7e73~2.png"
  },
  {
    id: 48,
    slug: "clean-girl-makeup-glow-up-for-a-fresh-natural-look",
    title: "Clean Girl Makeup Glow Up for a Fresh Natural Look",
    category: "glam",
    homeImage: "images/home/file_0000000030f871f4ad10559b44894f2d~2.png",
    heroImage: "images/home/file_0000000030f871f4ad10559b44894f2d~2.png"
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
    slug: "soft-chic-makeup-for-a-clean-elevated-look",
    title: "Soft Chic Makeup for a Clean Elevated Look",
    category: "glam",
    homeImage: "images/home/file_0000000056907246a71f7c96389f0987~3.png",
    heroImage: "images/home/file_0000000056907246a71f7c96389f0987~3.png"
  },
  {id: 58,
    slug: "subtle-glam-beauty-look-that-still-turns-heads",
    title: "Subtle Glam Beauty Look That Still Turns Heads",
    category: "glam",
    homeImage: "images/home/file_00000000c09c72468923513ecc66b427~2.png",
    heroImage: "images/home/file_00000000c09c72468923513ecc66b427~2.png"
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
    heroImage: "images/home/file_0000000012b07243899812d26665a39c~2.png"
  },
  {
    id: 61,
    slug: "glow-first-makeup-that-makes-skin-look-healthy-and-bright",
    title: "Glow First Makeup That Makes Skin Look Healthy and Bright",
    category: "natural",
    homeImage: "images/home/file_00000000ae3c71f4af98c37816159fd6~2.png",
    heroImage: "images/home/file_00000000ae3c71f4af98c37816159fd6~2.png",
    products: [
      { name: "BOBBI BROWN - Vitamin Enriched Face Base Moisturizer & Primer with Vitamin C + Hyaluronic Acid", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/77197-media_swatch.jpg", link: "https://www.sephora.com/product/vitamin-enriched-face-base-P270594" },
      { name: "NARS - Light Reflecting Skin Improving Medium Coverage Foundation with Cacao Peptides", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/272020-media_swatch.jpg", link: "https://www.sephora.com/product/nars-light-reflecting-advance-skincare-foundation-P479338" },
      { name: "NATASHA DENONA - Hy-Glam Brightening & Hydrating Medium to Full Coverage Crease Proof Serum Concealer", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/307899-media_swatch.jpg", link: "https://www.sephora.com/product/natasha-denona-hy-glam-concealer-P505800" },
      { name: "HAUS LABS BY LADY GAGA - Color Fuse Talc-Free Blush Powder With Fermented Arnica", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/342909-media_swatch.jpg", link: "https://www.sephora.com/product/haus-labs-by-lady-gaga-color-fuse-blush-P504025" },
      { name: "WESTMAN ATELIER - Face Trace Cream Contour Stick", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/349503-media_swatch.jpg", link: "https://www.sephora.com/product/westman-atelier-face-trace-contour-stick-P468433" },
      { name: "CHARLOTTE TILBURY - Beauty Highlighter Wand", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/273432-media_swatch.jpg", link: "https://www.sephora.com/product/glowgasm-beauty-highlighter-wand-P444154" },
      { name: "KOSAS - Brow Pop Nano Ultra-Fine Detailing + Feathering Eyebrow Pencil", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/330210-media_swatch.jpg", link: "https://www.sephora.com/product/brow-pop-nano-ultra-fine-detailing-feathering-eyebrow-pencil-P506794" },
      { name: "KOSAS - Air Brow Clear + Clean Lifting Treatment Eyebrow Gel with Lamination Effect", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/316418-media_swatch.jpg", link: "https://www.sephora.com/product/kosas-air-brow-clean-lifting-treatment-eyebrow-gel-P471048" },
      { name: "YVES SAINT LAURENT - Lines Liberated 24H Waterproof Eyeliner", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/351739-media_swatch.jpg", link: "https://www.sephora.com/product/lines-liberated-24h-waterproof-eyeliner-P511611" },
      { name: "tarte - tartelette™ lengthening & tubing mascara", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/277089-media_swatch.jpg", link: "https://www.sephora.com/product/tartelette-tubing-mascara-P500182" },
      { name: "MAKE UP FOR EVER - Artist Color Pencil Extreme Smudge-Proof Lip Liner", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/355096-media_swatch.jpg", link: "https://www.sephora.com/product/make-up-for-ever-artist-color-pencil-extreme-waterproof-lip-liner-P512173" },
      { name: "tarte - maracuja juicy lip hydrating balm gloss", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/399885-media_swatch-0.jpg", link: "https://www.sephora.com/product/tarte-maracuja-juicy-lip-P467977" },
      { name: "ONE/SIZE by Patrick Starrr - On 'Til Dawn Mattifying Waterproof Setting Spray", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/388722-media_swatch-0.jpg", link: "https://www.sephora.com/product/one-size-by-patrick-starrr-on-til-dawn-setting-spray-P476719" },
      { name: "Maison Margiela - REPLICA’ On A Date Eau de Toilette with Rose & Black Currant", image: "images/products/Glow First Makeup That Makes Skin Look Healthy and Bright/308548-media_swatch.jpg", link: "https://www.sephora.com/product/maison-margiela-replica-on-date-P503905" }
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
      { name: "ARMANI BEAUTY - Luminous Silk Natural Glow Blurring Liquid Foundation with 24 Hour Wear", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/392675-media_swatch-1.jpg", link: "https://www.sephora.com/product/luminous-silk-natural-glow-blurring-liquid-foundation-with-24-hour-wear-P519887" },
      { name: "HOURGLASS - Vanish Airbrush Concealer", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/161730-media_swatch.jpg", link: "https://www.sephora.com/product/hourglass-vanish-airbrush-concealer-P454042" },
      { name: "PAT McGRATH LABS - Skin Fetish: Divine Powder Blush", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/242724-media_swatch.jpg", link: "https://www.sephora.com/product/pat-mcgrath-labs-skin-fetish-divine-powder-blush-P472489" },
      { name: "MAKEUP BY MARIO - SoftSculpt® Talc-Free Blurring Bronzer", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/301036-media_swatch.jpg", link: "https://www.sephora.com/product/softsculpt-blurring-bronzer-P516545" },
      { name: "PAT McGRATH LABS - Divine Cream Blush: Legendary Glow Color Balm", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/350208-media_swatch.jpg", link: "https://www.sephora.com/product/divine-cream-blush-legendary-glow-color-balm-P506540" },
      { name: "ANASTASIA BEVERLY HILLS - Brow Wiz® Ultra-Slim Precision Eyebrow Defining Pencil", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/57455-media_swatch (1).jpg", link: "https://www.sephora.com/product/brow-wiz-P202633" },
      { name: "ANASTASIA BEVERLY HILLS - Brow Freeze® Gel Extreme-Hold Lifting & Laminating Clear Gel", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/338453-media_swatch.jpg", link: "https://www.sephora.com/product/anastasia-beverly-hills-brow-freeze-gel-P509088" },
      { name: "HUDA BEAUTY - Creamy Kohl Longwear Eye Pencil", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/s2651834-main-zoom.webp", link: "https://www.sephora.com/product/huda-beauty-creamy-kohl-longwear-eye-pencil-P504900" },
      { name: "LANCÔME - Lash Idôle Flutter Extension Lengthening Mascara", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/364718-media_swatch.jpeg", link: "https://www.sephora.com/product/lash-idole-flutter-extension-lengthening-mascara-P515062" },
      { name: "MAKEUP BY MARIO - Ultra Suede® Sculpting Lip Pencil", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/301118-media_swatch.jpg", link: "https://www.sephora.com/product/makeup-by-mario-ultra-suede-sculpting-lip-pencil-P477838" },
      { name: "FENTY BEAUTY - Gloss Bomb Stix High-Shine Gloss Stick", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/348348-media_swatch.jpg", link: "https://www.sephora.com/product/fenty-beauty-rihanna-gloss-bomb-stix-high-shine-gloss-stick-P511572" },
      { name: "CHARLOTTE TILBURY - Airbrush Flawless Hydrating & Waterproof Setting Spray", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/352359-media_swatch.jpg", link: "https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147" },
      { name: "ARMANI BEAUTY - Luminous Silk Hydrating & Glow-Extending Primer", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/393683-media_swatch-0.jpg", link: "https://www.sephora.com/product/luminous-silk-hydrating-glow-extending-primer-P520126" },
      { name: "Maison Margiela - REPLICA Beach Walk Eau de Toilette with Coconut Milk & Musk", image: "images/products/Modern Soft Makeup With the Prettiest Glowy Skin/245301-media_swatch.jpg", link: "https://www.sephora.com/product/replica-beach-walk-P385358" }
    ]
  },
  {
    id: 64,
    slug: "pretty-everyday-makeup-with-a-soft-glossy-finish",
    title: "Pretty Everyday Makeup With a Soft Glossy Finish",
    category: "natural",
    homeImage: "images/home/file_000000006f4472439b7fde27551a9da3~3.png",
    heroImage: "images/home/file_000000006f4472439b7fde27551a9da3~3.png",
    products: []
  },

  {
    id: 65,
    slug: "the-fresh-glam-makeup-look-everyone-will-want-to-copy",
    title: "The Fresh glam makeup look everyone will want to copy",
    category: "natural",
    homeImage: "images/home/file_0000000085a4720aadad982bfa08624b~2.png",
    heroImage: "images/home/file_0000000085a4720aadad982bfa08624b~2.png",
    products: []
  },

  {
    id: 66,
    slug: "this-makeup-inspiration-is-perfect-for-a-luxe-beauty-board",
    title: "This Makeup inspiration is perfect for a luxe beauty board",
    category: "glam",
    homeImage: "images/home/file_00000000c2f072469bcf7123c88fad34~2.png",
    heroImage: "images/home/file_00000000c2f072469bcf7123c88fad34~2.png",
    products: []
  },

  {
    id: 63,
    slug: "minimal-glam-makeup-with-maximum-pretty-effet",
    title: "Minimal glam Makeup with Maximum Pretty Effet",
    category: "natural",
    homeImage: "images/home/file_00000000b674720abf4fa532659130c5~2.png",
    heroImage: "images/home/file_00000000b674720abf4fa532659130c5~2.png",
    products: []
  },

  {
    id: 67,
    slug: "soft-luxe-makeup-for-girls-who-love-a-polished-look",
    title: "soft luxe makeup for girls who love a polished look",
    category: "glam",
    homeImage: "images/home/file_000000005d70720aa7eb0b265a09413f~2.png",
    heroImage: "images/home/file_000000005d70720aa7eb0b265a09413f~2.png",
    products: []
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
    slug: "this-makeup-look-makes-the-face-look-so-fresh-and-lifted-",
    title: "This makeup look makes the face look so fresh and lifted",
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
    products: []
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
    category: "natural",
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
    products: []
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
    category: "natural",
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
    products: []
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
    products: []
  },

  {
    id: 93,
    slug: "soft-minimal-makeup-with-a-beautiful-skin-finish-",
    title: "Soft minimal makeup with a beautiful skin finish",
    category: "natural",
    homeImage: "images/home/file_0000000045b87243a656266dbba954a9~2.png",
    heroImage: "images/home/file_0000000045b87243a656266dbba954a9~2.png",
    products: []
  },

  {
    id: 94,
    slug: "luxe-makeup-inspiration-for-a-smooth-elegant-face-",
    title: "Luxe makeup inspiration for a smooth elegant face",
    category: "glam",
    homeImage: "images/home/file_000000006f5c7246979d2cebf93b7333.png",
    heroImage: "images/home/file_000000006f5c7246979d2cebf93b7333.png",
    products: []
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
    ]
  },

  {
    id: 98,
    slug: "brown-smokey-glam-for-a-warm-pretty-look",
    title: "Brown Smokey Glam for a Warm Pretty Look",
    category: "smokey",
    homeImage: "images/home/file_000000003ef87246a388240431ad11f8.png",
    heroImage: "images/home/file_000000003ef87246a388240431ad11f8.png",
    products: [
    ]
  },

  {
    id: 99,
    slug: "classic-smokey-eye-with-a-glamorous-touch",
    title: "Classic Smokey Eye with a Glamorous Touch",
    category: "smokey",
    homeImage: "images/home/file_00000000e174720a9c3acaedafb379e4.png",
    heroImage: "images/home/file_00000000e174720a9c3acaedafb379e4.png",
    products: [
    ]
  },

  {
    id: 100,
    slug: "classic-smokey-eye-with-a-glamorous-touch",
    title: "Classic Smokey Eye with a Glamorous Touch",
    category: "smokey",
    homeImage: "images/home/file_00000000a9ec722f9fb9e3d61ba65a89~2.png",
    heroImage: "images/home/file_00000000a9ec722f9fb9e3d61ba65a89~2.png",
    products: [
    ]
  },

  {
    id: 101,
    slug: "soft-smokey-eye-makeup-with-a-glam-skin-finish",
    title: "Soft Smokey Eye Makeup with a Glam Skin Finish",
    category: "smokey",
    homeImage: "images/home/file_00000000b02471f4abf1d53289f3d0b1.png",
    heroImage: "images/home/file_00000000b02471f4abf1d53289f3d0b1.png",
    products: [
    ]
  },

  {
    id: 102,
    slug: "night-out-makeup-tutorial-with-smokey-eyes",
    title: "Night Out Makeup Tutorial with Smokey Eyes",
    category: "smokey",
    homeImage: "images/home/file_00000000da80724683e280c39ae2da65.png",
    heroImage: "images/home/file_00000000da80724683e280c39ae2da65.png",
    products: [
    ]
  },

  {
    id: 103,
    slug: "dark-feminine-makeup-tutorial-",
    title: "Dark Feminine Makeup Tutorial",
    category: "smokey",
    homeImage: "images/home/file_00000000b7547243a69ae19e0988f56c.png",
    heroImage: "images/home/file_00000000b7547243a69ae19e0988f56c.png",
    products: [
    ]
  },

  {
    id: 104,
    slug: "frosted-makeup-look-with-cool-blue-eyeshadow",
    title: "Frosted Makeup Look with Cool Blue Eyeshadow",
    category: "smokey",
    homeImage: "images/home/file_00000000de44720aaee149c62d23b846.png",
    heroImage: "images/home/file_00000000de44720aaee149c62d23b846.png",
    products: [
    ]
  },

  {
    id: 105,
    slug: "radiant-makeup-look-for-a-fresh-luminous-face",
    title: "Radiant Makeup Look for a Fresh Luminous Face",
    category: "natural",
    homeImage: "images/home/file_00000000055c7243994e7e7143093f7a.png",
    heroImage: "images/home/file_00000000055c7243994e7e7143093f7a.png",
    products: [
    ]
  },

  {
    id: 106,
    slug: "party-glam-makeup-that-feels-feminine-and-chic",
    title: "Party Glam Makeup That Feels Feminine and Chic",
    category: "glam",
    homeImage: "images/home/file_000000008ac8720aa6a520245bac3d90.png",
    heroImage: "images/home/file_000000008ac8720aa6a520245bac3d90.png",
    products: [
    ]
  },

  {
    id: 107,
    slug: "timeless-soft-glam-makeup-you-will-want-to-copy",
    title: "Timeless Soft Glam Makeup You Will Want to Copy",
    category: "glam",
    homeImage: "images/home/file_00000000bff0724695f265c24f418c08.png",
    heroImage: "images/home/file_00000000bff0724695f265c24f418c08.png",
    products: [
    ]
  },

  {
    id: 108,
    slug: "luminous-soft-makeup-that-makes-skin-look-so-good",
    title: "Luminous Soft Makeup That Makes Skin Look So Good",
    category: "natural",
    homeImage: "images/home/file_00000000bf0c7243bce500fb6553cb26.png",
    heroImage: "images/home/file_00000000bf0c7243bce500fb6553cb26.png",
    products: [
    ]
  },

  {
    id: 109,
    slug: "everyday-makeup-routine-for-a-fresh-face",
    title: "Everyday Makeup Routine for a Fresh Face",
    category: "natural",
    homeImage: "images/home/file_00000000fe38724696c9529ca99bbd08.png",
    heroImage: "images/home/file_00000000fe38724696c9529ca99bbd08.png",
    products: [
    ]
  },

  {
    id: 110,
    slug: "natural-makeup-tutorial-for-beginners",
    title: "Natural Makeup Tutorial for Beginners",
    category: "natural",
    homeImage: "images/home/file_000000009ccc7243ac684117ca226e3d.png",
    heroImage: "images/home/file_000000009ccc7243ac684117ca226e3d.png",
    products: [
    ]
  },

  {
    id: 111,
    slug: "soft-glam-makeup-tutorial-step-by-step",
    title: "Soft Glam Makeup Tutorial Step by Step",
    category: "glam",
    homeImage: "images/home/file_0000000051d071f48389314579b353c3.png",
    heroImage: "images/home/file_0000000051d071f48389314579b353c3.png",
    products: [
    ]
  },

  {
    id: 112,
    slug: "makeup-for-brown-eyes-with-neutral-eyeshadow",
    title: "Makeup for Brown Eyes with Neutral Eyeshadow",
    category: "glam",
    homeImage: "images/home/file_0000000011f472469c7b0bfecb2c1dff.png",
    heroImage: "images/home/file_0000000011f472469c7b0bfecb2c1dff.png",
    products: [
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
    ]
  }
];
