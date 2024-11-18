import Layout from "../../components/layout/Layout";
import IntroductionComponent from "../../components/pages/introduction";
import Head from "next/head";

const Introduction = () => {
  return (
    <Layout>
      <Head>
        <title>Gioi thiệu tổng quan doanh nghiệp</title>
      </Head>
      <IntroductionComponent />
    </Layout>
  );
};

export default Introduction;
