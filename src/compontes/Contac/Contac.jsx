import React from 'react'
import './Contac.css'
function Contac() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63d0777c-ca08-4b4f-9125-e8edd0c5865c");

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
    <div className='contact' >
      <div className='contact-col'>
        <h3> Send us a message <img src="msg-icon.png" alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li > <img src="mail-icon.png" alt="" />Contact@tusharchauhan.</li>
          <li> <img src="phone-icon.png" alt="" />+91 86301168..</li>
          <li> <img src="location-icon.png" alt="" />jaspur Uttrakhand</li>
        </ul>
      </div>
      
      <div className='contact-col'>
        
        <form onSubmit={onSubmit}>
          <label htmlFor=""> Your name</label>
          <input type="text" name='name 'placeholder=' Enter your name'required />
          <label htmlFor=""> Phone Number</label>
          <input type="tel" name='phone' placeholder=' Enter your mobile number' required/>
          <label htmlFor=""> Write your message here</label>
          <textarea name="message" id="" rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark'>  Sumbit Now</button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contac
