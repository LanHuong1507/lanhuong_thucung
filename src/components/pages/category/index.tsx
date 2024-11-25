import React, { useState } from "react";
import { routerNames } from "@/components/constants/router.constant";
import Link from "next/link";
import { Breadcrumb, Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
          "Chó giống được cung cấp tại đây có chất lượng cao, được chọn lọc kỹ càng từ các nguồn uy tín, đảm bảo sức khỏe và nguồn gốc rõ ràng. Mỗi giống chó đều có những đặc điểm riêng biệt và chúng được chăm sóc cẩn thận từ khi còn nhỏ để phát triển tốt nhất. Chúng thích hợp cho những gia đình có không gian rộng hoặc có thể nuôi trong căn hộ với các giống chó nhỏ. Chúng không chỉ là những người bạn trung thành mà còn giúp cải thiện không gian sống của bạn, mang đến niềm vui và tình yêu thương.",
        image: "https://i.imgur.com/lUYTlct.jpeg",
        link: routerNames.DOG,
      },
      {
        name: "Mèo",
        description:
          "Chúng tôi cung cấp giống mèo thuần chủng, khỏe mạnh và có khả năng thích nghi tốt với môi trường gia đình. Mèo là thú cưng dễ nuôi, không đòi hỏi quá nhiều không gian và thời gian chăm sóc. Các giống mèo của chúng tôi đều có tính cách hiền lành, dễ mến, và rất thân thiện với con người. Nếu bạn đang tìm kiếm một người bạn đồng hành cho cuộc sống bận rộn, mèo là lựa chọn hoàn hảo, chúng không chỉ giúp giải trí mà còn có tác dụng giảm căng thẳng rất tốt.",
        image: "https://i.imgur.com/WuO1bdE.jpeg",
        link: routerNames.CAT,
      },
    ],
    vatNuoi: [
      {
        name: "Cá",
        description:
          "Cung cấp giống cá cảnh chất lượng, giúp tạo nên không gian sống động trong bể cá của bạn. Các giống cá được nuôi dưỡng tốt, đảm bảo sức khỏe và phù hợp với những yêu cầu về chăm sóc và môi trường sống. Nuôi cá không chỉ mang lại vẻ đẹp cho ngôi nhà mà còn có thể giúp thư giãn, giảm stress và mang lại cảm giác yên bình. Chúng tôi cung cấp nhiều loại cá khác nhau, từ cá vàng nhỏ xinh đến các loại cá lớn, giúp bạn dễ dàng lựa chọn cho sở thích của mình.",
        image: "https://i.imgur.com/r6yUmA8.png",
        link: routerNames.FISH,
      },
      {
        name: "Thỏ",
        description:
          "Giống thỏ chúng tôi cung cấp có sức khỏe tốt, dễ nuôi và thích hợp cho các gia đình hoặc những ai mới bắt đầu nuôi vật nuôi. Thỏ là thú cưng dễ dàng chăm sóc và chúng rất thích hợp với các không gian sống nhỏ gọn. Ngoài ra, thỏ cũng rất thân thiện và dễ gần, làm bạn đồng hành tuyệt vời cho trẻ em và người lớn. Chúng cần ít không gian nhưng lại rất thích chơi đùa và khám phá xung quanh, mang lại không khí vui tươi cho gia đình.",
        image: "https://i.imgur.com/p8y4jGg.jpeg",
        link: routerNames.RABBIT,
      },
    ],
    dungCuChamSoc: [
      {
        name: "Dụng Cụ Chăm Sóc Thú Cưng",
        description:
          "Các dụng cụ chăm sóc giúp bạn duy trì sức khỏe và sự sạch sẽ cho thú cưng của mình, bao gồm lược chải lông, máy tắm, và nhiều sản phẩm khác. Dụng cụ chăm sóc là phần không thể thiếu trong việc duy trì vẻ ngoài và sức khỏe của thú cưng, giúp giảm rụng lông, ngăn ngừa các vấn đề về da và làm cho thú cưng của bạn luôn cảm thấy thoải mái. Chúng tôi cung cấp những dụng cụ chăm sóc chất lượng, dễ sử dụng và phù hợp với tất cả các giống chó, mèo và thú cưng khác.",
        image: "https://i.imgur.com/CmrT6uT.jpeg",
        link: routerNames.CARE_TOOLS,
      },

      {
        name: "Thức Ăn & Dinh Dưỡng",
        description:
          "Thức ăn chất lượng và dinh dưỡng giúp thú cưng của bạn khỏe mạnh và phát triển, bao gồm các loại thức ăn cho chó, mèo, cá, và các vật nuôi khác. Chế độ ăn phù hợp và đầy đủ dưỡng chất là yếu tố quan trọng để duy trì sức khỏe lâu dài cho thú cưng. Chúng tôi cung cấp các loại thức ăn được chọn lọc kỹ càng, bao gồm cả thức ăn khô và ướt, đảm bảo sự cân đối về dinh dưỡng, phù hợp với từng giống loài và độ tuổi của thú cưng.",
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
  return (
    <div className="text-center p-6">
      <Breadcrumb className="mb-6 flex justify-center text-lg">
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
              : "Dụng Cụ Chăm Sóc"}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="relative p-6 rounded-lg mb-8 ">
        {" "}
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
        centered
        className="mb-6"
      >
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
              Thú Cưng
            </span>
          }
          key="thuCung"
        />
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
              Vật Nuôi
            </span>
          }
          key="vatNuoi"
        />
        <Tabs.TabPane
          tab={
            <span className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
              Dụng Cụ Chăm Sóc
            </span>
          }
          key="dungCuChamSoc"
        />
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div
              className="w-full h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {category.name}
                </h2>
                <p className="text-gray-200 text-xs lg:text-sm">
                  {category.description}
                </p>
              </div>
              <Link href={category.link}>
                <button className="mt-2 lg:mt-6 bg-blue-600 text-white px-8 py-2 md:py-3 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Xem Chi Tiết
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
