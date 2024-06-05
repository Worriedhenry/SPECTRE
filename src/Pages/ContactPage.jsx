import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Contact/Contact";
const ContactPage = ({socket}) => {
    return (
        <div>
            <Header socket={socket} />
            <Contact />
            <Footer />

        </div>
    )
}
export default ContactPage;

