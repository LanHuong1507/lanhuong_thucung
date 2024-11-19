import Layout from "../../components/layout/Layout";
import DogComponent from "../../components/pages/dog";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống chó</title>
      </Head>
      <DogComponent />
    </Layout>
  );
};

export default About;
