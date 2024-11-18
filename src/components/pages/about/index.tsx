import { Layout, Typography, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  HeartOutlined,
  SmileOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ProductList from "../home/ProductList";
import Logo from "../../../assets/images/logo.jpg";
import PepDog from "../../../assets/images/pd.jpg";
import PepCat from "../../../assets/images/pc.jpg";
import Image from "next/image";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Content className="bg-gray-50 py-2">
      <header className="relative w-full h-80 bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 opacity-70"></div>{" "}
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out hover:scale-105 hover:opacity-90">
          <Title
            level={2}
            className="text-white text-4xl font-semibold text-shadow-lg transform transition-all duration-500 ease-out hover:text-blue-100"
          >
            Về Chúng Tôi
          </Title>
        </div>
      </header>
      <main className="container mx-auto px-6 py-16">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Title level={3} className="text-3xl text-gray-800">
              Chúng Tôi Là Ai?
            </Title>
            <Paragraph className="text-lg text-gray-700">
              Chúng tôi là một doanh nghiệp chuyên cung cấp các sản phẩm và dịch
              vụ tốt nhất dành cho thú cưng. Với sự tận tâm, chúng tôi cam kết
              mang đến những sản phẩm an toàn, chất lượng và phù hợp với mọi nhu
              cầu của thú cưng, từ thức ăn, phụ kiện đến các sản phẩm chăm sóc
              sức khỏe.
            </Paragraph>
            <Title level={4} className="text-2xl text-gray-800 mt-6">
              Mô Tả Sản Phẩm
            </Title>
            <Paragraph className="text-lg text-gray-700">
              Chúng tôi cung cấp một loạt các sản phẩm chất lượng cao cho thú
              cưng, bao gồm:
              <ul className="list-disc pl-5">
                <li>Thức ăn dinh dưỡng, phù hợp với từng loại thú cưng</li>
                <li>Phụ kiện thời trang và tiện ích cho thú cưng</li>
                <li>
                  Sản phẩm chăm sóc sức khỏe như vitamin và thuốc thú cưng
                </li>
                <li>Đồ chơi và các sản phẩm giải trí cho thú cưng</li>
              </ul>
              Mỗi sản phẩm của chúng tôi đều được kiểm tra kỹ lưỡng và đảm bảo
              an toàn cho sức khỏe của thú cưng.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Image
              src={Logo}
              alt="Logo"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              layout="responsive"
              width={600}
              height={600}
            />
          </Col>
        </Row>
      </main>
      <section className="bg-gray-100 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-white opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-[url('/path/to/your-pattern.png')] bg-cover opacity-20 z-0"></div>{" "}
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <Title level={3} className="text-3xl text-center mb-12">
            Giá Trị Cốt Lõi
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <div className="text-center">
                <i className="fi fi-rs-star text-4xl text-yellow-500"></i>
                <Title level={4} className="mt-4">
                  Chất Lượng Hàng Đầu
                </Title>
                <Paragraph className="text-gray-700">
                  Chúng tôi cam kết cung cấp các sản phẩm đạt tiêu chuẩn cao
                  nhất về chất lượng và an toàn.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center">
                <HeartOutlined className="text-4xl text-red-600" />
                <Title level={4} className="mt-4">
                  Quan Tâm
                </Title>
                <Paragraph className="text-gray-700">
                  Chúng tôi xem mỗi thú cưng như một thành viên trong gia đình
                  và luôn chăm sóc bằng cả trái tim.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center">
                <i className="fi fi-rs-hand-holding-heart text-4xl text-green-500"></i>
                <Title level={4} className="mt-4">
                  Cộng Đồng
                </Title>
                <Paragraph className="text-gray-700">
                  Chúng tôi xây dựng một cộng đồng yêu thương thú cưng thông qua
                  các chương trình giáo dục và sự kiện kết nối.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center">
                <EnvironmentOutlined className="text-4xl text-green-800" />
                <Title level={4} className="mt-4">
                  100% Tự Nhiên
                </Title>
                <Paragraph className="text-gray-700">
                  Tất cả sản phẩm của chúng tôi đều tự nhiên và không chứa chất
                  bảo quản độc hại, mang lại an toàn cho thú cưng của bạn.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center">
                <SmileOutlined className="text-4xl text-blue-900" />
                <Title level={4} className="mt-4">
                  Dễ Dàng Chuẩn Bị
                </Title>
                <Paragraph className="text-gray-700">
                  Sản phẩm dễ dàng sử dụng và chuẩn bị, giúp tiết kiệm thời gian
                  cho bạn.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center">
                <ThunderboltOutlined className="text-4xl text-orange-700" />
                <Title level={4} className="mt-4">
                  Giàu Năng Lượng
                </Title>
                <Paragraph className="text-gray-700">
                  Các sản phẩm của chúng tôi cung cấp năng lượng dồi dào cho thú
                  cưng, giúp chúng luôn vui vẻ và khỏe mạnh.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <ProductList />
      </section>
      <footer className="bg-white py-16">
        <div className="container mx-auto px-6 py-16">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div className="text-left">
                <Title
                  level={3}
                  className="text-5xl font-extrabold text-gray-800 mb-6 transform transition-all duration-300 ease-out hover:text-blue-600"
                >
                  Cộng Đồng
                </Title>
                <Paragraph className="text-2xl text-gray-700 mb-8 leading-relaxed transform transition-all duration-300 ease-out hover:text-gray-800">
                  Chúng tôi xây dựng một cộng đồng yêu thương thú cưng thông qua
                  các chương trình giáo dục và sự kiện kết nối.
                  <br />
                  <a
                    href="https://www.petcommunitycenter.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                  >
                    Tham gia cộng đồng Pet Community Center
                  </a>
                  .
                </Paragraph>
                <div className="relative group">
                  <Image
                    src={PepCat}
                    alt="Pet Community Center"
                    layout="responsive"
                    width={1899}
                    height={733}
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-all duration-500 ease-in-out"></div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="relative group">
                <Image
                  src={PepDog}
                  alt="Pet Community Center"
                  layout="responsive"
                  width={1899}
                  height={733}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-all duration-500 ease-in-out"></div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </Content>
  );
};

export default About;
