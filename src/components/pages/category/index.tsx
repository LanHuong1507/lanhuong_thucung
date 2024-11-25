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
      {
        name: "Chim",
        description:
          "Các loại chim giống chúng tôi cung cấp đảm bảo chất lượng và phù hợp để làm bạn đồng hành trong gia đình, dễ chăm sóc và nuôi dưỡng. Những chú chim có thể sống trong những không gian nhỏ nhưng lại rất hoạt bát và thú vị. Chim cảnh là thú vui tuyệt vời cho những ai yêu thích sự nhẹ nhàng và âm thanh của tiếng hót, giúp mang lại không gian sống sinh động và đầy sức sống. Chúng tôi có nhiều giống chim với các màu sắc và đặc điểm khác nhau, giúp bạn dễ dàng lựa chọn.",
        image: "https://i.imgur.com/1HlfCyX.jpeg",
        link: routerNames.BIRD,
      },
      {
        name: "Hamster",
        description:
          "Hamster là giống thú cưng nhỏ gọn, thích hợp nuôi trong không gian nhỏ và rất dễ chăm sóc. Chúng tôi cung cấp những con hamster khỏe mạnh, dễ nuôi, là lựa chọn tuyệt vời cho những gia đình có trẻ nhỏ hoặc những người mới bắt đầu nuôi thú cưng. Với tính cách hiền hòa và dễ thương, hamster sẽ là người bạn nhỏ gắn bó lâu dài và mang lại niềm vui cho các bạn. Chúng cũng rất thú vị khi nhìn chúng chạy trong bánh xe, điều này chắc chắn sẽ làm bạn không thể rời mắt.",
        image: "https://i.imgur.com/vL3d84b.jpeg",
        link: routerNames.HAMSTER,
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
      {
        name: "Rùa",
        description:
          "Rùa giống có thể sống lâu dài với môi trường phù hợp, dễ chăm sóc và là lựa chọn tuyệt vời cho những ai yêu thích động vật chậm rãi và bền bỉ. Chúng rất dễ nuôi, không cần quá nhiều sự quan tâm, nhưng lại có thể sống lâu và làm bạn đồng hành suốt nhiều năm. Rùa có thể sống trong bể kính hoặc trong các khu vực ngoài trời, thích hợp cho những ai tìm kiếm một thú cưng không đòi hỏi quá nhiều sự chăm sóc nhưng lại có tuổi thọ lâu dài.",
        image: "https://i.imgur.com/2xCYYWZ.jpeg",
        link: routerNames.TURTLE,
      },
      {
        name: "Gà",
        description:
          "Gà giống khỏe mạnh, dễ chăm sóc và có thể cung cấp trứng. Chúng thích hợp cho những ai muốn nuôi trong sân vườn hoặc làm thú cưng trong gia đình. Gà không chỉ cung cấp thực phẩm mà còn có thể trở thành những người bạn đồng hành trong khu vườn của bạn. Chúng rất dễ gần và dễ chăm sóc, thích hợp với không gian ngoài trời rộng rãi, đồng thời mang lại những lợi ích về trứng và sự dễ chịu cho người nuôi.",
        image: "https://i.imgur.com/0aufQ2d.jpeg",
        link: routerNames.CHICKEN,
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
        name: "Thuốc và Dược Phẩm",
        description:
          "Các loại thuốc và dược phẩm giúp chăm sóc sức khỏe cho thú cưng, từ thuốc tẩy giun đến các loại vitamin hỗ trợ sức khỏe. Việc chăm sóc sức khỏe cho thú cưng là điều quan trọng để đảm bảo chúng luôn khỏe mạnh, năng động và không mắc phải các bệnh tật. Chúng tôi cung cấp những loại thuốc và dược phẩm uy tín, giúp thú cưng của bạn phòng ngừa và điều trị các bệnh thông thường, giúp chúng luôn duy trì sức khỏe tốt nhất.",
        image: "https://i.imgur.com/jpbGsXn.jpeg",
        link: routerNames.MEDICATION,
      },
      {
        name: "Thức Ăn & Dinh Dưỡng",
        description:
          "Thức ăn chất lượng và dinh dưỡng giúp thú cưng của bạn khỏe mạnh và phát triển, bao gồm các loại thức ăn cho chó, mèo, cá, và các vật nuôi khác. Chế độ ăn phù hợp và đầy đủ dưỡng chất là yếu tố quan trọng để duy trì sức khỏe lâu dài cho thú cưng. Chúng tôi cung cấp các loại thức ăn được chọn lọc kỹ càng, bao gồm cả thức ăn khô và ướt, đảm bảo sự cân đối về dinh dưỡng, phù hợp với từng giống loài và độ tuổi của thú cưng.",
        image: "https://i.imgur.com/FBE1ky8.jpeg",
        link: routerNames.FOOD_NUTRITION,
      },
      {
        name: "Trang Thiết Bị Cho Thú Cưng",
        description:
          "Đồ chơi, đồ đạc và các phụ kiện cho thú cưng của bạn thêm phần thoải mái và dễ chịu, bao gồm chuồng, giường nằm, và các món đồ chơi cho thú cưng. Các sản phẩm này không chỉ giúp thú cưng của bạn vui vẻ và năng động mà còn giúp chúng cảm thấy thoải mái và được chăm sóc tốt nhất. Chúng tôi cung cấp đa dạng các sản phẩm từ các thương hiệu uy tín, giúp cải thiện cuộc sống của thú cưng và mang đến cho chúng một không gian sống lý tưởng.",
        image: "https://i.imgur.com/inG7Ngh.jpeg",
        link: routerNames.ACCESSORIES,
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
      "Danh mục này bao gồm các giống thú cưng như chó, mèo, chim, và hamster. Tất cả đều được chọn lọc kỹ càng với nguồn gốc rõ ràng, đảm bảo chất lượng cho những ai muốn sở hữu thú cưng khỏe mạnh.",
    vatNuoi:
      "Danh mục này tập trung vào các giống vật nuôi như cá, thỏ, rùa, và gà. Chúng tôi cung cấp giống vật nuôi có chất lượng cao, dễ chăm sóc và thích hợp nuôi trong gia đình hoặc nông trại.",
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

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Danh Mục Sản Phẩm
        </h1>

        <Input
          placeholder="Tìm kiếm danh mục..."
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          value={searchTerm}
          className="w-1/2 mx-auto rounded-md p-3"
          style={{ backgroundColor: "#ffffff", border: "1px solid #ccc" }}
        />
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
