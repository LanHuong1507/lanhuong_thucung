import React, { useMemo, useState } from "react";
import { Card, Button, Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { routerNames } from "@/components/constants/router.constant";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  details: string;
  image: string;
}

const BlogList = ({ blogsPerPage = 8 }) => {
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
      <header className="flex justify-between items-center mb-6 px-4 lg:px-6">
        <h2 className="text-md md:text-2xl font-bold text-center">
          CÁC BÀI BLOGS
        </h2>
      </header>

      <section className="p-4 lg:p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {chunkedBlogs[currentPage - 1]?.map((blog) => (
          <Card
            key={blog.id}
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
            className="w-full flex-shrink-0"
          >
            <header className="mb-2">
              <span className="font-medium text-gray-900">{blog.author}</span>
            </header>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              {blog.title}
            </h3>
            <Card.Meta description={blog.summary} />
            <footer className="mt-4">
              <p className="text-sm text-gray-600">{blog.date}</p>
              <Link
                href={`${routerNames.BLOG_DETAIL.replace("[id]", blog.id.toString())}`}
                passHref
              >
                <Button type="primary" className="mt-4 w-full">
                  Đọc thêm
                </Button>
              </Link>
            </footer>
          </Card>
        ))}
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

export default BlogList;
