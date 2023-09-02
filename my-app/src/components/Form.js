import "./Form.css"
import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89qv02u', 'template_pqw57ij', form.current, '04oTAt_60ZAxj1Aft')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="text" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form