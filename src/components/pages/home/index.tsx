import Link from "next/link";
import ProductCarousel from "../../pages/home/ProductCarousel";
import Image from "next/image";
import PeoDog from "../../../assets/images/pd.jpg";
import { Button } from "antd";
import { routerNames } from "@/components/constants/router.constant";
import {
  EnvironmentOutlined,
  HeartOutlined,
  SmileOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <main>
      <div className="flex items-center justify-center">
        <ProductCarousel />
      </div>
      <section>
        <ProductList showBestSeller={true}/>
      </section>
      <div className="px-4 py-10">
        <h2 className="text-xl font-semibold text-center mb-4">
          MUA SẮM THEO THÚ CƯNG CỦA BẠN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-ss-dog text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">CHÓ</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-cat text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">MÈO</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-dolphin text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">CÁ</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 py-8 px-6 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-rabbit text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">THỎ</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-turtle text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">RÙA</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-steak text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">KHÁC</span>
          </Link>
        </div>
      </div>
      <section>
        <ProductList showBestSeller={false}/>
      </section>

      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-10">
        <div className="flex-1 space-y-4 text-start md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Chúng tôi quan tâm đến sự phát triển khỏe mạnh và chuẩn hóa của thú
            cưng của bạn.
          </h1>
          <div className="flex flex-col justify-center lg:justify-start space-y-4 md:space-x-6 mt-6">
            <div className="lg:pl-6 flex items-center space-x-2 text-gray-600">
              <EnvironmentOutlined className="text-red-500 text-lg" />
              <span className="text-lg">100% Tự Nhiên</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <SmileOutlined className="text-red-500 text-lg" />
              <span className="text-lg">Dễ Dàng Chuẩn Bị</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <HeartOutlined className="text-red-500 text-lg" />
              <span className="text-lg">Tăng Cường Hệ Miễn Dịch</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <StarOutlined className="text-red-500 text-lg" />
              <span className="text-lg">Chất Lượng Hàng Đầu</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <ThunderboltOutlined className="text-red-500 text-lg" />
              <span className="text-lg">Giàu Năng Lượng</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 leading-relaxed">
              Sản phẩm của chúng tôi không chỉ cung cấp dinh dưỡng tối ưu mà còn
              giúp thú cưng của bạn luôn khỏe mạnh, vui vẻ và tràn đầy sức sống.
              Với thành phần hoàn toàn tự nhiên, không chất bảo quản và được
              phát triển bởi các chuyên gia hàng đầu, chúng tôi cam kết mang đến
              chất lượng tốt nhất cho thú cưng của bạn.
            </p>
          </div>
          <Link href={routerNames.ABOUT} passHref>
            <Button
              type="primary"
              className="mt-6 p-6 bg-red-600 hover:bg-blue-600 text-white"
            >
              <span className="font-medium text-lg">Về Chúng Tôi</span>
              <i className="fi fi-sr-arrow-right text-white text-lg pt-1"></i>
            </Button>
          </Link>
        </div>
        <div className="flex-1 mt-4 lg:flex justify-end">
          <Image
            src={PeoDog}
            alt="Chú chó đáng yêu"
            className="rounded-lg w-full object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
