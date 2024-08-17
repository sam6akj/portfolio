import React from "react";

function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-[#222] p-4 text-white"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-extrabold text-gray-400">
            Contact Me
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/arolrgkb"
            className="flex flex-col w-full md:w-2/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border rounded-[16px] text-white focus:outline-none placeholder:text-gray-400 placeholder:text-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-8 p-3 bg-transparent border rounded-[18px] text-white focus:outline-none placeholder:text-gray-400 placeholder:text-lg"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-3 bg-transparent border rounded-[18px] text-white focus:outline-none placeholder:text-gray-400 placeholder:text-lg"
            ></textarea>

            <button
              type="submit"
              className="text-black text-xl font-bold bg-[#fff] px-8 py-3 my-8 mx-auto flex items-center rounded-[18px] hover:scale-110 duration-300"
            >
              Submit
            </button>


          </form>
        </div>
      </div>
    </div>

  );
};

export default Contact;