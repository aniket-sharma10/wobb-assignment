import React from 'react';
import CampaignCard from '../components/CampaignCard';
import Hero from "../components/Hero"
import TrustSection from "../components/TrustSection"
import { campaigns } from '../data';
import StatsSection from '../components/StatsSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Campaign Cards Section */}
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