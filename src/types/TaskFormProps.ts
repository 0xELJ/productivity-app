import { TaskFormValues } from './TaskFormValues';

export interface TaskFormProps {
    id: string;
    onSubmit(values: TaskFormValues): void;
    initialValues?: TaskFormValues;
}
