import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <h4>Please fill out the form below</h4>
      <form>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label for="message">Message:</label>
        <br />
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Comment..."
        ></textarea>
        <br />
        <br />
        <button type="submit" value="Submit">
          Post Comment
        </button>
      </form>
    </>
  );
}

export default Contact;
