import Layout from "../../components/layout/Layout";
import AboutComponent from "../../components/pages/about";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Về Chúng Tôi</title>
      </Head>
      <AboutComponent />
    </Layout>
  );
};

export default About;
