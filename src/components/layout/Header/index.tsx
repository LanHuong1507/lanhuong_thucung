import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const MenuOutlined = dynamic(() => import("@ant-design/icons/MenuOutlined"), {
  ssr: false,
});
const CloseOutlined = dynamic(() => import("@ant-design/icons/CloseOutlined"), {
  ssr: false,
});
import { routerNames } from "@/components/constants/router.constant";
import dynamic from "next/dynamic";
import Logo from "../../../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex items-center justify-between p-4">
        <Link href={routerNames.HOME}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <Image
                src={Logo}
                alt="logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span>Lan Huong</span>
            </div>
          </div>
        </Link>
        {!menuOpen && (
          <nav className="hidden lg:flex space-x-8 text-lg font-semibold">
            <Link href={routerNames.CATEGORY} className="hover:underline">
              Danh mục sản phẩm
            </Link>
            <Link href={routerNames.ORGANIZATION} className="hover:underline">
              Cơ cấu tổ chức
            </Link>
            <Link href={routerNames.HISTORY} className="hover:underline">
              Lịch sử hình thành
            </Link>
            <Link href={routerNames.CAREER} className="hover:underline">
              Tuyển dụng
            </Link>
            <Link href={routerNames.CONTACT} className="hover:underline">
              Liên hệ
            </Link>
          </nav>
        )}

        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white"
            aria-label="Toggle Menu"
          >
            <MenuOutlined />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu Overlay"
        ></div>
      )}
      <div
        className={`fixed left-0 top-0 h-full w-72 md:w-96 transform bg-white text-black overflow-y-auto ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 bg-blue-900">
          <div className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="logo"
              width={35}
              height={35}
              className="h-10 w-10"
            />
            <span className="text-white text-lg font-semibold">Lan Huong</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
            aria-label="Close Mobile Menu"
          >
            <CloseOutlined />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <Link
            href={routerNames.CATEGORY}
            className="block py-3 text-lg font-medium text-black opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-md"
          >
            Danh mục sản phẩm
          </Link>
          <Link
            href={routerNames.ORGANIZATION}
            className="block py-3 text-lg font-medium text-black opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-md"
          >
            Cơ cấu tổ chức
          </Link>
          <Link
            href={routerNames.HISTORY}
            className="block py-3 text-lg font-medium text-black opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-md"
          >
            Lịch sử hình thành
          </Link>
          <Link
            href={routerNames.CAREER}
            className="block py-3 text-lg font-medium text-black opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-md"
          >
            Tuyển dụng
          </Link>
          <Link
            href={routerNames.CONTACT}
            className="block py-3 text-lg font-medium text-black opacity-75 hover:opacity-100 transition-opacity duration-300 rounded-md"
          >
            Liên hệ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
