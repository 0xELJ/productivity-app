import { TaskTime } from '../types/TaskTime';

export const formatTaskTime = ({ hours, minutes, seconds }: TaskTime) => {
    return `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
};

const formatTimeUnit = (unit: number) => {
    return `${unit >= 10 ? unit : `0${unit}`}`;
};
