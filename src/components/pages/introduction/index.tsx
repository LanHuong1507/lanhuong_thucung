import React from "react";
import { Card } from "antd";
import Image from "next/image";
import logo from "../../../assets/images/logo.jpg";
import shop1 from "../../../assets/images/shop.jpg";
import shop2 from "../../../assets/images/shop2.jpg";
import thithi from "../../../assets/images/thithipet.jpg";
import chamsockhachhang from "../../../assets/images/chamsockhachhang.jpg";
import chamsocthucung from "../../../assets/images/thucung.jpg";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Introduction = () => {
  return (
    <main className="bg-gray-50 py-10 px-4">
      <section className="max-w-full mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src={logo}
              alt="Lan Hương Logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <h1 className="text-6xl font-bold text-gray-800">
            Lan Hương - Thương hiệu số một chuyên cung cấp sản phẩm và dịch vụ
            cho thú cưng
          </h1>
          <p className="text-gray-600 mt-3">
            Chuyên cung cấp các sản phẩm và dịch vụ hàng đầu dành cho thú cưng.
          </p>
        </header>
        <Card className="shadow-lg" bordered={false}>
          <article className="text-gray-700 text-xl leading-relaxed">
            <section className="flex flex-col md:flex-row items-center">
              <section className="md:w-2/3">
                <p>
                  <strong>Lan Hương</strong> là doanh nghiệp một thành viên được
                  thành lập vào năm 2024, với sứ mệnh chăm sóc và nâng cao chất
                  lượng cuộc sống của thú cưng. Chúng tôi cung cấp các sản phẩm
                  chất lượng cao như thức ăn, phụ kiện, và dịch vụ chăm sóc
                  chuyên nghiệp dành cho thú cưng.
                </p>

                <p className="mt-4">
                  Trong vòng một năm hoạt động, chúng tôi đã phục vụ hàng nghìn
                  khách hàng yêu thú cưng trên cả nước, nhận được sự tin tưởng
                  và yêu mến từ cộng đồng. Sự hài lòng của khách hàng là động
                  lực để chúng tôi không ngừng phát triển.
                </p>

                <h2 className="mt-6 font-bold text-xl text-gray-800">
                  Giá trị cốt lõi của chúng tôi
                </h2>
                <ul className="list-disc list-inside mt-3">
                  <li>Tận tâm với khách hàng và thú cưng.</li>
                  <li>Cung cấp sản phẩm an toàn, chất lượng.</li>
                  <li>Đội ngũ chuyên nghiệp, giàu kinh nghiệm.</li>
                </ul>
                <h2 className="mt-6 font-bold text-xl text-gray-800">
                  Cam kết của chúng tôi
                </h2>
                <ul className="list-disc list-inside mt-3">
                  <li>
                    Cam kết cung cấp sản phẩm chính hãng, an toàn và đáng tin
                    cậy.
                  </li>
                  <li>
                    Đảm bảo trải nghiệm mua sắm tiện lợi và dịch vụ khách hàng
                    tận tâm.
                  </li>
                  <li>
                    Không ngừng cải tiến và mang đến giải pháp tốt nhất cho thú
                    cưng của bạn.
                  </li>
                </ul>
                <h2 className="mt-6 font-bold text-xl text-gray-800">
                  Đội ngũ của chúng tôi
                </h2>
                <p className="mt-3">
                  Đội ngũ của Lan Hương gồm những nhân viên tận tâm và chuyên
                  nghiệp, cùng với sự hỗ trợ quan trọng từ các đối tác chiến
                  lược. Chúng tôi tự hào khi được liên kết với{" "}
                  <strong>Bệnh Viện Thú Y ThiThi Pet</strong>, nơi có đội ngũ
                  bác sĩ thú y giàu kinh nghiệm và chuyên môn cao, giúp chúng
                  tôi cung cấp dịch vụ chăm sóc sức khỏe thú cưng hoàn hảo. Bạn
                  có thể tìm hiểu thêm về bệnh viện qua website chính thức của
                  họ tại
                  <a
                    href="https://thuythithi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 underline"
                  >
                    {" "}
                    ThiThi Pet
                  </a>
                  .
                </p>
                <div className="mt-4">
                  <p className="font-semibold">
                    Chúng tôi tự hào về đội ngũ của mình, gồm:
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Đội ngũ bác sĩ thú y từ{" "}
                      <strong>Bệnh Viện Thú Y ThiThi Pet</strong>, giúp cung cấp
                      dịch vụ chăm sóc sức khỏe và khám chữa bệnh cho thú cưng.
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
              </section>
              <section className="md:w-1/3 mt-6 md:mt-0 md:pl-6">
                <Image
                  src={shop1}
                  alt="Pet Care Illustration"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src={shop2}
                  alt="Pet Care Illustration"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-md mt-4"
                />
                <Image
                  src={thithi}
                  alt="Pet Care Illustration"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-md mt-4"
                />
                <Image
                  src={chamsockhachhang}
                  alt="Pet Care Illustration"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-md mt-4"
                />
                <Image
                  src={chamsocthucung}
                  alt="Pet Care Illustration"
                  width={350}
                  height={350}
                  className="rounded-lg shadow-md mt-4"
                />
              </section>
            </section>

            <h2 className="mt-6 font-bold text-xl text-gray-800">
              Tầm nhìn & Sứ mệnh
            </h2>
            <p className="mt-3">
              Lan Hương mong muốn trở thành thương hiệu hàng đầu trong lĩnh vực
              sản phẩm và dịch vụ dành cho thú cưng tại Việt Nam. Chúng tôi cam
              kết phát triển một cộng đồng yêu thú cưng vững mạnh, đồng thời xây
              dựng một hệ sinh thái sản phẩm và dịch vụ hoàn chỉnh, từ thức ăn,
              phụ kiện, đến các dịch vụ chăm sóc, huấn luyện và tư vấn sức khỏe
              thú cưng.
            </p>

            <p className="mt-3">
              Sứ mệnh của Lan Hương là cải thiện chất lượng cuộc sống cho thú
              cưng, mang đến cho chúng những sản phẩm và dịch vụ tốt nhất, đồng
              thời hỗ trợ chủ nuôi thú cưng chăm sóc, bảo vệ và nâng cao sức
              khỏe cho thú cưng của mình. Chúng tôi luôn nỗ lực để cung cấp các
              giải pháp sáng tạo, an toàn và hiệu quả trong mọi sản phẩm và dịch
              vụ mà chúng tôi cung cấp.
            </p>

            <p className="mt-3">
              Để thực hiện tầm nhìn này, Lan Hương sẽ tập trung vào:
            </p>

            <ul className="list-disc list-inside mt-3">
              <li>
                Phát triển mạng lưới cửa hàng và dịch vụ chăm sóc thú cưng rộng
                khắp cả nước, giúp người nuôi thú cưng dễ dàng tiếp cận các sản
                phẩm chất lượng.
              </li>
              <li>
                Đầu tư vào nghiên cứu và phát triển để đưa ra các sản phẩm mới,
                tiên tiến, bảo vệ sức khỏe và sự phát triển toàn diện cho thú
                cưng.
              </li>
              <li>
                Hợp tác với các chuyên gia, bác sĩ thú y và tổ chức uy tín trong
                ngành để cung cấp dịch vụ chăm sóc sức khỏe thú cưng tốt nhất.
              </li>
              <li>
                Xây dựng một cộng đồng yêu thú cưng, nơi mọi người có thể chia
                sẻ kinh nghiệm, kiến thức và học hỏi để chăm sóc thú cưng tốt
                hơn.
              </li>
            </ul>

            <p className="mt-3">
              Lan Hương không chỉ mong muốn đáp ứng nhu cầu cơ bản của thú cưng
              mà còn hướng tới việc tạo ra một môi trường sống hạnh phúc và khỏe
              mạnh cho chúng, đồng thời gia tăng sự gắn kết giữa chủ nuôi và thú
              cưng.
            </p>

            <footer className="mt-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Liên hệ với chúng tôi
              </h1>
              <section className="flex flex-col lg:flex-row lg:space-x-8">
                <article className="flex items-start space-x-2">
                  <div className="rounded-full bg-white p-3">
                    <PhoneOutlined className="text-2xl text-teal-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">Call us</p>
                    <p className="text-base font-bold">+84 123 456 789</p>
                  </div>
                </article>
                <article className="flex items-start space-x-2 mt-6 lg:mt-0">
                  <div className="rounded-full bg-white p-3">
                    <MailOutlined className="text-2xl text-teal-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">Email us</p>
                    <p className="text-sm font-bold">
                      phuonghuong150702@gmail.com
                    </p>
                  </div>
                </article>
                <article className="flex items-start space-x-2 mt-6 lg:mt-0">
                  <div className="rounded-full bg-white p-3">
                    <LinkOutlined className="text-2xl text-teal-900" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">Follow us</p>
                    <div className="mt-1 flex space-x-2">
                      <a
                        href="https://www.facebook.com/PetCommunityCenter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-400 hover:text-teal-900"
                      >
                        <FacebookFilled />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-400 hover:text-teal-900"
                      >
                        <TwitterCircleFilled />
                      </a>
                      <a
                        href="https://www.instagram.com/petcommunitycenter/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-400 hover:text-teal-900"
                      >
                        <InstagramFilled />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/18656628/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-400 hover:text-teal-900"
                      >
                        <LinkedinFilled />
                      </a>
                      <a
                        href="https://www.youtube.com/@petcommunitycenter1098"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-400 hover:text-teal-900"
                      >
                        <YoutubeFilled />
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            </footer>
          </article>
        </Card>
      </section>
    </main>
  );
};

export default Introduction;
