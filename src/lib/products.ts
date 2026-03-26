export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice: number;
  onSale: boolean;
  rating: number;
  reviewCount: number;
  category: 'skincare' | 'candles';
  description: string;
  shortDescription: string;
  inStock: boolean;
  subscriptionPrice?: number;
  images: string[];
  keyBenefits: string[];
  ingredients: string[];
  freeFrom: string[];
  howToUse: string;
  scentProfile: string;
  tallowInfo: string;
}

export const products: Product[] = [
  {
    id: 'signature-blend',
    slug: 'signature-blend',
    name: 'Signature Blend Infused Whipped Tallow',
    shortName: 'Signature Blend',
    price: 19.99,
    originalPrice: 26.99,
    onSale: true,
    rating: 4.88,
    reviewCount: 26,
    category: 'skincare',
    description: 'Designed as a true workhorse, our Signature Blend was specially formulated to solve a plethora of issues, providing deep hydration and nourishment for all, especially sensitive and damaged skin. This rejuvenating cream is designed to combat signs of aging, soothe irritation, and boost healing, all while brightening the skin.',
    shortDescription: 'Our bestselling multi-purpose whipped tallow balm for deep hydration and skin restoration.',
    inStock: true,
    subscriptionPrice: 15.99,
    images: ['/images/products/sb-1.jpg', '/images/products/sb-2.jpg', '/images/products/sb-3.jpg', '/images/products/sb-4.jpg', '/images/products/sb-5.jpg'],
    keyBenefits: [
      'Deep hydration for dry and damaged skin',
      'Combats signs of aging with natural vitamins',
      'Soothes irritation and inflammation',
      'Boosts skin healing and repair',
      'Brightens dull, tired complexion',
      'Suitable for sensitive skin types',
      'Non-comedogenic — won\'t clog pores',
      'Locks in moisture for up to 24 hours',
    ],
    ingredients: [
      'Grass-Fed Beef Tallow (rendered using our patent-pending process)',
      'Jojoba Oil',
      'Rosehip Seed Oil',
      'Vitamin E (Tocopherol)',
      'Lavender Essential Oil',
      'Frankincense Essential Oil',
      'Tea Tree Essential Oil',
    ],
    freeFrom: [
      'Parabens', 'Sulphates', 'Synthetic fragrances', 'Artificial colours',
      'Mineral oil', 'Silicones', 'PEGs', 'Phthalates', 'Formaldehyde',
      'Bleach', 'Chemical deodorisers',
    ],
    howToUse: 'Apply a small amount to clean skin and massage gently in upward motions. Use morning and evening for best results. A little goes a long way — start with a pea-sized amount for your face, or a larger dollop for body application. Allow a few minutes for full absorption.',
    scentProfile: 'A gentle, calming blend of lavender and frankincense with subtle earthy undertones. Light enough to wear under fragrance, natural enough to enjoy on its own.',
    tallowInfo: 'Uniquely rendered to be ultra-pure and as scent free as possible. Our patent pending methodology ensures you receive only the very best. Never bleached or chemically deodorised.',
  },
  {
    id: 'pure-whipped-tallow',
    slug: 'pure-whipped-tallow',
    name: 'Pure Whipped Tallow',
    shortName: 'Pure Tallow',
    price: 14.99,
    originalPrice: 19.99,
    onSale: true,
    rating: 4.92,
    reviewCount: 18,
    category: 'skincare',
    description: 'Pure simplicity at its finest. Our Pure Whipped Tallow contains just one ingredient — 100% grass-fed beef tallow, rendered using our proprietary process. Perfect for sensitive skin and those who want skincare stripped back to the essentials. No additives, no fragrances, no compromises. Just nature\'s most perfect moisturiser.',
    shortDescription: 'Single-ingredient natural moisturiser. Pure grass-fed tallow, nothing else.',
    inStock: true,
    subscriptionPrice: 11.99,
    images: ['/images/products/pure-1.png', '/images/products/pure-2.jpg', '/images/products/pure-3.jpg'],
    keyBenefits: [
      'Single-ingredient purity',
      'Ideal for ultra-sensitive skin',
      'Perfect for babies and children',
      'Deeply moisturising without additives',
      'Hypoallergenic and fragrance-free',
      'Rich in vitamins A, D, E & K',
      'Biologically compatible with human skin',
      'Multi-purpose — face, body, hands, lips',
    ],
    ingredients: [
      '100% Grass-Fed Beef Tallow (rendered using our patent-pending process)',
    ],
    freeFrom: [
      'Everything except tallow — literally nothing else',
      'Parabens', 'Sulphates', 'Fragrances', 'Essential oils',
      'Preservatives', 'Emulsifiers', 'Water',
    ],
    howToUse: 'Warm a small amount between your fingertips and apply to clean, slightly damp skin for best absorption. Use on face, body, hands, or anywhere that needs deep moisture. Suitable for use on babies and children.',
    scentProfile: 'Virtually unscented due to our patent-pending rendering process. May have the faintest natural scent that disappears within minutes of application.',
    tallowInfo: 'Uniquely rendered to be ultra-pure and as scent free as possible. Our patent pending methodology ensures you receive only the very best. Never bleached or chemically deodorised.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'I\'ve struggled with eczema my entire life and nothing has worked like this. Within a week, my skin was clearer than it\'s been in years. Absolutely life-changing product.',
    product: 'Signature Blend',
    verified: true,
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'The texture is incredible — so light and whipped. It absorbs beautifully and my skin has never felt so soft. I\'ve replaced my entire skincare routine with just this.',
    product: 'Signature Blend',
    verified: true,
  },
  {
    id: 3,
    name: 'James T.',
    rating: 5,
    text: 'Bought this for my wife and she\'s obsessed. She\'s now got the whole family using it. Even my psoriasis patches have started to calm down. Incredible quality.',
    product: 'Pure Whipped Tallow',
    verified: true,
  },
  {
    id: 4,
    name: 'Charlotte R.',
    rating: 5,
    text: 'I was sceptical about tallow skincare but wow. This is the real deal. My rosacea has improved dramatically and my skin looks genuinely healthy for the first time.',
    product: 'Signature Blend',
    verified: true,
  },
  {
    id: 5,
    name: 'Hannah W.',
    rating: 5,
    text: 'Been using the Pure Tallow on my baby\'s sensitive skin and it\'s been wonderful. So reassuring knowing there\'s literally one ingredient. Will never go back to commercial baby products.',
    product: 'Pure Whipped Tallow',
    verified: true,
  },
  {
    id: 6,
    name: 'Lucy B.',
    rating: 5,
    text: 'This brand is doing something special. You can feel the quality the moment you open the jar. My skin drinks it up and I wake up glowing. Worth every penny.',
    product: 'Signature Blend',
    verified: true,
  },
];

export const blogPosts = [
  {
    slug: 'why-tallow-is-the-ultimate-moisturiser',
    title: 'Why Tallow Is the Ultimate Natural Moisturiser',
    excerpt: 'Discover why grass-fed beef tallow is biologically identical to our skin\'s natural oils and why it outperforms every synthetic moisturiser on the market.',
    date: '2026-03-15',
    readTime: '5 min read',
    category: 'Education',
    content: `For centuries, tallow was the go-to skincare ingredient across cultures worldwide. From ancient Egypt to Victorian England, our ancestors understood something that modern skincare has largely forgotten: animal fats are the most compatible moisturisers for human skin.\n\nThe reason is simple but profound. Tallow is composed of the same types of fatty acids found naturally in our skin — including palmitic acid, stearic acid, and oleic acid. This biological compatibility means tallow doesn't just sit on top of your skin; it's absorbed deeply, delivering hydration at a cellular level.\n\nUnlike plant oils, which can sometimes disrupt the skin barrier, tallow works with your skin's natural biology. It's rich in fat-soluble vitamins A, D, E, and K — all essential for skin health, repair, and protection.\n\nVitamin A promotes cell turnover and helps with conditions like acne and aging. Vitamin D supports the skin's immune function. Vitamin E is a powerful antioxidant that protects against environmental damage. And Vitamin K helps with skin elasticity and can reduce the appearance of dark circles.\n\nAt Glow to the Bone, we take this ancient wisdom and elevate it with our patent-pending rendering process, ensuring the purest, most effective tallow possible.`,
  },
  {
    slug: 'tallow-for-eczema-and-psoriasis',
    title: 'Tallow for Eczema & Psoriasis: A Natural Solution',
    excerpt: 'Learn how grass-fed tallow is helping thousands find relief from chronic skin conditions without harsh chemicals or steroids.',
    date: '2026-03-08',
    readTime: '7 min read',
    category: 'Skin Conditions',
    content: `If you suffer from eczema or psoriasis, you know the frustration of trying product after product, only to find temporary relief at best — and irritation at worst. Many conventional treatments rely on steroids, which can thin the skin over time, or contain fragrances and chemicals that make sensitive skin worse.\n\nTallow offers a different approach entirely. Because it mirrors the composition of healthy human skin, it supports the skin barrier rather than disrupting it. This is crucial for conditions like eczema and psoriasis, where the skin barrier is compromised.\n\nThe anti-inflammatory properties of grass-fed tallow — particularly the conjugated linoleic acid (CLA) and palmitoleic acid it contains — can help calm the redness, itching, and irritation that characterise these conditions.\n\nOur founder started Glow to the Bone precisely because of this. After watching her sister struggle with severe eczema for years, and trying over 65 different formulations, she finally created something that truly worked. That product became our Signature Blend.\n\nThousands of customers have since reported significant improvements in their skin conditions. While we can't make medical claims, the results speak for themselves.`,
  },
  {
    slug: 'clean-skincare-what-it-really-means',
    title: 'Clean Skincare: What It Really Means (And Why It Matters)',
    excerpt: 'The clean beauty movement is growing, but not all "natural" products are created equal. Here\'s what to look for and why ingredient transparency matters.',
    date: '2026-02-28',
    readTime: '6 min read',
    category: 'Clean Beauty',
    content: `The term "clean beauty" gets thrown around a lot these days, but what does it actually mean? And more importantly, how do you know if a product truly lives up to the claim?\n\nAt its core, clean skincare means products formulated without ingredients known to be harmful to human health. This includes parabens, sulphates, synthetic fragrances, phthalates, formaldehyde, and many more chemicals commonly found in conventional skincare.\n\nBut here's where it gets complicated: the beauty industry is largely self-regulated. Terms like "natural" and "clean" have no legal definition, which means any brand can slap them on their packaging without meeting any standard.\n\nThat's why ingredient transparency is so important. At Glow to the Bone, we list every single ingredient in every product — because we have nothing to hide. Our Signature Blend contains just seven ingredients, all of which you can pronounce and understand. Our Pure Whipped Tallow contains literally one.\n\nWhen evaluating skincare products, we recommend the following:\n\n1. Read the full ingredient list, not just the marketing claims\n2. Research any ingredient you don't recognise\n3. Be wary of products with very long ingredient lists\n4. Look for brands that explain why each ingredient is included\n5. Consider the source — grass-fed, organic, and sustainably sourced ingredients matter\n\nYour skin is your body's largest organ. What you put on it matters just as much as what you put in your body.`,
  },
];
