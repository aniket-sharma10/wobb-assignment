import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Users, Banknote } from "lucide-react";

const AnimatedCounter = ({ value, label, icon: Icon }) => {
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
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
    >
      {Icon && <Icon className="w-6 h-6 text-blue-200 mb-2" />}
      <motion.div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
        <motion.span>{rounded}</motion.span>
      </motion.div>
      <div className="text-blue-100 mt-1 font-medium">{label}</div>
    </motion.div>
  );
};

const HeroSection = () => {
  const stats = [
    { value: "500", label: "Active Brands", icon: Sparkles },
    { value: "10k", label: "Creators", icon: Users},
    { value: "3Cr", label: "Paid Out", icon: Banknote },
  ];

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background*/}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      </motion.div>

      {/* Content */}
      <div className="relative">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="text-center space-y-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm md:text-base text-white/90 mb-6"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Join 10,000+ creators earning with Wobb
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto"
            >
              Turn Your Influence Into{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-200 text-transparent bg-clip-text">
                  Income
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 358 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path
                    d="M3 9C3 9 93.3 -2.7 176.5 3.3C259.7 9.3 355 9 355 9"
                    stroke="url(#paint0_linear)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="3"
                      y1="9"
                      x2="355"
                      y2="9"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FEF3C7" />
                      <stop offset="0.5" stopColor="#FBE7F6" />
                      <stop offset="1" stopColor="#FEF3C7" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium"
            >
              Connect with top brands, create amazing content, and get paid for
              your influence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <motion.button
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Campaigns
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group px-8 py-4 rounded-full font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-4 max-w-4xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className={`${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full' : ''}`}>
                <AnimatedCounter key={index} value={stat.value} label={stat.label} icon={stat.icon} />
              </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="w-6 h-6 text-white/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;