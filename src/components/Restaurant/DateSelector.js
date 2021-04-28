import { Button, Input, TimePicker } from "antd";
import React from "react";
import { Day } from "./EventHandlers";
export default function DateSelector({ counter }) {
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
          onChange={(e) => console.log(e)}
          name={`day-${counter}`}
          style={{
            width: "95%",
            borderRadius: "5pt",
          }}
        />
        <Button>Delete</Button>
      </div>
    </div>
  );
}
