import React, { useMemo, useState } from "react";
import {
  Card,
  Button,
  Pagination,
  Select,
  Row,
  Col,
  Breadcrumb,
  Input,
} from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import Fish1 from "@/assets/images/fish1.png";
interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  size_range: string;
  color: string[];
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

const FishList = ({ fishPerPage = 4 }) => {
  const fish = useSelector((state: { fish: Fish[] }) => state.fish);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    size: string[];
    temperament: string[];
    lifeSpan: string[];
    priceRange: string[];
    color: string[];
    breedType: string;
    searchQuery: string;
  }>({
    size: [],
    temperament: [],
    lifeSpan: [],
    priceRange: [],
    color: [],
    breedType: "",
    searchQuery: "",
  });

  const filteredFish = useMemo(() => {
    return fish.filter((fish) => {
      const sizeMatch =
        filters.size.length === 0 ||
        filters.size.some((filterSize) =>
          fish.size
            .split(",")
            .some((fishSize) => fishSize.trim() === filterSize),
        );

      const lifeSpanMatch =
        filters.lifeSpan.length === 0 ||
        filters.lifeSpan.some((range) => {
          const [min, max] =
            range === "Dưới 10 năm"
              ? [0, 10]
              : range === "10-15 năm"
                ? [10, 15]
                : range === "Trên 15 năm"
                  ? [15, Infinity]
                  : [0, 0];

          const fishLifeSpan = parseInt(fish.life_span.split("-")[0]);

          return fishLifeSpan >= min && fishLifeSpan <= max;
        });

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = fish.price
            .split("-")
            .map((val) => parseInt(val.replace(/[^\d]/g, "")));
          if (range === "Low") return price[0] < 100000;
          if (range === "Medium")
            return price[0] >= 100000 && price[0] < 500000;
          if (range === "High") return price[0] >= 500000;
          return false;
        });

      const searchMatch =
        !filters.searchQuery ||
        fish.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return sizeMatch && lifeSpanMatch && priceMatch && searchMatch;
    });
  }, [fish, filters]);

  const chunkedFish = useMemo(() => {
    const result: Fish[][] = [];
    for (let i = 0; i < filteredFish.length; i += fishPerPage) {
      result.push(filteredFish.slice(i, i + fishPerPage));
    }
    return result;
  }, [filteredFish, fishPerPage]);

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
          <Link href={routerNames.FISH} className="font-bold">
            Cá
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={20} justify="center">
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card className="p-4 rounded-md shadow-lg w-full" title="Bộ Lọc">
            <Input
              placeholder="Tìm kiếm giống cá"
              value={filters.searchQuery}
              onChange={(e) =>
                handleFilterChange("searchQuery", e.target.value)
              }
              className="mb-4 text-base"
            />
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Kích thước</h4>{" "}
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
              <h4 className="font-semibold text-lg mb-2">Tuổi thọ</h4>{" "}
              <Select
                mode="multiple"
                placeholder="Chọn tuổi thọ"
                onChange={(value) => handleFilterChange("lifeSpan", value)}
                value={filters.lifeSpan}
                className="w-full"
              >
                <Select.Option value="Dưới 10 năm">Dưới 5 năm</Select.Option>
                <Select.Option value="10-15 năm">5-10 năm</Select.Option>
                <Select.Option value="Trên 15 năm">Trên 10 năm</Select.Option>
              </Select>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2">Khoảng giá</h4>{" "}
              <Select
                mode="multiple"
                placeholder="Chọn khoảng giá"
                onChange={(value) => handleFilterChange("priceRange", value)}
                value={filters.priceRange}
                className="w-full"
              >
                <Select.Option value="Low">Dưới 100 ngàn</Select.Option>
                <Select.Option value="Medium">
                  Trên 100 ngàn - Dưới 500 ngàn
                </Select.Option>
                <Select.Option value="High">Trên 500 ngàn</Select.Option>
              </Select>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={18}>
          <header className="my-4 lg:mb-2 flex justify-center items-center py-4 px-6 bg-gradient-to-r from-blue-200 to-indigo-500 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                Các Giống Cá
              </h2>{" "}
              <Image
                src={Fish1}
                alt="Fish"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </header>

          <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {chunkedFish[currentPage - 1]?.map((fish) => (
              <Card
                key={fish.id}
                hoverable
                className="relative shadow-lg rounded-lg overflow-hidden group transition-transform duration-500 ease-in-out transform hover:scale-105"
                cover={
                  <Image
                    alt={fish.name}
                    src={fish.image}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                }
              >
                <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {fish.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Giá: {fish.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-xl mb-4 text-center">
                    {fish.name}
                  </h3>
                  <p className="mb-4 text-sm md:text-base lg:text-lg">
                    <strong>Màu sắc: </strong>
                    <span>{fish.color.join(", ")}</span>
                  </p>
                  <p className="mb-4 text-sm md:text-base lg:text-lg">
                    <strong>Kích thước: </strong>
                    <span>{fish.size_range}</span>
                  </p>
                  <p className="mb-4 text-sm md:text-base lg:text-lg">
                    <strong>Tuổi thọ:</strong> <span>{fish.life_span}</span>
                  </p>
                  <p className="mb-4 text-sm md:text-base lg:text-lg">
                    <strong>Giá: </strong>
                    <span>{fish.price}</span>
                  </p>
                  <p className="mb-4 text-sm md:text-base lg:text-lg">
                    <strong>Xuất xứ:</strong> <span>{fish.origin}</span>
                  </p>
                  <div className="mt-0 md:mt-4 flex flex-col w-full space-y-4">
                    {" "}
                    {/* Added space between buttons */}
                    <Link
                      href={`${routerNames.FISH_DETAIL.replace(
                        "[id]",
                        fish.id.toString(),
                      )}`}
                    >
                      <Button
                        type="primary"
                        block
                        className="w-full text-center py-4 md:py-6 rounded-lg text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Xem chi tiết
                      </Button>
                    </Link>
                    <Link href={routerNames.CONTACT}>
                      <Button
                        type="primary"
                        block
                        className="w-full text-center py-4 md:py-6 rounded-lg text-white text-lg font-semibold bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Liên hệ ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <Pagination
            current={currentPage}
            total={filteredFish.length}
            pageSize={fishPerPage}
            onChange={handlePageChange}
            className="flex justify-center mt-6"
          />
        </Col>
      </Row>
    </main>
  );
};

export default FishList;
