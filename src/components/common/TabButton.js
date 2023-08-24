const TabButton = (props) => {
  return (
    <div
      className="hover:text-[#FDB515] cursor-pointer group relative m-2"
      onClick={props.handleClick}
    >
      {props.title}
      <div
        className={`absolute bg-transparent h-1 duration-200 border-b-2 border-[#FDB515] ${
          props.active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></div>
    </div>
  );
};

export default TabButton;
