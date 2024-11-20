import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const SearchOutlined = dynamic(
  () => import("@ant-design/icons/SearchOutlined"),
  { ssr: false },
);
const ShoppingCartOutlined = dynamic(
  () => import("@ant-design/icons/ShoppingCartOutlined"),
  { ssr: false },
);
const UserOutlined = dynamic(() => import("@ant-design/icons/UserOutlined"), {
  ssr: false,
});
const MenuOutlined = dynamic(() => import("@ant-design/icons/MenuOutlined"), {
  ssr: false,
});
const HomeOutlined = dynamic(() => import("@ant-design/icons/HomeOutlined"), {
  ssr: false,
});
const BookOutlined = dynamic(() => import("@ant-design/icons/BookOutlined"), {
  ssr: false,
});
const PhoneOutlined = dynamic(() => import("@ant-design/icons/PhoneOutlined"), {
  ssr: false,
});
const LoginOutlined = dynamic(() => import("@ant-design/icons/LoginOutlined"), {
  ssr: false,
});
const HistoryOutlined = dynamic(
  () => import("@ant-design/icons/HistoryOutlined"),
  {
    ssr: false,
  },
);
const OrderedListOutlined = dynamic(
  () => import("@ant-design/icons/OrderedListOutlined"),
  {
    ssr: false,
  },
);
const CarryOutFilled = dynamic(
  () => import("@ant-design/icons/CarryOutFilled"),
  {
    ssr: false,
  },
);
import { Button, Dropdown, Input, Menu, Modal } from "antd";

import "@flaticon/flaticon-uicons/css/all/all.css";
import Logo from "../../../assets/images/logo.jpg";
import { routerNames } from "@/components/constants/router.constant";
import dynamic from "next/dynamic";
import { CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [showCategories, setShowCategories] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };
  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    setShowCategories(tab !== "menu" && tab !== "user");
  };
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  const categoryMenu = (
    <Menu>
      <Menu.Item>
        <Link href={routerNames.DOG} passHref>
          <span className="flex w-full justify-between">
            <i className="fi fi-ss-dog" />
            <span className="ml-2">CHÓ</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.CAT} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-cat" />
            <span className="ml-2">MÈO</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.FISH} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-dolphin" />
            <span className="ml-2">CÁ</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.RABBIT} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-rabbit" />
            <span className="ml-2">THỎ</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.TURTLE} passHref>
          <span className="flex justify-between hover:text-2xl">
            <i className="fi fi-sr-turtle" />
            <span className="ml-2">RÙA</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.BIRD} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-bird" />
            <span className="ml-2">CHIM</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.PRODUCT} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-steak" />
            <span className="ml-2">KHÁC</span>
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link href="#" passHref>
          <span>Tài khoản</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#" passHref>
          <span>Đơn hàng</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#" passHref>
          <span>Đăng suất</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      {showPromo && (
        <div className="relative flex items-center justify-center bg-blue-900 py-1 text-sm text-yellow-400">
          <p>
            Tiết kiệm <strong>đến 20%</strong> cho tất cả đồ chơi & phụ kiện với
            mã &quot;
            <strong>la-hu-15-07</strong>&quot;
          </p>
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 py-1 text-base text-yellow-400"
            aria-label="Đóng banner khuyến mãi"
          >
            <CloseOutlined />
          </button>
        </div>
      )}

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
        <div className="lg:hidden flex items-center justify-between">
          <div className="flex items-center relative space-x-4">
            <button
              onClick={handleSearchClick}
              className="text-2xl text-white"
              type="button"
              aria-label="Search"
            >
              <SearchOutlined />
            </button>
            <Modal
              title="Search"
              open={isSearchOpen}
              onCancel={handleSearchClose}
              footer={null}
            >
              <Input
                placeholder="Type to search..."
                className="w-[50%]"
                allowClear
              />
            </Modal>
            <button
              className="relative text-xl text-white"
              onClick={addToCart}
              aria-label="Shopping Cart"
            >
              <ShoppingCartOutlined />
              {cartItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                  {cartItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white"
              type="button"
              aria-label="Toggle Menu"
            >
              &#9776;
            </button>
          </div>
        </div>
        <div className="hidden flex-grow justify-center lg:flex">
          <div className="relative flex w-full max-w-xl">
            <select className="h-full rounded-l-md bg-white pl-4 pr-6 text-black">
              <option value="all">Danh mục sản phẩm</option>
              <option value="dog">Chó</option>
              <option value="cat">Mèo</option>
              <option value="fish">Cá</option>
              <option value="bird">Chim</option>
              <option value="rabbit">Thỏ</option>
              <option value="turtle">Rùa</option>
              <option value="other">Khác</option>
            </select>
            <input
              type="text"
              placeholder="Tìm theo sản phẩm hoặc từ khóa"
              className="w-full rounded-r-md bg-white px-6 py-2 text-black focus:outline-none"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-black">
              <SearchOutlined />
            </Button>
          </div>
        </div>

        <div className="hidden items-center justify-between space-x-4 lg:flex">
          <div className="relative pl-10 flex items-center">
            <button className="group text-xl text-white" onClick={addToCart}>
              <ShoppingCartOutlined />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                {cartItems}
              </span>
            </button>
          </div>
          <span className="ml-2 text+sm">Gio Hàng</span>
          <div className="relative">
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button className="ml-6 flex items-center text-xl text-white">
                <UserOutlined className="mr-2" />
                <span className="text-sm">Tài Khoản</span>
              </button>
            </Dropdown>
          </div>
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
        className={`fixed left-0 top-0 h-full w-72 md:w-96 transform bg-white text-black ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-row justify-between bg-blue-900 p-4 text-white">
          <span
            onClick={() => handleTabClick("menu")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "menu" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <MenuOutlined className="text-4xl" />
          </span>

          <span
            onClick={() => handleTabClick("all")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "all" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <ShoppingCartOutlined className="text-4xl" />
          </span>

          <span
            onClick={() => handleTabClick("user")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "user" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <UserOutlined className="text-4xl" />
          </span>
        </div>

        {showCategories ? (
          <>
            <h3 className="py-2 text-center text-lg font-bold">
              Mua sắm theo thú cưng
            </h3>
            <nav className="grid grid-cols-2 items-center gap-4 p-6">
              {[
                {
                  name: "Chó",
                  iconClass: "fi fi-ss-dog",
                  tab: "dog",
                  router: routerNames.DOG,
                },
                {
                  name: "Cá",
                  iconClass: "fi fi-sr-dolphin",
                  tab: "fish",
                  router: routerNames.FISH,
                },
                {
                  name: "Mèo",
                  iconClass: "fi fi-sr-cat",
                  tab: "cat",
                  router: routerNames.CAT,
                },
                {
                  name: "Thỏ",
                  iconClass: "fi fi-sr-rabbit",
                  tab: "rabbit",
                  router: routerNames.RABBIT,
                },
                {
                  name: "Rùa",
                  iconClass: "fi fi-sr-turtle",
                  tab: "turtle",
                  router: routerNames.TURTLE,
                },
                {
                  name: "Chim",
                  iconClass: "fi fi-sr-bird",
                  tab: "bird",
                  router: routerNames.BIRD,
                },
                {
                  name: "Khác",
                  iconClass: "fi fi-sr-steak",
                  tab: "other",
                  router: routerNames.PRODUCT,
                },
              ].map((item) => (
                <a
                  href="#"
                  key={item.tab}
                  className={`flex h-20 w-20 flex-col items-center justify-center rounded-3xl text-lg text-black transition hover:bg-blue-500 hover:text-white ${
                    activeTab === item.tab ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => handleTabClick(item.tab)}
                >
                  <i className={`${item.iconClass} text-2xl`}></i>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </>
        ) : (
          <div className="border-t border-gray-200 p-4">
            <nav className="flex flex-col space-y-2">
              {activeTab === "user" ? (
                [
                  { name: "Tài Khoản", tab: "profile", icon: UserOutlined },
                  {
                    name: "Đơn hàng",
                    tab: "orders",
                    icon: ShoppingCartOutlined,
                  },
                  { name: "Đăng xuất", tab: "logout", icon: LoginOutlined },
                ].map((item) => (
                  <a
                    href="#"
                    key={item.tab}
                    className={`flex items-center rounded-lg p-2 text-lg text-black transition hover:bg-blue-500 hover:text-white ${
                      activeTab === item.tab ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleTabClick(item.tab)}
                  >
                    <item.icon className="text-xl font-semibold pr-4" />
                    <span className="text-lg font-semibold">{item.name}</span>
                  </a>
                ))
              ) : activeTab === "menu" ? (
                <>
                  {[
                    {
                      name: "Trang chủ",
                      tab: "home",
                      routerName: routerNames.HOME,
                      icon: HomeOutlined,
                    },
                    {
                      name: "Giới thiệu",
                      tab: "introduction",
                      routerName: routerNames.INTRODUCTION,
                      icon: HomeOutlined,
                    },
                    {
                      name: "Danh mục sản phẩm",
                      tab: "category",
                      routerName: routerNames.CATEGORY,
                      icon: BookOutlined,
                    },

                    {
                      name: "Lịch sử hình thành",
                      tab: "history",
                      routerName: routerNames.HISTORY,
                      icon: HistoryOutlined,
                    },
                    {
                      name: "Cơ cấu tổ chức",
                      tab: "organization",
                      routerName: routerNames.ORGANIZATION,
                      icon: OrderedListOutlined,
                    },

                    {
                      name: "Tuyển dụng",
                      tab: "career",
                      routerName: routerNames.CAREER,
                      icon: CarryOutFilled,
                    },
                    {
                      name: "Liên hệ",
                      tab: "contact",
                      routerName: routerNames.CONTACT,
                      icon: PhoneOutlined,
                    },
                  ].map((item) => (
                    <Link
                      href={item.routerName}
                      key={item.tab}
                      className={`flex items-center rounded-lg p-2 text-lg text-black transition hover:bg-blue-500 hover:text-white ${
                        activeTab === item.tab ? "bg-gray-200" : ""
                      }`}
                      onClick={() => handleTabClick(item.tab)}
                    >
                      <item.icon className="text-xl font-semibold pr-4" />
                      <span className="text-lg font-semibold">{item.name}</span>
                    </Link>
                  ))}
                </>
              ) : null}
            </nav>
          </div>
        )}
      </div>

      <nav className="hidden bg-blue-900 py-2 text-white lg:flex">
        <div className="mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-16 text-lg font-semibold">
            <div className="relative">
              <Link
                href={routerNames.INTRODUCTION}
                className="text-white hover:underline"
              >
                Giới thiệu
              </Link>
            </div>
            <Dropdown overlay={categoryMenu} trigger={["hover"]}>
              <Link href={routerNames.CATEGORY}> Danh mục sản phẩm</Link>
            </Dropdown>
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
