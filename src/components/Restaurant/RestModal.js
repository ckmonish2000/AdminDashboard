import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddLocation from "./AddLocationModal";

export default function RestModal({ Open, setOpen }) {
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
  const closeModal = () => {
    setOpen(false);
  };
  const [OpenLocation, setOpenLocation] = useState(false);
  return (
    <Modal visible={Open} onCancel={closeModal} title="Add restaurant">
      <AddLocation
        Open={OpenLocation}
        setOpen={setOpenLocation}
        Data={RestModalParams}
        setData={setRestModalParams}
      />
      <Button onClick={() => setOpenLocation(true)}>Add Location</Button>
    </Modal>
  );
}
