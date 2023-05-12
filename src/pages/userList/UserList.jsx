// import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./userList.css";

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'avatar',
          headerName: 'User',
          width: 200  ,
          renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} className="userListImg" alt="" />
                    {params.row.username}
                </div>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Email Address',
          type: 'number',
          width: 200,
          
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 2, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 3, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 4, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 5, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 6, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 7, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 8, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 9, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
        { id: 10, username: 'Jon Snow', avatar: "../../assets/img/img.jpg", email:"testing@gmail.com", status: "active", transaction: "$85,000"},
       
      ];
  return (
    <div className="userList">
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
