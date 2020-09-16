import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGlobalState } from '../hooks/useGlobalState';
import { useActions } from '../hooks/useActions';
import Icon from '@mdi/react';
import { mdiPlay, mdiPause, mdiRefresh, mdiStop } from '@mdi/js';
import { Task } from '../types/Task';
import { formatTaskTime } from '../utils/formatTaskTime';
import activeTaskSelector from '../selectors/activeTaskSelector';
import { TaskTime } from '../types/TaskTime';
import { useInterval } from '../hooks/useInterval';
import { completeTask, updateTask } from '../actions/tasks';

const TaskTimer: FC = () => {
    const activeTask = useGlobalState(activeTaskSelector);
    const [finishTask, patchTask] = useActions([completeTask, updateTask], []);
    const [taskTime, setTaskTime] = useState<TaskTime>({hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (activeTask?.remainingTime) {
            setTaskTime(activeTask.remainingTime);
        } else {
            setTaskTime({ hours: 0, minutes: 0, seconds: 0 });
        }
    }, [activeTask]);

    useInterval(() => {
        const { hours, minutes, seconds } = taskTime;

        if (seconds > 0) {
            setTaskTime({hours, minutes, seconds: seconds - 1})
        }
        if (seconds === 0 && minutes === 0 && hours === 0) {
            onComplete();
        } else if (seconds === 0 && minutes > 0) {
            setTaskTime({ hours, minutes: minutes - 1, seconds: 59 })
        } else if (seconds === 0 && hours > 0) {
            setTaskTime({ hours: hours - 1, minutes: 59, seconds: 59 });
        }
    }, isRunning ? 1000 : 0);

    const onPlayOrPause = () => {
        setIsRunning(!isRunning);
        onUpdateTask();
    };

    const onStop = () => {
        setIsRunning(false);
        onUpdateTask(activeTask?.durationTime);
    };

    const onRefresh = () => {
        onUpdateTask(activeTask?.durationTime);
    };

    const onComplete = () => {
        setIsRunning(false);
        finishTask(taskTime);
    };

    const onUpdateTask = (customTime?: TaskTime) => {
        const currentTask = activeTask as Task;
        patchTask({ ...currentTask, remainingTime: customTime || taskTime });
    };

    return (
        <div className="footer__timer d-flex align-items-center px-3 py-2">
            <div className="d-flex">
                <Button
                    onClick={onStop}
                    className="footer__control d-flex align-items-center justify-content-center mr-2"
                    disabled={!activeTask} >
                    <Icon path={mdiStop} size={1} />
                </Button>
                <Button
                    onClick={onPlayOrPause}
                    className="footer__control d-flex align-items-center justify-content-center mr-2"
                    disabled={!activeTask} >
                    <Icon path={isRunning ? mdiPause : mdiPlay} size={1} />
                </Button>
                <Button
                    onClick={onRefresh}
                    className="footer__control d-flex align-items-center justify-content-center"
                    disabled={!activeTask} >
                    <Icon path={mdiRefresh} size={1} />
                </Button>
            </div>
            <p className="footer__counter mb-0">
                {formatTaskTime(taskTime)}
            </p>
            <p className="footer__task mb-0 w-100 d-inline-block text-truncate">
                <strong>{activeTask?.title || '-'}</strong>
            </p>
            <Button onClick={onComplete} className="ml-auto" size="sm" disabled={!activeTask}>Completar</Button>
        </div>
    );
};

export default TaskTimer;
