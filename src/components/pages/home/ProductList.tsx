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
    <section className="py-6 w-full">
      <header className="flex flex-row justify-between items-center mb-6 px-4 lg:px-8">
        <section className="flex flex-col items-start w-full mt-4">
          <h2 className="text-2xl md:text-4xl font-bold text-start text-gray-800">
            Sản phẩm nổi bật
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Những sản phẩm đặc biệt được yêu thích nhất.
          </p>
        </section>
        <section className="flex space-x-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ArrowLeftOutlined />
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === chunkedProducts.length - 1}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ArrowRightOutlined />
          </Button>
        </section>
      </header>
      <main className="p-4 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {chunkedProducts[currentPage]?.map((product) => (
          <article
            key={product.id}
            className="w-full flex-shrink-0 relative group shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <Card
              hoverable
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
              <section className="p-4 flex flex-col h-full space-y-4">
                <Card.Meta
                  title={
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  }
                  description={
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      {product.description}
                    </p>
                  }
                  className="mb-4"
                />
                <p className="text-lg font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                  {new Intl.NumberFormat("vi-VN", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }).format(product.price)}{" "}
                  VNĐ
                </p>
                <section className="flex items-center">
                  <Rate
                    disabled
                    defaultValue={product.rating}
                    className="mr-2 text-yellow-400"
                  />
                  <span className="text-gray-500">({product.rating}/5)</span>
                </section>
              </section>
            </Card>
          </article>
        ))}
      </main>
    </section>
  );
};

export default ProductList;
