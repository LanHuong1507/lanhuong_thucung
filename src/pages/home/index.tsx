import Layout from "../../components/layout/Layout";
import HomeComponent from "../../components/pages/home";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomeComponent />
    </Layout>
  );
};

export default Home;
