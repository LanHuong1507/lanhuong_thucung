import React, { useState } from "react";
import { routerNames } from "@/components/constants/router.constant";
import Link from "next/link";

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
  const [activeTab, setActiveTab] = useState<keyof Categories>("thuCung");

  const categories: Categories = {
    thuCung: [
      {
        name: "Chó",
        description:
          "Chó giống được cung cấp tại đây có chất lượng cao, đảm bảo sức khỏe và nguồn gốc rõ ràng, phù hợp cho những ai yêu thích nuôi thú cưng.",
        image: "https://i.imgur.com/lUYTlct.jpeg",
        link: routerNames.DOG,
      },
      {
        name: "Mèo",
        description:
          "Chúng tôi cung cấp giống mèo thuần chủng, khỏe mạnh và có khả năng thích nghi tốt với môi trường gia đình.",
        image: "https://i.imgur.com/WuO1bdE.jpeg",
        link: routerNames.CAT,
      },
      {
        name: "Chim",
        description:
          "Các loại chim giống chúng tôi cung cấp đảm bảo chất lượng và phù hợp để làm bạn đồng hành trong gia đình, dễ chăm sóc và nuôi dưỡng.",
        image: "https://i.imgur.com/1HlfCyX.jpeg",
        link: routerNames.BIRD,
      },
      {
        name: "Hamster",
        description:
          "Hamster là giống thú cưng nhỏ gọn, thích hợp nuôi trong không gian nhỏ và rất dễ chăm sóc. Chúng tôi cung cấp những con hamster khỏe mạnh, dễ nuôi.",
        image: "https://i.imgur.com/vL3d84b.jpeg",
        link: routerNames.HAMSTER,
      },
    ],
    vatNuoi: [
      {
        name: "Cá",
        description:
          "Cung cấp giống cá cảnh chất lượng, giúp tạo nên không gian sống động trong bể cá của bạn. Các giống cá được nuôi dưỡng tốt, đảm bảo sức khỏe.",
        image: "https://i.imgur.com/r6yUmA8.png",
        link: routerNames.FISH,
      },
      {
        name: "Thỏ",
        description:
          "Giống thỏ chúng tôi cung cấp có sức khỏe tốt, dễ nuôi và thích hợp cho các gia đình hoặc những ai mới bắt đầu nuôi vật nuôi.",
        image: "https://i.imgur.com/p8y4jGg.jpeg",
        link: routerNames.RABBIT,
      },
      {
        name: "Rùa",
        description:
          "Rùa giống có thể sống lâu dài với môi trường phù hợp, dễ chăm sóc và là lựa chọn tuyệt vời cho những ai yêu thích động vật chậm rãi và bền bỉ.",
        image: "https://i.imgur.com/2xCYYWZ.jpeg",
        link: routerNames.TURTLE,
      },
      {
        name: "Gà",
        description:
          "Gà giống khỏe mạnh, dễ chăm sóc và có thể cung cấp trứng. Chúng thích hợp cho những ai muốn nuôi trong sân vườn hoặc làm thú cưng trong gia đình.",
        image: "https://i.imgur.com/0aufQ2d.jpeg",
        link: routerNames.CHICKEN,
      },
    ],
    dungCuChamSoc: [
      {
        name: "Dụng Cụ Chăm Sóc Thú Cưng",
        description:
          "Các dụng cụ chăm sóc giúp bạn duy trì sức khỏe và sự sạch sẽ cho thú cưng của mình, bao gồm lược chải lông, máy tắm, và nhiều sản phẩm khác.",
        image: "https://i.imgur.com/CmrT6uT.jpeg",
        link: routerNames.CARE_TOOLS,
      },
      {
        name: "Thuốc và Dược Phẩm",
        description:
          "Các loại thuốc và dược phẩm giúp chăm sóc sức khỏe cho thú cưng, từ thuốc tẩy giun đến các loại vitamin hỗ trợ sức khỏe.",
        image: "https://i.imgur.com/jpbGsXn.jpeg",
        link: routerNames.MEDICATION,
      },
      {
        name: "Thức Ăn & Dinh Dưỡng",
        description:
          "Thức ăn chất lượng và dinh dưỡng giúp thú cưng của bạn khỏe mạnh và phát triển, bao gồm các loại thức ăn cho chó, mèo, cá, và các vật nuôi khác.",
        image: "https://i.imgur.com/FBE1ky8.jpeg",
        link: routerNames.FOOD_NUTRITION,
      },
      {
        name: "Trang Thiết Bị Cho Thú Cưng",
        description:
          "Đồ chơi, đồ đạc và các phụ kiện cho thú cưng của bạn thêm phần thoải mái và dễ chịu, bao gồm chuồng, giường nằm, và các món đồ chơi cho thú cưng.",
        image: "https://i.imgur.com/inG7Ngh.jpeg",
        link: routerNames.ACCESSORIES,
      },
    ],
  };

  const categoryDescriptions = {
    thuCung: "Danh mục này bao gồm các giống thú cưng như chó, mèo, chim, và hamster. Tất cả đều được chọn lọc kỹ càng với nguồn gốc rõ ràng, đảm bảo chất lượng cho những ai muốn sở hữu thú cưng khỏe mạnh.",
    vatNuoi: "Danh mục này tập trung vào các giống vật nuôi như cá, thỏ, rùa, và gà. Chúng tôi cung cấp giống vật nuôi có chất lượng cao, dễ chăm sóc và thích hợp nuôi trong gia đình hoặc nông trại.",
    dungCuChamSoc: "Danh mục dụng cụ chăm sóc bao gồm các sản phẩm hỗ trợ việc chăm sóc thú cưng, từ thức ăn, thuốc men cho đến các dụng cụ vệ sinh và trang thiết bị cần thiết.",
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Danh Mục Sản Phẩm
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {categoryDescriptions[activeTab]}
      </p>

      <div className="mb-6 flex justify-center space-x-8">
        <button
          onClick={() => setActiveTab("thuCung")}
          className={`${
            activeTab === "thuCung" ? "text-blue-500" : "text-gray-700"
          } font-medium hover:text-blue-500 transition duration-200`}
        >
          Thú Cưng
        </button>
        <button
          onClick={() => setActiveTab("vatNuoi")}
          className={`${
            activeTab === "vatNuoi" ? "text-blue-500" : "text-gray-700"
          } font-medium hover:text-blue-500 transition duration-200`}
        >
          Vật Nuôi
        </button>
        <button
          onClick={() => setActiveTab("dungCuChamSoc")}
          className={`${
            activeTab === "dungCuChamSoc" ? "text-blue-500" : "text-gray-700"
          } font-medium hover:text-blue-500 transition duration-200`}
        >
          Dụng Cụ Chăm Sóc
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {categories[activeTab].map((category, index) => (
          <Link
            href={category.link}
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-200 text-sm">{category.description}</p>
              </div>
              <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Xem Chi Tiết
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
