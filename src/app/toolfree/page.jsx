"use client";
import Image from "next/image";
import Head from "next/head"; // Import Head from Next.js
import React, { useState, useEffect } from "react";

const Toolfree = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const openModal = () => {
    setModalIsOpen(true);
    setTimeLeft(30);
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
      window.location.href = "https://dowload.myads.dev/facebook/facebook.zip";
      closeModal();
    }
  }, [timeLeft]);

  return (
    <>
      {/* Place <Head> component at the top level */}
      <Head>
        <title>ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Facebook</title>
        <meta
          name="description"
          content="ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Landing page Facebook"
        />
        <meta property="og:image" content="https://www.myads.dev/logo.png" />
        <meta
          name="keywords"
          content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา"
        />
      </Head>

      <div className="text-center">
        <h3>Dowloads Landing page Facebook</h3>
        <Image
          src="/img/fbd.webp"
          width={650}
          height={360}
          alt="ทำการตลาดฟรี"
          className="imgfb"
        />
      </div>

      <div className="text-center">
        <button type="button" className="mt-3" onClick={openModal}>
          <Image
            src="/img/dl.webp"
            width={100}
            height={100}
            alt="ทำการตลาดฟรี"
          />
        </button>
      </div>

      {modalIsOpen && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">
                  หลังจาก 30 วินาทีจะดาวน์โหลดอัตโนมัติ
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <h2>กรุณารอ {timeLeft} วินาที</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolfree;
