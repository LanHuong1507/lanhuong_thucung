import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button, Table, Rate } from "antd";
import Head from "next/head";
import Link from "next/link";
import { routerNames } from "@/components/constants/router.constant";
import { useSelector } from "react-redux";
import Image from "next/image";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

interface CareTool {
  id: number;
  name: string;
  description: string;
  usage: string;
  category: string;
  price: string;
  material: string;
  dimensions: string;
  image: string;
  thumbnails: string[];
  hasc: string;
  storage_instructions: string;
  additional_notes: string;
  features: string[];
  brand: string;
  pet_size_compatibility: string[];
  compatible_breeds: string[];

  reviews: { rating: number; reviewer: string; comment: string }[];
}

const CareToolDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const careTools = useSelector(
    (state: { careTools: CareTool[] }) => state.careTools,
  );
  const [careTool, setCareTool] = useState<CareTool | null>(null);
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (id && careTools.length > 0) {
      const tool = careTools.find((tool) => tool.id === Number(id));
      setCareTool(tool || null);
      if (tool) {
        setSelectedImage(tool.image);
      }
    }
  }, [id, careTools]);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    }
  };

  const handleThumbnailClick = (thumb: string) => {
    setSelectedImage(thumb);
  };

  if (!careTool) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">
          Dụng cụ chăm sóc không tồn tại
        </h1>
        <Button
          type="primary"
          onClick={() => router.push(routerNames.CARE_TOOLS)}
        >
          Trở về trang chính
        </Button>
      </section>
    );
  }

  const dataSource = [
    { key: "1", attribute: "Danh mục", value: careTool.category },
    { key: "2", attribute: "Chất liệu", value: careTool.material },
    { key: "3", attribute: "Thương hiệu", value: careTool.brand },
    {
      key: "4",
      attribute: "Kích thước thú cưng tương thích",
      value: careTool.pet_size_compatibility.join(", "),
    },
    {
      key: "5",
      attribute: "Giống chó tương thích",
      value: careTool.compatible_breeds.join(", "),
    },
    { key: "6", attribute: "Giá bán", value: careTool.price },
  ];

  const columns = [
    { title: "Thuộc tính", dataIndex: "attribute", key: "attribute" },
    { title: "Thông tin", dataIndex: "value", key: "value" },
  ];

  return (
    <>
      <Head>
        <title>{careTool.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-4">
        <Breadcrumb className="mb-6 text-lg">
          <Breadcrumb.Item>
            <Link href={routerNames.HOME}>Trang Chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href={routerNames.CARE_TOOLS}>Dụng Cụ Chăm Sóc</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="font-bold">
            {careTool.name}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-2xl font-bold mb-6 text-center w-full">
          {careTool.name}
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="flex flex-col items-center mb-6 md:mb-0">
            <Image
              src={selectedImage}
              alt={careTool.name}
              className="w-full h-[70%] object-cover rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div className="flex space-x-4 mt-4 flex-wrap justify-center">
              {careTool.thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`${careTool.name} thumbnail ${(index as number) + 1}`}
                  className="w-24 lg:w-32 h-28 object-cover rounded-md cursor-pointer"
                  width={100}
                  height={100}
                  onClick={() => handleThumbnailClick(thumb)}
                />
              ))}
            </div>
          </article>

          <article>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="shadow-md rounded-lg"
            />
            <section className="flex justify-center mt-6">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-full md:w-[90%] py-4 px-6 hover:bg-blue-700 transition duration-300"
              >
                Liên hệ
              </Button>
            </section>
          </article>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Mô tả sản phẩm</h2>
          <p className="mt-4 text-gray-700">{careTool.description}</p>
        </section>

        <section className="mt-12">
          <div className="w-full md:w-[80%] border-2 border-gray-300 rounded-lg shadow-lg">
            <h2
              className="text-xl font-semibold cursor-pointer flex justify-between items-center p-4 border-b-2 border-gray-300 bg-gray-50 rounded-t-lg hover:bg-gray-100 transition-all duration-300"
              onClick={handleToggleSidebar}
            >
              <span>MỤC LỤC NỘI DUNG</span>
              <span>
                {isSidebarVisible ? <UpOutlined /> : <DownOutlined />}
              </span>
            </h2>

            {isSidebarVisible && (
              <div className="p-4">
                <ol className="list-decimal pl-6 space-y-4">
                  <li
                    className="text-blue-600 cursor-pointer font-semibold text-lg hover:text-blue-800 transition-all duration-300"
                    onClick={() => handleSectionClick("usage")}
                  >
                    Cách sử dụng
                  </li>
                  <li
                    className="text-blue-600 cursor-pointer font-semibold text-lg hover:text-blue-800 transition-all duration-300"
                    onClick={() => handleSectionClick("storage_instructions")}
                  >
                    Bảo quản
                  </li>
                  <li
                    className="text-blue-600 cursor-pointer font-semibold text-lg hover:text-blue-800 transition-all duration-300"
                    onClick={() => handleSectionClick("additional_notes")}
                  >
                    Ghi chú thêm
                  </li>
                </ol>
              </div>
            )}
          </div>
        </section>

        <section className="pt-12">
          <ol className="space-y-6">
            <li id="usage">
              <h3 className="text-2xl font-semibold text-blue-700">
                1. Cách sử dụng
              </h3>
              <p>{careTool.usage}</p>
            </li>
            <li id="storage_instructions">
              <h3 className="text-2xl font-semibold text-blue-700">
                2. Bảo quản
              </h3>
              <p>{careTool.storage_instructions}</p>
            </li>
            <li id="additional_notes">
              <h3 className="text-2xl font-semibold text-blue-700">
                3. Ghi chú thêm
              </h3>
              <p>{careTool.additional_notes}</p>
            </li>
          </ol>
        </section>

        <section className="my-10">
          <h2 className="text-xl font-semibold">
            Đánh giá của khách hàng về sản phẩm này
          </h2>
          {careTool.reviews && careTool.reviews.length > 0 ? (
            <div className="mt-4 space-y-4">
              {careTool.reviews.map((review, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{review.reviewer}</span>
                    <Rate
                      disabled
                      value={review.rating}
                      className="text-yellow-500"
                    />
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-700">Chưa có đánh giá nào.</p>
          )}
        </section>
      </main>
    </>
  );
};

export default CareToolDetail;
