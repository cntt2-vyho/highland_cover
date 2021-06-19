import { message } from 'antd';
import 'antd/dist/antd.css';
message.config({
  duration: 5,
});

export default {
  success: (text) => {
    return message.success(text);
  },
  error: (text) => {
    return message.error(text, 7);
  },
};
