import Img1 from "../assets/images/peter.png";
import Img2 from "../assets/images/student.png";

export const contacts = [
  { id: 1, name: "Mr Zaccheaus Chaim", profilePicture: Img1 },
  { id: 2, name: "Mrs Kuro", profilePicture: Img2 },
  { id: 3, name: "Mr John", profilePicture: Img1 },
  { id: 4, name: "Mr Charlie", profilePicture: Img1 },
  { id: 5, name: "Mrs Makinde", profilePicture: Img1 },
];

export const messages = {
  1: [
    { sender: "Mr Zaccheaus Chaim", text: "Hi there!" },
    { sender: "You", text: "Hello Alice!" },
  ],
  2: [
    { sender: "Mrs Kuro", text: "How are you?" },
    { sender: "You", text: "I'm good, thanks!" },
  ],
  3: [
    { sender: "Mr John", text: "Hey, long time no see!" },
    { sender: "You", text: "Yeah, it's been a while." },
  ],

  4: [
    { sender: "Mr Charlie", text: "Hey, long time no see!" },

    { sender: "You", text: "Yeah, it's been a while." },
  ],
  5: [
    { sender: "Mrs Makinde", text: "Hey, long time no see!" },
    { sender: "You", text: "Yeah, it's been a while." },
  ],
};
