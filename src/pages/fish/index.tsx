import Layout from "../../components/layout/Layout";
import FishComponent from "@/components/pages/fish";
import Head from "next/head";

const Fish = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống cá</title>
      </Head>
      <FishComponent />
    </Layout>
  );
};

export default Fish;
