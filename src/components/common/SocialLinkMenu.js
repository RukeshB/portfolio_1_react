import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLink = (props) => {
  return (
      <li className={`ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] ${props.color}`}>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={props.name}
          className="flex items-center justify-between w-full p-4 text-white"
        >
          {props.name} {props.icon}
        </a>
      </li>
  )
}

const SocialLinkMenu = () => {
  return (
    <div className="hidden md:flex flex-col fixed left-0 top-[35%]">
      <ul>
        <SocialLink color='bg-gray-800' link='https://github.com/RukeshB' name='Github' icon={<SiGithub size={30} />}/>

        <SocialLink color='bg-blue-600' link='https://www.linkedin.com/in/rukesh-basukala-849042197/' name='Linkedin' icon={<SiLinkedin size={30} />}/>

        <SocialLink color='bg-orange-700' link='mailto:rukeshbasukala@gmail.com' name='Email' icon={<HiOutlineMail size={30} />}/>

        <SocialLink color='bg-green-700' link='/Rukesh-Basukalabackend-2023-8-3.pdf' name='Resume' icon={<BsPersonLinesFill size={30} />}/>

      </ul>
    </div>
  );
};

export default SocialLinkMenu;
