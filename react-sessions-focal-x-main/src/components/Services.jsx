export default function Services() {
  const services = [
    {
      image: "./public/brandingOrange.png",
      title: "Branding",
      paragraph1: "It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.",
      paragraph2:"Visual identity design. Define Brand Identity.Define Brand personality. Building Your brand strategy. Market research and competitors study.",
   
    },
    {
      image: "./public/markiting.png",
      title: "Branding",
      paragraph1: "It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.",
      paragraph2:"Visual identity design. Define Brand Identity.Define Brand personality. Building Your brand strategy. Market research and competitors study.",
   
    },
    {
      image: "./public/brandingOrange.png",
      title: "Web/App Development      ",
      paragraph1: "It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.",
      paragraph2:"Visual identity design. Define Brand Identity.Define Brand personality. Building Your brand strategy. Market research and competitors study.",
   
    },
  
    {
      image: "./public/markiting.png",
      title: "B2B & Partnerships      ",
      paragraph1: "It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.",
      paragraph2:"Visual identity design. Define Brand Identity.Define Brand personality. Building Your brand strategy. Market research and competitors study.",
   
    },
  
  
   

  ];
  // npm run dev

  return (
    <section
      id="services"
      style={{
        paddingTop: "40px",
    
        display: "flex",
        justifyContent: "between-end",
        flexWrap: "wrap",
      }}
    >

      {services.map((service, index) => {
   
          if(index % 2 == 0) {
          return (
            <>
            <div className="w"
              key={index}
              style={{
                marginBottom:"50px",
                width: "48%",
                padding: "20px 20px 40px 20px",
marginLeft:"0px",
                borderRadius: "8px",
                textAlign: "center",
                boxSizing: "border-box", backgroundColor: "#fff",
                boxShadow: " 0px 16px 40px rgba(112, 144, 176, 0.2)",
                borderRadius: "0px 50px 50px 0px",


              }}

            >

              <div >
                <div className="t1">
                  <h2 className="card"> {service.title}</h2>
                  <p className="t"> {service.paragraph1}</p>
                </div>



              </div>
              <h3 style={{
                textAlign: "left", paddingTop: "20px"
              }}>
                In focal X agency, we provide:</h3>
              <div className='servicemobile' style={{
                display: "flex",alignItems:"center", textAlign: "left"
              }}>
                <p className='r' style={{width:"70%",marginTop:"-70px"}}>
                {service.paragraph2}</p>

                <img src={service.image} style={{ width: "250px",marginTop:"-70px" }} />
              </div>
              <h3 className='r' style={{
                textAlign: "left",marginTop:"-70px"
              }}>
                We walk with you from A to Z.

              </h3>
            </div>
            
          </>
        );
            }

        else{
          return (
            <>
            <div className="w"
              key={index}
              style={{
                marginBottom:"50px",
                width: "48%",
                padding: "20px 20px 40px 20px",
marginLeft:"52px",
                borderRadius: "8px",
                textAlign: "center",
                boxSizing: "border-box", backgroundColor: "#fff",
                boxShadow: " 0px 16px 40px rgba(112, 144, 176, 0.2)",
                borderRadius: "50px 0px 0px 50px",


              }}

            >

              <div >
                <div className="t1">
                  <h2 className="card2"> {service.title}</h2>
                  <p className="t"> {service.paragraph1}</p>
                </div>



              </div>
              <h3 style={{
                textAlign: "left", paddingTop: "20px"
              }}>
                In focal X agency, we provide:</h3>
              <div style={{
                display: "flex",alignItems:"center", textAlign: "left"
              }}>
                <p className='r' style={{width:"70%",marginTop:"-70px"}}>
                {service.paragraph2}</p>

                <img src={service.image} style={{ width: "250px",marginTop:"-70px" }} />
              </div>
              <h3 className='r' style={{
                textAlign: "left",marginTop:"-70px"
              }}>
                We walk with you from A to Z.

              </h3>
            </div>
            
          </>
        );

        }

        
      })}

    </section>

  );
}


