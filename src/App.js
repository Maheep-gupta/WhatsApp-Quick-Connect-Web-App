// import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';
import Navbar from './component/Navbar';

function App() {

  const [mobileNumber, setmobileNumber] = useState("")
  return (
    <>
      <Navbar />
      <div className='main'>
        <div className='des'>

          <b>Welcome to our WhatsApp Quick Connect Web App!</b>
          <p>
            Have you ever wanted to send a WhatsApp message to someone without the hassle of manually entering their contact details? Our WhatsApp Quick Connect Web App makes it incredibly easy and convenient.
          </p>
          <p>

            To get started, simply follow these steps:
          </p>
          <ol type='1'>
            <li>
              Enter the recipient's phone number along with the country code. <b>Make sure to not include the plus sign (+) before the country code or any precceding zero.</b>
              <ul>
                <li>
                  <b>Use: 1XXXXXXXXXX</b>

                </li>
                <li>
                  <b>Don't use:+001-(XXX)XXXXXXX</b>

                </li>
              </ul>
            </li>
            <li>
              Click on the <b>'Open WhatsApp'</b> button.
            </li>
            <li>If clicking on open WhatsApp give any type of error this means you have enter the number wrong,then Please, recheck the phone number, or that number is not able to chat on WhatsApp,<b>(Mainly on Desktop)
            </b>
            
            </li>
          </ol>
        </div>
        <div className="input-group flex-nowrap width-css">
          <span className="input-group-text" id="addon-wrapping" style={{ fontWeight: "700", height: "3rem" }}>Mobile Number</span>
          <input type="number" className="form-control" placeholder="Mobile Number" value={mobileNumber} aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => {
            setmobileNumber(e.target.value)
          }} />
        </div>
        <button type="button" className="btn btn-success"><a href={`https://wa.me/${mobileNumber}`}>Open WhatsApp</a></button>
      </div>

    </>
  );
}

export default App;
