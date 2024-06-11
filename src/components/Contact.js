import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="max-w-screen-lg mx-auto flex flex-col justify-center py-14 px-5">
      <div>
        <h1 className="inline border-b-4 border-slate-600 font-bold text-3xl">
          Contact
        </h1>
        <p className="mt-3 text-xl font-bold mb-10">
          Submit the form below to get in touch with me👇
        </p>
      </div>

      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/zbxdqmeb"
          method="post"
          className="flex flex-col gap-4 w-full md:w-2/3"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            required
          />

          <textarea
            name="message"
            rows="10"
            className="p-2 border-gray-500 border-2 rounded-md focus:outline-none"
            placeholder="Enter your message"
            required
          ></textarea>

          <div className="text-center">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
