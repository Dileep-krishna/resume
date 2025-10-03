import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const steps = [
  "Basic information",
  "Contact details",
  "Educational Details",
  "Work Experience",
  "Skill and Certificate",
  "Review and Submit",
];

const suggestions = ["HTML", "CSS", "NODE.JS", "PYTHON"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // ✅ Corrected state structure
  const [userInput, setUserInput] = useState({
    personalData: {
      name: "",
      jobTitle: "",
      location: "",
    },
    contactData: {
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobRole: "",
      company: "",
      jobLocation: "",
      duration: "",
    },
    skill: [],
    summary: "",
  });

  console.log(userInput);

  // Helpers
  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  // ✅ Reusable function to update nested state
  const handleChange = (section, field, value) => {
    setUserInput((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Step content
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <div>
            <h1>Personal Details</h1>
            <div className="row p-3">
              <TextField
                label="Full Name"
                variant="standard"
                value={userInput.personalData.name}
                onChange={(e) =>
                  handleChange("personalData", "name", e.target.value)
                }
              />
              <TextField
                label="Job Title"
                variant="standard"
                value={userInput.personalData.jobTitle}
                onChange={(e) =>
                  handleChange("personalData", "jobTitle", e.target.value)
                }
              />
              <TextField
                label="Location"
                variant="standard"
                value={userInput.personalData.location}
                onChange={(e) =>
                  handleChange("personalData", "location", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h1>Contact Details</h1>
            <div className="row p-3">
              <TextField
                label="Email"
                variant="standard"
                value={userInput.contactData.email}
                onChange={(e) =>
                  handleChange("contactData", "email", e.target.value)
                }
              />
              <TextField
                label="Phone Number"
                variant="standard"
                value={userInput.contactData.phone}
                onChange={(e) =>
                  handleChange("contactData", "phone", e.target.value)
                }
              />
              <TextField
                label="GitHub Profile Link"
                variant="standard"
                value={userInput.contactData.github}
                onChange={(e) =>
                  handleChange("contactData", "github", e.target.value)
                }
              />
              <TextField
                label="LinkedIn Profile Link"
                variant="standard"
                value={userInput.contactData.linkedin}
                onChange={(e) =>
                  handleChange("contactData", "linkedin", e.target.value)
                }
              />
              <TextField
                label="Portfolio Profile Link"
                variant="standard"
                value={userInput.contactData.portfolio}
                onChange={(e) =>
                  handleChange("contactData", "portfolio", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h1>Education Details</h1>
            <div className="row p-3">
              <TextField
                label="Course Name"
                variant="standard"
                value={userInput.educationData.course}
                onChange={(e) =>
                  handleChange("educationData", "course", e.target.value)
                }
              />
              <TextField
                label="College Name"
                variant="standard"
                value={userInput.educationData.college}
                onChange={(e) =>
                  handleChange("educationData", "college", e.target.value)
                }
              />
              <TextField
                label="University"
                variant="standard"
                value={userInput.educationData.university}
                onChange={(e) =>
                  handleChange("educationData", "university", e.target.value)
                }
              />
              <TextField
                label="Year of Passout"
                variant="standard"
                value={userInput.educationData.year}
                onChange={(e) =>
                  handleChange("educationData", "year", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h1>Professional Details</h1>
            <div className="row p-3">
              <TextField
                label="Job or Internship"
                variant="standard"
                value={userInput.experience.jobRole}
                onChange={(e) =>
                  handleChange("experience", "jobRole", e.target.value)
                }
              />
              <TextField
                label="Company Name"
                variant="standard"
                value={userInput.experience.company}
                onChange={(e) =>
                  handleChange("experience", "company", e.target.value)
                }
              />
              <TextField
                label="Location"
                variant="standard"
                value={userInput.experience.jobLocation}
                onChange={(e) =>
                  handleChange("experience", "jobLocation", e.target.value)
                }
              />
              <TextField
                label="Duration"
                variant="standard"
                value={userInput.experience.duration}
                onChange={(e) =>
                  handleChange("experience", "duration", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h1>Skills</h1>
            <div className="row p-3">
              <div className="d-flex align-items-center justify-content-between">
                <TextField
                  sx={{ width: "550px" }}
                  id="skill"
                  label="Enter Skill"
                  variant="standard"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                      setUserInput((prev) => ({
                        ...prev,
                        skill: [...prev.skill, e.target.value.trim()],
                      }));
                      e.target.value = "";
                    }
                  }}
                />
              </div>

              <div className="mt-4">
                <h3>Suggestions</h3>
                <div className="d-flex gap-2 flex-wrap mt-3">
                  {suggestions.map((s) => (
                    <Button
                      key={s}
                      variant="contained"
                      onClick={() =>
                        setUserInput((prev) => ({
                          ...prev,
                          skill: [...prev.skill, s],
                        }))
                      }
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <h4>Added Skills</h4>
                {userInput.skill.map((s, idx) => (
                  <span key={idx} className="btn btn-primary me-3">
                    {s}{" "}
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        setUserInput((prev) => ({
                          ...prev,
                          skill: prev.skill.filter((sk) => sk !== s),
                        }))
                      }
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h1>Professional Summary</h1>
            <div className="row p-3">
              <TextField
                label="Write your professional summary"
                variant="standard"
                fullWidth
                multiline
                rows={5}
                value={userInput.summary}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, summary: e.target.value }))
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
          {/* ✅ Final JSON output */}
          <pre>{JSON.stringify(userInput, null, 2)}</pre>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderStepArrayContent(activeStep)}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
