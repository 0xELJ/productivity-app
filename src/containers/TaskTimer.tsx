import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlay, mdiRefresh, mdiStop } from '@mdi/js';
import { connect } from 'react-redux';
import { Task } from '../types/Task';

const TaskTimer: FC<{ activeTask: Task }> = props => {
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
            <p className="mb-0 footer__counter">{props.activeTask.timeLeft}</p>
            <p className="mb-0 footer__task"><strong>{props.activeTask.name}</strong></p>
            <Button className="ml-auto">Completar</Button>
        </div>
    );
};

const mapStateToProps = (state: any) => ({ activeTask: state.activeTask });

export default connect(mapStateToProps)(TaskTimer);
