import React from 'react';
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: "none"
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const suggestions = ["React", "Node.js", "MongoDB", "Express", "JavaScript"];

  return (
    <>
      <Button 
        onClick={handleOpen} 
        variant="contained" 
        startIcon={<FaEdit />}
      >
        Edit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            Resume Form
          </Typography>

          {/* Personal Details */}
          <h3>Personal Details</h3>
          <Box className="row p-3">
            <TextField fullWidth label="Full Name" variant="standard" />
            <TextField fullWidth label="Job Title" variant="standard" />
            <TextField fullWidth label="Location" variant="standard" />
          </Box>

          {/* Contact Details */}
          <h3>Contact Details</h3>
          <Box className="row p-3">
            <TextField fullWidth label="Email" variant="standard" />
            <TextField fullWidth label="Phone Number" variant="standard" />
            <TextField fullWidth label="GitHub Profile" variant="standard" />
            <TextField fullWidth label="LinkedIn Profile" variant="standard" />
            <TextField fullWidth label="Portfolio Link" variant="standard" />
          </Box>

          {/* Education */}
          <h3>Education Details</h3>
          <Box className="row p-3">
            <TextField fullWidth label="Course Name" variant="standard" />
            <TextField fullWidth label="College Name" variant="standard" />
            <TextField fullWidth label="University" variant="standard" />
            <TextField fullWidth label="Year of Passout" variant="standard" />
          </Box>

          {/* Skills */}
          <h3>Skills</h3>
          <Box className="row p-3">
            <Box className="d-flex align-items-center justify-content-between" sx={{ width: "100%" }}>
              <TextField fullWidth label="Enter Skills" variant="standard" />
              <Button variant="outlined" sx={{ ml: 2 }}>Add</Button>
            </Box>

            <Box className="mt-4">
              <h4>Suggestions</h4>
              <Box className="d-flex gap-2 flex-wrap mt-3">
                {suggestions.map((skill) => (
                  <Button key={skill} variant="contained">{skill}</Button>
                ))}
              </Box>
            </Box>

            <Box className="mt-4">
              <h4>Added Skills</h4>
              <Box className="mt-2">
                <span className="btn btn-primary me-3">
                  React <button className="btn btn-sm btn-light ms-2">X</button>
                </span>
              </Box>
            </Box>
          </Box>

          {/* Professional Experience */}
          <h3>Professional Experience</h3>
          <Box className="row p-3">
            <TextField fullWidth label="Job / Internship" variant="standard" />
            <TextField fullWidth label="Company Name" variant="standard" />
            <TextField fullWidth label="Location" variant="standard" />
            <TextField fullWidth label="Duration" variant="standard" />
          </Box>

          {/* Summary */}
          <h3>Professional Summary</h3>
          <Box className="row p-3">
            <TextField
              label="Write your professional summary"
              variant="standard"
              fullWidth
              multiline
              rows={5}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
