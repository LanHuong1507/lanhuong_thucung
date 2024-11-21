import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
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
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  size_range: string;
  temperament: string[];
  life_span: string;
  color: string;
  price: string;
  image: string;
}

const FishList = ({ fishesPerPage = 6 }) => {
  // Accessing the 'fish' data from the Redux store
  const fishes = useSelector((state: RootState) => state.fish); // Access fish state from Redux

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{
    size: string[];
    priceRange: string[];
    temperament: string[];
    color: string[];
    lengthRange: [number, number];
    lifeSpanRange: [number, number];
  }>({
    size: [],
    priceRange: [],
    temperament: [],
    color: [],
    lengthRange: [0, 100], // Default to all lengths
    lifeSpanRange: [0, 10], // Default to all lifespan values
  });

  // Function to parse price and check if it matches filter range
  const parsePrice = (price: string) => {
    const priceParts = price
      .split("-")
      .map((val) => parseInt(val.replace(/[^\d]/g, "")));
    return priceParts[0]; // Only use the first part of the price range
  };

  // Filtering the fishes based on the selected filters
  const filteredFishes = useMemo(() => {
    if (!fishes || fishes.length === 0) {
      return [];
    }

    return fishes.filter((fish) => {
      const sizeMatch =
        filters.size.length === 0 || filters.size.includes(fish.size);

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = parsePrice(fish.price);
          if (range === "Low") return price < 100000;
          if (range === "Medium") return price >= 100000 && price <= 500000;
          if (range === "High") return price > 500000;
          return false;
        });

      const temperamentMatch =
        filters.temperament.length === 0 ||
        filters.temperament.every((item) => fish.temperament.includes(item));

      const colorMatch =
        filters.color.length === 0 ||
        filters.color.some((color) => fish.color.includes(color));

      const lengthMatch =
        fish.size_range &&
        fish.size_range.length >= filters.lengthRange[0] &&
        fish.size_range.length <= filters.lengthRange[1];

      const lifeSpanMatch =
        fish.life_span &&
        parseInt(fish.life_span.split(" ")[0]) >= filters.lifeSpanRange[0] &&
        parseInt(fish.life_span.split(" ")[0]) <= filters.lifeSpanRange[1];

      return (
        sizeMatch &&
        priceMatch &&
        temperamentMatch &&
        colorMatch &&
        lengthMatch &&
        lifeSpanMatch
      );
    });
  }, [fishes, filters]);

  // Paginate the filtered fishes
  const chunkedFishes = useMemo(() => {
    const result: Fish[][] = [];
    for (let i = 0; i < filteredFishes.length; i += fishesPerPage) {
      result.push(filteredFishes.slice(i, i + fishesPerPage));
    }
    return result;
  }, [filteredFishes, fishesPerPage]);

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
          <Link href={routerNames.CATEGORY}>VẬT NUÔI</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>CÁ</Breadcrumb.Item>
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
              <h4 className="font-semibold mb-2">Giá</h4>
              <Radio.Group
                onChange={(e) =>
                  handleFilterChange("priceRange", [e.target.value])
                }
                value={filters.priceRange[0]}
              >
                <Radio value="Low">Dưới 100.000 VNĐ</Radio>
                <Radio value="Medium">100.000 - 500.000 VNĐ</Radio>
                <Radio value="High">Trên 500.000 VNĐ</Radio>
              </Radio.Group>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tính cách</h4>
              <Checkbox.Group
                options={[
                  { label: "Hiếu chiến", value: "Hiếu chiến" },
                  { label: "Dễ chăm sóc", value: "Dễ chăm sóc" },
                  { label: "Sặc sỡ", value: "Sặc sỡ" },
                ]}
                onChange={(value) => handleFilterChange("temperament", value)}
                value={filters.temperament}
              />
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Màu sắc</h4>
              <Checkbox.Group
                options={[
                  { label: "Đỏ", value: "Đỏ" },
                  { label: "Xanh", value: "Xanh" },
                  { label: "Tím", value: "Tím" },
                  { label: "Trắng", value: "Trắng" },
                ]}
                onChange={(value) => handleFilterChange("color", value)}
                value={filters.color}
              />
            </div>

           
          </Card>
        </Col>

        <Col xs={24} lg={18}>
          <section className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {chunkedFishes[currentPage - 1]?.map((fish) => (
              <Card
                key={fish.id}
                hoverable
                cover={
                  <Image
                    alt={fish.name}
                    src={fish.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                }
                className="relative w-full shadow-lg rounded-lg overflow-hidden group"
              >
                <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800">
                    {fish.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    Giá bán: {fish.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col justify-center items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>Kích thước: {fish.size_range}</p>
                  <p>Màu sắc: {fish.color}</p>
                  <p>Tuổi thọ: {fish.life_span}</p>
                  <p>Chiều dài: {fish.size_range}</p>
                </div>
              </Card>
            ))}
          </section>
          <Pagination
            current={currentPage}
            total={filteredFishes.length}
            pageSize={fishesPerPage}
            onChange={handlePageChange}
            className="text-center flex justify-center"
          />
        </Col>
      </Row>
    </main>
  );
};

export default FishList;
