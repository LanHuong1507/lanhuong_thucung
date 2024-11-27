import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Button, Rate } from "antd";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pet: string;
  price: number;
  rating: number;
  best_seller: boolean;
}

const ProductList = ({ limit = 10 }) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.best_seller).slice(0, limit);
  }, [products, limit]);

  const chunkedProducts = useMemo(() => {
    const result: Product[][] = [];
    for (let i = 0; i < filteredProducts.length; i += 5) {
      result.push(filteredProducts.slice(i, i + 5));
    }
    return result;
  }, [filteredProducts]);

  const nextPage = () => {
    if (currentPage < chunkedProducts.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-6 w-full">
      <div className="flex flex-row justify-between items-center mb-6 px-4 lg:px-8">
        <div className="flex flex-col items-start w-full mt-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-start text-gray-800">
            Sản phẩm nổi bật
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Những sản phẩm đặc biệt được yêu thích nhất.
          </p>
        </div>

        <div className="flex space-x-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition-colors"
          >
            <ArrowLeftOutlined />
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === chunkedProducts.length - 1}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition-colors"
          >
            <ArrowRightOutlined />
          </Button>
        </div>
      </div>

      <div className="p-4 lg:p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chunkedProducts[currentPage]?.map((product) => (
          <Card
            key={product.id}
            hoverable
            className="w-full flex-shrink-0 relative group shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 bg-white"
            cover={
              <Image
                alt={product.name}
                src={product.image}
                width={500}
                height={500}
                className="object-cover h-64 w-full"
              />
            }
          >
            <div className="p-4 flex flex-col h-full space-y-4">
              <Card.Meta
                title={
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                }
                description={
                  <p className="text-sm text-gray-600">{product.description}</p>
                }
                className="text-gray-700 mb-4"
              />
              <p className="text-lg font-semibold text-orange-500 mb-2">
                {new Intl.NumberFormat("vi-VN", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }).format(product.price)}{" "}
                VNĐ
              </p>
              <div className="flex items-center">
                <Rate
                  disabled
                  defaultValue={product.rating}
                  className="mr-2 text-yellow-400"
                />
                <span className="text-gray-500">({product.rating}/5)</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
