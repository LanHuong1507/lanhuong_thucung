const PhoneOutlined = dynamic(() => import("@ant-design/icons/PhoneOutlined"), {
  ssr: false,
});
const MailOutlined = dynamic(() => import("@ant-design/icons/MailOutlined"), {
  ssr: false,
});
const LinkOutlined = dynamic(() => import("@ant-design/icons/LinkOutlined"), {
  ssr: false,
});
const FacebookFilled = dynamic(
  () => import("@ant-design/icons/FacebookFilled"),
  { ssr: false },
);
const InstagramFilled = dynamic(
  () => import("@ant-design/icons/InstagramFilled"),
  { ssr: false },
);
const TwitterCircleFilled = dynamic(
  () => import("@ant-design/icons/TwitterCircleFilled"),
  { ssr: false },
);
const YoutubeFilled = dynamic(() => import("@ant-design/icons/YoutubeFilled"), {
  ssr: false,
});
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dog from "../../../assets/images/dog1.png";
import Amex from "../../../assets/images/amex.png";
import ApplePay from "../../../assets/images/apple_pay.png";
import Bitcoin from "../../../assets/images/bitcoin.png";
import DinersClub from "../../../assets/images/diners_club.jpg";
import Discover from "../../../assets/images/discover.png";
import MasterCard from "../../../assets/images/mastercard.png";
import Visa from "../../../assets/images/visa.jpg";
import Logo from "../../../assets/images/logo.jpg";
import dynamic from "next/dynamic";
import { routerNames } from "@/components/constants/router.constant";
import { LinkedinFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-blue-900 pb-5 pt-10 text-gray-300 w-full">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-start space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <Image
                src={Logo}
                alt="logo"
                width={40}
                height={40}
                className="h-14 w-14"
              />
              <span className="ml-4">Lan Huong</span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
            <div className="flex items-start space-x-2">
              <div className="rounded-full bg-white p-3">
                <PhoneOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Hotline Order</p>
                <p className="text-lg font-bold">070 393 5114</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="rounded-full bg-white p-3">
                <MailOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Email us</p>
                <p className="text-md font-bold">phuonghuong150702@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
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
                  >
                    <button
                      type="button"
                      className="text-lg text-gray-300 hover:text-white"
                    >
                      <FacebookFilled />
                    </button>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-lg text-gray-300 hover:text-white"
                    >
                      <TwitterCircleFilled />
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/petcommunitycenter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-lg text-gray-300 hover:text-white"
                    >
                      <InstagramFilled />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F18656628%2Fadmin%2Ffeed%2Fposts%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-lg text-gray-300 hover:text-white"
                    >
                      <LinkedinFilled />
                    </button>
                  </a>
                  <a
                    href="https://www.youtube.com/@petcommunitycenter1098"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-lg text-gray-300 hover:text-white"
                    >
                      <YoutubeFilled />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              CHÓ
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Thức ăn cho chó
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Đồ chơi cho chó
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dụng cụ chăm sóc chó
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Phụ kiện cho chó
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Các dịch vụ khác
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              MÈO
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Thức ăn cho mèo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Đồ chơi cho mèo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dụng cụ chăm sóc mèo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Phụ kiện cho mèo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Các dịch vụ khác
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              CÁC THÚ CƯNG KHÁC
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Thức ăn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Đồ chơi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dụng cụ chăm sóc
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Phụ kiện
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Các dịch vụ khác
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              CÁC LIÊN KẾT HỮU ÍCH
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Sản phẩm mới
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Bán chạy nhất
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog của chúng tôi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              CÔNG TY CHÚNG TÔI
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href={routerNames.ABOUT} className="hover:text-white">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dịch Vụ Của Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Điều Khoản Dịch Vụ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-start lg:text-center font-semibold">
              CHÍNH SÁCH
            </h5>
            <ul className="text-start lg:text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Chính sách hoàn trả
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hỗ trợ khách hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-10 rounded-lg bg-gradient-to-r from-red-600 to-yellow-600 p-5 text-center text-white lg:ml-8">
          <div className="flex items-center justify-center">
            <div className="flex-1">
              <h5 className="mb-2 text-lg font-semibold">
                Bản Tin Của Chúng Tôi
              </h5>
              <p className="mb-4">
                Hãy là người đầu tiên biết về các sản phẩm mới và những ưu đãi
                độc quyền.
              </p>
              <div className="flex items-center w-full">
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="rounded-l-lg px-4 py-2 text-gray-700 flex-grow text-sm md:text-base"
                />
                <button className="rounded-r-lg bg-white p-2 text-red-600 flex items-center text-sm md:text-base">
                  Đăng Ký <MailOutlined className="ml-2" />
                </button>
              </div>
            </div>

            <div className="md:flex justify-center mt-4 hidden">
              <Image
                src={dog}
                alt="Chó dễ thương"
                width={96}
                height={96}
                className="rounded-lg w-24 h-24 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center border-t border-gray-600 pt-5 text-sm lg:flex-row lg:justify-between">
          <p className="text-center md:text-left">
            &copy; 2024 <span className="font-semibold">Lan Hương</span>. Mọi
            quyền đã được bảo hộ.
          </p>
          <div className="my-4 flex space-x-2">
            <Image src={MasterCard} alt="MasterCard" width={30} height={30} />
            <Image src={Visa} alt="Visa" width={30} height={30} />
            <Image src={Discover} alt="Discover" width={30} height={30} />
            <Image src={Amex} alt="Amex" width={30} height={30} />
            <Image src={ApplePay} alt="ApplePay" width={30} height={30} />
            <Image src={DinersClub} alt="DinersClub" width={30} height={30} />
            <Image src={Bitcoin} alt="Bitcoin" width={30} height={30} />
          </div>
          <div className="mt-4 space-x-4 md:mt-0">
            <button type="button" className="hover:text-white">
              Chính sách bảo mật
            </button>
            <button type="button" className="hover:text-white">
              Liên hệ
            </button>
            <button type="button" className="hover:text-white">
              Điều khoản
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
