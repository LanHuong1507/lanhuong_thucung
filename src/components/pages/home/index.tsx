import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/logo.jpg";
import shop from "../../../assets/images/shop1.png";
import { Button, Typography, Row, Col, Tabs } from "antd";
import ThuCung from "../../../assets/images/thucung.jpg";
import VatNuoi from "../../../assets/images/vatnuoi.jpg";
import DungCu from "../../../assets/images/dungcuchamsoc.jpg";
import PetBanner from "./PetBanner";
import PetBusinessCircle from "./PetBusinessCircle";
import PepDog from "../../../assets/images/pd.jpg";
import PepCat from "../../../assets/images/pc.jpg";
import {
  EnvironmentOutlined,
  HarmonyOSOutlined,
  HeartOutlined,
  SmileOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { routerNames } from "@/components/constants/router.constant";
import PartnerCarousel from "./PartnerCarousel";
import ProductList from "./ProductList";

const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

const Home = () => {
  const productCategories = [
    {
      id: 1,
      name: "Thú Cưng",
      description:
        "Khám phá bộ sưu tập thú cưng đa dạng tại Lan Hương Pet Shop. Chúng tôi cung cấp những giống chó, mèo, chim và nhiều loài khác, mỗi con đều được chăm sóc kỹ lưỡng và đảm bảo sức khỏe tuyệt vời, sẵn sàng trở thành người bạn đồng hành tuyệt vời cho gia đình bạn.",
      image: ThuCung,
    },
    {
      id: 2,
      name: "Vật Nuôi",
      description:
        "Khám phá bộ sưu tập vật nuôi đa dạng tại Lan Hương Pet Shop. Chúng tôi cung cấp những giống cá,rùa,thỏ và nhiều loài khác, mỗi con đều được chăm sóc kỹ lưỡng và đảm bảo sức khỏe tuyệt vời, sẵn sàng trở thành người bạn đồng hành tuyệt vời cho gia đình bạn.",
      image: VatNuoi,
    },
    {
      id: 3,
      name: "Dụng Cụ Chăm Sóc",
      description:
        "Chăm sóc sức khỏe cho thú cưng chưa bao giờ dễ dàng hơn với bộ dụng cụ chăm sóc chất lượng tại Lan Hương. Chúng tôi cung cấp các sản phẩm như vitamin bổ sung, thuốc chữa bệnh, đồ vệ sinh và các dụng cụ khác để đảm bảo thú cưng của bạn luôn khỏe mạnh và sạch sẽ.",
      image: DungCu,
    },
  ];

  return (
    <main>
      <section className="mb-6">
        <PetBanner />
      </section>
      <section className="py-8 px-6 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="flex-1 text-center md:text-left space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight transition-all duration-500 ease-in-out hover:text-blue-600">
            Chào mừng đến với{" "}
            <span className="text-blue-600">Lan Hương Pet Shop!</span>
          </h1>
          <p className="text-lg text-gray-700 transition-all duration-500 ease-in-out hover:text-gray-800">
            <strong>Lan Hương Pet Shop</strong> là một doanh nghiệp một thành
            viên được thành lập vào năm 2024, với sứ mệnh mang lại những sản
            phẩm và dịch vụ chăm sóc thú cưng chất lượng nhất tại Việt Nam. Dù
            là một công ty mới, nhưng chúng tôi đã nhanh chóng khẳng định được
            uy tín nhờ vào chất lượng sản phẩm vượt trội và sự tận tâm với từng
            khách hàng.
          </p>
          <p className="text-md text-gray-800 transition-all duration-500 ease-in-out hover:text-gray-700">
            Tại Lan Hương, chúng tôi chuyên cung cấp giống loài thú cưng, các
            sản phẩm chăm sóc, dinh dưỡng, cùng dụng cụ hỗ trợ chăm sóc toàn
            diện cho thú cưng của bạn. Mỗi sản phẩm mà chúng tôi cung cấp đều
            được chọn lọc kỹ càng, đảm bảo chất lượng cao và phù hợp với nhu cầu
            của từng loại thú cưng.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 transition-all duration-500 ease-in-out hover:text-gray-700">
            <li>
              <strong>Giống loài thú cưng chất lượng</strong>: Chúng tôi cung
              cấp các giống chó, mèo, chim, cá và các loài thú cưng khác, tất cả
              đều được chọn lọc kỹ càng và có nguồn gốc rõ ràng.
            </li>
            <li>
              <strong>Sản phẩm chăm sóc sức khỏe</strong>: Các sản phẩm dinh
              dưỡng, thuốc bổ, sữa tắm, dầu gội, thức ăn cho thú cưng giúp chúng
              phát triển khỏe mạnh và sạch sẽ.
            </li>
            <li>
              <strong>Dụng cụ chăm sóc chuyên dụng</strong>: Đồ chơi, phụ kiện,
              quần áo, và các thiết bị chăm sóc giúp thú cưng luôn thoải mái,
              vui vẻ và an toàn.
            </li>
            <li>
              <strong>Dịch vụ tư vấn chuyên nghiệp</strong>: Với đội ngũ nhân
              viên tận tâm và am hiểu về thú cưng, Lan Hương cung cấp các dịch
              vụ tư vấn về dinh dưỡng, chăm sóc và phát triển sức khỏe cho thú
              cưng.
            </li>
          </ul>
          <p className="text-lg font-semibold text-blue-700 mt-4 transition-all duration-500 ease-in-out hover:text-blue-800">
            Chúng tôi cam kết mang lại cho bạn và thú cưng những sản phẩm và
            dịch vụ chăm sóc chất lượng cao, đồng thời luôn nỗ lực để trở thành
            người bạn đồng hành đáng tin cậy trong hành trình chăm sóc thú cưng.
          </p>
        </div>
        <div className="flex-1 flex justify-center animate-float">
          <Image
            src={Logo}
            alt="Lan Hương Pet Shop"
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Tabs defaultActiveKey="1" centered>
            <TabPane
              tab={<span className="text-lg font-bold">Mô tả sản phẩm</span>}
              key="1"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Paragraph className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Tại <strong>Lan Hương Pet Shop</strong>, chúng tôi tự hào
                    mang đến các sản phẩm đa dạng và chất lượng cao dành riêng
                    cho thú cưng:
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li className="text-lg">
                        Các giống vật nuôi như chó, mèo, chim, thỏ và nhiều loài
                        khác.
                      </li>
                      <li className="text-lg">
                        Thức ăn dinh dưỡng, phù hợp với từng nhu cầu của thú
                        cưng.
                      </li>
                      <li className="text-lg">
                        Dụng cụ chăm sóc sức khỏe: vitamin, thuốc, đồ vệ sinh.
                      </li>
                      <li className="text-lg">
                        Phụ kiện: dây xích, đồ chơi, áo quần thời trang.
                      </li>
                      <li className="text-lg">
                        Sản phẩm giải trí: đồ chơi kích thích trí tuệ, tăng
                        cường vận động.
                      </li>
                    </ul>
                  </Paragraph>
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
              </div>
            </TabPane>
            <TabPane
              tab={
                <span className="text-lg font-bold">Cam kết của chúng tôi</span>
              }
              key="2"
            >
              <div>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                  <li>
                    Sản phẩm chính hãng, đảm bảo an toàn và đáng tin cậy cho thú
                    cưng.
                  </li>
                  <li>
                    Mang lại trải nghiệm mua sắm dễ dàng và dịch vụ chăm sóc
                    khách hàng chu đáo.
                  </li>
                  <li>
                    Không ngừng cải tiến để mang đến giải pháp tốt nhất cho sức
                    khỏe và hạnh phúc của thú cưng.
                  </li>
                </ul>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span className="text-lg font-bold">Đội ngũ của chúng tôi</span>
              }
              key="3"
            >
              <div>
                <Paragraph className="text-lg text-gray-700 leading-relaxed">
                  Lan Hương Pet Shop quy tụ đội ngũ nhân viên nhiệt huyết, giàu
                  kinh nghiệm cùng các đối tác chiến lược quan trọng. Chúng tôi
                  tự hào hợp tác với <strong>Bệnh Viện Thú Y ThiThi Pet</strong>
                  , nơi có đội ngũ bác sĩ thú y hàng đầu, tận tâm và giàu chuyên
                  môn.
                  <br />
                  Với sự đồng hành của các chuyên gia, Lan Hương cam kết mang
                  lại dịch vụ chăm sóc sức khỏe tốt nhất cho thú cưng của bạn.
                  <br />
                  <a
                    href="https://thuythithi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-medium"
                  >
                    Tìm hiểu thêm về ThiThi Pet tại đây.
                  </a>
                </Paragraph>
                <div className="mt-6">
                  <p className="font-semibold text-lg text-gray-800">
                    Chúng tôi tự hào về đội ngũ của mình, bao gồm:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-gray-700">
                    <li>
                      Đội ngũ bác sĩ thú y từ{" "}
                      <strong>Bệnh Viện Thú Y ThiThi Pet</strong>, chuyên cung
                      cấp dịch vụ chăm sóc sức khỏe và khám chữa bệnh cho thú
                      cưng.
                    </li>
                    <li>
                      Nhân viên tư vấn, hỗ trợ khách hàng nhiệt tình, giúp bạn
                      chọn lựa các sản phẩm và dịch vụ phù hợp.
                    </li>
                    <li>
                      Nhân viên bán hàng và giao nhận sản phẩm chuyên nghiệp,
                      đảm bảo sự thuận tiện cho khách hàng.
                    </li>
                    <li>
                      Đội ngũ chăm sóc thú cưng tận tâm, luôn đảm bảo sự thoải
                      mái và an toàn cho thú cưng của bạn.
                    </li>
                  </ul>
                </div>
              </div>
            </TabPane>

            <TabPane
              tab={<span className="text-lg font-bold">Giá trị cốt lõi</span>}
              key="4"
            >
              <div className="bg-white py-8">
                <div className="container mx-auto px-6">
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                      <div className="text-center">
                        <StarOutlined className="text-4xl text-yellow-500" />
                        <Title level={4} className="mt-4">
                          Chất Lượng Hàng Đầu
                        </Title>
                        <Paragraph className="text-gray-700">
                          Chúng tôi cam kết cung cấp các sản phẩm đạt tiêu chuẩn
                          cao nhất về chất lượng và an toàn.
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
                          Chúng tôi xem mỗi thú cưng như một thành viên trong
                          gia đình và luôn chăm sóc bằng cả trái tim.
                        </Paragraph>
                      </div>
                    </Col>
                    <Col xs={24} md={8}>
                      <div className="text-center">
                        <HarmonyOSOutlined className="text-4xl text-green-600" />
                        <Title level={4} className="mt-4">
                          Cộng Đồng
                        </Title>
                        <Paragraph className="text-gray-700">
                          Chúng tôi xây dựng một cộng đồng yêu thương thú cưng
                          thông qua các chương trình giáo dục và sự kiện kết
                          nối.
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
                          Tất cả sản phẩm của chúng tôi đều tự nhiên và không
                          chứa chất bảo quản độc hại, mang lại an toàn cho thú
                          cưng của bạn.
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
                          Sản phẩm dễ dàng sử dụng và chuẩn bị, giúp tiết kiệm
                          thời gian cho bạn.
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
                          Các sản phẩm của chúng tôi cung cấp năng lượng dồi dào
                          cho thú cưng, giúp chúng luôn vui vẻ và khỏe mạnh.
                        </Paragraph>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>
      <section className="py-8">
        <PetBusinessCircle />
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <Title level={3} className="text-3xl text-center mb-12 text-gray-800">
            Danh Mục Sản Phẩm
          </Title>
          <Row gutter={[16, 16]}>
            {productCategories.map((category, index) => (
              <Col xs={24} md={8} key={category.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.5, duration: 1 }}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-2xl text-white mb-4">
                      {category.name}
                    </h4>
                    <p className="text-white text-center">
                      {category.description}
                    </p>
                    <Link href={routerNames.CATEGORY} passHref>
                      <Button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-400">
                        Xem Thêm
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="bg-gray-100 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-white opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-cover opacity-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10"
          >
            <Title
              level={3}
              className="text-3xl text-center mb-12 text-gray-800"
            >
              Sứ Mệnh & Tầm Nhìn
            </Title>
          </motion.div>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1.2 }}
                className="p-6 border-4 border-blue-300 rounded-lg shadow-lg bg-white relative z-10"
              >
                <Title level={4} className="text-xl text-blue-400 mb-4">
                  Sứ Mệnh
                </Title>
                <Paragraph className="text-lg text-gray-700">
                  Sứ mệnh của chúng tôi là nâng cao chất lượng cuộc sống của thú
                  cưng và chủ nhân, thông qua việc cung cấp các sản phẩm tốt
                  nhất và xây dựng một cộng đồng yêu thương, nơi thú cưng được
                  chăm sóc như một thành viên gia đình.
                </Paragraph>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="p-6 border-4 border-blue-300 rounded-lg shadow-lg bg-white relative z-10"
              >
                <Title level={4} className="text-xl text-blue-400 mb-4">
                  Tầm Nhìn
                </Title>
                <Paragraph className="text-lg text-gray-700">
                  Chúng tôi mong muốn trở thành nhà cung cấp hàng đầu về các sản
                  phẩm và dịch vụ thú cưng, tạo nên một thế giới nơi thú cưng
                  được yêu thương, chăm sóc và tôn trọng.
                </Paragraph>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <ProductList />
      </section>
      <section>
        <PartnerCarousel />
      </section>
      <footer className="bg-white py-4">
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
    </main>
  );
};

export default Home;
