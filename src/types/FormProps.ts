export interface FormProps<T> {
    id: string;
    onSubmit(values: T): void;
    submitting?: boolean;
    initialValues?: T;
    disabled?: boolean;
}
