import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import { NotificationContextProvider } from "../store/context";
import Head from "next/head";

function ContactPage() {
  return (
    <NotificationContextProvider>
      <Head>
        <title>Contact page</title>
        <meta name="description" content="Send your contact details" />
      </Head>
      <ContactForm />;
    </NotificationContextProvider>
  );
}

export default ContactPage;
