import React, { useMemo, useState } from "react";
import {
  Card,
  Button,
  Pagination,
  Select,
  InputNumber,
  Row,
  Col,
  Space,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <main className="p-4 w-full mx-auto">
      <Row gutter={[16, 16]}>
        <Col xs={20} md={6}>
          <Card title="Bộ lọc" bordered={false}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Title level={5}>Lọc theo thú cưng:</Title>
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
                <Title level={5}>Lọc theo danh mục:</Title>
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
                <Title level={5}>Lọc theo giá:</Title>
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    <InputNumber
                      placeholder="Giá thấp nhất"
                      className="w-full"
                      onChange={(value) =>
                        handleFilterChange("minPrice", value || 0)
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <InputNumber
                      placeholder="Giá cao nhất"
                      className="w-full"
                      onChange={(value) =>
                        handleFilterChange("maxPrice", value || Infinity)
                      }
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={5}>Sản phẩm bán chạy:</Title>
                <Button
                  type={filter.bestSeller ? "primary" : "default"}
                  onClick={() =>
                    handleFilterChange("bestSeller", !filter.bestSeller)
                  }
                >
                  {filter.bestSeller ? "Hiển thị tất cả" : "Chỉ bán chạy"}
                </Button>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={18} lg={16}>
          <header className="mb-6 text-center">
            <Title level={3}>Sản phẩm phù hợp với yêu cầu của bạn</Title>
          </header>

          <Row gutter={[16, 16]}>
            {chunkedProducts[currentPage - 1]?.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <Card
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
                >
                  <header className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">
                      {product.name} - {product.category}
                    </h3>
                  </header>
                  <Card.Meta description={product.description} />
                  <footer className="mt-4">
                    <p className="text-base font-bold text-orange-500">
                      {new Intl.NumberFormat("vi-VN", {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3,
                      }).format(product.price)}{" "}
                      VNĐ
                    </p>
                    <p className="text-sm text-gray-600">
                      Còn {product.stock} sản phẩm còn lại
                    </p>
                    <Link
                      href={`${routerNames.PRODUCT_DETAIL.replace(
                        "[id]",
                        product.id.toString(),
                      )}`}
                      passHref
                    >
                      <Button type="primary" className="mt-4 w-full">
                        Mua ngay
                      </Button>
                    </Link>
                  </footer>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="flex justify-center mt-4">
            <Pagination
              total={filteredProducts.length}
              pageSize={productsPerPage}
              onChange={handlePageChange}
              current={currentPage}
              showSizeChanger={false}
              defaultCurrent={1}
            />
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Product;
