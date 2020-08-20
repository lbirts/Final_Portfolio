import React, {useState, useEffect} from "react"
import './contact.css'
import emailjs from 'emailjs-com'
import Lottie from 'react-lottie-segments';
import Json from '../assets/21735-join-chat.json'

 
function Contact(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [btnText, setBtnText] = useState("Send")

  useEffect(() => {
    emailjs.init("user_UgVJMKr7nOqKUY3z8wt5z")
  }, [])

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value)
    } else if (e.target.id === "email") {
      setEmail(e.target.value)
    } else if (e.target.id === "subject") {
      setSubject(e.target.value)
    } else if (e.target.id === "message") {
      setMessage(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setBtnText("Sending...")

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

    emailjs.send("gmail", "portfolio_site_emails", templateParams)
      .then(
        function(response) {
          console.log(response)
          setBtnText("Message Sent")
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
          setTimeout(() => {
            setBtnText("Send")
          }, 3000);
        }, function(err) {
          console.log(err)
          setBtnText("Message Failed")
          setTimeout(() => {
            setBtnText("Send")
          }, 3000);
        }
      )
  }

  return (
    <div id="contact" style={{backgroundColor: "#283060"}}>
      <h1>Don't be a stranger</h1>
      <h3 className="form-head">Just say hello</h3>
      <div className="contact-wrapper">
        <form name="contact" className="contact-form" onSubmit={handleSubmit}>
          <input required placeholder="Name" className="input" type="text" name="name" id="name" value={name} onChange={handleChange} autoComplete="off"/>
          <br/>
          <input required placeholder="Email" className="input" type="email" name="email" id="email" value={email} onChange={handleChange} autoComplete="off"/>
          <br/>
          <input required placeholder="Subject" className="input" type="text" name="subject" id="subject" value={subject} onChange={handleChange} autoComplete="off"/>
          <br/>
          <textarea required placeholder="Your Message" name="message" className="input" id="message" value={message} onChange={handleChange}/>
          <br/>
          <button className="submit btn" type="submit">{btnText}</button>
        </form>
        <div className="contact-ani">
          <Lottie
          options={{loop: true, autoplay: true, animationData: Json}}
          ></Lottie>
        </div>
      </div>
    </div>
  )
}
 
export default Contact;