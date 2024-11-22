import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Breadcrumb, Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";

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
  video: string;
}

const DogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dogs = useSelector((state: { dogs: Dog[] }) => state.dogs);
  const dog = dogs.find((dog) => dog.id === parseInt(id as string, 10));

  if (!dog) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Chó không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.DOG)}>
          Trở về trang chính
        </Button>
      </section>
    );
  }
  const nextDog = dogs.find((d) => d.id === dog.id + 1);

  const dataSource = [
    { key: "1", attribute: "Tên", value: dog.name },
    { key: "2", attribute: "Xuất xứ", value: dog.origin },
    { key: "3", attribute: "Kích thước", value: dog.size },
    { key: "4", attribute: "Tuổi thọ", value: dog.life_span },
    { key: "5", attribute: "Cân nặng", value: dog.weight_range },
    { key: "6", attribute: "Loại lông", value: dog.coat },
    { key: "7", attribute: "Tính cách", value: dog.temperament.join(", ") },
    { key: "8", attribute: "Màu lông", value: dog.color },
    { key: "9", attribute: "Giống", value: dog.breedType },
    { key: "10", attribute: "Giới tính", value: dog.gender },
    { key: "11", attribute: "Giá bán", value: `${dog.price} VNĐ` },
  ];
  const dataSourceNextDog = nextDog
    ? [
        { key: "1", attribute: "Tên", value: nextDog.name },
        { key: "2", attribute: "Xuất xứ", value: nextDog.origin },
        { key: "3", attribute: "Kích thước", value: nextDog.size },
        { key: "4", attribute: "Tuổi thọ", value: nextDog.life_span },
        { key: "5", attribute: "Cân nặng", value: nextDog.weight_range },
        { key: "6", attribute: "Loại lông", value: nextDog.coat },
        {
          key: "7",
          attribute: "Tính cách",
          value: nextDog.temperament.join(", "),
        },
        { key: "8", attribute: "Màu lông", value: nextDog.color },
        { key: "9", attribute: "Giống", value: nextDog.breedType },
        { key: "10", attribute: "Giới tính", value: nextDog.gender },
        { key: "11", attribute: "Giá bán", value: `${nextDog.price} VNĐ` },
      ]
    : [];

  const columns = [
    {
      title: "Thuộc tính",
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      title: "Thông tin",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <>
      <Head>
        <title>{dog.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-4">
        <Breadcrumb className="mb-6 flex justify-center items-center space-x-4 md:space-x-8 w-full">
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
            <Link href={routerNames.DOG} className="text-sm md:text-base">
              Chó
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-sm md:text-base">
            {dog.name}
          </Breadcrumb.Item>
        </Breadcrumb>

        <section className="flex flex-col md:flex-row justify-between items-start">
          <h1 className="text-2xl font-bold mb-6 md:hidden text-center w-full">
            {dog.name}
          </h1>
          <article className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
            <Image
              src={dog.image}
              alt={dog.name}
              className="w-[90%] h-96 object-cover rounded-lg shadow-lg"
              width={400}
              height={400}
            />
            <div className="flex mt-4 space-x-4">
              {dog.thumbnail.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`${dog.name} thumbnail ${index + 1}`}
                  className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-lg shadow-sm cursor-pointer"
                  width={400}
                  height={400}
                />
              ))}
            </div>
            <div className="mt-6 w-full">
              <div className="flex justify-center">
                <video
                  src={dog.video}
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-[80%] rounded-lg shadow-lg"
                ></video>
              </div>
            </div>
          </article>
          <article className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-center mb-6 hidden md:block">
              {dog.name}
            </h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="w-full"
            />
            <section className="flex justify-center mt-6 space-x-4 w-full">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.DOG)}
                className="w-1/2 p-4 hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                Trở về
              </Button>
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-1/2 p-4 hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                Liên hệ mua giống
              </Button>
            </section>
          </article>
        </section>

        <h1 className="text-2xl font-bold text-center mt-8">
          Giống chó tiếp theo
        </h1>

        {nextDog && (
          <section className="flex flex-col md:flex-row justify-between items-start">
            <h1 className="text-2xl font-bold mb-6 md:hidden text-center w-full">
              {nextDog.name}
            </h1>
            <article className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
              <Image
                src={nextDog.image}
                alt={nextDog.name}
                className="w-[90%] h-96 object-cover rounded-lg shadow-lg"
                width={400}
                height={400}
              />
              <div className="flex mt-4 space-x-4">
                {nextDog.thumbnail.map((thumb, index) => (
                  <Image
                    key={index}
                    src={thumb}
                    alt={`${nextDog.name} thumbnail ${index + 1}`}
                    className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-lg shadow-sm cursor-pointer"
                    width={400}
                    height={400}
                  />
                ))}
              </div>
              <div className="mt-6 w-full">
                <div className="flex justify-center">
                  <video
                    src={nextDog.video}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-[80%] rounded-lg shadow-lg"
                  ></video>
                </div>
              </div>
            </article>
            <article className="w-full md:w-1/2">
              <h1 className="text-2xl font-bold text-center mb-6 hidden md:block">
                {nextDog.name}
              </h1>
              <Table
                dataSource={dataSourceNextDog}
                columns={columns}
                pagination={false}
                className="w-full"
              />
              <section className="flex justify-center mt-6 space-x-4 w-full">
                <Button
                  type="primary"
                  onClick={() => router.push(routerNames.DOG)}
                  className="w-1/2 p-4 hover:bg-blue-700 hover:text-white transition-all duration-300"
                >
                  Trở về
                </Button>
                <Button
                  type="primary"
                  onClick={() => router.push(routerNames.CONTACT)}
                  className="w-1/2 p-4 hover:bg-blue-700 hover:text-white transition-all duration-300"
                >
                  Liên hệ mua giống
                </Button>
              </section>
            </article>
          </section>
        )}
      </main>
    </>
  );
};

export default DogDetail;
