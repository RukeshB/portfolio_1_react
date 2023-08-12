const SocialLink = (props) => {
    return (
        <li className={`ml-[-100px] hover:ml-[0px] duration-150 w-[160px] h-[60px] ${props.color}`}>
          <a
            href={props.link}
            className="w-full p-4 flex justify-between items-center text-white"
          >
            {props.name} {props.icon}
          </a>
        </li>
    )
}

export default SocialLink;