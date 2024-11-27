import React, { useState, useMemo } from "react";
import {
  Card,
  Button,
  Pagination,
  Select,
  Row,
  Col,
  Input,
  Breadcrumb,
} from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import Rabbit1 from "@/assets/images/rabbit1.png";

interface Rabbit {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  coat: string;
  price: string;
  image: string;
  additional_info: {
    health_issues: string;
    exercise_needs: string;
    diet: string;
    training_difficulty: string;
    suitable_for: string;
    care_tips: string;
  };
}

const RabbitList = ({ rabbitsPerPage = 4 }) => {
  const rabbits = useSelector((state: { rabbits: Rabbit[] }) => state.rabbits);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    size: string[];
    temperament: string[];
    lifeSpan: string[];
    priceRange: string[];
    searchQuery: string;
  }>({
    size: [],
    temperament: [],
    lifeSpan: [],
    priceRange: [],
    searchQuery: "",
  });

  const filteredRabbits = useMemo(() => {
    return rabbits.filter((rabbit) => {
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(rabbit.size);

      const lifeSpanMatch =
        filters.lifeSpan.length === 0 ||
        filters.lifeSpan.some((range) => {
          const [min, max] =
            range === "Dưới 8 năm"
              ? [0, 8]
              : range === "8-10 năm"
                ? [8, 10]
                : range === "Trên 10 năm"
                  ? [10, Infinity]
                  : [0, 0];

          const rabbitLifeSpan = parseInt(rabbit.life_span.split("-")[0]);

          return rabbitLifeSpan >= min && rabbitLifeSpan <= max;
        });

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = rabbit.price
            .split("-")
            .map((val) => parseInt(val.replace(/[^\d]/g, "")));
          if (range === "Low") return price[0] < 1000000;
          if (range === "Medium")
            return price[0] >= 1000000 && price[0] < 5000000;
          if (range === "High") return price[0] >= 5000000;
          return false;
        });

      const searchMatch =
        !filters.searchQuery ||
        rabbit.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return sizeMatch && lifeSpanMatch && priceMatch && searchMatch;
    });
  }, [rabbits, filters]);

  const chunkedRabbits = useMemo(() => {
    const result: Rabbit[][] = [];
    for (let i = 0; i < filteredRabbits.length; i += rabbitsPerPage) {
      result.push(filteredRabbits.slice(i, i + rabbitsPerPage));
    }
    return result;
  }, [filteredRabbits, rabbitsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = <K extends keyof typeof filters>(
    filterName: K,
    value: (typeof filters)[K],
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <main className="p-6 w-full mx-auto">
      <Breadcrumb className="mb-6 flex items-center justify-center space-x-4 lg:space-x-8 w-full text-lg">
        <Breadcrumb.Item>
          <Link href={routerNames.HOME}>Trang Chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Danh Mục sản Phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Vật Nuôi</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.RABBIT} className="font-bold">
            Thỏ
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={20} justify="center">
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card className="p-4 rounded-md shadow-lg w-full" title="Bộ Lọc">
            <Input
              placeholder="Tìm kiếm giống thỏ"
              value={filters.searchQuery}
              onChange={(e) =>
                handleFilterChange("searchQuery", e.target.value)
              }
              className="mb-4"
            />
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Kích thước</h4>
              <Select
                mode="multiple"
                placeholder="Chọn kích thước"
                onChange={(value) => handleFilterChange("size", value)}
                value={filters.size}
                className="w-full"
              >
                <Select.Option value="Nhỏ">Nhỏ</Select.Option>
                <Select.Option value="Vừa">Trung bình</Select.Option>
                <Select.Option value="Lớn">Lớn</Select.Option>
              </Select>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tuổi thọ</h4>
              <Select
                mode="multiple"
                placeholder="Chọn tuổi thọ"
                onChange={(value) => handleFilterChange("lifeSpan", value)}
                value={filters.lifeSpan}
                className="w-full"
              >
                <Select.Option value="Dưới 8 năm">Dưới 8 năm</Select.Option>
                <Select.Option value="8-10 năm">8-10 năm</Select.Option>
                <Select.Option value="Trên 10 năm">Trên 10 năm</Select.Option>
              </Select>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Khoảng giá</h4>
              <Select
                mode="multiple"
                placeholder="Chọn khoảng giá"
                onChange={(value) => handleFilterChange("priceRange", value)}
                value={filters.priceRange}
                className="w-full"
              >
                <Select.Option value="Low">Dưới 1 triệu</Select.Option>
                <Select.Option value="Medium">1 triệu - 5 triệu</Select.Option>
                <Select.Option value="High">Hơn 5 triệu</Select.Option>
              </Select>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={18}>
          <header className="flex justify-center items-center py-4 px-6 bg-gradient-to-r from-blue-200 to-indigo-500 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Các Giống Thỏ
              </h2>{" "}
              <Image
                src={Rabbit1}
                alt="Rabbit"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </header>
          <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {chunkedRabbits[currentPage - 1]?.map((rabbit) => (
              <Card
                key={rabbit.id}
                hoverable
                className="relative shadow-lg rounded-lg overflow-hidden group transition-transform duration-500 ease-in-out transform hover:scale-105"
                cover={
                  <Image
                    alt={rabbit.name}
                    src={rabbit.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                }
              >
                <div className="p-2 md:p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {rabbit.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Giá: {rabbit.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-xl mb-4 text-center">
                    {rabbit.name}
                  </h3>

                  <p className="mb-4">
                    <strong>Lông:</strong> {rabbit.coat}
                  </p>

                  <p className="mb-4">
                    <strong>Tuổi thọ:</strong> {rabbit.life_span}
                  </p>

                  <p className="mb-4">
                    <strong>Cân nặng:</strong> {rabbit.weight_range}
                  </p>

                  <p className="mb-4">
                    <strong>Tính cách:</strong> {rabbit.temperament.join(", ")}
                  </p>

                  <p className="mb-4">
                    <strong>Giá:</strong> {rabbit.price} VNĐ
                  </p>

                  <Link
                    href={`${routerNames.RABBIT_DETAIL.replace(
                      "[id]",
                      rabbit.id.toString(),
                    )}`}
                  >
                    <Button
                      type="primary"
                      block
                      className="mb-4 py-4 px-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                      Xem chi tiết
                    </Button>
                  </Link>

                  <Link href={routerNames.CONTACT} className="mt-4">
                    <Button
                      type="default"
                      block
                      className="py-4 px-6 rounded-lg text-lg font-semibold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                      Liên hệ
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </section>
          <div className="flex justify-center">
            <Pagination
              current={currentPage}
              onChange={handlePageChange}
              pageSize={rabbitsPerPage}
              total={filteredRabbits.length}
              showSizeChanger={false}
              className="mt-6"
            />
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default RabbitList;
