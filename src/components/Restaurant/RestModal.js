import React, { useState } from "react";
import { Modal } from "antd";
import MapPicker from "react-google-map-picker";
const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

export default function RestModal({ Open, setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  return (
    <Modal onCancel={closeModal} title="Add Restaurant" visible={Open}>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </Modal>
  );
}
