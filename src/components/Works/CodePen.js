const CodePenList = [
    {
        title: "Typing Text",
        link: "https://codepen.io/RukeshB/full/zYMjzGm"
    },
    {
        title: "SVG Animation ( Clock )",
        link: "https://codepen.io/RukeshB/full/yLQvZZj"
    },
    {
        title: "Hover Effect",
        link: "https://codepen.io/RukeshB/full/QWJQwMj"
    },
]

const codePens = CodePenList.map(codePen => {
    return (
        <li className="py-1 text-2xl" key={codePen.title}><a href={codePen.link} className="hover:text-[#FDB515]">{codePen.title}</a></li>
    )
})

const CodePen = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mb-20">
          {/* title */}
          <div className="max-w-[1000px] w-full mb-2 ml-10 md:ml-2">
            <h3 className="text-2xl font-bold md:text-4xl border-b-4 border-[#FDB515] inline">
              Code pen
            </h3>
          </div>
          {/* code pen list */}
          <div className="max-w-[1000px]">
            <ul className="mt-4">
                {codePens}
            </ul>
          </div>
        </div>
    )
}

export default CodePen;