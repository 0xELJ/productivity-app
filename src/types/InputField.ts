import { FieldRenderProps } from 'react-final-form';

export interface Input extends FieldRenderProps<string | number, any> {
    name: string;
    label: string;
    placeholder: string;
    hideLabel?: boolean;
    inputType?: string;
    className?: string;
}
