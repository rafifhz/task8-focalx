

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Header() {
  return (
    <>

                <section className="banner">
                    <div className="cont1">
                    <h1 >Hey !! Mario still here, But don’t forget that

                    </h1>

                    <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of
                        creative people who specialize in:
                        Branding, Digital Marketing, Web/App Development, Ui/Ux
                        Content creation, Graphic design, Social media and More........
                        So you can take a tour in our website, OR just <span className="press"> Press Start :)</span></p>
                        
                </div>
                <div className="cont2">
                <img src={"./public/game.png"}  className="img1"/>
              
                <img src={"./public/pattren.png"} className="pattern5" />
                <img src={"./public/pressStart.svg"} className="pattern2" /> 
                <p class="start">START</p>
                </div>
                </section>

                
                <div className="foot-hero">
                <img src={"./public/gamefor-mobile.png"}  className="img2"/>
            

       
            <p className="Get">Get better experience Use web browser
        </p>
        <div className="links">
                <a className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="social"><FontAwesomeIcon icon={faBehance} /></a>
                <a className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="social"><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="social"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>


         
            <div>
                <p class="scroll">Scroll To Discover</p>
             
            </div>
            <div>
                <p class="allright">© 2021 - 2022 focal X agency All Right Reserved</p>
            </div>

</div>
    


 

</>

  );
}


