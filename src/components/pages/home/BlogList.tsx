import React, { useMemo, useState } from "react";
import { Card, Button } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
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

const shuffleArray = (array: Blog[]): Blog[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const BlogList = ({ limit = 8 }) => {
  const blogs = useSelector((state: { blogs: Blog[] }) => state.blogs);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredBlogs = useMemo(() => {
    return shuffleArray(blogs).slice(0, limit);
  }, [blogs, limit]);

  const chunkedBlogs = useMemo(() => {
    const result: Blog[][] = [];
    for (let i = 0; i < filteredBlogs.length; i += 4) {
      result.push(filteredBlogs.slice(i, i + 4));
    }
    return result;
  }, [filteredBlogs]);

  const nextPage = () => {
    if (currentPage < chunkedBlogs.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-4 w-full">
      <div className="flex justify-between items-center mb-6 px-4 lg:px-6">
        <h2 className="text-md md:text-2xl font-bold text-center">
          CÁC BÀI BLOGS
        </h2>
        <div className="flex">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="mx-2"
          >
            &lt; Prev
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === chunkedBlogs.length - 1}
            className="mx-2"
          >
            Next &gt;
          </Button>
        </div>
      </div>

      <div className="p-4 lg:p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {chunkedBlogs[currentPage]?.map((blog) => (
          <Card
            key={blog.id}
            hoverable
            cover={
              <Image
                alt={blog.title}
                src={blog.image}
                width={500}
                height={500}
              />
            }
            className="w-full flex-shrink-0"
          >
            <div className="mb-2">
              <span className="font-medium text-gray-900">{blog.author}</span>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {blog.title}
              </h3>
            </div>
            <Card.Meta description={blog.summary} />
            <div className="mt-4">
              <p className="text-sm text-gray-600">{blog.date}</p>
              <Link
                href={`${routerNames.BLOG_DETAIL.replace("[id]", blog.id.toString())}`}
                passHref
              >
                <Button type="primary" className="mt-4 w-full">
                  Đọc thêm
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
