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

const TaskTimer: FC<{ activeTask: Task }> = ({ activeTask }) => {
    const [taskTime, setTaskTime] = useState<TaskTime>({hours: 0, minutes: 0, seconds: 0 });
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (activeTask?.timeLeft) {
            setTaskTime(activeTask.timeLeft);
        }
    }, [activeTask]);

    useInterval(() => {
        const { hours, minutes, seconds } = taskTime;

        if (seconds > 0) {
            setTaskTime({hours, minutes, seconds: seconds - 1})
        }
        if (seconds === 0) {
            if (minutes === 0 && hours === 0) {
                setIsRunning(false);
            } else {
                setTaskTime({ hours, minutes: minutes - 1, seconds: 59 })
            }
        }
        if (minutes === 0) {
            if (hours === 0) {
                setIsRunning(false);
            } else {
                setTaskTime({ hours: hours - 1, minutes: 59, seconds: 59 });
            }
        }
    }, isRunning ? 1000 : 0);

    const playOrPause = () => {
        setIsRunning(!isRunning);
    };

    const stop = () => {
        setIsRunning(false);
        setTaskTime(activeTask.durationTime);
    };

    return (
        <div className="footer__timer d-flex align-items-center px-3 py-2">
            <Button className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={mdiStop} size={1} className="footer__icon" />
            </Button>
            <Button onClick={playOrPause} className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={isRunning ? mdiPause : mdiPlay} size={1} />
            </Button>
            <Button onClick={stop} className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={mdiRefresh} size={1} />
            </Button>
            <p className="mb-0 footer__counter">
                {formatTaskTime(taskTime)}
            </p>
            <p className="mb-0 footer__task"><strong>{activeTask ? activeTask.name : '-'}</strong></p>
            <Button className="ml-auto">Completar</Button>
        </div>
    );
};

const mapStateToProps = (state: { tasks: Task[] }) => ({ activeTask: activeTaskSelector(state) });

export default connect(mapStateToProps)(TaskTimer);
