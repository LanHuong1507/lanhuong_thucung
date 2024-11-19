import Layout from "../../components/layout/Layout";
import CatComponent from "@/components/pages/cat";
import Head from "next/head";

const Cat = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống mèo</title>
      </Head>
      <CatComponent />
    </Layout>
  );
};

export default Cat;
