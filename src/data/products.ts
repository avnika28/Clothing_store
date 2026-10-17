import { Product } from '../types';

export const AURA_WORDMARK_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1U1DLw_tycGQI40Z7g2mwi1h4YLwC1_5-DUR0zq3F5nXGd1F8OwmpvdNvjq42N3kGnNzLRGeh8-b8vsi04yGneTkSuRLnIi8qhqFD8wFfXicIwc6oO4vfUOi6nfnQrDRbs1G70IEQNgoRanrdbaKJ52l6i_qKAiFkJDTlhc4y2qyaKrpHTXFDcBGMVNHswe9P8xKZB04wDatQ5EZKgqciG9vvMUhLoy6YZjTO_5SbpKsSX35E0Qs3pZjHk';
export const USER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkftj2QKbcLZDe44x5i6TnQpQgyMzxU75ImTYyZ4V_T2ifBc0p6CKj599-uhM4JBhl1Hv5endUrgtiXjz673BUa1cQDgWIyrIUQYZsFwNuvNPONllyEi0GMga7Hc4ci9STmUdBqZTc7om746BlZ41A7MvfljQqzdysKvTSCLZ8QL5oYavRflfn0Pqc-L2JZbk5frBE6DN94a4z0rGwrk14N3xoxfIeuu0CuUYyGWnVt0VsUy6zfQac';
export const CAMPAIGN_HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuChjxpIMScLeJ3knHustb2tjz9pmO6fX3ItNSm4W9wuf2a2APXtkiwnGmUqLfFA_sr6ZBYuM5p_UdYFkRB6-r29mhspH7PorLesDIKWnhjcj_V0RyTSqVkTn1VT3y7LfQmxsW9wKrdoEJULxM3trtYSNhr_kmMKbpWM8nBIW68H58KMdGgwRJbRO4eEsoaGS78yZYOLPYDOiFibOYzhPfnOM2VeA3MyNM_yh9UspArPgUVhGiYEQlC7';

export const PRODUCTS: Product[] = [
  {
    id: 'oversized-linen-shirt',
    title: 'The Oversized Linen Shirt',
    subtitle: '100% French Normandie Flax',
    price: 145,
    rating: 4.9,
    reviewsCount: 128,
    edition: 'Édition No. 04 — Linen',
    badge: 'Artisan Crafted',
    badgeType: 'sustainable',
    color: 'Natural Sand',
    availableColors: [
      { name: 'Natural Sand', hex: '#E5DCCF' },
      { name: 'Sage Olive', hex: '#8E9A86' },
      { name: 'Terracotta Clay', hex: '#BA7057' },
      { name: 'Deep Charcoal', hex: '#272626' }
    ],
    category: 'Linen & Silk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3LeeA_WrlV8sCeOmNLZgFx1-353csnI5grE9JJ9wsY0LvE0WX-793SvEdujUk103owQeTsJct6oHvlxh-caLf_ys5as68Nl7Y2C8Wukk-k2oGsAE9AYOi7s7-Tleg_PsUwo6MLlFwL017Ei7W9QlrNyiQgkzcbrpwphj9-aRtFyqPNtJMboQpznW8hDUjsroUWaDemolAd4ngSrMw8Sg1WRGlGL64iZ9zHKJE-uvK-bhvWOekkcc3',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3LeeA_WrlV8sCeOmNLZgFx1-353csnI5grE9JJ9wsY0LvE0WX-793SvEdujUk103owQeTsJct6oHvlxh-caLf_ys5as68Nl7Y2C8Wukk-k2oGsAE9AYOi7s7-Tleg_PsUwo6MLlFwL017Ei7W9QlrNyiQgkzcbrpwphj9-aRtFyqPNtJMboQpznW8hDUjsroUWaDemolAd4ngSrMw8Sg1WRGlGL64iZ9zHKJE-uvK-bhvWOekkcc3',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBHV--VY-dJHrxXEvH3cyUKzyPBhBXe2_RH1tOJSA61MSyhg1W02uUszdY6uli2-oX7Yw9Dh8FEpfAUiiSw96gX8Kz79dqVixvVy13D_ABZo5SEOMlj90oI7VSssOoV-Lz73ImYpsmEzGVr6UMABnCZ6KHdlqQbNixS1TZev6MePIba4knlxGsbAZBbQS6mFlKUla2T0h5CnxQdKyuhvpCY0-RR6fy-NItmLlq8-SoNttz2zfZi5hC',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3WgNiEGas-S3y-69emt7so6Qv2Q5Cq7hsOXfkdV42rk0m7LD9bhSP3KGz77LJOf4M6lyUtj683ucsOin7CEYtUaCs74YzunOgdXwfe0HxQRkSu0WGkJnVoHOd6KU_aLoP53CMUkre4SFNZOIf5BlOpII93nGs24af1XI1tDiQ-HiWVlTy54uI9APTKLrxJa0Y4OPE5nE_ZgS8pStQU4NK2DeOTpwdU7JFnfxM4JTegHgsmNaLwjw5',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvDmPyEu9uoWcE5k7-FVNmkLn9ZEUC6JUFfoOlXYa1MuAHVq6rL0b_rnHZC32npqOrpXFEvSuXRu6YoL94fDgZ_5sUPMbb7MrSwz3jqlg6OVQK8mEZ_ZknJGgW8BNaM85pqVFWwxT-uVblzMI1oB2njUfjZuztnTbVdCvhtnO6y49-9ZGph-b8A7RTpeB9ocibWL5yRr7qm8RP1QqCaJmpmyxHayn2e7qpBj_fwI08ghqkvi0nJ3o8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8lvg5d-57xB_62wnFHUJECEIk-3YgQDnGZZ5XKrUcbsVepLSBH_NhqzP9P8Zfp2baLTQROFun1-r_LgBHykNdDIdJe-rQ_IaZE5gbeR2CdX3Vb2vpyxtb3Hn2n7eEPtIwz0xXI3rAJPiPlx0cXuoLu8QMIqt_32rOWsgvz_BPmYeOieI2VyRP_DukPpi8fVs3TVSfZtVIGSQT5BYBhF8ys7Cic8MKf2Dqg6--VbhFG5nPdr3h6gHj'
    ],
    description: 'Constructed with a generous, billowy body and subtle dropped shoulder seams for an effortless silhouette. Accented with custom genuine mother-of-pearl buttons, a curved high-low hem that styles seamlessly tucked or loose, and reinforced buttonholes.',
    composition: '100% French Normandie Flax (European Flax® Certified)',
    features: [
      'Relaxed, draped gender-neutral silhouette',
      'Double-stitched french seams for lifetime durability',
      'Deep patch pocket with pen sleeve detail'
    ],
    sustainability: {
      origin: 'Normandy, France',
      waterSaved: '480 Liters',
      certification: 'GOTS Organic & OEKO-TEX 100',
      ecoDescription: 'Woven from pure long-staple flax grown in Normandy, France. Grown exclusively using rainwater, our certified organic process eliminates chemical defoliants and harsh synthetic treatments.'
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'Only 3 left in M',
      L: 'In Stock',
      XL: 'Low Stock: 2 Left'
    },
    modelInfo: 'Model is 5\'10" (178cm), 34" bust, 25" waist wearing size M for an editorial drape.'
  },
  {
    id: 'pleated-wide-trousers',
    title: 'Pleated Wide Trousers',
    subtitle: 'Chalk Oatmeal Tailored Flannel',
    price: 180,
    rating: 4.8,
    reviewsCount: 94,
    badge: 'Low Stock',
    badgeType: 'low-stock',
    color: 'Chalk',
    availableColors: [
      { name: 'Chalk', hex: '#FAF9F5' },
      { name: 'Stone', hex: '#C8C0B5' }
    ],
    category: 'Tailored Pants',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYArIPBw5TwC4snseCaNilqiQD-pbCv_DNusYLUXLbO4vwZOJHU0d9gNfzOYFwepOWCzix78-qekiY0jnuijEPmmGZdhjI08H-nOIrTxIzmRvv1lETPmeIV9pQ5F-b02IFxW_Vj04QCifqq04qIUQCxZBuRrHUXFbJ20_nwMRDTxbKkMvRLez5jnA2HXxCtCaxNjX3QJM9f5Q6-hnRe9LDo_p2jIU26mREwIKjpJ7oGpXwYRW0oQrN',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYArIPBw5TwC4snseCaNilqiQD-pbCv_DNusYLUXLbO4vwZOJHU0d9gNfzOYFwepOWCzix78-qekiY0jnuijEPmmGZdhjI08H-nOIrTxIzmRvv1lETPmeIV9pQ5F-b02IFxW_Vj04QCifqq04qIUQCxZBuRrHUXFbJ20_nwMRDTxbKkMvRLez5jnA2HXxCtCaxNjX3QJM9f5Q6-hnRe9LDo_p2jIU26mREwIKjpJ7oGpXwYRW0oQrN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWcpNo6J9yoN501aUNdOcH76vyW-xSegHZJw7b_jFb7da-rjA1JD3PA1AvjrXPMRF_tgM7R1BqAr2WAW3iGrC_slWtspLk-emUt91Oc8i9tbPzcLvOGkEF0yT7oB1vcIvbFg3bUO1gISrGdHWnl2rzzSyNDfUB4b7H3OZOl8q8y1Dk6U7OVC069-iv7k4cheIlXSUd4UA0aSr_XXAovunlTAlpYQHl5WKyB6NQOtmgJ6Sg4cckFAk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_sGk8q8ULaAXa3XRTYvMUWQ8mpOwUMxkjrSAnrX8w4kw8ibKf8tq7NaIkOYIeZFZ-tntU5ge8yfl_5Su6r_xoPSKniFdF8fvTagvUDj9Pje-NAl_lCO6k-9O2ArhkBqMAvQC7Tt3LmiVdzg2vVfvls7hd-BVyufflWdDJvxd70EvTu_jbHh58AWgaKca1MvUTzA-1UmTWyvNgIDFDkTaCQQrNgZzUlszACh5LLNGoktC9Uz-0Q1w'
    ],
    description: 'High-waisted architectural trousers tailored with deep front pleats and a graceful wide drape. Cut from an organic flax-cotton blend designed to hold its fluid sculptural structure.',
    composition: '65% Organic Linen, 35% Long-Staple Cotton',
    features: [
      'High-rise waist with tailored interior curtain waistband',
      'Deep dual inverted front pleats',
      'Concealed horn button closure & side seam pockets'
    ],
    sustainability: {
      origin: 'Biella, Italy',
      waterSaved: '320 Liters',
      certification: 'OEKO-TEX 100',
      ecoDescription: 'Spun by master weavers utilizing non-toxic closed-loop wet finishing.'
    },
    sizes: ['28', '30', '32', '34'],
    stockPerSize: {
      '28': 'Only 1 Left',
      '30': 'In Stock',
      '32': 'In Stock',
      '34': 'In Stock'
    },
    modelInfo: 'Model is 5\'11" (180cm), 25" waist wearing size 28.'
  },
  {
    id: 'ribbed-knit-tank',
    title: 'Ribbed Knit Tank',
    subtitle: 'Sculpted Organic Cotton & Silk',
    price: 85,
    rating: 4.9,
    reviewsCount: 86,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    color: 'Terracotta',
    availableColors: [
      { name: 'Terracotta', hex: '#B85D3E' },
      { name: 'Charcoal', hex: '#1C1B1B' }
    ],
    category: 'Summer Knitwear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8WrFZoAAM3f3PgJap0zqLSmY95tJOEMhChVqnXASr95P_CKsZG_d0BtjHuLxo8OCLbPS4PL2iwW44y7HAsS7ajPCNya5dqPCYzBo4QJtgHHTwCj8GexYHkvKZ8_vKmCOI2WsznhvM7lSBkLZTENMjPtb96oYiugY0kPFqNrP91GhoS881ZYfK20zGuolbVEGP3BVa7158MmLNcWQWQvsDhYjoEMlUhGTm8prXZ4ziCqYQ-PZLcun7',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8WrFZoAAM3f3PgJap0zqLSmY95tJOEMhChVqnXASr95P_CKsZG_d0BtjHuLxo8OCLbPS4PL2iwW44y7HAsS7ajPCNya5dqPCYzBo4QJtgHHTwCj8GexYHkvKZ8_vKmCOI2WsznhvM7lSBkLZTENMjPtb96oYiugY0kPFqNrP91GhoS881ZYfK20zGuolbVEGP3BVa7158MmLNcWQWQvsDhYjoEMlUhGTm8prXZ4ziCqYQ-PZLcun7'
    ],
    description: 'Sculptural square neckline tank top knit in a variegated wide rib that gently hugs the form. Colored with botanical madder root dye.',
    composition: '80% Organic Pima Cotton, 20% Mulberry Silk',
    features: [
      'Architectural square-cut neckline',
      'Zero-snag recovery ribbing',
      'Naturally breathable, thermal regulating'
    ],
    sustainability: {
      origin: 'Porto, Portugal',
      waterSaved: '210 Liters',
      certification: 'GOTS Certified',
      ecoDescription: 'Knitted without waste cut-offs on fully-fashioned 3D knitting machines.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'Low Stock'
    },
    modelInfo: 'Model is 5\'9" (175cm), 32" bust wearing size S.'
  },
  {
    id: 'relaxed-trench-coat',
    title: 'Relaxed Trench Coat',
    subtitle: 'Muted Olive Mist Weather-Resistant Linen',
    price: 290,
    rating: 4.8,
    reviewsCount: 42,
    badge: 'Curated Spotlight',
    color: 'Olive Mist',
    availableColors: [
      { name: 'Olive Mist', hex: '#7C8875' },
      { name: 'Sandstone', hex: '#D4CEBF' }
    ],
    category: 'Outerwear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Fu5_umh5chEl4sCOAzbL7ZEaT9_pQltONSFN49_4bTVeKYq1QTvnjHoL_FyVWRLr4rV3OZ6lPtOchwmkzJzdXcz6kv3L7HvZWrZOuCSUls1kaKVUtMVk477z3rlcTwzEij785Ibl_OaA5xe33-XqkNFIlQOHaMs_BwN6cMj89OysfumRZWxueInBHhUdn7yqnFjSsRGBR4n1yXOF645VhEQHdTzyu5mqrHF1NzoRfwbB_9aUN0ph',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Fu5_umh5chEl4sCOAzbL7ZEaT9_pQltONSFN49_4bTVeKYq1QTvnjHoL_FyVWRLr4rV3OZ6lPtOchwmkzJzdXcz6kv3L7HvZWrZOuCSUls1kaKVUtMVk477z3rlcTwzEij785Ibl_OaA5xe33-XqkNFIlQOHaMs_BwN6cMj89OysfumRZWxueInBHhUdn7yqnFjSsRGBR4n1yXOF645VhEQHdTzyu5mqrHF1NzoRfwbB_9aUN0ph'
    ],
    description: 'An unstudied, lightweight summer trench designed with an airy billow and storm flap detailing. Crafted from heavy-weight washed linen with a non-toxic water-repellent finish.',
    composition: '100% Belgian Flax with PFC-free Bionic Finish',
    features: [
      'Unlined body for breathable summer layering',
      'Removable wide fabric sash belt',
      'Raglan sleeves with adjustable wrist tabs'
    ],
    sustainability: {
      origin: 'Flanders, Belgium',
      waterSaved: '550 Liters',
      certification: 'Masters of Linen®',
      ecoDescription: 'Zero synthetic PFAS coatings; treated exclusively with plant-based oils.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'Model is 5\'10" (178cm) wearing size S/M.'
  },
  {
    id: 'belted-linen-blazer',
    title: 'Belted Linen Blazer',
    subtitle: 'Oatmeal Natural Tailored Linen',
    price: 240,
    rating: 4.9,
    reviewsCount: 71,
    badge: 'New',
    badgeType: 'new',
    color: 'Oatmeal Natural',
    availableColors: [
      { name: 'Oatmeal', hex: '#E3DAC9' },
      { name: 'Charcoal', hex: '#3B3A36' },
      { name: 'Chalk', hex: '#F5F2EB' }
    ],
    category: 'New In',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkh3c-_o5-0_KBWDUjiD_O9bxik5URAVLHR2iytxecIt7bURpRKQzjWOiELanMS_GSMNvPIu0aM6kN5h-GhYh8Jpr_FXuphqK-sFmgM8uTHAqHnItIO6NAy8YS__m1u0KvGM_Q3sC7qMg9NGCw3AEM6ysZkx9banr12jPN6AaGw88Gh2BdiV5q8UB4BNfji96a7XY1aAfmzSY1nR_4Oq9DUle7lk96oG0u1sQp8jhbiRPUpOSYBj0j',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkh3c-_o5-0_KBWDUjiD_O9bxik5URAVLHR2iytxecIt7bURpRKQzjWOiELanMS_GSMNvPIu0aM6kN5h-GhYh8Jpr_FXuphqK-sFmgM8uTHAqHnItIO6NAy8YS__m1u0KvGM_Q3sC7qMg9NGCw3AEM6ysZkx9banr12jPN6AaGw88Gh2BdiV5q8UB4BNfji96a7XY1aAfmzSY1nR_4Oq9DUle7lk96oG0u1sQp8jhbiRPUpOSYBj0j'
    ],
    description: 'An oversized oatmeal beige belted linen blazer tailored with notched lapels and horn buttons. Effortless structured nonchalance.',
    composition: '100% Normandy Flax Linen',
    features: [
      'Removable tonal belt sash',
      'Dual front flap pockets and welt breast pocket',
      'Ventilated back vent'
    ],
    sustainability: {
      origin: 'Normandy, France',
      waterSaved: '460 Liters',
      certification: 'GOTS Organic',
      ecoDescription: 'Zero chemical bleaches; 100% natural raw flax unbleached yarn.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'Low Stock'
    },
    modelInfo: 'Model is 5\'10" (178cm) wearing size S.'
  },
  {
    id: 'silk-blend-slip-dress',
    title: 'Silk-Blend Slip Dress',
    subtitle: 'Sage Green Mulberry Silk',
    price: 195,
    rating: 4.9,
    reviewsCount: 54,
    badge: 'Sustainable Silk',
    badgeType: 'sustainable',
    color: 'Sage Green',
    availableColors: [
      { name: 'Sage Green', hex: '#8A9A86' },
      { name: 'Onyx', hex: '#1C1B1B' }
    ],
    category: 'Linen & Silk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVMy-NKEb8i4TJkte1wvsnMk-wB2_xlY8KWDbNJh5fuWkM7QAC40MeJRuWgzm0KIhb0vy2AI4cz18RBaJansl5OvCkt3r9cI7d8Nau7YkgbKamDaorZzqx0R2bglep9Wq7ZVR6coPM5WTNfHZweRdq9cKvrZCc1VLW8si94aZGYoOFqE3cCGybYblunTkWqP2I3AbW1TEgvCuzXsI3JSPwi2ISB400FaDXNGFtjHMP_MIZUVIQch3q',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVMy-NKEb8i4TJkte1wvsnMk-wB2_xlY8KWDbNJh5fuWkM7QAC40MeJRuWgzm0KIhb0vy2AI4cz18RBaJansl5OvCkt3r9cI7d8Nau7YkgbKamDaorZzqx0R2bglep9Wq7ZVR6coPM5WTNfHZweRdq9cKvrZCc1VLW8si94aZGYoOFqE3cCGybYblunTkWqP2I3AbW1TEgvCuzXsI3JSPwi2ISB400FaDXNGFtjHMP_MIZUVIQch3q'
    ],
    description: 'An elegant fluid slip dress cut on the bias in lustrous mulberry silk and sustainable viscose. Delicate spaghetti straps and side slits.',
    composition: '55% Peace Silk, 45% FSC-Certified Viscose',
    features: [
      'Bias cut for natural contour and liquid drape',
      'Adjustable micro silk straps',
      'Mid-calf midi length'
    ],
    sustainability: {
      origin: 'Lake Como, Italy',
      waterSaved: '380 Liters',
      certification: 'Peace Silk (Ahimsa)',
      ecoDescription: 'Harvested humanely without harming the silkworms, dyed in closed-circuit water systems.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'Model is 5\'9" (175cm) wearing size S.'
  },
  {
    id: 'tailored-linen-short',
    title: 'Tailored Linen Short',
    subtitle: 'Chalk Ecru Pleated Bermuda',
    price: 120,
    rating: 4.7,
    reviewsCount: 39,
    badge: 'Bestseller',
    badgeType: 'bestseller',
    color: 'Chalk Ecru',
    availableColors: [
      { name: 'Chalk', hex: '#EAE7DC' },
      { name: 'Espresso', hex: '#3D3A37' }
    ],
    category: 'Tailored Pants',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV2VpSvIckas8OltKX6A3mWflZviNld-ch7BtnWmMhC3ItCNp26PELtwiSmBSHqeN_QVbL-7dBmlBIwI8Tv-2vfYpXhL-CveKKRHLMQoaA51uz3lOY3mX6QP5JxfbFTGGh9stNTli4UOzWZrYq7cUhw0xR396omGmGLwqOc_v2otik_sgJB1N48b9qaTXh58kKfDIWcPEYwnL1C_xKpDp7LI4FVbAW5Wy2Cb9-ZppmAeZYkiBUTsoo',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDV2VpSvIckas8OltKX6A3mWflZviNld-ch7BtnWmMhC3ItCNp26PELtwiSmBSHqeN_QVbL-7dBmlBIwI8Tv-2vfYpXhL-CveKKRHLMQoaA51uz3lOY3mX6QP5JxfbFTGGh9stNTli4UOzWZrYq7cUhw0xR396omGmGLwqOc_v2otik_sgJB1N48b9qaTXh58kKfDIWcPEYwnL1C_xKpDp7LI4FVbAW5Wy2Cb9-ZppmAeZYkiBUTsoo'
    ],
    description: 'High-waisted pleated Bermuda shorts cut with tailored ease. Crafted from structured Belgian linen with neat pressed creases.',
    composition: '100% Belgian Flax',
    features: [
      'Tailored tab waist with hidden fasteners',
      'Subtle extended hem cuff',
      'Dual deep slash pockets'
    ],
    sustainability: {
      origin: 'Flanders, Belgium',
      waterSaved: '290 Liters',
      certification: 'European Flax®',
      ecoDescription: 'Zero chemical irrigation, 100% biodegradable organic flax fiber.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'Model is 5\'10" (178cm) wearing size S.'
  },
  {
    id: 'raw-hem-poplin-shirt',
    title: 'Raw Hem Poplin Shirt',
    subtitle: 'Crisp White Organic Cotton',
    price: 110,
    rating: 4.8,
    reviewsCount: 63,
    color: 'Crisp White',
    availableColors: [
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Pale Azure', hex: '#D1D9E0' }
    ],
    category: 'New In',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV1qHB7cBugwPiURDpyT3qe3gRCjWUJ104jRY8Fvjtl4ZpNCf5MopcBeD34_hDfu-iUIaQG33by71CXk194-0qI67pVZOVPo63ZsIIxgcVlbh-GPqvbQ8M5bdEoGcIU_UYDaT4ICanPUHgnBNN3egyDrB23EvdD5CVarJhy98g-xCwBk9QsQF6UE86YrQzltbewHQWhxl1KWKYoeKrRcKDoQyh0rvBPJ7bmU86Aq25GmeprnPhuXYA',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV1qHB7cBugwPiURDpyT3qe3gRCjWUJ104jRY8Fvjtl4ZpNCf5MopcBeD34_hDfu-iUIaQG33by71CXk194-0qI67pVZOVPo63ZsIIxgcVlbh-GPqvbQ8M5bdEoGcIU_UYDaT4ICanPUHgnBNN3egyDrB23EvdD5CVarJhy98g-xCwBk9QsQF6UE86YrQzltbewHQWhxl1KWKYoeKrRcKDoQyh0rvBPJ7bmU86Aq25GmeprnPhuXYA'
    ],
    description: 'An oversized crisp organic cotton poplin button-down featuring delicate raw frayed hems and subtle mother-of-pearl buttons.',
    composition: '100% GOTS Organic Long-Staple Cotton',
    features: [
      'Artisanal raw frayed hem finish',
      'Boxy drop-shoulder cut',
      'High-thread count crisp poplin weave'
    ],
    sustainability: {
      origin: 'Izmir, Turkey',
      waterSaved: '340 Liters',
      certification: 'GOTS Certified',
      ecoDescription: 'Zero synthetic fertilizers, spun using solar-powered mills.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'Model is 5\'9" (175cm) wearing size S.'
  },
  {
    id: 'cashmere-silk-knit',
    title: 'Cashmere Silk Knit',
    subtitle: 'Soft Taupe Fine Gauge',
    price: 210,
    rating: 4.9,
    reviewsCount: 47,
    badge: 'Limited Run',
    badgeType: 'limited',
    color: 'Soft Taupe',
    availableColors: [
      { name: 'Taupe', hex: '#B8A99A' },
      { name: 'Alabaster', hex: '#DED7CE' }
    ],
    category: 'Summer Knitwear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_dHxNf93hpt395komloL_aeucnpPmDilGoc4MVx5YTduULORji7EP8XAJfj5T4YW7Um-Lg-rp_rHDYeZyXiDSQT1FHEtL_AOQN4FRFmjRq64DXFVcD7YOvLRkUQPI0lH5RQI5d12FuFpM7SThQrb755lVTbeksyBdqUSJ7xcdkUEw34szTLAnbG2gbFCnRd8GFMwvP2ZAyzEEdSrrKXnGjEI6hPXX97uJir6WpVBoYygU4-myXTaX',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_dHxNf93hpt395komloL_aeucnpPmDilGoc4MVx5YTduULORji7EP8XAJfj5T4YW7Um-Lg-rp_rHDYeZyXiDSQT1FHEtL_AOQN4FRFmjRq64DXFVcD7YOvLRkUQPI0lH5RQI5d12FuFpM7SThQrb755lVTbeksyBdqUSJ7xcdkUEw34szTLAnbG2gbFCnRd8GFMwvP2ZAyzEEdSrrKXnGjEI6hPXX97uJir6WpVBoYygU4-myXTaX'
    ],
    description: 'Ultra-fine 18-gauge crewneck sweater knit from Mongolian cashmere blended with mulberry silk. Incredibly soft against bare summer skin.',
    composition: '70% Grade-A Mongolian Cashmere, 30% Mulberry Silk',
    features: [
      'Featherweight 18-gauge jersey stitch',
      'Ribbed collar, cuffs, and hem with roll-edge detail',
      'Naturally thermo-regulating year-round'
    ],
    sustainability: {
      origin: 'Inner Mongolia & Como, Italy',
      waterSaved: '220 Liters',
      certification: 'Sustainable Fibre Alliance (SFA)',
      ecoDescription: 'Ethically combed cashmere supporting regenerative pasture conservation.'
    },
    sizes: ['XS', 'S', 'M', 'L'],
    stockPerSize: {
      XS: 'In Stock',
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'Model is 5\'11" (180cm) wearing size M.'
  },
  {
    id: 'leather-slide-sandal',
    title: 'Leather Slide Sandal',
    subtitle: 'Terracotta Burnished Artisan Calfskin',
    price: 165,
    rating: 4.8,
    reviewsCount: 38,
    badge: 'Artisan Crafted',
    badgeType: 'sustainable',
    color: 'Terracotta Burnished',
    availableColors: [
      { name: 'Terracotta', hex: '#B25D38' },
      { name: 'Pure Black', hex: '#1A1A1A' },
      { name: 'Warm Sand', hex: '#C9B9A4' }
    ],
    category: 'Accessories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdrRUizE8CaHmxVvxDIioxrr6o6MvQcnCtVKEQtI3PCpUDEAWhiC_rHKWZxGnuQqusxBvwc6f_skxd18C78zTJ9_EzKlotayE3OT9pm0UohmrndoERqg2dkYgYyZI9wZfUX9H5q09hQP5L7amkJzs0GD1mCttKiQO5V6cCqR5Z8W5daI9FbqijCGcT4MotcJRAZqWHi-KFTnmSHb2rDfURRNeVibOEJA5sKhD-07RkrCw2EEe0VjBz',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdrRUizE8CaHmxVvxDIioxrr6o6MvQcnCtVKEQtI3PCpUDEAWhiC_rHKWZxGnuQqusxBvwc6f_skxd18C78zTJ9_EzKlotayE3OT9pm0UohmrndoERqg2dkYgYyZI9wZfUX9H5q09hQP5L7amkJzs0GD1mCttKiQO5V6cCqR5Z8W5daI9FbqijCGcT4MotcJRAZqWHi-KFTnmSHb2rDfURRNeVibOEJA5sKhD-07RkrCw2EEe0VjBz',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOLuRLJLmni2aWeRVhZZegVu0oolUlok9UVsSXFoIoer-gln1zMK0s3WypVqW6zL8ri8pxIoQ25ZKcYkMByWOV1SXe_py8W3HCmq87WutZDtqwWiW-tA0clBLdz0ZRn7R-d58tnYn0O4mrp_k9rah-Mhh1akSF4gn9ot_HHVT-TqjBWaAdiTVbkWQ79RujTDOXYzApgcAaskfc5ynnkfYb4sKrnqdtBX9ohB8fFRQhAWfptk05yaab'
    ],
    description: 'Sculptured crisscross leather slides handcrafted from vegetable-tanned Tuscan calfskin. Finished with ergonomic cork footbeds wrapped in suede.',
    composition: '100% Vegetable-Tanned Calfskin Leather with Natural Rubber Sole',
    features: [
      'Hand-burnished raw edges',
      'Molded anatomical natural cork footbed',
      'Tuscan vegetable-tanning process using chestnut extract'
    ],
    sustainability: {
      origin: 'Tuscany, Italy',
      waterSaved: '410 Liters',
      certification: 'Pelle Conciata al Vegetale in Toscana',
      ecoDescription: 'Chrome-free, metal-free artisanal tanning that patinas beautifully with age.'
    },
    sizes: ['S', 'M', 'L'],
    stockPerSize: {
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'True to European size. Take your normal shoe size.'
  },
  {
    id: 'raw-leather-artisan-slides',
    title: 'Raw Leather Artisan Slides',
    subtitle: 'Natural Tan Minimalist Slide',
    price: 95,
    rating: 4.8,
    reviewsCount: 29,
    badge: 'Pairs Well',
    badgeType: 'sustainable',
    color: 'Natural Tan',
    availableColors: [
      { name: 'Natural Tan', hex: '#BA7057' }
    ],
    category: 'Accessories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwBUwumffdTuSRPmtCWHEAAv86wNO7LXTZQqvzrICkweGvHmdW2UgV6XFRrOkgdUBFxb-MQKFBfCQ07ai2hsl1lsSmATEGgUPrdxQGbjMelGcG4cvVTdBJk7UDYki23j2xaOMb2yKuxUf20OrYkCcDSUbX0uxjid9OfPZGdhbjsbg1nB91T3Y3zr9CzM8T_wTMsfpRWxmOXvCRVxG_4OBC3mGWK_3AOrcXhydDNPwRqW7R1KWzzeZu',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwBUwumffdTuSRPmtCWHEAAv86wNO7LXTZQqvzrICkweGvHmdW2UgV6XFRrOkgdUBFxb-MQKFBfCQ07ai2hsl1lsSmATEGgUPrdxQGbjMelGcG4cvVTdBJk7UDYki23j2xaOMb2yKuxUf20OrYkCcDSUbX0uxjid9OfPZGdhbjsbg1nB91T3Y3zr9CzM8T_wTMsfpRWxmOXvCRVxG_4OBC3mGWK_3AOrcXhydDNPwRqW7R1KWzzeZu'
    ],
    description: 'Minimalist double strap slides in undyed natural tan bridle leather. Softens into an individualized honey patina over time.',
    composition: 'Full-Grain Tuscan Bridle Leather',
    features: [
      'Zero synthetic dyes',
      'Dual broad foot straps',
      'Cushioned leather insole'
    ],
    sustainability: {
      origin: 'Florence, Italy',
      waterSaved: '280 Liters',
      certification: 'Genuine Italian Vegetable-Tanned Leather',
      ecoDescription: 'Tanned using bark and mimosa extracts; 100% biodegradable sole.'
    },
    sizes: ['S', 'M', 'L'],
    stockPerSize: {
      S: 'In Stock',
      M: 'In Stock',
      L: 'In Stock'
    },
    modelInfo: 'True to size.'
  }
];
