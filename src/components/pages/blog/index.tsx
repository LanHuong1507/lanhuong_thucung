import React, { useMemo, useState } from "react";
import { Card, Button, Pagination, Typography, Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { routerNames } from "@/components/constants/router.constant";

const { Title } = Typography;

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  details: string;
  image: string;
}

const Blog = ({ blogsPerPage = 8 }) => {
  const blogs = useSelector((state: { blogs: Blog[] }) => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const chunkedBlogs = useMemo(() => {
    const result: Blog[][] = [];
    for (let i = 0; i < blogs.length; i += blogsPerPage) {
      result.push(blogs.slice(i, i + blogsPerPage));
    }
    return result;
  }, [blogs, blogsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="py-4 w-full">
      <header className="text-center mb-6 px-4 lg:px-6">
        <Title level={2}>CÁC BÀI BLOGS</Title>
      </header>

      <section className="p-4 lg:p-2">
        <Row gutter={[16, 16]}>
          {chunkedBlogs[currentPage - 1]?.map((blog) => (
            <Col key={blog.id} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={blog.title}
                    src={blog.image}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                }
                className="w-full"
              >
                <header className="mb-2">
                  <span className="font-medium text-gray-900">
                    {blog.author}
                  </span>
                </header>
                <Title level={4} className="text-gray-900 mt-2">
                  {blog.title}
                </Title>
                <Card.Meta description={blog.summary} />
                <footer className="mt-4">
                  <p className="text-sm text-gray-600">{blog.date}</p>
                  <Link
                    href={`${routerNames.BLOG_DETAIL.replace(
                      "[id]",
                      blog.id.toString(),
                    )}`}
                    passHref
                  >
                    <Button
                      type="primary"
                      className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Đọc thêm
                    </Button>
                  </Link>
                </footer>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <div className="flex justify-center mt-4">
        <Pagination
          total={blogs.length}
          pageSize={blogsPerPage}
          onChange={handlePageChange}
          current={currentPage}
          showSizeChanger={false}
          defaultCurrent={1}
        />
      </div>
    </main>
  );
};

export default Blog;
