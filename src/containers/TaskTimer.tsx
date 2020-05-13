import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlay, mdiRefresh, mdiStop } from '@mdi/js';
import { connect } from 'react-redux';
import { Task } from '../types/Task';
import { TasksState } from '../types/TasksState';
import { formatTaskTime } from '../utils/formatTaskTime';

const TaskTimer: FC<{ activeTask: Task }> = ({ activeTask: { name, timeLeft} }) => {
    return (
        <div className="footer__timer d-flex align-items-center px-3 py-2">
            <Button className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={mdiStop} size={1} className="footer__icon" />
            </Button>
            <Button className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={mdiPlay} size={1} />
            </Button>
            <Button className="footer__control d-flex align-items-center justify-content-center">
                <Icon path={mdiRefresh} size={1} />
            </Button>
            <p className="mb-0 footer__counter">
                {formatTaskTime(timeLeft)}
            </p>
            <p className="mb-0 footer__task"><strong>{name}</strong></p>
            <Button className="ml-auto">Completar</Button>
        </div>
    );
};

const mapStateToProps = (state: { tasks: TasksState }) => ({ activeTask: state.tasks.pending[0] });

export default connect(mapStateToProps)(TaskTimer);
