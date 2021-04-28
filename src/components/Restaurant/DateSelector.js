import { Button, Input, TimePicker } from "antd";
import React from "react";
import { Day } from "./EventHandlers";
export default function DateSelector({ counter, Timing, setTiming, data }) {
  const setFromTime = (e, counter) => {
    setTiming({
      ...Timing,
      [counter]: { ...Timing[counter], fromTime: "e" },
    });
  };
  const setToTime = (e, counter) => {
    setTiming({
      ...Timing,
      [counter]: { forTime: Timing[counter]?.fromTime, toTime: "e" },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "20pt",
        alignItems: "baseline",
      }}
    >
      <p>{Day(counter)}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "90%",
        }}
      >
        <TimePicker
          placeholder="From Time"
          onOk={setFromTime}
          name={`day-${counter}`}
          style={{
            width: "80%",
            borderRadius: "5pt",
            marginRight: "5pt",
          }}
        />
        <TimePicker
          placeholder="To Time"
          onChange={setToTime}
          name={`day-${counter}`}
          style={{
            width: "80%",
            borderRadius: "5pt",
            marginRight: "5pt",
          }}
        />
        <Button>Delete</Button>
      </div>
    </div>
  );
}
