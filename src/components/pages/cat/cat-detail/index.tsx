import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

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
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const cats = useSelector((state: { cats: Cat[] }) => state.cats);
  const cat = cats.find((cat: Cat) => cat.id === Number(id));

  useEffect(() => {
    if (cat) {
      setSelectedImage(cat.image);
    }
  }, [cat]);

  useEffect(() => {
    if (cat) {
      const slideshowImages = [
        cat.image,
        ...(Array.isArray(cat.thumbnail) ? cat.thumbnail : []),
      ];

      let timer: NodeJS.Timeout | null = null;

      const handleVideoEnded = () => {
        setCurrentThumbnailIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slideshowImages.length;
          setSelectedImage(slideshowImages[nextIndex]);
          return nextIndex;
        });
      };

      const startSlideshow = () => {
        const currentImage = slideshowImages[currentThumbnailIndex];
        const isVideo = /\.(mp4|webm|ogg)$/i.test(currentImage);

        if (isVideo) {
          const videoElement = document.createElement("video");
          videoElement.src = currentImage;

          videoElement.addEventListener("loadedmetadata", () => {
            timer = setTimeout(() => {
              handleVideoEnded();
            }, videoElement.duration * 1000);
          });

          videoElement.addEventListener("error", () => {
            handleVideoEnded();
          });
        } else {
          timer = setTimeout(() => {
            handleVideoEnded();
          }, 4000);
        }
      };

      startSlideshow();

      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [cat, currentThumbnailIndex]);

  const dataSource = [
    { key: "1", attribute: "Xuất xứ", value: cat?.origin },
    { key: "2", attribute: "Kích thước", value: cat?.size },
    { key: "3", attribute: "Tuổi thọ", value: cat?.life_span },
    { key: "4", attribute: "Cân nặng", value: cat?.weight_range },
    { key: "5", attribute: "Loại lông", value: cat?.coat },
    { key: "6", attribute: "Giống", value: cat?.breedType },
    { key: "7", attribute: "Giới tính", value: cat?.gender },
    { key: "8", attribute: "Giá bán", value: `${cat?.price} VNĐ` },
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
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
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
                alt={cat.name}
                className="w-full"
                width={400}
                height={400}
              />
            )}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4">
              {[
                cat.image,
                ...(Array.isArray(cat.thumbnail) ? cat.thumbnail : []),
              ].map((thumb, index) => {
                const isVideo = /\.(mp4|webm|ogg)$/i.test(thumb);
                return isVideo ? (
                  <video
                    key={index}
                    className={`w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover rounded-md cursor-pointer ${
                      currentThumbnailIndex === index
                        ? "border-4 border-blue-500"
                        : "border-2 border-gray-300"
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
                    alt={`${cat.name} thumbnail ${index + 1}`}
                    className={`w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover rounded-md cursor-pointer ${
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

          <article className="mt-4 md:col-span-2">
            <h1 className="text-2xl font-bold mb-6 text-center">{cat.name}</h1>
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
                  {[
                    { label: "Tính cách", section: "temperament" },
                    { label: "Sức khỏe", section: "health" },
                    { label: "Nhu cầu vận động", section: "exercise" },
                    { label: "Chế độ ăn", section: "diet" },
                    { label: "Huấn luyện", section: "training" },
                    { label: "Phù hợp với", section: "suitable_for" },
                    { label: "Lời khuyên chăm sóc", section: "care_tips" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-lg md:text-xl lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-transform duration-300 ease-in-out hover:text-blue-600 hover:translate-x-4 hover:font-medium"
                      onClick={() => handleSectionClick(item.section)}
                    >
                      {item.label}
                    </li>
                  ))}
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
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.temperament.join(", ")}
              </p>
            </li>

            <li id="health">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                2. Sức khỏe
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.health_issues}
              </p>
            </li>

            <li id="exercise">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                3. Nhu cầu vận động
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.exercise_needs}
              </p>
            </li>

            <li id="diet">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                4. Chế độ ăn
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.diet}
              </p>
            </li>

            <li id="training">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                5. Huấn luyện
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.training_difficulty}
              </p>
            </li>

            <li id="suitable_for">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                6. Phù hợp với
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.suitable_for}
              </p>
            </li>

            <li id="care_tips">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700">
                7. Lời khuyên chăm sóc
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                {cat.additional_info.care_tips}
              </p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
};

export default CatDetail;
