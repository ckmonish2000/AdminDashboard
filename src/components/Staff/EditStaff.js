import React, { useContext, useState, useEffect } from "react";
import { Modal, Input, message } from "antd";
import { field, field2 } from "./styles";
import { AdminContext } from "../../App";
import { useMutation } from "@apollo/client";
import { UpdateStaff } from "../../services/mutations";

export default function EditStaff({ data, openEdit, setopenEdit, refresh }) {
  let { Roles } = useContext(AdminContext);
  let [UpdateData, UpdatedData] = useMutation(UpdateStaff);
  let MapData = Roles.data?.roles;
  const [ModalParams, setModalParams] = useState({});
  const [role, setrole] = useState("");
  console.log(ModalParams);
  useEffect(() => {
    // if (Object.keys(ModalParams).length === 0) {
    setModalParams(data);
    setrole(data?.groups && data?.groups[0]?.id);
    // }
  }, [data]);
  // handlers
  let handleClose = () => {
    setopenEdit(false);
    // setModalParams({});
    // setrole("");
  };

  const HandleOk = (e) => {
    let { phone, name, password, id, email } = ModalParams;
    if (
      phone !== "" &&
      name !== "" &&
      password !== "" &&
      role !== "" &&
      email !== ""
    ) {
      UpdateData({
        variables: { phone, name, password, id, email, role },
      })
        .then((data) => {
          let usr = data.data?.updateStaffAccount?.user?.name;
          message.success(`user ${usr} has been created successfully`);
          handleClose();
          refresh();
        })
        .catch((err) => console.log(err));
    } else {
      message.warn("Please Dont leave any field empty");
    }
  };

  const HandleChange = (e) => {
    setModalParams({ ...ModalParams, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      visible={openEdit}
      title="Edit"
      onCancel={handleClose}
      onOk={HandleOk}
    >
      <Input
        name="email"
        placeholder="Email"
        value={ModalParams?.email}
        onChange={HandleChange}
        style={field}
      />
      <Input
        name="name"
        placeholder="Name"
        onChange={HandleChange}
        value={ModalParams?.name}
        style={field}
      />
      <Input
        name="phone"
        placeholder="Phone"
        onChange={HandleChange}
        style={field}
        value={ModalParams?.phone}
      />
      <Input
        name="password"
        placeholder="New Password"
        onChange={HandleChange}
        type="password"
        value={ModalParams?.password}
        style={field}
      />
      <select
        style={field}
        value={role}
        onChange={(e) => setrole(e.target.value)}
        style={field2}
      >
        {role === "" ? <option value="">choose a role</option> : ""}
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
