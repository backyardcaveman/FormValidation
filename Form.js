import { useState} from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'

import classes from './Form.module.css'

const Form = props => {
  
  //User Input State

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [checked, setChecked] = useState(false)
  
  //Validation State

  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [checkboxIsValid, setCheckboxIsValid] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const validFields = {
    email: emailIsValid,
    password: passwordIsValid,
    checkbox: checkboxIsValid
  }

  //User Input & Validation Logic

  const emailHandler = (event) => {
    const email = event.target.value
    setEnteredEmail(email)

    if (email.includes('@') && email.includes('.com')) {
      setEmailIsValid(true)
    } else {
      setEmailIsValid(false)
    }
  }

  const passwordHandler = (event) => {
    const password = event.target.value
    setEnteredPassword(password)

    if (password.trim().length >= 7) {
      setPasswordIsValid(true)
    } else {
      setPasswordIsValid(false)
    }
  }

  const checkboxHandler = () => {
    setChecked(!checked)

    if (!checked) {
      setCheckboxIsValid(true)
    } else {
      setCheckboxIsValid(false)
    }
  }

  //Submit Function & Validation Logic

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (enteredEmail == '') {
      setEmailIsValid(false)
    }
    if (enteredPassword == '') {
      setPasswordIsValid(false)
    }
    if (!checked) {
      setCheckboxIsValid(false)
    }
    if(enteredEmail == '' || enteredPassword == '' || !checked) {
        return;
    }
    setEnteredEmail('')
    setEnteredPassword('')
    setChecked(false)
    props.submitted(true)
  }

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div>
          <h2>CREATE ACCOUNT</h2>
        </div>
        <div className={classes.center}>
          <label>Email:</label>
          <input
            onChange={emailHandler}
            type="email"
            value={enteredEmail}
          ></input>
        </div>
        <div className={classes.center}>
          <label>Password:</label>
          <input
            onChange={passwordHandler}
            type="password"
            value={enteredPassword}
          ></input>
        </div>
        <div className={classes.checkbox}>
          <input
            type="checkbox"
            checked={checked}
            onChange={checkboxHandler}
            value={checked}
          ></input>
          <label>I accept the terms of service</label>
        </div>

        {/* Error Message Logic */}

        <Button valid={validFields}>Submit</Button>
        {!emailIsValid && formSubmitted && (
          <p className={classes.error}>*Email input field is required</p>
        )}
        {!passwordIsValid && formSubmitted && (
          <p className={classes.error}>*Password input field is required</p>
        )}
        {!checkboxIsValid && formSubmitted && (
          <p className={classes.error}>*You must accept our terms of service</p>
        )}
      </form>
    </Card>
  )
}

export default Form


