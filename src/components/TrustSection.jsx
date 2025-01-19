import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BrandScroller = () => {
  const brands = [
    { name: "Nike", logo: NikeLogo},
    { name: "Adidas", logo: AdidasLogo },
    { name: "Puma", logo:  PumaLogo},
    { name: "Sephora", logo: SephoraLogo },
    { name: "H&M", logo: HmLogo },
    { name: "Zara", logo: ZaraLogo },
    { name: "Samsung", logo: SamsungLogo },
    { name: "Apple", logo: AppleLogo },
    { name: "Nvidia", logo: NvidiaLogo },
    { name: "Loreal", logo: LorealLogo },
    { name: "Maybelline", logo: MaybellineLogo }
  ];

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join our network of premium brands actively seeking authentic creators like you
        </p>
        
        <div className="relative overflow-hidden">
          <Slider {...settings2} className="">
            {brands &&
              brands.length > 0 &&
              brands.map((brand, index) => (
                <div
                key={index}
                className="flex items-center justify-center w-40 h-16"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm"
  >
    <div className="flex gap-4 mb-4">
      <div>
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < testimonial.rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <Quote className="w-8 h-8 text-blue-100 mb-2" />
    <p className="text-gray-700">{testimonial.comment}</p>
    <div className="mt-4 flex items-center gap-2">
      <div className="flex space-x-1">
        {testimonial.brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand logo"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">Collaborated with {testimonial.brandCount}+ brands</span>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
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
        MaybellineLogo,
        LorealLogo
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Creator Success Stories
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of creators who have found success through our platform
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustSection = () => {
  return (
    <>
      <BrandScroller />
      <TestimonialsSection />
    </>
  );
};

export default TrustSection;