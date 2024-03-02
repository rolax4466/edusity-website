import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "215b527e-31d2-4d14-bfc3-f0b5f57779ef");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
   
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message
                <img src={msg_icon} alt="" />
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minus iusto dicta obcaecati dolorem reprehenderit ratione doloribus optio deserunt accusantium.</p>
            <ul>
                <li><img src={mail_icon} alt="" />info@edusity@co.ke</li>
                <li><img src={phone_icon} alt="" />+254758388</li>
                <li><img src={location_icon} alt="" />spice city,ke</li>
            </ul>
        </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label >phone number</label>
            <input type="tel" name='phone'placeholder='Enter your mobile number' required />
            <label >Write your messages here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
