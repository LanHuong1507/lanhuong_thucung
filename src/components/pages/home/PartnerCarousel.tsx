import React from "react";
import Slider from "react-slick";
import PetMart from "../../../assets/images/pert-mart.webp";
import PetCity from "../../../assets/images/pet-city.png";
import Dogily from "../../../assets/images/dogily.jpg";
import VPet from "../../../assets/images/VPET.png";
import VngPetCare from "../../../assets/images/VNG Petcare.png";
import ThiThiPet from "../../../assets/images/Logothithi.png";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Thi Thi Pet",
    logo: ThiThiPet,
    url: "https://thithipet.com",
    description: "Cung cấp các dịch vụ chăm sóc thú cưng, từ grooming đến spa.",
  },
  {
    name: "Pet Mart",
    logo: PetMart,
    url: "https://petmart.vn",
    description:
      "Cung cấp thực phẩm và phụ kiện cho thú cưng, giống thú cưng chất lượng cao.",
  },
  {
    name: "Petcity",
    logo: PetCity,
    url: "https://petcity.vn",
    description:
      "Chuyên cung cấp giống chó, mèo và các dịch vụ chăm sóc thú cưng.",
  },
  {
    name: "Dogily Petshop",
    logo: Dogily,
    url: "https://dogily.vn",
    description:
      "Chuyên cung cấp giống chó, mèo cao cấp, dịch vụ chăm sóc và huấn luyện thú cưng.",
  },
  {
    name: "VPet – Thế Giới Thú Cưng",
    logo: VPet,
    url: "https://vpet.vn",
    description:
      "Cung cấp giống chó, mèo, phụ kiện và dịch vụ grooming cho thú cưng.",
  },
  {
    name: "VNG Petcare",
    logo: VngPetCare,
    url: "https://vng.vn",
    description:
      "Cung cấp các sản phẩm chăm sóc sức khỏe cho thú cưng, từ thức ăn đến thuốc thú y.",
  },
];

const PartnerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Danh Sách Các Đối Tác
        </h2>
        <p className="text-gray-600 text-lg">
          Các đối tác đáng tin cậy của chúng tôi, luôn mang đến những dịch vụ và
          sản phẩm tốt nhất cho thú cưng.
        </p>
      </header>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <article
            key={index}
            className="relative group flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-105"
          >
            <Link
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center transition-all hover:opacity-90"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </Link>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">{partner.description}</p>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default PartnerCarousel;
