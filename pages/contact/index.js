import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
init("Amgjas69dsuAUvY5x");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
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
          .then((response) => console.log(response))
          .then((error) => console.log(error));

        setName("");
        setEmail("");
        setMessage("");
        setEmailSent(true);
      } else {
        alert(":( Please fill in all fields correctly");
      }
    }
  };

  return (
    <div className="flex flex-col  w-1/2 mx-auto mt-16 gap-8 h-screen text-black ">
      <div className="flex justify-center text-2xl md:text-4xl text-medteal">
        <h1>Let's Connect!</h1>
      </div>
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-2 rounded"
        type="email"
        placeholder="Email address"
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
          className=" p-2 max-w-2xl text-medteal border-2 border-medteal rounded hover:text-lightteal hover:border-lightteal w-fit"
          onClick={submit}>
          Send it
        </button>
      </div>

      <div className=" text-medteal flex justify-center">
        <span className={`${emailSent ? "visible" : "hidden"} `}>
          Thank you for message, I'll be in touch soon!
        </span>
      </div>
      <div className="grid content-end pt-5">
        <div className="flex justify-evenly">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/kirkabbott1"
            className="text-teal-400 hover:text-lightteal">
            <FontAwesomeIcon className="text-6xl" icon="fa-brands fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kirkabbott1/"
            className="text-teal-400 hover:text-lightteal">
            <FontAwesomeIcon className="text-6xl" icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}
