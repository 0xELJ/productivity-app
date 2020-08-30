import React, { FC } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { FormProps } from '../../types/FormProps';
import { NewAccount } from '../../types/NewAccount';
import { Field, Form } from 'react-final-form';
import InputField from '../shared/InputField';
import {
    composeValidators,
    required,
    isEmail,
    mustBeEqualsTo,
    minLength,
    maxLength,
    mustMatch
} from '../../utils/formValidator';

const SignUpForm: FC<FormProps<NewAccount>> = ({ id, onSubmit, submitting }) => {
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
                        validate={composeValidators(
                            required('First name'),
                            minLength(3),
                            maxLength(50)
                        )}
                    />
                    <Field
                        name="lastName"
                        component={InputField}
                        placeholder="Last name"
                        hideLabel={true}
                        validate={composeValidators(
                            required('Last name'),
                            minLength(3),
                            maxLength(50)
                        )}
                    />
                    <Field
                        name="email"
                        component={InputField}
                        placeholder="Email"
                        hideLabel={true}
                        validate={composeValidators(
                            required('Email'),
                            isEmail,
                            maxLength(50)
                        )}
                    />
                    <Field
                        name="username"
                        component={InputField}
                        placeholder="Username"
                        hideLabel={true}
                        validate={composeValidators(
                            required('Username'),
                            minLength(4),
                            maxLength(20)
                        )}
                    />
                    <Field
                        name="password"
                        component={InputField}
                        placeholder="Password"
                        inputType="password"
                        hideLabel={true}
                        validate={composeValidators(
                            required('Password'),
                            minLength(8),
                            mustMatch(
                                /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                'Password must contain one uppercase letter, one lowercase letter and a number'
                            ),
                        )}
                    />
                    <Field
                        name="passwordConfirmation"
                        component={InputField}
                        placeholder="Password confirmation"
                        inputType="password"
                        hideLabel={true}
                        validate={composeValidators(
                            required('Password confirmation'),
                            mustBeEqualsTo('password')
                        )}
                    />
                    <Button type="submit" size="lg" className="mt-5" disabled={submitting}>
                        {submitting ? <Spinner animation="border" variant="light" /> : 'CREATE'}
                    </Button>
                </form>
            )}
        />
    );
};

export default SignUpForm;
