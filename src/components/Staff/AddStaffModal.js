import React from "react";
import { Modal, Button } from "antd";

export default function AddStaffModal({ open, setopen }) {
  let handleClose = () => setopen(false);
  return (
    <Modal visible={open} title="Add User" onCancel={handleClose}>
      test
    </Modal>
  );
}
