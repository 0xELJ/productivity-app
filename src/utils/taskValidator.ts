import { TaskFormValues } from '../types/TaskFormValues';
import { FORM_ERROR } from 'final-form';

export function validateDuration(values: TaskFormValues) {
    const errors: { [FORM_ERROR]?: string } = {};
    const { hours, minutes, seconds } = values;

    if (minutes <= 0 && (hours <= 0)) {
        errors[FORM_ERROR] = 'La duración mínima es de 1 minuto';
    }
    if (hours === 2 && (minutes > 0 || seconds > 0)) {
        errors[FORM_ERROR] = 'La duración máxima es de 2 horas';
    }

    return errors;
}

