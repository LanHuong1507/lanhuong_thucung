import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Rate } from "antd";
import Head from "next/head";
import Image from "next/image";

const { Title } = Typography;

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  pet: string;
  rating: number;
  stock: number;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const products = useSelector(
    (state: { products: Product[] }) => state.products,
  );
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const selectedProduct = products.find(
        (p) => p.id === parseInt(id as string),
      );
      setProduct(selectedProduct || null);
    }
  }, [id, products]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="p-4">
        <div className="flex">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-1/2"
          />
          <div className="ml-4">
            <Title level={3}>{product.name}</Title>
            <p>{product.description}</p>
            <p className="mt-2 text-orange-500 font-bold">
              {new Intl.NumberFormat("vi-VN", {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
              }).format(product.price)}{" "}
              VNĐ
            </p>
            <div className="flex items-center mt-4">
              <Rate disabled defaultValue={product.rating} className="mr-2" />
              <span className="text-gray-500">({product.rating}/5)</span>
            </div>
            <p className="mt-2 text-gray-600">
              Loại vật nuôi:{" "}
              <span className="font-semibold">{product.pet}</span>
            </p>
            <p className="mt-2 text-gray-600">
              Chỉ còn <span className="font-semibold">{product.stock}</span> sản
              phẩm
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
