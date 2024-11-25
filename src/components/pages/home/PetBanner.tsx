import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
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

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="relative w-full h-screen flex flex-col items-center justify-center py-20">
          <div className="text-black text-center">
            <h1 className="text-3xl md:text-5xl leading-tight mb-4">
              Khám Phá Các Giống Thú Cưng Đáng Yêu
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Chọn lựa giống thú cưng phù hợp cho gia đình bạn.
            </p>
            <Link href={routerNames.CATEGORY}>
              <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                Tìm Hiểu Thêm
              </div>
            </Link>
            <div className="mt-10">
              <Image src={Banner1} alt="Banner Image 1" className="mx-auto" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              src={Banner2}
              alt="Banner Image 2"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-black px-4 md:px-8 z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                Giới Thiệu Các Loại Vật Nuôi
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Chúng tôi cung cấp nhiều loại vật nuôi cho bạn lựa chọn.
              </p>
              <Link href={routerNames.CATEGORY}>
                <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                  Tìm Hiểu Thêm
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              src={Banner3}
              alt="Banner Image 3"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-black px-4 md:px-8 z-10">
            <div>
              <h1 className="text-3xl md:text-5xl leading-tight mb-4">
                Dụng Cụ Chăm Sóc Thú Cưng Chất Lượng
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Mua dụng cụ chăm sóc thú cưng từ các thương hiệu uy tín.
              </p>
              <Link href="/category">
                <div className="inline-block bg-yellow-400 text-gray-800 text-lg font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
                  Tìm Hiểu Thêm
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
