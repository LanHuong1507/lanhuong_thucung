import React, { useState } from "react";
import { Card, Pagination, Row, Col, Button, Space, Breadcrumb } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { routerNames } from "@/components/constants/router.constant";

interface FoodNutrition {
  id: number;
  name: string;
  image: string;
  price: string;
}

const FoodNutrition: React.FC = () => {
  const products = useSelector(
    (state: { foodNutrition: FoodNutrition[] }) => state.foodNutrition,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <Space direction="vertical" style={{ width: "100%" }} className="p-6">
      <Breadcrumb className="my-6 flex items-center justify-center space-x-4 w-full text-lg">
        <Breadcrumb.Item>
          <Link href={routerNames.HOME}>Trang Chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Dụng Cụ Chăm Sóc</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="font-bold">Thức Ăn & Dinh Dưỡng</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
        Thức Ăn & Dinh Dưỡng
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {paginatedProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              className="relative shadow-lg rounded-lg overflow-hidden group transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  alt={product.name}
                  src={product.image}
                  width={300}
                  height={300}
                  className="h-80 w-full object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-green-600 font-semibold">{product.price}</p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <Link
                  href={`${routerNames.FOOD_NUTRITION_DETAIL.replace(
                    "[id]",
                    product.id.toString(),
                  )}`}
                >
                  <Button
                    type="primary"
                    block
                    className="mb-4 py-3 px-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                  >
                    Xem Chi Tiết
                  </Button>
                </Link>
                <Link href={routerNames.CONTACT}>
                  <Button
                    type="default"
                    block
                    className="py-3 px-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                  >
                    Liên Hệ Ngay
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={products.length}
        onChange={(page) => setCurrentPage(page)}
        showSizeChanger={false}
        className="flex justify-center my-8"
      />
    </Space>
  );
};

export default FoodNutrition;
