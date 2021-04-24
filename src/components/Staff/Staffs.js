import React, { useState } from "react";
import { Allusers } from "../../services/queries";
import { useMutation, useQuery } from "@apollo/client";
import { message, Table } from "antd";
import Nav from "../Nav/Nav";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "../../styles/Staffs.css";
import { DeleteStaffAc } from "../../services/mutations";
import AddStaffModal from "./AddStaffModal";
import EditStaff from "./EditStaff";
import { TableStyle } from "./styles";

export default function Staffs() {
  let AllusersData = useQuery(Allusers);
  let filterdata = AllusersData.data
    ? AllusersData.data?.allUsers?.filter((val) => val.name !== null)
    : [];
  let [DeleteStaff, DeletedData] = useMutation(DeleteStaffAc);
  const [open, setopen] = useState(false);
  const [openEdit, setopenEdit] = useState(false);
  const [selected, setselected] = useState({});

  const HandleDelete = (id, name) => {
    DeleteStaff({ variables: { id: id } }).then((val) => {
      message.success(`Removed user ${name}`);
      AllusersData.refetch();
    });
  };
  const refresh = () => AllusersData.refetch();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val, item, index) => {
        if (item.name !== null) {
          return val;
        }
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      render: (val) => (val === "" ? <p>N/A</p> : <p>{val}</p>),
    },
    {
      title: "Staff",
      dataIndex: "isStaff",
      key: "address",
      render: (val) => (val === true ? <p>True</p> : <p>False</p>),
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "address",
      render: (val, item) => (
        <span
          onClick={() => {
            setopenEdit(true);
            setselected(item);
          }}
        >
          <EditIcon className="editicon" />
        </span>
      ),
    },
    {
      title: "Remove Staff",
      dataIndex: "id",
      key: "address",
      render: (val, item) => (
        <span onClick={() => HandleDelete(val, item.name)}>
          <DeleteIcon className="delicon" />
        </span>
      ),
    },
  ];

  return (
    <div>
      <Nav />
      <br />
      <EditStaff
        data={selected}
        openEdit={openEdit}
        setopenEdit={setopenEdit}
        refresh={refresh}
      />
      <AddStaffModal open={open} setopen={setopen} refresh={refresh} />
      <div className="TableParent">
        <Table
          loading={typeof AllusersData.data === "undefined"}
          columns={columns}
          dataSource={filterdata}
          pagination={{ pageSize: 5 }}
          className="Stafftable"
          rowClassName="testRow"
          title={() => <h1 style={{ color: "white" }}>Manage Staff</h1>}
          scroll={true}
          style={TableStyle}
          tableLayout={"auto"}
        />
      </div>
      <div className="usrBtnPos">
        <AddCircleIcon
          onClick={() => setopen(true)}
          style={{ fontSize: "30pt" }}
          className="NewUserBtn"
        />
      </div>
    </div>
  );
}
