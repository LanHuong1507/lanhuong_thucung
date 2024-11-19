import Layout from "../../components/layout/Layout";
import TurtleComponent from "@/components/pages/turtle";
import Head from "next/head";

const Turtle = () => {
  return (
    <Layout>
      <Head>
        <title>Các giống rùa</title>
      </Head>
      <TurtleComponent />
    </Layout>
  );
};

export default Turtle;
