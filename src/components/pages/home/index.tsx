import Link from "next/link";
import ProductCarousel from "../../pages/home/ProductCarousel";
import Image from "next/image";
import PeoDog from "../../../assets/images/pd.jpg";
import shop from "../../../assets/images/shop1.png";
import { Button, Col, Row, Typography } from "antd";
import { routerNames } from "@/components/constants/router.constant";
import {
  EnvironmentOutlined,
  HeartOutlined,
  SmileOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ProductList from "./ProductList";
import BlogList from "./BlogList";
const { Title, Paragraph } = Typography;
const Home = () => {
  return (
    <main>
      <section className="flex items-center justify-center">
        <ProductCarousel />
      </section>
      <section className="bg-gray-50 py-6 px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Chào mừng bạn đến với Lan Hương Pet Shop!
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Chúng tôi chuyên cung cấp các sản phẩm và dịch vụ chăm sóc thú cưng
            tốt nhất, từ thức ăn, phụ kiện đến các dịch vụ tư vấn sức khỏe. Hãy
            cùng khám phá để mang lại những điều tuyệt vời nhất cho thú cưng của
            bạn!
          </p>
          <Link href={routerNames.INTRODUCTION} passHref>
            <Button
              type="primary"
              className="mt-6 p-6 bg-red-600 hover:bg-blue-600 text-white"
            >
              <span className="font-medium text-lg">Gioi Thieu</span>
              <i className="fi fi-sr-arrow-right text-white text-lg pt-1"></i>
            </Button>
          </Link>
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-6 flex justify-center">
          <Image
            src={shop}
            alt="Pet Care Illustration"
            width={350}
            height={350}
            className="rounded-lg shadow-md mt-4 w-full"
          />
        </div>
      </section>

      <section className="py-4">
        <ProductList showBestSeller={true} />
      </section>

      <section className="px-4 py-10">
        <h2 className="text-xl font-semibold text-center mb-4">
          MUA SẮM THEO THÚ CƯNG CỦA BẠN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 justify-center">
          <Link
            href={routerNames.DOG}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-ss-dog text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">CHÓ</span>
          </Link>
          <Link
            href={routerNames.CAT}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-cat text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">MÈO</span>
          </Link>
          <Link
            href={routerNames.FISH}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-dolphin text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">CÁ</span>
          </Link>
          <Link
            href={routerNames.RABBIT}
            className="flex flex-col items-center rounded-lg bg-slate-600 py-8 px-6 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-rabbit text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">THỎ</span>
          </Link>
          <Link
            href={routerNames.TURTLE}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-turtle text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">RÙA</span>
          </Link>
          <Link
            href={routerNames.BIRD}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-bird text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">CHIM</span>
          </Link>
          <Link
            href={routerNames.PRODUCT}
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-steak text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">KHÁC</span>
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-white opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-cover opacity-20 z-0"></div>{" "}
        <div className="container mx-auto px-6 relative z-10">
          <Title
            level={3}
            className="text-3xl text-center mb-12 text-gray-800 relative z-10"
          >
            Sứ Mệnh & Tầm Nhìn
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div className="p-6 border-4 border-blue-300 rounded-lg shadow-lg bg-white relative z-10">
                <Title level={4} className="text-xl text-blue-400 mb-4">
                  Sứ Mệnh
                </Title>
                <Paragraph className="text-lg text-gray-700">
                  Sứ mệnh của chúng tôi là nâng cao chất lượng cuộc sống của thú
                  cưng và chủ nhân, thông qua việc cung cấp các sản phẩm tốt
                  nhất và xây dựng một cộng đồng yêu thương, nơi thú cưng được
                  chăm sóc như một thành viên gia đình.
                </Paragraph>
                <div className="hidden md:block absolute bottom-0 right-0 p-4 text-blue-400 ">
                  <HeartOutlined className="text-5xl" />
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="p-6 border-4 border-blue-300 rounded-lg shadow-lg bg-white relative z-10">
                <Title level={4} className="text-xl text-blue-400 mb-4">
                  Tầm Nhìn
                </Title>
                <Paragraph className="text-lg text-gray-700">
                  Chúng tôi mong muốn trở thành nhà cung cấp hàng đầu về các sản
                  phẩm và dịch vụ thú cưng, tạo nên một thế giới nơi thú cưng
                  được yêu thương, chăm sóc và tôn trọng.
                </Paragraph>
                <div className="hidden md:block absolute bottom-0 right-0 p-4 text-blue-400">
                  <StarOutlined className="text-5xl" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="py-4">
        <ProductList showBestSeller={false} />
      </section>
      <section className="py-4">
        <BlogList />
      </section>
      <section className="flex flex-col md:flex-row items-center bg-gray-100 p-10">
        <article className="flex-1 space-y-4 text-start md:text-left">
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

          <p className="text-gray-700 leading-relaxed mt-4">
            Sản phẩm của chúng tôi không chỉ cung cấp dinh dưỡng tối ưu mà còn
            giúp thú cưng của bạn luôn khỏe mạnh, vui vẻ và tràn đầy sức sống.
            Với thành phần hoàn toàn tự nhiên, không chất bảo quản và được phát
            triển bởi các chuyên gia hàng đầu, chúng tôi cam kết mang đến chất
            lượng tốt nhất cho thú cưng của bạn.
          </p>

          <Link href={routerNames.ABOUT} passHref>
            <Button
              type="primary"
              className="mt-6 p-6 bg-red-600 hover:bg-blue-600 text-white"
            >
              <span className="font-medium text-lg">Về Chúng Tôi</span>
              <i className="fi fi-sr-arrow-right text-white text-lg pt-1"></i>
            </Button>
          </Link>
        </article>

        <aside className="flex-1 mt-4 lg:flex justify-end">
          <Image
            src={PeoDog}
            alt="Chú chó đáng yêu"
            className="rounded-lg w-full object-cover"
            width={400}
            height={400}
          />
        </aside>
      </section>
    </main>
  );
};

export default Home;
