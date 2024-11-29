import { useState } from "react";
import { Input, Button, Form, Typography, Row, Col } from "antd";
import Cat from "@/assets/images/cat1.png";
import Dog from "@/assets/images/dog1.png";
import Rabbit from "@/assets/images/rabbit1.png";
import Fish from "@/assets/images/fish1.png";
import {
  FacebookOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

interface ContactFormValues {
  name: string;
  email: string;
  content: string;
}

const Contact = () => {
  const [message, setMessage] = useState("");
  const onFinish = (values: ContactFormValues) => {
    console.log("Received values:", values);
    setMessage("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  };

  return (
    <main className="min-h-screen p-4">
      <section className="max-w-full mx-auto bg-white p-12 rounded-xl flex flex-col lg:flex-row gap-8 relative transition-shadow duration-500 ease-in-out">
        <Image
          src={Cat}
          alt="Pet Image"
          className="absolute top-0 left-0 w-24 h-24 object-cover rounded-full border-4 border-white transform transition-transform hover:scale-105"
        />
        <Image
          src={Dog}
          alt="Pet Image"
          className="absolute top-0 right-0 w-24 h-24 object-cover rounded-full border-4 border-white transform transition-transform hover:scale-105"
        />
        <Image
          src={Rabbit}
          alt="Pet Image"
          className="absolute bottom-0 left-0 w-24 h-24 object-cover rounded-full border-4 border-white transform transition-transform hover:scale-105"
        />
        <Image
          src={Fish}
          alt="Pet Image"
          className="absolute bottom-0 right-0 w-24 h-24 object-cover rounded-full border-4 border-white transform transition-transform hover:scale-105"
        />
        <section className="lg:w-1/2 p-6 rounded-xl">
          <header className="text-center mb-8 text-white">
            <Typography.Title level={2} className="text-4xl font-extrabold">
              Liên Hệ Với Chúng Tôi - Lan Hương Pet Shop
            </Typography.Title>
            <p className="text-lg">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn và thú cưng của bạn. Hãy để lại
              thông tin và câu hỏi của bạn!
            </p>
          </header>
          {message && (
            <section className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 transition-opacity duration-500">
              {message}
            </section>
          )}
          <Form name="contact" layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Họ và Tên"
                  name="name"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập họ và tên"
                    className="border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email!" },
                    { type: "email", message: "Định dạng email không hợp lệ!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập email"
                    className="border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <Input.TextArea
                placeholder="Nhập nội dung của bạn"
                className="border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Gửi Thông Tin
              </Button>
            </Form.Item>
          </Form>
        </section>
        <aside className="lg:w-1/2 p-6 bg-white rounded-xl transition-shadow duration-500 ease-in-out">
          <header className="text-center mb-8">
            <Typography.Title level={4} className="text-xl text-gray-800 mb-4">
              Thông Tin Liên Hệ Khác
            </Typography.Title>
          </header>

          <article className="space-y-6 text-lg">
            <section className="flex items-center gap-4">
              <HomeOutlined className="text-2xl text-blue-600" />
              <span className="text-gray-700">
                12 Nguyễn Văn Bảo, Phường 04, Quận Gò Vấp
              </span>
            </section>
            <section>
              <PhoneOutlined className="text-2xl text-blue-600" />
              <span className="ml-4 text-gray-700">+84 703 935 114</span>
            </section>
            <section className="flex items-center gap-4">
              <MailOutlined className="text-2xl text-blue-600" />
              <span className="text-gray-700">phuonghuong150702@gmail.com</span>
            </section>
            <section className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Mạng Xã Hội: </span>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-all"
              >
                <FacebookOutlined className="text-2xl" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition-all"
              >
                <InstagramOutlined className="text-2xl" />
              </Link>
            </section>
            <section className="flex items-center gap-4 text-lg">
              <FieldTimeOutlined className="text-2xl text-blue-600" />
              <span className="text-gray-700">
                Giờ làm việc: Thứ Hai - Thứ Sáu: 9:00 AM - 6:00 PM
              </span>
            </section>
          </article>
          <section className="mt-8">
            <header className="text-center mb-4">
              <Typography.Title level={5} className="text-xl text-gray-800">
                Vị trí Của Chúng Tôi
              </Typography.Title>
            </header>
            <div className="mapswrapper">
              <iframe
                width="600"
                height="450"
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20C%C3%B4ng%20nghi%E1%BB%87p&zoom=20&maptype=roadmap"
              ></iframe>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
