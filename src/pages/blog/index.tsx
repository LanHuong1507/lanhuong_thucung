import Layout from "../../components/layout/Layout";
import BlogComponent from "../../components/pages/blog";
import Head from "next/head";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogComponent />
    </Layout>
  );
};

export default Blog;
