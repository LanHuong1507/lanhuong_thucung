import Layout from "../../components/layout/Layout";
import CareToolComponent from "@/components/pages/care-tools";
import Head from "next/head";

const CareTool = () => {
  return (
    <Layout>
      <Head>
        <title>Các dụng cụ chăm sóc</title>
      </Head>
      <CareToolComponent />
    </Layout>
  );
};

export default CareTool;
