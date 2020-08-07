import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { FormProps } from '../../types/FormProps';
import InputField from '../shared/InputField';
import { required } from '../../utils/formValidator';
import { Button } from 'react-bootstrap';

const SignInForm: FC<FormProps<any>> = ({ id, onSubmit }) => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form id={id} onSubmit={handleSubmit} >
                <Field
                    name="username"
                    component={InputField}
                    placeholder="Username"
                    className="p-2"
                    hideLabel={true}
                    validate={required}
                />
                <Field
                    name="password"
                    component={InputField}
                    placeholder="Password"
                    className="p-2"
                    hideLabel={true}
                    validate={required}
                />
                <Button type="submit" size="lg" className="mt-5">
                    LOGIN
                </Button>
            </form>
        )}
    />
);

export default SignInForm;
