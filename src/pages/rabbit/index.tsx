import Layout from "../../components/layout/Layout";
import RabbitComponent from "@/components/pages/rabbit";
import Head from "next/head";

const Rabbit = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống thỏ</title>
      </Head>
      <RabbitComponent />
    </Layout>
  );
};

export default Rabbit;
