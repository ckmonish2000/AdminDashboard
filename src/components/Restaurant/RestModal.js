import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import AddLocation from "./AddLocationModal";
import { closeModal } from "./EventHandlers";
import TimingModal from "./TimingModal";

export default function RestModal({ Open, setOpen }) {
  const [timingOpen, settimingOpen] = useState(false);
  const [RestModalParams, setRestModalParams] = useState({
    add: "",
    category: [],
    contact: "",
    lat: 11,
    long: 79,
    name: "",
    type: [],
    timing: [],
    traffic: [],
  });
  console.log(RestModalParams);

  const [OpenLocation, setOpenLocation] = useState(false);
  const { Option } = Select;
  return (
    <Modal
      visible={Open}
      onCancel={() => closeModal(setOpen)}
      title="Add restaurant"
    >
      <Input placeholder="Restaurant Name" name="name" />

      <Input placeholder="Address" name="add" />

      <Input placeholder="Contact" name="contact" />

      <Select style={{ width: "100%" }} placeholder="Restaurant Category">
        <Option value="BARS">Bar</Option>
        <Option value="HANGOUT_SPOT">Hang Out</Option>
        <Option value="STAR_DINE">Star Dine</Option>
        <Option value="FAST_FOOD">Fast Food</Option>
      </Select>
      <br />

      <Select style={{ width: "100%" }} placeholder="Restaurant Type">
        <Option value="VEG">VEG</Option>
        <Option value="NONVEG">Non Veg</Option>
      </Select>

      <br />

      <Button>Add Traffic</Button>
      <Button onClick={() => settimingOpen(true)}>Add Timing</Button>
      <Button onClick={() => setOpenLocation(true)}>Add Location</Button>

      {/* modals */}
      <AddLocation
        Open={OpenLocation}
        setOpen={setOpenLocation}
        Data={RestModalParams}
        setData={setRestModalParams}
      />
      <TimingModal Open={timingOpen} setOpen={settimingOpen} />
    </Modal>
  );
}
