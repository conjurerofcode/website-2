import { motion } from "framer-motion";
import MotionPath from "../MotionPath";
import substack from "../../assets/icons/substack.png";
import git from "../../assets/icons/github.png";
import linked from "../../assets/icons/linkedin.png";

const Socials = () => {
  const icons = [blog, github, link];

  return (
    <motion.div
      initial={{ translateY: 10, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay: 0.75 }}
      className="sm:absolute w-min-half-400  sm:bottom-[5%] sm:left-[40%] self-center pt-5 sm:pt-0 bg-slate flex flex-row items-center justify-center"
    >
      {icons.map(({ icon, url }) => {
        return <Icon src={icon} link={url} />;
      })}
    </motion.div>
  );
};
const blog = {
  icon: substack,
  url: "https://notthatmichaelmoore.substack.com/",
};
const github = {
  icon: git,
  url: "https://github.com/conjurerofcode",
};
const link = {
  icon: linked,
  url: "https://www.linkedin.com/in/conjurerofcode/",
};

const Icon = ({ src, link }: { src: string; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="sm:h-[5vh] h-[8vh] sm:w-[5vh] w-[8vh]  mx-2 transform duration-300 hover:scale-125 "
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></a>
  );
};

export default Socials;
