import { useContext, useRef, useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";
import NotificationContext from "../../store/context";
import Notification from "../ui/notification";

function ContactForm() {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  async function submitHandler(e) {
    e.preventDefault();
    notificationCtx.showNotification({
      title: "Sending Message",
      message: "Sending",
      status: "pending",
    });
    const email = emailInputRef.current.value;
    const userName = nameInputRef.current.value;
    const message = messageInputRef.current.value;

    axios
      .post("/api/contacts", {
        email: email,
        userName: userName,
        message: message,
      })
      .then(() => {
        notificationCtx.showNotification({
          title: "Message send successfull",
          message: "Sent",
          status: "success",
        });
        emailInputRef.current.value = "";
        nameInputRef.current.value = "";
        messageInputRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        notificationCtx.showNotification({
          title: "Something went wrong",
          message: error.message || "Something went wrong",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="mesage">Your Message</label>
          <textarea
            type="message"
            id="message"
            rows="5"
            required
            ref={messageInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </section>
  );
}

export default ContactForm;
