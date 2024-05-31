export default function Price() {
  const prices = [
    {
      
      title: "Basic      ",
      paragraph1: "for very small businesses and freelancers.",
      paragraph2:"Disk Space:",
      paragraph3:" 500 M.B ",
      paragraph4:" Bandwidth: ",
      paragraph5:" 500 M.B ",
      paragraph6:" SubDomains: ",
      paragraph7:" Unlimited ",
      paragraph8:" Parked Domains: ",
      paragraph9:" Unlimited ",
      paragraph10:" E-mail Accounts: ",
      paragraph11:" Unlimited ",
      paragraph12:" Cpanel (control panel): ",
      paragraph13:" Yes",
      paragraph14:" Money Back Guarantee: ",
      paragraph15:" 14 Days",




    },
    {
      title: "Pro      ",
      paragraph1: "for Individuals that need sharing vlogs or need huge portfolio.",
      paragraph2:"Disk Space:",
      paragraph3:" 500 M.B ",
      paragraph4:" Bandwidth: ",
      paragraph5:" 500 M.B ",
      paragraph6:" SubDomains: ",
      paragraph7:" Unlimited ",
      paragraph8:" Parked Domains: ",
      paragraph9:" Unlimited ",
      paragraph10:" E-mail Accounts: ",
      paragraph11:" Unlimited ",
      paragraph12:" Cpanel (control panel): ",
      paragraph13:" Yes",
      paragraph14:" Money Back Guarantee: ",
      paragraph15:" 14 Days",

    },
    {
      title: "Business      ",
      paragraph1: "for Team that need sharing and reporting.",
      paragraph2:"Disk Space:",
      paragraph3:" 500 M.B ",
      paragraph4:" Bandwidth: ",
      paragraph5:" 500 M.B ",
      paragraph6:" SubDomains: ",
      paragraph7:" Unlimited ",
      paragraph8:" Parked Domains: ",
      paragraph9:" Unlimited ",
      paragraph10:" E-mail Accounts: ",
      paragraph11:" Unlimited ",
      paragraph12:" Cpanel (control panel): ",
      paragraph13:" Yes",
      paragraph14:" Money Back Guarantee: ",
      paragraph15:" 14 Days",

    },
    {
      title: "Enterprise      ",
      paragraph1: "for large companies that need admins & security",
      paragraph2:"Disk Space:",
      paragraph3:" 500 M.B ",
      paragraph4:" Bandwidth: ",
      paragraph5:" 500 M.B ",
      paragraph6:" SubDomains: ",
      paragraph7:" Unlimited ",
      paragraph8:" Parked Domains: ",
      paragraph9:" Unlimited ",
      paragraph10:" E-mail Accounts: ",
      paragraph11:" Unlimited ",
      paragraph12:" Cpanel (control panel): ",
      paragraph13:" Yes",
      paragraph14:" Money Back Guarantee: ",
      paragraph15:" 14 Days",

    },
   
  
  
   

  ];
  // npm run dev

  return (
    <section  id="price" style={{ padding:'80px 0'}}>
<h2 style={{ fontSize: "32px", textAlign: "center",color:'#fff' }} >Hosting Pricing
</h2>
    <div
     
      style={{
        paddingTop: "40px",
    
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >


      {prices.map((price, index) => {
   
          if(index % 2 == 0) {
          return (
            <>

              <div key={index} className="card1price">

          

              <div >
                <div className="t1">
                  <h2 className=""> {price.title}</h2>
                  <p className="ti"> {price.paragraph1}</p>
                </div>



              </div>
           
              <div style={{
                 textAlign: "left"
              }}>
             <p>{price.paragraph2} <strong>{price.paragraph3}</strong></p>
               <p> {price.paragraph4} <strong>{price.paragraph5}</strong></p>
               <p> {price.paragraph6} <strong>{price.paragraph7}</strong></p>
               <p> {price.paragraph8} <strong>{price.paragraph9}</strong></p>
               <p> {price.paragraph10} <strong>{price.paragraph11}</strong></p>
               <p> {price.paragraph12} <strong>{price.paragraph13}</strong></p>
               <p> {price.paragraph14} <strong>{price.paragraph15}</strong></p>





              </div>
              <h3 className="Rbtn">
               You will have 1 Gift

              </h3>
            </div>
            
          </>
        );
            }

        else{
          return (
            <>
            <div key={index} className="card1price2">

              <div >
                <div className="t1">
                  <h2 className=""> {price.title}</h2>
                  <p className="ti"> {price.paragraph1}</p>
                </div>



              </div>
             
              <div style={{
                 textAlign: "left"
              }}>
             <p>{price.paragraph2} <strong>{price.paragraph3}</strong></p>
               <p> {price.paragraph4} <strong>{price.paragraph5}</strong></p>
               <p> {price.paragraph6} <strong>{price.paragraph7}</strong></p>
               <p> {price.paragraph8} <strong>{price.paragraph9}</strong></p>
               <p> {price.paragraph10} <strong>{price.paragraph11}</strong></p>
               <p> {price.paragraph12} <strong>{price.paragraph13}</strong></p>
               <p> {price.paragraph14} <strong>{price.paragraph15}</strong></p>
              </div>
              <h3 className="Rbtn2">
               You will have 1 Gift

              </h3>
            </div>
            
          </>
        );

        }

        
      })}

    </div>
    <p style={{ fontSize: "16px",fontWeight:'400', textAlign: "center",color:'#fff',marginTop:'30px' }} >Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.

</p>
<p style={{ fontSize: "15px",fontWeight:'700', textAlign: "center",color:'#fff' }} >Go Online, choose your plan and Contact us on:    contact@focal-x.com     |     +963 935 033 139

</p>
    </section>
  );
}