import {Progress} from "../components/ui/Progress"
import {Badge} from "./ui/Badge"
import {Card, CardContent} from "./ui/Card"
import { Gift, RefreshCw, DollarSign } from "lucide-react";

const PayoutIcon = ({ type }) => {
  switch (type) {
    case 'barter':
      return <Gift className="w-4 h-4" />;
    case 'refund':
      return <RefreshCw className="w-4 h-4" />;
    case 'fixed':
      return <DollarSign className="w-4 h-4" />;
    default:
      return null;
  }
};

function CampaignCard({ campaign }) {
  const progress = (campaign.hired / campaign.totalSlots) * 100;
  

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        <img 
          src={campaign.campaignImage} 
          alt={campaign.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full border">
          <img 
            src={campaign.brandLogo} 
            alt={campaign.brandName}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">{campaign.brandName}</h3>
            <h4 className="text-sm text-gray-600">{campaign.title}</h4>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <PayoutIcon type={campaign.payoutType} />
            <span className="text-xs">{campaign.payoutValue}</span>
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {campaign.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Hiring Progress</span>
            <span className="font-medium">{campaign.hired}/{campaign.totalSlots}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <p className="mt-4 text-xs text-gray-500">
          {campaign.requirements}
        </p>
      </CardContent>
    </Card>
  );
};

export default CampaignCard 