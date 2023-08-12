import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
  return (
    <div className="flex flex-col fixed left-0 top-[35%]">
      <ul>
        <li className="ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] bg-gray-800">
          <a
            href="https://github.com/RukeshB"
            className="w-full p-4 flex justify-between items-center text-white"
          >
            Github <SiGithub size={30} />
          </a>
        </li>

        <li className="ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] bg-blue-600">
          <a
            href="https://www.linkedin.com/in/rukesh-basukala-849042197/"
            className="w-full p-4 flex justify-between items-center text-white"
          >
            Linkedin <SiLinkedin size={30} />
          </a>
        </li>

        <li className="ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] bg-orange-700">
          <a
            href="mailto:rukeshbasukala@gmail.com"
            className="w-full p-4 flex justify-between items-center text-white"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>

        <li className="ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] bg-green-700">
          <a
            href="https://github.com/RukeshB"
            className="w-full p-4 flex justify-between items-center text-white"
          >
            Resume <BsPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
