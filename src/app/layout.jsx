
import { GlobalProvider } from '../context/GlobalContext'
import { ToastContainer } from 'react-toastify'
import Loader from "../components/Loader"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Script from 'next/script'
import CookieConsent from "react-cookie-consent"

export const metadata = {
  title: 'Persons - Finder',
  description: 'A professional website for finding persons',
  lang: 'en',
  favicon: '/images/cropped-lupa-favicon.jpeg',
  charSet: 'UTF-8'
}

function RootLayout( { children } ) {

  return ( 

    <html lang={metadata.lang}>

      <head>
            
          <meta charSet={metadata.charSet} />
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />


          <title> {metadata.title} </title>

          <link rel="icon" type="image/jpeg" href={metadata.favicon} />
          <link rel="stylesheet" type="text/css" href="/libs/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/libs/animate/animate.css" />
          <link rel="stylesheet" type="text/css" href="/libs/owl-carousel/owl.carousel.css" />
          <link rel="stylesheet" type="text/css" href="/css/globals.css" />
          
      </head>

      <body>

          <GlobalProvider>
                <Loader />
                
                <ToastContainer 
                    position="top-center"
                    theme="colored"
                    limit={1}
                />

                <Header />
              
                <div className="container-fluid mb-5">
                  <div className="row">
                      <div className='col-12 p-0' > 

                          { children } 
                        
                      </div>
                  </div>
                </div>


                <CookieConsent
                    location="bottom"
                    buttonText="Sure man!!"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                    This website uses cookies to enhance the user experience.{" "}
                    <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
                </CookieConsent>


              
                <Footer />
          </GlobalProvider>

          <Script type="text/javascript" src="/libs/jquery/jquery.min.js" />
          <Script type="text/javascript" src="/libs/bootstrap/js/bootstrap.min.js" />
          <Script type="text/javascript" src="/libs/bootstrap/js/bootstrap.bundle.min.js" />
          <Script type="text/javascript" src="/libs/owl-carousel/owl.carousel.min.js" />
          <Script type="text/javascript" src="/libs/waypoints/jquery.waypoints.min.js" />
          <Script type="text/javascript" src="/libs/animateNumber/jquery.animateNumber.min.js"  />

          
          <Script type="text/javascript" src="/js/theme.js" strategy='lazyOnload' />

          <Script type="text/javascript" src="/libs/wow/wow.min.js" strategy="beforeInteractive" />
          <Script type="text/javascript" src="/libs/wow/wow.init.js" strategy="afterInteractive" />
                   

      </body>
    </html>

  )

}

export default RootLayout



