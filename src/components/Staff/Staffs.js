import React from "react";
import { Allusers } from "../../services/queries";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
export default function Staffs() {
  let AllusersData = useQuery(Allusers, { fetchPolicy: "no-cache" });
  let filterdata = AllusersData.data
    ? AllusersData.data?.allUsers?.filter((val) => val.name !== null)
    : [];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (val, item, index) => {
        console.log(item);
        if (item.name !== null) {
          return <h1>{val}</h1>;
        }
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Staff",
      dataIndex: "isStaff",
      key: "address",
    },
  ];

  return (
    <Table
      loading={typeof AllusersData.data === "undefined"}
      columns={columns}
      dataSource={filterdata}
    />
  );
}
