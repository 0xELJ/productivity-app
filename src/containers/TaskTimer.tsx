import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlay, mdiPause, mdiRefresh, mdiStop } from '@mdi/js';
import { connect } from 'react-redux';
import { Task } from '../types/Task';
import { formatTaskTime } from '../utils/formatTaskTime';
import activeTaskSelector from '../selectors/activeTaskSelector';
import { TaskTime } from '../types/TaskTime';
import { useInterval } from '../hooks/useInterval';
import { completeTask, updateTask } from '../actions/tasks';
import { TaskTimerProps } from '../types/TaskTimerProps';

const TaskTimer: FC<TaskTimerProps> = ({ activeTask, finishTask, patchTask }) => {
    const [taskTime, setTaskTime] = useState<TaskTime>({hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (activeTask?.timeLeft) {
            setTaskTime(activeTask.timeLeft);
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
        patchTask({ ...currentTask, timeLeft: customTime || taskTime });
    };

    return (
        <div className="footer__timer d-flex align-items-center px-3 py-2">
            <Button
                onClick={onStop}
                className="footer__control d-flex align-items-center justify-content-center"
                disabled={!activeTask} >
                <Icon path={mdiStop} size={0.8} />
            </Button>
            <Button
                onClick={onPlayOrPause}
                className="footer__control d-flex align-items-center justify-content-center"
                disabled={!activeTask} >
                <Icon path={isRunning ? mdiPause : mdiPlay} size={0.8} />
            </Button>
            <Button
                onClick={onRefresh}
                className="footer__control d-flex align-items-center justify-content-center"
                disabled={!activeTask} >
                <Icon path={mdiRefresh} size={0.8} />
            </Button>
            <p className="footer__counter mb-0">
                {formatTaskTime(taskTime)}
            </p>
            <p className="footer__task mb-0 w-100 d-inline-block text-truncate">
                <strong>{activeTask?.name || '-'}</strong>
            </p>
            <Button onClick={onComplete} className="ml-auto" size="sm" disabled={!activeTask}>Completar</Button>
        </div>
    );
};

const mapStateToProps = (state: { tasks: Task[] }) => ({ activeTask: activeTaskSelector(state) });

export default connect(mapStateToProps, {
    finishTask: completeTask,
    patchTask: updateTask
})(TaskTimer);
