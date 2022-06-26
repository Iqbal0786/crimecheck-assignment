import { Box, Button, Select, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <>
      <Box
        sx={{
          width: "600px",
          height: "400px",
          margin: "auto",
          marginTop: "5%",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          padding: "20px",
          textAlign: "center",
          backgroundColor:"InfoBackground"
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "monospace", fontSize: "25px"  , marginBottom:"10%"}}
        >
          Login here from your username
        </Typography>
         <Box sx={{display:"flex",flexDirection:"column" ,width:"100%" ,alignItems:"center"}}>
         <TextField variant="outlined" label='enter username..' sx={{width:"60%" , marginBottom:"20px"}}/>
          <Button variant="contained" sx={{width:"60%" ,height:"45px"}} >Submit</Button>
         </Box>
      </Box>
    </>
  );
}
