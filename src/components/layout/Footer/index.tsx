import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "antd";
import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  YoutubeFilled,
  LinkOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Amex from "../../../assets/images/amex.png";
import ApplePay from "../../../assets/images/apple_pay.png";
import Bitcoin from "../../../assets/images/bitcoin.png";
import DinersClub from "../../../assets/images/diners_club.jpg";
import Discover from "../../../assets/images/discover.png";
import MasterCard from "../../../assets/images/mastercard.png";
import Visa from "../../../assets/images/visa.jpg";
import Logo from "../../../assets/images/logo.jpg";
import { routerNames } from "@/components/constants/router.constant";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6 text-white w-full">
      <main className="container px-4">
        <section className="mb-10 flex flex-col items-start space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <article className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-2xl font-semibold lg:text-3xl">
              <Image
                src={Logo}
                alt="logo"
                width={40}
                height={40}
                className="h-12 w-12"
              />
              <span className="ml-4">Lan Hương</span>
            </div>
          </article>
          <main className="flex flex-col items-start space-y-6 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
            <article className="flex items-start space-x-2">
              <div className="rounded-full bg-white p-3">
                <PhoneOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Hotline đặt hàng</p>
                <p className="text-lg font-bold">070 393 5114</p>
              </div>
            </article>
            <article className="flex items-start space-x-2">
              <div className="rounded-full bg-white p-3">
                <MailOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Nhắn tin cho chúng tôi</p>
                <p className="text-lg font-bold">phuonghuong150702@gmail.com</p>
              </div>
            </article>
            <article className="flex items-start space-x-2">
              <div className="rounded-full bg-white p-3">
                <LinkOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Theo dõi chúng tôi</p>
                <div className="mt-1 flex space-x-2">
                  <a
                    href="https://www.facebook.com/PetCommunityCenter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-2xl text-gray-300 hover:text-white"
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
                      className="text-2xl text-gray-300 hover:text-white"
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
                      className="text-2xl text-gray-300 hover:text-white"
                    >
                      <InstagramFilled />
                    </button>
                  </a>

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-2xl text-gray-300 hover:text-white"
                    >
                      <YoutubeFilled />
                    </button>
                  </a>
                  <a
                    href="https://github.com/LanHuong1507/lanhuong_thucung"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="text-2xl text-gray-300 hover:text-white"
                    >
                      <GithubOutlined />
                    </button>
                  </a>
                </div>
              </div>
            </article>
          </main>
        </section>
        <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="flex flex-col">
            <h5 className="mb-4 text-2xl font-semibold">Danh mục sản phẩm</h5>
            <ul className="space-y-2 text-lg font-medium">
              <li>
                <Link
                  href={routerNames.CATEGORY}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Thú cưng
                </Link>
              </li>
              <li>
                <Link
                  href={routerNames.CATEGORY}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Vật nuôi
                </Link>
              </li>
              <li>
                <Link
                  href={routerNames.CATEGORY}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Dụng cụ chăm sóc
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col">
            <h5 className="mb-4 text-2xl font-semibold">
              Doanh nghiệp của chúng tôi
            </h5>
            <ul className="space-y-2 text-lg font-medium">
              <li>
                <Link
                  href={routerNames.ORGANIZATION}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Cơ cấu tổ chức
                </Link>
              </li>
              <li>
                <Link
                  href={routerNames.HISTORY}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Lịch sử hình thành
                </Link>
              </li>
              <li>
                <Link
                  href={routerNames.CAREER}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  href={routerNames.CONTACT}
                  className="hover:text-yellow-400 text-xl lg:text-2xl"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col justify-start bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg p-6 text-center text-white">
            <h5 className="mb-2 text-2xl font-semibold">
              Bản Tin Của Chúng Tôi
            </h5>
            <p className="mb-4 text-lg">
              Hãy là người đầu tiên biết về các sản phẩm mới và những ưu đãi độc
              quyền.
            </p>
            <div className="flex items-center justify-center">
              <Input
                type="email"
                placeholder="Nhập email của bạn..."
                className="rounded-lg px-4 py-2 text-gray-700 flex-grow text-base"
                suffix={<ArrowRightOutlined className="text-red-600 text-xl" />}
              />
            </div>
          </section>
        </section>
        <footer className="flex w-full flex-col items-center border-t border-gray-600 pt-5 text-lg lg:flex-row lg:justify-between">
          <p className="text-center lg:text-left">
            &copy; 2024 <span className="font-semibold">Lan Hương</span>. Mọi
            quyền đã được bảo hộ.
          </p>
          <div className="my-4 flex space-x-2 justify-center lg:justify-start">
            <Image src={MasterCard} alt="MasterCard" width={30} height={30} />
            <Image src={Visa} alt="Visa" width={30} height={30} />
            <Image src={Discover} alt="Discover" width={30} height={30} />
            <Image src={Amex} alt="Amex" width={30} height={30} />
            <Image src={ApplePay} alt="ApplePay" width={30} height={30} />
            <Image src={DinersClub} alt="DinersClub" width={30} height={30} />
            <Image src={Bitcoin} alt="Bitcoin" width={30} height={30} />
          </div>
          <div className="mt-4 space-x-4 md:mt-0 flex justify-center lg:justify-start">
            <button type="button" className="hover:text-yellow-400 text-lg">
              Chính sách bảo mật
            </button>
            <button type="button" className="hover:text-yellow-400 text-lg">
              Liên hệ
            </button>
            <button type="button" className="hover:text-yellow-400 text-lg">
              Điều khoản
            </button>
          </div>
        </footer>
      </main>
    </footer>
  );
};

export default Footer;
