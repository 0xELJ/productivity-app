export interface FormProps<T> {
    id: string;
    onSubmit(values: T): void;
    initialValues?: T;
    disabled?: boolean;
}
