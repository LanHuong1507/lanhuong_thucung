import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Button, Rate } from "antd";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pet: string;
  price: number;
  rating: number;
  stock: number;
  best_seller: boolean;
}

const shuffleArray = (array: Product[]): Product[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProductList = ({ limit = 10, showBestSeller = false }) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = useMemo(() => {
    if (showBestSeller) {
      return products.filter((product) => product.best_seller);
    }
    return shuffleArray(products).slice(0, limit);
  }, [products, showBestSeller, limit]);

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
    <div className="py-4 w-full ">
      <div className="flex flex-row justify-between items-center mb-6 px-4 lg:px-6">
        <div className="flex flex-col items-start w-full mt-4">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-gray-800">
            {showBestSeller
              ? "Top sản phẩm bán chạy nhất tháng này"
              : "Khám phá sản phẩm nổi bật được yêu thích"}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            {showBestSeller
              ? "Hãy nhanh tay sở hữu các sản phẩm bán chạy nhất!"
              : "Được tuyển chọn kỹ lưỡng dành riêng cho bạn."}
          </p>
        </div>
        <div className="flex space-x-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            &lt; Trước
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === chunkedProducts.length - 1}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Sau &gt;
          </Button>
        </div>
      </div>

      <div className="p-4 lg:p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-6">
        {chunkedProducts[currentPage]?.map((product) => (
          <Card
            key={product.id}
            hoverable
            className="w-full flex-shrink-0 relative group shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
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
            <div className="p-4 bg-white flex flex-col h-full">
              <Card.Meta
                title={product.name}
                description={product.description}
                className="text-gray-700 mb-4"
              />
              <p className="text-lg font-semibold text-orange-500 mb-2">
                {new Intl.NumberFormat("vi-VN", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }).format(product.price)}{" "}
                VNĐ
              </p>
              <div className="flex items-center mb-2">
                <Rate disabled defaultValue={product.rating} className="mr-2" />
                <span className="text-gray-500">({product.rating}/5)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Chỉ còn {product.stock} sản phẩm
              </p>
              <Button type="primary" className="mt-auto w-full" size="large">
                Mua ngay
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
