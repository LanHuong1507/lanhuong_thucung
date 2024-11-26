import React, { useMemo, useState } from "react";
import {
  Card,
  Button,
  Pagination,
  Select,
  Row,
  Col,
  Radio,
  Breadcrumb,
  Input,
} from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";

interface Cat {
  id: number;
  name: string;
  origin: string;
  size: string;
  temperament: string[];
  life_span: string;
  weight_range: string;
  coat: string;
  color: string[];
  breedType: string;
  gender: string;
  price: string;
  image: string;
  thumbnail: string[];
}

const CatList = ({ catsPerPage = 4 }) => {
  const cats = useSelector((state: { cats: Cat[] }) => state.cats);

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
    searchQuery: string;
  }>({
    size: [],
    temperament: [],
    lifeSpan: [],
    weightRange: [],
    priceRange: [],
    color: [],
    breedType: "",
    gender: "",
    searchQuery: "",
  });

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const sizeMatch =
        filters.size.length === 0 ||
        filters.size.some((filterSize) =>
          cat.size.split(",").some((catSize) => catSize.trim() === filterSize),
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

          const catLifeSpan = parseInt(cat.life_span.split(" ")[0]);

          return catLifeSpan >= min && catLifeSpan <= max;
        });

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

          const [catMin, catMax] = cat.weight_range
            .replace(" kg", "")
            .split("-")
            .map((w) => parseFloat(w));

          return catMin >= min && catMax <= max;
        });

      const priceMatch =
        filters.priceRange.length === 0 ||
        filters.priceRange.some((range) => {
          const price = cat.price
            .split("-")
            .map((val) => parseInt(val.replace(/[^\d]/g, "")));
          if (range === "Low") return price[0] < 5000000;
          if (range === "Medium")
            return price[0] >= 5000000 && price[0] < 15000000;
          if (range === "High") return price[0] >= 15000000;
          return false;
        });

      const breedTypeMatch =
        !filters.breedType || filters.breedType === cat.breedType;

      const genderMatch = !filters.gender || filters.gender === cat.gender;

      const searchMatch =
        !filters.searchQuery ||
        cat.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

      return (
        sizeMatch &&
        lifeSpanMatch &&
        weightMatch &&
        priceMatch &&
        breedTypeMatch &&
        genderMatch &&
        searchMatch
      );
    });
  }, [cats, filters]);

  const chunkedCats = useMemo(() => {
    const result: Cat[][] = [];
    for (let i = 0; i < filteredCats.length; i += catsPerPage) {
      result.push(filteredCats.slice(i, i + catsPerPage));
    }
    return result;
  }, [filteredCats, catsPerPage]);

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
          <Link href={routerNames.CATEGORY}>Thú Cưng</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={routerNames.CAT} className="font-bold">
            Mèo
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={20} justify="center">
        <Col xs={24} sm={24} md={24} lg={6}>
          <Card className="p-4 rounded-md shadow-lg w-full" title="Bộ Lọc">
            <Input
              placeholder="Tìm kiếm giống mèo"
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
              <h4 className="font-semibold mb-2">Cân nặng</h4>
              <Select
                mode="multiple"
                placeholder="Chọn cân nặng"
                onChange={(value) => handleFilterChange("weightRange", value)}
                value={filters.weightRange}
                className="w-full"
              >
                <Select.Option value="Nhỏ (dưới 10kg)">
                  Nhỏ (dưới 10kg)
                </Select.Option>
                <Select.Option value="Vừa (10-20kg)">
                  Vừa (10-20kg)
                </Select.Option>
                <Select.Option value="Lớn (trên 20kg)">
                  Lớn (trên 20kg)
                </Select.Option>
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
                <Select.Option value="Dưới 10 năm">Dưới 10 năm</Select.Option>
                <Select.Option value="10-15 năm">10-15 năm</Select.Option>
                <Select.Option value="Trên 15 năm">Trên 15 năm</Select.Option>
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
                <Select.Option value="Low">Dưới 5 triệu</Select.Option>
                <Select.Option value="Medium">5 triệu - 15 triệu</Select.Option>
                <Select.Option value="High">Trên 15 triệu</Select.Option>
              </Select>
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
          <header className="flex justify-center py-2 px-4">
            <h2 className="text-lg md:text-2xl font-bold text-center">
              Các Giống Mèo
            </h2>
          </header>

          <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {chunkedCats[currentPage - 1]?.map((cat) => (
              <Card
                key={cat.id}
                hoverable
                cover={
                  <Image
                    alt={cat.name}
                    src={cat.image}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                }
                className="relative w-full shadow-lg rounded-lg overflow-hidden group"
              >
                <div className="p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Giá: {cat.price} VNĐ
                  </p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 p-3 md:p-6 flex flex-col justify-start items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Xuất xứ:{" "}
                      <span className="text-sm md:text-lg text-gray-700 font-semibold">
                        {cat.origin}
                      </span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Kích thước:{" "}
                      <span className="font-semibold">{cat.size}</span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Tuổi thọ:{" "}
                      <span className="font-semibold">{cat.life_span}</span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Cân nặng:{" "}
                      <span className="font-semibold">{cat.weight_range}</span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Loại lông:{" "}
                      <span className="font-semibold">{cat.coat}</span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-2">
                      Giống:{" "}
                      <span className="font-semibold">{cat.breedType}</span>
                    </p>

                    <p className="text-sm md:text-lg text-gray-700 mb-4">
                      Giới tính:{" "}
                      <span className="font-semibold">{cat.gender}</span>
                    </p>
                  </div>

                  <div className="mt-0 md:mt-4 flex flex-col w-full">
                    <Link
                      href={`${routerNames.CAT_DETAIL.replace(
                        "[id]",
                        cat.id.toString(),
                      )}`}
                    >
                      <Button
                        type="primary"
                        block
                        className="w-full text-center py-4 md:py-6 rounded-lg text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 mb-4"
                      >
                        Xem chi tiết
                      </Button>
                    </Link>

                    <Link href={routerNames.CONTACT}>
                      <Button
                        type="primary"
                        block
                        className="w-full text-center py-4 md:py-6 rounded-lg text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                      >
                        Liên hệ ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <div className="flex justify-center mt-6">
            <Pagination
              total={filteredCats.length}
              pageSize={catsPerPage}
              onChange={handlePageChange}
              current={currentPage}
              showSizeChanger={false}
              defaultCurrent={1}
              className="text-center"
            />
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default CatList;
