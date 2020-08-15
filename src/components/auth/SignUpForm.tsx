import React, { FC } from 'react';
import { FormProps } from '../../types/FormProps';
import { NewAccount } from '../../types/NewAccount';
import { Field, Form } from 'react-final-form';
import InputField from '../shared/InputField';
import { required } from '../../utils/formValidator';
import { Button } from 'react-bootstrap';

const SignUpForm: FC<FormProps<NewAccount>> = ({ id, onSubmit }) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form id={id} onSubmit={handleSubmit}>
                    <Field
                        name="firstName"
                        component={InputField}
                        placeholder="First name"
                        hideLabel={true}
                        validate={required('First name')}
                    />
                    <Field
                        name="lastName"
                        component={InputField}
                        placeholder="Last name"
                        hideLabel={true}
                        validate={required('Last name')}
                    />
                    <Field
                        name="email"
                        component={InputField}
                        placeholder="Email"
                        hideLabel={true}
                        validate={required('Email')}
                    />
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
                    <Field
                        name="passwordConfirmation"
                        component={InputField}
                        placeholder="Password confirmation"
                        inputType="password"
                        hideLabel={true}
                        validate={required('Password confirmation')}
                    />
                    <Button type="submit" size="lg" className="mt-5">CREATE</Button>
                </form>
            )}
        />
    );
};

export default SignUpForm;
