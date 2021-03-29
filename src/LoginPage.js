import React from 'react';
import FormElement from './FormElement'
import { useForm } from "react-hook-form"

function LoginPage() {
  const { register, handleSubmit, errors, formState } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });

  const {isValid} = formState;
  return (
    <div>
      <div className="appnavn">App Navn</div>
      <div>
      <FormElement label="Brugernavn" hasError={errors.vetName}>
        <input className="inputBox" type="text" placeholder="Enter name" name="Name" ref={register({ required: true })} />
        {errors.Name && errors.Name.type === 'required' && <span className="error"> Name is required</span>}
      </FormElement>
      <FormElement label="Adgangskode" hasError={errors.vetName}>
        <input className="inputBox" type="text" placeholder="Enter name" name="Name" ref={register({ required: true })} />
        {errors.Name && errors.Name.type === 'required' && <span className="error"> Name is required</span>}
      </FormElement>
      </div>
      <div className="TOS">
      <span> By using this service, you agree </span>
      <br/>
      <span> to our <u>cookie policy</u> and <u>terms of service</u> </span>
      </div>
    </div>
  )
}

export default LoginPage;
