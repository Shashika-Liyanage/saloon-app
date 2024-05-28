import React from 'react'
import Admin from './Admin';
import Typography from "@mui/material/Typography";


function UserManage() {
  return (
    
    <div>
         <Admin/>
         <Typography sx={{textAlign:"center",fontWeight:"700",fontSize:"30px", marginLeft: 25,   color: "#AF0171",fontFamily:"Georgia, serif"}}>Manage User</Typography>
       
    </div>
  )
}

export default UserManage;