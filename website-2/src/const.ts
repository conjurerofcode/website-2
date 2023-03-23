import malaria from "../src/assets/CardImages/malaria1.png";
import humanNews from "../src/assets/CardImages/human-news.png";
import wave from "../src/assets/CardImages/wave.jpg";
import { CardType } from "./types";

export const CardItems: CardType[] = [
  {
    title: "Malaria Detection",
    keywords: [
      "Python",
      "Conv. Neural Netwrk",
      "Jupyter Notebook",
      "Tensorflow",
    ],
    link: "/",
    description:
      "Using Python and Convolutional Neural Networks, I trained a model to detect blood cells which were parasitized with Malaria.",
    image: {
      src: malaria,
      base64: import.meta.env.VITE_MALARIA_64,
    },
  },
  {
    title: "Human News",
    keywords: ["Typescript", "React", "OpenAI", "Vercel"],
    link: "https://human-news.vercel.app/",
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API. The API provides a randomized passage cooked up by OpenAI's davinci-3 Chatbot.",
    image: {
      src: humanNews,
      base64: import.meta.env.VITE_HUMAN_64,
    },
  },
  {
    title: "Example",
    keywords: ["Typescript", "React", "Vite", "Vercel"],
    link: "https://www.google.com",
    description:
      "This is an example of a short, one to two sentence description of this project. ",
    image: {
      src: wave,
      base64: import.meta.env.VITE_WAVE_64,
    },
  },
];
