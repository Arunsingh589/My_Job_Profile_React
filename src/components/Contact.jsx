import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
         data-aos-duration="1000"
        >
          <a href='https://www.instagram.com/thakur_589/' target='_blank' className="items">
            <FaSquareInstagram className='icons' />
          </a>
          <a href='http://www.google.com' target='_blank' className="items">
            <CiFacebook className='icons' />
          </a>
          <a href='http://linkedin.com/in/arun-singh-27148b254' target='_blank' className="items">
            <CiLinkedin className='icons' />
          </a>
          <a href='http://www.google.com' target='_blank' className="items">
            < FaXTwitter className='icons' />
          </a>
          <a href='https://github.com/Arunsingh589' target='_blank' className="items">
            <FaGithubSquare className='icons' />
          </a>
          <a href='mailto:as3945787@gmail.com' target='_blank' className="items">
            <SiGmail className='icons' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
