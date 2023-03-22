import BlurImage from "../LazyImage.tsx";
import selfie from "../../assets/selfie.jpg";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const img = {
    hidden: { opacity: 0, translateX: -10 },
    show: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "tween",
      },
    },
  };
  const text = {
    hidden: { opacity: 0, translateY: 10 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "tween",
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className=" w-full  min-w-screen h-[85vh]  flex flex-col sm:flex-row  justify-start items-center p-5"
    >
      <motion.div variants={img} className="w-min-full-600 h-[80%] ">
        <BlurImage src={selfie} base64={selfie64} />
      </motion.div>
      <motion.div
        variants={text}
        className="w-full sm:w-1/2 h-[90%]   sm:mx-5  text-clamp-md flex flex-col justify-center"
      >
        <motion.div>
          <h1 className="text-clamp-lg">
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              animate={{
                scale: [1, 1.25, 1.25, 1],
                rotate: [0, 20, -20, 0],
              }}
              transition={{ delay: 1.3, duration: 0.5 }}
              layout="position"
              className="inline-block text-[#D64933] font-bold "
            >
              <p className="inline">Hey</p>
            </motion.div>
            , I'm Michael
          </h1>
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row ">
          <p className="mx-2">
            <br></br>
            I'm a software developer, technology enthusiast, and avid bookworm.
            Other than spending time coding, I enjoy writing (check out my
            substack below), and spending time outdoors. Above all, I am
            passionate about creating - building apps, writing stories, and
            forming connections.
          </p>
        </motion.div>
      </motion.div>

      <Socials />
    </motion.div>
  );
};

const selfie64 = import.meta.env.VITE_SELFIE_64;
export default Home;

// container className="h-full w-full  min-w-screen min-h-[80vh] flex flex-col sm:flex-row  justify-start items-start p-5"
