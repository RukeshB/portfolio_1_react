import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="max-w-[1000px]">
          <h3 className="text-2xl font-bold md:text-4xl border-b-4 border-[#FDB515]">
            Contact
          </h3>
        </div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
