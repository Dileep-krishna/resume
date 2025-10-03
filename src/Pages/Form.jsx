import React from 'react'
import Steps from '../Components/Steps'   // <-- Import your custom Steps
import Preview from '../Components/Preview'

function Form() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <Steps />   {/* use custom Steps component */}
          </div>
          <div className="col-6">
            <Preview />
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
