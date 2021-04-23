import React, { useContext } from "react";
import { Modal, Button } from "antd";
import { AdminContext } from "../../App";
import { Input } from "antd";
export default function AddStaffModal({ open, setopen }) {
  let context = useContext(AdminContext);
  console.log(context);
  let handleClose = () => setopen(false);
  return (
    <Modal visible={open} title="Add User" onCancel={handleClose}>
      <Input />
      <Input />
    </Modal>
  );
}
