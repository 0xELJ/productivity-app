import React, { FC } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Input } from '../../types/InputField';

const InputField: FC<Input> = ({ name, label, hideLabel, placeholder, inputType, className, input, meta}) => {
    const renderLabel = () => {
        if (!hideLabel) {
            return <label className="mb-2">{label + ':'}</label>;
        }
        return null;
    };

    const renderError = () => {
        const { touched, error } = meta;
        if (error && touched) {
            return <p className="text-danger mb-0">{error}</p>;
        }
        return null;
    };

    return (
        <div className="mb-3">
            <InputGroup className="flex-column">
                {renderLabel()}
                <FormControl
                    {...input}
                    placeholder={placeholder}
                    type={inputType || 'text'}
                    className={className || ''}
                />
            </InputGroup>
            {renderError()}
        </div>

    );
};

export default InputField;
