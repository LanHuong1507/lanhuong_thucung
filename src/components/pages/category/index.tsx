import React, { useState } from "react";
import { routerNames } from "@/components/constants/router.constant";
import Link from "next/link";
import { Breadcrumb, Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

type CategoryType = {
  name: string;
  description: string;
  image: string;
  link: string;
};

type Categories = {
  thuCung: CategoryType[];
  vatNuoi: CategoryType[];
  dungCuChamSoc: CategoryType[];
};

const Category = () => {
  const categories: Categories = {
    thuCung: [
      {
        name: "Chó",
        description:
          "Chó giống được cung cấp tại đây có chất lượng cao, được chọn lọc kỹ càng từ các nguồn uy tín, đảm bảo sức khỏe và nguồn gốc rõ ràng. Mỗi giống chó đều có những đặc điểm riêng biệt và chúng được chăm sóc cẩn thận từ khi còn nhỏ để phát triển tốt nhất.",
        image: "https://i.imgur.com/lUYTlct.jpeg",
        link: routerNames.DOG,
      },
      {
        name: "Mèo",
        description:
          "Chúng tôi cung cấp giống mèo thuần chủng, khỏe mạnh và có khả năng thích nghi tốt với môi trường gia đình. Mèo là thú cưng dễ nuôi, không đòi hỏi quá nhiều không gian và thời gian chăm sóc.",
        image: "https://i.imgur.com/WuO1bdE.jpeg",
        link: routerNames.CAT,
      },
    ],
    vatNuoi: [
      {
        name: "Cá",
        description:
          "Cung cấp giống cá cảnh chất lượng, giúp tạo nên không gian sống động trong bể cá của bạn. Nuôi cá không chỉ mang lại vẻ đẹp cho ngôi nhà mà còn có thể giúp thư giãn và mang lại cảm giác yên bình.",
        image: "https://i.imgur.com/r6yUmA8.png",
        link: routerNames.FISH,
      },
      {
        name: "Thỏ",
        description:
          "Giống thỏ chúng tôi cung cấp có sức khỏe tốt, dễ nuôi và thích hợp cho các gia đình hoặc những ai mới bắt đầu nuôi vật nuôi. Thỏ là thú cưng dễ dàng chăm sóc và chúng rất thích hợp với các không gian sống nhỏ gọn.",
        image: "https://i.imgur.com/p8y4jGg.jpeg",
        link: routerNames.RABBIT,
      },
    ],
    dungCuChamSoc: [
      {
        name: "Dụng Cụ Chăm Sóc Thú Cưng",
        description:
          "Các dụng cụ chăm sóc giúp bạn duy trì sức khỏe và sự sạch sẽ cho thú cưng của mình.Dụng cụ chăm sóc là phần không thể thiếu trong việc duy trì vẻ ngoài và sức khỏe của thú cưng và làm cho thú cưng của bạn luôn cảm thấy thoải mái.",
        image: "https://i.imgur.com/CmrT6uT.jpeg",
        link: routerNames.CARE_TOOLS,
      },

      {
        name: "Thức Ăn & Dinh Dưỡng",
        description:
          "Thức ăn chất lượng và dinh dưỡng giúp thú cưng của bạn khỏe mạnh và phát triển. Chế độ ăn phù hợp và đầy đủ dưỡng chất là yếu tố quan trọng để duy trì sức khỏe lâu dài cho thú cưng",
        image: "https://i.imgur.com/FBE1ky8.jpeg",
        link: routerNames.FOOD_NUTRITION,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState<keyof Categories>("thuCung");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>(
    categories[activeTab],
  );

  const categoryDescriptions = {
    thuCung:
      "Danh mục này bao gồm các giống thú cưng như chó, mèo. Tất cả đều được chọn lọc kỹ càng với nguồn gốc rõ ràng, đảm bảo chất lượng cho những ai muốn sở hữu thú cưng khỏe mạnh.",
    vatNuoi:
      "Danh mục này tập trung vào các giống vật nuôi như cá, thỏ. Chúng tôi cung cấp giống vật nuôi có chất lượng cao, dễ chăm sóc và thích hợp nuôi trong gia đình hoặc nông trại.",
    dungCuChamSoc:
      "Danh mục dụng cụ chăm sóc bao gồm các sản phẩm hỗ trợ việc chăm sóc thú cưng, từ thức ăn, thuốc men cho đến các dụng cụ vệ sinh và trang thiết bị cần thiết.",
  };

  const onTabChange = (key: string) => {
    setActiveTab(key as keyof Categories);
    setFilteredCategories(categories[key as keyof Categories]);
  };

  const onSearch = (value: string) => {
    setSearchTerm(value);
    if (value) {
      setFilteredCategories(
        categories[activeTab].filter((category) =>
          category.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setFilteredCategories(categories[activeTab]);
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="text-center p-6">
      <Breadcrumb className="mb-6 flex justify-center text-sm md:text-base lg:text-lg">
        <Breadcrumb.Item>
          <Link href={routerNames.HOME}>Trang Chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="font-bold">
          {activeTab === "thuCung"
            ? "Thú Cưng"
            : activeTab === "vatNuoi"
              ? "Vật Nuôi"
              : "Dụng Cụ "}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="relative p-6 rounded-lg mb-8">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Danh Mục Sản Phẩm
          </h1>

          <Input
            placeholder="Tìm kiếm danh mục..."
            prefix={<SearchOutlined />}
            onChange={(e) => onSearch(e.target.value)}
            value={searchTerm}
            className="w-full md:w-[90%] rounded-md p-3"
            style={{ backgroundColor: "#ffffff", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <p className="text-lg text-gray-600 mb-8">
        {categoryDescriptions[activeTab]}
      </p>

      <Tabs
        activeKey={activeTab}
        onChange={onTabChange}
        className="mb-8"
        tabPosition="top"
        centered
      >
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700">
              Thú Cưng
            </span>
          }
          key="thuCung"
        />
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700">
              Vật Nuôi
            </span>
          }
          key="vatNuoi"
        />
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700">
              Dụng Cụ Chăm Sóc
            </span>
          }
          key="dungCuChamSoc"
        />
      </Tabs>

      <motion.div
        key={activeTab}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.name}
            variants={itemVariants}
            custom={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div
              className="w-full h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center text-center p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {category.name}
                </h2>
                <p className="text-gray-200 text-base lg:text-lg">
                  {category.description}
                </p>
              </div>
              <Link href={category.link}>
                <button className="mt-2 lg:mt-6 bg-blue-600 text-white px-8 py-2 md:py-3 rounded-md hover:bg-blue-700 hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Xem Chi Tiết
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
