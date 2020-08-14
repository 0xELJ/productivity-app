import React, { FC } from 'react';
import { Alert } from 'react-bootstrap';
import { useGlobalState } from '../../hooks/useGlobalState';
import { useActions } from '../../hooks/useActions';
import { hideAlert } from '../../actions/alert';

const AlertGenerator: FC = () => {
    const { show, variant, heading, description } = useGlobalState(({ alert }) => alert);
    const closeAlert = useActions(hideAlert, []);

    const onCloseAlert = () => {
        closeAlert();
    };

    if (!show) {
        return null;
    }

    return (
        <Alert variant={variant} onClose={onCloseAlert} dismissible>
            <Alert.Heading>{heading}</Alert.Heading>
            <p>{description}</p>
        </Alert>
    );
};

export default AlertGenerator;
