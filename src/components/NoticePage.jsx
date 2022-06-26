import { AppBar, Box, TextareaAutosize, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  Button,  TextField } from "@mui/material";
import axios from 'axios';
import SingleNoticeItem from './SingleNoticeItem';

export default function NoticePage() {
   const [noticeData,setNoticeData]=useState([]);
   const [text,setText]=useState({
    noticeText:"",
    user_id:""
   })

    useEffect(()=>{
      fetchRecord()
    },[])
   const fetchRecord=()=>{
      axios.get("http://localhost:1212/noticeBoards").then((res)=>{
        setNoticeData([...res.data])
         //console.log(res.data)
      }).catch((err)=>{
        console.log(err.message)
      })
   }
   console.log(text)
  return (
   <>
 <AppBar>

    <Toolbar>
        <Typography>Welcome Iqbal@123</Typography>
    </Toolbar>
 </AppBar>
   
   <Box sx={{width:"100%" , marginTop:"100px" , display:"flex", justifyContent:"space-around"}}>
   <Box
        sx={{
          width: "40%",
          height: "400px",
          margin: "auto",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          padding: "20px",
          textAlign: "center",
          backgroundColor:"InfoBackground"
          
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "monospace", fontSize: "25px"  , marginBottom:"5%"}}
        >
          Write Notice in the box
        </Typography>
         <Box sx={{display:"flex",flexDirection:"column" ,width:"100%" ,alignItems:"center"}}>
         <TextareaAutosize
      aria-label="maximum height"
      placeholder="write notice text here within 100 characters ..."
      onChange={(e)=>{
         setText({...text,noticeText:e.target.value})
      }}
      maxLength={100}
      
      style={{ width: "60%" ,height:"200px" , marginBottom:"5%" }}
    />
          <Button variant="contained" sx={{width:"60%" ,height:"45px"}} >Submit</Button>
         </Box>
      </Box>
      <Box
        sx={{
          width: "60%",
          height: "400px",
          margin: "auto",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          padding: "20px",
          textAlign: "center",
          backgroundColor:"InfoBackground"
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "monospace", fontSize: "25px"  , marginBottom:"5%"}}
        >
          All Notices
        </Typography>
      {
        noticeData.map((e)=>{
          return (
            <>
               <SingleNoticeItem text={e.noticeText} username={e.user_id.username} date={new Date(e.createdAt).toLocaleDateString()}  time={new Date(e.createdAt).toLocaleTimeString()}/>
            </>
          )
        })
      }
        
      </Box>
   </Box>
   
   </>
  )
}
