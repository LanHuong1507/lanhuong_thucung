import React, { useMemo, useState } from "react";
import { Card, Button, Pagination, Select, Checkbox, Row, Col } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";

interface Dog {
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
  }>({
    size: [],
    temperament: [],
    lifeSpan: [],
    weightRange: [],
    priceRange: [],
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

      return (
        sizeMatch &&
        temperamentMatch &&
        lifeSpanMatch &&
        weightMatch &&
        priceMatch
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

  const handleFilterChange = (filterName: string, value: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <main className="py-4 w-full lg:max-w-7xl mx-auto">
      <Row gutter={10} justify="center">
        <Col xs={20} sm={6} md={6} lg={6}>
          <Card className="p-4 rounded-md shadow-md" title="Bộ Lọc">
            <div className="mb-4">
              <h4 className="font-semibold">Kích thước</h4>
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
              <h4 className="font-semibold">Tính cách</h4>
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
              <h4 className="font-semibold">Tuổi thọ</h4>
              <Select
                mode="multiple"
                placeholder="Chọn tuổi thọ"
                onChange={(value) => handleFilterChange("lifeSpan", value)}
                value={filters.lifeSpan}
                className="w-full"
              >
                <Select.Option value="10-12 năm">10-12 năm</Select.Option>
                <Select.Option value="12-15 năm">12-15 năm</Select.Option>
                <Select.Option value="15-20 năm">15-20 năm</Select.Option>
              </Select>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Cân nặng</h4>
              <Checkbox.Group
                options={[
                  { label: "Nhỏ (dưới 10kg)", value: "Nhỏ (dưới 10kg)" },
                  { label: "Vừa (10-20kg)", value: "Vừa (10-20kg)" },
                  { label: "Lớn (trên 20kg)", value: "Lớn (trên 20kg)" },
                ]}
                onChange={(value) => handleFilterChange("weightRange", value)}
                value={filters.weightRange}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Giá bán</h4>
              <Checkbox.Group
                options={[
                  { label: "Dưới 5 triệu", value: "Low" },
                  { label: "Từ 5 triệu đến 15 triệu", value: "Medium" },
                  { label: "Trên 15 triệu", value: "High" },
                ]}
                onChange={(value) => handleFilterChange("priceRange", value)}
                value={filters.priceRange}
              />
            </div>
          </Card>
        </Col>

        <Col xs={20} lg={18}>
          <header className="flex justify-center py-6 px-4">
            <h2 className="text-md md:text-2xl font-bold text-center">
              CÁC GIỐNG CHÓ
            </h2>
          </header>

          <section className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-items-center">
            {chunkedDogs[currentPage - 1]?.map((dog) => (
              <Card
                key={dog.id}
                hoverable
                cover={
                  <Image
                    alt={dog.name}
                    src={dog.image}
                    layout="responsive"
                    width={400}
                    height={400}
                  />
                }
                className="w-full flex-shrink-0"
              >
                <header className="mb-2">
                  <span className="font-medium text-gray-900">
                    {dog.origin}
                  </span>
                </header>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {dog.name}
                </h3>
                <Card.Meta description={`Kích thước: ${dog.size}`} />
                <Card.Meta description={`Tuổi thọ: ${dog.life_span}`} />
                <Card.Meta description={`Cân nặng: ${dog.weight_range}`} />
                <Card.Meta description={`Loại lông: ${dog.coat}`} />
                <Card.Meta
                  description={`Tính cách: ${dog.temperament.join(", ")}`}
                />
                <footer className="mt-4">
                  <p className="text-base font-semibold">
                    Giá bán: {dog.price} VNĐ
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    Nếu bạn muốn mua, vui lòng{" "}
                    <strong>liên hệ chúng tôi</strong> để nhận được ưu đãi và tư
                    vấn tốt nhất.
                  </p>
                  <Button type="primary" className="mt-4 w-full">
                    Liên hệ ngay
                  </Button>
                </footer>
              </Card>
            ))}
          </section>

          <div className="flex justify-center mt-4">
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
