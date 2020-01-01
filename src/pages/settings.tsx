import React, { useState } from "react";
import Modal from "react-modal";

import IconClose from "../components/icon-close";
import useCardColor from "../hooks/useCardColor";
import useSequence from "../hooks/useSequence";
import Card from "../components/card";
import Select from "../components/select";

const COLORS = [
  { className: "bg-black", name: "Black" },
  { className: "bg-gray-700", name: "Gray" },
  { className: "bg-red-500", name: "Red" },
  { className: "bg-orange-600", name: "Orange" },
  { className: "bg-yellow-500", name: "Yellow" },
  { className: "bg-green-500", name: "Green" },
  { className: "bg-teal-500", name: "Teal" },
  { className: "bg-blue-500", name: "Blue" },
  { className: "bg-indigo-500", name: "Indigo" },
  { className: "bg-purple-500", name: "Purple" },
  { className: "bg-pink-500", name: "Pink" }
];

export enum SEQUENCE {
  FIBONACCI = "fibonacci",
  T_SHIRT_SIZE = "t-shirt-size",
  STANDARD = "standard"
}

export const SEQUENCE_VALUES = {
  [SEQUENCE.FIBONACCI]: [
    "0",
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "144"
  ],
  [SEQUENCE.T_SHIRT_SIZE]: ["xs", "sm", "md", "lg", "xl"],
  [SEQUENCE.STANDARD]: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
};

const SEQUENCES = [
  {
    name: "Fibonacci",
    key: SEQUENCE.FIBONACCI,
    example: "1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144"
  },
  {
    name: "T-Shirt Sizes",
    key: SEQUENCE.T_SHIRT_SIZE,
    example: "xs, sm, md, lg, xl"
  },
  {
    name: "Standard",
    key: SEQUENCE.STANDARD,
    example: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
  }
];

Modal.setAppElement("#___gatsby");

const modalStyles = {
  overlay: {
    backgroundColor: "#1a202c"
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
    padding: 0,
    borderRadius: 0,
    border: 0
  }
};

const modalCloseTimeout = 50;

function Settings() {
  const [color, setColor] = useCardColor();
  const { setSequence } = useSequence();

  const [modalOpen, setModalOpen] = useState(true);

  function closeModal() {
    setModalOpen(false);
    setTimeout(() => window.history.back(), modalCloseTimeout);
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
        <Card size="sm" color={color}>
          144
        </Card>
      </div>

      <div className="p-6">
        <Select initialValue={color} onChange={setColor}>
          <Select.Label>Color</Select.Label>
          <Select.Body>
            {COLORS.map(({ className, name }) => (
              <Select.Option value={className} key={className}>
                <div className="flex flex-col justify-center items-center px-8 py-6 text-center px-8 py-6">
                  <div className={`rounded-lg h-12 w-12 ${className}`} />
                  <div className="mt-3">{name}</div>
                </div>
              </Select.Option>
            ))}
          </Select.Body>
        </Select>
      </div>

      <div className="p-6">
        <Select initialValue={SEQUENCE.FIBONACCI} onChange={setSequence}>
          <Select.Label>Sequence</Select.Label>
          <Select.Body>
            {SEQUENCES.map(({ name, example, key }) => (
              <Select.Option value={key} key={key}>
                <div className="p-6">
                  <h4>{name}</h4>
                  <span>{example}</span>
                </div>
              </Select.Option>
            ))}
          </Select.Body>
        </Select>
      </div>
    </Modal>
  );
}

export default Settings;
