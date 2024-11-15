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
import { Button, Dropdown, Input, Menu, Modal, Select } from "antd";

import "@flaticon/flaticon-uicons/css/all/all.css";
import Logo from "../../../assets/images/logo.jpg";
import { routerNames } from "@/components/constants/router.constant";
import dynamic from "next/dynamic";

const { Option } = Select;

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
            <span className="ml-2">Dog</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.CAT} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-cat" />
            <span className="ml-2">Cat</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.FISH} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-dolphin" />
            <span className="ml-2">Fish</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.RABBIT} passHref>
          <span className="flex justify-between">
            <i className="fi fi-sr-rabbit" />
            <span className="ml-2">Rabbit</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={routerNames.TURTLE} passHref>
          <span className="flex justify-between hover:text-2xl">
            <i className="fi fi-sr-turtle" />
            <span className="ml-2">Turtle</span>
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link href="#" passHref>
          <span>My Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#" passHref>
          <span>Orders</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="#" passHref>
          <span>Logout</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="relative bg-blue-900 text-white">
      {showPromo && (
        <div className="relative flex items-center justify-center bg-blue-900 py-2 text-sm text-yellow-400">
          <p>
            Save <strong>up to 20%</strong> on all Toys & Accessories with
            &quot;
            <strong>la-hu-15-07</strong>&quot; code
          </p>
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 text-lg text-white"
            aria-label="Close Promo Banner"
          >
            &times;
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
          <div className="relative flex w-full max-w-lg">
            <select className="h-full rounded-l-md bg-white pl-4 pr-6 text-black">
              <option value="all">Select category</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="fish">Fish</option>
              <option value="bird">Bird</option>
              <option value="rabbit">Rabbit</option>
              <option value="turtle">Turtle</option>
            </select>
            <input
              type="text"
              placeholder="Enter a keyword or product SKU"
              className="w-full rounded-r-md bg-white px-6 py-2 text-black focus:outline-none"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 transform text-black">
              <SearchOutlined />
            </Button>
          </div>
        </div>

        <div className="hidden items-center justify-between space-x-4 lg:flex">
          <Select defaultValue="USD" className="text-sm" style={{ width: 100 }}>
            <Option value="USD">$USD</Option>
            <Option value="EUR">€EUR</Option>
            <Option value="GBP">£GBP</Option>
          </Select>

          <Select defaultValue="EN" className="text-sm" style={{ width: 100 }}>
            <Option value="EN">English</Option>
            <Option value="ES">Español</Option>
            <Option value="FR">Français</Option>
          </Select>

          <div className="relative">
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button className="ml-6 flex items-center text-xl text-white">
                <UserOutlined className="mr-2" />
                <span className="text-sm">My account</span>
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
        <div className="flex flex-row justify-between space-x-2 bg-blue-900 p-4 text-white">
          <span
            onClick={() => handleTabClick("menu")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "menu" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <MenuOutlined className="text-2xl" />
            Menu
          </span>

          <span
            onClick={() => handleTabClick("all")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "all" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <ShoppingCartOutlined className="text-2xl" />
            Shop
          </span>

          <span
            onClick={() => handleTabClick("user")}
            className={`flex cursor-pointer flex-col items-center p-3 text-lg font-semibold ${
              activeTab === "user" ? "rounded-lg bg-white text-black" : ""
            }`}
          >
            <UserOutlined className="text-2xl" />
            Account
          </span>
        </div>

        {showCategories ? (
          <>
            <h3 className="py-2 text-center text-lg font-bold">Shop By Pet</h3>
            <nav className="grid grid-cols-2 items-center gap-4 p-6">
              {[
                {
                  name: "Dog",
                  iconClass: "fi fi-ss-dog",
                  tab: "dog",
                  router: routerNames.DOG,
                },
                {
                  name: "Fish",
                  iconClass: "fi fi-sr-dolphin",
                  tab: "fish",
                  router: routerNames.FISH,
                },
                {
                  name: "Cat",
                  iconClass: "fi fi-sr-cat",
                  tab: "cat",
                  router: routerNames.CAT,
                },
                {
                  name: "Rabbit",
                  iconClass: "fi fi-sr-rabbit",
                  tab: "rabbit",
                  router: routerNames.RABBIT,
                },
                {
                  name: "Turtle",
                  iconClass: "fi fi-sr-turtle",
                  tab: "turtle",
                  router: routerNames.TURTLE,
                },
                {
                  name: "Other",
                  iconClass: "fi fi-sr-steak",
                  tab: "other",
                  router: routerNames.OTHER,
                },
              ].map((item) => (
                <a
                  href="#"
                  key={item.tab}
                  className={`flex h-20 w-20 flex-col items-center justify-center rounded-3xl text-lg text-black transition hover:bg-blue-500 hover:text-white ${
                    activeTab === item.tab
                      ? "bg-gray-200 underline"
                      : "bg-gray-100"
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
                  { name: "Profile", tab: "profile", icon: UserOutlined },
                  { name: "Orders", tab: "orders", icon: ShoppingCartOutlined },
                  { name: "Logout", tab: "logout", icon: LoginOutlined },
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
                      name: "Home",
                      tab: "home",
                      routerName: routerNames.HOME,
                      icon: HomeOutlined,
                    },
                    {
                      name: "Shop",
                      tab: "shop",
                      routerName: routerNames.SHOP,
                      icon: ShoppingCartOutlined,
                    },
                    {
                      name: "Blog",
                      tab: "blog",
                      routerName: routerNames.BLOG,
                      icon: BookOutlined,
                    },
                    {
                      name: "Contact",
                      tab: "contact",
                      routerName: routerNames.CONTACT,
                      icon: PhoneOutlined,
                    },
                    {
                      name: "About",
                      tab: "about",
                      routerName: routerNames.ABOUT,
                      icon: UserOutlined,
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

      <nav className="hidden bg-blue-900 py-4 text-white lg:flex">
        <div className="mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-16 text-lg font-semibold">
            <Dropdown overlay={categoryMenu} trigger={["hover"]}>
              <Link href="#">&#9776; All categories</Link>
            </Dropdown>
            <Link href={routerNames.HOME} className="hover:underline">
              Home
            </Link>
            <Link href={routerNames.SHOP} className="hover:underline">
              Shop
            </Link>
            <Link href={routerNames.BLOG} className="hover:underline">
              Blog
            </Link>
            <Link href={routerNames.CONTACT} className="hover:underline">
              Contact
            </Link>
            <Link href={routerNames.ABOUT} className="hover:underline">
              About
            </Link>
          </div>
          <div className="relative pl-10 flex items-center">
            <button className="group text-xl text-white" onClick={addToCart}>
              <ShoppingCartOutlined />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                {cartItems}
              </span>
            </button>
          </div>
          <span className="ml-2 text-lg font-medium">Shopping Cart</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
