import React from "react";
import { routerNames } from "@/components/constants/router.constant";
import Link from "next/link";

const Category = () => {
  const categories = [
    {
      name: "Chó",
      description:
        "Chó là loài động vật đầu tiên được con người thuần hóa. Chúng là bạn đồng hành trung thành, thông minh và rất đáng yêu trong gia đình.",
      image: "https://i.imgur.com/lUYTlct.jpeg",
      link: routerNames.DOG,
    },
    {
      name: "Mèo",
      description:
        "Mèo là động vật nhỏ nhắn, đáng yêu và thường được nuôi để làm thú cưng. Chúng có bản năng săn mồi và rất thân thiện.",
      image: "https://i.imgur.com/WuO1bdE.jpeg",
      link: routerNames.CAT,
    },
    {
      name: "Chim",
      description:
        "Chim không chỉ mang lại tiếng hót vui tươi mà còn là loài vật thông minh, năng động và có thể làm bạn đồng hành lý tưởng.",
      image: "https://i.imgur.com/1HlfCyX.jpeg",
      link: routerNames.BIRD,
    },
    {
      name: "Cá",
      description:
        "Cá cảnh mang đến không gian sống động, thư giãn với vẻ đẹp tự nhiên của nước. Chúng là lựa chọn tuyệt vời cho người yêu thiên nhiên.",
      image: "https://i.imgur.com/r6yUmA8.png",
      link: routerNames.FISH,
    },
    {
      name: "Thỏ",
      description:
        "Thỏ là loài động vật hiền lành, đáng yêu với bộ lông mềm mại. Chúng thường mang lại sự vui vẻ cho gia đình.",
      image: "https://i.imgur.com/p8y4jGg.jpeg",
      link: routerNames.RABBIT,
    },
    {
      name: "Rùa",
      description:
        "Rùa là loài vật chậm rãi nhưng rất thú vị. Chúng tượng trưng cho sự bền bỉ và có thể sống lâu dài với môi trường phù hợp.",
      image: "https://i.imgur.com/2xCYYWZ.jpeg",
      link: routerNames.TURTLE,
    },
    {
      name: "Sản phẩm",
      description:
        "Sản phẩm của cửa hàng bao gồm nhiều lựa chọn thú vị, đáp ứng nhu cầu của bạn và thú cưng.",
      image: "https://i.imgur.com/CmrT6uT.jpeg",
      link: routerNames.PRODUCT,
    },
  ];

  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Danh Mục Sản Phẩm
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            href={category.link}
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image */}
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {category.name}
              </h2>
              <p className="text-gray-200 text-sm">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
