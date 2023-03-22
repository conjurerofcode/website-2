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
      className="h-full w-full  min-w-screen min-h-[80vh] flex flex-col sm:flex-row  justify-start items-start p-5 sm:m-10"
    >
      <motion.div variants={img} className="w-min-full-600 h-2/3 sm:ml-5">
        <BlurImage src={selfie} base64={selfie64} />
      </motion.div>
      <motion.div
        variants={text}
        className="w-full sm:w-1/2 h-full  sm:mx-5 pt-10 sm:mt-10 text-clamp-md"
      >
        <motion.div>
          <h1 className="text-clamp-lg">
            <p className="inline text-[#B80C09]">Hey</p>, I'm Michael
          </h1>
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row ">
          <p className="m-0 px-8 sm:p-0 mr-5">
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            cursus in hac habitasse platea dictumst. Tortor posuere ac ut
            consequat semper viverra nam libero justo. Ipsum nunc aliquet
            bibendum enim facilisis gravida neque. Tellus pellentesque eu
            tincidunt tortor aliquam nulla facilisi cras. Pellentesque pulvinar
            pellentesque habitant morbi tristique senectus et netus et.
            Adipiscing commodo elit at imperdiet.
          </p>
          <p className="m-0 px-8 sm:p-0 ">
            <br></br>
            Quis enim lobortis scelerisque fermentum dui faucibus in. Fringilla
            ut morbi tincidunt augue. Cras fermentum odio eu feugiat. Dui ut
            ornare lectus sit amet est placerat in egestas. Dignissim convallis
            aenean et tortor at. Nibh venenatis cras sed felis eget. Vitae proin
            sagittis nisl rhoncus mattis rhoncus urna neque viverra. Cursus
            mattis molestie a iaculis at. Netus et malesuada fames ac turpis
            egestas sed tempus urna. Condimentum lacinia quis vel eros donec ac
            odio tempor. Faucibus nisl tincidunt eget nullam. Vulputate mi sit
            amet mauris commodo quis imperdiet massa tincidunt. Suspendisse in
            est ante in nibh mauris. Sagittis purus sit amet volutpat consequat
            mauris nunc.
          </p>
        </motion.div>
      </motion.div>

      <Socials />
    </motion.div>
  );
};

const selfie64 = import.meta.env.VITE_SELFIE_64;
export default Home;
