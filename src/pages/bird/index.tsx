import Layout from "../../components/layout/Layout";
import BirdComponent from "@/components/pages/bird";
import Head from "next/head";

const Bird = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống chim</title>
      </Head>
      <BirdComponent />
    </Layout>
  );
};

export default Bird;
