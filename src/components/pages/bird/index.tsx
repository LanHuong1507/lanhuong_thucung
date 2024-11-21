import React, { useMemo, useState } from "react";
import {
  Card,
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

interface Bird {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  color: string;
  price: string;
  image: string;
}

const BirdList = ({ birdsPerPage = 6 }) => {
  const birds = useSelector((state: { birds: Bird[] }) => state.birds);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    size: string[];
    weightRange: string[];
    priceRange: string[];
    temperament: string[];
    color: string[];
  }>({
    size: [],
    weightRange: [],
    priceRange: [],
    temperament: [],
    color: [],
  });

  const filteredBirds = useMemo(() => {
    return birds.filter((bird) => {
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(bird.size);

      const weightMatch =
        filters.weightRange.length === 0 ||
        filters.weightRange.some((range) => {
          const [min, max] =
            range === "Nhẹ (dưới 50g)"
              ? [0, 50]
              : range === "Trung bình (50-100g)"
                ? [50, 100]
                : range === "Nặng (trên 100g)"
                  ? [100, Infinity]
                  : [0, 0];

          const [birdMin, birdMax] = bird.weight_range
            .replace(" g", "")
            .split("-")
            .map((w) => parseFloat(w));

          return birdMin >= min && birdMax <= max;
        });

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = bird.price
            .split("-")
            .map((val) => parseInt(val.replace(/[^\d]/g, "")));
          if (range === "Low") return price[0] < 500000;
          if (range === "Medium")
            return price[0] >= 500000 && price[0] <= 2000000;
          if (range === "High") return price[0] > 2000000;
          return false;
        });

      const temperamentMatch =
        filters.temperament.length === 0 ||
        filters.temperament.every((item) => bird.temperament.includes(item));

      const colorMatch =
        filters.color.length === 0 ||
        filters.color.some((color) => bird.color.includes(color));

      return (
        sizeMatch && weightMatch && priceMatch && temperamentMatch && colorMatch
      );
    });
  }, [birds, filters]);

  const chunkedBirds = useMemo(() => {
    const result: Bird[][] = [];
    for (let i = 0; i < filteredBirds.length; i += birdsPerPage) {
      result.push(filteredBirds.slice(i, i + birdsPerPage));
    }
    return result;
  }, [filteredBirds, birdsPerPage]);

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
          <Link href={routerNames.CATEGORY}>DANH MỤC SẢN PHẨM</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CATEGORY}>THÚ CƯNG</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>CHIM</Breadcrumb.Item>
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
              <h4 className="font-semibold mb-2">Cân nặng</h4>
              <Checkbox.Group
                options={[
                  { label: "Nhẹ (dưới 50g)", value: "Nhẹ (dưới 50g)" },
                  {
                    label: "Trung bình (50-100g)",
                    value: "Trung bình (50-100g)",
                  },
                  { label: "Nặng (trên 100g)", value: "Nặng (trên 100g)" },
                ]}
                onChange={(value) => handleFilterChange("weightRange", value)}
                value={filters.weightRange}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Giá</h4>
              <Radio.Group
                onChange={(e) =>
                  handleFilterChange("priceRange", [e.target.value])
                }
                value={filters.priceRange[0]}
              >
                <Radio value="Low">Dưới 500.000 VNĐ</Radio>
                <Radio value="Medium">500.000 - 2.000.000 VNĐ</Radio>
                <Radio value="High">Trên 2.000.000 VNĐ</Radio>
              </Radio.Group>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tính cách</h4>
              <Checkbox.Group
                options={[
                  { label: "Hoạt bát", value: "Hoạt bát" },
                  { label: "Thân thiện", value: "Thân thiện" },
                  { label: "Thích hót", value: "Thích hót" },
                  { label: "Thông minh", value: "Thông minh" },
                ]}
                onChange={(value) => handleFilterChange("temperament", value)}
                value={filters.temperament}
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Màu sắc</h4>
              <Checkbox.Group
                options={[
                  { label: "Đen", value: "Đen" },
                  { label: "Trắng", value: "Trắng" },
                  { label: "Cam", value: "Cam" },
                  { label: "Vàng", value: "Vàng" },
                  { label: "Xanh", value: "Xanh" },
                  { label: "Đỏ", value: "Đỏ" },
                  { label: "Nâu", value: "Nâu" },
                  { label: "Xám", value: "Xám" },
                ]}
                onChange={(value) => handleFilterChange("color", value)}
                value={filters.color}
              />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={18}>
          <section className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {chunkedBirds[currentPage - 1]?.map((bird) => (
              <Card
                key={bird.id}
                hoverable
                cover={
                  <Image
                    alt={bird.name}
                    src={bird.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                }
                className="relative w-full shadow-lg rounded-lg overflow-hidden group"
              >
                <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800">
                    {bird.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    Giá bán: {bird.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col justify-center items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>Kích thước: {bird.size}</p>
                  <p>Cân nặng: {bird.weight_range}</p>
                  <p>Tuổi thọ: {bird.life_span}</p>
                  <p>Màu sắc: {bird.color}</p>
                  <p>Tính cách: {bird.temperament.join(", ")}</p>
                </div>
              </Card>
            ))}
          </section>

          <div className="flex justify-center mt-6">
            <Pagination
              total={filteredBirds.length}
              pageSize={birdsPerPage}
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

export default BirdList;
