import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';

function History() {
  return (
    <>
      <h1 className='text-center mt-5'>Downloaded Resume History</h1>
      <Link to={"/"} style={{ marginTop: "-50px" }} className="float-end me-5">Back</Link>
      <div>
        <Box component="section" className="container-fluid">
          <div className='row mt-5'>
            <div className='col-md-4'>

              <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }}>
                <div>
                  <h6>Review at : <br />24/06/2025, 7:22:27pm</h6>
                </div>

                <div className='shadow p-3 mt-3'>
                  <h2>Dileep</h2>
                  <h6>Web Developer</h6>
                  <p>
                    <span>Kakkanad</span> | 
                    <span> dileep@gmail.com</span> | 
                    <span> 1223345575</span>
                  </p>

                  <div className='d-flex gap-3 justify-content-center'>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a href="https://portfolio.com/" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
                  </div>

                  <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider>
                  <p style={{ textAlign: "justify" }}>
                    {/* Summary content goes here */}
                  </p>

                  <Divider sx={{ marginTop: "20px" }}>Education</Divider>
                  <h4>BCA</h4>
                  <p>SREE Sabaressa College | MG University</p>

                  <Divider sx={{ marginTop: "20px" }}>Professional Experience</Divider>
                  <h4>MEARN STACK</h4>
                  <p>Luminar technolab | Kakkanad | 6 Months</p>

                  <Divider sx={{ marginTop: "20px" }}>SKILLS</Divider>
                  <div className='d-flex flex-wrap gap-3'>
                    <Button variant="outlined">React</Button>
                  </div>
                </div>
              </Paper>
              
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}

export default History
