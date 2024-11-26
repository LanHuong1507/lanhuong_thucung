import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Pagination, Row, Col, Button, Space, Breadcrumb } from "antd";
import { routerNames } from "@/components/constants/router.constant";
import Link from "next/link";
import Image from "next/image";

interface CareTool {
  name: string;
  image: string;
  price: string;
  description: string;
  id: number;
}

const CareTool = () => {
  const products = useSelector(
    (state: { careTools: CareTool[] }) => state.careTools,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <Space direction="vertical" style={{ width: "100%" }} className="p-6">
      <Breadcrumb className="my-6 flex items-center justify-center space-x-4 lg:space-x-8 w-full text-lg">
        <Breadcrumb.Item>
          <Link href={routerNames.HOME}>Trang Chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Danh Mục sản Phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Dụng cụ chăm sóc</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Danh Sách Sản Phẩm
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {paginatedProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
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
                  className="h-72 w-full object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-green-600 font-semibold">{product.price}</p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {product.description}
                </p>
                <Link
                  href={`${routerNames.CARE_TOOLS_DETAIL.replace(
                    "[id]",
                    product.id.toString(),
                  )}`}
                >
                  <Button
                    type="primary"
                    block
                    className="w-full text-center py-6 px-8 text-lg rounded-lg text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 mb-4"
                  >
                    Xem chi tiết
                  </Button>
                </Link>

                <Link href={routerNames.CONTACT}>
                  <Button
                    type="default"
                    block
                    className="w-full text-center py-6 px-8 text-lg rounded-lg text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                  >
                    Liên hệ ngay
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

export default CareTool;
