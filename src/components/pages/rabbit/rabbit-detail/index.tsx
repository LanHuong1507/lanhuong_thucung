import React, { useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface Rabbit {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  coat: string;
  price: string;
  image: string;
  additional_info: {
    health_issues: string;
    exercise_needs: string;
    diet: string;
    training_difficulty: string;
    suitable_for: string;
    care_tips: string;
  };
}

const RabbitDetail = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const rabbits = useSelector((state: { rabbits: Rabbit[] }) => state.rabbits);

  const selectedRabbit = rabbits.find((r) => r.id === parseInt(id as string));

  if (!selectedRabbit) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Thỏ không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.RABBIT)}>
          Trở về danh sách thỏ
        </Button>
      </section>
    );
  }

  const dataSource = [
    { key: "2", attribute: "Xuất xứ", value: selectedRabbit.origin },
    { key: "3", attribute: "Kích thước", value: selectedRabbit.size },
    { key: "4", attribute: "Tuổi thọ", value: selectedRabbit.life_span },
    { key: "5", attribute: "Cân nặng", value: selectedRabbit.weight_range },
    { key: "6", attribute: "Màu lông", value: selectedRabbit.coat },
    { key: "7", attribute: "Giá", value: selectedRabbit.price },
  ];

  const columns = [
    { title: "Thuộc tính", dataIndex: "attribute", key: "attribute" },
    { title: "Thông tin", dataIndex: "value", key: "value" },
  ];

  const handleToggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Head>
        <title>{selectedRabbit.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-4">
        <Breadcrumb className="mb-6 flex justify-center items-center space-x-4 md:space-x-8 w-full text-lg">
          <Breadcrumb.Item>
            <Link href={routerNames.HOME}>Trang Chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Vật Nuôi</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.RABBIT}>Thỏ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">
            {selectedRabbit.name}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-2xl font-bold mb-6 text-center">
          {selectedRabbit.name}
        </h1>

        <section className="flex flex-col md:flex-row justify-between items-start">
          <article className="w-full md:w-2/3 flex flex-col items-center mb-6 md:mb-0">
            <Image
              src={selectedRabbit.image}
              alt={selectedRabbit.name}
              className="w-full md:w-[95%] h-full object-cover rounded-md"
              width={400}
              height={400}
            />
          </article>

          <article className="w-full md:w-1/3">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="w-full"
            />
            <section className="flex justify-center mt-6 space-x-4 w-full">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-1/2 p-6 hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                Liên hệ
              </Button>
            </section>
          </article>
        </section>

        <section className="mt-12">
          <div className="w-full md:w-[80%] border-2 border-gray-300 rounded-lg shadow-lg">
            <h2
              className="text-xl font-semibold cursor-pointer flex justify-between items-center p-4 border-b-2 border-gray-300 bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-all duration-300"
              onClick={handleToggleSidebar}
            >
              <span>MỤC LỤC NỘI DUNG</span>
              <span>
                {isSidebarVisible ? <UpOutlined /> : <DownOutlined />}
              </span>
            </h2>
            {isSidebarVisible && (
              <div className="p-4">
                <ol className="mt-4 list-decimal pl-8 space-y-4 w-full">
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("care_tips")}
                  >
                    Lời khuyên chăm sóc
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("health")}
                  >
                    Sức khỏe
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("exercise")}
                  >
                    Nhu cầu vận động
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("diet")}
                  >
                    Chế độ ăn
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("training_difficulty")}
                  >
                    Khó khăn khi huấn luyện
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("suitable_for")}
                  >
                    Thích hợp với
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pt-24 md:flex md:gap-6">
          <ol className="space-y-6 mt-6">
            <li id="care_tips">
              <h3 className="text-3xl font-bold text-blue-700">
                1. Lời khuyên chăm sóc
              </h3>
              <p>{selectedRabbit.additional_info.care_tips}</p>
            </li>

            <li id="health">
              <h3 className="text-3xl font-bold text-blue-700">2. Sức khỏe</h3>
              <p>{selectedRabbit.additional_info.health_issues}</p>
            </li>

            <li id="exercise">
              <h3 className="text-3xl font-bold text-blue-700">
                3. Nhu cầu vận động
              </h3>
              <p>{selectedRabbit.additional_info.exercise_needs}</p>
            </li>

            <li id="diet">
              <h3 className="text-3xl font-bold text-blue-700">4. Chế độ ăn</h3>
              <p>{selectedRabbit.additional_info.diet}</p>
            </li>

            <li id="training_difficulty">
              <h3 className="text-3xl font-bold text-blue-700">
                5. Khó khăn khi huấn luyện
              </h3>
              <p>{selectedRabbit.additional_info.training_difficulty}</p>
            </li>

            <li id="suitable_for">
              <h3 className="text-3xl font-bold text-blue-700">
                6. Thích hợp với
              </h3>
              <p>{selectedRabbit.additional_info.suitable_for}</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default RabbitDetail;