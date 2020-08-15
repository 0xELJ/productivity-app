import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { FormProps } from '../../types/FormProps';
import InputField from '../shared/InputField';
import { required } from '../../utils/formValidator';
import { Button } from 'react-bootstrap';
import { AuthCredentials } from '../../types/AuthCredentials';

const SignInForm: FC<FormProps<AuthCredentials>> = ({ id, onSubmit }) => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form id={id} onSubmit={handleSubmit}>
                <Field
                    name="username"
                    component={InputField}
                    placeholder="Username"
                    hideLabel={true}
                    validate={required('Username')}
                />
                <Field
                    name="password"
                    component={InputField}
                    placeholder="Password"
                    inputType="password"
                    hideLabel={true}
                    validate={required('Password')}
                />
                <Button type="submit" size="lg" className="mt-5">LOGIN</Button>
            </form>
        )}
    />
);

export default SignInForm;
