import React, { useMemo, useState } from "react";
import { Button, Pagination, Select, InputNumber, Typography } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import { routerNames } from "@/components/constants/router.constant";

const { Option } = Select;
const { Title } = Typography;

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pet: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  best_seller: boolean;
}

const Product = ({ productsPerPage = 8 }) => {
  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    pet: "",
    category: "",
    minPrice: 0,
    maxPrice: Infinity,
    bestSeller: false,
  });

  const handleFilterChange = (
    key: string,
    value: string | number | boolean,
  ) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (filter.pet ? product.pet === filter.pet : true) &&
        (filter.category ? product.category === filter.category : true) &&
        product.price >= filter.minPrice &&
        product.price <= (filter.maxPrice || Infinity) &&
        (!filter.bestSeller || product.best_seller)
      );
    });
  }, [products, filter]);

  const chunkedProducts = useMemo(() => {
    const result: Product[][] = [];
    for (let i = 0; i < filteredProducts.length; i += productsPerPage) {
      result.push(filteredProducts.slice(i, i + productsPerPage));
    }
    return result;
  }, [filteredProducts, productsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(`${product.name} đã được thêm vào giỏ hàng.`);
  };

  const handleProductClick = (productId: number) => {
    window.location.href = `${routerNames.PRODUCT_DETAIL.replace(
      "[id]",
      productId.toString(),
    )}`;
  };

  return (
    <main className="p-4 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="bg-white shadow-md rounded-lg p-4">
          <Title level={5} className="text-xl font-semibold mb-4">
            Bộ lọc
          </Title>
          <div className="space-y-6">
            <div>
              <Title level={5} className="text-lg">
                Lọc theo thú cưng:
              </Title>
              <Select
                placeholder="Chọn thú cưng"
                className="w-full"
                onChange={(value) => handleFilterChange("pet", value)}
              >
                <Option value="">Tất cả</Option>
                <Option value="Chó">Chó</Option>
                <Option value="Mèo">Mèo</Option>
                <Option value="Cá">Cá</Option>
                <Option value="Thỏ">Thỏ</Option>
                <Option value="Rùa">Rùa</Option>
                <Option value="Chim">Chim</Option>
              </Select>
            </div>

            <div>
              <Title level={5} className="text-lg">
                Lọc theo danh mục:
              </Title>
              <Select
                placeholder="Chọn danh mục"
                className="w-full"
                onChange={(value) => handleFilterChange("category", value)}
              >
                <Option value="">Tất cả</Option>
                <Option value="Thức ăn">Thức ăn</Option>
                <Option value="Dụng cụ chăm sóc">Dụng cụ chăm sóc</Option>
                <Option value="Phụ kiện">Phụ kiện</Option>
                <Option value="Đồ chơi">Đồ chơi</Option>
                <Option value="Khác">Khác</Option>
              </Select>
            </div>

            <div>
              <Title level={5} className="text-lg">
                Lọc theo giá:
              </Title>
              <div className="flex gap-4">
                <InputNumber
                  placeholder="Giá thấp nhất"
                  className="w-full"
                  onChange={(value) =>
                    handleFilterChange("minPrice", value || 0)
                  }
                />
                <InputNumber
                  placeholder="Giá cao nhất"
                  className="w-full"
                  onChange={(value) =>
                    handleFilterChange("maxPrice", value || Infinity)
                  }
                />
              </div>
            </div>

            <div>
              <Title level={5} className="text-lg">
                Sản phẩm bán chạy:
              </Title>
              <Button
                type={filter.bestSeller ? "primary" : "default"}
                className="w-full"
                onClick={() =>
                  handleFilterChange("bestSeller", !filter.bestSeller)
                }
              >
                {filter.bestSeller ? "Hiển thị tất cả" : "Chỉ bán chạy"}
              </Button>
            </div>
          </div>
        </aside>
        <section className="col-span-3">
          <header className="mb-6 text-center">
            <Title level={3} className="text-2xl font-bold">
              Sản phẩm phù hợp với yêu cầu của bạn
            </Title>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chunkedProducts[currentPage - 1]?.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    alt={product.name}
                    src={product.image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 text-orange-500 font-bold">
                  {new Intl.NumberFormat("vi-VN", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  }).format(product.price)}{" "}
                  VNĐ
                </p>

                <p className="text-sm text-gray-500">
                  Còn {product.stock} sản phẩm
                </p>

                <div className="flex justify-between mt-4">
                  <Button
                    type="primary"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Pagination
              total={filteredProducts.length}
              pageSize={productsPerPage}
              onChange={handlePageChange}
              current={currentPage}
              showSizeChanger={false}
              defaultCurrent={1}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;
