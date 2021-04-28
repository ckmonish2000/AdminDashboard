import React, { useState, useEffect } from "react";
import { Modal, Input, message } from "antd";
import { closeModal } from "./EventHandlers";
import DateSelector from "./DateSelector";
export default function TimingModal({ Open, setOpen }) {
  const [Counter, setCounter] = useState(1);
  const [Timing, setTiming] = useState([
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "sunday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "monday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "tuesday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "wednesday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "thursday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "friday" },
    { fromTime: "00:00:00", toTime: "00:00:00", weekday: "saturday" },
  ]);

  console.log(Timing, "tming");

  const [InputField, setInputField] = useState([
    <DateSelector
      counter={0}
      data={Timing[Counter]}
      Timing={Timing}
      setTiming={setTiming}
    />,
  ]);

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
            setInputField([
              ...InputField,
              <DateSelector
                data={Timing.length !== 0 ? Timing[Counter] : {}}
                Timing={Timing}
                setTiming={setTiming}
                counter={Counter}
              />,
            ]);
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
