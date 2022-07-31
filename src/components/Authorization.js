import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContextProvider';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const Authorization = () => {

    const navigate = useNavigate();
    const { signup, login, currentUser } = useAuth();
    // const method = useState(props.method);

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
        console.log(currentUser);
    }, [currentUser, navigate])

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {

                }}
                component={LoginAndRegisterForm}
            >
            
            </Formik>
        </div>
    )
}

export default Authorization;