"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const ToolPageFacebook = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5);
    const [time, setTime] = useState('');
   
    const openModal = () => {
        setModalIsOpen(true);
        setTimeLeft(5);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (!modalIsOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [modalIsOpen]);

    useEffect(() => {
        if (timeLeft === 0) {

         window.location.href='https://dowloads.myads.dev/facebook.zip';
          closeModal();

        }
    }, [timeLeft]);

if(time) {
 
}


    return (
        <>

<head>
          <title>ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Facebook</title>
          <meta name="description" content="ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Landing page Facebook" />
          <meta property="og:image" content="https://www.myads.dev/logo.png" />
          <meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา" />

        </head>

        <div className="text-center">
          <h3>Dowloads Landing page Facebook</h3>

       
 

          <img src="/img/fbd.webp"  width={650} height={360}  alt="ทำการตลาดฟรี" className="imgfb"  />
        </div>
        <div className="text-center">
        
        
  
  
            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="mt-3"  onClick={openModal} >
            <img src="/img/dl.webp" width={100} height={100}  alt="ทำการตลาดฟรี" />
            </button>
            </div> 














<div className="modal fade" id="staticBackdrop"   data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

<div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">หลังจาก 30 วินาทีจะดาวน์โหลดอัตโนมัติ</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
      </div>
      <div class="modal-body">


        {modalIsOpen && (
                                <>  
                                    <div className="text-center"><div className='h2'>กรุณารอ {timeLeft} วินาที</div>
                                    
                                    
                                    </div> 
                                </>
                            )}


      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default ToolPageFacebook;