import React, { useContext, useState } from "react";
import { Modal, Button } from "antd";
import { AdminContext } from "../../App";
import { Input } from "antd";
import { field } from "./styles";
export default function AddStaffModal({ open, setopen }) {
  let context = useContext(AdminContext);
  const [ModalParams, setModalParams] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    role: "",
  });

  // handlers
  let handleClose = () => {
    setopen(false);
    setModalParams({
      email: "",
      name: "",
      password: "",
      phone: "",
      role: "",
    });
  };

  const HandleChange = (e) => {
    setModalParams({ ...ModalParams, [e.target.name]: e.target.value });
  };

  return (
    <Modal visible={open} title="Add User" onCancel={handleClose}>
      <Input
        name="email"
        placeholder="Email"
        value={ModalParams.email}
        onChange={HandleChange}
        style={field}
      />
      <Input
        name="name"
        placeholder="Name"
        onChange={HandleChange}
        value={ModalParams.name}
        style={field}
      />
      <Input
        name="password"
        placeholder="Password"
        onChange={HandleChange}
        type="password"
        value={ModalParams.password}
        style={field}
      />
      <Input
        name="phone"
        placeholder="Phone"
        onChange={HandleChange}
        style={field}
        value={ModalParams.phone}
      />
    </Modal>
  );
}
