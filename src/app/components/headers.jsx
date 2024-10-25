 

import React from 'react'

export default function Headers() {
  return (
    <>


<nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Ninth navbar example">
    <div className="container-xl">
      <a className="navbar-brand" href="/"> 
      <img src="/logo.png" width={50}  alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#facebook">facebook</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link active" aria-current="page" href="#Google">Google</a>
             
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link active" aria-current="page" href="#contact">contact</a>
             
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link active" aria-current="page" href="/dowloads">Dowloads</a>
             
          </li>
        </ul>
        <form role="search">
        
        <a href="https://lin.ee/RAtXbEtM"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></a>

        </form>
      </div>
    </div>
  </nav>

  <header>
        <main className ="container">
          <div className ="text-center">

            <div className="boxbar">  
          <img src="/img/bar.webp" className='bar'  alt="bar" />
          </div>

            <h1>รับจ้างยิงแอดทำโฆษณาออนไลน์</h1>
            <h3>รับทำโฆษณา Facebook Ads</h3>
            <h3>รับทำโฆษณา Google</h3>
            <p>
              ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท <br /> ไม่มีค่าใช้จ่ายเพิ่มเติม มีรีวิวจากลูกค้าจริงให้ชม
            </p>
          </div>
          <div className ="text-center mt-3">
            <a href="https://lin.ee/RAtXbEtM">
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0" />
            </a>
          </div>
        </main>
        
      </header>


      
    </>
  )
}
