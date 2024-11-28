import Img1 from "../assets/images/peter.png";

export const contacts = [
  { id: 1, name: "Alice", profilePicture: Img1 },
  { id: 2, name: "Bob", profilePicture: Img1 },
  { id: 3, name: "Charlie", profilePicture: Img1 },
];

export const messages = {
  1: [
    { sender: "Alice", text: "Hi there!" },
    { sender: "You", text: "Hello Alice!" },
  ],
  2: [
    { sender: "Bob", text: "How are you?" },
    { sender: "You", text: "I'm good, thanks!" },
  ],
  3: [
    { sender: "Charlie", text: "Hey, long time no see!" },
    { sender: "You", text: "Yeah, it's been a while." },
  ],
};
