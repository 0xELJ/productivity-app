import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlay, mdiStop, mdiRefresh } from '@mdi/js';

const Footer: FC = () => {
    return (
        <div className="footer fixed-bottom bg-light border-top border-secondary">
            <div className="footer__timer d-flex align-items-center px-5 py-2">
                <Button className="footer__control">
                    <Icon path={mdiStop} size={1} />
                </Button>
                <Button className="footer__control">
                    <Icon path={mdiPlay} size={1} />
                </Button>
                <Button className="footer__control">
                    <Icon path={mdiRefresh} size={1} />
                </Button>
                <h6 className="mb-0 font-weight-light">00:55:53</h6>
                <h5 className="mb-0">Nombre de tarea 1</h5>
                <Button className="ml-auto">Completar</Button>
            </div>
        </div>
    );
};

export default Footer;
