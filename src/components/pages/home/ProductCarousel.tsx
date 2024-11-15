import { motion } from "framer-motion";
import Slider from "react-slick";
import dogFoodImage from "../../../assets/images/dog.png";
import catFoodImage from "../../../assets/images/cat.jpg";
import fishFoodImage from "../../../assets/images/fish.jpg";
const CheckCircleOutlined = dynamic(
  () => import("@ant-design/icons").then((icon) => icon.CheckCircleOutlined),
  { ssr: false },
);
const EnvironmentOutlined = dynamic(
  () => import("@ant-design/icons").then((icon) => icon.EnvironmentOutlined),
  { ssr: false },
);
const HeartOutlined = dynamic(
  () => import("@ant-design/icons").then((icon) => icon.HeartOutlined),
  { ssr: false },
);
import Image from "next/image";
import React from "react";
import { Button } from "antd";
import dynamic from "next/dynamic";

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl z-10 hidden md:block bg-red-500 rounded-full p-2"
    onClick={onClick}
  >
    &gt;
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl z-10 hidden md:block bg-red-500 rounded-full p-2"
    onClick={onClick}
  >
    &lt;
  </button>
);

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <Slider {...settings} className="w-full mx-auto">
      <motion.div
        className="relative p-4 text-center flex flex-col md:flex-row items-center md:space-x-6 bg-gradient-to-r from-yellow-400 to-yellow-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:w-full items-center justify-center w-full space-y-6 text-center md:text-left">
          <motion.div
            className="text-left md:w-2/3 w-full max-w-full overflow-hidden px-4 md:px-10 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-black mb-4 text-shadow-lg">
              PGDog, dry food for your pet’s family
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 font-semibold lg:flex-row">
              <span className="flex items-center gap-2">
                <CheckCircleOutlined className="text-pink-800 text-xl" /> Easy
                prepare
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> 100%
                Natural
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Strengthens
                immunity
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Buy two, get 1 free
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Shop now{" "}
                <i className="fi fi-sr-arrow-right text-white text-lg pt-2"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={dogFoodImage}
              alt="Dog Food"
              className="p-2 rounded-lg w-full object-contain opacity-90"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative p-8 text-center flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 bg-gradient-to-r from-slate-300 to-slate-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:w-full items-center justify-between w-full space-y-6 md:space-y-0 text-center md:text-left">
          <motion.div
            className="text-left md:w-2/3 w-full max-w-full overflow-hidden px-6 md:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-black mb-4 text-shadow-lg">
              PGCat, premium food for your cat’s health
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 font-semibold lg:flex-row">
              <span className="flex items-center gap-2">
                <CheckCircleOutlined className="text-pink-500 text-xl" /> Easy
                prepare
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> 100%
                Natural
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Strengthens
                immunity
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Buy two, get 1 free
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Shop now{" "}
                <i className="fi fi-sr-arrow-right text-white text-lg pt-2"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 md:w-1/3 w-full flex justify-center px-4"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={catFoodImage}
              alt="Cat Food"
              className="rounded-lg w-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="relative p-8 text-center flex-col md:flex-row items-center md:space-x-8 bg-gradient-to-r from-blue-300 to-blue-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:w-full items-center justify-between w-full space-y-6 md:space-y-0 text-center md:text-left">
          <motion.div
            className="text-left md:w-2/3 w-full max-w-full overflow-hidden px-6 md:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-black mb-4 text-shadow-lg">
              PGFish, healthy food for your fish
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 lg:flex-row">
              <span className="flex items-center gap-2">
                <CheckCircleOutlined className="text-pink-800 text-xl" /> Easy
                prepare
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> 100%
                Natural
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Strengthens
                immunity
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Buy two, get 1 free
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Shop now{" "}
                <i className="fi fi-sr-arrow-right text-white text-lg pt-2"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 md:w-1/3 w-full flex justify-center px-4"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={fishFoodImage}
              alt="Fish Food"
              className="rounded-lg w-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </Slider>
  );
};

export default ProductCarousel;
