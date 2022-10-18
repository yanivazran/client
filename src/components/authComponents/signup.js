import React from 'react';
import { Formik, Form, Field , useField } from 'formik';
import * as Yup from 'yup';

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
    const [field, meta] = useField(props);
  
    // Show inline feedback if EITHER
    // - the input is focused AND value is longer than 2 characters
    // - or, the has been visited (touched === true)
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
      (didFocus && field.value.trim().length >= 2) || meta.touched;
  
    return (
      <div
        className={` ${
          showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
        }`}
      >
        <div className="flex items-center space-between">
          <label htmlFor={props.id}>{label}</label>{' '}
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
              aria-live="polite"
              className="feedback text-sm"
            >
              {meta.error ? meta.error : '✓'}
            </div>
          ) : null}
        </div>
        <input
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
        <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
          {helpText}
        </div>
      </div>
    );
  };
  

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name is too Short.')
    .max(12, 'First name is too long.')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


export  const SignUp = (props) => (      

    <Formik 
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            // same shape as initial values
            alert(JSON.stringify(values, null, 2));
        }}

        >
        {({ errors, touched  }) => (
            <Form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                         Not registered yet?{" "}
                        <span className="link-primary" onClick={props.setMode}>
                            Sign Up
                        </span>
                    </div>

                    <div className="form-group mt-3">
                        <TextInputLiveFeedback
                            label="First Name:"
                            id="firstName"
                            name="firstName"
                            helpText="Must be 2-12 characters."
                            type="text"
                            />
                    </div>

                    <div className="form-group mt-3">
                        <TextInputLiveFeedback
                            label="Last Name:"
                            id="lastName"
                            name="lastName"
                            helpText="Must be 2-12 characters."
                            type="text"
                            />
                    </div>


                    <div className="form-group mt-3">
                        <TextInputLiveFeedback
                            label="Email:"
                            id="email"
                            name="email"
                            helpText="Must be 2-12 characters."
                            type="email"
                            />
                    </div>
    

                    <div className="d-grid gap-2 mt-3">
                        <button  type="submit">Submit</button>
                        <button  type="reset">Reset</button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
);
/*
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <Field className="form-control mt-1" name="firstName" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                    </div>
*/