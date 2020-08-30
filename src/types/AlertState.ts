export interface AlertState {
    show: boolean;
    variant: 'success' | 'danger';
    heading: string;
    description: string;
}
