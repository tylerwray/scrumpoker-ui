import React, { useState } from "react"
import Modal from "react-modal"

import IconClose from "../components/icon-close"
import useCardColor from "../hooks/useCardColor"
import Card from "../components/card"
import Select from "../components/select"

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
    position: "relative",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    height: "100%",
    maxHeight: "100vh",
    overflowY: "scroll",
    backgroundColor: "#2D3748",
    padding: "1rem",
    borderRadius: 0,
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
      <div className="flex justify-end items-center absolute top-0 right-0">
        <button onClick={closeModal} className="p-4">
          <IconClose />
        </button>
      </div>
      <div className="flex justify-center my-12">
        <Card size="sm" revealed color={color}>
          144
        </Card>
      </div>
      <Select value={}>
        <Select.Header>Color</Select.Header>
        {COLORS.map(c => (
          <Select.Option value={c} key={c}>
            <div className={`h-12 w-12 rounded-lg shadow-inner ${c}`} />
          </Select.Option>
        ))}
      </Select>
      {/*
      <div className="grid grid-fit max-w-lg my-0 mx-auto mb-8">
        {COLORS.map(c => (
          <button
            onClick={() => setColor(c)}
            key={c}
            className="flex justify-center items-center m-4 cursor-pointer"
          >
            <div className={`h-12 w-12 rounded-lg shadow-inner ${c}`} />
          </button>
        ))}
      </div> */}
      <Select>
        <Select.Header>Sequence</Select.Header>
        <Select.Option>Fibonacci</Select.Option>
        <Select.Option>Manicotti</Select.Option>
        <Select.Option>Happy Feet</Select.Option>
        <Select.Option>Nana Patti</Select.Option>
      </Select>
    </Modal>
  )
}

export default Settings
