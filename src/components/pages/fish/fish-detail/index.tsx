import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumb, Button } from "antd";
import Head from "next/head";
import { routerNames } from "@/components/constants/router.constant";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

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
  thumail: string[];
  additional_info: {
    health_issues: string;
    exercise_needs: string;
    diet: string;
    training_difficulty: string;
    suitable_for: string;
    care_tips: string;
  };
}

const FishDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [fish1, setFish] = useState<Fish | null>(null);
  const fish = useSelector((state: { fish: Fish[] }) => state.fish);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

  useEffect(() => {
    if (id && fish.length > 0) {
      const foundFish = fish.find((item) => item.id === Number(id));
      setFish(foundFish || null);

      if (foundFish) {
        setSelectedImage(foundFish.image);
      }
    }
  }, [id, fish]);
  useEffect(() => {
    if (fish1) {
      const slideshowImages = [
        fish1.image,
        ...(Array.isArray(fish1.thumail) ? fish1.thumail : []),
      ];
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slideshowImages.length;
          setSelectedImage(slideshowImages[nextIndex]);
          return nextIndex;
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [fish1]);

  if (!fish1) {
    return (
      <section className="flex flex-col items-center py-10">
        <h1 className="text-xl font-bold text-gray-800">Cá không tồn tại</h1>
        <Button type="primary" onClick={() => router.push(routerNames.FISH)}>
          Trở về danh sách cá
        </Button>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{fish1.name}</title>
      </Head>
      <main className="container mx-auto py-8 px-6">
        <div className="mb-6 text-center">
          <Breadcrumb className="mb-6 flex justify-center items-center space-x-4 md:space-x-8 w-full text-lg">
            <Breadcrumb.Item>
              <Link href={routerNames.HOME}>Trang Chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={routerNames.CATEGORY}>Danh Mục Sản Phẩm</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={routerNames.CATEGORY}>Vật Nuôi</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={routerNames.FISH}>Cá</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="font-bold">
              {fish1.name}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-4 border-dotted border-gray-400 p-4 rounded-lg shadow-lg bg-gray-50">
          <div className="col-span-1 border-2 border-solid border-gray-300 rounded-lg p-2">
            {/\.mp4|webm|ogg$/i.test(selectedImage) ? (
              <video
                src={selectedImage}
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-lg"
                width={400}
                height={400}
              >
                Trình duyệt không hỗ trợ video.
              </video>
            ) : (
              <Image
                src={selectedImage}
                alt={fish1.name}
                className="w-full"
                width={400}
                height={400}
              />
            )}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {[
                fish1.image,
                ...(Array.isArray(fish1.thumail) ? fish1.thumail : []),
              ].map((thumb, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-md cursor-pointer border-2 ${
                    index === currentThumbnailIndex
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedImage(thumb);
                    setCurrentThumbnailIndex(index);
                  }}
                >
                  {/\.mp4|webm|ogg$/i.test(thumb) ? (
                    <video
                      muted
                      className="w-full h-full object-cover rounded-md"
                    >
                      <source src={thumb} type="video/mp4" />
                      Trình duyệt không hỗ trợ video.
                    </video>
                  ) : (
                    <Image
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                      width={80}
                      height={80}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 border-2 border-solid border-gray-300 rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-4">
              {fish1.name}
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Thông Tin Cá
                </h2>
                <p>
                  <strong>Xuất xứ:</strong> {fish1.origin}
                </p>
                <p>
                  <strong>Kích thước:</strong> {fish1.size}
                </p>
                <p>
                  <strong>Tuổi thọ:</strong> {fish1.life_span}
                </p>
                <p>
                  <strong>Màu sắc:</strong> {fish1.color.join(", ")}
                </p>
                <p>
                  <strong>Giá:</strong> {fish1.price}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Lời khuyên chăm sóc
                </h2>
                <p>{fish1.additional_info.care_tips}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Sức khỏe
                </h2>
                <p>{fish1.additional_info.health_issues}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Nhu cầu vận động
                </h2>
                <p>{fish1.additional_info.exercise_needs}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Chế độ ăn
                </h2>
                <p>{fish1.additional_info.diet}</p>
              </div>
            </div>

            <section className="flex justify-center mt-6 space-x-4 w-full">
              <Button
                type="primary"
                onClick={() => router.push(routerNames.CONTACT)}
                className="w-[90%] p-6 hover:bg-blue-700 hover:text-white transition-all duration-300 text-base md:text-lg lg:text-xl"
              >
                Liên hệ
              </Button>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default FishDetail;
