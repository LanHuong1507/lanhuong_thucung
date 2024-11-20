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
  ShoppingOutlined,
  SmileOutlined,
  SolutionOutlined,
  StarOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ProductList from "./ProductList";
import BlogList from "./BlogList";
const { Title, Paragraph } = Typography;

const Home = () => {
  const stats = [
    {
      id: 1,
      icon: <SolutionOutlined className="text-4xl text-blue-500" />,
      number: "1500+",
      label: "Khách hàng",
      bgClass: "bg-blue-50",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      icon: <ShoppingOutlined className="text-4xl text-orange-500" />,
      number: "1000+",
      label: "Sản phẩm",
      bgClass: "bg-orange-50",
      borderColor: "border-orange-400",
    },
    {
      id: 3,
      icon: <TeamOutlined className="text-4xl text-green-500" />,
      number: "50+",
      label: "Giống thú cưng",
      bgClass: "bg-green-50",
      borderColor: "border-green-400",
    },
  ];

  return (
    <main>
      <section className="flex items-center justify-center">
        <ProductCarousel />
      </section>
      <section className="py-10 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Chào mừng bạn đến với Lan Hương Pet Shop!
          </h1>
          <Paragraph className="text-lg text-gray-700">
            Chúng tôi là một doanh nghiệp chuyên cung cấp các sản phẩm và dịch
            vụ tốt nhất dành cho thú cưng. Với sự tận tâm, chúng tôi cam kết
            mang đến những sản phẩm an toàn, chất lượng và phù hợp với mọi nhu
            cầu của thú cưng, từ thức ăn, phụ kiện đến các sản phẩm chăm sóc sức
            khỏe.
          </Paragraph>
          <Title level={4} className="text-2xl text-gray-800 mt-6">
            Mô Tả Sản Phẩm
          </Title>
          <Paragraph className="text-lg text-gray-700">
            Chúng tôi cung cấp một loạt các sản phẩm chất lượng cao cho thú
            cưng, bao gồm:
            <ul className="list-disc pl-5">
              <li>Các giống thú cưng chất lượng gồm chó,mèo,chim,...</li>
              <li>Thức ăn dinh dưỡng, phù hợp với từng loại thú cưng</li>
              <li>Phụ kiện thời trang và tiện ích cho thú cưng</li>
              <li>Sản phẩm chăm sóc sức khỏe như vitamin và thuốc thú cưng</li>
              <li>Đồ chơi và các sản phẩm giải trí cho thú cưng</li>
            </ul>
            Mỗi sản phẩm của chúng tôi đều được kiểm tra kỹ lưỡng và đảm bảo an
            toàn cho sức khỏe của thú cưng.
          </Paragraph>
          <Link href={routerNames.INTRODUCTION} passHref>
            <Button
              type="primary"
              className="mt-6 py-4 px-8 bg-red-600 hover:bg-blue-600 text-white text-lg rounded-lg shadow-lg"
            >
              Tìm Hiểu Thêm
            </Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={shop}
            alt="Pet Care Illustration"
            width={450}
            height={450}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      <section className="py-4">
        <ProductList showBestSeller={true} />
      </section>

      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Mua Sắm Theo Thú Cưng Của Bạn
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {[
            { label: "CHÓ", icon: "fi fi-ss-dog", link: routerNames.DOG },
            { label: "MÈO", icon: "fi fi-sr-cat", link: routerNames.CAT },
            { label: "CÁ", icon: "fi fi-sr-dolphin", link: routerNames.FISH },
            { label: "THỎ", icon: "fi fi-sr-rabbit", link: routerNames.RABBIT },
            { label: "RÙA", icon: "fi fi-sr-turtle", link: routerNames.TURTLE },
            { label: "CHIM", icon: "fi fi-sr-bird", link: routerNames.BIRD },
            {
              label: "KHÁC",
              icon: "fi fi-sr-steak",
              link: routerNames.PRODUCT,
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex flex-col items-center rounded-lg bg-white p-6 hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out border border-gray-200"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-slate-600 text-white rounded-full">
                <i className={`${item.icon} text-3xl`}></i>
              </div>
              <span className="mt-4 text-gray-700 text-lg font-medium">
                {item.label}
              </span>
            </Link>
          ))}
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
      <section className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`flex space-x-4 p-6 rounded-lg border ${stat.bgClass} ${stat.borderColor} transform transition duration-300 hover:scale-105 hover:shadow-lg`}
            style={{ borderWidth: "2px" }}
          >
            <div className="bg-white p-4 rounded-full shadow-md">
              {stat.icon}
            </div>
            <div>
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="text-gray-500 text-2xl">{stat.label}</p>
            </div>
          </div>
        ))}
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
