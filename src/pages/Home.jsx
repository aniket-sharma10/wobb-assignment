import React from 'react';
import CampaignCard from '../components/CampaignCard';
import Hero from "../components/Hero"
import TrustSection from "../components/TrustSection"
import { TrendingUp, Award, Target, Users } from 'lucide-react';
import NikeLogo from "../assets/nike.png"
import SephoraLogo from "../assets/sephora.png"
import NikeCampaign from "../assets/nikeCampaign.jpg"
import SephoraCampaign from "../assets/sephoraCamp.jpg"


const campaigns = [
  {
    id: 1,
    brandName: "Nike Sports",
    brandLogo: NikeLogo,
    campaignImage: NikeCampaign,
    title: "Athletic Wear Promotion",
    description: "Share your authentic workout moments wearing Nike gear",
    payoutType: "barter",
    payoutValue: "Products worth ₹15,000",
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
  }
];



const StatsSection = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 mb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Earnings</p>
              <p className="text-2xl font-bold">₹25,000</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold">45+</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Creator Network</p>
              <p className="text-2xl font-bold">10k+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Existing Hero Section */}
      <Hero />
      
      {/* New Stats Section */}
      <StatsSection />
      
      {/* Existing Campaign Cards Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Active Campaigns</h2>
          <button className="text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>

      <TrustSection />
    </div>
  );
};

export default Homepage;