import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

init("Amgjas69dsuAUvY5x");
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [emailSent, setEmailSent] = useState(false);
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  const toastifySuccess = () => {
    toast("Email sent", {
      position: "bottom-right",
      autoClose: 30000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notifyToast",
    });
  };

  const submit = () => {
    if (name && email && message) {
      if (isValidEmail(email)) {
        const serviceId = "service_l9v9su9";
        const templateId = "template_o9dzb5a";
        const templateParams = {
          name,
          email,
          message,
        };

        emailjs
          .send(serviceId, templateId, templateParams)
          .then((response) => console.log("emailjs response:", response));

        setName("");
        setEmail("");
        setMessage("");
        // setEmailSent(true);
        toastifySuccess();
      } else {
        alert("Please fill in all fields correctly");
      }
    }
  };

  return (
    <div className="flex flex-col w-1/3 mx-auto mt-16 gap-8 h-screen ">
      <div className="flex justify-center text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-l from-lightteal  to-darkteal">
        <h1>Let's Connect!</h1>
      </div>
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="p-2 rounded"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
      <div className="flex justify-center">
        <button
          className=" px-6  text-darkteal border-2 border-darkteal rounded hover:text-lightteal hover:border-lightteal"
          onClick={submit}>
          Send <i class="pl-1 text-sm fa-solid fa-paper-plane"></i>
        </button>
      </div>

      <div className=" text-medteal flex justify-center">
        <ToastContainer className="text-medteal bg-inherit" />
      </div>
      <div className="grid content-center ">
        <div className="flex justify-evenly">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/kirkabbott1"
            className="text-medteal text-4xl hover:text-lightteal">
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kirkabbott1/"
            className="text-medteal text-4xl hover:text-lightteal">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
