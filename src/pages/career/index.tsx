import Layout from "../../components/layout/Layout";
import CareerComponent from "@/components/pages/career";
import Head from "next/head";

const Career = () => {
  return (
    <Layout>
      <Head>
        <title>Tuyển dụng</title>
      </Head>
      <CareerComponent />
    </Layout>
  );
};

export default Career;
