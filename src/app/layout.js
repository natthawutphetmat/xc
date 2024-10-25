 
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

import "./style.css"; // เปลี่ยนจาก "./setyls/style.css" เป็น "../styles/setyls/style.css"

import "./globals.css";  

import "bootstrap/dist/css/bootstrap.min.css";

// นำเข้า localFont จากโมดูลที่เกี่ยวข้อง (ถ้ามี)

const geistSans = {
  variable: "--font-geist-sans", // ใช้ตัวแปร CSS สำหรับ Geist Sans
};

const geistMono = {
  variable: "--font-geist-mono", // ใช้ตัวแปร CSS สำหรับ Geist Mono
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        {children}
 
         


        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
     
        <GoogleTagManager gtmId="GTM-MNDXXQCF" />

        <GoogleAnalytics gaId="G-X3BDJ31PJ0" />

      </body>
    </html>
  );
}
