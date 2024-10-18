import Image from "next/image"
import profileImage from "@/data/profile.png"
import React, { useState } from 'react'

const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <Image 
        src={profileImage} 
        alt="Samuel Amoah" 
        width={50} 
        height={60} 
        className="rounded-full w-15 h-15 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-102" 
        onClick={openModal} 
      />
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out" onClick={closeModal}>
          <div className="relative p-4 rounded-full transition-transform duration-300 ease-in-out transform scale-100" onClick={(e) => e.stopPropagation()}>
            <Image src={profileImage} alt="Samuel Amoah" width={300} height={360} className="rounded-lg w-[70vh]" />
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
