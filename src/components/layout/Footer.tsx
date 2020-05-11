import React, { FC } from 'react';
import TaskTimer from '../../containers/TaskTimer';

const Footer: FC = () => {
    return (
        <section className="footer fixed-bottom px-3 bg-light border-top border-secondary">
            <TaskTimer />
        </section>
    );
};

export default Footer;
