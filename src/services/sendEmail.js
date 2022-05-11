import axios from "axios";

export const sendContactMail = async (title, senderMail, content) => {
  const data = {
    title,
    senderMail,
    content,
  };

  try {
    return await axios.post("/api/request", data);
  } catch (error) {
    return error;
  }
};
