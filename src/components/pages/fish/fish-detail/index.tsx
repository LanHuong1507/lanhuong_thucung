import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  size_range: string;
  color: string[];
  price: string;
  image: string;
  thumail: string[];
  additional_info: {
    health_issues: string;
    exercise_needs: string;
    diet: string;
    training_difficulty: string;
    suitable_for: string;
    care_tips: string;
  };
}

const FishDetail = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [fish1, setFish] = useState<Fish | null>(null);
  const fish = useSelector((state: { fish: Fish[] }) => state.fish);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>(0);
  useEffect(() => {
    if (id && fish.length > 0) {
      const foundFish = fish.find((item) => item.id === Number(id));
      setFish(foundFish || null);

      if (foundFish) {
        setSelectedImage(foundFish.image);
      }
    }
  }, [id, fish]);

  useEffect(() => {
    if (fish1) {
      const slideshowImages = [
        fish1.image,
        ...(Array.isArray(fish1.thumail) ? fish1.thumail : []),
      ];
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slideshowImages.length;
          setSelectedImage(slideshowImages[nextIndex]);
          return nextIndex;
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [fish1]);
  if (!fish1) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Cá không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.FISH)}>
          Trở về danh sách cá
        </Button>
      </section>
    );
  }

  const dataSource = [
    { key: "1", attribute: "Xuất xứ", value: fish1.origin },
    { key: "2", attribute: "Kích thước", value: fish1.size },
    { key: "3", attribute: "Tuổi thọ", value: fish1.life_span },
    { key: "4", attribute: "Màu sắc", value: fish1.color.join(", ") },
    { key: "5", attribute: "Giá", value: fish1.price },
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
  const handleThumbnailClick = (thumb: string, index: number) => {
    setSelectedImage(thumb);
    setCurrentThumbnailIndex(index);
  };

  return (
    <>
      <Head>
        <title>{fish1.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-6">
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
            <Link href={routerNames.FISH}>Cá</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">{fish1.name}</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-2xl font-bold mb-6 text-center">{fish1.name}</h1>
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
                alt={fish1.name}
                className="w-full"
                width={400}
                height={400}
              />
            )}
            <div className="flex space-x-4 mt-4 flex-wrap justify-center">
              {[
                fish1.image,
                ...(Array.isArray(fish1.thumail) ? fish1.thumail : []),
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
                    alt={`${fish1.name} thumbnail ${index + 1}`}
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
            <h1 className="text-2xl font-bold mb-6 text-center">
              {fish1.name}
            </h1>
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
                <ol className="mt-4 list-decimal pl-8 space-y-4 w-[80%]">
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("care_tips")}
                  >
                    Lời khuyên chăm sóc
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("health")}
                  >
                    Sức khỏe
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("exercise")}
                  >
                    Nhu cầu vận động
                  </li>
                  <li
                    className="text-xl md:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-600 hover:translate-x-2"
                    onClick={() => handleSectionClick("diet")}
                  >
                    Chế độ ăn
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pt-24 md:flex md:gap-6">
          <ol className="space-y-6 mt-6">
            <li id="care_tips">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                1. Lời khuyên chăm sóc
              </h3>
              <p className="text-base md:text-lg">
                {fish1.additional_info.care_tips}
              </p>
            </li>

            <li id="health">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                2. Sức khỏe
              </h3>
              <p className="text-base md:text-lg">
                {fish1.additional_info.health_issues}
              </p>
            </li>

            <li id="exercise">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                3. Nhu cầu vận động
              </h3>
              <p className="text-base md:text-lg">
                {fish1.additional_info.exercise_needs}
              </p>
            </li>

            <li id="diet">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
                4. Chế độ ăn
              </h3>
              <p className="text-base md:text-lg">
                {fish1.additional_info.diet}
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default FishDetail;
