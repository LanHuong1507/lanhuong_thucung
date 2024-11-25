import { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gray-200"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: "left",
          transition: "transform 0.25s ease-out",
        }}
      ></div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center z-20"
        >
          <ArrowUpOutlined className="text-white text-2xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
