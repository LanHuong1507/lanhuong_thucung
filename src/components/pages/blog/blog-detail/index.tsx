import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button, Typography, Card, Space } from "antd";
import Image from "next/image";
import { routerNames } from "@/components/constants/router.constant";
import Head from "next/head";
import {
  FacebookFilled,
  LinkedinFilled,
  MailFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  details: string;
  image: string;
}

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogs = useSelector((state: { blogs: Blog[] }) => state.blogs);
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <Typography.Text className="text-center py-10 text-xl text-red-600">
        Blog không tồn tại!
      </Typography.Text>
    );
  }
  const handleShare = (platform: string) => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      let shareUrl = "";

      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
          break;
        case "linkedin":
          shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
          break;
        case "email":
          shareUrl = `mailto:?subject=${blog.title}&body=${blog.summary}`;
          break;
        default:
          break;
      }

      window.open(shareUrl, "_blank");
    }
  };

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <Card className="p-8 max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <Title level={1}>{blog.title}</Title>
          <Space
            className="mt-4 flex flex-col items-center justify-center md:flex-row"
            size="large"
            align="center"
            style={{
              width: "100%",
            }}
          >
            <Typography.Text className="text-sm">
              <strong>Tác giả:</strong> {blog.author}
            </Typography.Text>
            <Typography.Text className="text-sm">
              <strong>Ngày đăng:</strong> {blog.date}
            </Typography.Text>
            <Typography.Text className="text-sm">
              <strong> Chia sẻ:</strong>
            </Typography.Text>
            <Space size="large">
              <Button
                type="text"
                icon={<FacebookFilled />}
                onClick={() => handleShare("facebook")}
                size="large"
              />
              <Button
                type="text"
                icon={<TwitterSquareFilled />}
                onClick={() => handleShare("twitter")}
                size="large"
              />
              <Button
                type="text"
                icon={<LinkedinFilled />}
                onClick={() => handleShare("linkedin")}
                size="large"
              />
              <Button
                type="text"
                icon={<MailFilled />}
                onClick={() => handleShare("email")}
                size="large"
              />
            </Space>
          </Space>
        </header>
        <section className="text-center mb-6">
          <Paragraph className="text-lg text-gray-700">
            {blog.summary}
          </Paragraph>
        </section>
        <section className="mt-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </section>
        <section className="mt-8">
          <Title level={3}>Nội dung</Title>
          <Paragraph className="text-lg text-gray-700 leading-relaxed">
            {blog.details}
          </Paragraph>
        </section>
        <div className="mt-10 text-center">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 p-6 rounded-md text-lg"
            onClick={() => router.push(routerNames.BLOG)}
          >
            Quay lại
          </Button>
        </div>
      </Card>
    </>
  );
};

export default BlogDetail;
