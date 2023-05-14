// import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";
import { useState } from "react";

export default function UserList() {
  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id))
  // }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} className="userListImg" alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email Address",
      type: "number",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/"+ params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline className="userListDelete" onClick={handleDelete(params.row.id)}/> */}
          </>
        );
      },
    },
  ];

  
  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
