import { Button, Input, TimePicker } from "antd";
import React from "react";
import { Day } from "./EventHandlers";
export default function DateSelector({ counter, Timing, setTiming, data }) {
  const setTime = (e, type) => {
    if (type === "from") {
      let tm = Timing;
      tm[counter].fromTime = e;
      setTiming(tm);
    } else {
      let tm = Timing;
      tm[counter].toTime = e;
      setTiming(tm);
    }
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
          onChange={(e) => setTime(e, "from")}
          name={`day-${counter}`}
          style={{
            width: "80%",
            borderRadius: "5pt",
            marginRight: "5pt",
          }}
        />
        <TimePicker
          placeholder="To Time"
          onChange={(e) => setTime(e, "to")}
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
