import product1 from "@assets/Screenshot_20260319-234309_TikTok_1773954622729.jpg";
import product2 from "@assets/Screenshot_20260319-234307_TikTok_1773954622753.jpg";
import product3 from "@assets/Screenshot_20260319-234303_TikTok_1773954622767.jpg";
import product4 from "@assets/Screenshot_20260319-234314_TikTok_1773954622743.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  comparePrice?: number;
  category: string;
  image: string;
  images?: string[];
  rating: string;
  reviews: number;
  description: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Authentic Henna Paste",
    price: 35,
    comparePrice: 50,
    category: "Henna Art",
    image: product1,
    images: [product1, product2, product3],
    rating: "5.0",
    reviews: 342,
    description: "Our signature pure henna paste, sourced from the finest natural leaves. Delivers a deep, rich stain that lasts up to two weeks. Perfect for intricate bridal designs and everyday art.",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Pigmentation Cream Mix",
    price: 65,
    comparePrice: 85,
    category: "Skincare",
    image: product2,
    images: [product2, product1, product4],
    rating: "4.9",
    reviews: 521,
    description: "A luxurious, fast-absorbing cream formulated with a blend of ancient herbal extracts and modern science. Targets hyperpigmentation and uneven skin tone for a brighter, radiant complexion.",
    badge: "Viral on TikTok",
  },
  {
    id: 3,
    name: "Natural Herbal Hair Oil",
    price: 45,
    category: "Hair Care",
    image: product3,
    images: [product3, product4, product1],
    rating: "5.0",
    reviews: 189,
    description: "A potent blend of natural herbal extracts designed to strengthen hair roots, reduce hair fall, and promote healthy, lustrous growth. Lightweight and non-greasy formula.",
  },
  {
    id: 4,
    name: "Luxury Skincare Bundle",
    price: 150,
    comparePrice: 185,
    category: "Sets",
    image: product4,
    images: [product4, product2, product3],
    rating: "5.0",
    reviews: 97,
    description: "The ultimate self-care package. Includes our bestselling Pigmentation Cream, Herbal Hair Oil, and a complimentary Saffron Face Mask. Save 20% compared to buying individually.",
    badge: "Best Value",
  },
  {
    id: 5,
    name: "Saffron Glow Face Mask",
    price: 55,
    category: "Skincare",
    image: product1,
    images: [product1, product3, product2],
    rating: "4.8",
    reviews: 156,
    description: "A rich, nourishing face mask infused with pure saffron extract and organic aloe vera. Deeply hydrates, brightens, and revitalizes tired skin in just 15 minutes.",
  },
  {
    id: 6,
    name: "Bridal Henna Cone Set",
    price: 85,
    comparePrice: 110,
    category: "Henna Art",
    image: product4,
    images: [product4, product1, product2],
    rating: "5.0",
    reviews: 203,
    description: "Premium henna cone set specially formulated for bridal occasions. Includes 6 cones with extra-dark stain formula, aftercare oil, and detailed design guide.",
    badge: "Premium",
  },
];

export const CATEGORIES = ["All", "Henna Art", "Skincare", "Hair Care", "Sets"];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Amina S.",
    location: "Dubai, UAE",
    comment: "I saw their TikToks and decided to try the pigmentation cream. The results are unbelievable! My skin has never looked clearer. Hamza's mixes are pure magic.",
    product: "Pigmentation Cream Mix",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima R.",
    location: "Abu Dhabi, UAE",
    comment: "Their henna paste gives the deepest, richest color I've ever seen. It lasted so long for my sister's wedding. Excellent customer service too!",
    product: "Authentic Henna Paste",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariam K.",
    location: "Sharjah, UAE",
    comment: "The herbal hair oil has completely stopped my hair fall. It's so rare to find authentic, natural products like these in the UAE. Forever a loyal customer!",
    product: "Natural Herbal Hair Oil",
    rating: 5,
  },
  {
    id: 4,
    name: "Zainab A.",
    location: "Ajman, UAE",
    comment: "This literally saved my skin. I tried everything for my dark spots and nothing worked until I found Arifa. Three weeks in and the difference is incredible.",
    product: "Pigmentation Cream Mix",
    rating: 5,
  },
  {
    id: 5,
    name: "Sara M.",
    location: "Ras Al Khaimah, UAE",
    comment: "The bridal henna set was absolutely perfect for my wedding. The stain was so deep and lasted beautifully throughout the celebrations. Highly recommend!",
    product: "Bridal Henna Cone Set",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "How long until I see results?",
    answer: "While many users report seeing a difference within 2-3 weeks, consistent use for at least 30-45 days is recommended for significant results.",
  },
  {
    question: "Is it suitable for sensitive skin?",
    answer: "Our products are formulated with natural ingredients. However, we always recommend performing a patch test on a small area of skin 24 hours before full application.",
  },
  {
    question: "Are your products officially licensed?",
    answer: "Yes. All Arifa Cosmetics products are fully licensed and approved within the UAE, adhering to the highest safety and quality standards.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we serve customers within the UAE with fast delivery. International shipping is coming soon. Contact us via WhatsApp for special arrangements.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 14-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund or exchange.",
  },
];
