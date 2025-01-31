import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "FAQ Bot",
  initialMessages: [
    createChatBotMessage("Hello! How can I help?"),
  ],
};

export default config;