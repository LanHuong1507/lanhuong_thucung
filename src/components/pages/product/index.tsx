import React, { useMemo, useState } from "react";
import { Card, Button, Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { routerNames } from "@/components/constants/router.constant";

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

const Product = ({ productsPerPage = 8 }) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const chunkedProducts = useMemo(() => {
    const result: Product[][] = [];
    for (let i = 0; i < products.length; i += productsPerPage) {
      result.push(products.slice(i, i + productsPerPage));
    }
    return result;
  }, [products, productsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="py-4 w-full">
      <header className="flex justify-between items-center mb-6 px-4 lg:px-6">
        <h2 className="text-md md:text-2xl font-bold text-center">
          TẤT CẢ SẢN PHẨM
        </h2>
      </header>

      <section className="p-4 lg:p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {chunkedProducts[currentPage - 1]?.map((product) => (
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
            <header className="mb-2">
              <span className="font-medium text-gray-900">{product.pet}</span>
            </header>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              {product.name}
            </h3>
            <Card.Meta description={product.description} />
            <footer className="mt-4">
              <p className="text-lg font-bold text-orange-500">
                {new Intl.NumberFormat("vi-VN", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                }).format(product.price)}{" "}
                VNĐ
              </p>
              <p className="text-sm text-gray-600">
                {product.stock} sản phẩm còn lại
              </p>
              <Link
                href={`${routerNames.PRODUCT_DETAIL.replace("[id]", product.id.toString())}`}
                passHref
              >
                <Button type="primary" className="mt-4 w-full">
                  Mua ngay
                </Button>
              </Link>
            </footer>
          </Card>
        ))}
      </section>

      <div className="flex justify-center mt-4">
        <Pagination
          total={products.length}
          pageSize={productsPerPage}
          onChange={handlePageChange}
          current={currentPage}
          showSizeChanger={false}
          defaultCurrent={1}
        />
      </div>
    </main>
  );
};

export default Product;
