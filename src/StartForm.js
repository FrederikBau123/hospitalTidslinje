import React, { useState, useRef, useEffect } from 'react'
import FormElement from './FormElement'
import { useForm} from "react-hook-form"


function StartForm({children, handleLoginClick}) {
  const [loginValid, setloginValid] = useState(false)

  const { register, handleSubmit, errors, formState } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });
  const {isValid} = formState;



  return (
    <div className="middle">
      <div className="loginside">
      <div className="header">
        <div className="headerFont">
          App Navn
        </div>
      </div>
      <div className="logininput">
      <FormElement label="Brugernavn" hasError={errors.brugernavn}>
        <input className="inputBox" type="text" name="brugernavn" ref={register({ required: true })} />
        {errors.brugernavn && errors.brugernavn.type === 'required' && <span className="error"> skriv dit brugernavn </span>}
      </FormElement>
      <FormElement label="Adgangskode" hasError={errors.adgangskode}>
        <input className="inputBox" type="text" name="Name" ref={register({ required: true })} />
        {errors.adgangskode && errors.adgangskode.type === 'required' && <span className="error"> skriv din adganskode </span>}
      </FormElement>
      </div>
      <button disabled={isValid ? false : true} className="login" onClick={handleLoginClick}>
        Log Ind
      </button>
      </div>
    </div>
  )
}

export default StartForm;
