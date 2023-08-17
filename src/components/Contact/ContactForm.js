const ContactForm = () => {
    return (
        <form className="max-w-[1000px] px-8">
            <input type="text" placeholder="Name" className="input"/>
            <input type="text" placeholder="Email" className="input"/>
            <textarea placeholder="Message" rows="10" className="input"/>
            <div className="flex items-center justify-center">
                <button type="submit" className="button"> Sent </button>
            </div>
        </form>
    )
}

export default ContactForm;