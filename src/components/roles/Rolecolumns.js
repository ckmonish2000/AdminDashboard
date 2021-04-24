import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Rolecolumns = [
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
    title: "Edit",
    dataIndex: "id",
    key: "address",
    render: (val, item) => (
      <span
      //   onClick={() => {
      //     setopenEdit(true);
      //     setselected(item);
      //   }}
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
      // onClick={() => HandleDelete(val, item.name)}
      <span>
        <DeleteIcon className="delicon" />
      </span>
    ),
  },
];

export default Rolecolumns;
