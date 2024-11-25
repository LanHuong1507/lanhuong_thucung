import { Key, useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Cat {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  coat: string;
  color: string[];
  breedType: string;
  gender: string;
  price: string;
  image: string;
  thumbnail: string[];
  video: string;
  additional_info: {
    health_issues: string[];
    exercise_needs: string;
    diet: string;
    training_difficulty: string;
    suitable_for: string[];
    care_tips: string[];
  };
}

const CatDetail = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const cats = useSelector((state: { cats: Cat[] }) => state.cats);
  const cat = cats.find((cat: Cat) => cat.id === Number(id));

  if (!cat) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Mèo không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.CAT)}>
          Trở về trang chính
        </Button>
      </section>
    );
  }

  const dataSource = [
    { key: "2", attribute: "Xuất xứ", value: cat.origin },
    { key: "3", attribute: "Kích thước", value: cat.size },
    { key: "4", attribute: "Tuổi thọ", value: cat.life_span },
    { key: "5", attribute: "Cân nặng", value: cat.weight_range },
    { key: "6", attribute: "Loại lông", value: cat.coat },
    { key: "9", attribute: "Giống", value: cat.breedType },
    { key: "10", attribute: "Giới tính", value: cat.gender },
    { key: "11", attribute: "Giá bán", value: `${cat.price} VNĐ` },
  ];

  const columns = [
    {
      title: "Thuộc tính",
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      title: "Thông tin",
      dataIndex: "value",
      key: "value",
    },
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
        <title>{cat.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-4">
        <Breadcrumb className="mb-6 flex justify-center items-center space-x-4 md:space-x-8 w-full text-lg">
          <Breadcrumb.Item>
            <Link href={routerNames.HOME}>Trang Chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Danh Mục sản Phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Thú Cưng</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CAT}>Mèo</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">{cat.name}</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-2xl font-bold mb-6 text-center w-full">
          {cat.name}
        </h1>
        <section className="flex flex-col md:flex-row justify-between items-start">
          <article className="w-full md:w-2/3 flex flex-col items-center mb-6 md:mb-0">
            <Image
              src={cat.image}
              alt={cat.name}
              className="w-full md:w-[95%] h-96 object-cover rounded-md"
              width={400}
              height={400}
            />
            <div className="flex flex-col lg:flex-row mt-4 md:space-x-4 space-y-4 md:space-y-0 items-center w-full justify-center">
              <div className="flex space-x-2 mb-4 lg:mb-0">
                {cat.thumbnail.map(
                  (
                    thumb: string | StaticImport,
                    index: Key | null | undefined,
                  ) => (
                    <Image
                      key={index}
                      src={thumb}
                      alt={`${cat.name} thumbnail ${(index as number) + 1}`}
                      className="w-24 h-20 md:w-36 lg:w-52 md:h-40 object-cover rounded-md cursor-pointer"
                      width={400}
                      height={400}
                    />
                  ),
                )}
              </div>
              <div className="w-full md:w-72 h-auto">
                <video
                  src={cat.video}
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full rounded-lg shadow-lg"
                ></video>
              </div>
            </div>
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
        <section className="flex flex-col">
          <div className="mt-8 py-4 px-6 w-full md:w-[50%] border-2 border-gray-300 rounded-lg shadow-lg bg-white">
            <h2
              className="text-xl md:text-3xl font-semibold text-black py-2 px-4 rounded-lg flex items-center cursor-pointer hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
              onClick={handleToggleSidebar}
            >
              MỤC LỤC NỘI DUNG
              <span className="ml-12 flex items-center">
                {isSidebarVisible ? <UpOutlined /> : <DownOutlined />}
              </span>
            </h2>

            {isSidebarVisible && (
              <ol className="mt-4 list-decimal pl-8 space-y-4 w-[80%]">
                <li
                  className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                  onClick={() => handleSectionClick("temperament")}
                >
                  Tính cách
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
                  onClick={() => handleSectionClick("training")}
                >
                  Huấn luyện
                </li>
                <li
                  className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                  onClick={() => handleSectionClick("suitable_for")}
                >
                  Phù hợp với
                </li>
                <li
                  className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 hover:translate-x-2"
                  onClick={() => handleSectionClick("care_tips")}
                >
                  Lời khuyên chăm sóc
                </li>
              </ol>
            )}
          </div>
        </section>

        <section className="pt-24 md:flex md:gap-6">
          <ol className="space-y-6 mt-6">
            <li id="temperament">
              <h3 className="text-3xl font-bold text-blue-700">1. Tính cách</h3>
              <p>{cat.temperament}</p>
            </li>

            <li id="health">
              <h3 className="text-3xl font-bold text-blue-700">2. Sức khỏe</h3>
              <p>{cat.additional_info.health_issues}</p>
            </li>

            <li id="exercise">
              <h3 className="text-3xl font-bold text-blue-700">
                3. Nhu cầu vận động
              </h3>
              <p>{cat.additional_info.exercise_needs}</p>
            </li>

            <li id="diet">
              <h3 className="text-3xl font-bold text-blue-700">4. Chế độ ăn</h3>
              <p>{cat.additional_info.diet}</p>
            </li>

            <li id="training">
              <h3 className="text-3xl font-bold text-blue-700">
                5. Huấn luyện
              </h3>
              <p>{cat.additional_info.training_difficulty}</p>
            </li>

            <li id="suitable_for">
              <h3 className="text-3xl font-bold text-blue-700">
                6. Phù hợp với
              </h3>
              <p>{cat.additional_info.suitable_for}</p>
            </li>

            <li id="care_tips">
              <h3 className="text-3xl font-bold text-blue-700">
                7. Lời khuyên chăm sóc
              </h3>
              <p>{cat.additional_info.care_tips}</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default CatDetail;
