import React from 'react'
import { FaFileDownload, FaHistory, FaEdit } from "react-icons/fa";
import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Edit from './Edit';

function Preview() {
  return (
    <>
      <Stack 
        direction="row"
        sx={{ display: "flex", justifyContent: "end", padding: "50px", gap: "10px" }}
      >
        <button className="btn btn-primary"><FaFileDownload /></button>
        <p><Link to={"/history"}><button className="btn btn-primary"><FaHistory /></button></Link></p>
        <Link href={"/"}> <p className='btn text-primary'>Back</p> </Link>
        <Edit/>
        {/* <button className="btn btn-primary"><FaEdit /></button> */}
      </Stack>
      <Box sx={{textAlign:"center"}}>
           <Paper elevation={3} sx={{p:5}} >
            <h2>Dileep</h2>
            <h6>Web Developer</h6>
            <p><span>Kakkanad</span> <span>dileep@gmail.com</span>| <span>1223345575</span></p>
          <div className='d-flex gap-3 justify-content-center'>
              <Link href={""}>GITHUB</Link>
               <Link href={""}>LINKEDIN</Link>
                <Link href={""}>PORTFOLIO</Link>
          </div>

          <Divider sx={{marginTop:"20px"}}>SUMMARY</Divider>
          <p style={{textAlign:"justify"}}></p>
            <Divider sx={{marginTop:"20px"}}>Education</Divider>
            <h4>BCA</h4>
            <p>SREE Sabaressa College | MG University</p>
              <Divider sx={{marginTop:"20px"}}>Professional Experience</Divider>
              <h4>MEARN STACK</h4>
              <p>Luminar technolab | Kakkanad |6Months</p>
                <Divider sx={{marginTop:"20px"}}>SKILLS</Divider>
                <div className='d-flex flex-warp gap-3'>
                  <Button variant="outlined">React</Button>

                </div>





           </Paper>

      </Box>
    </>
  )
}

export default Preview;
