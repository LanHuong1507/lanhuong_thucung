import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button } from "antd";
import Image from "next/image";
import { routerNames } from "@/components/constants/router.constant";
import Head from "next/head";
import {
  FacebookFilled,
  LinkedinFilled,
  MailFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
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
      <div className="text-center py-10 text-xl text-red-600">
        Blog không tồn tại!
      </div>
    );
  }

  const handleShare = (platform: string) => {
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
  };

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="p-8 max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-serif text-gray-900">{blog.title}</h1>
          <div className="mt-4 flex justify-center items-center space-x-6 text-gray-500">
            <p className="text-sm">
              <strong>Tác giả:</strong> {blog.author}
            </p>
            <p className="text-sm">
              <strong>Ngày đăng:</strong> {blog.date}
            </p>
          </div>
          <div className="flex justify-center items-center space-x-6 mt-6">
            <p className="text-sm text-gray-500">Chia sẻ:</p>
            <button
              onClick={() => handleShare("facebook")}
              className="hover:text-blue-600"
            >
              <FacebookFilled size={28} />
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="hover:text-blue-400"
            >
              <TwitterSquareFilled size={28} />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="hover:text-blue-700"
            >
              <LinkedinFilled size={28} />
            </button>
            <button
              onClick={() => handleShare("email")}
              className="hover:text-blue-700"
            >
              <MailFilled size={28} />
            </button>
          </div>
        </header>
        <section className="text-center mb-6">
          <p className="text-lg text-gray-700">{blog.summary}</p>
        </section>
        <div className="mt-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Nội dung
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {blog.details}
          </p>
        </div>
        <div className="mt-10 text-center">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-md text-lg"
            onClick={() => router.push(routerNames.BLOG)}
          >
            Quay lại
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
