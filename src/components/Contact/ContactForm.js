const ContactForm = () => {
    return (
        <form className="max-w-[1000px]">
            <input type="text" placeholder="Name" className="w-full p-2 my-2 bg-transparent border-2 border-white rounded-lg outline-none focus:border-[#FDB515]"/>
            <input type="text" placeholder="Email" className="w-full p-2 my-2 bg-transparent border-2 border-white rounded-lg outline-none focus:border-[#FDB515]"/>
            <textarea placeholder="Message" rows="10" className="w-full p-2 my-2 bg-transparent border-2 border-white rounded-lg outline-none focus:border-[#FDB515]"/>
            <div className="flex items-center justify-center">
                <button type="submit" className="text-white group border-2 px-8 py-2 my-2 items-center hover:bg-[#FDB515] hover:border-[#FDB515] rounded-lg"> Sent </button>
            </div>
        </form>
    )
}

export default ContactForm;