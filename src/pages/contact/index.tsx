import Layout from "../../components/layout/Layout";
import ContactComponent from "@/components/pages/contact";
import Head from "next/head";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Liên hệ</title>
      </Head>
      <ContactComponent />
    </Layout>
  );
};

export default Contact;
