import { useState, useEffect } from "react";
import { Input, Button, Modal, message } from "antd";
import { CloseOutlined, MessageFilled, PhoneFilled } from "@ant-design/icons";

const ChatComponent = () => {
  interface Message {
    text: string;
    type: "sent" | "received";
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isCallModalVisible, setCallModalVisible] = useState(false);
  const [isChatVisible, setChatVisible] = useState(false);
  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, type: "sent" }]);
      setInputText("");
    } else {
      message.warning("Please enter a message!");
    }
  };
  const handleStartCall = () => {
    setCallModalVisible(false);
    message.success("Calling...");
  };

  useEffect(() => {
    setMessages([
      { text: "Chào mừng bạn đến với Lan Hương Pet Shop!", type: "received" },
      {
        text: "Chúng tôi cung cấp các giống vật nuôi và thú cưng cũng như các dụng cụ chăm sóc chúng.",
        type: "received",
      },
      {
        text: "Bạn muốn tìm hiểu về phần nào? Hãy nhắn tin để chúng tôi có thể hỗ trợ bạn",
        type: "received",
      },
    ]);
  }, []);

  return (
    <div>
      <div
        onClick={() => setChatVisible(true)}
        className="fixed bottom-20 right-6 bg-blue-500 p-4 rounded-full shadow-lg cursor-pointer text-white z-30"
      >
        <MessageFilled style={{ fontSize: "24px" }} />
      </div>
      {isChatVisible && (
        <div className="fixed bottom-12 right-6 p-4 w-full max-w-md mx-auto border rounded-lg shadow-lg z-40 bg-white">
          <div className="flex flex-col space-y-2 mb-4 overflow-y-auto h-64">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "sent" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="px-4 py-2 rounded-lg max-w-xs bg-gray-200 text-black">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Input
              className="flex-1"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button
              type="primary"
              icon={<MessageFilled />}
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </div>
          <div className="mt-4">
            <Button
              type="dashed"
              icon={<PhoneFilled />}
              onClick={() => setCallModalVisible(true)}
            >
              Start Call
            </Button>
          </div>
          <Modal
            title="Start a Call"
            visible={isCallModalVisible}
            onOk={handleStartCall}
            onCancel={() => setCallModalVisible(false)}
          >
            <p>Are you sure you want to start a call?</p>
          </Modal>
          <div className="absolute top-2 right-2">
            <Button
              type="text"
              onClick={() => setChatVisible(false)}
              icon={<CloseOutlined />}
              className="text-red-500"
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
