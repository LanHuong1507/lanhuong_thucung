import Layout from "../../components/layout/Layout";
import CategoryComponent from "@/components/pages/category";
import Head from "next/head";

const Category = () => {
  return (
    <Layout>
      <Head>
        <title>Danh mục sản phẩm</title>
      </Head>
      <CategoryComponent />
    </Layout>
  );
};

export default Category;
