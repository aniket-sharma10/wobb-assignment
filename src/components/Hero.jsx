import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnimatedCounter = ({ value, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.toString().includes("k")) {
      return `${Math.round(latest)}k+`;
    } else if (value.toString().includes("Cr")) {
      return `₹${Math.round(latest)}Cr+`;
    }
    return `${Math.round(latest).toLocaleString()}+`;
  });

  useEffect(() => {
    // Convert string values to numbers for animation
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

    const controls = animate(count, numericValue, {
      duration: 2.5,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        <motion.span>{rounded}</motion.span>
      </motion.div>
      <div className="text-blue-100 mt-1">{label}</div>
    </motion.div>
  );
};

const HeroSection = () => {
  const stats = [
    { value: "500", label: "Active Brands" },
    { value: "10k", label: "Creators" },
    { value: "1Cr", label: "Paid Out" },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            Turn Your Influence Into{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200 text-transparent bg-clip-text">
              Income
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Connect with top brands, create amazing content, and get paid for
            your influence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Campaigns
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-full font-semibold border border-white/30 text-white"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
