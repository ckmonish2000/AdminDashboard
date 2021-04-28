import React, { useState } from "react";
import { Modal, Input, message } from "antd";
import { closeModal } from "./EventHandlers";
import DateSelector from "./DateSelector";
export default function TimingModal({ Open, setOpen }) {
  const [InputField, setInputField] = useState([<DateSelector counter={0} />]);
  const [Counter, setCounter] = useState(1);
  return (
    <Modal
      visible={Open}
      title="Add Timings"
      onCancel={() => closeModal(setOpen)}
    >
      {InputField}
      <button
        onClick={() => {
          if (InputField.length <= 6) {
            setInputField([...InputField, <DateSelector counter={Counter} />]);
            setCounter(Counter + 1);
          } else {
            message.warn("cant add anymore");
          }
        }}
      >
        Add Day
      </button>
    </Modal>
  );
}
