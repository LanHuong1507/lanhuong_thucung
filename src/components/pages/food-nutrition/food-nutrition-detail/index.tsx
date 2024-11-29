import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table, Rate } from "antd";
import Head from "next/head";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import { useSelector } from "react-redux";
import Image from "next/image";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

interface FoodNutrition {
  id: number;
  name: string;
  description: string;
  usage: string;
  ingredients: string;
  category: string;
  price: string;
  size: string;
  image: string;
  thumbnails: string[];
  nutritional_information: string[];
  storage_instructions: string;
  additional_notes: string;
  reviews: { rating: number; reviewer: string; comment: string }[];
}

const FoodNutritionDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const foodNutritionData = useSelector(
    (state: { foodNutrition: FoodNutrition[] }) => state.foodNutrition,
  );
  const [foodNutrition, setFoodNutrition] = useState<FoodNutrition | null>(
    null,
  );
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>(0);

  useEffect(() => {
    if (id && foodNutritionData.length > 0) {
      const product = foodNutritionData.find(
        (product) => product.id === Number(id),
      );
      setFoodNutrition(product || null);

      if (product) {
        setSelectedImage(product.image);
      }
    }
  }, [id, foodNutritionData]);

  useEffect(() => {
    if (foodNutrition) {
      const slideshowImages = [
        foodNutrition.image,
        ...foodNutrition.thumbnails,
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
  }, [foodNutrition]);

  const handleThumbnailClick = (thumb: string, index: number) => {
    setSelectedImage(thumb);
    setCurrentThumbnailIndex(index);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    }
  };

  if (!foodNutrition) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">
          Sản phẩm không tồn tại
        </h1>
        <Button
          type="primary"
          onClick={() => router.push(routerNames.FOOD_NUTRITION)}
        >
          Trở về trang chính
        </Button>
      </section>
    );
  }

  const dataSource = [
    { key: "1", attribute: "Danh mục", value: foodNutrition.category },
    { key: "2", attribute: "Kích thước", value: foodNutrition.size },
    { key: "3", attribute: "Giá bán", value: foodNutrition.price },
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
  const relatedProducts = foodNutritionData.filter(
    (product) =>
      product.category === foodNutrition.category &&
      product.id !== foodNutrition.id,
  );
  return (
    <>
      <Head>
        <title>{foodNutrition.name}</title>
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
            <Link href={routerNames.CATEGORY}>Dụng Cụ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.FOOD_NUTRITION}>Thức Ăn & Dinh Dưỡng</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">
            {foodNutrition.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
          <article className="flex flex-col items-center mb-6 md:col-span-3">
            <Image
              src={selectedImage}
              alt={foodNutrition.name}
              className="w-full"
              width={400}
              height={400}
            />
            <div className="flex space-x-4 mt-4 flex-wrap justify-center">
              {[foodNutrition.image, ...foodNutrition.thumbnails].map(
                (thumb, index) => (
                  <Image
                    key={index}
                    src={thumb}
                    alt={`${foodNutrition.name} thumbnail ${index + 1}`}
                    className={`w-32 lg:w-48 h-28 object-cover rounded-md cursor-pointer ${
                      currentThumbnailIndex === index
                        ? "border-4 border-blue-500"
                        : ""
                    }`}
                    width={100}
                    height={100}
                    onClick={() => handleThumbnailClick(thumb, index)}
                  />
                ),
              )}
            </div>
          </article>
          <article className="mt-4 md:col-span-2">
            <h1 className="text-2xl font-bold mb-6 text-center">
              {foodNutrition.name}
            </h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="rounded-lg"
            />
            <section className="flex justify-center mt-6">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-[90%] p-6 hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-lg"
              >
                Liên hệ
              </Button>
            </section>
            <section className="mt-6">
              <h2 className="text-xl font-semibold">Mô tả sản phẩm</h2>
              <p className="mt-4 text-gray-700">{foodNutrition.description}</p>
            </section>
          </article>
        </section>
        <section className="mt-6">
          <div className="w-[90%]  lg:w-[80%] border-2 border-gray-300 rounded-lg shadow-lg">
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
              <div
                className={`p-4 transition-all duration-500 ease-in-out transform motion-safe:${
                  isSidebarVisible
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              >
                <ol className="mt-4 list-decimal pl-8 space-y-4 w-[80%]">
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-800 hover:translate-x-2"
                    onClick={() => handleSectionClick("nutrition")}
                  >
                    Thông tin dinh dưỡng
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-800 hover:translate-x-2"
                    onClick={() => handleSectionClick("ingredients")}
                  >
                    Thành phần
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-800 hover:translate-x-2"
                    onClick={() => handleSectionClick("usage")}
                  >
                    Cách sử dụng
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-800 hover:translate-x-2"
                    onClick={() => handleSectionClick("storage_instructions")}
                  >
                    Bảo quản
                  </li>
                  <li
                    className="text-base md:text-lg lg:text-2xl cursor-pointer text-black p-2 rounded-md transition-all duration-300  hover:text-blue-800 hover:translate-x-2"
                    onClick={() => handleSectionClick("additional_notes")}
                  >
                    Ghi chú thêm
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pt-12">
          <ol className="space-y-6">
            <li id="nutrition">
              <h3 className="text-2xl font-semibold text-blue-700">
                1. Thông tin dinh dưỡng
              </h3>
              <ul className="list-inside list-disc">
                {foodNutrition.nutritional_information.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li id="ingredients">
              <h3 className="text-2xl font-semibold text-blue-700">
                2. Thành phần
              </h3>
              <p>{foodNutrition.ingredients}</p>
            </li>
            <li id="usage">
              <h3 className="text-2xl font-semibold text-blue-700">
                3. Cách sử dụng
              </h3>
              <p>{foodNutrition.usage}</p>
            </li>
            <li id="storage_instructions">
              <h3 className="text-2xl font-semibold text-blue-700">
                4. Bảo quản
              </h3>
              <p>{foodNutrition.storage_instructions}</p>
            </li>
            <li id="additional_notes">
              <h3 className="text-2xl font-semibold text-blue-700">
                5. Ghi chú thêm
              </h3>
              <p>{foodNutrition.additional_notes}</p>
            </li>
          </ol>
        </section>

        <section className="my-10">
          <h2 className="text-xl font-semibold">
            Đánh giá của khách hàng về sản phẩm này
          </h2>
          {foodNutrition.reviews && foodNutrition.reviews.length > 0 ? (
            <div className="mt-4 space-y-4">
              {foodNutrition.reviews.map((review, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{review.reviewer}</span>
                    <Rate
                      disabled
                      value={review.rating}
                      className="text-yellow-500"
                    />
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-700">Chưa có đánh giá nào.</p>
          )}
        </section>
        {relatedProducts.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-semibold mb-4">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-96 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-center text-white text-lg">
                    <h3 className=" font-semibold truncate">{product.name}</h3>
                    <p className="mt-2">{product.price}</p>
                  </div>
                  <Link
                    href={`${routerNames.FOOD_NUTRITION_DETAIL.replace(
                      "[id]",
                      product.id.toString(),
                    )}`}
                  >
                    <Button
                      type="primary"
                      block
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 mb-20 py-4 px-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 ease-in-out"
                    >
                      Xem Chi Tiết
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default FoodNutritionDetail;
