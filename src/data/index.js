import NikeLogo from "../assets/nike.png"
import AdidasLogo from "../assets/adidas.png"
import SamsungLogo from "../assets/samsung.png"
import HmLogo from "../assets/hm.png"
import AppleLogo from "../assets/apple.png"
import SephoraLogo from "../assets/sephora.png"
import ZaraLogo from "../assets/zara.png"
import MaybellineLogo from "../assets/maybelline.png"
import LorealLogo from "../assets/loreal.png"
import NvidiaLogo from "../assets/nvidia.png"
import PumaLogo from "../assets/puma.webp"

import NikeCampaign from "../assets/nikeCampaign.jpg"
import SephoraCampaign from "../assets/sephoraCamp.jpg"
import PumaCampaign from "../assets/pumaCamp.jpg"
import HmCampaign from "../assets/hmCamp.jpg"
import SamsungCampaign from "../assets/samsungCamp.jpg"
import LorealCampaign from "../assets/lorealCamp.jpg"

import { TrendingUp, Award, Target, Users } from 'lucide-react';

export const brands = [
  { name: "Nike", logo: NikeLogo },
  { name: "Adidas", logo: AdidasLogo },
  { name: "Puma", logo: PumaLogo },
  { name: "Sephora", logo: SephoraLogo },
  { name: "H&M", logo: HmLogo },
  { name: "Zara", logo: ZaraLogo },
  { name: "Samsung", logo: SamsungLogo },
  { name: "Apple", logo: AppleLogo },
  { name: "Nvidia", logo: NvidiaLogo },
  { name: "Loreal", logo: LorealLogo },
  { name: "Maybelline", logo: MaybellineLogo }
];

export const campaigns = [
  {
    id: 1,
    brandName: "Nike Sports",
    brandLogo: NikeLogo,
    campaignImage: NikeCampaign,
    title: "Athletic Wear Promotion",
    description: "Share your authentic workout moments wearing Nike gear",
    payoutType: "barter",
    payoutValue: "Worth ₹15,000",
    hired: 12,
    totalSlots: 20,
    requirements: "Min 10k followers, Sports/Fitness niche"
  },
  {
    id: 2,
    brandName: "Sephora",
    brandLogo: SephoraLogo,
    campaignImage: SephoraCampaign,
    title: "Beauty Products Review",
    payoutType: "fixed",
    payoutValue: "₹20,000",
    hired: 5,
    totalSlots: 15,
    description: "Create engaging content featuring our new skincare line",
    requirements: "Min 15k followers, Beauty niche"
  },
  {
    id: 3,
    brandName: "Puma",
    brandLogo: PumaLogo,
    campaignImage: PumaCampaign,
    title: "Streetwear Style Contest",
    description: "Highlight your streetwear style featuring Puma sneakers",
    payoutType: "refund",
    payoutValue: "product refund",
    hired: 10,
    totalSlots: 25,
    requirements: "Min 5k followers, Fashion niche"
  },
  {
    id: 4,
    brandName: "H&M",
    brandLogo: HmLogo,
    campaignImage: HmCampaign,
    title: "Sustainable Fashion Drive",
    description: "Create content wearing our sustainable fashion collection",
    payoutType: "fixed",
    payoutValue: "₹12,000",
    hired: 6,
    totalSlots: 15,
    requirements: "Min 12k followers, Lifestyle niche"
  },
  {
    id: 5,
    brandName: "Samsung",
    brandLogo: SamsungLogo,
    campaignImage: SamsungCampaign,
    title: "Smart Living Promotion",
    description: "Review and showcase the features of our latest Galaxy devices",
    payoutType: "barter",
    payoutValue: "Worth ₹50,000",
    hired: 3,
    totalSlots: 10,
    requirements: "Min 20k followers, Tech niche"
  },
  {
    id: 6,
    brandName: "L'Oréal",
    brandLogo: LorealLogo,
    campaignImage: LorealCampaign,
    title: "Skin Care Routine Promotion",
    description: "Show your skincare routine featuring L'Oréal's new product range",
    payoutType: "fixed",
    payoutValue: "₹18,000",
    hired: 10,
    totalSlots: 20,
    requirements: "Min 12k followers, Beauty/Wellness niche"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion & Lifestyle Creator",
    rating: 5,
    comment: "Wobb has transformed how I collaborate with brands. The platform is intuitive, and the team is incredibly supportive. I've doubled my earnings in just 6 months!",
    brandCount: 12,
    brandLogos: [
      HmLogo,
      ZaraLogo,
      NikeLogo
    ]
  },
  {
    name: "Mike Chen",
    role: "Tech Reviewer",
    rating: 5,
    comment: "The quality of campaigns and brands on Wobb is outstanding. The platform makes it easy to find relevant opportunities and manage collaborations efficiently.",
    brandCount: 8,
    brandLogos: [
      AppleLogo,
      SamsungLogo,
      NvidiaLogo
    ]
  },
  {
    name: "Priya Patel",
    role: "Beauty & Wellness Influencer",
    rating: 5,
    comment: "What sets Wobb apart is their commitment to creator success. The analytics tools and campaign insights have helped me grow my personal brand significantly.",
    brandCount: 15,
    brandLogos: [
      SephoraLogo,
      LorealLogo,
      MaybellineLogo
    ]
  }
];

export const stats = [
  {
    title: "Average Earnings",
    value: "₹25,000",
    icon: TrendingUp,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Success Rate",
    value: "92%",
    icon: Award,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Active Campaigns",
    value: "45+",
    icon: Target,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Creator Network",
    value: "10k+",
    icon: Users,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];