import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPlay, mdiStop, mdiRefresh } from '@mdi/js';

const Footer: FC = () => {
    return (
        <section className="footer fixed-bottom px-3 bg-light border-top border-secondary">
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
                <p className="mb-0 footer__counter">00:55:53</p>
                <p className="mb-0 footer__task"><strong>Nombre de tarea 1</strong></p>
                <Button className="ml-auto">Completar</Button>
            </div>
        </section>
    );
};

export default Footer;
