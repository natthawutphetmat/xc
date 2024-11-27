 
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from './components/headers'
import Footer from './components/footer'
import "./style.css"; // เปลี่ยนจาก "./setyls/style.css" เป็น "../styles/setyls/style.css"
import "./nav.css"; // เปลี่ยนจาก "./setyls/style.css" เป็น "../styles/setyls/style.css"
import "./form.css"; // เปลี่ยนจาก "./setyls/style.css" เป็น "../styles/setyls/style.css"

import "./globals.css";  

import "bootstrap/dist/css/bootstrap.min.css";

 

const geistSans = {
  variable: "--font-geist-sans",  
};

const geistMono = {
  variable: "--font-geist-mono",  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="mFESL3SA5vVBU7zoYemzaPAw5NuqtNcvkAa2aSQ1QEA" />
      <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16714335017"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'AW-16714335017');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
    
        {children}
 
         


        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
     
        <GoogleTagManager gtmId="GTM-MNDXXQCF" />

        <GoogleAnalytics gaId="G-X3BDJ31PJ0" />

        <Footer/>
      </body>
    </html>
  );
}
