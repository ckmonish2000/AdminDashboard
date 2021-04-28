import React, { useState } from "react";
import { Modal, Input, message } from "antd";
import { closeModal } from "./EventHandlers";
import DateSelector from "./DateSelector";
export default function TimingModal({ Open, setOpen }) {
  const [Counter, setCounter] = useState(2);
  const [Timing, setTiming] = useState({
    [`1`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "sunday" },
    [`2`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "monday" },
    [`3`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "tuesday" },
    [`4`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "wednesday" },
    [`5`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "thursday" },
    [`6`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "friday" },
    [`7`]: { fromTime: "00:00:00", toTime: "00:00:00", weekday: "saturday" },
  });

  const [InputField, setInputField] = useState([
    <DateSelector
      counter={1}
      data={Timing[Counter]}
      Timing={Timing}
      setTiming={setTiming}
    />,
  ]);

  console.log(Timing);
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
