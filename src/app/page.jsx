import React from 'react'
import Footer from './components/footer'
import Header from './components/headers'
 
import Secsion from './components/secsions'
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'




export default function Homepage() {
  return (
    <>
 

 
 <GoogleTagManager gtmId="GTM-XYZ" />
<title>รับจ้างยิงแอดทำโฆษณาออนไลน์ 
</title>
<meta name="title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta name="description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />

 
<meta property="og:type" content="website" />
<meta property="og:url" content="https://myads.dev/" />
<meta property="og:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta property="og:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />
<meta property="og:image" content="https://myads.dev/logo.png" />

 
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://myads.dev/" />
<meta property="twitter:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta property="twitter:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />
<meta property="twitter:image" content="https://myads.dev/logo.png" />
<meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />




<div className="line">  
  <a href="https://lin.ee/RAtXbEtM">
  <img src="/imgs/line.png"  alt="line" />
  </a>
  
  
  </div>
     <Header/>
     <Secsion/>
   
     <Footer/>
   
    </>
  )
}
