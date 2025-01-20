import { Progress } from "../components/ui/Progress"
import { Badge } from "./ui/Badge"
import { Card, CardContent } from "./ui/Card"
import { Gift, RefreshCw, Banknote } from "lucide-react";
import { motion } from "framer-motion";

const PayoutIcon = ({ type }) => {
  switch (type) {
    case 'barter':
      return <Gift className="w-4 h-4" />;
    case 'refund':
      return <RefreshCw className="w-4 h-4" />;
    case 'fixed':
      return <Banknote className="w-4 h-4" />;
    default:
      return null;
  }
};

function CampaignCard({ campaign }) {
  const progress = (campaign.hired / campaign.totalSlots) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        <Card className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={campaign.campaignImage} 
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ rotate: -15, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="absolute top-4 right-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-white rounded-full border p-1"
              >
                <img 
                  src={campaign.brandLogo} 
                  alt={campaign.brandName}
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
          
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between items-start mb-4"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{campaign.brandName}</h3>
                <h4 className="text-sm text-gray-600">{campaign.title}</h4>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="secondary" className="flex items-center gap-1">
                  <PayoutIcon type={campaign.payoutType} />
                  <span className="text-xs">{campaign.payoutValue}</span>
                </Badge>
              </motion.div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-600 mb-4 line-clamp-2"
            >
              {campaign.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Hiring Progress</span>
                <span className="font-medium">{campaign.hired}/{campaign.totalSlots}</span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ originX: 0 }}
              >
                <Progress value={progress} className="h-2" />
              </motion.div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-xs text-gray-500"
            >
              {campaign.requirements}
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default CampaignCard;