import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form action="https://formspree.io/f/mzzepovy" method="post">
        <input type="text" required placeholder="Enter your name..." name="username" />
        <input type="email" required placeholder="Enter your email" name="email" id="" />
        <textarea
          name="message"

          placeholder="your message here..."
          id=""
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
