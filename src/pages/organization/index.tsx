import Layout from "../../components/layout/Layout";
import OrganizationComponent from "@/components/pages/organization";
import Head from "next/head";

const Organization = () => {
  return (
    <Layout>
      <Head>
        <title>Cơ cấu tổ chức</title>
      </Head>
      <OrganizationComponent />
    </Layout>
  );
};

export default Organization;
