import Layout from "../../components/layout/Layout";
import ProductComponent from "../../components/pages/product";
import Head from "next/head";

const Product = () => {
  return (
    <Layout>
      <Head>
        <title>Tất Cả Sản phẩm</title>
      </Head>
      <ProductComponent />
    </Layout>
  );
};

export default Product;
