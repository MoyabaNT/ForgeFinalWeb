import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-container fixed bottom-4 right-4 z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isOpen ? "Close Chat" : "Chat with Us"}
      </button>

      {/* Show chatbot only if isOpen is true */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-[500px] bg-white shadow-lg rounded-xl flex flex-col">
          {/* Chatbot Component */}
          <div className="flex-1 overflow-auto">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
          
          {/* Close Button */}
        </div>
      )}
    </div>
  );
};

export default FAQChatbot;
