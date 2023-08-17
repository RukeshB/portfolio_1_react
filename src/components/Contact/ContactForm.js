const ContactForm = () => {
    return (
        <form className="max-w-[1000px] px-8" action="https://getform.io/f/da4a294f-57d1-4349-b546-073a8bdc03f7" method="POST">
            <input name="name" type="text" placeholder="Name" className="input"/>
            <input name="email" type="text" placeholder="Email" className="input"/>
            <textarea name="message" placeholder="Message" rows="10" className="input"/>
            <div className="flex items-center justify-center">
                <button type="submit" className="button"> Sent </button>
            </div>
        </form>
    )
}

export default ContactForm;