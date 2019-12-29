import React, { useState } from "react"
import Modal from "react-modal"

import IconClose from "../components/icon-close"
import useCardColor from "../hooks/useCardColor"
import Card from "../components/card"

const COLORS = [
  "bg-black",
  "bg-gray-700",
  "bg-red-500",
  "bg-orange-600",
  "bg-yellow-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
]

Modal.setAppElement("#___gatsby")

const modalStyles = {
  overlay: {
    backgroundColor: "#1a202c",
  },
  content: {
    position: "unset",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    height: "100%",
    maxHeight: "100vh",
    overflowY: "auto",
    backgroundColor: "#2D3748",
    borderRadius: 0,
    padding: 0,
    border: 0,
  },
}

const modalCloseTimeout = 50

const Settings = () => {
  const [color, setColor] = useCardColor()

  const [modalOpen, setModalOpen] = useState(true)

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => window.history.back(), modalCloseTimeout)
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="Modal"
      closeTimeoutMS={modalCloseTimeout}
    >
      <div className="flex justify-end items-center h-16 w-full absolute">
        <button
          onClick={closeModal}
          className="flex flex-col justify-end items-center p-2"
        >
          <IconClose />
        </button>
      </div>
      <div className="flex justify-center my-12">
        <Card size="sm" revealed color={color}>
          144
        </Card>
      </div>
      <div className="grid grid-fit max-w-lg my-0 mx-auto">
        {COLORS.map(c => (
          <button
            onClick={() => setColor(c)}
            key={c}
            className="flex justify-center items-center m-4 cursor-pointer"
          >
            <div className={`h-12 w-12 rounded-lg shadow-inner ${c}`} />
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default Settings
