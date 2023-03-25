import malaria from "../src/assets/CardImages/CNN.png";
import human from "../src/assets/CardImages/human-news.png";
import wave from "../src/assets/CardImages/wave.jpg";
import lightning from "../src/assets/CardImages/lightning.png";
import { CardType } from "./types";

export const CardItems: CardType[] = [
  {
    title: "Human News",
    keywords: ["Typescript", "React", "Generative AI", "& Vercel"],
    link: "https://human-news.vercel.app/",
    description:
      "A satirical news agency I built using Typescript, React, Vite, & Tailwind which connects to OpenAI's API.",
    image: {
      src: human,
      base64: import.meta.env.VITE_WAVE_64,
    },
  },
  {
    title: "Malaria Detection",
    keywords: ["Python", "Conv. Neural Networks", "& Tensorflow"],
    link: "/",
    description:
      "Using Python and Convolutional Neural Networks, I trained a model to detect blood cells which were parasitized with Malaria.",
    image: {
      src: malaria,
      base64: import.meta.env.VITE_MALARIA_64,
    },
  },
  {
    title: "Lightning Sessions",
    keywords: ["Chrome Extension", "Javascript", "HTML", "& CSS"],
    link: "https://chrome.google.com/webstore/detail/lightning-sessions/gedmhgdcipdhocgbhcgjnabfhmjpffad?hl=en&authuser=0",
    description:
      "A hotkey-based session manager that enables you to manage sessions and bookmarks, without touching your mouse.",
    image: {
      src: lightning,
      base64: import.meta.env.VITE_LIGHTNING_64,
    },
  },
  {
    title: "Example",
    keywords: ["Typescript", "React", "Vite", "& Vercel"],
    link: "https://www.google.com",
    description:
      "This is an example of a short, one to two sentence description of this project. ",
    image: {
      src: wave,
      base64: import.meta.env.VITE_WAVE_64,
    },
  },
];
//
//
