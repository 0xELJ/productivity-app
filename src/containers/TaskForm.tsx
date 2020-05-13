import React, { FC } from 'react';
import InputField from '../components/form/InputField';
import { Field, Form } from 'react-final-form';
import { FormValidator } from '../utils/FormValidator';
import { TaskValidator } from '../utils/TaskValidator';
import { TaskFormValues } from '../types/TaskFormValues';

const TaskForm: FC<{ id: string, onSubmit(values: TaskFormValues): void }> = ({ id, onSubmit }) => {
    const validator = new FormValidator();
    const timeValidations = [
        validator.required,
        validator.mustBeNumber,
        validator.minValue(0),
    ];
    const taskValidator = new TaskValidator();

    return (
      <Form
        onSubmit={onSubmit}
        validate={taskValidator.validateDuration}
        render={({ handleSubmit, error }) => (
            <form id={id} onSubmit={handleSubmit}>
                <Field
                    name="name"
                    component={InputField}
                    label="Nombre"
                    placeholder="Nombre"
                    validate={validator.required}
                />
                <Field
                    name="description"
                    component={InputField}
                    label="Descripción"
                    placeholder="Descripción"
                    validate={validator.required}
                />
                <fieldset>
                    <label>Duración:</label>
                    <div className="w-100 d-flex">
                        <Field
                            name="hours"
                            component={InputField}
                            hideLabel={true}
                            placeholder="hh"
                            inputType="number"
                            parse={validator.parseToNumber}
                            validate={validator.composeValidators(...timeValidations, validator.maxValue(2))}
                        />
                        <span className="mx-1">:</span>
                        <Field
                            name="minutes"
                            component={InputField}
                            hideLabel={true}
                            placeholder="mm"
                            inputType="number"
                            parse={validator.parseToNumber}
                            validate={validator.composeValidators(...timeValidations, validator.maxValue(59))}
                        />
                        <span className="mx-1">:</span>
                        <Field
                            name="seconds"
                            component={InputField}
                            hideLabel={true}
                            placeholder="ss"
                            inputType="number"
                            parse={validator.parseToNumber}
                            validate={validator.composeValidators(...timeValidations, validator.maxValue(59))}
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
