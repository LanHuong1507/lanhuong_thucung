import Layout from "../../components/layout/Layout";
import HistoryComponent from "@/components/pages/history";
import Head from "next/head";

const History = () => {
  return (
    <Layout>
      <Head>
        <title>Lịch sử hình thành</title>
      </Head>
      <HistoryComponent />
    </Layout>
  );
};

export default History;
