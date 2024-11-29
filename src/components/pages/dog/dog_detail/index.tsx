import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import { useSelector } from "react-redux";
import Image from "next/image";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

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
  const router = useRouter();
  const { id } = router.query;
  const dogs = useSelector((state: { dogs: Dog[] }) => state.dogs);
  const [dog, setDog] = useState<Dog | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
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
  useEffect(() => {
    if (id && dogs.length > 0) {
      const foundDog = dogs.find((item) => item.id === Number(id));
      setDog(foundDog || null);

      if (foundDog) {
        setSelectedImage(foundDog.image);
      }
    }
  }, [id, dogs]);

  useEffect(() => {
    if (dog) {
      const slideshowImages = [
        dog.image,
        ...(Array.isArray(dog.thumbnail) ? dog.thumbnail : []),
      ];
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slideshowImages.length;
          setSelectedImage(slideshowImages[nextIndex]);
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [dog]);

  const handleThumbnailClick = (thumb: string, index: number) => {
    setSelectedImage(thumb);
    setCurrentThumbnailIndex(index);
  };

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

  const dataSource = [
    { key: "1", attribute: "Giống chó", value: dog.breedType },
    { key: "2", attribute: "Xuất xứ", value: dog.origin },
    { key: "3", attribute: "Kích thước", value: dog.size },
    { key: "4", attribute: "Tuổi thọ", value: dog.life_span },
    { key: "5", attribute: "Lớp lông", value: dog.coat },
    { key: "6", attribute: "Giá bán", value: dog.price },
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

  return (
    <>
      <Head>
        <title>{dog.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-6">
        <Breadcrumb className="mb-6 text-lg text-center">
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
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <article className="flex flex-col items-center mb-6 md:col-span-3">
            {/\.mp4|webm|ogg$/i.test(selectedImage) ? (
              <video
                src={selectedImage}
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-lg"
                width={400}
                height={400}
              >
                Trình duyệt không hỗ trợ video.
              </video>
            ) : (
              <Image
                src={selectedImage}
                alt={dog.name}
                className="w-full"
                width={400}
                height={400}
              />
            )}
            <div className="flex space-x-4 mt-4 flex-wrap justify-center">
              {[
                dog.image,
                ...(Array.isArray(dog.thumbnail) ? dog.thumbnail : []),
              ].map((thumb, index) => {
                const isVideo = /\.(mp4|webm|ogg)$/i.test(thumb);
                return isVideo ? (
                  <video
                    key={index}
                    className={`w-24 md:w-32 lg:w-36 h-28 object-cover rounded-md cursor-pointer ${
                      currentThumbnailIndex === index
                        ? "border-4 border-blue-500"
                        : ""
                    }`}
                    width={100}
                    height={100}
                    muted
                    onClick={() => handleThumbnailClick(thumb, index)}
                  >
                    <source src={thumb} type="video/mp4" />
                    Trình duyệt không hỗ trợ video.
                  </video>
                ) : (
                  <Image
                    key={index}
                    src={thumb}
                    alt={`${dog.name} thumbnail ${index + 1}`}
                    className={`w-24 md:w-32 lg:w-36 h-28 object-cover rounded-md cursor-pointer ${
                      currentThumbnailIndex === index
                        ? "border-4 border-blue-500"
                        : ""
                    }`}
                    width={100}
                    height={100}
                    onClick={() => handleThumbnailClick(thumb, index)}
                  />
                );
              })}
            </div>
          </article>

          <article className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-6 text-center">{dog.name}</h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="rounded-lg"
            />{" "}
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
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("temperament")}
                  >
                    Tính cách
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600 hover:shadow-md hover:translate-x-2"
                    onClick={() => handleSectionClick("health")}
                  >
                    Sức khỏe
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("exercise")}
                  >
                    Nhu cầu vận động
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("diet")}
                  >
                    Chế độ ăn
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600  hover:translate-x-2"
                    onClick={() => handleSectionClick("training")}
                  >
                    Huấn luyện
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("suitable_for")}
                  >
                    Phù hợp với
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-3  hover:text-blue-600  hover:translate-x-2"
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
