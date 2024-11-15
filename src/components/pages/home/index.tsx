import Link from "next/link";
import ProductCarousel from "../../pages/home/ProductCarousel";
import Image from "next/image";
import PeoDog from "../../../assets/images/pd.jpg";
import { Button } from "antd";
import { routerNames } from "@/components/constants/router.constant";
import {
  CheckCircleOutlined,
  HeartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <main>
      <div className="flex items-center justify-center">
        <ProductCarousel />
      </div>

      <div className="px-4 py-10">
        <h2 className="text-xl font-semibold text-center mb-4">SHOP BY PET</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-ss-dog text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Dog</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-cat text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Cat</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-dolphin text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Fish</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 py-8 px-6 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-rabbit text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Rabbit</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-turtle text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Turtle</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center rounded-lg bg-slate-600 p-8 hover:bg-slate-500 transition duration-200 ease-in-out"
          >
            <i className="fi fi-sr-steak text-white text-4xl"></i>
            <span className="mt-2 text-white text-xl">Other</span>
          </Link>
        </div>
      </div>
      <section>
        <ProductList />
      </section>

      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-10">
        <div className="flex-1 space-y-4 text-start md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            We care for the healthy and standardized development of your pet.
          </h1>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 lg:space-x-6 mt-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircleOutlined className="text-red-500 text-lg" />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <SmileOutlined className="text-red-500 text-lg" />
              <span>Easy to prepare</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <HeartOutlined className="text-red-500 text-lg" />
              <span>Strengthens immunity</span>
            </div>
          </div>
          <Link href={routerNames.ABOUT} passHref>
            <Button
              type="primary"
              className="mt-6 p-6 bg-red-600 hover:bg-blue-600 text-white"
            >
              <span className="font-medium text-lg">About us</span>
              <i className="fi fi-sr-arrow-right text-white text-lg pt-1"></i>
            </Button>
          </Link>
        </div>
        <div className="flex-1 mt-4 lg:flex justify-end">
          <Image
            src={PeoDog}
            alt="Dog"
            className="rounded-lg w-full object-cover"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
