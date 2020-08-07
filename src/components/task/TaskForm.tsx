import React, { FC } from 'react';
import InputField from '../shared/InputField';
import { Field, Form } from 'react-final-form';
import {
    composeValidators,
    maxValue,
    minValue,
    mustBeNumber,
    parseToNumber,
    required
} from '../../utils/formValidator';
import { validateDuration } from '../../utils/taskValidator';
import { FormProps } from '../../types/FormProps';
import { TaskFormValues } from '../../types/TaskFormValues';

const TaskForm: FC<FormProps<TaskFormValues>> = ({ id, onSubmit, initialValues, disabled }) => {
    const timeValidations = [required, mustBeNumber, minValue(0)];

    return (
        <Form
            onSubmit={onSubmit}
            validate={validateDuration}
            initialValues={initialValues}
            render={({ handleSubmit, error }) => (
                <form id={id} onSubmit={handleSubmit}>
                    <fieldset disabled={disabled}>
                        <Field
                            name="name"
                            component={InputField}
                            label="Nombre"
                            placeholder="Nombre"
                            validate={required}
                        />
                        <Field
                            name="description"
                            component={InputField}
                            label="Descripción"
                            placeholder="Descripción"
                            validate={required}
                        />
                    </fieldset>
                    <fieldset disabled={disabled}>
                        <label>Duración:</label>
                        <div className="w-100 d-flex">
                            <Field
                                name="hours"
                                component={InputField}
                                hideLabel={true}
                                placeholder="hh"
                                inputType="number"
                                parse={parseToNumber}
                                validate={composeValidators(...timeValidations, maxValue(2))}
                            />
                            <span className="mx-1">:</span>
                            <Field
                                name="minutes"
                                component={InputField}
                                hideLabel={true}
                                placeholder="mm"
                                inputType="number"
                                parse={parseToNumber}
                                validate={composeValidators(...timeValidations, maxValue(59))}
                            />
                            <span className="mx-1">:</span>
                            <Field
                                name="seconds"
                                component={InputField}
                                hideLabel={true}
                                placeholder="ss"
                                inputType="number"
                                parse={parseToNumber}
                                validate={composeValidators(...timeValidations, maxValue(59))}
                            />
                        </div>
                    </fieldset>
                    {error && <p className="text-danger">{error}</p>}
                </form>
            )}
        />
    );
};

export default TaskForm;
