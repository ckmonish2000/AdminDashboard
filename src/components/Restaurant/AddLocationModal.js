import React, { useState } from "react";
import { Modal } from "antd";
import MapPicker from "react-google-map-picker";
import { closeModal } from "./EventHandlers";
const DefaultLocation = { lat: 11, lng: 79 };
const DefaultZoom = 10;

export default function AddLocation({ Open, setOpen, Data, setData }) {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    // setLocation({ lat: lat, lng: lng });
    setData({ ...Data, lat: lat, long: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  return (
    <Modal
      onCancel={() => closeModal(setOpen)}
      onOk={() => closeModal(setOpen)}
      title="Add Location"
      visible={Open}
    >
      <div style={{ height: "50vh", overflow: "hidden" }}>
        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          style={{ height: "700px" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />
      </div>
    </Modal>
  );
}
