import { useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import DefaultImage from "@/assets/images/default.jpg";
interface Dog {
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
const DogDetail = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const dogs = useSelector((state: { dogs: Dog[] }) => state.dogs);
  const dog = dogs.find((dog) => dog.id === parseInt(id as string, 10));

  if (!dog) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Chó không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.DOG)}>
          Trở về trang chính
        </Button>
      </section>
    );
  }

  if (!mainImage) {
    setMainImage(dog.image);
  }

  const dataSource = [
    { key: "1", attribute: "Xuất xứ", value: dog.origin },
    { key: "2", attribute: "Kích thước", value: dog.size },
    { key: "3", attribute: "Tuổi thọ", value: dog.life_span },
    { key: "4", attribute: "Cân nặng", value: dog.weight_range },
    { key: "5", attribute: "Loại lông", value: dog.coat },
    { key: "6", attribute: "Màu lông", value: dog.color.join(", ") },
    { key: "7", attribute: "Giống", value: dog.breedType },
    { key: "8", attribute: "Giới tính", value: dog.gender },
    { key: "9", attribute: "Giá bán", value: `${dog.price}` },
  ];

  const columns = [
    {
      title: "Thuộc tính",
      dataIndex: "attribute",
      key: "attribute",
      render: (text: string) => (
        <span className="text-base font-medium text-gray-800">{text}</span>
      ),
    },
    {
      title: "Thông tin",
      dataIndex: "value",
      key: "value",
      render: (text: string) => (
        <span className="text-base font-normal text-gray-700">{text}</span>
      ),
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

  const handleThumbnailClick = (thumbnail: string) => {
    setMainImage(thumbnail);
  };

  const isMainImageVideo =
    mainImage && (mainImage.endsWith(".mp4") || mainImage.endsWith(".webm"));

  return (
    <>
      <Head>
        <title>{dog.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-6">
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
            <Link href={routerNames.DOG}>Chó</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">{dog.name}</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-2xl font-bold mb-6 text-center w-full">
          {dog.name}
        </h1>
        <section className="flex flex-col md:flex-row justify-between items-start">
          <article className="w-full md:w-2/3 flex flex-col items-center mb-6 md:mb-0">
            {isMainImageVideo ? (
              <video
                src={mainImage}
                className="w-full md:w-[95%] h-96 object-cover rounded-md"
                width={400}
                height={400}
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={mainImage || DefaultImage}
                alt={dog.name}
                className="w-full md:w-[95%] h-96 object-cover rounded-md"
                width={400}
                height={400}
              />
            )}

            <div className="flex flex-col lg:flex-row mt-4 md:space-x-4 space-y-4 md:space-y-0 items-center w-full justify-center">
              <div className="flex space-x-2 mb-4 lg:mb-0">
                {dog.thumbnail.map((thumb, index) => {
                  const isVideo =
                    thumb.endsWith(".mp4") || thumb.endsWith(".webm");
                  return (
                    <div key={index} className="relative">
                      {isVideo ? (
                        <video
                          className="w-24 h-20 md:w-36 lg:w-52 md:h-40 object-cover rounded-md cursor-pointer"
                          width={400}
                          height={400}
                          onClick={() => handleThumbnailClick(thumb)}
                          controls
                          autoPlay
                        >
                          <source src={thumb} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={thumb}
                          alt={`${dog.name} thumbnail ${index + 1}`}
                          className="w-24 h-20 md:w-36 lg:w-52 md:h-40 object-cover rounded-md cursor-pointer"
                          width={400}
                          height={400}
                          onClick={() => handleThumbnailClick(thumb)}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <article className="w-full md:w-1/3">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="w-full text-sm md:text-base lg:text-lg"
            />
            <section className="flex justify-center mt-6 space-x-4 w-full">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-[90%] p-6 hover:bg-blue-700 hover:text-white transition-all duration-300 text-base md:text-lg lg:text-xl"
              >
                Liên hệ
              </Button>
            </section>
          </article>
        </section>
        <section className="mt-12">
          <div className="w-full md:w-[70%] border-2 border-gray-300 rounded-lg shadow-lg">
            <h2
              className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer flex justify-between items-center p-4 border-b-2 border-gray-300 bg-gray-50 rounded-t-lg hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-lg transition-all duration-300"
              onClick={handleToggleSidebar}
            >
              <span>MỤC LỤC NỘI DUNG</span>
              <span>
                {isSidebarVisible ? <UpOutlined /> : <DownOutlined />}
              </span>
            </h2>

            {isSidebarVisible && (
              <div
                className={`p-4 transition-all duration-500 ease-in-out transform motion-safe:${
                  isSidebarVisible
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              >
                <ol className="mt-4 list-decimal pl-8 space-y-4 w-[80%]">
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("temperament")}
                  >
                    Tính cách
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("health")}
                  >
                    Sức khỏe
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("exercise")}
                  >
                    Nhu cầu vận động
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("diet")}
                  >
                    Chế độ ăn
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("training")}
                  >
                    Huấn luyện
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("suitable_for")}
                  >
                    Phù hợp với
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-xl cursor-pointer text-black p-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("care_tips")}
                  >
                    Lời khuyên chăm sóc
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pt-24 md:flex md:gap-6">
          <ol className="space-y-6 mt-6">
            <li id="temperament">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                1. Tính cách
              </h3>
              {dog.temperament.map((item, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2"
                >
                  - {item}
                </p>
              ))}
            </li>

            <li id="health">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                2. Sức khỏe
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.health_issues}
              </p>
            </li>

            <li id="exercise">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                3. Nhu cầu vận động
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.exercise_needs}
              </p>
            </li>

            <li id="diet">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                4. Chế độ ăn
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.diet}
              </p>
            </li>

            <li id="training">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                5. Huấn luyện
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.training_difficulty}
              </p>
            </li>

            <li id="suitable_for">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                6. Phù hợp với
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.suitable_for}
              </p>
            </li>

            <li id="care_tips">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                7. Lời khuyên chăm sóc
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mt-2">
                {dog.additional_info.care_tips}
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default DogDetail;
