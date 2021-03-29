import React from 'react';
function FormElement({ label, className, children, hasError }){
  return(
    <div className={`formElements ${className ? className : ""} ${hasError ? 'error' : ''}`}>
      <label className="formLabels"> {label}</label>
      <br/>
      {children}
    </div>
  )
}

export default FormElement;
