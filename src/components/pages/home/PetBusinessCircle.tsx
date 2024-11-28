import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BulbOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  HeartOutlined,
  RocketOutlined,
  SearchOutlined,
  ShopOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
const { Panel } = Collapse;
const circleItems = [
  {
    name: "Nghiên cứu thị trường",
    icon: <SearchOutlined style={{ fontSize: 24 }} />,
    color: "from-blue-500 to-blue-300",
    description:
      "Nghiên cứu nhu cầu thị trường về các sản phẩm và dịch vụ chăm sóc thú cưng, xác định đối tượng khách hàng và xu hướng mới. Đây là một công việc quan trọng trong việc đảm bảo rằng sản phẩm của bạn đáp ứng được nhu cầu của thị trường và phát triển bền vững.",
  },
  {
    name: "Kế hoạch kinh doanh",
    icon: <BulbOutlined style={{ fontSize: 24 }} />,
    color: "from-green-500 to-green-300",
    description:
      "Lập kế hoạch chi tiết về chiến lược kinh doanh trong ngành sản phẩm thú cưng, từ bán lẻ đến dịch vụ chăm sóc tại nhà. Kế hoạch cần bao gồm các yếu tố như nghiên cứu thị trường, định giá sản phẩm, chiến lược marketing và phân phối.",
  },
  {
    name: "Chọn nguồn cung cấp",
    icon: <ShopOutlined style={{ fontSize: 24 }} />,
    color: "from-yellow-500 to-yellow-300",
    description:
      "Lựa chọn các nhà cung cấp uy tín cho thức ăn, đồ chơi, và các dụng cụ chăm sóc thú cưng chất lượng cao. Việc chọn nhà cung cấp uy tín là yếu tố quyết định đến chất lượng sản phẩm và sự hài lòng của khách hàng.",
  },
  {
    name: "Xây dựng thương hiệu",
    icon: <RocketOutlined style={{ fontSize: 24 }} />,
    color: "from-red-500 to-red-300",
    description:
      "Xây dựng thương hiệu mạnh mẽ, gắn liền với sự uy tín và chất lượng trong lĩnh vực chăm sóc thú cưng và cung cấp sản phẩm vật nuôi. Việc xây dựng một thương hiệu mạnh sẽ giúp bạn duy trì sự trung thành của khách hàng và thu hút người tiêu dùng mới.",
  },
  {
    name: "Vận hành & Quản lý",
    icon: <ToolOutlined style={{ fontSize: 24 }} />,
    color: "from-purple-500 to-purple-300",
    description:
      "Quản lý hoạt động kinh doanh hiệu quả, đảm bảo quá trình vận hành xuyên suốt, từ bán hàng đến dịch vụ sau bán hàng. Cần có các công cụ và hệ thống để theo dõi và cải thiện hiệu quả công việc hàng ngày.",
  },
  {
    name: "Chăm sóc khách hàng",
    icon: <HeartOutlined style={{ fontSize: 24 }} />,
    color: "from-pink-500 to-pink-300",
    description:
      "Đảm bảo dịch vụ chăm sóc khách hàng tận tình, giúp thú cưng và chủ nhân của chúng nhận được sự quan tâm tối đa từ doanh nghiệp. Chăm sóc khách hàng là yếu tố quan trọng trong việc xây dựng mối quan hệ lâu dài và tăng cường sự hài lòng của khách hàng.",
  },
];

const PetBusinessCircle = () => {
  const [radius, setRadius] = useState(180);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateRadius = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      setRadius(isMobileView ? 130 : 180);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start py-6 lg:px-14">
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-between items-center mb-8 lg:mb-0">
        <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full flex justify-center items-center relative">
          <div className="absolute text-center font-bold text-sm md:text-xl text-gray-800 px-2 z-10 leading-5">
            Mô Hình Kinh Doanh
            <br />
            Của Chúng Tôi
          </div>
          <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            animate={isMobile ? {} : { rotate: 360 }}
            transition={{
              repeat: isMobile ? 0 : Infinity,
              ease: "linear",
              duration: isMobile ? 0 : 20,
            }}
          >
            {circleItems.map((item, index) => {
              const angle = (index / circleItems.length) * 360;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={index}
                  className={`absolute w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br ${item.color} rounded-full flex flex-col md:p-3 p-1 justify-center items-center text-white font-semibold text-xs md:text-sm shadow-lg`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    pointerEvents: "none",
                  }}
                  whileHover={isMobile ? {} : { scale: 1.2, y: -20 }}
                  whileTap={isMobile ? { scale: 1.1 } : {}}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                  }}
                >
                  <div className="text-lg md:text-3xl">{item.icon}</div>
                  <span className="mt-1 text-center">
                    {index + 1}. {item.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="pt-16 px-6 md:py-6 flex flex-col space-y-4 items-start w-full lg:w-1/2">
        {circleItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 w-full">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center text-white font-semibold">
              {index + 1}
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Collapse
                bordered={false}
                expandIconPosition="end"
                activeKey={openIndex === index ? [index] : []}
                onChange={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <Panel
                  header={
                    <div className="flex justify-between items-center w-full text-gray-800">
                      <span className="text-base md:text-lg font-semibold">
                        {item.name}
                      </span>
                      {openIndex === index ? (
                        <CaretUpOutlined />
                      ) : (
                        <CaretDownOutlined />
                      )}
                    </div>
                  }
                  key={index}
                  showArrow={false}
                  className="rounded-lg border-2 border-gray-200 shadow-md"
                >
                  <div className="text-sm md:text-base leading-relaxed text-gray-600">
                    {item.description}
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetBusinessCircle;
