import React, { useMemo, useState } from "react";
import {
  Card,
  Button,
  Pagination,
  Select,
  Checkbox,
  Row,
  Col,
  Radio,
  Breadcrumb,
} from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";

interface Dog {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  coat: string;
  color: string;
  breedType: string;
  gender: string;
  price: string;
  image: string;
  thumbnail: string[];
}

const DogList = ({ dogsPerPage = 6 }) => {
  const dogs = useSelector((state: { dogs: Dog[] }) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    size: string[];
    temperament: string[];
    lifeSpan: string[];
    weightRange: string[];
    priceRange: string[];
    color: string[];
    breedType: string;
    gender: string;
  }>({
    size: [],
    temperament: [],
    lifeSpan: [],
    weightRange: [],
    priceRange: [],
    color: [],
    breedType: "",
    gender: "",
  });

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(dog.size);

      const temperamentMatch =
        filters.temperament.length === 0 ||
        filters.temperament.every((item) => dog.temperament.includes(item));

      const lifeSpanMatch =
        filters.lifeSpan.length === 0 ||
        filters.lifeSpan.includes(dog.life_span);

      const weightMatch =
        filters.weightRange.length === 0 ||
        filters.weightRange.some((range) => {
          const [min, max] =
            range === "Nhỏ (dưới 10kg)"
              ? [0, 10]
              : range === "Vừa (10-20kg)"
                ? [10, 20]
                : range === "Lớn (trên 20kg)"
                  ? [20, Infinity]
                  : [0, 0];

          const [dogMin, dogMax] = dog.weight_range
            .replace(" kg", "")
            .split("-")
            .map((w) => parseFloat(w));

          return dogMin >= min && dogMax <= max;
        });

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = dog.price
            .split("-")
            .map((val) => parseInt(val.replace(/[^\d]/g, "")));
          if (range === "Low") return price[0] < 5000000;
          if (range === "Medium")
            return price[0] >= 5000000 && price[0] < 15000000;
          if (range === "High") return price[0] >= 15000000;
          return false;
        });

      const colorMatch =
        filters.color.length === 0 || filters.color.includes(dog.color);

      const breedTypeMatch =
        !filters.breedType || filters.breedType === dog.breedType;

      const genderMatch = !filters.gender || filters.gender === dog.gender;

      return (
        sizeMatch &&
        temperamentMatch &&
        lifeSpanMatch &&
        weightMatch &&
        priceMatch &&
        colorMatch &&
        breedTypeMatch &&
        genderMatch
      );
    });
  }, [dogs, filters]);

  const chunkedDogs = useMemo(() => {
    const result: Dog[][] = [];
    for (let i = 0; i < filteredDogs.length; i += dogsPerPage) {
      result.push(filteredDogs.slice(i, i + dogsPerPage));
    }
    return result;
  }, [filteredDogs, dogsPerPage]);

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
    <main className="p-6 w-full lg:max-w-7xl mx-auto">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item>
          <Link href={routerNames.HOME}>Trang Chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Danh Mục sản Phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>Thú Cưng</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Chó</Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={20} justify="center">
        <Col xs={24} sm={6} md={6} lg={6}>
          <Card className="p-2 rounded-md shadow-lg" title="Bộ Lọc">
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
                <Select.Option value="Vừa">Vừa</Select.Option>
                <Select.Option value="Lớn">Lớn</Select.Option>
              </Select>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tính cách</h4>
              <Checkbox.Group
                options={[
                  { label: "Trung thành", value: "Trung thành" },
                  { label: "Năng động", value: "Năng động" },
                  { label: "Cảnh giác", value: "Cảnh giác" },
                  { label: "Hiền lành", value: "Hiền lành" },
                  { label: "Vui vẻ", value: "Vui vẻ" },
                ]}
                onChange={(value) => handleFilterChange("temperament", value)}
                value={filters.temperament}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Màu lông</h4>
              <Checkbox.Group
                options={[
                  { label: "Trắng", value: "Trắng" },
                  { label: "Đen", value: "Đen" },
                  { label: "Vàng", value: "Vàng" },
                  { label: "Nâu", value: "Nâu" },
                  { label: "Xám", value: "Xám" },
                ]}
                onChange={(value) => handleFilterChange("color", value)}
                value={filters.color}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Giống</h4>
              <Radio.Group
                onChange={(e) =>
                  handleFilterChange("breedType", e.target.value)
                }
                value={filters.breedType}
              >
                <Radio value="">Tất cả</Radio>
                <Radio value="Thuần chủng">Thuần chủng</Radio>
                <Radio value="Lai">Lai</Radio>
              </Radio.Group>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Giới tính</h4>
              <Radio.Group
                onChange={(e) => handleFilterChange("gender", e.target.value)}
                value={filters.gender}
              >
                <Radio value="">Tất cả</Radio>
                <Radio value="Đực">Đực</Radio>
                <Radio value="Cái">Cái</Radio>
              </Radio.Group>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={18}>
          <header className="flex justify-center py-6 px-4">
            <h2 className="text-lg md:text-2xl font-bold text-center">
              Các Giống Chó
            </h2>
          </header>

          <section className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {chunkedDogs[currentPage - 1]?.map((dog) => (
              <Card
                key={dog.id}
                hoverable
                cover={
                  <Image
                    alt={dog.name}
                    src={dog.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                }
                className="relative w-full shadow-lg rounded-lg overflow-hidden group"
              >
                <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800">
                    {dog.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    Giá bán: {dog.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col justify-center items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-2">
                    <span className="text-gray-600">{dog.origin}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Kích thước: {dog.size}
                  </p>
                  <p className="text-sm text-gray-600">
                    Tuổi thọ: {dog.life_span}
                  </p>
                  <p className="text-sm text-gray-600">
                    Cân nặng: {dog.weight_range}
                  </p>
                  <p className="text-sm text-gray-600">Loại lông: {dog.coat}</p>
                  <p className="text-sm text-gray-600">
                    Tính cách: {dog.temperament.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600">Màu lông: {dog.color}</p>
                  <p className="text-sm text-gray-600">
                    Giống: {dog.breedType}
                  </p>
                  <p className="text-sm text-gray-600">
                    Giới tính: {dog.gender}
                  </p>
                  <div className=" mt-2 flex flex-col gap-4 w-full">
                    <Link
                      href={`${routerNames.DOG_DETAIL.replace(
                        "[id]",
                        dog.id.toString(),
                      )}`}
                    >
                      <Button
                        type="primary"
                        block
                        className="w-full text-center"
                      >
                        Xem chi tiết
                      </Button>
                    </Link>

                    <Button type="primary" block className="w-full text-center">
                      Liên hệ ngay
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <div className="flex justify-center mt-6">
            <Pagination
              total={filteredDogs.length}
              pageSize={dogsPerPage}
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

export default DogList;
