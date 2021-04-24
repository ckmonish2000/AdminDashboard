import { Input, message, Modal, Select, Tag } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { AdminContext } from "../../App";
import { field } from "../Staff/styles";
import { createRole, UpdateRole } from "../../services/mutations";
import { useMutation } from "@apollo/client";
import { Message } from "@material-ui/icons";
import tagRender from "./tagrender";

export default function AddRoles({ open, setOpen, refresh, Edit, setEdit }) {
  let [CreateRoleMutation, CreatedRoleData] = useMutation(createRole);
  let [UpdateRoleMutation, UpdatedData] = useMutation(UpdateRole);
  const { Permissions } = useContext(AdminContext);
  const [permissions, setpermissions] = useState([]);
  const [roletitle, setroletitle] = useState("");
  console.log(permissions);
  useEffect(() => {
    if (Edit.edit && permissions.length === 0) {
      setroletitle(Edit.selected?.name);
      setpermissions(Edit.selected?.permissions?.map((val) => val?.codename));
    }
  }, [Edit]);

  const options = Permissions.data?.permissions?.map((val) => {
    return {
      value: val?.codename,
      label: val?.name,
    };
  });

  let oncancel = () => {
    setOpen(false);
    setEdit({ ...Edit, edit: false });
    setpermissions([]);
  };

  let handleOk = () => {
    if (roletitle !== "" && permissions.length !== 0) {
      CreateRoleMutation({
        variables: { name: roletitle, permission: permissions },
      })
        .then((data) => {
          setEdit({ ...Edit, edit: false });
          message.success("created role");
          refresh();
          oncancel();
        })
        .catch((err) => console.log(err));
    } else {
      message.error("please fill in the required details");
    }
  };
  console.log(Edit);
  let HandleEdit = () => {
    if (roletitle !== "" && permissions.length !== 0) {
      UpdateRoleMutation({
        variables: {
          name: roletitle,
          permission: permissions,
          id: Edit?.selected?.id,
        },
      })
        .then((data) => {
          setEdit({ ...Edit, edit: false });
          message.success("Altered role");
          refresh();
          oncancel();
        })
        .catch((err) => console.log(err));
    } else {
      message.error("please fill in the required details");
    }
  };
  return (
    <Modal
      onCancel={oncancel}
      visible={open}
      title={Edit.edit ? "Edit Role" : "Add Role"}
      onOk={Edit.edit ? HandleEdit : handleOk}
    >
      <Input
        value={roletitle}
        style={field}
        placeholder="Role title"
        onChange={(e) => setroletitle(e.target.value)}
      />
      <Select
        style={{ padding: "20pt" }}
        placeholder="Select Permissions"
        mode="multiple"
        value={permissions}
        showArrow
        tagRender={tagRender}
        onChange={(e) => setpermissions(e)}
        style={{ width: "100%" }}
        options={options}
        className="selectPermissions"
      />
    </Modal>
  );
}
