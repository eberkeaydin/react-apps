import React from "react";
import Form from "./Form";
import List from "./List";
import {useState, useEffect} from "react";
import "./styles.css"

function Contact() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Berke Aydin",
            phone_number:"123465"
        },
        {
            fullname:"Gözde Şeleci",
            phone_number:"123465"
        },
        {
            fullname:"Alice Aydin",
            phone_number:"123465"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>CONTACTS</h1>
            <List contacts ={contacts}/>
            <Form addContacts = {setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contact;