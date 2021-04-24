import { Input, message, Modal, Select, Tag } from "antd";
import React, { useContext, useState } from "react";
import { AdminContext } from "../../App";
import { field } from "../Staff/styles";
import { createRole } from "../../services/mutations";
import { useMutation } from "@apollo/client";
import { Message } from "@material-ui/icons";

export default function AddRoles({ open, setOpen, refresh }) {
  let [CreateRoleMutation, CreatedRoleData] = useMutation(createRole);
  const { Permissions } = useContext(AdminContext);
  const [permissions, setpermissions] = useState([]);
  const [roletitle, setroletitle] = useState("");
  function tagRender(props) {
    // console.log(props);
    const { label, value, closable, onClose } = props;

    return (
      <Tag
        color="gold"
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }
  const options = Permissions.data?.permissions?.map((val) => {
    return {
      value: val?.codename,
      label: val?.name,
    };
  });

  let oncancel = () => {
    setOpen(false);
    setpermissions([]);
  };

  let handleOk = () => {
    if (roletitle !== "" && permissions.length !== 0) {
      CreateRoleMutation({
        variables: { name: roletitle, permission: permissions },
      })
        .then((data) => {
          message.success("created role");
          refresh();
          oncancel();
        })
        .catch((err) => console.log(err));
    } else {
      message.error("please fill in the required details");
    }
  };

  return (
    <Modal onCancel={oncancel} visible={open} title="Add Role" onOk={handleOk}>
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
