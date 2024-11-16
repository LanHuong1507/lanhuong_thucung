import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Button, Rate } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
const FolderFilled = dynamic(
  () => import("@ant-design/icons").then((icon) => icon.FolderFilled),
  { ssr: false },
);
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pet: string;
  price: number;
  rating: number;
  stock: number;
}
const shuffleArray = (array: Product[]): Product[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProductList = ({ limit = 10 }) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const shuffledProducts = useMemo(() => {
    if (isClient) {
      return shuffleArray(products).slice(0, limit);
    }
    return products.slice(0, limit);
  }, [products, limit, isClient]);
  const chunkedProducts = useMemo(() => {
    const result: Product[][] = [];
    for (let i = 0; i < shuffledProducts.length; i += 5) {
      result.push(shuffledProducts.slice(i, i + 5));
    }
    return result;
  }, [shuffledProducts]);
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
    <div className="py-4 w-full">
      <div className="flex justify-between items-center mb-6 px-4 lg:px-6">
        <h2 className="text-lg md:text-2xl font-bold text-center">
          Các sản phẩm của chúng tôi
        </h2>
        <div className="flex">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="mx-2"
          >
            &lt; Prev
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === chunkedProducts.length - 1}
            className="mx-2"
          >
            Next &gt;
          </Button>
        </div>
      </div>

      <div className="p-4 lg:p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {chunkedProducts[currentPage]?.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <Image
                alt={product.name}
                src={product.image}
                layout="responsive"
                width={500}
                height={500}
              />
            }
            className="w-full flex-shrink-0"
          >
            <div className="mb-2">
              <FolderFilled className="text-gray-500" />
              <span className="font-medium text-gray-900 ml-4">
                {product.pet}
              </span>
            </div>
            <Card.Meta title={product.name} description={product.description} />
            <div className="mt-4">
              <p className="text-lg font-bold text-orange-500">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <Rate disabled defaultValue={product.rating} />
                <span className="ml-2 text-gray-500">({product.rating}/5)</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Stock: {product.stock} units left
              </p>

              <Button type="primary" className="mt-4 w-full">
                Buy Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
