import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexWrap: "wrap",
        textAlign: "left",
      }}
    >
      <div className="f"
        style={{
          
          padding: "0 20px",
          boxSizing: "border-box",
          width:'300px'
        }}
      >
        <img src="./logofooter.jpg" style={{
          width:'220px',
        }} />
        <h2 style={{
         textAlign:'left',marginTop:'10px'
        }}>Head Office</h2>
        <p style={{
         textAlign:'left'}}>
        Syria - Latakia - grh2+hjx<br></br>
35.5199518
        </p>
      </div>
      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Sales</h2>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none",textAlign:'left' }}>
          contact@focal-x.com
          </a>
        </p>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none",textAlign:'left' }}>
          +963 953 666 056
          </a>
        </p>
        <h2 style={{marginTop:'20px'}}>Public Relations</h2>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          pr@focal-x.com
          </a>
        </p>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          +963 953 666 052

          </a>
        </p>
      </div>
      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Customer Support
</h2>
<p>
          <a href="#" style={{ color: "#fff", textDecoration: "none",textAlign:'left' }}>
          contact@focal-x.com
          </a>
        </p>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none",textAlign:'left' }}>
          +963 953 666 056
          </a>
        </p>
        <h2 style={{marginTop:'20px'}}>Human Resources</h2>
        <p>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          hr@focal-x.com
          </a>
        </p>
     
       
      </div>

      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Useful Links</h2>
        <p>Clients & Partner</p>
        <p>Check Certificat ID</p>
        <p>Check for employee</p>
        <p>Our Brand ID guidlines</p>
      </div>

      <div
        style={{
          flex: "1 1 200px",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Keep In Touch</h2>
        <div className="links2">
                <a className="social2"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="social2"><FontAwesomeIcon icon={faBehance} /></a>
                <a className="social2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="social2"><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="social2"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
      </div>


    </footer>




<div
style={{
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  flexWrap: "wrap",
  textAlign: "center",
}}
>
<div className="foot2"
  style={{
    flex: "1 1 200px",
    padding: "0 20px",
    boxSizing: "border-box",
  }}
>
 
  <p className='liner' style={{
   textAlign:'left',width:'30%',fontSize:'14px'}}>
  © 2021 - 2023 focal X L.L.C All Right Reserved
  </p>
</div>

</div>
</>
  );
}
