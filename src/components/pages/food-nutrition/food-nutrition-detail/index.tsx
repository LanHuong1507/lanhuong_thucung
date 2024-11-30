import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Rate, Tabs, Collapse, Row, Col } from "antd";
import Head from "next/head";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import { useSelector } from "react-redux";
import Image from "next/image";

const { TabPane } = Tabs;
const { Panel } = Collapse;

interface FoodNutrition {
  id: number;
  name: string;
  description: string;
  usage: string;
  category: string;
  price: string;
  size: string;
  image: string;
  thumbnails: string[];
  nutritional_information: string;
  ingredients: string;
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
  const [selectedImage, setSelectedImage] = useState<string>("");
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
  const relatedProducts = foodNutritionData.filter(
    (product) =>
      product.category === foodNutrition?.category &&
      product.id !== foodNutrition?.id,
  );

  if (!foodNutrition) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Sản phẩm không tồn tại
        </h1>
        <Button
          type="primary"
          onClick={() => router.push(routerNames.FOOD_NUTRITION)}
          className="mt-6 text-xl"
        >
          Trở về trang chính
        </Button>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{foodNutrition.name}</title>
      </Head>
      <main className="container mx-auto py-10 px-6">
        <Breadcrumb className="mb-10 text-xl">
          <Breadcrumb.Item>
            <Link href={routerNames.HOME}>Trang Chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.FOOD_NUTRITION}>Dinh Dưỡng Thực Phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold text-2xl">
            {foodNutrition.name}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-5xl font-bold mb-10 text-center">
          {foodNutrition.name}
        </h1>
        <section className="mb-12">
          <Row gutter={24}>
            <Col
              xs={24}
              md={24}
              lg={16}
              className="flex flex-col items-center mb-6 md:mb-0"
            >
              <Image
                src={selectedImage}
                alt={foodNutrition.name}
                className="w-full object-cover h-[500px] md:h-[600px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                width={1000}
                height={600}
              />
            </Col>
            <Col
              xs={24}
              md={24}
              lg={8}
              className="flex flex-col items-center mb-6 md:mb-0"
            >
              <div className="flex flex-row gap-4 mt-6 justify-center lg:flex-col">
                {[foodNutrition.image, ...foodNutrition.thumbnails].map(
                  (thumb, index) => (
                    <Image
                      key={index}
                      src={thumb}
                      alt={`${foodNutrition.name} thumbnail ${index + 1}`}
                      className="w-20 h-20 md:w-36 md:h-36 lg:w-full lg:h-36 object-cover rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
                      width={400}
                      height={400}
                      onClick={() => setSelectedImage(thumb)}
                    />
                  ),
                )}
              </div>
            </Col>
          </Row>
        </section>

        <Tabs defaultActiveKey="1" className="my-12">
          <TabPane
            tab={
              <span className="text-3xl font-semibold text-gray-800">
                Mô Tả Sản Phẩm
              </span>
            }
            key="1"
            className="text-xl"
          >
            <p className="text-2xl text-gray-700">
              {foodNutrition.description}
            </p>
          </TabPane>
          <TabPane
            tab={
              <span className="text-3xl font-semibold text-gray-800">
                Đánh giá của khách hàng
              </span>
            }
            key="2"
          >
            {foodNutrition.reviews && foodNutrition.reviews.length > 0 ? (
              <div className="mt-6 space-y-6">
                {foodNutrition.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-semibold text-gray-800">
                        {review.reviewer}
                      </span>
                      <Rate
                        disabled
                        value={review.rating}
                        className="text-yellow-500"
                      />
                    </div>
                    <p className="mt-4 text-xl text-gray-700">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-lg text-gray-700">
                Chưa có đánh giá nào.
              </p>
            )}
          </TabPane>
        </Tabs>

        <section className="pt-10">
          <Collapse
            defaultActiveKey={["1", "2", "3"]}
            className="shadow-lg rounded-lg bg-white"
          >
            <Panel
              header={
                <span className="text-3xl font-semibold text-gray-800">
                  Thành Phần Dinh Dưỡng
                </span>
              }
              key="1"
              className="text-xl border-b-2 border-gray-200"
            >
              <p className="text-2xl text-gray-700">
                {foodNutrition.nutritional_information}
              </p>
            </Panel>
            <Panel
              header={
                <span className="text-3xl font-semibold text-gray-800">
                  Thành Phần Nguyên Liệu
                </span>
              }
              key="2"
              className="text-xl border-b-2 border-gray-200"
            >
              <p className="text-2xl text-gray-700">
                {foodNutrition.ingredients}
              </p>
            </Panel>
            <Panel
              header={
                <span className="text-3xl font-semibold text-gray-800">
                  Hướng Dẫn Sử Dụng
                </span>
              }
              key="3"
              className="text-xl border-b-2 border-gray-200"
            >
              <p className="text-2xl text-gray-700">{foodNutrition.usage}</p>
            </Panel>
            <Panel
              header={
                <span className="text-3xl font-semibold text-gray-800">
                  Bảo Quản
                </span>
              }
              key="4"
              className="text-xl border-b-2 border-gray-200"
            >
              <p className="text-2xl text-gray-700">
                {foodNutrition.storage_instructions}
              </p>
            </Panel>
            <Panel
              header={
                <span className="text-3xl font-semibold text-gray-800">
                  Ghi Chú Thêm
                </span>
              }
              key="5"
              className="text-xl border-b-2 border-gray-200"
            >
              <p className="text-2xl text-gray-700">
                {foodNutrition.additional_notes}
              </p>
            </Panel>
          </Collapse>
        </section>

        {relatedProducts.length > 0 && (
          <section className="my-10">
            <h2 className="text-xl font-semibold mb-4">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
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
                    <h3 className="font-semibold truncate">{product.name}</h3>
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
