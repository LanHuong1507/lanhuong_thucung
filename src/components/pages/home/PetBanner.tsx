import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { motion } from "framer-motion";
import { routerNames } from "@/components/constants/router.constant";
import Banner1 from "@/assets/images/banner1.png";
import Banner3 from "@/assets/images/banner3.jpg";
import Banner2 from "@/assets/images/banner2.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="relative w-full h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center justify-center py-20">
          <motion.div
            className="text-black text-center mx-auto"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2 }}
            variants={textVariants}
          >
            <h1 className="text-3xl md:text-5xl leading-tight mb-6">
              Khám Phá Các Giống Thú Cưng Đáng Yêu
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Chọn lựa giống thú cưng phù hợp cho gia đình bạn. Cùng tìm hiểu
              những đặc điểm, tính cách và nhu cầu của từng giống để chọn được
              người bạn đồng hành lý tưởng cho ngôi nhà của bạn.
            </p>

            <Link href={routerNames.CATEGORY}>
              <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600">
                Tìm Hiểu Thêm
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="mt-12"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            variants={imageVariants}
          >
            <Image src={Banner1} alt="Banner Image 1" className="mx-auto" />
          </motion.div>
        </div>
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              src={Banner2}
              alt="Banner Image 2"
              layout="fill"
              className="z-0"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-black px-4 md:px-8 z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
              variants={textVariants}
            >
              <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                Giới Thiệu Các Loại Vật Nuôi
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Chúng tôi cung cấp nhiều loại vật nuôi cho bạn lựa chọn, từ
                những chú chó, mèo đáng yêu đến các loài vật nuôi độc đáo khác.
                Mỗi loài có những đặc điểm và yêu cầu chăm sóc riêng biệt, giúp
                bạn dễ dàng tìm được người bạn đồng hành lý tưởng.
              </p>
              <Link href={routerNames.CATEGORY}>
                <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600">
                  Tìm Hiểu Thêm
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image src={Banner3} alt="Banner Image 3" className="z-0" />
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-4 md:p-8 z-10"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
            variants={textVariants}
          >
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Dụng Cụ Chăm Sóc Thú Cưng Chất Lượng
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">
                Mua dụng cụ chăm sóc thú cưng từ các thương hiệu uy tín. Chúng
                tôi cung cấp các sản phẩm chất lượng cao giúp bạn chăm sóc vật
                nuôi một cách tốt nhất.
              </p>

              <Link href={routerNames.CATEGORY}>
                <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600">
                  Tìm Hiểu Thêm
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
