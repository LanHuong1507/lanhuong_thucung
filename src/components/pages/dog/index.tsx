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
  }>({
    size: [],
    temperament: [],
  });

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(dog.size);

      const temperamentMatch =
        filters.temperament.length === 0 ||
        filters.temperament.every((item) => dog.temperament.includes(item));

      return sizeMatch && temperamentMatch;
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
    <main className="py-4 w-full max-w-7xl mx-auto">
      <Row gutter={12} justify="center">
        <Col xs={24} sm={6} md={6} lg={6}>
          <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h3 className="font-bold mb-4">Bộ Lọc</h3>
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
          </div>
        </Col>

        <Col xs={24} lg={18}>
          <header className="flex justify-center py-6 px-4">
            <h2 className="text-md md:text-2xl font-bold text-center">
              CÁC GIỐNG CHÓ
            </h2>
          </header>

          <section className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 justify-items-center">
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
                <Card.Meta description={`Dải cân nặng: ${dog.weight_range}`} />
                <Card.Meta description={`Loại lông: ${dog.coat}`} />
                <Card.Meta
                  description={`Tính cách: ${dog.temperament.join(", ")}`}
                />
                <footer className="mt-4">
                  <p className="text-base font-semibold">
                    Giá bán từ:{" "}
                    {new Intl.NumberFormat("vi-VN").format(
                      parseInt(dog.price.split("-")[0].replace(/[^\d]/g, "")),
                    )}{" "}
                    VNĐ -{" "}
                    {new Intl.NumberFormat("vi-VN").format(
                      parseInt(dog.price.split("-")[1].replace(/[^\d]/g, "")),
                    )}{" "}
                    VNĐ
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    Nếu bạn muốn mua, vui lòng{" "}
                    <strong>liên hệ chúng tôi</strong>.
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
