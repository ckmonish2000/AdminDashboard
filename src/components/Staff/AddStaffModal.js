import React, { useContext, useState } from "react";
import { Modal, Button, message } from "antd";
import { AdminContext } from "../../App";
import { Input } from "antd";
import { field } from "./styles";
import { CreateStaff } from "../../services/mutations";
import { useMutation } from "@apollo/client";

export default function AddStaffModal({ open, setopen, refresh }) {
  const [CreateStaffMutation, CreatedData] = useMutation(CreateStaff);
  let { Roles, Permissions } = useContext(AdminContext);
  let MapData = Roles.data?.roles;
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

  const HandleOk = (e) => {
    let { phone, name, password, role, email } = ModalParams;
    if (
      phone !== "" &&
      name !== "" &&
      password !== "" &&
      role !== "" &&
      email !== ""
    ) {
      CreateStaffMutation({
        variables: { phone, name, password, role, email },
      })
        .then((data) => {
          let usr = data.data?.createStaffAccount?.user?.name;
          message.success(`user ${usr} has been created successfully`);
          handleClose();
          refresh();
        })
        .catch((err) => console.log(err));
    } else {
      message.warn("Please Dont leave any field empty");
    }
  };

  return (
    <Modal
      visible={open}
      title="Add User"
      onCancel={handleClose}
      onOk={HandleOk}
    >
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
      <select
        style={field}
        value={ModalParams.role}
        onChange={HandleChange}
        name="role"
        style={{
          width: "100%",
          padding: 5,
          ...field,
          outline: "none",
          borderColor: "#d9d9d9",
        }}
      >
        {ModalParams.role === "" ? <option value="">choose a role</option> : ""}
        {typeof Roles.data !== "undefined" ? (
          MapData?.map((val) => (
            <option key={val?.id} value={val?.id}>
              {val?.name}
            </option>
          ))
        ) : (
          <option>No Roles Available</option>
        )}
      </select>
    </Modal>
  );
}
