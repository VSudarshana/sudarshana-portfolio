import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-3xl cursor-pointer">
      <a
        href="https://github.com/VSudarshana"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="hover:text-blue-600 hover:scale-125 duration-200" />
      </a>
      <a
        href="https://www.linkedin.com/in/sudarshana-v/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="hover:text-blue-600 hover:scale-125 duration-200" />
      </a>
      <a href="mailto:viswasudarshana@gmail.com">
        <IoMdMail className="hover:text-blue-600 hover:scale-125 duration-200" />
      </a>
    </div>
  );
};

export default SocialLinks;
