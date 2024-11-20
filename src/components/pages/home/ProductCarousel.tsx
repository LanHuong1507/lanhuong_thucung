import { motion } from "framer-motion";
import Slider from "react-slick";
import dogFoodImage from "../../../assets/images/dog.png";
import catFoodImage from "../../../assets/images/cat.jpg";
import fishFoodImage from "../../../assets/images/fish.jpg";
import Image from "next/image";
import React from "react";
import { Button } from "antd";
import { EnvironmentOutlined, HeartOutlined } from "@ant-design/icons";

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
              Khám phá sản phẩm thức ăn cho chó của Lan Hương – Lựa chọn hoàn
              hảo cho sự phát triển mạnh mẽ của cún yêu!
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 font-semibold lg:flex-row">
              <span className="flex items-center gap-2">
                <i className="fi fi-ss-dog text-pink-500 text-xl" /> Giúp phát
                triển cơ bắp
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> Thành
                phần tự nhiên
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Hỗ trợ sức
                khỏe tim mạch
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mua 2 tặng 1
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Mua ngay{" "}
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
              alt="Thức ăn chó"
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
              Đưa mèo yêu của bạn lên tầm cao mới với Lan Hương – Hương vị mê
              hoặc, chất lượng tuyệt vời!
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 font-semibold lg:flex-row">
              <span className="flex items-center gap-2">
                <i className="fi fi-ss-cat text-pink-500 text-xl" /> Dễ dàng
                chuẩn bị
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> 100%
                tự nhiên
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Hỗ trợ hệ
                tiêu hóa
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mua 2 tặng 1
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Mua ngay{" "}
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
              alt="Thức ăn mèo"
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
        <div className="relative z-10 flex flex-col md:flex-row md:w-full items-center justify-center w-full space-y-6 text-center md:text-left">
          <motion.div
            className="text-left md:w-2/3 w-full max-w-full overflow-hidden px-4 md:px-10 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-black mb-4 text-shadow-lg">
              Tạo nên môi trường sống lý tưởng cho cá yêu của bạn với Lan Hương
              – Sự lựa chọn hoàn hảo cho cá cảnh!
            </h1>
            <div className="flex flex-col justify-start gap-8 text-black text-lg mb-6 font-semibold lg:flex-row">
              <span className="flex items-center gap-2">
                <i className="fi fi-ss-dolphin text-pink-500 text-xl" /> Dễ dàng
                chuẩn bị
              </span>
              <span className="flex items-center gap-2">
                <EnvironmentOutlined className="text-green-500 text-xl" /> Thành
                phần tự nhiên
              </span>
              <span className="flex items-center gap-2">
                <HeartOutlined className="text-red-500 text-xl" /> Tăng cường
                sức khỏe da và vây
              </span>
            </div>
            <motion.p
              className="text-pink-500 text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mua 2 tặng 1
            </motion.p>
            <div className="mt-6">
              <Button className="p-6 text-xl text-white font-semibold bg-pink-600 rounded-lg">
                Mua ngay{" "}
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
              src={fishFoodImage}
              alt="Thức ăn cá"
              className="p-2 rounded-lg w-full object-contain opacity-90"
            />
          </motion.div>
        </div>
      </motion.div>
    </Slider>
  );
};

export default ProductCarousel;
