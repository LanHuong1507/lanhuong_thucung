import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";

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
        <section className="flex flex-col md:flex-row justify-between items-center">
          <article className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src={dog.image}
              alt={dog.name}
              className="w-[90%] h-96 object-cover rounded-lg shadow-lg"
            />
          </article>
          <article className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-center mb-6">{dog.name}</h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              className="w-full"
            />
            <section className="flex justify-center mt-6 space-x-4">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.DOG)}
              >
                Trở về
              </Button>
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
              >
                Liên hệ mua giống
              </Button>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default DogDetail;
